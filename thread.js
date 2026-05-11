// thread.js — GospelSwipe Pro
// "The Thread" — Intertextual Bible module
// 60 biblical themes tracing from Genesis to Revelation
// var (not const) for global access before app.js loads

var BIBLE_THREADS = [
  {
    id: 'lamb',
    title: 'The Lamb',
    icon: 'fas fa-dove',
    color: '#e74c3c',
    tagline: 'From Abel\'s altar to the throne of heaven',
    summary: 'The sacrifice of a lamb is one of the oldest and most persistent images in all of Scripture. It begins with the first death in Eden, reaches its climax at Calvary, and ends with a Lamb still standing — having been slain — at the centre of God\'s eternal throne.',
    verses: [
      { ref: 'Genesis 4:4', text: 'Abel also brought an offering — fat portions from some of the firstborn of his flock. The LORD looked with favour on Abel and his offering.', note: 'The first sacrifice — blood offered in faith, accepted by God.' },
      { ref: 'Genesis 22:8', text: 'Abraham answered, "God himself will provide the lamb for the burnt offering, my son."', note: 'Abraham prophesies without knowing — God will provide His own Lamb.' },
      { ref: 'Exodus 12:13', text: 'The blood will be a sign for you on the houses where you are, and when I see the blood, I will pass over you.', note: 'The Passover lamb — blood on the doorpost, death averted.' },
      { ref: 'Isaiah 53:7', text: 'He was oppressed and afflicted, yet he did not open his mouth; he was led like a lamb to the slaughter.', note: '700 years before Calvary, Isaiah sees the suffering servant.' },
      { ref: 'John 1:29', text: '"Look, the Lamb of God, who takes away the sin of the world!"', note: 'John the Baptist identifies the fulfilment of every sacrifice.' },
      { ref: 'Revelation 5:12', text: 'In a loud voice they were saying: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honour and glory and praise!"', note: 'The Lamb is not a victim. He reigns forever.' }
    ]
  },
  {
    id: 'bread',
    title: 'The Bread of Life',
    icon: 'fas fa-wheat-awn',
    color: '#f39c12',
    tagline: 'From manna in the desert to the table of eternity',
    summary: 'God has always fed His people with bread that comes from beyond themselves. The manna was real but temporary. The bread Jesus offers is eternal — and He does not just give it. He is it.',
    verses: [
      { ref: 'Exodus 16:15', text: 'When the Israelites saw it, they said to each other, "What is it?" For they did not know what it was. Moses said to them, "It is the bread the LORD has given you to eat."', note: 'Manna — miraculous, daily, from heaven. A picture of something greater.' },
      { ref: 'Deuteronomy 8:3', text: 'He humbled you, causing you to hunger and then feeding you with manna... to teach you that man does not live on bread alone but on every word that comes from the mouth of God.', note: 'Moses points past the manna to the true food — the Word of God.' },
      { ref: 'Psalm 78:24-25', text: 'He rained down manna for the people to eat, he gave them the grain of heaven. Human beings ate the bread of angels.', note: 'The Psalms call manna "the bread of angels" — heavenly bread.' },
      { ref: 'John 6:35', text: 'Then Jesus declared, "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."', note: 'Jesus claims to be what the manna only pointed to.' },
      { ref: 'John 6:51', text: '"I am the living bread that came down from heaven. Whoever eats this bread will live forever. This bread is my flesh, which I will give for the life of the world."', note: 'The manna lasted one day. This bread gives eternal life.' },
      { ref: '1 Corinthians 11:26', text: 'For whenever you eat this bread and drink this cup, you proclaim the Lord\'s death until he comes.', note: 'The bread of communion — we eat and remember until He comes again.' }
    ]
  },
  {
    id: 'water',
    title: 'The Living Water',
    icon: 'fas fa-droplet',
    color: '#3498db',
    tagline: 'From the rock in the desert to rivers flowing from the throne',
    summary: 'Water is life — and God has always supplied it miraculously. But every physical spring in Scripture is pointing to a deeper thirst only God Himself can satisfy. Jesus doesn\'t just offer water. He is the source.',
    verses: [
      { ref: 'Exodus 17:6', text: '"Strike the rock, and water will come out of it for the people to drink." So Moses did this in the sight of the elders of Israel.', note: 'Water from a rock — life from an unlikely, struck source.' },
      { ref: 'Psalm 42:1-2', text: 'As the deer pants for streams of water, so my soul pants for you, my God. My soul thirsts for God, for the living God.', note: 'David turns physical thirst into a metaphor for spiritual longing.' },
      { ref: 'Isaiah 55:1', text: '"Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat!"', note: 'The invitation is free — water without price, for the desperate.' },
      { ref: 'Jeremiah 2:13', text: '"My people have committed two sins: They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water."', note: 'God diagnoses the human problem — we leave the source for substitutes.' },
      { ref: 'John 4:13-14', text: 'Jesus answered, "Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst."', note: 'Jesus at the well — every other water leaves you wanting more.' },
      { ref: 'Revelation 22:1', text: 'Then the angel showed me the river of the water of life, as clear as crystal, flowing from the throne of God and of the Lamb.', note: 'The final image — a river, eternal, flowing from the Lamb\'s own throne.' }
    ]
  },
  {
    id: 'light',
    title: 'Light & Darkness',
    icon: 'fas fa-sun',
    color: '#f1c40f',
    tagline: 'From the first words of creation to the city that needs no sun',
    summary: 'God\'s first act was to create light. His last act is to become it. Between those two moments, light and darkness wage war across every page of Scripture — and the outcome was decided at the cross.',
    verses: [
      { ref: 'Genesis 1:3', text: 'And God said, "Let there be light," and there was light.', note: 'Before anything else, God creates light — His first creative word.' },
      { ref: 'Psalm 27:1', text: 'The LORD is my light and my salvation — whom shall I fear?', note: 'David discovers God is not just the maker of light — He is the light.' },
      { ref: 'Isaiah 9:2', text: 'The people walking in darkness have seen a great light; on those living in the land of deep darkness a light has dawned.', note: '700 years before Bethlehem — a great light is coming.' },
      { ref: 'John 1:4-5', text: 'In him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it.', note: 'John links the Word with light — same language as Genesis 1.' },
      { ref: 'John 8:12', text: 'When Jesus spoke again to the people, he said, "I am the light of the world. Whoever follows me will never walk in darkness."', note: 'Jesus makes the claim directly — He is what all the metaphors pointed to.' },
      { ref: 'Revelation 21:23', text: 'The city does not need the sun or the moon to shine on it, for the glory of God gives it light, and the Lamb is its lamp.', note: 'The final city has no sun — God Himself is the light.' }
    ]
  },
  {
    id: 'covenant',
    title: 'The Covenant',
    icon: 'fas fa-handshake',
    color: '#9b59b6',
    tagline: 'From the rainbow to the blood-sealed promise of eternity',
    summary: 'God is a covenant-making God. Every covenant in Scripture is a step in one overarching story — God binding Himself to a people, escalating the intimacy, until the final covenant written not on stone but on hearts, sealed not with animal blood but with His own.',
    verses: [
      { ref: 'Genesis 9:13', text: '"I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."', note: 'God\'s first formal covenant — creation preserved, a promise in colour.' },
      { ref: 'Genesis 17:7', text: '"I will establish my covenant as an everlasting covenant between me and you and your descendants after you for the generations to come, to be your God."', note: 'The Abrahamic covenant — a people, a land, a promise of blessing for all nations.' },
      { ref: 'Exodus 24:8', text: 'Moses then took the blood, sprinkled it on the people and said, "This is the blood of the covenant that the LORD has made with you in accordance with all these words."', note: 'The Mosaic covenant sealed with blood at Sinai.' },
      { ref: 'Jeremiah 31:33', text: '"This is the covenant I will make with the people of Israel after that time," declares the LORD. "I will put my law in their minds and write it on their hearts."', note: 'God promises a new covenant — internal, intimate, heart-level.' },
      { ref: 'Luke 22:20', text: 'In the same way, after the supper he took the cup, saying, "This cup is the new covenant in my blood, which is poured out for you."', note: 'Jesus fulfils Jeremiah 31 — the new covenant sealed at the Last Supper.' },
      { ref: 'Hebrews 8:6', text: 'But in fact the ministry Jesus has received is as superior to theirs as the covenant of which he is mediator is superior to the old one, since the new covenant is established on better promises.', note: 'The new covenant is the final word — better mediator, better promises.' }
    ]
  },
  {
    id: 'shepherd',
    title: 'The Shepherd',
    icon: 'fas fa-person-walking',
    color: '#2ecc71',
    tagline: 'From Psalm 23 to the Good Shepherd who lays down His life',
    summary: 'God described Himself as a shepherd long before Jesus arrived. The image was never accidental — Israel\'s greatest leaders were shepherds, God\'s care was always framed as shepherding, until the true Shepherd came and proved His love by dying for the sheep.',
    verses: [
      { ref: 'Genesis 48:15', text: 'Then he blessed Joseph and said, "May the God before whom my fathers Abraham and Isaac walked — the God who has been my shepherd all my life to this day..."', note: 'Jacob on his deathbed calls God his shepherd — the oldest recorded use.' },
      { ref: 'Psalm 23:1', text: 'The LORD is my shepherd, I lack nothing.', note: 'David, himself a shepherd, understands God\'s shepherding at the deepest level.' },
      { ref: 'Isaiah 40:11', text: 'He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young.', note: 'Isaiah paints the coming shepherd with tenderness and strength.' },
      { ref: 'Ezekiel 34:15-16', text: '"I myself will tend my sheep and make them lie down," declares the Sovereign LORD. "I will search for the lost and bring back the strays."', note: 'God rebukes false shepherds and promises to shepherd Israel Himself.' },
      { ref: 'John 10:11', text: '"I am the good shepherd. The good shepherd lays down his life for the sheep."', note: 'Jesus steps into the role God promised — and surpasses every expectation.' },
      { ref: 'Revelation 7:17', text: '"For the Lamb at the centre of the throne will be their shepherd; he will lead them to springs of living water."', note: 'The Lamb becomes the Shepherd — the circle closes in eternity.' }
    ]
  },
  {
    id: 'blood',
    title: 'The Blood',
    icon: 'fas fa-heart-pulse',
    color: '#c0392b',
    tagline: 'From the first death in Eden to the blood that speaks a better word',
    summary: 'Blood runs through the entire Bible — from the first animal killed to clothe Adam and Eve, to the blood of every Passover lamb, to the blood Abel\'s cried from the ground, to the blood poured out at Calvary. It is the currency of redemption.',
    verses: [
      { ref: 'Genesis 3:21', text: 'The LORD God made garments of skin for Adam and his wife and clothed them.', note: 'To cover their shame, an animal died. The first blood shed in redemption.' },
      { ref: 'Genesis 4:10', text: '"What have you done? Listen! Your brother\'s blood cries out to me from the ground."', note: 'Abel\'s blood cried for justice. The blood of Jesus cries for mercy.' },
      { ref: 'Leviticus 17:11', text: '"For the life of a creature is in the blood, and I have given it to you to make atonement for yourselves on the altar; it is the blood that makes atonement for one\'s life."', note: 'God establishes the principle — blood is the price of atonement.' },
      { ref: 'Hebrews 9:22', text: 'In fact, the law requires that nearly everything be cleansed with blood, and without the shedding of blood there is no forgiveness.', note: 'The whole sacrificial system pointed to this non-negotiable principle.' },
      { ref: 'Hebrews 12:24', text: '...to Jesus the mediator of a new covenant, and to the sprinkled blood that speaks a better word than the blood of Abel.', note: 'Abel\'s blood cried for vengeance. Jesus\' blood cries for forgiveness.' },
      { ref: 'Revelation 1:5', text: '...To him who loves us and has freed us from our sins by his blood, and has made us to be a kingdom and priests to serve his God and Father — to him be glory and power for ever and ever!', note: 'The blood that sets free, reigns, and is praised into eternity.' }
    ]
  },
  {
    id: 'temple',
    title: 'The Temple',
    icon: 'fas fa-building-columns',
    color: '#e67e22',
    tagline: 'From the tent in the wilderness to the body of every believer',
    summary: 'God\'s desire from the beginning was to dwell with His people. The tabernacle, the temple in Jerusalem, the body of Jesus, and now the church — each is a step in God\'s journey toward the ultimate goal: His full, unmediated presence among those He loves.',
    verses: [
      { ref: 'Exodus 25:8', text: '"Then have them make a sanctuary for me, and I will dwell among them."', note: 'The tabernacle\'s purpose — not architecture, but presence. God moving in.' },
      { ref: '1 Kings 8:27', text: '"But will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!"', note: 'Solomon at the dedication — already knowing a building cannot contain God.' },
      { ref: 'Ezekiel 43:7', text: '"Son of man, this is the place of my throne and the place for the soles of my feet. This is where I will live among the Israelites forever."', note: 'Ezekiel\'s vision of a restored temple — God\'s permanence promised.' },
      { ref: 'John 2:19-21', text: 'Jesus answered them, "Destroy this temple, and I will raise it again in three days." But the temple he had spoken of was his body.', note: 'Jesus Himself is the temple — God\'s full presence in a human body.' },
      { ref: '1 Corinthians 6:19', text: 'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?', note: 'Now every believer is the dwelling place of God\'s Spirit.' },
      { ref: 'Revelation 21:22', text: 'I did not see a temple in the city, because the Lord God Almighty and the Lamb are its temple.', note: 'In eternity there\'s no temple — because God Himself fills everything.' }
    ]
  },
  {
    id: 'resurrection',
    title: 'Resurrection',
    icon: 'fas fa-sun-plant-wilt',
    color: '#2ecc71',
    tagline: 'From dry bones in a valley to an empty tomb to a world made new',
    summary: 'Resurrection is not a New Testament invention. It was always the trajectory of a God who creates life from nothing, who raises nations from the dead, who promised that death would not have the final word. Easter is the proof that the whole story was heading here.',
    verses: [
      { ref: 'Job 19:25-26', text: '"I know that my redeemer lives, and that in the end he will stand on the earth. And after my skin has been destroyed, yet in my flesh I will see God."', note: 'Job, in his suffering, articulates the resurrection hope before Moses wrote the Law.' },
      { ref: 'Ezekiel 37:5', text: '"This is what the Sovereign LORD says to these bones: I will make breath enter you, and you will come to life."', note: 'The valley of dry bones — God specialises in breathing life into what is dead.' },
      { ref: 'Daniel 12:2', text: '"Multitudes who sleep in the dust of the earth will awake: some to everlasting life, others to shame and everlasting contempt."', note: 'Daniel\'s explicit resurrection prophecy — individual bodies rising.' },
      { ref: 'John 11:25', text: 'Jesus said to her, "I am the resurrection and the life. The one who believes in me will live, even though they die."', note: 'Jesus doesn\'t say He will give resurrection. He says He is it.' },
      { ref: 'Acts 2:24', text: '"But God raised him from the dead, freeing him from the agony of death, because it was impossible for death to keep its hold on him."', note: 'Peter\'s proclamation — death tried and failed.' },
      { ref: '1 Corinthians 15:20', text: 'But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep.', note: 'His resurrection is a guarantee — the firstfruit of a whole harvest still coming.' }
    ]
  },
  {
    id: 'spirit',
    title: 'The Holy Spirit',
    icon: 'fas fa-wind',
    color: '#3498db',
    tagline: 'From hovering over the waters to dwelling inside every believer',
    summary: 'The Spirit was present before creation, moved through every prophet and king in the Old Testament, descended on Jesus at His baptism, and then — in the greatest reversal — moved inside those who believe. What was once selective is now available to all.',
    verses: [
      { ref: 'Genesis 1:2', text: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.', note: 'Before light, before life — the Spirit is already present and active.' },
      { ref: 'Numbers 11:29', text: 'But Moses replied, "Are you jealous for my sake? I wish that all the LORD\'s people were prophets and that the LORD would put his Spirit on them!"', note: 'Moses longs for what Pentecost would eventually fulfil.' },
      { ref: 'Joel 2:28', text: '"And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions."', note: 'Joel\'s promise — the Spirit for all, not just leaders. 800 years before Pentecost.' },
      { ref: 'John 14:16-17', text: '"And I will ask the Father, and he will give you another advocate to help you and be with you forever — the Spirit of truth."', note: 'Jesus promises the transition — He is leaving, but Another is coming.' },
      { ref: 'Acts 2:4', text: 'All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.', note: 'Pentecost — Joel 2:28 fulfilled, Moses\' prayer answered.' },
      { ref: 'Romans 8:11', text: 'And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies because of his Spirit who lives in you.', note: 'The same Spirit that raised Jesus now lives in every believer.' }
    ]
  },
  {
    id: 'word',
    title: 'The Living Word',
    icon: 'fas fa-book',
    color: '#9b59b6',
    tagline: 'From "In the beginning God said" to "the Word became flesh"',
    summary: 'God has always spoken things into existence. His Word is not merely communication — it is creative power, it is a person, it is the very substance of reality. And when the Word became flesh, it was not the first time God\'s Word entered the world. It was the moment it became personal.',
    verses: [
      { ref: 'Genesis 1:3', text: 'And God said, "Let there be light," and there was light.', note: 'Creation begins with speech — God\'s Word is the engine of all existence.' },
      { ref: 'Psalm 33:6', text: 'By the word of the LORD the heavens were made, their starry host by the breath of his mouth.', note: 'David sees it — the universe itself is held together by God\'s spoken Word.' },
      { ref: 'Psalm 119:89', text: 'Your word, LORD, is eternal; it stands firm in the heavens.', note: 'The Word isn\'t temporary — it outlasts creation itself.' },
      { ref: 'Isaiah 55:11', text: '"So is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it."', note: 'God\'s Word is not advice. It is mission-targeted power.' },
      { ref: 'John 1:14', text: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.', note: 'The eternal Word enters history in a body — infinite becomes intimate.' },
      { ref: 'Hebrews 4:12', text: 'For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.', note: 'The written Word carries the same creative power as the spoken one.' }
    ]
  },
  {
    id: 'priest',
    title: 'The High Priest',
    icon: 'fas fa-cross',
    color: '#f39c12',
    tagline: 'From Aaron\'s linen ephod to Jesus who intercedes forever',
    summary: 'Israel needed someone to stand between them and a holy God. The high priest was that bridge — but he himself was imperfect, mortal, and had to atone for his own sins first. Jesus replaces the whole institution with one perfect, permanent, eternal act.',
    verses: [
      { ref: 'Exodus 28:1', text: '"Have Aaron your brother brought to you from among the Israelites, along with his sons Nadab and Abihu, Eleazar and Ithamar, so they may serve me as priests."', note: 'The first high priest appointed — a human mediator between God and Israel.' },
      { ref: 'Leviticus 16:15', text: '"He shall then slaughter the goat for the sin offering for the people and take its blood behind the curtain and do with it as he did with the bull\'s blood."', note: 'The Day of Atonement — the high priest enters God\'s presence once a year.' },
      { ref: 'Psalm 110:4', text: '"You are a priest forever, in the order of Melchizedek."', note: 'David prophecies a coming priest who will never be replaced — eternal, royal.' },
      { ref: 'Hebrews 4:14-15', text: 'Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess. For we do not have a high priest who is unable to empathise with our weaknesses.', note: 'Jesus replaces Aaron — but with perfect empathy, not just perfect sacrifice.' },
      { ref: 'Hebrews 7:27', text: 'Unlike the other high priests, he does not need to offer sacrifices day after day, first for his own sins, and then for the sins of the people. He sacrificed for their sins once for all when he offered himself.', note: 'Once. For all. He was priest and sacrifice simultaneously.' },
      { ref: 'Hebrews 7:25', text: 'Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them.', note: 'He did not retire after the cross. He still intercedes — right now.' }
    ]
  },
  {
    id: 'king',
    title: 'The King',
    icon: 'fas fa-crown',
    color: '#f1c40f',
    tagline: 'From Saul\'s failure to the King who reigns on David\'s throne forever',
    summary: 'Israel wanted a king like the nations. God gave them one — and it failed immediately. Then He made a promise through David that no political dynasty could ever fulfil. Only one King could sit on David\'s throne forever. And He came, not on a war horse, but on a donkey.',
    verses: [
      { ref: '1 Samuel 8:7', text: 'And the LORD told him: "Listen to all that the people are saying to you; it is not you they have rejected, but they have rejected me as their king."', note: 'The demand for a human king is a rejection of the divine King.' },
      { ref: '2 Samuel 7:12-13', text: '"When your days are over and you rest with your ancestors, I will raise up your offspring to succeed you... I will establish the throne of his kingdom forever."', note: 'The Davidic covenant — an eternal throne, an everlasting kingdom.' },
      { ref: 'Psalm 2:6', text: '"I have installed my king on Zion, my holy mountain."', note: 'God declares His own King — not elected, but appointed from eternity.' },
      { ref: 'Isaiah 9:6-7', text: '"For to us a child is born, to us a son is given... He will reign on David\'s throne and over his kingdom, establishing and upholding it with justice and righteousness from that time on and forever."', note: 'Isaiah sees the child-king whose government will never end.' },
      { ref: 'Luke 1:32-33', text: '"He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, and he will reign over Jacob\'s descendants forever; his kingdom will never end."', note: 'Gabriel to Mary — 2 Samuel 7 is being fulfilled in her womb.' },
      { ref: 'Revelation 19:16', text: 'On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.', note: 'The final title — every other throne bows to His.' }
    ]
  },
  {
    id: 'faith',
    title: 'The Way of Faith',
    icon: 'fas fa-compass',
    color: '#3498db',
    tagline: 'From Abraham\'s journey into the unknown to the cloud of witnesses',
    summary: 'Faith is not a New Testament invention. It is the oldest form of relationship with God — predating the Law, predating circumcision, predating every religious institution. Abraham walked by it. The heroes of the Old Testament lived by it. And Jesus perfects it.',
    verses: [
      { ref: 'Genesis 15:6', text: 'Abram believed the LORD, and he credited it to him as righteousness.', note: 'The first and most foundational faith statement — belief credited as righteousness.' },
      { ref: 'Habakkuk 2:4', text: '"See, the enemy is puffed up; his desires are not upright — but the righteous person will live by his faithfulness."', note: 'The prophet declares it — the righteous shall live by faith. Paul quotes this three times.' },
      { ref: 'Romans 1:17', text: 'For in the gospel the righteousness of God is revealed — a righteousness that is by faith from first to last, just as it is written: "The righteous will live by faith."', note: 'Paul quotes Habakkuk — faith to faith, beginning to end.' },
      { ref: 'Galatians 3:8', text: 'Scripture foresaw that God would justify the Gentiles by faith, and announced the gospel in advance to Abraham: "All nations will be blessed through you."', note: 'The gospel was preached to Abraham — 2,000 years before the cross.' },
      { ref: 'Hebrews 11:1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.', note: 'The definition comes after 39 chapters of people living it out.' },
      { ref: 'Hebrews 12:2', text: '...fixing our eyes on Jesus, the pioneer and perfecter of faith...', note: 'He is not just an object of faith. He is the One who started it and will complete it.' }
    ]
  },
  {
    id: 'grace',
    title: 'Grace',
    icon: 'fas fa-hand-holding-heart',
    color: '#9b59b6',
    tagline: 'From Noah finding favour to "where sin increased, grace increased all the more"',
    summary: 'Grace is older than the church and older than the cross. The first person who experienced it was Noah — undeserving, saved while the world drowned. From that moment forward, every unmerited rescue in Scripture is grace wearing different clothing.',
    verses: [
      { ref: 'Genesis 6:8', text: 'But Noah found favour in the eyes of the LORD.', note: 'The first recorded act of grace — unmerited, unearned, life-saving.' },
      { ref: 'Exodus 33:19', text: '"And the LORD said, "I will cause all my goodness to pass in front of you, and I will proclaim my name, the LORD, in your presence. I will have mercy on whom I will have mercy, and I will have compassion on whom I will have compassion."', note: 'God defines Himself by His grace — it is His choice, not humanity\'s merit.' },
      { ref: 'Psalm 103:10-11', text: 'He does not treat us as our sins deserve or repay us according to our iniquities. For as high as the heavens are above the earth, so great is his love for those who fear him.', note: 'David celebrates what he doesn\'t deserve — that is grace.' },
      { ref: 'John 1:17', text: 'For the law was given through Moses; grace and truth came through Jesus Christ.', note: 'The transition — law came through a mediator, grace came in person.' },
      { ref: 'Ephesians 2:8-9', text: 'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.', note: 'The clearest statement — grace is entirely gift, not contribution.' },
      { ref: 'Romans 5:20', text: 'The law was brought in so that the trespass might increase. But where sin increased, grace increased all the more.', note: 'Grace is not overwhelmed by sin. It always has the final, larger word.' }
    ]
  },
  {
    id: 'exodus',
    title: 'The Exodus',
    icon: 'fas fa-route',
    color: '#e74c3c',
    tagline: 'From Egyptian slavery to freedom — a pattern that echoes through eternity',
    summary: 'The Exodus is not just Israel\'s history. It is the central metaphor of all salvation. Every time God saves anyone from anything, He is doing what He did in Egypt — seeing the suffering, hearing the cry, coming down, and bringing them out.',
    verses: [
      { ref: 'Exodus 3:7-8', text: '"I have indeed seen the misery of my people in Egypt. I have heard them crying out... So I have come down to rescue them."', note: 'God\'s pattern — He sees, He hears, He comes, He rescues.' },
      { ref: 'Exodus 14:13', text: 'Moses answered the people, "Do not be afraid. Stand firm and you will see the deliverance the LORD will bring you today."', note: 'At the Red Sea — the impossible crossing, the enemy defeated.' },
      { ref: 'Isaiah 43:16-19', text: '"This is what the LORD says — he who made a way through the sea... Forget the former things; do not dwell on the past. See, I am doing a new thing!"', note: 'Isaiah tells Israel — the first Exodus previews a greater one still coming.' },
      { ref: 'Luke 9:31', text: 'They appeared in glorious splendour, talking with Jesus. And they spoke about his departure, which he was about to bring to fulfil at Jerusalem.', note: 'The word "departure" is literally "Exodus" in Greek. Jesus\' death is an Exodus.' },
      { ref: 'Hebrews 11:27', text: 'By faith he left Egypt, not fearing the king\'s anger; he persevered because he saw him who is invisible.', note: 'Moses\' faith was the engine. He saw the unseen King.' },
      { ref: 'Revelation 15:3', text: 'And sang the song of God\'s servant Moses and of the Lamb: "Great and marvellous are your deeds, Lord God Almighty."', note: 'In heaven, they still sing the Song of Moses — the Exodus never stops being celebrated.' }
    ]
  },
  {
    id: 'forgiveness',
    title: 'Forgiveness',
    icon: 'fas fa-heart-circle-check',
    color: '#2ecc71',
    tagline: 'From the scapegoat in the wilderness to the cross outside the city',
    summary: 'Long before Jesus said "your sins are forgiven," God had been building a theology of forgiveness into every sacrifice, every Day of Atonement, every restored relationship in the Old Testament. The cross is the culmination — not a new idea but the fullness of an ancient promise.',
    verses: [
      { ref: 'Leviticus 16:21-22', text: '"He is to lay both hands on the head of the live goat and confess over it all the wickedness and rebellion of the Israelites... and send the goat away into the wilderness."', note: 'The scapegoat — sin transferred and carried away. A picture of substitution.' },
      { ref: 'Psalm 103:12', text: 'As far as the east is from the west, so far has he removed our transgressions from us.', note: 'David knows forgiveness is total — an infinite, directional removal.' },
      { ref: 'Isaiah 43:25', text: '"I, even I, am he who blots out your transgressions, for my own sake, and remembers your sins no more."', note: 'God\'s own declaration — total amnesia about forgiven sin.' },
      { ref: 'Micah 7:19', text: 'You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.', note: 'Micah\'s picture — sins thrown into the deepest place, unreachable.' },
      { ref: 'Colossians 2:14', text: '...having cancelled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross.', note: 'The debt cancelled — the indictment nailed where Jesus was nailed.' },
      { ref: 'Hebrews 10:17', text: '"Their sins and lawless acts I will remember no more."', note: 'God quotes Jeremiah 31 — the New Covenant means God forgets what was forgiven.' }
    ]
  },
  {
    id: 'wisdom',
    title: 'Wisdom',
    icon: 'fas fa-lightbulb',
    color: '#f39c12',
    tagline: 'From "The fear of the Lord is the beginning" to Christ as our wisdom',
    summary: 'Wisdom in the Bible is never just intelligence. It is a way of seeing reality that is aligned with God\'s own perspective. And in a stunning turn, Paul declares that wisdom is not a quality to be attained — it is a person to be known. His name is Jesus.',
    verses: [
      { ref: 'Proverbs 1:7', text: 'The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.', note: 'Wisdom starts with a right relationship to God — not information.' },
      { ref: 'Proverbs 8:22-23', text: '"The LORD brought me forth as the first of his works, before his deeds of old; I was formed long ages ago, at the very beginning, when the world came to be."', note: 'Wisdom personified — speaking before creation, present at the beginning.' },
      { ref: 'Job 28:28', text: '"And he said to the human race, \'The fear of the Lord — that is wisdom, and to shun evil is understanding.\'"', note: 'Job\'s conclusion after suffering — wisdom and reverence are inseparable.' },
      { ref: 'Matthew 12:42', text: '"The Queen of the South will rise at the judgment with this generation and condemn it; for she came from the ends of the earth to listen to Solomon\'s wisdom, and now something greater than Solomon is here."', note: 'Jesus claims to be greater than Solomon — the wisest king of Israel.' },
      { ref: '1 Corinthians 1:24', text: '...but to those whom God has called, both Jews and Greeks, Christ the power of God and the wisdom of God.', note: 'Christ doesn\'t just have wisdom. Paul says He is the wisdom of God.' },
      { ref: 'Colossians 2:3', text: '...in whom are hidden all the treasures of wisdom and knowledge.', note: 'Every answer, every insight, every truth — hidden in Christ.' }
    ]
  },
  {
    id: 'suffering',
    title: 'Suffering & Glory',
    icon: 'fas fa-fire',
    color: '#e74c3c',
    tagline: 'From Job\'s ash heap to the glory that outweighs it all',
    summary: 'The Bible never promises that following God means a comfortable life. But it insists, relentlessly, that suffering is not the end of the story. There is a pattern — the cross before the crown, the valley before the summit, the night before the dawn.',
    verses: [
      { ref: 'Job 23:10', text: '"But he knows the way that I take; when he has tested me, I will come forth as gold."', note: 'Job, in the worst suffering in Scripture, affirms that God is still working.' },
      { ref: 'Psalm 22:1', text: '"My God, my God, why have you forsaken me? Why are you so far from saving me?"', note: 'David\'s cry becomes Jesus\' cry — desolation precedes vindication.' },
      { ref: 'Isaiah 53:3', text: 'He was despised and rejected by mankind, a man of suffering, and familiar with pain.', note: 'The Messiah is not shielded from pain. He enters it deliberately.' },
      { ref: 'Romans 5:3-4', text: '...we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.', note: 'Paul reframes suffering — not as meaningless, but as a production line for hope.' },
      { ref: '2 Corinthians 4:17', text: 'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.', note: 'The scale is staggering — all suffering is light and momentary compared to what\'s coming.' },
      { ref: 'Romans 8:18', text: 'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.', note: 'The comparison breaks down. The glory wins by so much it cannot be fairly calculated.' }
    ]
  },
  {
    id: 'prayer',
    title: 'Prayer',
    icon: 'fas fa-hands-praying',
    color: '#9b59b6',
    tagline: 'From Abraham\'s first intercession to Jesus who always intercedes',
    summary: 'Prayer is the most ancient form of human communication with God. Long before the Law was given, before temples were built, before any religious system existed, people were simply talking to God. And the greatest prayer in history was not spoken — it was lived.',
    verses: [
      { ref: 'Genesis 18:23', text: 'Then Abraham approached him and said: "Will you sweep away the righteous with the wicked?"', note: 'The first recorded intercession — Abraham arguing for Sodom\'s sake before God.' },
      { ref: 'Exodus 32:32', text: '"But now, please forgive their sin — but if not, then blot me out of the book you have written."', note: 'Moses intercedes so passionately he offers his own life for Israel.' },
      { ref: 'Psalm 18:6', text: 'In my distress I called to the LORD; I cried to my God for help. From his temple he heard my voice; my cry came before him, into his ears.', note: 'David\'s testimony — prayer reaches God\'s ears every single time.' },
      { ref: 'Daniel 6:10', text: '...he got down on his knees and prayed, giving thanks to his God, just as he had done before. Three times a day he prayed.', note: 'Daniel prays at death\'s risk — prayer was more essential than survival.' },
      { ref: 'Matthew 6:9', text: '"This, then, is how you should pray: Our Father in heaven, hallowed be your name..."', note: 'Jesus doesn\'t just teach prayer — He redefines how to approach God. As Father.' },
      { ref: 'Romans 8:34', text: 'Who then is the one who condemns? No one. Christ Jesus who died — more than that, who was raised to life — is at the right hand of God and is also interceding for us.', note: 'Right now — Jesus is praying for you. Prayer on your behalf, from the throne.' }
    ]
  },
  {
    id: 'new-creation',
    title: 'The New Creation',
    icon: 'fas fa-earth-africa',
    color: '#2ecc71',
    tagline: 'From "In the beginning" to "I am making everything new"',
    summary: 'Genesis begins with creation. Revelation ends with a new creation. But the new creation did not begin at Revelation — it began the moment Jesus rose from the dead. The resurrection was the first act of the new order breaking into the old one.',
    verses: [
      { ref: 'Genesis 1:1', text: 'In the beginning God created the heavens and the earth.', note: 'The original creation — good, but not yet the final one.' },
      { ref: 'Isaiah 65:17', text: '"See, I will create new heavens and a new earth. The former things will not be remembered, nor will they come to mind."', note: 'Isaiah promises it — the original was a draft for the masterpiece to come.' },
      { ref: '2 Corinthians 5:17', text: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!', note: 'The new creation starts now — in every person who is in Christ.' },
      { ref: 'Galatians 6:15', text: 'Neither circumcision nor uncircumcision means anything; what counts is the new creation.', note: 'Paul reframes everything — the only category that ultimately matters is new creation.' },
      { ref: 'Revelation 21:1', text: 'Then I saw "a new heaven and a new earth," for the first heaven and the first earth had passed away, and there was no longer any sea.', note: 'Isaiah\'s promise fulfilled — not the renovation of the old, but a brand new one.' },
      { ref: 'Revelation 21:5', text: 'He who was seated on the throne said, "I am making everything new!"', note: 'God\'s creative word rings again — first "let there be," now "I am making new."' }
    ]
  },
  {
    id: 'bridegroom',
    title: 'The Bridegroom',
    icon: 'fas fa-ring',
    color: '#e91e8c',
    tagline: 'From the Song of Solomon to the Wedding Supper of the Lamb',
    summary: 'The most intimate metaphor God uses to describe His relationship with His people is not master and servant, not king and subject — it is husband and wife. God pursues His people like a lover pursues his beloved, and the whole story ends with a wedding.',
    verses: [
      { ref: 'Song of Solomon 2:16', text: 'My beloved is mine and I am his; he browses among the lilies.', note: 'The language of mutual possession — romantic, intimate, exclusive.' },
      { ref: 'Isaiah 62:5', text: '"As a bridegroom rejoices over his bride, so will your God rejoice over you."', note: 'God\'s emotion toward Israel is compared to a groom on his wedding day.' },
      { ref: 'Hosea 2:19-20', text: '"I will betroth you to me forever; I will betroth you in righteousness and justice, in love and compassion."', note: 'Even after Israel\'s unfaithfulness, God proposes again — a new covenant betrothal.' },
      { ref: 'John 3:29', text: 'The friend who attends the bridegroom waits and listens for him, and is full of joy when he hears the bridegroom\'s voice.', note: 'John the Baptist identifies Jesus as the bridegroom — himself as only the best man.' },
      { ref: 'Ephesians 5:25-27', text: 'Husbands, love your wives, just as Christ loved the church and gave himself up for her to make her holy, cleansing her by the washing with water through the word.', note: 'Marriage exists to display the Christ-church relationship. Not the reverse.' },
      { ref: 'Revelation 19:7', text: '"Let us rejoice and be glad and give him glory! For the wedding of the Lamb has come, and his bride has made herself ready."', note: 'The whole story ends with a wedding feast. God\'s romance with humanity complete.' }
    ]
  },
  {
    id: 'servant',
    title: 'The Servant',
    icon: 'fas fa-hands',
    color: '#3498db',
    tagline: 'From Isaiah\'s servant songs to the Son of Man who came to serve',
    summary: 'Isaiah wrote four "servant songs" describing a mysterious figure who would bear the sins of many, suffer in silence, and through his wounds bring healing to nations. Seven hundred years later, Jesus picked up a towel and washed dirty feet — and it all made sense.',
    verses: [
      { ref: 'Isaiah 42:1', text: '"Here is my servant, whom I uphold, my chosen one in whom I delight; I will put my Spirit on him, and he will bring justice to the nations."', note: 'The first servant song — the Spirit-anointed servant who serves the whole world.' },
      { ref: 'Isaiah 49:6', text: '"It is too small a thing for you to be my servant to restore the tribes of Jacob and bring back those I have kept of Israel. I will also make you a light for the Gentiles."', note: 'The servant\'s mission is bigger than Israel — it includes every nation.' },
      { ref: 'Isaiah 52:13', text: '"See, my servant will act wisely; he will be raised and lifted up and highly exalted."', note: 'The servant will be exalted — but the path to that exaltation is through suffering.' },
      { ref: 'Matthew 12:18', text: '"Here is my servant whom I have chosen, the one I love, in whom I delight; I will put my Spirit on him, and he will proclaim justice to the nations."', note: 'Matthew quotes Isaiah 42 — confirming Jesus is the servant described.' },
      { ref: 'Mark 10:45', text: '"For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many."', note: 'Jesus defines His own mission using the servant framework.' },
      { ref: 'John 13:4-5', text: '...he got up from the meal, took off his outer clothing, and wrapped a towel around his waist. After that, he poured water into a basin and began to wash his disciples\' feet.', note: 'The King becomes the servant — and in doing so, defines what greatness looks like.' }
    ]
  },
  {
    id: 'tree',
    title: 'The Tree of Life',
    icon: 'fas fa-tree',
    color: '#2ecc71',
    tagline: 'From the Garden of Eden to the city where the tree grows again',
    summary: 'The tree of life is the bookend of the whole Bible. It appears in the opening pages of Genesis, then disappears when humanity is exiled. But Revelation closes with the same tree — back, bearing twelve kinds of fruit, available to all who enter the city of God.',
    verses: [
      { ref: 'Genesis 2:9', text: 'The LORD God made all kinds of trees grow out of the ground — trees that were pleasing to the eye and good for food. In the middle of the garden were the tree of life and the tree of the knowledge of good and evil.', note: 'The original gift — the tree of life, freely available in the garden.' },
      { ref: 'Genesis 3:24', text: 'After he drove the man out, he placed on the east side of the Garden of Eden cherubim and a flaming sword flashing back and forth to guard the way to the tree of life.', note: 'Access blocked by sin — the tree becomes unreachable.' },
      { ref: 'Proverbs 3:18', text: 'She is a tree of life to those who take hold of her; those who hold her fast will be blessed.', note: 'Wisdom is described as the tree of life — a hint that access is still available.' },
      { ref: 'Proverbs 11:30', text: 'The fruit of the righteous is a tree of life, and the one who is wise saves lives.', note: 'Righteousness produces the tree of life — it grows in the lives of God\'s people.' },
      { ref: '1 Peter 2:24', text: '"He himself bore our sins" in his body on the tree, so that we might die to sins and live for righteousness; "by his wounds you have been healed."', note: 'The cross is called a "tree" — the death-tree becomes the life-tree.' },
      { ref: 'Revelation 22:2', text: 'On each side of the river stood the tree of life, bearing twelve crops of fruit, yielding its fruit every month. And the leaves of the tree are for the healing of the nations.', note: 'The exile is over. The tree is back — and now it heals the whole world.' }
    ]
  },
  {
    id: 'rock',
    title: 'The Rock',
    icon: 'fas fa-mountain',
    color: '#7f8c8d',
    tagline: 'From the struck rock in the wilderness to the cornerstone the builders rejected',
    summary: 'Throughout Scripture, God is called a rock — solid, immovable, a refuge when everything else shifts. The image reaches its fullest meaning when the Rock is struck for us, and water — life — pours out. Paul says that Rock was Christ.',
    verses: [
      { ref: 'Exodus 17:6', text: '"I will stand there before you by the rock at Horeb. Strike the rock, and water will come out of it for the people to drink." So Moses did this in the sight of the elders of Israel.', note: 'The rock struck, life released — the deepest picture of the cross.' },
      { ref: 'Psalm 18:2', text: 'The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.', note: 'David\'s cascade of rock metaphors — God is the one unmovable reality.' },
      { ref: 'Isaiah 28:16', text: '"See, I lay a stone in Zion, a tested stone, a precious cornerstone for a sure foundation; the one who relies on it will never be stricken with panic."', note: 'God promises a cornerstone — the stone the whole building rests on.' },
      { ref: '1 Corinthians 10:4', text: '...and drank from the spiritual rock that accompanied them, and that rock was Christ.', note: 'Paul makes it explicit — Moses\' rock was always Christ.' },
      { ref: 'Acts 4:11', text: '"Jesus is \'the stone you builders rejected, which has become the cornerstone.\'"', note: 'Peter quotes Psalm 118 — the rejected stone is the foundation of everything.' },
      { ref: '1 Peter 2:4', text: 'As you come to him, the living Stone — rejected by humans but chosen by God and precious to him.', note: 'The stone is alive — and those who come to Him become living stones too.' }
    ]
  },
  {
    id: 'remnant',
    title: 'The Remnant',
    icon: 'fas fa-seedling',
    color: '#e74c3c',
    tagline: 'From Elijah\'s 7,000 to the remnant chosen by grace',
    summary: 'Again and again in Scripture, God works through a small, faithful remnant when the majority has turned away. It is never about numbers. It is about faithfulness. And the smallest remnant in history — twelve disciples — turned the world upside down.',
    verses: [
      { ref: '1 Kings 19:18', text: '"Yet I reserve seven thousand in Israel — all whose knees have not bowed down to Baal and whose mouths have not kissed him."', note: 'Elijah thought he was alone. God reveals 7,000 who remained faithful.' },
      { ref: 'Isaiah 10:21', text: 'A remnant will return, a remnant of Jacob will return to the Mighty God.', note: 'Isaiah names the pattern — not everyone, but a remnant always returns.' },
      { ref: 'Micah 5:7', text: 'The remnant of Jacob will be in the midst of many peoples like dew from the LORD, like showers on the grass, which do not wait for anyone or depend on human beings.', note: 'The remnant is not defined by size but by divine origin — like dew from God.' },
      { ref: 'Romans 11:5', text: 'So too, at the present time there is a remnant chosen by grace.', note: 'Paul quotes Elijah\'s story — the remnant principle still applies in the church age.' },
      { ref: 'Romans 9:27', text: 'Isaiah cries out concerning Israel: "Though the number of the Israelites be like the sand by the sea, only the remnant will be saved."', note: 'Salvation was never about being part of the majority. The remnant has always been the story.' },
      { ref: 'Revelation 12:17', text: 'Then the dragon was enraged at the woman and went off to wage war against the rest of her offspring — those who keep God\'s commands and hold fast their testimony about Jesus.', note: 'Even in the final battle — God\'s people are a remnant. And they overcome.' }
    ]
  },
  {
    id: 'kingdom',
    title: 'The Kingdom of God',
    icon: 'fas fa-globe',
    color: '#9b59b6',
    tagline: 'From Daniel\'s stone to a kingdom that fills the whole earth',
    summary: 'The Kingdom of God did not begin with Jesus\' preaching. It was Daniel\'s stone, David\'s throne, Isaiah\'s vision. Jesus did not introduce the kingdom — He inaugurated it. It is here and it is coming. We live in the overlap.',
    verses: [
      { ref: 'Daniel 2:44', text: '"In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed, nor will it be left to another people. It will crush all those kingdoms and bring them to an end, but it itself will endure forever."', note: 'Daniel\'s vision — a kingdom not made with human hands, but filling the earth.' },
      { ref: 'Daniel 7:14', text: 'He was given authority, glory and sovereign power; all nations and peoples of every language worshipped him. His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed.', note: 'The Son of Man receives a kingdom that outlasts every empire.' },
      { ref: 'Mark 1:15', text: '"The time has come," he said. "The kingdom of God has come near. Repent and believe the good news!"', note: 'Jesus\' first sermon is one line — the kingdom has arrived.' },
      { ref: 'Luke 17:21', text: '"...nor will people say, \'Here it is,\' or \'There it is,\' because the kingdom of God is in your midst."', note: 'The kingdom is not a geography — it is a presence. It is where Jesus is.' },
      { ref: 'Romans 14:17', text: 'For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit.', note: 'Paul defines kingdom life — not ritual, but Spirit-empowered flourishing.' },
      { ref: 'Revelation 11:15', text: 'The seventh angel sounded his trumpet, and there were loud voices in heaven, which said: "The kingdom of the world has become the kingdom of our Lord and of his Messiah, and he will reign for ever and ever."', note: 'The transfer of ownership is announced — every kingdom becomes His.' }
    ]
  },
  {
    id: 'redemption',
    title: 'Redemption',
    icon: 'fas fa-unlock',
    color: '#f39c12',
    tagline: 'From Boaz buying back the land to Christ buying back humanity',
    summary: 'Redemption is a commercial metaphor — to redeem is to buy back. In Israel, a kinsman-redeemer could buy back land or family members who had been sold into slavery. Ruth and Boaz lived out the most beautiful picture of what Jesus would one day do for the whole world.',
    verses: [
      { ref: 'Leviticus 25:25', text: '"If one of your fellow Israelites becomes poor and sells some of their property, their nearest relative is to come and redeem what they have sold."', note: 'The law of the kinsman-redeemer — family obligation to buy back what was lost.' },
      { ref: 'Ruth 4:9-10', text: 'Then Boaz announced to the elders and all the people, "Today you are witnesses that I have bought from Naomi all the property of Elimelech... And I have also acquired Ruth the Moabite, Naomi\'s dead husband\'s wife."', note: 'Boaz redeems everything — the land, the widow, the future. A perfect type of Christ.' },
      { ref: 'Isaiah 44:22', text: '"I have swept away your offences like a cloud, your sins like the morning mist. Return to me, for I have redeemed you."', note: 'God announces redemption before the price has been paid — in the confidence of what He will do.' },
      { ref: 'Galatians 3:13', text: 'Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: "Cursed is everyone who is hung on a pole."', note: 'He became what we were — cursed — so we could receive what He is — blessed.' },
      { ref: 'Ephesians 1:7', text: 'In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God\'s grace.', note: 'The price paid was not gold or silver. It was blood.' },
      { ref: 'Revelation 5:9', text: '"You are worthy to take the scroll and to open its seals, because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation."', note: 'The purchase was universal — every tongue, tribe, and nation bought back.' }
    ]
  },
  {
    id: 'peace',
    title: 'Peace (Shalom)',
    icon: 'fas fa-dove',
    color: '#3498db',
    tagline: 'From the Hebrew shalom to "the peace that passes understanding"',
    summary: 'Shalom in Hebrew is not merely the absence of conflict. It is the presence of everything that makes for full human flourishing — completeness, wholeness, nothing missing. Jesus came to bring not a truce but a total restoration of what was broken.',
    verses: [
      { ref: 'Numbers 6:24-26', text: '"The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace."', note: 'The oldest recorded priestly blessing — shalom as the crowning gift from God.' },
      { ref: 'Isaiah 9:6', text: 'For to us a child is born, to us a son is given... And he will be called Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace.', note: 'Seven centuries before Bethlehem — the title "Prince of Peace" is already His.' },
      { ref: 'Isaiah 53:5', text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.', note: 'Peace came at a price — His punishment purchased our shalom.' },
      { ref: 'John 14:27', text: '"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."', note: 'Jesus bequeaths His own peace — different in nature from anything the world offers.' },
      { ref: 'Romans 5:1', text: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.', note: 'Before inner peace — there is peace with God. The relational war is over.' },
      { ref: 'Philippians 4:7', text: 'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', note: 'The peace isn\'t just experienced — it guards. A soldier stationed at your heart.' }
    ]
  },
  {
    id: 'holiness',
    title: 'Holiness',
    icon: 'fas fa-star',
    color: '#f1c40f',
    tagline: 'From "Be holy because I am holy" to the sanctifying work of the Spirit',
    summary: 'Holiness is not a standard for perfect people. It is a call addressed to imperfect ones — to be set apart, to reflect God\'s character, to become more like the One who called them. The call has never changed. Only the empowerment has increased.',
    verses: [
      { ref: 'Leviticus 19:2', text: '"Speak to the entire assembly of Israel and say to them: \'Be holy because I, the LORD your God, am holy.\'"', note: 'The command is rooted in God\'s nature — not a rule, but a reflection.' },
      { ref: 'Isaiah 6:3', text: 'And they were calling to one another: "Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory."', note: 'The only attribute of God repeated three times in Scripture — holiness above all.' },
      { ref: 'Ezekiel 36:27', text: '"And I will put my Spirit in you and move you to follow my decrees and be careful to keep my laws."', note: 'God promises what the Law demanded but could not produce — Spirit-powered obedience.' },
      { ref: '1 Peter 1:15-16', text: '"But just as he who called you is holy, so be holy in all you do; for it is written: \'Be holy, because I am holy.\'"', note: 'Peter quotes Leviticus 19 — the same command, now empowered by grace.' },
      { ref: 'Romans 6:19', text: '...just as you used to offer yourselves as slaves to impurity and to ever-increasing wickedness, so now offer yourselves as slaves to righteousness leading to holiness.', note: 'Holiness is a direction, not a destination. It is the trajectory of the surrendered life.' },
      { ref: 'Hebrews 12:14', text: 'Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord.', note: 'The stakes are ultimate — holiness is the condition of seeing God.' }
    ]
  },
  {
    id: 'mission',
    title: 'The Great Mission',
    icon: 'fas fa-globe-africa',
    color: '#e74c3c',
    tagline: 'From "all nations blessed through Abraham" to "go and make disciples"',
    summary: 'The Great Commission is not the beginning of mission — it is the climax of a story that started with Abraham. God\'s heart for all nations is the oldest thread in Scripture. Every covenant, every prophet, every promise is bent toward the same end: all peoples knowing God.',
    verses: [
      { ref: 'Genesis 12:3', text: '"I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you."', note: 'The mission statement buried in the first covenant — all peoples, from the start.' },
      { ref: 'Psalm 67:2', text: '...so that your ways may be known on earth, your salvation among all nations.', note: 'Israel\'s purpose was always outward — to broadcast God\'s salvation to the nations.' },
      { ref: 'Isaiah 49:6', text: '"I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth."', note: 'The servant\'s mission scope — the ends of the earth. Not just Israel.' },
      { ref: 'Matthew 28:19', text: '"Therefore go and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit."', note: 'The Commission — not a new idea, but the fulfilment of the oldest one.' },
      { ref: 'Acts 1:8', text: '"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."', note: 'The strategy is concentric — local, regional, then the whole earth.' },
      { ref: 'Revelation 7:9', text: 'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.', note: 'The mission succeeds. Every nation represented. The promise to Abraham fulfilled.' }
    ]
  },
  {
    id: 'adoption',
    title: 'Adoption',
    icon: 'fas fa-children',
    color: '#9b59b6',
    tagline: 'From "Israel is my firstborn son" to "you received the Spirit of adoption"',
    summary: 'The idea that God would call human beings His children — His sons and daughters — is one of the most extraordinary claims in all of Scripture. It is not a metaphor to be politely acknowledged. It is a legal reality with the most significant inheritance in history.',
    verses: [
      { ref: 'Exodus 4:22', text: '"Then say to Pharaoh, \'This is what the LORD says: Israel is my firstborn son.\'"', note: 'God\'s first declaration of sonship — a whole nation called His firstborn.' },
      { ref: 'Hosea 11:1', text: '"When Israel was a child, I loved him, and out of Egypt I called my son."', note: 'Matthew quotes this of Jesus — the nation\'s story is recapitulated in the Son.' },
      { ref: 'John 1:12', text: 'Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.', note: 'A right — legal, given, not earned. Adoption by faith in Christ.' },
      { ref: 'Romans 8:15', text: 'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, "Abba, Father."', note: 'The Spirit seals the adoption — and gives us the family name for God: Abba.' },
      { ref: 'Galatians 4:4-5', text: 'But when the set time had fully come, God sent his Son, born of a woman, born under the law, to redeem those under the law, that we might receive adoption to sonship.', note: 'The Son became a slave so that slaves could become sons.' },
      { ref: '1 John 3:1', text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', note: 'John marvels at it — not "we aspire to be" but "that is what we are."' }
    ]
  },
  {
    id: 'justice',
    title: 'Justice & Righteousness',
    icon: 'fas fa-scale-balanced',
    color: '#e67e22',
    tagline: 'From Amos\'s thundering rebuke to the Sermon on the Mount',
    summary: 'God\'s justice is not a cold legal mechanism. It is a burning passion rooted in His character. He cannot look at injustice without responding. And He calls His people not just to avoid injustice but to actively pursue righteousness — to look like Him in the world.',
    verses: [
      { ref: 'Amos 5:24', text: '"But let justice roll on like a river, righteousness like a never-failing stream!"', note: 'Amos — one of the most powerful justice statements in all of Scripture.' },
      { ref: 'Micah 6:8', text: 'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.', note: 'The simplest summary of the whole law — three things, all relational.' },
      { ref: 'Isaiah 61:8', text: '"For I, the LORD, love justice; I hate robbery and wrongdoing. In my faithfulness I will reward my people and make an everlasting covenant with them."', note: 'God\'s love of justice is rooted in who He is — not what He demands of others.' },
      { ref: 'Matthew 5:6', text: '"Blessed are those who hunger and thirst for righteousness, for they will be filled."', note: 'Jesus elevates the craving — not just doing righteousness, but desperately wanting it.' },
      { ref: 'Matthew 25:40', text: '"The King will reply, \'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.\'"', note: 'The most direct statement on justice — service to the vulnerable is service to Christ.' },
      { ref: 'Romans 3:26', text: '...he did it to demonstrate his righteousness at the present time, so as to be just and the one who justifies those who have faith in Jesus.', note: 'God is simultaneously just (the standard stands) and the justifier (He pays the price).' }
    ]
  },
  {
    id: 'sabbath',
    title: 'The Sabbath',
    icon: 'fas fa-moon',
    color: '#34495e',
    tagline: 'From God\'s rest at creation to "Come to me and I will give you rest"',
    summary: 'The Sabbath was not a religious add-on. It was woven into the fabric of creation itself. God rested — not from exhaustion, but as an act of completion and delight. Jesus claimed lordship over the Sabbath and then became the rest the Sabbath always pointed to.',
    verses: [
      { ref: 'Genesis 2:3', text: 'Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.', note: 'The Sabbath is not in the Law of Moses. It is in the fabric of creation.' },
      { ref: 'Exodus 20:8', text: '"Remember the Sabbath day by keeping it holy."', note: 'The fourth commandment — rest is not optional, it is commanded.' },
      { ref: 'Isaiah 58:13-14', text: '"If you keep your feet from breaking the Sabbath and from doing as you please on my holy day... then you will find your joy in the LORD."', note: 'The Sabbath is not restriction — it is an invitation to joy.' },
      { ref: 'Matthew 12:8', text: '"For the Son of Man is Lord of the Sabbath."', note: 'Jesus doesn\'t abolish the Sabbath — He claims ownership of it.' },
      { ref: 'Matthew 11:28-29', text: '"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me... and you will find rest for your souls."', note: 'Jesus IS the Sabbath rest — the thing the day was always pointing to.' },
      { ref: 'Hebrews 4:9-10', text: 'There remains, then, a Sabbath-rest for the people of God; for anyone who enters God\'s rest also rests from their works, just as God did from his.', note: 'The deeper Sabbath is not a day — it is a life of trust in what Christ has finished.' }
    ]
  },
  {
    id: 'name',
    title: 'The Name of God',
    icon: 'fas fa-fire-flame-curved',
    color: '#e74c3c',
    tagline: 'From "I AM WHO I AM" to "at the name of Jesus every knee shall bow"',
    summary: 'The name of God in Scripture is not just a label — it is a revelation of character, a declaration of identity, and a place of refuge. When Moses asked God for His name, he received the most profound answer in history. And that name found its fullest expression in a person.',
    verses: [
      { ref: 'Exodus 3:14', text: 'God said to Moses, "I AM WHO I AM. This is what you are to say to the Israelites: \'I AM has sent me to you.\'"', note: 'The divine name — eternal, self-existent, uncaused. The ground of all existence.' },
      { ref: 'Psalm 9:10', text: 'Those who know your name trust in you, for you, LORD, have never forsaken those who seek you.', note: 'Knowing God\'s name is the foundation of trust — knowledge leads to reliance.' },
      { ref: 'Proverbs 18:10', text: 'The name of the LORD is a fortified tower; the righteous run to it and are safe.', note: 'The name is not just information. It is a shelter, a refuge under fire.' },
      { ref: 'John 8:58', text: '"Very truly I tell you," Jesus answered, "before Abraham was born, I am!"', note: 'Jesus takes the divine name for Himself — they picked up stones because they understood.' },
      { ref: 'Acts 4:12', text: '"Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved."', note: 'One name, one salvation — the exclusivity is total.' },
      { ref: 'Philippians 2:9-10', text: 'Therefore God exalted him to the highest place and gave him the name that is above every name, that at the name of Jesus every knee should bow.', note: 'The name given is the divine name — and every created being will bow to it.' }
    ]
  },
  {
    id: 'healing',
    title: 'Healing',
    icon: 'fas fa-kit-medical',
    color: '#2ecc71',
    tagline: 'From Naaman\'s leprosy to "by his wounds we are healed"',
    summary: 'Physical healing in the Bible is never just physical. Every miracle of healing is a sign pointing to the deeper healing God offers — the restoration of the whole person, body and soul, in the age to come. Jesus healed the body to prove He could heal the soul.',
    verses: [
      { ref: '2 Kings 5:14', text: 'So he went down and dipped himself in the Jordan seven times, as the man of God had told him, and his flesh was restored and became clean like that of a young boy.', note: 'Naaman — a foreign general healed through humility and obedience.' },
      { ref: 'Psalm 103:3', text: '...who forgives all your sins and heals all your diseases.', note: 'David links forgiveness and healing — they come from the same source.' },
      { ref: 'Isaiah 53:5', text: '"...by his wounds we are healed."', note: 'The greatest healing promise in the Old Testament — purchased through suffering.' },
      { ref: 'Matthew 9:5-6', text: '"Which is easier: to say, \'Your sins are forgiven,\' or to say, \'Get up and walk\'? But I want you to know that the Son of Man has authority on earth to forgive sins." So he said to the paralysed man, "Get up, take your mat and go home."', note: 'Jesus uses physical healing to prove He can do the harder thing — forgive sin.' },
      { ref: '1 Peter 2:24', text: '"He himself bore our sins" in his body on the tree, so that we might die to sins and live for righteousness; "by his wounds you have been healed."', note: 'Peter quotes Isaiah 53 — healing purchased at the cross is already real.' },
      { ref: 'Revelation 21:4', text: '"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away."', note: 'The ultimate healing — total. Universal. Final. No exceptions.' }
    ]
  },
  {
    id: 'humility',
    title: 'Humility',
    icon: 'fas fa-arrows-down-to-people',
    color: '#3498db',
    tagline: 'From Moses the meekest man to Jesus who washed feet',
    summary: 'Humility is the most countercultural value in the kingdom of God. Every human system rewards power, status, and self-promotion. God\'s kingdom inverts the ladder — the greatest is the one who serves, and the most exalted man in history stooped down to wash dirty feet.',
    verses: [
      { ref: 'Numbers 12:3', text: 'Now Moses was a very humble man, more humble than anyone else on the face of the earth.', note: 'Moses — Israel\'s greatest leader, the humblest man alive.' },
      { ref: 'Psalm 51:17', text: 'My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise.', note: 'David after his sin — God\'s preferred sacrifice is not animals but a humble heart.' },
      { ref: 'Micah 6:8', text: '"...and to walk humbly with your God."', note: 'The third element of Micah\'s summary of the law — humble walk with God.' },
      { ref: 'Philippians 2:5-8', text: 'In your relationships with one another, have the same mindset as Christ Jesus: Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing.', note: 'The ultimate definition of humility — God becoming nothing, voluntarily.' },
      { ref: 'James 4:6', text: '"God opposes the proud but shows favour to the humble."', note: 'Proverbs 3:34 quoted — God\'s active response to pride and to humility.' },
      { ref: 'Matthew 23:12', text: '"For those who exalt themselves will be humbled, and those who humble themselves will be exalted."', note: 'The kingdom principle — the ladder runs backwards from every human system.' }
    ]
  },
  {
    id: 'exile-return',
    title: 'Exile & Return',
    icon: 'fas fa-road',
    color: '#e67e22',
    tagline: 'From Babylon to the prodigal\'s return to the city of God',
    summary: 'Exile is the experience of being far from home, cut off from where you belong. It is both a literal historical event for Israel and a metaphor for every human soul separated from God. And the return is always more glorious than the exile was long.',
    verses: [
      { ref: 'Psalm 137:1', text: 'By the rivers of Babylon we sat and wept when we remembered Zion.', note: 'The most heartbreaking song of exile — worship silenced, home unreachable.' },
      { ref: 'Jeremiah 29:11', text: '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."', note: 'Written to exiles — God speaks hope into the worst situation.' },
      { ref: 'Isaiah 40:1', text: '"Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and proclaim to her that her hard service has been completed, that her sin has been paid for."', note: 'God\'s first word after judgment — comfort. The exile is ending.' },
      { ref: 'Luke 15:20', text: '"So he got up and went to his father. But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him."', note: 'The return from exile — the father running is the most astonishing act in any parable.' },
      { ref: 'Ephesians 2:13', text: 'But now in Christ Jesus you who once were far away have been brought near by the blood of Christ.', note: 'The Gentiles in exile from God — brought near through blood.' },
      { ref: 'Revelation 21:3', text: '"Look! God\'s dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God."', note: 'The final return — not to a land, but to God Himself. Full and permanent.' }
    ]
  },
  {
    id: 'death-defeated',
    title: 'Death Defeated',
    icon: 'fas fa-skull',
    color: '#7f8c8d',
    tagline: 'From "you will surely die" to "death, where is your sting?"',
    summary: 'Death entered through one man\'s decision, and it has cast its shadow over every human life since. But from the moment it entered, God was already working its defeat. The resurrection of Jesus was not a surprise ending — it was the ending that was always coming.',
    verses: [
      { ref: 'Genesis 2:17', text: '"...for when you eat from it you will certainly die."', note: 'Death enters as a consequence — not God\'s plan, but sin\'s penalty.' },
      { ref: 'Psalm 23:4', text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.', note: 'David walks through death\'s shadow — without fear, because God walks with him.' },
      { ref: 'Isaiah 25:8', text: 'He will swallow up death forever. The Sovereign LORD will wipe away the tears from all faces; he will remove his people\'s disgrace from all the earth.', note: 'Isaiah\'s audacious promise — death does not consume, it is consumed.' },
      { ref: 'Hosea 13:14', text: '"Where, O death, are your plagues? Where, O grave, is your destruction?"', note: 'God taunts death — Paul quotes this in his greatest victory chapter.' },
      { ref: '1 Corinthians 15:55-57', text: '"Where, O death, is your victory? Where, O death, is your sting?" The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ.', note: 'Paul quotes Hosea — the taunt becomes a shout of triumph at the resurrection.' },
      { ref: 'Revelation 20:14', text: 'Then death and Hades were thrown into the lake of fire. The lake of fire is the second death.', note: 'The last enemy is the last thing thrown in — death itself finally dies.' }
    ]
  },
  {
    id: 'suffering-servant',
    title: 'The Suffering Servant',
    icon: 'fas fa-cross',
    color: '#c0392b',
    tagline: 'The most precise prophecy in Scripture — written 700 years before Calvary',
    summary: 'Isaiah 53 is the most specific Old Testament prophecy of the crucifixion. It describes a man who suffers not for his own sins but for the sins of others — who is pierced, crushed, buried with the wicked, yet raised to life. Every detail fits one person.',
    verses: [
      { ref: 'Isaiah 53:2-3', text: 'He had no beauty or majesty to attract us to him, nothing in his appearance that we should desire him. He was despised and rejected by mankind, a man of suffering, and familiar with pain.', note: 'No throne, no army, no platform — the opposite of every messianic expectation.' },
      { ref: 'Isaiah 53:5', text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.', note: 'Substitution — explicitly stated 700 years in advance.' },
      { ref: 'Isaiah 53:7', text: 'He was oppressed and afflicted, yet he did not open his mouth; he was led like a lamb to the slaughter.', note: 'Silent before his accusers — just as Jesus was before Pilate and Herod.' },
      { ref: 'Isaiah 53:9', text: 'He was assigned a grave with the wicked, and with the rich in his death.', note: 'Buried with the wicked (two criminals), yet in a rich man\'s tomb (Joseph of Arimathea).' },
      { ref: 'Acts 8:32-35', text: 'This is the passage of Scripture the eunuch was reading: "He was led like a sheep to the slaughter..."  Then Philip began with that very passage of Scripture and told him the good news about Jesus.', note: 'Philip\'s entry point into the gospel — Isaiah 53 connects directly to Jesus.' },
      { ref: 'Romans 5:8', text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.', note: 'The proof of divine love is the servant\'s suffering — and it was always the plan.' }
    ]
  },
  {
    id: 'identity',
    title: 'Identity in God',
    icon: 'fas fa-id-badge',
    color: '#9b59b6',
    tagline: 'From "you are my people" to "you are a royal priesthood"',
    summary: 'Who you are is always determined by whose you are. Before Israel had a land, they had an identity — God\'s people. Before believers had a theology degree, they had a name — children of God. Identity in Scripture always flows from relationship, never from performance.',
    verses: [
      { ref: 'Exodus 6:7', text: '"I will take you as my own people, and I will be your God. Then you will know that I am the LORD your God, who brought you out from under the yoke of the Egyptians."', note: 'God\'s covenant identity formula — "you are mine, I am yours."' },
      { ref: 'Deuteronomy 14:2', text: '"For you are a people holy to the LORD your God. Out of all the peoples on the face of the earth, the LORD has chosen you to be his treasured possession."', note: 'Chosen, holy, treasured — three identity words with no performance attached.' },
      { ref: 'Psalm 100:3', text: 'Know that the LORD is God. It is he who made us, and we are his; we are his people, the sheep of his pasture.', note: 'Identity rooted in creation — we belong to God because He made us.' },
      { ref: 'John 15:15', text: '"I no longer call you servants, because a servant does not know his master\'s business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you."', note: 'An upgraded identity — from servant to friend. Given by Jesus, not earned.' },
      { ref: '1 Peter 2:9', text: 'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.', note: 'Peter stacks identity words — chosen, royal, holy, special. All given, none earned.' },
      { ref: '1 John 3:1', text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', note: 'The emphasis is on the reality — not "we aspire to be" but "that is what we ARE."' }
    ]
  },
  {
    id: 'throne',
    title: 'The Throne of God',
    icon: 'fas fa-chess-king',
    color: '#f39c12',
    tagline: 'From Isaiah\'s vision to the Lamb seated at the centre of heaven',
    summary: 'The throne of God appears throughout Scripture as the symbol of ultimate authority — the place from which all of creation is governed. And the most remarkable thing about the final vision of that throne is who sits at its centre: not a conquering general, but a Lamb who was slain.',
    verses: [
      { ref: 'Isaiah 6:1', text: 'In the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple.', note: 'Isaiah\'s throne vision — God\'s glory so vast it overflows the temple.' },
      { ref: 'Daniel 7:9', text: '"As I looked, thrones were set in place, and the Ancient of Days took his seat. His clothing was as white as snow; the hair of his head was white like wool."', note: 'Daniel sees the divine court — the Ancient of Days enthroned, judging in righteousness.' },
      { ref: 'Psalm 93:2', text: 'Your throne was established long ago; you are from all eternity.', note: 'The throne is not new — it is eternal. God has always been sovereign.' },
      { ref: 'Revelation 4:2', text: 'At once I was in the Spirit, and there before me was a throne in heaven with someone sitting on it.', note: 'John\'s vision opens with the throne — the centre of all reality.' },
      { ref: 'Revelation 5:6', text: 'Then I saw a Lamb, looking as if it had been slain, standing at the centre of the throne.', note: 'The most unexpected throne occupant in history — a slain Lamb, standing in victory.' },
      { ref: 'Revelation 22:3', text: 'No longer will there be any curse. The throne of God and of the Lamb will be in the city, and his servants will serve him.', note: 'The curse from Eden is reversed — and the throne of God is now among us forever.' }
    ]
  },
  {
    id: 'wilderness',
    title: 'The Wilderness',
    icon: 'fas fa-sun',
    color: '#e67e22',
    tagline: 'From Israel\'s 40 years to Jesus\'s 40 days',
    summary: 'The wilderness is not a detour from God\'s plan. It IS the plan. It is where character is tested, where dependence is formed, where manna falls, where the voice of God is most clearly heard. Jesus entered Israel\'s wilderness and succeeded where Israel failed — for all of them.',
    verses: [
      { ref: 'Deuteronomy 8:2', text: '"Remember how the LORD your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart."', note: 'The purpose of the wilderness — not punishment, but revelation of what\'s inside.' },
      { ref: 'Hosea 2:14', text: '"Therefore I am now going to allure her; I will lead her into the wilderness and speak tenderly to her."', note: 'God calls the wilderness His romance strategy — it is where He speaks most intimately.' },
      { ref: 'Isaiah 40:3', text: '"A voice of one calling: \'In the wilderness prepare the way for the LORD; make straight in the desert a highway for our God.\'"', note: 'The wilderness is where preparation happens — the way is made there.' },
      { ref: 'Matthew 4:1', text: 'Then Jesus was led by the Spirit into the wilderness to be tempted by the devil.', note: 'Jesus enters Israel\'s wilderness — and succeeds where they failed for 40 years.' },
      { ref: 'Matthew 4:4', text: 'Jesus answered, "It is written: \'Man shall not live on bread alone, but on every word that comes from the mouth of God.\'"', note: 'Jesus quotes Deuteronomy 8 — answering the wilderness with the wilderness lesson.' },
      { ref: 'Revelation 12:14', text: 'The woman was given the two wings of a great eagle, so that she might fly to the place prepared for her in the wilderness, where she would be taken care of for a time.', note: 'Even in the last days — God\'s people find safety in the wilderness, as He always intended.' }
    ]
  },
  {
    id: 'vine',
    title: 'The Vine',
    icon: 'fas fa-leaf',
    color: '#27ae60',
    tagline: 'From Israel as God\'s vine to "I am the true vine"',
    summary: 'Israel was God\'s vine — planted, tended, and expected to bear fruit for the nations. It failed. Then Jesus arrived and declared Himself the true vine — suggesting that Israel was always a preview. In Him, fruitfulness is not expected — it is guaranteed.',
    verses: [
      { ref: 'Psalm 80:8', text: 'You transplanted a vine from Egypt; you drove out the nations and planted it.', note: 'The Exodus is described as transplanting a vine — Israel as God\'s horticultural project.' },
      { ref: 'Isaiah 5:1-2', text: '"My loved one had a vineyard on a fertile hillside. He dug it up and cleared it of stones and planted it with the choicest vines... Then he looked for a crop of good grapes, but it yielded only bad fruit."', note: 'The parable of the vineyard — all of Israel\'s history summarised in a metaphor.' },
      { ref: 'Ezekiel 15:6', text: '"Therefore this is what the Sovereign LORD says: As I have given the wood of the vine among the trees of the forest as fuel for the fire, so will I treat the people of Jerusalem."', note: 'The vine that doesn\'t bear fruit is only good for burning — a severe warning.' },
      { ref: 'John 15:1', text: '"I am the true vine, and my Father is the gardener."', note: '"True" vine — implying Israel was the partial, preview vine. Jesus is the real one.' },
      { ref: 'John 15:5', text: '"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing."', note: 'Union with Christ is the only source of fruitfulness — nothing else works.' },
      { ref: 'John 15:16', text: '"You did not choose me, but I chose you and appointed you so that you might go and bear fruit — fruit that will last."', note: 'The vine chooses the branches — and the fruit is guaranteed to last.' }
    ]
  },
  {
    id: 'baptism',
    title: 'Baptism',
    icon: 'fas fa-water',
    color: '#3498db',
    tagline: 'From the Red Sea crossing to burial and resurrection in Christ',
    summary: 'Baptism in the New Testament is not a standalone ritual. It is the fulfilment of a long symbolic tradition — the flood, the Red Sea, the Jordan, ritual washings — all pointing to the same reality: death to one life and resurrection into another. Paul says we were buried with Christ.',
    verses: [
      { ref: '1 Corinthians 10:2', text: 'They were all baptised into Moses in the cloud and in the sea.', note: 'Paul calls the Red Sea crossing a "baptism" — the Exodus was always a baptism picture.' },
      { ref: '2 Kings 5:14', text: 'So he went down and dipped himself in the Jordan seven times, as the man of God had told him, and his flesh was restored.', note: 'Naaman\'s sevenfold immersion — cleansing through the waters of obedience.' },
      { ref: 'Ezekiel 36:25', text: '"I will sprinkle clean water on you, and you will be clean; I will cleanse you from all your impurities and from all your idols."', note: 'God\'s promise of a spiritual washing — connected to the new covenant.' },
      { ref: 'Matthew 3:16', text: 'As soon as Jesus was baptised, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove.', note: 'Jesus is baptised — identifying with humanity, inaugurating His ministry.' },
      { ref: 'Romans 6:4', text: 'We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.', note: 'Baptism is death and resurrection — going down and coming up as someone new.' },
      { ref: 'Galatians 3:27', text: 'For all of you who were baptised into Christ have clothed yourselves with Christ.', note: 'Baptism is an identity change — you put on Christ like a garment.' }
    ]
  },
  {
    id: 'power-weakness',
    title: 'Power in Weakness',
    icon: 'fas fa-bolt',
    color: '#9b59b6',
    tagline: 'From Gideon\'s 300 to "my grace is sufficient for you"',
    summary: 'God consistently chooses the unlikely, the inadequate, and the weak — not as a limitation but as a strategy. When human strength is removed, what remains is unmistakably divine. This is not an accident of biblical history. It is the recurring method of God.',
    verses: [
      { ref: 'Judges 7:7', text: '"With the three hundred men that lapped I will save you and give the Midianites into your hands. Let all the others go home."', note: 'God reduces Gideon\'s army from 32,000 to 300 — so no one can miss who won.' },
      { ref: '1 Samuel 16:7', text: '"The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart."', note: 'David chosen over his brothers — God\'s selection criteria defy human logic.' },
      { ref: 'Zechariah 4:6', text: '"Not by might nor by power, but by my Spirit," says the LORD Almighty.', note: 'God\'s method declared directly — His Spirit, not human resources.' },
      { ref: '1 Corinthians 1:27', text: 'But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong.', note: 'The pattern is intentional — God consistently inverts human expectations.' },
      { ref: '2 Corinthians 12:9', text: '"My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.', note: 'Paul learns the secret — weakness is not an obstacle to God\'s power. It\'s the entry point.' },
      { ref: '2 Corinthians 4:7', text: 'But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.', note: 'Fragile vessels, extraordinary treasure — the contrast proves the power is divine.' }
    ]
  },
  {
    id: 'morning-star',
    title: 'The Morning Star',
    icon: 'fas fa-star',
    color: '#f1c40f',
    tagline: 'From Balaam\'s prophecy to "I am the bright Morning Star"',
    summary: 'A star rising from Jacob — Balaam saw it and could not stay silent. Centuries later, Peter used the same image to describe the coming of Christ\'s light into a dark place. And in the final chapter of Revelation, Jesus claimed the title for Himself.',
    verses: [
      { ref: 'Numbers 24:17', text: '"I see him, but not now; I behold him, but not near. A star will come out of Jacob; a sceptre will rise out of Israel."', note: 'Balaam — a pagan prophet forced to speak the truth about Israel\'s future star.' },
      { ref: 'Isaiah 14:12', text: '"How you have fallen from heaven, morning star, son of the dawn! You have been cast down to the earth."', note: 'Satan once held the title — it was taken from him by his own pride.' },
      { ref: 'Daniel 12:3', text: '"Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever."', note: 'God\'s people become stars — reflecting the light of the one who is the star.' },
      { ref: '2 Peter 1:19', text: '...until the day dawns and the morning star rises in your hearts.', note: 'Peter connects the morning star to the dawning of Christ\'s light in the human heart.' },
      { ref: 'Revelation 2:28', text: '"I will also give that person the morning star."', note: 'Jesus promises the morning star as a gift — and then reveals He is the morning star.' },
      { ref: 'Revelation 22:16', text: '"I, Jesus, have sent my angel to give you this testimony for the churches. I am the Root and the Offspring of David, and the bright Morning Star."', note: 'The final self-revelation — Jesus claims the star Balaam saw. The oldest prophecy fulfilled.' }
    ]
  },
  {
    id: 'day-of-lord',
    title: 'The Day of the Lord',
    icon: 'fas fa-cloud-bolt',
    color: '#e74c3c',
    tagline: 'From Joel\'s locusts to the final day when every secret is revealed',
    summary: 'The Day of the Lord is both a promise and a warning. It is the day when God\'s full authority is finally and visibly exercised over all of history. Every prophet who spoke of it was pointing forward to a single moment that has not yet fully arrived — but is coming.',
    verses: [
      { ref: 'Joel 2:1', text: '"Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the LORD is coming. It is close at hand."', note: 'Joel\'s alarm — urgency, nearness, and the weight of what is coming.' },
      { ref: 'Amos 5:18', text: '"Woe to you who long for the day of the LORD! Why do you long for the day of the LORD? That day will be darkness, not light."', note: 'Amos corrects false confidence — the Day of the Lord will judge Israel too, not just enemies.' },
      { ref: 'Zephaniah 1:14-15', text: '"The great day of the LORD is near — near and coming quickly. That day will be a day of wrath — a day of distress and anguish, a day of trouble and ruin."', note: 'The most vivid description — a day of total reckoning.' },
      { ref: 'Malachi 4:5', text: '"See, I will send the prophet Elijah to you before that great and dreadful day of the LORD comes."', note: 'The last word of the Old Testament — pointing to the Day of the Lord and its forerunner.' },
      { ref: '1 Thessalonians 5:2', text: '...for you know very well that the day of the Lord will come like a thief in the night.', note: 'Paul keeps the urgency — it will not be announced. It will arrive.' },
      { ref: '2 Peter 3:10', text: 'But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire.', note: 'The day is cosmic in scope — not just a historical event, but the end of the present order.' }
    ]
  },
  {
    id: 'unity',
    title: 'Unity in the Body',
    icon: 'fas fa-people-group',
    color: '#2ecc71',
    tagline: 'From "one flock, one shepherd" to "neither Jew nor Gentile"',
    summary: 'The unity of God\'s people is not a pragmatic goal — it is a theological reality that Jesus prayed for and Paul laboured for. The church is meant to be the visible proof that the dividing walls of humanity have been torn down by the cross.',
    verses: [
      { ref: 'Psalm 133:1', text: 'How good and pleasant it is when God\'s people live together in unity!', note: 'The simplest and most powerful statement on unity — the joy of it is the point.' },
      { ref: 'Ezekiel 37:22', text: '"I will make them one nation in the land... There will be one king over all of them and they will never again be two nations or be divided into two kingdoms."', note: 'God promises to reunite the divided kingdoms — a picture of Jew-Gentile unity to come.' },
      { ref: 'John 10:16', text: '"I have other sheep that are not of this sheep pen. I must bring them also. They too will listen to my voice, and there shall be one flock and one shepherd."', note: 'Jesus announces the plan — Jews and Gentiles, one flock, one shepherd.' },
      { ref: 'John 17:21', text: '"...that all of them may be one, Father, just as you are in me and I am in you. May they also be in us so that the world may believe that you have sent me."', note: 'Unity is Jesus\' prayer — and its purpose is the world\'s belief. Division breaks the gospel.' },
      { ref: 'Galatians 3:28', text: 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.', note: 'Every human division dissolved in Christ — the most radical social statement in history.' },
      { ref: 'Ephesians 2:14', text: 'For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility.', note: 'The cross is the wall-destroyer — peace between humans flows from peace with God.' }
    ]
  },
  {
    id: 'angels',
    title: 'Angels',
    icon: 'fas fa-feather',
    color: '#f39c12',
    tagline: 'From Jacob wrestling to a host beyond counting around the throne',
    summary: 'Angels in Scripture are not decorative. They are ministering spirits on active assignment — delivering messages, fighting battles, guarding, announcing, worshipping. From Genesis to Revelation, they are present at every crucial moment of God\'s story.',
    verses: [
      { ref: 'Genesis 28:12', text: 'He had a dream in which he saw a stairway resting on the earth, with its top reaching to heaven, and the angels of God were ascending and descending on it.', note: 'Jacob\'s ladder — angels in constant transit between heaven and earth.' },
      { ref: 'Daniel 10:13', text: '"But the prince of the Persian kingdom resisted me twenty-one days. Then Michael, one of the chief princes, came to help me."', note: 'Daniel\'s vision — angels engaged in unseen warfare on behalf of God\'s people.' },
      { ref: 'Psalm 91:11', text: 'For he will command his angels concerning you to guard you in all your ways.', note: 'God\'s angels are not random — they are specifically assigned and specifically commanded.' },
      { ref: 'Luke 1:26', text: 'God sent the angel Gabriel to Nazareth, a town in Galilee, to a virgin pledged to be married to a man named Joseph.', note: 'Gabriel brings the most important message in history — an angel at the hinge of the world.' },
      { ref: 'Matthew 26:53', text: '"Do you think I cannot call on my Father, and he will at once put at my disposal more than twelve legions of angels?"', note: 'Jesus had the option — and chose not to use it. The cross was willingness, not weakness.' },
      { ref: 'Revelation 5:11', text: 'Then I looked and heard the voice of many angels, numbering thousands upon thousands, and ten thousand times ten thousand. They encircled the throne and the living creatures and the elders.', note: 'The final vision — an uncountable host, all gathered in worship of the Lamb.' }
    ]
  },
  {
    id: 'baptism-spirit',
    title: 'Baptism in the Spirit',
    icon: 'fas fa-fire',
    color: '#e74c3c',
    tagline: 'From Ezekiel\'s breath to "you will be baptised with the Holy Spirit"',
    summary: 'What happened at Pentecost was not a surprise. Joel foretold it, Ezekiel pictured it, John the Baptist announced it, and Jesus promised it. The outpouring of the Spirit on all flesh was always the goal — not a special experience for the elite, but the normal life of every believer.',
    verses: [
      { ref: 'Ezekiel 36:26-27', text: '"I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. And I will put my Spirit in you."', note: 'God promises internal transformation — not behaviour modification, but Spirit indwelling.' },
      { ref: 'Joel 2:28-29', text: '"And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy... Even on my servants, both men and women, I will pour out my Spirit in those days."', note: 'The democratisation of the Spirit — not just prophets and kings, but everyone.' },
      { ref: 'Matthew 3:11', text: '"I baptise you with water for repentance. But after me comes one who is more powerful than I... He will baptise you with the Holy Spirit and fire."', note: 'John contrasts his water baptism with what Jesus will do — Spirit and fire.' },
      { ref: 'Acts 1:5', text: '"For John baptised with water, but in a few days you will be baptised with the Holy Spirit."', note: 'Jesus\' last promise before ascending — the Spirit is coming. Wait for it.' },
      { ref: 'Acts 2:16-17', text: '"No, this is what was spoken by the prophet Joel: \'In the last days, God says, I will pour out my Spirit on all people.\'"', note: 'Peter announces it — Joel 2 is being fulfilled right now, in this room.' },
      { ref: '1 Corinthians 12:13', text: 'For we were all baptised by one Spirit so as to form one body — whether Jews or Gentiles, slave or free — and we were all given the one Spirit to drink.', note: 'The Spirit baptism is the foundation of the church — the source of unity.' }
    ]
  },
  {
    id: 'promises',
    title: 'The Promises of God',
    icon: 'fas fa-stamp',
    color: '#3498db',
    tagline: 'From the first promise in Eden to "all the promises of God are Yes in Christ"',
    summary: 'The whole Bible is a record of God making promises and keeping them. Even the ones that seem delayed, even the ones spoken to people who died before they saw them fulfilled — every single promise is in process. And Paul says every one of them finds its "Yes" in Jesus.',
    verses: [
      { ref: 'Genesis 3:15', text: '"And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel."', note: 'The first promise — the protevangelium, the first gospel, spoken in the moment of the fall.' },
      { ref: 'Numbers 23:19', text: '"God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfil?"', note: 'God\'s faithfulness is grounded in His nature — He is incapable of breaking His word.' },
      { ref: 'Hebrews 11:13', text: 'All these people were still living by faith when they died. They did not receive the things promised; they only saw them and welcomed them from a distance.', note: 'The faith heroes died without the fulfilment — yet held on. The promise was still real.' },
      { ref: 'Joshua 21:45', text: 'Not one of all the LORD\'s good promises to Israel failed; every one was fulfilled.', note: 'Joshua\'s declaration after the conquest — God\'s track record is perfect.' },
      { ref: '2 Corinthians 1:20', text: 'For no matter how many promises God has made, they are "Yes" in Christ. And so through him the "Amen" is spoken by us to the glory of God.', note: 'Every single promise — Yes. In Christ. The answer to every prayer that ends "Amen."' },
      { ref: '2 Peter 1:4', text: 'Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.', note: 'The promises are not just future hopes — they are present participation in God\'s nature.' }
    ]
  },
  {
    id: 'fear-not',
    title: 'Fear Not',
    icon: 'fas fa-shield',
    color: '#2ecc71',
    tagline: 'The most repeated command in Scripture — do not be afraid',
    summary: '"Do not be afraid" is said to be the most frequently repeated command in all of Scripture — over 365 times. One for every day of the year. Every time it appears, it is accompanied by a reason. The antidote to fear is never willpower. It is the knowledge of who God is.',
    verses: [
      { ref: 'Genesis 15:1', text: 'After this, the word of the LORD came to Abram in a vision: "Do not be afraid, Abram. I am your shield, your very great reward."', note: 'God\'s first "fear not" — addressed to the father of faith. Even Abraham needed it.' },
      { ref: 'Isaiah 41:10', text: '"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."', note: 'The reason not to fear is always God\'s presence, not our courage.' },
      { ref: 'Daniel 10:12', text: '"Do not be afraid, Daniel. Since the first day that you set your mind to gain understanding and to humble yourself before your God, your words were heard."', note: 'Fear not — spoken after 21 days of unanswered prayer. Prayer was heard on day one.' },
      { ref: 'Luke 1:30', text: '"Do not be afraid, Mary; you have found favour with God."', note: 'Gabriel to Mary — fear not, because you are chosen, not because it will be easy.' },
      { ref: 'Matthew 28:5', text: 'The angel said to the women, "Do not be afraid, for I know that you are looking for Jesus, who was crucified. He is not here; he has risen."', note: 'Fear not — spoken at the resurrection. The reason not to fear is now complete.' },
      { ref: 'Revelation 1:17', text: 'When I saw him, I fell at his feet as though dead. Then he placed his right hand on me and said: "Do not be afraid. I am the First and the Last."', note: 'The last "fear not" in Scripture — spoken by Jesus Himself, at the end of history.' }
    ]
  },
  {
    id: 'repentance',
    title: 'Repentance',
    icon: 'fas fa-rotate-left',
    color: '#e74c3c',
    tagline: 'From Nineveh\'s sackcloth to "times of refreshing may come from the Lord"',
    summary: 'Repentance in Scripture is not emotional wallowing in guilt. It is a pivot — a decisive turn of direction. And rather than being the gloomy entry point of religion, the Bible presents it as the doorway to refreshment, restoration, and joy.',
    verses: [
      { ref: 'Jonah 3:10', text: 'When God saw what they did and how they turned from their evil ways, he relented and did not bring on them the destruction he had threatened.', note: 'Nineveh repents — and the most reluctant prophet witnesses the most dramatic result.' },
      { ref: 'Isaiah 55:7', text: '"Let the wicked forsake their ways and the unrighteous their thoughts. Let them turn to the LORD, and he will have mercy on them, and to our God, for he will freely pardon."', note: 'The invitation is urgent, the response is immediate — God pardons freely.' },
      { ref: 'Ezekiel 18:32', text: '"For I take no pleasure in the death of anyone," declares the Sovereign LORD. "Repent and live!"', note: 'God\'s motive is not punishment. It is life. Repentance is the path to it.' },
      { ref: 'Mark 1:15', text: '"The time has come," he said. "The kingdom of God has come near. Repent and believe the good news!"', note: 'Jesus\'s first sermon — two words: repent, believe. In that order.' },
      { ref: 'Luke 15:7', text: '"I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent."', note: 'Repentance causes celebration in heaven — it is the best news, not bad news.' },
      { ref: 'Acts 3:19', text: '"Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord."', note: 'The result of repentance is not shame — it is refreshing. A cooling rain after drought.' }
    ]
  },
  {
    id: 'stewardship',
    title: 'Stewardship & Generosity',
    icon: 'fas fa-hand-holding-dollar',
    color: '#f39c12',
    tagline: 'From "the earth is the Lord\'s" to "God loves a cheerful giver"',
    summary: 'Stewardship begins with the acknowledgment that nothing belongs to us. We are managers, not owners. And when that truth settles, generosity becomes the natural response — not a duty but a delight, not a burden but an act of worship.',
    verses: [
      { ref: 'Psalm 24:1', text: 'The earth is the LORD\'s, and everything in it, the world, and all who live in it.', note: 'The foundation of stewardship — God owns everything. We manage on His behalf.' },
      { ref: 'Deuteronomy 8:17-18', text: '"You may say to yourself, \'My power and the strength of my hands have produced this wealth for me.\' But remember the LORD your God, for it is he who gives you the ability to produce wealth."', note: 'The prosperity warning — wealth can create the illusion of self-sufficiency.' },
      { ref: 'Proverbs 11:24', text: 'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty.', note: 'The kingdom economy inverts normal economics — giving produces increase.' },
      { ref: 'Malachi 3:10', text: '"Bring the whole tithe into the storehouse... Test me in this," says the LORD Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."', note: 'The only place God invites a test — trust Him with your resources.' },
      { ref: '2 Corinthians 9:7', text: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.', note: 'The motivation matters — cheerful means joyful. Giving as an act of joy, not obligation.' },
      { ref: 'Luke 12:48', text: '"...From everyone who has been given much, much will be demanded; and from the one who has been entrusted with much, much more will be asked."', note: 'The principle of proportional stewardship — great privilege demands great faithfulness.' }
    ]
  },
  {
    id: 'rest-eternity',
    title: 'Eternal Rest',
    icon: 'fas fa-infinity',
    color: '#9b59b6',
    tagline: 'From Canaan as a type to the rest that remains for the people of God',
    summary: 'Canaan was the promised land, but it was never the final rest. Joshua led Israel in, but the book of Hebrews says another rest still remains — a deeper, truer rest that geography could never provide. It is the rest of those who have ceased from their own works and entered into God\'s.',
    verses: [
      { ref: 'Deuteronomy 12:9', text: 'For you have not yet reached the resting place and the inheritance the LORD your God is giving you.', note: 'Moses points forward — even the promised land is not the destination.' },
      { ref: 'Psalm 95:11', text: '"So I declared on oath in my anger, \'They shall never enter my rest.\'"', note: 'The generation that hardened their hearts missed the rest — and Hebrews says it\'s still available.' },
      { ref: 'Matthew 11:28', text: '"Come to me, all you who are weary and burdened, and I will give you rest."', note: 'Jesus is the rest — not a place, not a practice, but a person.' },
      { ref: 'Hebrews 4:8-9', text: 'For if Joshua had given them rest, God would not have spoken later about another day. There remains, then, a Sabbath-rest for the people of God.', note: 'Hebrews closes the argument — Joshua\'s rest was always a preview of the real one.' },
      { ref: 'Hebrews 4:10', text: '...for anyone who enters God\'s rest also rests from their works, just as God did from his.', note: 'The rest is ceasing from self-effort — trusting the finished work of Christ entirely.' },
      { ref: 'Revelation 14:13', text: '"...Blessed are the dead who die in the Lord from now on." "Yes," says the Spirit, "they will rest from their labour, for their deeds will follow them."', note: 'The final rest — not sleep, but completed labour. The work done, the rest begun.' }
    ]
  },
  {
    id: 'love',
    title: 'The Love of God',
    icon: 'fas fa-heart',
    color: '#e74c3c',
    tagline: 'From "I have loved you with an everlasting love" to "God is love"',
    summary: 'Every other attribute of God is something He has. Love is something He is. It is not a response to our worthiness — it precedes creation itself, runs through every page of Scripture, endures every failure and rebellion, and reaches its fullest expression in the death of His Son.',
    verses: [
      { ref: 'Jeremiah 31:3', text: '"I have loved you with an everlasting love; I have drawn you with unfailing kindness."', note: 'Everlasting — it has no start date in relation to us. It always existed.' },
      { ref: 'Hosea 11:8', text: '"How can I give you up, Ephraim? How can I hand you over, Israel?... My heart is changed within me; all my compassion is aroused."', note: 'God the father of a rebellious child — refusing to let go.' },
      { ref: 'Zephaniah 3:17', text: '"The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."', note: 'God sings over His people — an act of love so extravagant it is almost hard to believe.' },
      { ref: 'John 3:16', text: '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."', note: 'The most well-known verse — but its depth is inexhaustible. God gave the dearest thing.' },
      { ref: 'Romans 8:38-39', text: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', note: 'The exhaustive list — nothing in creation can cut the connection.' },
      { ref: '1 John 4:16', text: 'And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.', note: 'The highest declaration — love is not what God does. It is what God is.' }
    ]
  },
  {
    id: 'sanctification',
    title: 'Sanctification',
    icon: 'fas fa-seedling',
    color: '#2ecc71',
    tagline: 'From the burning bush to the process of becoming like Christ',
    summary: 'Sanctification is the lifelong process of becoming who you already are in Christ. God declares you holy and then works to make you holy — not because the declaration was incomplete, but because He is committed to the whole person, not just the legal status.',
    verses: [
      { ref: 'Exodus 3:5', text: '"Do not come any closer," God said. "Take off your sandals, for the place where you are standing is holy ground."', note: 'Holiness defines the space around God — it is His nature radiating outward.' },
      { ref: 'Leviticus 20:26', text: '"You are to be holy to me because I, the LORD, am holy, and I have set you apart from the nations to be my own."', note: 'Set apart — that is the meaning of sanctification. Belonging to God, like Him.' },
      { ref: 'John 17:17', text: '"Sanctify them by the truth; your word is truth."', note: 'Jesus\' prayer for His disciples — sanctification through the Word. Daily.' },
      { ref: 'Romans 6:22', text: 'But now that you have been set free from sin and have become slaves of God, the benefit you reap leads to holiness, and the result is eternal life.', note: 'Sanctification is the fruit of the new relationship — not the condition of it.' },
      { ref: 'Philippians 1:6', text: '...being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.', note: 'God is the initiator and the completer — sanctification is His project, not ours alone.' },
      { ref: '2 Corinthians 3:18', text: 'And we all, who with unveiled faces contemplate the Lord\'s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.', note: 'Transformation by beholding — looking at Jesus is the mechanism of becoming like Him.' }
    ]
  },
  {
    id: 'seed',
    title: 'The Seed',
    icon: 'fas fa-leaf',
    color: '#27ae60',
    tagline: 'From the seed of the woman to "unless a grain of wheat falls"',
    summary: 'The seed metaphor runs from the very first promise in Genesis to the resurrection principle Jesus declared in John. A seed must die to produce life. The smallest beginning produces the largest outcome. And it started with one person — born of a woman, buried in the earth, risen on the third day.',
    verses: [
      { ref: 'Genesis 3:15', text: '"And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel."', note: 'The seed of the woman — the first promise of a coming deliverer, buried in the curse.' },
      { ref: 'Genesis 22:18', text: '"...and through your offspring all nations on earth will be blessed, because you have obeyed me."', note: 'Abraham\'s seed — Paul says in Galatians that this seed is singular. It refers to Christ.' },
      { ref: 'Galatians 3:16', text: 'The promises were spoken to Abraham and to his seed. Scripture does not say "and to seeds," meaning many people, but "and to your seed," meaning one person, who is Christ.', note: 'Paul does what only the Spirit could reveal — the seed was always one person.' },
      { ref: 'Isaiah 53:10', text: '...he will see his offspring and prolong his days, and the will of the LORD will prosper in his hand.', note: 'After his death — he will see offspring. Death is not the end for the servant.' },
      { ref: 'John 12:24', text: '"Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds."', note: 'Jesus explains His own death — a seed entering the ground to produce a harvest.' },
      { ref: 'Revelation 7:9', text: 'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language.', note: 'The harvest from the seed — uncountable, from every nation. Exactly as promised.' }
    ]
  },
  {
    id: 'joy',
    title: 'Joy',
    icon: 'fas fa-face-smile-beam',
    color: '#f1c40f',
    tagline: 'From "the joy of the Lord is your strength" to "enter into the joy of your Master"',
    summary: 'Biblical joy is not dependent on circumstances. It is a fruit of the Spirit that can coexist with suffering, persist through loss, and outlast every storm. It is not happiness — it is something deeper, rooted not in what is happening but in who God is.',
    verses: [
      { ref: 'Nehemiah 8:10', text: '"...Do not grieve, for the joy of the LORD is your strength."', note: 'Joy is not ornamental. It is structural — the source of spiritual strength.' },
      { ref: 'Psalm 16:11', text: 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.', note: 'Joy is a presence gift — it flows from being with God, not from favourable conditions.' },
      { ref: 'Habakkuk 3:17-18', text: '"Though the fig tree does not bud and there are no grapes on the vines... yet I will rejoice in the LORD, I will be joyful in God my Saviour."', note: 'The ultimate statement — joy that survives total agricultural, economic, and personal collapse.' },
      { ref: 'John 15:11', text: '"I have told you this so that my joy may be in you and that your joy may be complete."', note: 'Jesus\' own joy — given, transferred, and made complete in those who abide.' },
      { ref: 'Romans 15:13', text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.', note: 'Joy comes from God, it fills people, and the overflow is hope for others.' },
      { ref: 'Matthew 25:21', text: '"His master replied, \'Well done, good and faithful servant!... Come and share your master\'s happiness!\'"', note: 'The ultimate destination of every faithful life — entering into the Master\'s own joy.' }
    ]
  }
];

// Helper: get today's Thread theme (cycles weekly)
function getTodayThread() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const idx = Math.floor(dayOfYear / 7) % BIBLE_THREADS.length;
  return BIBLE_THREADS[idx];
}
