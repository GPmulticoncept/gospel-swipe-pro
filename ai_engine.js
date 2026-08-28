// ==========================================================
// GospelSwipe Pro — Ask AI (offline pastoral engine)
// No API. No tracking. Retrieves from a curated knowledge
// base + the user's loaded slides, devotionals, living faith,
// tracts, and threads. Speaks answers with the human voice.
// ==========================================================

const GS_AI_SUGGEST = [
  { id: 'god-love', en: 'Does God really love me?', yo: 'Ṣé Ọlọ́run fẹ́ràn mi nítòótọ́?' },
  { id: 'suffering', en: 'Why does God allow suffering?', yo: 'Kí ló dé tí Ọlọ́run fi ń jẹ́ kí ìjìyà wà?' },
  { id: 'only-way', en: 'Is Jesus the only way?', yo: 'Ṣé Jésù nìkan ni ọ̀nà?' },
  { id: 'trinity', en: 'How can God be three and one?', yo: 'Báwo ni Ọlọ́run ṣe lè jẹ́ mẹ́ta àti ọ̀kan?' },
  { id: 'assurance', en: 'How do I know I am saved?', yo: 'Báwo ni mo ṣe máa mọ̀ pé a ti gbà mí là?' },
  { id: 'scripture', en: 'Can I trust the Bible?', yo: 'Ṣé mo lè gbẹ́kẹ̀lé Bíbélì?' },
  { id: 'holy-spirit', en: 'Who is the Holy Spirit?', yo: 'Ta ni Ẹ̀mí Mímọ́?' },
  { id: 'forgiveness', en: 'How do I forgive someone?', yo: 'Báwo ni mo ṣe lè dáríjì ẹnìkan?' }
];

const GS_AI_KB = [
  {
    id: 'god-love',
    keywords: 'love loved john 3:16 unconditional agape ife ìfẹ́ dieu aime upendo mahaba',
    q: { en: 'Does God really love me?', yo: 'Ṣé Ọlọ́run fẹ́ràn mi nítòótọ́?', fr: 'Dieu m\'aime-t-il vraiment ?', sw: 'Je, Mungu ananipenda kweli?', ar: 'هل يحبني الله حقاً؟', ig: 'Chineke hụrụ m n\'anya n\'ezie?', ha: 'Shin Allah yana ƙaunata da gaske?', pcm: 'God really love me?' },
    answer: {
      en: 'Yes — and not as a mood. God\'s love is not a reward for your good week and it does not shrink on your worst one. Before you performed, before you believed, before you cleaned anything up, the Father gave His Son. That is not sentiment. That is a cross.\n\nYou do not have to feel lovable to be loved. You do not have to finish repenting to be approached. John 3:16 is not a slogan for other people. It is God naming you as someone He would rather die for than live without.\n\nReceive it as a fact about Him, not a grade about you. Then let it change how you treat the person in front of you — because people who have been loved like this do not ration mercy.',
      yo: 'Bẹ́ẹ̀ni — kì í ṣe bí ìmọ̀lára. Ìfẹ́ Ọlọ́run kì í ṣe ẹ̀san ọ̀sẹ̀ rere rẹ, kì í sì kéré ní ọjọ́ burúkú rẹ. Kí o tó ṣe ohunkóhun, kí o tó gbàgbọ́, Baba fi Ọmọ Rẹ̀ fún. Ìyẹn kì í ṣe ẹ̀dùn-ọkàn. Àgbélébùú ni.\n\nO kò nílò láti nímọ̀lára pé a fẹ́ràn rẹ kí a tó fẹ́ràn rẹ. Jòhánù 3:16 kì í ṣe ọ̀rọ̀ fún ẹlòmíràn. Ọlọ́run ń pe orúkọ rẹ gẹ́gẹ́ bí ẹnìkan tí Ó kú fún.\n\nGba á gẹ́gẹ́ bí òtítọ́ nípa Rẹ̀, kì í ṣe ìwé ìdánwò nípa tirẹ. Jẹ́ kí ó yí ọ̀nà tí o ń gbà hùwà sí àwọn ènìyàn padà.'
    },
    verse: { text: { en: 'For God so loved the world that he gave his one and only Son.', yo: 'Nítorí Ọlọ́run fẹ́ràn ayé tó fi Ọmọ Rẹ̀ kanṣoṣo fún.' }, ref: { en: 'John 3:16', yo: 'Jòhánù 3:16' } },
    live: { en: 'Say out loud, once today: "God loved me first." Then do one kind thing for someone who cannot repay you.', yo: 'Sọ jáde lónìí: "Ọlọ́run fẹ́ràn mi kọ́kọ́." Lẹ́yìn náà ṣe oore kan fún ẹnìkan tí kò lè san án.' }
  },
  {
    id: 'sin-problem',
    keywords: 'sin sinner fall short shame guilt ẹṣẹ̀ péché dhambi khatiya mmehie zunubi',
    q: { en: 'Am I really that bad?', yo: 'Ṣé mo burú tó bẹ́ẹ̀ nítòótọ́?' },
    answer: {
      en: 'The Bible is more honest than our self-talk. "All have sinned" is not an insult. It is a diagnosis — and diagnoses exist so healing can start. Sin is not only the scandalous thing. It is also the quiet way we put ourselves in God\'s chair: our rules, our image, our control.\n\nYou are not uniquely broken. You are human. The glory we fall short of is not a trophy. It is God\'s own life. That is why self-help cannot close the gap. We do not need a better version of the old self. We need a Saviour.\n\nThe good news is sitting right next to the diagnosis. The same verse that says we fell short says we are justified freely by grace. Your job is not to minimise the wound. It is to bring it to the One who already paid for it.',
      yo: '"Gbogbo ènìyàn ti ṣẹ̀" kì í ṣe ẹ̀gàn. Ó jẹ́ àyẹ̀wò àìsàn — kí ìwòsàn lè bẹ̀rẹ̀. Ẹ̀ṣẹ̀ kì í ṣe ìtàn ẹlẹ́gàn nìkan. Ó tún jẹ́ ọ̀nà tí a fi ń fi ara wa sí àga Ọlọ́run.\n\nÌwọ kì í ṣe ẹni tí ó bàjẹ́ nìkan. Ènìyàn ni ọ́. A kò nílò ẹ̀dá atijọ́ tó dára síi. A nílò Olùgbàlà.\n\nÌhìnrere wà lẹ́gbẹ̀ẹ́ àyẹ̀wò náà: a dá wa láre lọ́fẹ̀ẹ́ nípasẹ̀ oore-ọ̀fẹ́.'
    },
    verse: { text: { en: 'For all have sinned and fall short of the glory of God.', yo: 'Nítorí gbogbo ènìyàn ti ṣẹ̀, wọ́n sì kùnà ogo Ọlọ́run.' }, ref: { en: 'Romans 3:23', yo: 'Róòmù 3:23' } },
    live: { en: 'Name one pattern you have been calling "just how I am." Bring it to God in one honest sentence.', yo: 'Darúkọ àṣà kan tí o ń pè ní "báyìí ni mo rí." Gbé e wá sọ́dọ̀ Ọlọ́run nínú gbolóhùn kan.' }
  },
  {
    id: 'jesus-solution',
    keywords: 'jesus cross died sinners christ solution ọmọ ẹ̀ṣẹ̀',
    q: { en: 'Why did Jesus have to die?', yo: 'Kí ló dé tí Jésù fi ní láti kú?' },
    answer: {
      en: 'Because love that never bleeds cannot carry real guilt. God did not look away from sin. He walked into it. While we were still sinners — not after we improved — Christ died for us. The cross is not God losing. It is God paying.\n\nEvery religion has advice. The gospel has a substitute. Jesus does not stand on the shore shouting instructions to drowning people. He gets in the water and trades places.\n\nIf you have been trying to earn your way back, you can stop. The debt is not discounted. It is cancelled, in His blood, for anyone who will receive Him.',
      yo: 'Ìfẹ́ tí kò ta ẹ̀jẹ̀ kò lè gbé ẹ̀bi gidi. Ọlọ́run kò fojú fo ẹ̀ṣẹ̀. Ó wọ inú rẹ̀. Nígbà tí a ṣì jẹ́ ẹlẹ́ṣẹ̀, Kristi kú fún wa.\n\nẸ̀sìn gbogbo ní ìmọ̀ràn. Ìhìnrere ní ẹni tí ó rọ́pò. Jésù kì í dúró ní etí odò ń kígbe. Ó wọ omi, Ó sì pààrọ̀ ipò.\n\nTí o bá ń gbìyànjú láti san gbèsè, o lè dáwọ́ dúró. A ti pa á rẹ́ nínú ẹ̀jẹ̀ Rẹ̀.'
    },
    verse: { text: { en: 'While we were still sinners, Christ died for us.', yo: 'Nígbà tí a ṣì jẹ́ ẹlẹ́ṣẹ̀, Kristi kú fún wa.' }, ref: { en: 'Romans 5:8', yo: 'Róòmù 5:8' } },
    live: { en: 'Thank Him out loud for a specific failure He already covered. Do not bargain. Just thank.', yo: 'Dúpẹ́ lọ́wọ́ Rẹ̀ jáde fún ìkùnà kan tí Ó ti bò. Má ṣe náwó. Kìkì dúpẹ́.' }
  },
  {
    id: 'faith-response',
    keywords: 'faith grace works saved gift ìgbàgbọ́ oore-ọ̀fẹ́',
    q: { en: 'Is salvation by faith or by works?', yo: 'Ṣé ìgbàlà wà nípasẹ̀ ìgbàgbọ́ tàbí iṣẹ́?' },
    answer: {
      en: 'By grace, through faith — and that itself is a gift. Works cannot buy what love already spent. If you could earn it, you could boast, and the cross would be a contribution instead of a rescue.\n\nFaith is not a feeling you whip up. It is trust with empty hands: Jesus, I cannot save me. You already did. I receive You.\n\nWorks then become fruit, not currency. We do not work for the relationship. We work from it. A tree does not strain to prove it is alive. It bears because it is.',
      yo: 'Nípasẹ̀ oore-ọ̀fẹ́, nípasẹ̀ ìgbàgbọ́ — ẹ̀bùn sì ni. Iṣẹ́ kò lè ra ohun tí ìfẹ́ ti ná.\n\nÌgbàgbọ́ kì í ṣe ìmọ̀lára. Ìgbẹ́kẹ̀lé ni pẹ̀lú ọwọ́ òfo: Jésù, èmi kò lè gba ara mi là. Ìwọ ti ṣe é.\n\nIṣẹ́ di èso, kì í ṣe owó. A kì í ṣiṣẹ́ fún ìbáṣepọ̀. A ń ṣiṣẹ́ látinú rẹ̀.'
    },
    verse: { text: { en: 'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.', yo: 'Nítorí nípasẹ̀ oore-ọ̀fẹ́ ni a ṣe gbà yín là, nípasẹ̀ ìgbàgbọ́ — kì í ṣe láti ọ̀dọ̀ yín, ẹ̀bùn Ọlọ́run ni.' }, ref: { en: 'Ephesians 2:8-9', yo: 'Éfésù 2:8-9' } },
    live: { en: 'Pray once, simply: "I receive what I cannot earn." Then do one good work as gratitude, not payment.', yo: 'Gbàdúrà: "Mo gba ohun tí èmi kò lè jèrè." Ṣe oore kan gẹ́gẹ́ bí ọpẹ́, kì í ṣe ìsanwó.' }
  },
  {
    id: 'new-life',
    keywords: 'new creation old gone born again ẹ̀dá tuntun',
    q: { en: 'Can I really change?', yo: 'Ṣé mo lè yí padà nítòótọ́?' },
    answer: {
      en: 'The gospel is not a gym membership for the soul. It is a funeral and a birth. In Christ the old has gone — not "is trying harder." The new is here.\n\nChange is not you dragging a corpse uphill. It is you learning to live as someone already raised. Some patterns die fast. Some take years of remaining in the Vine. Both are grace.\n\nIf you failed yesterday, that is data, not destiny. Come back. New creation is a status you stand in, then a life you grow into.',
      yo: 'Ìhìnrere kì í ṣe ilé-ìdárayá ọkàn. Ìsìnkú àti ìbí ni. Nínú Kristi atijọ́ ti lọ. Tuntun wà níbí.\n\nÌyípadà kì í ṣe fífa òkú lọ́sókè. Ó jẹ́ gígbe bí ẹnìkan tí a ti jí.\n\nTí o bá kùnà lánàá, ìyẹn kì í ṣe à motẹ́lẹ̀. Padà wá.'
    },
    verse: { text: { en: 'If anyone is in Christ, the new creation has come: The old has gone, the new is here!', yo: 'Bí ẹnìkan bá wà nínú Kristi, ẹ̀dá tuntun ti dé: atijọ́ ti lọ, tuntun wà níbí!' }, ref: { en: '2 Corinthians 5:17', yo: '2 Kọ́ríntì 5:17' } },
    live: { en: 'Write one "old me" sentence and one "in Christ" sentence. Read the second one three times today.', yo: 'Kọ gbolóhùn "èmi atijọ́" kan àti "nínú Kristi" kan. Ka èkejì nígbà mẹ́ta lónìí.' }
  },
  {
    id: 'trinity',
    keywords: 'trinity father son spirit three one mẹ́talọ́kan',
    q: { en: 'How can God be three and one?', yo: 'Báwo ni Ọlọ́run ṣe lè jẹ́ mẹ́ta àti ọ̀kan?' },
    answer: {
      en: 'Christians are not saying there are three Gods, and we are not saying God wears three masks. We are saying what Scripture shows: one God, three Persons — Father, Son, and Holy Spirit — who know, love, and send one another, and who together create, save, and dwell with us.\n\nYou do not have to diagram it to worship it. You are already living inside a reality bigger than a flowchart. Baptism is in the name — singular — of the Father and the Son and the Holy Spirit.\n\nIf it feels large, good. A God you could fully contain would be too small to save you. Receive the mystery with humility, and talk to all three: the Father who planned, the Son who came, the Spirit who stays.',
      yo: 'A kì í sọ pé Ọlọ́run mẹ́ta ni, tàbí pé Ọlọ́run wọ bòjù méta. Ọlọ́run kan, Ẹni mẹ́ta — Baba, Ọmọ, Ẹ̀mí Mímọ́.\n\nO kò nílò láti ya á kí o tó jọ́sìn. Baptisi wà ní orúkọ Baba àti Ọmọ àti Ẹ̀mí Mímọ́.\n\nBí ó bá tóbi jù, ó dára. Ọlọ́run tí o lè fi sínú àpótí kò tó láti gbà ọ́ là.'
    },
    verse: { text: { en: 'Baptizing them in the name of the Father and of the Son and of the Holy Spirit.', yo: 'Tí ẹ ń ṣe àwọn ní baptisi ní orúkọ Baba àti Ọmọ àti Ẹ̀mí Mímọ́.' }, ref: { en: 'Matthew 28:19', yo: 'Mátíù 28:19' } },
    live: { en: 'In prayer today, thank the Father, thank the Son, and invite the Spirit — three sentences.', yo: 'Nínú àdúrà lónìí, dúpẹ́ lọ́wọ́ Baba, lọ́wọ́ Ọmọ, kí o sì pè Ẹ̀mí — gbolóhùn mẹ́ta.' }
  },
  {
    id: 'scripture',
    keywords: 'bible word trustworthy reliable scripture ìwé mímọ́',
    q: { en: 'Can I trust the Bible?', yo: 'Ṣé mo lè gbẹ́kẹ̀lé Bíbélì?' },
    answer: {
      en: 'The Bible is not a museum of religious quotes. It is God-breathed — useful for teaching, correcting, and training so that ordinary people can be ready for every good work. It has been copied with a care no other ancient library received, and it has a habit of reading us while we read it.\n\nYou do not need a seminary to start. You need a humble chair and an open page. Ask the Spirit to make it alive. He likes that prayer.\n\nTrust grows by use. Read a small passage slowly. Obey the next clear thing. Watch how a living word refuses to stay theoretical.',
      yo: 'Bíbélì kì í ṣe ilé ìṣúra ọ̀rọ̀ ẹ̀sìn. Ìmísí Ọlọ́run ni — ó wúlò fún ẹ̀kọ́, ìtúnṣe, àti ìdánilẹ́kọ̀ọ́.\n\nO kò nílò ilé-ẹ̀kọ́ gíga láti bẹ̀rẹ̀. Àga àti ojú-ìwé ṣíṣí ni o nílò. Bẹ Ẹ̀mí kí ó sọ ọ́ di alààyè.\n\nÌgbẹ́kẹ̀lé ń dàgbà nípa lílo. Ka ẹsẹ kékeré. Ṣe ohun tó ṣe kedere tó kàn.'
    },
    verse: { text: { en: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.', yo: 'Gbogbo Ìwé Mímọ́ jẹ́ ìmísí Ọlọ́run, ó sì wúlò fún ẹ̀kọ́, ìbáwí, ìtúnṣe àti ìdánilẹ́kọ̀ọ́ nínú òdodo.' }, ref: { en: '2 Timothy 3:16', yo: '2 Tímótì 3:16' } },
    live: { en: 'Read ten verses slowly today. Write one sentence: "God is telling me ___."', yo: 'Ka ẹsẹ mẹ́wàá lọ́lọ́. Kọ: "Ọlọ́run ń sọ fún mi pé ___."' }
  },
  {
    id: 'suffering',
    keywords: 'suffering pain why evil sick grief ìjìyà why god allow',
    q: { en: 'Why does God allow suffering?', yo: 'Kí ló dé tí Ọlọ́run fi ń jẹ́ kí ìjìyà wà?' },
    answer: {
      en: 'This is the question that keeps honest people awake. Scripture does not shrug. It sits down in the ash with Job, weeps at Lazarus\'s tomb, and then — unlike every cheap answer — it bleeds. God does not send a theory into suffering. He sends Himself.\n\nRomans 8:28 is not "everything is nice." It is "nothing is wasted in the hands of a Father who loves you and is writing a larger story." The classroom of pain teaches what comfort never could: perseverance, character, hope.\n\nYou are allowed to lament. The psalms do. Bring Him the unedited version. Then watch for His presence in the middle, not only His exit plan. The cross proves He will not stay away from the worst thing. The resurrection proves the worst thing is not the last thing.',
      yo: 'Ìbéèrè yìí ló ń mú olóòótọ́ jí. Ìwé Mímọ́ kì í ju ìyẹ́sí. Ó jókòó nínú eeru pẹ̀lú Jóòbù, Ó sọkún, lẹ́yìn náà Ó ta ẹ̀jẹ̀. Ọlọ́run kì í rán ẹ̀kọ́ nìkan sínú ìjìyà. Ó rán ara Rẹ̀.\n\nRóòmù 8:28 kì í ṣe "ohun gbogbo dára." Ó jẹ́ "kò sí òfò nínú ọwọ́ Baba."\n\nO lè ṣọ̀fọ̀. Sáàmù ṣe bẹ́ẹ̀. Àgbélébùú fi hàn pé kì yóò jìnnà sí ohun burú jù. Àjíǹde fi hàn pé ohun burú jù kì í ṣe ìkẹyìn.'
    },
    verse: { text: { en: 'And we know that in all things God works for the good of those who love him.', yo: 'A sì mọ̀ pé nínú ohun gbogbo Ọlọ́run ń ṣiṣẹ́ fún rere àwọn tí ó nífẹ̀ẹ́ Rẹ̀.' }, ref: { en: 'Romans 8:28', yo: 'Róòmù 8:28' } },
    live: { en: 'Tell God one unedited sentence about your pain. Then ask one friend to pray with you this week.', yo: 'Sọ gbolóhùn olóòótọ́ kan fún Ọlọ́run nípa ìrora rẹ. Bẹ ọ̀rẹ́ kan kí ó gbàdúrà pẹ̀lú rẹ lọ́sẹ̀ yìí.' }
  },
  {
    id: 'only-way',
    keywords: 'only way jesus exclusive other religions john 14:6',
    q: { en: 'Is Jesus the only way to God?', yo: 'Ṣé Jésù nìkan ni ọ̀nà sí Ọlọ́run?' },
    answer: {
      en: 'Jesus did not say He is a way. He said He is the way, the truth, and the life — and that no one comes to the Father except through Him. That is either arrogance or it is the most important sentence ever spoken. The resurrection is God\'s vote.\n\nThis is not cruelty. It is clarity. If there were another door, the cross would be unnecessary theatre. The uniqueness of Jesus is the uniqueness of grace: God came down, because we could not climb up.\n\nOther paths have wisdom, beauty, and sincere people. They do not have a crucified-and-risen Lord who can forgive you and live in you. Hold that with tears, not a smirk — then share it as an invitation, not a trophy.',
      yo: 'Jésù kò sọ pé òun jẹ́ ọ̀nà kan. Ó sọ pé òun ni ọ̀nà, òtítọ́, àti ìyè — ẹnìkankan kì í tọ Baba wá àyàfi nípasẹ̀ Rẹ̀.\n\nÈyí kì í ṣe ìkà. Ìkedere ni. Bí ìlẹ̀kùn mìíràn bá wà, àgbélébùú jẹ́ eré asán.\n\nÀwọn ọ̀nà mìíràn ní ọgbọ́n. Wọn kò ní Olúwa tí a kàn mọ́ àgbélébùú, tí a sì jí, tí ó lè dáríjì ọ́.'
    },
    verse: { text: { en: 'I am the way and the truth and the life. No one comes to the Father except through me.', yo: 'Èmi ni ọ̀nà àti òtítọ́ àti ìyè. Ẹnikẹ́ni kì í tọ Baba wá àyàfi nípasẹ̀ mi.' }, ref: { en: 'John 14:6', yo: 'Jòhánù 14:6' } },
    live: { en: 'Pray for one person of another faith by name. Ask for a door, not an argument.', yo: 'Gbàdúrà fún ẹnìkan nínú ẹ̀sìn mìíràn ní orúkọ. Béèrè ìlẹ̀kùn, kì í ṣe ìjiyàn.' }
  },
  {
    id: 'salvation-prayer',
    keywords: 'saved how to be saved sinner prayer romans 10:9 receive christ',
    q: { en: 'How do I get saved?', yo: 'Báwo ni mo ṣe lè gba ìgbàlà?' },
    answer: {
      en: 'Not by a magic formula. By a Person. If you declare with your mouth that Jesus is Lord, and believe in your heart that God raised Him from the dead, you will be saved. That is confession plus trust — not performance plus panic.\n\nYou can pray now: "Jesus, I am a sinner. I believe You died and rose for me. I receive You as Lord. Make me new." Say it as you. He hears the honest version.\n\nThen tell someone. Get among a church that opens the Bible. Start the 7-day New Believer Guide in this app. Salvation is a doorway. Discipleship is the house.',
      yo: 'Kì í ṣe ọ̀rọ̀ idán. Ẹni ni. Bí o bá jẹ́wọ́ pẹ̀lú ẹnu rẹ pé Jésù ni Olúwa, tí o sì gbàgbọ́ nínú ọkàn rẹ pé Ọlọ́run jí I dìde, a ó gbà ọ́ là.\n\nO lè gbàdúrà nísinsin: "Jésù, ẹlẹ́ṣẹ̀ ni mí. Mo gbàgbọ́ pé O kú, O sì jí fún mi. Mo gba Ọ́ gẹ́gẹ́ bí Olúwa."\n\nSọ fún ẹnìkan. Wọ ìjọ. Bẹ̀rẹ̀ Ìtọ́sọ́nà Onígbàgbọ́ Tuntun nínú app yìí.'
    },
    verse: { text: { en: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.', yo: 'Bí o bá jẹ́wọ́ pẹ̀lú ẹnu rẹ pé "Jésù ni Olúwa," tí o sì gbàgbọ́ nínú ọkàn rẹ pé Ọlọ́run jí I dìde kúrò nínú òkú, a ó gbà ọ́ là.' }, ref: { en: 'Romans 10:9', yo: 'Róòmù 10:9' } },
    live: { en: 'If this is your yes, pray it now, then tell one believer today. Open the New Believer Guide next.', yo: 'Bí èyí bá jẹ́ bẹ́ẹ̀ni rẹ, gbàdúrà nísinsin, sọ fún onígbàgbọ́ kan. Ṣí Ìtọ́sọ́nà Onígbàgbọ́ Tuntun.' }
  },
  {
    id: 'holy-spirit',
    keywords: 'holy spirit helper power acts 1:8 ẹ̀mí mímọ́',
    q: { en: 'Who is the Holy Spirit?', yo: 'Ta ni Ẹ̀mí Mímọ́?' },
    answer: {
      en: 'Not a force. Not a mood. A Person — God with you and in you. Jesus promised power when the Spirit comes, not for private fireworks but for witness: Jerusalem, Judea, Samaria, the ends of the earth. That includes your street.\n\nHe convicts, comforts, teaches, intercedes with groans, grows fruit you cannot fake, and can be grieved. You do not use Him. You yield.\n\nIf you are in Christ, you are not waiting to "get" the Spirit like a package. You are invited to keep being filled — a lifestyle of yes.',
      yo: 'Kì í ṣe agbára. Kì í ṣe ìmọ̀lára. Ẹni ni — Ọlọ́run pẹ̀lú rẹ àti nínú rẹ. Jésù ṣèlérí agbára kí ẹ lè jẹ́ ẹlẹ́rìí.\n\nÓ ń ṣe ìdánilójú, Ó ń tù, Ó ń kọ́, Ó ń bẹ̀bẹ̀, Ó ń so èso.\n\nTí o bá wà nínú Kristi, o kì í dúró láti "gba" Ẹ̀mí bí ẹ̀bùn àpótí. A ń pè ọ́ láti máa kún.'
    },
    verse: { text: { en: 'You will receive power when the Holy Spirit comes on you; and you will be my witnesses.', yo: 'Ẹ ó gba agbára nígbà tí Ẹ̀mí Mímọ́ bá bà lé yín; ẹ ó sì jẹ́ ẹlẹ́rìí mi.' }, ref: { en: 'Acts 1:8', yo: 'Ìṣe 1:8' } },
    live: { en: 'Before you speak to anyone today, pray: "Holy Spirit, fill me and lead my next conversation."', yo: 'Kí o tó sọ̀rọ̀ pẹ̀lú ẹnìkan, gbàdúrà: "Ẹ̀mí Mímọ́, kún mi, tọ́ ìjíròrò tó kàn."' }
  },
  {
    id: 'great-commission',
    keywords: 'great commission go make disciples evangelism share gospel',
    q: { en: 'Do I have to evangelise?', yo: 'Ṣé mo ní láti wàásù?' },
    answer: {
      en: 'Jesus\' last words were not "get comfortable." They were "go and make disciples of all nations." That is not a personality type. It is the family business.\n\nYou may not have a stage. You have a story, a phone, a neighbour, and this app. Witnesses are not lawyers. They tell what they have seen.\n\nStart close. Pray a name. Share a verse. Log it in your Soul Journal. Obedience is usually smaller and braver than we imagined.',
      yo: 'Ọ̀rọ̀ ìkẹyìn Jésù kì í ṣe "sinmi." Ó jẹ́ "ẹ lọ, ẹ sọ gbogbo orílẹ̀-èdè di ọmọ-ẹ̀yìn."\n\nO lè má ní pẹpẹ. O ní ìtàn, ẹ̀rọ, aládùúgbò, àti app yìí. Ẹlẹ́rìí kì í ṣe agbẹjọ́rò.\n\nBẹ̀rẹ̀ nítòsí. Gbàdúrà orúkọ kan. Pín ẹsẹ kan.'
    },
    verse: { text: { en: 'Go and make disciples of all nations.', yo: 'Ẹ lọ, ẹ sọ gbogbo orílẹ̀-èdè di ọmọ-ẹ̀yìn.' }, ref: { en: 'Matthew 28:19', yo: 'Mátíù 28:19' } },
    live: { en: 'Send one verse or this app link to one person today. Then log it in Soul Journal.', yo: 'Fi ẹsẹ kan tàbí ìtọ́kasí app yìí ránṣẹ́ sí ẹnìkan lónìí. Kọ ọ́ sínú Soul Journal.' }
  },
  {
    id: 'love-neighbor',
    keywords: 'love neighbour neighbor greatest commandment',
    q: { en: 'What does God actually want from me?', yo: 'Kí ni Ọlọ́run fẹ́ lọ́wọ́ mi nítòótọ́?' },
    answer: {
      en: 'Love God with everything. Love your neighbour as yourself. Jesus said all the Law and the Prophets hang on these two. That is not a reduction. It is the weight.\n\nLove is not a vibe. It is costly attention — time, forgiveness, food, truth, presence. If your faith never becomes a neighbour\'s relief, it is still too private.\n\nStart with the person you are avoiding. That is usually the assignment.',
      yo: 'Fẹ́ Ọlọ́run pẹ̀lú ohun gbogbo. Fẹ́ aládùúgbò rẹ bí ara rẹ. Gbogbo Òfin àti Àwọn Wòlíì gbé lórí méjèèjì yìí.\n\nÌfẹ́ kì í ṣe ìmọ̀lára. Ó jẹ́ àfiyèsí tó náni — àkókò, ìdáríjì, oúnjẹ, òtítọ́.\n\nBẹ̀rẹ̀ pẹ̀lú ẹni tí o ń yẹra fún. Ìyẹn ni iṣẹ́ náà nigbagbogbo.'
    },
    verse: { text: { en: 'Love the Lord your God with all your heart... Love your neighbour as yourself.', yo: 'Fẹ́ Olúwa Ọlọ́run rẹ pẹ̀lú gbogbo ọkàn rẹ... Fẹ́ aládùúgbò rẹ bí ara rẹ.' }, ref: { en: 'Matthew 22:37-39', yo: 'Mátíù 22:37-39' } },
    live: { en: 'Do one practical kindness today for someone who cannot help your reputation.', yo: 'Ṣe inúure kan lónìí fún ẹnìkan tí kò lè ran orúkọ rẹ lọ́wọ́.' }
  },
  {
    id: 'forgiveness',
    keywords: 'forgive forgiveness bitterness revenge ìdáríjì',
    q: { en: 'Do I have to forgive them?', yo: 'Ṣé mo ní láti dáríjì wọn?' },
    answer: {
      en: 'Forgiveness is not saying it was fine. It is releasing the debt so it stops owning you. You are not the judge of the universe. You are someone who has been forgiven a larger bill.\n\nIt can be slow. It can include boundaries. It does not require trust to be rebuilt on day one. It does require you to stop collecting interest in your head.\n\nIf you cannot feel it yet, start with obedience: "Lord, I put this person in Your hands. Pay me back however You choose. Free me." He honours that prayer.',
      yo: 'Ìdáríjì kì í ṣe pé ó dára. Ó jẹ́ jíjọ̀wọ́ gbèsè kí ó má ṣe jẹ́ olúwa rẹ.\n\nÓ lè lọ́ra. Ó lè ní ààlà. Kò nílò ìgbẹ́kẹ̀lé lọ́jọ́ kìn-ín-ní.\n\nBí o kò tí ì nímọ̀lára, bẹ̀rẹ̀ pẹ̀lú ìgbọràn: "Olúwa, mo fi ẹni yìí sí ọwọ́ Rẹ. Tú mi sílẹ̀."'
    },
    verse: { text: { en: 'Forgive as the Lord forgave you.', yo: 'Ẹ dáríjì gẹ́gẹ́ bí Olúwa ṣe dáríjì yín.' }, ref: { en: 'Colossians 3:13', yo: 'Kólósè 3:13' } },
    live: { en: 'Write the name. Pray the release sentence once. Do not send a message yet unless peace is clear.', yo: 'Kọ orúkọ náà. Gbàdúrà ìtúsílẹ̀ lẹ́ẹ̀kan. Má ṣe fi ìránṣẹ́ ránṣẹ́ àyàfi tí àlàáfíà bá ṣe kedere.' }
  },
  {
    id: 'eternal-hope',
    keywords: 'heaven death fear eternal hope resurrection',
    q: { en: 'What happens when I die?', yo: 'Kí ni yóò ṣẹlẹ̀ nígbà tí mo bá kú?' },
    answer: {
      en: 'For those in Christ, death is not a wall. It is a door into the presence of the One who already walked through it and left it open. Nothing — not death, not life, not powers — can separate us from the love of God in Christ Jesus.\n\nGrief is still real. Jesus cried. Hope does not cancel tears. It tells tears they are not the last word.\n\nLive today like a citizen of heaven: less panic, more generosity, more witness. The future is occupied by a risen Person, not a fog.',
      yo: 'Fún àwọn tí ń bẹ nínú Kristi, ikú kì í ṣe ògiri. Ìlẹ̀kùn ni sínú ìwàjú Ẹni tí Ó ti kọjá nínú rẹ̀.\n\nÌbànújẹ́ ṣì wà. Jésù sọkún. Ìrètí kì í pa omijé rẹ́. Ó sọ fún omijé pé kì í ṣe ọ̀rọ̀ ìkẹyìn.\n\nGbé lónìí bí ọmọ-ìlú ọ̀run.'
    },
    verse: { text: { en: 'Neither death nor life... nor anything else in all creation will be able to separate us from the love of God.', yo: 'Ikú tàbí ìyè... tàbí ohunkóhun nínú ẹ̀dá kò lè yà wá kúrò lọ́dọ̀ ìfẹ́ Ọlọ́run.' }, ref: { en: 'Romans 8:38-39', yo: 'Róòmù 8:38-39' } },
    live: { en: 'If you fear death, read Romans 8:38-39 aloud twice. If you love someone grieving, send them that verse.', yo: 'Bí ìbẹ̀rù ikú bá wà, ka Róòmù 8:38-39 nígbà méjì. Bí ẹnìkan bá ń ṣọ̀fọ̀, fi ẹsẹ náà ránṣẹ́.' }
  },
  {
    id: 'assurance',
    keywords: 'assurance saved know eternal security doubt',
    q: { en: 'How do I know I am really saved?', yo: 'Báwo ni mo ṣe máa mọ̀ pé a ti gbà mí là?' },
    answer: {
      en: 'Not by the volume of your last worship night. By the object of your trust. Those who belong to Christ rest on His finished work, not their unfinished mood. The Spirit also testifies with our spirit that we are children of God — a quiet inner yes, often stronger in obedience than in adrenaline.\n\nDoubt is not always unbelief. Sometimes it is a mind asking for a better anchor. Give it verses, not vibes. Give it a church, not isolation.\n\nIf your hope is "I am good enough," you should be unsure. If your hope is Jesus, you are standing on granite. Keep looking at Him.',
      yo: 'Kì í ṣe nípa ariwo ìjọsìn. Nípa ẹni tí o gbẹ́kẹ̀lé. Àwọn tí í ṣe ti Kristi sinmi lórí iṣẹ́ Rẹ̀ tí ó parí.\n\nÌyéméjì kì í ṣe àìgbàgbọ́ nígbà gbogbo. Nígbà mìíràn ọkàn ń béèrè ìdákọró tó dára.\n\nBí ìrètí rẹ bá jẹ́ "èmi dára tó," ìyéméjì tọ́. Bí ìrètí rẹ bá jẹ́ Jésù, òkúta ni o dúró lé.'
    },
    verse: { text: { en: 'The Spirit himself testifies with our spirit that we are God\'s children.', yo: 'Ẹ̀mí fúnra Rẹ̀ ń jẹ́rìí pẹ̀lú ẹ̀mí wa pé ọmọ Ọlọ́run ni wá.' }, ref: { en: 'Romans 8:16', yo: 'Róòmù 8:16' } },
    live: { en: 'Write one sentence of trust: "I am saved because Jesus ___." Keep it in your notes.', yo: 'Kọ: "A gbà mí là nítorí Jésù ___." Tọ́jú rẹ̀.' }
  },
  {
    id: 'prayer-dry',
    keywords: 'prayer dry silence unanswered ìdákẹ́ àdúrà',
    q: { en: 'Why isn\'t God answering my prayer?', yo: 'Kí ló dé tí Ọlọ́run kò fi dáhùn àdúrà mi?' },
    answer: {
      en: 'Sometimes He is answering you, not your script. Silence can be intimacy, not absence — a still small voice after the fire. Sometimes the delay is the gift: it is forming the person who can carry the yes.\n\nKeep asking. Keep thanking. Keep obeying the last clear word. Prayer is not a vending machine. It is a relationship with a Father who is wiser than your timeline.\n\nIf the request is for someone\'s salvation, do not stop. If it is for a closed door, ask also for a willing heart. He may be saving you from the thing you wanted.',
      yo: 'Nígbà mìíràn Ó ń dá ọ́ lóhùn, kì í ṣe àkọsílẹ̀ rẹ. Ìdákẹ́jẹ́ẹ́ lè jẹ́ ìbádọ́rẹ́, kì í ṣe àìsí.\n\nMáa béèrè. Máa dúpẹ́. Máa gbọ́ràn sí ọ̀rọ̀ tó kẹ́yìn tó ṣe kedere. Àdúrà kì í ṣe ẹ̀rọ ìtajà.\n\nBí ó bá jẹ́ ìgbàlà ẹnìkan, má dáwọ́ dúró.'
    },
    verse: { text: { en: 'After the fire came a still small voice.', yo: 'Lẹ́yìn iná, ohùn kékeré wá.' }, ref: { en: '1 Kings 19:12', yo: '1 Ọba 19:12' } },
    live: { en: 'Pray your request in one sentence, then sit silently for two minutes. Write anything that rises.', yo: 'Gbàdúrà ìbéèrè rẹ nínú gbolóhùn kan, jókòó jẹ́ẹ́ fún ìṣẹ́jú méjì.' }
  },
  {
    id: 'fear',
    keywords: 'fear afraid anxiety worry isaiah 41:10',
    q: { en: 'How do I deal with fear?', yo: 'Báwo ni mo ṣe lè dojú kọ ìbẹ̀rù?' },
    answer: {
      en: 'The invitation is not "never feel afraid." It is "do not let fear be the loudest voice, because I am with you." Fear and faith can share a room. Faith is the one that walks out the door anyway.\n\nName the fear. Name the Presence. Speak Isaiah 41:10 until your body hears it. Then take the next small obedient step — not the whole staircase.\n\nYou are not required to feel brave. You are invited to be accompanied.',
      yo: 'Ìpè náà kì í ṣe "má nímọ̀lára ìbẹ̀rù." Ó jẹ́ "má jẹ́ kí ìbẹ̀rù jẹ́ ohùn tó ga jù, nítorí Èmi wà pẹ̀lú rẹ."\n\nDarúkọ ìbẹ̀rù. Darúkọ Ìwàláàyè. Ka Aísáyà 41:10. Gbé ìgbésẹ̀ kékeré tó kàn.'
    },
    verse: { text: { en: 'Do not fear, for I am with you... I will strengthen you and help you.', yo: 'Má bẹ̀rù, nítorí Èmi wà pẹ̀lú rẹ... Èmi yóò fún ọ ní agbára, Èmi yóò sì ràn ọ́ lọ́wọ́.' }, ref: { en: 'Isaiah 41:10', yo: 'Aísáyà 41:10' } },
    live: { en: 'Write the fear in one line. Under it write: "God is with me in this." Take one small step.', yo: 'Kọ ìbẹ̀rù ní ìlà kan. Lábẹ́ rẹ̀ kọ: "Ọlọ́run wà pẹ̀lú mi nínú èyí."' }
  },
  {
    id: 'church',
    keywords: 'church body optional community ìjọ',
    q: { en: 'Do I need church if I have Jesus?', yo: 'Ṣé mo nílò ìjọ tí mo bá ní Jésù?' },
    answer: {
      en: 'Jesus does not save you into a private cabin. He saves you into a body. "One another" commands are impossible alone. You need people who will tell you the truth, carry your burden, and receive your gifts.\n\nChurch is messy because it is made of people like you. That is not a reason to leave. It is a reason to practise forgiveness and showing up.\n\nFind a gathering that opens Scripture, confesses Jesus as Lord, and makes room for the least. Then become a contributor, not a critic in the balcony.',
      yo: 'Jésù kì í gbà ọ́ là sínú yàrá ìkọ̀kọ̀. Ó gbà ọ́ là sínú ara. Àṣẹ "ara yín" kò ṣeé ṣe nìkan.\n\nÌjọ dàrú nítorí ènìyàn bí ìwọ ni. Ìyẹn kì í ṣe ìdí láti lọ.\n\nWá ìpàdé tí ń ṣí Ìwé Mímọ́, tí ń jẹ́wọ́ Jésù gẹ́gẹ́ bí Olúwa.'
    },
    verse: { text: { en: 'Now you are the body of Christ, and each one of you is a part of it.', yo: 'Nísinsin yìí ìwọ ni ara Kristi, ẹnìkọ̀ọ̀kan nínú yín sì jẹ́ ẹ̀yà rẹ̀.' }, ref: { en: '1 Corinthians 12:27', yo: '1 Kọ́ríntì 12:27' } },
    live: { en: 'Go once this week. Stay after and learn one name.', yo: 'Lọ lẹ́ẹ̀kan lọ́sẹ̀ yìí. Dúró, kọ́ orúkọ ẹnìkan.' }
  },
  {
    id: 'money',
    keywords: 'money tithe rich poor greed ìfẹ́ owó',
    q: { en: 'Does God care about my money?', yo: 'Ṣé Ọlọ́run bìkítà nípa owó mi?' },
    answer: {
      en: 'He cares about your heart, and money is one of its loudest microphones. The love of money — not money itself — is a root of evil. The question is never only "how much?" It is "what would I refuse if He asked?"\n\nGenerosity is how grace travels through a bank account. Start where you are. Give freely, secretly when you can, cheerfully if you can, obediently even when it pinches.\n\nIf money has been a god, name it. You cannot serve two. Freedom often begins with an open hand.',
      yo: 'Ó bìkítà nípa ọkàn rẹ, owó sì jẹ́ gbohùngbohùn rẹ̀. Ìfẹ́ owó — kì í ṣe owó fúnra rẹ̀ — ni gbòǹgbò ibi.\n\nÌfífúnni ni ọ̀nà tí oore-ọ̀fẹ́ ń gbà rìn nínú àpò.\n\nBí owó bá ti jẹ́ ọlọ́run, darúkọ rẹ̀. O kò lè sin méjì.'
    },
    verse: { text: { en: 'For the love of money is a root of all kinds of evil.', yo: 'Nítorí ìfẹ́ owó jẹ́ gbòǹgbò onírúurú ibi.' }, ref: { en: '1 Timothy 6:10', yo: '1 Tímótì 6:10' } },
    live: { en: 'Give one specific gift this week that costs you something — and tell God it is worship.', yo: 'Fún ẹ̀bùn kan lọ́sẹ̀ yìí tó náni — sọ fún Ọlọ́run pé ìjọsìn ni.' }
  },
  {
    id: 'identity',
    keywords: 'identity who am i child of god ìdánimọ̀',
    q: { en: 'Who am I in Christ?', yo: 'Ta ni mí nínú Kristi?' },
    answer: {
      en: 'Not your output. Not your followers. Not your worst night. You are a child of God — that is what you are, not what you are trying to become. The Father has lavished love, not dripped it.\n\nIdentity received will always outperform identity performed. When you forget, you hustle. When you remember, you obey from rest.\n\nSpeak it until your week matches it: loved, adopted, forgiven, sent.',
      yo: 'Kì í ṣe ìjáde rẹ. Kì í ṣe àwọn olùtẹ̀lé. Ọmọ Ọlọ́run ni ọ́ — ìyẹn ni ohun tí o jẹ́.\n\nÌdánimọ̀ tí a gba yóò máa ṣẹ́gun ìdánimọ̀ tí a ń ṣe.\n\nSọ ọ́: a fẹ́ràn rẹ, a gba ọ́, a dáríjì ọ́, a rán ọ́.'
    },
    verse: { text: { en: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', yo: 'Ẹ wo ìfẹ́ ńlá tí Baba ti rọ̀ sórí wa, tí a fi ń pè wá ní ọmọ Ọlọ́run! Èyí sì ni ohun tí a jẹ́!' }, ref: { en: '1 John 3:1', yo: '1 Jòhánù 3:1' } },
    live: { en: 'Replace one self-insult today with "I am a child of God." Say it when you look in a mirror.', yo: 'Rọ́pò ẹ̀gàn ara-ẹni kan pẹ̀lú "Ọmọ Ọlọ́run ni mí."' }
  },
  {
    id: 'evolution',
    keywords: 'evolution science creation genesis darwin',
    q: { en: 'Can I be a Christian and believe science?', yo: 'Ṣé mo lè jẹ́ Kristiani kí n sì gba ìmọ̀ sáyẹ́ǹsì gbọ́?' },
    answer: {
      en: 'Yes. Science describes how the world behaves. It cannot tell you why there is a world, why it is intelligible, or why you have a duty to the truth. Christians helped build the scientific habit: a lawful universe, spoken by a Lawgiver, worth studying.\n\nGenesis is not a lab report. It is a throne room. It tells us we are made, not accidental; responsible, not sovereign; blessed, not cosmic junk.\n\nHold your models with humility and your Saviour with both hands. If a claim says there is no God, that is not a microscope talking. That is a worldview. Test it.',
      yo: 'Bẹ́ẹ̀ni. Sáyẹ́ǹsì ń ṣàpèjúwe bí ayé ṣe ń hùwà. Kò lè sọ ìdí tí ayé fi wà.\n\nGẹ́nẹ́sísì kì í ṣe ìwé yàrá-ìdánwò. Ó sọ pé a dá wa, a kì í ṣe àìròtẹ́lẹ̀.\n\nDì Olùgbàlà mú pẹ̀lú ọwọ́ méjèèjì. Bí ìbéèrè bá sọ pé kò sí Ọlọ́run, kì í ṣe ẹ̀rọ ìwádìí. Ìwo-ayé ni.'
    },
    verse: { text: { en: 'In the beginning God created the heavens and the earth.', yo: 'Ní ìbẹ̀rẹ̀ Ọlọ́run dá ọ̀run àti ayé.' }, ref: { en: 'Genesis 1:1', yo: 'Gẹ́nẹ́sísì 1:1' } },
    live: { en: 'Thank God for one beautiful, orderly thing in creation today — out loud.', yo: 'Dúpẹ́ lọ́wọ́ Ọlọ́run fún ohun ẹwà kan nínú ẹ̀dá lónìí.' }
  },
  {
    id: 'other-religions',
    keywords: 'islam hindu buddha other gods idols',
    q: { en: 'What about sincere people in other religions?', yo: 'Ńkọ́ àwọn olóòótọ́ nínú ẹ̀sìn mìíràn?' },
    answer: {
      en: 'Sincerity is not the same as truth. You can be sincerely wrong and still precious to God. That is why the gospel is news, not a personality contest. God is not looking for the most impressive religion. He is seeking worshippers who will come through His Son.\n\nRespect people. Refuse to pretend all paths end in the same place when Jesus said otherwise. Pray, listen, share your hope with gentleness and respect — 1 Peter 3:15.\n\nTheir sincerity is not a threat to you. It is a reason to take them seriously enough to tell the truth.',
      yo: 'Ìdúróṣinṣin kì í ṣe òtítọ́. Ẹnìkan lè jẹ́ olóòótọ́ nínú àṣìṣe, Ọlọ́run ṣì fẹ́ràn rẹ̀.\n\nBọ̀wọ̀ fún ènìyàn. Má ṣe ṣe bí ẹni pé gbogbo ọ̀nà lọ sí ibi kan.\n\nPín ìrètí rẹ pẹ̀lú ìwà pẹ̀lẹ́ àti ọ̀wọ́.'
    },
    verse: { text: { en: 'Always be prepared to give an answer... with gentleness and respect.', yo: 'Ẹ máa múra sílẹ̀ láti fún ní ìdáhùn... pẹ̀lú ìwà pẹ̀lẹ́ àti ọ̀wọ́.' }, ref: { en: '1 Peter 3:15', yo: '1 Pétérù 3:15' } },
    live: { en: 'Ask a friend of another faith one genuine question this week, then listen more than you talk.', yo: 'Béèrè ìbéèrè olóòótọ́ kan lọ́wọ́ ọ̀rẹ́ ẹ̀sìn mìíràn, tẹ́tí ju sísọ̀rọ̀ lọ.' }
  },
  {
    id: 'depression',
    keywords: 'depression anxiety mental health sad hopeless',
    q: { en: 'Is depression a lack of faith?', yo: 'Ṣé ìbànújẹ́ túmọ̀ sí àìní ìgbàgbọ́?' },
    answer: {
      en: 'No. Some of the most faithful people in Scripture wept in the dark — David, Elijah, Jeremiah, even Jesus in Gethsemane. The psalms give you language for a heavy soul. Using it is worship, not failure.\n\nPray, yes. Also sleep, see a doctor if you can, tell a trusted believer, and do not isolate. God often heals through ordinary means as well as extraordinary ones.\n\nIf you are in danger, seek help now. You are not a problem to God. You are a child in pain, and He is near to the brokenhearted.',
      yo: 'Rárá. Àwọn olóòótọ́ nínú Ìwé Mímọ́ sọkún nínú òkùnkùn. Sáàmù fún ọ ní ọ̀rọ̀ fún ọkàn tí ó wúwo.\n\nGbàdúrà. Sùn. Sọ fún onígbàgbọ́ kan. Má ṣe dáhra.\n\nBí ewu bá wà, wá ìrànlọ́wọ́ nísinsin. Ọmọ nínú ìrora ni ọ́, kì í ṣe ìṣòro fún Ọlọ́run.'
    },
    verse: { text: { en: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', yo: 'Olúwa sún mọ́ àwọn ọkàn-bíbàjẹ́, Ó sì ń gba àwọn ẹ̀mí-títẹ̀ là.' }, ref: { en: 'Psalm 34:18', yo: 'Sáàmù 34:18' } },
    live: { en: 'Tell one safe person how you actually are. If you need medical help, take the step today.', yo: 'Sọ fún ẹnìkan tó dáa bí o ṣe rí nítòótọ́.' }
  },
  {
    id: 'baptism',
    keywords: 'baptism baptize water immersed',
    q: { en: 'Do I need to be baptised?', yo: 'Ṣé mo nílò baptisi?' },
    answer: {
      en: 'Baptism does not buy salvation. It announces it. Jesus commanded it as the public yes of a disciple — buried with Him, raised with Him, named with the name of the Father, Son, and Spirit.\n\nIf you have trusted Christ and have not yet been baptised, that is your next obedience, not an optional extra for the very keen.\n\nTalk to a pastor. Do not delay for a perfect feeling. The feeling often follows the water.',
      yo: 'Baptisi kì í ra ìgbàlà. Ó ń kéde rẹ̀. Jésù pàṣẹ rẹ̀ gẹ́gẹ́ bí bẹ́ẹ̀ni gbangba ọmọ-ẹ̀yìn.\n\nTí o bá ti gbẹ́kẹ̀lé Kristi tí o kò tí ì ṣe baptisi, ìgbọràn tó kàn ni, kì í ṣe àfikún.\n\nSọ fún pásítọ̀. Má ṣe dúró de ìmọ̀lára pípé.'
    },
    verse: { text: { en: 'Repent and be baptised, every one of you, in the name of Jesus Christ.', yo: 'Ẹ ronúpìwàdà, kí a sì ṣe yín ní baptisi, olúkúlùkù yín, ní orúkọ Jésù Kristi.' }, ref: { en: 'Acts 2:38', yo: 'Ìṣe 2:38' } },
    live: { en: 'If you have not been baptised, message a church leader this week and ask how.', yo: 'Bí o kò tí ì ṣe baptisi, fi ìránṣẹ́ ránṣẹ́ sí olórí ìjọ lọ́sẹ̀ yìí.' }
  },
  {
    id: 'second-coming',
    keywords: 'return of jesus second coming end times',
    q: { en: 'Is Jesus really coming back?', yo: 'Ṣé Jésù ń padà wá nítòótọ́?' },
    answer: {
      en: 'Yes. The same Jesus who went up will come back. Hope is not a rumour. It is a Person on a timetable we do not set. So we stay awake — not frantic, not asleep.\n\nDate-setters always fail. Faithful people keep making disciples, keeping oil in the lamp, and treating people like the Judge is kind and near.\n\nLet His return make you holy and busy with love, not addicted to timelines.',
      yo: 'Bẹ́ẹ̀ni. Jésù kan náà tí Ó gòkè yóò padà. Ìrètí kì í ṣe àgosọ. Ẹni ni.\n\nÀwọn tí ń sọ ọjọ́ máa ń kùnà. Olóòótọ́ ń ṣe ọmọ-ẹ̀yìn, wọ́n sì ń tọ́jú ààrò.\n\nJẹ́ kí ìpadàbọ̀ Rẹ̀ sọ ọ́ di mímọ́ àti ìṣiṣẹ́ ìfẹ́.'
    },
    verse: { text: { en: 'This same Jesus, who has been taken from you into heaven, will come back.', yo: 'Jésù kan náà yìí, tí a gbé kúrò lọ́dọ̀ yín lọ sí ọ̀run, yóò padà wá.' }, ref: { en: 'Acts 1:11', yo: 'Ìṣe 1:11' } },
    live: { en: 'Do one act of ready love today as if He could walk in this evening.', yo: 'Ṣe ìfẹ́ kan lónìí bí ẹni pé Ó lè wọlé lálẹ́ yìí.' }
  }
];

function gsEsc(s) {
  if (s == null) return '';
  const d = document.createElement('div');
  d.textContent = String(s);
  return d.innerHTML;
}

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
  const hay = gsAiNorm(
    (entry.keywords || '') + ' ' +
    gsAiPick(entry.q) + ' ' +
    gsAiPick(entry.answer) + ' ' +
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
      const sc = qtok.filter(t => hay.includes(t)).length;
      if (sc) hits.push({ kind: 'slide', score: sc * 5, title: loc.title, text: loc.verse, ref: loc.reference });
    });
  } catch (e) {}
  try {
    const list = (typeof getLocalizedDevotionals === 'function') ? getLocalizedDevotionals() : [];
    list.slice(0, 56).forEach(d => {
      const hay = gsAiNorm((d.title || '') + ' ' + (d.reflection || '') + ' ' + (d.verse || ''));
      const sc = qtok.filter(t => hay.includes(t)).length;
      if (sc >= 2) hits.push({ kind: 'devo', score: sc * 3, title: d.title, text: d.reflection, ref: d.ref });
    });
  } catch (e) {}
  try {
    const list = (typeof getLocalizedLivingFaith === 'function') ? getLocalizedLivingFaith() : [];
    list.forEach(f => {
      const hay = gsAiNorm((f.thought || '') + ' ' + (f.question || '') + ' ' + (f.verse || ''));
      const sc = qtok.filter(t => hay.includes(t)).length;
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
  if (!best || bestScore < 8) {
    return { kind: 'weak', extras, query };
  }
  return { kind: 'hit', entry: best, extras, query };
}

function gsAiRelated(entry) {
  return GS_AI_SUGGEST.filter(s => s.id !== (entry && entry.id)).slice(0, 4);
}

function gsAiEnsureOverlay() {
  if (document.getElementById('gsAskAI')) return;
  const wrap = document.createElement('div');
  wrap.id = 'gsAskAI';
  wrap.className = 'gs-ai-overlay';
  wrap.innerHTML = `
    <div class="gs-ai-sheet" role="dialog" aria-modal="true" aria-labelledby="gsAiTitle">
      <button type="button" class="gs-ai-close" id="gsAiClose" aria-label="Close"><i class="fas fa-times"></i></button>
      <div class="gs-ai-head">
        <div class="gs-ai-orb" aria-hidden="true"><i class="fas fa-comments"></i></div>
        <div>
          <h2 id="gsAiTitle" class="gs-ai-title"></h2>
          <p class="gs-ai-sub" id="gsAiSub"></p>
        </div>
      </div>
      <form id="gsAiForm" class="gs-ai-form" autocomplete="off">
        <input id="gsAiInput" type="text" maxlength="240" enterkeyhint="go" />
        <button type="submit" class="gs-ai-go" id="gsAiGo"><i class="fas fa-arrow-up"></i></button>
      </form>
      <div class="gs-ai-chips" id="gsAiChips"></div>
      <div class="gs-ai-body" id="gsAiBody"></div>
    </div>`;
  document.body.appendChild(wrap);
  wrap.addEventListener('click', e => { if (e.target === wrap) closeAskAI(); });
  wrap.querySelector('#gsAiClose').addEventListener('click', closeAskAI);
  wrap.querySelector('#gsAiForm').addEventListener('submit', e => {
    e.preventDefault();
    const q = (document.getElementById('gsAiInput').value || '').trim();
    if (q) gsAiAsk(q);
  });
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
    const lang = gsAiLang();
    chips.innerHTML = GS_AI_SUGGEST.map(s => {
      const label = s[lang] || s.en;
      return `<button type="button" class="gs-ai-chip" data-aid="${s.id}">${gsEsc(label)}</button>`;
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
    const label = s[gsAiLang()] || s.en;
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
      <div class="gs-ai-chips rel">${rel}</div>
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
  body.querySelectorAll('.rel [data-aid]').forEach(btn => {
    btn.addEventListener('click', () => gsAiAsk(btn.textContent, btn.dataset.aid));
  });
}

function gsAiAsk(query, topicId) {
  const input = document.getElementById('gsAiInput');
  if (input && query) input.value = query;
  const res = gsAiResolve(query, topicId);
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
  const overlay = document.getElementById('gsAskAI');
  overlay.classList.add('show');
  const input = document.getElementById('gsAiInput');
  if (typeof seed === 'string' && seed && GS_AI_KB.some(e => e.id === seed)) {
    const e = GS_AI_KB.find(x => x.id === seed);
    gsAiAsk(gsAiPick(e.q), seed);
  } else if (typeof seed === 'string' && seed) {
    gsAiAsk(seed);
  } else {
    document.getElementById('gsAiBody').innerHTML = `<p class="gs-ai-hint">${gsEsc((typeof t === 'function' && t('askAITry')) || 'Pick a question or type your own. Works fully offline.')}</p>`;
    gsAiAsk(gsAiPick(GS_AI_KB[0].q), 'god-love');
  }
  setTimeout(() => { if (input) input.focus(); }, 280);
}

function closeAskAI() {
  const overlay = document.getElementById('gsAskAI');
  if (overlay) overlay.classList.remove('show');
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
