// ==========================================================
// GOSPEL TRACTS i18n — CORE LOADER
// This file must be loaded BEFORE any tracts_i18n_*.js batch file, and
// BEFORE app.js. Each batch file (e.g. tracts_i18n_struggle_p1.js) merges
// its translated tracts into the shared TRACTS_I18N_ALL registry below.
// As more categories get translated over time, just add more batch files —
// no changes needed here or in app.js.
// ==========================================================
const TRACTS_I18N_ALL = {};

// Call this from each batch file to register its translations:
//   mergeTractsI18n(TRACTS_I18N_STRUGGLE_P1);
function mergeTractsI18n(batch) {
  for (const lang in batch) {
    TRACTS_I18N_ALL[lang] = Object.assign(TRACTS_I18N_ALL[lang] || {}, batch[lang]);
  }
}

// Returns GOSPEL_TRACTS with hook/body/repentance/prayer swapped to the
// current language wherever a translation exists. Tracts not yet translated
// simply fall back to their original English text — nothing breaks.
function getLocalizedTracts() {
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  const base = typeof GOSPEL_TRACTS !== 'undefined' ? GOSPEL_TRACTS : [];
  const overrides = TRACTS_I18N_ALL[lang] || {};
  if (!Object.keys(overrides).length) return base;
  return base.map(tr => {
    const o = overrides[tr.id];
    return o ? Object.assign({}, tr, o) : tr;
  });
}