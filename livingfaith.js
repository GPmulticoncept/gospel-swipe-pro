// livingfaith.js — GospelSwipe Pro
// 52 weekly Living Faith reflections — raw, real thoughts about walking with God
// Each has: thought, verse, ref, question, theme
// var (not const) so it is globally accessible before app.js loads

var LIVING_FAITH = [
  {
    thought: "Faith feels alive when it's about knowing God, not just analyzing Him. You can have every doctrine correct and still miss the heartbeat behind it. Theology is the map — but God is the country.",
    verse: "That I may know him, and the power of his resurrection, and the fellowship of his sufferings, being made conformable unto his death.",
    ref: "Philippians 3:10",
    question: "When last did you feel God — not just think about Him?",
    theme: "#3498db"
  },
  {
    thought: "Sometimes God doesn't answer because He's not responding to your question — He's responding to you. The silence isn't absence. It's intimacy.",
    verse: "After the fire came a still small voice.",
    ref: "1 Kings 19:12",
    question: "What has God been saying to you in the quiet you've been avoiding?",
    theme: "#9b59b6"
  },
  {
    thought: "We keep waiting to understand before we move. But faith was never designed to walk in full light. It was designed to trust the One who is the Light.",
    verse: "Trust in the LORD with all your heart and lean not on your own understanding.",
    ref: "Proverbs 3:5",
    question: "What step have you been postponing until it makes sense?",
    theme: "#f39c12"
  },
  {
    thought: "Grace isn't God lowering His standards. It's God carrying what we never could. The cross wasn't plan B — it was always the plan.",
    verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    ref: "Romans 5:8",
    question: "Are you receiving grace, or just believing in it from a distance?",
    theme: "#e74c3c"
  },
  {
    thought: "God doesn't wait until you're fixed to use you. He uses the breaking. The cracks are where the light gets in — and gets out.",
    verse: "We have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.",
    ref: "2 Corinthians 4:7",
    question: "What part of your story have you been hiding that God wants to redeem?",
    theme: "#2ecc71"
  },
  {
    thought: "You don't need the right words. You need an honest heart. God isn't grading your vocabulary — He's listening for you.",
    verse: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
    ref: "Romans 8:26",
    question: "What would you say to God right now if you stopped trying to sound spiritual?",
    theme: "#3498db"
  },
  {
    thought: "A mustard seed doesn't apologise for not being an oak tree yet. It just stays in the soil. So does real faith — small, quiet, but relentlessly alive.",
    verse: "If you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move.",
    ref: "Matthew 17:20",
    question: "Are you comparing your faith to someone else's fruit?",
    theme: "#2ecc71"
  },
  {
    thought: "The world calls it productivity. God called it Sabbath. There is a rest He designed specifically for you — and refusing it isn't devotion. It's pride.",
    verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
    ref: "Matthew 11:28",
    question: "What are you carrying today that He already asked you to put down?",
    theme: "#9b59b6"
  },
  {
    thought: "Worship doesn't begin when the music starts. It begins the moment you decide that God is worth more than your comfort, your plans, and your timeline.",
    verse: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship.",
    ref: "Romans 12:1",
    question: "What area of your life have you not yet surrendered as worship?",
    theme: "#f39c12"
  },
  {
    thought: "Doubt is not the opposite of faith. It is often the beginning of a deeper one. The disciples who doubted were still the ones Jesus sent.",
    verse: "When they saw him, they worshipped him; but some doubted.",
    ref: "Matthew 28:17",
    question: "What honest question have you been afraid to bring to God?",
    theme: "#3498db"
  },
  {
    thought: "You cannot be effective where God has not assigned you. The most fruitful thing you can do is stay in your lane and run it well.",
    verse: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    ref: "Ephesians 2:10",
    question: "Are you busy doing good things, or the specific thing God made you for?",
    theme: "#2ecc71"
  },
  {
    thought: "Obedience is not the begrudging version of love. It is love at its most concrete — choosing God's word over your own feelings, every single day.",
    verse: "If you love me, keep my commands.",
    ref: "John 14:15",
    question: "Is there a command you're treating as optional because it costs too much?",
    theme: "#e74c3c"
  },
  {
    thought: "God's timing isn't slow. It is precise. What feels like a delay is often the most important part of the process.",
    verse: "He has made everything beautiful in its time.",
    ref: "Ecclesiastes 3:11",
    question: "What season of waiting are you resisting that God is actually using?",
    theme: "#f39c12"
  },
  {
    thought: "You are not a project God is still deciding whether to finish. You are a child He already died for. The work on the cross is complete.",
    verse: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
    ref: "Philippians 1:6",
    question: "Where do you still act like God might give up on you?",
    theme: "#9b59b6"
  },
  {
    thought: "Comparison is a thief that steals your joy in what God is doing in your life by making you measure it against someone else's story.",
    verse: "Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else.",
    ref: "Galatians 6:4",
    question: "Whose story have you been living inside instead of your own?",
    theme: "#3498db"
  },
  {
    thought: "Community isn't optional for Christians. You were not built to carry your faith alone. The New Testament 'one another' commands require each other.",
    verse: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.",
    ref: "Hebrews 10:24-25",
    question: "Who is currently sharpening your faith — and who are you sharpening?",
    theme: "#2ecc71"
  },
  {
    thought: "Your wounds are not wasted. In the hands of a redeeming God, the very thing that broke you becomes the thing He uses to heal someone else.",
    verse: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble.",
    ref: "2 Corinthians 1:3-4",
    question: "What pain in your life are you still hiding that could become someone else's hope?",
    theme: "#e74c3c"
  },
  {
    thought: "Prayer changes things — but first it changes you. The miracle sometimes isn't in the situation. It's in who you become in the asking.",
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    ref: "Philippians 4:6",
    question: "How has prayer changed you recently, not just your circumstances?",
    theme: "#3498db"
  },
  {
    thought: "Holiness is not about what you refuse to do. It is about who you are becoming. The no's are the overflow of a yes to something greater.",
    verse: "But just as he who called you is holy, so be holy in all you do; for it is written: 'Be holy, because I am holy.'",
    ref: "1 Peter 1:15-16",
    question: "Is your no to sin flowing from love for God, or just fear of consequences?",
    theme: "#9b59b6"
  },
  {
    thought: "The Bible is not just a book of stories about what God did. It is a living document that reveals what He is doing right now — including in your life.",
    verse: "For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit.",
    ref: "Hebrews 4:12",
    question: "When last did a verse feel like it was written specifically for your moment?",
    theme: "#f39c12"
  },
  {
    thought: "Forgiveness doesn't mean what happened was okay. It means you're releasing the debt so it stops owning you. It's not a gift to them — it's freedom for you.",
    verse: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
    ref: "Colossians 3:13",
    question: "Who are you still making payments to — with your anger, your bitterness, your silence?",
    theme: "#e74c3c"
  },
  {
    thought: "God doesn't need your strength. He needs your availability. The greatest moves of God in history were made through ordinary people who simply said yes.",
    verse: "Here am I. Send me!",
    ref: "Isaiah 6:8",
    question: "What has God been asking you to say yes to that you've been too 'unqualified' to attempt?",
    theme: "#2ecc71"
  },
  {
    thought: "Suffering is not evidence that God has forgotten you. Often, it is the specific classroom He designed for what cannot be learned any other way.",
    verse: "Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.",
    ref: "Romans 5:3-4",
    question: "What is God building in you through the thing you're currently asking Him to remove?",
    theme: "#9b59b6"
  },
  {
    thought: "The gospel is not a self-improvement program. It is a resurrection announcement. You are not being made better — you are being made new.",
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    ref: "2 Corinthians 5:17",
    question: "In what area of your life are you still living as the old you that the gospel has already buried?",
    theme: "#3498db"
  },
  {
    thought: "Gratitude doesn't wait for everything to be perfect. It finds God in the details of today, before the big answered prayers ever arrive.",
    verse: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    ref: "1 Thessalonians 5:18",
    question: "Name three specific things about today that are evidence of God's faithfulness.",
    theme: "#f39c12"
  },
  {
    thought: "Your calling is not somewhere out there waiting to be discovered. You are already living inside it. The question is whether you recognise it.",
    verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    ref: "Romans 8:28",
    question: "What if the life you're living right now is exactly where your calling lives?",
    theme: "#2ecc71"
  },
  {
    thought: "Humility is not thinking less of yourself. It is thinking of yourself less — and being freed up to notice everyone else.",
    verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.",
    ref: "Philippians 2:3",
    question: "Who have you been too self-focused to notice needs you right now?",
    theme: "#3498db"
  },
  {
    thought: "Your identity is not found in what you produce, what you own, or what others think. It is anchored in what God has already declared over you.",
    verse: "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!",
    ref: "1 John 3:1",
    question: "Where are you still trying to earn an identity that God has already given you freely?",
    theme: "#9b59b6"
  },
  {
    thought: "The fruit of the Spirit is not a performance target. It is the natural overflow of a life surrendered to the Spirit. You don't produce it — you grow it by staying connected.",
    verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
    ref: "Galatians 5:22-23",
    question: "Which fruit is most absent in your life right now — and what does that reveal about your connection to the Vine?",
    theme: "#2ecc71"
  },
  {
    thought: "Fear and faith can coexist. The invitation is not to stop being afraid. It is to move forward in spite of it — because of who is walking with you.",
    verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.",
    ref: "Isaiah 41:10",
    question: "What would you do right now if fear were not the loudest voice in the room?",
    theme: "#e74c3c"
  },
  {
    thought: "The church is not a building you visit on Sundays. It is a people you are joined to — in mission, in burden, in life. You are part of something much bigger than your personal faith.",
    verse: "Now you are the body of Christ, and each one of you is a part of it.",
    ref: "1 Corinthians 12:27",
    question: "Are you contributing to the body — or just attending it?",
    theme: "#3498db"
  },
  {
    thought: "A distracted mind is not a sinful mind — it is a human one. The spiritual discipline is not perfection in prayer, it is returning. Again and again. God honours the return.",
    verse: "But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.",
    ref: "Matthew 6:6",
    question: "How consistently are you showing up to private prayer — not perfectly, but genuinely?",
    theme: "#f39c12"
  },
  {
    thought: "Money is not evil. The love of it is. The question is not how much you have — it is what you would refuse to give if God asked.",
    verse: "For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith.",
    ref: "1 Timothy 6:10",
    question: "If God asked you to give something financial that felt risky, what would your first reaction reveal?",
    theme: "#9b59b6"
  },
  {
    thought: "The enemy doesn't need you to commit great sin. He just needs you to stay comfortable. Comfort is often the subtlest enemy of spiritual growth.",
    verse: "Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour.",
    ref: "1 Peter 5:8",
    question: "Where has comfort replaced conviction in your spiritual life lately?",
    theme: "#e74c3c"
  },
  {
    thought: "Serving others is not the obligation of the spiritually mature. It is the evidence that you have truly encountered a God who washed feet.",
    verse: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
    ref: "Mark 10:45",
    question: "Who have you served this week with no expectation of recognition?",
    theme: "#2ecc71"
  },
  {
    thought: "Your past is not your destiny. It is your testimony. The very thing you're most ashamed of is the thing grace is most ready to redeem.",
    verse: "He has delivered us from such a deadly peril, and he will deliver us again. On him we have set our hope that he will continue to deliver us.",
    ref: "2 Corinthians 1:10",
    question: "What part of your past is still defining your future more than the cross does?",
    theme: "#3498db"
  },
  {
    thought: "Contentment is a learned discipline — not a passive feeling. Paul wrote 'I have learned' to be content. It took seasons, losses, and plenty to get there.",
    verse: "I have learned, in whatsoever state I am, therewith to be content.",
    ref: "Philippians 4:11",
    question: "What would contentment look like in the specific season you are in right now?",
    theme: "#f39c12"
  },
  {
    thought: "When God gives you a vision, He rarely gives you the full picture. He gives you enough light for the next step — because trust is built in the dark.",
    verse: "Your word is a lamp for my feet, a light on my path.",
    ref: "Psalm 119:105",
    question: "What is the very next step God is illuminating for you — and what are you doing with it?",
    theme: "#9b59b6"
  },
  {
    thought: "You cannot overflow what you haven't been filled with. Ministry that is not sustained by intimacy with God eventually runs dry and runs on fumes.",
    verse: "Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine.",
    ref: "John 15:4",
    question: "Is your spiritual output currently exceeding your spiritual input?",
    theme: "#2ecc71"
  },
  {
    thought: "The resurrection is not just a doctrine to believe in. It is a power to live by — right now, today, in the mundane and the magnificent alike.",
    verse: "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings.",
    ref: "Philippians 3:10",
    question: "Where in your life do you need resurrection power right now, not just resurrection theology?",
    theme: "#e74c3c"
  },
  {
    thought: "God's love is not withheld when you fail. But His discipline comes from that same love — shaping you into someone who can carry the weight of what He's building.",
    verse: "The Lord disciplines the one he loves, and he chastens everyone he accepts as his son.",
    ref: "Hebrews 12:6",
    question: "Is there a pattern in your life God has been correcting that you have been treating as just bad luck?",
    theme: "#3498db"
  },
  {
    thought: "Evangelism is not a spiritual gift only. It is every believer's responsibility. You may not have the gift of an evangelist — but you have a story, and that is enough.",
    verse: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have.",
    ref: "1 Peter 3:15",
    question: "When last did someone ask you about your faith because of something they noticed in your life?",
    theme: "#f39c12"
  },
  {
    thought: "Spiritual dryness is not punishment. It is often an invitation — to seek God for who He is, not just for what He gives.",
    verse: "As the deer pants for streams of water, so my soul pants for you, my God.",
    ref: "Psalm 42:1",
    question: "In your current spiritual season, are you seeking His hand or His face?",
    theme: "#9b59b6"
  },
  {
    thought: "Your words carry more weight than you realise. They create atmospheres, build or break identities, and carry the power of life and death. Speak deliberately.",
    verse: "The tongue has the power of life and death, and those who love it will eat its fruit.",
    ref: "Proverbs 18:21",
    question: "What words have you been speaking over yourself and others that need to change today?",
    theme: "#e74c3c"
  },
  {
    thought: "God is not impressed by busyness. He is looking for yieldedness. The busiest person in the room is not always the most surrendered one.",
    verse: "But Martha was distracted by all the preparations that had to be made. 'Lord, don't you care that my sister has left me to do the work by myself?'",
    ref: "Luke 10:40",
    question: "Are you serving God from a place of rest or from a place of restlessness?",
    theme: "#2ecc71"
  },
  {
    thought: "The Great Commission doesn't start with going. It starts with the authority given by the risen Jesus. You go in borrowed power — and that makes all the difference.",
    verse: "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations.",
    ref: "Matthew 28:18-19",
    question: "Are you going in your own confidence — or in the authority of the One who sent you?",
    theme: "#3498db"
  },
  {
    thought: "Repentance is not a grovelling exercise. It is a turning. A pivot toward God with the whole of who you are. It's not about how bad you feel — it's about which direction you face.",
    verse: "Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord.",
    ref: "Acts 3:19",
    question: "Is there something you've acknowledged as wrong but haven't actually turned from yet?",
    theme: "#f39c12"
  },
  {
    thought: "Heaven is not just a destination. It is a citizenship that changes how you live right now. Citizens of heaven think about earth differently.",
    verse: "But our citizenship is in heaven. And we eagerly await a Saviour from there, the Lord Jesus Christ.",
    ref: "Philippians 3:20",
    question: "How would living as a citizen of heaven, not just a resident of earth, change your decisions today?",
    theme: "#9b59b6"
  },
  {
    thought: "Unity in the body of Christ is not the absence of disagreement. It is the commitment to stay in relationship through it. Iron sharpens iron — friction is part of the process.",
    verse: "How good and pleasant it is when God's people live together in unity!",
    ref: "Psalm 133:1",
    question: "Is there a relationship in the body of Christ you have withdrawn from when you should have leaned in?",
    theme: "#2ecc71"
  },
  {
    thought: "Your gifts were never meant to make you famous. They were meant to make God visible. The moment your platform becomes about you, the anointing shifts.",
    verse: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms.",
    ref: "1 Peter 4:10",
    question: "Are you stewarding your gifts, or performing with them?",
    theme: "#e74c3c"
  },
  {
    thought: "The Holy Spirit is not a feeling. He is a person. He grieves, intercedes, guides, and fills — and He responds to invitation, not just emotion.",
    verse: "And do not grieve the Holy Spirit of God, with whom you were sealed for the day of redemption.",
    ref: "Ephesians 4:30",
    question: "Is there any area of your life where you have been quenching or grieving the Holy Spirit?",
    theme: "#3498db"
  },
  {
    thought: "Perseverance is not just enduring hard things. It is enduring them without losing faith in who God is. The test is not whether you survive — it's what you believe about God when you do.",
    verse: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life.",
    ref: "James 1:12",
    question: "What is your current trial teaching you about what you actually believe about God?",
    theme: "#f39c12"
  },
  {
    thought: "The love of God is not a concept to admire from a distance. It is a presence to live inside of — receiving it so completely that it overflows into everyone you touch.",
    verse: "And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.",
    ref: "1 John 4:16",
    question: "Does the way you treat people around you reflect someone who is living inside of God's love?",
    theme: "#9b59b6"
  }
];

// Helper: get today's Living Faith entry (cycles weekly through 52 entries)
function getTodayLivingFaith() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const weekIndex = Math.floor(dayOfYear / 7) % LIVING_FAITH.length;
  return LIVING_FAITH[weekIndex];
}
