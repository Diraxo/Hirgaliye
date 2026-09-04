// All site copy in English and Somali, in one place.
// NOTE: I'm not a native Somali speaker. The Somali text below is a solid,
// meaning-accurate pass, but have a native speaker skim it before launch —
// especially the hero headline, showcase, and FAQ, where natural phrasing
// matters most. Everything is plain text here, easy to hand-edit.

export const translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Systems',
      faq: 'FAQ',
      contact: 'Contact',
      startProject: 'Start a project',
    },
    hero: {
      badge: 'Hirgaliye — Somali for "the one who makes it real"',
      location: 'Jijiga, Ethiopia',
      reach: 'Serving clients worldwide',
      headline1: 'We build the system',
      headline2: 'your business actually needs.',
      paragraph:
        'Website, mobile app, or a complete business management system — designed around how your business actually works, from the first screen to the database underneath.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See what we build ↓',
    },
    showcase: {
      eyebrow: 'Systems we build',
      title: 'Built around the way a business actually runs.',
      subtitle:
        'A look at the systems we build — restaurant, gym, and school management. Shown here with sample data; yours is built around your real numbers.',
      statusLabels: {
        live: 'Working demo',
        progress: 'In progress',
        planned: 'Planned',
      },
      note: 'Sample data — your system runs on your real numbers',
      cta: 'Start a project',
      projects: [
        {
          id: 'restaurant',
          tag: 'RESTAURANT',
          name: 'Restaurant system',
          kicker: 'Restaurant & café management',
          status: 'live',
          stats: [
            { label: "Today's sales", value: '18,450 Birr' },
            { label: 'Orders', value: '127' },
            { label: 'Profit', value: '7,630 Birr' },
          ],
          modules: ['Orders', 'Tables', 'Menu', 'Inventory', 'Expenses', 'Staff', 'Reports'],
        },
        {
          id: 'gym',
          tag: 'GYM',
          name: 'Gym system',
          kicker: 'Membership & check-in management',
          status: 'progress',
          stats: [
            { label: 'Active members', value: '214' },
            { label: 'Monthly revenue', value: '42,000 Birr' },
            { label: 'Check-ins today', value: '89' },
          ],
          modules: ['Members', 'Subscriptions', 'Check-in', 'Payments', 'Trainers', 'Reports'],
        },
        {
          id: 'school',
          tag: 'SCHOOL',
          name: 'School system',
          kicker: 'Students, attendance & fees',
          status: 'planned',
          stats: [
            { label: 'Students', value: '640' },
            { label: 'Attendance', value: '96%' },
            { label: 'Fees collected', value: '78%' },
          ],
          modules: ['Students', 'Attendance', 'Grades', 'Fees', 'Parents', 'Staff'],
        },
      ],
    },
    services: {
      eyebrow: 'What we build',
      title: 'One team. From a website to a full business system.',
      subtitle: 'The same clean architecture underneath, whatever the industry on top.',
      items: [
        {
          tag: 'HOTEL',
          title: 'Hotel systems',
          desc: 'Booking engines, room management, guest check-in, and payments — all in one clean dashboard.',
        },
        {
          tag: 'FOOD',
          title: 'Restaurant & café systems',
          desc: 'Menus, table orders, kitchen tickets, and delivery tracking that keep service fast.',
        },
        {
          tag: 'SCHOOL',
          title: 'School systems',
          desc: 'Student records, attendance, grading, and parent communication in one portal.',
        },
        {
          tag: 'HEALTH',
          title: 'Hospital systems',
          desc: 'Patient records, appointment scheduling, and staff coordination, built for accuracy.',
        },
        {
          tag: 'WEB',
          title: 'Business websites',
          desc: 'Fast, modern, mobile-first sites that make a business look as good as it actually is.',
        },
        {
          tag: 'APP',
          title: 'Mobile applications',
          desc: 'iOS and Android apps for booking, ordering, or managing your business on the go.',
        },
      ],
    },
    guarantees: [
      {
        title: 'Built around your business',
        desc: 'We map how you actually work before we build a single screen — the system fits your workflow, not the other way around.',
      },
      {
        title: 'You own everything',
        desc: 'Full source code and deployment access are yours. No monthly subscription, nothing held back after handoff.',
      },
      {
        title: 'Fixed scope, no surprises',
        desc: 'You know the price and the deliverable before work starts — not after.',
      },
      {
        title: 'Direct line, no middlemen',
        desc: 'You talk to the person actually building your system, from first message to launch.',
      },
    ],
    story: {
      eyebrow: 'Why Hirgaliye exists',
      text: 'Most small businesses here still run on notebooks, spreadsheets, and memory. Hirgaliye replaces that with one clean system — built once, owned outright, and structured so it still makes sense a year from now.',
    },
    inspector: {
      eyebrow: 'Under the hood',
      title: 'How we engineer each system.',
      subtitle:
        'Pick a domain. This is the same architectural thinking that goes into every project — the principles are fixed even when the industry changes.',
      capabilities: [
        {
          id: 'booking',
          tag: 'HOTEL / CAFÉ',
          title: 'Booking & reservation engines',
          summary: 'Real-time availability that never double-books a room or a table.',
          stack: ['Server-side availability locking', 'Calendar conflict prevention', 'Integrated payment capture'],
          principles: [
            'Every booking hits a single source of truth — no two guests can claim the same slot.',
            'Payment and confirmation happen in one flow, not a follow-up email.',
            'Staff dashboard and guest-facing site read from the same live data.',
          ],
        },
        {
          id: 'health',
          tag: 'HOSPITAL',
          title: 'Secure records & care workflows',
          summary: 'Patient data that is accurate, access-controlled, and auditable.',
          stack: ['Role-based access control', 'Encrypted data at rest', 'Structured audit logging'],
          principles: [
            'Every record has an owner and a permission level — nothing is open by default.',
            'Appointment, staff, and patient data are modeled separately so one failure never cascades.',
            'Every change is logged with who, what, and when — no silent edits.',
          ],
        },
        {
          id: 'retail',
          tag: 'RESTAURANT',
          title: 'Live POS & inventory',
          summary: 'Orders, kitchen tickets, and stock counts that stay in sync in real time.',
          stack: ['Real-time order sync', 'Automatic inventory deduction', 'Daily sales reporting'],
          principles: [
            'An order placed at the counter reaches the kitchen instantly — no re-typing.',
            'Stock counts update the moment an item sells, not at end-of-day reconciliation.',
            'Reports are generated from the same ledger staff use, so numbers always match.',
          ],
        },
        {
          id: 'mobile',
          tag: 'MOBILE',
          title: 'Cross-platform applications',
          summary: 'One codebase, native feel, on both iOS and Android.',
          stack: ['Shared cross-platform codebase', 'Push notifications', 'Offline-first data sync'],
          principles: [
            'One team maintains one codebase instead of two apps drifting apart over time.',
            'The app stays usable with a weak connection and syncs cleanly once it reconnects.',
            'Built to submit cleanly to both the App Store and Google Play on the first pass.',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'How it runs',
      title: 'From an idea to a working system.',
      items: [
        { n: '01', title: 'Blueprint', desc: 'We map out exactly what your business needs — no guessing, no bloat.' },
        { n: '02', title: 'Build', desc: 'Clean, tested code, structured so it stays easy to change later.' },
        { n: '03', title: 'Deploy', desc: 'Live, fast, and secure — ready for real customers on day one.' },
        { n: '04', title: 'Support', desc: 'We stay reachable after launch. Systems need upkeep, not abandonment.' },
      ],
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Before you reach out.',
      items: [
        {
          q: 'How much does a system cost?',
          a: 'It depends on scope. We agree on the full price and deliverable before any work starts — no hourly surprises, no scope creep billed after the fact.',
        },
        {
          q: 'Do I pay a monthly subscription?',
          a: "No. You own the system outright once it's delivered. That's different from off-the-shelf SaaS tools that charge you every month forever.",
        },
        {
          q: 'How long does a project take?',
          a: 'A focused website typically takes 1–2 weeks. A full system (hotel, school, hospital, POS) usually takes 3–6 weeks depending on complexity.',
        },
        {
          q: 'Do you work with clients outside Ethiopia?',
          a: "Yes. We're based in Jijiga but work with clients anywhere — everything is handled remotely over WhatsApp and video calls.",
        },
        {
          q: 'What happens after launch?',
          a: "We stay reachable for support after handoff. Systems need occasional upkeep — we don't disappear once the invoice is paid.",
        },
        {
          q: 'Can you build something outside these industries?',
          a: 'Yes — hotels, restaurants, schools, and hospitals are our core focus, but the same architecture approach applies to most business systems. Ask us.',
        },
      ],
    },
    contact: {
      eyebrow: "Let's build it",
      title: 'Tell us about your business.',
      text: "Send a message on WhatsApp — tell us what your business does and what's slowing it down. We reply with next steps, usually the same day.",
      cta: 'Message us on WhatsApp',
    },
    commandMenu: {
      jumpTo: 'Jump to',
      chat: 'Chat on WhatsApp',
    },
  },

  so: {
    nav: {
      services: 'Adeegyada',
      work: 'Systemyada',
      faq: "Su'aalaha",
      contact: 'Xiriirka',
      startProject: 'Bilow mashruuc',
    },
    hero: {
      badge: 'Hirgaliye — kan wax dhabta u dhiga',
      location: 'Jijiga, Itoobiya',
      reach: 'U adeegna macaamiisha adduunka oo dhan',
      headline1: 'Waxaan kuu dhisnaa systemka',
      headline2: 'ganacsigaagu runtii u baahan yahay.',
      paragraph:
        'Website, app mobile ah, ama system buuxa oo maamulka ganacsiga — waxaan u dhisnaa si waafaqsan sida ganacsigaagu dhab ahaan u shaqeeyo, laga bilaabo shaashadda ugu horreysa ilaa database-ka hoose.',
      ctaPrimary: 'Bilow mashruuc',
      ctaSecondary: 'Eeg waxa aan dhisno ↓',
    },
    showcase: {
      eyebrow: 'Systemyada aan dhisno',
      title: 'Loo dhisay sida ganacsigu dhab ahaan u shaqeeyo.',
      subtitle:
        'Muuqaal ka mid ah systemyada aan dhisno — maamulka maqaayadda, gym, iyo dugsi. Halkan waxaa lagu tusayaa xog tijaabo ah; kaaga waxaa loo dhisaa tirooyinkaaga dhabta ah.',
      statusLabels: {
        live: 'Tusaale shaqaynaya',
        progress: 'Socda',
        planned: 'La qorsheeyay',
      },
      note: 'Xog tijaabo ah — systemkaagu wuxuu ku shaqeeyaa tirooyinkaaga dhabta ah',
      cta: 'Bilow mashruuc',
      projects: [
        {
          id: 'restaurant',
          tag: 'MAQAAYAD',
          name: 'Systemka maqaayadda',
          kicker: 'Maamulka maqaayadda & kafitariya',
          status: 'live',
          stats: [
            { label: 'Iibka maanta', value: '18,450 Birr' },
            { label: 'Dalabyada', value: '127' },
            { label: "Faa'iidada", value: '7,630 Birr' },
          ],
          modules: ['Dalabyada', 'Miisaska', 'Menu-ka', 'Kaydka', 'Kharashaadka', 'Shaqaalaha', 'Warbixinno'],
        },
        {
          id: 'gym',
          tag: 'GYM',
          name: 'Systemka gym-ka',
          kicker: 'Xubinnimo & diiwaan-gelin',
          status: 'progress',
          stats: [
            { label: 'Xubnaha firfircoon', value: '214' },
            { label: 'Dakhliga bishii', value: '42,000 Birr' },
            { label: "Soo-gelitaan maanta", value: '89' },
          ],
          modules: ['Xubnaha', 'Rukhsadaha', 'Soo-gelin', 'Lacag-bixin', 'Tababarayaal', 'Warbixinno'],
        },
        {
          id: 'school',
          tag: 'DUGSI',
          name: 'Systemka dugsiga',
          kicker: 'Arday, imaansho & lacago',
          status: 'planned',
          stats: [
            { label: 'Ardayda', value: '640' },
            { label: 'Imaanshaha', value: '96%' },
            { label: 'Lacagaha la aruuriyay', value: '78%' },
          ],
          modules: ['Ardayda', 'Imaanshaha', 'Buundooyinka', 'Lacagaha', 'Waalidiinta', 'Shaqaalaha'],
        },
      ],
    },
    services: {
      eyebrow: 'Waxa aan dhisno',
      title: 'Hal koox. Website ilaa system buuxa.',
      subtitle: 'Isla qaab-dhismeed nadiif ah oo hoose, warshad kastoo aad tahayba.',
      items: [
        {
          tag: 'HUDHEEL',
          title: 'Systemyada hudheellada',
          desc: 'Systemka buugsiga, maaraynta qolalka, diiwaan-gelinta martida, iyo lacag-bixinta — dhammaan hal dashboard nadiif ah.',
        },
        {
          tag: 'CUNTO',
          title: 'Systemyada maqaayadaha & kafitariyada',
          desc: 'Liistada cuntada, dalabka miisaska, waraaqaha jikada, iyo raadraaca gaarsiinta si adeeggu u dhaqso badnaado.',
        },
        {
          tag: 'DUGSI',
          title: 'Systemyada dugsiyada',
          desc: 'Diiwaanka ardayda, imaanshaha, buundada, iyo xiriirka waalidiinta oo dhammaan hal goobood ku yaal.',
        },
        {
          tag: 'CAAFIMAAD',
          title: 'Systemyada isbitaalada',
          desc: 'Diiwaanka bukaanka, jadwalka ballamaha, iyo isku-duwidda shaqaalaha, oo loo dhisay saxnaan.',
        },
        {
          tag: 'WEB',
          title: 'Websites ganacsiga',
          desc: 'Website dhaqso ah, casri ah, oo ugu horeyn loo dhisay mobilada, kuwaas oo ka dhigaya ganacsigaagu inuu u muuqdo sida uu dhab ahaan u yahay.',
        },
        {
          tag: 'APP',
          title: 'Apps mobilada',
          desc: 'Apps-ka iOS iyo Android ee loogu talagalay buugsiga, dalabka, ama maaraynta ganacsigaaga meel kasta oo aad joogtoba.',
        },
      ],
    },
    guarantees: [
      {
        title: 'Loo dhisay ganacsigaaga',
        desc: 'Waxaan fahamnaa sida aad dhab ahaan u shaqayso ka hor inta aanan dhisin hal shaashad — systemku wuxuu la jaanqaadaa hab-shaqeedkaaga, ma aha lidkeeda.',
      },
      {
        title: 'Adiga ayaa leh wax walba',
        desc: 'Code-ka buuxa iyo gelitaanka deployment-ka adigaa iska leh. Ma jiro lacag bille ah, waxbana dib looma hayo marka lagu soo gudbiyo.',
      },
      {
        title: "Qiime go'an, lama filaan ma jiro",
        desc: 'Waad ogtahay qiimaha iyo waxa la keeni doono ka hor inta aan shaqadu bilaaban — ma aha kadib.',
      },
      {
        title: 'Xiriir toos ah, dhexdhexaadiye ma jiro',
        desc: 'Waxaad si toos ah ula xiriirtaa qofka dhab ahaan dhisaya systemkaaga, fariinta ugu horreysa ilaa hirgelinta.',
      },
    ],
    story: {
      eyebrow: 'Sababta Hirgaliye u jirto',
      text: 'Ganacsiyo badan oo halkan ka jira weli waxay ku shaqeeyaan buugag, Excel, iyo xasuus. Hirgaliye waxay taas ku beddeshaa hal system oo nadiif ah — hal mar la dhiso, adiga oo gebi ahaan iska leh, oo loo qaabeeyay in uu wali macno samaynayo sanad kadib.',
    },
    inspector: {
      eyebrow: 'Waxa gudaha ka jira',
      title: 'Sida aan u dhisno system kasta.',
      subtitle:
        "Dooro qayb. Kani waa isla fikirka qaab-dhismeed ee ku jira mashruuc kasta — mabaadi'da way isku mid yihiin xitaa markay warshaduhu isbeddesho.",
      capabilities: [
        {
          id: 'booking',
          tag: 'HUDHEEL / KAFITEERIYA',
          title: 'Matoorrada buugsiga & bilaanka',
          summary: 'Diyaargarow waqti-dhabta ah oo aan waligiis labanlaaban qol ama miis.',
          stack: ['Xakameynta diyaarnimada server-ka', 'Ka hortagga iskhilaafka jadwalka', 'Qabashada lacag-bixinta oo isku-dhafan'],
          principles: [
            'Buugsi kastaa wuxuu maraa isha xaqiiqda kaliya — labo marti ma sheegan karaan isla booska.',
            'Lacag-bixinta iyo xaqiijinta waxay ku dhacaan hal socod — mana aha email la raaco kadib.',
            'Shaashadda shaqaalaha iyo boggga martida way ka akhrisan yihiin isla xogta firfircoon.',
          ],
        },
        {
          id: 'health',
          tag: 'ISBITAAL',
          title: 'Diiwaanno ammaan ah & habka daryeelka',
          summary: 'Xogta bukaanka oo sax ah, gelitaanka la xakameeyay, oo la baarayn karo.',
          stack: ['Xakameynta gelitaanka ku salaysan doorka', 'Xogta sirta ah marka ay xasilloonaato', 'Diiwaan-gelin baaritaan oo qaab-dhismeed leh'],
          principles: [
            'Diiwaan kastaa wuxuu leeyahay mid u iska leh iyo heer ogolaansho — waxba si toos ah furan ma aha.',
            'Ballanka, shaqaalaha, iyo xogta bukaanka si gooni ah ayaa loo qaabeeyaa si khalad hal meel ah uusan u faafin.',
            'Isbeddel kastaa waxaa lagu diiwaan geliyaa cidda, waxa, iyo goorta — wax beddelka aamusan ma jiro.',
          ],
        },
        {
          id: 'retail',
          tag: 'MAQAAYAD',
          title: 'POS firfircoon & kaydka',
          summary: 'Dalabka, waraaqaha jikada, iyo tirinta kaydka oo waqti dhab ah isku socda.',
          stack: ['Isku-xirnaanta dalabka waqtiga dhabta ah', 'Ka-goynta kaydka si toos ah', 'Warbixinta iibka maalinlaha ah'],
          principles: [
            'Dalab laga dhigo miiska wuxuu si degdeg ah ugu gaaraa jikada — dib looma qorin.',
            'Tirada kaydku waxay cusboonaysiisaa isla xilliga alaabta la iibiyo, mana aha dhamaadka maalinta.',
            'Warbixinnada waxaa laga sameeyaa isla diiwaanka shaqaaluhu isticmaalaan, sidaas darteed tirooyinku had iyo jeer waa mid.',
          ],
        },
        {
          id: 'mobile',
          tag: 'MOBILE',
          title: 'Apps ku shaqeeya dhammaan systemyada',
          summary: 'Hal code oo aasaasi ah, dareen asli ah, labadaba iOS iyo Android.',
          stack: ['Code wadaag ah oo dhammaan systemyada u shaqeeya', 'Ogeysiisyo (push notifications)', 'Isku-xirnaanta xogta marka aan internetku jirin'],
          principles: [
            "Hal koox ayaa dayactirta hal code, halkii ay laba app oo kala go'aya waqti ka dib jiri lahaayeen.",
            'Appku wuu shaqeeyaa xitaa marka internetku daciifsan yahay, wuxuuna si nadiif ah isu xiraa marka uu dib u xirmo.',
            'Loo dhisay si loogu gudbiyo si nadiif ah App Store iyo Google Play marka ugu horreysa.',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Sida ay u socoto',
      title: 'Laga bilaabo fikrad ilaa system shaqaynaya.',
      items: [
        { n: '01', title: 'Qorshaynta', desc: 'Waxaan si sax ah u qeexnaa waxa ganacsigaagu u baahan yahay — male-awaal ma jiro, wax dheeraad ahna ma jiraan.' },
        { n: '02', title: 'Dhisidda', desc: 'Code nadiif ah oo la tijaabiyay, oo loo qaabeeyay si uu u sii fududaado in dib loo beddelo.' },
        { n: '03', title: 'Bandhigidda', desc: 'Firfircoon, dhaqso ah, oo ammaan ah — diyaar u ah macaamiisha dhabta ah maalinta ugu horeysa.' },
        { n: '04', title: 'Taageero', desc: 'Waan kaa heli karnaa gudbinta ka dib. Systemyadu waxay u baahan yihiin dayactir, mana aha in la dayo.' },
      ],
    },
    faq: {
      eyebrow: "Su'aalaha guud",
      title: 'Ka hor inta aadan nala soo xiriirin.',
      items: [
        {
          q: 'Immisa ayay systemku kaa qaadanaysaa?',
          a: 'Waxay ku xiran tahay baaxadda. Waxaan isku raacnaa qiimaha buuxa iyo waxa la bixin doono ka hor intaan shaqadu bilaabmin — lama filaan sacaadeed ma jiraan, mana jiraan kharash dheeri ah oo la soo koobo shaqada dabadeed.',
        },
        {
          q: 'Ma bixin doonaa lacag bille ah?',
          a: 'Maya. Systemka gebi ahaanba waad leedahay marka lagu soo gudbiyo. Tani way ka duwan tahay qalabka SaaS ee diyaarka ah ee bil kasta lacag kaa qaadaya weligiis.',
        },
        {
          q: 'Immisa waqti ayuu mashruucu qaataa?',
          a: 'Website la xiisaynayo caadi ahaan wuxuu qaataa 1–2 toddobaad. System buuxa (hudheel, dugsi, isbitaal, POS) caadi ahaan wuxuu qaataa 3–6 toddobaad, taasoo ku xiran adeegsiga.',
        },
        {
          q: 'Ma la shaqaysaa macaamiisha ka baxsan Itoobiya?',
          a: 'Haa. Waxaan ku sugan nahay Jijiga laakiin waxaan la shaqaynaa macaamiisha meel kasta — wax walba waxaa lagu maareeyaa fog ahaan iyada oo la adeegsanayo WhatsApp iyo wicitaanno muuqaal leh.',
        },
        {
          q: 'Maxaa dhaca gudbinta ka dib?',
          a: 'Waxaan sii ahaanaynaa mid la heli karo taageero ahaan wareejinta ka dib. Systemyadu waxay u baahan yihiin dayactir mararka qaarkood — kuma libdhno marka biilku la bixiyo.',
        },
        {
          q: 'Ma dhisi kartaa wax ka baxsan warshadahaan?',
          a: 'Haa — hudheellada, maqaayadaha, dugsiyada, iyo isbitaalada ayaa ah diirada aan saarnahay, laakiin isla habka qaab-dhismeedka ayaa ku dabaqsan inta badan systemyada ganacsiga. Na weydii.',
        },
      ],
    },
    contact: {
      eyebrow: 'Aan dhisno',
      title: 'Noo sheeg wax ku saabsan ganacsigaaga.',
      text: 'Noo soo dir fariin WhatsApp — noo sheeg waxa ganacsigaagu qabto iyo waxa hor istaagaya. Waxaan kuugu soo celinaa tallaabooyinka xiga, badanaa isla maalinta.',
      cta: 'Nagala soo xiriir WhatsApp',
    },
    commandMenu: {
      jumpTo: 'U gudub',
      chat: 'Kula sheekayso WhatsApp',
    },
  },
}
