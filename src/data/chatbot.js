import { quotePath, site } from "./site.js";

export const chatLanguages = [
  { id: "en", label: "English" },
  { id: "bn", label: "বাংলা" },
];

export const chatText = {
  en: {
    title: "YGEL Support",
    status: "Usually replies instantly",
    welcome: "Hello! Welcome to Yara Global Express. 👋",
    welcomeHint: "Choose a question below and I’ll answer right away.",
    suggestions: "Popular questions",
    more: "Anything else I can help with?",
    other: "My question isn’t listed",
    otherQuestion: "I have a different question.",
    fallback:
      "No problem! Our team will answer you personally on WhatsApp. Tap the button below to start a chat.",
    whatsapp: "Chat on WhatsApp",
    whatsappMessage: "Hello Yara Global Express, I have a question about a shipment.",
    restart: "Start over",
    close: "Close chat",
    language: "Language",
    footer: "Need a person? Message us on WhatsApp",
  },
  bn: {
    title: "YGEL সাপোর্ট",
    status: "সাধারণত সাথে সাথেই উত্তর দেয়",
    welcome: "আসসালামু আলাইকুম! Yara Global Express-এ আপনাকে স্বাগতম। 👋",
    welcomeHint: "নিচের যেকোনো প্রশ্নে ট্যাপ করুন, সাথে সাথে উত্তর পেয়ে যাবেন।",
    suggestions: "সাধারণ প্রশ্নসমূহ",
    more: "আর কিছু জানতে চান?",
    other: "আমার প্রশ্ন এখানে নেই",
    otherQuestion: "আমার অন্য একটি প্রশ্ন আছে।",
    fallback:
      "কোনো সমস্যা নেই! আমাদের টিম WhatsApp-এ সরাসরি আপনার প্রশ্নের উত্তর দেবে। চ্যাট শুরু করতে নিচের বাটনে ট্যাপ করুন।",
    whatsapp: "WhatsApp-এ কথা বলুন",
    whatsappMessage: "আসসালামু আলাইকুম, Yara Global Express — শিপমেন্ট নিয়ে আমার একটি প্রশ্ন আছে।",
    restart: "আবার শুরু করুন",
    close: "চ্যাট বন্ধ করুন",
    language: "ভাষা",
    footer: "সরাসরি কথা বলতে চান? WhatsApp-এ মেসেজ দিন",
  },
};

export function whatsappLink(message) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

const waAction = (message) => ({
  type: "external",
  href: `${site.whatsapp}?text=${encodeURIComponent(message)}`,
  label: { en: "Chat on WhatsApp", bn: "WhatsApp-এ চ্যাট করুন" },
});

export const chatTopics = [
  {
    id: "countries",
    question: {
      en: "Which countries do you deliver to?",
      bn: "আপনারা কোন কোন দেশে ডেলিভারি দেন?",
    },
    answer: {
      en: "We deliver to 200+ destinations, including the USA, UK, Canada, Australia, Italy, Germany, UAE, Saudi Arabia, Japan, Singapore and many more.",
      bn: "আমরা ২০০+ গন্তব্যে ডেলিভারি দিই - যেমন যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া, ইতালি, জার্মানি, সংযুক্ত আরব আমিরাত, সৌদি আরব, জাপান, সিঙ্গাপুরসহ আরও অনেক দেশে।",
    },
    actions: [
      { type: "route", to: "/#destinations", label: { en: "See destinations", bn: "গন্তব্যগুলো দেখুন" } },
    ],
  },
  {
    id: "send",
    question: {
      en: "What items can I send internationally?",
      bn: "আন্তর্জাতিকভাবে আমি কী কী পণ্য পাঠাতে পারি?",
    },
    answer: {
      en: "You can send documents, samples, personal parcels and commercial shipments from Bangladesh to destinations worldwide, subject to the destination country's rules.",
      bn: "গন্তব্য দেশের নিয়ম মেনে আপনি বাংলাদেশ থেকে বিশ্বের বিভিন্ন গন্তব্যে ডকুমেন্ট, স্যাম্পল, ব্যক্তিগত পার্সেল এবং বাণিজ্যিক শিপমেন্ট পাঠাতে পারেন।",
    },
  },
  {
    id: "track",
    question: {
      en: "How can I track my shipment?",
      bn: "আমি কীভাবে আমার শিপমেন্ট ট্র্যাক করব?",
    },
    answer: {
      en: "Enter your AWB / tracking number on our Track Shipment page to see the live status, history and details of your shipment.",
      bn: "আমাদের Track Shipment পেজে আপনার AWB / ট্র্যাকিং নম্বর দিন, শিপমেন্টের সর্বশেষ অবস্থা, ইতিহাস ও বিস্তারিত দেখতে পাবেন।",
    },
    actions: [{ type: "route", to: "/tracking", label: { en: "Track now", bn: "এখনই ট্র্যাক করুন" } }],
  },
  {
    id: "services",
    question: {
      en: "What international courier services do you offer?",
      bn: "আপনারা কী কী আন্তর্জাতিক কুরিয়ার সেবা দেন?",
    },
    answer: {
      en: "International document and parcel delivery, express courier, corporate shipping, import and export, pickup and delivery, tracking updates, customs clearance, customer support, duties-paid or unpaid delivery, and courier support for pharmaceutical businesses.",
      bn: "আন্তর্জাতিক ডকুমেন্ট ও পার্সেল ডেলিভারি, এক্সপ্রেস কুরিয়ার, কর্পোরেট শিপিং, ইমপোর্ট ও এক্সপোর্ট, পিকআপ ও ডেলিভারি, ট্র্যাকিং আপডেট, কাস্টমস ক্লিয়ারেন্স, কাস্টমার সাপোর্ট, ডিউটি পরিশোধিত বা অপরিশোধিত ডেলিভারি, এবং ফার্মাসিউটিক্যাল ব্যবসার জন্য কুরিয়ার সাপোর্ট।",
    },
    actions: [{ type: "route", to: "/services", label: { en: "View all services", bn: "সব সেবা দেখুন" } }],
  },
  {
    id: "pickup",
    question: {
      en: "Do you offer pickup and packaging assistance?",
      bn: "আপনারা কি পিকআপ ও প্যাকেজিং সহায়তা দেন?",
    },
    answer: {
      en: "Yes. Pickup from your address is available depending on the route and service type, and we offer packaging assistance so your goods travel securely.",
      bn: "হ্যাঁ। রুট ও সার্ভিসের ধরন অনুযায়ী আপনার ঠিকানা থেকে পিকআপ করা হয়। আর পণ্য যেন নিরাপদে পৌঁছায়, সেজন্য আমরা প্যাকেজিং সহায়তাও দিই।",
    },
  },
  {
    id: "quote",
    question: {
      en: "How can I request a shipping quote?",
      bn: "শিপিং কোটেশনের জন্য কীভাবে অনুরোধ করব?",
    },
    answer: {
      en: "Send us a quote request with your destination, package type and weight, or call and WhatsApp our team directly.",
      bn: "গন্তব্য, প্যাকেজের ধরন ও ওজন লিখে আমাদের কাছে কোটেশন রিকোয়েস্ট পাঠান, অথবা সরাসরি কল বা WhatsApp করুন।",
    },
    actions: [{ type: "route", to: quotePath, label: { en: "Get a Quote", bn: "কোটেশন নিন" } }],
  },
  {
    id: "duties",
    question: {
      en: "Can I choose who pays the customs duties and taxes?",
      bn: "কাস্টমস ডিউটি ও ট্যাক্স কে পরিশোধ করবে, তা কি আমি বেছে নিতে পারি?",
    },
    answer: {
      en: "Yes. We guide you on DDU and DDP-style delivery so you can choose whether duties and taxes are paid by the receiver or included in your shipment.",
      bn: "হ্যাঁ। DDU ও DDP ধরনের ডেলিভারি নিয়ে আমরা আপনাকে পরামর্শ দিই, যাতে ডিউটি ও ট্যাক্স প্রাপক পরিশোধ করবেন নাকি আপনার শিপমেন্টের সাথেই পরিশোধ হবে - তা আপনি বেছে নিতে পারেন।",
    },
  },
  {
    id: "customs",
    question: {
      en: "Do you assist with customs clearance?",
      bn: "আপনারা কি কাস্টমস ক্লিয়ারেন্সে সহায়তা করেন?",
    },
    answer: {
      en: "Yes. We provide export and import customs clearance support for shipments moving through Dhaka Airport.",
      bn: "হ্যাঁ। ঢাকা বিমানবন্দর দিয়ে যাওয়া-আসা শিপমেন্টের জন্য আমরা এক্সপোর্ট ও ইমপোর্ট কাস্টমস ক্লিয়ারেন্স সহায়তা দিই।",
    },
  },
  {
    id: "contact",
    question: {
      en: "How can I contact your customer service team?",
      bn: "আপনাদের কাস্টমার সার্ভিস টিমের সাথে কীভাবে যোগাযোগ করব?",
    },
    answer: {
      en: "You can reach our customer service team by phone, WhatsApp or email:",
      bn: "ফোন, WhatsApp অথবা ইমেইলের মাধ্যমে আমাদের কাস্টমার সার্ভিস টিমের সাথে যোগাযোগ করতে পারেন:",
    },
    lines: [...site.phones.map((phone) => phone.display), site.email],
    actions: [
      { type: "external", href: site.phones[0].href, label: { en: "Call now", bn: "এখনই কল করুন" } },
      waAction("Hello Yara Global Express, I would like to contact your customer service team."),
      { type: "external", href: `mailto:${site.email}`, label: { en: "Send email", bn: "ইমেইল পাঠান" } },
    ],
  },
  {
    id: "office",
    question: {
      en: "Where is your office located?",
      bn: "আপনাদের অফিস কোথায় অবস্থিত?",
    },
    answer: {
      en: `Our office: ${site.address}`,
      bn: "আমাদের অফিস: জয়দুল ম্যানর (২য় তলা), ১৫৯ নিউ এলিফ্যান্ট রোড, হাতিরপুল, ঢাকা-১২০৫, বাংলাদেশ।",
    },
    actions: [
      { type: "external", href: site.mapLink, label: { en: "Open in Google Maps", bn: "Google Maps-এ দেখুন" } },
    ],
  },
  {
    id: "medicines-food",
    question: {
      en: "Can I send personal medicines and food items internationally?",
      bn: "আমি কি আন্তর্জাতিকভাবে ব্যক্তিগত ওষুধ ও খাদ্যপণ্য পাঠাতে পারি?",
    },
    answer: {
      en: "It depends on the destination country's rules and carrier restrictions. Personal medicines usually need a prescription or doctor's documents and may need to be in their original packaging. Food items must be dry, sealed and commercially packed; perishable or restricted items are not accepted. Please contact our team with the item details and destination before booking so we can confirm.",
      bn: "এটি গন্তব্য দেশের নিয়ম ও ক্যারিয়ারের বিধিনিষেধের উপর নির্ভর করে। ব্যক্তিগত ওষুধের ক্ষেত্রে সাধারণত প্রেসক্রিপশন বা ডাক্তারের কাগজপত্র লাগে এবং ওষুধ আসল প্যাকেজিংয়ে থাকতে হতে পারে। খাদ্যপণ্য অবশ্যই শুকনো, সিল করা ও বাণিজ্যিকভাবে প্যাক করা হতে হবে; পচনশীল বা নিষিদ্ধ পণ্য গ্রহণ করা হয় না। বুকিংয়ের আগে পণ্যের বিবরণ ও গন্তব্য জানিয়ে আমাদের টিমের সাথে যোগাযোগ করুন, আমরা নিশ্চিত করে জানাব।",
    },
    actions: [
      waAction("Hello Yara Global Express, I want to send personal medicines / food items. Can you confirm if it is allowed?"),
      { type: "route", to: "/contact", label: { en: "Contact us", bn: "যোগাযোগ করুন" } },
    ],
  },
];
