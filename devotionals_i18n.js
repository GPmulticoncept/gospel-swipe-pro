// ==========================================================
// DAILY DEVOTIONAL (56 weekly devotionals) — full content translated
// (Fixes bug: Devotional content stayed English-only regardless of
// the language selected in Settings. Currently: English + Yoruba complete.
// Other 6 languages fall back to English until translated in a future pass,
// following the "one language at a time" plan.)
// ==========================================================
const DEVOTIONALS_I18N = {
  "en": [
    {
      "title": "You Are Loved",
      "verse": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "ref": "John 3:16",
      "theme": "#3498db",
      "reflection": "Before you did anything to earn it, God loved you completely. His love is not based on your performance, your past, or your potential. It is based on His nature. He IS love. Today, receive that love — not as a concept, but as a reality for your personal life.",
      "prayer": "Father, thank You for loving me before I loved You. Help me to receive Your love deeply today, not just know it in my head. Let it change the way I see myself and the way I treat others. In Jesus' name, Amen.",
      "action": "Write down one area of your life where you have struggled to believe God loves you. Speak John 3:16 over that area three times today."
    },
    {
      "title": "New Every Morning",
      "verse": "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      "ref": "Lamentations 3:22-23",
      "theme": "#f39c12",
      "reflection": "No matter what yesterday looked like — failure, disappointment, sin, or grief — this morning God's mercies reset. You do not carry yesterday's weight into today. His compassions are fresh, specific to this moment, and inexhaustible. Every sunrise is God's announcement: we start again.",
      "prayer": "Lord, thank You that I do not have to earn my way back to You. Your mercies are new for me right now. Help me to step into this day without the weight of what is behind me. I receive Your grace afresh. Amen.",
      "action": "Before you look at your phone or speak to anyone today, say out loud: 'His mercies are new for me this morning.' Do this three days in a row."
    },
    {
      "title": "He Goes Before You",
      "verse": "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
      "ref": "Deuteronomy 31:8",
      "theme": "#2ecc71",
      "reflection": "Whatever situation you are walking into today — a difficult conversation, a job interview, an uncertain future — God has already been there. He does not send you ahead alone. He goes before, walks beside, and follows behind. You are never entering anything alone.",
      "prayer": "Father, I surrender my fears about what lies ahead. I choose to believe that You have already gone before me into every situation today. Give me Your peace that passes understanding. In Jesus' name, Amen.",
      "action": "Name one thing you have been anxious about this week. Physically open your hands and say: 'Lord, You go before me into this. I trust You.'"
    },
    {
      "title": "Chosen and Called",
      "verse": "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
      "ref": "1 Peter 2:9",
      "theme": "#9b59b6",
      "reflection": "You were not an accident. You were chosen — handpicked by God before the foundation of the world. Royalty is not something you have to achieve; it is something you have to receive and walk in. Your identity is settled in heaven even when it feels unsettled on earth.",
      "prayer": "Lord, let me live today from the inside out — from the identity You have given me, not from what others say about me or what I feel about myself. I am Yours. I am chosen. I am called. Help me to walk like it. Amen.",
      "action": "Find a mirror today. Look at yourself and say: 'I am chosen. I am royal. I am God's.' Say it until you mean it."
    },
    {
      "title": "The Peace That Guards",
      "verse": "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      "ref": "Philippians 4:7",
      "theme": "#3498db",
      "reflection": "God's peace is not the absence of problems. It is a supernatural garrison — a military guard — posted at the door of your heart and mind. When anxiety comes knocking, peace is already standing there. But this peace is accessed through prayer and thanksgiving, not through perfect circumstances.",
      "prayer": "Father, I bring my anxious thoughts to You right now. I choose thanksgiving over worry. I claim the peace that is beyond my understanding to stand guard over my heart today. Amen.",
      "action": "Make a list of 5 specific things you are thankful for right now. Read Philippians 4:6-7 after each one."
    },
    {
      "title": "More Than Conquerors",
      "verse": "No, in all these things we are more than conquerors through him who loved us.",
      "ref": "Romans 8:37",
      "theme": "#e74c3c",
      "reflection": "Paul wrote this from prison. He had been shipwrecked, beaten, and abandoned. Yet he said MORE than conquerors. Not 'we might conquer someday' — but we ARE, present tense, through Him who loved us. Your victory is not in the absence of a battle. It is in who fights with you.",
      "prayer": "Lord, I refuse the label of victim today. Through You I am a conqueror. Whatever I am facing, I face it from a position of victory already won at the cross. Strengthen me to live from that truth today. Amen.",
      "action": "Write 'More than a conqueror' on a piece of paper and put it somewhere you will see it today."
    },
    {
      "title": "Walk in the Spirit",
      "verse": "So I say, walk in the Spirit, and you will not gratify the desires of the flesh.",
      "ref": "Galatians 5:16",
      "theme": "#2ecc71",
      "reflection": "The solution to flesh struggles is not white-knuckled willpower. It is walking — daily, moment by moment dependence on the Holy Spirit. You do not defeat the flesh by fighting it harder. You crowd it out by walking in the Spirit. When your inner life is full of God, there is less room for what is not of God.",
      "prayer": "Holy Spirit, lead me today in every decision — what I say, what I look at, where I go, how I respond. I yield myself to Your guidance right now. Fill every space in me. Amen.",
      "action": "Before every significant decision or conversation today, pause and silently ask: 'Holy Spirit, how would You have me respond?'"
    },
    {
      "title": "Seek First",
      "verse": "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      "ref": "Matthew 6:33",
      "theme": "#f39c12",
      "reflection": "Jesus did not say seek only. He said seek FIRST. Everything else — provision, protection, relationships, purpose — comes after that first priority is established. Most people pray about everything except the thing God said to seek first. When the Kingdom is first, everything else lines up.",
      "prayer": "Lord, I repent for the times I have sought the gifts more than the Giver. Today I choose to seek Your Kingdom and Your righteousness first. I trust You to take care of everything else. Amen.",
      "action": "Before you check your messages or social media this morning, spend five minutes reading scripture or in prayer. Try this for a week."
    },
    {
      "title": "His Strength, Not Yours",
      "verse": "I can do all this through him who gives me strength.",
      "ref": "Philippians 4:13",
      "theme": "#9b59b6",
      "reflection": "This verse is often quoted as motivation for hard challenges. But Paul wrote it in the context of contentment — learning to be satisfied in both plenty and want. The strength God gives is not for showing off. It is for pressing through when everything in you wants to give up or give in.",
      "prayer": "Father, I acknowledge that I am not strong enough for this in my own power. But You are. I lean on You today — not on my intelligence, my connections, or my track record. Your strength is made perfect in my weakness. Amen.",
      "action": "Name the hardest thing you are facing right now. Pray Philippians 4:13 specifically over that situation, out loud."
    },
    {
      "title": "Called to Forgive",
      "verse": "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      "ref": "Ephesians 4:32",
      "theme": "#3498db",
      "reflection": "Forgiveness is not saying what happened was okay. It is releasing someone from the debt they owe you — and releasing yourself from the prison of bitterness. God did not forgive you because you deserved it. He forgave you because it was right. Now He asks you to do the same for others.",
      "prayer": "Lord, I bring to You the person who hurt me. I choose forgiveness today, not because the feeling is there yet, but as an act of obedience. Heal the wound in me and free me from bitterness. In Jesus' name. Amen.",
      "action": "Is there someone you need to forgive? Write their name down. Pray this prayer for them: 'Lord, bless [name]. I release them and I release myself.' Do it every day this week."
    },
    {
      "title": "Word That Does Not Return Empty",
      "verse": "So is my word that goes out from my mouth: it will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.",
      "ref": "Isaiah 55:11",
      "theme": "#2ecc71",
      "reflection": "Every time you share a scripture, speak a promise over your life, or declare the gospel to someone — those words are not wasted. God backs them. They carry divine energy and they land in hearts you cannot see the inside of. You plant and water. God makes it grow.",
      "prayer": "Father, give me boldness to speak Your Word today — to myself in faith, and to others in love. I trust that what You have spoken will accomplish exactly what You intend. No seed is wasted. Amen.",
      "action": "Share one scripture with someone today — a friend, family member, or colleague. It can be by text. Just send it."
    },
    {
      "title": "Delight in the Lord",
      "verse": "Take delight in the LORD, and he will give you the desires of your heart.",
      "ref": "Psalm 37:4",
      "theme": "#f39c12",
      "reflection": "This is not a formula for getting what you want. It is a transformation of what you want. When you genuinely delight in God — not in what He can do for you — your desires change. They align with His will. And then He gives them, because what you want is now what He wants for you.",
      "prayer": "Lord, teach me to delight in You — not just in Your blessings, not just in answered prayer, but in You Yourself. Be the joy of my heart today. Realign my desires to match Yours. Amen.",
      "action": "Spend 10 minutes in worship today with no request — just telling God what you love about Him. No agenda. Just delight."
    },
    {
      "title": "The Great Commission",
      "verse": "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
      "ref": "Matthew 28:19",
      "theme": "#e74c3c",
      "reflection": "This command was given to ordinary people — fishermen, tax collectors, women who had been healed of sickness. Jesus did not wait for perfect people. He commissioned the available ones. The Great Commission is not a suggestion for full-time ministers. It is the mandate for every believer.",
      "prayer": "Lord, forgive me for keeping the gospel to myself. Give me boldness to share it today — with whoever You put in my path. Use my ordinary life as an extraordinary testimony of Your grace. Amen.",
      "action": "Think of one person in your life who does not know Jesus. Pray for them by name today. Then ask God for the right moment to share the gospel with them this week."
    },
    {
      "title": "Trust With All Your Heart",
      "verse": "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "ref": "Proverbs 3:5-6",
      "theme": "#9b59b6",
      "reflection": "Leaning on your own understanding is the most natural thing in the world. But God says there is a better way: trust with ALL your heart — not part, not when it makes sense, but all. The path becomes straight not because the terrain changes, but because you stop navigating it alone.",
      "prayer": "Lord, there are things in my life right now that I do not understand. I choose to trust You with them rather than figure them out on my own. Straighten my path according to Your wisdom. Amen.",
      "action": "Identify one situation where you have been trusting your own understanding more than God. Physically write 'I surrender this to You, Lord' and keep it somewhere visible."
    },
    {
      "title": "Rivers of Living Water",
      "verse": "Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.",
      "ref": "John 7:38",
      "theme": "#3498db",
      "reflection": "Jesus did not promise a trickle. He promised rivers — plural, flowing, powerful. The Holy Spirit in you is not a puddle for you to sit in quietly. He is a river flowing from you TO others. Your life is meant to bring refreshment to everyone around you. That only happens when you stay connected to the Source.",
      "prayer": "Holy Spirit, flow through me today. Let Your life pour out of me to every person I encounter — my family, my colleagues, the stranger I pass on the street. Make me a blessing everywhere I go. Amen.",
      "action": "Do one specific act of kindness for someone unexpected today. Let the river flow."
    },
    {
      "title": "Be Still",
      "verse": "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'",
      "ref": "Psalm 46:10",
      "theme": "#2ecc71",
      "reflection": "This was spoken to people in the middle of a crisis — nations in uproar, kingdoms falling. Yet God says: be still. Not because the situation resolved, but because HE IS GOD. Stillness is not passivity. It is active confidence in the One who holds all things. You can be still because He is sovereign.",
      "prayer": "Lord, I choose stillness today in the middle of the noise. I declare that You are God — over my circumstances, my country, my family, my future. I rest in Your sovereignty. Amen.",
      "action": "Set a 5-minute alarm today and do nothing during it. No phone. No noise. Just be still before God."
    },
    {
      "title": "Armour of God",
      "verse": "Put on the full armour of God, so that you can take your stand against the devil's schemes.",
      "ref": "Ephesians 6:11",
      "theme": "#e74c3c",
      "reflection": "The armour is not put on automatically. It is put on — deliberately, piece by piece, daily. Belt of truth. Breastplate of righteousness. Shoes of peace. Shield of faith. Helmet of salvation. Sword of the Spirit. You dress physically every day. How much more should you dress spiritually?",
      "prayer": "Lord, I put on the full armour of God right now. I take my stand against every scheme of the enemy today — in my mind, my relationships, my finances, my body. I am protected by Your power, not my own. Amen.",
      "action": "Pray through each piece of armour in Ephesians 6:13-17 one by one, naming how it applies to your life today."
    },
    {
      "title": "Carry Each Other",
      "verse": "Carry each other's burdens, and in this way you will fulfill the law of Christ.",
      "ref": "Galatians 6:2",
      "theme": "#f39c12",
      "reflection": "Christianity is not a solo sport. We are called to community — real, honest, burden-bearing community. That requires vulnerability from those who are struggling, and willingness from those who are stronger. The law of Christ is love. You fulfil it when you stop pretending and start truly caring.",
      "prayer": "Lord, show me who in my life is carrying a burden right now. Give me the sensitivity to notice and the courage to ask how I can help. And where I am the one struggling, give me the humility to let someone help me. Amen.",
      "action": "Send a message to one person today with simply: 'I have been thinking of you. How are you really doing?' Be prepared to actually listen."
    },
    {
      "title": "Abundant Life",
      "verse": "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
      "ref": "John 10:10",
      "theme": "#9b59b6",
      "reflection": "Abundant life is not a prosperity formula. It is a quality of life — rich in purpose, peace, presence, and power — that only Jesus gives. The enemy's agenda is always subtraction: steal your joy, kill your hope, destroy your relationships. Jesus' agenda is always addition: more life, fuller life, real life.",
      "prayer": "Lord Jesus, I reject the lies of the thief who tells me I should have less — less hope, less joy, less purpose. I receive the full life You came to give. Show me where I have settled for survival when You promised abundance. Amen.",
      "action": "Ask yourself honestly: in which area of my life have I been living in survival mode instead of abundance? Bring that area to God in prayer today."
    },
    {
      "title": "Faith That Moves Mountains",
      "verse": "Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move. Nothing will be impossible for you.",
      "ref": "Matthew 17:20",
      "theme": "#3498db",
      "reflection": "The problem is never the size of your faith. A mustard seed is tiny. The problem is where your faith is pointed. Faith pointed at God — the One who is actually able to move mountains — works. Faith pointed at your own ability, your situation, or your feelings does not. Point your faith at the right Person.",
      "prayer": "Lord, I point my faith at You today — not at the circumstances, not at the size of the problem, not at how I feel. You are the Mountain Mover. Speak to the mountains in my life. I believe You. Amen.",
      "action": "Name the biggest 'mountain' in your life right now. Speak to it literally — say out loud: '[Name of situation], move in Jesus' name.' Then trust."
    },
    {
      "title": "Psalm 23: The Shepherd's Care",
      "verse": "The LORD is my shepherd, I lack nothing.",
      "ref": "Psalm 23:1",
      "theme": "#2ecc71",
      "reflection": "Four words — 'I lack nothing' — are the conclusion of having the Lord as shepherd. He provides rest, restoration, guidance, protection, and comfort. Even in the valley of death's shadow, He is there. Even in the presence of enemies, He prepares a table. Your Shepherd never goes off duty.",
      "prayer": "Lord, You are my Shepherd today. I receive the rest You provide, the restoration You offer, the path You have chosen for me. Even in my darkest valley, You are with me. I will not fear. Amen.",
      "action": "Read all of Psalm 23 slowly. For each verse, write one specific way God has been that thing for you in the last month."
    },
    {
      "title": "Do Not Grow Weary",
      "verse": "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
      "ref": "Galatians 6:9",
      "theme": "#f39c12",
      "reflection": "Weariness in doing good is a real thing. Giving, serving, praying, waiting — without visible results — wears people down. But the harvest has a proper time that is in God's hands, not yours. Your job is not to produce the harvest. Your job is to not give up on the planting.",
      "prayer": "Lord, I am tired. But I choose not to give up. I trust that what I am sowing — in prayer, in service, in faith — will produce a harvest at exactly the right time. Give me strength to keep going. Amen.",
      "action": "Think of one area where you have been close to giving up. Write down WHY you started. Read it every morning this week."
    },
    {
      "title": "Transformed Mind",
      "verse": "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.",
      "ref": "Romans 12:2",
      "theme": "#9b59b6",
      "reflection": "Transformation starts in the mind. The world constantly tries to conform you — through media, culture, peer pressure, comparison. The antidote is not willpower but renewal. Daily exposure to God's Word rewires how you think. A renewed mind sees God's will clearly. An unrenewed mind cannot.",
      "prayer": "Lord, renew my mind today. Replace every lie I have believed with Your truth. Help me to think differently — about myself, about others, about the world — in a way that reflects Your perspective. Amen.",
      "action": "Identify one specific lie you have been believing — about yourself, God, or your future. Find a scripture that directly contradicts it and memorize it this week."
    },
    {
      "title": "Pray Without Ceasing",
      "verse": "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      "ref": "1 Thessalonians 5:16-18",
      "theme": "#3498db",
      "reflection": "Praying without ceasing is not being on your knees 24 hours a day. It is a posture of constant openness to God — a lifestyle of conversation with Him throughout the day. In the queue, at work, while cooking, while walking. Your whole day becomes a prayer when God is always in the room.",
      "prayer": "Lord, teach me to pray without ceasing — not just in set devotion times but in the flow of my whole day. Let me be so aware of Your presence that every moment becomes a conversation with You. Amen.",
      "action": "Set three reminders on your phone today, spaced through the day. When each one goes off, stop for 60 seconds and simply talk to God about whatever is happening right then."
    },
    {
      "title": "Come to Me",
      "verse": "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
      "ref": "Matthew 11:28-29",
      "theme": "#e74c3c",
      "reflection": "This is Jesus speaking — not an institution, not a religious system, not a set of rules. Jesus Himself says come to ME. He does not say sort yourself out first. He does not say come when you have it together. He says come as you are, weary and burdened, and I will give rest to your soul.",
      "prayer": "Jesus, I come to You right now — just as I am. I am weary. I lay down every burden I have been carrying alone. I take Your yoke instead. Teach me the rest that only You can give. Amen.",
      "action": "Sit quietly for five minutes. Physically uncurl your fists or open your hands. Give Jesus every burden by name."
    },
    {
      "title": "Shine Your Light",
      "verse": "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
      "ref": "Matthew 5:16",
      "theme": "#f39c12",
      "reflection": "You are not meant to hide. You are placed exactly where you are — your neighbourhood, your workplace, your family — to be light. Light does not struggle to work. It simply IS. When you are fully yourself in Christ, living genuinely and loving consistently, people will notice and God will be glorified.",
      "prayer": "Lord, let my life be so full of Your love that it is impossible to be around me without sensing something different. Not religious performance — but genuine light. Shine through me today. Amen.",
      "action": "Do one visible act of love today in a place where people can see — help someone, pay for someone, encourage someone publicly."
    },
    {
      "title": "The God Who Sees",
      "verse": "She gave this name to the LORD who spoke to her: 'You are the God who sees me.'",
      "ref": "Genesis 16:13",
      "theme": "#2ecc71",
      "reflection": "Hagar was in the wilderness — alone, pregnant, rejected, running. And God appeared to her. Not to Abraham. Not to the 'important' people. To her. His name to her was El Roi — the God who sees. If you feel unseen, overlooked, forgotten: you are not. The God of the universe has His eyes on you right now.",
      "prayer": "El Roi — God who sees me — I rest in the fact that You see exactly where I am today. I am not invisible to You. I am not forgotten. You know my name, my situation, my pain, and my hope. Thank You for seeing me. Amen.",
      "action": "Write 'El Roi sees me' somewhere you will see it today. Every time you feel overlooked or forgotten, read it."
    },
    {
      "title": "Spirit of Power",
      "verse": "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
      "ref": "2 Timothy 1:7",
      "theme": "#9b59b6",
      "reflection": "Fear, timidity, and anxiety are not from God. The Spirit you have received gives power — not arrogance, but Spirit-backed confidence. Love — not sentimentality, but active, sacrificial love. Self-discipline — not legalism, but focused, purposeful living. You have all three available right now.",
      "prayer": "Lord, I reject the spirit of fear. I receive power, love, and a sound mind today. Where I have been timid about sharing my faith, timid in my prayers, timid in my calling — I step into the power You have given me. Amen.",
      "action": "Do one thing today that fear has been stopping you from doing. Make the call. Send the message. Start the thing."
    },
    {
      "title": "Where Two or Three Gather",
      "verse": "For where two or three gather in my name, there am I with them.",
      "ref": "Matthew 18:20",
      "theme": "#3498db",
      "reflection": "You do not need a large gathering for Jesus to show up. Two people praying in agreement — He is there. Three believers worshipping together — He is there. He is not more present in a stadium than in a small room. The condition is not numbers. The condition is His name. Where He is the reason, He is there.",
      "prayer": "Lord, help me to never despise small beginnings. Whether I gather with one other person or one thousand, You are present. Thank You for the power of agreement in prayer. Lead me to pray with others this week. Amen.",
      "action": "Find one person to pray with this week — even over a phone call or WhatsApp voice note. Pray together for five minutes."
    },
    {
      "title": "The Prodigal's Return",
      "verse": "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
      "ref": "Luke 15:20",
      "theme": "#e74c3c",
      "reflection": "The father did not wait for a full apology. He did not check if the son had really changed. He SAW him, was filled with compassion, and RAN. God does not walk slowly toward returning sinners. He runs. No matter how far you have gone, God is already running toward you before you finish the sentence.",
      "prayer": "Father, I have wandered. I have been far from You — in my thoughts, my choices, my heart. But like the prodigal, I am returning. Run to me, Father. I am coming home. Amen.",
      "action": "Is there someone in your life who is the prodigal — far from God? Pray for their return today. And if it is you: turn and come home."
    },
    {
      "title": "Created for Good Works",
      "verse": "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      "ref": "Ephesians 2:10",
      "theme": "#2ecc71",
      "reflection": "You are not an accident. You are a handiwork — a masterpiece in progress. And your life is not random. The good works you are called to were prepared before you were born. God thought of your assignment before He formed you. Your purpose is not something you have to invent. It is something you have to discover.",
      "prayer": "Lord, show me the works You prepared for me. Not the works I chose for myself, but the ones You ordained. Lead me into the fullness of my assignment on this earth. I am available. Amen.",
      "action": "Write down three things you believe you were made to do — gifts, passions, abilities. Ask God: 'How do these serve Your Kingdom?'"
    },
    {
      "title": "Commanded to Love",
      "verse": "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples.",
      "ref": "John 13:34-35",
      "theme": "#f39c12",
      "reflection": "The proof that you follow Jesus is not your theological knowledge, your church attendance, or your spiritual gifts. It is love — specifically, love for other believers. When the world sees Christians genuinely loving each other across tribe, class, language, and culture, that is the most powerful argument for the gospel.",
      "prayer": "Lord, let love be my distinguishing mark. Where I have been harsh, let me be gentle. Where I have been indifferent, let me be present. Let people see You when they see how I treat others. Amen.",
      "action": "Identify one believer you have had tension with. Do one act of love toward them today — a kind word, a prayer, a kind gesture."
    },
    {
      "title": "Ask, Seek, Knock",
      "verse": "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
      "ref": "Matthew 7:7",
      "theme": "#9b59b6",
      "reflection": "Jesus uses three verbs that escalate in intensity: ask, seek, knock. Prayer is not passive. It is active pursuit. God responds to persistence not because He needs convincing, but because persistence reveals the depth of your desire and your trust in Him. Keep asking. Keep seeking. Keep knocking.",
      "prayer": "Lord, I bring my requests before You again — not because You forgot, but because I trust You enough to keep asking. Give me perseverance in prayer. I will not give up. Amen.",
      "action": "Write down three things you have stopped praying for because they seemed delayed. Pray for all three today."
    },
    {
      "title": "Salt of the Earth",
      "verse": "You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again?",
      "ref": "Matthew 5:13",
      "theme": "#3498db",
      "reflection": "Salt preserves, flavours, and heals wounds. Jesus says that is what you are to the world. You slow moral decay in your environment. You bring flavour — meaning, joy, purpose — to those around you. But salt must make contact to work. A sealed container of salt preserves nothing. You must engage your world.",
      "prayer": "Lord, keep me salty. Do not let comfort, busyness, or fear cause me to withdraw from the world You placed me in. Let me make contact — with my community, my street, my workplace — and let my presence make a difference. Amen.",
      "action": "Engage one person in your community today whom you have never spoken to. A neighbour, a colleague, a shopkeeper. Just a genuine human connection."
    },
    {
      "title": "God's Thoughts Toward You",
      "verse": "How precious to me are your thoughts, God! How vast is the sum of them! Were I to count them, they would outnumber the grains of sand.",
      "ref": "Psalm 139:17-18",
      "theme": "#e74c3c",
      "reflection": "God thinks about you constantly. Not occasional check-ins — constant, caring thoughts. More than the grains of sand on every beach. Every moment of every day, you are on God's mind. Not as a burden He tolerates, but as a treasure He thinks about tenderly and specifically.",
      "prayer": "Father, let the knowledge that You think about me constantly change how I think about myself. Where I have felt forgotten, remind me of Psalm 139. Where I feel insignificant, remind me that I am precious to You. Amen.",
      "action": "Close your eyes and spend 2 minutes receiving God's thoughts toward you. No asking. Just receiving. Let it be awkward — do it anyway."
    },
    {
      "title": "Resurrection Power",
      "verse": "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death.",
      "ref": "Philippians 3:10",
      "theme": "#2ecc71",
      "reflection": "The same power that raised Jesus from the dead lives in you. That is not poetry — it is theology. Resurrection power is available for dead situations: dead marriages, dead hope, dead dreams, dead faith. What God raised from a sealed tomb, He can raise from any situation in your life.",
      "prayer": "Lord, let resurrection power work in my life today. Speak to the dead places. What seems finished, buried, and sealed — let Your resurrection life break through. Nothing is too far gone for You. Amen.",
      "action": "Name one situation you have mentally written off as dead. Pray specifically for resurrection over it today."
    },
    {
      "title": "Led by the Spirit",
      "verse": "For those who are led by the Spirit of God are the children of God.",
      "ref": "Romans 8:14",
      "theme": "#f39c12",
      "reflection": "Being led by the Spirit is the normal Christian life — not an advanced spiritual experience for exceptional believers. Every child of God is meant to live responsively to the Spirit's leading: in daily decisions, in relationships, in direction. The Spirit speaks. The question is whether we are listening.",
      "prayer": "Holy Spirit, tune my ears to hear Your voice today. Speak in the decisions, in the pauses, in the unexpected moments. I commit to follow where You lead, even when it does not make immediate sense. Amen.",
      "action": "At every significant decision today, pause 30 seconds and ask: 'Holy Spirit, what is Your direction here?' Then listen."
    },
    {
      "title": "Do Justice, Love Mercy",
      "verse": "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
      "ref": "Micah 6:8",
      "theme": "#9b59b6",
      "reflection": "God is not primarily interested in religious performance. He is interested in your character in the world — are you just in your dealings, merciful in your relationships, and humble before Him? These three things, lived consistently, are more powerful than a thousand religious activities.",
      "prayer": "Lord, let justice, mercy, and humility be the three words that describe how I live. Show me where I have been unjust, unmerciful, or proud. Give me grace to change. Amen.",
      "action": "Ask yourself honestly: where in my life am I not acting justly? Where am I not showing mercy? Address one of these today."
    },
    {
      "title": "He Makes All Things New",
      "verse": "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'",
      "ref": "Revelation 21:5",
      "theme": "#3498db",
      "reflection": "God's speciality is newness. He made a new creation from chaos. He brought new life from dry bones. He raised the dead new from the grave. And He says: I am making everything new. Not I made, not I will make — I am making. Present tense. Active right now. In your situation.",
      "prayer": "Lord, I believe You are making things new — in my life, my family, my community, my nation. I do not need to understand how. I just need to trust the One who said these words are trustworthy and true. Amen.",
      "action": "Write the date today and write: 'God is making this new: [name one thing].' Keep it as a memorial for when you see the newness come."
    },
    {
      "title": "Strength in Weakness",
      "verse": "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
      "ref": "2 Corinthians 12:9",
      "theme": "#e74c3c",
      "reflection": "Paul asked God three times to remove his thorn. God did not remove it. He did something better — He revealed that His grace was sufficient for it, and that His power works best through human weakness. Your weakness is not a liability. In God's hands, it is the very place His power is most visible.",
      "prayer": "Lord, I stop hiding my weaknesses from You. I bring them into the open. Right here, in my weakness, let Your power rest on me. Let people see You — not my strength, not my ability — just You. Amen.",
      "action": "Share one weakness with God today that you have been too proud to acknowledge. Speak it out. Then receive His grace for it."
    },
    {
      "title": "Heavenly Citizenship",
      "verse": "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ.",
      "ref": "Philippians 3:20",
      "theme": "#2ecc71",
      "reflection": "You are a resident of earth but a citizen of heaven. Your ultimate allegiance, your deepest identity, your final destination is not in this world. This does not mean disengaging from earth — it means engaging with it from a heavenly perspective. You are an ambassador, not a permanent resident.",
      "prayer": "Lord, give me an eternal perspective today. Help me to invest in what lasts — souls, character, love — rather than what fades. Let heavenly citizenship shape how I spend my time, my money, and my energy. Amen.",
      "action": "Review your calendar and budget for the past week. What percentage served eternal purposes? What would you change?"
    },
    {
      "title": "Born Again",
      "verse": "Jesus replied, 'Very truly I tell you, no one can see the kingdom of God unless they are born again.'",
      "ref": "John 3:3",
      "theme": "#f39c12",
      "reflection": "Being born again is not a Christian cliché. It is a radical, supernatural transformation that starts in the spirit and works outward. You do not improve the old life — you receive a new one. If you have never made that decision personally, today can be the day. If you have, remember how significant that moment was.",
      "prayer": "Lord Jesus, thank You for the new birth. For giving me a spirit that was dead and making it alive. Let me never take that miracle for granted. And let me share it with everyone who has not yet received it. Amen.",
      "action": "If you have never personally given your life to Christ, do it now — tell Jesus you believe He died for you and you want to follow Him. If you have, share the plan of salvation with one person today."
    },
    {
      "title": "Emmanuel — God With Us",
      "verse": "The virgin will conceive and give birth to a son, and they will call him Immanuel — which means 'God with us.'",
      "ref": "Matthew 1:23",
      "theme": "#9b59b6",
      "reflection": "The most stunning thing about the Incarnation is not the miracles — it is the WITH. God chose to come and BE WITH us. Not to manage us from a distance, not to send instructions from heaven, but to walk among us, eat with us, feel what we feel. Emmanuel is not just a Christmas word. It is a daily reality.",
      "prayer": "Emmanuel, thank You for not staying distant. You came near. You came all the way. And You are still with me right now — every moment of this day. Let me live in the awareness of Your presence. Amen.",
      "action": "Throughout today, practise the presence of God. Every hour, simply acknowledge: 'You are here with me right now, Lord.' Do it until it becomes automatic."
    },
    {
      "title": "Complete in Him",
      "verse": "And in Christ you have been brought to fullness. He is the head over every power and authority.",
      "ref": "Colossians 2:10",
      "theme": "#3498db",
      "reflection": "In Christ, you lack nothing spiritually. You are complete — not partially done, not still being filled, but brought to fullness. Everything you need for life and godliness has already been given in Him. The problem is not that you lack. It is that you do not know, believe, or access what you already have.",
      "prayer": "Lord, open my eyes to what I already have in You. I stop striving to earn what You have freely given. I receive the fullness You have placed in me through Christ. Teach me to live from that fullness. Amen.",
      "action": "Read Colossians 1:9-12 slowly. Circle every word that describes what you have in Christ. Thank God for each one."
    },
    {
      "title": "The Battle Is the Lord's",
      "verse": "All those gathered here will know that it is not by sword or spear that the LORD saves; for the battle is the LORD's.",
      "ref": "1 Samuel 17:47",
      "theme": "#e74c3c",
      "reflection": "David said this to Goliath — a giant with armour and experience, standing against a teenager with a sling. The whole army of Israel was paralysed by fear. David ran toward the giant. Why? Because he understood something they did not: the battle was the Lord's, not his. He was just the vessel.",
      "prayer": "Lord, the giants I am facing are real. But the battle belongs to You. I position myself as David did — not in arrogance, but in clear-eyed faith that You fight for me. I run toward my Goliath today. Amen.",
      "action": "Name your Goliath — the one thing that has been making you shrink back. Run toward it today in one small, specific way."
    },
    {
      "title": "Not Ashamed of the Gospel",
      "verse": "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.",
      "ref": "Romans 1:16",
      "theme": "#2ecc71",
      "reflection": "Paul says I am NOT ashamed — implying there is a temptation to be. The gospel is offensive to pride. It says we cannot save ourselves. It is simple in a world that values complexity. It is exclusive in a world that demands inclusivism. But it is also the ONLY power that brings salvation. Own it with confidence.",
      "prayer": "Lord, take away every trace of shame about the gospel from my life. Let me speak it clearly, live it openly, and share it boldly — at work, on social media, with family, with strangers. I am not ashamed. Amen.",
      "action": "Share one gospel truth on your WhatsApp status or social media today. Not a quote — your own words, in your own voice."
    },
    {
      "title": "His Plans, Not Yours",
      "verse": "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
      "ref": "Jeremiah 29:11",
      "theme": "#f39c12",
      "reflection": "God spoke this to people in exile — in the worst season of their national life, 70 years from home. Yet He says: I KNOW the plans. Not 'I am working on plans' or 'I hope it works out.' He already knows. And they are good: prosperity, not harm, hope, a future. Exile is not the end of the story.",
      "prayer": "Lord, I receive Jeremiah 29:11 for my life today — not as a motivational poster but as a personal promise. Whatever exile I am in right now, You have good plans on the other side of it. I trust You. Amen.",
      "action": "Write Jeremiah 29:11 in your own words, personalised to your specific situation. Read it every morning this week."
    },
    {
      "title": "Abide in the Vine",
      "verse": "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
      "ref": "John 15:5",
      "theme": "#9b59b6",
      "reflection": "A branch does not produce fruit by trying harder. It produces fruit by staying connected to the vine. Fruitfulness is the natural result of abiding — remaining, staying, dwelling in Jesus. The crisis of the modern Christian life is not lack of activity. It is lack of abiding. Without the connection, nothing works.",
      "prayer": "Lord Jesus, I want to abide. Not just visit You when I need something, but remain in You constantly. Let my life be rooted so deeply in You that fruit becomes natural, not forced. Prune what needs pruning. Amen.",
      "action": "Remove one thing from your day today that disconnects you from God — social media, noise, a habit — and replace it with even 10 minutes of being still with Jesus."
    },
    {
      "title": "Run the Race",
      "verse": "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us.",
      "ref": "Hebrews 12:1",
      "theme": "#3498db",
      "reflection": "You are running a specific race — marked out for you, not for someone else. The witnesses cheering you on include Abraham, Moses, Esther, Paul — all who finished their race. Your job is not to run someone else's course but to finish yours. Throw off the weight. Drop the sin. Run YOUR race.",
      "prayer": "Lord, show me what is weighing me down. What is entangling me. I throw it off today by an act of my will. Give me the perseverance to keep running — even when I am tired, even when the end is not in sight. I will finish. Amen.",
      "action": "Identify one thing that is slowing your race — a habit, a relationship, a mindset. Take one concrete step today to put it down."
    },
    {
      "title": "Our Father",
      "verse": "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven.'",
      "ref": "Matthew 6:9-10",
      "theme": "#e74c3c",
      "reflection": "The Lord's Prayer begins not with your needs but with God's identity: Father. Hallowed — holy, honoured, revered — be Your name. Kingdom come. Will be done. You begin prayer by positioning God correctly in your mind. Everything else flows from that. Your Father in heaven. Not a distant force — a Father.",
      "prayer": "Father in heaven — I pause on those words today. You are MY Father. Holy, powerful, yet personal. Before I bring any request, I honour Your name. Your kingdom come into every corner of my life. Your will be done in me today. Amen.",
      "action": "Pray the Lord's Prayer slowly today, stopping at each phrase to think about what it means for your life right now."
    },
    {
      "title": "Steadfast Love",
      "verse": "Give thanks to the LORD, for he is good; his love endures forever.",
      "ref": "Psalm 118:1",
      "theme": "#2ecc71",
      "reflection": "The Hebrew word here for love is hesed — steadfast, covenant love. Not fragile, conditional, or seasonal. It endures forever. Through your worst days, your biggest failures, your longest winters. God's love for you does not fluctuate with your performance. It is a covenant. He is bound to you by His own nature.",
      "prayer": "Lord, I thank You that Your love does not end when I fail. It does not cool when I am cold. It does not leave when I run. Your hesed — Your steadfast, covenant love — is over me today and forever. I rest in that. Amen.",
      "action": "Say thank you to God for five things today. Not asking for anything — just thanking. Let gratitude be the atmosphere of your day."
    },
    {
      "title": "Set Your Mind Above",
      "verse": "Set your minds on things above, not on earthly things.",
      "ref": "Colossians 3:2",
      "theme": "#f39c12",
      "reflection": "Your mind goes where you set it. It is not passive — it follows the direction you give it. Set is an active, deliberate choice. The things above: God's reality, His perspective, His kingdom, His promises. This does not mean ignoring earthly problems. It means viewing them through a heavenly lens.",
      "prayer": "Lord, I set my mind above today. I choose to look at my circumstances from Your perspective rather than from the ground level. Give me the eyes of faith to see what You see. Amen.",
      "action": "For every problem you think about today, immediately follow it with the question: 'What does God say about this?' Find one scripture for your biggest concern."
    },
    {
      "title": "Blessed Are the Peacemakers",
      "verse": "Blessed are the peacemakers, for they will be called children of God.",
      "ref": "Matthew 5:9",
      "theme": "#9b59b6",
      "reflection": "Peacemakers are not peacekeepers who avoid conflict at all costs. They actively bring reconciliation where there is division. That requires courage — it is easier to take sides or stay silent. Jesus Himself was the ultimate Peacemaker, reconciling God and humanity through the cross. His children do the same work.",
      "prayer": "Lord, make me a peacemaker today. Where there is conflict around me, give me the courage to step in with reconciling love. Where I am the source of conflict, give me the humility to make it right. Amen.",
      "action": "Is there a broken relationship in your circle that you have been avoiding? Take one step toward reconciliation today — one message, one call, one honest conversation."
    },
    {
      "title": "The Spirit Intercedes",
      "verse": "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
      "ref": "Romans 8:26",
      "theme": "#3498db",
      "reflection": "When you do not know how to pray — when the situation is too complex, too painful, or too confusing for words — the Spirit prays for you. Wordless groans that carry more precision than your most eloquent prayer. You are never praying alone. And when your words fail, the Spirit's do not.",
      "prayer": "Holy Spirit, pray through me today for the things I do not know how to pray for. I open myself to Your intercession. Thank You that even when I am speechless, You are not. Amen.",
      "action": "Spend five minutes in silent prayer today. Do not use words. Just breathe, trust, and let the Spirit intercede."
    },
    {
      "title": "The Whole Armour Stands",
      "verse": "Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand.",
      "ref": "Ephesians 6:13",
      "theme": "#e74c3c",
      "reflection": "After you have done everything: stand. Sometimes the most powerful thing a believer can do is refuse to fall. Not advance dramatically. Not win visibly. Just stand. Hold the ground. Not give up. Not walk away. Not bow to pressure. Simply STAND — because you are wearing armour that was made for this.",
      "prayer": "Lord, I put on the full armour today. And whatever comes at me — I will stand. Not in my strength but in Yours. Not because circumstances change but because You never do. I will not bow. I will not run. I will stand. Amen.",
      "action": "Write the word STAND somewhere visible. Every time you see it today, declare: 'I stand in Jesus' name.'"
    },
    {
      "title": "He Who Calls Is Faithful",
      "verse": "The one who calls you is faithful, and he will do it.",
      "ref": "1 Thessalonians 5:24",
      "theme": "#2ecc71",
      "reflection": "God does not call you and then abandon you to figure it out alone. The calling comes with the One who called you. His faithfulness is the guarantee of completion — not your faithfulness, not your consistency, not your track record. He called. He is faithful. He will do it. Rest in that.",
      "prayer": "Lord, I rest in Your faithfulness today. What You started in my life, You will complete. I stop striving to maintain what only You can sustain. You called me. You will do it. I trust You. Amen.",
      "action": "Write down one thing God called you to that feels unfinished or uncertain. Under it write: 'He who called me is faithful. He will do it.' Keep it."
    }
  ],
  "yo": [
    {
      "title": "A Nifẹ̀ẹ́ Rẹ",
      "verse": "Nítorí Ọlọ́run fẹ́ àgbáyé tó bẹ́ẹ̀ gẹ́ẹ́ tí ó fi Ọmọ bíbí kanṣoṣo rẹ̀ fúnni, pé ẹnikẹ́ni tí ó bá gbàgbọ́ nínú rẹ̀ kì yóò ṣègbé, ṣùgbọ́n yóò ní ìyè àìnípẹ̀kun.",
      "ref": "Jòhánù 3:16",
      "theme": "#3498db",
      "reflection": "Kí o tó ṣe ohunkóhun láti jàre e, Ọlọ́run ti nífẹ̀ẹ́ rẹ pátápátá. Ìfẹ́ Rẹ̀ kò dá lórí bí o ṣe ń ṣe nǹkan, ìtàn ẹ̀yìn rẹ, tàbí agbára rẹ ọjọ́ iwájú. Ó dá lórí ẹ̀dá Rẹ̀ fúnra Rẹ̀. Òun NI ìfẹ́. Lónìí, gba ìfẹ́ yẹn — kì í ṣe gẹ́gẹ́ bí èrò kan, ṣùgbọ́n gẹ́gẹ́ bí òtítọ́ fún ìgbésí ayé rẹ fúnra rẹ.",
      "prayer": "Baba, mo dúpẹ́ lọ́wọ́ Rẹ pé O nífẹ̀ẹ́ mi kí n tó nífẹ̀ẹ́ Rẹ. Ràn mí lọ́wọ́ láti gba ìfẹ́ Rẹ jinlẹ̀ lónìí, kì í ṣe kìkì mọ̀ ọ́n ní orí mi. Jẹ́ kí ó yí ọ̀nà tí mo fi ń wo ara mi padà àti bí mo ṣe ń bá àwọn ẹlòmíràn lò. Ní orúkọ Jésù, Àmín.",
      "action": "Kọ ẹkùn kan sílẹ̀ nínú ìgbésí ayé rẹ tí ó ti ṣòro fún ọ láti gbàgbọ́ pé Ọlọ́run nífẹ̀ẹ́ rẹ. Sọ Jòhánù 3:16 lórí ẹkùn yẹn ní ìgbà mẹ́ta lónìí."
    },
    {
      "title": "Ó Ń Di Tuntun Ní Àràárọ̀",
      "verse": "Nítorí àánú Olúwa ni àwa kò fi ṣègbé, nítorí tí àánú Rẹ̀ kì í kùnà. Wọ́n ń di tuntun ní àràárọ̀; títóbi ni òtítọ́ Rẹ.",
      "ref": "Ìdárò 3:22-23",
      "theme": "#f39c12",
      "reflection": "Kò ṣe pàtàkì bí àná ṣe rí — ìkùnà, ìrẹ̀wẹ̀sì, ẹ̀ṣẹ̀, tàbí ìbànújẹ́ — ní òwúrọ̀ yìí àánú Ọlọ́run tún padà bẹ̀rẹ̀. Ìwọ kò gbé ẹrù àná wá sí òní. Àánú Rẹ̀ ṣẹ̀ṣẹ̀, ó bá àkókò yìí mu, kò sì lópin. Gbogbo ìlọ oòrùn jẹ́ ìkéde Ọlọ́run pé: a ń bẹ̀rẹ̀ padà.",
      "prayer": "Olúwa, mo dúpẹ́ pé n kò níláti ṣiṣẹ́ kára mi padà sọ́dọ̀ Rẹ. Àánú Rẹ ṣẹ̀ṣẹ̀ fún mi báyìí. Ràn mí lọ́wọ́ láti wọ ọjọ́ yìí láìsí ẹrù ohun tí ó ti kọjá. Mo gba oore-ọ̀fẹ́ Rẹ tuntun. Àmín.",
      "action": "Kí o tó wo fóònù rẹ tàbí bá ẹnikẹ́ni sọ̀rọ̀ lónìí, sọ jáde ní ohùn rara pé: 'Àánú Rẹ̀ ṣẹ̀ṣẹ̀ fún mi ní àràárọ̀ yìí.' Ṣe èyí fún ọjọ́ mẹ́ta ní ọ̀nà kan náà."
    },
    {
      "title": "Ó Ti Ṣíwájú Rẹ",
      "verse": "Olúwa fúnra Rẹ̀ yóò ṣíwájú rẹ, yóò sì wà pẹ̀lú rẹ; kì yóò fi ọ́ sílẹ̀, bẹ́ẹ̀ ni kì yóò kọ̀ ọ́ sílẹ̀. Má ṣe bẹ̀rù; má ṣe jẹ́ kí ọkàn rẹ dàrú.",
      "ref": "Diutarónómì 31:8",
      "theme": "#2ecc71",
      "reflection": "Ohunkóhun tí o bá ń wọlé lọ sí lónìí — ìjíròrò tí ó le, ìfọ̀rọ̀wánilẹ́nuwò iṣẹ́, ọjọ́ ọ̀la tí kò dájú — Ọlọ́run ti wà níbẹ̀ tẹ́lẹ̀. Kò rán ọ lọ nìkan. Ó ń ṣíwájú, ó ń rìn lẹ́gbẹ̀ẹ́, ó sì ń tọ̀ ọ́ lẹ́yìn. Ìwọ kò wọ ibikíbi lọ nìkan rí.",
      "prayer": "Baba, mo fi ìbẹ̀rù mi nípa ohun tí ń bọ̀ lé Ọ lọ́wọ́. Mo yàn láti gbàgbọ́ pé O ti ṣíwájú mi tẹ́lẹ̀ sí gbogbo ipò tí mo wà lónìí. Fún mi ní àlàáfíà Rẹ tí ó ré kọjá òye. Ní orúkọ Jésù, Àmín.",
      "action": "Dárúkọ ohun kan tí ó ń dá ọ láàmú ní ọ̀sẹ̀ yìí. Ṣí ọwọ́ rẹ payá, kí o sì wí pé: 'Olúwa, Ìwọ ń ṣíwájú mi sínú èyí. Mo gbẹ́kẹ̀lé ọ.'"
    },
    {
      "title": "A Yàn Ọ́, A Sì Pè Ọ́",
      "verse": "Ṣùgbọ́n ẹ̀yin ni ìran àyànfẹ́, oyè àlùfáà ọba, orílẹ̀-èdè mímọ́, ènìyàn àṣàyàn Ọlọ́run, kí ẹ̀yin lè fi ìyìn hàn ti Ẹni tí ó pè yín kúrò nínú òkùnkùn wá sínú ìmọ́lẹ̀ Rẹ̀ ìyanu.",
      "ref": "1 Pétérù 2:9",
      "theme": "#9b59b6",
      "reflection": "Ìwọ kì í ṣe àìróòótọ́. A yàn ọ́ — a fọwọ́ yàn ọ́ láti ọwọ́ Ọlọ́run kí a tó fi ìpìlẹ̀ ayé lélẹ̀. Ọlá-àṣẹ kì í ṣe ohun tí o gbọ́dọ̀ ṣàṣeyọrí; ó jẹ́ ohun tí o gbọ́dọ̀ gbà tí o sì ń rìn nínú rẹ̀. Ìdámọ̀ rẹ ti dá dúró ní ọ̀run kódà nígbà tí ó bá dà bí ẹni pé kò tí ì dá dúró lórí ilẹ̀ ayé.",
      "prayer": "Olúwa, jẹ́ kí n gbé lónìí láti inú jáde — láti inú ìdámọ̀ tí O ti fi fún mi, kì í ṣe láti ohun tí àwọn ẹlòmíràn ń sọ nípa mi tàbí bí mo ṣe rí ara mi. Èmi tirẹ ni. A yàn mí. A pè mí. Ràn mí kí n rìn bẹ́ẹ̀. Àmín.",
      "action": "Wá dígí lónìí. Wo ara rẹ, kí o sì wí pé: 'A yàn mí. Ọba ni mí. Ti Ọlọ́run ni mí.' Sọ ọ́ títí o fi gbà á gbọ́ ní ọkàn rẹ."
    },
    {
      "title": "Àlàáfíà Tí Ń Ṣọ́ Ọ",
      "verse": "Àlàáfíà Ọlọ́run, tí ó ré kọjá òye gbogbo, yóò sì pa ọkàn yín àti ìrò inú yín mọ́ nínú Kristi Jésù.",
      "ref": "Fílípì 4:7",
      "theme": "#3498db",
      "reflection": "Àlàáfíà Ọlọ́run kì í ṣe àìsí ìṣòro. Ó jẹ́ ẹ̀ṣọ́ àgbàyanu — ẹ̀ṣọ́ ológun — tí a fi ránṣẹ́ sí ẹnu ọ̀nà ọkàn àti ìrò inú rẹ. Nígbà tí àníyàn bá ń kànkùn, àlàáfíà ti dúró síbẹ̀ tẹ́lẹ̀. Ṣùgbọ́n a gba àlàáfíà yìí nípasẹ̀ àdúrà àti ọpẹ́, kì í ṣe nípasẹ̀ ipò tí ó pé rẹ́gí.",
      "prayer": "Baba, mo gbé àwọn èrò àníyàn mi wá sọ́dọ̀ Rẹ báyìí. Mo yàn ọpẹ́ dípò àníyàn. Mo ń bẹ̀bẹ̀ fún àlàáfíà tí ó ré kọjá òye mi láti dúró ṣọ́ ọkàn mi lónìí. Àmín.",
      "action": "Ṣe àkọsílẹ̀ ohun márùn-ún pàtó tí ìwọ ń dúpẹ́ fún ní báyìí. Ka Fílípì 4:6-7 lẹ́yìn ọ̀kọ̀ọ̀kan."
    },
    {
      "title": "A Ṣẹ́gun Ju Àṣẹ́gun Lọ",
      "verse": "Rárá, nínú gbogbo nǹkan wọ̀nyí àwa ṣẹ́gun ju àṣẹ́gun lọ nípasẹ̀ Ẹni tí ó nífẹ̀ẹ́ wa.",
      "ref": "Róòmù 8:37",
      "theme": "#e74c3c",
      "reflection": "Pọ́ọ̀lù kọ èyí láti inú ẹ̀wọ̀n. Wọ́n ti fọ́ ọkọ̀ ojú omi rẹ̀, wọ́n lù ú, wọ́n sì kọ̀ ọ́ sílẹ̀. Síbẹ̀, ó wí pé A ṢẸ́GUN JU àṣẹ́gun lọ. Kì í ṣe 'a lè ṣẹ́gun lọ́jọ́ kan' — ṣùgbọ́n A Ṣẹ́, ní àkókò yìí, nípasẹ̀ Ẹni tí ó nífẹ̀ẹ́ wa. Ìṣẹ́gun rẹ kò sí nínú àìsí ogun. Ó wà nínú ẹni tí ń bá ọ jà.",
      "prayer": "Olúwa, mo kọ̀ àmì ẹni tí a ṣẹ́ ní lónìí. Nípasẹ̀ Rẹ, olùṣẹ́gun ni mí. Ohunkóhun tí mo bá ń dojúkọ, mo ń dojúkọ rẹ̀ láti ipò ìṣẹ́gun tí a ti ṣẹ́gun tẹ́lẹ̀ ní àgbélébùú. Fún mi lókun láti gbé láti inú òtítọ́ yẹn lónìí. Àmín.",
      "action": "Kọ 'A ṣẹ́gun ju àṣẹ́gun lọ' sórí bébà kan, kí o sì fi í sí ibi tí ìwọ yóò rí i lónìí."
    },
    {
      "title": "Rìn Nínú Ẹ̀mí",
      "verse": "Nítorí náà mo wí pé, ẹ máa rìn nínú Ẹ̀mí, ẹ̀yin kì yóò sì mú ìfẹ́ ara ṣẹ.",
      "ref": "Gálátíà 5:16",
      "theme": "#2ecc71",
      "reflection": "Ojútùú sí ìjàkadì ara kì í ṣe agbára ìfẹ́-ọkàn tí a fi ọwọ́ dì mọ́lẹ̀. Ó jẹ́ rírìn — ìgbẹ́kẹ̀lé ojoojúmọ́, ìṣẹ́jú kọ̀ọ̀kan, nínú Ẹ̀mí Mímọ́. O kì í ṣẹ́gun ara nípa jíjà á le sí i. O ń dí ọ̀nà rẹ̀ nípa rírìn nínú Ẹ̀mí. Nígbà tí inú rẹ bá kún fún Ọlọ́run, kò sí àyè fún ohun tí kì í ṣe ti Ọlọ́run.",
      "prayer": "Ẹ̀mí Mímọ́, ṣíwájú mi lónìí nínú gbogbo ìpinnu — ohun tí mo sọ, ohun tí mo wò, ibi tí mo lọ, bí mo ṣe ń dáhùn. Mo fi ara mi fún ìtọ́sọ́nà Rẹ báyìí. Kún gbogbo àyè inú mi. Àmín.",
      "action": "Kí o tó ṣe ìpinnu pàtàkì tàbí ìjíròrò lónìí, dúró, kí o sì bi ara rẹ pé láìfọ̀rọ̀: 'Ẹ̀mí Mímọ́, báwo ni Ìwọ ó fẹ́ kí n dáhùn?'"
    },
    {
      "title": "Kọ́kọ́ Wá A",
      "verse": "Ṣùgbọ́n kọ́kọ́ wá ìjọba Rẹ̀ àti òdodo Rẹ̀, a ó sì fi gbogbo nǹkan wọ̀nyí kún un fún yín.",
      "ref": "Mátíù 6:33",
      "theme": "#f39c12",
      "reflection": "Jésù kò wí pé kìkì wá. Ó wí pé kọ́kọ́ WÁ. Ohun gbogbo yòókù — ìpèsè, ààbò, ìbáṣepọ̀, ète — ń wá lẹ́yìn tí a bá ti fi ìjọba náà lélẹ̀ ní àkọ́kọ́. Ọ̀pọ̀lọpọ̀ ènìyàn ń gbàdúrà nípa ohun gbogbo yàtọ̀ sí ohun tí Ọlọ́run sọ pé kí a kọ́kọ́ wá. Nígbà tí Ìjọba bá kọ́kọ́, ohun gbogbo yòókù á tẹ̀lé e.",
      "prayer": "Olúwa, mo ronú pìwàdà fún àwọn ìgbà tí mo wá ẹ̀bùn Rẹ ju Fúnni Rẹ lọ. Lónìí mo yàn láti kọ́kọ́ wá Ìjọba Rẹ àti òdodo Rẹ. Mo gbẹ́kẹ̀lé Ọ láti tọ́jú ohun gbogbo yòókù. Àmín.",
      "action": "Kí o tó ṣàyẹ̀wò ẹ̀rọ ìránṣẹ́ tàbí ayélujára rẹ ní àràárọ̀ yìí, lo ìṣẹ́jú márùn-ún láti ka ìwé mímọ́ tàbí gbàdúrà. Gbìyànjú èyí fún ọ̀sẹ̀ kan."
    },
    {
      "title": "Agbára Rẹ̀, Kì Í Ṣe Tìrẹ",
      "verse": "Mo lè ṣe ohun gbogbo nípasẹ̀ Kristi tí ó fún mi lókun.",
      "ref": "Fílípì 4:13",
      "theme": "#9b59b6",
      "reflection": "A sábà máa ń fa ẹsẹ yìí yọ gẹ́gẹ́ bí ìṣírí fún ìpèníjà líle. Ṣùgbọ́n Pọ́ọ̀lù kọ ọ́ nínú ọ̀rọ̀ ìtẹ́lọ́rùn — kíkọ́ láti ní ìtẹ́lọ́rùn nínú ọ̀pọ̀ àti nínú àìní. Agbára tí Ọlọ́run fúnni kì í ṣe fún ìṣọ̀wọ̀. Ó jẹ́ fún ríwá kiri nígbà tí ohun gbogbo nínú rẹ fẹ́ juwọ́ sílẹ̀ tàbí tẹrí ba.",
      "prayer": "Baba, mo jẹ́wọ́ pé n kò lágbára tó fún èyí nínú agbára ara mi. Ṣùgbọ́n Ìwọ lágbára. Mo gbára lé Ọ lónìí — kì í ṣe lórí ọgbọ́n mi, ìbátan mi, tàbí ìtàn mi. Agbára Rẹ ń pé nínú àìlera mi. Àmín.",
      "action": "Dárúkọ ohun tí ó le jùlọ tí ìwọ ń dojúkọ báyìí. Gbàdúrà Fílípì 4:13 pàtó lórí ipò yẹn, ní ohùn rara."
    },
    {
      "title": "A Pè Ọ́ Láti Dárí Jì",
      "verse": "Ẹ jẹ́ onínúure àti aláàánú fún ara yín, kí ẹ máa dárí jì ara yín, gẹ́gẹ́ bí Ọlọ́run ṣe fi ti Kristi dárí jì yín.",
      "ref": "Éfésù 4:32",
      "theme": "#3498db",
      "reflection": "Ìdáríjì kì í ṣe wíwí pé ohun tí ó ṣẹlẹ̀ dára. Ó jẹ́ tí ìdásílẹ̀ ẹnìkan kúrò nínú gbèsè tí wọ́n jẹ ọ́ — àti tí ìdásílẹ̀ ara rẹ kúrò nínú ẹ̀wọ̀n ìkorò. Ọlọ́run kò dárí jì ọ́ nítorí pé o yẹ ọ́. Ó dárí jì ọ́ nítorí pé ó tọ̀nà. Báyìí ni Ó ń béèrè lọ́wọ́ rẹ láti ṣe bẹ́ẹ̀ fún àwọn ẹlòmíràn.",
      "prayer": "Olúwa, mo gbé ẹni tí ó pa mi lára wá sọ́dọ̀ Rẹ. Mo yàn ìdáríjì lónìí, kì í ṣe nítorí ìmọ̀lára náà ti dé, ṣùgbọ́n gẹ́gẹ́ bí ìṣe ìgbọràn. Wo ọgbẹ́ inú mi sàn, kí o sì dá mi sílẹ̀ kúrò nínú ìkorò. Ní orúkọ Jésù. Àmín.",
      "action": "Ṣé ẹnìkan wà tí ìwọ nílò láti dáríjì? Kọ orúkọ wọn sílẹ̀. Gbàdúrà àdúrà yìí fún wọn: 'Olúwa, bùkún [orúkọ]. Mo dá wọn sílẹ̀, mo sì dá ara mi sílẹ̀.' Ṣe é lójoojúmọ́ ọ̀sẹ̀ yìí."
    },
    {
      "title": "Ọ̀rọ̀ Tí Kì Í Padà Lásán",
      "verse": "Bẹ́ẹ̀ ni ọ̀rọ̀ mi tí ó ti ẹnu mi jáde yóò rí: kì yóò padà sí ọ̀dọ̀ mi lásán, ṣùgbọ́n yóò ṣe ohun tí mo fẹ́, yóò sì mú àṣeyọrí wá sí ète tí mo rán an fún.",
      "ref": "Aísáyà 55:11",
      "theme": "#2ecc71",
      "reflection": "Ìgbàkígbà tí o bá pín ìwé mímọ́, sọ ìlérí lórí ìgbésí ayé rẹ, tàbí kéde ìhìnrere fún ẹnikẹ́ni — àwọn ọ̀rọ̀ wọ̀nyẹn kì í ṣòfo. Ọlọ́run fi ẹ̀yìn wọn lélẹ̀. Wọ́n ru agbára àtọ̀runwá, wọ́n sì ń ba ọkàn tí o kò lè rí inú rẹ̀ lò. O gbìn, o sì bomi rin. Ọlọ́run ni ó ń mú un dàgbà.",
      "prayer": "Baba, fún mi ní ìgboyà láti sọ Ọ̀rọ̀ Rẹ lónìí — fún ara mi nínú ìgbàgbọ́, àti fún àwọn ẹlòmíràn nínú ìfẹ́. Mo gbẹ́kẹ̀lé pé ohun tí Ìwọ ti sọ yóò ṣe gẹ́gẹ́ bí ohun tí Ìwọ ní lọ́kàn. Kò sí irúgbìn tí ó ṣòfo. Àmín.",
      "action": "Pín ìwé mímọ́ kan fún ẹnìkan lónìí — ọ̀rẹ́, ẹbí, tàbí alábàáṣiṣẹ́. Ó lè jẹ́ nípasẹ̀ ọ̀rọ̀ ìránṣẹ́. Kàn rán an."
    },
    {
      "title": "Yọ̀ Nínú Olúwa",
      "verse": "Yọ̀ nínú Olúwa pẹ̀lú; yóò sì fún ọ ní ìfẹ́-ọkàn rẹ.",
      "ref": "Sáàmù 37:4",
      "theme": "#f39c12",
      "reflection": "Èyí kì í ṣe àgbékalẹ̀ fún gbígba ohun tí o fẹ́. Ó jẹ́ ìyípadà ohun tí o fẹ́. Nígbà tí o bá yọ̀ ní tòótọ́ nínú Ọlọ́run — kì í ṣe nínú ohun tí Ó lè ṣe fún ọ — àwọn ìfẹ́-ọkàn rẹ á yí padà. Wọ́n á bára wọn mu pẹ̀lú ìfẹ́ Rẹ̀. Nígbà náà ni Ó á fún ọ ní i, nítorí ohun tí o fẹ́ ti di ohun tí Òun náà fẹ́ fún ọ.",
      "prayer": "Olúwa, kọ́ mi láti yọ̀ nínú Rẹ — kì í ṣe kìkì nínú ìbùkún Rẹ, kì í ṣe kìkì nínú àdúrà tí a dá lóhùn, ṣùgbọ́n nínú Ìwọ fúnra Rẹ. Jẹ́ ayọ̀ ọkàn mi lónìí. Tún ìfẹ́-ọkàn mi ṣe kí ó bára Rẹ mu. Àmín.",
      "action": "Lo ìṣẹ́jú mẹ́wàá nínú ìjọsìn lónìí láìsí ìbéèrè kankan — kìkì sísọ ohun tí ìwọ nífẹ̀ẹ́ sí nínú Ọlọ́run fún Un. Láìsí ète. Kìkì yíyọ̀."
    },
    {
      "title": "Àṣẹ Ńlá Náà",
      "verse": "Nítorí náà, ẹ lọ, kí ẹ sì máa sọ gbogbo orílẹ̀-èdè di ọmọ ẹ̀yìn, ẹ ń tẹ̀ wọ́n bọ omi ní orúkọ Baba, àti Ọmọ, àti Ẹ̀mí Mímọ́.",
      "ref": "Mátíù 28:19",
      "theme": "#e74c3c",
      "reflection": "A fún àwọn ènìyàn lásán ní àṣẹ yìí — apẹja, agbowó orí, àwọn obìnrin tí a mú láradá kúrò nínú àìsàn. Jésù kò dúró de ẹni tí ó pé. Ó fi àṣẹ fún àwọn tí ó wà. Àṣẹ Ńlá Náà kì í ṣe àbá fún àwọn òjíṣẹ́ ìgbà kíkún. Ó jẹ́ àṣẹ fún gbogbo onígbàgbọ́.",
      "prayer": "Olúwa, dárí jì mí fún àwọn ìgbà tí mo pa ìhìnrere mọ́ fún ara mi nìkan. Fún mi ní ìgboyà láti pín in lónìí — pẹ̀lú ẹnikẹ́ni tí Ìwọ bá fi sí ọ̀nà mi. Lo ìgbésí ayé mi lásán gẹ́gẹ́ bí ẹ̀rí àrà tí Ìwọ fi hàn nípa oore-ọ̀fẹ́ Rẹ. Àmín.",
      "action": "Ronú nípa ẹnìkan nínú ìgbésí ayé rẹ tí kò tí ì mọ Jésù. Gbàdúrà fún wọn pẹ̀lú orúkọ wọn lónìí. Nígbà náà, béèrè lọ́wọ́ Ọlọ́run fún àkókò tí ó tọ́ láti pín ìhìnrere fún wọn ní ọ̀sẹ̀ yìí."
    },
    {
      "title": "Gbẹ́kẹ̀lé Pẹ̀lú Gbogbo Ọkàn Rẹ",
      "verse": "Gbẹ́kẹ̀lé Olúwa pẹ̀lú gbogbo ọkàn rẹ; má sì gbára lé òye ara rẹ; ní gbogbo ọ̀nà rẹ, kí ìwọ jẹ́wọ́ Rẹ̀, Òun yóò sì tọ́ ọ̀nà rẹ tọ́nà.",
      "ref": "Òwe 3:5-6",
      "theme": "#9b59b6",
      "reflection": "Gbígbára lé òye ara rẹ ni ohun tí ó rọrùn jùlọ láyé. Ṣùgbọ́n Ọlọ́run wí pé ọ̀nà tí ó dára ju wà: gbẹ́kẹ̀lé pẹ̀lú GBOGBO ọkàn rẹ — kì í ṣe ìpín kan, kì í ṣe nígbà tí ó bá yé ọ, ṣùgbọ́n gbogbo rẹ̀. Ọ̀nà náà ń tọ́ kì í ṣe nítorí ilẹ̀ tí ó yí padà, ṣùgbọ́n nítorí pé o dáwọ́ dúró láti máa gbé nìkan.",
      "prayer": "Olúwa, àwọn nǹkan wà nínú ìgbésí ayé mi báyìí tí n kò yé. Mo yàn láti gbẹ́kẹ̀lé Ọ pẹ̀lú wọn kúkú ju láti gbìyànjú láti wá ojútùú fún ara mi. Tọ́ ọ̀nà mi gẹ́gẹ́ bí ọgbọ́n Rẹ. Àmín.",
      "action": "Dá ipò kan tí ìwọ ti ń gbára lé òye ara rẹ ju Ọlọ́run lọ mọ̀. Kọ 'Mo fi èyí fún Ọ, Olúwa' sílẹ̀, kí o sì tọ́jú rẹ̀ ní ibi tí ìwọ yóò rí i."
    },
    {
      "title": "Odò Omi Ìyè",
      "verse": "Ẹnikẹ́ni tí ó bá gbà mí gbọ́, gẹ́gẹ́ bí Ìwé Mímọ́ ti wí, odò omi ìyè yóò ti inú rẹ̀ ṣàn jáde.",
      "ref": "Jòhánù 7:38",
      "theme": "#3498db",
      "reflection": "Jésù kò ṣèlérí ìsun kékeré. Ó ṣèlérí odò — ọ̀pọ̀lọpọ̀, tí ń ṣàn, agbára. Ẹ̀mí Mímọ́ nínú rẹ kì í ṣe adágún omi tí ìwọ yóò jókòó sí jẹ́ẹ́. Odò tí ń ṣàn láti inú rẹ LỌ sí ọ̀dọ̀ àwọn ẹlòmíràn ni. Ìgbésí ayé rẹ ní láti mú ìtura wá fún gbogbo ẹni tí ó yí ọ ká. Ìyẹn ń ṣẹlẹ̀ nìkan nígbà tí o bá dúró ní ìsopọ̀ pẹ̀lú Orísun náà.",
      "prayer": "Ẹ̀mí Mímọ́, ṣàn nínú mi lónìí. Jẹ́ kí ìyè Rẹ tú jáde láti inú mi sí gbogbo ẹni tí mo bá pàdé — ẹbí mi, alábàáṣiṣẹ́ mi, àjèjì tí mo kọjá lọ́nà. Sọ mí di ìbùkún ní ibikíbi tí mo bá lọ. Àmín.",
      "action": "Ṣe ìṣe ìṣàánú kan pàtó fún ẹnìkan tí a kò retí lónìí. Jẹ́ kí odò náà ṣàn."
    },
    {
      "title": "Dákẹ́ Jẹ́ẹ́",
      "verse": "Ó wí pé, 'Ẹ dákẹ́ jẹ́ẹ́, kí ẹ sì mọ̀ pé Èmi ni Ọlọ́run: A ó gbé mi ga láàrin àwọn orílẹ̀-èdè, a ó gbé mi ga ní ayé.'",
      "ref": "Sáàmù 46:10",
      "theme": "#2ecc71",
      "reflection": "A sọ èyí fún àwọn ènìyàn tí ó wà láàrin ìdààmú — àwọn orílẹ̀-èdè ń ru sókè, àwọn ìjọba ń wó lulẹ̀. Síbẹ̀ Ọlọ́run wí pé: dákẹ́ jẹ́ẹ́. Kì í ṣe nítorí ipò náà ti yanjú, ṣùgbọ́n nítorí Ó NI ỌLỌ́RUN. Dídákẹ́ jẹ́ẹ́ kì í ṣe àìṣiṣẹ́. Ó jẹ́ ìgbẹ́kẹ̀lé tí ń ṣiṣẹ́ nínú Ẹni tí ó ń dì gbogbo nǹkan mú. O lè dákẹ́ jẹ́ẹ́ nítorí Òun ni ọba aláṣẹ.",
      "prayer": "Olúwa, mo yàn láti dákẹ́ jẹ́ẹ́ lónìí láàrin gbogbo ariwo. Mo kéde pé Ìwọ ni Ọlọ́run — lórí ipò mi, orílẹ̀-èdè mi, ẹbí mi, ọjọ́ ọ̀la mi. Mo sinmi nínú ọlá àṣẹ Rẹ. Àmín.",
      "action": "Ṣètò àmì ìṣẹ́jú márùn-ún lónìí, kí o sì má ṣe ohunkóhun nígbà tí ó bá ń dún. Láìsí fóònù. Láìsí ariwo. Kìkì dídákẹ́ jẹ́ẹ́ níwájú Ọlọ́run."
    },
    {
      "title": "Ìhámọ́ra Ọlọ́run",
      "verse": "Ẹ gbé ìhámọ́ra Ọlọ́run kíkún wọ̀, kí ẹ̀yin lè lè dúró gbọn-in-gbọn-in lòdì sí àrékérekè èṣù.",
      "ref": "Éfésù 6:11",
      "theme": "#e74c3c",
      "reflection": "A kì í gbé ìhámọ́ra wọ̀ láìròtẹ́lẹ̀. A gbé e wọ̀ — pẹ̀lú ìpinnu, ẹ̀yà kọ̀ọ̀kan, ojoojúmọ́. Àmùrè òtítọ́. Ìbòjú-àyà òdodo. Bàtà àlàáfíà. Àpáta ìgbàgbọ́. Àṣíborí ìgbàlà. Idà Ẹ̀mí. O wọṣọ ara rẹ lójoojúmọ́. Mélòó mélòó ni ìwọ yóò ṣe wọ ẹ̀mí rẹ láṣọ?",
      "prayer": "Olúwa, mo gbé ìhámọ́ra Ọlọ́run kíkún wọ̀ báyìí. Mo dúró gbọn-in-gbọn-in lòdì sí gbogbo àrékérekè ọ̀tá lónìí — nínú èrò mi, ìbáṣepọ̀ mi, ọrọ̀ mi, ara mi. Agbára Rẹ̀ ni ó ń dáàbò bò mí, kì í ṣe agbára tèmi. Àmín.",
      "action": "Gbàdúrà ẹ̀yà ìhámọ́ra kọ̀ọ̀kan nínú Éfésù 6:13-17 lẹ́ẹ̀kọ̀ọ̀kan, kí o sì dárúkọ bí ó ṣe kan ìgbésí ayé rẹ lónìí."
    },
    {
      "title": "Ru Ẹrù Ara Yín",
      "verse": "Ẹ máa ru ẹrù ara yín, bẹ́ẹ̀ ni ẹ ó sì mú òfin Kristi ṣẹ.",
      "ref": "Gálátíà 6:2",
      "theme": "#f39c12",
      "reflection": "Ìsìn Kristi kì í ṣe eré tí a ń ṣe nìkan. A pè wa sí àwùjọ — àwùjọ tòótọ́, tí a sì fi ojúlówó fi ẹrù ara wọn hàn. Ó nílò ìṣí-payá lọ́wọ́ àwọn tí ń jìjàkadì, àti ìfẹ́-inú lọ́wọ́ àwọn tí ó lágbára. Òfin Kristi ni ìfẹ́. O mú un ṣẹ nígbà tí o bá dáwọ́ díbọ́n dúró tí o sì bẹ̀rẹ̀ sí í ṣe ìtọ́jú tòótọ́.",
      "prayer": "Olúwa, fi hàn mí ẹni tí ó ń ru ẹrù kan báyìí nínú ìgbésí ayé mi. Fún mi ní ìmọ̀ tí yóò jẹ́ kí n ṣàkíyèsí àti ìgboyà láti bèèrè bí n ṣe lè ràn wọ́n lọ́wọ́. Níbi tí èmi náà ń jìjàkadì, fún mi ní ìrẹ̀lẹ̀ láti jẹ́ kí ẹnìkan ràn mí lọ́wọ́. Àmín.",
      "action": "Fi ìránṣẹ́ ránṣẹ́ sí ẹnìkan lónìí pé: 'Mo ti ń ronú nípa rẹ. Báwo gan-an ni o ṣe rí?' Múra sílẹ̀ láti tẹ́tí sí wọn ní tòótọ́."
    },
    {
      "title": "Ìyè Àṣejù",
      "verse": "Olè kì í wá bí kò ṣe láti jalè, àti láti pa, àti láti parun: èmi wá kí wọn lè ní ìyè, kí wọn sì lè ní i ní àṣejù.",
      "ref": "Jòhánù 10:10",
      "theme": "#9b59b6",
      "reflection": "Ìyè àṣejù kì í ṣe àgbékalẹ̀ ọrọ̀. Ó jẹ́ ìdíwọ̀n ìgbésí ayé — tí ó ní ète, àlàáfíà, ìwàníhìn-ín, àti agbára lọ́pọ̀lọ́pọ̀ — tí Jésù nìkan ń fúnni. Ète ọ̀tá ni yíyọ kúrò nígbà gbogbo: jí ayọ̀ rẹ, pa ìrètí rẹ, run àwọn ìbáṣepọ̀ rẹ. Ète Jésù ni fífikún nígbà gbogbo: ìyè tí ó pọ̀ jù, ìyè tí ó kún, ìyè gidi.",
      "prayer": "Olúwa Jésù, mo kọ̀ àwọn irọ́ ti olè náà tí ó ń sọ fún mi pé kí n ní kéré — ìrètí kéré, ayọ̀ kéré, ète kéré. Mo gba ìyè kíkún tí Ìwọ wá láti fún. Fi hàn mí níbi tí mo ti fi ara mi sílẹ̀ fún ìwàláàyè lásán nígbà tí Ìwọ ṣèlérí àṣejù. Àmín.",
      "action": "Bi ara rẹ ní tòótọ́: ní ibo ni mo ti ń gbé ní ipò ìwàláàyè lásán dípò àṣejù? Mú ẹkùn yẹn wá sọ́dọ̀ Ọlọ́run nínú àdúrà lónìí."
    },
    {
      "title": "Ìgbàgbọ́ Tí Ń Yí Òkè Padà",
      "verse": "Lóòótọ́ ni mo wí fún yín, bí ẹ̀yin bá ní ìgbàgbọ́ bí i ọkà musitadi, ẹ̀yin yóò wí fún òkè yìí pé, 'Kúrò níhìn-ín lọ sí ọ̀hún,' yóò sì kúrò; kò sì sí ohun tí kì yóò ṣeéṣe fún yín.",
      "ref": "Mátíù 17:20",
      "theme": "#3498db",
      "reflection": "Ìṣòro náà kì í ṣe ìwọ̀n ìgbàgbọ́ rẹ rí. Ọkà musitadi kéré. Ìṣòro náà ni ibi tí ìgbàgbọ́ rẹ dojú kọ. Ìgbàgbọ́ tí ó dojú kọ Ọlọ́run — Ẹni tí ó lè yí àwọn òkè padà ní tòótọ́ — ń ṣiṣẹ́. Ìgbàgbọ́ tí ó dojú kọ agbára ara rẹ, ipò rẹ, tàbí ìmọ̀lára rẹ kì í ṣiṣẹ́. Dojú kọ ìgbàgbọ́ rẹ sí Ẹni tí ó tọ́.",
      "prayer": "Olúwa, mo dojú kọ ìgbàgbọ́ mi sí Ọ lónìí — kì í ṣe sí ipò náà, kì í ṣe sí bí ìṣòro náà ṣe tóbi tó, kì í ṣe sí bí mo ṣe nímọ̀lára. Ìwọ ni Olùyí-Òkè-Padà. Bá àwọn òkè inú ìgbésí ayé mi sọ̀rọ̀. Mo gbà Ọ gbọ́. Àmín.",
      "action": "Dárúkọ 'òkè' tí ó tóbi jù lọ nínú ìgbésí ayé rẹ báyìí. Bá a sọ̀rọ̀ ní tòótọ́ — sọ jáde ní ohùn rara pé: '[Orúkọ ipò náà], kúrò ní orúkọ Jésù.' Nígbà náà gbẹ́kẹ̀lé."
    },
    {
      "title": "Sáàmù 23: Ìtọ́jú Olùṣọ́-Àgùntàn",
      "verse": "Olúwa ni olùṣọ́ àgùntàn mi; n kì yóò ṣaláìní ohunkóhun.",
      "ref": "Sáàmù 23:1",
      "theme": "#2ecc71",
      "reflection": "Ọ̀rọ̀ mẹ́rin — 'n kì yóò ṣaláìní ohunkóhun' — ni ìparí ti níní Olúwa gẹ́gẹ́ bí Olùṣọ́-Àgùntàn. Ó ń pèsè ìsinmi, ìmúbọ̀sípò, ìtọ́sọ́nà, ààbò, àti ìtùnú. Kódà nínú àfonífojì òjìji ikú, Ó wà níbẹ̀. Kódà níwájú àwọn ọ̀tá, Ó ń pèsè tábìlì. Olùṣọ́-Àgùntàn rẹ kì í fi ojúṣe sílẹ̀ rí.",
      "prayer": "Olúwa, Ìwọ ni Olùṣọ́-Àgùntàn mi lónìí. Mo gba ìsinmi tí Ìwọ ń pèsè, ìmúbọ̀sípò tí Ìwọ ń fúnni, ọ̀nà tí Ìwọ ti yàn fún mi. Kódà nínú àfonífojì tí ó dúdú jùlọ, Ìwọ wà pẹ̀lú mi. N kì yóò bẹ̀rù. Àmín.",
      "action": "Ka gbogbo Sáàmù 23 lọ́pọ̀ ìgbà. Fún ẹsẹ kọ̀ọ̀kan, kọ ọ̀nà kan pàtó tí Ọlọ́run ti jẹ́ ohun náà fún ọ ní oṣù tí ó kọjá."
    },
    {
      "title": "Ẹ Má Rẹ̀wẹ̀sì",
      "verse": "Ẹ má sì jẹ́ kí a rẹ̀wẹ̀sì ní ṣíṣe rere, nítorí ní àkókò tí ó yẹ a ó ká èso bí a kò bá dàrú.",
      "ref": "Gálátíà 6:9",
      "theme": "#f39c12",
      "reflection": "Ìrẹ̀wẹ̀sì nínú ṣíṣe rere jẹ́ nǹkan gidi. Fífúnni, sísìn, gbígbàdúrà, dídúró de — láìsí àbájáde tí a lè rí — máa ń dá àwọn ènìyàn lára. Ṣùgbọ́n ìkórè ní àkókò tí ó yẹ tí ó wà lọ́wọ́ Ọlọ́run, kì í ṣe lọ́wọ́ rẹ. Iṣẹ́ rẹ kì í ṣe láti mú ìkórè náà wá. Iṣẹ́ rẹ ni láti má ṣe juwọ́ sílẹ̀ lórí gbígbìn.",
      "prayer": "Olúwa, ara ti ń rẹ̀ mí. Ṣùgbọ́n mo yàn láti má juwọ́ sílẹ̀. Mo gbẹ́kẹ̀lé pé ohun tí mo ń gbìn — nínú àdúrà, nínú iṣẹ́, nínú ìgbàgbọ́ — yóò mú ìkórè wá ní àkókò tí ó tọ́ pátápátá. Fún mi ní okun láti máa tẹ̀síwájú. Àmín.",
      "action": "Ronú nípa ibi kan tí ó fẹ́rẹ̀ẹ́ jẹ́ kí o juwọ́ sílẹ̀. Kọ ìdí tí o fi bẹ̀rẹ̀ sílẹ̀. Ka a ní àràárọ̀ ọ̀sẹ̀ yìí."
    },
    {
      "title": "Ìrò Inú Tí A Yí Padà",
      "verse": "Ẹ má sì báramu pẹ̀lú ayé yìí, ṣùgbọ́n kí a yí yín padà nípa ìtúnṣe ọkàn yín, kí ẹ̀yin lè fi ìdánwò mọ ohun tí ìfẹ́ Ọlọ́run jẹ́, èyí tí ó dára, tí ó sì tẹ́ni lọ́rùn, tí ó sì pé.",
      "ref": "Róòmù 12:2",
      "theme": "#9b59b6",
      "reflection": "Ìyípadà máa bẹ̀rẹ̀ ní ọkàn. Ayé ń gbìyànjú láti sọ ọ́ di ìbámu nígbà gbogbo — nípasẹ̀ agbéròyìnjáde, àṣà, ìdíyelé àwọn ẹgbẹ́, àti ìfiwéra. Ògùn náà kì í ṣe agbára ìfẹ́-ọkàn ṣùgbọ́n ìmúpadàbọ̀sípò. Ìfarahàn Ọ̀rọ̀ Ọlọ́run lójoojúmọ́ ń yí ọ̀nà tí o fi ń ronú padà. Ọkàn tí a mú padàbọ̀ ń rí ìfẹ́ Ọlọ́run kedere. Ọkàn tí a kò tí ì mú padàbọ̀ kò lè.",
      "prayer": "Olúwa, mú ọkàn mi padàbọ̀ lónìí. Fi òtítọ́ Rẹ rọ́pò gbogbo irọ́ tí mo ti gbàgbọ́. Ràn mí lọ́wọ́ láti ronú yàtọ̀ — nípa ara mi, nípa àwọn ẹlòmíràn, nípa ayé — ní ọ̀nà tí ó fi ojú ìwòye Rẹ hàn. Àmín.",
      "action": "Dá irọ́ pàtó kan mọ̀ tí ìwọ ti ń gbàgbọ́ — nípa ara rẹ, Ọlọ́run, tàbí ọjọ́ ọ̀la rẹ. Wá ìwé mímọ́ tí ó bá tako rẹ̀ tààrà, kí o sì kọ ọ́ sórí ọkàn rẹ ní ọ̀sẹ̀ yìí."
    },
    {
      "title": "Ẹ Gbàdúrà Láìsinmi",
      "verse": "Ẹ máa yọ̀ nígbà gbogbo, ẹ máa gbàdúrà láìsinmi, ẹ máa dúpẹ́ nínú ohun gbogbo: nítorí èyí ni ìfẹ́ Ọlọ́run nípa yín nínú Kristi Jésù.",
      "ref": "1 Tẹsalóníkà 5:16-18",
      "theme": "#3498db",
      "reflection": "Gbígbàdúrà láìsinmi kì í ṣe wíwà lórí eékún fún wákàtí mẹ́rìnlélógún. Ó jẹ́ ìwà ṣíṣí sílẹ̀ nígbà gbogbo fún Ọlọ́run — ìgbésí ayé ìbánisọ̀rọ̀ pẹ̀lú Rẹ̀ ní gbogbo ọjọ́. Nínú ọ̀nà, ní iṣẹ́, nígbà tí o bá ń ṣe oúnjẹ, nígbà tí o bá ń rìn. Gbogbo ọjọ́ rẹ á di àdúrà nígbà tí Ọlọ́run wà ní ìyẹwù nígbà gbogbo.",
      "prayer": "Olúwa, kọ́ mi láti gbàdúrà láìsinmi — kì í ṣe kìkì ní àkókò ìsìn tí a yà sọ́tọ̀ ṣùgbọ́n nínú gbogbo ọjọ́ mi. Jẹ́ kí n mọ ìhà Rẹ tó bẹ́ẹ̀ tí gbogbo ìṣẹ́jú á di ìjíròrò pẹ̀lú Rẹ. Àmín.",
      "action": "Ṣètò àmì mẹ́ta lórí fóònù rẹ lónìí, tí a yà sọ́tọ̀ jákèjádò ọjọ́. Nígbà tí ọ̀kọ̀ọ̀kan bá ń dún, dúró fún ìṣẹ́jú-aáyá 60 kí o sì bá Ọlọ́run sọ̀rọ̀ ní tààrà nípa ohunkóhun tí ń ṣẹlẹ̀ ní àkókò yẹn."
    },
    {
      "title": "Ẹ Wá Sọ́dọ̀ Mi",
      "verse": "Ẹ wá sọ́dọ̀ mi, gbogbo ẹ̀yin tí ń ṣe làálàá, tí ẹ sì di ẹrù wíwúwo, èmi yóò sì fún yín ní ìsinmi. Ẹ gbé àjàgà mi wọ̀, kí ẹ sì kọ́ ẹ̀kọ́ lọ́dọ̀ mi; nítorí onínú tútù ni mí, ọkàn mi sì rẹ̀ sílẹ̀, ẹ̀yin yóò sì rí ìsinmi fún ọkàn yín.",
      "ref": "Mátíù 11:28-29",
      "theme": "#e74c3c",
      "reflection": "Jésù ni ó ń sọ èyí — kì í ṣe ètò kan, kì í ṣe ètò ìsìn, kì í ṣe àwọn òfin. Jésù fúnra Rẹ̀ wí pé ẹ wá sọ́dọ̀ MI. Kò wí pé ṣe ara rẹ ní ojúlówó ná. Kò wí pé wá nígbà tí ó bá ti wà déédé. Ó wí pé wá gẹ́gẹ́ bí ìwọ ti rí, tí ó rẹ̀ ọ́, tí o sì jẹ́ ẹrù wíwúwo, èmi yóò sì fún ọkàn rẹ ní ìsinmi.",
      "prayer": "Jésù, mo wá sọ́dọ̀ Rẹ báyìí — gẹ́gẹ́ bí mo ti rí. Ara ti rẹ̀ mí. Mo gbé gbogbo ẹrù tí mo ti ń ru nìkan sílẹ̀. Mo gbé àjàgà Rẹ dípò. Kọ́ mi ní ìsinmi tí Ìwọ nìkan lè fúnni. Àmín.",
      "action": "Jókòó jẹ́ẹ́ fún ìṣẹ́jú márùn-ún. Ṣí ọwọ́ rẹ tí ó ti dì payá. Fún Jésù gbogbo ẹrù rẹ lórúkọ."
    },
    {
      "title": "Jẹ́ Kí Ìmọ́lẹ̀ Rẹ Tàn",
      "verse": "Bákan náà ni kí ìmọ́lẹ̀ yín tàn níwájú ènìyàn, kí wọn lè rí iṣẹ́ rere yín, kí wọn sì yin Baba yín tí ń bẹ ní ọ̀run lógo.",
      "ref": "Mátíù 5:16",
      "theme": "#f39c12",
      "reflection": "A kò gbé ọ kalẹ̀ láti fi ara pamọ́. A gbé ọ kalẹ̀ ní ìdájú níbi tí o wà — àdúgbò rẹ, ibi iṣẹ́ rẹ, ẹbí rẹ — láti jẹ́ ìmọ́lẹ̀. Ìmọ́lẹ̀ kì í jìjàkadì láti ṣiṣẹ́. Ó KAN JẸ́. Nígbà tí ìwọ bá jẹ́ ara rẹ pátápátá nínú Kristi, tí o ń gbé láìṣe àríbọ̀tán tí o sì ń nífẹ̀ẹ́ dáadáa, àwọn ènìyàn yóò ṣàkíyèsí, a ó sì yin Ọlọ́run lógo.",
      "prayer": "Olúwa, jẹ́ kí ìgbésí ayé mi kún fún ìfẹ́ Rẹ tó bẹ́ẹ̀ tí kò ṣeéṣe fún ẹnikẹ́ni láti wà lẹ́gbẹ̀ẹ́ mi láìní ìmọ̀lára nǹkan tí ó yàtọ̀. Kì í ṣe eré ìsìn — ṣùgbọ́n ìmọ́lẹ̀ tòótọ́. Tàn nípasẹ̀ mi lónìí. Àmín.",
      "action": "Ṣe ìṣe ìfẹ́ kan tí a lè rí lónìí ní ibi tí àwọn ènìyàn lè rí i — ràn ẹnìkan lọ́wọ́, san owó fún ẹnìkan, gba ẹnìkan níyànjú ní gbangba."
    },
    {
      "title": "Ọlọ́run Tí Ń Rí Mi",
      "verse": "Ó sì pe orúkọ Olúwa tí ó bá a sọ̀rọ̀ pé, 'Ìwọ ni Ọlọ́run tí ń rí mi.'",
      "ref": "Gẹ́nẹ́sísì 16:13",
      "theme": "#2ecc71",
      "reflection": "Hágárì wà ní aginjù — nìkan, tí ó lóyún, tí a kọ̀, tí ó sá lọ. Ọlọ́run sì farahàn án. Kì í ṣe fún Abrahamu. Kì í ṣe fún àwọn ènìyàn 'pàtàkì.' Fún òun. Orúkọ Rẹ̀ fún un ni Éli-Rói — Ọlọ́run tí ń rí ni. Bí ìwọ bá nímọ̀lára pé a kò rí ọ, a fojú fo ọ, tàbí a gbàgbé ọ: kì í ṣe bẹ́ẹ̀. Ọlọ́run àgbáyé ti dojú mọ ọ báyìí.",
      "prayer": "Éli-Rói — Ọlọ́run tí ń rí mi — mo sinmi nínú òtítọ́ pé Ìwọ rí ibi gan-an tí mo wà lónìí. Èmi kì í ṣe aláìlójú fún Ọ. A kò gbàgbé mi. Ìwọ mọ orúkọ mi, ipò mi, ìrora mi, àti ìrètí mi. O ṣé fún rírí mi. Àmín.",
      "action": "Kọ 'Éli-Rói ń rí mi' sí ibi tí ìwọ yóò rí i lónìí. Gbogbo ìgbà tí o bá nímọ̀lára pé a fojú fo ọ tàbí a gbàgbé ọ, ka a."
    },
    {
      "title": "Ẹ̀mí Agbára",
      "verse": "Nítorí Ọlọ́run kò fún wa ní ẹ̀mí ìbẹ̀rù; ṣùgbọ́n ti agbára, àti ti ìfẹ́, àti ti ìṣàkóso ara-ẹni.",
      "ref": "2 Tímótì 1:7",
      "theme": "#9b59b6",
      "reflection": "Ìbẹ̀rù, ojo, àti àníyàn kì í ti Ọlọ́run wá. Ẹ̀mí tí o ti gbà fúnni ní agbára — kì í ṣe ìgbéraga, ṣùgbọ́n ìgbẹ́kẹ̀lé tí Ẹ̀mí gbé kalẹ̀. Ìfẹ́ — kì í ṣe ìmọ̀lára lásán, ṣùgbọ́n ìfẹ́ tí ń ṣiṣẹ́ àti tí ó múra sílẹ̀ láti rúbọ. Ìṣàkóso ara-ẹni — kì í ṣe òfin líle, ṣùgbọ́n ìgbésí ayé tí ó ní ète, tí ó dojú kọ ohun kan. Ìwọ ní gbogbo mẹ́tẹ̀ẹ̀ta wọ̀nyí lọ́wọ́ báyìí.",
      "prayer": "Olúwa, mo kọ ẹ̀mí ìbẹ̀rù. Mo gba agbára, ìfẹ́, àti ọkàn tí ó pé lónìí. Níbi tí mo ti ń jẹ ojo láti pín ìgbàgbọ́ mi, ojo nínú àdúrà mi, ojo nínú ìpè mi — mo wọ inú agbára tí Ìwọ ti fún mi. Àmín.",
      "action": "Ṣe ohun kan lónìí tí ìbẹ̀rù ti ń dá ọ dúró láti ṣe. Pe fóònù náà. Rán ìránṣẹ́ náà. Bẹ̀rẹ̀ ohun náà."
    },
    {
      "title": "Níbi Tí Méjì Tàbí Mẹ́ta Bá Kójọ",
      "verse": "Nítorí níbi tí méjì tàbí mẹ́ta bá pé jọ ní orúkọ mi, níbẹ̀ ni èmi wà láàrin wọn.",
      "ref": "Mátíù 18:20",
      "theme": "#3498db",
      "reflection": "O kò nílò ọ̀pọ̀lọpọ̀ ìpéjọ kí Jésù lè farahàn. Àwọn ènìyàn méjì tí ń gbàdúrà pẹ̀lú ìfohùnṣọ̀kan — Ó wà níbẹ̀. Àwọn onígbàgbọ́ mẹ́ta tí ń jọ́sìn — Ó wà níbẹ̀. Kò sí síi níbi tí ó pọ̀ jù tó ju bí ó ti wà nínú yàrá kékeré lọ. Ipò náà kì í ṣe iye. Ipò náà ni orúkọ Rẹ̀. Níbi tí Òun bá jẹ́ ìdí, Ó wà níbẹ̀.",
      "prayer": "Olúwa, ràn mí lọ́wọ́ láti má ṣe kẹ́gàn ìbẹ̀rẹ̀ kékeré rí. Yálà mo bá kó pẹ̀lú ẹnìkan tàbí ẹgbẹ̀rún ènìyàn, Ìwọ wà níbẹ̀. O ṣé fún agbára ìfohùnṣọ̀kan nínú àdúrà. Ṣíwájú mi láti gbàdúrà pẹ̀lú àwọn ẹlòmíràn ní ọ̀sẹ̀ yìí. Àmín.",
      "action": "Wá ẹnìkan láti bá gbàdúrà ní ọ̀sẹ̀ yìí — kódà nípasẹ̀ fóònù tàbí ohun ìránṣẹ́ WhatsApp. Ẹ gbàdúrà pọ̀ fún ìṣẹ́jú márùn-ún."
    },
    {
      "title": "Ìpadàbọ̀ Ọmọ Aṣnù",
      "verse": "Ṣùgbọ́n nígbà tí ó sì wà ní ọ̀nà jíjìn, baba rẹ̀ rí i, àánú sì ṣe é: ó sáré, ó tẹ̀ ẹ́ mọ́ra, ó sì fẹnukonu rẹ̀.",
      "ref": "Lúùkù 15:20",
      "theme": "#e74c3c",
      "reflection": "Baba náà kò dúró de ìtọrọ̀-ọ̀wọ̀ tí ó pé. Kò ṣàyẹ̀wò bóyá ọmọ náà ti yí padà lóòótọ́. Ó RÍ i, àánú ṣe é, Ó sì SÁRÉ. Ọlọ́run kì í rìn jẹ́ẹ́ sọ́dọ̀ àwọn ẹlẹ́ṣẹ̀ tí ń padà bọ̀. Ó ń sáré. Kò sí bí o ṣe jìnnà lọ tó, Ọlọ́run ti ń sáré sọ́dọ̀ rẹ tẹ́lẹ̀ kí o tó parí gbólóhùn náà.",
      "prayer": "Baba, mo ti ṣáko lọ. Mo ti jìnnà sí Ọ — nínú èrò mi, ìpinnu mi, ọkàn mi. Ṣùgbọ́n bí ọmọ aṣnù náà, mo ń padà bọ̀. Sáré wá sọ́dọ̀ mi, Baba. Mo ń bọ̀ wálé. Àmín.",
      "action": "Ṣé ẹnìkan wà nínú ìgbésí ayé rẹ tí ó jẹ́ ọmọ aṣnù náà — tí ó jìnnà sí Ọlọ́run? Gbàdúrà fún ìpadàbọ̀ wọn lónìí. Bí o bá sì jẹ́ ìwọ ni: yípadà kí o sì bọ̀ wálé."
    },
    {
      "title": "A Dá Ọ Fún Iṣẹ́ Rere",
      "verse": "Nítorí àwa ni iṣẹ́ ọwọ́ Rẹ̀, tí a dá nínú Kristi Jésù fún iṣẹ́ rere, tí Ọlọ́run ti pèsè tẹ́lẹ̀ kí àwa lè máa rìn nínú wọn.",
      "ref": "Éfésù 2:10",
      "theme": "#2ecc71",
      "reflection": "Ìwọ kì í ṣe àìróòótọ́. Ìwọ jẹ́ iṣẹ́ ọwọ́ — iṣẹ́-ọnà tí ó ń lọ lọ́wọ́. Ìgbésí ayé rẹ kò sì jẹ́ láìlétò. Àwọn iṣẹ́ rere tí a pè ọ́ sí ni a pèsè kí o tó bí ọ. Ọlọ́run ronú nípa iṣẹ́-ìyàsọ́tọ̀ rẹ kí Ó tó ṣẹ̀dá ọ. Ète rẹ kì í ṣe ohun tí o gbọ́dọ̀ dá; ó jẹ́ ohun tí o gbọ́dọ̀ ṣàwárí.",
      "prayer": "Olúwa, fi àwọn iṣẹ́ tí Ìwọ pèsè fún mi hàn mí. Kì í ṣe àwọn iṣẹ́ tí èmi fúnra mi yàn, ṣùgbọ́n àwọn tí Ìwọ yan. Ṣíwájú mi sínú ẹ̀kúnrẹ́rẹ́ ìyàsọ́tọ̀ mi lórí ilẹ̀ ayé yìí. Mo wà ní ìmúrasílẹ̀. Àmín.",
      "action": "Kọ nǹkan mẹ́ta tí o gbà pé a dá ọ láti ṣe — ẹ̀bùn, ìfẹ́-inú, agbára. Bi Ọlọ́run pé: 'Báwo ni àwọn wọ̀nyí ṣe ń sìn Ìjọba Rẹ?'"
    },
    {
      "title": "A Pàṣẹ Fún Ọ Láti Nífẹ̀ẹ́",
      "verse": "Àṣẹ tuntun ni mo fi fún yín, kí ẹ̀yin nífẹ̀ẹ́ ara yín; gẹ́gẹ́ bí mo ti nífẹ̀ẹ́ yín, kí ẹ̀yin náà nífẹ̀ẹ́ ara yín. Nípa èyí ni gbogbo ènìyàn yóò fi mọ̀ pé ọmọ ẹ̀yìn mi ni yín.",
      "ref": "Jòhánù 13:34-35",
      "theme": "#f39c12",
      "reflection": "Ẹ̀rí pé ìwọ ń tẹ̀lé Jésù kì í ṣe ìmọ̀ ẹ̀kọ́ ìsìn rẹ, wíwá sí ìjọ rẹ, tàbí àwọn ẹ̀bùn ẹ̀mí rẹ. Ó jẹ́ ìfẹ́ — pàtó, ìfẹ́ fún àwọn onígbàgbọ́ mìíràn. Nígbà tí ayé bá rí àwọn Kristian tí ń nífẹ̀ẹ́ ara wọn ní tòótọ́ kọjá ẹ̀yà, ipò, èdè, àti àṣà, ìyẹn ni àríyànjiyàn tí ó lágbára jùlọ fún ìhìnrere.",
      "prayer": "Olúwa, jẹ́ kí ìfẹ́ jẹ́ àmì mi pàtàkì. Níbi tí mo ti ń le, jẹ́ kí n jẹ́ oníwàrere. Níbi tí mo ti ń jẹ́ aláìbìkítà, jẹ́ kí n wà pẹ̀lú wọn. Jẹ́ kí àwọn ènìyàn rí Ọ nígbà tí wọ́n bá rí bí mo ṣe ń bá àwọn ẹlòmíràn lò. Àmín.",
      "action": "Dá onígbàgbọ́ kan mọ̀ tí ìwọ ti ní ìforígbárí pẹ̀lú. Ṣe ìṣe ìfẹ́ kan sí wọn lónìí — ọ̀rọ̀ oníwàrere, àdúrà, ìṣe oníwàrere."
    },
    {
      "title": "Bèèrè, Wá, Kànkùn",
      "verse": "Ẹ béèrè, a ó sì fi fún yín; ẹ wá, ẹ̀yin yóò sì rí; ẹ kànkùn, a ó sì ṣí i fún yín.",
      "ref": "Mátíù 7:7",
      "theme": "#9b59b6",
      "reflection": "Jésù lo ọ̀rọ̀-ìṣe mẹ́ta tí ó ń pọ̀ sí i ní agbára: bèèrè, wá, kànkùn. Àdúrà kì í ṣe àìṣiṣẹ́. Ó jẹ́ ìlépa tí ń ṣiṣẹ́. Ọlọ́run ń dáhùn sí ìdúró-ṣinṣin kì í ṣe nítorí Ó nílò ìdánilójú, ṣùgbọ́n nítorí ìdúró-ṣinṣin ń fi ìjìnlẹ̀ ìfẹ́-ọkàn rẹ àti ìgbẹ́kẹ̀lé rẹ nínú Rẹ̀ hàn. Máa bèèrè. Máa wá. Máa kànkùn.",
      "prayer": "Olúwa, mo gbé àwọn ìbéèrè mi wá sọ́dọ̀ Rẹ lẹ́ẹ̀kan sí i — kì í ṣe nítorí Ìwọ gbàgbé, ṣùgbọ́n nítorí mo gbẹ́kẹ̀lé Ọ tó bẹ́ẹ̀ tí n ó máa bèèrè. Fún mi ní ìdúró-ṣinṣin nínú àdúrà. N kò ní juwọ́ sílẹ̀. Àmín.",
      "action": "Kọ nǹkan mẹ́ta tí o ti dáwọ́ gbígbàdúrà fún dúró nítorí wọ́n dàbí ẹni pé wọ́n dádúró. Gbàdúrà fún gbogbo rẹ̀ mẹ́tẹ̀ẹ̀ta lónìí."
    },
    {
      "title": "Iyọ̀ Ayé",
      "verse": "Ẹ̀yin ni iyọ̀ ayé: ṣùgbọ́n bí iyọ̀ bá sọ adùn rẹ̀ nù, kí ni a ó fi fi i dùn padà?",
      "ref": "Mátíù 5:13",
      "theme": "#3498db",
      "reflection": "Iyọ̀ ń dáàbò bò, ó ń fi adùn kún, ó sì ń wo ọgbẹ́ sàn. Jésù wí pé ìyẹn ni ohun tí ìwọ jẹ́ fún ayé. O ń dín ìjẹkújẹ ìwà kù sí ibùgbé rẹ. O mú adùn wá — ìtumọ̀, ayọ̀, ète — fún àwọn tí ó yí ọ ká. Ṣùgbọ́n iyọ̀ gbọ́dọ̀ fi ara kan ohunkóhun kí ó lè ṣiṣẹ́. Àwo iyọ̀ tí a fi ìdí dí kò dáàbò bò ohunkóhun. O gbọ́dọ̀ fi ara kan ayé rẹ.",
      "prayer": "Olúwa, jẹ́ kí n máa jẹ́ adùn. Má ṣe jẹ́ kí ìtura, ìṣiṣẹ́pọ̀, tàbí ìbẹ̀rù mú mi jáde kúrò nínú ayé tí Ìwọ gbé mi sí. Jẹ́ kí n fi ara kan — pẹ̀lú àdúgbò mi, ìgboro mi, ibi iṣẹ́ mi — kí wíwà mi lè yí àyíká padà. Àmín.",
      "action": "Bá ẹnìkan sọ̀rọ̀ nínú àdúgbò rẹ tí ìwọ kò tí ì bá sọ̀rọ̀ rí. Aládùúgbò kan, alábàáṣiṣẹ́ kan, olówó ìtajà kan. Kìkì ìbáṣepọ̀ ẹ̀dá ènìyàn tòótọ́."
    },
    {
      "title": "Ìrò Ọlọ́run Nípa Rẹ",
      "verse": "Ọlọ́run, báwo ni ìrò Rẹ ṣe ṣeyebíye sí mi tó! Báwo ni iye wọn ṣe pọ̀ tó! Bí mo bá kà wọ́n, wọn yóò pọ̀ ju iyanrìn lọ.",
      "ref": "Sáàmù 139:17-18",
      "theme": "#e74c3c",
      "reflection": "Ọlọ́run ń ronú nípa rẹ nígbà gbogbo. Kì í ṣe ìbẹ̀wò lẹ́ẹ̀kọ̀ọ̀kan — ìrò tí kò dáwọ́ dúró, tí ó sì ń bìkítà. Ó pọ̀ ju iyanrìn lọ ní gbogbo etí òkun. Gbogbo ìṣẹ́jú ọjọ́ kọ̀ọ̀kan, ìwọ wà lórí ọkàn Ọlọ́run. Kì í ṣe gẹ́gẹ́ bí ẹrù tí Ó fi ara dà, ṣùgbọ́n gẹ́gẹ́ bí ìṣúra tí Ó ń ronú nípa rẹ̀ pẹ̀lú ìfẹ́ ọkàn àti pàtó.",
      "prayer": "Baba, jẹ́ kí ìmọ̀ pé Ìwọ ń ronú nípa mi nígbà gbogbo yí ọ̀nà tí mo fi ń wo ara mi padà. Níbi tí mo ti nímọ̀lára pé a gbàgbé mi, rán mi létí Sáàmù 139. Níbi tí mo nímọ̀lára pé n kò níláárí, rán mi létí pé mo ṣeyebíye sí Ọ. Àmín.",
      "action": "Pa ojú rẹ mọ́, kí o sì lo ìṣẹ́jú méjì láti gba ìrò Ọlọ́run nípa rẹ. Má ṣe béèrè fún ohunkóhun. Kìkì gbígbà. Jẹ́ kí ó dà bí ẹni pé kò yẹ — ṣe é síbẹ̀."
    },
    {
      "title": "Agbára Àjíǹde",
      "verse": "Kí èmi lè mọ̀ Ọ́, àti agbára àjíǹde Rẹ̀, àti ìfọwọ́sowọ́pọ̀ nínú ìjìyà Rẹ̀, kí a sì sọ mí di ọ̀ràn bí Rẹ̀ nínú ikú Rẹ̀.",
      "ref": "Fílípì 3:10",
      "theme": "#2ecc71",
      "reflection": "Agbára kan náà tí ó gbé Jésù dìde kúrò nínú òkú ń gbé inú rẹ. Kì í ṣe ewì — ẹ̀kọ́ ìsìn ni. Agbára àjíǹde wà fún àwọn ipò tí ó ti kú: ìgbéyàwó tí ó ti kú, ìrètí tí ó ti kú, àlá tí ó ti kú, ìgbàgbọ́ tí ó ti kú. Ohun tí Ọlọ́run gbé dìde láti inú ibojì tí a fi èdìdì dì, Ó lè gbé dìde láti ipò kankan nínú ìgbésí ayé rẹ.",
      "prayer": "Olúwa, jẹ́ kí agbára àjíǹde ṣiṣẹ́ nínú ìgbésí ayé mi lónìí. Bá àwọn ibi tí ó ti kú sọ̀rọ̀. Ohun tí ó dàbí ẹni pé ó parí, tí a sin, tí a sì fi èdìdì dì — jẹ́ kí ìyè àjíǹde Rẹ tú jáde. Kò sí ohun tí ó lọ jìnnà jù fún Ọ. Àmín.",
      "action": "Dárúkọ ipò kan tí o ti kọ sílẹ̀ nínú ọkàn rẹ gẹ́gẹ́ bí ẹni tí ó ti kú. Gbàdúrà pàtó fún àjíǹde lórí rẹ̀ lónìí."
    },
    {
      "title": "Ẹ̀mí Ń Ṣíwájú Wa",
      "verse": "Nítorí gbogbo àwọn tí Ẹ̀mí Ọlọ́run ń ṣíwájú wọn, àwọn wọ̀nyí ni ọmọ Ọlọ́run.",
      "ref": "Róòmù 8:14",
      "theme": "#f39c12",
      "reflection": "Jíjẹ́ kí Ẹ̀mí ṣíwájú ọ jẹ́ ìgbésí ayé Kristian déédé — kì í ṣe ìrírí ẹ̀mí gíga fún àwọn onígbàgbọ́ àrà. Gbogbo ọmọ Ọlọ́run gbọ́dọ̀ gbé ní ìdáhùn sí ìtọ́sọ́nà Ẹ̀mí: nínú ìpinnu ojoojúmọ́, nínú ìbáṣepọ̀, nínú ìtọ́sọ́nà. Ẹ̀mí ń sọ̀rọ̀. Ìbéèrè náà ni bóyá àwa ń tẹ́tí sí.",
      "prayer": "Ẹ̀mí Mímọ́, mu etí mi láti gbọ́ ohùn Rẹ lónìí. Sọ̀rọ̀ nínú àwọn ìpinnu, nínú àwọn ìdúró, nínú àwọn ìṣẹ̀lẹ̀ tí a kò retí. Mo ṣe ìlérí láti tẹ̀lé níbi tí Ìwọ bá ṣíwájú, kódà nígbà tí kò bá yé mi lẹ́sẹ̀kẹsẹ̀. Àmín.",
      "action": "Ní gbogbo ìpinnu pàtàkì lónìí, dúró fún ìṣẹ́jú-aáyá 30 kí o sì bèèrè: 'Ẹ̀mí Mímọ́, kí ni ìtọ́sọ́nà Rẹ níhìn-ín?' Nígbà náà tẹ́tí."
    },
    {
      "title": "Ṣe Ìdájọ́ Òdodo, Nífẹ̀ẹ́ Àánú",
      "verse": "Ó ti fi hàn ọ́, ìwọ ènìyàn, ohun tí ó dára; kí sì ni Olúwa ń béèrè lọ́wọ́ rẹ, bí kì í ṣe kí o ṣe ìdájọ́ òdodo, kí o sì nífẹ̀ẹ́ àánú, kí o sì máa rìn ní ìrẹ̀lẹ̀ pẹ̀lú Ọlọ́run rẹ?",
      "ref": "Míkà 6:8",
      "theme": "#9b59b6",
      "reflection": "Ọlọ́run kì í nífẹ̀ẹ́ ìṣe ìsìn ní pàtàkì jùlọ. Ó nífẹ̀ẹ́ ìwà rẹ ní àárín ayé — ṣé o dájú nínú ìbáṣepọ̀ rẹ, ṣé o ń fi àánú hàn nínú ìbátan rẹ, àti ṣé o ń rìn ní ìrẹ̀lẹ̀ níwájú Rẹ̀? Àwọn nǹkan mẹ́ta wọ̀nyí, tí a gbé ní ìdúrósinsin, lágbára ju ẹgbẹ̀rún àwọn iṣẹ́ ìsìn lọ.",
      "prayer": "Olúwa, jẹ́ kí ìdájọ́ òdodo, àánú, àti ìrẹ̀lẹ̀ jẹ́ ọ̀rọ̀ mẹ́ta tí ó ń ṣàpèjúwe bí mo ti ń gbé. Fi hàn mí níbi tí mo ti jẹ́ aláìṣòdodo, aláìláànú, tàbí onígbèéraga. Fún mi ní oore-ọ̀fẹ́ láti yí padà. Àmín.",
      "action": "Bi ara rẹ ní tòótọ́: níbo nínú ìgbésí ayé mi ni n kò ti ń ṣe ìdájọ́ òdodo? Níbo ni n kò ti ń fi àánú hàn? Dojú kọ ọ̀kan nínú àwọn wọ̀nyí lónìí."
    },
    {
      "title": "Ó Ń Sọ Ohun Gbogbo Di Tuntun",
      "verse": "Ẹni tí ó jókòó lórí ìtẹ́ wí pé, 'Kíyèsíi, mo ń sọ ohun gbogbo di tuntun.' Ó sì wí pé, 'Kọ èyí sílẹ̀: nítorí àwọn ọ̀rọ̀ wọ̀nyí jẹ́ olóòtítọ́ àti òtítọ́.'",
      "ref": "Ìṣípayá 21:5",
      "theme": "#3498db",
      "reflection": "Ẹ̀dá tuntun ni ọ̀gá-iṣẹ́ Ọlọ́run. Ó dá ẹ̀dá tuntun láti inú ìdàrúdàpọ̀. Ó mú ìyè tuntun wá láti inú egungun gbígbẹ. Ó gbé òkú tuntun dìde láti inú ibojì. Ó sì wí pé: mo ń sọ ohun gbogbo di tuntun. Kì í ṣe mo ti ṣe tán, kì í ṣe èmi yóò ṣe — mo ń ṣe. Nísisìyí. Nínú ipò rẹ.",
      "prayer": "Olúwa, mo gbàgbọ́ pé Ìwọ ń sọ ohun di tuntun — nínú ìgbésí ayé mi, ẹbí mi, àdúgbò mi, orílẹ̀-èdè mi. N kò nílò láti mọ bí Ìwọ ṣe ń ṣe é. Mo kàn nílò láti gbẹ́kẹ̀lé Ẹni tí ó sọ pé àwọn ọ̀rọ̀ wọ̀nyí jẹ́ olóòtítọ́ àti òtítọ́. Àmín.",
      "action": "Kọ ọjọ́ lónìí sílẹ̀, kí o sì kọ: 'Ọlọ́run ń sọ èyí di tuntun: [dárúkọ ohun kan].' Tọ́jú rẹ̀ gẹ́gẹ́ bí ìrántí fún ìgbà tí ìwọ yóò rí ìtuntun náà dé."
    },
    {
      "title": "Agbára Nínú Àìlera",
      "verse": "Ó sì wí fún mi pé, 'Oore-ọ̀fẹ́ mi tó ọ, nítorí agbára mi ni a ń mú pé nínú àìlera.' Nítorí náà pẹ̀lú ayọ̀ ńlá ni n ó fi máa ṣògo nínú àìlera mi, kí agbára Kristi lè bà lé mi.",
      "ref": "2 Kọ́ríntì 12:9",
      "theme": "#e74c3c",
      "reflection": "Pọ́ọ̀lù bèèrè lọ́dọ̀ Ọlọ́run ní ẹ̀ẹ̀mẹta láti mú ẹ̀gún Rẹ̀ kúrò. Ọlọ́run kò mú un kúrò. Ó ṣe ohun tí ó dára ju — Ó fi hàn án pé oore-ọ̀fẹ́ Rẹ̀ tó fún un, àti pé agbára Rẹ̀ ń ṣiṣẹ́ dáadáa jùlọ nípasẹ̀ àìlera ẹ̀dá ènìyàn. Àìlera rẹ kì í ṣe ẹrù. Ní ọwọ́ Ọlọ́run, ó jẹ́ ibi gan-an tí agbára Rẹ̀ ṣe hàn jùlọ.",
      "prayer": "Olúwa, mo dáwọ́ fífi àwọn àìlera mi pamọ́ fún Ọ. Mo mú wọn wá sí gbangba. Níhìn-ín, nínú àìlera mi, jẹ́ kí agbára Rẹ bà lé mi. Jẹ́ kí àwọn ènìyàn rí Ọ — kì í ṣe agbára tèmi — kìkì Ìwọ. Àmín.",
      "action": "Pín àìlera kan pẹ̀lú Ọlọ́run lónìí tí ìwọ ti ní ìgbéraga jù láti gbà. Sọ ọ́ jáde. Nígbà náà gba oore-ọ̀fẹ́ Rẹ̀ fún un."
    },
    {
      "title": "Ọmọ Ìlú Ọ̀run",
      "verse": "Ṣùgbọ́n ìlú wa wà ní ọ̀run; níbẹ̀ ni àwa sì ti ń fi ìháragàgà retí Olùgbàlà, Ẹni náà, Jésù Kristi Olúwa.",
      "ref": "Fílípì 3:20",
      "theme": "#2ecc71",
      "reflection": "Ìwọ jẹ́ olùgbé ilẹ̀ ayé ṣùgbọ́n ọmọ ìlú ọ̀run. Ìdúró-ṣinṣin rẹ gan-an, ìdámọ̀ rẹ jinlẹ̀ jùlọ, ibi tí ìwọ ń lọ gan-an kò sí nínú ayé yìí. Èyí kò túmọ̀ sí pé o gbọ́dọ̀ yí ara rẹ padà kúrò nínú ayé — ó túmọ̀ sí pé o ń bá a lò láti ojú ìwòye ọ̀run. Ìwọ jẹ́ aṣojú, kì í ṣe olùgbé títí ayé.",
      "prayer": "Olúwa, fún mi ní ojú ìwòye ayérayé lónìí. Ràn mí lọ́wọ́ láti ná ohun tí ó wà títí — ọkàn, ìwà, ìfẹ́ — dípò ohun tí ń kọjá. Jẹ́ kí ọmọ ìlú ọ̀run mú ọ̀nà tí mo fi ń ná àkókò mi, owó mi, àti agbára mi. Àmín.",
      "action": "Ṣàyẹ̀wò kàlẹ́ńdà àti ìṣúná rẹ fún ọ̀sẹ̀ tí ó kọjá. Iye ìdá-ọgọ́rùn-ún wo ni ó sìn ète ayérayé? Kí ni ìwọ yóò yí padà?"
    },
    {
      "title": "A Bí Wa Padà",
      "verse": "Jésù dá a lóhùn pé, 'Lóòótọ́, lóòótọ́ ni mo wí fún ọ, bí a kò bá bí ẹnikẹ́ni padà, kò lè rí ìjọba Ọlọ́run.'",
      "ref": "Jòhánù 3:3",
      "theme": "#f39c12",
      "reflection": "Bíbí padà kì í ṣe ọ̀rọ̀ Kristian lásán. Ó jẹ́ ìyípadà àgbàyanu, àdámọ̀ àtọ̀runwá tí ó bẹ̀rẹ̀ nínú ẹ̀mí, tí ó sì ń ṣiṣẹ́ jáde sí ìta. Ìwọ kò mú ìgbésí ayé àtijọ́ dára sí i — o gba ìgbésí ayé tuntun. Bí o kò bá tí ì ṣe ìpinnu yẹn fún ara rẹ, lónìí lè jẹ́ ọjọ́ náà. Bí o bá ti ṣe, rántí bí ìṣẹ́jú náà ṣe ṣe pàtàkì tó.",
      "prayer": "Jésù Olúwa, mo dúpẹ́ fún ìbí tuntun. Fún fífún mi ní ẹ̀mí tí ó ti kú, tí O sì sọ di ìyè. Má ṣe jẹ́ kí n gbójú fo ìyanu yẹn rí. Kí n sì pín in fún gbogbo ẹni tí kò tí ì gbà á. Àmín.",
      "action": "Bí o kò bá tí ì fi ẹ̀mí rẹ fún Kristi fúnra rẹ, ṣe é báyìí — sọ fún Jésù pé o gbàgbọ́ pé Ó kú fún ọ, o sì fẹ́ tẹ̀lé E. Bí o bá ti ṣe é tán, pín ètò ìgbàlà fún ẹnìkan lónìí."
    },
    {
      "title": "Emmanuel — Ọlọ́run Pẹ̀lú Wa",
      "verse": "Wúńdíá kan yóò lóyún, yóò sì bí ọmọkùnrin kan, a ó sì pe orúkọ rẹ̀ ní Emmanuel, tí ó túmọ̀ sí, 'Ọlọ́run pẹ̀lú wa.'",
      "ref": "Mátíù 1:23",
      "theme": "#9b59b6",
      "reflection": "Ohun tí ó ya ni lẹ́nu jùlọ nípa Ìbí náà kì í ṣe àwọn iṣẹ́ ìyanu — ó jẹ́ ỌRỌ̀ náà PẸ̀LÚ. Ọlọ́run yàn láti wá kí Ó sì WÀ PẸ̀LÚ wa. Kì í ṣe láti darí wa láti ọ̀nà jíjìn, kì í ṣe láti fi àwọn ìtọ́ni ránṣẹ́ láti ọ̀run wá, ṣùgbọ́n láti rìn láàrin wa, jẹun pẹ̀lú wa, kí Ó sì lóye ohun tí a lérò. Emmanuel kì í ṣe ọ̀rọ̀ Kérésìmesì lásán. Ó jẹ́ òtítọ́ ojoojúmọ́.",
      "prayer": "Emmanuel, o ṣé fún àìdúró jìnnà sí wa. O súnmọ́. O wá dé gbogbo ọ̀nà. O sì tún wà pẹ̀lú mi báyìí — ní ìṣẹ́jú kọ̀ọ̀kan ti ọjọ́ yìí. Jẹ́ kí n gbé nínú ìmọ̀ ìhà Rẹ. Àmín.",
      "action": "Jákèjádò ọjọ́ yìí, ṣe àṣà ìhà Ọlọ́run. Wákàtí kọ̀ọ̀kan, kìkì jẹ́wọ́ pé: 'Ìwọ wà níhìn-ín pẹ̀lú mi báyìí, Olúwa.' Ṣe é títí yóò fi di ohun àdánidá."
    },
    {
      "title": "Ẹ̀kúnrẹ́rẹ́ Nínú Rẹ̀",
      "verse": "Ẹ̀yin sì di ẹ̀kúnrẹ́rẹ́ nínú Rẹ̀, tí ó jẹ́ orí gbogbo ìjọba àti agbára.",
      "ref": "Kólósè 2:10",
      "theme": "#3498db",
      "reflection": "Nínú Kristi, o kò ṣaláìní ohunkóhun ní ti ẹ̀mí. Ìwọ pé — kì í ṣe apá kan tí ó ṣe, kì í ṣe tí a ṣì ń kún, ṣùgbọ́n tí a ti mú wá sí ẹ̀kúnrẹ́rẹ́. Gbogbo ohun tí o nílò fún ìyè àti ìwà-bí-Ọlọ́run ni a ti fún ọ tán nínú Rẹ̀. Ìṣòro náà kì í ṣe pé ìwọ ṣaláìní. Ó ni pé o kò mọ̀, o kò gbàgbọ́, tàbí o kò lo ohun tí o ti ní tán.",
      "prayer": "Olúwa, ṣí ojú mi sí ohun tí mo ti ní tán nínú Rẹ. Mo dáwọ́ jíjàkadì láti jàre ohun tí O ti fúnni fàyá tán. Mo gba ẹ̀kúnrẹ́rẹ́ tí Ìwọ ti fi sínú mi nípasẹ̀ Kristi. Kọ́ mi láti gbé láti inú ẹ̀kúnrẹ́rẹ́ yẹn. Àmín.",
      "action": "Ka Kólósè 1:9-12 lọ́pọ̀ ìgbà. Lín gbogbo ọ̀rọ̀ tí ó ṣàpèjúwe ohun tí o ní nínú Kristi. Dúpẹ́ lọ́wọ́ Ọlọ́run fún ọ̀kọ̀ọ̀kan."
    },
    {
      "title": "Ti Olúwa Ni Ogun Náà",
      "verse": "Kí gbogbo àwùjọ yìí lè mọ̀ pé kì í ṣe pẹ̀lú idà àti ọ̀kọ̀ ni Olúwa fi ń gbàlà: nítorí ti Olúwa ni ogun náà.",
      "ref": "1 Sámúẹ́lì 17:47",
      "theme": "#e74c3c",
      "reflection": "Dáfídì sọ èyí fún Gòláyà — òmìrán kan tí ó ní ìhámọ́ra àti ìrírí, tí ó dúró lòdì sí ọ̀dọ́mọkùnrin kan pẹ̀lú kànnàkánná. Gbogbo ọmọ ogun Ísírẹ́lì ni ìbẹ̀rù dì mú. Dáfídì sáré lọ sọ́dọ̀ òmìrán náà. Kí ló dé? Nítorí ó ní òye ohun tí wọn kò ní: ti Olúwa ni ogun náà, kì í ṣe tirẹ̀. Ohun èlò lásán ni òun jẹ́.",
      "prayer": "Olúwa, àwọn òmìrán tí mo ń dojúkọ jẹ́ gidi. Ṣùgbọ́n ti Rẹ ni ogun náà. Mo fi ara mi sí ipò bí Dáfídì ti ṣe — kì í ṣe nínú ìgbéraga, ṣùgbọ́n nínú ìgbàgbọ́ tí ó mọ́ kedere pé Ìwọ ń jà fún mi. Mo sáré lọ sí Gòláyà mi lónìí. Àmín.",
      "action": "Dárúkọ Gòláyà rẹ — ohun kan náà tí ó ti mú kí o pa dà sẹ́yìn. Sáré lọ sí i lónìí ní ọ̀nà kékeré kan, pàtó."
    },
    {
      "title": "N Kò Tijú Ìhìnrere",
      "verse": "Nítorí n kò tijú ìhìnrere Kristi: agbára Ọlọ́run ni fún ìgbàlà fún ẹnikẹ́ni tí ó bá gbàgbọ́; fún Júù ní àkọ́kọ́, àti fún Gíríìkì pẹ̀lú.",
      "ref": "Róòmù 1:16",
      "theme": "#2ecc71",
      "reflection": "Pọ́ọ̀lù wí pé N Kò tijú — ó ń fi hàn pé ìdẹwò kan wà láti tijú. Ìhìnrere ń bínú sí ìgbéraga. Ó wí pé àwa kò lè gba ara wa là. Ó rọrùn nínú ayé tí ó fi iye lé ìdíjú. Ó ń yà sọ́tọ̀ nínú ayé tí ó ń béèrè fún ìṣàkópọ̀ gbogbo. Ṣùgbọ́n òun nìkan ni agbára tí ó mú ìgbàlà wá. Gbà á ní ìdúró-ṣinṣin.",
      "prayer": "Olúwa, mú gbogbo àmì ìtìjú nípa ìhìnrere kúrò lára mi. Jẹ́ kí n sọ ọ́ jáde kedere, kí n gbé e ní gbangba, kí n sì pín in ní ìgboyà — ní iṣẹ́, lórí ayélujára, pẹ̀lú ẹbí, pẹ̀lú àwọn àjèjì. N kò tijú. Àmín.",
      "action": "Pín òtítọ́ ìhìnrere kan lórí ipò WhatsApp rẹ tàbí ayélujára rẹ lónìí. Kì í ṣe àyọkà — ọ̀rọ̀ tìrẹ, nínú ohùn tìrẹ."
    },
    {
      "title": "Ètò Rẹ̀, Kì Í Ṣe Tìrẹ",
      "verse": "Nítorí mo mọ àwọn ètò tí mo ní sí i yín, ni Olúwa wí, ètò àlàáfíà, kì í ṣe ti ibi, láti fún yín ní ìrètí àti ọjọ́ iwájú.",
      "ref": "Jeremáyà 29:11",
      "theme": "#f39c12",
      "reflection": "Ọlọ́run sọ èyí fún àwọn ènìyàn tí ó wà nínú ìgbèkùn — nínú àkókò tí ó burú jùlọ nínú ìtàn orílẹ̀-èdè wọn, ọdún àádọ́rin sí ilé wọn. Síbẹ̀ Ó wí pé: MO MỌ àwọn ètò náà. Kì í ṣe 'mo ń ṣiṣẹ́ lórí ètò' tàbí 'mo retí pé yóò yanjú.' Ó ti mọ̀ tán. Wọ́n sì dára: ọrọ̀ ìṣù, kì í ṣe ibi, ìrètí, ọjọ́ iwájú. Ìgbèkùn kì í ṣe òpin ìtàn náà.",
      "prayer": "Olúwa, mo gba Jeremáyà 29:11 fún ìgbésí ayé mi lónìí — kì í ṣe gẹ́gẹ́ bí ọ̀rọ̀ ìṣírí lásán ṣùgbọ́n gẹ́gẹ́ bí ìlérí ti ara ẹni. Ohunkóhun tí ìgbèkùn tí mo wà nínú rẹ̀ báyìí, Ìwọ ní ètò rere ní apá kejì rẹ̀. Mo gbẹ́kẹ̀lé Ọ. Àmín.",
      "action": "Kọ Jeremáyà 29:11 ní ọ̀rọ̀ tìrẹ, tí a mú bá ipò rẹ pàtó mu. Ka a ní àràárọ̀ ọ̀sẹ̀ yìí."
    },
    {
      "title": "Wà Nínú Àjàrà",
      "verse": "Èmi ni àjàrà, ẹ̀yin sì ni ẹ̀ka. Ẹni tí ó bá wà nínú mi, tí èmi náà sì wà nínú rẹ̀, ẹni náà ni yóò so èso lọ́pọ̀lọpọ̀: nítorí láìsí èmi ẹ̀yin kò lè ṣe ohunkóhun.",
      "ref": "Jòhánù 15:5",
      "theme": "#9b59b6",
      "reflection": "Ẹ̀ka kì í so èso nípa jíjàkadì gan-an. Ó ń so èso nípa dídúró ní ìsopọ̀ mọ́ àjàrà. Èso jíjẹ́ jẹ́ àbájáde àdánidá ti wíwà — dídúró, ṣíṣe àkókò, gbígbé nínú Jésù. Ìjàǹbá ìgbésí ayé Kristian òde òní kì í ṣe àìní iṣẹ́. Ó jẹ́ àìní wíwà nínú. Láìsí ìsopọ̀ náà, kò sí ohun tí ó ṣiṣẹ́.",
      "prayer": "Jésù Olúwa, mo fẹ́ wà nínú. Kì í ṣe kìkì bíbẹ̀wò Rẹ nígbà tí mo bá nílò ohunkan, ṣùgbọ́n láti wà nínú Rẹ nígbà gbogbo. Jẹ́ kí ìgbésí ayé mi fi gbòngbò rẹ̀ jinlẹ̀ nínú Rẹ tó bẹ́ẹ̀ tí èso yóò fi jẹ́ àdánidá, kì í ṣe fífipá mú. Ké àwọn ẹ̀ka tí ó nílò kíké. Àmín.",
      "action": "Yọ ohun kan kúrò nínú ọjọ́ rẹ lónìí tí ó ń já ọ kúrò lọ́dọ̀ Ọlọ́run — ayélujára, ariwo, àṣà kan — kí o sì fi ìṣẹ́jú mẹ́wàá kódà rọ́pò rẹ̀ pẹ̀lú dídákẹ́ jẹ́ẹ́ pẹ̀lú Jésù."
    },
    {
      "title": "Sáré Ìdíje Náà",
      "verse": "Nítorí náà, níwọ̀n bí àwa ti yí wa ká pẹ̀lú ọ̀pọ̀lọpọ̀ ẹlẹ́rìí bí i ẹ̀ṣùjú, ẹ jẹ́ kí àwa náà gbé gbogbo ẹrù dànù, àti ẹ̀ṣẹ̀ tí ó rọrùn dì wá mú, kí àwa sì fi sùúrù sáré ìdíje tí a gbé kalẹ̀ fún wa.",
      "ref": "Hébérù 12:1",
      "theme": "#3498db",
      "reflection": "O ń sáré ìdíje kan pàtó — tí a gbé kalẹ̀ fún ọ, kì í ṣe fún ẹlòmíràn. Àwọn ẹlẹ́rìí tí ń pariwo fún ọ jẹ́ Abrahamu, Mose, Ẹsítérì, Pọ́ọ̀lù — gbogbo àwọn tí ó parí ìdíje wọn. Ìṣẹ́ rẹ kì í ṣe láti sáré ìdíje ẹlòmíràn ṣùgbọ́n láti parí tirẹ. Sọ ìwúwo dànù. Fi ẹ̀ṣẹ̀ sílẹ̀. Sáré ÌDÍJE TIRẸ.",
      "prayer": "Olúwa, fi ohun tí ó ń ru mi lé lára hàn mí. Ohun tí ó ń dì mí mú. Mo sọ ọ́ dànù lónìí nípa ìfẹ́-ọkàn mi. Fún mi ní sùúrù láti máa sáré tẹ̀síwájú — kódà nígbà tí ara mi kò rọ̀, kódà nígbà tí n kò rí òpin. N ó parí. Àmín.",
      "action": "Dá ohun kan mọ̀ tí ó ń mú ìdíje rẹ lọ́ra — àṣà kan, ìbáṣepọ̀ kan, ọ̀nà èrò kan. Ṣe ìgbésẹ̀ kan pàtó lónìí láti fi í sílẹ̀."
    },
    {
      "title": "Baba Wa",
      "verse": "Báyìí ni kí ẹ máa gbàdúrà: 'Baba wa tí ń bẹ ní ọ̀run, kí a bọ̀wọ̀ fún orúkọ Rẹ, kí ìjọba Rẹ dé, kí a ṣe ìfẹ́ Rẹ ní ayé gẹ́gẹ́ bí a ti ń ṣe é ní ọ̀run.'",
      "ref": "Mátíù 6:9-10",
      "theme": "#e74c3c",
      "reflection": "Àdúrà Olúwa kò bẹ̀rẹ̀ pẹ̀lú àìní rẹ ṣùgbọ́n pẹ̀lú ìdámọ̀ Ọlọ́run: Baba. Kí a bọ̀wọ̀ fún — mímọ́, ọlá, ìtẹríba — orúkọ Rẹ. Ìjọba dé. Ìfẹ́ ṣe. O bẹ̀rẹ̀ àdúrà nípa fífi Ọlọ́run sí ipò tí ó tọ́ nínú ọkàn rẹ. Ohun gbogbo yòókù ń ṣàn láti inú rẹ̀. Baba rẹ tí ń bẹ ní ọ̀run. Kì í ṣe agbára jíjìnnà — Baba.",
      "prayer": "Baba tí ń bẹ ní ọ̀run — mo dúró lórí àwọn ọ̀rọ̀ wọ̀nyí lónìí. Ìwọ ni Baba MI. Mímọ́, alágbára, síbẹ̀síbẹ̀ pẹ̀lú ẹnìkọ̀ọ̀kan. Kí n tó gbé ìbéèrè kankan wá, mo bọ̀wọ̀ fún orúkọ Rẹ. Kí ìjọba Rẹ wọlé sí gbogbo igun ìgbésí ayé mi. Kí a ṣe ìfẹ́ Rẹ nínú mi lónìí. Àmín.",
      "action": "Gbàdúrà Àdúrà Olúwa jẹ́ẹ́ lónìí, kí o dúró ní gbolóhùn kọ̀ọ̀kan láti ronú nípa ohun tí ó túmọ̀ sí fún ìgbésí ayé rẹ báyìí."
    },
    {
      "title": "Ìfẹ́ Tí Kò Yẹsẹ̀",
      "verse": "Ẹ dúpẹ́ lọ́wọ́ Olúwa; nítorí rere ni Í; nítorí ìfẹ́ Rẹ̀ dúró láéláé.",
      "ref": "Sáàmù 118:1",
      "theme": "#2ecc71",
      "reflection": "Ọ̀rọ̀ Hébérù níhìn-ín fún ìfẹ́ ni hesed — ìfẹ́ májẹ̀mú tí kò yẹsẹ̀. Kì í ṣe aláìlera, tí ó ní ipò, tàbí tí ó ń yí padà. Ó dúró láéláé. Nípasẹ̀ ọjọ́ tí ó burú jùlọ, ìkùnà rẹ tí ó tóbi jùlọ, ìgbà òtútù rẹ tí ó gùn jùlọ. Ìfẹ́ Ọlọ́run fún ọ kò yí padà pẹ̀lú bí o ṣe ń ṣe nǹkan. Májẹ̀mú ni. Ó ti dì mọ́ ọ nípasẹ̀ ẹ̀dá Rẹ̀ fúnra Rẹ̀.",
      "prayer": "Olúwa, mo dúpẹ́ lọ́wọ́ Rẹ pé ìfẹ́ Rẹ kò dópin nígbà tí mo bá kùnà. Kò tutù nígbà tí mo bá dì tutù. Kò kúrò nígbà tí mo bá sá. Hesed Rẹ — ìfẹ́ Rẹ tí kò yẹsẹ̀, ìfẹ́ májẹ̀mú Rẹ — wà lórí mi lónìí àti títí láé. Mo sinmi nínú rẹ̀. Àmín.",
      "action": "Dúpẹ́ lọ́wọ́ Ọlọ́run fún nǹkan márùn-ún lónìí. Kì í ṣe béèrè fún ohunkóhun — kìkì dídúpẹ́. Jẹ́ kí ọpẹ́ jẹ́ afẹ́fẹ́ ọjọ́ rẹ."
    },
    {
      "title": "Fi Ọkàn Rẹ Sí Òkè",
      "verse": "Fi ọkàn yín sí ohun tí ń bẹ lókè, kì í ṣe sí ohun tí ń bẹ lórí ilẹ̀ ayé.",
      "ref": "Kólósè 3:2",
      "theme": "#f39c12",
      "reflection": "Ọkàn rẹ ń lọ sí ibi tí o bá fi í sí. Kì í ṣe àìṣiṣẹ́ — ó ń tẹ̀lé ìtọ́sọ́nà tí o fún un. Fífi jẹ́ ìpinnu tí ó ṣiṣẹ́, tí a mọ̀ọ́mọ̀ ṣe. Àwọn ohun tí ń bẹ lókè: òtítọ́ Ọlọ́run, ojú ìwòye Rẹ̀, ìjọba Rẹ̀, ìlérí Rẹ̀. Èyí kò túmọ̀ sí kí a fojú fo àwọn ìṣòro ayé. Ó túmọ̀ sí wíwo wọn nípasẹ̀ awò ojú ọ̀run.",
      "prayer": "Olúwa, mo fi ọkàn mi sí òkè lónìí. Mo yàn láti wo ipò mi láti ojú ìwòye Rẹ dípò láti ilẹ̀ ayé. Fún mi ní ojú ìgbàgbọ́ láti rí ohun tí Ìwọ rí. Àmín.",
      "action": "Fún gbogbo ìṣòro tí o bá ronú nípa rẹ̀ lónìí, tẹ̀lé e lẹ́sẹ̀kẹsẹ̀ pẹ̀lú ìbéèrè náà: 'Kí ni Ọlọ́run sọ nípa èyí?' Wá ìwé mímọ́ kan fún àníyàn rẹ tí ó tóbi jùlọ."
    },
    {
      "title": "Ìbùkún Ni Fún Àwọn Tí Ń Fi Àlàáfíà Ṣe",
      "verse": "Ìbùkún ni fún àwọn tí ń fi àlàáfíà ṣe: nítorí a ó pè wọ́n ní ọmọ Ọlọ́run.",
      "ref": "Mátíù 5:9",
      "theme": "#9b59b6",
      "reflection": "Àwọn tí ń fi àlàáfíà ṣe kì í ṣe àwọn tí ń ṣọ́ àlàáfíà tí ń yẹra fún ìjà ní ọ̀nà gbogbo. Wọ́n ń mú ìpadàpọ̀ wá ní tòótọ́ níbi tí ìyapa bá wà. Èyí nílò ìgboyà — ó rọrùn láti yan ẹ̀gbẹ́ kan tàbí láti dákẹ́. Jésù fúnra Rẹ̀ ni Ẹni-Ìdàpọ̀-Àlàáfíà tí ó ga jùlọ, tí ó ṣe àtúnṣe láàrin Ọlọ́run àti ẹ̀dá ènìyàn nípasẹ̀ àgbélébùú. Àwọn ọmọ Rẹ̀ ń ṣe iṣẹ́ kan náà.",
      "prayer": "Olúwa, sọ mí di ẹni tí ń fi àlàáfíà ṣe lónìí. Níbi tí ìjà bá wà yí mi ká, fún mi ní ìgboyà láti wọlé pẹ̀lú ìfẹ́ ìpadàpọ̀. Níbi tí èmi jẹ́ orísun ìjà, fún mi ní ìrẹ̀lẹ̀ láti tún un ṣe. Àmín.",
      "action": "Ṣé ìbáṣepọ̀ tí ó bàjẹ́ wà nínú àyíká rẹ tí o ti ń yẹra fún? Ṣe ìgbésẹ̀ kan sí ìpadàpọ̀ lónìí — ìránṣẹ́ kan, ìpè kan, ìjíròrò olóòótọ́ kan."
    },
    {
      "title": "Ẹ̀mí Ń Bẹ̀bẹ̀ Fún Wa",
      "verse": "Bákan náà ni Ẹ̀mí náà pẹ̀lú ń ràn wá lọ́wọ́ nínú àìlera wa: nítorí àwa kò mọ ohun tí a ó gbàdúrà rẹ̀ bí a ti yẹ; ṣùgbọ́n Ẹ̀mí fúnra Rẹ̀ ń bẹ̀bẹ̀ fún wa pẹ̀lú ìkérora tí kò ṣeéfojúsọ.",
      "ref": "Róòmù 8:26",
      "theme": "#3498db",
      "reflection": "Nígbà tí o kò mọ bí o ṣe lè gbàdúrà — nígbà tí ipò náà bá le jù, tí ó dùn jù, tàbí tí ó dàrú jù fún ọ̀rọ̀ — Ẹ̀mí ń gbàdúrà fún ọ. Àwọn ìkérora tí kò lè ṣeéfojúsọ tí ó ru ìṣàkóso ju àdúrà rẹ tí ó dára jùlọ lọ. Ìwọ kì í gbàdúrà nìkan rí. Àti nígbà tí ọ̀rọ̀ rẹ bá kùnà, ti Ẹ̀mí kì í kùnà.",
      "prayer": "Ẹ̀mí Mímọ́, gbàdúrà nípasẹ̀ mi lónìí fún àwọn nǹkan tí n kò mọ bí a ṣe ń gbàdúrà rẹ̀. Mo ṣí ara mi payá sí ìbẹ̀bẹ̀ Rẹ. O ṣé pé kódà nígbà tí n kò lè sọ̀rọ̀, Ìwọ kò dákẹ́. Àmín.",
      "action": "Lo ìṣẹ́jú márùn-ún nínú àdúrà jẹ́ẹ́ lónìí. Má lo ọ̀rọ̀. Kìkì mí, gbẹ́kẹ̀lé, kí o sì jẹ́ kí Ẹ̀mí bẹ̀bẹ̀."
    },
    {
      "title": "Ìhámọ́ra Kíkún Náà Dúró",
      "verse": "Nítorí náà, ẹ gbé ìhámọ́ra Ọlọ́run kíkún, kí ẹ̀yin lè lè dúró gbọn-in-gbọn-in ní ọjọ́ ibi, àti nígbà tí ẹ̀yin bá ti ṣe ohun gbogbo tan, kí ẹ dúró.",
      "ref": "Éfésù 6:13",
      "theme": "#e74c3c",
      "reflection": "Lẹ́yìn tí o bá ti ṣe ohun gbogbo tán: dúró. Nígbà mìíràn, ohun tí ó lágbára jùlọ tí onígbàgbọ́ lè ṣe ni láti kọ̀ láti ṣubú. Kì í ṣe láti gòkè lọ ní tayọ̀tayọ̀. Kì í ṣe láti borí ní gbangba. Kìkì láti dúró. Dì ilẹ̀ mú. Má juwọ́ sílẹ̀. Má lọ. Má tẹrí ba fún ìtẹ̀sí. Kìkì DÚRÓ — nítorí o ni ìhámọ́ra tí a ṣe fún èyí.",
      "prayer": "Olúwa, mo gbé ìhámọ́ra kíkún wọ̀ lónìí. Ohunkóhun tí ó bá dojú kọ mi — n ó dúró. Kì í ṣe nínú agbára tèmi ṣùgbọ́n nínú tirẹ. Kì í ṣe nítorí ipò náà yí padà ṣùgbọ́n nítorí Ìwọ kì í yí padà rí. N kì yóò tẹrí ba. N kì yóò sá. N ó dúró. Àmín.",
      "action": "Kọ ọ̀rọ̀ náà DÚRÓ sí ibi tí a lè rí. Gbogbo ìgbà tí o bá rí i lónìí, sọ jáde pé: 'Mo dúró ní orúkọ Jésù.'"
    },
    {
      "title": "Ẹni Tí Ó Pè Ọ́ Jẹ́ Olóòótọ́",
      "verse": "Olóòótọ́ ni Ẹni tí ń pè yín, Ẹni tí yóò sì ṣe é.",
      "ref": "1 Tẹsalóníkà 5:24",
      "theme": "#2ecc71",
      "reflection": "Ọlọ́run kì í pè ọ́ kí Ó fi ọ́ sílẹ̀ láti wá ọ̀nà rẹ nìkan. Ìpè náà ń wá pẹ̀lú Ẹni tí ó pè ọ́. Ìṣòótọ́ Rẹ̀ ni ẹ̀rí ìparí — kì í ṣe ìṣòótọ́ rẹ, kì í ṣe ìdúró-ṣinṣin rẹ, kì í ṣe ìtàn rẹ. Ó pè ọ́. Ó jẹ́ olóòótọ́. Ó ó ṣe é. Sinmi nínú ìyẹn.",
      "prayer": "Olúwa, mo sinmi nínú ìṣòótọ́ Rẹ lónìí. Ohun tí Ìwọ bẹ̀rẹ̀ nínú ìgbésí ayé mi, Ìwọ yóò parí. Mo dáwọ́ jíjàkadì láti pa mọ́ ohun tí Ìwọ nìkan lè fọwọ́ mú dúró. Ìwọ pè mí. Ìwọ ó ṣe é. Mo gbẹ́kẹ̀lé Ọ. Àmín.",
      "action": "Kọ ohun kan tí Ọlọ́run pè ọ́ sí sílẹ̀ tí ó dàbí ẹni tí kò tí ì parí tàbí tí kò dájú. Lábẹ́ rẹ̀, kọ: 'Ẹni tí ó pè mí jẹ́ olóòótọ́. Ó ó ṣe é.' Tọ́jú rẹ̀."
    }
  ]
};

// Helper: get the full localized devotionals array for the current language,
// falling back to English if the language has not been translated yet.
function getLocalizedDevotionals() {
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  return DEVOTIONALS_I18N[lang] || DEVOTIONALS_I18N.en;
}

// Helper: get today's devotional using the localized array (replaces the
// English-only getTodayDevotional() from devotionals.js for display purposes)
function getTodayLocalizedDevotional() {
  const list = getLocalizedDevotionals();
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const weekIndex = Math.floor(dayOfYear / 7) % list.length;
  return list[weekIndex];
}
