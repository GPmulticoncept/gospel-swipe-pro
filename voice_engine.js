// ==========================================================
// GospelSwipe Pro — One Voice Engine
// Uses the device's system voices as the only database.
// The voice you pick (or Auto + Female/Male) is used everywhere:
// slides, devotionals, Living Faith, Ask AI, audio mode.
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
  en: ['en-NG', 'en-GB', 'en-US', 'en-AU', 'en-IN', 'en'],
  yo: ['yo-NG', 'yo', 'en-NG', 'en-GB', 'en-US', 'en'],
  ig: ['ig-NG', 'ig', 'en-NG', 'en-GB', 'en'],
  ha: ['ha-NG', 'ha', 'en-NG', 'en-GB', 'en'],
  pcm: ['en-NG', 'en-GB', 'en-US', 'en'],
  fr: ['fr-FR', 'fr-CA', 'fr-BE', 'fr'],
  sw: ['sw-TZ', 'sw-KE', 'sw', 'en-GB', 'en'],
  ar: ['ar-SA', 'ar-EG', 'ar-AE', 'ar-MA', 'ar']
};

const GS_FEMALE_RE = /female|woman|girl|samantha|moira|tessa|karen|aria|jenny|sonia|libby|hazel|susan|zira|emma|michelle|nicky|victoria|martha|heera|linda|fiona|veena|serena|kate|amy|joanna|ivy|kendra|kimberly|salli|nicole|raveena|aditi|vicki|allison|ava|susan|zira|eva|marie|julie|pauline|amelie|audrey|claire|denise|eloise|nathalie|brigitte|celine|chantal|cosima|hedda|helena|katja|petra|gisela|ingrid|nora|liv|alva|klara|soothe|wavenet-c|wavenet-f|neural.*female|google.*(us|uk).*female/i;
const GS_MALE_RE = /male|man|guy|boy|david|daniel|mark|ryan|andrew|george|fred|alex|thomas|james|brian|matthew|justin|joey|geraint|russell|ravi|aaron|nathan|arthur|oliver|tom|richard|paul|jorge|diego|juan|pierre|thomas|bernard|claude|henri|jacques|louis|nicolas|philippe|sebastien|stephan|yannick|wavenet-b|wavenet-d|neural.*male|google.*(us|uk).*male/i;
const GS_NATURAL_RE = /natural|neural|google|enhanced|premium|samantha|moira|tessa|karen|daniel|aria|jenny|guy|sonia|libby|wavenet|studio|journey|neural2|online/i;
const GS_AVOID_RE = /eSpeak|compact|robot|dummy|whisper|novelty|bad news|good news|bells|boing|bubbles|cellos|old man|superstar|trinoids|zarvox|organ|princess|junior|kathy|albert|trinoids/i;

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

function gsGuessGender(v) {
  const n = ((v && v.name) || '') + ' ' + ((v && v.voiceURI) || '');
  if (GS_FEMALE_RE.test(n)) return 'female';
  if (GS_MALE_RE.test(n)) return 'male';
  return 'other';
}

function gsVoiceGenderPref() {
  return localStorage.getItem('gsVoiceGender') || 'female';
}

function gsScoreVoice(v, lang, gender) {
  if (!v) return -1;
  if (GS_AVOID_RE.test(v.name || '')) return -80;
  const prefs = GS_LANG_BCP[lang] || GS_LANG_BCP.en;
  const vl = (v.lang || '').toLowerCase();
  let score = 0;
  prefs.forEach((p, i) => {
    const pl = p.toLowerCase();
    if (vl === pl) score += 90 - i * 4;
    else if (vl.startsWith(pl.split('-')[0])) score += 48 - i * 3;
  });
  const g = gsGuessGender(v);
  if (gender && g === gender) score += 35;
  else if (gender && g !== 'other' && g !== gender) score -= 25;
  if (GS_NATURAL_RE.test(v.name || '')) score += 28;
  if (/google/i.test(v.name || '')) score += 14;
  if (/microsoft/i.test(v.name || '')) score += 10;
  if (v.localService) score += 5;
  return score;
}

/** THE one voice used everywhere in the app. */
function gsPickVoice(lang) {
  const voices = gsAllVoices();
  const saved = localStorage.getItem('gsVoiceURI');
  if (saved) {
    const hit = voices.find(v => v.voiceURI === saved);
    if (hit) return hit;
  }
  const L = lang || (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const gender = gsVoiceGenderPref();
  let best = null, bestScore = -1;
  voices.forEach(v => {
    const s = gsScoreVoice(v, L, gender);
    if (s > bestScore) { bestScore = s; best = v; }
  });
  return best || voices[0] || null;
}

function gsLockVoice(uri, gender) {
  if (uri) localStorage.setItem('gsVoiceURI', uri);
  else localStorage.removeItem('gsVoiceURI');
  if (gender) localStorage.setItem('gsVoiceGender', gender);
}

function gsSetGender(gender) {
  localStorage.setItem('gsVoiceGender', gender);
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const voices = gsAllVoices();
  let best = null, bestScore = -1;
  voices.forEach(v => {
    const s = gsScoreVoice(v, lang, gender);
    if (s > bestScore) { bestScore = s; best = v; }
  });
  if (best) localStorage.setItem('gsVoiceURI', best.voiceURI);
  gsSyncGenderButtons();
  gsPopulateVoiceSelect();
  gsPreviewCurrent();
  if (typeof showToast === 'function') {
    const label = gender === 'male'
      ? ((typeof t === 'function' && t('voiceMale')) || 'Male')
      : ((typeof t === 'function' && t('voiceFemale')) || 'Female');
    showToast((typeof t === 'function' && t('audioVoiceUpdated')) || 'Voice updated: ' + label, 'success');
  }
}

function gsSpokenRef(ref) {
  if (!ref) return '';
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const s = String(ref);
  if (lang === 'fr') {
    return s.replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'chapitre $1, versets $2 à $3')
            .replace(/(\d+)\s*:\s*(\d+)/g, 'chapitre $1, verset $2');
  }
  if (lang === 'yo') {
    return s.replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'orí $1, ẹsẹ $2 sí $3')
            .replace(/(\d+)\s*:\s*(\d+)/g, 'orí $1, ẹsẹ $2');
  }
  if (lang === 'ar') {
    return s.replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'الإصحاح $1، الأعداد $2 إلى $3')
            .replace(/(\d+)\s*:\s*(\d+)/g, 'الإصحاح $1، العدد $2');
  }
  return s.replace(/(\d+)\s*:\s*(\d+)\s*[-–—]\s*(\d+)/g, 'chapter $1, verses $2 to $3')
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
  s = s.replace(/; /g, '. ');
  return s.trim();
}

function gsSplitChunks(text) {
  const clean = gsHumanize(text);
  if (!clean) return [];
  const parts = clean.split(/(?<=[.!?؟。])\s+/).map(p => p.trim()).filter(Boolean);
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
  if (raw <= 0.85) return 0.82;
  if (raw <= 1.05) return 0.94;
  if (raw <= 1.3) return 1.08;
  return 1.18;
}

function gsPitch() {
  return gsVoiceGenderPref() === 'male' ? 0.97 : 1.04;
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
  utt.pitch = gsPitch();
  utt.volume = 1;
  GSVoice._utt = utt;
  utt.onend = () => {
    if (!GSVoice.speaking) return;
    GSVoice._pauseTimer = setTimeout(gsSpeakNext, 260);
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
  setTimeout(gsSpeakNext, 60);
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
    const saved = localStorage.getItem('gsVoiceURI') || '';
    const autoLabel = (typeof t === 'function' && t('voiceAutoBest')) || 'Auto — match language + gender';
    const fLab = (typeof t === 'function' && t('voiceFemale')) || 'Female';
    const mLab = (typeof t === 'function' && t('voiceMale')) || 'Male';
    const oLab = (typeof t === 'function' && t('voiceOther')) || 'Other';
    const groups = { female: [], male: [], other: [] };
    voices.forEach(v => groups[gsGuessGender(v)].push(v));
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
    [['female', fLab], ['male', mLab], ['other', oLab]].forEach(([key, lab]) => {
      if (!groups[key].length) return;
      const g = document.createElement('optgroup');
      g.label = lab;
      groups[key]
        .slice()
        .sort((a, b) => (a.lang || '').localeCompare(b.lang || '') || a.name.localeCompare(b.name))
        .forEach(v => g.appendChild(opt(v)));
      sel.appendChild(g);
    });
    if (saved) sel.value = saved;
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
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const preview = {
    en: 'The Lord is my shepherd. I lack nothing.',
    yo: 'Olúwa ni Olùṣọ́-àgùntàn mi. Èmi kì yóò ṣe aláìní.',
    ig: 'Onyenwe anyị bụ ọzụzụ atụrụ m. Ọ dịghị ihe m na-agụ.',
    ha: 'Ubangiji ne makiyayina. Ba ni rasa komai.',
    pcm: 'The Lord na my shepherd. I no dey lack anything.',
    fr: "L'Éternel est mon berger: je ne manquerai de rien.",
    sw: 'Bwana ndiye mchungaji wangu, sitapungukiwa na kitu.',
    ar: 'الرب راعي فلا يعوزني شيء.'
  };
  gsSpeak(preview[lang] || preview.en, { label: (typeof t === 'function' && t('voicePreview')) || 'Preview' });
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

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    gsEnsureVoices(() => { gsPopulateVoiceSelect(); gsSyncGenderButtons(); });
    setTimeout(() => { gsPopulateVoiceSelect(); gsSyncGenderButtons(); }, 1200);
  });
}
