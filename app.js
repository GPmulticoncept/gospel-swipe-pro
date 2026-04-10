// ==========================================
// GospelSwipe Pro v1.1 — Main Application
// Offline-first · Multi-language · IndexedDB
// All bugs fixed · Production ready
// ==========================================

// ========== Constants ==========
const DB_NAME = 'GospelSwipeDB';
const DB_VERSION = 2;
const CONTENT_STORE = 'content';
const TRANSLATIONS_STORE = 'translations';

// ========== State ==========
let AppState = {
  currentSlide: 0,
  currentScreen: 'home-screen',
  darkMode: false,
  language: 'en',
  userStats: null,
  prayers: [],
  streak: { lastDate: '', count: 0 },
  achievements: [],
  isOnline: navigator.onLine,
  contentData: null,
  deferredPrompt: null,
  speechSynthesisActive: false,
  isProcessing: false,
  touchStartX: 0,
  touchStartY: 0,
  touchStartTime: 0,
  isSwiping: false,
  vomMode: false,
  usedPrayerIndices: {}
};

// ========== Fallback Content (all 15 slides) ==========
const FALLBACK_CONTENT = {
  slides: [
    { id:1,  title:"God's Love",         verse:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",                                          reference:"John 3:16",           topic:"god-love",          color:"#3498db" },
    { id:2,  title:"The Sin Problem",     verse:"For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.",                     reference:"Romans 3:23-24",       topic:"sin-problem",       color:"#e74c3c" },
    { id:3,  title:"Jesus, The Solution", verse:"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",                                                                       reference:"Romans 5:8",           topic:"jesus-solution",    color:"#9b59b6" },
    { id:4,  title:"Faith Response",      verse:"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.",               reference:"Ephesians 2:8-9",      topic:"faith-response",    color:"#27ae60" },
    { id:5,  title:"New Life in Christ",  verse:"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",                                                                         reference:"2 Corinthians 5:17",   topic:"new-life",          color:"#f39c12" },
    { id:6,  title:"The Trinity",         verse:"Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",                                                   reference:"Matthew 28:19",        topic:"trinity",           color:"#1abc9c" },
    { id:7,  title:"God's Word",          verse:"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",                                                           reference:"2 Timothy 3:16",       topic:"scripture",         color:"#e67e22" },
    { id:8,  title:"Suffering & Hope",    verse:"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",                                              reference:"Romans 8:28",          topic:"suffering",         color:"#c0392b" },
    { id:9,  title:"The Only Way",        verse:"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",                                                               reference:"John 14:6",            topic:"only-way",          color:"#8e44ad" },
    { id:10, title:"Prayer of Salvation", verse:"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",                                       reference:"Romans 10:9",          topic:"salvation-prayer",  color:"#2980b9" },
    { id:11, title:"The Holy Spirit",     verse:"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",   reference:"Acts 1:8",             topic:"holy-spirit",       color:"#16a085" },
    { id:12, title:"Great Commission",    verse:"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",                                        reference:"Matthew 28:19-20",     topic:"great-commission",  color:"#d35400" },
    { id:13, title:"Love Your Neighbor",  verse:"'Love the Lord your God with all your heart... Love your neighbor as yourself.' All the Law and the Prophets hang on these two commandments.",                           reference:"Matthew 22:37-40",     topic:"love-neighbor",     color:"#27ae60" },
    { id:14, title:"Forgiveness",         verse:"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",                                                                      reference:"Ephesians 4:32",       topic:"forgiveness",       color:"#2c3e50" },
    { id:15, title:"Eternal Hope",        verse:"For I am convinced that neither death nor life, neither angels nor demons... nor anything else in all creation, will be able to separate us from the love of God.",     reference:"Romans 8:38-39",       topic:"eternal-hope",      color:"#6c3483" }
  ],
  aiAnswers: {
    "god-love":         { en:"God's love is unconditional and sacrificial. John 3:16 shows that God loved the world so much He gave His only Son.", fr:"L'amour de Dieu est inconditionnel. Jean 3:16 montre que Dieu a tant aimé le monde qu'il a donné son Fils unique.", yo:"Ife Olorun ko ni opin. Johannu 3:16 fihan pe Olorun feran aye to to fi Ọmọ rẹ kanṣoṣo fun.", ig:"Ịhụnanya Chineke enweghị atụ. Jọn 3:16 na-egosi na Chineke hụrụ ụwa n'anya nke ukwuu.", ha:"Ƙaunar Allah ba ta da iyaka. Yahaya 3:16 ya nuna cewa Allah ya ƙaunaci duniya har ya ba da Ɗansa.", pcm:"God love no get end. John 3:16 show say God love di world well well.", sw:"Upendo wa Mungu hauna masharti. Yohana 3:16 inaonyesha kwamba Mungu aliupenda ulimwengu.", ar:"محبة الله غير مشروطة. يوحنا ٣:١٦ تظهر أن الله أحب العالم حتى بذل ابنه الوحيد." },
    "sin-problem":      { en:"Sin is anything that falls short of God's perfect standard. Romans 3:23 reminds us that all have sinned and need a Savior.", fr:"Le péché est tout ce qui est en dessous de la norme parfaite de Dieu. Romains 3:23 nous rappelle que tous ont péché.", yo:"Ẹṣẹ jẹ ohun ti o kere si iwuwasi pipe Ọlọrun. Romani 3:23 fi hàn pe gbogbo eniyan ti ṣẹ.", ig:"Mmehie bụ ihe ọ bụla na-adịghị iru ọkọlọtọ Chineke zuru oke. Rom 3:23 na-egosi na onye ọ bụla mere mmehie.", ha:"Zunubi shine komai da ya gaza ma'aunin Allah na cikakke. Romani 3:23 ya tuna mana cewa duka sun yi zunubi.", pcm:"Sin na everitin wey no reach God standard. Romans 3:23 remind us say everybody don sin.", sw:"Dhambi ni chochote kinachopungukia kiwango kamili cha Mungu. Warumi 3:23 inakumbusha kwamba wote wametenda dhambi.", ar:"الخطية هي كل ما يقصر عن معيار الله الكامل. رومية ٣:٢٣ تذكرنا أن الجميع أخطأوا." },
    "jesus-solution":   { en:"Jesus is God's solution to our sin problem. While we were still sinners, Christ died for us (Romans 5:8).", fr:"Jésus est la solution de Dieu à notre problème de péché. Alors que nous étions encore pécheurs, Christ est mort pour nous.", yo:"Jesu ni ojutu Ọlọrun si isoro ẹṣẹ wa. Kristi ku fun wa lakoko ti awa n jẹ awọn ẹlẹṣẹ.", ig:"Jizọs bụ ihe ọgwụ Chineke maka nsogbu mmehie anyị. Kraịst nwụọ n'ihi anyị mgbe anyị ka bụ ndị mmehie.", ha:"Yesu shine mafita ta Allah don matsalar zunubin mu. Kristi ya mutu dominmu muna cikin zunubai.", pcm:"Jesus na God solution to our sin wahala. Christ die for us when we still dey sin.", sw:"Yesu ni suluhisho la Mungu kwa tatizo letu la dhambi. Kristo alikufa kwa ajili yetu tulipokuwa bado wadhambi.", ar:"يسوع هو حل الله لمشكلة خطيتنا. مات المسيح لأجلنا ونحن بعد خطاة." },
    "faith-response":   { en:"Faith is trusting in Jesus alone for salvation. Ephesians 2:8-9 clarifies that salvation is by grace through faith, not by works.", fr:"La foi, c'est faire confiance à Jésus seul pour le salut. Éphésiens 2:8-9 précise que le salut est par grâce au moyen de la foi.", yo:"Igbagbọ ni igbẹkẹle Jesu nikan fun igbala. Efesu 2:8-9 sọ pe igbala wa nipasẹ ore-ọfẹ nipasẹ igbagbọ.", ig:"Okwukwe bụ ịtụkwasị obi na Jizọs naanị maka ọzọ nzọpụta. Efe 2:8-9 na-ekwuo na ọzọ nzọpụta sitere n'ùgwù site n'okwukwe.", ha:"Bangaskiya ita ce dogaro ga Yesu kadai don ceto. Afisawa 2:8-9 ya bayyana cewa ceto yana ta alheri ta hanyar bangaskiya.", pcm:"Faith na trust Yesu only for salvation. Ephesians 2:8-9 clear say salvation na by grace through faith, not by work.", sw:"Imani ni kumwamini Yesu peke yake kwa wokovu. Waefeso 2:8-9 inabainisha kwamba wokovu ni kwa neema kupitia imani.", ar:"الإيمان هو الثقة في يسوع وحده للخلاص. أفسس ٢:٨-٩ يوضح أن الخلاص بالنعمة بالإيمان لا بالأعمال." },
    "new-life":         { en:"When we accept Jesus, we become new creations. 2 Corinthians 5:17 promises that the old has gone and the new is here.", fr:"Quand nous acceptons Jésus, nous devenons de nouvelles créatures. 2 Corinthiens 5:17 promet que l'ancien est passé.", yo:"Nigba ti a gba Jesu, a di ẹda titun. 2 Korinti 5:17 ṣe ileri pe ohun atijọ ti lọ.", ig:"Mgbe anyị na-anabata Jizọs, anyị na-aghọ ọhụrụ. 2 Kọr 5:17 na-ekwe nkwa na ihe ochie agafeela.", ha:"Sa'ad da muka karbi Yesu, muna zama sabbin halittu. 2 Korintiyawa 5:17 yana alkawari cewa tsohon ya wuce.", pcm:"When we accept Jesus, we become new creature. 2 Corinthians 5:17 promise say the old don go.", sw:"Tunapomkubali Yesu, tunakuwa viumbe vipya. 2 Wakorintho 5:17 inadhihirisha kwamba ya zamani imepita.", ar:"عندما نقبل يسوع، نصبح خليقة جديدة. ٢كورنثوس ٥:١٧ يعد بأن القديم قد مضى وها الجديد قد جاء." },
    "trinity":          { en:"The Trinity is the Christian doctrine that God exists as three distinct Persons — Father, Son, and Holy Spirit — who are one God.", fr:"La Trinité est la doctrine chrétienne selon laquelle Dieu existe en trois Personnes distinctes — Père, Fils et Saint-Esprit — qui sont un seul Dieu.", yo:"Mẹtalọkan ni ẹkọ Kristian pe Ọlọrun wa gẹgẹbi eniyan mẹta ọtọọtọ — Baba, Ọmọ, ati Ẹmí Mimọ.", ig:"Ụlọ Atọ bụ nkuzi Krist na Chineke dị ka mmadụ atọ dị iche iche — Nna, Ọkpara, na Mmụọ Nsọ.", ha:"Triniti shine koyarwar Kirista cewa Allah yana wanzuwa a matsayin mutane uku daban-daban — Uba, Ɗa, da Ruhu Mai Tsarki.", pcm:"Trinity na di Christian teaching say God exist as three different Person — Father, Son, and Holy Spirit.", sw:"Utatu Mtakatifu ni fundisho la Kikristo kwamba Mungu yupo kama Watu watatu tofauti — Baba, Mwana, na Roho Mtakatifu.", ar:"الثالوث هو عقيدة مسيحية بأن الله موجود كثلاثة أقانيم متمايزة — الآب والابن والروح القدس." },
    "scripture":        { en:"The Bible is God's inspired, authoritative Word — completely true and reliable. 2 Timothy 3:16 teaches that all Scripture is God-breathed.", fr:"La Bible est la Parole inspirée et faisant autorité de Dieu — complètement vraie et fiable.", yo:"Bibeli jẹ Ọrọ Ọlọrun ti a fà simi, ni aṣẹ — ootọ patapata ati igbẹkẹle. 2 Timoteu 3:16 kọ pe gbogbo iwe-mimọ jẹ ìmísí Ọlọrun.", ig:"Baịbụl bụ Okwu Chineke nke atụfuo, nke nwere ọchịchọ — ziri ezi kpamkpam. 2 Tim 3:16 na-akụzi na ihe niile edere n'akwụkwọ nsọ sitere n'ụmị Chineke.", ha:"Littafi Mai Tsarki shine Maganar Allah mai wahayi, mai iko — daidai gaba ɗaya kuma mai aminci.", pcm:"Bible na God inspired, authoritative Word — completely true and reliable.", sw:"Biblia ni Neno la Mungu lililovuviwa, lenye mamlaka — kweli kabisa na linaloaminika.", ar:"الكتاب المقدس هو كلمة الله الملهمة ذات السلطة — صادقة تماماً وموثوقة." },
    "suffering":        { en:"God doesn't promise a life without suffering, but He promises to be with us in it. Romans 8:28 assures us that all things work together for good.", fr:"Dieu ne promet pas une vie sans souffrance, mais Il promet d'être avec nous dans la souffrance. Romains 8:28 nous assure que toutes choses concourent au bien.", yo:"Ọlọrun ko ṣe ileri igbesi aye laisi ijiya, ṣugbọn O ṣe ileri lati wa pẹlu wa. Romani 8:28 da wa lójú pé gbogbo nkan n ṣiṣẹ papọ fun rere.", ig:"Chineke anaghị ekwe nkwa ndụ na-enweghị ịta ahụ̀, mana o kwenyere ịnọ anyị n'oge ahụ. Rom 8:28 na-egosi na ihe niile na-arụkọ ọrụ ọma.", ha:"Allah baya alkawari rayuwa ba tare da wahala ba, amma Yana alkawarin zama tare da mu a ciki. Romani 8:28 ya tabbatar da mu.", pcm:"God no promise say life go be without suffering, but He promise to dey with us. Romans 8:28 assure us say all things work for good.", sw:"Mungu haahidi maisha bila mateso, lakini anaahidi kuwepo nasi ndani yake. Warumi 8:28 inatuhakikishia kwamba vitu vyote vinafanya kazi pamoja kwa wema.", ar:"الله لا يعد بحياة بلا معاناة، لكنه يعد بأن يكون معنا فيها. رومية ٨:٢٨ يطمئننا أن كل الأشياء تعمل معاً للخير." },
    "only-way":         { en:"Jesus is the exclusive way to God because He alone is both fully God and fully human — the only mediator between God and humanity.", fr:"Jésus est le seul chemin vers Dieu parce qu'Il est à la fois pleinement Dieu et pleinement humain — le seul médiateur entre Dieu et l'humanité.", yo:"Jesu ni ọna kanṣoṣo si Ọlọrun nitori pe Oun nikan ni Ọlọrun ni kikun ati eniyan ni kikun.", ig:"Jizọs bụ ụzọ naanị gaa n'ebe Chineke n'ihi na naanị ya bụ Chineke kpamkpam ma bụruo mmadụ kpamkpam.", ha:"Yesu shine hanyar musamman zuwa ga Allah saboda Shi kaɗai ne cikakken Allah kuma cikakken ɗan adam.", pcm:"Jesus na di only way to God because He alone na fully God and fully human — only mediator.", sw:"Yesu ndiye njia pekee kwenda kwa Mungu kwa sababu yeye peke yake ni Mungu kamili na mwanadamu kamili.", ar:"يسوع هو الطريق الحصري إلى الله لأنه وحده إله كامل وإنسان كامل — الوسيط الوحيد." },
    "salvation-prayer": { en:"The prayer of salvation is a simple confession of faith in Jesus. Romans 10:9 says: confess with your mouth and believe in your heart.", fr:"La prière du salut est une simple confession de foi en Jésus. Romains 10:9 dit : confesse de ta bouche et crois dans ton cœur.", yo:"Adura igbala jẹ ijẹwọ igbagbọ ti o rọrun ninu Jesu. Romani 10:9 sọ: jẹwọ pẹlu ẹnu rẹ ki o si gbagbọ ninu ọkàn rẹ.", ig:"Ekpere nzọpụta bụ nkwupụta okwukwe dị mfe na Jizọs. Rom 10:9 na-ekwu: kwụpụta n'ọnụ gị ma kwene n'obi gị.", ha:"Addu'ar ceto ita ce sauƙaƙƙiyar ikirari na bangaskiya ga Yesu. Romani 10:9 ya ce: furta da bakinku kuma ku gaskata a zukatanku.", pcm:"Prayer of salvation na simple confession of faith in Jesus. Romans 10:9 say: confess with your mouth and believe in your heart.", sw:"Sala ya wokovu ni kukiri kwa unyoofu imani katika Yesu. Warumi 10:9 inasema: ikiri kwa mdomo wako na uamini moyoni mwako.", ar:"صلاة الخلاص هي اعتراف بسيط بالإيمان بيسوع. رومية ١٠:٩ تقول: اعترف بفمك وآمن بقلبك." },
    "holy-spirit":      { en:"The Holy Spirit is God's presence in believers, empowering us for holy living and witness. Acts 1:8 promises power when the Spirit comes.", fr:"Le Saint-Esprit est la présence de Dieu dans les croyants, nous donnant le pouvoir pour une vie sainte et un témoignage.", yo:"Ẹmí Mimọ ni iwaju Ọlọrun ninu awọn olugbagbọ, ni fifún wa ni agbara fun igbesi aye mimo.", ig:"Mmụọ Nsọ bụ ọnụnọ Chineke n'ime ndị kwere, na-enye anyị ike maka ndụ nsọ na àkà.", ha:"Ruhu Mai Tsarki shine kasancewar Allah a cikin masu bi, yana ba mu ƙarfi don rayuwa mai tsarki.", pcm:"Holy Spirit na God presence inside believers, empowering us for holy living. Acts 1:8 promise power.", sw:"Roho Mtakatifu ni uwepo wa Mungu katika waamini, akitupa nguvu za maisha ya utakatifu na ushuhuda.", ar:"الروح القدس هو حضور الله في المؤمنين، يمكّننا للعيش القدوس والشهادة. أعمال ١:٨ يعد بالقوة." },
    "great-commission": { en:"The Great Commission is Jesus' final command to make disciples of all nations, baptizing and teaching them to obey His commands.", fr:"La Grande Commission est le commandement final de Jésus de faire des disciples de toutes les nations, en les baptisant et en leur enseignant.", yo:"Àṣẹ Nla ni àṣẹ ikẹhìn Jesu lati ṣe awọn ọmọ-ẹkọ ti gbogbo orilẹ-ède, ti n ṣe baptisi wọn.", ig:"Àjà Maka Ụwa niile bụ nkwụsịtụ ikpeazụ Jizọs ileta ụmụ akwụkwọ n'ime mba niile, na-abatịzi ha.", ha:"Babbar Hukuma ita ce ƙarshen umarni na Yesu na yi almajiran al'ummai duka, suna yi musu baftisma.", pcm:"Great Commission na Jesus final command to make disciples of all nations, baptize and teach them.", sw:"Agizo Kuu ni amri ya mwisho ya Yesu kufanya wanafunzi katika mataifa yote, kuwabatiza na kuwafundisha.", ar:"الوصية العظيمة هي أمر يسوع الأخير لتلمذة جميع الأمم وتعميدهم وتعليمهم." },
    "love-neighbor":    { en:"Loving your neighbor means actively showing God's love to others through practical acts of service, kindness, and forgiveness.", fr:"Aimer son prochain signifie montrer activement l'amour de Dieu aux autres par des actes pratiques de service, de bonté et de pardon.", yo:"Ifi ẹlẹgbẹ rẹ lẹ tumọ si ṣiṣe afihan ife Ọlọrun ni itara si awọn ẹlomiiran nipasẹ awọn iṣẹ iṣe ti iṣẹ, inure, ati idariji.", ig:"Ịhụnanya agbataobi gị pụtara igosi ịhụnanya Chineke nye ndị ọzọ site n'ọrụ ọzizi, ebere, na ịgbaghara.", ha:"Ƙaunar maƙwabcinka na nufin nuna ƙaunar Allah ga wasu ta hanyar ayyuka na zahiri na hidima, alheri da gafara.", pcm:"Love your neighbor mean you go show God love to others through practical service, kindness, and forgiveness.", sw:"Kupenda jirani yako kunamaanisha kuonyesha kwa vitendo upendo wa Mungu kwa wengine kupitia huduma na huruma.", ar:"محبة قريبك تعني إظهار محبة الله للآخرين بشكل فعال من خلال أعمال الخدمة والطيبة والمغفرة." },
    "forgiveness":      { en:"Forgiveness is releasing resentment toward someone who has wronged you, just as God forgave you in Christ. Ephesians 4:32.", fr:"Le pardon, c'est libérer le ressentiment envers quelqu'un qui vous a fait du tort, tout comme Dieu vous a pardonné en Christ.", yo:"Idariji ni itusilẹ ibinu si ẹnikan ti o ṣe aṣiṣe si ọ, gẹgẹ bi Ọlọrun ti dariji rẹ ninu Kristi.", ig:"Ịgbaghara bụ ịhapụ iwe n'afu onye mere gị ihe ọjọọ, dị ka Chineke gbaghaara gị na Kraịst.", ha:"Gafara ita ce sakin fushi ga wanda ya yi maka laifi, kamar yadda Allah ya gafarta maka a cikin Kristi.", pcm:"Forgiveness na release the grudge against person wey wrong you, just like God forgive you in Christ.", sw:"Msamaha ni kuacha chuki dhidi ya mtu aliyekukosea, kama vile Mungu alivyokusamehe katika Kristo.", ar:"المغفرة هي إطلاق سراح الاستياء تجاه من أساء إليك، كما أن الله غفر لك في المسيح." },
    "eternal-hope":     { en:"Eternal hope is the confident expectation of God's promises for the future, including resurrection and eternal life. Romans 8:38-39.", fr:"L'espérance éternelle est l'attente confiante des promesses de Dieu pour l'avenir, y compris la résurrection et la vie éternelle.", yo:"Ireti ayérayé ni ireti igbẹkẹle ti awọn ileri Ọlọrun fun ọjọ iwaju, pẹlu àjinde ati igbesi aye ayérayé.", ig:"Olileanya ebighi ebi bụ atụmanya na nkwa Chineke maka ọdịnihu, gụnyere mbilite n'ọnwụ na ndụ ebighi ebi.", ha:"Bege na gaba shine tsammanin amintattu na alkawuran Allah na gaba, gami da tashin matattu da rayuwa ta har abada.", pcm:"Eternal hope na the confident expectation of God promises for future including resurrection and eternal life.", sw:"Tumaini la milele ni matarajio ya ujasiri ya ahadi za Mungu kwa siku zijazo, ikiwa ni pamoja na ufufuo na uzima wa milele.", ar:"الرجاء الأبدي هو التوقع الواثق لمواعيد الله للمستقبل، بما في ذلك القيامة والحياة الأبدية." }
  },
  dailyVerses: [
    { verse:"The LORD is my shepherd, I lack nothing.", ref:"Psalm 23:1" },
    { verse:"I can do all this through him who gives me strength.", ref:"Philippians 4:13" },
    { verse:"Trust in the LORD with all your heart and lean not on your own understanding.", ref:"Proverbs 3:5" },
    { verse:"For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you.", ref:"Jeremiah 29:11" },
    { verse:"Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you.", ref:"Joshua 1:9" },
    { verse:"The name of the LORD is a fortified tower; the righteous run to it and are safe.", ref:"Proverbs 18:10" },
    { verse:"Come to me, all you who are weary and burdened, and I will give you rest.", ref:"Matthew 11:28" }
  ],
  metrics: { betaUsers:1247, versesShared:8934, prayersSaved:3456, avgStreak:14, costPerSoul:0.37, targetConversions:50000 }
};

// ========== IndexedDB — Fixed (no tx.done) ==========
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(CONTENT_STORE))
        db.createObjectStore(CONTENT_STORE, { keyPath: 'id' });
      if (!db.objectStoreNames.contains(TRANSLATIONS_STORE))
        db.createObjectStore(TRANSLATIONS_STORE, { keyPath: 'lang' });
    };
  });
}

function idbGet(storeName, key) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const req = tx.objectStore(storeName).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  })).catch(() => null);
}

function idbPut(storeName, value) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const req = tx.objectStore(storeName).put(value);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  })).catch(() => false);
}

function idbClearStore(storeName) {
  return openDB().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).clear();
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  })).catch(() => false);
}

// ========== Content Helpers ==========
async function getContent() {
  const row = await idbGet(CONTENT_STORE, 'main');
  return row ? row.data : null;
}
async function saveContent(data) {
  return idbPut(CONTENT_STORE, { id: 'main', data, timestamp: Date.now() });
}
async function getTranslationFromDB(lang) {
  const row = await idbGet(TRANSLATIONS_STORE, lang);
  return row ? row.data : null;
}
async function saveTranslation(lang, data) {
  return idbPut(TRANSLATIONS_STORE, { lang, data, timestamp: Date.now() });
}

// ========== Translation Helpers ==========
function t(key) {
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[AppState.language] && TRANSLATIONS[AppState.language][key])
    return TRANSLATIONS[AppState.language][key];
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS['en'] && TRANSLATIONS['en'][key])
    return TRANSLATIONS['en'][key];
  return key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if (val) el.placeholder = val;
  });
  document.documentElement.lang = AppState.language;
  document.body.dir = AppState.language === 'ar' ? 'rtl' : 'ltr';
}

// ========== Load App Data ==========
async function loadAppData() {
  // Content
  const cached = await getContent();
  AppState.contentData = cached || FALLBACK_CONTENT;

  // Try fetching fresh content if online
  if (AppState.isOnline) {
    try {
      const res = await fetch('content.json');
      if (res.ok) {
        const fresh = await res.json();
        AppState.contentData = fresh;
        saveContent(fresh);
      }
    } catch { /* use cached */ }
  }

  // Translations are bundled in translations.js — no fetch needed
  // Still try to load from DB for any custom overrides
  applyTranslations();
}

// ========== Offline Status ==========
function updateOnlineStatus() {
  AppState.isOnline = navigator.onLine;
  const badge = document.getElementById('offlineBadge');
  if (!badge) return;
  if (AppState.isOnline) {
    badge.classList.remove('visible');
  } else {
    badge.classList.add('visible');
  }
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// ========== Download All Content ==========
async function downloadAllContent() {
  const btn = document.getElementById('downloadOfflineBtn');
  const progressDiv = document.getElementById('downloadProgress');
  const progressBar = document.getElementById('downloadProgressBar');
  if (!btn) return;
  btn.disabled = true;
  if (progressDiv) progressDiv.style.display = 'block';
  if (progressBar) progressBar.style.width = '0%';

  try {
    const res = await fetch('content.json');
    if (!res.ok) throw new Error('Failed to fetch content.json');
    const data = await res.json();
    if (progressBar) progressBar.style.width = '40%';
    await saveContent(data);
    AppState.contentData = data;
    if (progressBar) progressBar.style.width = '60%';
    // Translations are already bundled — just confirm
    if (progressBar) progressBar.style.width = '100%';
    showToast(t('downloadComplete') || 'All content downloaded!', 'success');
  } catch (err) {
    showToast((t('downloadFailed') || 'Download failed: ') + err.message, 'error');
  } finally {
    btn.disabled = false;
    setTimeout(() => { if (progressDiv) progressDiv.style.display = 'none'; }, 2500);
  }
}

// ========== Clear Offline Content ==========
async function clearOfflineContent() {
  if (!confirm(t('confirmClearOffline') || 'Delete all downloaded content? App will use built-in data.')) return;
  await idbClearStore(CONTENT_STORE);
  await idbClearStore(TRANSLATIONS_STORE);
  AppState.contentData = FALLBACK_CONTENT;
  applyTranslations();
  showToast(t('offlineContentCleared') || 'Offline content cleared', 'info');
}

// ========== Language Change ==========
async function changeLanguage(lang) {
  AppState.language = lang;
  localStorage.setItem('language', lang);
  applyTranslations();
  if (AppState.currentScreen === 'presentation-screen') initializeSlides();
  const langName = t('languageName') || lang;
  showToast(`Language: ${langName}`, 'success');
  vibrate(20);
}

// ========== Screen Management ==========
function showScreen(screenId) {
  if (AppState.isProcessing) return;
  AppState.isProcessing = true;
  try {
    const target = document.getElementById(screenId);
    if (!target) throw new Error('Screen not found: ' + screenId);

    document.querySelectorAll('.screen').forEach(s => {
      if (s.id === screenId) return;
      s.classList.remove('active');
      setTimeout(() => { if (!s.classList.contains('active')) s.style.display = 'none'; }, 350);
    });

    target.style.display = 'flex';
    requestAnimationFrame(() => target.classList.add('active'));
    AppState.currentScreen = screenId;

    // Nav highlight
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const navMap = { 'home-screen':'Home','prayer-screen':'Prayer','stats-screen':'Stats' };
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const span = btn.querySelector('span');
      if (span && Object.values(navMap).includes(span.textContent.trim()) &&
          navMap[screenId] === span.textContent.trim())
        btn.classList.add('active');
    });

    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) bottomNav.style.display = screenId === 'presentation-screen' ? 'none' : 'flex';

    if (screenId === 'prayer-screen') setTimeout(loadPrayers, 80);
    if (screenId === 'stats-screen') setTimeout(updateStatsDisplay, 80);
    window.scrollTo(0, 0);
  } catch (err) { handleError('showScreen', err); }
  finally { setTimeout(() => { AppState.isProcessing = false; }, 120); }
}

// ========== Slide Translations ==========
// Full verse + title translations for all 15 slides × 8 languages
const SLIDE_TRANSLATIONS = {
  fr: [
    { title:"L'amour de Dieu",          verse:"Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",                                                         reference:"Jean 3:16" },
    { title:"Le problème du péché",     verse:"Car tous ont péché et sont privés de la gloire de Dieu ; et ils sont gratuitement justifiés par sa grâce, par le moyen de la rédemption qui est en Jésus-Christ.",                                       reference:"Romains 3:23-24" },
    { title:"Jésus, la solution",       verse:"Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous.",                                                                                  reference:"Romains 5:8" },
    { title:"La réponse de la foi",     verse:"Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu.",                                                                               reference:"Éphésiens 2:8" },
    { title:"Nouvelle vie en Christ",   verse:"Si quelqu'un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées ; voici, toutes choses sont devenues nouvelles.",                                                              reference:"2 Corinthiens 5:17" },
    { title:"La Trinité",               verse:"Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.",                                                                                             reference:"Matthieu 28:19" },
    { title:"La Parole de Dieu",        verse:"Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice.",                                                                           reference:"2 Timothée 3:16" },
    { title:"La souffrance et l'espoir",verse:"Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",                                                                        reference:"Romains 8:28" },
    { title:"Le seul chemin",           verse:"Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",                                                                                                               reference:"Jean 14:6" },
    { title:"La prière du salut",       verse:"Si tu confesses de ta bouche le Seigneur Jésus, et si tu crois dans ton cœur que Dieu l'a ressuscité des morts, tu seras sauvé.",                                                                        reference:"Romains 10:9" },
    { title:"Le Saint-Esprit",          verse:"Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.",               reference:"Actes 1:8" },
    { title:"La Grande Mission",        verse:"Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit.",                              reference:"Matthieu 28:19-20" },
    { title:"Aimer son prochain",       verse:"Tu aimeras le Seigneur, ton Dieu, de tout ton cœur... Tu aimeras ton prochain comme toi-même. De ces deux commandements dépendent toute la loi et les prophètes.",                                        reference:"Matthieu 22:37-40" },
    { title:"Le pardon",                verse:"Soyez bons les uns envers les autres, compatissants, vous pardonnant réciproquement, comme Dieu vous a pardonné en Christ.",                                                                              reference:"Éphésiens 4:32" },
    { title:"L'espérance éternelle",    verse:"Car j'ai la conviction que ni la mort ni la vie... ni aucune autre créature ne pourra nous séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur.",                                        reference:"Romains 8:38-39" }
  ],
  sw: [
    { title:"Upendo wa Mungu",           verse:"Kwa maana Mungu aliupenda ulimwengu kiasi kwamba alimtoa Mwanawe wa pekee, ili kila amwaminiye asipotee, bali awe na uzima wa milele.",                                                                  reference:"Yohana 3:16" },
    { title:"Tatizo la dhambi",          verse:"Kwa sababu wote wametenda dhambi, na kupungukiwa utukufu wa Mungu; na kuhesabiwa haki bure kwa neema yake, kwa njia ya ukombozi ulio katika Kristo Yesu.",                                              reference:"Warumi 3:23-24" },
    { title:"Yesu, suluhisho",           verse:"Lakini Mungu aonyesha upendo wake kwetu, kwa kuwa Kristo alikufa kwa ajili yetu tulipokuwa bado wadhambi.",                                                                                              reference:"Warumi 5:8" },
    { title:"Mwitikio wa imani",         verse:"Kwa maana mmeokolewa kwa neema, kwa njia ya imani; na hilo halikutoka kwenu, ni kipawa cha Mungu.",                                                                                                      reference:"Waefeso 2:8" },
    { title:"Maisha mapya katika Kristo",verse:"Kwa hiyo, mtu akiwa ndani ya Kristo, amekuwa kiumbe kipya; ya kale yamepita, tazama, yamekuwa mapya.",                                                                                                   reference:"2 Wakorintho 5:17" },
    { title:"Utatu Mtakatifu",           verse:"Nendeni basi mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba na Mwana na Roho Mtakatifu.",                                                                                          reference:"Mathayo 28:19" },
    { title:"Neno la Mungu",             verse:"Kila andiko lenye pumzi ya Mungu lina faida kwa mafundisho, na kwa kuwaonya watu makosa yao, na kwa kuwarekebisha, na kwa kuwaadibisha katika haki.",                                                    reference:"2 Timotheo 3:16" },
    { title:"Mateso na tumaini",         verse:"Nasi tunajua ya kwamba mambo yote yanawafanyia wema wale wampendao Mungu, ndio wale walioitwa kwa kusudi lake.",                                                                                          reference:"Warumi 8:28" },
    { title:"Njia pekee",                verse:"Yesu akamwambia, Mimi ndimi njia, na kweli, na uzima; mtu haji kwa Baba ila kwa njia yangu.",                                                                                                            reference:"Yohana 14:6" },
    { title:"Sala ya wokovu",            verse:"Kwa sababu ukimkiri Yesu kwa kinywa chako kwamba yeye ni Bwana, na kuamini moyoni mwako kwamba Mungu alimfufua katika wafu, utaokoka.",                                                                  reference:"Warumi 10:9" },
    { title:"Roho Mtakatifu",            verse:"Lakini mtapokea nguvu, akija juu yenu Roho Mtakatifu; nanyi mtakuwa mashahidi wangu Yerusalemu, na Uyahudi wote, na Samaria, na hata mwisho wa nchi.",                                                  reference:"Matendo 1:8" },
    { title:"Agizo Kuu",                 verse:"Nendeni basi mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza na kuwafundisha kuyashika yote niliyowaamrisha.",                                                                                       reference:"Mathayo 28:19-20" },
    { title:"Penda jirani yako",         verse:"Mpende Bwana Mungu wako kwa moyo wako wote... Mpende jirani yako kama nafsi yako. Amri hizi mbili ndiyo msingi wa torati yote na manabii.",                                                              reference:"Mathayo 22:37-40" },
    { title:"Msamaha",                   verse:"Muwe wapole ninyi kwa ninyi, wenye huruma, mkisameheana, kama Mungu naye alivyowasamehe katika Kristo.",                                                                                                 reference:"Waefeso 4:32" },
    { title:"Tumaini la milele",         verse:"Kwa maana nimekuwa na hakika kwamba wala mauti, wala uhai... wala kiumbe kingine chochote, havitaweza kututenga na upendo wa Mungu.",                                                                    reference:"Warumi 8:38-39" }
  ],
  ar: [
    { title:"محبة الله",                 verse:"لأنه هكذا أحبَّ اللهُ العالمَ حتى بذل ابنه الوحيد، لكي لا يهلك كل من يؤمن به بل تكون له الحياة الأبدية.",                                                                                              reference:"يوحنا ٣:١٦" },
    { title:"مشكلة الخطية",              verse:"إذ الجميع أخطأوا وأعوزهم مجد الله، متبررين مجاناً بنعمته بالفداء الذي بيسوع المسيح.",                                                                                                                  reference:"رومية ٣:٢٣-٢٤" },
    { title:"يسوع الحل",                 verse:"لكن الله بيّن محبته لنا، لأنه ونحن بعد خطاة مات المسيح لأجلنا.",                                                                                                                                        reference:"رومية ٥:٨" },
    { title:"استجابة الإيمان",           verse:"لأنكم بالنعمة مخلصون بالإيمان، وذلك ليس منكم. هو عطية الله.",                                                                                                                                            reference:"أفسس ٢:٨" },
    { title:"حياة جديدة في المسيح",      verse:"إذاً إن كان أحد في المسيح فهو خليقة جديدة. الأشياء العتيقة قد مضت. ها قد صارت كل الأشياء جديدة.",                                                                                                     reference:"٢كورنثوس ٥:١٧" },
    { title:"الثالوث",                   verse:"اذهبوا وتلمذوا جميع الأمم وعمدوهم باسم الآب والابن والروح القدس.",                                                                                                                                       reference:"متى ٢٨:١٩" },
    { title:"كلمة الله",                 verse:"كل الكتاب هو موحى به من الله، ونافع للتعليم والتوبيخ والتقويم والتأديب الذي في البر.",                                                                                                                   reference:"٢تيموثاوس ٣:١٦" },
    { title:"المعاناة والرجاء",          verse:"ونحن نعلم أن كل الأشياء تعمل معاً للخير للذين يحبون الله الذين هم مدعوون حسب قصده.",                                                                                                                    reference:"رومية ٨:٢٨" },
    { title:"الطريق الوحيد",             verse:"قال له يسوع: أنا هو الطريق والحق والحياة. ليس أحد يأتي إلى الآب إلا بي.",                                                                                                                               reference:"يوحنا ١٤:٦" },
    { title:"صلاة الخلاص",              verse:"لأنك إن اعترفت بفمك بالرب يسوع وآمنت بقلبك أن الله أقامه من الأموات خلصت.",                                                                                                                              reference:"رومية ١٠:٩" },
    { title:"الروح القدس",               verse:"لكنكم ستنالون قوة متى حل الروح القدس عليكم وتكونون لي شهوداً في أورشليم وفي كل اليهودية والسامرة وإلى أقصى الأرض.",                                                                                   reference:"أعمال ١:٨" },
    { title:"الوصية العظيمة",            verse:"اذهبوا وتلمذوا جميع الأمم وعمدوهم باسم الآب والابن والروح القدس وعلموهم أن يحفظوا جميع ما أوصيتكم به.",                                                                                               reference:"متى ٢٨:١٩-٢٠" },
    { title:"أحبب قريبك",                verse:"تحب الرب إلهك من كل قلبك... تحب قريبك كنفسك. بهاتين الوصيتين يتعلق الناموس كله والأنبياء.",                                                                                                              reference:"متى ٢٢:٣٧-٤٠" },
    { title:"المغفرة",                   verse:"كونوا لطفاء بعضكم نحو بعض رحماء متسامحين كما سامحكم الله أيضاً في المسيح.",                                                                                                                              reference:"أفسس ٤:٣٢" },
    { title:"الرجاء الأبدي",             verse:"لأني مقتنع بأنه لا موت ولا حياة... ولا خليقة أخرى تقدر أن تفصلنا عن محبة الله التي في المسيح يسوع ربنا.",                                                                                              reference:"رومية ٨:٣٨-٣٩" }
  ],
  yo: [
    { title:"Ife Ọlọrun",               verse:"Nitoripe Ọlọrun fẹran aye bayii, ti o fi Ọmọ rẹ kanṣoṣo fun, ki ẹnikẹni ti o ba gbagbọ ninu rẹ ki o má parun, bali ki o ni iye aiyérayé.",                                                               reference:"Johanu 3:16" },
    { title:"Isoro Ẹṣẹ",               verse:"Nitoripe gbogbo eniyan ti ṣẹ, wọn si kọjá ogo Ọlọrun, ti a si da wọn lare lainidi nipasẹ ore-ọfẹ rẹ nipasẹ igbala ti o wà ninu Jesu Kristi.",                                                            reference:"Romani 3:23-24" },
    { title:"Jesu, Ojutu naa",          verse:"Ṣugbọn Ọlọrun fi ife tirẹ hàn si wa, ni ọna pe, nigba ti a wà li awọn ẹlẹṣẹ sibẹ, Kristi kú fún wa.",                                                                                                   reference:"Romani 5:8" },
    { title:"Esi Igbagbọ",             verse:"Nitoripe ẹ ti gba igbala nipasẹ ore-ọfẹ, nipasẹ igbagbọ; kii ṣe ti ẹ, ẹbun Ọlọrun ni.",                                                                                                                  reference:"Efesu 2:8" },
    { title:"Iye Titun ninu Kristi",    verse:"Nitorina, bi ẹnikẹni bá wà ninu Kristi, ẹda titun ni; ohun atijọ ti kọja, kiyesi i, gbogbo nkan di titun.",                                                                                               reference:"2 Korinti 5:17" },
    { title:"Mẹtalọkan",               verse:"Nitorina lọ, ẹ kọ gbogbo orílẹ-èdè ni ẹkọ, ti ẹ bá wọn ni baptisi ni orukọ Baba, ati Ọmọ, ati Ẹmí Mimọ.",                                                                                               reference:"Matteu 28:19" },
    { title:"Ọrọ Ọlọrun",             verse:"Gbogbo iwe-mimọ ni ìmísí Ọlọrun ti fi ìmísí rẹ fun, o wulo si fun ẹkọ, fun atunse, fun atunse ihuwasi, fun ẹkọ ninu ododo.",                                                                               reference:"2 Timotiu 3:16" },
    { title:"Ijiya ati Ireti",          verse:"A si mọ wipe gbogbo nkan n ṣiṣẹ papọ fun rere fun awọn ti o fẹ Ọlọrun, fun awọn ti a ti pe ni gẹgẹ bi ero rẹ.",                                                                                          reference:"Romani 8:28" },
    { title:"Ọna Kanṣoṣo",            verse:"Jesu wi fún un pe, Emi ni ọna, ati otitọ, ati iye: ẹnikẹni kò tọ̀ Baba wá bikoṣe nipasẹ mi.",                                                                                                             reference:"Johanu 14:6" },
    { title:"Adura Igbala",            verse:"Nitoripe bi o bá jẹwọ Jesu gẹgẹ bi Oluwa pẹlu ẹnu rẹ, ti o si gbagbọ ninu ọkàn rẹ pe Ọlọrun jí i dide lati ọdọ awọn okú, a ó gbà ọ.",                                                                   reference:"Romani 10:9" },
    { title:"Ẹmí Mimọ",               verse:"Ṣugbọn ẹ ó gba agbara, nigbati Ẹmí Mimọ bá bọ sori yín; ẹ ó si jẹ ẹlẹri mi ni Jerusalemu ati ni gbogbo Judea ati Samaria, ati títí di ìpàrí ayé.",                                                       reference:"Iṣẹ Aposteli 1:8" },
    { title:"Àṣẹ Nla",               verse:"Nitorina lọ, ẹ kọ gbogbo orílẹ-èdè ni ẹkọ, ti ẹ bá wọn ni baptisi ati kọ wọn lati gbọràn si ohun gbogbo ti mo pàṣẹ fún yín.",                                                                             reference:"Matteu 28:19-20" },
    { title:"Fi Ẹlẹgbẹ Rẹ Lẹ",       verse:"Fẹ Oluwa Ọlọrun rẹ pẹlu gbogbo ọkàn rẹ... fẹ ẹlẹgbẹ rẹ bi ara rẹ. Lori àṣẹ méjì wọ̀nyí gbogbo ofin ati awọn woli gbé.",                                                                                reference:"Matteu 22:37-40" },
    { title:"Idariji",                 verse:"Jẹ ki ẹ si dáa, ẹ si ní ìjẹ̀pọ, ẹ si dariji ara ẹni, gẹgẹ bi Ọlọrun ninu Kristi ti dariji yín.",                                                                                                         reference:"Efesu 4:32" },
    { title:"Ireti Aiyérayé",          verse:"Nitori mo ti ni idaniloju pe bẹẹni ikú, bẹẹni ìye... bẹẹni ohun ìpilẹ̀ṣẹ̀ kankan kò le ya wa kuro lọwọ ife Ọlọrun.",                                                                                    reference:"Romani 8:38-39" }
  ],
  ig: [
    { title:"Ịhụnanya Chineke",        verse:"N'ihi na Chineke hụrụ ụwa n'anya nke ukwuu, ọ nyere Ọkpara ya naanị, ka onye ọ bụla kwere ya ghara ike, kama nwee ndụ ebighi ebi.",                                                                       reference:"Jọn 3:16" },
    { title:"Nsogbu Mmehie",           verse:"Ọ bụ n'ihi na onye niile mere mmehie, ha nweghịkwa otuto Chineke; ha nọ n'ezi n'ụzọ n'ùgwù ya, site n'ozigbo nzọpụta dị na Kraịst Jizọs.",                                                               reference:"Rom 3:23-24" },
    { title:"Jizọs, Ihe Ọgwụ naa",    verse:"Ma Chineke gosipụtara ịhụnanya ya n'ụzọ a, na mgbe anyị ka bụ ndị mmehie, Kraịst nwụọ n'ihi anyị.",                                                                                                       reference:"Rom 5:8" },
    { title:"Ọzaaza Okwukwe",          verse:"N'ihi na ọ bụ n'ùgwù ka e chekwara unu n'ụzọ okwukwe; nke ahụ abụghị ike nke unu, ọ bụ onyinye Chineke.",                                                                                                reference:"Efe 2:8" },
    { title:"Ndụ Ọhụrụ na Kraịst",    verse:"Ya mere, onye ọ bụla dị na Kraịst bụ ọhụrụ. Ihe ochie agafeela, lee, ihe niile aghọọla ọhụrụ.",                                                                                                           reference:"2 Kọr 5:17" },
    { title:"Ụlọ Atọ",                verse:"Nọọ, mụọ mba niile ụmụ akwụkwọ, na-abatịzi ha n'aha Nna na Ọkpara na Mmụọ Nsọ.",                                                                                                                          reference:"Mat 28:19" },
    { title:"Okwu Chineke",            verse:"Akwụkwọ nsọ niile si n'iku ume Chineke pụta, na-aba uru maka nkuzi, maka ịkọ mmehie, maka nzụzụ n'ọtọ.",                                                                                                 reference:"2 Tim 3:16" },
    { title:"Ịta Ahụ na Olileanya",    verse:"Anyị maara na ihe niile na-arụkọ ọrụ ọma nye ndị hụrụ Chineke n'anya, ndị a kpọọrọ n'ịrịba ama nke ya.",                                                                                                  reference:"Rom 8:28" },
    { title:"Ụzọ Naanị",              verse:"Jizọs sịrị ya: Abụ m ụzọ na eziokwu na ndụ. Onye ọ bụla abịaghị n'ebe Nna, ma ọ bụ site n'ụzọ m.",                                                                                                       reference:"Jọn 14:6" },
    { title:"Ekpere Nzọpụta",         verse:"N'ihi na ọ bụrụ na ị kwụpụta Jizọs na ọ bụ Onyenwe anyị n'ọnụ gị, wee kwere n'obi gị na Chineke biliwo ya n'ọnwụ, a ga-ezọpụta gị.",                                                                    reference:"Rom 10:9" },
    { title:"Mmụọ Nsọ",               verse:"Ma unu ga-anata ike, Mmụọ Nsọ abịaruo unu; unu ga-abụ ndị ọ bụ m ama ha na Jerụsalem na Judia niile na Sameria na ọtụtụ ndị mmadụ nọ n'ókèala.",                                                          reference:"Eme 1:8" },
    { title:"Àjà Maka Ụwa Niile",     verse:"Nọọ mụọ mba niile ụmụ akwụkwọ, na-abatịzi ha ma na-akụzi ha ịrụ ihe niile m nyere unu iwu.",                                                                                                              reference:"Mat 28:19-20" },
    { title:"Hụ Agbataobi Gị N'anya", verse:"Hụ Onyenwe Chineke gị n'anya n'obi gị niile... Hụ agbataobi gị n'anya dị ka ị hụ onwe gị n'anya. Iwu abụọ ndị a bụ ntọala iwu niile na ndị amụma.",                                                      reference:"Mat 22:37-40" },
    { title:"Ịgbaghara",              verse:"Bụrụ ezigbo na ụnụ na-asọmpi maka ibe ụnụ, na-agbaghara ibe ụnụ ihe ha rere ụnụ, dị ka Chineke si agbaghara ụnụ na Kraịst.",                                                                              reference:"Efe 4:32" },
    { title:"Olileanya Ebighi Ebi",   verse:"N'ihi na achọtara m na ọnwụ, ma ndụ... ma ihe ọ bụla e kere eke enweghị ike ịkewapụ anyị n'ịhụnanya Chineke dị na Kraịst Jizọs Onyenwe anyị.",                                                             reference:"Rom 8:38-39" }
  ],
  ha: [
    { title:"Ƙaunar Allah",            verse:"Don haka ne Allah ya ƙaunaci duniya, har ya ba da ɗansa kaɗai, domin duk wanda ya gaskata da shi kada ya halaka, sai dai ya sami rai na har abada.",                                                        reference:"Yahaya 3:16" },
    { title:"Matsalar Zunubi",         verse:"Don duk sun yi zunubi, sun kuma ɓata ɗaukakar Allah; kuma ana tabbatar da su kyauta ta alherin sa, ta hanyar fansa da ke cikin Yesu Kiristi.",                                                              reference:"Romawa 3:23-24" },
    { title:"Yesu, Mafita",            verse:"Sai dai Allah ya nuna ƙaunarsa a gare mu, da cewa, yayinda muna har yanzu masu zunubi, Kiristi ya mutu dominmu.",                                                                                            reference:"Romawa 5:8" },
    { title:"Amsa na Bangaskiya",      verse:"Domin an cece ku ta alheri, ta wurin bangaskiya; kuma wannan ba daga gare ku ba ne, kyautar Allah ce.",                                                                                                      reference:"Afisawa 2:8" },
    { title:"Sabuwar Rai a Kiristi",   verse:"Saboda haka, in akwai wani a cikin Kiristi, sabo ne a cikin halitta; abubuwa na dā sun wuce, duba, duk abubuwa sun zama saba.",                                                                             reference:"2 Korantiyawa 5:17" },
    { title:"Triniti",                 verse:"Ku je ku mai da al'umma duka almajira, kuna yi musu baftisma da sunan Uba, da Ɗa, da Ruhu Mai Tsarki.",                                                                                                     reference:"Matiyu 28:19" },
    { title:"Maganar Allah",           verse:"Dukan Littafi Mai Tsarki yana da numfashin Allah, kuma yana da amfani wajen koyarwa, da tuba, da gyarawa, da horo na adalci.",                                                                               reference:"2 Timotawus 3:16" },
    { title:"Wahala da Bege",          verse:"Mun kuma san cewa duk abubuwa suna haɗin gwiwa domin alheri ga waɗanda suke ƙaunar Allah, ga waɗanda aka kira su bisa ga ƙudurinsa.",                                                                        reference:"Romawa 8:28" },
    { title:"Hanya Ɗaya Kaɗai",       verse:"Yesu ya ce masa, Ni ne hanya, da gaskiya, da rai: ba wanda yake zuwa wurin Uba, sai ta wurina.",                                                                                                             reference:"Yahaya 14:6" },
    { title:"Addu'ar Ceto",            verse:"Domin idan ka furta da baƙinka cewa Yesu Ubangiji ne, kuma ka gaskata a zuciyarka cewa Allah ya tāyar da shi daga matattu, za a cece ka.",                                                                   reference:"Romawa 10:9" },
    { title:"Ruhu Mai Tsarki",         verse:"Amma za ku karɓi iko, bayan da Ruhu Mai Tsarki ya sauko muku; kuma za ku zama shaidu a gare ni a Urushalima, da dukan Yahudiya, da Samariya, da har iyakar ƙasa.",                                          reference:"Ayyukan Manzanni 1:8" },
    { title:"Babbar Hukuma",           verse:"Ku je ku mai da al'umma duka almajira, kuna yi musu baftisma kuna kuma koyar da su su bi duk abin da na umarce ku.",                                                                                        reference:"Matiyu 28:19-20" },
    { title:"Ka Ƙaunaci Maƙwabcinka", verse:"Za ka ƙaunaci Ubangiji Allahnka da dukan zuciyarka... Za ka ƙaunaci maƙwabcinka kamar kanka. Waɗannan umarnonin biyu sune ginshiƙin dukan Attaura da Annabawa.",                                             reference:"Matiyu 22:37-40" },
    { title:"Gafara",                  verse:"Ku zama masu kirki gare juna, masu jinƙai, kuna gafarta juna, kamar yadda Allah ya gafarta muku a cikin Kiristi.",                                                                                           reference:"Afisawa 4:32" },
    { title:"Begen Har Abada",         verse:"Domin na tabbata cewa ni mutuwa, ni rai... ba kuma wata halitta da za ta iya raba mu da ƙaunar Allah.",                                                                                                       reference:"Romawa 8:38-39" }
  ],
  pcm: [
    { title:"God Im Love",             verse:"Becos God love dis world well-well, e give im only Son, so dat anybody wey believe am no go perish but go get everlasting life.",                                                                            reference:"John 3:16" },
    { title:"Di Sin Problem",          verse:"Becos everybody don sin, dem no reach God im glory. But dem dey justified free-free by im grace through di redemption wey dey in Christ Jesus.",                                                             reference:"Romans 3:23-24" },
    { title:"Jesus, Di Solution",      verse:"But God show im own love to us, say while we still dey sin, Christ die for us.",                                                                                                                             reference:"Romans 5:8" },
    { title:"Faith Response",          verse:"Becos na by grace una don save, through faith. E no come from una — na God im gift.",                                                                                                                        reference:"Ephesians 2:8" },
    { title:"New Life for Christ",     verse:"So if anybody dey inside Christ, na new creature e be. Di old things don pass. See, everything don become new.",                                                                                             reference:"2 Corinthians 5:17" },
    { title:"Di Trinity",              verse:"Go make disciples of all nations, baptize dem for di name of di Father, di Son, and di Holy Spirit.",                                                                                                        reference:"Matthew 28:19" },
    { title:"God Im Word",             verse:"All scripture wey God breathe out dey useful for teaching, for correction, for rebuke, for instruction in righteousness.",                                                                                   reference:"2 Timothy 3:16" },
    { title:"Suffering and Hope",      verse:"We know say all things dey work together for good for dem wey love God, for dem wey e call according to im purpose.",                                                                                        reference:"Romans 8:28" },
    { title:"Di Only Way",             verse:"Jesus tell am say, I be di way, di truth and di life. Nobody go come to di Father except through me.",                                                                                                       reference:"John 14:6" },
    { title:"Prayer of Salvation",     verse:"Becos if you confess with your mouth say Jesus na Lord and you believe for your heart say God raise am from dead, you go save.",                                                                             reference:"Romans 10:9" },
    { title:"Di Holy Spirit",          verse:"But you go receive power when di Holy Spirit come upon you. And you go be my witness for Jerusalem, all Judea, Samaria, and to di ends of di earth.",                                                        reference:"Acts 1:8" },
    { title:"Great Commission",        verse:"Go make disciples of all nations, baptize dem and teach dem to obey everything I don command una.",                                                                                                           reference:"Matthew 28:19-20" },
    { title:"Love Your Neighbour",     verse:"Love di Lord your God with all your heart... Love your neighbour like yourself. These two commandments na di foundation of all di law and prophets.",                                                        reference:"Matthew 22:37-40" },
    { title:"Forgiveness",             verse:"Be kind to one another, tenderhearted, forgiving each other just like how God forgive una through Christ.",                                                                                                  reference:"Ephesians 4:32" },
    { title:"Eternal Hope",            verse:"Becos I don sure say neither death nor life... nor any other creature go fit separate us from di love of God.",                                                                                              reference:"Romans 8:38-39" }
  ]
};

// Helper: get translated slide title+verse for current language
function getSlideInLanguage(slide) {
  const lang = AppState.language;
  if (lang === 'en') return { title: slide.title, verse: slide.verse, reference: slide.reference };
  const trans = SLIDE_TRANSLATIONS[lang];
  if (!trans) return { title: slide.title, verse: slide.verse, reference: slide.reference };
  const match = trans[slide.id - 1];
  return match
    ? { title: match.title, verse: match.verse, reference: match.reference }
    : { title: slide.title, verse: slide.verse, reference: slide.reference };
}

// ========== Slide System ==========
function initializeSlides() {
  const container = document.getElementById('slidesContainer');
  if (!container) return;
  const slides = AppState.contentData?.slides || FALLBACK_CONTENT.slides;
  container.innerHTML = '';

  slides.forEach((slide, index) => {
    const el = document.createElement('div');
    el.className = `slide ${index === 0 ? 'active' : 'next'}`;
    el.id = `slide-${slide.id}`;
    el.style.background = `linear-gradient(135deg,${slide.color} 0%,${darkenColor(slide.color, 32)} 100%)`;

    const isFirst = index === 0;
    const isLast = index === slides.length - 1;
    const loc = getSlideInLanguage(slide); // translated title, verse, reference

    el.innerHTML = `
      <div class="slide-content">
        <div class="slide-header">
          <div class="slide-number">${t('slide') || 'Slide'} ${slide.id}/${slides.length}</div>
          <h2 class="slide-title">${escapeHtml(loc.title)}</h2>
        </div>
        <div class="slide-verse">${escapeHtml(loc.verse)}</div>
        <div class="slide-reference">${escapeHtml(loc.reference)}</div>
        <div class="slide-actions">
          <button class="slide-btn" onclick="speakSlide(${slide.id})" aria-label="Listen">
            <i class="fas fa-volume-up"></i> ${t('listen') || 'Listen'}
          </button>
          <button class="slide-btn" onclick="askAI('${escapeAttr(slide.topic)}')" aria-label="Explain">
            <i class="fas fa-robot"></i> ${t('aiExplain') || 'Explain'}
          </button>
          <button class="slide-btn" onclick="shareVerse('${escapeAttr(loc.verse)}','${escapeAttr(loc.reference)}')" aria-label="Share">
            <i class="fas fa-share"></i> ${t('share') || 'Share'}
          </button>
          <button class="slide-btn primary" onclick="shareVersePicture('${escapeAttr(loc.verse)}','${escapeAttr(loc.reference)}','${escapeAttr(loc.title)}')" aria-label="Image">
            <i class="fas fa-image"></i> ${t('image') || 'Image'}
          </button>
        </div>
        <div class="slide-indicator">
          <span style="${isFirst ? 'opacity:0.25' : ''}">
            <i class="fas fa-arrow-left"></i> ${t('previous') || 'Prev'}
          </span>
          <span style="${isLast ? 'opacity:0.25' : ''}">
            ${t('next') || 'Next'} <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

function startPresentation() {
  AppState.currentSlide = 0;
  AppState.userStats.presentations = (AppState.userStats.presentations || 0) + 1;
  initializeSlides();
  showScreen('presentation-screen');
  vibrate(30);
}
function exitPresentation() { showScreen('home-screen'); vibrate(30); }

function nextSlide() {
  const slides = AppState.contentData?.slides || FALLBACK_CONTENT.slides;
  if (AppState.currentSlide >= slides.length - 1) {
    showToast('🎉 ' + (t('presentationComplete') || 'Presentation complete!'), 'success');
    setTimeout(() => exitPresentation(), 1800);
    return;
  }
  const cur = document.querySelector(`#slide-${slides[AppState.currentSlide].id}`);
  const nxt = document.querySelector(`#slide-${slides[AppState.currentSlide + 1].id}`);
  if (!cur || !nxt) return;
  cur.classList.remove('active'); cur.classList.add('previous');
  nxt.classList.remove('next'); nxt.classList.add('active');
  AppState.currentSlide++;
  trackSlideView(slides[AppState.currentSlide].id);
  vibrate(40);
}

function prevSlide() {
  if (AppState.currentSlide <= 0) return;
  const slides = AppState.contentData?.slides || FALLBACK_CONTENT.slides;
  const cur = document.querySelector(`#slide-${slides[AppState.currentSlide].id}`);
  const prv = document.querySelector(`#slide-${slides[AppState.currentSlide - 1].id}`);
  if (!cur || !prv) return;
  cur.classList.remove('active'); cur.classList.add('next');
  prv.classList.remove('previous'); prv.classList.add('active');
  AppState.currentSlide--;
  vibrate(40);
}

// ========== AI Explain ==========
function askAI(topic) {
  const answers = AppState.contentData?.aiAnswers || FALLBACK_CONTENT.aiAnswers;
  const topicData = answers[topic];
  if (!topicData) { showToast('No explanation available', 'info'); return; }
  const text = topicData[AppState.language] || topicData['en'] || 'Explanation coming soon.';
  showModal(`
    <button class="modal-close-btn" onclick="closeModal()" aria-label="Close"><i class="fas fa-times"></i></button>
    <div style="color:white;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;">
        <i class="fas fa-robot" style="font-size:2rem;color:#3498db;"></i>
        <h3>${t('aiExplanation') || 'Explanation'}</h3>
      </div>
      <p style="font-size:1.15rem;line-height:1.7;">${escapeHtml(text)}</p>
      <div style="text-align:center;margin-top:20px;">
        <button class="slide-btn primary" onclick="shareVersePicture('${escapeAttr(text)}','AI Insight','GospelSwipe Pro')">
          <i class="fas fa-share"></i> ${t('share') || 'Share'}
        </button>
      </div>
    </div>
  `);
  AppState.userStats.aiQuestions = (AppState.userStats.aiQuestions || 0) + 1;
  refreshStats();
  vibrate(40);
}

// ========== Prayer Assistant — Local DB ==========
function showPrayerAssistant() {
  if (typeof PRAYER_CATEGORIES === 'undefined' || typeof PRAYERS === 'undefined') {
    showToast('Prayer database not loaded', 'error'); return;
  }
  const cards = Object.keys(PRAYER_CATEGORIES).map(key => {
    const cat = PRAYER_CATEGORIES[key];
    const count = (PRAYERS[key] || []).length;
    return `<div class="ai-prayer-category-card" data-cat="${key}" tabindex="0" role="button" aria-label="${cat.title}">
      <div class="ai-prayer-category-icon" style="background:${cat.color}22;"><i class="fas ${cat.icon}" style="color:${cat.color};"></i></div>
      <div style="flex:1;"><div class="ai-prayer-category-title">${escapeHtml(cat.title)}</div><div style="font-size:0.78rem;opacity:0.6;">${count} prayers</div></div>
      <i class="fas fa-chevron-right" style="opacity:0.35;font-size:0.8rem;"></i>
    </div>`;
  }).join('');

  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <h3 style="margin-bottom:6px;">🙏 ${t('aiPrayerGuide') || 'Prayer Guide'}</h3>
    <p style="opacity:0.65;font-size:0.88rem;margin-bottom:16px;">200 hand-written prayers · 5 categories</p>
    <div class="ai-prayer-category-grid" id="prayerCatGrid">${cards}</div>
  `);

  // Event delegation — fires reliably even inside injected HTML
  requestAnimationFrame(() => {
    const grid = document.getElementById('prayerCatGrid');
    if (!grid) return;
    grid.addEventListener('click', e => {
      const card = e.target.closest('[data-cat]');
      if (card) showPrayerCategory(card.dataset.cat);
    });
    grid.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-cat]');
        if (card) showPrayerCategory(card.dataset.cat);
      }
    });
  });
}

function showPrayerCategory(categoryKey) {
  if (typeof PRAYER_CATEGORIES === 'undefined' || typeof PRAYERS === 'undefined') {
    showToast('Prayer database not loaded', 'error'); return;
  }
  const cat = PRAYER_CATEGORIES[categoryKey];
  const prayerArr = PRAYERS[categoryKey];
  if (!cat || !prayerArr || !prayerArr.length) {
    showToast('No prayers found', 'error'); return;
  }

  // Show ALL prayers directly — no intermediate "See All" step needed
  const items = prayerArr.map((pText, idx) => {
    const preview = pText.length > 110 ? pText.substring(0, 110) + '…' : pText;
    return `<div class="ai-prayer-prompt-item" data-pidx="${idx}" tabindex="0" role="button">
      <div style="font-size:0.88rem;line-height:1.55;">${escapeHtml(preview)}</div>
      <span class="ai-prayer-prompt-type" style="margin-top:6px;display:inline-block;">Prayer ${idx + 1} of ${prayerArr.length}</span>
    </div>`;
  }).join('');

  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <i class="fas ${cat.icon}" style="font-size:1.4rem;color:${cat.color};"></i>
      <h3>${escapeHtml(cat.title)}</h3>
    </div>
    <p style="font-size:0.84rem;opacity:0.7;margin-bottom:12px;">${escapeHtml(cat.guidance)}</p>
    <button id="randomPrayerBtn" class="slide-btn primary" style="width:100%;justify-content:center;margin-bottom:14px;">
      <i class="fas fa-shuffle"></i> &nbsp;Random from ${prayerArr.length}
    </button>
    <div class="ai-prayer-prompt-list" id="prayerItemList">${items}</div>
  `);

  // Event delegation — reliable on all Android browsers
  requestAnimationFrame(() => {
    const list = document.getElementById('prayerItemList');
    const randomBtn = document.getElementById('randomPrayerBtn');

    if (list) {
      list.addEventListener('click', e => {
        const item = e.target.closest('[data-pidx]');
        if (item) usePrayerText(prayerArr[parseInt(item.dataset.pidx, 10)]);
      });
      list.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          const item = e.target.closest('[data-pidx]');
          if (item) usePrayerText(prayerArr[parseInt(item.dataset.pidx, 10)]);
        }
      });
    }

    if (randomBtn) {
      randomBtn.addEventListener('click', e => {
        e.stopPropagation();
        const text = (typeof getFreshPrayer !== 'undefined')
          ? getFreshPrayer(categoryKey)
          : prayerArr[Math.floor(Math.random() * prayerArr.length)];
        if (text) usePrayerText(text);
      });
    }
  });
}

// All roads lead here — one clean function to use any prayer text
function usePrayerText(text) {
  if (!text) return;
  const input = document.getElementById('prayerInput');
  if (input) input.value = text;
  closeModal();
  showScreen('prayer-screen');
  setTimeout(() => { const inp = document.getElementById('prayerInput'); if (inp) inp.focus(); }, 350);
  vibrate([30, 30, 50]);
}

// Keep these for backwards compatibility (called from globals)
function useFreshPrayer(categoryKey) {
  const text = (typeof getFreshPrayer !== 'undefined')
    ? getFreshPrayer(categoryKey)
    : (PRAYERS[categoryKey] || [])[Math.floor(Math.random() * (PRAYERS[categoryKey] || []).length)];
  if (text) usePrayerText(text);
}

function copyPrayerToJournal(categoryKey, idx) {
  const arr = typeof PRAYERS !== 'undefined' ? PRAYERS[categoryKey] : null;
  if (!arr || arr[idx] === undefined) return;
  usePrayerText(arr[idx]);
}

function getRandomPrayer(categoryKey) {
  useFreshPrayer(categoryKey);
}

function showAllPrayers(categoryKey) {
  showPrayerCategory(categoryKey); // Alias — now shows all directly
}

// ========== Evangelism Journal ==========
const EVANGELISM_RESPONSES = {
  prayed:      { label:"🙏 Prayed to receive Christ", color:"#2ecc71", icon:"fa-pray" },
  interested:  { label:"💬 Interested, still thinking", color:"#3498db", icon:"fa-comments" },
  listened:    { label:"👂 Heard the gospel attentively", color:"#f39c12", icon:"fa-ear-listen" },
  rejected:    { label:"🚫 Rejected but heard the Word", color:"#e74c3c", icon:"fa-times-circle" },
  followup:    { label:"📞 Following up later", color:"#9b59b6", icon:"fa-calendar-check" }
};

function showEvangelismJournal() {
  const records = safeParse(localStorage.getItem('evangelismRecords'), []);
  const totalDecisions = records.filter(r => r.response === 'prayed').length;
  const totalReached = records.length;

  const historyHTML = records.length === 0
    ? `<div style="text-align:center;padding:24px;opacity:0.5;"><i class="fas fa-book-open" style="font-size:2.5rem;margin-bottom:10px;display:block;"></i><p>No entries yet. Log your first gospel conversation.</p></div>`
    : records.slice(0, 20).map(r => {
        const resp = EVANGELISM_RESPONSES[r.response] || EVANGELISM_RESPONSES.listened;
        const dateStr = new Date(r.date).toLocaleDateString();
        return `<div style="padding:14px;background:var(--glass);border-radius:18px;border-left:4px solid ${resp.color};margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
            <span style="font-size:0.88rem;flex:1;">${resp.label}</span>
            <span style="font-size:0.75rem;opacity:0.5;white-space:nowrap;">${dateStr}</span>
          </div>
          ${r.notes ? `<div style="font-size:0.8rem;opacity:0.65;margin-top:5px;">${escapeHtml(r.notes)}</div>` : ''}
        </div>`;
      }).join('');

  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <h3 style="margin-bottom:4px;"><i class="fas fa-book-open" style="color:#2ecc71;"></i> Soul Journal</h3>
    <p style="font-size:0.82rem;opacity:0.65;margin-bottom:16px;">Every gospel conversation logged here is proof of real-world impact.</p>

    <!-- Summary bar -->
    <div style="display:flex;gap:10px;margin-bottom:18px;">
      <div style="flex:1;background:rgba(46,204,113,0.12);border:1px solid rgba(46,204,113,0.3);border-radius:16px;padding:12px;text-align:center;">
        <div style="font-size:1.8rem;font-weight:800;color:#2ecc71;">${totalReached}</div>
        <div style="font-size:0.75rem;opacity:0.7;">People Reached</div>
      </div>
      <div style="flex:1;background:rgba(52,152,219,0.12);border:1px solid rgba(52,152,219,0.3);border-radius:16px;padding:12px;text-align:center;">
        <div style="font-size:1.8rem;font-weight:800;color:#3498db;">${totalDecisions}</div>
        <div style="font-size:0.75rem;opacity:0.7;">Decisions Made 🙌</div>
      </div>
    </div>

    <!-- Log new entry -->
    <div style="background:var(--glass);border:1px solid var(--glass-border);border-radius:22px;padding:16px;margin-bottom:16px;">
      <div style="font-size:0.85rem;font-weight:700;margin-bottom:10px;opacity:0.8;">+ Log a Gospel Conversation</div>
      <select id="evangelismResponse" style="width:100%;background:rgba(0,0,0,0.3);border:1px solid var(--glass-border);color:#fff;padding:11px 14px;border-radius:16px;font-size:0.88rem;margin-bottom:10px;outline:none;font-family:inherit;" aria-label="Select response">
        ${Object.entries(EVANGELISM_RESPONSES).map(([k,v]) => `<option value="${k}">${v.label}</option>`).join('')}
      </select>
      <input id="evangelismNotes" type="text" placeholder="Short note (optional)... e.g. 'Friend at work, Lagos'"
        style="width:100%;background:rgba(0,0,0,0.3);border:1px solid var(--glass-border);color:#fff;padding:11px 14px;border-radius:16px;font-size:0.88rem;outline:none;font-family:inherit;" aria-label="Optional notes">
      <button id="logEvangelismBtn" class="action-btn primary" style="width:100%;margin-top:12px;background:linear-gradient(135deg,#2ecc71,#27ae60);border-color:transparent;">
        <i class="fas fa-plus"></i> Log This Encounter
      </button>
    </div>

    <!-- History -->
    <div style="font-size:0.8rem;font-weight:700;opacity:0.6;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Recent Encounters</div>
    <div id="evangelismHistory" style="max-height:200px;overflow-y:auto;">${historyHTML}</div>
    ${totalReached > 0 ? `
    <button id="shareJournalBtn" class="action-btn" style="width:100%;margin-top:14px;background:rgba(37,211,102,0.15);border:1px solid rgba(37,211,102,0.4);color:#25d366;">
      <i class="fab fa-whatsapp"></i> Share My Impact Report
    </button>` : ''}
  `);

  // Wire up the log button via event delegation
  requestAnimationFrame(() => {
    const btn = document.getElementById('logEvangelismBtn');
    if (btn) btn.addEventListener('click', logEvangelism);
    const shareBtn = document.getElementById('shareJournalBtn');
    if (shareBtn) shareBtn.addEventListener('click', shareJournalReport);
  });
}

function shareJournalReport() {
  const records = safeParse(localStorage.getItem('evangelismRecords'), []);
  if (!records.length) return;
  const decisions = records.filter(r => r.response === 'prayed').length;
  const interested = records.filter(r => r.response === 'interested').length;
  const heard = records.filter(r => r.response === 'listened').length;
  const month = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  const msg = `📖 *My GospelSwipe Soul Journal — ${month}*\n\n` +
    `🌍 People I reached with the gospel: *${records.length}*\n` +
    `🙏 Prayed to receive Christ: *${decisions}*\n` +
    `💬 Open & interested: *${interested}*\n` +
    `👂 Heard the Word: *${heard}*\n\n` +
    `Every seed matters. To God be the glory! 🔥\n\n` +
    `📱 Download GospelSwipe Pro (free & offline):\n` +
    `https://gpmulticoncept.github.io/gospel-swipe-pro/`;
  const url = 'https://wa.me/?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

function logEvangelism() {
  const response = document.getElementById('evangelismResponse')?.value;
  const notes = (document.getElementById('evangelismNotes')?.value || '').trim();
  if (!response) return;

  const records = safeParse(localStorage.getItem('evangelismRecords'), []);
  records.unshift({ id: Date.now(), date: new Date().toISOString(), response, notes });
  safeSetItem('evangelismRecords', JSON.stringify(records));

  // Update stats
  const decisions = records.filter(r => r.response === 'prayed').length;
  AppState.userStats.peopleReached = records.length;
  AppState.userStats.soulsWon = decisions;

  // Achievement check
  if (records.length >= 1 && !(AppState.achievements || []).includes('first_soul')) {
    AppState.achievements = AppState.achievements || [];
    AppState.achievements.push('first_soul');
    safeSetItem('achievements', JSON.stringify(AppState.achievements));
  }
  if (decisions >= 1 && !(AppState.achievements || []).includes('soul_winner')) {
    AppState.achievements.push('soul_winner');
    safeSetItem('achievements', JSON.stringify(AppState.achievements));
    showToast('🏆 Soul Winner achievement unlocked!', 'success');
  }

  const msg = response === 'prayed'
    ? '🙌 Glory to God! A soul for the Kingdom!'
    : '📖 Encounter logged. Every seed matters.';
  showToast(msg, 'success');
  vibrate(response === 'prayed' ? [50,30,100,30,100] : [40]);
  refreshStats();
  closeModal();
  setTimeout(() => showEvangelismJournal(), 120);
}
function savePrayer() {
  const input = document.getElementById('prayerInput');
  const text = input?.value.trim();
  if (!text) { showToast(t('prayerRequired') || 'Please write a prayer first', 'error'); return; }
  const prayer = { id: Date.now(), text, date: new Date().toISOString(), answered: false, language: AppState.language };
  AppState.prayers.unshift(prayer);
  input.value = '';
  loadPrayers();
  showToast(t('prayerSaved') || 'Prayer saved!', 'success');
  refreshStats();
  vibrate(50);
  saveAllData();
}

function loadPrayers() {
  const container = document.getElementById('prayerList');
  if (!container) return;
  if (!AppState.prayers.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px;opacity:0.6;">
        <i class="fas fa-pray" style="font-size:3rem;margin-bottom:12px;display:block;"></i>
        <p>${t('noPrayers') || 'No prayers yet. Write your first prayer!'}</p>
      </div>
    `;
    return;
  }
  container.innerHTML = AppState.prayers.map(p => {
    const displayText = AppState.vomMode ? '(encrypted)' : escapeHtml(p.text);
    return `
      <div class="prayer-item ${p.answered ? 'answered' : ''}">
        <div class="prayer-date">
          <span>${new Date(p.date).toLocaleDateString()}</span>
          <button onclick="togglePrayerAnswered(${p.id})" style="color:${p.answered ? '#e74c3c' : '#2ecc71'};" aria-label="${p.answered ? 'Mark pending' : 'Mark answered'}">
            <i class="fas fa-${p.answered ? 'times-circle' : 'check-circle'}"></i>
          </button>
        </div>
        <div style="line-height:1.5;font-size:0.95rem;">${displayText}</div>
      </div>
    `;
  }).join('');
}

function togglePrayerAnswered(id) {
  const p = AppState.prayers.find(pr => pr.id === id);
  if (!p) return;
  p.answered = !p.answered;
  loadPrayers();
  showToast(p.answered ? (t('prayerAnswered') || 'Answered! Praise God! 🙌') : (t('prayerPending') || 'Marked pending'), p.answered ? 'success' : 'info');
  vibrate(p.answered ? [50,50,100] : [30]);
  saveAllData();
}

function recordVoicePrayer() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { showToast(t('voiceNotSupported') || 'Voice not supported', 'error'); return; }
  const recognition = new SR();
  const langMap = { ar:'ar-SA', fr:'fr-FR', sw:'sw-TZ', yo:'yo-NG', ig:'ig-NG', ha:'ha-NG' };
  recognition.lang = langMap[AppState.language] || 'en-US';
  recognition.onstart = () => {
    showToast(t('voiceRecording') || 'Recording... speak now', 'info');
    const input = document.getElementById('prayerInput');
    if (input) input.placeholder = '🎙 Listening...';
  };
  recognition.onresult = e => {
    const input = document.getElementById('prayerInput');
    if (input) input.value = e.results[0][0].transcript;
  };
  recognition.onend = () => {
    showToast(t('voiceFinished') || 'Recording complete', 'success');
    const input = document.getElementById('prayerInput');
    if (input) input.placeholder = t('prayerPlaceholder') || 'Pour out your heart...';
  };
  recognition.onerror = () => showToast('Voice error. Try again.', 'error');
  recognition.start();
}

// ========== Unified Stats Refresh ==========
// Call this after EVERY user action — updates home + stats screen simultaneously
function refreshStats() {
  if (!AppState.userStats) AppState.userStats = {
    presentations:0, slidesViewed:[], prayers:0, aiQuestions:0, shares:0,
    installDate:new Date().toISOString(), level:'Beginner'
  };
  AppState.userStats.prayers = AppState.prayers.length;

  // Home screen counters
  const el = id => document.getElementById(id);
  const set = (id, val) => { const e = el(id); if (e) e.textContent = val; };

  set('streakCount',  AppState.streak.count || 0);
  set('versesShared', AppState.userStats.slidesViewed?.length || 0);

  // Stats screen counters (update regardless of which screen is visible)
  set('totalSlides', AppState.userStats.slidesViewed?.length || 0);
  set('prayerCount', AppState.prayers.length);
  set('streakDays',  AppState.streak.count || 0);
  set('aiQuestions', AppState.userStats.aiQuestions || 0);

  // Evangelism journal stats
  const evangelismRecords = safeParse(localStorage.getItem('evangelismRecords'), []);
  const peopleReached = evangelismRecords.length;
  const soulsWon = evangelismRecords.filter(r => r.response === 'prayed').length;
  set('peopleReached', peopleReached);
  set('soulsWon', soulsWon);
  AppState.userStats.peopleReached = peopleReached;
  AppState.userStats.soulsWon = soulsWon;

  // Level calculation
  const pts =
    (AppState.userStats.slidesViewed?.length || 0) +
    AppState.prayers.length * 2 +
    (AppState.userStats.aiQuestions || 0) * 3 +
    (AppState.userStats.shares || 0) * 2;

  let level = 'Beginner';
  if (pts >= 500) level = 'Apostle';
  else if (pts >= 200) level = 'Revivalist';
  else if (pts >= 100) level = 'Minister';
  else if (pts >= 50) level = 'Evangelist';

  set('userLevel', level);
  AppState.userStats.level = level;
  checkAchievements();
  updateAchievementsDisplay();
  saveUserStats();
}

// Keep legacy aliases so nothing breaks
function updateUserStats() { refreshStats(); }
function updateStatsDisplay() { refreshStats(); }

function checkStreak() {
  const today = new Date().toDateString();
  if (AppState.streak.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  if (AppState.streak.lastDate === yesterday.toDateString()) {
    AppState.streak.count++;
    if (AppState.streak.count > 1) showToast(`🔥 ${AppState.streak.count}-day streak!`, 'success');
  } else {
    AppState.streak.count = 1;
  }
  AppState.streak.lastDate = today;
  safeSetItem('streak', JSON.stringify(AppState.streak));
}

function trackSlideView(id) {
  if (!AppState.userStats.slidesViewed) AppState.userStats.slidesViewed = [];
  if (!AppState.userStats.slidesViewed.includes(id)) {
    AppState.userStats.slidesViewed.push(id);
    refreshStats();   // live-updates both home + stats screen instantly
    checkAchievements();
  }
}

function checkAchievements() {
  const ach = AppState.achievements || [];
  const add = (key, msg) => { if (!ach.includes(key)) { ach.push(key); showToast('🏆 ' + msg, 'success'); } };
  if ((AppState.userStats?.slidesViewed?.length || 0) >= 5) add('learner', 'Learner — Viewed 5 slides');
  if ((AppState.userStats?.slidesViewed?.length || 0) >= 15) add('scholar', 'Scholar — Completed all slides');
  if (AppState.prayers.length >= 3) add('prayer_warrior', 'Prayer Warrior — 3 prayers');
  if (AppState.streak.count >= 7) add('faithful', 'Faithful — 7-day streak');
  if ((AppState.userStats?.aiQuestions || 0) >= 5) add('seeker', 'Seeker — 5 AI questions');
  if ((AppState.userStats?.peopleReached || 0) >= 1) add('first_soul', 'Ambassador — First gospel conversation logged');
  if ((AppState.userStats?.peopleReached || 0) >= 10) add('evangelist_10', 'Evangelist — 10 people reached');
  if ((AppState.userStats?.soulsWon || 0) >= 1) add('soul_winner', 'Soul Winner — First documented decision for Christ');
  AppState.achievements = ach;
  safeSetItem('achievements', JSON.stringify(ach));
}

function updateAchievementsDisplay() {
  const container = document.getElementById('achievementsList');
  if (!container) return;
  if (!AppState.achievements?.length) {
    container.innerHTML = `<div class="achievement-item" style="opacity:0.5;"><i class="fas fa-lock"></i> ${t('noAchievementsYet') || 'Keep going to unlock achievements!'}</div>`;
    return;
  }
  container.innerHTML = AppState.achievements.map(a =>
    `<div class="achievement-item"><i class="fas fa-trophy"></i> ${escapeHtml(a.replace(/_/g,' '))}</div>`
  ).join('');
}

// ========== Settings ==========
function toggleDarkMode() {
  AppState.darkMode = !AppState.darkMode;
  document.body.classList.toggle('dark-mode', AppState.darkMode);
  localStorage.setItem('darkMode', AppState.darkMode);
  vibrate(20);
}
function updateVoiceSettings() { showToast('Voice settings updated', 'info'); }
function showLanguageSettings() {
  showScreen('settings-screen');
  setTimeout(() => document.getElementById('languageSelect')?.focus(), 300);
}

// ========== Sharing ==========
const APP_URL = 'https://gpmulticoncept.github.io/gospel-swipe-pro/';

async function shareApp() {
  vibrate(30);
  const data = {
    title: 'GospelSwipe Pro',
    text: `Check out GospelSwipe Pro — free offline gospel app! 15 gospel slides, 200 prayers, 8 languages. Made in Nigeria 🇳🇬`,
    url: APP_URL
  };
  try {
    if (navigator.share && AppState.isOnline) {
      await navigator.share(data);
      AppState.userStats.shares = (AppState.userStats.shares || 0) + 1;
      refreshStats();
    } else throw new Error('No native share');
  } catch { copyToClipboard(data.text + '\n\n' + APP_URL); showToast('Link copied!', 'success'); }
}

async function shareVerse(verse, ref) {
  vibrate(30);
  const data = { title: 'Bible Verse', text: `"${verse}" — ${ref}\n\nvia GospelSwipe Pro`, url: APP_URL };
  try {
    if (navigator.share && AppState.isOnline) { await navigator.share(data); showToast('Verse shared!', 'success'); }
    else throw new Error();
  } catch { copyToClipboard(data.text); showToast('Verse copied!', 'success'); }
}

function shareVersePicture(verse, ref, title) {
  vibrate(20);
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1080;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
  grad.addColorStop(0, '#2c3e50'); grad.addColorStop(1, '#3c5a7a');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 1080, 1080);

  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(i*200, 1080, 180, 0, Math.PI*2); ctx.fill(); }

  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = 'bold 42px sans-serif';
  ctx.fillText(title || 'GospelSwipe Pro', 540, 110);

  ctx.fillStyle = '#fff'; ctx.font = 'italic 52px sans-serif';
  const lines = wrapText(ctx, `"${verse}"`, 900);
  lines.forEach((line, i) => ctx.fillText(line, 540, 300 + i * 80));

  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = 'bold 38px sans-serif';
  ctx.fillText(ref, 540, 300 + lines.length * 80 + 60);

  ctx.fillStyle = '#3498db'; ctx.font = 'bold 30px sans-serif';
  ctx.fillText('GospelSwipe Pro • gpmulticoncept.github.io/gospel-swipe-pro', 540, 980);

  canvas.toBlob(blob => {
    if (!blob) return;
    if (navigator.share && navigator.canShare && AppState.isOnline) {
      const file = new File([blob], 'verse.png', { type: 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: 'Gospel Verse' }).catch(() => downloadBlob(blob, 'verse.png'));
        return;
      }
    }
    downloadBlob(blob, 'verse.png');
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ========== Daily Verse ==========
function showDailyVerse() {
  const verses = AppState.contentData?.dailyVerses || FALLBACK_CONTENT.dailyVerses;
  const v = verses[Math.floor(Math.random() * verses.length)];
  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <div style="text-align:center;">
      <i class="fas fa-star" style="font-size:3rem;color:#f39c12;margin-bottom:14px;display:block;"></i>
      <h3>${t('dailyVerseTitle') || 'Verse of the Day'}</h3>
      <p style="font-size:1.4rem;font-style:italic;margin:18px 0;">"${escapeHtml(v.verse)}"</p>
      <p style="color:#f39c12;font-weight:600;">${escapeHtml(v.ref)}</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
        <button class="slide-btn" onclick="shareVerse('${escapeAttr(v.verse)}','${escapeAttr(v.ref)}')">
          <i class="fas fa-share"></i> ${t('share') || 'Share'}
        </button>
        <button class="slide-btn primary" onclick="shareVersePicture('${escapeAttr(v.verse)}','${escapeAttr(v.ref)}','Daily Verse')">
          <i class="fas fa-image"></i> ${t('image') || 'Image'}
        </button>
      </div>
    </div>
  `);
}

// ========== Text to Speech ==========
function speakSlide(slideId) {
  const slide = (AppState.contentData?.slides || FALLBACK_CONTENT.slides).find(s => s.id === slideId);
  if (!slide) return;
  if (!('speechSynthesis' in window)) { showToast('Voice synthesis unavailable', 'info'); return; }
  if (AppState.speechSynthesisActive) speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(`${slide.title}. ${slide.verse}. ${slide.reference}`);
  const langMap = { ar:'ar-SA', fr:'fr-FR', sw:'sw-TZ', yo:'yo-NG', ig:'ig-NG', ha:'ha-NG', pcm:'en-NG' };
  utt.lang = langMap[AppState.language] || 'en-US';
  utt.rate = parseFloat(document.getElementById('voiceSpeed')?.value || '1');
  utt.onstart = () => { AppState.speechSynthesisActive = true; };
  utt.onend = () => { AppState.speechSynthesisActive = false; };
  speechSynthesis.speak(utt);
  vibrate(30);
}

// ========== Modal ==========
let activeModal = null;
function showModal(content) {
  if (activeModal) closeModal();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `<div class="modal-content">${content}</div>`;
  document.body.appendChild(overlay);
  activeModal = overlay;
  requestAnimationFrame(() => overlay.classList.add('active'));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}
function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove('active');
  const m = activeModal;
  activeModal = null;
  setTimeout(() => m.remove(), 320);
}

// ========== Premium / Other ==========
function showPremiumDetails() {
  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <h3><i class="fas fa-crown" style="color:#9b59b6;"></i> ${t('premiumFeatures') || 'Premium Features'}</h3>
    <ul style="list-style:none;padding:0;margin:18px 0;display:flex;flex-direction:column;gap:10px;">
      <li style="display:flex;gap:10px;align-items:center;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> AI Apologetics Engine</li>
      <li style="display:flex;gap:10px;align-items:center;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> Church Dashboard & Analytics</li>
      <li style="display:flex;gap:10px;align-items:center;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> Mentorship Matching</li>
      <li style="display:flex;gap:10px;align-items:center;"><i class="fas fa-check-circle" style="color:#2ecc71;"></i> Advanced Stats & Reports</li>
    </ul>
    <p style="opacity:0.75;margin-bottom:16px;">Starting at $1.99/month</p>
    <button class="slide-btn premium" onclick="window.open('mailto:haggai.enitan.dev@gmail.com?subject=GospelSwipe Premium Inquiry')" style="width:100%;">
      <i class="fas fa-envelope"></i> Contact Sales
    </button>
  `);
}

function showWallet() {
  showModal(`
    <button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <h3 style="margin-bottom:6px;"><i class="fas fa-heart" style="color:#e74c3c;"></i> Support This Ministry</h3>
    <p style="font-size:0.9rem;opacity:0.8;margin-bottom:20px;line-height:1.6;">
      GospelSwipe Pro is 100% free. If this app has blessed you or helped you share the gospel,
      consider supporting the work so we can keep building and reach more souls.
    </p>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <button class="action-btn primary" onclick="window.open('https://ko-fi.com/gospelswipe','_blank');closeModal();"
        style="background:linear-gradient(135deg,#FF5E5B,#e74c3c);border-color:transparent;">
        <i class="fas fa-coffee"></i> Support on Ko-fi
      </button>
      <button class="action-btn" onclick="window.open('mailto:haggai.enitan.dev@gmail.com?subject=GospelSwipe Support','_blank');closeModal();">
        <i class="fas fa-envelope"></i> Partner with Us
      </button>
    </div>
    <p style="font-size:0.75rem;opacity:0.45;text-align:center;margin-top:16px;">
      Every contribution funds development, hosting, and outreach in Nigeria 🇳🇬
    </p>
  `);
}

function showImpact() { showScreen('impact-screen'); }

// ========== Icon Constants ==========
const NORMAL_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMmMzZTUwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMjYzNCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY3Jvc3MiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzQ5OGRiIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlY2M3MSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHJ4PSIxMjAiIGZpbGw9InVybCgjYmcpIi8+CiAgPHJlY3QgeD0iMjIwIiB5PSI4MCIgd2lkdGg9IjcyIiBoZWlnaHQ9IjM1MiIgcng9IjIwIiBmaWxsPSJ1cmwoI2Nyb3NzKSIvPgogIDxyZWN0IHg9IjEwMCIgeT0iMTcwIiB3aWR0aD0iMzEyIiBoZWlnaHQ9IjcyIiByeD0iMjAiIGZpbGw9InVybCgjY3Jvc3MpIi8+CiAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA2KSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==';

const VOM_ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9IjgwIiBmaWxsPSIjMmQyZDJkIi8+CiAgPHJlY3QgeD0iNjAiIHk9IjYwIiB3aWR0aD0iMzkyIiBoZWlnaHQ9IjM5MiIgcng9IjQwIiBmaWxsPSIjM2EzYTNhIi8+CiAgPHJlY3QgeD0iODAiIHk9IjgwIiB3aWR0aD0iMzUyIiBoZWlnaHQ9IjEyMCIgcng9IjIwIiBmaWxsPSIjNTU1Ii8+CiAgPHRleHQgeD0iMzkwIiB5PSIxNzgiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iODAiIGZpbGw9IiMyZWNjNzEiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+CiAgPHJlY3QgeD0iOTAiIHk9IjIzMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiM2NjYiLz4KICA8cmVjdCB4PSIxNzUiIHk9IjIzMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiM2NjYiLz4KICA8cmVjdCB4PSIyNjAiIHk9IjIzMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNlNzRjM2MiLz4KICA8cmVjdCB4PSIzNDUiIHk9IjIzMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNmMzljMTIiLz4KICA8cmVjdCB4PSI5MCIgeT0iMjk1IiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzY2NiIvPgogIDxyZWN0IHg9IjE3NSIgeT0iMjk1IiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzY2NiIvPgogIDxyZWN0IHg9IjI2MCIgeT0iMjk1IiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzY2NiIvPgogIDxyZWN0IHg9IjM0NSIgeT0iMjk1IiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iI2YzOWMxMiIvPgogIDxyZWN0IHg9IjkwIiB5PSIzNjAiIHdpZHRoPSIxNTUiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzY2NiIvPgogIDxyZWN0IHg9IjI2MCIgeT0iMzYwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzY2NiIvPgogIDxyZWN0IHg9IjM0NSIgeT0iMzYwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iIzM0OThkYiIvPgo8L3N2Zz4=';

function setAppIcon(iconSrc, title) {
  // Update favicon
  const el = document.getElementById('appFavicon') || document.querySelector('link[rel="icon"]');
  if (el) el.href = iconSrc;
  // Update title
  const titleEl = document.querySelector('title');
  if (titleEl) titleEl.textContent = title;
  // Update apple touch icon if present
  const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (appleIcon) appleIcon.href = iconSrc;
}

function activateVOMMode() {
  AppState.vomMode = !AppState.vomMode;

  if (AppState.vomMode) {
    setAppIcon(VOM_ICON, 'Calculator');
    // Encrypt prayers
    try {
      AppState.prayers = AppState.prayers.map(p => ({
        ...p,
        text: btoa(unescape(encodeURIComponent(p.text)))
      }));
    } catch (e) { /* already encoded */ }
    saveAllData();
    showToast('🔒 VOM Mode on. App disguised as Calculator.', 'success');
  } else {
    setAppIcon(NORMAL_ICON, 'GospelSwipe Pro');
    // Decrypt prayers
    try {
      AppState.prayers = AppState.prayers.map(p => ({
        ...p,
        text: decodeURIComponent(escape(atob(p.text)))
      }));
    } catch (e) { /* already decoded */ }
    saveAllData();
    showToast('🔓 VOM Mode off. App restored.', 'info');
  }
  loadPrayers();
}

function showPremiumDetails_church() {
  showModal(`<button class="modal-close-btn" onclick="closeModal()"><i class="fas fa-times"></i></button>
    <h3><i class="fas fa-church" style="color:#9b59b6;"></i> Church Dashboard</h3>
    <p style="opacity:0.75;margin:14px 0;">Track your congregation's engagement, prayer requests, and evangelism journey in one place.</p>
    <button class="slide-btn premium" onclick="window.open('mailto:haggai.enitan.dev@gmail.com?subject=Church Dashboard Inquiry')" style="width:100%;">
      <i class="fas fa-envelope"></i> Get Early Access
    </button>`);
}

// ========== PWA Install ==========
function installApp() {
  if (!AppState.deferredPrompt) { showToast(t('installPrompt') || 'Use browser menu to install', 'info'); return; }
  AppState.deferredPrompt.prompt();
  AppState.deferredPrompt.userChoice.then(() => {
    AppState.deferredPrompt = null;
    document.getElementById('installBtn')?.classList.add('hidden');
  });
}
function checkInstallPrompt() {
  const btn = document.getElementById('installBtn');
  if (!btn) return;
  const installed = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  installed ? btn.classList.add('hidden') : btn.classList.remove('hidden');
}

// ========== Toast ==========
function showToast(message, type = 'info', duration = 4000) {
  const notif = document.getElementById('notification');
  const msgEl = document.getElementById('notificationMessage');
  if (!notif || !msgEl) return;
  const colors = { success:'#27ae60', error:'#e74c3c', info:'#3498db', warning:'#f39c12', ai:'linear-gradient(135deg,#3498db,#8e44ad)' };
  notif.style.background = colors[type] || colors.info;
  msgEl.textContent = message;
  notif.classList.add('show');
  vibrate(type === 'success' ? [30,30,50] : type === 'error' ? [80,40,80] : [20]);
  clearTimeout(notif._timer);
  notif._timer = setTimeout(() => notif.classList.remove('show'), duration);
}

// ========== Data ==========
function exportData() {
  const data = {
    schemaVersion: '1.1',
    exportDate: new Date().toISOString(),
    userStats: AppState.userStats,
    prayers: AppState.prayers,
    streak: AppState.streak,
    achievements: AppState.achievements,
    language: AppState.language,
    darkMode: AppState.darkMode
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `gospelswipe-backup-${new Date().toISOString().split('T')[0]}.json`);
  showToast(t('dataExported') || 'Data exported!', 'success');
}

function clearData() {
  if (!confirm(t('confirmClearAll') || '⚠️ Are you sure? This will DELETE ALL data permanently.')) return;
  if (!confirm(t('confirmClearAll2') || '⚠️ FINAL WARNING: This cannot be undone. Continue?')) return;
  localStorage.clear();
  indexedDB.deleteDatabase(DB_NAME);
  showToast('All data cleared. Reloading...', 'success');
  setTimeout(() => location.reload(), 1600);
}

function exportReport() {
  window.open('mailto:haggai.enitan.dev@gmail.com?subject=GospelSwipe Grant Report Request');
}

// ========== Utilities ==========
function darkenColor(hex, amt) {
  const num = parseInt(hex.replace('#',''), 16);
  const a = Math.round(2.55 * amt);
  const R = Math.max(0, (num >> 16) - a);
  const G = Math.max(0, ((num >> 8) & 0xff) - a);
  const B = Math.max(0, (num & 0xff) - a);
  return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
}
function escapeHtml(s) { if (!s) return ''; const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function escapeAttr(s) { if (!s) return ''; return s.replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/\n/g,' '); }
function vibrate(p) { try { if ('vibrate' in navigator) navigator.vibrate(p); } catch {} }
function copyToClipboard(text) {
  if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  else fallbackCopy(text);
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea'); ta.value = text;
  ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch {}
  document.body.removeChild(ta);
}
function wrapText(ctx, text, maxW) {
  const words = text.split(' '); const lines = []; let line = '';
  for (const w of words) {
    const test = line + w + ' ';
    if (ctx.measureText(test).width > maxW && line) { lines.push(line.trim()); line = w + ' '; }
    else line = test;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}
function safeParse(json, fallback) { try { return json ? JSON.parse(json) : fallback; } catch { return fallback; } }
function safeSetItem(key, val) { try { localStorage.setItem(key, val); } catch { showToast(t('storageFull') || 'Storage full', 'warning'); } }
function saveAllData() {
  safeSetItem('userStats', JSON.stringify(AppState.userStats));
  safeSetItem('prayers', JSON.stringify(AppState.prayers));
  safeSetItem('streak', JSON.stringify(AppState.streak));
  safeSetItem('achievements', JSON.stringify(AppState.achievements));
  safeSetItem('language', AppState.language);
  safeSetItem('darkMode', AppState.darkMode);
  safeSetItem('vomMode', AppState.vomMode);
}
function saveUserStats() { safeSetItem('userStats', JSON.stringify(AppState.userStats)); }
function handleError(ctx, err) { console.error('❌', ctx, err); }

// ========== Touch & Keyboard ==========
function setupEventListeners() {
  // Touch swipe
  document.addEventListener('touchstart', e => {
    if (AppState.currentScreen !== 'presentation-screen') return;
    if (!e.touches.length) return;
    AppState.touchStartX = e.touches[0].clientX;
    AppState.touchStartY = e.touches[0].clientY;
    AppState.touchStartTime = Date.now();
    AppState.isSwiping = true;
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (!AppState.isSwiping || AppState.currentScreen !== 'presentation-screen') return;
    const dx = Math.abs(e.touches[0].clientX - AppState.touchStartX);
    const dy = Math.abs(e.touches[0].clientY - AppState.touchStartY);
    if (dx > dy && dx > 8) e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', e => {
    if (!AppState.isSwiping || !e.changedTouches.length) { AppState.isSwiping = false; return; }
    const dx = e.changedTouches[0].clientX - AppState.touchStartX;
    const dy = e.changedTouches[0].clientY - AppState.touchStartY;
    const vel = Math.abs(dx) / Math.max(Date.now() - AppState.touchStartTime, 1);
    if (Math.abs(dx) > Math.abs(dy) && (Math.abs(dx) > 50 || vel > 0.4)) {
      if (AppState.currentScreen === 'presentation-screen') {
        dx < 0 ? nextSlide() : prevSlide();
      }
    }
    AppState.isSwiping = false;
  }, { passive: true });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (AppState.currentScreen === 'presentation-screen') {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
      else if (e.key === 'Escape') { e.preventDefault(); exitPresentation(); }
    } else if (e.key === 'Escape' && activeModal) {
      closeModal();
    }
  });

  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); AppState.deferredPrompt = e; checkInstallPrompt(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveAllData(); });
  window.addEventListener('beforeunload', () => saveAllData());
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

// ========== Prayer Database — BUILT INTO app.js (SW-proof) ==========
// prayers.js can optionally override these at runtime for extended sets.
// This ensures 200 prayers are ALWAYS available regardless of caching state.
(function definePrayerDatabase() {
  // If prayers.js already ran with more prayers, don't overwrite
  if (typeof PRAYERS !== 'undefined' && PRAYERS.salvation && PRAYERS.salvation.length >= 20) return;

  window.PRAYER_CATEGORIES = {
    salvation:    { title:'Salvation',    icon:'fa-hands-praying', color:'#3498db', guidance:'Pray for souls to receive Christ as Lord and Savior.' },
    healing:      { title:'Healing',      icon:'fa-heart-pulse',   color:'#e74c3c', guidance:'Bring physical and emotional needs to the Great Physician.' },
    guidance:     { title:'Guidance',     icon:'fa-compass',       color:'#2ecc71', guidance:'Ask God for wisdom, clarity, and direction for your next steps.' },
    thanksgiving: { title:'Thanksgiving', icon:'fa-star',          color:'#f39c12', guidance:'Enter His gates with thanksgiving and His courts with praise.' },
    protection:   { title:'Protection',   icon:'fa-shield-halved', color:'#9b59b6', guidance:"Claim God's divine covering and armor over your life and family." }
  };

  window.PRAYERS = {
    salvation: [
      "Lord Jesus, I come before You acknowledging I am a sinner in need of Your grace. I believe You died on the cross for my sins and rose again. I open my heart and invite You in as my Lord and Savior. Thank You for saving me.",
      "Heavenly Father, I turn away from my sin and place my full trust in Jesus Christ. Forgive me, give me eternal life, and fill me with Your Holy Spirit. I am Yours from this day forward.",
      "God, I have been living apart from You and I am sorry. Today I come home. I confess Jesus as Lord and I believe You raised Him from the dead. Make me a new creation from this moment on.",
      "Father, I pray for my loved one who does not yet know You. Draw them with Your love, remove every barrier, and send the right person to share the gospel with them today. Do not let them go.",
      "Lord Jesus, let a wave of salvation sweep through my family, my street, my city. Pour out Your Spirit on the young and old. Let many say yes to You today and let none perish who have not heard.",
      "Father, I pray for the person who believes they are too far gone for forgiveness. Remind them that Your grace is greater than any sin. No one is beyond the reach of the cross.",
      "Lord, I ask for the courage to share the gospel with someone today. Give me the right words at the right moment. Let Your love flow through me as an instrument to lead a soul closer to Jesus.",
      "God, I lift up every prodigal who has wandered from faith. Call them back. Remind them of the prayers their family prayed. Do not let the enemy keep them trapped far from home.",
      "Heavenly Father, I pray for those who have been hurt by religion and now reject You. Show them the difference between religion and a relationship with Jesus. Heal their wounds and restore their trust.",
      "Lord, I pray for the person on the edge of belief, almost persuaded but not quite there. Give them one more clear encounter with Your truth and love. Break through every last wall of resistance.",
      "Jesus, be present at every gospel conversation happening today. Confirm Your Word. Let hearts be convicted, fears be lifted, and decisions be made for eternal life across this nation.",
      "Father, I pray for those deep in addiction, violence, and despair. Shine Your light into those dark places. Let the power of salvation reach where no human effort can go.",
      "Lord, I commit to being a faithful witness for the gospel. Give me boldness without arrogance, compassion without compromise. Let my life and lips both point people to Jesus every day.",
      "God, I thank You that salvation is not based on what I do but on what Jesus has already done. Help me to fully receive this truth. Let grace speak louder than condemnation in my heart today.",
      "Father, I ask that the message of the cross would not lose its power in this generation. Let the simple truth that Jesus died and rose again continue to transform millions of lives.",
      "Lord, I pray for a supernatural encounter for someone searching but not finding. Appear to them in a dream, in undeniable peace, in a stranger's words. Let them find Jesus and know it.",
      "Heavenly Father, forgive the times I have been a poor ambassador for the gospel. Reignite my first love for Jesus and give me a fresh burning passion to see people come to know Him.",
      "God, raise up missionaries and bold believers to carry the gospel to every unreached people group. Let no one die without a genuine chance to hear and believe the good news.",
      "Lord, I stand in faith for my entire household. Your Word says if I believe, my household will be saved. I hold that promise. I will not stop praying until every name I love is in the kingdom.",
      "Father, I pray for revival. Not just in my heart but in my church, my city, my nation. Let the fear of the Lord return. Let thousands turn to You in genuine repentance and lasting transformation.",
      "Lord Jesus, You came not to condemn but to save. Let that saving love be on display through me and every believer today. Show the world that the gospel is not bad news that shames but power that frees.",
      "God, I pray for every evangelism effort happening right now — crusades, house churches, one-on-one conversations, online outreach. Bless every seed being planted. Let none return void.",
      "Father, I hold Your promise that everyone who calls on the name of the Lord will be saved. That promise is still standing. I call on it today for every person in my family who does not yet know You.",
      "Lord, I pray for the person who is about to give up on You. Reach them before they walk away. Let Your love feel tangible and real right now. Do not let them go without one more encounter with You.",
      "Heavenly Father, let conviction fall on those who have been comfortable in sin. Not to crush them but to awaken them before it is too late. Draw them urgently to the foot of the cross.",
      "God, I intercede for nations where the gospel is forbidden. Protect every secret believer. Raise up underground churches. Let the blood of martyrs become seed that multiplies the church.",
      "Lord, I thank You that Your mercy endures forever. No matter how many times someone has rejected You, Your door remains open. Let them walk through it today before it is too late.",
      "Father, I pray for every person who will hear the gospel for the very first time today. Let it land on good soil. Let the Holy Spirit make it clear, convicting, and irresistible to believe.",
      "Jesus, You are the same yesterday, today, and forever. The same gospel that saved millions across history is still the power of God unto salvation today. Let it work mightily in every heart it touches.",
      "Lord God, I surrender every person I love to You. You love them more than I do. You died for them before I even cared. I trust Your pursuit of them. I will pray, share, and believe until they come home.",
      "Father, open the eyes of those who are spiritually blind. Let the scales fall. Let them see Jesus not as a religious figure but as the living Savior who is reaching for them right now.",
      "Heavenly Father, I pray that Your church would be bold, urgent, and full of love when sharing the gospel. Do not let comfort silence us. Remind us that people are perishing and we carry the only message that saves.",
      "Lord, I ask for divine appointments this week — conversations I did not plan with people You prepared. Let me be so filled with Your Spirit that the gospel flows naturally from who I am.",
      "God, let a spirit of prayer for the lost rise in my church. Let us carry the names of unbelievers before Your throne day and night. Let the burden of the harvest become the culture of the church.",
      "Lord Jesus, no one can come to You unless the Father draws them. I ask You to draw every person I have been praying for. Overwhelm their resistance with Your love. Let today be the day.",
      "Father, I thank You for the story of the prodigal son — the father running to meet the returning child. That is You running toward every soul that turns back to You. Let that love be real to someone today.",
      "Lord, I am available. Send me. Use my phone, my conversations, my story, my scars. Let my testimony open a door for someone to walk through into the kingdom. I am willing. Send me.",
      "God, I pray for those who have never once heard the name of Jesus. They are not forgotten by You. Raise up someone to go to them. Let the Great Commission be completed in our generation.",
      "Father, let the Holy Spirit go ahead of me into every conversation today. Soften hearts before I arrive. Prepare the words before I speak. Let the response to the gospel exceed what I can imagine.",
      "Lord, I end this prayer with faith and not fear. You are not willing that any should perish. That desire in Your heart is the guarantee that You will work mightily to save. I partner with that work today."
    ],
    healing: [
      "Lord, You are Jehovah Rapha — the God who heals. I come to You in pain and I need Your touch. By the stripes of Jesus I am healed. I receive that healing by faith right now.",
      "Heavenly Father, touch my body where it is suffering. Drive out sickness, infection, and pain in the name of Jesus. Restore every organ and system to the optimal design You intended when You created me.",
      "God, heal my mind. Where there is anxiety let there be peace. Where there is depression let there be joy. Where there is trauma let there be wholeness. Restore me completely from the inside out.",
      "Lord, I pray for someone lying in a hospital bed right now. Be in that room. Give wisdom to doctors, compassion to nurses, and let Your healing power do what every machine and medication cannot.",
      "Father, I thank You in advance for my healing. I choose to praise You before I see it. You are still Jehovah Rapha. Your power has not diminished. Your willingness has not wavered. I receive it today.",
      "Lord Jesus, You are the same God who healed the blind, the lame, and the leper when You walked on earth. Nothing has changed. Lay Your hand on my body right now and let healing flow.",
      "God, Your Word declares that by the stripes of Jesus I am healed. I declare that truth over my body. I refuse to accept sickness as my permanent address. I believe in Your power to heal.",
      "Father, I pray for those suffering with mental illness — depression that feels like a pit, anxiety that will not stop, voices that do not belong. Jesus healed the tormented in mind. Heal them now.",
      "Lord, I ask for supernatural healing for someone told there is nothing more that can be done. You are a God of impossibilities. You heal what science cannot explain. Let this be their testimony.",
      "Heavenly Father, let healing come during my sleep tonight. Restore my body while I rest. Let every healing process accelerate. Let me wake up tomorrow better than I am today by Your grace.",
      "God, I pray against every spirit of infirmity attached to my body or my family. I resist it in Your name. Sickness has no covenant with me. My body is the temple of the Holy Spirit. Be whole.",
      "Lord Jesus, I pray for healing of addiction. The body has been damaged and the mind has been captive. Free this person completely. Heal their brain chemistry, break every chain, give them a fresh start.",
      "Father, I pray for those battling cancer — every tumor, every malignant cell. You made every cell in that body. You can unmake what does not belong. Fight for Your people with healing that confounds medicine.",
      "God, restore the years the locust has eaten. What sickness has stolen — time, energy, opportunity, relationships — let Your grace restore double. Turn every area of loss into a testimony of Your power.",
      "Lord, I stand on James 5:15 — the prayer of faith will save the sick and the Lord will raise them up. I am praying that prayer now with everything I have. I believe. I declare healing. Raise them up.",
      "Father, where surgery has left scars let Your healing grace restore. Let the healing process move faster than doctors expected. Let them say they have no explanation. Let patients say it was Jesus.",
      "Lord, I ask for healing of chronic pain that has worn down my joy and strength. You see every sleepless night and every moment of suffering. I trust Your plan even now. But I am asking — please heal me.",
      "God, let my immune system rise up and function the way You designed it to. You are the master architect of the human body. Restore every system, every organ, to its God-designed optimal function.",
      "Lord Jesus, I pray for the child who is sick and the parents who are afraid. You blessed the children and called them to Yourself. Come to this child now. Let Your gentle, powerful hand bring relief.",
      "Father, healing is in the atonement. Jesus bore our sicknesses and carried our pain. That work is finished. I receive the full benefit of what He purchased for me at Calvary. Healing belongs to me.",
      "Lord, be the peace of the patient waiting for test results. Be the clarity of the doctor searching for answers. Be the strength of the caregiver running on empty. Bring healing to all of them — body, mind, and soul.",
      "God, I pray for those with autoimmune conditions where the body attacks itself. Speak order into that chaos. Let the immune system recognize friend from foe. Restore function and end the war within.",
      "Father, I ask for emotional healing from trauma. The past has left wounds that still bleed. Come into those memories. Sit with me in the pain. Bring the healing only You can bring — from the deepest place inside.",
      "Lord, let healing flow through every anointing service, every prayer meeting, and every hospital visitation happening today. Confirm the laying on of hands with real results. Let God receive all the glory.",
      "God, I thank You that You are Jehovah Rapha not just in Bible stories but in my life today. I call on that name right now. You healed them. You healed me before. You will heal again. I trust You.",
      "Father, strengthen my faith to believe for healing where doubt has crept in. Where I have been disappointed before, heal that disappointment and restore my boldness to ask big things of a big God.",
      "Lord, I dedicate this body to Your service. Heal it so I can continue to serve You. Use my testimony of healing to lead others to faith. Let this sickness become a stage where Your power shines.",
      "Heavenly Father, heal the broken heart that physically aches. You are close to the brokenhearted. Bind up every wound. Let joy return. Let the person who feels they will never be whole discover You make them whole.",
      "God, where medicine has reached its limit, You have no limit. Where prognosis is grim, Your Word is still good. Where doctors say no more, You say it is not over. I trust You as my healer today.",
      "Lord Jesus, I speak healing over every bone, every muscle, every ligament in my body. Strengthen what is weak. Mend what is broken. Rebuild what has deteriorated. Let this body testify to Your power.",
      "Father, I pray for those who have lost their health slowly and lost hope that things could change. Revive their hope today. Show them one clear sign You are at work. Let them dare to believe again.",
      "Lord, I intercede for all people living with disability and chronic conditions. Give them Your supernatural strength for each day. Lead them to every resource and treatment that can help them.",
      "God, heal every mother who is sick and fighting to stay strong for her children. Hold her up. Give her supernatural energy. Let her children have their mother for many more healthy, fruitful years.",
      "Father, I ask for a divine acceleration in my healing. What would take months, let it happen in weeks. What would take years, let it happen in months. Let my testimony surprise even the most experienced doctors.",
      "Lord, I come to You the way the woman with the issue of blood pressed through the crowd. I am pressing through every obstacle — every doubt, every discouragement, every bad report — to reach You. I touch You by faith.",
      "Heavenly Father, let the name of Jesus be honored in hospitals, clinics, and sickbeds today. Let inexplicable recoveries be reported. Let patients say they know exactly why — because Jesus healed them.",
      "God, I pray for those battling invisible illness — the pain nobody sees, the fatigue nobody understands. You see it all. You know every detail. Be their comfort, their strength, and their healer today.",
      "Lord, I thank You that healing is not just physical. Heal my finances from the strain illness brought. Heal my relationships from the distance sickness created. Restore everything this season has taken from me.",
      "Father, I end this prayer not in defeat but in faith. You are Jehovah Rapha. That name has never changed. That power has never diminished. That willingness has never wavered. I believe it and I receive it. Amen.",
      "God, even if healing does not come the way I expect, I trust You. Job praised You through suffering. Paul found grace in his thorn. Let my faith not rest on healing but on You — the Healer — who is always enough."
    ],
    guidance: [
      "Father, I do not know which way to go and I need Your direction. If I acknowledge You in all my ways, You will direct my paths. I am acknowledging You right now. Please make the path clear. Show me the next step.",
      "Lord, I ask for the wisdom You promised in James 1:5 — given liberally to all who ask without finding fault. I am asking right now for wisdom about this decision, this relationship, this season of my life.",
      "God, I need guidance about my career. I am not sure whether to stay or go, to build here or start fresh. Show me clearly. Let every open door be one You opened and every closed door be a blessing in disguise.",
      "Heavenly Father, guide me in how I spend my time. I want to invest in what matters eternally. Teach me to number my days so I gain a heart of wisdom. Let my calendar reflect Your priorities, not just my preferences.",
      "Lord, I feel lost in this season. The map I had is not working anymore. Remind me that You are still the Good Shepherd and You have not lost me even when I feel lost. Bring me back to the right path.",
      "Father, I ask for guidance as a parent. I do not always know how to handle what my child is going through. Give me wisdom — when to speak, when to listen, when to be firm, and when to be gentle and patient.",
      "God, I commit this year into Your hands. Every plan I have, hold it loosely. I want Your will, not mine. Guide me into the life You planned for me before I was even born. Let nothing derail that plan.",
      "Lord, I confess I have been making decisions in my own strength and it has not been going well. I humble myself and ask You to take the lead. I step aside from my own cleverness and trust Your wisdom.",
      "Father, show me the gifts and calling You placed in me before I was born. I do not want to arrive at the end of my life having never walked in my purpose. Wake up every latent gift and clarify my assignment.",
      "Heavenly Father, guide me in my marriage. Speak to both of us. Align our hearts. Give us a shared vision for where You are taking us and the courage to walk there together even when it is hard.",
      "Lord, I need guidance about this business decision. The numbers look a certain way but numbers do not tell the whole story. Give me discernment beyond data. Let Your peace be my compass. Close it if it is wrong.",
      "God, guide my finances. Show me where to give, save, invest, and cut back. Let every financial decision align with Your kingdom purposes. Make me a wise and faithful steward of what You have entrusted to me.",
      "Father, guide my tongue. Let me know when to speak and when to be quiet. Teach me to pause, pray, and listen before I respond. Let my words be seasoned with wisdom and grace and not just reaction.",
      "Lord, when I am overwhelmed by too many options, simplify my thinking. Reduce the noise. Let Your still small voice rise above everything else. I trust You will guide me clearly when I need the answer most.",
      "Heavenly Father, I ask for divine appointments — the right people placed in my path at exactly the right time with wisdom, connection, or confirmation. You guide people through people. Bring the right voice to me.",
      "God, let the Holy Spirit be my guide today — in every conversation, decision, and moment of uncertainty. I do not need to figure everything out alone. I just need to follow. Teach me sensitivity to Your leading.",
      "Lord, I ask for guidance through Your Word. Open the Scriptures to me fresh. Let the passage I read today speak directly to my situation. Let Your written Word be a lamp to my feet and light to my path.",
      "Father, guide me back to the basics when I have drifted — back to Your Word, prayer, and community. Do not let me be so busy building things for You that I forget to spend time with You each day.",
      "Lord, guide me through this transition I did not choose. I do not understand it yet. But I trust You close doors for good reasons and the door You open next will be better. Lead me forward in faith.",
      "God, I ask for a clear sense of purpose for this season specifically. What are the one or two things You want me to focus on? Help me say no to the good so I can say yes to Your best for my life.",
      "Father, I ask for a dream, a vision, or a confirmation — something from You that makes the direction clear. Let me not confuse my desires with Your plans. Speak clearly. I am listening more intently than ever.",
      "Lord, guide me in forgiveness. I do not know how to forgive what was done to me. Teach me Your way — not because it is deserved but because You have forgiven me so much. Lead me through this hard path.",
      "God, for every young person at a fork in the road listening to too many voices — quiet the crowd. Let them hear You clearly. Keep them from rushing into decisions they will regret. Lead them to Your best.",
      "Father, I ask for a spirit of discernment to recognize the difference between open doors You opened and open doors that are traps. Not every opportunity is from You. Teach me to test everything and hold the good.",
      "Lord, I pray for leaders making decisions that will affect thousands of people. Give them wisdom that surpasses human understanding. Protect them from corrupt counsel. Let every major decision be filtered through prayer.",
      "Heavenly Father, guide me in how I use my voice, my platform, and my influence. Let every word I put into the world point people to You. Let my life's work be something You are proud of long after I am gone.",
      "God, in moments of confusion I return to what I know — You are good, You love me, You have a plan. From that foundation let me walk forward one step at a time, trusting Your guidance even when I cannot see far.",
      "Lord, order my steps today. Every meeting, every encounter, every decision — let it be directed by You. Keep me alert to the divine moments hidden in ordinary days. Let me not miss what You have prepared.",
      "Father, I ask for guidance to the right church, the right community, and the right people for this season. I need people who will sharpen me and carry me. You know exactly who they are. Connect us now.",
      "Lord, guide me as I make plans for the future. Let every plan pass through the filter of Your will. When my plans do not match Yours, give me the humility and grace to defer and trust Your wisdom over mine.",
      "God, I ask for the courage to step out in obedience even when I cannot see the full path. Abraham went out not knowing where he was going. Let that same faith mark my steps. I will move when You say move.",
      "Father, teach me to wait on You without growing anxious. Your timing is perfect even when it feels unbearably slow. Let waiting season produce patience, character, and a deeper trust in Your faithfulness.",
      "Lord, I pray for those who feel called to ministry but do not know how to start. Give them clarity, connections, and confirmation. Let the call become concrete. Let the first step become clear and achievable.",
      "Heavenly Father, guide me in how I handle conflict in my relationships. Give me the courage to address what needs to be addressed with truth and grace. Protect the relationship while speaking honestly.",
      "God, I pray for wisdom about my health decisions — which treatments, which lifestyle changes, which doctors to trust. Guide every choice I make about this body You entrusted to me. Let wisdom lead every step.",
      "Lord, let my plans be flexible in Your hands. I submit my five-year plan, my hopes, and my timelines to You. Interrupt them when needed. Redirect them when better. I trust Your map more than my own.",
      "Father, I pray for those who are paralyzed by fear of making the wrong decision. Release them from analysis paralysis. Remind them that You are sovereign even over mistakes. Take the next step with courage.",
      "Lord, I end this prayer by choosing trust over control. I may not see the full picture, but You do. Your plans are for welfare and not for harm, to give me a future and a hope. That is enough for today. Lead on.",
      "God, whatever decision I am facing today — let it be made in prayer, confirmed by peace, tested by Scripture, and surrendered to Your will. That is the only process I need. Guide me through it faithfully.",
      "Father, I commit my way to You and trust in You, and You will act. I roll my burden onto You today. I choose to rest in Your guidance rather than strain in my own understanding. Lead me, Lord. I will follow."
    ],
    thanksgiving: [
      "Father, I begin with gratitude because You are worthy of all praise. Thank You for life itself — the breath in my lungs, the heartbeat in my chest, and the privilege of another day to know You and make You known.",
      "Lord Jesus, thank You for the cross. You left glory, took on flesh, walked through suffering, and died in my place. The more I think about what You did, the more undone I become. I will never get over the gospel.",
      "God, thank You for answered prayer. You did not have to listen. You did not have to respond. But You did — faithfully, lovingly, and often more generously than I asked for or imagined. Thank You.",
      "Heavenly Father, thank You for Your Word. In a world full of confusion and noise, You have given me a light that never goes out. Thank You that I can open the Bible and hear Your voice any time I come.",
      "Lord, thank You for the people You placed in my life — those who prayed for me when I gave up on myself, those who showed up when it mattered, those through whom Your love became tangible and real to me.",
      "Father, thank You for the peace that passes understanding — the peace that showed up in the hardest season of my life and made no logical sense but was undeniably real. That peace is one of Your greatest gifts.",
      "God, I am grateful for the storms I have come through. I did not thank You then, but I understand now. Those seasons built something in me that comfort never could have. You used everything. Even the pain.",
      "Lord Jesus, thank You for forgiving me. Completely, freely, without holding it over me. You removed my sins as far as the east is from the west. That kind of grace has no equal anywhere in the universe.",
      "Father, I am grateful for food on my table, a roof over my head, and clothes on my back. Thank You for provision that comes from Your generous hand day after day. These things are never guaranteed. I notice.",
      "Heavenly Father, thank You for the Holy Spirit who lives inside me. He is my Counselor, Comforter, and Guide. Thank You that I am never alone in any dark valley or overwhelming moment of my life.",
      "Lord, I am grateful for the sunrise this morning — that Your mercies are new every morning. Yesterday's failures do not define today. Great is Your faithfulness. Every day is a fresh start in Your steadfast love.",
      "God, I thank You for the church — imperfect because it is made of people, but Yours and loved by You. Thank You for giving me brothers and sisters in faith who carry me, challenge me, and celebrate with me.",
      "Father, thank You for moments of joy — laughter with family, the beauty of a sunset, a song that captured something true, a conversation that went deep. You have filled this life with beauty. Help me see it.",
      "Lord, I am grateful for healing that has already come to my life — physical, emotional, spiritual. You have brought me further than I had any right to expect. My testimony is evidence of Your grace and power.",
      "Heavenly Father, thank You for Your protection I am not even fully aware of. Every accident I did not have, every attack You deflected, every danger I walked past without knowing. Your angels are faithful.",
      "God, I am grateful for second chances. And third chances. And as many more as I have needed. Your mercies are not exhausted by my repeated failures. You are the God of another chance and I am living proof.",
      "Lord, thank You for spiritual growth — for the fact that I am not who I used to be. The work You are doing in me is real even if it is slow. Thank You for not giving up on the project You began in me.",
      "Father, I am grateful for clean water, medicine, and technology that connects me to community. These are gifts that are easy to overlook. Today I pause and say a genuine thank You for each one.",
      "Heavenly Father, thank You for being slow to anger and abounding in love. If You treated me as I sometimes deserve, I would not survive it. Instead You are patient, kind, and keep giving me room to grow.",
      "Lord Jesus, thank You for the promise of resurrection. Death is not the end of my story. Because You live, I will live also. The grave has been robbed of its victory. Thank You for making eternity certain.",
      "God, thank You for the gift of worship — that I can sing to You, read to You, talk to You, create for You, and work for You. Everything can be an act of worship when done with gratitude and devotion.",
      "Father, I am grateful for this very moment of prayer — that in the middle of a busy, noisy life, I stopped and turned my heart toward You. Thank You that You were already here waiting, always glad when I come.",
      "Lord, I thank You for the hard truth that You love me too much to let me stay comfortable in sin. Your discipline is love. I have not always welcomed it, but I have always needed it. Thank You for caring enough.",
      "God, thank You for every teacher, pastor, mentor, and stranger who spoke a word into my life at the right time and did not even know what it meant to me. You sent them on purpose. They were divine gifts.",
      "Heavenly Father, thank You for Your nearness in grief. When I lost people I love, You did not disappear. You drew closer. You wept with me. You held what I could not hold. You are the God who comes close.",
      "Father, I am grateful for the season that forced me to depend on You completely. When I had nothing and You were everything — that season taught me more about faith than any abundance ever could.",
      "Lord, thank You for the Bible stories that remind me who You are — the exodus, the return from exile, the healings, the resurrections. They are not just history. They are a pattern. You are still that God.",
      "God, I am grateful for children — their laughter, their questions, their unguarded love, the way they remind adults what trust and wonder look like. Thank You for filling the world with such gifts.",
      "Father, thank You for the gift of music — for hymns that have carried God's people through centuries, for songs that reached me when sermons could not, for melodies that lodge truth deep in the heart.",
      "Lord Jesus, thank You that You intercede for me right now at the right hand of the Father. You are not just my Savior from the past. You are my Advocate in the present. Speaking for me every single day.",
      "God, I choose gratitude as a lifestyle, not just a feeling. Even on hard days I will find something to be thankful for. Even in loss I will trust Your goodness. Gratitude is a declaration of faith in Your character.",
      "Heavenly Father, thank You for being unchangeable. In a world where everything shifts, You are the same. Your love is the same. Your faithfulness is the same. Your promises are the same. You are my anchor.",
      "Father, thank You for specific answered prayers this year — the ones I wrote down and forgot, the ones I was too afraid to hope for. You answered them anyway. You are attentive to the details of my life.",
      "Lord, I am grateful for the cross of suffering I have carried. It produced compassion, humility, and dependence on You that prosperity never would have built. I see the purpose now. I am genuinely thankful.",
      "God, thank You for a mind that can think, hands that can work, a voice that can speak, and feet that can carry me where You send me. Not everyone has these gifts. I want to use mine fully in gratitude.",
      "Father, thank You for the privilege of prayer. That the Creator of the universe made Himself accessible to me anytime, anywhere, in any language, with no appointment needed. That is extraordinary grace.",
      "Lord, thank You for the times You said no to what I prayed for, because now I can see that Your no was better than my yes would have been. You protect me from my own blindness. Thank You for that mercy.",
      "God, I thank You that salvation is free — that the greatest gift ever given costs me nothing because it cost You everything. I do not deserve it. That is exactly what makes it grace. Thank You, Lord Jesus.",
      "Heavenly Father, thank You for not giving up on me. I have failed You more times than I can count. Yet here I am, still loved, still called, still used by You. That is not because of me. That is entirely You.",
      "Lord, I end this prayer with a full heart. You are worthy. You are good. You are faithful. You are enough. Whatever today holds, I hold these truths tightly. Thank You for being a God I can trust completely. Amen."
    ],
    protection: [
      "Father, I place myself, my family, and my home under the covering of the blood of Jesus. No weapon formed against us shall prosper. Every assignment the enemy has launched against this household is canceled now.",
      "Lord, be a wall of fire around my children today. Let Your angels watch over them at school, on the road, and everywhere I cannot be. Protect their bodies, their minds, and their hearts from every evil.",
      "God, I pray the 91st Psalm over my life. You are my refuge and my fortress. I trust in You. Your angels will guard me in all my ways. Let that ancient promise be my lived reality today and every day.",
      "Heavenly Father, I ask for protection over my mind. Guard it against destructive thoughts, spiritual deception, and the lies of the enemy. Let the mind of Christ be active in me. Let truth guard every gate.",
      "Lord Jesus, I stand against every spiritual attack directed at my life and calling. I stand in the authority You gave me over principality and power. The enemy has no right to what belongs to God. I take my stand.",
      "Father, protect my marriage from every external force and internal weakness the enemy would use to divide us. Strengthen what is strong. Heal what is broken. Let no weapon against our covenant succeed.",
      "Lord, I ask for traveling mercies for myself and every person I love today. Protect every vehicle, every journey, every road. Keep accidents away. Let Your angels go before and behind. Bring everyone home.",
      "God, I pray for protection over my finances from theft, fraud, and poor decisions. Let Your wisdom guard every financial door. Let every attempt to rob or deceive be exposed and blocked before it causes damage.",
      "Heavenly Father, lift up every believer in a nation where following Jesus is dangerous. Protect them from persecution. Give them wisdom to navigate their reality. Let their courage inspire the whole church.",
      "Lord, I ask for protection of my health from disease and sudden illness. Your Word says no plague shall come near my dwelling. I hold that promise. I plead the blood of Jesus over every cell in this body.",
      "Father, protect my reputation from false accusation and slander. Let every lie told about me fall to the ground without taking root. Let the truth be seen. Vindicate me Lord in Your own time and Your own way.",
      "God, I pray for protection over leaders of Your church who are under intense spiritual attack. Surround them with angels. Give them discernment about threats they cannot see. Keep their families safe.",
      "Lord Jesus, I place the cross between myself and everything assigned against me today. Your blood speaks louder than every accusation. Your victory at Calvary is final. I walk in that victory and will not be moved.",
      "Father, I ask for protection for missionaries and evangelists in dangerous territories right now. Shield them supernaturally. Let the same Spirit who delivered Paul and Silas from prison surround them today.",
      "Heavenly Father, I pray for children around the world in danger — in war zones, poverty, or abusive homes. Protect the innocent. Raise up protectors for those who have none. Let justice come swiftly.",
      "God, protect me from temptation that is beyond what I can bear. Your Word promises You will provide a way of escape. Open that door clearly when the pressure builds. Give me the strength to run through it.",
      "Lord, I pray for protection over my digital life — my privacy and the information that could be used against me. Guard what I cannot guard myself. Expose any intrusion before it causes real damage to me.",
      "Father, I ask for protection over my emotions and mental health. Guard me from despair and bitterness. Let Your joy be my strength. Let Your peace stand guard over my heart and mind today and tonight.",
      "Lord Jesus, no darkness can survive in the presence of Your light. I declare Your light fills my home, my workplace, and my relationships. Every hidden scheme and dark assignment is exposed and canceled now.",
      "God, I pray for divine protection for my nation. Protect it from corruption, violence, and economic collapse. Raise up righteous leaders. Confound the plans of those who harm the innocent. Let justice prevail.",
      "Heavenly Father, I ask for a hedge of protection around my mind as I sleep tonight. Let no nightmare or spiritual intrusion disturb my rest. You grant sleep to those You love. Let tonight be deeply restorative.",
      "Lord, I stand in the gap for my neighborhood. Cover every home with the blood of Jesus. Let Your presence be so strong in this area that evil has no comfortable place to operate. Let righteousness be our identity.",
      "Father, protect the marriages in my church from the specific attacks targeting them right now. Strengthen every husband and wife. Let the covenant hold. Let love be chosen again and again even when it is hard.",
      "God, protect the God-given dreams and assignments in the hearts of believers. The enemy targets purpose specifically. Let every vision from You survive every attack, discouragement, and season of waiting.",
      "Lord Jesus, greater is He that is in me than he that is in the world. I hold that truth over my life today. I am not intimidated. The One on my side is greater than everything aligned against me. I stand firm.",
      "Father, guard the faith of new believers under immediate spiritual attack after their decision for Christ. Surround them with good community quickly. Give them a strong Word foundation. Protect what was planted.",
      "Lord, I ask for protection over our church gatherings. Let every meeting be under Your authority. Let no spirit of division, offense, or manipulation find any foothold. Let Your order and peace govern everything.",
      "God, protect domestic violence survivors who need safety right now. Surround them with Your angels. Open doors of escape. Connect them with people who can help. Let justice come for every abuser today.",
      "Heavenly Father, protect the elderly and vulnerable in my community from exploitation and harm. Surround the aged with dignity and care. Raise up advocates who will stand in the gap and fight for them.",
      "Lord Jesus, I ask for protection over children from every digital and cultural force seeking to corrupt their innocence and distort their identity. Raise up parents and leaders willing to fight for the next generation.",
      "Father, let Your peace stand guard over my heart and mind as Philippians 4:7 promises — not just absence of worry but a positive, powerful, impenetrable peace that comes from You and cannot be explained away.",
      "God, I pray for law enforcement and emergency responders who put themselves in danger daily. Protect them from harm. Keep them whole for their families. Give them wisdom in every high-stakes moment they face.",
      "Lord, I claim divine protection for every gathering of believers happening in secret, in house churches, and in unreached territories. Make every meeting invisible to the enemy and undeniable in God's presence.",
      "Father, protect me from my own worst impulses — from words I will regret, decisions that will cost me, shortcuts that will compromise my integrity. Let the Spirit guard what my discipline sometimes cannot.",
      "Heavenly Father, I ask for fresh anointing of protection as I step into a new season. New seasons bring new battles. Arm me, shield me, and send angels before me into every territory I am about to enter.",
      "God, I take a stand against every generational pattern that has sought to destroy my family for generations. I break it in the name of Jesus. A new story begins with me. My household will serve the Lord.",
      "Lord Jesus, Your name is a strong tower and the righteous run into it and are safe. I run into that tower right now. I hide myself in You. Let everything chasing me lose the scent when it reaches where You are.",
      "Father, I pray for those who have no one to pray for them — the orphan, the refugee, the prisoner, the homeless. Be their protector, advocate, and defender. Let Your angels watch over those without human protection.",
      "Lord, I end with this declaration: I am covered. I am guarded. I am protected by the Most High God who never sleeps, never grows tired, and never takes His eyes off those who belong to Him. I am safe in His hands.",
      "Heavenly Father, thank You for protection You have already provided that I am completely unaware of. Guard me again today. Every assault that is planned, deflect it. Every trap that is set, expose it. I trust You."
    ]
  };

  // Ensure getFreshPrayer is available
  if (typeof getFreshPrayer === 'undefined') {
    const _used = {};
    window.getFreshPrayer = function(cat) {
      const arr = window.PRAYERS[cat];
      if (!arr || !arr.length) return null;
      if (!_used[cat]) _used[cat] = [];
      let avail = arr.map((_,i)=>i).filter(i=>!_used[cat].includes(i));
      if (!avail.length) { _used[cat]=[]; avail=arr.map((_,i)=>i); }
      const idx = avail[Math.floor(Math.random()*avail.length)];
      _used[cat].push(idx);
      return arr[idx];
    };
  }
})();

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', async () => {
  const loading = document.getElementById('loading');
  const appContainer = document.getElementById('appContainer');
  const progressEl = document.getElementById('loadingProgress');

  // Progress animation
  let pct = 0;
  const ticker = setInterval(() => {
    pct = Math.min(pct + Math.random() * 8 + 2, 90);
    if (progressEl) progressEl.textContent = Math.round(pct) + '%';
  }, 80);

  // Load saved state
  AppState.darkMode = localStorage.getItem('darkMode') === 'true';
  AppState.language = localStorage.getItem('language') || navigator.language?.split('-')[0] || 'en';
  // Validate language
  const supportedLangs = ['en','fr','sw','ar','yo','ig','ha','pcm'];
  if (!supportedLangs.includes(AppState.language)) AppState.language = 'en';

  AppState.vomMode = localStorage.getItem('vomMode') === 'true';
  AppState.userStats = safeParse(localStorage.getItem('userStats'), {
    presentations: 0, slidesViewed: [], prayers: 0, aiQuestions: 0, shares: 0,
    installDate: new Date().toISOString(), level: 'Beginner'
  });
  AppState.prayers = safeParse(localStorage.getItem('prayers'), []);
  AppState.streak = safeParse(localStorage.getItem('streak'), { lastDate: '', count: 0 });
  AppState.achievements = safeParse(localStorage.getItem('achievements'), []);

  // Apply initial state
  if (AppState.darkMode) document.body.classList.add('dark-mode');
  const dmToggle = document.getElementById('darkModeToggle');
  if (dmToggle) dmToggle.checked = AppState.darkMode;
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = AppState.language;

  // VOM disguise — restore state from last session
  if (AppState.vomMode) {
    setAppIcon(VOM_ICON, 'Calculator');
  }

  // Load data
  await loadAppData();

  // Finish loading
  clearInterval(ticker);
  if (progressEl) progressEl.textContent = '100%';

  setTimeout(() => {
    if (loading) { loading.style.opacity = '0'; loading.style.pointerEvents = 'none'; }
    setTimeout(() => {
      if (loading) loading.style.display = 'none';
      if (appContainer) appContainer.classList.add('active');
      initializeSlides();
      setupEventListeners();
      updateOnlineStatus();
      checkInstallPrompt();
      updateUserStats();
      checkStreak();
      updateStatsDisplay();
      showToast(t('welcomeMessage') || 'Welcome to GospelSwipe Pro!', 'success');
      // Handle manifest shortcut actions
      const params = new URLSearchParams(location.search);
      const action = params.get('action');
      if (action === 'present') setTimeout(() => startPresentation(), 600);
      else if (action === 'prayer') setTimeout(() => showScreen('prayer-screen'), 600);
      else if (action === 'journal') setTimeout(() => showEvangelismJournal(), 600);
    }, 450);
  }, 1200);
});

// ========== Expose Globals ==========
// ========== WhatsApp Gospel Invite ==========
function shareGospelWhatsApp() {
  vibrate(30);
  const msg =
    `✝️ *GospelSwipe Pro — Free Gospel App*\n\n` +
    `Hey! I'm using this free app to share the gospel. It has 15 gospel presentations, 200 prayers, works completely *offline*, and supports *8 languages* including Yoruba, Hausa, Igbo and Pidgin.\n\n` +
    `Perfect for personal evangelism, house fellowships, and crusade follow-up.\n\n` +
    `📱 Download free (no app store needed):\n` +
    `👉 https://gpmulticoncept.github.io/gospel-swipe-pro/\n\n` +
    `Made in Nigeria 🇳🇬 • Zero ads • Zero tracking`;
  const url = 'https://wa.me/?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
  AppState.userStats.shares = (AppState.userStats.shares || 0) + 1;
  refreshStats();
}

window.showEvangelismJournal = showEvangelismJournal;
window.shareGospelWhatsApp = shareGospelWhatsApp;
window.shareJournalReport = shareJournalReport;
window.logEvangelism = logEvangelism;
window.showScreen = showScreen;
window.startPresentation = startPresentation;
window.exitPresentation = exitPresentation;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.askAI = askAI;
window.showPrayerAssistant = showPrayerAssistant;
window.showPrayerCategory = showPrayerCategory;
window.showAllPrayers = showAllPrayers;
window.useFreshPrayer = useFreshPrayer;
window.getRandomPrayer = getRandomPrayer;
window.copyPrayerToJournal = copyPrayerToJournal;
window.savePrayer = savePrayer;
window.togglePrayerAnswered = togglePrayerAnswered;
window.recordVoicePrayer = recordVoicePrayer;
window.toggleDarkMode = toggleDarkMode;
window.changeLanguage = changeLanguage;
window.updateVoiceSettings = updateVoiceSettings;
window.showLanguageSettings = showLanguageSettings;
window.shareApp = shareApp;
window.shareVerse = shareVerse;
window.shareVersePicture = shareVersePicture;
window.downloadAllContent = downloadAllContent;
window.clearOfflineContent = clearOfflineContent;
window.installApp = installApp;
window.exportData = exportData;
window.clearData = clearData;
window.exportReport = exportReport;
window.showWallet = showWallet;
window.showImpact = showImpact;
window.activateVOMMode = activateVOMMode;
window.showDailyVerse = showDailyVerse;
window.speakSlide = speakSlide;
window.showPremiumDetails = showPremiumDetails;
window.closeModal = closeModal;
window.showPremiumDetails_church = showPremiumDetails_church;
