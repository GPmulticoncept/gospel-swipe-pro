// devotionals.js — GospelSwipe Pro
// 52 weekly devotionals cycling through the year
// Each has: title, verse, reference, reflection, prayer, action, theme colour
// var (not const) so it is globally accessible before app.js loads

var DEVOTIONALS = [
  {
    title: "You Are Loved", verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    ref: "John 3:16", theme: "#3498db",
    reflection: "Before you did anything to earn it, God loved you completely. His love is not based on your performance, your past, or your potential. It is based on His nature. He IS love. Today, receive that love — not as a concept, but as a reality for your personal life.",
    prayer: "Father, thank You for loving me before I loved You. Help me to receive Your love deeply today, not just know it in my head. Let it change the way I see myself and the way I treat others. In Jesus' name, Amen.",
    action: "Write down one area of your life where you have struggled to believe God loves you. Speak John 3:16 over that area three times today."
  },
  {
    title: "New Every Morning", verse: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    ref: "Lamentations 3:22-23", theme: "#f39c12",
    reflection: "No matter what yesterday looked like — failure, disappointment, sin, or grief — this morning God's mercies reset. You do not carry yesterday's weight into today. His compassions are fresh, specific to this moment, and inexhaustible. Every sunrise is God's announcement: we start again.",
    prayer: "Lord, thank You that I do not have to earn my way back to You. Your mercies are new for me right now. Help me to step into this day without the weight of what is behind me. I receive Your grace afresh. Amen.",
    action: "Before you look at your phone or speak to anyone today, say out loud: 'His mercies are new for me this morning.' Do this three days in a row."
  },
  {
    title: "He Goes Before You", verse: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
    ref: "Deuteronomy 31:8", theme: "#2ecc71",
    reflection: "Whatever situation you are walking into today — a difficult conversation, a job interview, an uncertain future — God has already been there. He does not send you ahead alone. He goes before, walks beside, and follows behind. You are never entering anything alone.",
    prayer: "Father, I surrender my fears about what lies ahead. I choose to believe that You have already gone before me into every situation today. Give me Your peace that passes understanding. In Jesus' name, Amen.",
    action: "Name one thing you have been anxious about this week. Physically open your hands and say: 'Lord, You go before me into this. I trust You.'"
  },
  {
    title: "Chosen and Called", verse: "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
    ref: "1 Peter 2:9", theme: "#9b59b6",
    reflection: "You were not an accident. You were chosen — handpicked by God before the foundation of the world. Royalty is not something you have to achieve; it is something you have to receive and walk in. Your identity is settled in heaven even when it feels unsettled on earth.",
    prayer: "Lord, let me live today from the inside out — from the identity You have given me, not from what others say about me or what I feel about myself. I am Yours. I am chosen. I am called. Help me to walk like it. Amen.",
    action: "Find a mirror today. Look at yourself and say: 'I am chosen. I am royal. I am God's.' Say it until you mean it."
  },
  {
    title: "The Peace That Guards", verse: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    ref: "Philippians 4:7", theme: "#3498db",
    reflection: "God's peace is not the absence of problems. It is a supernatural garrison — a military guard — posted at the door of your heart and mind. When anxiety comes knocking, peace is already standing there. But this peace is accessed through prayer and thanksgiving, not through perfect circumstances.",
    prayer: "Father, I bring my anxious thoughts to You right now. I choose thanksgiving over worry. I claim the peace that is beyond my understanding to stand guard over my heart today. Amen.",
    action: "Make a list of 5 specific things you are thankful for right now. Read Philippians 4:6-7 after each one."
  },
  {
    title: "More Than Conquerors", verse: "No, in all these things we are more than conquerors through him who loved us.",
    ref: "Romans 8:37", theme: "#e74c3c",
    reflection: "Paul wrote this from prison. He had been shipwrecked, beaten, and abandoned. Yet he said MORE than conquerors. Not 'we might conquer someday' — but we ARE, present tense, through Him who loved us. Your victory is not in the absence of a battle. It is in who fights with you.",
    prayer: "Lord, I refuse the label of victim today. Through You I am a conqueror. Whatever I am facing, I face it from a position of victory already won at the cross. Strengthen me to live from that truth today. Amen.",
    action: "Write 'More than a conqueror' on a piece of paper and put it somewhere you will see it today."
  },
  {
    title: "Walk in the Spirit", verse: "So I say, walk in the Spirit, and you will not gratify the desires of the flesh.",
    ref: "Galatians 5:16", theme: "#2ecc71",
    reflection: "The solution to flesh struggles is not white-knuckled willpower. It is walking — daily, moment by moment dependence on the Holy Spirit. You do not defeat the flesh by fighting it harder. You crowd it out by walking in the Spirit. When your inner life is full of God, there is less room for what is not of God.",
    prayer: "Holy Spirit, lead me today in every decision — what I say, what I look at, where I go, how I respond. I yield myself to Your guidance right now. Fill every space in me. Amen.",
    action: "Before every significant decision or conversation today, pause and silently ask: 'Holy Spirit, how would You have me respond?'"
  },
  {
    title: "Seek First", verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    ref: "Matthew 6:33", theme: "#f39c12",
    reflection: "Jesus did not say seek only. He said seek FIRST. Everything else — provision, protection, relationships, purpose — comes after that first priority is established. Most people pray about everything except the thing God said to seek first. When the Kingdom is first, everything else lines up.",
    prayer: "Lord, I repent for the times I have sought the gifts more than the Giver. Today I choose to seek Your Kingdom and Your righteousness first. I trust You to take care of everything else. Amen.",
    action: "Before you check your messages or social media this morning, spend five minutes reading scripture or in prayer. Try this for a week."
  },
  {
    title: "His Strength, Not Yours", verse: "I can do all this through him who gives me strength.",
    ref: "Philippians 4:13", theme: "#9b59b6",
    reflection: "This verse is often quoted as motivation for hard challenges. But Paul wrote it in the context of contentment — learning to be satisfied in both plenty and want. The strength God gives is not for showing off. It is for pressing through when everything in you wants to give up or give in.",
    prayer: "Father, I acknowledge that I am not strong enough for this in my own power. But You are. I lean on You today — not on my intelligence, my connections, or my track record. Your strength is made perfect in my weakness. Amen.",
    action: "Name the hardest thing you are facing right now. Pray Philippians 4:13 specifically over that situation, out loud."
  },
  {
    title: "Called to Forgive", verse: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
    ref: "Ephesians 4:32", theme: "#3498db",
    reflection: "Forgiveness is not saying what happened was okay. It is releasing someone from the debt they owe you — and releasing yourself from the prison of bitterness. God did not forgive you because you deserved it. He forgave you because it was right. Now He asks you to do the same for others.",
    prayer: "Lord, I bring to You the person who hurt me. I choose forgiveness today, not because the feeling is there yet, but as an act of obedience. Heal the wound in me and free me from bitterness. In Jesus' name. Amen.",
    action: "Is there someone you need to forgive? Write their name down. Pray this prayer for them: 'Lord, bless [name]. I release them and I release myself.' Do it every day this week."
  },
  {
    title: "Word That Does Not Return Empty", verse: "So is my word that goes out from my mouth: it will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.",
    ref: "Isaiah 55:11", theme: "#2ecc71",
    reflection: "Every time you share a scripture, speak a promise over your life, or declare the gospel to someone — those words are not wasted. God backs them. They carry divine energy and they land in hearts you cannot see the inside of. You plant and water. God makes it grow.",
    prayer: "Father, give me boldness to speak Your Word today — to myself in faith, and to others in love. I trust that what You have spoken will accomplish exactly what You intend. No seed is wasted. Amen.",
    action: "Share one scripture with someone today — a friend, family member, or colleague. It can be by text. Just send it."
  },
  {
    title: "Delight in the Lord", verse: "Take delight in the LORD, and he will give you the desires of your heart.",
    ref: "Psalm 37:4", theme: "#f39c12",
    reflection: "This is not a formula for getting what you want. It is a transformation of what you want. When you genuinely delight in God — not in what He can do for you — your desires change. They align with His will. And then He gives them, because what you want is now what He wants for you.",
    prayer: "Lord, teach me to delight in You — not just in Your blessings, not just in answered prayer, but in You Yourself. Be the joy of my heart today. Realign my desires to match Yours. Amen.",
    action: "Spend 10 minutes in worship today with no request — just telling God what you love about Him. No agenda. Just delight."
  },
  {
    title: "The Great Commission", verse: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
    ref: "Matthew 28:19", theme: "#e74c3c",
    reflection: "This command was given to ordinary people — fishermen, tax collectors, women who had been healed of sickness. Jesus did not wait for perfect people. He commissioned the available ones. The Great Commission is not a suggestion for full-time ministers. It is the mandate for every believer.",
    prayer: "Lord, forgive me for keeping the gospel to myself. Give me boldness to share it today — with whoever You put in my path. Use my ordinary life as an extraordinary testimony of Your grace. Amen.",
    action: "Think of one person in your life who does not know Jesus. Pray for them by name today. Then ask God for the right moment to share the gospel with them this week."
  },
  {
    title: "Trust With All Your Heart", verse: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    ref: "Proverbs 3:5-6", theme: "#9b59b6",
    reflection: "Leaning on your own understanding is the most natural thing in the world. But God says there is a better way: trust with ALL your heart — not part, not when it makes sense, but all. The path becomes straight not because the terrain changes, but because you stop navigating it alone.",
    prayer: "Lord, there are things in my life right now that I do not understand. I choose to trust You with them rather than figure them out on my own. Straighten my path according to Your wisdom. Amen.",
    action: "Identify one situation where you have been trusting your own understanding more than God. Physically write 'I surrender this to You, Lord' and keep it somewhere visible."
  },
  {
    title: "Rivers of Living Water", verse: "Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.",
    ref: "John 7:38", theme: "#3498db",
    reflection: "Jesus did not promise a trickle. He promised rivers — plural, flowing, powerful. The Holy Spirit in you is not a puddle for you to sit in quietly. He is a river flowing from you TO others. Your life is meant to bring refreshment to everyone around you. That only happens when you stay connected to the Source.",
    prayer: "Holy Spirit, flow through me today. Let Your life pour out of me to every person I encounter — my family, my colleagues, the stranger I pass on the street. Make me a blessing everywhere I go. Amen.",
    action: "Do one specific act of kindness for someone unexpected today. Let the river flow."
  },
  {
    title: "Be Still", verse: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'",
    ref: "Psalm 46:10", theme: "#2ecc71",
    reflection: "This was spoken to people in the middle of a crisis — nations in uproar, kingdoms falling. Yet God says: be still. Not because the situation resolved, but because HE IS GOD. Stillness is not passivity. It is active confidence in the One who holds all things. You can be still because He is sovereign.",
    prayer: "Lord, I choose stillness today in the middle of the noise. I declare that You are God — over my circumstances, my country, my family, my future. I rest in Your sovereignty. Amen.",
    action: "Set a 5-minute alarm today and do nothing during it. No phone. No noise. Just be still before God."
  },
  {
    title: "Armour of God", verse: "Put on the full armour of God, so that you can take your stand against the devil's schemes.",
    ref: "Ephesians 6:11", theme: "#e74c3c",
    reflection: "The armour is not put on automatically. It is put on — deliberately, piece by piece, daily. Belt of truth. Breastplate of righteousness. Shoes of peace. Shield of faith. Helmet of salvation. Sword of the Spirit. You dress physically every day. How much more should you dress spiritually?",
    prayer: "Lord, I put on the full armour of God right now. I take my stand against every scheme of the enemy today — in my mind, my relationships, my finances, my body. I am protected by Your power, not my own. Amen.",
    action: "Pray through each piece of armour in Ephesians 6:13-17 one by one, naming how it applies to your life today."
  },
  {
    title: "Carry Each Other", verse: "Carry each other's burdens, and in this way you will fulfill the law of Christ.",
    ref: "Galatians 6:2", theme: "#f39c12",
    reflection: "Christianity is not a solo sport. We are called to community — real, honest, burden-bearing community. That requires vulnerability from those who are struggling, and willingness from those who are stronger. The law of Christ is love. You fulfil it when you stop pretending and start truly caring.",
    prayer: "Lord, show me who in my life is carrying a burden right now. Give me the sensitivity to notice and the courage to ask how I can help. And where I am the one struggling, give me the humility to let someone help me. Amen.",
    action: "Send a message to one person today with simply: 'I have been thinking of you. How are you really doing?' Be prepared to actually listen."
  },
  {
    title: "Abundant Life", verse: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
    ref: "John 10:10", theme: "#9b59b6",
    reflection: "Abundant life is not a prosperity formula. It is a quality of life — rich in purpose, peace, presence, and power — that only Jesus gives. The enemy's agenda is always subtraction: steal your joy, kill your hope, destroy your relationships. Jesus' agenda is always addition: more life, fuller life, real life.",
    prayer: "Lord Jesus, I reject the lies of the thief who tells me I should have less — less hope, less joy, less purpose. I receive the full life You came to give. Show me where I have settled for survival when You promised abundance. Amen.",
    action: "Ask yourself honestly: in which area of my life have I been living in survival mode instead of abundance? Bring that area to God in prayer today."
  },
  {
    title: "Faith That Moves Mountains", verse: "Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move. Nothing will be impossible for you.",
    ref: "Matthew 17:20", theme: "#3498db",
    reflection: "The problem is never the size of your faith. A mustard seed is tiny. The problem is where your faith is pointed. Faith pointed at God — the One who is actually able to move mountains — works. Faith pointed at your own ability, your situation, or your feelings does not. Point your faith at the right Person.",
    prayer: "Lord, I point my faith at You today — not at the circumstances, not at the size of the problem, not at how I feel. You are the Mountain Mover. Speak to the mountains in my life. I believe You. Amen.",
    action: "Name the biggest 'mountain' in your life right now. Speak to it literally — say out loud: '[Name of situation], move in Jesus' name.' Then trust."
  },
  {
    title: "Psalm 23: The Shepherd's Care", verse: "The LORD is my shepherd, I lack nothing.",
    ref: "Psalm 23:1", theme: "#2ecc71",
    reflection: "Four words — 'I lack nothing' — are the conclusion of having the Lord as shepherd. He provides rest, restoration, guidance, protection, and comfort. Even in the valley of death's shadow, He is there. Even in the presence of enemies, He prepares a table. Your Shepherd never goes off duty.",
    prayer: "Lord, You are my Shepherd today. I receive the rest You provide, the restoration You offer, the path You have chosen for me. Even in my darkest valley, You are with me. I will not fear. Amen.",
    action: "Read all of Psalm 23 slowly. For each verse, write one specific way God has been that thing for you in the last month."
  },
  {
    title: "Do Not Grow Weary", verse: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
    ref: "Galatians 6:9", theme: "#f39c12",
    reflection: "Weariness in doing good is a real thing. Giving, serving, praying, waiting — without visible results — wears people down. But the harvest has a proper time that is in God's hands, not yours. Your job is not to produce the harvest. Your job is to not give up on the planting.",
    prayer: "Lord, I am tired. But I choose not to give up. I trust that what I am sowing — in prayer, in service, in faith — will produce a harvest at exactly the right time. Give me strength to keep going. Amen.",
    action: "Think of one area where you have been close to giving up. Write down WHY you started. Read it every morning this week."
  },
  {
    title: "Transformed Mind", verse: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.",
    ref: "Romans 12:2", theme: "#9b59b6",
    reflection: "Transformation starts in the mind. The world constantly tries to conform you — through media, culture, peer pressure, comparison. The antidote is not willpower but renewal. Daily exposure to God's Word rewires how you think. A renewed mind sees God's will clearly. An unrenewed mind cannot.",
    prayer: "Lord, renew my mind today. Replace every lie I have believed with Your truth. Help me to think differently — about myself, about others, about the world — in a way that reflects Your perspective. Amen.",
    action: "Identify one specific lie you have been believing — about yourself, God, or your future. Find a scripture that directly contradicts it and memorize it this week."
  },
  {
    title: "Pray Without Ceasing", verse: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    ref: "1 Thessalonians 5:16-18", theme: "#3498db",
    reflection: "Praying without ceasing is not being on your knees 24 hours a day. It is a posture of constant openness to God — a lifestyle of conversation with Him throughout the day. In the queue, at work, while cooking, while walking. Your whole day becomes a prayer when God is always in the room.",
    prayer: "Lord, teach me to pray without ceasing — not just in set devotion times but in the flow of my whole day. Let me be so aware of Your presence that every moment becomes a conversation with You. Amen.",
    action: "Set three reminders on your phone today, spaced through the day. When each one goes off, stop for 60 seconds and simply talk to God about whatever is happening right then."
  },
  {
    title: "Come to Me", verse: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    ref: "Matthew 11:28-29", theme: "#e74c3c",
    reflection: "This is Jesus speaking — not an institution, not a religious system, not a set of rules. Jesus Himself says come to ME. He does not say sort yourself out first. He does not say come when you have it together. He says come as you are, weary and burdened, and I will give rest to your soul.",
    prayer: "Jesus, I come to You right now — just as I am. I am weary. I lay down every burden I have been carrying alone. I take Your yoke instead. Teach me the rest that only You can give. Amen.",
    action: "Sit quietly for five minutes. Physically uncurl your fists or open your hands. Give Jesus every burden by name."
  },
  {
    title: "Shine Your Light", verse: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    ref: "Matthew 5:16", theme: "#f39c12",
    reflection: "You are not meant to hide. You are placed exactly where you are — your neighbourhood, your workplace, your family — to be light. Light does not struggle to work. It simply IS. When you are fully yourself in Christ, living genuinely and loving consistently, people will notice and God will be glorified.",
    prayer: "Lord, let my life be so full of Your love that it is impossible to be around me without sensing something different. Not religious performance — but genuine light. Shine through me today. Amen.",
    action: "Do one visible act of love today in a place where people can see — help someone, pay for someone, encourage someone publicly."
  },
  {
    title: "The God Who Sees", verse: "She gave this name to the LORD who spoke to her: 'You are the God who sees me.'",
    ref: "Genesis 16:13", theme: "#2ecc71",
    reflection: "Hagar was in the wilderness — alone, pregnant, rejected, running. And God appeared to her. Not to Abraham. Not to the 'important' people. To her. His name to her was El Roi — the God who sees. If you feel unseen, overlooked, forgotten: you are not. The God of the universe has His eyes on you right now.",
    prayer: "El Roi — God who sees me — I rest in the fact that You see exactly where I am today. I am not invisible to You. I am not forgotten. You know my name, my situation, my pain, and my hope. Thank You for seeing me. Amen.",
    action: "Write 'El Roi sees me' somewhere you will see it today. Every time you feel overlooked or forgotten, read it."
  },
  {
    title: "Spirit of Power", verse: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    ref: "2 Timothy 1:7", theme: "#9b59b6",
    reflection: "Fear, timidity, and anxiety are not from God. The Spirit you have received gives power — not arrogance, but Spirit-backed confidence. Love — not sentimentality, but active, sacrificial love. Self-discipline — not legalism, but focused, purposeful living. You have all three available right now.",
    prayer: "Lord, I reject the spirit of fear. I receive power, love, and a sound mind today. Where I have been timid about sharing my faith, timid in my prayers, timid in my calling — I step into the power You have given me. Amen.",
    action: "Do one thing today that fear has been stopping you from doing. Make the call. Send the message. Start the thing."
  },
  {
    title: "Where Two or Three Gather", verse: "For where two or three gather in my name, there am I with them.",
    ref: "Matthew 18:20", theme: "#3498db",
    reflection: "You do not need a large gathering for Jesus to show up. Two people praying in agreement — He is there. Three believers worshipping together — He is there. He is not more present in a stadium than in a small room. The condition is not numbers. The condition is His name. Where He is the reason, He is there.",
    prayer: "Lord, help me to never despise small beginnings. Whether I gather with one other person or one thousand, You are present. Thank You for the power of agreement in prayer. Lead me to pray with others this week. Amen.",
    action: "Find one person to pray with this week — even over a phone call or WhatsApp voice note. Pray together for five minutes."
  },
  {
    title: "The Prodigal's Return", verse: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
    ref: "Luke 15:20", theme: "#e74c3c",
    reflection: "The father did not wait for a full apology. He did not check if the son had really changed. He SAW him, was filled with compassion, and RAN. God does not walk slowly toward returning sinners. He runs. No matter how far you have gone, God is already running toward you before you finish the sentence.",
    prayer: "Father, I have wandered. I have been far from You — in my thoughts, my choices, my heart. But like the prodigal, I am returning. Run to me, Father. I am coming home. Amen.",
    action: "Is there someone in your life who is the prodigal — far from God? Pray for their return today. And if it is you: turn and come home."
  },
  {
    title: "Created for Good Works", verse: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    ref: "Ephesians 2:10", theme: "#2ecc71",
    reflection: "You are not an accident. You are a handiwork — a masterpiece in progress. And your life is not random. The good works you are called to were prepared before you were born. God thought of your assignment before He formed you. Your purpose is not something you have to invent. It is something you have to discover.",
    prayer: "Lord, show me the works You prepared for me. Not the works I chose for myself, but the ones You ordained. Lead me into the fullness of my assignment on this earth. I am available. Amen.",
    action: "Write down three things you believe you were made to do — gifts, passions, abilities. Ask God: 'How do these serve Your Kingdom?'"
  },
  {
    title: "Commanded to Love", verse: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples.",
    ref: "John 13:34-35", theme: "#f39c12",
    reflection: "The proof that you follow Jesus is not your theological knowledge, your church attendance, or your spiritual gifts. It is love — specifically, love for other believers. When the world sees Christians genuinely loving each other across tribe, class, language, and culture, that is the most powerful argument for the gospel.",
    prayer: "Lord, let love be my distinguishing mark. Where I have been harsh, let me be gentle. Where I have been indifferent, let me be present. Let people see You when they see how I treat others. Amen.",
    action: "Identify one believer you have had tension with. Do one act of love toward them today — a kind word, a prayer, a kind gesture."
  },
  {
    title: "Ask, Seek, Knock", verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    ref: "Matthew 7:7", theme: "#9b59b6",
    reflection: "Jesus uses three verbs that escalate in intensity: ask, seek, knock. Prayer is not passive. It is active pursuit. God responds to persistence not because He needs convincing, but because persistence reveals the depth of your desire and your trust in Him. Keep asking. Keep seeking. Keep knocking.",
    prayer: "Lord, I bring my requests before You again — not because You forgot, but because I trust You enough to keep asking. Give me perseverance in prayer. I will not give up. Amen.",
    action: "Write down three things you have stopped praying for because they seemed delayed. Pray for all three today."
  },
  {
    title: "Salt of the Earth", verse: "You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again?",
    ref: "Matthew 5:13", theme: "#3498db",
    reflection: "Salt preserves, flavours, and heals wounds. Jesus says that is what you are to the world. You slow moral decay in your environment. You bring flavour — meaning, joy, purpose — to those around you. But salt must make contact to work. A sealed container of salt preserves nothing. You must engage your world.",
    prayer: "Lord, keep me salty. Do not let comfort, busyness, or fear cause me to withdraw from the world You placed me in. Let me make contact — with my community, my street, my workplace — and let my presence make a difference. Amen.",
    action: "Engage one person in your community today whom you have never spoken to. A neighbour, a colleague, a shopkeeper. Just a genuine human connection."
  },
  {
    title: "God's Thoughts Toward You", verse: "How precious to me are your thoughts, God! How vast is the sum of them! Were I to count them, they would outnumber the grains of sand.",
    ref: "Psalm 139:17-18", theme: "#e74c3c",
    reflection: "God thinks about you constantly. Not occasional check-ins — constant, caring thoughts. More than the grains of sand on every beach. Every moment of every day, you are on God's mind. Not as a burden He tolerates, but as a treasure He thinks about tenderly and specifically.",
    prayer: "Father, let the knowledge that You think about me constantly change how I think about myself. Where I have felt forgotten, remind me of Psalm 139. Where I feel insignificant, remind me that I am precious to You. Amen.",
    action: "Close your eyes and spend 2 minutes receiving God's thoughts toward you. No asking. Just receiving. Let it be awkward — do it anyway."
  },
  {
    title: "Resurrection Power", verse: "I want to know Christ — yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death.",
    ref: "Philippians 3:10", theme: "#2ecc71",
    reflection: "The same power that raised Jesus from the dead lives in you. That is not poetry — it is theology. Resurrection power is available for dead situations: dead marriages, dead hope, dead dreams, dead faith. What God raised from a sealed tomb, He can raise from any situation in your life.",
    prayer: "Lord, let resurrection power work in my life today. Speak to the dead places. What seems finished, buried, and sealed — let Your resurrection life break through. Nothing is too far gone for You. Amen.",
    action: "Name one situation you have mentally written off as dead. Pray specifically for resurrection over it today."
  },
  {
    title: "Led by the Spirit", verse: "For those who are led by the Spirit of God are the children of God.",
    ref: "Romans 8:14", theme: "#f39c12",
    reflection: "Being led by the Spirit is the normal Christian life — not an advanced spiritual experience for exceptional believers. Every child of God is meant to live responsively to the Spirit's leading: in daily decisions, in relationships, in direction. The Spirit speaks. The question is whether we are listening.",
    prayer: "Holy Spirit, tune my ears to hear Your voice today. Speak in the decisions, in the pauses, in the unexpected moments. I commit to follow where You lead, even when it does not make immediate sense. Amen.",
    action: "At every significant decision today, pause 30 seconds and ask: 'Holy Spirit, what is Your direction here?' Then listen."
  },
  {
    title: "Do Justice, Love Mercy", verse: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.",
    ref: "Micah 6:8", theme: "#9b59b6",
    reflection: "God is not primarily interested in religious performance. He is interested in your character in the world — are you just in your dealings, merciful in your relationships, and humble before Him? These three things, lived consistently, are more powerful than a thousand religious activities.",
    prayer: "Lord, let justice, mercy, and humility be the three words that describe how I live. Show me where I have been unjust, unmerciful, or proud. Give me grace to change. Amen.",
    action: "Ask yourself honestly: where in my life am I not acting justly? Where am I not showing mercy? Address one of these today."
  },
  {
    title: "He Makes All Things New", verse: "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'",
    ref: "Revelation 21:5", theme: "#3498db",
    reflection: "God's speciality is newness. He made a new creation from chaos. He brought new life from dry bones. He raised the dead new from the grave. And He says: I am making everything new. Not I made, not I will make — I am making. Present tense. Active right now. In your situation.",
    prayer: "Lord, I believe You are making things new — in my life, my family, my community, my nation. I do not need to understand how. I just need to trust the One who said these words are trustworthy and true. Amen.",
    action: "Write the date today and write: 'God is making this new: [name one thing].' Keep it as a memorial for when you see the newness come."
  },
  {
    title: "Strength in Weakness", verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
    ref: "2 Corinthians 12:9", theme: "#e74c3c",
    reflection: "Paul asked God three times to remove his thorn. God did not remove it. He did something better — He revealed that His grace was sufficient for it, and that His power works best through human weakness. Your weakness is not a liability. In God's hands, it is the very place His power is most visible.",
    prayer: "Lord, I stop hiding my weaknesses from You. I bring them into the open. Right here, in my weakness, let Your power rest on me. Let people see You — not my strength, not my ability — just You. Amen.",
    action: "Share one weakness with God today that you have been too proud to acknowledge. Speak it out. Then receive His grace for it."
  },
  {
    title: "Heavenly Citizenship", verse: "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ.",
    ref: "Philippians 3:20", theme: "#2ecc71",
    reflection: "You are a resident of earth but a citizen of heaven. Your ultimate allegiance, your deepest identity, your final destination is not in this world. This does not mean disengaging from earth — it means engaging with it from a heavenly perspective. You are an ambassador, not a permanent resident.",
    prayer: "Lord, give me an eternal perspective today. Help me to invest in what lasts — souls, character, love — rather than what fades. Let heavenly citizenship shape how I spend my time, my money, and my energy. Amen.",
    action: "Review your calendar and budget for the past week. What percentage served eternal purposes? What would you change?"
  },
  {
    title: "Born Again", verse: "Jesus replied, 'Very truly I tell you, no one can see the kingdom of God unless they are born again.'",
    ref: "John 3:3", theme: "#f39c12",
    reflection: "Being born again is not a Christian cliché. It is a radical, supernatural transformation that starts in the spirit and works outward. You do not improve the old life — you receive a new one. If you have never made that decision personally, today can be the day. If you have, remember how significant that moment was.",
    prayer: "Lord Jesus, thank You for the new birth. For giving me a spirit that was dead and making it alive. Let me never take that miracle for granted. And let me share it with everyone who has not yet received it. Amen.",
    action: "If you have never personally given your life to Christ, do it now — tell Jesus you believe He died for you and you want to follow Him. If you have, share the plan of salvation with one person today."
  },
  {
    title: "Emmanuel — God With Us", verse: "The virgin will conceive and give birth to a son, and they will call him Immanuel — which means 'God with us.'",
    ref: "Matthew 1:23", theme: "#9b59b6",
    reflection: "The most stunning thing about the Incarnation is not the miracles — it is the WITH. God chose to come and BE WITH us. Not to manage us from a distance, not to send instructions from heaven, but to walk among us, eat with us, feel what we feel. Emmanuel is not just a Christmas word. It is a daily reality.",
    prayer: "Emmanuel, thank You for not staying distant. You came near. You came all the way. And You are still with me right now — every moment of this day. Let me live in the awareness of Your presence. Amen.",
    action: "Throughout today, practise the presence of God. Every hour, simply acknowledge: 'You are here with me right now, Lord.' Do it until it becomes automatic."
  },
  {
    title: "Complete in Him", verse: "And in Christ you have been brought to fullness. He is the head over every power and authority.",
    ref: "Colossians 2:10", theme: "#3498db",
    reflection: "In Christ, you lack nothing spiritually. You are complete — not partially done, not still being filled, but brought to fullness. Everything you need for life and godliness has already been given in Him. The problem is not that you lack. It is that you do not know, believe, or access what you already have.",
    prayer: "Lord, open my eyes to what I already have in You. I stop striving to earn what You have freely given. I receive the fullness You have placed in me through Christ. Teach me to live from that fullness. Amen.",
    action: "Read Colossians 1:9-12 slowly. Circle every word that describes what you have in Christ. Thank God for each one."
  },
  {
    title: "The Battle Is the Lord's", verse: "All those gathered here will know that it is not by sword or spear that the LORD saves; for the battle is the LORD's.",
    ref: "1 Samuel 17:47", theme: "#e74c3c",
    reflection: "David said this to Goliath — a giant with armour and experience, standing against a teenager with a sling. The whole army of Israel was paralysed by fear. David ran toward the giant. Why? Because he understood something they did not: the battle was the Lord's, not his. He was just the vessel.",
    prayer: "Lord, the giants I am facing are real. But the battle belongs to You. I position myself as David did — not in arrogance, but in clear-eyed faith that You fight for me. I run toward my Goliath today. Amen.",
    action: "Name your Goliath — the one thing that has been making you shrink back. Run toward it today in one small, specific way."
  },
  {
    title: "Not Ashamed of the Gospel", verse: "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.",
    ref: "Romans 1:16", theme: "#2ecc71",
    reflection: "Paul says I am NOT ashamed — implying there is a temptation to be. The gospel is offensive to pride. It says we cannot save ourselves. It is simple in a world that values complexity. It is exclusive in a world that demands inclusivism. But it is also the ONLY power that brings salvation. Own it with confidence.",
    prayer: "Lord, take away every trace of shame about the gospel from my life. Let me speak it clearly, live it openly, and share it boldly — at work, on social media, with family, with strangers. I am not ashamed. Amen.",
    action: "Share one gospel truth on your WhatsApp status or social media today. Not a quote — your own words, in your own voice."
  },
  {
    title: "His Plans, Not Yours", verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    ref: "Jeremiah 29:11", theme: "#f39c12",
    reflection: "God spoke this to people in exile — in the worst season of their national life, 70 years from home. Yet He says: I KNOW the plans. Not 'I am working on plans' or 'I hope it works out.' He already knows. And they are good: prosperity, not harm, hope, a future. Exile is not the end of the story.",
    prayer: "Lord, I receive Jeremiah 29:11 for my life today — not as a motivational poster but as a personal promise. Whatever exile I am in right now, You have good plans on the other side of it. I trust You. Amen.",
    action: "Write Jeremiah 29:11 in your own words, personalised to your specific situation. Read it every morning this week."
  },
  {
    title: "Abide in the Vine", verse: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    ref: "John 15:5", theme: "#9b59b6",
    reflection: "A branch does not produce fruit by trying harder. It produces fruit by staying connected to the vine. Fruitfulness is the natural result of abiding — remaining, staying, dwelling in Jesus. The crisis of the modern Christian life is not lack of activity. It is lack of abiding. Without the connection, nothing works.",
    prayer: "Lord Jesus, I want to abide. Not just visit You when I need something, but remain in You constantly. Let my life be rooted so deeply in You that fruit becomes natural, not forced. Prune what needs pruning. Amen.",
    action: "Remove one thing from your day today that disconnects you from God — social media, noise, a habit — and replace it with even 10 minutes of being still with Jesus."
  },
  {
    title: "Run the Race", verse: "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us.",
    ref: "Hebrews 12:1", theme: "#3498db",
    reflection: "You are running a specific race — marked out for you, not for someone else. The witnesses cheering you on include Abraham, Moses, Esther, Paul — all who finished their race. Your job is not to run someone else's course but to finish yours. Throw off the weight. Drop the sin. Run YOUR race.",
    prayer: "Lord, show me what is weighing me down. What is entangling me. I throw it off today by an act of my will. Give me the perseverance to keep running — even when I am tired, even when the end is not in sight. I will finish. Amen.",
    action: "Identify one thing that is slowing your race — a habit, a relationship, a mindset. Take one concrete step today to put it down."
  },
  {
    title: "Our Father", verse: "This, then, is how you should pray: 'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven.'",
    ref: "Matthew 6:9-10", theme: "#e74c3c",
    reflection: "The Lord's Prayer begins not with your needs but with God's identity: Father. Hallowed — holy, honoured, revered — be Your name. Kingdom come. Will be done. You begin prayer by positioning God correctly in your mind. Everything else flows from that. Your Father in heaven. Not a distant force — a Father.",
    prayer: "Father in heaven — I pause on those words today. You are MY Father. Holy, powerful, yet personal. Before I bring any request, I honour Your name. Your kingdom come into every corner of my life. Your will be done in me today. Amen.",
    action: "Pray the Lord's Prayer slowly today, stopping at each phrase to think about what it means for your life right now."
  },
  {
    title: "Steadfast Love", verse: "Give thanks to the LORD, for he is good; his love endures forever.",
    ref: "Psalm 118:1", theme: "#2ecc71",
    reflection: "The Hebrew word here for love is hesed — steadfast, covenant love. Not fragile, conditional, or seasonal. It endures forever. Through your worst days, your biggest failures, your longest winters. God's love for you does not fluctuate with your performance. It is a covenant. He is bound to you by His own nature.",
    prayer: "Lord, I thank You that Your love does not end when I fail. It does not cool when I am cold. It does not leave when I run. Your hesed — Your steadfast, covenant love — is over me today and forever. I rest in that. Amen.",
    action: "Say thank you to God for five things today. Not asking for anything — just thanking. Let gratitude be the atmosphere of your day."
  },
  {
    title: "Set Your Mind Above", verse: "Set your minds on things above, not on earthly things.",
    ref: "Colossians 3:2", theme: "#f39c12",
    reflection: "Your mind goes where you set it. It is not passive — it follows the direction you give it. Set is an active, deliberate choice. The things above: God's reality, His perspective, His kingdom, His promises. This does not mean ignoring earthly problems. It means viewing them through a heavenly lens.",
    prayer: "Lord, I set my mind above today. I choose to look at my circumstances from Your perspective rather than from the ground level. Give me the eyes of faith to see what You see. Amen.",
    action: "For every problem you think about today, immediately follow it with the question: 'What does God say about this?' Find one scripture for your biggest concern."
  },
  {
    title: "Blessed Are the Peacemakers", verse: "Blessed are the peacemakers, for they will be called children of God.",
    ref: "Matthew 5:9", theme: "#9b59b6",
    reflection: "Peacemakers are not peacekeepers who avoid conflict at all costs. They actively bring reconciliation where there is division. That requires courage — it is easier to take sides or stay silent. Jesus Himself was the ultimate Peacemaker, reconciling God and humanity through the cross. His children do the same work.",
    prayer: "Lord, make me a peacemaker today. Where there is conflict around me, give me the courage to step in with reconciling love. Where I am the source of conflict, give me the humility to make it right. Amen.",
    action: "Is there a broken relationship in your circle that you have been avoiding? Take one step toward reconciliation today — one message, one call, one honest conversation."
  },
  {
    title: "The Spirit Intercedes", verse: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.",
    ref: "Romans 8:26", theme: "#3498db",
    reflection: "When you do not know how to pray — when the situation is too complex, too painful, or too confusing for words — the Spirit prays for you. Wordless groans that carry more precision than your most eloquent prayer. You are never praying alone. And when your words fail, the Spirit's do not.",
    prayer: "Holy Spirit, pray through me today for the things I do not know how to pray for. I open myself to Your intercession. Thank You that even when I am speechless, You are not. Amen.",
    action: "Spend five minutes in silent prayer today. Do not use words. Just breathe, trust, and let the Spirit intercede."
  },
  {
    title: "The Whole Armour Stands", verse: "Therefore put on the full armor of God, so that when the day of evil comes, you may be able to stand your ground, and after you have done everything, to stand.",
    ref: "Ephesians 6:13", theme: "#e74c3c",
    reflection: "After you have done everything: stand. Sometimes the most powerful thing a believer can do is refuse to fall. Not advance dramatically. Not win visibly. Just stand. Hold the ground. Not give up. Not walk away. Not bow to pressure. Simply STAND — because you are wearing armour that was made for this.",
    prayer: "Lord, I put on the full armour today. And whatever comes at me — I will stand. Not in my strength but in Yours. Not because circumstances change but because You never do. I will not bow. I will not run. I will stand. Amen.",
    action: "Write the word STAND somewhere visible. Every time you see it today, declare: 'I stand in Jesus' name.'"
  },
  {
    title: "He Who Calls Is Faithful", verse: "The one who calls you is faithful, and he will do it.",
    ref: "1 Thessalonians 5:24", theme: "#2ecc71",
    reflection: "God does not call you and then abandon you to figure it out alone. The calling comes with the One who called you. His faithfulness is the guarantee of completion — not your faithfulness, not your consistency, not your track record. He called. He is faithful. He will do it. Rest in that.",
    prayer: "Lord, I rest in Your faithfulness today. What You started in my life, You will complete. I stop striving to maintain what only You can sustain. You called me. You will do it. I trust You. Amen.",
    action: "Write down one thing God called you to that feels unfinished or uncertain. Under it write: 'He who called me is faithful. He will do it.' Keep it."
  }
];

// Helper: get today's devotional (cycles through 52 weekly, one per week)
function getTodayDevotional() {
  const now = new Date();
  // Day of year 0-364, divide by 7 for week number, mod 52
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const weekIndex = Math.floor(dayOfYear / 7) % DEVOTIONALS.length;
  return DEVOTIONALS[weekIndex];
}
