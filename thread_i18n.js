// ==========================================================
// THE THREAD — Yoruba content (v2.2.1)
// Titles, taglines, summaries and teaching notes in Yoruba.
// Verse bodies stay in the English already shipped in thread.js
// so we do not invent a Yoruba Bible text. Book names in refs
// are localized. Other languages fall back to English.
// ==========================================================
const THREAD_I18N = {
  yo: {
  "lamb": {
    "title": "Ọ̀dọ́-Àgùntàn",
    "tagline": "Láti pẹpẹ Ébélì títí dé ìtẹ́ ọ̀run",
    "summary": "Ẹbọ ọ̀dọ́-àgùntàn jẹ́ àwòrán àtijọ́ jù lọ nínú Ìwé Mímọ́. Ó bẹ̀rẹ̀ pẹ̀lú ikú àkọ́kọ́ ní Édẹ́nì, ó dé ìkọ̀kàn ní Kálfárì, ó sì parí pẹ̀lú Ọ̀dọ́-Àgùntàn tí a pa, tí ó ṣì dúró ní àárín ìtẹ́ Ọlọ́run.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 4:4",
        "text": "Ébélì náà mú ọrẹ wá — ọ̀rá nínú àwọn àkọ́bí agbo rẹ̀. Olúwa wo Ébélì àti ọrẹ rẹ̀ lójú rere.",
        "note": "Ẹbọ àkọ́kọ́ — ẹ̀jẹ̀ tí a fi ìgbàgbọ́ rú, tí Ọlọ́run gbà."
      },
      {
        "ref": "Jẹ́nẹ́sísì 22:8",
        "text": "Ábúráhámù dáhùn pé, Ọlọ́run fúnra Rẹ̀ ni yóò pèsè ọ̀dọ́-àgùntàn ẹbọ sísun, ọmọ mi.",
        "note": "Ábúráhámù sọtẹ́lẹ̀ láì mọ̀ — Ọlọ́run fúnra Rẹ̀ ni yóò pèsè Ọ̀dọ́-Àgùntàn."
      },
      {
        "ref": "Ẹ́ksódù 12:13",
        "text": "Ẹ̀jẹ̀ náà yóò jẹ́ ààmì fún yín lórí àwọn ilé níbi tí ẹ wà, nígbà tí mo bá rí ẹ̀jẹ̀ náà, èmi yóò rékọjá yín.",
        "note": "Ọ̀dọ́-àgùntàn ìrékọjá — ẹ̀jẹ̀ lórí ìlẹ̀kùn, ikú kò wọlé."
      },
      {
        "ref": "Aísáyà 53:7",
        "text": "Wọ́n pọ́n ọn lára, wọ́n sì pọ́n ọn, síbẹ̀ kò ṣí ẹnu rẹ̀; wọ́n mú un lọ bí ọ̀dọ́-àgùntàn sí ibi ìpàjẹ.",
        "note": "Ẹgbẹ̀rún ọdún méje ṣáájú Kálfárì, Aísáyà rí ìránṣẹ́ tí ń jìyà."
      },
      {
        "ref": "Jòhánù 1:29",
        "text": "Wò ó, Ọ̀dọ́-Àgùntàn Ọlọ́run, ẹni tí ń mú ẹ̀ṣẹ̀ ayé lọ!",
        "note": "Jòhánù onítẹ̀bọmi fi hàn pé gbogbo ẹbọ ti kún."
      },
      {
        "ref": "Ìfihàn 5:12",
        "text": "Ní ohùn rara wọ́n ń wí pé: Ọ̀dọ́-Àgùntàn tí a pa yẹ láti gba agbára àti ọrọ̀ àti ọgbọ́n àti agbára àti ọlá àti ògo àti ìyìn!",
        "note": "Ọ̀dọ́-Àgùntàn kì í ṣe ẹni tí a ṣẹ́gun. Ó ń ṣàkóso títí ayérayé."
      }
    ]
  },
  "bread": {
    "title": "Àkàrà Ìyè",
    "tagline": "Láti mánà nínú aginjù títí dé tábìlì ayérayé",
    "summary": "Ọlọ́run ti ń bọ́ àwọn ènìyàn Rẹ̀ nígbà gbogbo pẹ̀lú oúnjẹ tí kò ti ọwọ́ wọn wá. Mánà jẹ́ gidi ṣùgbọ́n ó ṣẹ̀dá. Àkàrà tí Jésù ń fúnni kì í ṣe fún ọjọ́ kan — Òun fúnra Rẹ̀ ni.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 16:15",
        "text": "Nígbà tí àwọn ọmọ Ísírẹ́lì rí i, wọ́n bi ara wọn pé, Kí ni èyí? Nítorí wọn kò mọ̀ ọ́n. Mósè sọ fún wọn pé, Àkàrà tí Olúwa fi fún yín láti jẹ ni.",
        "note": "Mánà — ìyanu, lojoojúmọ́, láti ọ̀run. Àwòrán ohun tó tóbi jù."
      },
      {
        "ref": "Dẹuterónómì 8:3",
        "text": "Ó rẹ yín sílẹ̀, Ó jẹ́ kí ẹ ṣe òùngbẹ, lẹ́yìn náà Ó bọ́ yín pẹ̀lú mánà... láti kọ́ yín pé ènìyàn kì í yè ní àkàrà nìkan ṣùgbọ́n ní gbogbo ọ̀rọ̀ tí ó jáde lẹ́nu Ọlọ́run.",
        "note": "Mósè tọ́ka kọjá mánà sí oúnjẹ gidi — Ọ̀rọ̀ Ọlọ́run."
      },
      {
        "ref": "Sáàmù 78:24-25",
        "text": "Ó rọ mánà sílẹ̀ fún àwọn ènìyàn láti jẹ, Ó fún wọn ní ọkà ọ̀run. Àwọn ènìyàn jẹ àkàrà àwọn áńgẹ́lì.",
        "note": "Sáàmù pe mánà ní àkàrà àwọn áńgẹ́lì."
      },
      {
        "ref": "Jòhánù 6:35",
        "text": "Jésù wí pé, Èmi ni àkàrà ìyè. Ẹnikẹ́ni tí ó bá wá sọ́dọ̀ mi kì yóò ṣe òùngbẹ mọ́, ẹni tí ó bá gbàgbọ́ nínú mi kì yóò ṣe òùngbẹ omi mọ́.",
        "note": "Jésù sọ pé Òun ni ohun tí mánà ń tọ́ka sí."
      },
      {
        "ref": "Jòhánù 6:51",
        "text": "Èmi ni àkàrà ìyè tí ó sọ̀kalẹ̀ láti ọ̀run. Ẹnikẹ́ni tí ó bá jẹ àkàrà yìí yóò yè títí láé. Àkàrà yìí ni ẹran-ara mi, tí n ó fi fún ìyè ayé.",
        "note": "Mánà dúró fún ọjọ́ kan. Àkàrà yìí fún ni ìyè ayérayé."
      },
      {
        "ref": "1 Kọ́ríntì 11:26",
        "text": "Nítorí nígbàkígbà tí ẹ bá jẹ àkàrà yìí, tí ẹ mu ago yìí, ẹ ń kéde ikú Olúwa títí tí yóò fi dé.",
        "note": "Àkàrà ìrántí — a ń jẹ, a ń rántí, títí tí yóò fi dé."
      }
    ]
  },
  "water": {
    "title": "Omi Ìyè",
    "tagline": "Láti àpáta nínú aginjù títí dé odò tí ń sàn láti ìtẹ́",
    "summary": "Omi ni ìyè — Ọlọ́run sì ti ń pèsè rẹ̀ lọ́nà ìyanu. Ṣùgbọ́n gbogbo orísun nínú Ìwé Mímọ́ ń tọ́ka sí òùngbẹ jíjìn tí Ọlọ́run nìkan lè tẹ́ lọ́rùn. Jésù kì í ṣe olùfúnni omi nìkan. Òun ni orísun.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 17:6",
        "text": "Lu àpáta, omi yóò jáde kí àwọn ènìyàn lè mu. Bẹ́ẹ̀ ni Mósè ṣe lójú àwọn àgbà Ísírẹ́lì.",
        "note": "Omi láti inú àpáta — ìyè láti ibi tí kò ṣeé retí, tí a kọlù."
      },
      {
        "ref": "Sáàmù 42:1-2",
        "text": "Gẹ́gẹ́ bí àgbọ̀nrín ṣe ń ṣe òùngbẹ odò, bẹ́ẹ̀ ni ọkàn mi ń ṣe òùngbẹ rẹ, Ọlọ́run mi. Ọkàn mi ń ṣe òùngbẹ Ọlọ́run, Ọlọ́run ìyè.",
        "note": "Dáfídì sọ òùngbẹ ara di ìfẹ́ ọkàn fún Ọlọ́run."
      },
      {
        "ref": "Aísáyà 55:1",
        "text": "Ẹ wá, gbogbo ẹ̀yin tí ẹ ń ṣe òùngbẹ, ẹ wá sí omi; ẹ̀yin tí ẹ kò ní owó, ẹ wá, ẹ ra, ẹ jẹ!",
        "note": "Ìpè náà kò ní owó — omi láìsí iye fún ẹni tó ń ṣe òùngbẹ."
      },
      {
        "ref": "Jeremáyà 2:13",
        "text": "Àwọn ènìyàn mi ṣẹ̀ ẹ̀ṣẹ̀ méjì: Wọ́n fi mí sílẹ̀, orísun omi ìyè, wọ́n sì ṣí kòtò tiwọn, kòtò tó fọ́ tí kò lè pa omi mọ́.",
        "note": "Ọlọ́run ṣàlàyé iṣòro wa — a kọ orísun sílẹ̀, a ṣí kòtò tí kò le pa omi mọ́."
      },
      {
        "ref": "Jòhánù 4:13-14",
        "text": "Jésù dáhùn pé, Ẹnikẹ́ni tí ó bá mu omi yìí yóò ṣe òùngbẹ lẹ́ẹ̀kan sí i, ṣùgbọ́n ẹni tí ó bá mu omi tí èmi yóò fún un kì yóò ṣe òùngbẹ mọ́.",
        "note": "Jésù lẹ́bàá kànga — omi mìíràn tún jẹ́ kí o ṣe òùngbẹ."
      },
      {
        "ref": "Ìfihàn 22:1",
        "text": "Lẹ́yìn náà áńgẹ́lì fi odò omi ìyè hàn mí, tó mọ́ bí kirisitalia, tó ń sàn láti ìtẹ́ Ọlọ́run àti Ọ̀dọ́-Àgùntàn.",
        "note": "Àwòrán ìkẹyìn — odò ayérayé, tí ń sàn láti ìtẹ́ Ọ̀dọ́-Àgùntàn."
      }
    ]
  },
  "light": {
    "title": "Ìmọ́lẹ̀ àti Òkùnkùn",
    "tagline": "Láti ọ̀rọ̀ àkọ́kọ́ ìṣẹ̀dá títí dé ìlú tí kò nílò oòrùn",
    "summary": "Iṣẹ́ àkọ́kọ́ Ọlọ́run ni láti dá ìmọ́lẹ̀. Iṣẹ́ ìkẹyìn Rẹ̀ ni láti di ìmọ́lẹ̀ náà. Láàárín ìgbà méjèèjì, ìmọ́lẹ̀ àti òkùnkùn ń jagun lórí ojú ìwé kọ̀ọ̀kan — ìyọrísí sì ti pinnu ní agbelebu.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 1:3",
        "text": "Ọlọ́run sì wí pé, Jẹ́ kí ìmọ́lẹ̀ kí ó wà, ìmọ́lẹ̀ sì wà.",
        "note": "Kí ohunkóhun tó wà, Ọlọ́run dá ìmọ́lẹ̀ — ọ̀rọ̀ ìṣẹ̀dá àkọ́kọ́ Rẹ̀."
      },
      {
        "ref": "Sáàmù 27:1",
        "text": "Olúwa ni ìmọ́lẹ̀ mi àti ìgbàlà mi — ta ni n ó bẹ̀rù?",
        "note": "Dáfídì rí i pé Ọlọ́run kì í ṣe Ẹlẹ́dàá ìmọ́lẹ̀ nìkan — Òun ni ìmọ́lẹ̀."
      },
      {
        "ref": "Aísáyà 9:2",
        "text": "Àwọn ènìyàn tí ń rìn nínú òkùnkùn ti rí ìmọ́lẹ̀ ńlá; lórí àwọn tó ń gbé ní ilẹ̀ òkùnkùn jíjìn, ìmọ́lẹ̀ ti là.",
        "note": "Ẹgbẹ̀rún ọdún méje ṣáájú Bẹ́tílẹ́hẹ́mù — ìmọ́lẹ̀ ńlá ń bọ̀."
      },
      {
        "ref": "Jòhánù 1:4-5",
        "text": "Ìyè wà nínú rẹ̀, ìyè yẹn sì ni ìmọ́lẹ̀ gbogbo ènìyàn. Ìmọ́lẹ̀ ń tàn nínú òkùnkùn, òkùnkùn kò sì ṣẹ́gun rẹ̀.",
        "note": "Jòhánù so Ọ̀rọ̀ pọ̀ mọ́ ìmọ́lẹ̀ — èdè kan náà pẹ̀lú Jẹ́nẹ́sísì 1."
      },
      {
        "ref": "Jòhánù 8:12",
        "text": "Jésù tún sọ fún àwọn ènìyàn pé, Èmi ni ìmọ́lẹ̀ ayé. Ẹnikẹ́ni tí ó bá tẹ̀lé mi kì yóò rìn nínú òkùnkùn.",
        "note": "Jésù sọ ọ́ gbangba — Òun ni ohun tí gbogbo àwòrán ń tọ́ka sí."
      },
      {
        "ref": "Ìfihàn 21:23",
        "text": "Ìlú náà kò nílò oòrùn tàbí òṣùpá láti tàn, nítorí ògo Ọlọ́run ni ìmọ́lẹ̀ rẹ̀, Ọ̀dọ́-Àgùntàn sì ni fìtílà rẹ̀.",
        "note": "Ìlú ìkẹyìn kò ní oòrùn — Ọlọ́run fúnra Rẹ̀ ni ìmọ́lẹ̀."
      }
    ]
  },
  "covenant": {
    "title": "Májèmú",
    "tagline": "Láti òṣùmàrè títí dé ìlérí tí ẹ̀jẹ̀ fi èdìdì sí fún ayérayé",
    "summary": "Ọlọ́run jẹ́ Ọlọ́run májẹ̀mú. Májẹ̀mú kọ̀ọ̀kan nínú Ìwé Mímọ́ jẹ́ ìgbésẹ̀ nínú ìtàn kan — Ọlọ́run tí ń de ara Rẹ̀ mọ́ àwọn ènìyàn, títí májẹ̀mú ìkẹyìn tí a kọ sí ọkàn, tí a fi ẹ̀jẹ̀ tirẹ̀ èdìdì sí.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 9:13",
        "text": "Mo ti gbé òṣùmàrè mi sínú àwọsánmà, yóò sì jẹ́ ààmì májẹ̀mú láàárín èmi àti ayé.",
        "note": "Májẹ̀mú àkọ́kọ́ — ìṣẹ̀dá wà, ìlérí nínú àwọ̀."
      },
      {
        "ref": "Jẹ́nẹ́sísì 17:7",
        "text": "Èmi yóò fi májẹ̀mú mi múlẹ̀ gẹ́gẹ́ bí májẹ̀mú ayérayé láàárín èmi àti ìwọ àti irú-ọmọ rẹ lẹ́yìn rẹ, láti jẹ́ Ọlọ́run rẹ.",
        "note": "Májẹ̀mú Ábúráhámù — àwọn ènìyàn, ilẹ̀, ìbùkún fún orílẹ̀-èdè gbogbo."
      },
      {
        "ref": "Ẹ́ksódù 24:8",
        "text": "Mósè mú ẹ̀jẹ̀, ó wọ́n ọn sórí àwọn ènìyàn, ó sì wí pé, Èyí ni ẹ̀jẹ̀ májẹ̀mú tí Olúwa ṣe pẹ̀lú yín gẹ́gẹ́ bí ọ̀rọ̀ wọ̀nyí.",
        "note": "Májẹ̀mú Sínáì — òfin lórí òkúta, ènìyàn kan tí a yà sọ́tọ̀."
      },
      {
        "ref": "Jeremáyà 31:33",
        "text": "Èyí ni májẹ̀mú tí n ó ṣe pẹ̀lú àwọn ènìyàn Ísírẹ́lì lẹ́yìn ìgbà yẹn, ni Olúwa wí. N ó fi òfin mi sínú ọkàn wọn, n ó sì kọ ọ́ sí ọkàn-àyà wọn.",
        "note": "Májẹ̀mú Dáfídì — ìtẹ́ tí kì yóò bàjẹ́."
      },
      {
        "ref": "Lúùkù 22:20",
        "text": "Bákan náà lẹ́yìn oúnjẹ alẹ́, ó mú ago, ó wí pé, Ago yìí ni májẹ̀mú tuntun nínú ẹ̀jẹ̀ mi, tí a dà sílẹ̀ fún yín.",
        "note": "Jeremáyà sọtẹ́lẹ̀ májẹ̀mú tuntun — kì í ṣe lórí òkúta ṣùgbọ́n nínú ọkàn."
      },
      {
        "ref": "Hébérù 8:6",
        "text": "Ṣùgbọ́n iṣẹ́ ìsìn tí Jésù gba ga ju tiwọn lọ, gẹ́gẹ́ bí májẹ̀mú tí òun jẹ́ onígbààrọ́ rẹ̀ ṣe ga ju èyí àtijọ́ lọ, nítorí a fi ìlérí tó dára jù múlẹ̀ rẹ̀.",
        "note": "Ẹ̀jẹ̀ Jésù ni èdìdì — májẹ̀mú náà ti parí."
      }
    ]
  },
  "shepherd": {
    "title": "Olùṣọ́-àgùntàn",
    "tagline": "Láti pápá Dáfídì títí dé Ọ̀gá àwọn olùṣọ́",
    "summary": "Ọlọ́run ń pe ara Rẹ̀ ní Olùṣọ́. Kì í ṣe àkọsílẹ̀ iṣẹ́ ṣùgbọ́n ìlérí: Ẹni tí ó mọ orúkọ àgùntàn kọ̀ọ̀kan, tí ń darí wọn, tí yóò sì fi ẹ̀mí Rẹ̀ fún wọn.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 48:15",
        "text": "Nígbà náà ó bùkún Jósẹ́fù, ó wí pé, Ọlọ́run tí àwọn baba mi Ábúráhámù àti Ísákì rìn níwájú rẹ̀ — Ọlọ́run tí ó jẹ́ olùṣọ́ mi ní gbogbo ọjọ́ ìyè mi títí di òní...",
        "note": "Dáfídì kọ orin yìí kúrò nínú ìrírí olùṣọ́ gidi."
      },
      {
        "ref": "Sáàmù 23:1",
        "text": "Olúwa ni olùṣọ́-àgùntàn mi, èmi kì yóò ṣe aláìní.",
        "note": "Wòlíì ń kìlọ̀ fún àwọn olùṣọ́ tí ń jẹ àgùntàn."
      },
      {
        "ref": "Aísáyà 40:11",
        "text": "Ó ń tọ́ agbo rẹ̀ bí olùṣọ́: Ó ń kó àwọn ọ̀dọ́-àgùntàn sínú apá rẹ̀, ó gbé wọn mọ́ ọkàn rẹ̀; ó ń tọ́ àwọn tí ó ní ọmọ pẹ̀lú ìrọ̀rùn.",
        "note": "Olùṣọ́ gidi ń wá ẹyọ kan tí ó sọnù."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 34:15-16",
        "text": "Èmi fúnra mi ni n ó tọ́ àgùntàn mi, n ó sì jẹ́ kí wọn dùbúlẹ̀, ni Olúwa Olódùmarè wí. N ó wá èyí tó sọnù, n ó sì mú àwọn tó ṣáko padà.",
        "note": "Jésù sọ pé Òun ni olùṣọ́, kì í ṣe àgbẹ̀ọ̀san."
      },
      {
        "ref": "Jòhánù 10:11",
        "text": "Èmi ni olùṣọ́ rere. Olùṣọ́ rere fi ẹ̀mí rẹ̀ lélẹ̀ fún àgùntàn.",
        "note": "Olùṣọ́ ńlá fi ẹ̀mí Rẹ̀ fún àgùntàn."
      },
      {
        "ref": "Ìfihàn 7:17",
        "text": "Nítorí Ọ̀dọ́-Àgùntàn ní àárín ìtẹ́ ni yóò jẹ́ olùṣọ́ wọn; yóò tọ́ wọn lọ sí orísun omi ìyè.",
        "note": "Ìwòyí ìkẹyìn — ẹkùn kì yóò pa àgùntàn mọ́."
      }
    ]
  },
  "blood": {
    "title": "Ẹ̀jẹ̀",
    "tagline": "Láti Édẹ́nì títí dé agbelebu — ìyè nínú ẹ̀jẹ̀",
    "summary": "Ìwé Mímọ́ kò tẹrí fún ẹ̀jẹ̀ nítorí ìwà ipá. Ó tẹrí nítorí ẹ̀jẹ̀ ni ìyè, ìyè sì ni iye ẹ̀ṣẹ̀. Láti aṣọ Ádámù títí dé ago Jésù, Ọlọ́run ń fi ẹ̀jẹ̀ bò wá.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 3:21",
        "text": "Olúwa Ọlọ́run ṣe aṣọ awọ fún Ádámù àti aya rẹ̀, Ó sì wọ̀ ọ́ wọn.",
        "note": "Ìbòrí àkọ́kọ́ — Ọlọ́run pa ẹranko láti fi aṣọ bò ìtìjú."
      },
      {
        "ref": "Jẹ́nẹ́sísì 4:10",
        "text": "Kí ni ìwọ ṣe? Gbọ́! Ẹ̀jẹ̀ arákùnrin rẹ ń kígbe sí mi láti ilẹ̀.",
        "note": "Láìsí ẹ̀jẹ̀, kò sí ìdáríjì."
      },
      {
        "ref": "Léfítíkù 17:11",
        "text": "Nítorí ìyè ẹ̀dá wà nínú ẹ̀jẹ̀, mo sì fi í fún yín láti ṣe ètùtù fún ara yín lórí pẹpẹ; ẹ̀jẹ̀ ni ó ń ṣe ètùtù fún ìyè ẹnìkan.",
        "note": "Ẹ̀jẹ̀ ìrékọjá ni ààmì ìgbàlà."
      },
      {
        "ref": "Hébérù 9:22",
        "text": "Nítòótọ́, òfin nílò pé kí a fi ẹ̀jẹ̀ wẹ ohun gbogbo mọ́ fẹ́rẹ̀ẹ́, láìsí ìtàjẹ̀sílẹ̀ kò sí ìdáríjì.",
        "note": "Wòlíì rí ẹni tí ẹ̀jẹ̀ rẹ̀ ń sọ̀rọ̀ fún ẹlòmíràn."
      },
      {
        "ref": "Hébérù 12:24",
        "text": "...sí Jésù, onígbààrọ́ májẹ̀mú tuntun, àti sí ẹ̀jẹ̀ tí a wọ́n, tí ń sọ̀rọ̀ tó dára ju ẹ̀jẹ̀ Ébélì lọ.",
        "note": "ago Jésù ni èdìdì májẹ̀mú tuntun."
      },
      {
        "ref": "Ìfihàn 1:5",
        "text": "...Sí ẹni tí ó fẹ́ràn wa, tí ó sì tú wa sílẹ̀ kúrò nínú ẹ̀ṣẹ̀ wa nípasẹ̀ ẹ̀jẹ̀ rẹ̀, tí ó sọ wá di ìjọba àti àlùfáà láti sìn Ọlọ́run àti Baba rẹ̀ — ògo àti agbára ni fún un títí láé!",
        "note": "A ṣẹ́gun nípasẹ̀ ẹ̀jẹ̀ Ọ̀dọ́-Àgùntàn."
      }
    ]
  },
  "temple": {
    "title": "Tẹ́mpílì",
    "tagline": "Láti àgọ́ aginjù títí dé ara gẹ́gẹ́ bí tẹ́mpílì",
    "summary": "Ọlọ́run fẹ́ gbé láàárín àwọn ènìyàn Rẹ̀. Àgọ́, tẹ́mpílì, ìjọ — gbogbo rẹ̀ ń tọ́ka sí òtítọ́ kan: Ẹ̀mí Mímọ́ ń gbé nínú àwọn tí ó gba Kristi.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 25:8",
        "text": "Kí wọn ṣe ibi mímọ́ fún mi, èmi yóò sì gbé láàárín wọn.",
        "note": "Àgọ́ — Ọlọ́run ń rìn láàárín wọn nínú aginjù."
      },
      {
        "ref": "1 Ọba 8:27",
        "text": "Ṣé Ọlọ́run yóò gbé lórí ilẹ̀ nítòótọ́? Àwọn ọ̀run, àní ọ̀run tó ga jù, kò lè gba ọ́. Báwo ni tẹ́mpílì tí mo kọ́ yìí ṣe kéré tó!",
        "note": "Sólómónì kọ́ ilé, ògo Ọlọ́run kún un."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 43:7",
        "text": "Ọmọ ènìyàn, èyí ni ibi ìtẹ́ mi àti ibi àtẹ́lẹsẹ̀ mi. Ibí ni n ó gbé láàárín àwọn ọmọ Ísírẹ́lì títí láé.",
        "note": "Jésù pe ara Rẹ̀ ní tẹ́mpílì — wọn yóò wó o, yóò sì dìde."
      },
      {
        "ref": "Jòhánù 2:19-21",
        "text": "Jésù dá wọn lóhùn pé, Wó tẹ́mpílì yìí, n ó sì gbé e sókè ní ọjọ́ kẹta. Ṣùgbọ́n tẹ́mpílì tí ó ń sọ̀rọ̀ rẹ̀ ni ara rẹ̀.",
        "note": "Aṣẹ́ kẹ́tà ó dìde. Tẹ́mpílì tuntun jẹ́ ẹnìkan."
      },
      {
        "ref": "1 Kọ́ríntì 6:19",
        "text": "Ǹjẹ́ ẹ kò mọ̀ pé ara yín jẹ́ tẹ́mpílì Ẹ̀mí Mímọ́, ẹni tí ń bẹ nínú yín, ẹni tí ẹ gbà lọ́dọ̀ Ọlọ́run?",
        "note": "Ẹ̀yin ni tẹ́mpílì Ọlọ́run."
      },
      {
        "ref": "Ìfihàn 21:22",
        "text": "Èmi kò rí tẹ́mpílì nínú ìlú náà, nítorí Olúwa Ọlọ́run Olódùmarè àti Ọ̀dọ́-Àgùntàn ni tẹ́mpílì rẹ̀.",
        "note": "Kò sí tẹ́mpílì nínú ìlú ìkẹyìn — Ọlọ́run àti Ọ̀dọ́-Àgùntàn ni tẹ́mpílì."
      }
    ]
  },
  "resurrection": {
    "title": "Àjíǹde",
    "tagline": "Láti egungun tó gbẹ títí dé òkú ìsìnkú tí ó ṣófo",
    "summary": "Ìgbàgbọ́ Kristẹni kì í ṣe ìmọ̀ràn rere nìkan. Ó dúró lórí òtítọ́ kan: Jésù jí nínú òkú. Àjíǹde náà ni ìlérí tiwa pẹ̀lú.",
    "verses": [
      {
        "ref": "Jóòbù 19:25-26",
        "text": "Mo mọ̀ pé olùràpadà mi ń bẹ, ní ìkẹyìn yóò sì dúró lórí ilẹ̀. Lẹ́yìn tí a bá ti pa awọ mi run, síbẹ̀ nínú ẹran-ara mi n ó rí Ọlọ́run.",
        "note": "Ẹ̀síkíẹ́lì rí àwọn egungun tó gbẹ tí wọ́n ṣì ń jí."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 37:5",
        "text": "Èyí ni ohun tí Olúwa Olódùmarè wí sí àwọn egungun wọ̀nyí: N ó jẹ́ kí ẹ̀mí wọ inú yín, ẹ ó sì yè.",
        "note": "Dáfídì sọ̀rọ̀ ẹni àjíǹde tí kì yóò rí ìbàjẹ́."
      },
      {
        "ref": "Dáníẹ́lì 12:2",
        "text": "Ọ̀pọ̀ tí ń sùn nínú eruku ilẹ̀ yóò jí: àwọn kan sí ìyè ayérayé, àwọn mìíràn sí ìtìjú àti ìkẹ́gàn ayérayé.",
        "note": "Jésù pe Lazarù jáde — àkọ́kọ́ fífihàn."
      },
      {
        "ref": "Jòhánù 11:25",
        "text": "Jésù wí fún un pé, Èmi ni àjíǹde àti ìyè. Ẹni tí ó bá gbàgbọ́ nínú mi yóò yè, kódà bí ó bá kú.",
        "note": "Òkú ìsìnkú ṣófo. Ó ti jí."
      },
      {
        "ref": "Ìṣe 2:24",
        "text": "Ṣùgbọ́n Ọlọ́run jí i nínú òkú, Ó tú u sílẹ̀ kúrò nínú ìrora ikú, nítorí kò ṣeé ṣe fún ikú láti di í mú.",
        "note": "Àjíǹde Rẹ̀ ni ẹ̀rí àwa náà."
      },
      {
        "ref": "1 Kọ́ríntì 15:20",
        "text": "Ṣùgbọ́n Kristi ní tòótọ́, a jí i nínú òkú, ọra àkọ́so àwọn tí ó ti sùn.",
        "note": "Ikú kò ní ìṣẹ́gun mọ́."
      }
    ]
  },
  "spirit": {
    "title": "Ẹ̀mí Mímọ́",
    "tagline": "Láti ẹ̀mí lórí omi títí dé iná Ọjọ́ Pẹ́ntekọ́sì",
    "summary": "Ẹ̀mí Mímọ́ kì í ṣe agbára àìrí nìkan. Òun jẹ́ Ẹni, Ọlọ́run, tí ń gbé nínú àwọn onígbàgbọ́, tí ń fún ni agbára láti jẹ́rìí.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 1:2",
        "text": "Ilẹ̀ sì wà ní àìlẹ́sẹ̀ẹsẹ̀ àti òfo, òkùnkùn wà lójú ìbú, Ẹ̀mí Ọlọ́run sì ń rábàbà lójú omi.",
        "note": "Ẹ̀mí Ọlọ́run ń rábàbà lórí omi ìṣẹ̀dá."
      },
      {
        "ref": "Nọ́ḿbà 11:29",
        "text": "Mósè dáhùn pé, Ṣé ìwọ ń ṣe ìlara nítorí mi? Ìfẹ́ ọkàn mi ni pé kí gbogbo ènìyàn Olúwa jẹ́ wòlíì, kí Olúwa fi Ẹ̀mí rẹ̀ lé wọn lórí!",
        "note": "Wòlíì sọtẹ́lẹ̀ ẹ̀mí tí a ó dà sórí gbogbo ènìyàn."
      },
      {
        "ref": "Jóẹ́lì 2:28",
        "text": "Lẹ́yìn náà, n ó da Ẹ̀mí mi sórí gbogbo ènìyàn. Àwọn ọmọ yín, ọkùnrin àti obìnrin, yóò sọtẹ́lẹ̀, àwọn àgbà yóò lá àlá, àwọn ọ̀dọ́ yóò rí ìran.",
        "note": "Jésù ṣe ìlérí Olùrànlọ́wọ́ mìíràn."
      },
      {
        "ref": "Jòhánù 14:16-17",
        "text": "N ó sì bẹ Baba, yóò sì fún yín ní olùrànlọ́wọ́ mìíràn láti ràn yín lọ́wọ́, kí ó sì wà pẹ̀lú yín títí láé — Ẹ̀mí òtítọ́.",
        "note": "Pẹ́ntekọ́sì — iná, èdè, ìjẹ́rìí."
      },
      {
        "ref": "Ìṣe 2:4",
        "text": "Gbogbo wọn ni Ẹ̀mí Mímọ́ kún, wọ́n sì bẹ̀rẹ̀ sí sọ̀rọ̀ ní èdè mìíràn gẹ́gẹ́ bí Ẹ̀mí ṣe fún wọn láàyè.",
        "note": "Ẹ̀mí ń gbé nínú yín."
      },
      {
        "ref": "Róòmù 8:11",
        "text": "Bí Ẹ̀mí ẹni tí ó jí Jésù nínú òkú bá ń gbé nínú yín, ẹni tí ó jí Kristi nínú òkú yóò tún fún àwọn ara yín tí ń kú ní ìyè nítorí Ẹ̀mí rẹ̀ tí ń gbé nínú yín.",
        "note": "Èso Ẹ̀mí ni ìwà Kristi nínú wa."
      }
    ]
  },
  "word": {
    "title": "Ọ̀rọ̀ Ìyè",
    "tagline": "Láti Jẹ́nẹ́sísì 1 títí dé Ọ̀rọ̀ tí ó di ẹran-ara",
    "summary": "Ọlọ́run ń sọ̀rọ̀. Ọ̀rọ̀ Rẹ̀ ń ṣẹ̀dá, ń mú padà, ń ṣàlàáfíà. Ní ìkẹyìn, Ọ̀rọ̀ náà gbé àgọ́ láàárín wa.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 1:3",
        "text": "Ọlọ́run sì wí pé, Jẹ́ kí ìmọ́lẹ̀ kí ó wà, ìmọ́lẹ̀ sì wà.",
        "note": "Ọlọ́run sọ̀rọ̀ — ayé wà."
      },
      {
        "ref": "Sáàmù 33:6",
        "text": "Nípa ọ̀rọ̀ Olúwa ni a ṣe àwọn ọ̀run, ọmọ-ogun ìràwọ̀ wọn nípa ìmí ẹnu rẹ̀.",
        "note": "Ọ̀rọ̀ Rẹ̀ jẹ́ fìtílà sí ẹsẹ̀ mi."
      },
      {
        "ref": "Sáàmù 119:89",
        "text": "Ọ̀rọ̀ rẹ, Olúwa, wà títí láé; ó dúró ṣinṣin nínú àwọn ọ̀run.",
        "note": "Wòlíì jẹ ìwé náà — ọ̀rọ̀ kì í ṣe ìmọ̀ nìkan, ó jẹ́ ìyè."
      },
      {
        "ref": "Aísáyà 55:11",
        "text": "Bẹ́ẹ̀ ni ọ̀rọ̀ mi tí ń jáde lẹ́nu mi: kì yóò padà sí ọ̀dọ̀ mi lásán, ṣùgbọ́n yóò ṣe ohun tí mo fẹ́, yóò sì mú èrò tí mo fi rán an ṣẹ.",
        "note": "Ọ̀rọ̀ di ẹran-ara, ó gbé ààrin wa."
      },
      {
        "ref": "Jòhánù 1:14",
        "text": "Ọ̀rọ̀ náà di ẹran-ara, ó sì ṣe àgọ́ láàárín wa. A ti rí ògo rẹ̀, ògo Ọmọ kan ṣoṣo, tí ó ti ọ̀dọ̀ Baba wá, kún fún oore-ọ̀fẹ́ àti òtítọ́.",
        "note": "Ìwé Mímọ́ jẹ́ ìmísí Ọlọ́run."
      },
      {
        "ref": "Hébérù 4:12",
        "text": "Nítorí ọ̀rọ̀ Ọlọ́run ń bẹ láààyè, ó sì ń ṣiṣẹ́. Ó mú ju idà onígun méjì èyíkéyìí lọ, ó ń wọ inú títí dé pípin ọkàn àti ẹ̀mí, ìsopọ̀ àti ìfun-egungun; ó ń ṣe ìdájọ́ èrò àti ìfẹ́ ọkàn.",
        "note": "Ọ̀rọ̀ Ọlọ́run wà láíláí."
      }
    ]
  },
  "priest": {
    "title": "Àlùfáà Àgbà",
    "tagline": "Láti aṣọ Áárónì títí dé Jésù nínú ọ̀run",
    "summary": "Àlùfáà dúró láàárín Ọlọ́run àti ènìyàn. Gbogbo àlùfáà ìgbàanì ń tọ́ka sí Ọ̀kan ṣoṣo tó lè wọ inú ibi mímọ́ jù lọ títí ayérayé.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 28:1",
        "text": "Mú Áárónì arákùnrin rẹ wá fún ọ láàárín àwọn ọmọ Ísírẹ́lì, pẹ̀lú àwọn ọmọ rẹ̀, kí wọn lè sìn mí gẹ́gẹ́ bí àlùfáà.",
        "note": "Áárónì wọ aṣọ mímọ́ fún àwọn ènìyàn."
      },
      {
        "ref": "Léfítíkù 16:15",
        "text": "Nígbà náà ni yóò pa ewúrẹ́ ẹbọ ẹ̀ṣẹ̀ fún àwọn ènìyàn, yóò mú ẹ̀jẹ̀ rẹ̀ wọ ẹ̀yìn aṣọ-ìkélé, yóò sì ṣe sí i gẹ́gẹ́ bí ó ṣe ṣe sí ẹ̀jẹ̀ màlúù.",
        "note": "Ọjọ́ Ìdáríjì — ẹ̀jẹ̀ lórí ìtẹ́ àánú."
      },
      {
        "ref": "Sáàmù 110:4",
        "text": "Ìwọ jẹ́ àlùfáà títí láé, ní ìlànà Melkísédékì.",
        "note": "Melkísédékì — àlùfáà tí kì í ṣe láti Léfáì."
      },
      {
        "ref": "Hébérù 4:14-15",
        "text": "Nítorí náà, níwọ́n bí a ti ní àlùfáà àgbà ńlá tí ó gòkè lọ sí ọ̀run, Jésù Ọmọ Ọlọ́run, ẹ jẹ́ kí a di ìgbàgbọ́ tí a ń jẹ́wọ́ mú ṣinṣin. Nítorí a kò ní àlùfáà àgbà tí kò lè kèdọ̀rọ̀ pẹ̀lú àìlera wa.",
        "note": "Jésù di àlùfáà ayérayé."
      },
      {
        "ref": "Hébérù 7:27",
        "text": "Kì í ṣe bí àwọn àlùfáà àgbà mìíràn, kò nílò láti rú ẹbọ lojoojúmọ́, kọ́kọ́ fún ẹ̀ṣẹ̀ tirẹ̀, lẹ́yìn náà fún ẹ̀ṣẹ̀ àwọn ènìyàn. Ó rú ẹbọ fún ẹ̀ṣẹ̀ wọn ẹ̀ẹ̀kan ṣoṣo nígbà tí ó fi ara rẹ̀ lélẹ̀.",
        "note": "Ó wọ ibi mímọ́ pẹ̀lú ẹ̀jẹ̀ tirẹ̀."
      },
      {
        "ref": "Hébérù 7:25",
        "text": "Nítorí náà ó lè gbà àwọn tí ń wá sí ọ̀dọ̀ Ọlọ́run nípasẹ̀ rẹ̀ là pátápátá, nítorí ó ń bẹ láààyè nígbà gbogbo láti ṣe àdúrà ìbẹ̀wò fún wọn.",
        "note": "Ó ń gbàdúrà fún wa nísinsin yìí."
      }
    ]
  },
  "king": {
    "title": "Ọba",
    "tagline": "Láti ìtẹ́ Dáfídì títí dé Ọba àwọn ọba",
    "summary": "Ọlọ́run ṣèlérí ọba kan láti ilé Dáfídì, ẹni tí ìjọba rẹ̀ kì yóò ní òpin. Jésù ni Ọba náà — ṣùgbọ́n adé Rẹ̀ jẹ́ ẹ̀gún ẹ̀gùn.",
    "verses": [
      {
        "ref": "1 Sámúẹ́lì 8:7",
        "text": "Olúwa sọ fún un pé: Gbọ́ gbogbo ohun tí àwọn ènìyàn ń sọ fún ọ; kì í ṣe ìwọ ni wọ́n kọ̀, ṣùgbọ́n wọ́n kọ̀ mí gẹ́gẹ́ bí ọba wọn.",
        "note": "Ọlọ́run yàn Dáfídì, ọmọdé olùṣọ́."
      },
      {
        "ref": "2 Sámúẹ́lì 7:12-13",
        "text": "Nígbà tí ọjọ́ rẹ bá parí, tí o sì sinmi pẹ̀lú àwọn baba rẹ, n ó gbé irú-ọmọ rẹ sókè láti rọ́pò rẹ... N ó fi ìtẹ́ ìjọba rẹ̀ múlẹ̀ títí láé.",
        "note": "Ìlérí ìtẹ́ ayérayé."
      },
      {
        "ref": "Sáàmù 2:6",
        "text": "Mo ti fi ọba mi kalẹ̀ sórí Síónì, òkè mímọ́ mi.",
        "note": "Wòlíì rí ọmọ tí a bí, Ọba Alágbára."
      },
      {
        "ref": "Aísáyà 9:6-7",
        "text": "Nítorí ọmọ ni a bí fún wa, ọmọkùnrin ni a fi fún wa... Yóò ṣe ọba lórí ìtẹ́ Dáfídì àti lórí ìjọba rẹ̀, yóò fi ìdájọ́ òdodo àti òdodo gbé e ró láti ìgbà yẹn lọ títí láé.",
        "note": "Àwọn magi béèrè pé: Níbo ni Ọba àwọn Júù wà?"
      },
      {
        "ref": "Lúùkù 1:32-33",
        "text": "Yóò tóbí, a ó sì pe é ní Ọmọ Ọ̀gá-ògo. Olúwa Ọlọ́run yóò fún un ní ìtẹ́ Dáfídì baba rẹ̀, yóò ṣe ọba lórí irú-ọmọ Jákọ́bù títí láé; ìjọba rẹ̀ kì yóò ní òpin.",
        "note": "Adé ẹ̀gún ẹ̀gùn lórí orí Rẹ̀."
      },
      {
        "ref": "Ìfihàn 19:16",
        "text": "Lórí aṣọ rẹ̀ àti lórí itan rẹ̀ ni a kọ orúkọ yìí: ỌBA ÀWỌN ỌBA ÀTI OLÚWA ÀWỌN OLÚWA.",
        "note": "Lórí aṣọ Rẹ̀ a kọ: ỌBA ÀWỌN ỌBA."
      }
    ]
  },
  "faith": {
    "title": "Ọ̀nà Ìgbàgbọ́",
    "tagline": "Láti Ábúráhámù títí dé ẹni tí ó gbàgbọ́ láì rí",
    "summary": "Ìgbàgbọ́ kì í ṣe ìmọ̀lára. Ó jẹ́ ìgbẹ́kẹ̀lé Ọlọ́run tóbẹ́ẹ̀ tí ó ń mú kí ènìyàn rìn kódà nígbà tí kò tí ì rí ìdáhùn.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 15:6",
        "text": "Ábúráhámù gbàgbọ́ Olúwa, Ó sì ka á sí òdodo fún un.",
        "note": "Ábúráhámù gbàgbọ́, a kà á sí òdodo."
      },
      {
        "ref": "Hábákúkù 2:4",
        "text": "Wò ó, ọ̀tá ń wú; ìfẹ́ ọkàn rẹ̀ kò tọ́ — ṣùgbọ́n olódodo yóò yè nípa ìṣòtítọ́ rẹ̀.",
        "note": "Ìgbàgbọ́ ni ìdánilójú ohun tí a ń retí."
      },
      {
        "ref": "Róòmù 1:17",
        "text": "Nítorí nínú ìhìn rere ni a ṣí òdodo Ọlọ́run hàn — òdodo nípa ìgbàgbọ́ láti ìbẹ̀rẹ̀ dé òpin, gẹ́gẹ́ bí a ti kọ pé: Olódodo yóò yè nípa ìgbàgbọ́.",
        "note": "Wòlíì sọ pé olódodo yóò yè nípa ìgbàgbọ́."
      },
      {
        "ref": "Gálátíà 3:8",
        "text": "Ìwé Mímọ́ rí i tẹ́lẹ̀ pé Ọlọ́run yóò dá àwọn Keferí láre nípa ìgbàgbọ́, ó sì kéde ìhìn rere tẹ́lẹ̀ fún Ábúráhámù pé: Gbogbo orílẹ̀-èdè ni a ó bùkún nípasẹ̀ rẹ.",
        "note": "Jésù yìn ìgbàgbọ́ obìnrin Kénánì."
      },
      {
        "ref": "Hébérù 11:1",
        "text": "Nísinsin yìí ìgbàgbọ́ ni ìdánilójú ohun tí a ń retí àti ẹ̀rí ohun tí a kò rí.",
        "note": "A gbà wà là nípa oore-ọ̀fẹ́ nípasẹ̀ ìgbàgbọ́."
      },
      {
        "ref": "Hébérù 12:2",
        "text": "...a ń tẹjú mọ́ Jésù, òṣìṣẹ́ àkọ́kọ́ àti òlùpé ìgbàgbọ́...",
        "note": "Láìsí ìgbàgbọ́, kò ṣeé ṣe láti wu Ọlọ́run lójú."
      }
    ]
  },
  "grace": {
    "title": "Oore-ọ̀fẹ́",
    "tagline": "Láti Édẹ́nì títí dé agbelebu — ẹ̀bùn tí a kò tọ́ sí",
    "summary": "Oore-ọ̀fẹ́ kì í ṣe Ọlọ́run tí ó dín òfin kù. Ó jẹ́ Ọlọ́run tí ó gbé ohun tí a kò lè gbé. Agbelebu kì í ṣe ètò B — ó jẹ́ ètò náà láti ìbẹ̀rẹ̀.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 6:8",
        "text": "Ṣùgbọ́n Nóà rí oore-ọ̀fẹ́ lójú Olúwa.",
        "note": "Ọlọ́run wá Ádámù nígbà tí ó farapamọ́."
      },
      {
        "ref": "Ẹ́ksódù 33:19",
        "text": "Olúwa sì wí pé, N ó jẹ́ kí gbogbo ìre mi kọjá níwájú rẹ, n ó sì kéde orúkọ mi, Olúwa, níwájú rẹ. N ó ṣàánú ẹni tí n ó ṣàánú, n ó sì ṣàánú ẹni tí n ó ṣàánú.",
        "note": "Nóà rí oore-ọ̀fẹ́ ní ojú Olúwa."
      },
      {
        "ref": "Sáàmù 103:10-11",
        "text": "Kò ṣe sí wa gẹ́gẹ́ bí ẹ̀ṣẹ̀ wa ṣe tọ́ sí, bẹ́ẹ̀ ni kò san wá gẹ́gẹ́ bí àìṣedéédéè wa. Nítorí bí ọ̀run ṣe ga lórí ilẹ̀, bẹ́ẹ̀ ni ìfẹ́ rẹ̀ tóbi fún àwọn tí ń bẹ̀rù rẹ̀.",
        "note": "Mósè gbọ́: Èmi yóò ṣàánú ẹni tí mo bá ṣàánú."
      },
      {
        "ref": "Jòhánù 1:17",
        "text": "Nítorí a fi òfin fún ni nípasẹ̀ Mósè; oore-ọ̀fẹ́ àti òtítọ́ ti Jésù Kristi wá.",
        "note": "Oore-ọ̀fẹ́ àti òtítọ́ ti Jésù Kristi wá."
      },
      {
        "ref": "Éfésù 2:8-9",
        "text": "Nítorí nípa oore-ọ̀fẹ́ ni a gbà yín là, nípasẹ̀ ìgbàgbọ́ — èyí kì í ṣe ti ara yín, ẹ̀bùn Ọlọ́run ni — kì í ṣe nípa iṣẹ́, kí ẹnìkan má ṣe ṣògo.",
        "note": "Nígbà tí a ṣì jẹ́ ẹlẹ́ṣẹ̀, Kristi kú fún wa."
      },
      {
        "ref": "Róòmù 5:20",
        "text": "A mú òfin wá kí ìrékọjá lè pọ̀ sí i. Ṣùgbọ́n níbi tí ẹ̀ṣẹ̀ ti pọ̀ sí i, oore-ọ̀fẹ́ pọ̀ sí i síwájú sí i.",
        "note": "Oore-ọ̀fẹ́ ni ó kọ́ ọ láti sẹ ìwà búburú."
      }
    ]
  },
  "exodus": {
    "title": "Ìjáde",
    "tagline": "Láti ẹrú Ejíbítì títí dé òmìnira nínú Kristi",
    "summary": "Ọlọ́run ń tú àwọn ènìyàn Rẹ̀ sílẹ̀. Ìjáde kì í ṣe ìtàn àtijọ́ nìkan — ó jẹ́ àwòrán ìgbàlà: ẹ̀jẹ̀, òkun, aginjù, ilẹ̀ ìlérí.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 3:7-8",
        "text": "Nítòótọ́ mo ti rí ìpọ́njú àwọn ènìyàn mi ní Ejíbítì. Mo ti gbọ́ ẹkún wọn... Nítorí náà mo sọ̀kalẹ̀ láti gbà wọ́n là.",
        "note": "Gbọ́ igbe wọn. Mo ti sọ̀kalẹ̀ láti gbà wọ́n là."
      },
      {
        "ref": "Ẹ́ksódù 14:13",
        "text": "Mósè dá àwọn ènìyàn lóhùn pé, Ẹ má bẹ̀rù. Ẹ dúró ṣinṣin, ẹ ó sì rí ìgbàlà tí Olúwa yóò mú wá fún yín lónìí.",
        "note": "Ẹ̀jẹ̀ lórí ìlẹ̀kùn — ikú kọjá."
      },
      {
        "ref": "Aísáyà 43:16-19",
        "text": "Èyí ni ohun tí Olúwa wí — ẹni tí ó ṣe ọ̀nà nínú òkun... Ẹ gbàgbé ohun àtijọ́; ẹ má ṣe ṣe àṣàrò nípa ọjọ́ àná. Wò ó, mo ń ṣe nǹkan tuntun!",
        "note": "Òkun pín — Ọlọ́run ṣí ọ̀nà nínú ohun tí kò ṣeé ṣe."
      },
      {
        "ref": "Lúùkù 9:31",
        "text": "Wọ́n farahàn nínú ògo, wọ́n ń bá Jésù sọ̀rọ̀. Wọ́n sọ̀rọ̀ nípa ìkúrò rẹ̀, èyí tí yóò ṣẹ ní Jerúsálẹ́mù.",
        "note": "Aginjù kọ́ wọn ní ìgbẹ́kẹ̀lé."
      },
      {
        "ref": "Hébérù 11:27",
        "text": "Nípa ìgbàgbọ́ ó kúrò ní Ejíbítì, kò bẹ̀rù ìbínú ọba; ó fi tẹ̀síwájú nítorí ó rí ẹni tí a kò rí.",
        "note": "Jésù sọ̀rọ̀ ìjáde Rẹ̀ ní orí òkè."
      },
      {
        "ref": "Ìfihàn 15:3",
        "text": "Wọ́n kọ orin Mósè ìránṣẹ́ Ọlọ́run àti ti Ọ̀dọ́-Àgùntàn: Ńlá àti ìyanu ni iṣẹ́ rẹ, Olúwa Ọlọ́run Olódùmarè.",
        "note": "Kristi ni ọ̀dọ́-àgùntàn ìrékọjá wa."
      }
    ]
  },
  "forgiveness": {
    "title": "Ìdáríjì",
    "tagline": "Láti Jósẹ́fù títí dé agbelebu — ìtúsílẹ̀ ìbínú",
    "summary": "Ìdáríjì kì í ṣe pé ẹ̀ṣẹ̀ kò ṣe pàtàkì. Ó jẹ́ pé ẹnìkan ti san iye rẹ̀. A dáríjì nítorí a ti gba ìdáríjì.",
    "verses": [
      {
        "ref": "Léfítíkù 16:21-22",
        "text": "Kí ó gbé ọwọ́ méjèèjì lé orí ewúrẹ́ ìyè, kí ó jẹ́wọ́ gbogbo ìwà búburú àti ìṣọ̀tẹ̀ àwọn ọmọ Ísírẹ́lì lórí rẹ̀... kí ó sì lé ewúrẹ́ náà lọ sí aginjù.",
        "note": "Jósẹ́fù dáríjì àwọn arákùnrin tí wọ́n tà á."
      },
      {
        "ref": "Sáàmù 103:12",
        "text": "Bí ìlà-oòrùn ṣe jìnà sí ìwọ̀-oòrùn, bẹ́ẹ̀ ni ó ti mú àìṣedéédéè wa kúrò lọ́dọ̀ wa.",
        "note": "Dáfídì kọ: Ìbúra-ọkàn ẹni tí ẹ̀ṣẹ̀ rẹ̀ ti dáríjì."
      },
      {
        "ref": "Aísáyà 43:25",
        "text": "Èmi, àní èmi, ni ẹni tí ń pa àìṣedéédéè rẹ rẹ́, nítorí tèmi, èmi kì yóò sì rántí ẹ̀ṣẹ̀ rẹ mọ́.",
        "note": "Wòlíì gbọ́: Ẹ̀ṣẹ̀ rẹ ti kọjá."
      },
      {
        "ref": "Míkà 7:19",
        "text": "Ìwọ yóò tún ṣàánú wa; ìwọ yóò tẹ̀ ẹ̀ṣẹ̀ wa mọ́lẹ̀, ìwọ yóò jù gbogbo àìṣedéédéè wa sínú ìbú òkun.",
        "note": "Baba ọmọ àpàdé ń sáré pàdé ọmọ tí ó padà."
      },
      {
        "ref": "Kólósè 2:14",
        "text": "...ó ti pa ìwé gbèsè òfin wa rẹ́, èyí tí ó ń tako wa, tí ó ń ṣe ìdájọ́ wa; ó gbé e lọ, ó kàn án mọ́ agbelebu.",
        "note": "Baba, dáríjì wọn, nítorí wọn kò mọ ohun tí wọ́n ń ṣe."
      },
      {
        "ref": "Hébérù 10:17",
        "text": "Ẹ̀ṣẹ̀ wọn àti iṣẹ́ àìlòfin wọn, èmi kì yóò rántí wọn mọ́.",
        "note": "Ẹ dáríjì ara yín, gẹ́gẹ́ bí Ọlọ́run ṣe dáríjì yín nínú Kristi."
      }
    ]
  },
  "wisdom": {
    "title": "Ọgbọ́n",
    "tagline": "Láti Òwe Sólómónì títí dé Kristi, ọgbọ́n Ọlọ́run",
    "summary": "Ọgbọ́n nínú Ìwé Mímọ́ kì í ṣe ìmọ̀ ọpọlọ nìkan. Ó jẹ́ ìbẹ̀rù Olúwa, ìwà, àti ẹnìkan — Jésù, nínú ẹni tí gbogbo ìṣúra ọgbọ́n wà.",
    "verses": [
      {
        "ref": "Òwe 1:7",
        "text": "Ìbẹ̀rù Olúwa ni ìbẹ̀rẹ̀ ìmọ̀, ṣùgbọ́n aṣiwèrè kẹ́gàn ọgbọ́n àti ẹ̀kọ́.",
        "note": "Ìbẹ̀rù Olúwa ni ìbẹ̀rẹ̀ ọgbọ́n."
      },
      {
        "ref": "Òwe 8:22-23",
        "text": "Olúwa bí mi gẹ́gẹ́ bí ìṣẹ́ rẹ̀ àkọ́kọ́, ṣáájú iṣẹ́ rẹ̀ àtijọ́; a dá mi ní ọjọ́ pípẹ́ ṣáájú, ní ìbẹ̀rẹ̀ gan-an, nígbà tí ayé ń bẹ̀rẹ̀.",
        "note": "Ọgbọ́n ń pe ní ìta, ó ń náwọ́."
      },
      {
        "ref": "Jóòbù 28:28",
        "text": "Ó sì wí fún ìran ènìyàn pé, Ìbẹ̀rù Olúwa — ìyẹn ni ọgbọ́n, kíkọ ibi sílẹ̀ ni òye.",
        "note": "Sólómónì béèrè ọgbọ́n kì í ṣe ọrọ̀."
      },
      {
        "ref": "Mátíù 12:42",
        "text": "Ayaba Gúúsù yóò dìde ní ìdájọ́ pẹ̀lú ìran yìí, yóò sì ṣe ìdájọ́ rẹ̀; nítorí ó wá láti òpin ayé láti gbọ́ ọgbọ́n Sólómónì, nísinsin yìí ohun tó tóbi ju Sólómónì wà níbí.",
        "note": "Ọgbọ́n Ọlọ́run jẹ́ wèrè lójú ayé."
      },
      {
        "ref": "1 Kọ́ríntì 1:24",
        "text": "...ṣùgbọ́n fún àwọn tí Ọlọ́run pè, Júù àti Giriki, Kristi ni agbára Ọlọ́run àti ọgbọ́n Ọlọ́run.",
        "note": "Kristi di ọgbọ́n wa láti ọ̀dọ̀ Ọlọ́run."
      },
      {
        "ref": "Kólósè 2:3",
        "text": "...ẹni nínú ẹni tí gbogbo ìṣúra ọgbọ́n àti ìmọ̀ pamọ́ sí.",
        "note": "Bí ẹnikẹ́ni bá ṣe àìní ọgbọ́n, kí ó tọrọ lọ́dọ̀ Ọlọ́run."
      }
    ]
  },
  "suffering": {
    "title": "Ìjìyà àti Ògo",
    "tagline": "Láti Jóòbù títí dé agbelebu — ìjìyà kì í ṣe òpin",
    "summary": "Ìwé Mímọ́ kò sọ pé ìgbàgbọ́ mú ìrora lọ. Ó sọ pé Ọlọ́run wà nínú rẹ̀, ó sì ń sọ ìjìyà di ògo.",
    "verses": [
      {
        "ref": "Jóòbù 23:10",
        "text": "Ṣùgbọ́n ó mọ ọ̀nà tí mo ń gbà; nígbà tí ó bá dán mi wò, n ó jáde bí wúrà.",
        "note": "Jóòbù kò kọ Ọlọ́run sílẹ̀ nínú òfò."
      },
      {
        "ref": "Sáàmù 22:1",
        "text": "Ọlọ́run mi, Ọlọ́run mi, èéṣe tí o fi kọ̀ mí sílẹ̀? Èéṣe tí o jìnà sí ìgbàlà mi?",
        "note": "Sáàmù 23 — nínú àfonífojì òjìji ikú, Ìwọ wà pẹ̀lú mi."
      },
      {
        "ref": "Aísáyà 53:3",
        "text": "Àwọn ènìyàn kẹ́gàn rẹ̀, wọ́n kọ̀ ọ́, ọkùnrin ìjìyà, ẹni tí ó mọ ìrora.",
        "note": "Wòlíì rí ìránṣẹ́ tí a pa lára."
      },
      {
        "ref": "Róòmù 5:3-4",
        "text": "...a tún ń ṣògo nínú ìjìyà wa, nítorí a mọ̀ pé ìjìyà ń bí ìdúróṣinṣin; ìdúróṣinṣin ń bí ìwà; ìwà ń bí ìrètí.",
        "note": "Kristi jìyà fún wa, ó fi àpẹẹrẹ sílẹ̀."
      },
      {
        "ref": "2 Kọ́ríntì 4:17",
        "text": "Nítorí ìṣòro wa fúyẹ́ àti fún ìgbà díẹ̀ ń ṣiṣẹ́ ògo ayérayé fún wa, èyí tí ó pọ̀ ju wọn lọ.",
        "note": "Ìjìyà ìsinsin yìí kò lè fiwé ògo tí ń bọ̀."
      },
      {
        "ref": "Róòmù 8:18",
        "text": "Mo ka pé ìjìyà wa lọ́wọ́lọ́wọ́ kò tọ́ sí fífiwé ògo tí a ó ṣí sílẹ̀ nínú wa.",
        "note": "Ọlọ́run yóò nu omijé gbogbo kúrò lójú wọn."
      }
    ]
  },
  "prayer": {
    "title": "Àdúrà",
    "tagline": "Láti igbe Mósè títí dé Jésù nínú ọgbà",
    "summary": "Àdúrà kì í ṣe ọ̀rọ̀ dídára. Ó jẹ́ ìbánisọ̀rọ̀ pẹ̀lú Baba — ìgbẹ́kẹ̀lé, ìtẹríba, àti ìdúró ṣinṣin.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 18:23",
        "text": "Nígbà náà Ábúráhámù sún mọ́ ọn, ó wí pé: Ṣé ìwọ yóò pa olódodo pẹ̀lú ènìyàn búburú run bí?",
        "note": "Mósè bẹ Ọlọ́run fún àwọn ènìyàn."
      },
      {
        "ref": "Ẹ́ksódù 32:32",
        "text": "Ṣùgbọ́n nísinsin yìí, jọ̀wọ́ dáríjì ẹ̀ṣẹ̀ wọn — ṣùgbọ́n bí kò bá ṣe bẹ́ẹ̀, pa orúkọ mi rẹ́ kúrò nínú ìwé tí ìwọ kọ.",
        "note": "Hánà sọ̀rọ̀ nínú ọkàn rẹ̀, ètè rẹ̀ ń mì."
      },
      {
        "ref": "Sáàmù 18:6",
        "text": "Nínú ìpọ́njú mi mo kígbe sí Olúwa; mo kígbe sí Ọlọ́run mi fún ìrànlọ́wọ́. Láti tẹ́mpílì rẹ̀ ó gbọ́ ohùn mi; ẹkún mi wá síwájú rẹ̀, sínú etí rẹ̀.",
        "note": "Sáàmù kọ́ wa láti sọ gbogbo ọkàn fún Ọlọ́run."
      },
      {
        "ref": "Dáníẹ́lì 6:10",
        "text": "...ó kúnlẹ̀, ó gbàdúrà, ó ń dúpẹ́ lọ́wọ́ Ọlọ́run rẹ̀, gẹ́gẹ́ bí ó ti ṣe tẹ́lẹ̀. Ìgbà mẹ́ta lójoojúmọ́ ni ó ń gbàdúrà.",
        "note": "Kọ́ wa láti gbàdúrà."
      },
      {
        "ref": "Mátíù 6:9",
        "text": "Báyìí ni kí ẹ gbàdúrà: Baba wa tí ń bẹ ní ọ̀run, kí a bọ̀wọ̀ fún orúkọ rẹ...",
        "note": "Jésù gbàdúrà nínú ọgbà títí omijé di ẹ̀jẹ̀."
      },
      {
        "ref": "Róòmù 8:34",
        "text": "Ta ni ẹni tí ń ṣe ìdájọ́? Kò sí. Kristi Jésù tí ó kú — ju bẹ́ẹ̀ lọ, tí a jí — ń bẹ ní ọwọ́ ọ̀tún Ọlọ́run, ó sì ń ṣe àdúrà ìbẹ̀wò fún wa.",
        "note": "Ẹ̀mí ń gbàdúrà nínú wa nígbà tí a kò mọ ohun tí a ó wí."
      }
    ]
  },
  "new-creation": {
    "title": "Ẹ̀dá Tuntun",
    "tagline": "Láti Édẹ́nì títí dé ọ̀run titun àti ayé titun",
    "summary": "Ìgbàlà kì í ṣe àtúnṣe díẹ̀. Ó jẹ́ ìbí tuntun. Ẹni tí ó wà nínú Kristi jẹ́ ẹ̀dá tuntun — àtijọ́ ti kọjá.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 1:1",
        "text": "Ní ìbẹ̀rẹ̀ Ọlọ́run dá àwọn ọ̀run àti ayé.",
        "note": "Ọlọ́run dá ènìyàn ní àwòrán ara Rẹ̀."
      },
      {
        "ref": "Aísáyà 65:17",
        "text": "Wò ó, n ó dá ọ̀run titun àti ayé titun. A kì yóò rántí ohun àtijọ́, bẹ́ẹ̀ ni wọn kì yóò wá sí ọkàn.",
        "note": "Wòlíì sọtẹ́lẹ̀ ọkàn titun."
      },
      {
        "ref": "2 Kọ́ríntì 5:17",
        "text": "Nítorí náà, bí ẹnìkan bá wà nínú Kristi, ẹ̀dá tuntun ti dé: àtijọ́ ti lọ, tuntun ti dé!",
        "note": "A gbọ́dọ̀ níbí nínú ẹ̀mí."
      },
      {
        "ref": "Gálátíà 6:15",
        "text": "Ìkọlà tàbí àìkọlà kò tumọ̀ sí nǹkan; ohun tó ṣe kókó ni ẹ̀dá tuntun.",
        "note": "Bí ẹnìkan bá wà nínú Kristi, ẹ̀dá tuntun ni."
      },
      {
        "ref": "Ìfihàn 21:1",
        "text": "Nígbà náà mo rí ọ̀run titun àti ayé titun, nítorí ọ̀run àkọ́kọ́ àti ayé àkọ́kọ́ ti kọjá, òkun kò sì sí mọ́.",
        "note": "Ẹ̀mí ń sọ wá di àwòrán Ọmọ."
      },
      {
        "ref": "Ìfihàn 21:5",
        "text": "Ẹni tí ó jókòó lórí ìtẹ́ wí pé, Èmi ń ṣe ohun gbogbo tuntun!",
        "note": "Mo ń ṣe ohun gbogbo tuntun."
      }
    ]
  },
  "bridegroom": {
    "title": "Ọkọ Ìyàwó",
    "tagline": "Láti ìtàn Hóṣéà títí dé àsè ìgbéyàwó Ọ̀dọ́-Àgùntàn",
    "summary": "Ọlọ́run kì í ṣe Olúwa nìkan. Ó jẹ́ Ọkọ tí ó fẹ́ ìyàwó Rẹ̀. Ìjọ ni ìyàwó Kristi.",
    "verses": [
      {
        "ref": "Song of Solomon 2:16",
        "text": "Olùfẹ́ mi jẹ́ tèmi, èmi sì jẹ́ tirẹ̀; ó ń jẹ láàárín òdòdó òdòdó.",
        "note": "Hóṣéà fẹ́ obìnrin tí kò ṣe olóòtọ́ — àwòrán ìfẹ́ Ọlọ́run."
      },
      {
        "ref": "Aísáyà 62:5",
        "text": "Gẹ́gẹ́ bí ọkọ ìyàwó ṣe ń yọ̀ lórí ìyàwó rẹ̀, bẹ́ẹ̀ ni Ọlọ́run rẹ yóò yọ̀ lórí rẹ.",
        "note": "Orin Sólómónì — ìfẹ́ tí kò jẹ́ kí omi nípọn."
      },
      {
        "ref": "Hóṣéà 2:19-20",
        "text": "N ó fi ọ́ ṣe ìyàwó mi títí láé; n ó fi ọ́ ṣe ìyàwó nínú òdodo àti ìdájọ́, nínú ìfẹ́ àti àánú.",
        "note": "Jésù pe ara Rẹ̀ ní ọkọ ìyàwó."
      },
      {
        "ref": "Jòhánù 3:29",
        "text": "Ọ̀rẹ́ tí ń ṣe ìsìn ọkọ ìyàwó ń dúró, ó ń tẹ́tí sí i, ó sì kún fún ayọ̀ nígbà tí ó bá gbọ́ ohùn ọkọ ìyàwó.",
        "note": "Ọkọ ńlá ni Kristi, ìjọ ni ìyàwó."
      },
      {
        "ref": "Éfésù 5:25-27",
        "text": "Ẹ̀yin ọkọ, ẹ fẹ́ aya yín, gẹ́gẹ́ bí Kristi ṣe fẹ́ ìjọ, tí ó fi ara rẹ̀ lélẹ̀ fún un láti sọ ọ́ di mímọ́, láti wẹ̀ ẹ́ nípa ìwẹ̀ nínú omi nípasẹ̀ ọ̀rọ̀.",
        "note": "Ẹ ṣetán — ọkọ ìyàwó ń bọ̀."
      },
      {
        "ref": "Ìfihàn 19:7",
        "text": "Ẹ jẹ́ kí a yọ̀, kí á dùn, kí á fi ògo fún un! Nítorí ìgbéyàwó Ọ̀dọ́-Àgùntàn ti dé, ìyàwó rẹ̀ sì ti ṣetán.",
        "note": "Àsè ìgbéyàwó Ọ̀dọ́-Àgùntàn ti dé."
      }
    ]
  },
  "servant": {
    "title": "Ìránṣẹ́",
    "tagline": "Láti ẹrú Ísírẹ́lì títí dé Ẹni tí ó wẹ ẹsẹ̀",
    "summary": "Nínú ìjọba Ọlọ́run, ẹni tó tóbi jù ni ìránṣẹ́ gbogbo ènìyàn. Jésù kò wá kí a sin, ṣùgbọ́n láti sin.",
    "verses": [
      {
        "ref": "Aísáyà 42:1",
        "text": "Èyí ni ìránṣẹ́ mi, ẹni tí mo ń gbé ró, àyànfẹ́ mi ẹni tí inú mi dùn sí; n ó fi Ẹ̀mí mi lé e lórí, yóò sì mú ìdájọ́ wá sí àwọn orílẹ̀-èdè.",
        "note": "Mósè ni ìránṣẹ́ Ọlọ́run."
      },
      {
        "ref": "Aísáyà 49:6",
        "text": "Ó kéré jù fún ọ láti jẹ́ ìránṣẹ́ mi láti dá ẹ̀yà Jákọ́bù padà, kí o sì mú àwọn tí mo pa mọ́ nínú Ísírẹ́lì padà. N ó tún sọ ọ́ di ìmọ́lẹ̀ fún àwọn Keferí.",
        "note": "Ìránṣẹ́ nínú Aísáyà kì yóò já ohun tí ó ṣẹ́."
      },
      {
        "ref": "Aísáyà 52:13",
        "text": "Wò ó, ìránṣẹ́ mi yóò hùwà ọlọ́gbọ́n; a ó gbé e sókè, a ó gbé e ga, a ó sì gbé e ga gidigidi.",
        "note": "Ọmọ ènìyàn wá láti sin."
      },
      {
        "ref": "Mátíù 12:18",
        "text": "Èyí ni ìránṣẹ́ mi tí mo yàn, ẹni tí mo fẹ́ràn, ẹni tí inú mi dùn sí; n ó fi Ẹ̀mí mi lé e lórí, yóò sì kéde ìdájọ́ fún àwọn orílẹ̀-èdè.",
        "note": "Ó wẹ ẹsẹ̀ wọn."
      },
      {
        "ref": "Márkù 10:45",
        "text": "Nítorí kódà Ọmọ Ènìyàn kò wá kí a sin òun, ṣùgbọ́n láti sin, àti láti fi ẹ̀mí rẹ̀ ṣe ìràpadà fún ọ̀pọ̀.",
        "note": "Ó tu ara Rẹ̀ sílẹ̀, ó gba irú ìránṣẹ́."
      },
      {
        "ref": "Jòhánù 13:4-5",
        "text": "...ó dìde kúrò nínú oúnjẹ, ó bọ́ aṣọ òde, ó di ìtẹ́ẹ̀wù mọ́ ìbàdí. Lẹ́yìn náà ó da omi sínú àwo, ó bẹ̀rẹ̀ sí wẹ ẹsẹ̀ àwọn ọmọ-ẹ̀yìn rẹ̀.",
        "note": "Ẹ fi ìfẹ́ jẹ́ ìránṣẹ́ fún ara yín."
      }
    ]
  },
  "tree": {
    "title": "Igi Ìyè",
    "tagline": "Láti Édẹ́nì títí dé igi ní odò ìlú Ọlọ́run",
    "summary": "Ìtàn ènìyàn bẹ̀rẹ̀ pẹ̀lú igi méjì. Ó parí pẹ̀lú igi kan. Agbelebu ni igi tí ó mú wa padà sí ìyè.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 2:9",
        "text": "Olúwa Ọlọ́run jẹ́ kí onírúurú igi hú jáde lára ilẹ̀ — igi tí ó wu ojú, tí ó sì dára fún oúnjẹ. Ní àárín ọgbà ni igi ìyè àti igi ìmọ̀ rere àti búburú wà.",
        "note": "Igi ìyè ní àárín ọgbà."
      },
      {
        "ref": "Jẹ́nẹ́sísì 3:24",
        "text": "Lẹ́yìn tí ó lé ọkùnrin jáde, ó gbé kérúbù àti idà iná tí ń tàn síwájú sẹ́yìn sí ìhà ìlà-oòrùn Ọgbà Édẹ́nì láti ṣọ́ ọ̀nà igi ìyè.",
        "note": "Wọ́n yàn igi ìmọ̀ — ikú wọlé."
      },
      {
        "ref": "Òwe 3:18",
        "text": "Òun jẹ́ igi ìyè fún àwọn tí ó di í mú; àwọn tí ó di í mú ṣinṣin ni a ó bùkún.",
        "note": "Ẹni tí a gbé sórí igi jẹ́ ẹni ìbúra."
      },
      {
        "ref": "Òwe 11:30",
        "text": "Èso olódodo jẹ́ igi ìyè, ẹni ọlọ́gbọ́n sì ń gbà ẹ̀mí là.",
        "note": "Kristi ra wá padà kúrò nínú ìbúra òfin."
      },
      {
        "ref": "1 Pétérù 2:24",
        "text": "Òun fúnra rẹ̀ gbé ẹ̀ṣẹ̀ wa nínú ara rẹ̀ lórí igi, kí a lè kú sí ẹ̀ṣẹ̀, kí a sì yè fún òdodo; nípasẹ̀ ọgbẹ́ rẹ̀ ni a wò yín sàn.",
        "note": "Agbelebu ni igi ìgbàlà."
      },
      {
        "ref": "Ìfihàn 22:2",
        "text": "Ní ẹ̀gbẹ́ méjèèjì odò ni igi ìyè dúró, ó ń so èso irú méjìlá, ó ń so èso oṣooṣù. Ewé igi náà sì wà fún ìwòsàn àwọn orílẹ̀-èdè.",
        "note": "Igi ìyè ń so èso lóṣooṣù, àwọn ewé rẹ̀ ń wòsàn orílẹ̀-èdè."
      }
    ]
  },
  "rock": {
    "title": "Àpáta",
    "tagline": "Láti àpáta Hórẹ́bù títí dé Kristi, àpáta wa",
    "summary": "Ọlọ́run jẹ́ àpáta — ìdúróṣinṣin nígbà tí ohun gbogbo ń mì. Kristi ni àpáta tí a kọ ìjọ lé.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 17:6",
        "text": "Èmi yóò dúró níbẹ̀ níwájú rẹ lẹ́bàá àpáta ní Hórẹ́bù. Lu àpáta, omi yóò jáde kí àwọn ènìyàn lè mu. Bẹ́ẹ̀ ni Mósè ṣe.",
        "note": "Omi jáde láti àpáta tí a kọlù."
      },
      {
        "ref": "Sáàmù 18:2",
        "text": "Olúwa ni àpáta mi, ilé-ìṣọ́ mi àti olùgbàlà mi; Ọlọ́run mi ni àpáta mi, ẹni tí mo sá sí, apata mi àti ìwo ìgbàlà mi, ibi ìsádi mi.",
        "note": "Àpáta náà ni Kristi."
      },
      {
        "ref": "Aísáyà 28:16",
        "text": "Wò ó, mo gbé òkúta kan kalẹ̀ ní Síónì, òkúta tí a dán wò, òkúta igun iyebíye fún ìpìlẹ̀ tó dáa; ẹni tí ó gbẹ́kẹ̀lé e kì yóò yà lẹ́nu.",
        "note": "Olúwa ni àpáta mi àti ìgbàlà mi."
      },
      {
        "ref": "1 Kọ́ríntì 10:4",
        "text": "...wọ́n mu nínú àpáta ẹ̀mí tí ń bá wọn lọ, àpáta yẹn sì ni Kristi.",
        "note": "Àpáta tí àwọn ọ̀mọ̀lé kọ̀."
      },
      {
        "ref": "Ìṣe 4:11",
        "text": "Jésù ni òkúta tí ẹ̀yin ọ̀mọ̀lé kọ̀, èyí tí ó di òkúta igun.",
        "note": "Lórí àpáta yìí ni n ó kọ ìjọ mi."
      },
      {
        "ref": "1 Pétérù 2:4",
        "text": "Bí ẹ ṣe ń wá sọ́dọ̀ rẹ̀, Òkúta ìyè — tí ènìyàn kọ̀ ṣùgbọ́n tí Ọlọ́run yàn, tí ó sì ṣe iyebíye fún un.",
        "note": "Kò sí ìpìlẹ̀ mìíràn tí a lè fi kọ́."
      }
    ]
  },
  "remnant": {
    "title": "Ìyókù",
    "tagline": "Láti ọkọ̀ Nóà títí dé ẹgbẹẹgbẹ̀rún tí kò tẹrí",
    "summary": "Ọlọ́run kì í ṣe é kí ohun gbogbo parun. Ó ń pa ìyókù mọ́ — díẹ̀ tí ó ṣì dúró, nínú ẹni tí ìlérí ń gbé.",
    "verses": [
      {
        "ref": "1 Ọba 19:18",
        "text": "Síbẹ̀ mo pa ẹgbẹẹgbẹ̀rún méje mọ́ ní Ísírẹ́lì — gbogbo àwọn tí orúnkún wọn kò tẹ̀ fún Báálì, tí ẹnu wọn kò fi ẹnu kàn án.",
        "note": "Nóà rí oore-ọ̀fẹ́ — ìyókù ìṣẹ̀dá."
      },
      {
        "ref": "Aísáyà 10:21",
        "text": "Ìyókù kan yóò padà, ìyókù Jákọ́bù yóò padà sí ọ̀dọ̀ Ọlọ́run Alágbára.",
        "note": "Ẹgbẹẹgbẹ̀rún méje tí kò tẹ orúnkún fún Báálì."
      },
      {
        "ref": "Míkà 5:7",
        "text": "Ìyókù Jákọ́bù yóò wà láàárín ọ̀pọ̀ ènìyàn bí ìrì láti ọ̀dọ̀ Olúwa, bí òjò lórí koríko, tí kì í dúró de ẹnìkan, tí kì í gbẹ́kẹ̀lé ènìyàn.",
        "note": "Ìyókù yóò padà."
      },
      {
        "ref": "Róòmù 11:5",
        "text": "Bẹ́ẹ̀ náà ni ní àkókò yìí, ìyókù kan wà tí a yàn nípa oore-ọ̀fẹ́.",
        "note": "Ọlọ́run kò sọ Ísírẹ́lì nù."
      },
      {
        "ref": "Róòmù 9:27",
        "text": "Aísáyà kígbe nípa Ísírẹ́lì: Bí iye àwọn ọmọ Ísírẹ́lì tilẹ̀ dàbí iyanrìn etí òkun, ìyókù nìkan ni a ó gbà là.",
        "note": "Ẹnu ọ̀nà ìpọ́nmnú."
      },
      {
        "ref": "Ìfihàn 12:17",
        "text": "Nígbà náà dragoni bínú sí obìnrin náà, ó lọ láti ṣe ogun sí ìyókù irú-ọmọ rẹ̀ — àwọn tí ń pa àṣẹ Ọlọ́run mọ́, tí ń di ẹ̀rí wọn nípa Jésù mú.",
        "note": "Ẹgbẹẹgbẹ̀rún tí kò tẹ orúnkún fún ère."
      }
    ]
  },
  "kingdom": {
    "title": "Ìjọba Ọlọ́run",
    "tagline": "Láti ìlérí Dáfídì títí dé ìjọba tí kì yóò ní òpin",
    "summary": "Jésù kò wá láti kọ́ ẹgbẹ́ nìkan. Ó wá láti kéde ìjọba. Ìjọba náà ti dé, ó sì ń bọ̀.",
    "verses": [
      {
        "ref": "Dáníẹ́lì 2:44",
        "text": "Ní àkókò àwọn ọba wọ̀nyí, Ọlọ́run ọ̀run yóò gbé ìjọba kan kalẹ̀ tí kì yóò parun, tí a kì yóò fi lé ènìyàn mìíràn lọ́wọ́. Yóò fọ́ gbogbo ìjọba wọ̀nyí, òun fúnra rẹ̀ yóò sì dúró títí láé.",
        "note": "Ìjọba rẹ̀ ni ìjọba ayérayé."
      },
      {
        "ref": "Dáníẹ́lì 7:14",
        "text": "A fi àṣẹ, ògo àti agbára ọba fún un; gbogbo orílẹ̀-èdè àti ènìyàn èdè gbogbo sin ìn. Ìjọba rẹ̀ jẹ́ ìjọba ayérayé tí kì yóò kọjá, ìjọba rẹ̀ kì yóò parun.",
        "note": "Ọlọ́run ń ṣàkóso, kódà nígbà tí ọba ayé ń ṣe ìkà."
      },
      {
        "ref": "Márkù 1:15",
        "text": "Àkókò ti dé, ni ó wí. Ìjọba Ọlọ́run ti súnmọ́. Ẹ ronú pìwàdà, ẹ gbàgbọ́ ìhìn rere!",
        "note": "Ìjọba ọ̀run ti súnmọ́."
      },
      {
        "ref": "Lúùkù 17:21",
        "text": "...bẹ́ẹ̀ ni ènìyàn kì yóò wí pé, Ó wà níbí, tàbí Ó wà níbẹ̀, nítorí ìjọba Ọlọ́run wà láàárín yín.",
        "note": "Ìjọba Ọlọ́run dàbí irúgbìn ọṣùṣù ṣẹ́ẹ́bẹ́."
      },
      {
        "ref": "Róòmù 14:17",
        "text": "Nítorí ìjọba Ọlọ́run kì í ṣe ọ̀rọ̀ jíjẹ àti mímu, ṣùgbọ́n òdodo, àlàáfíà àti ayọ̀ nínú Ẹ̀mí Mímọ́.",
        "note": "Ìjọba mi kì í ṣe ti ayé yìí."
      },
      {
        "ref": "Ìfihàn 11:15",
        "text": "Áńgẹ́lì keje fọn ìpè rẹ̀, ohùn rara wà ní ọ̀run, tí ń wí pé: Ìjọba ayé ti di ìjọba Olúwa wa àti ti Mèsáyà rẹ̀, yóò sì ṣe ọba títí láé.",
        "note": "Ìjọba ayé di ìjọba Olúwa wa àti Kristi Rẹ̀."
      }
    ]
  },
  "redemption": {
    "title": "Ìràpadà",
    "tagline": "Láti òwò ẹrú títí dé iye tí a san lórí agbelebu",
    "summary": "Ìràpadà jẹ́ ọ̀rọ̀ ọjà: a ra ẹnìkan padà. Ọlọ́run san iye wa — kì í ṣe fàdákà tàbí wúrà, ṣùgbọ́n ẹ̀jẹ̀ Ọmọ Rẹ̀.",
    "verses": [
      {
        "ref": "Léfítíkù 25:25",
        "text": "Bí ọ̀kan nínú ará Ísírẹ́lì rẹ bá di tálákà, tí ó ta nínú ohun ìní rẹ̀, ìbátan rẹ̀ tó súnmọ́ gbọdọ̀ wá rá ohun tí ó tà padà.",
        "note": "Ìjáde jẹ́ ìràpadà kúrò nínú ẹrú."
      },
      {
        "ref": "Rúùtù 4:9-10",
        "text": "Bóásì kéde fún àwọn àgbà àti gbogbo ènìyàn pé, Lónìí ẹ jẹ́ ẹlẹ́rìí pé mo ti ra gbogbo ohun ìní Elímélékì lọ́dọ̀ Náómì... Mo sì tún ti gba Rúùtù ará Móábù, aya ọkọ Náómì tí ó kú.",
        "note": "Ìràpadà àkọ́bí."
      },
      {
        "ref": "Aísáyà 44:22",
        "text": "Mo ti gbá ẹ̀ṣẹ̀ rẹ lọ bí ìkùukùu, ẹ̀ṣẹ̀ rẹ bí ìkùukùu òwúrọ̀. Padà sí ọ̀dọ̀ mi, nítorí mo ti rà ọ́ padà.",
        "note": "Mo ti rà ọ́ padà."
      },
      {
        "ref": "Gálátíà 3:13",
        "text": "Kristi ra wa padà kúrò nínú ìbúra òfin nípa dídi ìbúra fún wa, nítorí a kọ pé: Ẹni tí a gbé sórí igi jẹ́ ẹni ìbúra.",
        "note": "Ọmọ ènìyàn wá láti fi ẹ̀mí Rẹ̀ ṣe ìràpadà fún ọ̀pọ̀."
      },
      {
        "ref": "Éfésù 1:7",
        "text": "Nínú rẹ̀ ni a ní ìràpadà nípasẹ̀ ẹ̀jẹ̀ rẹ̀, ìdáríjì ẹ̀ṣẹ̀, gẹ́gẹ́ bí ọrọ̀ oore-ọ̀fẹ́ Ọlọ́run.",
        "note": "A rà yín padà pẹ̀lú iye."
      },
      {
        "ref": "Ìfihàn 5:9",
        "text": "Ìwọ yẹ láti mú ìwé náà, kí o ṣí èdìdì rẹ̀, nítorí a pa ọ́, pẹ̀lú ẹ̀jẹ̀ rẹ ni o ra ènìyàn fún Ọlọ́run láti ẹ̀yà, èdè, ènìyàn àti orílẹ̀-èdè gbogbo.",
        "note": "Nínú Ẹni náà ni a ní ìràpadà nípasẹ̀ ẹ̀jẹ̀ Rẹ̀."
      }
    ]
  },
  "peace": {
    "title": "Àlàáfíà (Ṣálómù)",
    "tagline": "Láti ìlérí Nóà títí dé àlàáfíà tí ó kọjá òye",
    "summary": "Ṣálómù kì í ṣe àìsí ogun nìkan. Ó jẹ́ ìwàláàyè kíkún — ìbáṣepọ̀ pẹ̀lú Ọlọ́run, ènìyàn, àti ara ẹni. Kristi ni àlàáfíà wa.",
    "verses": [
      {
        "ref": "Nọ́ḿbà 6:24-26",
        "text": "Olúwa bùkún ọ, kí ó sì tọ́jọ́ ọ; Olúwa jẹ́ kí ojú rẹ̀ tàn sórí rẹ, kí ó ṣe oore-ọ̀fẹ́ fún ọ; Olúwa yí ojú rẹ̀ sí ọ, kí ó fún ọ ní àlàáfíà.",
        "note": "Òṣùmàrè — ìlérí kì yóò parun mọ́."
      },
      {
        "ref": "Aísáyà 9:6",
        "text": "Nítorí ọmọ ni a bí fún wa, ọmọkùnrin ni a fi fún wa... A ó pe é ní Olùdámọ̀ràn Ìyanu, Ọlọ́run Alágbára, Baba Ayérayé, Ọmọ-aláàáfíà.",
        "note": "Olúwa bùkún ọ, kí ó sì tọ́jọ́ ọ."
      },
      {
        "ref": "Aísáyà 53:5",
        "text": "Ìwọ yóò pa ìrọ̀rùn mọ́ ní àlàáfíà pípé, nítorí òun gbẹ́kẹ̀lé ọ.",
        "note": "A ó pe orúkọ rẹ̀ ní Ọmọ-aláàáfíà."
      },
      {
        "ref": "Jòhánù 14:27",
        "text": "Àlàáfíà ni èmi ń fi sílẹ̀ fún yín; àlàáfíà tèmi ni èmi ń fún yín. Èmi kì í fún yín gẹ́gẹ́ bí ayé ṣe ń fúnni. Ọkàn yín má ṣe yọ̀, kí ó má sì ṣe ẹ̀rù.",
        "note": "Àlàáfíà mo fi fún yín, kì í ṣe bí ayé ṣe ń fúnni."
      },
      {
        "ref": "Róòmù 5:1",
        "text": "Nítorí òun ni àlàáfíà wa, ẹni tí ó sọ àwọn méjèèjì di ọ̀kan, tí ó wó ògiri ìkángun tí ń pín wọn lulẹ̀.",
        "note": "Òun ni àlàáfíà wa, ẹni tí ó sọ méjèèjì di ọ̀kan."
      },
      {
        "ref": "Fílípì 4:7",
        "text": "Kí àlàáfíà Ọlọ́run, tí ó kọjá gbogbo òye, ṣọ́ ọkàn àti èrò yín nínú Kristi Jésù.",
        "note": "Àlàáfíà Ọlọ́run tí ó kọjá gbogbo òye yóò ṣọ́ ọkàn yín."
      }
    ]
  },
  "holiness": {
    "title": "Ìmímọ́",
    "tagline": "Láti Sínáì títí dé ẹ̀pè: Ẹ jẹ́ mímọ́",
    "summary": "Ìmímọ́ kì í ṣe ìwà ìrẹlẹ̀ nìkan. Ó jẹ́ yíyà sọ́tọ̀ fún Ọlọ́run. Ẹni tí ó rà wá fẹ́ kí a dàbí Òun.",
    "verses": [
      {
        "ref": "Léfítíkù 19:2",
        "text": "Ẹ sọ̀rọ̀ sí gbogbo ìjọ àwọn ọmọ Ísírẹ́lì, kí o sọ fún wọn: Ẹ jẹ́ mímọ́ nítorí èmi, Olúwa Ọlọ́run yín, mímọ́ ni.",
        "note": "Ẹ jẹ́ mímọ́, nítorí Èmi mímọ́ ni."
      },
      {
        "ref": "Aísáyà 6:3",
        "text": "Ẹni mímọ́, mímọ́, mímọ́ ni Olúwa àwọn ọmọ-ogun; gbogbo ayé kún fún ògo rẹ̀.",
        "note": "Kò sí ẹni tí yóò rí Olúwa láìsí ìmímọ́."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 36:27",
        "text": "Kò sí ẹnìkan tí yóò rí Olúwa láìsí ìmímọ́.",
        "note": "Wòlíì rí Ọlọ́run mímọ́, ó kígbe: Èmi parun."
      },
      {
        "ref": "1 Pétérù 1:15-16",
        "text": "Jésù gbàdúrà: Ya wọn sọ́tọ̀ nínú òtítọ́; ọ̀rọ̀ rẹ ni òtítọ́.",
        "note": "Jésù gbàdúrà: Ya wọn sọ́tọ̀ nínú òtítọ́."
      },
      {
        "ref": "Róòmù 6:19",
        "text": "Ṣùgbọ́n gẹ́gẹ́ bí Ẹni tí ó pè yín ṣe mímọ́, ẹ jẹ́ mímọ́ nínú gbogbo ìgbésí ayé yín.",
        "note": "Ẹ̀yin ni irú ẹnìkan mímọ́."
      },
      {
        "ref": "Hébérù 12:14",
        "text": "Kí Ọlọ́run àlàáfíà fúnra rẹ̀ sọ yín di mímọ́ pátápátá.",
        "note": "Kí àlàáfíà Ọlọ́run sọ yín di mímọ́ pátápátá."
      }
    ]
  },
  "mission": {
    "title": "Iṣẹ́ Ńlá",
    "tagline": "Láti ìlérí Ábúráhámù títí dé òpin ayé",
    "summary": "Ìgbàlà kì í ṣe fún ẹ̀yà kan. Ìbùkún Ábúráhámù jẹ́ fún orílẹ̀-èdè gbogbo. Ìjọ ni ọwọ́ Ọlọ́run sí ayé.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 12:3",
        "text": "Nínú rẹ ni gbogbo ìdílé ayé yóò bùkún.",
        "note": "Nínú rẹ ni gbogbo ìdílé ayé yóò bùkún."
      },
      {
        "ref": "Sáàmù 67:2",
        "text": "N ó sọ ọ́ di ìmọ́lẹ̀ fún àwọn orílẹ̀-èdè, kí ìgbàlà mi lè dé òpin ayé.",
        "note": "Ìmọ́lẹ̀ sí àwọn keferí."
      },
      {
        "ref": "Aísáyà 49:6",
        "text": "Nítorí náà ẹ lọ, ẹ ṣe àwọn orílẹ̀-èdè gbogbo ní ọmọ-ẹ̀yìn, ẹ ṣe wọn ní ìtẹ̀bọmi ní orúkọ Baba àti Ọmọ àti Ẹ̀mí Mímọ́.",
        "note": "Ẹ lọ, ẹ ṣe àwọn orílẹ̀-èdè ní ọmọ-ẹ̀yìn."
      },
      {
        "ref": "Mátíù 28:19",
        "text": "Ẹ ó jẹ́ ẹlẹ́rìí mi ní Jerúsálẹ́mù, ní Júdíà gbogbo àti Sàmáríà, títí dé òpin ayé.",
        "note": "Ẹ ó jẹ́ ẹlẹ́rìí mi títí dé òpin ayé."
      },
      {
        "ref": "Ìṣe 1:8",
        "text": "Báwo ni wọn ṣe lè pe ẹni tí wọn kò gbàgbọ́ sí? Báwo ni wọn ṣe lè gbàgbọ́ ẹni tí wọn kò gbọ́ nípa rẹ̀? Báwo ni wọn ṣe lè gbọ́ láìsí òjíṣẹ́?",
        "note": "Báwo ni wọn ṣe lè gbọ́ bí a kò bá ránṣẹ́?"
      },
      {
        "ref": "Ìfihàn 7:9",
        "text": "A ó wàásù ìhìn rere yìí ní gbogbo ayé gẹ́gẹ́ bí ẹ̀rí fún gbogbo orílẹ̀-èdè, nígbà náà ni òpin yóò dé.",
        "note": "Ìhìn rere yìí ni a ó wàásù ní gbogbo ayé."
      }
    ]
  },
  "adoption": {
    "title": "Ìsọmọ",
    "tagline": "Láti Ísírẹ́lì ọmọ Ọlọ́run títí dé Ẹ̀mí ìsọmọ",
    "summary": "Ìgbàlà kì í ṣe ìdájọ́ òdodo nìkan. Ó jẹ́ ìwọlé sí ìdílé. A kì í ṣe ìránṣẹ́ mọ́. A jẹ́ ọmọ.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 4:22",
        "text": "Nígbà náà sọ fún Fáráò pé, Báyìí ni Olúwa wí: Ísírẹ́lì ni ọmọ mi, àkọ́bí mi.",
        "note": "Ísírẹ́lì ni ọmọ Mi àkọ́bí."
      },
      {
        "ref": "Hóṣéà 11:1",
        "text": "Bí baba ṣe ṣàánú àwọn ọmọ rẹ̀, bẹ́ẹ̀ ni Olúwa ṣe ṣàánú àwọn tí ń bẹ̀rù rẹ̀.",
        "note": "Bí Baba ṣe ṣàánú àwọn ọmọ rẹ̀."
      },
      {
        "ref": "Jòhánù 1:12",
        "text": "Nítorí ẹ̀yin kò gba ẹ̀mí ìrúǹdòmọ lẹ́ẹ̀kan sí i tí ń mú ìbẹ̀rù wá, ṣùgbọ́n ẹ gba Ẹ̀mí ìsọmọ, nípasẹ̀ ẹni tí a ń kígbe pé, Ábà, Baba.",
        "note": "Ẹ̀yin ti gba ẹ̀mí ìsọmọ."
      },
      {
        "ref": "Róòmù 8:15",
        "text": "Nítorí náà ẹ kì í ṣe àlejò àti àtìpó mọ́, ṣùgbọ́n ẹ jẹ́ ará ìlú pẹ̀lú àwọn ènìyàn mímọ́, ọmọ ìdílé Ọlọ́run.",
        "note": "Ẹ̀yin kì í ṣe àlejò mọ́ ṣùgbọ́n ọmọ ìdílé."
      },
      {
        "ref": "Gálátíà 4:4-5",
        "text": "Wò irú ìfẹ́ tí Baba fi fún wa, kí a lè jẹ́ ọmọ Ọlọ́run! Bẹ́ẹ̀ ni àwa ṣe rí.",
        "note": "Wo irú ìfẹ́ tí Baba fi fún wa, kí a lè jẹ́ ọmọ Ọlọ́run."
      },
      {
        "ref": "1 Jòhánù 3:1",
        "text": "Nísinsin yìí ẹ̀yin jẹ́ ọmọ Ọlọ́run nípasẹ̀ ìgbàgbọ́ nínú Kristi Jésù.",
        "note": "Bí a bá jẹ́ ọmọ, a jẹ́ ajogún pẹ̀lú."
      }
    ]
  },
  "justice": {
    "title": "Ìdájọ́ Òdodo àti Òdodo",
    "tagline": "Láti òfin Sínáì títí dé Ọba tí ń ṣe ìdájọ́ nínú òdodo",
    "summary": "Ọlọ́run fẹ́ràn ìdájọ́. Kì í ṣe ìbínú làsán — ó jẹ́ ìtọ́jú àwọn aláìlágbára àti ìsọ di òtítọ́ ohun tí ó tọ́.",
    "verses": [
      {
        "ref": "Ámósì 5:24",
        "text": "Ìdájọ́ òdodo àti ìdájọ́ ni ìtẹ́ rẹ̀ ń fìdí múlẹ̀.",
        "note": "Ìdájọ́ òdodo ni ìtẹ́ rẹ̀ ń fìdí múlẹ̀."
      },
      {
        "ref": "Míkà 6:8",
        "text": "Ẹ kọ́ ṣíṣe rere; ẹ wá ìdájọ́, ẹ tú ìnilára, ẹ ṣe ẹjọ́ ọmọ òrukàn, ẹ díjọ́ fún opó.",
        "note": "Ẹ máa ṣe ìdájọ́, ẹ fẹ́ràn àánú."
      },
      {
        "ref": "Aísáyà 61:8",
        "text": "Ó fi ìdájọ́ òdodo hàn ọ́, ènìyàn: kí o ṣe ìdájọ́, kí o fẹ́ràn àánú, kí o sì rìn pẹ̀lú Ọlọ́run rẹ ní ìrẹ̀lẹ̀.",
        "note": "Ó fi ìdájọ́ òdodo hàn ọ́, ènìyàn."
      },
      {
        "ref": "Mátíù 5:6",
        "text": "Ẹ̀mí Olúwa wà lára mi, nítorí ó fi òróró yì mí láti wàásù ìhìn rere fún àwọn tálákà, láti kéde òmìnira fún àwọn ìgbèkùn.",
        "note": "Ìyàwó ìfẹ́kúfẹ̀ẹ́ àti ọmọ òrukàn."
      },
      {
        "ref": "Mátíù 25:40",
        "text": "Olúwa ń ṣiṣẹ́ ìdájọ́ òdodo fún àwọn tí a ni lára, ó ń fún àwọn ebi ní oúnjẹ. Olúwa ń tú àwọn ìgbèkùn sílẹ̀.",
        "note": "Jésù kéde ìdáǹde fún àwọn ìgbèkùn."
      },
      {
        "ref": "Róòmù 3:26",
        "text": "Wò ó, mo ń ṣẹ̀dá ọ̀run titun àti ayé titun... a kì yóò gbọ́ ohùn ẹkún tàbí ìhó ìbànújẹ́ níbẹ̀ mọ́.",
        "note": "Òun yóò ṣe ìdájọ́ ayé ní òdodo."
      }
    ]
  },
  "sabbath": {
    "title": "Ọjọ́ Ìsinmi",
    "tagline": "Láti ọjọ́ keje ìṣẹ̀dá títí dé ìsinmi ayérayé",
    "summary": "Ìsinmi kì í ṣe ọ̀rẹ̀. Ó jẹ́ ètò Ọlọ́run. Jésù ni Olúwa ọjọ́ ìsinmi, Òun sì ń pe wa sí ìsinmi ẹ̀mí.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 2:3",
        "text": "Ní ọjọ́ keje Ọlọ́run parí iṣẹ́ tí ó ṣe; ní ọjọ́ keje ó sinmi kúrò nínú gbogbo iṣẹ́ rẹ̀.",
        "note": "Ọlọ́run sinmi ní ọjọ́ keje, ó sì sọ ọ́ di mímọ́."
      },
      {
        "ref": "Ẹ́ksódù 20:8",
        "text": "Rántí ọjọ́ ìsinmi, láti sọ ọ́ di mímọ́.",
        "note": "Rántí ọjọ́ ìsinmi, láti sọ ọ́ di mímọ́."
      },
      {
        "ref": "Aísáyà 58:13-14",
        "text": "Ọjọ́ ìsinmi ni a ṣe fún ènìyàn, kì í ṣe ènìyàn fún ọjọ́ ìsinmi. Nítorí náà Ọmọ Ènìyàn jẹ́ Olúwa kódà fún ọjọ́ ìsinmi.",
        "note": "Ìsinmi ni fún ènìyàn, kì í ṣe ènìyàn fún ìsinmi."
      },
      {
        "ref": "Mátíù 12:8",
        "text": "Ẹ̀yin gbogbo tí ẹ ń ṣe làálàá, tí ẹ sì ru ẹrù, ẹ wá sí ọ̀dọ̀ mi, èmi yóò sì fún yín ní ìsinmi.",
        "note": "Ẹ̀yin tí ẹ ń ṣe làálàá, ẹ wá sí ọ̀dọ̀ mi."
      },
      {
        "ref": "Mátíù 11:28-29",
        "text": "Nítorí náà, ìsinmi ṣàbàá ṣì wà fún àwọn ènìyàn Ọlọ́run.",
        "note": "Ìsinmi ṣì wà fún àwọn ènìyàn Ọlọ́run."
      },
      {
        "ref": "Hébérù 4:9-10",
        "text": "Olúwa yóò pa ọjọ́ ìsinmi mọ́... ìyìn àti ògo ni fún orúkọ rẹ̀.",
        "note": "Wọ́n máa ń sinmi kúrò nínú iṣẹ́ wọn, gẹ́gẹ́ bí Ọlọ́run ṣe sinmi."
      }
    ]
  },
  "name": {
    "title": "Orúkọ Ọlọ́run",
    "tagline": "Láti ìwé iná títí dé orúkọ tí ó ga jù lọ",
    "summary": "Orúkọ Ọlọ́run kì í ṣe àkọlé. Ó jẹ́ ìwà Rẹ̀. Nígbà tí Ó fi orúkọ Rẹ̀ hàn, Ó fi ara Rẹ̀ hàn.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 3:14",
        "text": "Ọlọ́run sọ fún Mósè pé, ÈMI NI ẸNI TÍ N Ó ṢE.",
        "note": "Èmi ni Èmi yóò ṣe."
      },
      {
        "ref": "Sáàmù 9:10",
        "text": "Olúwa, Olúwa, Ọlọ́run àánú àti oore-ọ̀fẹ́, ẹni tí ń bínú pẹ̀, ẹni tí ó pọ̀ ní ìfẹ́ òtítọ́.",
        "note": "Olúwa, Olúwa, Ọlọ́run àánú àti oore-ọ̀fẹ́."
      },
      {
        "ref": "Òwe 18:10",
        "text": "Orúkọ Olúwa jẹ́ ilé-ìṣọ́ alágbára; olódodo ń sá sínú rẹ̀, ó sì wà láàbò.",
        "note": "Orúkọ rẹ̀ ni ìyànmọ́ alágbára."
      },
      {
        "ref": "Jòhánù 8:58",
        "text": "Nítorí náà Ọlọ́run gbé e ga gidigidi, ó sì fún un ní orúkọ tí ó ga ju gbogbo orúkọ lọ.",
        "note": "Pè mí ní orúkọ mi, Èmi yóò dá ọ lóhùn."
      },
      {
        "ref": "Ìṣe 4:12",
        "text": "Kò sí ìgbàlà nínú ẹnikẹ́ni mìíràn, nítorí kò sí orúkọ mìíràn lábẹ́ ọ̀run tí a fi fún ènìyàn nípa ẹni tí a gbọdọ̀ gbà wà là.",
        "note": "Sọ orúkọ rẹ̀ ní Jésù, nítorí òun ni yóò gba àwọn ènìyàn rẹ̀ là."
      },
      {
        "ref": "Fílípì 2:9-10",
        "text": "Kí nítorí náà, ní orúkọ Jésù, gbogbo lókùn, ní ọ̀run àti lórí ilẹ̀ àti ní ìsàlẹ̀ ilẹ̀, kí ó tẹrí.",
        "note": "Ní orúkọ Jésù gbogbo lókùn yóò tẹrí."
      }
    ]
  },
  "healing": {
    "title": "Ìwòsàn",
    "tagline": "Láti orísun Márà títí dé ìyà ẹni tí ó mú wà láàlàáfíà",
    "summary": "Ọlọ́run jẹ́ Olùwòsàn. Ìwòsàn nínú Ìwé Mímọ́ kì í ṣe ara nìkan — ó jẹ́ ìdápadà gbogbo ẹ̀dá sí ètò Ọlọ́run.",
    "verses": [
      {
        "ref": "2 Ọba 5:14",
        "text": "Nítorí èmi, Olúwa, ni olùwòsàn rẹ.",
        "note": "Èmi ni Olúwa, olùwòsàn rẹ."
      },
      {
        "ref": "Sáàmù 103:3",
        "text": "Ó ń wo gbogbo àìsàn wọn sàn.",
        "note": "Ó ń wo gbogbo àìsàn wọn sàn."
      },
      {
        "ref": "Aísáyà 53:5",
        "text": "Nítòótọ́, òun gbé àìsàn wa, ó ru ìbànújẹ́ wa.",
        "note": "Nípasẹ̀ ìyà rẹ̀ ni a rí ìwòsàn."
      },
      {
        "ref": "Mátíù 9:5-6",
        "text": "Ní ọ̀sán, ó mú àwọn tí ó ní onírúurú àìsàn wá sí ọ̀dọ̀ rẹ̀, ó fi ọwọ́ lé wọn kọ̀ọ̀kan, ó wò wọ́n sàn.",
        "note": "Jésù fi ọwọ́ bà wọ́n, ó wò wọ́n sàn."
      },
      {
        "ref": "1 Pétérù 2:24",
        "text": "Àdúrà ìgbàgbọ́ yóò gbà aláìsàn là; Olúwa yóò gbé e sókè. Bí ó bá ṣẹ̀, a ó dáríjì rẹ̀.",
        "note": "Àdúrà ìgbàgbọ́ yóò gba aláìsàn là."
      },
      {
        "ref": "Ìfihàn 21:4",
        "text": "Yóò nu omijé gbogbo kúrò lójú wọn. Kì yóò sí ikú mọ́, tàbí ọ̀fọ̀, tàbí ẹkún, tàbí ìrora.",
        "note": "Kò ní ìbànújẹ́, ìrora, tàbí ẹkún mọ́."
      }
    ]
  },
  "humility": {
    "title": "Ìrẹ̀lẹ̀",
    "tagline": "Láti Mósè títí dé ẹnìkan tí ó wẹ ẹsẹ̀",
    "summary": "Ìrẹ̀lẹ̀ kì í ṣe kí a sọ ara ẹni di ohun aláìlẹ́gbẹ́. Ó jẹ́ kí a mọ ibi wa níwájú Ọlọ́run, kí a sì sin ẹlòmíràn.",
    "verses": [
      {
        "ref": "Nọ́ḿbà 12:3",
        "text": "Báyìí ni ọkùnrin Mósè rẹ̀lẹ̀ jù lọ ju gbogbo ènìyàn tí ń bẹ lórí ilẹ̀ lọ.",
        "note": "Mósè rẹlẹ̀ jù lọ lórí ilẹ̀."
      },
      {
        "ref": "Sáàmù 51:17",
        "text": "Olúwa ń tako àwọn agbéraga ṣùgbọ́n ó ń fi oore-ọ̀fẹ́ fún àwọn onírẹ̀lẹ̀.",
        "note": "Ọlọ́run ń tako agbéraga, ṣùgbọ́n ó fún ẹni rẹlẹ̀ ní oore-ọ̀fẹ́."
      },
      {
        "ref": "Míkà 6:8",
        "text": "Kí ẹ̀mí rẹ̀ rẹ̀lẹ̀ nínú rẹ.",
        "note": "Kí ẹ̀mí rẹ̀ rẹlẹ̀ nínú rẹ."
      },
      {
        "ref": "Fílípì 2:5-8",
        "text": "Ẹ kọ́ lọ́dọ̀ mi, nítorí onírẹ̀lẹ̀ àti onírẹ̀lẹ̀ ọkàn ni èmi, ẹ ó sì rí ìsinmi fún ọkàn yín.",
        "note": "Ẹ kọ́ lọ́dọ̀ mi, nítorí ìwọ̀n-tára-ẹni-níṣẹ̀ àti ìrẹ̀lẹ̀ ni èmi."
      },
      {
        "ref": "Jákọ́bù 4:6",
        "text": "Ẹ jẹ́ kí ẹ̀mí yìí wà nínú yín, èyí tí í ṣe ti Kristi Jésù pẹ̀lú: ẹni tí, bó tilẹ̀ jẹ́ pé ìrísí Ọlọ́run ni, kò ka dídọ́gba pẹ̀lú Ọlọ́run sí ohun tí a gbọdọ̀ di mú.",
        "note": "Ó tu ara Rẹ̀ sílẹ̀."
      },
      {
        "ref": "Mátíù 23:12",
        "text": "Ẹ rẹ̀ ara yín sílẹ̀ lábẹ́ ọwọ́ alágbára Ọlọ́run, kí ó lè gbé yín ga ní àkókò tótọ́.",
        "note": "Ẹ rẹ ara yín sílẹ̀ lábẹ́ ọwọ́ alágbára Ọlọ́run."
      }
    ]
  },
  "exile-return": {
    "title": "Ìgbèkùn àti Ìpadà",
    "tagline": "Láti Bábílónì títí dé ilé Baba",
    "summary": "Ọlọ́run ń jẹ́ kí àwọn ènìyàn Rẹ̀ lọ sí ìgbèkùn, ṣùgbọ́n kì í fi wọ́n sílẹ̀. Ìpadà jẹ́ iṣẹ́ àánú, kì í ṣe ẹ̀tọ́.",
    "verses": [
      {
        "ref": "Sáàmù 137:1",
        "text": "Ní ọdún kẹta ìjọba Jehóyákímì ọba Júdà ni Nebukádínésárì ọba Bábílónì tọ Jèrúsálẹ́mù wá, ó sì dó ti í.",
        "note": "Wọ́n jókòó lẹ́bàá odò Bábílónì, wọ́n sọkún."
      },
      {
        "ref": "Jeremáyà 29:11",
        "text": "Lẹ́bàá àwọn odò Bábílónì ni àwa jókòó, a sọkún nígbà tí a rántí Síónì.",
        "note": "Èmi mọ ìpè èrò mi sí i yín, èrò àlàáfíà."
      },
      {
        "ref": "Aísáyà 40:1",
        "text": "Èmi mọ èrò tí mo ní sí i yín, ni Olúwa wí, èrò àlàáfíà kì í ṣe ti ibi, láti fún yín ní ìrètí àti ọjọ́ iwájú.",
        "note": "Olúwa mú àwọn ìgbèkùn Síónì padà."
      },
      {
        "ref": "Lúùkù 15:20",
        "text": "Nígbà tí Olúwa mú àwọn ìgbèkùn Síónì padà, àwa dàbí àwọn tí ń lá àlá.",
        "note": "Ọmọ àpàdé padà, Baba ń sáré."
      },
      {
        "ref": "Éfésù 2:13",
        "text": "Nítorí ìlú tí ń bọ̀ ni à ń wá, ìlú tí Ọlọ́run jẹ́ olùṣẹ̀dá àti olùkọ́ rẹ̀.",
        "note": "A jẹ́ àlejò àti ìgbèkùn lórí ilẹ̀ ayé."
      },
      {
        "ref": "Ìfihàn 21:3",
        "text": "Èmi kò rí tẹ́mpílì nínú ìlú náà, nítorí Olúwa Ọlọ́run Olódùmarè àti Ọ̀dọ́-Àgùntàn ni tẹ́mpílì rẹ̀.",
        "note": "Ìlú ìkẹyìn ni ilé gidi."
      }
    ]
  },
  "death-defeated": {
    "title": "Ikú Tí A Ṣẹ́gun",
    "tagline": "Láti Édẹ́nì títí dé òkú ìsìnkú tó ṣófo",
    "summary": "Ikú wọlé nípasẹ̀ ẹ̀ṣẹ̀. Kristi kọjá nínú rẹ̀, Ó sì já ẹ̀mí rẹ̀. Fún onígbàgbọ́, ikú kì í ṣe òpin — ó jẹ́ ìlẹ̀kùn.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 2:17",
        "text": "Ṣùgbọ́n nínú ọjọ́ tí ìwọ bá jẹ nínú rẹ̀ dandan ni ìwọ yóò kú.",
        "note": "Ní ọjọ́ tí ìwọ bá jẹ nínú rẹ̀, ìwọ yóò kú dandan."
      },
      {
        "ref": "Sáàmù 23:4",
        "text": "Yóò pa ikú run títí láíláí. Olúwa Olódùmarè yóò nu omijé kúrò lójú gbogbo ènìyàn.",
        "note": "Èmi yóò pa ikú run títí láé."
      },
      {
        "ref": "Aísáyà 25:8",
        "text": "Ikú, níbọ ni ìṣẹ́gun rẹ? Ikú, níbọ ni ọ̀wọ́ rẹ?",
        "note": "Ikú, níbọ ni ọ̀wọ́ ìṣẹ́gun rẹ?"
      },
      {
        "ref": "Hóṣéà 13:14",
        "text": "Jésù wí fún un pé, Èmi ni àjíǹde àti ìyè. Ẹni tí ó bá gbàgbọ́ nínú mi yóò yè, kódà bí ó bá kú.",
        "note": "Jésù sọ: Èmi ni àjíǹde àti ìyè."
      },
      {
        "ref": "1 Kọ́ríntì 15:55-57",
        "text": "Nígbà náà ọ̀rọ̀ náà yóò ṣẹ tí a kọ pé: A gbé ikú mì nínú ìṣẹ́gun.",
        "note": "Ikú kì yóò ṣe é mọ́."
      },
      {
        "ref": "Ìfihàn 20:14",
        "text": "Ikú àti isà òkú ni a jù sínú ọ̀sà iná. Ọ̀sà iná ni ikú kejì.",
        "note": "Ikú àti isà òkú ni a jù sínú ọ̀sà iná."
      }
    ]
  },
  "suffering-servant": {
    "title": "Ìránṣẹ́ Tí Ó Jìyà",
    "tagline": "Láti Aísáyà 53 títí dé agbelebu",
    "summary": "Ìránṣẹ́ Ọlọ́run kì í ṣe olùṣẹ́gun ológun. Ó jẹ́ ẹni tí a kẹ́gàn, tí a pa lára, nínú ẹni tí ìwòsàn wa wà.",
    "verses": [
      {
        "ref": "Aísáyà 53:2-3",
        "text": "Ó dàgbà níwájú rẹ̀ bí ègé, àti bí gbòǹgbò jáde lára ilẹ̀ gbígbẹ. Kò ní ẹwà tàbí ọlá.",
        "note": "Kò ní ẹwà tàbí ọlá tí a fi ìfẹ́ bù ú."
      },
      {
        "ref": "Aísáyà 53:5",
        "text": "Nítòótọ́, òun gbé àìsàn wa, ó ru ìbànújẹ́ wa, síbẹ̀ a kà á sí ẹni tí a ṣẹ, ẹni tí Ọlọ́run lu, ẹni tí a pọ́n lára.",
        "note": "Ó gbé àìsàn wa, ó ru ìbànújẹ́ wa."
      },
      {
        "ref": "Aísáyà 53:7",
        "text": "Ṣùgbọ́n a ṣe ìnìkàngun fún un nítorí ìrékọjá wa, a pa á lára nítorí àìṣedéédéè wa; ìyà àlàáfíà wa wà lára rẹ̀, nípasẹ̀ ọgbẹ́ rẹ̀ ni a rí ìwòsàn.",
        "note": "Wọ́n ṣe ìnìkàngun fún un nítorí ẹ̀ṣẹ̀ wa."
      },
      {
        "ref": "Aísáyà 53:9",
        "text": "A pọ́n ọn, a sì pọ́n ọn, síbẹ̀ kò ṣí ẹnu rẹ̀; a mú un lọ bí ọ̀dọ́-àgùntàn sí ibi ìpàjẹ.",
        "note": "Bí ọ̀dọ́-àgùntàn tí a ń mú lọ sí ibi ìpàjẹ."
      },
      {
        "ref": "Ìṣe 8:32-35",
        "text": "Lẹ́yìn ìjìyà ọkàn rẹ̀, yóò rí ìmọ́lẹ̀, yóò sì ní ìtẹ́lọ́rùn.",
        "note": "Jésù mọ̀ pé ìwé náà ń sọ̀rọ̀ nípa Òun."
      },
      {
        "ref": "Róòmù 5:8",
        "text": "Kristi jìyà fún un yín, ó fi àpẹẹrẹ sílẹ̀ fún yín, kí ẹ lè tẹ̀lé ìpẹ̀sẹ̀ ẹsẹ̀ rẹ̀.",
        "note": "Nípasẹ̀ ìyà rẹ̀ ni a rí ìwòsàn."
      }
    ]
  },
  "identity": {
    "title": "Ìdánimọ̀ nínú Ọlọ́run",
    "tagline": "Láti àwòrán Ọlọ́run títí dé ẹni titun nínú Kristi",
    "summary": "Ìbéèrè àkọ́kọ́ kì í ṣe “Kí ni mo ń ṣe?” ṣùgbọ́n “Ta ni mo jẹ́?” Ìwé Mímọ́ dáhùn: ìwọ jẹ́ àwòrán Ọlọ́run, ọmọ, ìyàwó, ìránṣẹ́.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 6:7",
        "text": "Èmi yóò mú yín ṣe àwọn ènìyàn mi, èmi ó sì jẹ́ Ọlọ́run yín. Nígbà náà ẹ ó mọ̀ pé èmi ni Olúwa Ọlọ́run yín, ẹni tí ó mú yín jáde kúrò lábẹ́ àjàgà àwọn ará Ejíbítì.",
        "note": "Kí a ṣe ènìyàn ní àwòrán wa."
      },
      {
        "ref": "Dẹuterónómì 14:2",
        "text": "Nítorí ẹ̀yin jẹ́ ènìyàn mímọ́ sí Olúwa Ọlọ́run yín. Nínú gbogbo àwọn ènìyàn tí ń bẹ lójú ilẹ̀, Olúwa ti yàn yín ṣe ìṣúra rẹ̀.",
        "note": "Mo ti pe ọ́ ní orúkọ rẹ, ìwọ jẹ́ tèmi."
      },
      {
        "ref": "Sáàmù 100:3",
        "text": "Ẹ mọ̀ pé Olúwa ni Ọlọ́run. Òun ni ó dá wa, àwa sì jẹ́ tirẹ̀; àwa ni àwọn ènìyàn rẹ̀, àgùntàn pápá rẹ̀.",
        "note": "Ẹ̀yin ni ìmọ́lẹ̀ ayé."
      },
      {
        "ref": "Jòhánù 15:15",
        "text": "Èmi kò pè yín ní ìránṣẹ́ mọ́, nítorí ìránṣẹ́ kò mọ iṣẹ́ ọ̀gá rẹ̀. Ṣùgbọ́n mo pè yín ní ọ̀rẹ́, nítorí ohun gbogbo tí mo gbọ́ lọ́dọ̀ Baba mi ni mo ti sọ fún yín.",
        "note": "Ẹ̀yin ti kú, ìyè yín pamọ́ pẹ̀lú Kristi."
      },
      {
        "ref": "1 Pétérù 2:9",
        "text": "Ṣùgbọ́n ẹ̀yin jẹ́ ìran àyànfẹ́, àlùfáà ọba, orílẹ̀-èdè mímọ́, ìṣúra Ọlọ́run pàtàkì, kí ẹ lè kéde ìyìn ẹni tí ó pè yín jáde kúrò nínú òkùnkùn sínú ìmọ́lẹ̀ ìyanu rẹ̀.",
        "note": "Ẹ̀yin jẹ́ ìran àyànfẹ́, àlùfáà ọba."
      },
      {
        "ref": "1 Jòhánù 3:1",
        "text": "Ẹ wo irú ìfẹ́ tí Baba fi fún wa, kí a lè jẹ́ ọmọ Ọlọ́run! Bẹ́ẹ̀ ni àwa ṣe rí.",
        "note": "Nísinsin yìí a jẹ́ ọmọ Ọlọ́run."
      }
    ]
  },
  "throne": {
    "title": "Ìtẹ́ Ọlọ́run",
    "tagline": "Láti ìran Aísáyà títí dé ìtẹ́ nínú ọ̀run",
    "summary": "Ìtẹ́ Ọlọ́run jẹ́ ìrántí pé ẹnìkan ń ṣàkóso. Kódà nígbà tí ayé ń mì, ìtẹ́ náà dúró.",
    "verses": [
      {
        "ref": "Aísáyà 6:1",
        "text": "Ní ọdún tí ọba Usáyà kú ni mo rí Olúwa jókòó lórí ìtẹ́, gíga, tí a gbé sókè, ìbòjú aṣọ rẹ̀ sì kún tẹ́mpílì.",
        "note": "Mo rí Olúwa jókòó lórí ìtẹ́, gíga, tí a gbé sókè."
      },
      {
        "ref": "Dáníẹ́lì 7:9",
        "text": "Ìtẹ́ rẹ̀ ti fìdí múlẹ̀ láti ìgbà àtijọ́; ìwọ ni láti ayérayé.",
        "note": "Ìtẹ́ rẹ̀ dúró láti ìgbà àtijọ́."
      },
      {
        "ref": "Sáàmù 93:2",
        "text": "Olúwa wí pé, Jókòó ní ọwọ́ ọ̀tún mi títí n ó fi sọ àwọn ọ̀tá rẹ di àpótí ẹsẹ̀ rẹ.",
        "note": "Ọmọ náà, jókòó ní ọwọ́ ọ̀tún mi."
      },
      {
        "ref": "Ìfihàn 4:2",
        "text": "Nítorí náà ẹ jẹ́ kí a súnmọ́ ìtẹ́ oore-ọ̀fẹ́ pẹ̀lú ìgboyà, kí a lè rí àánú, kí a sì rí oore-ọ̀fẹ́ láti ràn wá lọ́wọ́ ní àkókò àìní.",
        "note": "Ìtẹ́ àánú, kí a lè rí oore-ọ̀fẹ́."
      },
      {
        "ref": "Ìfihàn 5:6",
        "text": "Lẹ́sẹ̀kẹsẹ̀ mo wà nínú Ẹ̀mí, mo sì gbọ́ ohùn bí ìpè lẹ́yìn mi.",
        "note": "Ẹ̀mí wà nínú ọ̀run, sì kíyèsí ìtẹ́ kan."
      },
      {
        "ref": "Ìfihàn 22:3",
        "text": "Ẹni tí ó jókòó lórí ìtẹ́ wí pé, Wò ó, mo ń ṣe ohun gbogbo tuntun.",
        "note": "Òun tí ó jókòó lórí ìtẹ́ sọ pé: Mo ń ṣe ohun gbogbo tuntun."
      }
    ]
  },
  "wilderness": {
    "title": "Aginjù",
    "tagline": "Láti Sínáì títí dé ìdánwò Jésù",
    "summary": "Aginjù kì í ṣe ìsàdédé. Ó jẹ́ ilé-ìwé Ọlọ́run — ibi tí Ó ti ń kọ́, ń dánwò, ń pèsè.",
    "verses": [
      {
        "ref": "Dẹuterónómì 8:2",
        "text": "Nítorí náà, wò ó, èmi yóò tàn án lọ́wọ́, èmi yóò mú un lọ sí aginjù, èmi yóò sì sọ̀rọ̀ sí ọkàn rẹ̀.",
        "note": "Ọlọ́run mú wọn jáde sí aginjù láti kẹ́kọ̀ọ́."
      },
      {
        "ref": "Hóṣéà 2:14",
        "text": "Rántí bí Olúwa Ọlọ́run rẹ ṣe tọ́ ọ ní gbogbo ọ̀nà nínú aginjù ní ọdún ogójì.",
        "note": "Ó tọ́ ọ ní ìrìn àjò aginjù ọdún ogójì."
      },
      {
        "ref": "Aísáyà 40:3",
        "text": "Nígbà náà Ẹ̀mí gbé Jésù lọ sí aginjù láti dán an wò nípasẹ̀ èṣù.",
        "note": "Jésù lọ sí aginjù láti dánwò."
      },
      {
        "ref": "Mátíù 4:1",
        "text": "Ẹnikẹ́ni tí ó bá gbàgbọ́ nínú mi, gẹ́gẹ́ bí Ìwé Mímọ́ ti wí, odò omi ìyè yóò sàn jáde nínú rẹ̀.",
        "note": "Ènìyàn kì í yè ní oúnjẹ nìkan."
      },
      {
        "ref": "Mátíù 4:4",
        "text": "Ohùn ẹnìkan ń kígbe nínú aginjù: Ẹ tọ́ ọ̀nà Olúwa ṣe, ẹ ṣe àwọn ọ̀nà rẹ̀ ṣe gígún.",
        "note": "Mo sọ ọ́ di ọkọ mi ní aginjù."
      },
      {
        "ref": "Ìfihàn 12:14",
        "text": "Nítorí Olúwa yóò tù yín nínú Síónì, yóò sì ṣàánú gbogbo ìpìlẹ̀ rẹ̀ ìparun, yóò sọ aginjù rẹ̀ di Édẹ́nì.",
        "note": "Ọ̀nà yóò wà nínú aginjù."
      }
    ]
  },
  "vine": {
    "title": "Àjàrà",
    "tagline": "Láti àjàrà Ísírẹ́lì títí dé “Èmi ni àjàrà gidi”",
    "summary": "Ísírẹ́lì jẹ́ àjàrà Ọlọ́run. Jésù sọ pé Òun ni àjàrà gidi, àwa ni ẹ̀ka. Láìsí ìsopọ̀, kò sí èso.",
    "verses": [
      {
        "ref": "Sáàmù 80:8",
        "text": "O kó igi-àjàrà kan jáde láti Íjíbítì.",
        "note": "Àjàrà kan láti Íjíbítì ni ìwọ gbé wá."
      },
      {
        "ref": "Aísáyà 5:1-2",
        "text": "Mo gbìn ọ́ gẹ́gẹ́ bí àjàrà àyànfẹ́, gbòǹgbò pátápátá. Báwo ni o ṣe yí padà sí àjàrà ìfẹ́kúfẹ̀ẹ́?",
        "note": "Àjàrà ìfẹ́kúfẹ̀ẹ́."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 15:6",
        "text": "Èmi ni àjàrà gidi, Baba mi ni olùgbìn.",
        "note": "Èmi ni àjàrà gidi, Baba mi ni olùgbìn."
      },
      {
        "ref": "Jòhánù 15:1",
        "text": "Ẹ wà nínú mi, èmi náà nínú yín. Bí ẹ̀ka kò bá wà nínú àjàrà, kò lè so èso fúnra rẹ̀.",
        "note": "Ẹ wà nínú mi, èmi náà nínú yín."
      },
      {
        "ref": "Jòhánù 15:5",
        "text": "Láìsí èmi, ẹ kò lè ṣe nǹkan kan.",
        "note": "Láìsí èmi, ẹ kò lè ṣe nǹkan kan."
      },
      {
        "ref": "Jòhánù 15:16",
        "text": "Èso Ẹ̀mí ni ìfẹ́, ayọ̀, àlàáfíà, sùúrù, inúrere, ìṣeun, òtítọ́, ìwọ̀n-tára-ẹni-níṣẹ̀, ìkóra-ẹni-níjà.",
        "note": "Èso Ẹ̀mí ni ẹ̀rí ìsopọ̀."
      }
    ]
  },
  "baptism": {
    "title": "Ìtẹ̀bọmi",
    "tagline": "Láti òkun Pupà títí dé ìsìnkú àti àjíǹde pẹ̀lú Kristi",
    "summary": "Ìtẹ̀bọmi jẹ́ ìsìnkú àti ìyè. A rìn kọjá nínú omi sí òmìnira, a sin pẹ̀lú Kristi, a sì jí pẹ̀lú Rẹ̀.",
    "verses": [
      {
        "ref": "1 Kọ́ríntì 10:2",
        "text": "Àwọn ọmọ Ísírẹ́lì rìn kọjá òkun Pupà lórí ilẹ̀ gbígbẹ.",
        "note": "Àwọn baba ńlá rìn kọjá òkun Pupà."
      },
      {
        "ref": "2 Ọba 5:14",
        "text": "Jòhánù farahàn, ó ń wàásù ìtẹ̀bọmi ìrònúpìwàdà fún ìdáríjì ẹ̀ṣẹ̀.",
        "note": "Jòhánù ń ṣe ìtẹ̀bọmi ìrònúpìwàdà."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 36:25",
        "text": "Ní àkókò yẹn Jésù tọ Jòhánù wá láti Gálílì láti gba ìtẹ̀bọmi.",
        "note": "Jésù gba ìtẹ̀bọmi — kì í ṣe fún ẹ̀ṣẹ̀ Rẹ̀ ṣùgbọ́n láti bá wa dúró."
      },
      {
        "ref": "Mátíù 3:16",
        "text": "Ẹ lọ, ẹ ṣe àwọn orílẹ̀-èdè ní ọmọ-ẹ̀yìn, ẹ ṣe wọn ní ìtẹ̀bọmi ní orúkọ Baba àti Ọmọ àti Ẹ̀mí Mímọ́.",
        "note": "Ẹ ṣe wọn ní ìtẹ̀bọmi ní orúkọ Baba."
      },
      {
        "ref": "Róòmù 6:4",
        "text": "A sin pẹ̀lú rẹ̀ nípasẹ̀ ìtẹ̀bọmi sí ikú, kí gẹ́gẹ́ bí a ṣe jí Kristi nínú òkú nípasẹ̀ ògo Baba, bẹ́ẹ̀ ni àwa pẹ̀lú lè rìn nínú ìyè tuntun.",
        "note": "A sin pẹ̀lú rẹ̀ nípasẹ̀ ìtẹ̀bọmi sí ikú."
      },
      {
        "ref": "Gálátíà 3:27",
        "text": "Ìtẹ̀bọmi yìí ń ṣe é là nísinsin yìí pẹ̀lú — kì í ṣe ìyọ́ ẹrẹ̀ ara ṣùgbọ́n ìlérí ọkàn dídá sí Ọlọ́run.",
        "note": "Ìtẹ̀bọmi ń ṣe é là nísinsin yìí — kì í ṣe ìwẹ̀nù ara ṣùgbọ́n ìlérí ọkàn."
      }
    ]
  },
  "power-weakness": {
    "title": "Agbára nínú Àìlera",
    "tagline": "Láti Gídeónì títí dé ẹ̀gún ẹ̀gùn Pọ́ọ̀lù",
    "summary": "Ọlọ́run ń yan ohun tí ó jẹ́ aláìlera kí agbára lè jẹ́ ti Òun. Àìlera kì í ṣe ìdí ìtìjú — ó jẹ́ ibi tí oore-ọ̀fẹ́ ń ṣiṣẹ́.",
    "verses": [
      {
        "ref": "Onídàjọ́ 7:7",
        "text": "Olúwa wí pé, Ẹ̀yin kéré nínú gbogbo àwọn ènìyàn, ṣùgbọ́n èmi yóò wà pẹ̀lú yín.",
        "note": "Ẹ̀yin kéré, ṣùgbọ́n Èmi yóò wà pẹ̀lú yín."
      },
      {
        "ref": "1 Sámúẹ́lì 16:7",
        "text": "Ó wí fún mi pé, Oore-ọ̀fẹ́ mi tó fún ọ, nítorí agbára mi ń ṣe é ní ìkúnnara nínú àìlera.",
        "note": "Agbára mi ń ṣe é ní ìkúnnara nínú àìlera."
      },
      {
        "ref": "Sekaráyà 4:6",
        "text": "Nítorí náà èmi yóò ṣògo nínú àìlera mi, kí agbára Kristi lè ṣíkalẹ̀ lára mi.",
        "note": "Mo níláti ṣògo nínú àìlera mi."
      },
      {
        "ref": "1 Kọ́ríntì 1:27",
        "text": "A ní ìṣúra yìí nínú ìkòkò amọ̀ láti fi hàn pé agbára yìí tó ju gbogbo nǹkan lọ ti Ọlọ́run wá, kì í ṣe tiwa.",
        "note": "A ní ìṣúra yìí nínú ìkòkò amọ̀."
      },
      {
        "ref": "2 Kọ́ríntì 12:9",
        "text": "Nítorí nígbà tí mo bá ṣe aláìlera, nígbà náà ni mo lágbára.",
        "note": "Nígbà tí mo bá ṣe aláìlera, nígbà náà ni mo lágbára."
      },
      {
        "ref": "2 Kọ́ríntì 4:7",
        "text": "Ṣùgbọ́n Ọlọ́run yan ohun tí ayé pe ní òmùgọ̀ láti dójútì àwọn ọlọ́gbọ́n.",
        "note": "Ọlọ́run yàn ohun tí ayé pe ní òmùgọ̀."
      }
    ]
  },
  "morning-star": {
    "title": "Ìràwọ̀ Òwúrọ̀",
    "tagline": "Láti ìlérí Báláámù títí dé Jésù, ìràwọ̀ òwúrọ̀ tító",
    "summary": "Ìràwọ̀ ń jáde ṣáájú oòrùn. Jésù ni Ìràwọ̀ Òwúrọ̀ — ìlérí pé òkùnkùn kò ní ìṣẹ́gun ìkẹyìn.",
    "verses": [
      {
        "ref": "Nọ́ḿbà 24:17",
        "text": "Ìràwọ̀ kan yóò jáde láti Jákọ́bù, ọ̀pá-ìṣàkóso kan yóò dìde nínú Ísírẹ́lì.",
        "note": "Ìràwọ̀ kan yóò jáde láti Jákọ́bù."
      },
      {
        "ref": "Aísáyà 14:12",
        "text": "Ìràwọ̀ rẹ̀ yóò jáde láti Jákọ́bù, ẹni kan yóò dìde láti Ísírẹ́lì, yóò sì ṣẹ́gun.",
        "note": "Ìràwọ̀ rẹ̀ yóò ṣí i lọ́wọ́."
      },
      {
        "ref": "Dáníẹ́lì 12:3",
        "text": "N ó fún un ní ìràwọ̀ òwúrọ̀.",
        "note": "Mo fún un ní ìràwọ̀ òwúrọ̀."
      },
      {
        "ref": "2 Pétérù 1:19",
        "text": "Títí ọjọ́ yóò fi mọ́, títí ìràwọ̀ òwúrọ́ yóò fi yọ nínú ọkàn yín.",
        "note": "Títí ìràwọ̀ òwúrọ̀ yóò fi yọ nínú ọkàn yín."
      },
      {
        "ref": "Ìfihàn 2:28",
        "text": "Èmi ni ìràwọ̀ òwúrọ̀ tító.",
        "note": "Èmi ni ìràwọ̀ òwúrọ̀ tító."
      },
      {
        "ref": "Ìfihàn 22:16",
        "text": "Ìmọ́lẹ̀ ń tàn nínú òkùnkùn, òkùnkùn kò sì ṣẹ́gun rẹ̀.",
        "note": "Ìmọ́lẹ̀ ń tàn nínú òkùnkùn, òkùnkùn kò sì ṣẹ́gun rẹ̀."
      }
    ]
  },
  "day-of-lord": {
    "title": "Ọjọ́ Olúwa",
    "tagline": "Láti wòlíì títí dé ìpadà Kristi",
    "summary": "Ọjọ́ Olúwa kì í ṣe ọjọ́ ẹ̀rù nìkan. Ó jẹ́ ọjọ́ òtítọ́ — ìdájọ́ fún ìkà, ìgbàlà fún àwọn tí ń retí.",
    "verses": [
      {
        "ref": "Jóẹ́lì 2:1",
        "text": "Ọjọ́ Olúwa ń bọ̀, ó ṣókùnkùn, kì í ṣe ìmọ́lẹ̀.",
        "note": "Ọjọ́ Olúwa ń bọ̀, ó ṣókùnkùn, kì í ṣe ìmọ́lẹ̀."
      },
      {
        "ref": "Ámósì 5:18",
        "text": "Sùn mọ́lẹ̀, ọjọ́ náà súnmọ́.",
        "note": "Sùn mọ́lẹ̀, ọjọ́ náà súnmọ́."
      },
      {
        "ref": "Ṣefaníà 1:14-15",
        "text": "Ọjọ́ Olúwa yóò dé bí olè ní òru.",
        "note": "Ọjọ́ Olúwa yóò dé bí olè ní òru."
      },
      {
        "ref": "Málákì 4:5",
        "text": "Wò ó, òun ń bọ̀ pẹ̀lú àwọn ìkùukùu, gbogbo ojú yóò sì rí i.",
        "note": "Gbogbo ojú yóò rí i."
      },
      {
        "ref": "1 Tẹsalóníkà 5:2",
        "text": "A ń retí ìdùpẹ́ ìfarahàn ògo Ọlọ́run ńlá wa àti Olùgbàlà Jésù Kristi.",
        "note": "A ń retí ìfarahàn ògo Ọlọ́run ńlá àti Olùgbàlà wa."
      },
      {
        "ref": "2 Pétérù 3:10",
        "text": "Kí ọjọ́ náà má ṣe bá yín lójijì.",
        "note": "Kí ọjọ́ náà má ṣe bá yín lójijì."
      }
    ]
  },
  "unity": {
    "title": "Ìṣọ̀kan nínú Ara",
    "tagline": "Láti ìdílé ìjọ títí dé ara Kristi",
    "summary": "Ìṣọ̀kan kì í ṣe kí gbogbo ènìyàn dàra. Ó jẹ́ ẹ̀mí kan, ìrètí kan, Ọlọ́run kan — ọ̀pọ̀ ẹ̀yà, ara kan.",
    "verses": [
      {
        "ref": "Sáàmù 133:1",
        "text": "Kí wọn dàgba pọ̀ ní ọ̀kan, Baba, gẹ́gẹ́ bí ìwọ ṣe wà nínú mi, èmi nínú rẹ, kí àwọn náà lè wà nínú wa.",
        "note": "Kí wọn dàgba pọ̀ ní ọ̀kan."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 37:22",
        "text": "Ara kan ni, Ẹ̀mí kan, gẹ́gẹ́ bí a ti pè yín sí ìrètí kan ṣoṣo ìpè yín.",
        "note": "Ara kan ni, Ẹ̀mí kan."
      },
      {
        "ref": "Jòhánù 10:16",
        "text": "Ẹ ṣọ́ ìṣọ̀kan Ẹ̀mí nínú ìdè àlàáfíà.",
        "note": "Ẹ ṣọ́ ìṣọ̀kan Ẹ̀mí nínú ìdè àlàáfíà."
      },
      {
        "ref": "Jòhánù 17:21",
        "text": "Ẹ̀yin ni ara Kristi, ọmọ ẹ̀yà kọ̀ọ̀kan.",
        "note": "Ẹ̀yin ni ara Kristi, ọmọ ẹ̀yà kọ̀ọ̀kan."
      },
      {
        "ref": "Gálátíà 3:28",
        "text": "Lórí gbogbo nǹkan wọ̀nyí, ẹ fi ìfẹ́, èyí tí í ṣe ìdìpọ̀ pípé.",
        "note": "Kí ìfẹ́ jẹ́ ìdìpọ̀ pípé."
      },
      {
        "ref": "Éfésù 2:14",
        "text": "Bí iye ẹ̀yà ṣe pọ̀, ara kan náà ni.",
        "note": "Bí iye ẹ̀yà ṣe pọ̀, ara kan náà ni."
      }
    ]
  },
  "angels": {
    "title": "Àwọn Áńgẹ́lì",
    "tagline": "Láti ẹnu ọ̀nà Édẹ́nì títí dé ìránṣẹ́ ìgbàlà",
    "summary": "Áńgẹ́lì jẹ́ ìránṣẹ́, kì í ṣe ẹni tí a ń sìn. Wọ́n ń ṣiṣẹ́ fún àwọn tí yóò jogún ìgbàlà.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 28:12",
        "text": "Ó lé ọkùnrin náà jáde, ó gbé kérúbù sí ìhà ìlà-oòrùn Ọgbà Édẹ́nì láti ṣọ́ ọ̀nà igi ìyè.",
        "note": "Áńgẹ́lì ṣọ́ ọ̀nà igi ìyè."
      },
      {
        "ref": "Dáníẹ́lì 10:13",
        "text": "Ó lá àlá, ó rí òkè kan tí ó fi ìtẹ́ rẹ̀ kalẹ̀, àwọn áńgẹ́lì Ọlọ́run ń gòkè òkè rẹ̀.",
        "note": "Jákọ́bù rí áńgẹ́lì tí ń gòkè òkè."
      },
      {
        "ref": "Sáàmù 91:11",
        "text": "Áńgẹ́lì Olúwa pàgọ́ yí àwọn tí ń bẹ̀rù rẹ̀ ká, ó sì ń tú wọn sílẹ̀.",
        "note": "Áńgẹ́lì Olúwa pàgọ́ yí àwọn tí ń bẹ̀rù rẹ̀ ká."
      },
      {
        "ref": "Lúùkù 1:26",
        "text": "Áńgẹ́lì náà sì wí fún wọn pé, Ẹ má bẹ̀rù. Mo mú ìhìn rere ńlá wá fún yín.",
        "note": "Áńgẹ́lì kéde ìbí náà."
      },
      {
        "ref": "Mátíù 26:53",
        "text": "Ǹjẹ́ kì í ṣe gbogbo wọn ni ẹ̀mí ìsìn, tí a rán wọn jáde láti ṣe iṣẹ́ ìránṣẹ́ fún àwọn tí yóò jogún ìgbàlà?",
        "note": "Wọ́n jẹ́ ẹ̀mí ìsìn, a rán wọn sí ìránṣẹ́."
      },
      {
        "ref": "Ìfihàn 5:11",
        "text": "Mo ṣubú ní ẹsẹ̀ rẹ̀ láti sìn ìn, ṣùgbọ́n ó wí fún mi pé, Má ṣe bẹ́ẹ̀! Ìránṣẹ́ ẹlẹgbẹ́ rẹ ni èmi. Sìn Ọlọ́run!",
        "note": "Má ṣe sìn áńgẹ́lì — sìn Ọlọ́run."
      }
    ]
  },
  "baptism-spirit": {
    "title": "Ìtẹ̀bọmi nínú Ẹ̀mí",
    "tagline": "Láti ìlérí Jòhánù títí dé ìkún Ẹ̀mí",
    "summary": "Jòhánù ṣe ìtẹ̀bọmi nínú omi. Jésù ṣe ìtẹ̀bọmi nínú Ẹ̀mí Mímọ́. Ìgbàlà kì í ṣe ìforúkọsílẹ̀ nìkan — ó jẹ́ ìkún.",
    "verses": [
      {
        "ref": "Ẹ́síkíẹ́lì 36:26-27",
        "text": "Èmi ń ṣe yín ní ìtẹ̀bọmi nínú omi, ṣùgbọ́n òun yóò ṣe yín ní ìtẹ̀bọmi nínú Ẹ̀mí Mímọ́ àti iná.",
        "note": "Òun yóò ṣe yín ní ìtẹ̀bọmi nínú Ẹ̀mí Mímọ́ àti iná."
      },
      {
        "ref": "Jóẹ́lì 2:28-29",
        "text": "Ẹ ó gba agbára nígbà tí Ẹ̀mí Mímọ́ bá sọ̀kalẹ̀ sórí yín.",
        "note": "Ẹ ó gba agbára nígbà tí Ẹ̀mí Mímọ́ bá sọ̀kalẹ̀ sórí yín."
      },
      {
        "ref": "Mátíù 3:11",
        "text": "Gbogbo wọn ni Ẹ̀mí Mímọ́ kún.",
        "note": "Gbogbo wọn ni Ẹ̀mí kún."
      },
      {
        "ref": "Ìṣe 1:5",
        "text": "Nítorí nínú ẹ̀mí kan ni a ṣe gbogbo wa ní ìtẹ̀bọmi sínú ara kan.",
        "note": "Nínú ẹ̀mí kan ni a ṣe gbogbo wa ní ìtẹ̀bọmi sínú ara kan."
      },
      {
        "ref": "Ìṣe 2:16-17",
        "text": "Ẹ má ṣe mutí ọtí, nínú èyí tí ìwà pálapàla wà, ṣùgbọ́n ẹ kún fún Ẹ̀mí.",
        "note": "Ẹ kún fún Ẹ̀mí."
      },
      {
        "ref": "1 Kọ́ríntì 12:13",
        "text": "Ẹ̀mí àti ìyàwó ń wí pé, Má a bò.",
        "note": "Ẹ̀mí àti ìyàwó ń wí pé: Má a bò."
      }
    ]
  },
  "promises": {
    "title": "Àwọn Ìlérí Ọlọ́run",
    "tagline": "Láti Édẹ́nì títí dé Àmín nínú Kristi",
    "summary": "Ọlọ́run kì í ṣe irọ́. Gbogbo ìlérí Rẹ̀ ní Ìnìyì nínú Kristi. Ìgbàgbọ́ n dùbúlẹ̀ lórí ìwà olóòtọ́ Ẹni tí ó ṣèlérí.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 3:15",
        "text": "Èmi ó ṣẹ́ ìbánilò ìwọ àti obìnrin náà, àti láàárín irú-ọmọ rẹ àti irú-ọmọ rẹ̀; òun yóò ṣẹ́ orí rẹ̀.",
        "note": "Ìrúgbìn obìnrin yóò ṣẹ́ orí ejò."
      },
      {
        "ref": "Nọ́ḿbà 23:19",
        "text": "Nínú irú-ọmọ rẹ ni gbogbo orílẹ̀-èdè ayé yóò bùkún.",
        "note": "Nínú irú-ọmọ rẹ ni gbogbo orílẹ̀-èdè yóò bùkún."
      },
      {
        "ref": "Hébérù 11:13",
        "text": "Kì yóò ṣe pé ọ̀rọ̀ kankan nínú gbogbo ìlérí rere tí Olúwa ṣe fún ilé Ísírẹ́lì kùnà.",
        "note": "Kì yóò kùnà ọ̀rọ̀ kankan nínú gbogbo ìlérí rere."
      },
      {
        "ref": "Jóṣúà 21:45",
        "text": "Nítorí ọpọlọpọ ìlérí Ọlọ́run ni Àmín nínú rẹ̀.",
        "note": "Nítorí ọpọlọpọ ìlérí Ọlọ́run ni Àmín nínú rẹ̀."
      },
      {
        "ref": "2 Kọ́ríntì 1:20",
        "text": "Tí ẹ̀yin bá jẹ́ ti Kristi, ẹ̀yin ni irú-ọmọ Ábúráhámù, àwọn ajogún gẹ́gẹ́ bí ìlérí.",
        "note": "Ẹ̀yin jẹ́ ajogún ìlérí."
      },
      {
        "ref": "2 Pétérù 1:4",
        "text": "Jẹ́ kí a di ìlérí ìrètí wa mú ṣinṣin, nítorí ẹni tí ó ṣèlérí jẹ́ olóòtọ́.",
        "note": "Ẹni tí ó ṣèlérí jẹ́ olóòtọ́."
      }
    ]
  },
  "fear-not": {
    "title": "Má bẹ̀rù",
    "tagline": "Láti ìpè Ábúráhámù títí dé ọkàn tí ìfẹ́ ń lé ìbẹ̀rù jáde",
    "summary": "“Má bẹ̀rù” jẹ́ àṣẹ tí ó wọ́pọ̀ jù lọ nínú Ìwé Mímọ́. Kì í ṣe pé kò sí ewu — ṣùgbọ́n pé Ọlọ́run wà.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 15:1",
        "text": "Lẹ́yìn nǹkan wọ̀nyí ni ọ̀rọ̀ Olúwa tọ Ábúráhámù wá nínú ìran pé, Má bẹ̀rù, Ábúráhámù. Èmi ni asà rẹ.",
        "note": "Má bẹ̀rù, Ábúráhámù. Èmi ni asà rẹ."
      },
      {
        "ref": "Aísáyà 41:10",
        "text": "Má bẹ̀rù, nítorí èmi wà pẹ̀lú rẹ.",
        "note": "Má bẹ̀rù, nítorí èmi wà pẹ̀lú rẹ."
      },
      {
        "ref": "Dáníẹ́lì 10:12",
        "text": "Ní ọjọ́ tí èmi bá bẹ̀rù, èmi ó gbẹ́kẹ̀lé ọ.",
        "note": "Nígbà tí èmi bá bẹ̀rù, èmi ó gbẹ́kẹ̀lé ọ."
      },
      {
        "ref": "Lúùkù 1:30",
        "text": "Àlàáfíà ni èmi ń fi sílẹ̀ fún yín... Ọkàn yín má ṣe yọ̀, kí ó má sì ṣe ẹ̀rù.",
        "note": "Àlàáfíà ni èmi ń fi fún yín. Ọkàn yín má ṣe jẹ̀ dẹ̀dẹ̀."
      },
      {
        "ref": "Mátíù 28:5",
        "text": "Ìbẹ̀rù kò sí nínú ìfẹ́. Ṣùgbọ́n ìfẹ́ pípé ń lé ìbẹ̀rù jáde.",
        "note": "Ìfẹ́ pípé ń lé ìbẹ̀rù jáde."
      },
      {
        "ref": "Ìfihàn 1:17",
        "text": "Nítorí Ọlọ́run kò fún wa ní ẹ̀mí ìbẹ̀rù, ṣùgbọ́n ti agbára, ìfẹ́ àti ọkàn tó dáa.",
        "note": "Ọlọ́run kò fún wa ní ẹ̀mí ìbẹ̀rù."
      }
    ]
  },
  "repentance": {
    "title": "Ìrònúpìwàdà",
    "tagline": "Láti ìpè wòlíì títí dé ìpè Jésù àkọ́kọ́",
    "summary": "Ìrònúpìwàdà kì í ṣe ẹkún nìkan. Ó jẹ́ ìyípadà ọkàn — kúrò lọ́dọ̀ ẹ̀ṣẹ̀, sí ọ̀dọ̀ Ọlọ́run.",
    "verses": [
      {
        "ref": "Jónà 3:10",
        "text": "Ẹ yípadà kúrò lọ́dọ̀ ibi, ẹ wá sí ọ̀dọ̀ Olúwa.",
        "note": "Yípadà kúrò lọ́dọ̀ ibi, ẹ wá sí ọ̀dọ̀ Olúwa."
      },
      {
        "ref": "Aísáyà 55:7",
        "text": "Ẹbọ Ọlọ́run ni ẹ̀mí ìfọ́; ọkàn ìfọ́ àti ìrẹ̀lẹ̀, Ọlọ́run, ìwọ kì yóò kẹ́gàn.",
        "note": "Ọkàn ìfọ́ ni ẹbọ Ọlọ́run."
      },
      {
        "ref": "Ẹ́síkíẹ́lì 18:32",
        "text": "Ìrònúpìwàdà, nítorí ìjọba ọ̀run ti súnmọ́.",
        "note": "Ìrònúpìwàdà, nítorí ìjọba ọ̀run ti súnmọ́."
      },
      {
        "ref": "Márkù 1:15",
        "text": "Mo sọ fún yín pé, bẹ́ẹ̀ ni ayọ̀ ń bẹ níwájú àwọn áńgẹ́lì Ọlọ́run lórí ẹlẹ́ṣẹ̀ kan tí ń ronú pìwàdà.",
        "note": "Ayọ̀ ń bẹ ní ọ̀run fún ẹlẹ́ṣẹ̀ kan tí ó yípadà."
      },
      {
        "ref": "Lúùkù 15:7",
        "text": "Mo jẹ́rìí sí Júù àti àwọn Gíríìkì nípa ìrònúpìwàdà sí Ọlọ́run àti ìgbàgbọ́ sí Olúwa wa Jésù.",
        "note": "Ìrònúpìwàdà sí Ọlọ́run, ìgbàgbọ́ sí Olúwa Jésù."
      },
      {
        "ref": "Ìṣe 3:19",
        "text": "Tàbí ìwọ kò kà oore-ọ̀fẹ́ Ọlọ́run sí, èyí tí ń darí ọ sí ìrònúpìwàdà?",
        "note": "Oore-ọ̀fẹ́ Ọlọ́run ń darí ọ sí ìrònúpìwàdà."
      }
    ]
  },
  "stewardship": {
    "title": "Ìṣàkóso àti Ìfọwọ́sowọ́pọ̀",
    "tagline": "Láti Édẹ́nì títí dé ìlànà ìkórè",
    "summary": "Ohun gbogbo jẹ́ ti Ọlọ́run. A jẹ́ olùṣàkóso, kì í ṣe olówó. Ọwọ́ títú sọ ọkàn di òmìnira.",
    "verses": [
      {
        "ref": "Sáàmù 24:1",
        "text": "Olúwa Ọlọ́run mú ọkùnrin náà, ó gbé e sí Ọgbà Édẹ́nì láti ṣiṣẹ́ iṣẹ́ rẹ̀ àti láti tọ́jú rẹ̀.",
        "note": "Ẹ kó o, ẹ tọ́jú rẹ̀."
      },
      {
        "ref": "Dẹuterónómì 8:17-18",
        "text": "Ilẹ̀ jẹ́ tèmi àti gbogbo ohun tí ń bẹ nínú rẹ̀.",
        "note": "Ilẹ̀ jẹ́ tèmi, gbogbo ẹ̀kún rẹ̀ pẹ̀lú."
      },
      {
        "ref": "Òwe 11:24",
        "text": "Ẹni tí ó ṣàánú tálákà ń yá Olúwa níléowó, òun yóò sì san án fún un.",
        "note": "Ẹni tí ó ṣe àánú tálákà yá Olúwa níléowó."
      },
      {
        "ref": "Málákì 3:10",
        "text": "Nítorí níbi tí ìṣúra rẹ bà wà, ibẹ̀ ni ọkàn rẹ yóò wà pẹ̀lú.",
        "note": "Níbi tí ìṣúra rẹ bà wà, ibẹ̀ ni ọkàn rẹ yóò wà pẹ̀lú."
      },
      {
        "ref": "2 Kọ́ríntì 9:7",
        "text": "Kọ̀ọ̀kan yín kí ó fún gẹ́gẹ́ bí ó ti pinnu nínú ọkàn rẹ̀, kì í ṣe pẹ̀lú ìbànújẹ́ tàbí dídìní, nítorí Ọlọ́run fẹ́ràn ẹni tí ń fi ayọ̀ ṣe ẹ̀bùn.",
        "note": "Ọlọ́run fẹ́ràn ẹni tí ń fi ayọ̀ ṣe ẹ̀bùn."
      },
      {
        "ref": "Lúùkù 12:48",
        "text": "Bí ẹ̀yin ṣe gba ẹ̀bùn, ẹ fi í ṣe ìsìn fún ẹnìkẹ̀jì yín, gẹ́gẹ́ bí olùṣàkóso rere ẹ̀bùn onírúurú Ọlọ́run.",
        "note": "Ẹ fi ẹ̀bùn yín ṣe ìsìn fún ẹnìkẹ̀jì yín."
      }
    ]
  },
  "rest-eternity": {
    "title": "Ìsinmi Ayérayé",
    "tagline": "Láti ọjọ́ keje títí dé ilé Baba",
    "summary": "Ìsinmi tí Ọlọ́run ń fúnni kì í ṣe ìsinmi ọjọ́ kan. Ó jẹ́ ilé. Jésù ń tọ́jú ibi fún wa.",
    "verses": [
      {
        "ref": "Dẹuterónómì 12:9",
        "text": "Ní ọjọ́ keje Ọlọ́run parí iṣẹ́ rẹ̀; ó sinmi kúrò nínú gbogbo iṣẹ́ rẹ̀.",
        "note": "Ọlọ́run sinmi kúrò nínú iṣẹ́ Rẹ̀."
      },
      {
        "ref": "Sáàmù 95:11",
        "text": "Ẹ wọlé sí ìsinmi rẹ̀.",
        "note": "Wọlé sí ìsinmi rẹ̀."
      },
      {
        "ref": "Mátíù 11:28",
        "text": "Nínú ilé Baba mi ni ìyẹ̀wù púpọ̀ wà.",
        "note": "Nínú ilé Baba mi ni ìyẹ̀wù púpọ̀ wà."
      },
      {
        "ref": "Hébérù 4:8-9",
        "text": "Èmi ń lọ láti tọ́jú ibi fún yín.",
        "note": "Mo ń lọ láti tọ́jú ibi fún yín."
      },
      {
        "ref": "Hébérù 4:10",
        "text": "Nítorí náà ìsinmi ṣàbàá ṣì wà fún àwọn ènìyàn Ọlọ́run.",
        "note": "Ìsinmi ṣì wà."
      },
      {
        "ref": "Ìfihàn 14:13",
        "text": "Ìwọ́ sì wí pé, Ìwọ̀nyí ni àwọn tí ń jáde kúrò nínú ìpọ́njú ńlá... Ọlọ́run yóò nu omijé gbogbo kúrò lójú wọn.",
        "note": "Wọn yóò sinmi kúrò nínú iṣẹ́ wọn."
      }
    ]
  },
  "love": {
    "title": "Ìfẹ́ Ọlọ́run",
    "tagline": "Láti Édẹ́nì títí dé agbelebu — ìfẹ́ tí ó kọ́kọ́ fẹ́ wa",
    "summary": "Ìfẹ́ Ọlọ́run kì í ṣe ìmọ̀ràn. Ó jẹ́ ìṣe. Ó fi Ọmọ Rẹ̀ fún, kí ẹnikẹ́ni tí ó bá gbàgbọ́ má ba à parun.",
    "verses": [
      {
        "ref": "Jeremáyà 31:3",
        "text": "Nítorí Ọlọ́run fẹ́ ayé tó bẹ́ẹ̀ gẹ́ẹ́ tí ó fi Ọmọ rẹ̀ kan ṣoṣo fún, kí ẹnikẹ́ni tí ó bá gbàgbọ́ nínú rẹ̀ má ba à parun ṣùgbọ́n kí ó ní ìyè ayérayé.",
        "note": "Ọlọ́run fẹ́ ayé tó bẹ́ẹ̀ gẹ́ẹ́."
      },
      {
        "ref": "Hóṣéà 11:8",
        "text": "Ìfẹ́ jẹ́ sùúrù, ìfẹ́ jẹ́ inúrere. Kì í ṣe ìwà ìlara, kì í ṣe ìfọ̀rọ̀gbẹ́nuṣe, kì í ṣe ìgbéraga.",
        "note": "Ìfẹ́ kì í ṣe ìwà ìbínú, kì í ṣe ìwà ìlara."
      },
      {
        "ref": "Ṣefaníà 3:17",
        "text": "Kò sí ẹnìkan tí ó ní ìfẹ́ tó pọ̀ ju èyí lọ, pé kí ẹnìkan fi ẹ̀mí rẹ̀ lélẹ̀ fún àwọn ọ̀rẹ́ rẹ̀.",
        "note": "Kò sí ẹnìkan tí ó ní ìfẹ́ tó pọ̀ ju èyí lọ."
      },
      {
        "ref": "Jòhánù 3:16",
        "text": "Àwa fẹ́ nítorí òun kọ́kọ́ fẹ́ wa.",
        "note": "Àwa fẹ́ nítorí Òun kọ́kọ́ fẹ́ wa."
      },
      {
        "ref": "Róòmù 8:38-39",
        "text": "Nítorí ìfẹ́ Kristi ń mú wa ṣiṣẹ́.",
        "note": "Ìfẹ́ Kristi ń mú wa ṣiṣẹ́."
      },
      {
        "ref": "1 Jòhánù 4:16",
        "text": "Nísinsin yìí ìgbàgbọ́, ìrètí, ìfẹ́, nǹkan mẹ́ta wọ̀nyí ni ń bẹ; ṣùgbọ́n èyí tó pọ̀jù nínú wọn ni ìfẹ́.",
        "note": "Ohun mẹ́ta yìí wà: ìgbàgbọ́, ìrètí, ìfẹ́. Ìfẹ́ ni ó pọ̀jù."
      }
    ]
  },
  "sanctification": {
    "title": "Ìyàsọ́tọ̀",
    "tagline": "Láti Sínáì títí dé àwòrán Ọmọ",
    "summary": "Ìgbàlà jẹ́ ìṣẹ́ ọjọ́ kan. Ìyàsọ́tọ̀ jẹ́ ìrìn àjò ọjọ́ gbogbo — Ẹ̀mí ń sọ wá di àwòrán Jésù.",
    "verses": [
      {
        "ref": "Ẹ́ksódù 3:5",
        "text": "Ẹ sọ fún gbogbo ìjọ àwọn ọmọ Ísírẹ́lì: Ẹ jẹ́ mímọ́ nítorí èmi mímọ́ ni.",
        "note": "Ẹ jẹ́ mímọ́, nítorí èmi mímọ́ ni."
      },
      {
        "ref": "Léfítíkù 20:26",
        "text": "Ya wọn sọ́tọ̀ nínú òtítọ́; ọ̀rọ̀ rẹ ni òtítọ́.",
        "note": "Jésù gbàdúrà: Ya wọn sọ́tọ̀ nínú òtítọ́."
      },
      {
        "ref": "Jòhánù 17:17",
        "text": "Nítorí èyí ni ìfẹ́ Ọlọ́run, ìmímọ́ yín.",
        "note": "Èyí ni ìfẹ́ Ọlọ́run: ìmímọ́ yín."
      },
      {
        "ref": "Róòmù 6:22",
        "text": "Àwa gbogbo, pẹ̀lú ojú ìbojú tí a ṣí, ń wo ògo Olúwa, a ń ṣe àyípadà sí àwòrán kannáà láti ògo dé ògo.",
        "note": "A ń ṣe àwòrán Ọmọ náà."
      },
      {
        "ref": "Fílípì 1:6",
        "text": "Kí Ọlọ́run àlàáfíà fúnra rẹ̀ sọ yín di mímọ́ pátápátá. Kí ẹ̀mí àti ọkàn àti ara yín pa mọ́ láìlábawọ́n.",
        "note": "Ẹ̀mí àti ọkàn àti ara — kí a pa wọ́n mọ́ ní ìmímọ́."
      },
      {
        "ref": "2 Kọ́ríntì 3:18",
        "text": "Mo dánilójú nínú èyí, pé ẹni tí ó bẹ̀rẹ̀ iṣẹ́ rere nínú yín yóò parí rẹ̀ títí ọjọ́ Jésù Kristi.",
        "note": "Ẹni tí ó bẹ̀rẹ̀ iṣẹ́ rere yóò parí rẹ̀."
      }
    ]
  },
  "seed": {
    "title": "Irúgbìn",
    "tagline": "Láti Édẹ́nì títí dé ọkà ọ̀pọ̀lọpọ̀",
    "summary": "Ìlérí àkọ́kọ́ jẹ́ nípa irúgbìn. Kristi ni Irúgbìn náà. Ìhìn rere jẹ́ irúgbìn tí a gbin, tí ń so èso ọgọ́rùn-ún.",
    "verses": [
      {
        "ref": "Jẹ́nẹ́sísì 3:15",
        "text": "Èmi ó ṣẹ́ ìbánilò ìwọ àti obìnrin náà... òun yóò ṣẹ́ orí rẹ̀, ìwọ yóò sì ṣẹ́ gìgísẹ̀ rẹ̀.",
        "note": "Ìrúgbìn rẹ̀ ni yóò ṣẹ́ orí rẹ̀."
      },
      {
        "ref": "Jẹ́nẹ́sísì 22:18",
        "text": "Nínú irú-ọmọ rẹ ni a ó bùkún gbogbo orílẹ̀-èdè ayé.",
        "note": "Nínú irú-ọmọ rẹ ni a ó bùkún."
      },
      {
        "ref": "Gálátíà 3:16",
        "text": "A kò sọ ìlérí náà fún àwọn irú-ọmọ púpọ̀, ṣùgbọ́n fún ọ̀kan, ẹni tí í ṣe Kristi.",
        "note": "Irúgbìn náà ni Kristi."
      },
      {
        "ref": "Aísáyà 53:10",
        "text": "Olùfún-irúgbìn náà ń fún ọ̀rọ̀.",
        "note": "A gbin irúgbìn ọ̀rọ̀ Ọlọ́run."
      },
      {
        "ref": "Jòhánù 12:24",
        "text": "Nítòótọ́, nítòótọ́, mo sọ fún yín, bí ọkà ìrẹsì kò bá ṣubú sínú ilẹ̀ kí ó kú, òun nìkan ni yóò wà.",
        "note": "Bí ọkà ọkà ìrẹsì kò bá kú, òun nìkan ni yóò wà."
      },
      {
        "ref": "Ìfihàn 7:9",
        "text": "Irúgbìn mìíràn ṣubú sí ilẹ̀ rere, ó so èso, ọgọ́rùn-ún, ọgọ́ta, ọgbọ̀n.",
        "note": "Ilẹ̀ rere so èso."
      }
    ]
  },
  "joy": {
    "title": "Ayọ̀",
    "tagline": "Láti orin ìjáde títí dé ayọ̀ Olúwa tí í ṣe agbára",
    "summary": "Ayọ̀ nínú Ìwé Mímọ́ kì í ṣe ìṣẹ̀lẹ̀. Ó jẹ́ agbára, ẹ̀bùn, àti ibi tí ìrìn àjò òtítọ́ ń lọ — inú ayọ̀ Ọ̀gá.",
    "verses": [
      {
        "ref": "Nehemáyà 8:10",
        "text": "Nígbà náà wí fún wọn pé, Ẹ má ṣọ̀fọ̀, nítorí ayọ̀ Olúwa ni agbára yín.",
        "note": "Ayọ̀ Olúwa ni agbára yín."
      },
      {
        "ref": "Sáàmù 16:11",
        "text": "Ìwọ ń fi ọ̀nà ìyè hàn mí; ìwọ yóò fi ayọ̀ kún mi níwájú rẹ, pẹ̀lú ìgbádùn ayérayé ní ọwọ́ ọ̀tún rẹ.",
        "note": "Ìwọ yóò fi ayọ̀ kún mi níwájú rẹ."
      },
      {
        "ref": "Hábákúkù 3:17-18",
        "text": "Bí igi ọ̀pọ̀tọ́ kò bá rúwe, tí kò sì sí èso nínú àjàrà... síbẹ̀ èmi ó yọ̀ nínú Olúwa, n ó sì yọ̀ nínú Ọlọ́run Olùgbàlà mi.",
        "note": "Bí igi ọ̀pọ̀tọ́ kò bá rúwe... sìbẹ̀ èmi ó yọ̀ nínú Olúwa."
      },
      {
        "ref": "Jòhánù 15:11",
        "text": "Mo sọ nǹkan wọ̀nyí fún yín kí ayọ̀ mi lè wà nínú yín, kí ayọ̀ yín sì pé.",
        "note": "Kí ayọ̀ mi wà nínú yín, kí ayọ̀ yín sì pé."
      },
      {
        "ref": "Róòmù 15:13",
        "text": "Kí Ọlọ́run ìrètí fi gbogbo ayọ̀ àti àlàáfíà kún yín bí ẹ ṣe ń gbẹ́kẹ̀lé e, kí ẹ lè kún fún ìrètí nípa agbára Ẹ̀mí Mímọ́.",
        "note": "Kí Ọlọ́run ìrètí fi gbogbo ayọ̀ àti àlàáfíà kún yín."
      },
      {
        "ref": "Mátíù 25:21",
        "text": "Ọ̀gá rẹ̀ dáhùn pé, O ṣeun, ìránṣẹ́ rere olóòtọ́! ... Wọlé sí ayọ̀ ọ̀gá rẹ.",
        "note": "Wọlé sí ayọ̀ ọ̀gá rẹ."
      }
    ]
  }
}
};

function yoThreadBookRef(ref) {
  return ref;
}

function getLocalizedThreads() {
  const base = (typeof BIBLE_THREADS !== 'undefined') ? BIBLE_THREADS : [];
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  if (lang !== 'yo' || !THREAD_I18N.yo) return base;
  return base.map(t => {
    const yo = THREAD_I18N.yo[t.id];
    if (!yo) return t;
    return Object.assign({}, t, {
      title: yo.title || t.title,
      tagline: yo.tagline || t.tagline,
      summary: yo.summary || t.summary,
      verses: (t.verses || []).map((v, i) => {
        const yv = (yo.verses && yo.verses[i]) || {};
        return {
          ref: yv.ref || v.ref,
          text: yv.text || v.text,
          note: yv.note || v.note
        };
      })
    });
  });
}

function getThreadWeekIndex() {
  const list = getLocalizedThreads();
  if (!list.length) return 0;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.floor(dayOfYear / 7) % list.length;
}

function getTodayLocalizedThread() {
  const list = getLocalizedThreads();
  return list[getThreadWeekIndex()] || list[0] || null;
}

window.THREAD_I18N = THREAD_I18N;
window.getLocalizedThreads = getLocalizedThreads;
window.getThreadWeekIndex = getThreadWeekIndex;
window.getTodayLocalizedThread = getTodayLocalizedThread;
