// ==========================================================
// GospelSwipe Pro — Human Voice Engine
// Offline device TTS, tuned to sound like a person reading
// Scripture: natural voice pick, sentence pacing, spoken refs,
// pause/resume, mini-player. No network. No API key.
// ==========================================================

const GSVoice = {
  queue: [],
  idx: 0,
  speaking: false,
  paused: false,
  currentLabel: '',
  _utt: null,
  _pauseTimer: null,
  _voices: [],
  _voicesReady: false
};

const GS_LANG_BCP = {
  en: ['en-NG', 'en-GB', 'en-US', 'en-AU', 'en'],
  yo: ['yo-NG', 'yo', 'en-NG', 'en-GB', 'en-US', 'en'],
  ig: ['ig-NG', 'ig', 'en-NG', 'en-GB', 'en'],
  ha: ['ha-NG', 'ha', 'en-NG', 'en-GB', 'en'],
  pcm: ['en-NG', 'en-GB', 'en-US', 'en'],
  fr: ['fr-FR', 'fr-CA', 'fr'],
  sw: ['sw-TZ', 'sw-KE', 'sw', 'en-GB', 'en'],
  ar: ['ar-SA', 'ar-EG', 'ar-AE', 'ar']
};

const GS_NATURAL_RE = /natural|neural|google|enhanced|premium|premium|samantha|moira|tessa|karen|daniel|fred|alex|victoria|martha|aria|jenny|guy|sonia|libby|raveena|hazel|george|susan|zira|david|mark|ryan|andrew|emma|michelle|nicky|wavenet|studio|journey|neural2/i;
const GS_AVOID_RE = /eSpeak|compact|robot|dummy|whisper|novelty|bad news|good news|bells|boing|bubbles|cellos|old man|superstar|trinoids|zarvox|organ|princess|junior|kathy|albert/i;

function gsEnsureVoices(cb) {
  if (!('speechSynthesis' in window)) { if (cb) cb([]); return; }
  const grab = () => {
    const list = window.speechSynthesis.getVoices() || [];
    if (list.length) {
      GSVoice._voices = list;
      GSVoice._voicesReady = true;
    }
    if (cb) cb(GSVoice._voices);
  };
  grab();
  if (!GSVoice._voicesReady) {
    window.speechSynthesis.addEventListener('voiceschanged', function once() {
      grab();
      window.speechSynthesis.removeEventListener('voiceschanged', once);
    });
    // Chrome sometimes needs a kick
    try { window.speechSynthesis.getVoices(); } catch (e) {}
    setTimeout(grab, 250);
    setTimeout(grab, 900);
  }
}

function gsScoreVoice(v, lang) {
  if (!v) return -1;
  if (GS_AVOID_RE.test(v.name || '')) return -100;
  const prefs = GS_LANG_BCP[lang] || GS_LANG_BCP.en;
  const vl = (v.lang || '').toLowerCase();
  let score = 0;
  prefs.forEach((p, i) => {
    const pl = p.toLowerCase();
    if (vl === pl) score += 80 - i * 4;
    else if (vl.startsWith(pl)) score += 50 - i * 3;
  });
  if (GS_NATURAL_RE.test(v.name || '')) score += 40;
  if (/google/i.test(v.name || '')) score += 18;
  if (/microsoft/i.test(v.name || '')) score += 12;
  if (/apple|samantha|moira|daniel|karen/i.test(v.name || '')) score += 16;
  if (v.localService) score += 6; // more reliable offline
  if (/female|woman|aria|jenny|samantha|moira|tessa|karen|sonia|libby|hazel|susan|zira|emma/i.test(v.name || '')) score += 4;
  return score;
}

function gsPickVoice(lang) {
  const saved = localStorage.getItem('gsVoiceURI');
  const voices = GSVoice._voices.length ? GSVoice._voices : (window.speechSynthesis ? speechSynthesis.getVoices() : []);
  if (saved) {
    const hit = voices.find(v => v.voiceURI === saved);
    if (hit) return hit;
  }
  const L = lang || (typeof AppState !== 'undefined' && AppState.language) || 'en';
  let best = null, bestScore = -1;
  voices.forEach(v => {
    const s = gsScoreVoice(v, L);
    if (s > bestScore) { bestScore = s; best = v; }
  });
  return best || voices[0] || null;
}

function gsSpokenRef(ref) {
  if (!ref) return '';
  return String(ref)
    .replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'chapter $1, verses $2 to $3')
    .replace(/(\d+)\s*:\s*(\d+)/g, 'chapter $1, verse $2');
}

function gsHumanize(text) {
  if (!text) return '';
  let s = String(text);
  s = s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  s = s.replace(/[—–]/g, ', ');
  s = s.replace(/\s+\.\.\./g, '.');
  s = s.replace(/\s{2,}/g, ' ');
  s = s.replace(/\s+([,.;:!?])/g, '$1');
  // Help the engine breathe at clause boundaries
  s = s.replace(/; /g, '. ');
  return s.trim();
}

function gsSplitChunks(text) {
  const clean = gsHumanize(text);
  if (!clean) return [];
  const parts = clean.split(/(?<=[.!?])\s+/).map(p => p.trim()).filter(Boolean);
  const chunks = [];
  parts.forEach(p => {
    if (p.length <= 220) chunks.push(p);
    else {
      const bits = p.split(/,\s+/);
      let buf = '';
      bits.forEach(b => {
        if ((buf + ', ' + b).length > 200 && buf) { chunks.push(buf); buf = b; }
        else buf = buf ? buf + ', ' + b : b;
      });
      if (buf) chunks.push(buf);
    }
  });
  return chunks.length ? chunks : [clean];
}

function gsRate() {
  const raw = parseFloat(document.getElementById('voiceSpeed')?.value || localStorage.getItem('gsVoiceRate') || '0.95');
  // Map UI 0.8/1/1.25/1.5 onto a more human band
  if (raw <= 0.85) return 0.82;
  if (raw <= 1.05) return 0.94;
  if (raw <= 1.3) return 1.08;
  return 1.18;
}

function gsPitch(lang) {
  if (lang === 'ar') return 1.0;
  if (lang === 'fr') return 1.04;
  return 1.03;
}

function gsEnsurePlayer() {
  if (document.getElementById('gsVoicePlayer')) return;
  const el = document.createElement('div');
  el.id = 'gsVoicePlayer';
  el.className = 'gs-voice-player';
  el.setAttribute('aria-live', 'polite');
  el.innerHTML = `
    <div class="gs-vp-wave" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
    <div class="gs-vp-copy">
      <div class="gs-vp-kicker" id="gsVpKicker">Now reading</div>
      <div class="gs-vp-line" id="gsVpLine"></div>
    </div>
    <div class="gs-vp-btns">
      <button type="button" class="gs-vp-btn" id="gsVpPause" aria-label="Pause"><i class="fas fa-pause"></i></button>
      <button type="button" class="gs-vp-btn gs-vp-stop" id="gsVpStop" aria-label="Stop"><i class="fas fa-stop"></i></button>
    </div>`;
  document.body.appendChild(el);
  el.querySelector('#gsVpPause').addEventListener('click', () => {
    if (GSVoice.paused) gsResume(); else gsPause();
  });
  el.querySelector('#gsVpStop').addEventListener('click', () => gsStop());
}

function gsShowPlayer(label, line) {
  gsEnsurePlayer();
  const el = document.getElementById('gsVoicePlayer');
  const kicker = document.getElementById('gsVpKicker');
  const lineEl = document.getElementById('gsVpLine');
  if (kicker) kicker.textContent = (typeof t === 'function' ? (t('voiceNowReading') || 'Now reading') : 'Now reading') + (label ? ' · ' + label : '');
  if (lineEl) lineEl.textContent = line || '';
  el.classList.add('show');
  const pauseBtn = document.getElementById('gsVpPause');
  if (pauseBtn) pauseBtn.innerHTML = GSVoice.paused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
}

function gsHidePlayer() {
  const el = document.getElementById('gsVoicePlayer');
  if (el) el.classList.remove('show');
}

function gsStop() {
  GSVoice.speaking = false;
  GSVoice.paused = false;
  GSVoice.queue = [];
  GSVoice.idx = 0;
  GSVoice._utt = null;
  clearTimeout(GSVoice._pauseTimer);
  try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  gsHidePlayer();
  if (typeof AppState !== 'undefined') AppState.speechSynthesisActive = false;
  if (typeof updateAudioModeUI === 'function') updateAudioModeUI(false);
}

function gsPause() {
  if (!GSVoice.speaking) return;
  GSVoice.paused = true;
  try { speechSynthesis.pause(); } catch (e) {}
  const pauseBtn = document.getElementById('gsVpPause');
  if (pauseBtn) pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function gsResume() {
  if (!GSVoice.speaking) return;
  GSVoice.paused = false;
  try { speechSynthesis.resume(); } catch (e) {}
  // Some Android Chrome pause/resume is broken — restart current chunk
  setTimeout(() => {
    if (GSVoice.speaking && GSVoice.paused === false && speechSynthesis.paused) {
      try { speechSynthesis.resume(); } catch (e) {}
    }
  }, 120);
  const pauseBtn = document.getElementById('gsVpPause');
  if (pauseBtn) pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function gsSpeakNext() {
  if (!GSVoice.speaking) return;
  if (GSVoice.idx >= GSVoice.queue.length) {
    const done = GSVoice.queue.length > 0;
    gsStop();
    if (done && typeof showToast === 'function') {
      showToast((typeof t === 'function' && t('audioComplete')) || '✅ Reading complete', 'success');
    }
    return;
  }
  const chunk = GSVoice.queue[GSVoice.idx++];
  gsShowPlayer(GSVoice.currentLabel, chunk);
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const utt = new SpeechSynthesisUtterance(chunk);
  const voice = gsPickVoice(lang);
  if (voice) {
    utt.voice = voice;
    utt.lang = voice.lang || (GS_LANG_BCP[lang] || ['en-US'])[0];
  } else {
    utt.lang = (GS_LANG_BCP[lang] || ['en-US'])[0];
  }
  utt.rate = gsRate();
  utt.pitch = gsPitch(lang);
  utt.volume = 1;
  GSVoice._utt = utt;
  utt.onend = () => {
    if (!GSVoice.speaking) return;
    GSVoice._pauseTimer = setTimeout(gsSpeakNext, 280);
  };
  utt.onerror = () => {
    if (!GSVoice.speaking) return;
    GSVoice._pauseTimer = setTimeout(gsSpeakNext, 80);
  };
  try { speechSynthesis.speak(utt); }
  catch (e) { GSVoice._pauseTimer = setTimeout(gsSpeakNext, 80); }
}

function gsSpeak(text, opts) {
  opts = opts || {};
  if (!('speechSynthesis' in window)) {
    if (typeof showToast === 'function') showToast((typeof t === 'function' && t('voiceUnavailable')) || 'Voice not available on this device', 'info');
    return;
  }
  gsEnsureVoices();
  gsStop();
  const chunks = gsSplitChunks(text);
  if (!chunks.length) return;
  GSVoice.queue = chunks;
  GSVoice.idx = 0;
  GSVoice.speaking = true;
  GSVoice.paused = false;
  GSVoice.currentLabel = opts.label || '';
  if (typeof AppState !== 'undefined') AppState.speechSynthesisActive = true;
  if (typeof updateAudioModeUI === 'function') updateAudioModeUI(true);
  if (typeof vibrate === 'function') vibrate(20);
  // Tiny delay lets cancel() flush on Chrome
  setTimeout(gsSpeakNext, 60);
}

function gsSpeakSections(sections, opts) {
  // sections: [{label, text}] — extra pause between sections
  opts = opts || {};
  const bits = [];
  (sections || []).forEach(sec => {
    if (!sec || !sec.text) return;
    const body = gsHumanize(sec.text);
    if (!body) return;
    gsSplitChunks(body).forEach(c => bits.push(c));
    bits.push('\u200A'); // hair-space marker — skipped visually, still a beat via empty skip
  });
  const cleaned = bits.filter(b => b && b.trim() && b !== '\u200A');
  if (!cleaned.length) return;
  gsSpeak(cleaned.join('. '), opts);
}

function gsPopulateVoiceSelect() {
  const sel = document.getElementById('voiceSelect');
  if (!sel) return;
  gsEnsureVoices(voices => {
    const saved = localStorage.getItem('gsVoiceURI') || '';
    const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
    const autoLabel = (typeof t === 'function' && t('voiceAutoBest')) || 'Auto — most natural';
    sel.innerHTML = `<option value="">${autoLabel}</option>`;
    const ranked = voices.slice().sort((a, b) => gsScoreVoice(b, lang) - gsScoreVoice(a, lang));
    ranked.slice(0, 18).forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.voiceURI;
      opt.textContent = v.name + (v.lang ? ' · ' + v.lang : '');
      if (v.voiceURI === saved) opt.selected = true;
      sel.appendChild(opt);
    });
    if (saved) sel.value = saved;
  });
}

function gsOnVoiceSelectChange() {
  const sel = document.getElementById('voiceSelect');
  if (!sel) return;
  if (sel.value) localStorage.setItem('gsVoiceURI', sel.value);
  else localStorage.removeItem('gsVoiceURI');
  if (typeof showToast === 'function') showToast((typeof t === 'function' && t('audioVoiceUpdated')) || 'Voice updated', 'success');
  // Preview a short line so they hear the difference
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const preview = {
    en: 'The Lord is my shepherd. I lack nothing.',
    yo: 'Olúwa ni Olùṣọ́-àgùntàn mi. Èmi kì yóò ṣe aláìní.',
    ig: 'Onyenwe anyị bụ ọzụzụ atụrụ m. Ọ dịghị ihe m na-agụ.',
    ha: 'Ubangiji ne makiyayina. Ba ni rasa komai.',
    pcm: 'The Lord na my shepherd. I no dey lack anything.',
    fr: 'L\'Éternel est mon berger: je ne manquerai de rien.',
    sw: 'Bwana ndiye mchungaji wangu, sitapungukiwa na kitu.',
    ar: 'الرب راعي فلا يعوزني شيء.'
  };
  gsSpeak(preview[lang] || preview.en, { label: (typeof t === 'function' && t('voicePreview')) || 'Preview' });
}

window.GSVoice = GSVoice;
window.gsSpeak = gsSpeak;
window.gsSpeakSections = gsSpeakSections;
window.gsStop = gsStop;
window.gsPause = gsPause;
window.gsResume = gsResume;
window.gsPickVoice = gsPickVoice;
window.gsSpokenRef = gsSpokenRef;
window.gsPopulateVoiceSelect = gsPopulateVoiceSelect;
window.gsOnVoiceSelectChange = gsOnVoiceSelectChange;
window.gsEnsureVoices = gsEnsureVoices;
window.gsHumanize = gsHumanize;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    gsEnsureVoices(() => gsPopulateVoiceSelect());
    setTimeout(() => gsPopulateVoiceSelect(), 1200);
  });
}
