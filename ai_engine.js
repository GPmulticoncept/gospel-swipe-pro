// ==========================================================
// GospelSwipe Pro — Ask AI (offline pastoral engine)  v2.1.1
// Answers in all 8 app languages. Content: ai_i18n.js
// Question chips sit in a thin isolated left/right scroller
// so they never cover the answer.
// ==========================================================

function gsEsc(s) {
  if (s == null) return '';
  const d = document.createElement('div');
  d.textContent = String(s);
  return d.innerHTML;
}

const GS_AI_KB = (typeof GS_AI_I18N !== 'undefined' ? GS_AI_I18N : []).map(e => Object.assign({ keywords: e.keywords || '' }, e));

function gsAiLang() {
  return (typeof AppState !== 'undefined' && AppState.language) || 'en';
}

function gsAiPick(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  const lang = gsAiLang();
  return obj[lang] || obj.en || '';
}

function gsAiNorm(s) {
  return String(s || '').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function gsAiTokens(s) {
  return gsAiNorm(s).split(' ').filter(w => w.length > 2);
}

function gsAiScoreEntry(entry, query) {
  const q = gsAiNorm(query);
  if (!q) return 0;
  let score = 0;
  const allQ = entry.q && typeof entry.q === 'object' ? Object.values(entry.q).join(' ') : gsAiPick(entry.q);
  const allA = entry.answer && typeof entry.answer === 'object' ? Object.values(entry.answer).join(' ') : gsAiPick(entry.answer);
  const hay = gsAiNorm(
    (entry.keywords || '') + ' ' +
    allQ + ' ' +
    allA + ' ' +
    (entry.id || '')
  );
  if (entry.id && q.replace(/\s+/g, '-') === entry.id) score += 100;
  if (hay.includes(q)) score += 40;
  gsAiTokens(q).forEach(tok => {
    if (hay.includes(tok)) score += 6;
    if ((entry.keywords || '').toLowerCase().includes(tok)) score += 4;
  });
  return score;
}

function gsAiSearchLocal(query) {
  const qtok = gsAiTokens(query);
  if (!qtok.length) return [];
  const hits = [];
  try {
    const slides = (typeof AppState !== 'undefined' && AppState.contentData && AppState.contentData.slides) || [];
    slides.forEach(s => {
      const loc = (typeof getSlideInLanguage === 'function') ? getSlideInLanguage(s) : s;
      const hay = gsAiNorm((loc.title || '') + ' ' + (loc.verse || '') + ' ' + (s.topic || ''));
      const sc = qtok.filter(tok => hay.includes(tok)).length;
      if (sc) hits.push({ kind: 'slide', score: sc * 5, title: loc.title, text: loc.verse, ref: loc.reference });
    });
  } catch (e) {}
  try {
    const list = (typeof getLocalizedDevotionals === 'function') ? getLocalizedDevotionals() : [];
    list.slice(0, 56).forEach(d => {
      const hay = gsAiNorm((d.title || '') + ' ' + (d.reflection || '') + ' ' + (d.verse || ''));
      const sc = qtok.filter(tok => hay.includes(tok)).length;
      if (sc >= 2) hits.push({ kind: 'devo', score: sc * 3, title: d.title, text: d.reflection, ref: d.ref });
    });
  } catch (e) {}
  try {
    const list = (typeof getLocalizedLivingFaith === 'function') ? getLocalizedLivingFaith() : [];
    list.forEach(f => {
      const hay = gsAiNorm((f.thought || '') + ' ' + (f.question || '') + ' ' + (f.verse || ''));
      const sc = qtok.filter(tok => hay.includes(tok)).length;
      if (sc >= 2) hits.push({ kind: 'lf', score: sc * 3, title: (typeof t === 'function' && t('livingFaithCardTitle')) || 'Living Faith', text: f.thought, ref: f.ref });
    });
  } catch (e) {}
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, 2);
}

function gsAiResolve(query, topicId) {
  let best = null, bestScore = -1;
  GS_AI_KB.forEach(e => {
    let sc = gsAiScoreEntry(e, query || '');
    if (topicId && e.id === topicId) sc += 80;
    if (sc > bestScore) { bestScore = sc; best = e; }
  });
  if (topicId && !query) {
    best = GS_AI_KB.find(e => e.id === topicId) || best;
    bestScore = 80;
  }
  const extras = gsAiSearchLocal(query || gsAiPick(best && best.q));
  if (!best || bestScore < 4) {
    return { kind: 'weak', extras, query };
  }
  return { kind: 'hit', entry: best, extras, query };
}

function gsAiRelated(entry) {
  return GS_AI_KB.filter(s => s.id !== (entry && entry.id)).slice(0, 8);
}

function gsAiScrollChip(chip, row) {
  if (!chip || !row) return;
  try {
    const left = chip.offsetLeft - (row.clientWidth - chip.offsetWidth) / 2;
    if (typeof row.scrollTo === 'function') {
      row.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    } else {
      row.scrollLeft = Math.max(0, left);
    }
  } catch (e) {}
}

function gsAiEnsureOverlay() {
  const form = document.getElementById('gsAiForm');
  if (!form || form._wired) return;
  form._wired = true;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = (document.getElementById('gsAiInput').value || '').trim();
    if (q) gsAiAsk(q);
  });
  const closeBtn = document.getElementById('gsAiClose');
  if (closeBtn) closeBtn.addEventListener('click', closeAskAI);
}

function gsAiI18nChrome() {
  const T = (k, d) => (typeof t === 'function' && t(k)) || d;
  const title = document.getElementById('gsAiTitle');
  const sub = document.getElementById('gsAiSub');
  const input = document.getElementById('gsAiInput');
  if (title) title.textContent = T('askAIHeading', 'Ask about the gospel');
  if (sub) sub.textContent = T('askAISubtitle', 'Offline answers from Scripture. No tracking.');
  if (input) input.placeholder = T('askAIPlaceholder', 'Ask anything — suffering, salvation, Jesus...');
  const chips = document.getElementById('gsAiChips');
  if (chips) {
    chips.innerHTML = GS_AI_KB.map(s => {
      const label = gsAiPick(s.q);
      return `<button type="button" class="gs-ai-chip" data-aid="${s.id}" role="listitem">${gsEsc(label)}</button>`;
    }).join('');
    chips.querySelectorAll('[data-aid]').forEach(btn => {
      btn.addEventListener('click', () => gsAiAsk(btn.textContent, btn.dataset.aid));
    });
  }
}

function gsAiRenderResult(res) {
  const body = document.getElementById('gsAiBody');
  if (!body) return;
  const T = (k, d) => (typeof t === 'function' && t(k)) || d;
  if (res.kind === 'weak') {
    const extras = (res.extras || []).map(x => `
      <div class="gs-ai-extra">
        <div class="gs-ai-kicker">${gsEsc(x.title || '')}</div>
        <p>${gsEsc(x.text || '')}</p>
        <div class="gs-ai-ref">${gsEsc(x.ref || '')}</div>
      </div>`).join('');
    body.innerHTML = `
      <div class="gs-ai-card">
        <p>${gsEsc(T('askAINoMatch', 'I do not have a full answer for that yet — but here is the nearest Scripture we carry offline. Keep asking; the Spirit is not limited to this list.'))}</p>
        ${extras || ''}
      </div>`;
    return;
  }
  const e = res.entry;
  const q = gsAiPick(e.q);
  const ans = gsAiPick(e.answer);
  const vText = gsAiPick(e.verse && e.verse.text);
  const vRef = gsAiPick(e.verse && e.verse.ref);
  const live = gsAiPick(e.live);
  const paras = ans.split(/\n\n+/).map(p => `<p>${gsEsc(p)}</p>`).join('');
  const rel = gsAiRelated(e).map(s => {
    const label = gsAiPick(s.q);
    return `<button type="button" class="gs-ai-chip" data-aid="${s.id}">${gsEsc(label)}</button>`;
  }).join('');
  const extras = (res.extras || []).slice(0, 1).map(x => `
    <div class="gs-ai-extra">
      <div class="gs-ai-kicker">${gsEsc(T('askAIAlsoInApp', 'Also in this app'))}</div>
      <p>${gsEsc((x.text || '').slice(0, 220))}${x.text && x.text.length > 220 ? '…' : ''}</p>
      <div class="gs-ai-ref">${gsEsc(x.ref || '')}</div>
    </div>`).join('');
  body.innerHTML = `
    <div class="gs-ai-card">
      <div class="gs-ai-q">${gsEsc(q)}</div>
      <div class="gs-ai-ans">${paras}</div>
      <div class="gs-ai-verse">
        <div class="gs-ai-kicker">${gsEsc(T('askAIScripture', 'Scripture'))}</div>
        <p>“${gsEsc(vText)}”</p>
        <div class="gs-ai-ref">${gsEsc(vRef)}</div>
      </div>
      <div class="gs-ai-live">
        <div class="gs-ai-kicker">${gsEsc(T('askAILiveIt', 'Walk it out'))}</div>
        <p>${gsEsc(live)}</p>
      </div>
      ${extras}
      <div class="gs-ai-actions">
        <button type="button" class="gs-ai-act primary" id="gsAiListen"><i class="fas fa-volume-up"></i> ${gsEsc(T('askAIListen', 'Listen'))}</button>
        <button type="button" class="gs-ai-act" id="gsAiShare"><i class="fas fa-share-alt"></i> ${gsEsc(T('share', 'Share'))}</button>
        <button type="button" class="gs-ai-act" id="gsAiCopy"><i class="fas fa-copy"></i> ${gsEsc(T('askAICopy', 'Copy'))}</button>
      </div>
      <div class="gs-ai-kicker" style="margin-top:16px;">${gsEsc(T('askAIRelated', 'Ask next'))}</div>
      <div class="gs-ai-related">${rel}</div>
    </div>`;
  const speakText = [q, ans, vText, vRef, live].filter(Boolean).join('. ');
  const listenBtn = document.getElementById('gsAiListen');
  if (listenBtn) listenBtn.onclick = () => {
    if (typeof GSVoice !== 'undefined' && GSVoice.speaking) { gsStop(); listenBtn.innerHTML = `<i class="fas fa-volume-up"></i> ${T('askAIListen', 'Listen')}`; }
    else {
      gsSpeak(speakText, { label: T('askAIHeading', 'Ask AI') });
      listenBtn.innerHTML = `<i class="fas fa-stop"></i> ${T('voiceStop', 'Stop')}`;
    }
  };
  const shareBtn = document.getElementById('gsAiShare');
  if (shareBtn) shareBtn.onclick = () => {
    const msg = `✝️ ${q}\n\n${ans.split('\n\n')[0]}\n\n📖 ${vText} — ${vRef}\n\n📱 GospelSwipe Pro — gospelswipe.app`;
    if (navigator.share) navigator.share({ title: q, text: msg }).catch(() => window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank'));
    else window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
  };
  const copyBtn = document.getElementById('gsAiCopy');
  if (copyBtn) copyBtn.onclick = () => {
    const blob = `${q}\n\n${ans}\n\n${vText} — ${vRef}\n\n${live}`;
    if (typeof copyToClipboard === 'function') copyToClipboard(blob);
    if (typeof showToast === 'function') showToast(T('linkCopied', 'Copied'), 'success');
  };
  body.querySelectorAll('.gs-ai-related [data-aid]').forEach(btn => {
    btn.addEventListener('click', () => gsAiAsk(btn.textContent, btn.dataset.aid));
  });
  const row = document.getElementById('gsAiChips');
  const active = row && row.querySelector(`[data-aid="${e.id}"]`);
  if (active && row) {
    row.querySelectorAll('.gs-ai-chip').forEach(c => c.classList.remove('on'));
    active.classList.add('on');
    gsAiScrollChip(active, row);
  }
}

function gsAiAsk(query, topicId) {
  const input = document.getElementById('gsAiInput');
  if (input && query) input.value = query;
  const res = gsAiResolve(query, topicId);
  window._gsAiLastQuery = query || '';
  window._gsAiLastTopic = topicId || (res && res.entry && res.entry.id) || '';
  gsAiRenderResult(res);
  if (typeof AppState !== 'undefined') {
    AppState.userStats = AppState.userStats || {};
    AppState.userStats.aiQuestions = (AppState.userStats.aiQuestions || 0) + 1;
    if (typeof refreshStats === 'function') refreshStats();
  }
  if (typeof vibrate === 'function') vibrate(20);
  const body = document.getElementById('gsAiBody');
  if (body) body.scrollTop = 0;
}

function openAskAI(seed) {
  gsAiEnsureOverlay();
  gsAiI18nChrome();
  if (typeof showScreen === 'function') showScreen('askai-screen');
  const input = document.getElementById('gsAiInput');
  if (typeof seed === 'string' && seed && GS_AI_KB.some(e => e.id === seed)) {
    const e = GS_AI_KB.find(x => x.id === seed);
    gsAiAsk(gsAiPick(e.q), seed);
  } else if (typeof seed === 'string' && seed) {
    gsAiAsk(seed);
  } else {
    const body = document.getElementById('gsAiBody');
    if (body) body.innerHTML = `<p class="gs-ai-hint">${gsEsc((typeof t === 'function' && t('askAITry')) || 'Pick a question or type your own. Works fully offline.')}</p>`;
    gsAiAsk(gsAiPick(GS_AI_KB[0].q), 'god-love');
  }
  setTimeout(() => { if (input) input.focus(); }, 280);
}

function closeAskAI() {
  if (typeof gsStop === 'function') gsStop();
  if (typeof showScreen === 'function') showScreen('home-screen');
}

function askAI(topic) {
  openAskAI(topic || '');
}

window.openAskAI = openAskAI;
window.closeAskAI = closeAskAI;
window.askAI = askAI;
window.gsAiAsk = gsAiAsk;
window.gsAiI18nChrome = gsAiI18nChrome;
window.GS_AI_KB = GS_AI_KB;
