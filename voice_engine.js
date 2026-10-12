// ==========================================================
// GospelSwipe Pro — English Male / Female Voice Engine  v2.1.1
// One English voice for the whole app (slides, devotionals,
// Living Faith, Ask AI, audio mode). Female sounds female.
// Male sounds male. Prefers the most natural system voice
// on the phone (Google / Microsoft / Samsung / Apple) and
// never novelty / eSpeak / compact robot voices.
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
  _voicesReady: false,
  _genderMatched: true
};

const GS_EN_LANGS = ['en-US', 'en-GB', 'en-AU', 'en-NG', 'en-IN', 'en-IE', 'en-ZA', 'en'];

// Android Google TTS gender codes (inside voiceURI / name)
const GS_ANDROID_FEMALE = /en-[a-z]{2}-x-(sfg|tpf|iob|rbd|gba|fis|gbc|auc|afc|dfc|cfc|tfn)/i;
const GS_ANDROID_MALE   = /en-[a-z]{2}-x-(tpd|iol|gbb|rbc|aub|afb|dfg|tnn|iom)/i;

const GS_FEMALE_RE = /female|woman|girl|samantha|moira|tessa|karen|aria|jenny|sonia|libby|hazel|susan|zira|emma|michelle|nicky|victoria|martha|heera|linda|fiona|veena|serena|kate|amy|joanna|ivy|kendra|kimberly|salli|nicole|raveena|aditi|vicki|allison|ava|eva|marie|julie|pauline|amelie|audrey|claire|denise|eloise|nathalie|sara|samantha|zira|lisa|helen|anna|google us english$|google uk english female|microsoft (aria|jenny|sonia|ana|emma|libby|sara|zira)|samsung.*(female|woman)/i;

const GS_MALE_RE = /male|man|guy|boy|david|daniel|mark|ryan|andrew|george|fred|alex|thomas|james|brian|matthew|justin|joey|geraint|russell|ravi|aaron|nathan|arthur|oliver|tom|richard|paul|steffan|christopher|eric|tony|google uk english male|microsoft (david|guy|ryan|andrew|christopher|eric|steffan|mark|tony)|samsung.*(male|man)/i;

const GS_NATURAL_RE = /natural|neural|google|enhanced|premium|samantha|moira|tessa|karen|daniel|aria|jenny|guy|sonia|libby|wavenet|studio|journey|neural2|online|wavenet|standard|network/i;

const GS_AVOID_RE = /eSpeak|compact|robot|dummy|whisper|novelty|bad news|good news|bells|boing|bubbles|cellos|old man|superstar|trinoids|zarvox|organ|princess|junior|kathy|albert|trinoids|bahh|boing|deranged|hysterical|pipe organ|whisper/i;

function gsEnsureVoices(cb) {
  if (!('speechSynthesis' in window)) { if (cb) cb([]); return; }
  const grab = () => {
    const list = window.speechSynthesis.getVoices() || [];
    if (list.length) {
      GSVoice._voices = list;
      GSVoice._voicesReady = true;
      gsSanitizeSavedVoice();
    }
    if (cb) cb(GSVoice._voices);
  };
  grab();
  if (!GSVoice._voicesReady) {
    window.speechSynthesis.addEventListener('voiceschanged', function once() {
      grab();
      window.speechSynthesis.removeEventListener('voiceschanged', once);
      gsPopulateVoiceSelect();
      gsSyncGenderButtons();
    });
    try { window.speechSynthesis.getVoices(); } catch (e) {}
    setTimeout(grab, 250);
    setTimeout(() => { grab(); gsPopulateVoiceSelect(); }, 900);
  }
}

function gsAllVoices() {
  return (GSVoice._voices.length ? GSVoice._voices : (window.speechSynthesis ? speechSynthesis.getVoices() : [])) || [];
}

function gsIsEnglish(v) {
  if (!v) return false;
  const lang = String(v.lang || '').toLowerCase();
  const name = String(v.name || '').toLowerCase();
  const uri  = String(v.voiceURI || '').toLowerCase();
  if (lang.startsWith('en')) return true;
  if (/\benglish\b/.test(name)) return true;
  if (/(^|[^a-z])en[-_](us|gb|au|in|ng|ie|za)/.test(uri + ' ' + name)) return true;
  return false;
}

function gsEnglishVoices() {
  return gsAllVoices().filter(v => gsIsEnglish(v) && !GS_AVOID_RE.test(v.name || ''));
}

function gsGuessGender(v) {
  const n = ((v && v.name) || '') + ' ' + ((v && v.voiceURI) || '') + ' ' + ((v && v.lang) || '');
  if (GS_ANDROID_FEMALE.test(n)) return 'female';
  if (GS_ANDROID_MALE.test(n)) return 'male';
  if (GS_FEMALE_RE.test(n)) return 'female';
  if (GS_MALE_RE.test(n)) return 'male';
  return 'other';
}

function gsVoiceGenderPref() {
  const g = localStorage.getItem('gsVoiceGender');
  return (g === 'male' || g === 'female') ? g : 'female';
}

function gsScoreEnglishVoice(v, gender) {
  if (!v || !gsIsEnglish(v)) return -999;
  if (GS_AVOID_RE.test(v.name || '')) return -200;
  const n = ((v.name || '') + ' ' + (v.voiceURI || '')).toLowerCase();
  const lang = String(v.lang || '').toLowerCase();
  let score = 10;
  if (lang === 'en-us' || lang.startsWith('en-us')) score += 18;
  else if (lang === 'en-gb' || lang.startsWith('en-gb')) score += 16;
  else if (lang.startsWith('en-au') || lang.startsWith('en-ie')) score += 10;
  else if (lang.startsWith('en-ng')) score += 6;
  else if (lang.startsWith('en')) score += 8;

  const g = gsGuessGender(v);
  if (gender && g === gender) score += 55;
  else if (gender && g !== 'other' && g !== gender) score -= 70;
  else if (gender && g === 'other') score -= 8;

  if (GS_NATURAL_RE.test(n)) score += 24;
  if (/google/.test(n)) score += 20;
  if (/microsoft/.test(n)) score += 16;
  if (/samsung|apple|samantha|daniel|moira|aria|jenny/.test(n)) score += 14;
  if (/network|online|neural|wavenet|studio|premium|enhanced/.test(n)) score += 12;
  if (v.localService) score += 6;
  if (/compact|espeak/.test(n)) score -= 80;
  return score;
}

function gsBestEnglishVoice() {
  const list = gsEnglishVoices();
  const pool = list.length ? list : gsAllVoices().filter(v => !GS_AVOID_RE.test(v.name || ''));
  let best = null, bestScore = -1000;
  pool.forEach(v => {
    const s = gsScoreEnglishVoice(v, null);
    if (s > bestScore) { bestScore = s; best = v; }
  });
  GSVoice._genderMatched = true;
  return best || pool[0] || null;
}

function gsSanitizeSavedVoice() {
  const saved = localStorage.getItem('gsVoiceURI');
  if (!saved) return;
  const voices = gsAllVoices();
  if (!voices.length) return;
  const hit = voices.find(v => v.voiceURI === saved);
  if (!hit || !gsIsEnglish(hit) || GS_AVOID_RE.test(hit.name || '')) {
    localStorage.removeItem('gsVoiceURI');
  }
}

/** THE one voice used everywhere — most natural English on this phone. */
function gsPickVoice() {
  const voices = gsAllVoices();
  const saved = localStorage.getItem('gsVoiceURI');
  if (saved) {
    const hit = voices.find(v => v.voiceURI === saved);
    if (hit && gsIsEnglish(hit) && !GS_AVOID_RE.test(hit.name || '')) {
      return hit;
    }
  }
  const best = gsBestEnglishVoice();
  if (best) {
    try { localStorage.setItem('gsVoiceURI', best.voiceURI); } catch (e) {}
  }
  return best || voices[0] || null;
}

function gsLockVoice(uri, gender) {
  if (uri) localStorage.setItem('gsVoiceURI', uri);
  else localStorage.removeItem('gsVoiceURI');
  if (gender) localStorage.setItem('gsVoiceGender', gender);
}

function gsSetGender() {
  /* Gender split removed — one natural English voice. */
  gsPreviewCurrent();
}

function gsSpokenRef(ref) {
  if (!ref) return '';
  const s = String(ref);
  return s.replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'chapter $1, verses $2 to $3')
          .replace(/(\d+)\s*:\s*(\d+)/g, 'chapter $1, verse $2');
}

function gsHumanize(text) {
  if (!text) return '';
  let s = String(text);
  s = s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, ' ');
  s = s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  s = s.replace(/[—–]/g, ', ');
  s = s.replace(/\s+\.\.\./g, '.');
  s = s.replace(/\s{2,}/g, ' ');
  s = s.replace(/\s+([,.;:!?])/g, '$1');
  s = s.replace(/; /g, '. ');
  s = s.replace(/\s+\/\s+/g, ', ');
  return s.trim();
}

function gsSplitChunks(text) {
  const clean = gsHumanize(text);
  if (!clean) return [];
  const parts = clean.split(/(?<=[.!?؟。])\s+/).map(p => p.trim()).filter(Boolean);
  const chunks = [];
  parts.forEach(p => {
    if (p.length <= 180) chunks.push(p);
    else {
      const bits = p.split(/,\s+/);
      let buf = '';
      bits.forEach(b => {
        if ((buf + ', ' + b).length > 170 && buf) { chunks.push(buf); buf = b; }
        else buf = buf ? buf + ', ' + b : b;
      });
      if (buf) chunks.push(buf);
    }
  });
  return chunks.length ? chunks : [clean];
}

function gsRate() {
  const raw = parseFloat(document.getElementById('voiceSpeed')?.value || localStorage.getItem('gsVoiceRate') || '0.95');
  // Keep it conversational — rushed audio is what makes TTS sound like a robot
  if (raw <= 0.85) return 0.80;
  if (raw <= 1.05) return 0.92;
  if (raw <= 1.3) return 1.02;
  return 1.10;
}

function gsPitch() {
  return 1.0;
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
      showToast((typeof t === 'function' && t('audioComplete')) || 'Reading complete', 'success');
    }
    return;
  }
  const chunk = GSVoice.queue[GSVoice.idx++];
  gsShowPlayer(GSVoice.currentLabel, chunk);
  const utt = new SpeechSynthesisUtterance(chunk);
  const voice = gsPickVoice('en');
  if (voice) {
    utt.voice = voice;
    utt.lang = voice.lang || 'en-US';
  } else {
    utt.lang = 'en-US';
  }
  utt.rate = gsRate();
  utt.pitch = gsPitch();
  utt.volume = 1;
  GSVoice._utt = utt;
  utt.onend = () => {
    if (!GSVoice.speaking) return;
    GSVoice._pauseTimer = setTimeout(gsSpeakNext, 380);
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
  setTimeout(gsSpeakNext, 80);
}

function gsSpeakSections(sections, opts) {
  opts = opts || {};
  const bits = [];
  (sections || []).forEach(sec => {
    if (!sec || !sec.text) return;
    gsSplitChunks(gsHumanize(sec.text)).forEach(c => bits.push(c));
  });
  if (!bits.length) return;
  gsSpeak(bits.join('. '), opts);
}

function gsPopulateVoiceSelect() {
  const sel = document.getElementById('voiceSelect');
  if (!sel) return;
  gsEnsureVoices(voices => {
    gsSanitizeSavedVoice();
    const saved = localStorage.getItem('gsVoiceURI') || '';
    const gender = gsVoiceGenderPref();
    const autoLabel = gender === 'male'
      ? ((typeof t === 'function' && t('voiceAutoMale')) || 'Auto — most natural English male')
      : ((typeof t === 'function' && t('voiceAutoFemale')) || 'Auto — most natural English female');
    const english = gsEnglishVoices();
    const groups = { female: [], male: [] };
    english.forEach(v => {
      const g = gsGuessGender(v);
      if (g === 'female') groups.female.push(v);
      else if (g === 'male') groups.male.push(v);
    });
    // Unisex English voices still listed under the active gender so the user can try them
    english.forEach(v => {
      if (gsGuessGender(v) === 'other') groups[gender].push(v);
    });
    const opt = (v) => {
      const o = document.createElement('option');
      o.value = v.voiceURI;
      o.textContent = v.name + (v.lang ? ' · ' + v.lang : '');
      if (v.voiceURI === saved) o.selected = true;
      return o;
    };
    sel.innerHTML = '';
    const auto = document.createElement('option');
    auto.value = '';
    auto.textContent = autoLabel;
    if (!saved) auto.selected = true;
    sel.appendChild(auto);
    const shown = groups[gender] || [];
    shown
      .slice()
      .sort((a, b) => gsScoreEnglishVoice(b, gender) - gsScoreEnglishVoice(a, gender))
      .forEach(v => sel.appendChild(opt(v)));
    if (saved) {
      const exists = Array.from(sel.options).some(o => o.value === saved);
      if (exists) sel.value = saved;
    }
  });
  gsSyncGenderButtons();
}

function gsSyncGenderButtons() {
  const g = gsVoiceGenderPref();
  const f = document.getElementById('gsGenderF');
  const m = document.getElementById('gsGenderM');
  if (f) f.classList.toggle('active', g === 'female');
  if (m) m.classList.toggle('active', g === 'male');
}

function gsPreviewCurrent() {
  const gender = gsVoiceGenderPref();
  const preview = gender === 'male'
    ? 'The Lord is my shepherd. I lack nothing. He makes me lie down in green pastures.'
    : 'The Lord is my shepherd. I lack nothing. He makes me lie down in green pastures.';
  gsSpeak(preview, { label: (typeof t === 'function' && t('voicePreview')) || 'Preview' });
}

function gsOnVoiceSelectChange() {
  const sel = document.getElementById('voiceSelect');
  if (!sel) return;
  if (sel.value) {
    localStorage.setItem('gsVoiceURI', sel.value);
    const v = gsAllVoices().find(x => x.voiceURI === sel.value);
    if (v) {
      const g = gsGuessGender(v);
      if (g === 'female' || g === 'male') localStorage.setItem('gsVoiceGender', g);
    }
  } else {
    localStorage.removeItem('gsVoiceURI');
  }
  gsSyncGenderButtons();
  if (typeof showToast === 'function') showToast((typeof t === 'function' && t('audioVoiceUpdated')) || 'Voice updated', 'success');
  gsPreviewCurrent();
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
window.gsSetGender = gsSetGender;
window.gsSyncGenderButtons = gsSyncGenderButtons;
window.gsAllVoices = gsAllVoices;
window.gsPreviewCurrent = gsPreviewCurrent;
window.gsBestEnglishVoice = gsBestEnglishVoice;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    gsEnsureVoices(() => { gsPopulateVoiceSelect(); gsSyncGenderButtons(); });
    setTimeout(() => { gsPopulateVoiceSelect(); gsSyncGenderButtons(); }, 1200);
  });
}
