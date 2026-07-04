// ==========================================================
// EVANGELISM TRAINING — full content translated into all 8 languages
// (Fixes bug: Evangelism Training content stayed English-only
// regardless of the language selected in Settings.)
// ==========================================================
const TRAINING_METHODS_I18N = {
  "en": [
    {
      "name": "Romans Road",
      "desc": "Romans Road uses five key scriptures from the book of Romans to take someone from understanding their sin to receiving salvation. It is simple, scripturally grounded, and easy to memorise.",
      "steps": [
        {
          "title": "Step 1 — Everyone Has Sinned",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Start here. This establishes common ground — you are not attacking the person, you are including yourself. Everyone, including you, has sinned. Sin means falling short of God's perfect standard. There is no one who is the exception.",
          "tip": "Say it gently: \"The Bible says all of us — including me — have sinned and fallen short of what God intended for our lives.\""
        },
        {
          "title": "Step 2 — Sin Has a Consequence",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.\" — Romans 6:23",
          "explanation": "Sin is not just behaviour — it earns a wage: death. Spiritual separation from God both now and eternally. BUT — notice the contrast. The same verse holds the solution: God's gift is eternal life. This is the pivot from bad news to good news.",
          "tip": "Pause on the word \"gift.\" Ask: \"Have you ever refused a gift? Gifts are free — you just have to receive them.\""
        },
        {
          "title": "Step 3 — God Showed His Love",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.\" — Romans 5:8",
          "explanation": "God did not wait for us to get better. While we were still sinners — at our worst — Christ died. This is the gospel in one sentence. Not religion. Not self-improvement. God acting first, out of love, on our behalf.",
          "tip": "Emphasise the timing: \"While we were STILL sinners. Not after we cleaned up. Before we even asked.\""
        },
        {
          "title": "Step 4 — Confess and Believe",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.\" — Romans 10:9",
          "explanation": "Salvation has two parts: confession with the mouth and belief in the heart. It is both internal (genuine faith) and external (public acknowledgement). This is the invitation. This is the step they take.",
          "tip": "Ask: \"Do you believe that Jesus died for your sins and rose again?\" If yes: \"Would you like to confess Him as Lord right now?\""
        },
        {
          "title": "Step 5 — Lead the Prayer",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"Everyone who calls on the name of the Lord will be saved.\" — Romans 10:13",
          "explanation": "Lead them in a simple prayer. You do not need elaborate words. What matters is the sincerity of their heart. After they pray, affirm what just happened — they are now a child of God. Then connect them to a church.",
          "tip": "Sample prayer: \"Lord Jesus, I believe You died for my sins and rose again. I confess You as Lord. Forgive me and come into my heart. I receive eternal life. Amen.\" Then say: \"If you meant that, you are now saved.\""
        }
      ]
    },
    {
      "name": "The Bridge",
      "desc": "The Bridge Illustration is a visual tool showing the gap between sinful humanity and holy God, and how Jesus is the only bridge across. Ideal for visual learners — you can draw it on paper or the ground as you speak.",
      "steps": [
        {
          "title": "Step 1 — Draw God's Side",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"For God is holy.\" — 1 Peter 1:16 | \"God is love.\" — 1 John 4:8",
          "explanation": "Draw a cliff on the right side. Label it GOD. Explain: God is holy — completely perfect with no sin. God is also love — He desires relationship with us. These two facts create the tension: a God who loves us but cannot ignore our sin.",
          "tip": "Say: \"Picture a canyon. On one side is God — holy, perfect, loving. Draw it with me if you have paper.\""
        },
        {
          "title": "Step 2 — Draw Humanity's Side",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Draw a cliff on the left side. Label it US / HUMANITY. There is a gap between the two sides — that gap is sin. We were created for relationship with God, but sin broke that connection. No matter how good we try to be, we cannot jump across.",
          "tip": "Draw someone on the left side trying to jump across — but falling into the canyon. \"No human effort can bridge this gap. Not religion, not good deeds, not education.\""
        },
        {
          "title": "Step 3 — Human Solutions Don't Work",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"There is a way that appears to be right, but in the end it leads to death.\" — Proverbs 14:12",
          "explanation": "People try many ways to get to God: good works, religion, self-improvement, money, fame. Draw these as short planks that fall into the canyon. None of them reach. The gap is not a gap of effort — it is a gap of sin that only God can close.",
          "tip": "Ask: \"What do you think gets a person to heaven?\" Listen fully. Then gently show why those planks fall short."
        },
        {
          "title": "Step 4 — Jesus Is the Bridge",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'\" — John 14:6",
          "explanation": "Draw a cross laid across the canyon — connecting both sides. That is Jesus. He is fully God and fully man — the only One who could span the gap. His death paid for our sin. His resurrection proved it worked. The bridge is built. It is open. It is free.",
          "tip": "Draw the cross bridging both cliffs. \"Jesus is not one of many paths. He IS the path. The bridge is built. But you have to choose to walk across it.\""
        },
        {
          "title": "Step 5 — Cross the Bridge",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.\" — John 1:12",
          "explanation": "The bridge exists. The question is whether they will cross it. Receiving Jesus means choosing to leave your side and walk to God's side — trusting Jesus completely as Lord and Saviour. It is a one-time decision that changes everything forever.",
          "tip": "Ask: \"The bridge is there. Jesus has done everything. The only question is: will you cross? Would you like to pray and receive Him right now?\""
        }
      ]
    },
    {
      "name": "Three Circles",
      "desc": "The Three Circles method (also called God's Story) was developed by Jimmy Scroggins. It uses three overlapping circles to explain God's design, brokenness, and the gospel. Perfect for conversational, natural settings.",
      "steps": [
        {
          "title": "Circle 1 — God's Design",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"God saw all that he had made, and it was very good.\" — Genesis 1:31",
          "explanation": "Draw a circle. Label it GOD'S DESIGN. In the beginning, everything was created perfectly. Humanity was in perfect relationship with God, with each other, and with creation. We were made in His image — for love, purpose, meaning, and wholeness. That was the original design.",
          "tip": "Ask: \"Do you believe people are meant for something better than what we see in the world? That's what we're looking for — that original design.\""
        },
        {
          "title": "Circle 2 — Brokenness",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Draw a broken circle with a crack, separated from the first. Label it BROKENNESS. When humanity chose sin, we broke from God's design. That brokenness affects everything: relationships, identity, society, the world itself. We feel it — in emptiness, addiction, conflict, grief, and death. We all know something is wrong.",
          "tip": "Say: \"Look at the world — corruption, broken families, addiction, war. That's not what we were designed for. Something went very wrong.\" Connect it to their personal story if they share openly."
        },
        {
          "title": "Step 3 — Our Broken Recoveries",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"There is a way that appears to be right, but in the end it leads to death.\" — Proverbs 14:12",
          "explanation": "People try to escape brokenness on their own. Draw arrows going OUT of the brokenness circle but looping back in — money, success, relationships, religion, pleasure. They feel better briefly, then return to the same emptiness. Human solutions are cycles, not escapes.",
          "tip": "Ask gently: \"Have you ever tried to fill that emptiness with something — and it worked for a while, then stopped?\" Most people will immediately relate to this."
        },
        {
          "title": "Circle 3 — The Gospel",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\" — John 3:16",
          "explanation": "Draw a cross between the broken circle and God's design circle, with an arrow leading from brokenness back to design. Jesus entered brokenness — lived perfectly, died for our sin, rose again — and opened a path back to God's design. Not self-improvement. God coming to us.",
          "tip": "Say: \"Jesus did not stand outside our brokenness and call us to come to Him. He ENTERED our brokenness and paid the price to bring us back. That's different from every other religion.\""
        },
        {
          "title": "Step 5 — Pursue and Follow",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Repent and believe the good news.\" — Mark 1:15",
          "explanation": "Draw an arrow from the brokenness circle, through the cross, into God's design circle. This is the response: Repent — turn away from the broken recovery attempts. Believe — trust that Jesus is the way back. Follow — live in ongoing relationship with Him. Salvation is not a moment only, it is a new direction.",
          "tip": "Ask: \"Which circle are you in right now — God's design, or brokenness? Would you like to take the step through the cross and back to what you were designed for?\""
        }
      ]
    }
  ],
  "fr": [
    {
      "name": "La Route des Romains",
      "desc": "La Route des Romains utilise cinq versets clés du livre des Romains pour amener une personne à comprendre son péché puis à recevoir le salut. C'est simple, fondé sur l'Écriture et facile à mémoriser.",
      "steps": [
        {
          "title": "Étape 1 — Tous ont péché",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"Car tous ont péché et sont privés de la gloire de Dieu.\" — Romains 3:23",
          "explanation": "Commencez ici. Cela établit un terrain commun — vous ne visez pas la personne, vous vous incluez vous-même. Tout le monde, y compris vous, a péché. Le péché signifie ne pas atteindre la norme parfaite de Dieu. Personne n'y échappe.",
          "tip": "Dites-le doucement : \"La Bible dit que nous tous — moi y compris — avons péché et n'avons pas atteint ce que Dieu voulait pour nos vies.\""
        },
        {
          "title": "Étape 2 — Le péché a une conséquence",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"Car le salaire du péché, c'est la mort ; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.\" — Romains 6:23",
          "explanation": "Le péché n'est pas qu'un comportement — il rapporte un salaire : la mort. Une séparation spirituelle d'avec Dieu, maintenant et pour l'éternité. MAIS — remarquez le contraste. Le même verset contient la solution : le don de Dieu, c'est la vie éternelle. C'est le tournant entre la mauvaise et la bonne nouvelle.",
          "tip": "Marquez une pause sur le mot \"don\". Demandez : \"Avez-vous déjà refusé un cadeau ? Les cadeaux sont gratuits — il suffit de les recevoir.\""
        },
        {
          "title": "Étape 3 — Dieu a montré son amour",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous.\" — Romains 5:8",
          "explanation": "Dieu n'a pas attendu que nous nous améliorions. Alors que nous étions encore pécheurs — au plus bas — Christ est mort. C'est l'évangile en une phrase. Pas de la religion. Pas de l'amélioration personnelle. Dieu agissant le premier, par amour, en notre faveur.",
          "tip": "Insistez sur le moment : \"Alors que nous étions ENCORE pécheurs. Pas après nous être améliorés. Avant même d'avoir demandé.\""
        },
        {
          "title": "Étape 4 — Confesser et croire",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"Si tu confesses de ta bouche le Seigneur Jésus, et si tu crois dans ton cœur que Dieu l'a ressuscité des morts, tu seras sauvé.\" — Romains 10:9",
          "explanation": "Le salut comporte deux parties : la confession de bouche et la foi du cœur. C'est à la fois intérieur (une foi sincère) et extérieur (une reconnaissance publique). C'est l'invitation. C'est l'étape qu'ils doivent franchir.",
          "tip": "Demandez : \"Crois-tu que Jésus est mort pour tes péchés et qu'il est ressuscité ?\" Si oui : \"Voudrais-tu le confesser comme Seigneur maintenant même ?\""
        },
        {
          "title": "Étape 5 — Diriger la prière",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"Quiconque invoquera le nom du Seigneur sera sauvé.\" — Romains 10:13",
          "explanation": "Guidez-les dans une prière simple. Vous n'avez pas besoin de mots élaborés. Ce qui compte, c'est la sincérité de leur cœur. Après leur prière, affirmez ce qui vient de se passer — ils sont maintenant enfants de Dieu. Puis mettez-les en lien avec une église.",
          "tip": "Exemple de prière : \"Seigneur Jésus, je crois que tu es mort pour mes péchés et que tu es ressuscité. Je te confesse comme Seigneur. Pardonne-moi et viens dans mon cœur. Je reçois la vie éternelle. Amen.\" Puis dites : \"Si tu le pensais vraiment, tu es maintenant sauvé.\""
        }
      ]
    },
    {
      "name": "Le Pont",
      "desc": "L'illustration du Pont est un outil visuel montrant le fossé entre l'humanité pécheresse et le Dieu saint, et comment Jésus est le seul pont pour le franchir. Idéal pour les apprenants visuels — vous pouvez le dessiner sur papier ou au sol en parlant.",
      "steps": [
        {
          "title": "Étape 1 — Dessinez le côté de Dieu",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"Car Dieu est saint.\" — 1 Pierre 1:16 | \"Dieu est amour.\" — 1 Jean 4:8",
          "explanation": "Dessinez une falaise à droite. Notez-y DIEU. Expliquez : Dieu est saint — totalement parfait, sans péché. Dieu est aussi amour — il désire une relation avec nous. Ces deux vérités créent une tension : un Dieu qui nous aime mais ne peut ignorer notre péché.",
          "tip": "Dites : \"Imaginez un canyon. D'un côté, il y a Dieu — saint, parfait, aimant. Dessine-le avec moi si tu as du papier.\""
        },
        {
          "title": "Étape 2 — Dessinez le côté de l'humanité",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"Car tous ont péché et sont privés de la gloire de Dieu.\" — Romains 3:23",
          "explanation": "Dessinez une falaise à gauche. Notez-y NOUS / L'HUMANITÉ. Il y a un fossé entre les deux côtés — ce fossé, c'est le péché. Nous avons été créés pour être en relation avec Dieu, mais le péché a brisé ce lien. Peu importe nos efforts, nous ne pouvons pas sauter par-dessus.",
          "tip": "Dessinez quelqu'un du côté gauche essayant de sauter — mais tombant dans le canyon. \"Aucun effort humain ne peut combler ce fossé. Ni la religion, ni les bonnes œuvres, ni l'éducation.\""
        },
        {
          "title": "Étape 3 — Les solutions humaines ne fonctionnent pas",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"Telle voie paraît droite à un homme, mais son issue, c'est la voie de la mort.\" — Proverbes 14:12",
          "explanation": "Les gens essaient beaucoup de moyens pour atteindre Dieu : bonnes œuvres, religion, développement personnel, argent, célébrité. Dessinez-les comme de courtes planches qui tombent dans le canyon. Aucune n'atteint l'autre côté. Le fossé n'est pas un manque d'effort — c'est un fossé de péché que seul Dieu peut combler.",
          "tip": "Demandez : \"Selon toi, qu'est-ce qui mène une personne au ciel ?\" Écoutez pleinement. Puis montrez doucement pourquoi ces planches ne suffisent pas."
        },
        {
          "title": "Étape 4 — Jésus est le pont",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Jésus lui dit : Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.\" — Jean 14:6",
          "explanation": "Dessinez une croix posée en travers du canyon — reliant les deux côtés. C'est Jésus. Il est pleinement Dieu et pleinement homme — le seul qui pouvait franchir le fossé. Sa mort a payé pour notre péché. Sa résurrection a prouvé que cela a fonctionné. Le pont est construit. Il est ouvert. Il est gratuit.",
          "tip": "Dessinez la croix reliant les deux falaises. \"Jésus n'est pas l'un des chemins parmi d'autres. Il EST le chemin. Le pont est construit. Mais tu dois choisir de le traverser.\""
        },
        {
          "title": "Étape 5 — Traverser le pont",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Mais à tous ceux qui l'ont reçue, à ceux qui croient en son nom, elle a donné le pouvoir de devenir enfants de Dieu.\" — Jean 1:12",
          "explanation": "Le pont existe. La question est de savoir s'ils vont le traverser. Recevoir Jésus signifie choisir de quitter son côté et de marcher vers le côté de Dieu — en faisant entièrement confiance à Jésus comme Seigneur et Sauveur. C'est une décision unique qui change tout pour toujours.",
          "tip": "Demandez : \"Le pont est là. Jésus a tout accompli. La seule question est : vas-tu le traverser ? Voudrais-tu prier et le recevoir maintenant même ?\""
        }
      ]
    },
    {
      "name": "Les Trois Cercles",
      "desc": "La méthode des Trois Cercles (aussi appelée l'Histoire de Dieu) a été développée par Jimmy Scroggins. Elle utilise trois cercles superposés pour expliquer le dessein de Dieu, la souffrance du péché, et l'évangile. Parfaite pour des échanges naturels et informels.",
      "steps": [
        {
          "title": "Cercle 1 — Le dessein de Dieu",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"Dieu vit tout ce qu'il avait fait et voici, cela était très bon.\" — Genèse 1:31",
          "explanation": "Dessinez un cercle. Notez-y LE DESSEIN DE DIEU. Au commencement, tout a été créé parfaitement. L'humanité était en relation parfaite avec Dieu, avec les autres, et avec la création. Nous avons été créés à son image — pour l'amour, le sens, le but et la plénitude. C'était le dessein originel.",
          "tip": "Demandez : \"Crois-tu que les gens sont faits pour quelque chose de mieux que ce que l'on voit dans le monde ? C'est cela que nous cherchons — ce dessein originel.\""
        },
        {
          "title": "Cercle 2 — La souffrance du péché",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"Car tous ont péché et sont privés de la gloire de Dieu.\" — Romains 3:23",
          "explanation": "Dessinez un cercle brisé, séparé du premier. Notez-y LA SOUFFRANCE / LE BRISEMENT. Quand l'humanité a choisi le péché, elle s'est éloignée du dessein de Dieu. Cela affecte tout : les relations, l'identité, la société, le monde entier. Nous le ressentons — dans le vide, la dépendance, les conflits, le deuil et la mort. Nous savons tous que quelque chose ne va pas.",
          "tip": "Dites : \"Regarde le monde — corruption, familles brisées, dépendance, guerre. Ce n'est pas ce pour quoi nous avons été conçus. Quelque chose a très mal tourné.\" Reliez cela à son histoire personnelle s'il/elle se confie ouvertement."
        },
        {
          "title": "Étape 3 — Nos tentatives brisées de guérison",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"Telle voie paraît droite à un homme, mais son issue, c'est la voie de la mort.\" — Proverbes 14:12",
          "explanation": "Les gens essaient d'échapper seuls à leur souffrance. Dessinez des flèches qui sortent du cercle brisé mais qui reviennent en boucle — argent, succès, relations, religion, plaisir. Ils se sentent mieux un moment, puis retombent dans le même vide. Les solutions humaines sont des cycles, pas des échappatoires.",
          "tip": "Demandez doucement : \"As-tu déjà essayé de remplir ce vide avec quelque chose — et cela a marché un temps, puis s'est arrêté ?\" La plupart des gens s'y reconnaîtront immédiatement."
        },
        {
          "title": "Cercle 3 — L'évangile",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.\" — Jean 3:16",
          "explanation": "Dessinez une croix entre le cercle brisé et le cercle du dessein de Dieu, avec une flèche menant de la souffrance vers le dessein. Jésus est entré dans notre souffrance — a vécu parfaitement, est mort pour notre péché, est ressuscité — et a ouvert un chemin de retour vers le dessein de Dieu. Ce n'est pas de l'amélioration personnelle. C'est Dieu qui vient à nous.",
          "tip": "Dites : \"Jésus ne s'est pas tenu en dehors de notre souffrance en nous appelant à venir à lui. Il est ENTRÉ dans notre souffrance et a payé le prix pour nous ramener. C'est différent de toute autre religion.\""
        },
        {
          "title": "Étape 5 — Poursuivre et suivre",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Repentez-vous, et croyez à la bonne nouvelle.\" — Marc 1:15",
          "explanation": "Dessinez une flèche partant du cercle de souffrance, traversant la croix, jusqu'au cercle du dessein de Dieu. C'est la réponse : Se repentir — se détourner des tentatives brisées de guérison. Croire — faire confiance au fait que Jésus est le chemin du retour. Suivre — vivre en relation continue avec lui. Le salut n'est pas seulement un instant, c'est une nouvelle direction.",
          "tip": "Demandez : \"Dans quel cercle es-tu en ce moment — le dessein de Dieu, ou la souffrance ? Voudrais-tu faire le pas à travers la croix pour retrouver ce pour quoi tu as été conçu ?\""
        }
      ]
    }
  ],
  "sw": [
    {
      "name": "Njia ya Warumi",
      "desc": "Njia ya Warumi hutumia mistari mitano muhimu kutoka kitabu cha Warumi kumwongoza mtu kutoka kuelewa dhambi yake hadi kupokea wokovu. Ni rahisi, imejikita katika Maandiko, na rahisi kukumbuka.",
      "steps": [
        {
          "title": "Hatua 1 — Kila Mtu Ametenda Dhambi",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"Kwa maana wote wamefanya dhambi, na kupungukiwa na utukufu wa Mungu.\" — Warumi 3:23",
          "explanation": "Anza hapa. Hii inaweka msingi wa pamoja — hushambulii mtu, unajumuisha wewe mwenyewe. Kila mtu, wewe pamoja, ametenda dhambi. Dhambi ina maana ya kupungukiwa na kiwango kamili cha Mungu. Hakuna aliye tofauti.",
          "tip": "Sema kwa upole: \"Biblia inasema sisi sote — mimi pamoja — tumetenda dhambi na kupungukiwa na kile Mungu alichokusudia kwa maisha yetu.\""
        },
        {
          "title": "Hatua 2 — Dhambi Ina Matokeo",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"Kwa kuwa mshahara wa dhambi ni mauti; bali karama ya Mungu ni uzima wa milele katika Kristo Yesu Bwana wetu.\" — Warumi 6:23",
          "explanation": "Dhambi si tabia tu — inalipa mshahara: mauti. Mgawanyiko wa kiroho na Mungu sasa na milele. LAKINI — angalia tofauti hiyo. Mstari huo huo una suluhisho: karama ya Mungu ni uzima wa milele. Hii ndiyo mabadiliko kutoka habari mbaya kwenda habari njema.",
          "tip": "Simama kwenye neno \"karama\". Uliza: \"Umewahi kukataa zawadi? Zawadi ni bure — unahitaji tu kuipokea.\""
        },
        {
          "title": "Hatua 3 — Mungu Alionyesha Upendo Wake",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"Lakini Mungu aonyesha upendo wake mwenyewe kwetu sisi, kwa kuwa Kristo alikufa kwa ajili yetu, tulipokuwa tungali wenye dhambi.\" — Warumi 5:8",
          "explanation": "Mungu hakusubiri tuboreshwe kwanza. Tulipokuwa bado wenye dhambi — kwenye hali yetu mbaya zaidi — Kristo alikufa. Hii ni injili katika sentensi moja. Si dini. Si kujiboresha. Mungu akitenda kwanza, kwa upendo, kwa niaba yetu.",
          "tip": "Sisitiza wakati: \"Tulipokuwa BADO wenye dhambi. Si baada ya kujisafisha. Kabla hata hatujauliza.\""
        },
        {
          "title": "Hatua 4 — Ungama na Amini",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"Kwa sababu ukimkiri Yesu kwa kinywa chako kwamba yeye ni Bwana, na kuamini moyoni mwako ya kuwa Mungu alimfufua katika wafu, utaokoka.\" — Warumi 10:9",
          "explanation": "Wokovu una sehemu mbili: ukiri kwa kinywa na imani ya moyoni. Ni wa ndani (imani halisi) na wa nje (ukiri hadharani). Hii ndiyo mwaliko. Hii ndiyo hatua wanayochukua.",
          "tip": "Uliza: \"Unaamini kwamba Yesu alikufa kwa dhambi zako na akafufuka?\" Kama ndiyo: \"Ungependa kumkiri kama Bwana sasa hivi?\""
        },
        {
          "title": "Hatua 5 — Ongoza Maombi",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"Kwa maana kila atakayeliitia jina la Bwana ataokoka.\" — Warumi 10:13",
          "explanation": "Waongoze katika maombi rahisi. Hawahitaji maneno ya kifasaha. Kinachohesabika ni unyofu wa moyo wao. Baada ya kuomba, thibitisha kilichotokea — sasa ni watoto wa Mungu. Kisha uwaunganishe na kanisa.",
          "tip": "Mfano wa maombi: \"Bwana Yesu, naamini ulikufa kwa dhambi zangu na ukafufuka. Nakukiri kama Bwana. Nisamehe na uje moyoni mwangu. Napokea uzima wa milele. Amina.\" Kisha sema: \"Kama ulimaanisha hivyo, sasa umeokoka.\""
        }
      ]
    },
    {
      "name": "Daraja",
      "desc": "Mchoro wa Daraja ni chombo cha kuona kinachoonyesha pengo kati ya ubinadamu wenye dhambi na Mungu mtakatifu, na jinsi Yesu ndiye daraja pekee la kuvuka. Bora kwa wale wanaojifunza kwa kuona — unaweza kulichora kwenye karatasi au ardhini unapozungumza.",
      "steps": [
        {
          "title": "Hatua 1 — Chora Upande wa Mungu",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"Kwa maana Mungu ni mtakatifu.\" — 1 Petro 1:16 | \"Mungu ni upendo.\" — 1 Yohana 4:8",
          "explanation": "Chora jabali upande wa kulia. Andika MUNGU. Eleza: Mungu ni mtakatifu — mkamilifu kabisa bila dhambi. Mungu pia ni upendo — anatamani uhusiano nasi. Kweli hizi mbili zinaunda mvutano: Mungu anayetupenda lakini hawezi kupuuza dhambi yetu.",
          "tip": "Sema: \"Wazia bonde. Upande mmoja kuna Mungu — mtakatifu, mkamilifu, mwenye upendo. Chora nami kama una karatasi.\""
        },
        {
          "title": "Hatua 2 — Chora Upande wa Binadamu",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"Kwa maana wote wamefanya dhambi, na kupungukiwa na utukufu wa Mungu.\" — Warumi 3:23",
          "explanation": "Chora jabali upande wa kushoto. Andika SISI / UBINADAMU. Kuna pengo kati ya pande hizo mbili — pengo hilo ni dhambi. Tuliumbwa kwa ajili ya uhusiano na Mungu, lakini dhambi ilivunja uhusiano huo. Haijalishi tunajaribu vipi kuwa wema, hatuwezi kuruka kuvuka.",
          "tip": "Chora mtu upande wa kushoto akijaribu kuruka kuvuka — lakini akianguka bondeni. \"Hakuna jitihada ya kibinadamu inayoweza kuziba pengo hili. Si dini, si matendo mema, si elimu.\""
        },
        {
          "title": "Hatua 3 — Suluhisho za Kibinadamu Hazifanyi Kazi",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"Iko njia ionekanayo kuwa sawa mbele ya mtu, lakini mwisho wake ni njia za mauti.\" — Mithali 14:12",
          "explanation": "Watu hujaribu njia nyingi kumfikia Mungu: matendo mema, dini, kujiboresha, pesa, umaarufu. Chora hizi kama mbao fupi zinazoanguka bondeni. Hakuna inayofika. Pengo hilo si la jitihada — ni pengo la dhambi ambalo Mungu pekee anaweza kulifunga.",
          "tip": "Uliza: \"Unadhani ni nini kinachompeleka mtu mbinguni?\" Sikiliza kikamilifu. Kisha onyesha kwa upole kwa nini mbao hizo hazitoshi."
        },
        {
          "title": "Hatua 4 — Yesu Ndiye Daraja",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Yesu akamwambia, Mimi ndimi njia, na kweli, na uzima; mtu haji kwa Baba, ila kwa njia yangu.\" — Yohana 14:6",
          "explanation": "Chora msalaba uliolala kuvuka bonde — ukiunganisha pande zote mbili. Huyo ndiye Yesu. Yeye ni Mungu kamili na binadamu kamili — pekee aliyeweza kuziba pengo hilo. Kifo chake kililipa dhambi zetu. Ufufuo wake ulithibitisha kuwa ilifanya kazi. Daraja limejengwa. Limefunguliwa. Ni bure.",
          "tip": "Chora msalaba ukiunganisha majabali yote mawili. \"Yesu si mmoja tu wa njia nyingi. YEYE NDIYE njia. Daraja limejengwa. Lakini lazima uchague kulivuka.\""
        },
        {
          "title": "Hatua 5 — Vuka Daraja",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Bali wote waliompokea aliwapa uwezo wa kufanyika watoto wa Mungu, ndio wale waliaminio jina lake.\" — Yohana 1:12",
          "explanation": "Daraja lipo. Swali ni je watalivuka. Kumpokea Yesu kunamaanisha kuchagua kuacha upande wako na kutembea kuelekea upande wa Mungu — ukimwamini Yesu kikamilifu kama Bwana na Mwokozi. Ni uamuzi wa mara moja unaobadilisha kila kitu milele.",
          "tip": "Uliza: \"Daraja lipo. Yesu amekwisha fanya kila kitu. Swali pekee ni: utavuka? Ungependa kuomba na kumpokea sasa hivi?\""
        }
      ]
    },
    {
      "name": "Miduara Mitatu",
      "desc": "Njia ya Miduara Mitatu (pia inaitwa Hadithi ya Mungu) ilitengenezwa na Jimmy Scroggins. Inatumia miduara mitatu inayopishana kueleza mpango wa Mungu, uvunjifu, na injili. Bora kwa mazungumzo ya kawaida, ya asili.",
      "steps": [
        {
          "title": "Duara 1 — Mpango wa Mungu",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"Mungu akaona kila kitu alichokifanya, na tazama, ni chema sana.\" — Mwanzo 1:31",
          "explanation": "Chora duara. Andika MPANGO WA MUNGU. Mwanzoni, kila kitu kiliumbwa kikamilifu. Binadamu alikuwa katika uhusiano kamili na Mungu, na wenzake, na uumbaji. Tuliumbwa kwa mfano wake — kwa upendo, kusudi, maana, na utimilifu. Huo ndio mpango wa asili.",
          "tip": "Uliza: \"Unaamini watu wameumbwa kwa ajili ya kitu bora kuliko tunachokiona duniani? Hicho ndicho tunachotafuta — mpango huo wa asili.\""
        },
        {
          "title": "Duara 2 — Uvunjifu",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"Kwa maana wote wamefanya dhambi, na kupungukiwa na utukufu wa Mungu.\" — Warumi 3:23",
          "explanation": "Chora duara lililovunjika, likiwa mbali na la kwanza. Andika UVUNJIFU. Binadamu alipochagua dhambi, tulivunjika kutoka mpango wa Mungu. Uvunjifu huo unaathiri kila kitu: mahusiano, utambulisho, jamii, dunia yenyewe. Tunauhisi — katika utupu, uraibu, migogoro, huzuni, na mauti. Sote tunajua kuna kitu kibaya.",
          "tip": "Sema: \"Angalia dunia — ufisadi, familia zilizovunjika, uraibu, vita. Hicho si tulichoumbwa kwa ajili yake. Kitu kilienda vibaya sana.\" Unganisha na hadithi yao binafsi kama watashiriki kwa uwazi."
        },
        {
          "title": "Hatua 3 — Jitihada Zetu za Kujirekebisha",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"Iko njia ionekanayo kuwa sawa mbele ya mtu, lakini mwisho wake ni njia za mauti.\" — Mithali 14:12",
          "explanation": "Watu hujaribu kutoroka uvunjifu peke yao. Chora mishale ikitoka nje ya duara la uvunjifu lakini ikizunguka kurudi ndani — pesa, mafanikio, mahusiano, dini, anasa. Wanajisikia vizuri kwa muda mfupi, kisha kurudi kwenye utupu ule ule. Suluhisho za kibinadamu ni mizunguko, si njia za kutoroka.",
          "tip": "Uliza kwa upole: \"Umewahi kujaribu kujaza utupu huo na kitu — na ikafanya kazi kwa muda, kisha ikasimama?\" Watu wengi watajitambua mara moja."
        },
        {
          "title": "Duara 3 — Injili",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"Kwa maana jinsi hii Mungu aliupenda ulimwengu, hata akamtoa Mwanawe pekee, ili kila mtu amwaminiye asipotee, bali awe na uzima wa milele.\" — Yohana 3:16",
          "explanation": "Chora msalaba kati ya duara la uvunjifu na duara la mpango wa Mungu, na mshale ukielekea kutoka uvunjifu kurudi kwenye mpango. Yesu aliingia katika uvunjifu — aliishi kikamilifu, akafa kwa dhambi yetu, akafufuka — na akafungua njia ya kurudi kwenye mpango wa Mungu. Si kujiboresha. Mungu akija kwetu.",
          "tip": "Sema: \"Yesu hakusimama nje ya uvunjifu wetu akituita tuje kwake. Aliingia KATIKA uvunjifu wetu na kulipa gharama ili kuturudisha. Hiyo ni tofauti na dini nyingine yoyote.\""
        },
        {
          "title": "Hatua 5 — Fuata na Endelea",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Tubuni, mkaziamini habari njema.\" — Marko 1:15",
          "explanation": "Chora mshale kutoka duara la uvunjifu, kupitia msalaba, hadi duara la mpango wa Mungu. Hii ndiyo jibu: Tubu — geuka kutoka jitihada za kujirekebisha zilizovunjika. Amini — mwamini kuwa Yesu ndiye njia ya kurudi. Fuata — ishi katika uhusiano unaoendelea naye. Wokovu si tukio moja tu, ni mwelekeo mpya.",
          "tip": "Uliza: \"Uko duara gani sasa hivi — mpango wa Mungu, au uvunjifu? Ungependa kuchukua hatua kupitia msalaba kurudi kwenye ulichoumbwa kwa ajili yake?\""
        }
      ]
    }
  ],
  "ar": [
    {
      "name": "طريق رومية",
      "desc": "يستخدم طريق رومية خمس آيات رئيسية من سفر رومية لأخذ الشخص من فهم خطيته إلى نيل الخلاص. إنه بسيط، متجذر في الكتاب المقدس، وسهل الحفظ.",
      "steps": [
        {
          "title": "الخطوة ١ — الجميع أخطأوا",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"إذ الجميع أخطأوا وأعوزهم مجد الله.\" — رومية ٣:٢٣",
          "explanation": "ابدأ هنا. هذا يؤسس أرضية مشتركة — أنت لا تهاجم الشخص، بل تُدرج نفسك معه. الجميع، بمن فيهم أنت، أخطأوا. الخطية تعني التقصير عن معيار الله الكامل. لا أحد استثناء.",
          "tip": "قلها برفق: \"الكتاب المقدس يقول إننا جميعًا — بمن فيهم أنا — أخطأنا وقصّرنا عمّا أراده الله لحياتنا.\""
        },
        {
          "title": "الخطوة ٢ — للخطية عاقبة",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"لأن أجرة الخطية هي موت، وأما هبة الله فهي حياة أبدية بالمسيح يسوع ربنا.\" — رومية ٦:٢٣",
          "explanation": "الخطية ليست مجرد سلوك — بل تكسب أجرة: الموت. انفصال روحي عن الله الآن وإلى الأبد. لكن — لاحظ التباين. نفس الآية تحمل الحل: هبة الله هي الحياة الأبدية. هذه نقطة التحول من الخبر السيئ إلى الخبر السار.",
          "tip": "توقف عند كلمة \"هبة\". اسأل: \"هل رفضت هدية من قبل؟ الهدايا مجانية — عليك فقط أن تقبلها.\""
        },
        {
          "title": "الخطوة ٣ — أظهر الله محبته",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"ولكن الله بيّن محبته لنا، لأنه ونحن بعد خطاة مات المسيح لأجلنا.\" — رومية ٥:٨",
          "explanation": "لم ينتظر الله حتى نتحسّن. بينما كنا لا نزال خطاة — في أسوأ حالاتنا — مات المسيح. هذا هو الإنجيل في جملة واحدة. ليس دينًا. ليس تحسينًا ذاتيًا. الله يتحرك أولًا، بدافع المحبة، لأجلنا.",
          "tip": "ركّز على التوقيت: \"بينما كنا لا نزال خطاة. ليس بعد أن أصلحنا أنفسنا. حتى قبل أن نطلب.\""
        },
        {
          "title": "الخطوة ٤ — اعترف وآمن",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"لأنك إن اعترفت بفمك بالرب يسوع، وآمنت بقلبك أن الله أقامه من الأموات، خلصت.\" — رومية ١٠:٩",
          "explanation": "الخلاص له جزآن: الاعتراف بالفم والإيمان بالقلب. إنه داخلي (إيمان حقيقي) وخارجي (اعتراف علني) في آن واحد. هذه هي الدعوة. هذه هي الخطوة التي يتخذونها.",
          "tip": "اسأل: \"هل تؤمن أن يسوع مات عن خطاياك وقام؟\" إذا كانت الإجابة نعم: \"هل تود أن تعترف به ربًا الآن؟\""
        },
        {
          "title": "الخطوة ٥ — قُد الصلاة",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"لأن كل من يدعو باسم الرب يخلص.\" — رومية ١٠:١٣",
          "explanation": "قُدهم في صلاة بسيطة. لا تحتاج إلى كلمات معقدة. المهم هو صدق قلوبهم. بعد صلاتهم، أكّد ما حدث للتو — أنهم الآن أبناء الله. ثم اربطهم بكنيسة.",
          "tip": "مثال للصلاة: \"أيها الرب يسوع، أؤمن أنك مت عن خطاياي وقمت. أعترف بك ربًا. اغفر لي وادخل قلبي. أقبل الحياة الأبدية. آمين.\" ثم قل: \"إذا كنت تقصد ذلك، فأنت الآن مخلَّص.\""
        }
      ]
    },
    {
      "name": "الجسر",
      "desc": "رسم الجسر هو أداة بصرية تُظهر الفجوة بين الإنسانية الخاطئة والله القدوس، وكيف أن يسوع هو الجسر الوحيد لعبورها. مثالي للمتعلمين البصريين — يمكنك رسمه على ورقة أو على الأرض أثناء الحديث.",
      "steps": [
        {
          "title": "الخطوة ١ — ارسم جانب الله",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"لأن الله قدوس.\" — ١بطرس ١:١٦ | \"الله محبة.\" — ١يوحنا ٤:٨",
          "explanation": "ارسم منحدرًا على الجانب الأيمن. اكتب عليه \"الله\". اشرح: الله قدوس — كامل تمامًا بلا خطية. الله أيضًا محبة — يرغب في علاقة معنا. هاتان الحقيقتان تخلقان توترًا: إله يحبنا لكنه لا يستطيع تجاهل خطيتنا.",
          "tip": "قل: \"تخيل واديًا. على جانب واحد يوجد الله — قدوس، كامل، محب. ارسمه معي إن كان لديك ورقة.\""
        },
        {
          "title": "الخطوة ٢ — ارسم جانب الإنسانية",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"إذ الجميع أخطأوا وأعوزهم مجد الله.\" — رومية ٣:٢٣",
          "explanation": "ارسم منحدرًا على الجانب الأيسر. اكتب عليه \"نحن / الإنسانية\". هناك فجوة بين الجانبين — تلك الفجوة هي الخطية. خُلقنا من أجل علاقة مع الله، لكن الخطية كسرت تلك الصلة. مهما حاولنا أن نكون صالحين، لا يمكننا القفز عبرها.",
          "tip": "ارسم شخصًا على الجانب الأيسر يحاول القفز — لكنه يسقط في الوادي. \"لا يمكن لأي جهد بشري أن يسد هذه الفجوة. ليس الدين، ولا الأعمال الصالحة، ولا التعليم.\""
        },
        {
          "title": "الخطوة ٣ — الحلول البشرية لا تنجح",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"توجد طريق تظهر للإنسان مستقيمة، وعاقبتها طرق الموت.\" — أمثال ١٤:١٢",
          "explanation": "يحاول الناس طرقًا كثيرة للوصول إلى الله: الأعمال الصالحة، الدين، تحسين الذات، المال، الشهرة. ارسمها كألواح قصيرة تسقط في الوادي. لا شيء منها يصل. الفجوة ليست فجوة جهد — إنها فجوة خطية لا يستطيع سدها إلا الله.",
          "tip": "اسأل: \"برأيك ما الذي يوصل الإنسان إلى الجنة؟\" استمع جيدًا. ثم أظهر برفق لماذا تلك الألواح غير كافية."
        },
        {
          "title": "الخطوة ٤ — يسوع هو الجسر",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"قال له يسوع: أنا هو الطريق والحق والحياة. ليس أحد يأتي إلى الآب إلا بي.\" — يوحنا ١٤:٦",
          "explanation": "ارسم صليبًا ممدودًا عبر الوادي — يربط الجانبين. هذا هو يسوع. هو الله الكامل والإنسان الكامل — الوحيد القادر على سد الفجوة. موته دفع ثمن خطيتنا. قيامته أثبتت أن الأمر نجح. الجسر مبني. إنه مفتوح. إنه مجاني.",
          "tip": "ارسم الصليب يربط بين المنحدرين. \"يسوع ليس أحد طرق كثيرة. هو الطريق. الجسر مبني. لكن عليك أن تختار أن تعبره.\""
        },
        {
          "title": "الخطوة ٥ — اعبر الجسر",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"وأما كل الذين قبلوه فأعطاهم سلطانًا أن يصيروا أولاد الله، أي المؤمنون باسمه.\" — يوحنا ١:١٢",
          "explanation": "الجسر موجود. السؤال هو هل سيعبرونه. قبول يسوع يعني اختيار ترك جانبك والمشي إلى جانب الله — بالثقة الكاملة بيسوع ربًا ومخلصًا. إنه قرار لمرة واحدة يغيّر كل شيء إلى الأبد.",
          "tip": "اسأل: \"الجسر موجود. يسوع أنجز كل شيء. السؤال الوحيد هو: هل ستعبر؟ هل تود أن تصلي وتقبله الآن؟\""
        }
      ]
    },
    {
      "name": "الدوائر الثلاث",
      "desc": "طريقة الدوائر الثلاث (تُسمى أيضًا قصة الله) طوّرها جيمي سكروجينز. تستخدم ثلاث دوائر متداخلة لشرح تصميم الله، والانكسار، والإنجيل. مثالية للمواقف الحوارية الطبيعية.",
      "steps": [
        {
          "title": "الدائرة ١ — تصميم الله",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"ورأى الله كل ما عمله فإذا هو حسن جدًا.\" — تكوين ١:٣١",
          "explanation": "ارسم دائرة. اكتب عليها \"تصميم الله\". في البدء، خُلق كل شيء بشكل كامل. كانت الإنسانية في علاقة كاملة مع الله، ومع بعضها البعض، ومع الخليقة. خُلقنا على صورته — من أجل المحبة والهدف والمعنى والكمال. كان ذلك هو التصميم الأصلي.",
          "tip": "اسأل: \"هل تؤمن أن الناس مُعدّون لشيء أفضل مما نراه في العالم؟ هذا ما نبحث عنه — ذلك التصميم الأصلي.\""
        },
        {
          "title": "الدائرة ٢ — الانكسار",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"إذ الجميع أخطأوا وأعوزهم مجد الله.\" — رومية ٣:٢٣",
          "explanation": "ارسم دائرة مكسورة بها شق، منفصلة عن الأولى. اكتب عليها \"الانكسار\". عندما اختارت الإنسانية الخطية، انكسرنا عن تصميم الله. هذا الانكسار يؤثر على كل شيء: العلاقات، الهوية، المجتمع، العالم نفسه. نشعر به — في الفراغ، الإدمان، الصراع، الحزن، والموت. كلنا نعلم أن هناك خطأ ما.",
          "tip": "قل: \"انظر إلى العالم — الفساد، الأسر المفككة، الإدمان، الحرب. هذا ليس ما صُممنا من أجله. حدث خطأ جسيم.\" اربط ذلك بقصته الشخصية إن شارك بانفتاح."
        },
        {
          "title": "الخطوة ٣ — محاولاتنا الفاشلة للتعافي",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"توجد طريق تظهر للإنسان مستقيمة، وعاقبتها طرق الموت.\" — أمثال ١٤:١٢",
          "explanation": "يحاول الناس الهروب من الانكسار بأنفسهم. ارسم أسهمًا تخرج من دائرة الانكسار لكنها تعود إليها مرة أخرى — المال، النجاح، العلاقات، الدين، الملذات. يشعرون بتحسن لفترة وجيزة، ثم يعودون إلى نفس الفراغ. الحلول البشرية دورات، وليست مخارج.",
          "tip": "اسأل برفق: \"هل حاولت يومًا ملء ذلك الفراغ بشيء ما — ونجح لفترة، ثم توقف؟\" سيجد معظم الناس أنفسهم في هذا فورًا."
        },
        {
          "title": "الدائرة ٣ — الإنجيل",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"لأنه هكذا أحب الله العالم حتى بذل ابنه الوحيد، لكي لا يهلك كل من يؤمن به، بل تكون له الحياة الأبدية.\" — يوحنا ٣:١٦",
          "explanation": "ارسم صليبًا بين دائرة الانكسار ودائرة تصميم الله، مع سهم يقود من الانكسار إلى التصميم. دخل يسوع الانكسار — عاش كاملًا، مات عن خطيتنا، قام — وفتح طريقًا للعودة إلى تصميم الله. ليس تحسينًا ذاتيًا. الله يأتي إلينا.",
          "tip": "قل: \"يسوع لم يقف خارج انكسارنا يدعونا لنأتي إليه. بل دخل انكسارنا ودفع الثمن ليعيدنا. هذا مختلف عن كل دين آخر.\""
        },
        {
          "title": "الخطوة ٥ — اتبع واستمر",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"توبوا وآمنوا بالإنجيل.\" — مرقس ١:١٥",
          "explanation": "ارسم سهمًا من دائرة الانكسار، عبر الصليب، إلى دائرة تصميم الله. هذه هي الاستجابة: التوبة — الابتعاد عن محاولات التعافي الفاشلة. الإيمان — الثقة بأن يسوع هو طريق العودة. المتابعة — العيش في علاقة مستمرة معه. الخلاص ليس لحظة فقط، بل اتجاه جديد.",
          "tip": "اسأل: \"في أي دائرة أنت الآن — تصميم الله، أم الانكسار؟ هل تود أن تخطو عبر الصليب وتعود إلى ما صُممت من أجله؟\""
        }
      ]
    }
  ],
  "yo": [
    {
      "name": "Ọna Romu",
      "desc": "Ọna Romu nlo ẹsẹ marun pataki lati inu iwe Romu lati mu eniyan lati oye ẹṣẹ won lo si gbigba igbala. O rọrun, o dale lori Iwe Mimọ, o si rọrun lati kọ sọkan.",
      "steps": [
        {
          "title": "Igbesẹ 1 — Gbogbo Eniyan Ti Ṣẹ",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"Nitoripe gbogbo eniyan ti ṣẹ, wọn si kọjá ogo Ọlọrun.\" — Romu 3:23",
          "explanation": "Bẹrẹ nibi. Eyi fi ipile gbogbo eniyan mulẹ — o ko kolu eniyan naa, o n fi ara rẹ kun. Gbogbo eniyan, iwọ pẹlu, ti ṣẹ. Ẹṣẹ tumọ si aikọja ipele pipe Ọlọrun. Ko si ẹnikẹni ti ko ni ipa ninu rẹ.",
          "tip": "Sọ ọ pẹlẹ: \"Bibeli sọ pe gbogbo wa — mo pẹlu — ti ṣẹ ti a si kọjá ohun ti Ọlọrun fẹ fun aye wa.\""
        },
        {
          "title": "Igbesẹ 2 — Ẹṣẹ Ni Abajade",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"Nitoripe owo-osu ẹṣẹ ni iku; ṣugbọn ẹbun ọfẹ Ọlọrun ni iye ainipekun ninu Kristi Jesu Oluwa wa.\" — Romu 6:23",
          "explanation": "Ẹṣẹ kii ṣe iwa lasan — o gba owo-osu: iku. Iyapa emi kuro lọdọ Ọlọrun ni bayii ati lailai. ṢUGBỌN — ṣakiyesi iyatọ naa. Ẹsẹ kanna ni ojutu naa: ẹbun Ọlọrun ni iye ainipekun. Eyi ni iyipada lati iroyin buburu si iroyin rere.",
          "tip": "Duro lori ọrọ naa \"ẹbun.\" Beere: \"Ṣe o ti kọ ẹbun kan ri? Awọn ẹbun jẹ ọfẹ — o kan nilo lati gba wọn.\""
        },
        {
          "title": "Igbesẹ 3 — Ọlọrun Fi Ifẹ Rẹ Han",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"Ṣugbọn Ọlọrun fi ife tirẹ hàn si wa, ni ọna pe, nigba ti a wà li awọn ẹlẹṣẹ sibẹ, Kristi kú fún wa.\" — Romu 5:8",
          "explanation": "Ọlọrun kò dúró de ki a dara siwaju. Nigba ti a wà ni ẹlẹṣẹ sibẹ — ni ipo wa ti o buru julọ — Kristi kú. Eyi ni ihinrere ninu gbolohun kan. Ki i ṣe esin. Ki i ṣe atunse ara ẹni. Ọlọrun n ṣe akọkọ, nitori ife, fun wa.",
          "tip": "Fi itọkasi si akoko naa: \"Nigba ti a WÀ SIBẸ ni ẹlẹṣẹ. Kii ṣe lẹhin ti a ti mọ ara wa. Kí a tó tilẹ béèrè.\""
        },
        {
          "title": "Igbesẹ 4 — Jẹwọ Ki O Si Gbagbọ",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"Nitoripe bi o bá jẹwọ Jesu gẹgẹ bi Oluwa pẹlu ẹnu rẹ, ti o si gbagbọ ninu ọkàn rẹ pe Ọlọrun jí i dide lati ọdọ awọn okú, a ó gbà ọ.\" — Romu 10:9",
          "explanation": "Igbala ni apa meji: ijẹwọ pẹlu ẹnu ati igbagbọ ninu ọkàn. O jẹ ti inu (igbagbọ gidi) ati ti ita (ijẹwọ gbangba) papọ. Eyi ni ipe. Eyi ni igbesẹ ti wọn gbọdọ gbé.",
          "tip": "Beere: \"Ṣe o gbagbọ pe Jesu kú fun ẹṣẹ rẹ ti o si jinde?\" Bi bẹẹ ni: \"Ṣe o fẹ jẹwọ rẹ gẹgẹ bi Oluwa nisisiyi?\""
        },
        {
          "title": "Igbesẹ 5 — Darí Adura",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"Nitoripe ẹnikẹni ti ó bá pè orukọ Oluwa ni a ó gbà.\" — Romu 10:13",
          "explanation": "Darí wọn ni adura ti o rọrun. Wọn kò nilo awọn ọrọ ti o gaju. Ohun ti ó ṣe pataki ni otitọ ọkàn wọn. Lẹhin ti wọn ba gbadura, jẹrisi ohun ti ṣẹlẹ — nisisiyi wọn jẹ ọmọ Ọlọrun. Lẹhinna so wọn pọ mọ ijọ kan.",
          "tip": "Àpẹẹrẹ adura: \"Oluwa Jesu, mo gbagbọ pe iwọ kú fun ẹṣẹ mi ti o si jinde. Mo jẹwọ rẹ gẹgẹ bi Oluwa. Dari ji mi ki o wọ inu ọkàn mi. Mo gba iye ainipekun. Amin.\" Lẹhinna sọ: \"Bi o bá tumọ si bẹẹ, o ti di aláàbò nisisiyi.\""
        }
      ]
    },
    {
      "name": "Afara",
      "desc": "Àpẹẹrẹ Afara jẹ ohun elo wiwo ti o fihan aafo laarin ẹda eniyan ẹlẹṣẹ ati Ọlọrun mimọ, ati bii Jesu ṣe jẹ afara kanṣoṣo lati kọja. O dara fun awọn akẹkọ wiwo — o le fa a sori iwe tabi ilẹ bi o ti n sọrọ.",
      "steps": [
        {
          "title": "Igbesẹ 1 — Fa Ẹgbẹ Ọlọrun",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"Nitoripe Ọlọrun jẹ mimọ.\" — 1 Peteru 1:16 | \"Ọlọrun ni ifẹ.\" — 1 Johanu 4:8",
          "explanation": "Fa ori-oke kan ni apa ọtun. Kọ ỌLỌRUN si i. Ṣàlàyé: Ọlọrun jẹ mimọ — pipe patapata laisi ẹṣẹ. Ọlọrun tun ni ifẹ — o fẹ ibaṣepọ pẹlu wa. Awọn otitọ meji wọnyi ṣẹda ìforígbárí: Ọlọrun kan ti o feran wa sugbon ti kò le fojú fo ẹṣẹ wa.",
          "tip": "Sọ: \"Ṣe àwòrán àfonífojì kan lọ́kàn rẹ. Ni ẹgbẹ kan Ọlọrun wà — mimọ, pipe, olufẹ. Fa a pẹlu mi bi o ba ni iwe.\""
        },
        {
          "title": "Igbesẹ 2 — Fa Ẹgbẹ Ẹda Eniyan",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"Nitoripe gbogbo eniyan ti ṣẹ, wọn si kọjá ogo Ọlọrun.\" — Romu 3:23",
          "explanation": "Fa ori-oke kan ni apa osi. Kọ WA / ẸDA ENIYAN si i. Aafo kan wa laarin awọn ẹgbẹ mejeeji — aafo yẹn ni ẹṣẹ. A dá wa fun ibaṣepọ pẹlu Ọlọrun, ṣugbọn ẹṣẹ da ibaṣepọ yẹn. Bi a ṣe le dara to, a kò le fo kọja.",
          "tip": "Fa eniyan ni apa osi n gbiyanju lati fo kọja — ṣugbọn ti n bọ sinu àfonífojì. \"Kò si igbiyanju eniyan ti o le sopọ aafo yii. Ki i ṣe esin, ki i ṣe iṣẹ rere, ki i ṣe ẹkọ.\""
        },
        {
          "title": "Igbesẹ 3 — Awọn Ojutu Eniyan Ko Ṣiṣẹ",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"Ọna kan wà ti o dabi ẹni pe o tọ lọdọ eniyan, ṣugbọn opin rẹ ni ọna iku.\" — Owe 14:12",
          "explanation": "Awọn eniyan gbiyanju ọpọlọpọ ọna lati de ọdọ Ọlọrun: iṣẹ rere, esin, atunse ara ẹni, owo, olokiki. Fa iwọnyi bi awọn pákó kukuru ti n bọ sinu àfonífojì. Ko si ọkan ninu wọn ti o de. Aafo naa kii ṣe aafo igbiyanju — o jẹ aafo ẹṣẹ ti Ọlọrun nikan le pa.",
          "tip": "Beere: \"Kini o ro pe o mu eniyan lọ si ọrun?\" Tẹtisi ni kikun. Lẹhinna fi pẹlẹ hàn idi ti awọn pákó wọnyẹn kò to."
        },
        {
          "title": "Igbesẹ 4 — Jesu Ni Afara",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Jesu wi fún un pe, Emi ni ọna, ati otitọ, ati iye: ẹnikẹni kò tọ̀ Baba wá bikoṣe nipasẹ mi.\" — Johanu 14:6",
          "explanation": "Fa agbelebu kan ti o gbé kọja àfonífojì — ti o so awọn ẹgbẹ mejeeji pọ. Iyẹn ni Jesu. Oun ni Ọlọrun patapata ati eniyan patapata — ẹni kanṣoṣo ti o le fẹ aafo naa. Iku rẹ san owo fun ẹṣẹ wa. Àjinde rẹ jẹri pe o ṣiṣẹ. Afara naa ti kọ. O ṣí sílẹ̀. Ọfẹ ni.",
          "tip": "Fa agbelebu ti o so awọn ori-oke mejeeji pọ. \"Jesu kii ṣe ọkan ninu ọpọlọpọ ọna. OUN NI ọna naa. Afara naa ti kọ. Ṣugbọn o gbọdọ yan lati rin kọja rẹ.\""
        },
        {
          "title": "Igbesẹ 5 — Kọja Afara",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Ṣugbọn awọn to gbà a, awọn ti o gbagbọ ninu orukọ rẹ, o fun wọn ni agbara lati di ọmọ Ọlọrun.\" — Johanu 1:12",
          "explanation": "Afara naa wà. Ibeere naa ni boya wọn yoo kọjá rẹ. Gbigba Jesu tumọ si yiyan lati fi ẹgbẹ tirẹ silẹ ki o si rin lọ si ẹgbẹ Ọlọrun — ni gbigbekele Jesu patapata gẹgẹ bi Oluwa ati Olugbala. O jẹ ipinnu ẹẹkan ti o yi ohun gbogbo pada lailai.",
          "tip": "Beere: \"Afara naa wà. Jesu ti ṣe ohun gbogbo. Ibeere kanṣoṣo ni: ṣe iwọ yoo kọja? Ṣe o fẹ gbadura ki o gbà a nisisiyi?\""
        }
      ]
    },
    {
      "name": "Àwọn Iyika Mẹta",
      "desc": "Ọna Àwọn Iyika Mẹta (ti a tun npe ni Itan Ọlọrun) ni Jimmy Scroggins ṣe apẹrẹ rẹ. O nlo iyika mẹta ti o bora ara wọn lati ṣàlàyé ètò Ọlọrun, ìṣubú, ati ihinrere. O dara fun awọn ibaraẹnisọrọ adayeba, lasan.",
      "steps": [
        {
          "title": "Iyika 1 — Ètò Ọlọrun",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"Ọlọrun sì wo ohun gbogbo tí ó ti ṣe, sì kíyèsíi, ó dára gidigidi.\" — Genesisi 1:31",
          "explanation": "Fa iyika kan. Kọ ÈTÒ ỌLỌRUN si i. Ni ibẹrẹ, ohun gbogbo ni a dá ni pipe. Ẹda eniyan wà ni ibaṣepọ pipe pẹlu Ọlọrun, pẹlu ara wọn, ati pẹlu ẹda. A dá wa ni àwòrán rẹ — fun ifẹ, idi, itumọ, ati ẹkunrẹrẹ. Iyẹn ni ètò atilẹba.",
          "tip": "Beere: \"Ṣe o gbagbọ pe a dá eniyan fun ohun kan ti o dara ju ohun ti a rí ni aye lọ? Iyẹn ni ohun ti a n wa — ètò atilẹba yẹn.\""
        },
        {
          "title": "Iyika 2 — Ìṣubú",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"Nitoripe gbogbo eniyan ti ṣẹ, wọn si kọjá ogo Ọlọrun.\" — Romu 3:23",
          "explanation": "Fa iyika ti o fọ pẹlu ẹdẹ kan, ti o yato si eyi akọkọ. Kọ ÌṢUBÚ si i. Nigba ti ẹda eniyan yan ẹṣẹ, a fọ kuro ninu ètò Ọlọrun. Ìṣubú yẹn kan ohun gbogbo: ibaṣepọ, idanimọ, awujọ, aye funra rẹ. A ni imọlara rẹ — ninu òfo, afẹsodi, ìjà, ìbànújẹ́, ati ikú. Gbogbo wa mọ pe nkankan ko tọ.",
          "tip": "Sọ: \"Wo aye — ibaje, awọn idile ti o fọ, afẹsodi, ogun. Iyẹn kii ṣe ohun ti a ṣe apẹrẹ fun. Nkankan burú gan-an.\" So o pọ mọ itan ti ara wọn bi wọn ba pín ni gbangba."
        },
        {
          "title": "Igbesẹ 3 — Awọn Igbiyanju Wa Ti O Fọ",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"Ọna kan wà ti o dabi ẹni pe o tọ lọdọ eniyan, ṣugbọn opin rẹ ni ọna iku.\" — Owe 14:12",
          "explanation": "Awọn eniyan gbiyanju lati sá kuro ninu ìṣubú funrarawọn. Fa awọn ọfà ti n jade kuro ninu iyika ìṣubú ṣugbọn ti n yipo pada wọle — owo, aṣeyọri, ibaṣepọ, esin, adùn. Wọn nímọ̀lára dídára fun ìgbà díẹ̀, lẹhinna pada si òfo kanna. Awọn ojutu eniyan jẹ àyíká, kii ṣe ọna abayo.",
          "tip": "Beere pẹlẹ: \"Ṣe o ti gbiyanju lati fi nkan kún òfo yẹn — ti o si ṣiṣẹ fun ìgbà díẹ̀, lẹhinna dawọ duro?\" Ọpọlọpọ eniyan yoo ni oye lẹsẹkẹsẹ."
        },
        {
          "title": "Iyika 3 — Ihinrere",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"Nitoripe Ọlọrun fẹran aye bayii, ti o fi Ọmọ rẹ kanṣoṣo fun, ki ẹnikẹni ti o ba gbagbọ ninu rẹ ki o má parun, bali ki o ni iye aiyérayé.\" — Johanu 3:16",
          "explanation": "Fa agbelebu laarin iyika ìṣubú ati iyika ètò Ọlọrun, pẹlu ọfà kan ti n darí lati ìṣubú pada si ètò. Jesu wọ inu ìṣubú — ó gbé ní pípé, ó kú fun ẹṣẹ wa, ó jinde — ó sì ṣí ọ̀nà pada sí ètò Ọlọrun. Ki i ṣe atunse ara ẹni. Ọlọrun n wá si ọdọ wa.",
          "tip": "Sọ: \"Jesu kò dúró ní ìta ìṣubú wa ní pípe wa láti wá sí ọ̀dọ̀ rẹ̀. Ó WỌ inu ìṣubú wa ó sì san owó láti mú wa padà. Iyẹn yatọ si esin miiran eyikeyi.\""
        },
        {
          "title": "Igbesẹ 5 — Lépa Kí O Sì Tẹ̀lé",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Ẹ ronupiwada, ki ẹ si gbagbọ ihinrere.\" — Marku 1:15",
          "explanation": "Fa ọfà kan lati iyika ìṣubú, la agbelebu já, lọ sí iyika ètò Ọlọrun. Eyi ni ìdáhùn náà: Ronupiwada — yipada kuro ninu awọn igbiyanju àtúnṣe tí ó fọ́. Gbagbọ — gbẹkẹle wipe Jesu ni ọ̀nà padà. Tẹ̀lé — gbé ní ìbáṣepọ̀ tí ń tẹ̀síwájú pẹ̀lú rẹ̀. Ìgbàlà kì í ṣe àkókò kan ṣoṣo, ó jẹ́ ìtọ́sọ́nà tuntun.",
          "tip": "Beere: \"Iyika wo ni o wà nisisiyi — ètò Ọlọrun, tabi ìṣubú? Ṣe o fẹ gbé igbesẹ la agbelebu já padà sí ohun tí a ṣe apẹrẹ rẹ fún?\""
        }
      ]
    }
  ],
  "ig": [
    {
      "name": "Ụzọ Rom",
      "desc": "Ụzọ Rom na-eji amaokwu ise dị mkpa site n'akwụkwọ Rom iji duru mmadụ site n'ịghọta mmehie ha ruo ịnata nzọpụta. Ọ dị mfe, o gbadoro ụkwụ n'Akwụkwọ Nsọ, ọ dịkwa mfe icheta.",
      "steps": [
        {
          "title": "Nzọụkwụ 1 — Onye Ọ Bụla Mehiere",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"N'ihi na mmadụ nile emeela mmehie, ha enweghịkwa otuto nke Chineke.\" — Rom 3:23",
          "explanation": "Malite ebe a. Nke a na-eguzobe ihe mmadụ niile nwere n'otu — ị naghị awakpo onye ahụ, ị na-etinye onwe gị. Onye ọ bụla, gị gụnyere, emeela mmehie. Mmehie pụtara ịda ada n'ozuzu ihe zuru oke Chineke. Ọ dịghị onye pụrụ iche.",
          "tip": "Kwuo ya nwayọọ: \"Akwụkwọ Nsọ kwuru na anyị niile — gụnyere m — emeela mmehie ma daa n'ihe Chineke chọrọ maka ndụ anyị.\""
        },
        {
          "title": "Nzọụkwụ 2 — Mmehie Nwere Nsonaazụ",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"N'ihi na ụgwọ ọrụ mmehie bụ ọnwụ, ma onyinye efu nke Chineke bụ ndụ ebighi ebi na Kraịst Jizọs Onyenwe anyị.\" — Rom 6:23",
          "explanation": "Mmehie abụghị naanị omume — ọ na-akwụ ụgwọ ọrụ: ọnwụ. Nkewa ime mmụọ site na Chineke ugbu a na mgbe ebighị ebi. MA — hụ ihe dị iche. Otu amaokwu ahụ nwere ngwọta: onyinye Chineke bụ ndụ ebighi ebi. Nke a bụ mgbanwe site n'akụkọ ọjọọ gaa n'akụkọ ọma.",
          "tip": "Kwụsị n'okwu ahụ \"onyinye.\" Jụọ: \"Ị jụla onyinye mbụ? Onyinye bụ n'efu — ọ dị mkpa naanị ka ị nata ha.\""
        },
        {
          "title": "Nzọụkwụ 3 — Chineke Gosipụtara Ịhụnanya Ya",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"Ma Chineke gosipụtara ịhụnanya ya n'ụzọ a, na mgbe anyị ka bụ ndị mmehie, Kraịst nwụọ n'ihi anyị.\" — Rom 5:8",
          "explanation": "Chineke echereghị ka anyị dịkwuo mma. Mgbe anyị ka bụ ndị mmehie — n'ọnọdụ anyị kacha njọ — Kraịst nwụrụ. Nke a bụ oziọma n'ime otu ahịrịokwu. Ọ bụghị okpukperechi. Ọ bụghị mmezi onwe onye. Chineke na-eme ihe mbụ, n'ihi ịhụnanya, n'ihi anyị.",
          "tip": "Mesie ike n'oge ahụ: \"Mgbe anyị KA bụ ndị mmehie. Ọ bụghị mgbe anyị dozichara onwe anyị. Tupu anyị arịọ.\""
        },
        {
          "title": "Nzọụkwụ 4 — Kwuo Ma Kwere",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"N'ihi na ọ bụrụ na ị kwụpụta Jizọs na ọ bụ Onyenwe anyị n'ọnụ gị, wee kwere n'obi gị na Chineke biliwo ya n'ọnwụ, a ga-ezọpụta gị.\" — Rom 10:9",
          "explanation": "Nzọpụta nwere akụkụ abụọ: nkwupụta site n'ọnụ na okwukwe nke obi. Ọ bụ ime ime (okwukwe n'ezie) na ọ bụ n'èzí (nkwupụta n'ihu ọha) n'otu oge. Nke a bụ ọkpụkpọ. Nke a bụ nzọụkwụ ha na-eme.",
          "tip": "Jụọ: \"Ị kwere na Jizọs nwụrụ maka mmehie gị wee bilie?\" Ọ bụrụ ee: \"Ị chọrọ ikwupụta ya dị ka Onyenwe ugbu a?\""
        },
        {
          "title": "Nzọụkwụ 5 — Duzie Ekpere",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"N'ihi na onye ọ bụla na-akpọku aha Onyenwe anyị ka a ga-azọpụta.\" — Rom 10:13",
          "explanation": "Duzie ha n'ekpere dị mfe. Ha achọghị okwu mara mma. Ihe dị mkpa bụ eziokwu nke obi ha. Mgbe ha kpechara ekpere, kwado ihe mere — ha bụ ugbu a ụmụ Chineke. Mgbe ahụ, jikọta ha na chọọchị.",
          "tip": "Ihe atụ ekpere: \"Onyenwe Jizọs, ekwere m na ị nwụrụ maka mmehie m wee bilie. Ana m ekwupụta gị dị ka Onyenwe. Gbaghara m wee bata n'obi m. Ana m anara ndụ ebighị ebi. Amen.\" Mgbe ahụ kwuo: \"Ọ bụrụ na i bu ya n'obi, a zọpụtala gị ugbu a.\""
        }
      ]
    },
    {
      "name": "Akwụ",
      "desc": "Ihe atụ Akwụ bụ ngwá ọrụ a na-ahụ anya na-egosi oghere dị n'etiti mmadụ mmehie na Chineke dị nsọ, na otú Jizọs si bụrụ naanị akwụ isi gafere ya. Ọ dị mma maka ndị na-amụ site n'ile anya — ị nwere ike ịse ya na akwụkwọ ma ọ bụ n'ala mgbe ị na-ekwu okwu.",
      "steps": [
        {
          "title": "Nzọụkwụ 1 — Se Akụkụ Chineke",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"N'ihi na Chineke dị nsọ.\" — 1 Pita 1:16 | \"Chineke bụ ịhụnanya.\" — 1 Jọn 4:8",
          "explanation": "Se ugwu dị n'akụkụ aka nri. Dee CHINEKE na ya. Kọwaa: Chineke dị nsọ — zuru oke kpamkpam na-enweghị mmehie. Chineke bụkwa ịhụnanya — ọ chọrọ mmekọrịta na anyị. Eziokwu abụọ a na-emepụta esemokwu: Chineke na-ahụ anyị n'anya ma na-apụghị ileghara mmehie anyị anya.",
          "tip": "Kwuo: \"Yiri ka ọ bụ ndagwurugwu. N'otu akụkụ Chineke nọ — dị nsọ, zuru oke, hụrụ n'anya. Se ya na m ma ọ bụrụ na i nwere akwụkwọ.\""
        },
        {
          "title": "Nzọụkwụ 2 — Se Akụkụ Ụmụ Mmadụ",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"N'ihi na mmadụ nile emeela mmehie, ha enweghịkwa otuto nke Chineke.\" — Rom 3:23",
          "explanation": "Se ugwu dị n'akụkụ aka ekpe. Dee ANYỊ / ỤMỤ MMADỤ na ya. Oghere dị n'etiti akụkụ abụọ ahụ — oghere ahụ bụ mmehie. E kere anyị maka mmekọrịta na Chineke, ma mmehie mebiri njikọ ahụ. N'agbanyeghị otú anyị si gbalịa ịdị mma, anyị apụghị ịwụli gafee.",
          "tip": "Se mmadụ n'akụkụ aka ekpe na-agbalị ịwụli gafee — ma na-adaba n'ime ndagwurugwu. \"Ọ dịghị mgbalị mmadụ pụrụ ijikọta oghere a. Ọ bụghị okpukperechi, ọ bụghị ezi omume, ọ bụghị agụmakwụkwọ.\""
        },
        {
          "title": "Nzọụkwụ 3 — Ngwọta Mmadụ Anaghị Arụ Ọrụ",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"Ụzọ dị nke ziri ezi n'anya mmadụ, ma ọgwụgwụ ya bụ ụzọ ọnwụ.\" — Ilu 14:12",
          "explanation": "Ndị mmadụ na-agbalị ọtụtụ ụzọ iji rute Chineke: ezi omume, okpukperechi, mmezi onwe onye, ego, ewu ewu. Se ha dị ka mbudo mkpirikpi na-adaba n'ime ndagwurugwu. Ọ dịghị nke na-eru. Oghere ahụ abụghị nke mgbalị — ọ bụ oghere mmehie naanị Chineke nwere ike imechi.",
          "tip": "Jụọ: \"Kedu ihe i chere na-eduba mmadụ n'eluigwe?\" Gee ntị kpamkpam. Mgbe ahụ, jiri nwayọọ gosi ihe mere mbudo ndị ahụ ji ezughị."
        },
        {
          "title": "Nzọụkwụ 4 — Jizọs Bụ Akwụ",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Jizọs sịrị ya: Abụ m ụzọ na eziokwu na ndụ. Onye ọ bụla abịaghị n'ebe Nna, ma ọ bụ site n'ụzọ m.\" — Jọn 14:6",
          "explanation": "Se obe dina gafee ndagwurugwu — na-ejikọta akụkụ abụọ ahụ. Nke ahụ bụ Jizọs. Ọ bụ Chineke zuru oke na mmadụ zuru oke — naanị onye pụrụ ijikọta oghere ahụ. Ọnwụ ya kwụrụ ụgwọ mmehie anyị. Mbilite n'ọnwụ ya gosiri na ọ rụrụ ọrụ. E wuola akwụ. Ọ ghere oghe. Ọ bụ n'efu.",
          "tip": "Se obe na-ejikọta ugwu abụọ ahụ. \"Jizọs abụghị otu n'ime ọtụtụ ụzọ. Ọ BỤ ụzọ ahụ. E wuola akwụ. Ma ị ga-ahọrọ ịgafe ya.\""
        },
        {
          "title": "Nzọụkwụ 5 — Gafee Akwụ",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Ma ndị nile natara ya, ndị kwere na aha ya, ọ nyere ha ike ịghọ ụmụ Chineke.\" — Jọn 1:12",
          "explanation": "Akwụ ahụ dị. Ajụjụ bụ ma ha ga-agafe ya. Ịnata Jizọs pụtara ịhọrọ ịhapụ akụkụ gị wee jee n'akụkụ Chineke — na-atụkwasị Jizọs obi kpamkpam dị ka Onyenwe na Onye Nzọpụta. Ọ bụ mkpebi otu ugboro na-agbanwe ihe niile ruo mgbe ebighi ebi.",
          "tip": "Jụọ: \"Akwụ ahụ dị. Jizọs emeela ihe niile. Naanị ajụjụ bụ: ị ga-agafe? Ị chọrọ ikpe ekpere ma nata ya ugbu a?\""
        }
      ]
    },
    {
      "name": "Okirikiri Atọ",
      "desc": "Ụzọ Okirikiri Atọ (a na-akpọkwa ya Akụkọ Chineke) bụ Jimmy Scroggins mepụtara. Ọ na-eji okirikiri atọ na-ekpuchi ibe ha ịkọwa atụmatụ Chineke, mgbawa, na oziọma. Kacha mma maka mkparịta ụka efu, nke sitere n'obi.",
      "steps": [
        {
          "title": "Okirikiri 1 — Atụmatụ Chineke",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"Chineke wee lee ihe niile o kere, ma lee, ọ dị nnọọ mma.\" — Jenesis 1:31",
          "explanation": "Se okirikiri. Dee ATỤMATỤ CHINEKE na ya. Na mmalite, e kere ihe niile n'ụzọ zuru oke. Ụmụ mmadụ nọ na mmekọrịta zuru oke na Chineke, na ibe ha, na okike. E kere anyị n'oyiyi ya — maka ịhụnanya, ebumnobi, ihe ọ pụtara, na izu oke. Nke ahụ bụ atụmatụ mbụ.",
          "tip": "Jụọ: \"Ị kwenyere na e kere mmadụ maka ihe ka mma karịa ihe anyị hụrụ n'ụwa? Nke ahụ bụ ihe anyị na-achọ — atụmatụ mbụ ahụ.\""
        },
        {
          "title": "Okirikiri 2 — Mgbawa",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"N'ihi na mmadụ nile emeela mmehie, ha enweghịkwa otuto nke Chineke.\" — Rom 3:23",
          "explanation": "Se okirikiri gbawara agbawa, kewapụrụ site n'nke mbụ. Dee MGBAWA na ya. Mgbe ụmụ mmadụ họọrọ mmehie, anyị si n'atụmatụ Chineke gbawa. Mgbawa ahụ na-emetụta ihe niile: mmekọrịta, njirimara, ọha mmadụ, ụwa n'onwe ya. Anyị na-enwe mmetụta ya — n'ime ihe efu, mmanye aka n'ihe, esemokwu, iru uju, na ọnwụ. Anyị niile maara na ihe adịghị mma.",
          "tip": "Kwuo: \"Lee ụwa — nrụrụ aka, ezinụlọ ndị gbawara agbawa, mmanye aka n'ihe, agha. Ọ bụghị ihe e kere anyị maka ya. Ọ dị njọ nke ukwuu.\" Jikọta ya na akụkọ nke onwe ha ma ọ bụrụ na ha kekọrịtara n'ime obi ha."
        },
        {
          "title": "Nzọụkwụ 3 — Mgbalị Anyị Iji Gbake Ọzọ",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"Ụzọ dị nke ziri ezi n'anya mmadụ, ma ọgwụgwụ ya bụ ụzọ ọnwụ.\" — Ilu 14:12",
          "explanation": "Ndị mmadụ na-agbalị ịgbanahụ mgbawa n'onwe ha. Se akụ na-apụ n'okirikiri mgbawa mana na-alaghachi azụ — ego, ihe ịga nke ọma, mmekọrịta, okpukperechi, mmasị anụ ahụ. Ha na-enwe mmetụta ọma nwa oge, mgbe ahụ na-alaghachi n'otu ihe efu ahụ. Ngwọta mmadụ bụ okirikiri, ọ bụghị ụzọ mgbapụ.",
          "tip": "Jụọ nwayọọ: \"Ị nwatụlarị ịgbalị iji ihe mejuputa ihe efu ahụ — ọ rụziri ọrụ nwa oge, mgbe ahụ akwụsị?\" Ọtụtụ mmadụ ga-aghọta ozugbo."
        },
        {
          "title": "Okirikiri 3 — Oziọma",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"N'ihi na Chineke hụrụ ụwa n'anya nke ukwuu, ọ nyere Ọmọ ya kanịoṣo, ka onye ọ bụla kwere na ya ghara ịla n'iyi kama ọ ga-enwe ndụ ebighi ebi.\" — Jọn 3:16",
          "explanation": "Se obe n'etiti okirikiri mgbawa na okirikiri atụmatụ Chineke, na akụ na-eduzi site na mgbawa laghachi n'atụmatụ. Jizọs banyere n'ime mgbawa — biri ndụ zuru oke, nwụọ n'ihi mmehie anyị, bilie ọzọ — meghepụtakwa ụzọ ịlaghachi n'atụmatụ Chineke. Ọ bụghị mmezi onwe onye. Chineke na-abịakwute anyị.",
          "tip": "Kwuo: \"Jizọs eguzoghị n'èzí mgbawa anyị na-akpọ anyị ka anyị bịakwute ya. Ọ BATARA n'ime mgbawa anyị wee kwụọ ụgwọ iji weghachite anyị. Nke ahụ dị iche na okpukperechi ọ bụla ọzọ.\""
        },
        {
          "title": "Nzọụkwụ 5 — Chụso Ma Soro",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Chegharịanụ, kwerekwanụ n'oziọma.\" — Mak 1:15",
          "explanation": "Se akụ site n'okirikiri mgbawa, gafee obe, ruo n'okirikiri atụmatụ Chineke. Nke a bụ nzaghachi ahụ: Chegharịa — chigharia site na mgbalị mgbake ọzọ ndị gbawara agbawa. Kwere — tụkwasị obi na Jizọs bụ ụzọ ịlaghachi. Soro — biri na mmekọrịta na-aga n'ihu na ya. Nzọpụta abụghị naanị otu oge, ọ bụ ntụzịaka ọhụrụ.",
          "tip": "Jụọ: \"Kedu okirikiri ị nọ ugbu a — atụmatụ Chineke, ka ọ bụ mgbawa? Ị chọrọ ịnabata nzọụkwụ site na obe laghachi n'ihe e kere gị maka ya?\""
        }
      ]
    }
  ],
  "ha": [
    {
      "name": "Hanyar Romawa",
      "desc": "Hanyar Romawa tana amfani da ayoyi guda biyar masu muhimmanci daga littafin Romawa don kai mutum daga fahimtar zunubinsa zuwa samun ceto. Yana da sauƙi, ya dogara da Nassi, kuma yana da sauƙin tunawa.",
      "steps": [
        {
          "title": "Mataki 1 — Kowa Ya Yi Zunubi",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"Gama dukansu sun yi zunubi, sun kuma kāsa isa ga ɗaukakar Allah.\" — Romawa 3:23",
          "explanation": "Fara nan. Wannan yana kafa tushen gama-gari — ba ka kai wa mutumin hari ba, kana haɗa kanka. Kowa, har da kai, ya yi zunubi. Zunubi na nufin kāsa isa ga cikakken ma'aunin Allah. Babu wanda ya bambanta.",
          "tip": "Faɗa da hankali: \"Littafi Mai Tsarki ya ce dukanmu — ni ma — mun yi zunubi mun kuma kāsa isa ga abin da Allah yake so domin rayuwarmu.\""
        },
        {
          "title": "Mataki 2 — Zunubi Yana Da Sakamako",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"Gama sakamakon zunubi mutuwa ne; amma baiwar Allah rai ne madawwami cikin Kristi Yesu Ubangijinmu.\" — Romawa 6:23",
          "explanation": "Zunubi ba hali kawai ba ne — yana samun sakamako: mutuwa. Rabuwa ta ruhaniya da Allah yanzu da har abada. AMMA — lura da bambanci. Aya guda ɗaya tana ɗauke da mafita: baiwar Allah rai madawwami ne. Wannan shine sauyi daga labari mara kyau zuwa labari mai daɗi.",
          "tip": "Tsaya a kalmar \"baiwa.\" Tambaya: \"Ka taɓa ƙin karɓar kyauta? Kyaututtuka kyauta ne — sai ka karɓa kawai.\""
        },
        {
          "title": "Mataki 3 — Allah Ya Nuna Ƙaunarsa",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"Amma Allah ya nuna ƙaunarsa gare mu, domin tun muna masu zunubi Kristi ya mutu dominmu.\" — Romawa 5:8",
          "explanation": "Allah bai jira mu inganta ba. Tun muna masu zunubi — a mafi munin halinmu — Kristi ya mutu. Wannan shine bishara a jimla ɗaya. Ba addini ba. Ba inganta kai ba. Allah yana aiki tukuna, don ƙauna, saboda mu.",
          "tip": "Ka jaddada lokacin: \"Tun muna HAR YANZU masu zunubi. Ba bayan mun tsaftace kanmu ba. Kafin ma mu roƙa.\""
        },
        {
          "title": "Mataki 4 — Yarda Da Bangaskiya",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"Gama in ka furta da bakinka cewa Yesu Ubangiji ne, ka kuma gaskata a zuciyarka cewa Allah ya tashe shi daga matattu, za a cece ka.\" — Romawa 10:9",
          "explanation": "Ceto yana da sassa biyu: furuci da baki da gaskatawa a zuciya. Yana da na ciki (ainihin bangaskiya) da na waje (yarda a fili) a lokaci guda. Wannan shine gayyata. Wannan shine matakin da za su ɗauka.",
          "tip": "Tambaya: \"Ka gaskata cewa Yesu ya mutu domin zunubanka kuma ya tashi?\" In eh: \"Kana son ka yarda da shi a matsayin Ubangiji yanzu?\""
        },
        {
          "title": "Mataki 5 — Jagoranci Addu'a",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"Gama duk wanda ya kira bisa sunan Ubangiji za a cece shi.\" — Romawa 10:13",
          "explanation": "Ka jagorance su cikin addu'a mai sauƙi. Ba sa buƙatar kalmomi masu ƙawata. Abin da yake da muhimmanci shine gaskiyar zuciyarsu. Bayan sun yi addu'a, tabbatar da abin da ya faru — su yanzu 'ya'yan Allah ne. Sannan ka haɗa su da coci.",
          "tip": "Misalin addu'a: \"Ubangiji Yesu, na gaskata ka mutu domin zunubaina kuma ka tashi. Na yarda da kai a matsayin Ubangiji. Ka gafarta mini ka shigo cikin zuciyata. Na karɓi rai madawwami. Amin.\" Sannan ka ce: \"In da gaske kake nufi, an cece ka yanzu.\""
        }
      ]
    },
    {
      "name": "Gadar",
      "desc": "Zanen Gada kayan aiki ne na gani wanda ke nuna gibin da ke tsakanin ɗan adam mai zunubi da Allah mai tsarki, da yadda Yesu shine kaɗai gada don ketarewa. Yana da kyau ga masu koyo ta gani — za ka iya zana shi a takarda ko a ƙasa yayin da kake magana.",
      "steps": [
        {
          "title": "Mataki 1 — Zana Gefen Allah",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"Gama Allah mai tsarki ne.\" — 1 Bitrus 1:16 | \"Allah ƙauna ne.\" — 1 Yohanna 4:8",
          "explanation": "Zana dutse a gefen dama. Rubuta ALLAH a kai. Bayyana: Allah mai tsarki ne — cikakke gaba ɗaya ba tare da zunubi ba. Allah kuma ƙauna ne — yana son alaƙa da mu. Waɗannan gaskiyoyi guda biyu suna haifar da tashin hankali: Allah wanda yake ƙaunarmu amma ba zai iya kau da kai daga zunubinmu ba.",
          "tip": "Ka ce: \"Ka yi tunanin kwazazzabo. A gefe guda akwai Allah — mai tsarki, cikakke, mai ƙauna. Zana tare da ni idan kana da takarda.\""
        },
        {
          "title": "Mataki 2 — Zana Gefen Ɗan Adam",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"Gama dukansu sun yi zunubi, sun kuma kāsa isa ga ɗaukakar Allah.\" — Romawa 3:23",
          "explanation": "Zana dutse a gefen hagu. Rubuta MU / ƊAN ADAM a kai. Akwai gibi tsakanin gefuna biyu — wannan gibin shine zunubi. An halicce mu domin alaƙa da Allah, amma zunubi ya karya wannan haɗin. Ko da yaya muke ƙoƙarin zama nagari, ba za mu iya tsalle mu ketare ba.",
          "tip": "Zana wani a gefen hagu yana ƙoƙarin tsalle ya ketare — amma yana faɗuwa cikin kwazazzabo. \"Babu ƙoƙarin ɗan adam da zai iya rufe wannan gibin. Ba addini ba, ba ayyuka nagari ba, ba ilimi ba.\""
        },
        {
          "title": "Mataki 3 — Mafita Na Ɗan Adam Ba Sa Aiki",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"Akwai hanyar da take kama da daidai ga mutum, amma ƙarshenta hanyoyin mutuwa ne.\" — Misalai 14:12",
          "explanation": "Mutane suna gwada hanyoyi da yawa don isa ga Allah: ayyuka nagari, addini, inganta kai, kuɗi, shahara. Zana waɗannan a matsayin ɗan gajerun katakai da suke faɗuwa cikin kwazazzabo. Babu ɗayansu da ya kai. Gibin ba na ƙoƙari ba ne — gibin zunubi ne wanda Allah kaɗai zai iya rufewa.",
          "tip": "Tambaya: \"Me kake tunani zai kai mutum sama?\" Saurara sosai. Sannan da hankali ka nuna dalilin da ya sa waɗancan katakai basu isa ba."
        },
        {
          "title": "Mataki 4 — Yesu Shine Gadar",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Yesu ya ce masa, Ni ne hanya, da gaskiya, da rai: ba wanda yake zuwa wurin Uba, sai ta wurina.\" — Yohanna 14:6",
          "explanation": "Zana gicciye da aka kwantar a kan kwazazzabo — yana haɗa gefuna biyu. Wannan shine Yesu. Shi ne cikakken Allah kuma cikakken mutum — kaɗai wanda zai iya ratsa gibin. Mutuwarsa ta biya zunubinmu. Tashinsa daga matattu ya tabbatar da cewa ya yi aiki. An gina gadar. Tana buɗe. Kyauta ce.",
          "tip": "Zana gicciye yana haɗa duwatsu biyu. \"Yesu ba ɗaya daga cikin hanyoyi da yawa ba ne. SHI NE hanyar. An gina gadar. Amma sai ka zaɓi ka ratsa ta.\""
        },
        {
          "title": "Mataki 5 — Ketare Gadar",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Amma dukan waɗanda suka karɓe shi, waɗanda suka gaskata da sunansa, ya ba su iko su zama 'ya'yan Allah.\" — Yohanna 1:12",
          "explanation": "Gadar tana can. Tambayar ita ce ko za su ketare ta. Karɓar Yesu na nufin zaɓar barin gefenka ka tafi zuwa gefen Allah — kana dogara da Yesu gabaɗaya a matsayin Ubangiji da Mai Ceto. Shawara ce ta sau ɗaya wadda take canza komai har abada.",
          "tip": "Tambaya: \"Gadar tana can. Yesu ya riga ya yi komai. Tambaya kawai ita ce: za ka ketare? Kana son ka yi addu'a ka karɓe shi yanzu?\""
        }
      ]
    },
    {
      "name": "Da'iru Uku",
      "desc": "Hanyar Da'iru Uku (wadda ake kira Labarin Allah) Jimmy Scroggins ne ya haɓaka ta. Tana amfani da da'iru uku masu mamayewa don bayyana tsarin Allah, karyewa, da bishara. Yana da kyau ga tattaunawa na yau da kullum, na dabi'a.",
      "steps": [
        {
          "title": "Da'irar 1 — Tsarin Allah",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"Allah kuwa ya ga dukan abin da ya yi, ga shi, yana da kyau ƙwarai.\" — Farawa 1:31",
          "explanation": "Zana da'ira. Rubuta TSARIN ALLAH a kai. Da farko, an halicci komai daidai. Bil Adama yana da cikakkiyar alaƙa da Allah, da junansu, da halitta. An halicce mu cikin kamanninsa — don ƙauna, manufa, ma'ana, da cikawa. Wannan shine tsarin asali.",
          "tip": "Tambaya: \"Kana gaskanta mutane an halicce su ne domin wani abu mafi kyau fiye da abin da muke gani a duniya? Wannan shine abin da muke nema — wannan tsari na asali.\""
        },
        {
          "title": "Da'irar 2 — Karyewa",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"Gama dukansu sun yi zunubi, sun kuma kāsa isa ga ɗaukakar Allah.\" — Romawa 3:23",
          "explanation": "Zana da'ira mai karyayye tare da tsaga, da ya rabu da na farko. Rubuta KARYEWA a kai. Lokacin da bil Adama suka zaɓi zunubi, mun karye daga tsarin Allah. Wannan karyewar tana shafar komai: alaƙa, asali, al'umma, duniya kanta. Muna jin ta — a cikin fanko, jaraba, faɗa, baƙin ciki, da mutuwa. Dukanmu mun san wani abu bai daidaita ba.",
          "tip": "Ka ce: \"Duba duniya — cin hanci, iyalai da suka rushe, jaraba, yaƙi. Wannan ba abin da aka tsara mu domin shi ba ne. Wani abu ya yi matuƙar ɓacewa.\" Ka haɗa shi da labarinsu na kansu idan sun buɗe kansu."
        },
        {
          "title": "Mataki 3 — Yunƙurin Warkarwa Da Muka Karye",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"Akwai hanyar da take kama da daidai ga mutum, amma ƙarshenta hanyoyin mutuwa ne.\" — Misalai 14:12",
          "explanation": "Mutane suna ƙoƙarin tserewa daga karyewa da kansu. Zana kibiyoyi suna fita daga da'irar karyewa amma suna dawowa cikinta — kuɗi, nasara, alaƙa, addini, jin daɗi. Suna jin daɗi na ɗan lokaci, sannan su koma zuwa fanko ɗaya. Mafitar ɗan adam zagaye ne, ba tsere ba.",
          "tip": "Tambaya da hankali: \"Ka taɓa ƙoƙarin cika wannan fanko da wani abu — kuma ya yi aiki na ɗan lokaci, sannan ya tsaya?\" Yawancin mutane za su gane nan take."
        },
        {
          "title": "Da'irar 3 — Bishara",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"Gama Allah ya ƙaunaci duniya har ya ba da makaɗaicin Ɗansa, domin duk wanda ya gaskata da shi kada ya halaka, sai dai ya sami rai madawwami.\" — Yohanna 3:16",
          "explanation": "Zana gicciye tsakanin da'irar karyewa da da'irar tsarin Allah, tare da kibiya daga karyewa zuwa tsarin. Yesu ya shiga cikin karyewa — ya rayu daidai, ya mutu domin zunubinmu, ya tashi — ya kuma buɗe hanya ta komawa zuwa tsarin Allah. Ba inganta kai ba. Allah yana zuwa gare mu.",
          "tip": "Ka ce: \"Yesu bai tsaya waje da karyewarmu yana kiran mu mu zo wurinsa ba. Ya SHIGA cikin karyewarmu ya kuma biya farashin domin ya dawo da mu. Wannan ya bambanta da kowane addini.\""
        },
        {
          "title": "Mataki 5 — Bi Kuma Ka Ci Gaba",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Ku tuba, ku kuma gaskata bisharar.\" — Markus 1:15",
          "explanation": "Zana kibiya daga da'irar karyewa, ta ratsa gicciye, zuwa da'irar tsarin Allah. Wannan shine amsar: Tuba — juya daga yunƙurin warkarwa da suka karye. Gaskata — dogara cewa Yesu shine hanyar dawowa. Bi — rayu cikin alaƙa mai ci gaba da shi. Ceto ba lokaci ɗaya ba ne kawai, sabon jagora ne.",
          "tip": "Tambaya: \"Wace da'ira kake yanzu — tsarin Allah, ko karyewa? Kana son ka ɗauki mataki ta ratsa gicciye ka koma zuwa abin da aka tsara ka domin shi?\""
        }
      ]
    }
  ],
  "pcm": [
    {
      "name": "Romans Road",
      "desc": "Romans Road dey use five key scriptures from di book of Romans to carry person from understanding im sin go reach salvation. E simple, e dey based for Bible, e easy to memorize.",
      "steps": [
        {
          "title": "Step 1 — Everybody Don Sin",
          "icon": "⚠️",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Start here. Dis one dey put everybody for one level — you no dey attack di person, you dey include yourself. Everybody, you sef, don sin. Sin mean say you no reach God im perfect standard. No be only some people.",
          "tip": "Talk am softly: \"Bible talk say all of us — me sef — don sin and we no reach wetin God want for our life.\""
        },
        {
          "title": "Step 2 — Sin Get Consequence",
          "icon": "💀",
          "color": "#e74c3c",
          "verse": "\"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.\" — Romans 6:23",
          "explanation": "Sin no be just behavior — e dey pay salary: death. Spiritual separation from God now and forever. BUT — check di contrast. Di same verse get di solution: God im gift na eternal life. Na dis be di change from bad news go good news.",
          "tip": "Pause for di word \"gift.\" Ask am: \"You don ever refuse gift before? Gift dey free — na just to receive am.\""
        },
        {
          "title": "Step 3 — God Show Im Love",
          "icon": "❤️",
          "color": "#e74c3c",
          "verse": "\"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.\" — Romans 5:8",
          "explanation": "God no wait make we improve first. While we still dey sin — for our worst state — Christ die. Na dis be di gospel for one sentence. E no be religion. E no be self-improvement. Na God dey move first, because of love, for us.",
          "tip": "Emphasize di timing: \"While we STILL dey sin. E no be after we don clean up. Even before we ask.\""
        },
        {
          "title": "Step 4 — Confess And Believe",
          "icon": "🗣️",
          "color": "#2ecc71",
          "verse": "\"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.\" — Romans 10:9",
          "explanation": "Salvation get two part: confession with mouth and belief for heart. E be inside (real faith) and outside (public confession) both at once. Na dis be di invitation. Na dis step dem go take.",
          "tip": "Ask am: \"You believe say Jesus die for your sin and rise again?\" If e talk yes: \"You wan confess Am as Lord right now?\""
        },
        {
          "title": "Step 5 — Lead Di Prayer",
          "icon": "🙏",
          "color": "#2ecc71",
          "verse": "\"For everyone who calls on the name of the Lord will be saved.\" — Romans 10:13",
          "explanation": "Lead dem for simple prayer. Dem no need big grammar. Wetin matter na di sincerity of dia heart. After dem pray, confirm wetin just happen — dem don become God pikin now. Then connect dem to church.",
          "tip": "Sample prayer: \"Lord Jesus, I believe say You die for my sin and You rise again. I confess You as Lord. Forgive me and come inside my heart. I receive eternal life. Amen.\" Then talk: \"If na so you mean am, you don save now.\""
        }
      ]
    },
    {
      "name": "Di Bridge",
      "desc": "Di Bridge Illustration na visual tool wey dey show di gap between sinful human and holy God, and how Jesus na di only bridge to cross am. E good for people wey learn better wit picture — you fit draw am for paper or for ground as you dey talk.",
      "steps": [
        {
          "title": "Step 1 — Draw God Side",
          "icon": "✝️",
          "color": "#f39c12",
          "verse": "\"For God is holy.\" — 1 Peter 1:16 | \"God is love.\" — 1 John 4:8",
          "explanation": "Draw one cliff for di right side. Write GOD for am. Explain am: God holy — Im perfect well well, no sin dey Am. God also na love — E want relationship with us. Dis two facts dey create tension: God wey love us but E no fit ignore our sin.",
          "tip": "Talk am: \"Imagine one valley. For one side, God dey — holy, perfect, loving. Draw am with me if you get paper.\""
        },
        {
          "title": "Step 2 — Draw Human Side",
          "icon": "👤",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Draw one cliff for di left side. Write US / HUMANITY for am. Gap dey between di two side — dat gap na sin. Dem create us to relate with God, but sin break dat connection. No matter how we try to good, we no fit jump cross am.",
          "tip": "Draw somebody for di left side wey dey try jump cross — but e dey fall inside di valley. \"No human effort fit bridge dis gap. E no be religion, e no be good work, e no be education.\""
        },
        {
          "title": "Step 3 — Human Solutions No Dey Work",
          "icon": "❌",
          "color": "#e74c3c",
          "verse": "\"There is a way that appears to be right, but in the end it leads to death.\" — Proverbs 14:12",
          "explanation": "People dey try many way to reach God: good work, religion, self-improvement, money, fame. Draw dis one as short plank wey dey fall inside valley. None of dem reach. Di gap no be gap of effort — na gap of sin wey only God fit close.",
          "tip": "Ask am: \"Wetin you think dey carry person go heaven?\" Listen well. Then gently show why dat planks no reach."
        },
        {
          "title": "Step 4 — Jesus Na Di Bridge",
          "icon": "🌉",
          "color": "#2ecc71",
          "verse": "\"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'\" — John 14:6",
          "explanation": "Draw one cross wey lie down cross di valley — e dey connect di two side. Na Jesus be dat. E be full God and full man — di only One wey fit span di gap. Im death pay for our sin. Im resurrection prove say e work. Dem don build di bridge. E dey open. E free.",
          "tip": "Draw di cross wey bridge di two cliff. \"Jesus no be one out of many way. NA IM BE di way. Dem don build di bridge. But you must choose to waka cross am.\""
        },
        {
          "title": "Step 5 — Cross Di Bridge",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.\" — John 1:12",
          "explanation": "Di bridge dey there. Di question na whether dem go cross am. To receive Jesus mean say you choose to leave your side go waka enter God side — you dey trust Jesus completely as Lord and Savior. Na one-time decision wey dey change everything forever.",
          "tip": "Ask am: \"Di bridge dey there. Jesus don do everything. Di only question be: you go cross? You wan pray receive Am right now?\""
        }
      ]
    },
    {
      "name": "Three Circles",
      "desc": "Di Three Circles method (wey dem still dey call God im Story) na Jimmy Scroggins develop am. E dey use three circles wey dey overlap to explain God im design, brokenness, and di gospel. E perfect for normal, natural gist.",
      "steps": [
        {
          "title": "Circle 1 — God Design",
          "icon": "⭕",
          "color": "#3498db",
          "verse": "\"God saw all that he had made, and it was very good.\" — Genesis 1:31",
          "explanation": "Draw one circle. Write GOD DESIGN for am. For beginning, dem create everything perfect. Human dey perfect relationship with God, with each other, and with creation. Dem create us for Im image — for love, purpose, meaning, and wholeness. Na dat be di original design.",
          "tip": "Ask am: \"You believe say people dey meant for something better pass wetin we dey see for world? Na dat we dey find — dat original design.\""
        },
        {
          "title": "Circle 2 — Brokenness",
          "icon": "💔",
          "color": "#e74c3c",
          "verse": "\"For all have sinned and fall short of the glory of God.\" — Romans 3:23",
          "explanation": "Draw one broken circle wit crack, wey separate from di first one. Write BROKENNESS for am. When human choose sin, we break from God design. Dat brokenness dey affect everything: relationship, identity, society, di world itself. We dey feel am — for emptiness, addiction, conflict, grief, and death. All of us know say something no correct.",
          "tip": "Talk am: \"Look di world — corruption, broken family, addiction, war. Na dat no be wetin dem design us for. Something go really wrong.\" Connect am to dia personal story if dem share open mind."
        },
        {
          "title": "Step 3 — Our Broken Recovery",
          "icon": "🔄",
          "color": "#e74c3c",
          "verse": "\"There is a way that appears to be right, but in the end it leads to death.\" — Proverbs 14:12",
          "explanation": "People dey try escape brokenness by demsef. Draw arrow wey dey commot from brokenness circle but e dey loop back inside — money, success, relationship, religion, pleasure. Dem dey feel better small time, then dem go back to di same emptiness. Human solution na cycle, e no be escape.",
          "tip": "Ask am gently: \"You don ever try fill dat emptiness with something — e work small time, then e stop?\" Most people go relate immediately."
        },
        {
          "title": "Circle 3 — Di Gospel",
          "icon": "✝️",
          "color": "#2ecc71",
          "verse": "\"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\" — John 3:16",
          "explanation": "Draw one cross between di broken circle and God design circle, wit arrow wey dey lead from brokenness back to design. Jesus enter brokenness — E live perfect, E die for our sin, E rise again — E open path back to God design. E no be self-improvement. Na God dey come to us.",
          "tip": "Talk am: \"Jesus no stand outside our brokenness dey call us make we come to Am. E ENTER our brokenness E pay di price to bring us back. Dat one different from any other religion.\""
        },
        {
          "title": "Step 5 — Pursue And Follow",
          "icon": "👣",
          "color": "#2ecc71",
          "verse": "\"Repent and believe the good news.\" — Mark 1:15",
          "explanation": "Draw arrow from di brokenness circle, cross di cross, go inside God design circle. Na dis be di response: Repent — turn away from di broken recovery wey you dey try. Believe — trust say Jesus na di way back. Follow — live for ongoing relationship with Am. Salvation no be just moment, na new direction.",
          "tip": "Ask am: \"Which circle you dey now — God design, or brokenness? You wan take step cross di cross go back to wetin dem design you for?\""
        }
      ]
    }
  ]
};

// Returns the 3-method training array for the current AppState.language,
// falling back to English if a language is not yet fully translated.
function getTrainingMethods() {
  const lang = (typeof AppState !== "undefined" && AppState.language) || "en";
  return TRAINING_METHODS_I18N[lang] || TRAINING_METHODS_I18N.en;
}
