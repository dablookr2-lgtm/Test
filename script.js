/* ================= TOPIC + SET DATA ================= */
const allTopics = {

history: {
set1: [
{q:"मौर्य साम्राज्य का संस्थापक कौन था?",options:["चंद्रगुप्त मौर्य","अशोक","हर्षवर्धन","समुद्रगुप्त"],answer:0,exp:"चंद्रगुप्त मौर्य ने मौर्य साम्राज्य बनाया"},
{q:"अशोक किसके लिए प्रसिद्ध था?",options:["युद्ध","धर्म","व्यापार","कृषि"],answer:1,exp:"अशोक धम्म नीति के लिए प्रसिद्ध था"},
{q:"नालंदा कहाँ था?",options:["बिहार","यूपी","MP","राजस्थान"],answer:0,exp:"नालंदा बिहार में था"},
{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक युग","कांस्य युग"],answer:0,exp:"इसे स्वर्ण युग कहते हैं"},
{q:"हर्षवर्धन कौन था?",options:["शासक","किसान","व्यापारी","सैनिक"],answer:0,exp:"हर्षवर्धन शासक था"}
],
set2: [
{q:"चाणक्य किसके गुरु थे?",options:["चंद्रगुप्त","अशोक","नेहरू","पटेल"],answer:0,exp:"चाणक्य चंद्रगुप्त के गुरु थे"},
{q:"पाटलिपुत्र कहाँ था?",options:["बिहार","यूपी","गुजरात","राजस्थान"],answer:0,exp:"पाटलिपुत्र बिहार में था"},
{q:"अशोक ने कौन सा धर्म अपनाया?",options:["बौद्ध","हिंदू","इस्लाम","जैन"],answer:0,exp:"अशोक ने बौद्ध धर्म अपनाया"},
{
q: "मौर्य साम्राज्य का संस्थापक कौन था?",
options: ["चंद्रगुप्त मौर्य", "अशोक", "हर्षवर्धन", "समुद्रगुप्त"],
answer: 0,
exp: "चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की थी।"
},
{
q: "अशोक ने किस युद्ध के बाद बौद्ध धर्म अपनाया था?",
options: ["कलिंग युद्ध", "पानीपत युद्ध", "तराइन युद्ध", "प्लासी युद्ध"],
answer: 0,
exp: "कलिंग युद्ध के बाद अशोक ने बौद्ध धर्म अपनाया।"
},
{
q: "नालंदा विश्वविद्यालय किस राज्य में स्थित था?",
options: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"],
answer: 0,
exp: "नालंदा विश्वविद्यालय बिहार में स्थित था।"
},
{
q: "गुप्त काल को किस नाम से जाना जाता है?",
options: ["स्वर्ण युग", "लौह युग", "अंधकार युग", "कांस्य युग"],
answer: 0,
exp: "गुप्त काल को स्वर्ण युग कहा जाता है।"
},
{
q: "चाणक्य किस राजा के प्रमुख सलाहकार थे?",
options: ["चंद्रगुप्त मौर्य", "अशोक", "समुद्रगुप्त", "हर्षवर्धन"],
answer: 0,
exp: "चाणक्य चंद्रगुप्त मौर्य के सलाहकार थे।"
},
{
q: "समुद्रगुप्त को किस नाम से जाना जाता है?",
options: ["भारत का नेपोलियन", "भारत का अकबर", "भारत का अशोक", "भारत का चंद्रगुप्त"],
answer: 0,
exp: "समुद्रगुप्त को भारत का नेपोलियन कहा जाता है।"
},
{
q: "पाटलिपुत्र किस साम्राज्य की राजधानी थी?",
options: ["मौर्य साम्राज्य", "मुगल साम्राज्य", "गुप्त साम्राज्य", "मराठा साम्राज्य"],
answer: 0,
exp: "पाटलिपुत्र मौर्य साम्राज्य की राजधानी थी।"
},
{
q: "अशोक का शिलालेख किस लिपि में मिला है?",
options: ["ब्राह्मी", "देवनागरी", "अरबी", "रोमन"],
answer: 0,
exp: "अशोक के शिलालेख ब्राह्मी लिपि में मिले हैं।"
},
{
q: "गुप्त साम्राज्य की स्थापना किसने की थी?",
options: ["श्रीगुप्त", "चंद्रगुप्त मौर्य", "अशोक", "हर्षवर्धन"],
answer: 0,
exp: "गुप्त साम्राज्य की स्थापना श्रीगुप्त ने की थी।"
},
{
q: "प्राचीन भारत में शिक्षा का प्रमुख केंद्र कौन था?",
options: ["तक्षशिला", "दिल्ली", "पटना", "कानपुर"],
answer: 0,
exp: "तक्षशिला शिक्षा का प्रमुख केंद्र था।"
},
{q:"समुद्रगुप्त को क्या कहा जाता है?",options:["भारत का नेपोलियन","महान राजा","युद्धवीर","धर्मराज"],answer:0,exp:"उसे भारत का नेपोलियन कहते हैं"},
{q:"गुप्त काल किसलिए प्रसिद्ध है?",options:["कला और विज्ञान","युद्ध","कृषि","व्यापार"],answer:0,exp:"कला और विज्ञान के लिए"}
]
},

geography: {
set1: [
{q:"बिहार की राजधानी?",options:["पटना","गया","दरभंगा","भागलपुर"],answer:0,exp:"पटना राजधानी है"},
{q:"गंगा प्रवेश कहाँ से?",options:["बक्सर","पटना","गया","मुजफ्फरपुर"],answer:0,exp:"बक्सर से"},
{q:"कोसी नदी?",options:["बिहार का शोक","जीवन रेखा","गंगा","यमुना"],answer:0,exp:"बिहार का शोक"},
{
q: "भारत की सबसे लंबी नदी कौन सी है?",
options: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
answer: 0,
exp: "गंगा भारत की सबसे लंबी नदी मानी जाती है।"
},
{
q: "थार मरुस्थल किस राज्य में स्थित है?",
options: ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"],
answer:0,
exp:"थार मरुस्थल मुख्य रूप से राजस्थान में स्थित है।"
},
{q:"महाबोधि मंदिर?",options:["बोधगया","पटना","राजगीर","नालंदा"],answer:0,exp:"बोधगया में"},
{q:"सबसे बड़ा जिला?",options:["पश्चिम चंपारण","पटना","गया","नालंदा"],answer:0,exp:"पश्चिम चंपारण"}
],
set2: [
{q:"गंगा का उद्गम?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत की लंबी नदी?",options:["गंगा","यमुना","कावेरी","गोदावरी"],answer:0,exp:"गंगा"},
{q:"थार मरुस्थल?",options:["राजस्थान","बिहार","यूपी","MP"],answer:0,exp:"राजस्थान"},
{q:"हिमालय कहाँ?",options:["उत्तर भारत","दक्षिण","पूर्व","पश्चिम"],answer:0,exp:"उत्तर भारत"},
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"}
]
},

polity: {
set1: [
{q:"संविधान लागू?",options:["26 जनवरी 1950","15 अगस्त","26 जनवरी 1947","2 अक्टूबर"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला सदन","उच्च सदन","न्यायालय","राज्य"],answer:0,exp:"निचला सदन"},
{q:"प्रधानमंत्री?",options:["सरकार प्रमुख","राज्यपाल","राष्ट्रपति","जज"],answer:0,exp:"सरकार प्रमुख"},
  {
    q: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    answer: 0,
    exp: "गंगा भारत की सबसे लंबी और सबसे पवित्र नदी मानी जाती है।"
  },
  {
    q: "थार मरुस्थल किस राज्य में स्थित है?",
    options: ["गुजरात", "राजस्थान", "पंजाब", "हरियाणा"],
    answer: 1,
    exp: "थार मरुस्थल मुख्य रूप से राजस्थान में स्थित है।"
  },
  {
    q: "भारत का सबसे ऊँचा पर्वत कौन सा है?",
    options: ["कंचनजंगा", "नंदा देवी", "एवरेस्ट", "कामेट"],
    answer: 0,
    exp: "कंचनजंगा भारत का सबसे ऊँचा पर्वत शिखर है।"
  },
  {
    q: "कौन सा महासागर भारत के दक्षिण में स्थित है?",
    options: ["अटलांटिक", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक"],
    answer: 1,
    exp: "भारत के दक्षिण में हिंद महासागर स्थित है।"
  },
  {
    q: "भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?",
    options: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"],
    answer: 2,
    exp: "राजस्थान भारत का सबसे बड़ा राज्य है।"
  },
  {
    q: "सुंदरबन डेल्टा किस नदी पर स्थित है?",
    options: ["गंगा-ब्रह्मपुत्र", "यमुना", "नर्मदा", "गोदावरी"],
    answer: 0,
    exp: "सुंदरबन डेल्टा गंगा और ब्रह्मपुत्र नदियों पर स्थित है।"
  },
  {
    q: "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
    options: ["जोग फॉल्स", "धुआंधार", "हुंडरू", "चुलिया"],
    answer: 0,
    exp: "जोग फॉल्स (कर्नाटक) भारत का सबसे ऊँचा जलप्रपात है।"
  },
  {
    q: "कौन सा शहर 'पिंक सिटी' के नाम से जाना जाता है?",
    options: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    answer: 0,
    exp: "जयपुर को पिंक सिटी कहा जाता है।"
  },
  {
    q: "भारत का सबसे बड़ा डेल्टा कौन सा है?",
    options: ["सुंदरबन", "गोदावरी", "कावेरी", "महानदी"],
    answer: 0,
    exp: "सुंदरबन डेल्टा दुनिया का सबसे बड़ा डेल्टा है।"
  },
  {
    q: "नर्मदा नदी किस दिशा में बहती है?",
    options: ["पूर्व से पश्चिम", "पश्चिम से पूर्व", "उत्तर से दक्षिण", "दक्षिण से उत्तर"],
    answer: 0,
    exp: "नर्मदा नदी पूर्व से पश्चिम दिशा में बहती है।"
  },
{q:"भारत क्या है?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","जज","किसान"],answer:0,exp:"राज्य प्रमुख"}
],
set2: [
{q:"संविधान निर्माता?",options:["अंबेडकर","गांधी","नेहरू","पटेल"],answer:0,exp:"अंबेडकर"},
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"न्यायपालिका?",options:["न्याय देती है","कानून बनाती है","टैक्स","सेना"],answer:0,exp:"न्याय देती है"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","टैक्स"],answer:0,exp:"कानून बनाती"}
]
},

current: {
set1: [
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},
  {
    q: "AIIMS दरभंगा का शिलान्यास कब किया गया?",
    options: [
      "2020",
      "2021",
      "2024",
      "2022"
    ],
    answer: 2,
    exp: "नवंबर 2024 में केंद्र सरकार द्वारा AIIMS दरभंगा परियोजना का शिलान्यास किया गया, जो बिहार में स्वास्थ्य ढांचे को मजबूत करने की दिशा में एक महत्वपूर्ण कदम है।"
  },

  {
    q: "AIIMS दरभंगा का शिलान्यास किसके द्वारा किया गया?",
    options: [
      "अमित शाह",
      "राजनाथ सिंह",
      "नरेंद्र मोदी",
      "नितीश कुमार"
    ],
    answer: 2,
    exp: "प्रधानमंत्री नरेंद्र मोदी द्वारा देश में स्वास्थ्य सुविधाओं के विस्तार के तहत AIIMS दरभंगा का शिलान्यास किया गया।"
  },
  {
    q: "एम्स दरभंगा को भारत की सार्वजनिक स्वास्थ्य नीति में संरचनात्मक सुधार क्यों माना जाता है?",
    options: [
      "यह केवल नए अस्पताल बनाता है",
      "यह स्वास्थ्य सेवाओं को बाजार आधारित बनाता है",
      "यह तृतीयक स्वास्थ्य सेवाओं का क्षेत्रीय पुनर्वितरण करता है",
      "यह निजीकरण को बढ़ावा देता है"
    ],
    answer: 2,
    exp: "यह परियोजना बड़े शहरों में केंद्रित उन्नत स्वास्थ्य सेवाओं को क्षेत्रीय स्तर पर फैलाकर स्वास्थ्य ढांचे में संरचनात्मक सुधार करती है।"
  },

  {
    q: "एम्स दरभंगा को क्षेत्रीय असमानता घटाने वाला उपकरण क्यों माना जाता है?",
    options: [
      "यह केवल रोजगार देता है",
      "यह केवल शिक्षा देता है",
      "यह उन्नत चिकित्सा सेवाओं को पिछड़े क्षेत्रों तक पहुँचाता है",
      "यह केवल शहरी विकास करता है"
    ],
    answer: 2,
    exp: "यह उत्तर बिहार जैसे पिछड़े क्षेत्रों में सुपर स्पेशियलिटी चिकित्सा सेवाएँ उपलब्ध कराकर असमानता कम करता है।"
  },

  {
    q: "एम्स दरभंगा मानव पूंजी निर्माण को कैसे प्रभावित करता है?",
    options: [
      "केवल आय बढ़ाकर",
      "स्वास्थ्य सुधार के माध्यम से उत्पादकता बढ़ाकर",
      "केवल शिक्षा देकर",
      "व्यापार बढ़ाकर"
    ],
    answer: 1,
    exp: "बेहतर स्वास्थ्य सेवाएँ कार्यक्षमता और उत्पादकता बढ़ाती हैं, जिससे मानव पूंजी मजबूत होती है।"
  },

  {
    q: "एम्स दरभंगा किस प्रकार की नीति दृष्टि को दर्शाता है?",
    options: [
      "अल्पकालिक आर्थिक लाभ",
      "दीर्घकालिक मानव विकास दृष्टिकोण",
      "व्यापार उदारीकरण",
      "कृषि विकास नीति"
    ],
    answer: 1,
    exp: "यह परियोजना स्वास्थ्य और मानव विकास को दीर्घकालिक दृष्टिकोण से मजबूत करती है।"
  },

  {
    q: "एम्स दरभंगा का सबसे उपयुक्त सामाजिक-आर्थिक प्रभाव क्या है?",
    options: [
      "शहरीकरण में कमी",
      "क्षेत्रीय स्वास्थ्य संतुलन में सुधार",
      "निजी अस्पतालों का विस्तार",
      "कृषि उत्पादन में गिरावट"
    ],
    answer: 1,
    exp: "यह परियोजना ग्रामीण और शहरी क्षेत्रों के बीच स्वास्थ्य असमानता को कम करती है।"
  },

  {
    q: "एम्स दरभंगा को “विकास और कल्याण का संतुलन” क्यों कहा जाता है?",
    options: [
      "यह केवल विकास करता है",
      "यह केवल कल्याण करता है",
      "यह दोनों को साथ जोड़ता है",
      "यह निजीकरण को बढ़ाता है"
    ],
    answer: 2,
    exp: "यह परियोजना इंफ्रास्ट्रक्चर विकास और सामाजिक कल्याण दोनों को संतुलित रूप से आगे बढ़ाती है।"
  },

  {
    q: "एम्स दरभंगा का मानव विकास सूचकांक (एच.डी.आई.) से संबंध क्या है?",
    options: [
      "कोई संबंध नहीं",
      "केवल आय घटाता है",
      "स्वास्थ्य आयाम को मजबूत करता है",
      "केवल शिक्षा को प्रभावित करता है"
    ],
    answer: 2,
    exp: "एच.डी.आई. में स्वास्थ्य एक प्रमुख घटक है, जिसे यह परियोजना सीधे प्रभावित करती है।"
  },

  {
    q: "एम्स दरभंगा का समग्र मूल्यांकन क्या है?",
    options: [
      "केवल एक भवन परियोजना",
      "केवल चिकित्सा केंद्र",
      "सामाजिक-आर्थिक परिवर्तनकारी परियोजना",
      "केवल राजनीतिक घोषणा"
    ],
    answer: 2,
    exp: "यह परियोजना स्वास्थ्य, समाज और अर्थव्यवस्था तीनों में परिवर्तन लाने वाली है।"
  },

  {
    q: "एम्स दरभंगा को सार्वजनिक स्वास्थ्य नीति में संरचनात्मक सुधार क्यों माना जाता है?",
    options: [
      "यह निजीकरण बढ़ाता है",
      "यह स्वास्थ्य सेवाओं को बाजार आधारित बनाता है",
      "यह तृतीयक स्वास्थ्य सेवाओं का क्षेत्रीय पुनर्वितरण करता है",
      "यह केवल अस्पताल निर्माण है"
    ],
    answer: 2,
    exp: "बड़े शहरों में केंद्रित उन्नत स्वास्थ्य सेवाओं को क्षेत्रीय स्तर पर फैलाकर संतुलन बनाया जाता है।"
  },

  {
    q: "एम्स दरभंगा को क्षेत्रीय असमानता घटाने वाला उपकरण क्यों कहा जाता है?",
    options: [
      "यह केवल रोजगार देता है",
      "यह केवल शिक्षा देता है",
      "यह पिछड़े क्षेत्रों तक उन्नत चिकित्सा सेवाएँ पहुँचाता है",
      "यह केवल शहरी विकास करता है"
    ],
    answer: 2,
    exp: "उत्तर बिहार में सुपर स्पेशियलिटी स्वास्थ्य सेवाएँ उपलब्ध कराना इसका मुख्य उद्देश्य है।"
  },

  {
    q: "एम्स दरभंगा मानव पूंजी निर्माण को कैसे प्रभावित करता है?",
    options: [
      "आय बढ़ाकर",
      "स्वास्थ्य सुधार कर उत्पादकता बढ़ाकर",
      "व्यापार बढ़ाकर",
      "उद्योग स्थापित कर"
    ],
    answer: 1,
    exp: "बेहतर स्वास्थ्य से कार्यक्षमता और उत्पादकता बढ़ती है, जिससे मानव पूंजी मजबूत होती है।"
  },

  {
    q: "एम्स दरभंगा किस नीति दृष्टि को दर्शाता है?",
    options: [
      "अल्पकालिक आर्थिक लाभ",
      "दीर्घकालिक मानव विकास दृष्टिकोण",
      "व्यापार उदारीकरण",
      "कृषि आधारित नीति"
    ],
    answer: 1,
    exp: "यह स्वास्थ्य और मानव विकास पर आधारित दीर्घकालिक नीति दृष्टिकोण है।"
  },

  {
    q: "एम्स दरभंगा का मुख्य सामाजिक-आर्थिक प्रभाव क्या है?",
    options: [
      "शहरीकरण घटाना",
      "क्षेत्रीय स्वास्थ्य संतुलन सुधारना",
      "निजी अस्पताल बढ़ाना",
      "कृषि उत्पादन घटाना"
    ],
    answer: 1,
    exp: "यह ग्रामीण और शहरी क्षेत्रों के बीच स्वास्थ्य असमानता कम करता है।"
  },

  {
    q: "BIPEX-2024 का सही स्वरूप क्या है?",
    options: [
      "Bihar Industrial Expo",
      "Bihar Philatelic Exhibition",
      "Bihar Public Examination",
      "Bihar Policy Expo"
    ],
    answer: 1,
    exp: "BIPEX-2024 का पूरा नाम Bihar Philatelic Exhibition है, जो India Post द्वारा आयोजित स्टाम्प प्रदर्शनी है।"
  },
  {
    q: "BIPEX-2024 का आयोजन किस शहर में किया गया था?",
    options: [
      "गया",
      "दरभंगा",
      "पटना",
      "भागलपुर"
    ],
    answer: 2,
    exp: "BIPEX-2024 का आयोजन पटना (Gyan Bhawan) में किया गया था।"
  },
  
  {
    q: "BIPEX-2024 किस विभाग द्वारा आयोजित किया गया था?",
    options: [
      "रेलवे विभाग",
      "डाक विभाग (India Post)",
      "शिक्षा विभाग",
      "संस्कृति विभाग"
    ],
    answer: 1,
    exp: "BIPEX-2024 का आयोजन India Post (Department of Posts) द्वारा किया गया था।"
  },
  
  {
    q: "BIPEX-2024 का मुख्य उद्देश्य क्या था?",
    options: [
      "खेल प्रतियोगिता",
      "डाक टिकट एवं डाक इतिहास का प्रचार",
      "औद्योगिक विकास",
      "कृषि सुधार"
    ],
    answer: 1,
    exp: "BIPEX-2024 का मुख्य उद्देश्य डाक टिकट और डाक इतिहास को बढ़ावा देना था।"
  },
  
  {
    q: "BIPEX-2024 में किस प्रकार के संग्रह प्रमुख आकर्षण थे?",
    options: [
      "सिक्के और हथियार",
      "स्टाम्प, पोस्टकार्ड और पत्र",
      "मूर्तियाँ",
      "कृषि उपकरण"
    ],
    answer: 1,
    exp: "BIPEX-2024 में स्टाम्प, पोस्टकार्ड और पत्र प्रमुख आकर्षण थे।"
  },
  {
    q: "BIPEX-2024 का मुख्य theme क्या था?",
    options: [
      "Digital India",
      "Postal Heritage of Bihar",
      "Smart Bihar",
      "Green Bihar"
    ],
    answer: 1,
    exp: "BIPEX-2024 का थीम Postal Heritage of Bihar था।"
  },

  {
    q: "एम्स दरभंगा 'विकास और कल्याण का संतुलन' कैसे है?",
    options: [
      "केवल विकास",
      "केवल कल्याण",
      "दोनों का संयोजन",
      "निजीकरण मॉडल"
    ],
    answer: 2,
    exp: "यह इंफ्रास्ट्रक्चर विकास और सामाजिक कल्याण दोनों को जोड़ता है।"
  },

  {
    q: "एम्स दरभंगा का एच.डी.आई. से संबंध क्या है?",
    options: [
      "कोई संबंध नहीं",
      "केवल आय पर प्रभाव",
      "स्वास्थ्य आयाम को मजबूत करना",
      "केवल शिक्षा पर प्रभाव"
    ],
    answer: 2,
    exp: "मानव विकास सूचकांक में स्वास्थ्य एक महत्वपूर्ण घटक है।"
  },

  {
    q: "BIPEX-2024 को किस प्रकार के national initiative के रूप में देखा जाता है?",
    options: [
      "Industrial investment initiative",
      "Cultural heritage documentation initiative",
      "Defense modernization initiative",
      "Agricultural reform initiative"
    ],
    answer: 1,
    exp: "BIPEX-2024 को cultural heritage documentation initiative के रूप में देखा जाता है क्योंकि यह डाक इतिहास और फिलेटली संस्कृति को संरक्षित करता है।"
  },
  {
    q: "BIPEX-2024 का सबसे महत्वपूर्ण institutional stakeholder कौन था?",
    options: [
      "Ministry of Education",
      "India Post (Department of Posts)",
      "NITI Aayog",
      "Ministry of Culture only"
    ],
    answer: 1,
    exp: "BIPEX-2024 का प्रमुख institutional stakeholder India Post (Department of Posts) था।"
  },
  {
    q: "BIPEX-2024 जैसे आयोजन किस प्रकार की “public history” को बढ़ावा देते हैं?",
    options: [
      "Oral storytelling only",
      "Documentary and archival history",
      "Political history only",
      "Economic history only"
    ],
    answer: 1,
    exp: "ऐसे आयोजन documentary और archival history को बढ़ावा देते हैं।"
  },
  {
    q: "Philately-based exhibitions का सबसे प्रमुख analytical value क्या है?",
    options: [
      "Economic forecasting",
      "Historical communication tracing",
      "Military planning",
      "Legal documentation"
    ],
    answer: 1,
    exp: "Philately-based exhibitions ऐतिहासिक communication tracing में मदद करते हैं।"
  },
  {
    q: "BIPEX-2024 को “knowledge dissemination platform” क्यों कहा जा सकता है?",
    options: [
      "यह केवल संग्रह है",
      "यह डाक इतिहास और सांस्कृतिक ज्ञान का प्रसार करता है",
      "यह व्यापार मेला है",
      "यह खेल आयोजन है"
    ],
    answer: 1,
    exp: "यह डाक इतिहास और सांस्कृतिक ज्ञान का प्रसार करता है।"
  },
  
  {
    q: "BIPEX-2024 किस प्रकार की “heritage economy” को support करता है?",
    options: [
      "Industrial heritage economy",
      "Cultural and archival economy",
      "Financial derivatives economy",
      "Defense economy"
    ],
    answer: 1,
    exp: "यह cultural और archival economy को support करता है।"
  },
  
  {
    q: "Philately को “educational heritage tool” क्यों माना जाता है?",
    options: [
      "यह केवल hobby है",
      "यह ऐतिहासिक घटनाओं और व्यक्तित्वों को visual form में प्रस्तुत करता है",
      "यह केवल निवेश साधन है",
      "यह खेल गतिविधि है"
    ],
    answer: 1,
    exp: "यह ऐतिहासिक घटनाओं और व्यक्तित्वों को visual रूप में प्रस्तुत करता है।"
  },
  {
    q: "BIPEX-2024 का सबसे सही systemic objective क्या है?",
    options: [
      "Financial inclusion",
      "Cultural awareness and postal heritage preservation",
      "Industrial expansion",
      "Military awareness"
    ],
    answer: 1,
    exp: "इसका उद्देश्य cultural awareness और postal heritage preservation है।"
  },
  {
    q: "BIPEX-2024 किस प्रकार की “soft governance strategy” का उदाहरण है?",
    options: [
      "Economic coercion",
      "Cultural engagement strategy",
      "Military intervention strategy",
      "Judicial activism"
    ],
    answer: 1,
    exp: "यह cultural engagement strategy का उदाहरण है।"
  },
  {
    q: "Philately exhibitions का सबसे महत्वपूर्ण sociological impact क्या है?",
    options: [
      "Political polarization",
      "Historical consciousness development",
      "Economic inflation",
      "Technological automation"
    ],
    answer: 1,
    exp: "यह historical consciousness को विकसित करता है।"
  },
  {
    q: "BIPEX-2024 किस प्रकार के “cultural capital” को बढ़ाता है?",
    options: [
      "Financial capital",
      "Symbolic and heritage capital",
      "Military capital",
      "Industrial capital"
    ],
    answer: 1,
    exp: "यह symbolic और heritage capital को बढ़ाता है।"
  },
  {
    q: "BIPEX-2024 जैसे आयोजन किस concept को strengthen करते हैं?",
    options: [
      "Hard infrastructure",
      "Soft cultural infrastructure",
      "Military infrastructure",
      "Digital infrastructure only"
    ],
    answer: 1,
    exp: "यह soft cultural infrastructure को strengthen करते हैं।"
  },
  {
    q: "BIPEX-2024 का सबसे सही long-term impact क्या हो सकता है?",
    options: [
      "Export growth",
      "Cultural tourism and heritage awareness",
      "Industrial production",
      "Banking reform"
    ],
    answer: 1,
    exp: "इसका long-term impact cultural tourism और heritage awareness है।"
  },
  {
    q: "Philately में “archival value” का क्या अर्थ है?",
    options: [
      "आर्थिक मूल्य",
      "ऐतिहासिक दस्तावेज़ी महत्व",
      "तकनीकी मूल्य",
      "राजनीतिक मूल्य"
    ],
    answer: 1,
    exp: "Archival value का अर्थ ऐतिहासिक दस्तावेज़ी महत्व है।"
  },
  {
    q: "BIPEX-2024 को cultural policy framework में क्यों रखा जा सकता है?",
    options: [
      "यह खेल आयोजन है",
      "यह heritage preservation और cultural dissemination से जुड़ा है",
      "यह केवल व्यापार मेला है",
      "यह defense event है"
    ],
    answer: 1,
    exp: "यह heritage preservation और cultural dissemination से जुड़ा है।"
  },
  {
    q: "BIPEX-2024 में किस प्रकार का knowledge domain प्रमुख था?",
    options: [
      "Engineering",
      "Humanities and heritage studies",
      "Medical science",
      "Space science"
    ],
    answer: 1,
    exp: "इसमें humanities और heritage studies प्रमुख थे।"
  },
  {
    q: "BIPEX-2024 जैसे आयोजन किस प्रकार की state capacity को दर्शाते हैं?",
    options: [
      "Military capacity",
      "Cultural administrative capacity",
      "Financial capacity only",
      "Judicial capacity"
    ],
    answer: 1,
    exp: "यह cultural administrative capacity को दर्शाते हैं।"
  },
  {
    q: "BIPEX-2024 का सबसे सही conceptual takeaway क्या है?",
    options: [
      "Technology dominance",
      "Cultural memory preservation through philately",
      "Industrial growth",
      "Agricultural modernization"
    ],
    answer: 1,
    exp: "इसका conceptual takeaway cultural memory preservation through philately है।"
  },

  {
    q: "एम्स दरभंगा का समग्र मूल्यांकन क्या है?",
    options: [
      "केवल भवन परियोजना",
      "केवल अस्पताल",
      "सामाजिक-आर्थिक परिवर्तनकारी परियोजना",
      "केवल सरकारी घोषणा"
    ],
    answer: 2,
    exp: "यह स्वास्थ्य, समाज और अर्थव्यवस्था तीनों में परिवर्तन लाने वाली परियोजना है।"
  },
{q:"स्वतंत्रता दिवस?",options:["15 अगस्त","26 जनवरी","2 अक्टूबर","1 मई"],answer:0,exp:"15 अगस्त"},
{q:"गणतंत्र दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"},
{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"},
{q:"पर्यावरण दिवस?",options:["5 जून","1 मई","10 जून","12 अगस्त"],answer:0,exp:"5 जून"}
]
}

};

/* ================= GLOBAL ================= */
let currentTopic = "history";
let currentSet = "set1";
let questions = allTopics[currentTopic][currentSet];

let index = 0;

let selected = {};
let marked = {};
let resultStatus = {};

// Wrong Questions Retry Feature
let wrongQuestions = [];

// Timer
let timer;
let time = 20;

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){
currentTopic=topic;
currentSet=Object.keys(allTopics[topic])[0];
questions=allTopics[currentTopic][currentSet];
reset();
}

/* ================= LOAD SET ================= */
function loadSet(set){
currentSet=set;
questions=allTopics[currentTopic][set];
reset();
}

/* ================= RESET ================= */
function reset(){

document.getElementById("resultBox").style.display="none";
document.getElementById("quizBox").style.display="block";

index=0;
selected={};
marked={};
resultStatus={};

clearInterval(timer);

load();
render();
startTimer();

}

/* ================= LOAD QUESTION ================= */
function load(){

let q = questions[index];

document.getElementById("qText").innerText =
"Q" + (index + 1) + ": " + q.q;

document.getElementById("status").innerText =
currentTopic + " | " + currentSet + " | " + (index + 1) + "/" + questions.length;

let box = document.getElementById("options");
box.innerHTML = "";

q.options.forEach((o,i)=>{

let div = document.createElement("div");
div.className = "option";
div.innerText = o;

if(selected[index] === i){
div.classList.add("selected");
}

div.onclick = ()=>{

// Select / Unselect Feature
if(selected[index] === i){
delete selected[index];
}else{
selected[index] = i;
}

load();
render();

};

box.appendChild(div);

});

updateBar();

}

/* ================= NAV ================= */
function next(){
if(index<questions.length-1){
index++;
load();
render();
startTimer();
}else submitQuiz();
}

function prev(){
if(index>0){
index--;
load();
render();
startTimer();
}
}

function mark(){
marked[index]=true;
render();
}

/* ================= PALETTE ================= */
function render(){

let p=document.getElementById("palette");
p.innerHTML="";

questions.forEach((q,i)=>{
let b=document.createElement("div");
b.className="qbtn";
b.innerText=i+1;

if(resultStatus[i]==="correct"){
b.classList.add("correct");
b.innerHTML=i+1+" ✔";
}
else if(resultStatus[i]==="wrong"){
b.classList.add("wrong");
b.innerHTML=i+1+" ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i]!==undefined){
b.classList.add("answered");
}

b.onclick=()=>{
index=i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width=
((index+1)/questions.length)*100+"%";
}

/* ================= TIMER ================= */
function startTimer(){
clearInterval(timer);
time=20;

timer=setInterval(()=>{
time--;
document.getElementById("timerText").innerText="⏳ "+time;
document.getElementById("timerBar").style.width=(time/20)*100+"%";

if(time<=0) next();

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

clearInterval(timer);

let score=0;
resultStatus={};
wrongQuestions=[];

questions.forEach((q,i)=>{

if(selected[i]===q.answer){
score++;
resultStatus[i]="correct";
}else{
resultStatus[i]="wrong";
wrongQuestions.push(q);
}

});

document.getElementById("quizBox").style.display="none";
document.getElementById("resultBox").style.display="block";

document.getElementById("scoreText").innerHTML=
`
<h3>Score: ${score}/${questions.length}</h3>
<button onclick="retryWrongQuestions()">
🔄 Retry Wrong Questions (${wrongQuestions.length})
</button>
`;

let rev=document.getElementById("review");
rev.innerHTML="";

questions.forEach((q,i)=>{

let div=document.createElement("div");

div.innerHTML=
"<b>Q:</b> "+q.q+
"<br><b>Your:</b> "+(q.options[selected[i]]||"Not Attempted")+
"<br><b>Correct:</b> "+q.options[q.answer]+
"<br><b>Exp:</b> "+q.exp+
"<hr>";

rev.appendChild(div);

});

render();

}

/* ================= INIT ================= */
loadTopic("history");

function getAllSets(topic){
return Object.keys(allTopics[topic]);
}

function getNextSetName() {
let sets = Object.keys(allTopics[currentTopic]);
let i = sets.indexOf(currentSet);

if (i < sets.length - 1) {
return sets[i + 1];
}
return null;
}

function retryWrongQuestions(){

if(wrongQuestions.length===0){
alert("🎉 कोई गलत प्रश्न नहीं है");
return;
}

questions=[...wrongQuestions];

document.getElementById("resultBox").style.display="none";
document.getElementById("quizBox").style.display="block";

index=0;
selected={};
marked={};
resultStatus={};

clearInterval(timer);

load();
render();
startTimer();

}