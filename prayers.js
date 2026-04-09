// ==========================================
// GospelSwipe Pro v1.1 — Local Prayer Database
// 200 prayers · 5 categories · 40 each
// Zero API cost · Fully offline
// ==========================================

var PRAYERS = {

  salvation: [
    "Lord Jesus, I come before You acknowledging I am a sinner in need of Your grace. I believe You died on the cross for my sins and rose again on the third day. I open my heart and invite You in as my Lord and Savior. Thank You for saving me.",
    "Heavenly Father, I realize I have been living apart from You and I am sorry. Right now I turn away from my sin and place my full trust in Jesus Christ. I receive Your forgiveness and the gift of eternal life. Write my name in Your book.",
    "Father, I confess I have fallen short of Your glory and I cannot save myself. I believe Jesus took my punishment on the cross so I could be made right with You. I surrender my life to Him today. Thank You for this new beginning.",
    "Lord, I have tried to live life on my own terms and I have failed. Today I stop running and I come home to You. I believe in the death and resurrection of Jesus Christ. Forgive my sins, cleanse my heart, and make me Your child forever.",
    "Jesus, I call on Your name because Your Word says whoever calls on the name of the Lord shall be saved. I am calling right now. Save me, change me, and fill me with Your Holy Spirit. I am Yours from this day forward.",
    "Father, I ask for the courage to fully surrender to You today. I believe Jesus paid for every wrong I have ever done. I choose to follow Him with my whole heart. Lead me, teach me, and never let me go.",
    "Lord Jesus, I do not want to live another day without You. I confess my sins and ask You to wash them away with Your precious blood. Come into my heart and be my Lord. I trust You with my past, my present, and my future.",
    "Heavenly Father, Your Word says You so loved the world that You gave Your only Son. Today I receive that love personally. I believe in Jesus, I repent of my sins, and I choose to walk with You. Thank You for not giving up on me.",
    "God, I have heard Your voice calling me and today I respond. I admit I am a sinner, I believe Jesus died and rose for me, and I confess Him as Lord. Fill me with the Holy Spirit and help me live for You every single day.",
    "Lord, the weight of my sin is real and I am tired of carrying it alone. I come to Jesus who said His yoke is easy and His burden light. Take my sins, give me Your righteousness, and let me start fresh in You today.",
    "Father, I pray for my family member who does not yet know You. Draw them with Your love, remove every barrier keeping them from truth, and send the right people across their path. Do not let them go without knowing Jesus.",
    "Lord Jesus, I intercede for my friend who is far from You. You left the ninety-nine to find the one — please find them now. Break through their doubts and fears. Let them feel Your love in a way that is undeniable.",
    "Father, soften the heart of every person who hears the gospel today. Remove the blindness the enemy has put over their eyes. Let the message of salvation land in good soil and bring forth a harvest of new believers.",
    "God, give me the courage to share the gospel with someone today. Let Your love flow through me. Use me as an instrument to lead at least one soul closer to Jesus. Not my words but Yours through me.",
    "Lord, I lift up every prodigal who has wandered away from faith. Call them back. Remind them of prayers their loved ones prayed. Do not let the enemy keep them trapped when the Father's house is full and waiting.",
    "Heavenly Father, I pray for people who are on the edge of belief — almost persuaded but not yet there. Be patient and give them one more clear encounter with Your truth and love. Break through every last wall of resistance.",
    "Jesus, be present at every church service, street outreach, and gospel conversation happening today. Confirm Your Word with signs. Let hearts be convicted, fears be lifted, and decisions be made for eternal life.",
    "Father, I pray for those who have been hurt by religion and now reject You because of it. Show them the difference between religion and a relationship with Jesus. Heal their wounds so they can come home to You.",
    "Lord, I ask for a wave of salvation to sweep through this generation. Pour out Your Spirit on the young and old. Let revival begin in my own heart first, then spread to everyone I know.",
    "God, I thank You that salvation is not based on what I do but on what Jesus has already done. Help me to fully receive this truth. Quiet the voice of condemnation and let Your grace speak louder. I am saved by grace alone.",
    "Father, I pray for every person who has never made a decision for Christ. Right now, Holy Spirit, speak to their hearts. Draw them close. Let this be the moment they say yes to Jesus forever.",
    "Lord Jesus, many people know about You but do not yet know You personally. Bridge that gap. Turn information into transformation. Let them move from knowing facts about You to having a living relationship with You.",
    "Heavenly Father, I pray for those who believe they are too far gone for forgiveness. Remind them Your grace is greater than any sin. No one is beyond the reach of the cross. Draw them and save them today.",
    "God, I ask You to stir up spiritual hunger in the people around me. Let them become dissatisfied with empty things and start seeking You with everything they have. Let that hunger lead them straight to the bread of life.",
    "Lord, I commit to being a faithful witness for the gospel. Give me boldness without arrogance, compassion without compromise, and love without judgment. Let my life and my lips both point people to Jesus.",
    "Father, I pray for every evangelism effort happening around the world right now. Bless every seed being planted. Let none of it return void. Let the harvest be greater than the laborers can imagine.",
    "Jesus, You said You would draw all men to Yourself. I trust the work You are already doing in the lives of those I love. Help me to cooperate with Your Spirit and to be ready when the moment comes.",
    "Lord, I ask that the message of the cross would not lose its power in this generation. Let the simple truth that Jesus died and rose again continue to transform lives by the millions.",
    "Father, forgive the times I have been a poor ambassador for the gospel. Reignite my first love for Jesus and give me a fresh burning passion to see people come to know Him.",
    "God, I pray for those deep in addiction, violence, despair, and deception. Shine the light of the gospel into those dark places. Let the power of salvation reach where no human effort can go.",
    "Lord Jesus, the same gospel that saved Paul on the road to Damascus and the thief on the cross — let it save someone today. Let it save me more deeply today. That gospel is still the power of God unto salvation.",
    "Father, I ask for a supernatural encounter for someone searching but not finding. Appear to them in a dream, a moment of undeniable peace. Let them find what they are looking for and let it be Jesus.",
    "Heavenly Father, let Your church be bold, loving, and urgent in sharing the gospel. Remind us that people are perishing without Christ and we carry the only message that can save them. Make us unashamed.",
    "Lord, I pray for the unreached people groups who have never heard the name of Jesus. Raise up missionaries and brave believers to carry the gospel to them. Let no one die without a chance to hear and believe.",
    "God, let a spirit of repentance fall on my city. Let people become aware of their need for You. Let conversations about eternity happen naturally at dinner tables, workplaces, and marketplaces.",
    "Jesus, You came not to condemn the world but to save it. Let that saving love be on display in every church and every believer today. Show the world that the gospel is not bad news that shames but good news that saves.",
    "Father, I thank You that every person who calls on the name of the Lord will be saved. That promise is still standing. I hold it for every person in my family who does not yet know You. Your promise will not fail.",
    "Lord, I pray for the person who is about to give up on You — the one who prayed and felt no answer, who tried and still failed. Reach them before they walk away. Let Your love feel tangible and real right now.",
    "God, I surrender my timeline for how people I love should come to faith. I trust Your process. I will keep praying, keep loving, and keep believing until I see them standing in Your presence saved and whole.",
    "Heavenly Father, let the fear of the Lord come upon those who have been flippant about eternity. Shake their complacency not to crush them but to wake them up before it is too late. Lead them to the cross."
  ],

  healing: [
    "Great Physician, I come to You in pain and need Your touch. You are the same God who healed the blind, the lame, and the leper. Nothing has changed. Lay Your hand on my body right now and let healing flow from head to toe.",
    "Father, Your Word declares that by the stripes of Jesus I am healed. I declare that truth over my body today. I refuse to accept sickness as my permanent address. I believe in Your power to heal and I receive it by faith.",
    "Lord Jesus, I am tired and my body has been fighting for too long. I bring every diagnosis, every symptom, and every fear to You. You formed me in my mother's womb. Heal what is broken and restore what has been lost.",
    "Heavenly Father, I lay my hands on the part of my body that is suffering. Let Your healing virtue flow into this place. Drive out sickness, inflammation, and pain in the name of Jesus. Let every cell respond to the authority of Your Word.",
    "God, the doctors have done what they can and I trust their work. But I trust You above every report. Send healing from heaven that goes deeper than any medicine can reach. Do what only You can do in this body.",
    "Lord, I pray for healing not just of my body but of my entire self — my anxious mind, my wounded emotions, and my weary spirit. Come into every room of my being and make it whole. Heal me thoroughly and completely.",
    "Father, I stand on James 5:15 — the prayer of faith will save the sick and the Lord will raise them up. I am praying that prayer right now with everything I have. I believe. I declare healing. Raise me up, Lord.",
    "Jesus, You spoke and calmed the storm, You commanded a dead man to walk out of a tomb. Speak to this sickness now. Let it hear Your voice and obey. Let my testimony be that You healed me when nothing else could.",
    "Lord, I pray for someone lying in a hospital bed right now. Surround them with Your presence. Give doctors wisdom. Give nurses compassion. And let Your healing power do what every machine and medication cannot.",
    "Father, where there is pain let there be comfort. Where there is infection let there be cleansing. Where there is malfunction let there be restoration. I apply the blood of Jesus to every part of this body that needs Your miraculous touch.",
    "God, I refuse to let fear about this diagnosis steal my peace. You have not given me a spirit of fear but of power, love, and a sound mind. I hold onto that truth. I choose faith over fear. I choose Your report over every other report.",
    "Lord Jesus, I pray for the child who is sick. Their parents are afraid and their little body is struggling. You called children to come to You and You blessed them. Come to this child now. Let Your gentle, powerful hand bring relief.",
    "Heavenly Father, I ask for healing of chronic pain that has worn down my joy and strength. You see every sleepless night and every moment of suffering. I trust that You have a plan. And I am asking You to heal me.",
    "God, let my immune system rise up and function the way You designed it to. You are the master architect of the human body. Restore every system and every organ to the optimal design You intended when You created me.",
    "Father, I pray for those suffering with mental illness — depression that feels like a dark pit, anxiety that will not stop, voices that do not belong. Jesus healed those tormented in mind. Heal them now. Bring peace and clarity.",
    "Lord, I ask for supernatural healing for someone who has been told there is nothing more that can be done. You are a God of impossibilities. You heal what science cannot explain. Let this be one of those testimonies.",
    "Jesus, I pray against every spirit of infirmity attached to my body or my family. I resist it in Your name. Sickness has no covenant with me. I belong to God and my body is the temple of the Holy Spirit.",
    "Father, let healing come during my sleep tonight. Restore my body while I rest. Let every healing process accelerate. Let me wake up tomorrow better than I am today. I trust You to work even while I sleep.",
    "God, I pray for those battling cancer. Every tumor, every malignant cell — I bring them before You. You made every cell in that body. You can unmake what does not belong. Fight for Your people. Send healing that confounds medicine.",
    "Lord, I thank You in advance for my healing. I choose to praise You before I see it. I call those things that are not as though they are. Thank You for a healed body. Thank You for restored health. I receive it by faith today.",
    "Heavenly Father, I ask for healing of my digestive system, joints, nerves, eyes, ears — every part of me not functioning as it should. You know every detail. Heal me precisely, thoroughly, and completely.",
    "Father, the woman with the issue of blood pressed through the crowd to touch the hem of Your garment and was immediately healed. I am pressing through every obstacle right now to reach You. I touch You by faith. I receive my healing.",
    "Lord Jesus, I pray for healing of addiction. The body has been damaged and the mind has been captive. Free this person completely. Heal their brain chemistry, break every chain, and give them a fresh start with body and mind restored.",
    "God, I ask for healing of heartbreak — the kind that makes the chest physically ache. You are close to the brokenhearted. Bind up every wound. Let joy return. Let the person who feels they will never be whole again discover You can make them whole.",
    "Father, where surgery has left scars, let Your healing grace restore. Where medicine has caused side effects, let Your wisdom rebalance. Let the healing process move faster than doctors expected. Surprise them with Your speed.",
    "Lord, I intercede for those living with disability and chronic conditions. Give them Your strength for each day. Lead them to every resource that can help. And do the supernatural work that no resource can accomplish.",
    "Jesus, I declare healing over every bone, every muscle, every ligament in my body. Strengthen what is weak. Mend what is broken. Rebuild what has deteriorated. Let this body be a living testimony of Your power to restore.",
    "Heavenly Father, I ask for emotional healing from trauma. The past has left wounds that still bleed. Come into those memories. Sit with me in the pain. Bring the healing only You can bring — from the inside out.",
    "God, I pray for those who have lost their health slowly and begun to lose hope. Revive their hope today. Show them one clear sign You are at work. Let them dare to believe again that healing is still possible for them.",
    "Lord, let healing flow through every prayer meeting, every anointing service, and every hospital visitation today. Confirm the laying on of hands with real results. Let sick people leave healthy and let God receive all the glory.",
    "Father, healing is in the atonement. Jesus bore our sicknesses and carried our pain. That work is finished. I receive the full benefit of what He purchased for me at Calvary. Healing is my covenant right and I receive it now.",
    "Lord Jesus, be the peace of the patient waiting for test results. Be the clarity of the doctor finding answers. Be the strength of the caregiver running on empty. Bring healing to every person in that situation — body, mind, and soul.",
    "God, I pray for those with autoimmune conditions where the body attacks itself. Speak order into that chaos. Let the immune system recognize friend from foe. Restore proper function and end the war happening within.",
    "Father, let the name of Jesus be honored in hospitals and clinics around the world today. Let inexplicable recoveries be reported. Let doctors say they have no explanation. Let patients say they know exactly why — because Jesus healed them.",
    "Lord, strengthen my faith to believe for healing. Where doubt has crept in, cast it out. Where I have been disappointed before, heal that disappointment and restore my boldness to ask big things of a big God.",
    "Heavenly Father, I dedicate this body to Your service. Heal it so I can continue to serve You. Use my testimony of healing to lead others to faith. Let this sickness become a stage where Your power is gloriously displayed.",
    "God, restore the years the locust has eaten. What sickness has stolen — time, energy, opportunity, relationships — let Your grace restore double. Turn every area of loss into a testimony of Your goodness and power.",
    "Lord Jesus, I pray for every mother who is sick and fighting to stay strong for her children. Hold her up. Give her supernatural energy. Heal her body. Let her children have their mother for many more healthy years.",
    "Father, where medical options have run out, You are still the option that never runs out. When the prognosis is grim, Your Word is still good. When doctors say no more, You say it is not over. I trust You as my healer.",
    "God, I end this prayer declaring that You are Jehovah Rapha — the Lord who heals. That name has never changed. That power has never diminished. That willingness has never wavered. You are still the healer. I believe it. I receive it."
  ],

  guidance: [
    "Father, I do not know which way to go and I need Your direction. Your Word says if I acknowledge You in all my ways, You will direct my paths. I am acknowledging You right now. Please make the path clear. Show me the next step.",
    "Lord, I am standing at a crossroads and both roads look reasonable to me. But You see the end from the beginning. You know which path leads to life and which leads to regret. Give me a clear sign. Speak to me through Your Word and Your peace.",
    "God, I ask for the wisdom You promised in James 1:5 — given liberally to all who ask without finding fault. I am asking right now. I need wisdom for this decision, this relationship, this season. Give it to me generously.",
    "Heavenly Father, quiet the noise around me so I can hear Your voice. Silence the opinions, fears, and logic drowning out Your Spirit. Train my heart to recognize Your voice. Lead me like a shepherd leads a sheep — gently and surely.",
    "Lord Jesus, I commit this year into Your hands. Every plan I make, hold it loosely. I want Your will, not mine. Guide me into the life You planned for me before I was even born. Let Your purpose be what shapes my future.",
    "Father, I confess I have been making decisions in my own strength and it has not been going well. I humble myself and ask You to take the lead. I step aside from my own cleverness and trust Your wisdom over my understanding.",
    "God, I need guidance about my career. I am not sure whether to stay or go, to build here or start fresh. Show me. Let every open door be one You opened and every closed door be a blessing in disguise.",
    "Lord, I ask for guidance in my marriage. We are not sure what the next step looks like. Speak to both of us. Align our hearts. Give us a shared vision and the courage to walk toward it together.",
    "Father, I pray for students making decisions about their future — which school, which course, which city. Let Your plan supersede every human calculation and lead them to exactly the right place for their purpose.",
    "Heavenly Father, guide me in how I spend my time. I want to invest in what matters eternally, not waste days on what will not last. Teach me to number my days so I gain a heart of wisdom. Let my calendar reflect Your priorities.",
    "Lord, I need guidance about this business decision. The numbers look a certain way but numbers do not tell the whole story. Give me discernment beyond data. Let Your peace be my compass. If it is not right, close the door firmly.",
    "God, guide me in my finances. Show me where to give, where to save, where to invest, and where to cut back. Let every financial decision align with Your kingdom purposes. Make me a wise and faithful steward.",
    "Father, I ask for guidance as a parent. I do not always know how to handle what my child is going through. Give me Your wisdom. Let me know when to speak and when to listen, when to be firm and when to be gentle.",
    "Lord, I feel lost in this season of my life. The map I had planned is not working anymore. Remind me You are still the Good Shepherd and You have not lost me even when I feel lost. Bring me back to the path.",
    "Heavenly Father, I ask for guidance through Your Word. Open the Scriptures to me in a fresh way. Let the passage I read today speak directly to my situation. Let Your written Word be a lamp to my feet and a light to my path.",
    "God, guide me in my church community. Should I stay or should I go? Let Your purpose be clear and let my ego and comfort not be the deciding factors. Where do You need me most?",
    "Lord, I ask for guidance about a relationship I am uncertain about. Give me discernment beyond feelings. If this person is right for my life, confirm it. If they are not, give me the grace to step away without bitterness.",
    "Father, show me the gifts and calling You placed in me before I was born. I do not want to arrive at the end of my life having never walked in my purpose. Wake up every latent gift and clarify my assignment.",
    "Heavenly Father, I pray for leaders making decisions that affect thousands. Give them wisdom that surpasses human understanding. Protect them from corrupt counsel. Let every major decision be filtered through prayer and Your Word.",
    "Lord, I ask for a clear sense of purpose for this year specifically. What are the one or two things You want me to focus on? Help me say no to the good so I can say yes to the best. Bring clarity and focus to my calling.",
    "God, I ask for a dream or vision that confirms the direction I am sensing. Let me not confuse my desires with Your plans. Speak clearly. I am listening more intently than I ever have. Show me the way.",
    "Father, guide me through this transition I did not choose. I do not understand it yet. But I trust that You close doors for good reasons and the door You open next will be better. Lead me forward in faith.",
    "Lord, I ask for divine appointments — the right people placed in my path at exactly the right time with wisdom, connection, or confirmation. You guide people through people. Bring the right voice into my life.",
    "Heavenly Father, when overwhelmed by too many options, simplify my thinking. Reduce the noise. Let Your still small voice rise above everything else. I trust You will guide me clearly when I need the answer most.",
    "God, guide my tongue. Let me know when to speak and when to be quiet. Teach me to pause, to pray, to listen before I respond. Let my words be seasoned with wisdom and grace — not reaction.",
    "Lord, I pray for guidance in how I use my platform, my voice, and my influence. Let every word I put into the world point people to You. Let my life's work be something You are proud of that outlasts my time here.",
    "Father, guide me as I make plans for the future. Let every plan pass through the filter of Your will. When my plans do not match Yours, give me the humility to defer. You know far more about what is best for me than I do.",
    "Heavenly Father, in moments of confusion I return to what I do know — You are good, You love me, You have a plan. From that foundation let me walk forward one step at a time, trusting Your guidance even when I cannot see far.",
    "God, let the Holy Spirit be my guide today — in every conversation, every decision, every moment of uncertainty. I do not need to figure everything out. I just need to follow. Teach me sensitivity to Your leading.",
    "Lord, I ask for wisdom about my health decisions. There are so many opinions and options. Help me and my doctors make wise choices. Guide the treatment, guide the recovery, and guide the lifestyle changes that will serve me long-term.",
    "Father, I commit this ministry into Your hands and ask for specific guidance. Where should we go? What should we say? Whom should we serve? Let every strategy be born in prayer and confirmed by Your Spirit.",
    "Lord, for every young person at a fork in the road listening to too many voices — quiet the crowd. Let them hear You. Keep them from rushing into decisions they will regret and from delaying decisions that will shape them well.",
    "Heavenly Father, guide me in forgiveness. I do not know how to forgive what was done to me. It was not small. Teach me Your way of forgiving — not because it is deserved but because You have forgiven me of so much.",
    "God, I ask for guidance in how I handle my anger. Something is not right and I am tempted to react rather than respond. Show me the right way forward — one that honors You, protects my integrity, and possibly restores the relationship.",
    "Lord, I ask You to order my steps today. Every meeting, every encounter, every decision — let it be directed by You. Keep me alert to the divine moments hidden in ordinary days.",
    "Father, guide me to the right church, the right community, and the right people for this season. I need people who will sharpen me, challenge me, and carry me when I cannot carry myself. Connect me with them now.",
    "Heavenly Father, I ask for a spirit of discernment to recognize the difference between open doors You have opened and open doors that are traps. Not every opportunity is from You. Teach me to test everything and hold the good.",
    "God, guide me back to the basics when I drift — back to Your Word, prayer, and community. Do not let me be so busy building things for You that I forget to spend time with You. Keep me close. Keep me rooted.",
    "Lord, I end by simply saying: I trust You. I do not understand the path fully. I cannot see around every bend. But I know the One who is guiding me and that is enough. Lead on, Good Shepherd. I will follow Your voice.",
    "Father, when I am afraid to step out in faith because of what it might cost me, remind me of what it cost You. Let that love cast out every fear. Give me the courage to obey even before I fully understand."
  ],

  thanksgiving: [
    "Father, I begin with gratitude because You are worthy of all praise. Thank You for life itself — the breath in my lungs, the heartbeat in my chest, and the privilege of another day to know You and make You known.",
    "Lord Jesus, thank You for the cross. Thank You for leaving glory, taking on flesh, walking through suffering, and dying in my place. The more I think about what You did, the more undone I become. I will never get over the gospel.",
    "Heavenly Father, thank You for Your Word. In a world full of confusion and noise, You have given me a light that never goes out. Thank You that I can open the Bible and hear Your voice. Never let me take that for granted.",
    "God, I am grateful for the Holy Spirit who lives inside me. He is my Counselor, Comforter, and Guide. Thank You that I am never alone in any dark valley or overwhelming moment. The Spirit of God Himself is with me.",
    "Lord, thank You for the people You have placed in my life — those who prayed for me when I gave up on myself, those who showed up when it mattered, those through whom Your love became tangible and real.",
    "Father, thank You for answered prayer. You did not have to listen. You did not have to respond. But You did — faithfully, lovingly, and often more generously than I asked for. I praise You for every yes and every better-than-you-know no.",
    "Heavenly Father, I am grateful for food on my table, a roof over my head, and clothes on my back. Thank You for provision that comes from Your generous hand day after day without fail. These things are never guaranteed.",
    "Lord Jesus, thank You for forgiving me. Completely, freely, without holding it over me. You removed my sins as far as the east is from the west. That kind of grace has no equal anywhere in the universe.",
    "God, I thank You for the church — imperfect because it is made of people, but Yours and loved by You. Thank You for giving me brothers and sisters in the faith who carry me and challenge me.",
    "Father, thank You for the privilege of prayer — that the Creator of the universe has made Himself accessible to me anytime, anywhere. I do not need an appointment. I do not need a perfect script. I just need to come.",
    "Lord, I am grateful for the peace that passes understanding — the peace that showed up in the hardest season of my life and made no logical sense but was undeniably real. That peace is one of Your greatest gifts.",
    "Heavenly Father, thank You for the storms I have come through. I did not thank You then, but I understand now. Those seasons built something in me that comfort never could have. You used everything — even the things that nearly broke me.",
    "God, I am grateful for the sunrise this morning — that Your mercies are new every morning. Yesterday's failures do not define today. Great is Your faithfulness. Every day is a fresh start wrapped in Your steadfast love.",
    "Lord Jesus, thank You for the gift of salvation — that I was lost and now I am found, that I was dead and now I am alive. This is the greatest story ever told and I am in it. Thank You for writing me into Your story.",
    "Father, I am thankful for moments of joy — laughter with family, the beauty of a sunset, a song that captured something true. You have filled this life with beauty. Help me see it and savor it every day.",
    "Heavenly Father, thank You for protection I am not even fully aware of. Every accident I did not have, every attack You deflected, every danger I walked past without knowing. Your angels watch over me faithfully.",
    "God, I thank You for healing that has already come to my life — physical, emotional, spiritual. You have brought me further than I had any right to expect. My testimony is a testament to Your grace and persistence.",
    "Lord, thank You for the times You spoke to me clearly — through Scripture, through the Spirit, through circumstances, through a dream. I am a person who has been spoken to by God. That is extraordinary. Thank You.",
    "Father, I am grateful for clean water, medicine, and technology that connects me to community. These are multiplied gifts of ordinary life that are easy to overlook. Today I pause and say thank You for each one.",
    "Heavenly Father, thank You for being slow to anger and abounding in love. If You treated me as I sometimes deserve, I would not survive it. Instead You are patient and kind and keep giving me room to grow.",
    "Lord Jesus, thank You for the promise of resurrection. Death is not the end of my story. Because You live, I will live also. The grave has been robbed of its victory. Thank You for making eternity a certainty.",
    "God, I am grateful for the Bible stories that remind me who You are and what You do. They are not just history — they are a pattern. You are still that God today. What You did then You are still doing now.",
    "Father, thank You for the specific ways You have provided this year. Things I needed appeared at exactly the right moment. Doors opened when I had nowhere else to turn. You were faithful in the details. I see it.",
    "Lord, I thank You for spiritual growth — for the fact that I am not who I used to be. The work You are doing in me is real even if it is slow. Thank You for not giving up on the project. Thank You for finishing what You started.",
    "Heavenly Father, I am grateful for Your creation — mountains, oceans, stars, seasons, the complexity of a single cell. You made all of this and it sings of Your glory. Today I lift my eyes from my small life and marvel at Yours.",
    "God, thank You for the gift of worship — that I can sing to You, read to You, talk to You, create for You, and work for You. Everything in life can be an act of worship when done with gratitude and devotion.",
    "Lord, I am grateful for second chances. And third chances. And as many more as I have needed. Your mercies are not exhausted by my repeated failures. You are the God of another chance and I am living proof.",
    "Father, thank You for every teacher, pastor, mentor, and stranger who spoke a word into my life at exactly the right time and did not even know it. You sent them on purpose. They were answers to prayers I had not yet prayed.",
    "Heavenly Father, thank You for Your nearness in grief. When I lost people I love, You did not disappear. You drew closer. You wept with me. You held what I could not hold. Thank You for being the God who comes close.",
    "Lord, I am grateful for seasons that forced me to depend on You completely. When I had nothing and You were everything — those moments taught me more about faith than any abundance ever could. Thank You for the desert.",
    "God, I am grateful for children — their laughter, their questions, their unguarded love, the way they remind adults what trust and wonder look like. Thank You for filling the world with children who reflect Your creativity.",
    "Father, thank You for the gift of music — for hymns that have carried God's people through centuries, for songs that reached me when sermons could not, for melodies that lodge truth deep in the heart.",
    "Lord Jesus, thank You that You intercede for me right now at the right hand of the Father. You are not just my Savior from the past. You are my Advocate in the present. Every time I fall short, You are speaking on my behalf.",
    "Heavenly Father, I am grateful for this moment of prayer — that in the middle of a busy, noisy life, I stopped and turned my heart toward You. Thank You that You were already here waiting. You are always glad when I come.",
    "God, I thank You for the hard truth that You love me too much to let me stay comfortable in sin. Your discipline is love. I have not always welcomed it, but I have always needed it. Thank You for being a Father who cares enough.",
    "Lord, I am grateful for the cross of suffering I have carried. It produced compassion, humility, and dependence on You that prosperity never would have built. I see the purpose now and I am genuinely grateful for it.",
    "Father, I choose gratitude as a lifestyle, not just a feeling. Even on hard days I will find something to be thankful for. Even in loss I will trust Your goodness. Gratitude is a declaration of faith in Your character.",
    "Heavenly Father, thank You for a mind that can think, hands that can work, a voice that can speak, and feet that can carry me where You send me. Not everyone has these gifts. I want to use mine fully in gratitude.",
    "God, thank You for being unchangeable. In a world where everything shifts, You are the same. Your love is the same. Your faithfulness is the same. Your promises are the same. That steadiness is my anchor when everything moves.",
    "Lord, I end this prayer the way I began it — with gratitude. You are worthy. You are good. You are faithful. You are enough. Whatever today holds, I hold these truths. Thank You for being a God I can trust completely."
  ],

  protection: [
    "Father, I place myself, my family, and my home under the covering of the blood of Jesus. No weapon formed against us shall prosper. Every assignment the enemy has launched against this household is canceled in the name of Jesus.",
    "Lord, be a wall of fire around my children today. Let Your angels watch over them at school, on the road, and everywhere I cannot be. Protect their bodies, their minds, and their hearts from every form of evil.",
    "Heavenly Father, I pray the 91st Psalm over my life. You are my refuge and my fortress. I trust in You. Your angels will guard me in all my ways. Let that ancient promise be my reality today.",
    "God, I ask for protection over my mind. Guard it against destructive thoughts, spiritual deception, and the lies of the enemy. Let the mind of Christ be active in me. Let every thought be taken captive to Your truth.",
    "Lord Jesus, I stand against every spiritual attack directed at my life and calling. I stand in the authority You gave me over principality and power. The enemy has no right to what belongs to God. I take my stand.",
    "Father, protect my marriage from every external force and internal weakness the enemy would use to divide us. Strengthen what is strong. Heal what is broken. Let no weapon fashioned against our covenant succeed.",
    "Lord, I ask for traveling mercies for myself and my loved ones today. Protect every vehicle, every journey, every road. Keep accidents away. Let Your angels go before and behind. Bring everyone home safely.",
    "God, I pray for protection over my finances from theft, fraud, and poor decisions. Let Your wisdom guard every financial door. Let every attempt to rob or deceive me be exposed and blocked before it causes damage.",
    "Heavenly Father, I lift up every believer in a nation where following Jesus is dangerous. Protect them from persecution. Give them wisdom to navigate their reality. Let their courage inspire the rest of the church.",
    "Lord, I ask for protection of my health from disease, infection, and sudden illness. No plague shall come near my dwelling. I hold that promise. I plead the blood of Jesus over every cell and every system in this body.",
    "Father, protect my reputation from false accusation and slander. Let every lie told about me fall to the ground without taking root. Let the truth be seen by those who need to see it. Vindicate me in Your own time.",
    "God, I pray protection over the leaders of Your church who are under intense spiritual attack. Surround them with angels. Give them discernment about threats they cannot see. Keep their families safe and their faith unshaken.",
    "Lord Jesus, I place the cross between myself and everything assigned against me today. Your blood speaks louder than every accusation. Your victory at Calvary is final. I walk in that victory and I will not be moved.",
    "Father, I ask for protection for missionaries and evangelists in dangerous territories right now. Shield them supernaturally. Let fear not paralyze them. Let the same Spirit who delivered Paul and Silas from prison surround them.",
    "Heavenly Father, I pray for children around the world in danger — those in war zones, poverty, or abusive homes. Protect the innocent. Raise up protectors for those who have none. Let justice come for those who harm children.",
    "God, protect me from temptation that is beyond what I can bear. Your Word promises You will provide a way of escape. Open that door clearly when the pressure builds. Give me the strength to run through it and not look back.",
    "Lord, I pray for protection over my digital life — my privacy and the information that could be used against me or my family. Guard what I cannot guard myself. Expose any intrusion before it causes damage.",
    "Father, I ask for protection over my emotions and mental health. Guard me from despair, bitterness, and pain that turns inward and becomes destructive. Let Your joy be my strength. Let Your peace stand guard.",
    "Lord Jesus, no darkness can survive in the presence of Your light. I declare Your light fills my home, my workplace, my relationships. Every shadow, every hidden scheme, every dark assignment is exposed and canceled.",
    "God, I pray for divine protection for my nation. Protect it from corruption, violence, and economic collapse. Raise up righteous leaders. Confound the plans of those who harm the innocent. Let justice and mercy define this land.",
    "Heavenly Father, I ask for a hedge of protection around my mind as I sleep. Let no nightmare or spiritual intrusion disturb my rest. You grant sleep to those You love. Let tonight be a night of deep, protected, restoring sleep.",
    "Lord, I stand in the gap for my neighborhood and community. Cover every home with the blood of Jesus. Let Your presence be so strong in this area that evil has no comfortable place to operate here.",
    "Father, protect the marriages in my church from attacks specifically targeting them right now. Strengthen every husband and wife. Let the covenant hold. Let love be chosen again and again even when it is hard.",
    "God, I pray for protection over the dreams and assignments You have placed in the hearts of believers. The enemy targets purpose. Let every God-given vision survive every attack, discouragement, and season of waiting.",
    "Lord Jesus, greater is He that is in me than he that is in the world. I hold that truth over my life today. I am not intimidated by what is arrayed against me. The One on my side is greater than everything aligned against me.",
    "Father, guard the faith of new believers under immediate spiritual attack after their decision for Christ. Surround them with good community. Give them a strong foundation in Your Word quickly. Do not let the enemy snatch what was planted.",
    "Lord, I ask for protection over our church gathering. Let every meeting be under Your authority. Let no spirit of division, offense, or manipulation find a foothold. Let Your order and peace govern everything when we gather.",
    "Heavenly Father, I pray for domestic violence survivors who need protection right now. Surround them with Your angels. Open doors of escape. Connect them with people who can help. Let justice come and let healing follow.",
    "God, protect the elderly and vulnerable in my community from exploitation and harm. Surround the aged with dignity and care. Raise up advocates willing to stand in the gap for those who cannot stand for themselves.",
    "Lord Jesus, I ask for protection over this nation's children from every digital and cultural force seeking to corrupt their innocence and distort their identity. Raise up parents and leaders willing to fight for the next generation.",
    "Father, let Your peace stand guard over my heart and mind as Philippians 4:7 promises. Not just an absence of worry but a positive, powerful, impenetrable peace that comes from You and cannot be explained away.",
    "God, I pray for law enforcement and emergency responders who put themselves in harm's way daily. Protect them from danger. Keep them whole for their families. Give them wisdom in every high-stakes moment.",
    "Lord, I claim divine protection for every gathering of believers happening in secret, in open fields, in house churches, and in unreached territories. Make every meeting invisible to the enemy and undeniable in the presence of God.",
    "Father, protect me from my own worst impulses — from words I will regret, from decisions that will cost me, from shortcuts that will compromise my integrity. Let the Spirit guard what my discipline sometimes cannot.",
    "Heavenly Father, I ask for a fresh anointing of protection as I step into a new season. New seasons bring new battles. Arm me, shield me, and send angels before me into every territory I am about to enter.",
    "God, I take my stand against every generational pattern that has sought to destroy my family for generations. I break it in the name of Jesus. A new story begins with me. My household will serve the Lord.",
    "Lord Jesus, Your name is a strong tower and the righteous run into it and are safe. I run into that tower right now. I hide myself in You. Let everything chasing me lose the scent when it reaches where You are.",
    "Father, I pray for those who have no one to pray for them — the orphan, the refugee, the prisoner, the homeless. Be their protector, their advocate, and their defender. Let Your angels watch over those who have no human protection.",
    "Lord, I end with this declaration: I am covered. I am guarded. I am protected by the Most High God who never sleeps, never grows tired, and never takes His eyes off those who belong to Him. I am safe in His hands.",
    "Heavenly Father, thank You for protection You have already provided that I am completely unaware of. Guard me again today. Every assault that is planned, deflect it. Every trap that is set, expose it. I trust You. Amen."
  ]

};

// ========== Category Metadata ==========
var PRAYER_CATEGORIES = {
  salvation: {
    title: 'Salvation',
    icon: 'fa-hands-praying',
    color: '#3498db',
    guidance: 'Pray for yourself or someone to receive Christ as Lord and Savior.'
  },
  healing: {
    title: 'Healing',
    icon: 'fa-heart-pulse',
    color: '#e74c3c',
    guidance: 'Bring physical, emotional, or mental needs to the Great Physician.'
  },
  guidance: {
    title: 'Guidance',
    icon: 'fa-compass',
    color: '#2ecc71',
    guidance: 'Ask God for wisdom, direction, and clarity for your next steps.'
  },
  thanksgiving: {
    title: 'Thanksgiving',
    icon: 'fa-star',
    color: '#f39c12',
    guidance: 'Enter His gates with thanksgiving and His courts with praise.'
  },
  protection: {
    title: 'Protection',
    icon: 'fa-shield-halved',
    color: '#9b59b6',
    guidance: "Claim God's divine covering and armor over your life and family."
  }
};

// ========== Get Random Prayer ==========
function getRandomPrayer(category) {
  const arr = PRAYERS[category];
  if (!arr || !arr.length) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ========== Get Fresh Prayer (no repeats until cycle done) ==========
var _usedPrayerIndices = {};
function getFreshPrayer(category) {
  const arr = PRAYERS[category];
  if (!arr || !arr.length) return null;
  if (!_usedPrayerIndices[category]) _usedPrayerIndices[category] = [];
  let available = arr.map((_, i) => i).filter(i => !_usedPrayerIndices[category].includes(i));
  if (available.length === 0) {
    _usedPrayerIndices[category] = [];
    available = arr.map((_, i) => i);
  }
  const idx = available[Math.floor(Math.random() * available.length)];
  _usedPrayerIndices[category].push(idx);
  return arr[idx];
}
