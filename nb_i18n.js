// ==========================================================
// NEW BELIEVER 7-DAY GUIDE — full content translated into all 8 languages
// (Fixes bug: New Believer Guide content stayed English-only
// regardless of the language selected in Settings.)
// ==========================================================
const NB_DAYS_I18N = {
  "en": [
    {
      "day": 1,
      "title": "You Are Saved — What Just Happened",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\" — 2 Corinthians 5:17",
      "intro": "Something extraordinary just happened. You are not the same person you were before you prayed that prayer. This is not a feeling — it is a fact declared by God Himself.",
      "truths": [
        {
          "icon": "✅",
          "text": "Your sins are completely forgiven — every one of them, past, present, and future."
        },
        {
          "icon": "✅",
          "text": "You are now a child of God. Not a servant, not a visitor — a son or daughter."
        },
        {
          "icon": "✅",
          "text": "The Holy Spirit now lives inside you. You are never alone."
        },
        {
          "icon": "✅",
          "text": "Eternal life has begun. Not in heaven eventually — it starts right now."
        },
        {
          "icon": "✅",
          "text": "Your old identity is gone. You are a new creation."
        }
      ],
      "action": "Tell one person that you gave your life to Christ today. Say it out loud. That one step of confession matters more than you know."
    },
    {
      "day": 2,
      "title": "Talk to God — How to Pray",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.\" — Philippians 4:6",
      "intro": "Prayer is simply talking to God. He is not far away and does not require special words. He is your Father. You can speak to Him the same way you would speak to someone who loves you completely.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Pray in your own language — Yoruba, Pidgin, English, whatever is natural to you."
        },
        {
          "icon": "📖",
          "text": "Start with thanksgiving — thank God for at least three things before asking for anything."
        },
        {
          "icon": "❤️",
          "text": "Be honest — God already knows what you are thinking. Pretending serves no one."
        },
        {
          "icon": "🎧",
          "text": "Leave space to listen — prayer is a conversation, not a monologue."
        },
        {
          "icon": "📅",
          "text": "Pray every day, even for just five minutes. Build the habit before building the length."
        }
      ],
      "action": "Pray for five minutes right now. Talk to God about your day, your fears, your hopes, and say thank you for your salvation."
    },
    {
      "day": 3,
      "title": "Read the Bible — God's Word to You",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Your word is a lamp for my feet, a light on my path.\" — Psalm 119:105",
      "intro": "The Bible is not just a religious book. It is God speaking to you. When you read it, you are not reading history — you are listening to your Father. Start with the New Testament, specifically the Gospel of John.",
      "truths": [
        {
          "icon": "📖",
          "text": "Start with the Gospel of John — it is written for people who are new to faith."
        },
        {
          "icon": "🗓️",
          "text": "Read a little every day. Consistency matters more than quantity. One chapter daily is enough."
        },
        {
          "icon": "✍️",
          "text": "Write down one verse that speaks to you. Carry it through your day."
        },
        {
          "icon": "🤔",
          "text": "When you do not understand something, do not panic. Ask a pastor or trusted believer."
        },
        {
          "icon": "💡",
          "text": "Ask before you read: \"Holy Spirit, speak to me through this.\" He will."
        }
      ],
      "action": "Open John chapter 1 right now and read it fully. Write down one verse that stood out to you."
    },
    {
      "day": 4,
      "title": "Find a Church — You Need Community",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"And let us not give up meeting together, as some are in the habit of doing, but encouraging one another.\" — Hebrews 10:25",
      "intro": "Christianity is not a solo journey. You were designed for community — for worship, accountability, friendship, growth, and service together. A church is not a perfect place. It is a family of imperfect people who love the same Jesus.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Find a church that teaches the Bible clearly and accurately, not just motivational talks."
        },
        {
          "icon": "👋",
          "text": "Introduce yourself as a new believer. Most churches have dedicated new believer programmes."
        },
        {
          "icon": "🤝",
          "text": "Attend consistently for at least two months before deciding if a church is right for you."
        },
        {
          "icon": "🛡️",
          "text": "Avoid isolation. The enemy targets believers who are alone and disconnected."
        },
        {
          "icon": "💪",
          "text": "Church is not just where you receive — it is where you serve and grow."
        }
      ],
      "action": "Find one church within reasonable distance of you. Commit to attending this Sunday. Tell someone you are going."
    },
    {
      "day": 5,
      "title": "Baptism — Your Public Declaration",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.\" — Acts 2:38",
      "intro": "Baptism does not save you — Jesus already did that. Baptism is your public declaration that you belong to Him. It is an outward symbol of an inward reality: the old you has died and the new you has risen with Christ.",
      "truths": [
        {
          "icon": "💧",
          "text": "Baptism is a command, not an option. Jesus was baptised. He said to be baptised."
        },
        {
          "icon": "📣",
          "text": "It is your public announcement to the world, the church, and spiritual forces: I belong to Jesus."
        },
        {
          "icon": "🌅",
          "text": "Going under the water = the old sinful self dying. Coming up = new life in Christ."
        },
        {
          "icon": "⏰",
          "text": "Do it soon after salvation — the New Testament shows people being baptised the same day."
        },
        {
          "icon": "🙋",
          "text": "Tell your pastor or church leader you are ready. They will guide you through it."
        }
      ],
      "action": "Speak to a pastor or church leader this week about being baptised. Put a date on it. Do not delay."
    },
    {
      "day": 6,
      "title": "The Holy Spirit — Your Helper",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.\" — John 14:26",
      "intro": "You are not living the Christian life on your own strength. The Holy Spirit — God Himself — lives inside you. He is your Helper, Teacher, Comforter, and Guide. This is not optional Christianity. Every believer has the Spirit.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "The Holy Spirit is not a feeling — He is a Person. The third Person of the Trinity."
        },
        {
          "icon": "📚",
          "text": "He teaches you the Bible as you read it. Ask Him to speak before you start."
        },
        {
          "icon": "🛑",
          "text": "He convicts you of sin — not to condemn you, but to restore you and keep you on track."
        },
        {
          "icon": "💪",
          "text": "He empowers you to live differently — fruit of the Spirit: love, joy, peace, patience..."
        },
        {
          "icon": "🎤",
          "text": "He gives you words when you share your faith and do not know what to say."
        }
      ],
      "action": "Ask the Holy Spirit to fill you afresh right now. Simply say: \"Holy Spirit, I yield to You. Fill me, lead me, and use me today.\""
    },
    {
      "day": 7,
      "title": "Share Your Faith — You Have Good News",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.\" — Acts 1:8",
      "intro": "You have the best news in the world. Someone who loves you shared it with you — now it is your turn. Sharing your faith does not require years of training or perfect theological knowledge. It starts with your personal story.",
      "truths": [
        {
          "icon": "📖",
          "text": "Your testimony is your most powerful tool. It is: what your life was before, how you came to Christ, and what changed."
        },
        {
          "icon": "🌱",
          "text": "You do not have to have all the answers. Saying \"I don't know but I can find out\" is perfectly fine."
        },
        {
          "icon": "💬",
          "text": "Start with the people closest to you — family, friends, neighbours. Pray for them by name first."
        },
        {
          "icon": "📱",
          "text": "Use GospelSwipe Pro to share the gospel visually when words feel hard. Let the slides do the work."
        },
        {
          "icon": "🔥",
          "text": "You are a witness, not a lawyer. A witness simply tells what they saw and experienced. Do that."
        }
      ],
      "action": "Write your testimony in three sentences: life before Christ, how you received Christ, life after Christ. Share it with one person this week."
    }
  ],
  "fr": [
    {
      "day": 1,
      "title": "Tu Es Sauvé — Que Vient-il de Se Passer",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "« Si quelqu'un est en Christ, il est une nouvelle création. Les choses anciennes sont passées ; voici, toutes choses sont devenues nouvelles. » — 2 Corinthiens 5.17",
      "intro": "Quelque chose d'extraordinaire vient de se produire. Tu n'es plus la même personne qu'avant cette prière. Ce n'est pas un sentiment — c'est un fait déclaré par Dieu Lui-même.",
      "truths": [
        {
          "icon": "✅",
          "text": "Tes péchés sont entièrement pardonnés — chacun d'eux, passés, présents et futurs."
        },
        {
          "icon": "✅",
          "text": "Tu es désormais un enfant de Dieu. Pas un serviteur, pas un visiteur — un fils ou une fille."
        },
        {
          "icon": "✅",
          "text": "Le Saint-Esprit habite maintenant en toi. Tu n'es jamais seul."
        },
        {
          "icon": "✅",
          "text": "La vie éternelle a commencé. Pas seulement au ciel plus tard — elle commence maintenant."
        },
        {
          "icon": "✅",
          "text": "Ton ancienne identité a disparu. Tu es une nouvelle création."
        }
      ],
      "action": "Dis à quelqu'un aujourd'hui que tu as donné ta vie à Christ. Dis-le à voix haute. Cette étape de confession compte plus que tu ne le penses."
    },
    {
      "day": 2,
      "title": "Parler à Dieu — Comment Prier",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "« Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. » — Philippiens 4.6",
      "intro": "La prière, c'est simplement parler à Dieu. Il n'est pas loin et n'exige pas de mots spéciaux. Il est ton Père. Tu peux Lui parler comme tu parlerais à quelqu'un qui t'aime complètement.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Prie dans ta propre langue — yoruba, pidgin, français, peu importe ce qui t'est naturel."
        },
        {
          "icon": "📖",
          "text": "Commence par l'action de grâce — remercie Dieu pour au moins trois choses avant de demander quoi que ce soit."
        },
        {
          "icon": "❤️",
          "text": "Sois honnête — Dieu connaît déjà tes pensées. Faire semblant ne sert à rien."
        },
        {
          "icon": "🎧",
          "text": "Laisse de la place pour écouter — la prière est une conversation, pas un monologue."
        },
        {
          "icon": "📅",
          "text": "Prie chaque jour, même pendant cinq minutes seulement. Construis l'habitude avant de construire la durée."
        }
      ],
      "action": "Prie pendant cinq minutes maintenant. Parle à Dieu de ta journée, de tes peurs, de tes espoirs, et remercie-Le pour ton salut."
    },
    {
      "day": 3,
      "title": "Lire la Bible — La Parole de Dieu pour Toi",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "« Ta parole est une lampe à mes pieds, et une lumière sur mon sentier. » — Psaume 119.105",
      "intro": "La Bible n'est pas seulement un livre religieux. C'est Dieu qui te parle. En la lisant, tu n'apprends pas l'histoire — tu écoutes ton Père. Commence par le Nouveau Testament, en particulier l'Évangile de Jean.",
      "truths": [
        {
          "icon": "📖",
          "text": "Commence par l'Évangile de Jean — il est écrit pour les personnes nouvelles dans la foi."
        },
        {
          "icon": "🗓️",
          "text": "Lis un peu chaque jour. La régularité compte plus que la quantité. Un chapitre par jour suffit."
        },
        {
          "icon": "✍️",
          "text": "Note un verset qui te parle. Porte-le avec toi tout au long de ta journée."
        },
        {
          "icon": "🤔",
          "text": "Quand tu ne comprends pas quelque chose, ne panique pas. Demande à un pasteur ou un croyant de confiance."
        },
        {
          "icon": "💡",
          "text": "Demande avant de lire : « Saint-Esprit, parle-moi à travers ce texte. » Il le fera."
        }
      ],
      "action": "Ouvre Jean chapitre 1 maintenant et lis-le en entier. Note un verset qui t'a marqué."
    },
    {
      "day": 4,
      "title": "Trouver une Église — Tu As Besoin de Communauté",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "« N'abandonnons pas notre assemblée, comme c'est la coutume de quelques-uns ; mais exhortons-nous réciproquement. » — Hébreux 10.25",
      "intro": "Le christianisme n'est pas un voyage en solitaire. Tu as été conçu pour la communauté — pour l'adoration, la responsabilité mutuelle, l'amitié, la croissance et le service ensemble. Une église n'est pas un lieu parfait. C'est une famille de personnes imparfaites qui aiment le même Jésus.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Trouve une église qui enseigne la Bible clairement et fidèlement, pas seulement des discours motivants."
        },
        {
          "icon": "👋",
          "text": "Présente-toi comme un nouveau croyant. La plupart des églises ont des programmes dédiés aux nouveaux croyants."
        },
        {
          "icon": "🤝",
          "text": "Assiste régulièrement pendant au moins deux mois avant de décider si cette église te convient."
        },
        {
          "icon": "🛡️",
          "text": "Évite l'isolement. L'ennemi cible les croyants seuls et déconnectés."
        },
        {
          "icon": "💪",
          "text": "L'église n'est pas seulement un lieu où l'on reçoit — c'est un lieu où l'on sert et grandit."
        }
      ],
      "action": "Trouve une église à une distance raisonnable de chez toi. Engage-toi à y assister ce dimanche. Dis à quelqu'un que tu y vas."
    },
    {
      "day": 5,
      "title": "Le Baptême — Ta Déclaration Publique",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "« Repentez-vous, et que chacun de vous soit baptisé au nom de Jésus-Christ, pour le pardon de vos péchés ; et vous recevrez le don du Saint-Esprit. » — Actes 2.38",
      "intro": "Le baptême ne te sauve pas — Jésus l'a déjà fait. Le baptême est ta déclaration publique que tu Lui appartiens. C'est un symbole extérieur d'une réalité intérieure : ton ancien toi est mort et le nouveau toi est ressuscité avec Christ.",
      "truths": [
        {
          "icon": "💧",
          "text": "Le baptême est un commandement, pas une option. Jésus a été baptisé. Il a dit d'être baptisé."
        },
        {
          "icon": "📣",
          "text": "C'est ton annonce publique au monde, à l'église et aux forces spirituelles : j'appartiens à Jésus."
        },
        {
          "icon": "🌅",
          "text": "Descendre dans l'eau = la mort de l'ancien toi pécheur. Remonter = nouvelle vie en Christ."
        },
        {
          "icon": "⏰",
          "text": "Fais-le peu après ton salut — le Nouveau Testament montre des gens baptisés le jour même."
        },
        {
          "icon": "🙋",
          "text": "Dis à ton pasteur ou responsable d'église que tu es prêt. Il t'accompagnera dans cette démarche."
        }
      ],
      "action": "Parle à un pasteur ou un responsable d'église cette semaine à propos du baptême. Fixe une date. Ne tarde pas."
    },
    {
      "day": 6,
      "title": "Le Saint-Esprit — Ton Aide",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "« Mais le consolateur, l'Esprit-Saint, que le Père enverra en mon nom, vous enseignera toutes choses, et vous rappellera tout ce que je vous ai dit. » — Jean 14.26",
      "intro": "Tu ne vis pas la vie chrétienne par ta propre force. Le Saint-Esprit — Dieu Lui-même — habite en toi. Il est ton Aide, ton Enseignant, ton Consolateur et ton Guide. Ce n'est pas un christianisme optionnel. Chaque croyant a l'Esprit.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Le Saint-Esprit n'est pas un sentiment — Il est une Personne. La troisième Personne de la Trinité."
        },
        {
          "icon": "📚",
          "text": "Il t'enseigne la Bible pendant que tu la lis. Demande-Lui de te parler avant de commencer."
        },
        {
          "icon": "🛑",
          "text": "Il te convainc de péché — non pour te condamner, mais pour te restaurer et te garder sur la bonne voie."
        },
        {
          "icon": "💪",
          "text": "Il te donne le pouvoir de vivre différemment — le fruit de l'Esprit : amour, joie, paix, patience..."
        },
        {
          "icon": "🎤",
          "text": "Il te donne les mots quand tu partages ta foi et que tu ne sais pas quoi dire."
        }
      ],
      "action": "Demande au Saint-Esprit de te remplir à nouveau maintenant. Dis simplement : « Saint-Esprit, je me soumets à Toi. Remplis-moi, guide-moi, utilise-moi aujourd'hui. »"
    },
    {
      "day": 7,
      "title": "Partage Ta Foi — Tu As une Bonne Nouvelle",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "« Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre. » — Actes 1.8",
      "intro": "Tu as la meilleure nouvelle du monde. Quelqu'un qui t'aime te l'a partagée — c'est maintenant ton tour. Partager ta foi ne nécessite pas des années de formation ni une connaissance théologique parfaite. Cela commence par ton histoire personnelle.",
      "truths": [
        {
          "icon": "📖",
          "text": "Ton témoignage est ton outil le plus puissant. C'est : ce qu'était ta vie avant, comment tu es venu à Christ, et ce qui a changé."
        },
        {
          "icon": "🌱",
          "text": "Tu n'as pas besoin d'avoir toutes les réponses. Dire « je ne sais pas, mais je peux me renseigner » est parfaitement acceptable."
        },
        {
          "icon": "💬",
          "text": "Commence par les personnes les plus proches de toi — famille, amis, voisins. Prie d'abord pour eux par leur nom."
        },
        {
          "icon": "📱",
          "text": "Utilise GospelSwipe Pro pour partager l'évangile visuellement quand les mots sont difficiles. Laisse les diapositives faire le travail."
        },
        {
          "icon": "🔥",
          "text": "Tu es un témoin, pas un avocat. Un témoin raconte simplement ce qu'il a vu et vécu. Fais cela."
        }
      ],
      "action": "Écris ton témoignage en trois phrases : ta vie avant Christ, comment tu as reçu Christ, ta vie après Christ. Partage-le avec une personne cette semaine."
    }
  ],
  "sw": [
    {
      "day": 1,
      "title": "Umeokolewa — Ni Nini Kilichotokea",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"Basi kama mtu yeyote yumo ndani ya Kristo, amekuwa kiumbe kipya: ya kale yamepita tazama! Yamekuwa mapya.\" — 2 Wakorintho 5:17",
      "intro": "Kitu cha ajabu kimetokea hivi punde. Wewe si mtu yule yule uliyekuwa kabla ya kuomba ile sala. Hii si hisia — ni ukweli uliotangazwa na Mungu Mwenyewe.",
      "truths": [
        {
          "icon": "✅",
          "text": "Dhambi zako zimesamehewa kabisa — kila moja, za zamani, za sasa, na za baadaye."
        },
        {
          "icon": "✅",
          "text": "Sasa wewe ni mtoto wa Mungu. Si mtumishi, si mgeni — ni mwana au binti."
        },
        {
          "icon": "✅",
          "text": "Roho Mtakatifu sasa anaishi ndani yako. Hauko peke yako kamwe."
        },
        {
          "icon": "✅",
          "text": "Uzima wa milele umeanza. Si mbinguni baadaye tu — unaanza sasa hivi."
        },
        {
          "icon": "✅",
          "text": "Utambulisho wako wa zamani umepita. Wewe ni kiumbe kipya."
        }
      ],
      "action": "Mwambie mtu mmoja leo kwamba umempa Kristo maisha yako. Sema kwa sauti. Hatua hiyo moja ya ukiri ina umuhimu zaidi ya unavyofikiri."
    },
    {
      "day": 2,
      "title": "Zungumza na Mungu — Jinsi ya Kuomba",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"Msijisumbue kwa neno lo lote; bali katika kila neno kwa sala na dua pamoja na kushukuru, haja zenu na zijulikane na Mungu.\" — Wafilipi 4:6",
      "intro": "Kuomba ni kuzungumza na Mungu tu. Yeye hayuko mbali na hahitaji maneno maalum. Yeye ni Baba yako. Unaweza kuzungumza naye kama unavyozungumza na mtu anayekupenda kabisa.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Omba kwa lugha yako mwenyewe — Kiswahili, Kiingereza, chochote kinachokuja kiasili kwako."
        },
        {
          "icon": "📖",
          "text": "Anza kwa shukrani — mshukuru Mungu kwa mambo matatu kabla ya kuomba chochote."
        },
        {
          "icon": "❤️",
          "text": "Kuwa mkweli — Mungu tayari anajua unachofikiri. Kujifanya hakumsaidii mtu yeyote."
        },
        {
          "icon": "🎧",
          "text": "Acha nafasi ya kusikiliza — sala ni mazungumzo, si maongezi ya upande mmoja."
        },
        {
          "icon": "📅",
          "text": "Omba kila siku, hata dakika tano tu. Jenga tabia kabla ya kujenga muda mrefu."
        }
      ],
      "action": "Omba kwa dakika tano sasa hivi. Zungumza na Mungu kuhusu siku yako, hofu zako, matumaini yako, na umshukuru kwa wokovu wako."
    },
    {
      "day": 3,
      "title": "Soma Biblia — Neno la Mungu Kwako",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Neno lako ni taa ya miguu yangu na mwanga wa njia yangu.\" — Zaburi 119:105",
      "intro": "Biblia si kitabu cha kidini tu. Ni Mungu akizungumza nawe. Unaposoma, hausomi historia — unamsikiliza Baba yako. Anza na Agano Jipya, hasa Injili ya Yohana.",
      "truths": [
        {
          "icon": "📖",
          "text": "Anza na Injili ya Yohana — imeandikwa kwa watu wapya katika imani."
        },
        {
          "icon": "🗓️",
          "text": "Soma kidogo kila siku. Uthabiti una umuhimu zaidi ya wingi. Sura moja kwa siku inatosha."
        },
        {
          "icon": "✍️",
          "text": "Andika mstari mmoja unaokugusa. Ubebe pamoja nawe siku nzima."
        },
        {
          "icon": "🤔",
          "text": "Usipoelewa kitu, usiogope. Muulize mchungaji au muumini unayemwamini."
        },
        {
          "icon": "💡",
          "text": "Omba kabla ya kusoma: \"Roho Mtakatifu, niongee kupitia hili.\" Atafanya hivyo."
        }
      ],
      "action": "Fungua Yohana sura ya 1 sasa hivi na uisome yote. Andika mstari mmoja uliokugusa."
    },
    {
      "day": 4,
      "title": "Tafuta Kanisa — Unahitaji Jamii",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"Wala tusiache kukusanyika pamoja, kama ilivyo desturi ya wengine, bali tuonyane.\" — Waebrania 10:25",
      "intro": "Ukristo si safari ya peke yako. Ulibuniwa kwa ajili ya jamii — kwa ibada, uwajibikaji, urafiki, ukuaji, na huduma pamoja. Kanisa si mahali pakamilifu. Ni familia ya watu wasio wakamilifu wanaompenda Yesu yule yule.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Tafuta kanisa linalofundisha Biblia kwa uwazi na usahihi, si mazungumzo ya kutia moyo tu."
        },
        {
          "icon": "👋",
          "text": "Jitambulishe kama muumini mpya. Makanisa mengi yana mipango maalum kwa waumini wapya."
        },
        {
          "icon": "🤝",
          "text": "Hudhuria mara kwa mara kwa angalau miezi miwili kabla ya kuamua kama kanisa hilo linakufaa."
        },
        {
          "icon": "🛡️",
          "text": "Epuka kutengwa. Adui analenga waumini walio peke yao na wasiounganishwa."
        },
        {
          "icon": "💪",
          "text": "Kanisa si mahali pa kupokea tu — ni mahali pa kutumika na kukua."
        }
      ],
      "action": "Tafuta kanisa moja karibu nawe. Jitolee kuhudhuria Jumapili hii. Mwambie mtu kwamba unaenda."
    },
    {
      "day": 5,
      "title": "Ubatizo — Tangazo Lako la Hadharani",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Tubuni, mkabatizwe kila mmoja wenu kwa jina lake Yesu Kristo, mpate ondoleo la dhambi zenu, nanyi mtapokea kipawa cha Roho Mtakatifu.\" — Matendo 2:38",
      "intro": "Ubatizo hauwezi kukuokoa — Yesu tayari amefanya hivyo. Ubatizo ni tangazo lako la hadharani kwamba wewe ni wake. Ni ishara ya nje ya ukweli wa ndani: nafsi yako ya zamani imekufa na nafsi yako mpya imefufuka pamoja na Kristo.",
      "truths": [
        {
          "icon": "💧",
          "text": "Ubatizo ni amri, si hiari. Yesu alibatizwa. Alisema tubatizwe."
        },
        {
          "icon": "📣",
          "text": "Ni tangazo lako la hadharani kwa dunia, kanisa, na nguvu za kiroho: mimi ni wa Yesu."
        },
        {
          "icon": "🌅",
          "text": "Kuingia ndani ya maji = kufa kwa nafsi yako ya dhambi ya zamani. Kutoka = maisha mapya katika Kristo."
        },
        {
          "icon": "⏰",
          "text": "Fanya hivyo mara moja baada ya wokovu — Agano Jipya linaonyesha watu wakibatizwa siku ile ile."
        },
        {
          "icon": "🙋",
          "text": "Mwambie mchungaji au kiongozi wa kanisa kwamba uko tayari. Watakusaidia katika mchakato huo."
        }
      ],
      "action": "Zungumza na mchungaji au kiongozi wa kanisa wiki hii kuhusu kubatizwa. Weka tarehe. Usisite."
    },
    {
      "day": 6,
      "title": "Roho Mtakatifu — Msaidizi Wako",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"Lakini huyo Msaidizi, Roho Mtakatifu, ambaye Baba atampeleka kwa jina langu, atawafundisha yote na kuwakumbusha yote niliyowaambia.\" — Yohana 14:26",
      "intro": "Huishi maisha ya Kikristo kwa nguvu zako mwenyewe. Roho Mtakatifu — Mungu Mwenyewe — anaishi ndani yako. Yeye ni Msaidizi wako, Mwalimu wako, Mfariji wako, na Mwongozaji wako. Huu si Ukristo wa hiari. Kila muumini ana Roho.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Roho Mtakatifu si hisia — Yeye ni Nafsi. Nafsi ya tatu ya Utatu."
        },
        {
          "icon": "📚",
          "text": "Anakufundisha Biblia unaposoma. Muombe azungumze kabla hujaanza."
        },
        {
          "icon": "🛑",
          "text": "Anakushawishi kuhusu dhambi — si kukuhukumu, bali kukurejesha na kukuweka njiani sahihi."
        },
        {
          "icon": "💪",
          "text": "Anakuwezesha kuishi tofauti — matunda ya Roho: upendo, furaha, amani, uvumilivu..."
        },
        {
          "icon": "🎤",
          "text": "Anakupa maneno unaposhiriki imani yako na hujui la kusema."
        }
      ],
      "action": "Muombe Roho Mtakatifu akujaze upya sasa hivi. Sema tu: \"Roho Mtakatifu, ninajisalimisha Kwako. Nijaze, niongoze, na unitumie leo.\""
    },
    {
      "day": 7,
      "title": "Shiriki Imani Yako — Una Habari Njema",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"Lakini mtapokea nguvu, akiisha kuwajilia juu yenu Roho Mtakatifu, nanyi mtakuwa mashahidi wangu katika Yerusalemu, na katika Uyahudi wote, na Samaria, na hata mwisho wa dunia.\" — Matendo 1:8",
      "intro": "Una habari bora zaidi duniani. Mtu aliyekupenda alikushirikisha — sasa ni zamu yako. Kushiriki imani yako hakuhitaji miaka ya mafunzo au ujuzi kamili wa kitheolojia. Inaanza na hadithi yako binafsi.",
      "truths": [
        {
          "icon": "📖",
          "text": "Ushuhuda wako ni chombo chako chenye nguvu zaidi. Ni: maisha yako yalivyokuwa kabla, jinsi ulivyomjia Kristo, na kilichobadilika."
        },
        {
          "icon": "🌱",
          "text": "Hauhitaji kuwa na majibu yote. Kusema \"sijui lakini ninaweza kutafuta\" ni sawa kabisa."
        },
        {
          "icon": "💬",
          "text": "Anza na watu walio karibu nawe — familia, marafiki, majirani. Waombee kwa majina yao kwanza."
        },
        {
          "icon": "📱",
          "text": "Tumia GospelSwipe Pro kushiriki injili kwa picha wakati maneno ni magumu. Acha slaidi zifanye kazi."
        },
        {
          "icon": "🔥",
          "text": "Wewe ni shahidi, si wakili. Shahidi anasimulia tu alichokiona na kukipitia. Fanya hivyo."
        }
      ],
      "action": "Andika ushuhuda wako kwa sentensi tatu: maisha kabla ya Kristo, jinsi ulivyompokea Kristo, maisha baada ya Kristo. Ushiriki na mtu mmoja wiki hii."
    }
  ],
  "ar": [
    {
      "day": 1,
      "title": "أنتَ مُخلَّص — ماذا حدث للتو",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "«إذًا إن كان أحد في المسيح فهو خليقة جديدة: الأشياء العتيقة قد مضت، هوذا الكل قد صار جديدًا.» — ٢ كورنثوس ٥: ١٧",
      "intro": "حدث شيء استثنائي للتو. أنت لست نفس الشخص الذي كنته قبل أن تصلي تلك الصلاة. هذا ليس شعورًا — إنه حقيقة أعلنها الله نفسه.",
      "truths": [
        {
          "icon": "✅",
          "text": "خطاياك مغفورة تمامًا — كل واحدة منها، الماضية والحاضرة والمستقبلية."
        },
        {
          "icon": "✅",
          "text": "أنت الآن ابن لله. لست خادمًا ولا زائرًا — بل ابن أو ابنة."
        },
        {
          "icon": "✅",
          "text": "الروح القدس يسكن الآن بداخلك. لن تكون وحيدًا أبدًا."
        },
        {
          "icon": "✅",
          "text": "بدأت الحياة الأبدية. ليس في السماء لاحقًا فقط — بل تبدأ الآن."
        },
        {
          "icon": "✅",
          "text": "هويتك القديمة قد زالت. أنت خليقة جديدة."
        }
      ],
      "action": "أخبر شخصًا واحدًا اليوم أنك قد سلّمت حياتك للمسيح. قلها بصوت عالٍ. هذه الخطوة من الاعتراف أهم مما تتصور."
    },
    {
      "day": 2,
      "title": "تحدث إلى الله — كيف تصلي",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "«لا تهتموا بشيء، بل في كل شيء بالصلاة والدعاء مع الشكر، لتُعلَم طلباتكم لدى الله.» — فيلبي ٤: ٦",
      "intro": "الصلاة هي ببساطة التحدث إلى الله. هو ليس بعيدًا ولا يتطلب كلمات خاصة. هو أبوك. يمكنك التحدث إليه كما تتحدث إلى شخص يحبك تمامًا.",
      "truths": [
        {
          "icon": "🙏",
          "text": "صلِّ بلغتك الخاصة — عربية أو أي لغة تشعر بها طبيعيًا."
        },
        {
          "icon": "📖",
          "text": "ابدأ بالشكر — اشكر الله على ثلاثة أشياء على الأقل قبل أن تطلب أي شيء."
        },
        {
          "icon": "❤️",
          "text": "كن صادقًا — الله يعرف بالفعل ما تفكر فيه. التظاهر لا يفيد أحدًا."
        },
        {
          "icon": "🎧",
          "text": "اترك مساحة للاستماع — الصلاة حوار، وليست مونولوجًا."
        },
        {
          "icon": "📅",
          "text": "صلِّ كل يوم، حتى لو لخمس دقائق فقط. ابنِ العادة قبل أن تبني المدة."
        }
      ],
      "action": "صلِّ لمدة خمس دقائق الآن. تحدث إلى الله عن يومك، مخاوفك، آمالك، واشكره على خلاصك."
    },
    {
      "day": 3,
      "title": "اقرأ الكتاب المقدس — كلمة الله لك",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "«سراج لرجلي كلامك ونور لسبيلي.» — مزمور ١١٩: ١٠٥",
      "intro": "الكتاب المقدس ليس مجرد كتاب ديني. إنه الله يتحدث إليك. عندما تقرأه، فأنت لا تقرأ تاريخًا — بل تستمع إلى أبيك. ابدأ بالعهد الجديد، وتحديدًا إنجيل يوحنا.",
      "truths": [
        {
          "icon": "📖",
          "text": "ابدأ بإنجيل يوحنا — فهو مكتوب للأشخاص الجدد في الإيمان."
        },
        {
          "icon": "🗓️",
          "text": "اقرأ قليلاً كل يوم. الاستمرارية أهم من الكمية. إصحاح واحد يوميًا كافٍ."
        },
        {
          "icon": "✍️",
          "text": "اكتب آية واحدة تلامسك. احملها معك طوال يومك."
        },
        {
          "icon": "🤔",
          "text": "عندما لا تفهم شيئًا، لا تقلق. اسأل راعيًا أو مؤمنًا موثوقًا."
        },
        {
          "icon": "💡",
          "text": "اطلب قبل أن تقرأ: «أيها الروح القدس، كلمني من خلال هذا.» وسوف يفعل."
        }
      ],
      "action": "افتح إنجيل يوحنا الإصحاح ١ الآن واقرأه بالكامل. اكتب آية واحدة لامستك."
    },
    {
      "day": 4,
      "title": "ابحث عن كنيسة — أنت بحاجة إلى مجتمع",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "«غير تاركين اجتماعنا كما لقوم عادة، بل واعظين بعضنا بعضًا.» — عبرانيين ١٠: ٢٥",
      "intro": "المسيحية ليست رحلة فردية. لقد صُممت من أجل المجتمع — للعبادة والمساءلة والصداقة والنمو والخدمة معًا. الكنيسة ليست مكانًا مثاليًا. إنها عائلة من أشخاص غير كاملين يحبون نفس يسوع.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "ابحث عن كنيسة تُعلّم الكتاب المقدس بوضوح ودقة، وليس مجرد أحاديث تحفيزية."
        },
        {
          "icon": "👋",
          "text": "قدّم نفسك كمؤمن جديد. معظم الكنائس لديها برامج مخصصة للمؤمنين الجدد."
        },
        {
          "icon": "🤝",
          "text": "احضر بانتظام لمدة شهرين على الأقل قبل أن تقرر ما إذا كانت هذه الكنيسة مناسبة لك."
        },
        {
          "icon": "🛡️",
          "text": "تجنب العزلة. العدو يستهدف المؤمنين الوحيدين وغير المرتبطين."
        },
        {
          "icon": "💪",
          "text": "الكنيسة ليست فقط مكانًا للتلقي — بل مكانًا للخدمة والنمو."
        }
      ],
      "action": "ابحث عن كنيسة واحدة على مسافة معقولة منك. التزم بالحضور هذا الأحد. أخبر شخصًا أنك ذاهب."
    },
    {
      "day": 5,
      "title": "المعمودية — إعلانك العلني",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "«توبوا وليعتمد كل واحد منكم على اسم يسوع المسيح لغفران الخطايا، فتقبلوا عطية الروح القدس.» — أعمال الرسل ٢: ٣٨",
      "intro": "المعمودية لا تخلّصك — يسوع فعل ذلك بالفعل. المعمودية هي إعلانك العلني بأنك تنتمي إليه. إنها رمز خارجي لحقيقة داخلية: الإنسان القديم فيك قد مات والإنسان الجديد قام مع المسيح.",
      "truths": [
        {
          "icon": "💧",
          "text": "المعمودية أمر، وليست خيارًا. تعمّد يسوع. وقال أن نتعمد."
        },
        {
          "icon": "📣",
          "text": "إنها إعلانك العلني للعالم والكنيسة والقوى الروحية: أنا أنتمي ليسوع."
        },
        {
          "icon": "🌅",
          "text": "النزول في الماء = موت الذات الخاطئة القديمة. الصعود = حياة جديدة في المسيح."
        },
        {
          "icon": "⏰",
          "text": "افعلها بعد الخلاص بوقت قصير — يُظهر العهد الجديد أشخاصًا يتعمدون في نفس اليوم."
        },
        {
          "icon": "🙋",
          "text": "أخبر راعيك أو قائد كنيستك أنك مستعد. سيرشدونك خلال العملية."
        }
      ],
      "action": "تحدث إلى راعٍ أو قائد كنيسة هذا الأسبوع بشأن المعمودية. حدد موعدًا. لا تتأخر."
    },
    {
      "day": 6,
      "title": "الروح القدس — معينك",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "«وأما المعزي الروح القدس الذي سيرسله الآب باسمي فهو يعلمكم كل شيء ويذكركم بكل ما قلته لكم.» — يوحنا ١٤: ٢٦",
      "intro": "أنت لا تعيش الحياة المسيحية بقوتك الخاصة. الروح القدس — الله نفسه — يسكن بداخلك. هو معينك، ومعلمك، ومعزيك، ومرشدك. هذه ليست مسيحية اختيارية. كل مؤمن لديه الروح.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "الروح القدس ليس شعورًا — إنه شخص. الأقنوم الثالث من الثالوث."
        },
        {
          "icon": "📚",
          "text": "يعلّمك الكتاب المقدس أثناء قراءتك له. اطلب منه أن يتحدث قبل أن تبدأ."
        },
        {
          "icon": "🛑",
          "text": "يبكّتك على الخطية — ليس ليدينك، بل ليستعيدك ويبقيك على المسار الصحيح."
        },
        {
          "icon": "💪",
          "text": "يمكّنك من أن تعيش بشكل مختلف — ثمر الروح: المحبة والفرح والسلام والصبر..."
        },
        {
          "icon": "🎤",
          "text": "يعطيك الكلمات عندما تشارك إيمانك ولا تعرف ماذا تقول."
        }
      ],
      "action": "اطلب من الروح القدس أن يملأك من جديد الآن. قل ببساطة: «أيها الروح القدس، أُسلم نفسي لك. املأني وقُدني واستخدمني اليوم.»"
    },
    {
      "day": 7,
      "title": "شارك إيمانك — لديك بشرى سارة",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "«لكنكم ستنالون قوة متى حل الروح القدس عليكم، وتكونون لي شهودًا في أورشليم وفي كل اليهودية والسامرة وإلى أقصى الأرض.» — أعمال الرسل ١: ٨",
      "intro": "لديك أفضل خبر في العالم. شخص أحبك شاركه معك — الآن دورك. مشاركة إيمانك لا تتطلب سنوات من التدريب أو معرفة لاهوتية كاملة. تبدأ بقصتك الشخصية.",
      "truths": [
        {
          "icon": "📖",
          "text": "شهادتك هي أداتك الأقوى. هي: كيف كانت حياتك قبل، وكيف أتيت إلى المسيح، وماذا تغيّر."
        },
        {
          "icon": "🌱",
          "text": "لست بحاجة لامتلاك كل الإجابات. قول «لا أعرف لكن يمكنني أن أبحث» أمر مقبول تمامًا."
        },
        {
          "icon": "💬",
          "text": "ابدأ بالأشخاص الأقرب إليك — العائلة والأصدقاء والجيران. صلِّ من أجلهم بالاسم أولاً."
        },
        {
          "icon": "📱",
          "text": "استخدم GospelSwipe Pro لمشاركة الإنجيل بصريًا عندما تصعب الكلمات. دع الشرائح تقوم بالعمل."
        },
        {
          "icon": "🔥",
          "text": "أنت شاهد، ولست محاميًا. الشاهد يروي فقط ما رآه واختبره. افعل ذلك."
        }
      ],
      "action": "اكتب شهادتك في ثلاث جمل: حياتك قبل المسيح، وكيف نلت المسيح، وحياتك بعد المسيح. شاركها مع شخص واحد هذا الأسبوع."
    }
  ],
  "yo": [
    {
      "day": 1,
      "title": "O Ti Wà Lódàán — Kín Ni Ó Ṣẹlẹ̀ Ná",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"Nítorí náà bí ẹnikẹ́ni bá wà nínú Kristi, ẹ̀dá tuntun ni: àwọn nǹkan àtijọ́ ti kọjá lọ; kíyèsíi, gbogbo rẹ̀ ti di tuntun.\" — 2 Kọ́ríntì 5:17",
      "intro": "Nǹkan àrà kan ti ṣẹlẹ̀ báyìí. Ìwọ kì í ṣe ẹni tí ìwọ jẹ́ kí o tó gbàdúrà náà mọ́. Èyí kì í ṣe ìmọ̀lára — òtítọ́ ni tí Ọlọ́run fúnra rẹ̀ ti kéde.",
      "truths": [
        {
          "icon": "✅",
          "text": "A ti dárí gbogbo ẹ̀ṣẹ̀ rẹ jì ọ́ pátápátá — gbogbo rẹ̀, ti àtijọ́, ti ìsinsìnyí, àti ti ọjọ́ iwájú."
        },
        {
          "icon": "✅",
          "text": "Ìwọ ti di ọmọ Ọlọ́run báyìí. Kì í ṣe ìránṣẹ́, kì í ṣe àlejò — ọmọkùnrin tàbí ọmọbìnrin ni."
        },
        {
          "icon": "✅",
          "text": "Ẹ̀mí Mímọ́ ń gbé inú rẹ báyìí. Ìwọ kò dá wà láéláé."
        },
        {
          "icon": "✅",
          "text": "Ìyè àìnípẹ̀kun ti bẹ̀rẹ̀. Kì í ṣe ní ọ̀run ní ọjọ́ iwájú nìkan — ó bẹ̀rẹ̀ ní báyìí."
        },
        {
          "icon": "✅",
          "text": "Ẹni tí ìwọ jẹ́ tẹ́lẹ̀ ti lọ. Ẹ̀dá tuntun ni ìwọ."
        }
      ],
      "action": "Sọ fún ẹnìkan lónìí pé o ti fi ẹ̀mí rẹ fún Kristi. Sọ jáde ní ohùn rara. Ìgbésẹ̀ ìjẹ́wọ́ yẹn ṣe pàtàkì ju bí o ṣe rò lọ."
    },
    {
      "day": 2,
      "title": "Bá Ọlọ́run Sọ̀rọ̀ — Bí A Ṣe Ń Gbàdúrà",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"Ẹ má ṣe ṣàníyàn nípa ohunkóhun; ṣùgbọ́n nínú ohun gbogbo, nípa àdúrà àti ẹ̀bẹ̀ pẹ̀lú ọpẹ́, ẹ jẹ́ kí a mọ àwọn ohun tí ẹ ń béèrè lọ́wọ́ Ọlọ́run.\" — Fílípì 4:6",
      "intro": "Àdúrà jẹ́ bíbá Ọlọ́run sọ̀rọ̀ lásán. Kò jìnnà, kò sì béèrè ọ̀rọ̀ pàtàkì kan. Baba rẹ ni. O lè bá a sọ̀rọ̀ bí o ṣe ń bá ẹni tí ó nífẹ̀ẹ́ rẹ pátápátá sọ̀rọ̀.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Gbàdúrà ní èdè tìẹ — Yorùbá, Pidgin, Gẹ̀ẹ́sì, èyíkéyìí tí ó rọrùn fún ọ."
        },
        {
          "icon": "📖",
          "text": "Bẹ̀rẹ̀ pẹ̀lú ọpẹ́ — dúpẹ́ lọ́wọ́ Ọlọ́run fún ohun mẹ́ta kó tó béèrè ohunkóhun."
        },
        {
          "icon": "❤️",
          "text": "Jẹ́ olóòótọ́ — Ọlọ́run ti mọ ohun tí o ń rò tẹ́lẹ̀. Àṣhíkẹ̀tà kò ṣe àǹfààní fún ẹnikẹ́ni."
        },
        {
          "icon": "🎧",
          "text": "Fi àyè sílẹ̀ fún gbígbọ́ — àdúrà jẹ́ ìjíròrò, kì í ṣe ọ̀rọ̀ ẹnìkan."
        },
        {
          "icon": "📅",
          "text": "Gbàdúrà lójoojúmọ́, kódà fún ìṣẹ́jú márùn-ún péré. Kọ́ àṣà náà kó tó fẹ̀ ìgbà náà sí i."
        }
      ],
      "action": "Gbàdúrà fún ìṣẹ́jú márùn-ún báyìí. Bá Ọlọ́run sọ̀rọ̀ nípa ọjọ́ rẹ, ìbẹ̀rù rẹ, ìrètí rẹ, kí o sì dúpẹ́ lọ́wọ́ rẹ̀ fún ìgbàlà rẹ."
    },
    {
      "day": 3,
      "title": "Ka Bíbélì — Ọ̀rọ̀ Ọlọ́run Fún Ọ",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Ọ̀rọ̀ rẹ ni fìtílà fún ẹsẹ̀ mi àti ìmọ́lẹ̀ fún ipa ọ̀nà mi.\" — Sáàmù 119:105",
      "intro": "Bíbélì kì í ṣe ìwé ìsìn lásán. Ọlọ́run ni ó ń bá ọ sọ̀rọ̀. Nígbà tí o bá ń kà á, ìwọ kò ka ìtàn — ìwọ ń gbọ́ Baba rẹ. Bẹ̀rẹ̀ pẹ̀lú Májẹ̀mú Tuntun, pàápàá Ìhìn Rere Jòhánù.",
      "truths": [
        {
          "icon": "📖",
          "text": "Bẹ̀rẹ̀ pẹ̀lú Ìhìn Rere Jòhánù — a kọ ọ́ fún àwọn tí ó ṣẹ̀ṣẹ̀ dé sí ìgbàgbọ́."
        },
        {
          "icon": "🗓️",
          "text": "Ka díẹ̀ lójoojúmọ́. Ìdúróṣinṣin ṣe pàtàkì ju iye ìwọ̀n lọ. Orí kan lójúmọ́ tó."
        },
        {
          "icon": "✍️",
          "text": "Kọ ẹsẹ Bíbélì kan tí ó fọwọ́ kàn ọ́ sílẹ̀. Gbé e kiri ní gbogbo ọjọ́ rẹ."
        },
        {
          "icon": "🤔",
          "text": "Nígbà tí o kò bá lóye ohun kan, má ṣe pàràyà. Béèrè lọ́wọ́ pásítọ̀ tàbí onígbàgbọ́ tí o gbẹ́kẹ̀lé."
        },
        {
          "icon": "💡",
          "text": "Béèrè kó tó kà: \"Ẹ̀mí Mímọ́, bá mi sọ̀rọ̀ nípasẹ̀ èyí.\" Òun yóò ṣe bẹ́ẹ̀."
        }
      ],
      "action": "Ṣí orí kìíní ìwé Jòhánù báyìí kí o sì ka gbogbo rẹ̀. Kọ ẹsẹ kan tí ó fọwọ́ kàn ọ́ sílẹ̀."
    },
    {
      "day": 4,
      "title": "Wá Ìjọ — O Nílò Àwùjọ",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"Kí a má sì fi ìjọpọ̀ ara wa sílẹ̀, gẹ́gẹ́ bí àṣà àwọn kan; ṣùgbọ́n kí a máa gba ara wa níyànjú.\" — Hébérù 10:25",
      "intro": "Ìsìn Kristi kì í ṣe ìrìnàjò ẹnìkan. A dá ọ fún àwùjọ — fún ìjọsìn, ìṣírò, ọ̀rẹ́, ìdàgbàsókè, àti iṣẹ́ ìsìn papọ̀. Ìjọ kì í ṣe ibi pípé. Ìdílé àwọn ènìyàn tí kò pé, tí wọ́n nífẹ̀ẹ́ Jésù kan náà ni.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Wá ìjọ tí ó ń kọ́ni Bíbélì ní kedere àti ní pípéye, kì í ṣe ọ̀rọ̀ ìṣírí lásán."
        },
        {
          "icon": "👋",
          "text": "Fi ara rẹ hàn gẹ́gẹ́ bí onígbàgbọ́ tuntun. Ọ̀pọ̀ ìjọ ní ètò pàtàkì fún àwọn onígbàgbọ́ tuntun."
        },
        {
          "icon": "🤝",
          "text": "Máa lọ déédéé fún osù méjì ó kéré tán kó o tó pinnu bóyá ìjọ yìí bá ọ mu."
        },
        {
          "icon": "🛡️",
          "text": "Yẹra fún ìdáwà. Ọ̀tá ń fojú sí àwọn onígbàgbọ́ tí wọ́n dá wà tí kò sì so mọ́ ẹnikẹ́ni."
        },
        {
          "icon": "💪",
          "text": "Ìjọ kì í ṣe ibi tí a ti ń gbà nìkan — ó jẹ́ ibi tí a ti ń sìn tí a sì ń dàgbà."
        }
      ],
      "action": "Wá ìjọ kan tí kò jìnnà sí ọ. Pinnu láti lọ ní ọjọ́ Àìkú yìí. Sọ fún ẹnìkan pé o ń lọ."
    },
    {
      "day": 5,
      "title": "Ìrìbọmi — Ìkéde Rẹ Ní Gbangba",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Ẹ ronú pìwàdà, kí a sì fi baptisi kọ̀ọ̀kan yín ní orúkọ Jésù Kristi fún ìdáríjì ẹ̀ṣẹ̀ yín; ẹ óò sì gba ẹ̀bùn Ẹ̀mí Mímọ́.\" — Ìṣe àwọn Àpọ́sítélì 2:38",
      "intro": "Ìrìbọmi kò gbà ọ́ là — Jésù ti ṣe bẹ́ẹ̀ tẹ́lẹ̀. Ìrìbọmi jẹ́ ìkéde rẹ ní gbangba pé ìwọ jẹ́ ti rẹ̀. Àmì ìta ni fún òtítọ́ inú: ẹni tí ìwọ jẹ́ tẹ́lẹ̀ ti kú tí ẹni tuntun sì ti jíǹde pẹ̀lú Kristi.",
      "truths": [
        {
          "icon": "💧",
          "text": "Ìrìbọmi jẹ́ àṣẹ, kì í ṣe àṣàyàn. A bamitisi Jésù. Ó sọ pé kí a ṣe ìrìbọmi."
        },
        {
          "icon": "📣",
          "text": "Ìkéde rẹ ní gbangba sí ayé, sí ìjọ, àti sí àwọn agbára tẹ̀mí ni: mo jẹ́ ti Jésù."
        },
        {
          "icon": "🌅",
          "text": "Lílọ sínú omi = ikú ẹni ẹlẹ́ṣẹ̀ àtijọ́. Jíjáde = ìyè tuntun nínú Kristi."
        },
        {
          "icon": "⏰",
          "text": "Ṣe é láìpẹ́ lẹ́yìn ìgbàlà — Májẹ̀mú Tuntun fi hàn pé àwọn ènìyàn ṣe ìrìbọmi ní ọjọ́ kan náà."
        },
        {
          "icon": "🙋",
          "text": "Sọ fún pásítọ̀ rẹ tàbí olórí ìjọ pé o ti ṣetán. Wọn yóò tọ́ ọ sọ́nà."
        }
      ],
      "action": "Bá pásítọ̀ tàbí olórí ìjọ sọ̀rọ̀ lọ́sẹ̀ yìí nípa ìrìbọmi. Fi ọjọ́ sí i. Má ṣe lọ́ra."
    },
    {
      "day": 6,
      "title": "Ẹ̀mí Mímọ́ — Olùrànlọ́wọ́ Rẹ",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"Ṣùgbọ́n Olùtùnú náà, Ẹ̀mí Mímọ́, ẹni tí Baba yóò rán ní orúkọ mi, òun yóò kọ́ yín ní ohun gbogbo, yóò sì mú un yín rántí ohun gbogbo tí mo ti sọ fún yín.\" — Jòhánù 14:26",
      "intro": "Ìwọ kò ń gbé ìgbé ayé Kristi nípa agbára tìẹ. Ẹ̀mí Mímọ́ — Ọlọ́run fúnra rẹ̀ — ń gbé inú rẹ. Òun ni Olùrànlọ́wọ́ rẹ, Olùkọ́ rẹ, Olùtùnú rẹ, àti Atọ́nà rẹ. Èyí kì í ṣe ìsìn Kristi tí a lè yàn kúrò. Gbogbo onígbàgbọ́ ni ó ní Ẹ̀mí náà.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Ẹ̀mí Mímọ́ kì í ṣe ìmọ̀lára — Ẹni-kẹta nínú Mẹ́talọ́kan ni."
        },
        {
          "icon": "📚",
          "text": "Ó ń kọ́ ọ Bíbélì bí o ṣe ń kà á. Béèrè lọ́wọ́ rẹ̀ kó ó tó bẹ̀rẹ̀."
        },
        {
          "icon": "🛑",
          "text": "Ó ń jẹ́ ọ ní ẹ̀bi ẹ̀ṣẹ̀ — kì í ṣe láti dá ọ lẹ́bi, ṣùgbọ́n láti mú ọ padà tí ó sì pa ọ mọ́ ní ọ̀nà tọ́."
        },
        {
          "icon": "💪",
          "text": "Ó fún ọ ní agbára láti gbé ìgbé ayé ọ̀tọ̀ọ̀tọ̀ — èso Ẹ̀mí: ìfẹ́, ìdùnnú, àlàáfíà, sùúrù..."
        },
        {
          "icon": "🎤",
          "text": "Ó fún ọ ní ọ̀rọ̀ nígbà tí o bá ń pín ìgbàgbọ́ rẹ tí o kò sì mọ ohun tí o máa sọ."
        }
      ],
      "action": "Béèrè lọ́wọ́ Ẹ̀mí Mímọ́ láti kún ọ padà báyìí. Sọ pé: \"Ẹ̀mí Mímọ́, mo fi ara mi fún Ọ. Kún mi, tọ́ mi sọ́nà, kí o sì lò mí lónìí.\""
    },
    {
      "day": 7,
      "title": "Pín Ìgbàgbọ́ Rẹ — O Ní Ìhìn Rere",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"Ṣùgbọ́n ẹ óò rí agbára gbà, nígbà tí Ẹ̀mí Mímọ́ bá bà lé yín; ẹ óò sì jẹ́ ẹlẹ́rìí mi ní Jerúsálẹ́mù, àti ní gbogbo Judea àti Samáríà, àti títí dé òpin ayé.\" — Ìṣe àwọn Àpọ́sítélì 1:8",
      "intro": "O ní ìhìn rere jùlọ ní ayé. Ẹnì kan tí ó nífẹ̀ẹ́ rẹ pín in fún ọ — báyìí ìgbà tìẹ ni. Pípín ìgbàgbọ́ rẹ kò nílò ọ̀pọ̀lọpọ̀ ọdún ìdálẹ́kọ̀ọ́ tàbí ìmọ̀ ẹ̀kọ́ ìsìn pípé. Ó bẹ̀rẹ̀ pẹ̀lú ìtàn ara rẹ.",
      "truths": [
        {
          "icon": "📖",
          "text": "Ẹ̀rí rẹ ni irinṣẹ́ tí ó lágbára jùlọ. Ó jẹ́: bí ìgbé ayé rẹ ti rí tẹ́lẹ̀, bí o ṣe wá sí ọ̀dọ̀ Kristi, àti ohun tí ó yí padà."
        },
        {
          "icon": "🌱",
          "text": "O kò ní láti ní gbogbo ìdáhùn. Sísọ pé \"Èmi kò mọ̀, ṣùgbọ́n mo lè wádìí\" dára pátápátá."
        },
        {
          "icon": "💬",
          "text": "Bẹ̀rẹ̀ pẹ̀lú àwọn tí ó súnmọ́ ọ jùlọ — ẹbí, ọ̀rẹ́, aládùúgbò. Gbàdúrà fún wọn pẹ̀lú orúkọ wọn ná."
        },
        {
          "icon": "📱",
          "text": "Lo GospelSwipe Pro láti pín ìhìn rere lọ́nà àwòrán nígbà tí ọ̀rọ̀ bá le. Jẹ́ kí àwọn kádìí náà ṣiṣẹ́."
        },
        {
          "icon": "🔥",
          "text": "Ẹlẹ́rìí ni ìwọ, kì í ṣe agbẹjọ́rò. Ẹlẹ́rìí ń sọ ohun tí ó rí àti ohun tí ó fi ara rẹ̀ rí lásán. Ṣe bẹ́ẹ̀."
        }
      ],
      "action": "Kọ ẹ̀rí rẹ ní gbolóhùn mẹ́ta: ìgbé ayé kó o tó mọ Kristi, bí o ṣe gba Kristi, ìgbé ayé lẹ́yìn Kristi. Pín in pẹ̀lú ẹnì kan lọ́sẹ̀ yìí."
    }
  ],
  "ig": [
    {
      "day": 1,
      "title": "A Zọpụtala Gị — Gịnị Mere Ozugbo A",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"Ya mere, ọ bụrụ na mmadụ ọ bụla nọ n'ime Kraịst, ọ bụ onye e kere ọhụrụ: ihe ochie agafeela; lee, ihe niile aghọwo ihe ọhụrụ.\" — 2 Ndị Kọrint 5:17",
      "intro": "Ihe ịtụnanya mere ozugbo a. Ị bụghịzi otu onye ị bụburu tupu ị kpee ekpere ahụ. Nke a abụghị mmetụta — ọ bụ eziokwu Chineke n'onwe ya kwuputara.",
      "truths": [
        {
          "icon": "✅",
          "text": "A gbaghara mmehie gị niile kpamkpam — nke ọ bụla, nke gara aga, nke ugbu a, na nke ga-abịa."
        },
        {
          "icon": "✅",
          "text": "Ị bụzi nwa Chineke ugbu a. Ọ bụghị ohu, ọ bụghị onye ọbịa — ị bụ nwa nwoke ma ọ bụ nwa nwanyị."
        },
        {
          "icon": "✅",
          "text": "Mmụọ Nsọ bi n'ime gị ugbu a. Ị nọghị naanị gị mgbe ọ bụla."
        },
        {
          "icon": "✅",
          "text": "Ndụ ebighị ebi amalitela. Ọ bụghị naanị n'eluigwe n'oge na-adịghị anya — ọ malitere ugbu a."
        },
        {
          "icon": "✅",
          "text": "Onye ị bụbu agabigala. Ị bụ ihe okike ọhụrụ."
        }
      ],
      "action": "Gwa otu onye taa na i nyeworo Kraịst ndụ gị. Kwuo ya n'olu dara ụda. Nzọụkwụ nkwupụta ahụ dị mkpa karịa ka ị chere."
    },
    {
      "day": 2,
      "title": "Gwa Chineke Okwu — Otu E Si Ekpe Ekpere",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"Unu echela banyere ihe ọ bụla, kama n'ihe niile ka ekpere na arịrịọ, na ekele, ka ihe ị na-achọ ka amara Chineke.\" — Ndị Filipai 4:6",
      "intro": "Ekpere bụ naanị ịgwa Chineke okwu. Ọ nọghị anya na ọ dịghị achọ okwu pụrụ iche. Ọ bụ Nna gị. Ị nwere ike gwa ya okwu dịka ị ga-esi gwa onye hụrụ gị n'anya kpamkpam okwu.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Kpee ekpere n'asụsụ gị — Igbo, Bekee, ma ọ bụ ihe ọ bụla dị gị mfe."
        },
        {
          "icon": "📖",
          "text": "Malite site n'ekele — kelee Chineke maka ihe atọ tupu ị rịọ ihe ọ bụla."
        },
        {
          "icon": "❤️",
          "text": "Bụrụ eziokwu — Chineke amaralarị ihe ị na-eche. Ime ka a ga-eme adịghị eme onye ọ bụla mma."
        },
        {
          "icon": "🎧",
          "text": "Hapụ oghere maka ige ntị — ekpere bụ mkparịta ụka, ọ bụghị okwu otu onye."
        },
        {
          "icon": "📅",
          "text": "Kpee ekpere kwa ụbọchị, ọbụlagodi naanị nkeji ise. Wuo omume ahụ tupu ị bawanye oge."
        }
      ],
      "action": "Kpee ekpere maka nkeji ise ugbu a. Gwa Chineke okwu banyere ụbọchị gị, egwu gị, olileanya gị, ma kelee ya maka nzọpụta gị."
    },
    {
      "day": 3,
      "title": "Gụọ Baịbụl — Okwu Chineke Nye Gị",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Okwu gị bụ oriọna nye ụkwụ m na ìhè nye ụzọ m.\" — Abụ Ọma 119:105",
      "intro": "Baịbụl abụghị naanị akwụkwọ okpukpe. Ọ bụ Chineke na-agwa gị okwu. Mgbe ị na-agụ ya, ọ bụghị akụkọ ihe mere eme ka ị na-agụ — ị na-ege Nna gị ntị. Malite na Agba Ọhụrụ, karịsịa Oziọma Jọn.",
      "truths": [
        {
          "icon": "📖",
          "text": "Malite na Oziọma Jọn — e dere ya nye ndị ọhụrụ n'okwukwe."
        },
        {
          "icon": "🗓️",
          "text": "Gụọ ntakịrị kwa ụbọchị. Ịnọgide na-adị ka nkịtị dị mkpa karịa ọtụtụ. Isi otu kwa ụbọchị ezuola."
        },
        {
          "icon": "✍️",
          "text": "Dee otu amaokwu na-emetụ gị. Bufee ya n'ụbọchị gị niile."
        },
        {
          "icon": "🤔",
          "text": "Mgbe ị na-aghọtaghị ihe, atụla ụjọ. Jụọ pastọ ma ọ bụ onye kwere ekwe ị tụkwasịrị obi."
        },
        {
          "icon": "💡",
          "text": "Rịọ tupu ị gụọ: \"Mmụọ Nsọ, gwa m okwu site na nke a.\" Ọ ga-eme ya."
        }
      ],
      "action": "Meghee Jọn isi 1 ugbu a ma gụọ ya kpamkpam. Dee otu amaokwu metụtara gị."
    },
    {
      "day": 4,
      "title": "Chọta Chọọchị — Ị Chọrọ Ndị Otu",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"Anyị ekwesịghịkwa ịkwụsị izukọ ọnụ dịka ụfọdụ nwere omume ime, kama ka anyị na-agbamume ibe anyị.\" — Ndị Hibru 10:25",
      "intro": "Iso Kraịst abụghị njem naanị onye. E kere gị maka ndị otu — maka ofufe, ịza ajụjụ, ọbụbụenyi, uto, na ije ozi ọnụ. Chọọchị abụghị ebe zuru okè. Ọ bụ ezinụlọ nke ndị na-ezughị okè hụrụ otu Jizọs ahụ n'anya.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Chọta chọọchị na-akụzi Baịbụl n'ụzọ doro anya na ziri ezi, ọ bụghị naanị okwu na-akpali akpali."
        },
        {
          "icon": "👋",
          "text": "Mee onwe gị ka amaara dịka onye ọhụrụ kwere ekwe. Ọtụtụ chọọchị nwere mmemme raara onwe ha nye ndị kwere ekwe ọhụrụ."
        },
        {
          "icon": "🤝",
          "text": "Na-aga oge niile ruo ọnwa abụọ ma ọ dịkarịa ala tupu ikpebi ma chọọchị ahụ ọ ga-adaba gị."
        },
        {
          "icon": "🛡️",
          "text": "Zere iche onwe gị. Onye iro na-elekwasị anya ndị kwere ekwe nọ naanị onwe ha ma jụ ijikọ."
        },
        {
          "icon": "💪",
          "text": "Chọọchị abụghị naanị ebe ị na-anata ihe — ọ bụ ebe ị na-ejere ozi ma too eto."
        }
      ],
      "action": "Chọta otu chọọchị dị nso gị. Kwee nkwa ịga na Sọndee a. Gwa mmadụ na ị na-aga."
    },
    {
      "day": 5,
      "title": "Baptizim — Nkwupụta Gị N'ihu Ọha",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Chegharịanụ, ka a baptizikwaa onye ọ bụla n'ime unu n'aha Jizọs Kraịst maka mgbaghara mmehie unu, unu ga-anatakwa onyinye nke Mmụọ Nsọ.\" — Ọrụ Ndịozi 2:38",
      "intro": "Baptizim adịghị azọpụta gị — Jizọs emeworo nke ahụ. Baptizim bụ nkwupụta gị n'ihu ọha na eze na ị bụ nke ya. Ọ bụ ihe ngosi nke mmezu dị n'ime: onye ochie gị anwụọla, onye ọhụrụ gị ebilikwaala na Kraịst.",
      "truths": [
        {
          "icon": "💧",
          "text": "Baptizim bụ iwu, ọ bụghị nhọrọ. E mere Jizọs baptizim. O kwuru ka e mee baptizim."
        },
        {
          "icon": "📣",
          "text": "Ọ bụ nkwupụta gị n'ihu ụwa, chọọchị, na ike ime mmụọ: Abụ m nke Jizọs."
        },
        {
          "icon": "🌅",
          "text": "Ịgabiga mmiri ahụ = ọnwụ nke onye mmehie ochie gị. Ịpụta = ndụ ọhụrụ na Kraịst."
        },
        {
          "icon": "⏰",
          "text": "Mee ya n'oge na-adịghị anya mgbe nzọpụta gị gasịrị — Agba Ọhụrụ na-egosi ndị e mere baptizim otu ụbọchị ahụ."
        },
        {
          "icon": "🙋",
          "text": "Gwa pastọ gị ma ọ bụ onyeisi chọọchị na ị dị njikere. Ha ga-eduzi gị."
        }
      ],
      "action": "Gwa pastọ ma ọ bụ onyeisi chọọchị okwu n'izu a banyere ime baptizim. Tinye ụbọchị. Adịla ndabere."
    },
    {
      "day": 6,
      "title": "Mmụọ Nsọ — Onye Enyemaka Gị",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"Ma Onye Nkasi obi ahụ, bụ́ Mmụọ Nsọ nke Nna ga-ezite n'aha m, ọ ga-akụziri unu ihe niile, ma mee ka unu cheta ihe niile m gwara unu.\" — Jọn 14:26",
      "intro": "Ị naghị ebi ndụ Iso Kraịst site n'ike gị onwe gị. Mmụọ Nsọ — Chineke n'onwe ya — bi n'ime gị. Ọ bụ Onye Enyemaka gị, Onye Nkuzi gị, Onye Nkasi obi gị, na Onye Nduzi gị. Nke a abụghị Iso Kraịst nke nhọrọ. Onye kwere ekwe ọ bụla nwere Mmụọ.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Mmụọ Nsọ abụghị mmetụta — Ọ bụ Onye. Onye nke atọ nke Atọ n'Ime Otu."
        },
        {
          "icon": "📚",
          "text": "Ọ na-akụziri gị Baịbụl ka ị na-agụ ya. Rịọ ya ka o kwuo tupu ị amalite."
        },
        {
          "icon": "🛑",
          "text": "Ọ na-ama gị ikpe maka mmehie — ọ bụghị ikpe ọmụma, kama iweghachi gị ma debe gị n'ụzọ."
        },
        {
          "icon": "💪",
          "text": "Ọ na-enye gị ike ibi ndụ dị iche — mkpụrụ nke Mmụọ: ịhụnanya, ọṅụ, udo, ndidi..."
        },
        {
          "icon": "🎤",
          "text": "Ọ na-enye gị okwu mgbe ị na-ekewa okwukwe gị ma ị amaghị ihe ị ga-ekwu."
        }
      ],
      "action": "Rịọ Mmụọ Nsọ ka o mejupụta gị ọzọ ugbu a. Naanị kwuo: \"Mmụọ Nsọ, m na-edowe onwe m nye Gị. Mejupụta m, duo m, jirikwa m taa.\""
    },
    {
      "day": 7,
      "title": "Kesaa Okwukwe Gị — Ị Nwere Ozi Ọma",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"Ma unu ga-anata ike, mgbe Mmụọ Nsọ bịakwasịrị unu; unu ga-abụkwa ndịakaebe m na Jerusalem, na Judia dum, na Sameria, na ruo n'ọgwụgwụ ụwa.\" — Ọrụ Ndịozi 1:8",
      "intro": "I nwere ozi kacha mma n'ụwa. Onye hụrụ gị n'anya kesaara gị ya — ugbu a bụ oge gị. Ikesa okwukwe gị adịghị achọ afọ ọtụtụ nke ọzụzụ ma ọ bụ ihe ọmụma nkà mmụta okpukpe zuru oke. Ọ na-amalite site n'akụkọ nke gị.",
      "truths": [
        {
          "icon": "📖",
          "text": "Ihe akaebe gị bụ ngwaọrụ gị kachasị ike. Ọ bụ: ka ndụ gị dị tupu, ka i si bịakwute Kraịst, na ihe gbanwere."
        },
        {
          "icon": "🌱",
          "text": "Ị dịghị achọ inwe azịza niile. Ikwu \"amaghị m ma m nwere ike ịchọpụta\" ziri ezi kpamkpam."
        },
        {
          "icon": "💬",
          "text": "Malite na ndị kacha nso gị — ezinụlọ, ndị enyi, ndị agbata obi. Kpeere ha ekpere aha ha na mbụ."
        },
        {
          "icon": "📱",
          "text": "Jiri GospelSwipe Pro kesaa oziọma n'ụzọ eji anya ahụ mgbe okwu siri ike. Kwe ka slaịd ndị ahụ rụọ ọrụ."
        },
        {
          "icon": "🔥",
          "text": "Ị bụ onyeàmà, ọ bụghị ọka iwu. Onyeàmà na-akọ naanị ihe ọ hụrụ na ihe ọ metụtara. Meekwa nke ahụ."
        }
      ],
      "action": "Dee ihe akaebe gị n'ahịrịokwu atọ: ndụ tupu Kraịst, ka i si nata Kraịst, ndụ mgbe Kraịst gasịrị. Kesaa ya na otu onye n'izu a."
    }
  ],
  "ha": [
    {
      "day": 1,
      "title": "An Cece Ka — Me Ya Faru Yanzu",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"Saboda haka, in wani na cikin Kristi, sabon halitta ne: tsofaffin al'amura sun shuɗe; ga shi, duk sun zama sababbi.\" — 2 Korintiyawa 5:17",
      "intro": "Wani abu mai ban mamaki ya faru yanzu. Ba kai ne mutumin da kake kafin ka yi wannan addu'a ba. Wannan ba jin daɗi ba ne kawai — gaskiya ce da Allah kansa ya bayyana.",
      "truths": [
        {
          "icon": "✅",
          "text": "An gafarta maka zunubanka gaba ɗaya — kowanne, na baya, na yanzu, da na gaba."
        },
        {
          "icon": "✅",
          "text": "Yanzu kai ɗan Allah ne. Ba bawa ba, ba baƙo ba — ɗa ne ko 'ya ce."
        },
        {
          "icon": "✅",
          "text": "Ruhu Mai Tsarki yana zaune a cikinka yanzu. Ba za ka taɓa kasancewa kaɗai ba."
        },
        {
          "icon": "✅",
          "text": "Rayuwa madawwamiya ta fara. Ba a sama kawai a nan gaba ba — ta fara yanzu."
        },
        {
          "icon": "✅",
          "text": "Tsohuwar kai ta wuce. Sabuwar halitta ne kai."
        }
      ],
      "action": "Gaya wa mutum ɗaya yau cewa ka ba da ranka ga Kristi. Faɗa da babbar murya. Wannan matakin furuci yana da matukar muhimmanci fiye da yadda kake tunani."
    },
    {
      "day": 2,
      "title": "Yin Magana da Allah — Yadda Ake Addu'a",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"Kada ku damu da kome; sai dai a cikin kowane abu, ta wurin addu'a da roƙo, tare da godiya, ku sanar da Allah abin da kuke buƙata.\" — Filibbiyawa 4:6",
      "intro": "Addu'a magana ce da Allah kawai. Ba ya nesa kuma ba ya buƙatar kalmomi na musamman. Shi ne Ubanka. Za ka iya yin masa magana kamar yadda za ka yi wa wanda yake ƙaunarka gaba ɗaya magana.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Yi addu'a da harshenka — Hausa, Turanci, ko duk abin da ke saukin gaskiya a gareka."
        },
        {
          "icon": "📖",
          "text": "Fara da godiya — gode wa Allah akan abubuwa uku kafin ka nemi kome."
        },
        {
          "icon": "❤️",
          "text": "Zama mai gaskiya — Allah ya riga ya san abin da kake tunani. Ƙarya ba ta amfanar kowa ba."
        },
        {
          "icon": "🎧",
          "text": "Ka bar wuri don sauraro — addu'a tattaunawa ce, ba maganar mutum ɗaya ba."
        },
        {
          "icon": "📅",
          "text": "Yi addu'a kowace rana, ko da mintuna biyar kawai. Gina al'ada kafin ka gina tsawon lokaci."
        }
      ],
      "action": "Yi addu'a na mintuna biyar yanzu. Yi wa Allah magana game da ranarka, tsoranka, begenka, kuma ka gode masa akan cetonka."
    },
    {
      "day": 3,
      "title": "Karanta Littafi Mai Tsarki — Maganar Allah Gareka",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Maganarka fitila ce ga ƙafata haske kuma ga hanyata.\" — Zabura 119:105",
      "intro": "Littafi Mai Tsarki ba littafin addini kawai ba ne. Allah ne yake yin maka magana. Lokacin da kake karantawa, ba kana karanta tarihi ba — kana sauraron Ubanka. Fara da Sabon Alkawari, musamman Bishara ta Yohanna.",
      "truths": [
        {
          "icon": "📖",
          "text": "Fara da Bisharar Yohanna — an rubuta ta ne domin sababbin masu bi."
        },
        {
          "icon": "🗓️",
          "text": "Karanta kaɗan kowace rana. Daidaito ya fi yawa muhimmanci. Babi ɗaya a rana ya isa."
        },
        {
          "icon": "✍️",
          "text": "Rubuta aya ɗaya da ta taɓa ka. Ka ɗauke ta ko'ina cikin ranarka."
        },
        {
          "icon": "🤔",
          "text": "Idan ba ka fahimci wani abu ba, kada ka damu. Tambayi fasto ko amintaccen mai bi."
        },
        {
          "icon": "💡",
          "text": "Yi tambaya kafin ka karanta: \"Ruhu Mai Tsarki, ka yi mini magana ta wurin wannan.\" Zai yi haka."
        }
      ],
      "action": "Buɗe Yohanna babi na 1 yanzu ka karanta shi gaba ɗaya. Rubuta aya ɗaya da ta taɓa ka."
    },
    {
      "day": 4,
      "title": "Nemi Coci — Kana Buƙatar Al'umma",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"Kada mu daina taruwa tare, kamar yadda al'adar wasu take, sai dai mu ƙarfafa juna.\" — Ibraniyawa 10:25",
      "intro": "Kiristanci ba tafiya ta kaɗaici ba ce. An halicce ka don al'umma — don bauta, lissafi, abota, girma, da hidima tare. Coci ba wuri cikakke ba ne. Iyali ne na mutane marasa cikakke waɗanda suke ƙaunar Yesu ɗaya.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Nemi coci wanda ke koyar da Littafi Mai Tsarki a fili kuma daidai, ba maganganun ƙarfafa gwiwa kawai ba."
        },
        {
          "icon": "👋",
          "text": "Ka gabatar da kanka a matsayin sabon mai bi. Yawancin coci suna da shirye-shirye na musamman ga sababbin masu bi."
        },
        {
          "icon": "🤝",
          "text": "Ka halarta akai-akai na aƙalla wata biyu kafin ka yanke shawara ko cocin ya dace da kai."
        },
        {
          "icon": "🛡️",
          "text": "Guji kaɗaici. Abokin gaba yana kai wa masu bi da suke kaɗaici da rashin haɗi hari."
        },
        {
          "icon": "💪",
          "text": "Coci ba wuri ne kawai da kake karɓa ba — wuri ne da kake hidima da girma."
        }
      ],
      "action": "Nemi coci ɗaya kusa da kai. Ka yi alkawari za ka halarta wannan Lahadi. Faɗa wa wani cewa za ka je."
    },
    {
      "day": 5,
      "title": "Baftisma — Sanarwarka Ta Jama'a",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Ku tuba, kuma kowannenku ya yi baftisma cikin sunan Yesu Kristi domin gafarar zunubanku. Za ku kuwa karɓi kyautar Ruhu Mai Tsarki.\" — Ayyukan Manzanni 2:38",
      "intro": "Baftisma ba ya cece ka — Yesu ya riga ya yi hakan. Baftisma sanarwarka ce ta jama'a cewa kai nasa ne. Alama ce ta waje ga gaskiya ta ciki: tsohon kai ya mutu kuma sabon kai ya tashi tare da Kristi.",
      "truths": [
        {
          "icon": "💧",
          "text": "Baftisma umarni ne, ba zaɓi ba. An yi wa Yesu baftisma. Ya ce a yi baftisma."
        },
        {
          "icon": "📣",
          "text": "Sanarwarka ce ta jama'a ga duniya, coci, da ikokin ruhaniya: Ni na Yesu ne."
        },
        {
          "icon": "🌅",
          "text": "Shiga cikin ruwa = mutuwar tsohon kai mai zunubi. Fitowa = sabuwar rayuwa cikin Kristi."
        },
        {
          "icon": "⏰",
          "text": "Yi shi ba da daɗewa ba bayan ceto — Sabon Alkawari ya nuna mutane suna yin baftisma a rana ɗaya."
        },
        {
          "icon": "🙋",
          "text": "Faɗa wa fasto ko shugaban coci cewa kana shirye. Za su bishe ka ta wannan tsari."
        }
      ],
      "action": "Yi magana da fasto ko shugaban coci wannan makon game da yin baftisma. Sanya kwanan wata. Kada ka jinkirta."
    },
    {
      "day": 6,
      "title": "Ruhu Mai Tsarki — Mataimakinka",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"Amma Mai Ta'aziyya, Ruhu Mai Tsarki, wanda Uba zai aiko cikin sunana, shi zai koya muku kome, ya kuma tunashe ku duk abin da na faɗa muku.\" — Yohanna 14:26",
      "intro": "Ba kake rayuwa da rayuwar Kirista da ƙarfin kanka ba. Ruhu Mai Tsarki — Allah kansa — yana zaune a cikinka. Shi ne Mataimakinka, Malaminka, Mai Ta'aziyyarka, da Jagoranka. Wannan ba Kiristanci na zaɓi ba ne. Kowane mai bi yana da Ruhu.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Ruhu Mai Tsarki ba jin daɗi ba ne — Mutum ne. Mutum na uku na Triniti."
        },
        {
          "icon": "📚",
          "text": "Yana koya maka Littafi Mai Tsarki yayin da kake karantawa. Ka roƙe shi ya yi magana kafin ka fara."
        },
        {
          "icon": "🛑",
          "text": "Yana tabbatar maka da zunubi — ba don ya hukunta ka ba, sai don ya mayar da kai kuma ya kiyaye kai a hanya."
        },
        {
          "icon": "💪",
          "text": "Yana ba ka ƙarfin rayuwa ta dabam — 'ya'yan itacen Ruhu: ƙauna, farin ciki, salama, haƙuri..."
        },
        {
          "icon": "🎤",
          "text": "Yana ba ka kalmomi lokacin da kake raba bangaskiyarka kuma ba ka san abin da za ka faɗa ba."
        }
      ],
      "action": "Roƙi Ruhu Mai Tsarki ya cika ka sabo yanzu. Kawai ka ce: \"Ruhu Mai Tsarki, na sallama kaina gareka. Ka cika ni, ka jagorance ni, ka yi amfani da ni yau.\""
    },
    {
      "day": 7,
      "title": "Raba Bangaskiyarka — Kana da Labari Mai Daɗi",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"Amma za ku karɓi iko, in Ruhu Mai Tsarki ya sauko muku; za ku kuma zama shaidu na a Urushalima, da dukan Yahudiya da Samariya, har zuwa iyakar duniya.\" — Ayyukan Manzanni 1:8",
      "intro": "Kana da labari mafi kyau a duniya. Wani da yake ƙaunarka ya raba maka shi — yanzu lokacinka ne. Raba bangaskiyarka ba ya buƙatar shekaru na horo ko cikakken ilimin tauhidi. Yana farawa da labarinka na kanka.",
      "truths": [
        {
          "icon": "📖",
          "text": "Shaidarka ita ce kayan aikinka mafi ƙarfi. Ita ce: yadda rayuwarka take kafin, yadda ka zo wurin Kristi, da abin da ya canja."
        },
        {
          "icon": "🌱",
          "text": "Ba ka buƙatar samun dukkan amsoshi. Faɗin \"ban sani ba amma zan iya bincika\" abu ne mai kyau sosai."
        },
        {
          "icon": "💬",
          "text": "Fara da mutanen da suke kusa da kai — iyali, abokai, maƙwabta. Yi musu addu'a da sunayensu tukuna."
        },
        {
          "icon": "📱",
          "text": "Yi amfani da GospelSwipe Pro don raba bishara ta hangen zuci lokacin da kalmomi suke da wahala. Bar zane-zanen su yi aikin."
        },
        {
          "icon": "🔥",
          "text": "Kai shaida ne, ba lauya ba. Shaida yana faɗin abin da ya gani da abin da ya samu kawai. Yi hakan."
        }
      ],
      "action": "Rubuta shaidarka a cikin jimloli uku: rayuwa kafin Kristi, yadda ka karɓi Kristi, rayuwa bayan Kristi. Ka raba ta da mutum ɗaya wannan makon."
    }
  ],
  "pcm": [
    {
      "day": 1,
      "title": "You Don Save — Wetin Just Happen",
      "colour": "#2ecc71",
      "icon": "fa-heart",
      "verse": "\"So if any person dey inside Christ, na new creation be dat: old things don pass away; behold, everything don become new.\" — 2 Corinthians 5:17",
      "intro": "Something wey sweet well well just happen. You no be di same person wey you be before you pray dat prayer. Dis one no be just feelings — na fact wey God Himself talk.",
      "truths": [
        {
          "icon": "✅",
          "text": "Dem don forgive all your sins finish — every single one, past, present, and future."
        },
        {
          "icon": "✅",
          "text": "Na child of God you be now. No be servant, no be visitor — na son or daughter."
        },
        {
          "icon": "✅",
          "text": "Holy Spirit dey live inside you now. You no dey alone again, at all."
        },
        {
          "icon": "✅",
          "text": "Eternal life don start. E no dey heaven alone for future — e don start right now."
        },
        {
          "icon": "✅",
          "text": "Your old self don pass away. New creation be who you be now."
        }
      ],
      "action": "Tell one person today say you don give your life to Christ. Talk am out loud. Dat one step of confession matter well well pass wetin you dey think."
    },
    {
      "day": 2,
      "title": "Talk To God — How To Pray",
      "colour": "#3498db",
      "icon": "fa-hands-praying",
      "verse": "\"No worry yourself about anything; but for everything, make una tell God wetin una want through prayer and request, with thanksgiving.\" — Philippians 4:6",
      "intro": "Prayer na just to talk to God. E no far and e no need special grammar. Na your Father be dis. You fit talk to Am like how you go talk to person wey love you well well.",
      "truths": [
        {
          "icon": "🙏",
          "text": "Pray for your own language — Pidgin, Yoruba, English, whatever wey come natural for you."
        },
        {
          "icon": "📖",
          "text": "Start with thanksgiving — thank God for at least three things before you start ask for anything."
        },
        {
          "icon": "❤️",
          "text": "Dey honest — God already know wetin dey your mind. To dey pretend no go help anybody."
        },
        {
          "icon": "🎧",
          "text": "Leave space to listen — prayer na conversation, e no be one-way talk."
        },
        {
          "icon": "📅",
          "text": "Pray everyday, even if na just five minutes. Build di habit first before you increase di time."
        }
      ],
      "action": "Pray for five minutes now-now. Talk to God about your day, your fears, your hopes, and thank Am for your salvation."
    },
    {
      "day": 3,
      "title": "Read Bible — God Word For You",
      "colour": "#f39c12",
      "icon": "fa-book-bible",
      "verse": "\"Your word na lamp for my feet and light for my path.\" — Psalm 119:105",
      "intro": "Bible no be just religious book. Na God dey talk to you. When you dey read am, you no dey read history — you dey listen to your Father. Start with New Testament, especially di Gospel of John.",
      "truths": [
        {
          "icon": "📖",
          "text": "Start with di Gospel of John — dem write am for people wey new for faith."
        },
        {
          "icon": "🗓️",
          "text": "Read small small everyday. Consistency matter pass how much you read. One chapter every day dey enough."
        },
        {
          "icon": "✍️",
          "text": "Write down one verse wey touch you. Carry am go throughout your day."
        },
        {
          "icon": "🤔",
          "text": "If you no understand something, no panic. Ask pastor or believer wey you trust."
        },
        {
          "icon": "💡",
          "text": "Ask before you read: \"Holy Spirit, talk to me through dis one.\" E go do am."
        }
      ],
      "action": "Open John chapter 1 now-now and read am well well. Write down one verse wey touch your heart."
    },
    {
      "day": 4,
      "title": "Find Church — You Need Community",
      "colour": "#9b59b6",
      "icon": "fa-church",
      "verse": "\"Make we no stop to dey gather together, as some people dey do; instead make we dey encourage each other.\" — Hebrews 10:25",
      "intro": "Christianity no be journey wey you go do alone. Dem design you for community — for worship, accountability, friendship, growth, and to serve together. Church no be perfect place. Na family of imperfect people wey love di same Jesus.",
      "truths": [
        {
          "icon": "🏛️",
          "text": "Find church wey dey teach Bible clear clear and correctly, no be just motivational talk."
        },
        {
          "icon": "👋",
          "text": "Introduce yourself as new believer. Most church get program wey dem set up for new believers."
        },
        {
          "icon": "🤝",
          "text": "Attend consistently for at least two months before you decide if di church good for you."
        },
        {
          "icon": "🛡️",
          "text": "Avoid isolation. Enemy dey target believers wey dey alone and no connect with anybody."
        },
        {
          "icon": "💪",
          "text": "Church no be just where you dey receive — na where you go serve and grow too."
        }
      ],
      "action": "Find one church wey no far from you. Promise say you go attend dis Sunday. Tell somebody say you dey go."
    },
    {
      "day": 5,
      "title": "Baptism — Your Public Declaration",
      "colour": "#3498db",
      "icon": "fa-water",
      "verse": "\"Repent, make everyone of una baptize for di name of Jesus Christ for forgiveness of una sins. Una go receive di gift of di Holy Spirit.\" — Acts 2:38",
      "intro": "Baptism no be wetin dey save you — Jesus don already do dat one. Baptism na your public declaration say you belong to Am. Na outside sign for inside reality: your old self don die and your new self don rise with Christ.",
      "truths": [
        {
          "icon": "💧",
          "text": "Baptism na command, e no be option. Dem baptize Jesus. E talk make dem baptize person."
        },
        {
          "icon": "📣",
          "text": "Na your public announcement to di world, church, and spiritual forces: I belong to Jesus."
        },
        {
          "icon": "🌅",
          "text": "To go inside water = old sinful self dey die. To come out = new life for Christ."
        },
        {
          "icon": "⏰",
          "text": "Do am soon after salvation — New Testament show say people dey baptize di same day."
        },
        {
          "icon": "🙋",
          "text": "Tell your pastor or church leader say you don ready. Dem go guide you through am."
        }
      ],
      "action": "Talk to pastor or church leader dis week about to baptize. Put date on top am. No delay am."
    },
    {
      "day": 6,
      "title": "Holy Spirit — Your Helper",
      "colour": "#2ecc71",
      "icon": "fa-wind",
      "verse": "\"But di Helper, di Holy Spirit, wey Father go send for my name, e go teach una everything and go remind una everything wey I don tell una.\" — John 14:26",
      "intro": "Na your own strength you no dey use live Christian life. Holy Spirit — God Himself — dey live inside you. Na Im be your Helper, Teacher, Comforter, and Guide. Dis one no be optional Christianity. Every believer get di Spirit.",
      "truths": [
        {
          "icon": "🕊️",
          "text": "Holy Spirit no be feeling — Na Person be Am. Di third Person for di Trinity."
        },
        {
          "icon": "📚",
          "text": "E dey teach you Bible as you dey read am. Ask Am to talk before you start."
        },
        {
          "icon": "🛑",
          "text": "E dey convict you about sin — no be to condemn you, but to restore you and keep you for correct track."
        },
        {
          "icon": "💪",
          "text": "E dey empower you to live different — fruit of di Spirit: love, joy, peace, patience..."
        },
        {
          "icon": "🎤",
          "text": "E dey give you words when you dey share your faith and you no know wetin to talk."
        }
      ],
      "action": "Ask di Holy Spirit to fill you afresh right now. Just talk: \"Holy Spirit, I dey yield myself to You. Fill me, lead me, and use me today.\""
    },
    {
      "day": 7,
      "title": "Share Your Faith — You Get Good News",
      "colour": "#f39c12",
      "icon": "fa-bullhorn",
      "verse": "\"But una go receive power, when Holy Spirit come upon una; una go be my witnesses for Jerusalem, for all Judea and Samaria, and to di end of di earth.\" — Acts 1:8",
      "intro": "You get di best news for di whole world. Person wey love you share am with you — now na your turn. To share your faith no need years of training or perfect theological knowledge. E dey start with your personal story.",
      "truths": [
        {
          "icon": "📖",
          "text": "Your testimony na your most powerful tool. Na: how your life be before, how you come meet Christ, and wetin change."
        },
        {
          "icon": "🌱",
          "text": "You no need get all di answers. To talk \"I no know but I fit find out\" dey perfectly fine."
        },
        {
          "icon": "💬",
          "text": "Start with di people wey close to you — family, friends, neighbours. Pray for dem by name first."
        },
        {
          "icon": "📱",
          "text": "Use GospelSwipe Pro to share di gospel with pictures when words hard. Make di slides do di work."
        },
        {
          "icon": "🔥",
          "text": "Na witness you be, no be lawyer. Witness dey just talk wetin e see and wetin e experience. Do dat one."
        }
      ],
      "action": "Write your testimony for three sentences: life before Christ, how you receive Christ, life after Christ. Share am with one person dis week."
    }
  ]
};

function getNBDays() {
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  return NB_DAYS_I18N[lang] || NB_DAYS_I18N.en;
}
