import { quotePath, site } from "./site.js";

export const chatLanguages = [
  { id: "en", label: "English" },
  { id: "bn", label: "বাংলা" },
];

export const chatText = {
  en: {
    title: "YGE Support",
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
    title: "YGE সাপোর্ট",
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

export const chatTopics = [
  {
    id: "track",
    question: {
      en: "How can I track my shipment?",
      bn: "আমার শিপমেন্ট কীভাবে ট্র্যাক করব?",
    },
    answer: {
      en: "Enter your DHL Air Waybill or tracking number in the tracking box on our home page. Tracking opens on DHL’s official page.",
      bn: "আমাদের হোম পেজের ট্র্যাকিং বক্সে আপনার DHL Air Waybill বা ট্র্যাকিং নম্বর লিখুন। ট্র্যাকিং DHL-এর অফিসিয়াল পেজে খুলবে।",
    },
    actions: [{ type: "route", to: "/#tracking", label: { en: "Track now", bn: "এখনই ট্র্যাক করুন" } }],
  },
  {
    id: "send",
    question: {
      en: "What can I send?",
      bn: "কী কী পাঠানো যায়?",
    },
    answer: {
      en: "Documents, samples, personal parcels and commercial shipments — from Bangladesh to destinations worldwide.",
      bn: "ডকুমেন্ট, স্যাম্পল, ব্যক্তিগত পার্সেল এবং বাণিজ্যিক শিপমেন্ট — বাংলাদেশ থেকে বিশ্বের বিভিন্ন গন্তব্যে।",
    },
  },
  {
    id: "countries",
    question: {
      en: "Which countries do you deliver to?",
      bn: "কোন কোন দেশে পাঠানো যায়?",
    },
    answer: {
      en: "We deliver to 200+ destinations, including the USA, UK, Canada, Australia, Italy, Germany, UAE, Saudi Arabia, Japan, Singapore and many more.",
      bn: "আমরা ২০০+ গন্তব্যে ডেলিভারি দিই — যেমন যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া, ইতালি, জার্মানি, সংযুক্ত আরব আমিরাত, সৌদি আরব, জাপান, সিঙ্গাপুরসহ আরও অনেক দেশে।",
    },
    actions: [
      { type: "route", to: "/#destinations", label: { en: "See destinations", bn: "গন্তব্যগুলো দেখুন" } },
    ],
  },
  {
    id: "services",
    question: {
      en: "What services do you offer?",
      bn: "আপনারা কী কী সেবা দেন?",
    },
    answer: {
      en: "International courier, express courier, document & sample delivery, parcel delivery, corporate courier, exports and imports, delivery with or without duties, pickup and delivery, customs clearance, airport-to-airport air freight and packaging service.",
      bn: "আন্তর্জাতিক কুরিয়ার, এক্সপ্রেস কুরিয়ার, ডকুমেন্ট ও স্যাম্পল ডেলিভারি, পার্সেল ডেলিভারি, কর্পোরেট কুরিয়ার, এক্সপোর্ট ও ইমপোর্ট, ডিউটিসহ বা ডিউটি ছাড়া ডেলিভারি, পিকআপ ও ডেলিভারি, কাস্টমস ক্লিয়ারেন্স, এয়ারপোর্ট-টু-এয়ারপোর্ট এয়ার ফ্রেইট এবং প্যাকেজিং সার্ভিস।",
    },
    actions: [{ type: "route", to: "/services", label: { en: "View all services", bn: "সব সেবা দেখুন" } }],
  },
  {
    id: "customs",
    question: {
      en: "Do you help with customs clearance?",
      bn: "কাস্টমস ক্লিয়ারেন্সে সাহায্য করেন?",
    },
    answer: {
      en: "Yes. We provide export and import customs clearance support for shipments moving through Dhaka Airport.",
      bn: "হ্যাঁ। ঢাকা এয়ারপোর্ট দিয়ে যাওয়া-আসা শিপমেন্টের জন্য আমরা এক্সপোর্ট ও ইমপোর্ট কাস্টমস ক্লিয়ারেন্স সাপোর্ট দিই।",
    },
  },
  {
    id: "duties",
    question: {
      en: "Can I choose who pays duties and taxes?",
      bn: "ডিউটি ও ট্যাক্স কে দেবে, তা কি বেছে নেওয়া যায়?",
    },
    answer: {
      en: "Yes. We guide you on DDU and DDP-style delivery so you can choose shipments excluding or including duty and taxes.",
      bn: "হ্যাঁ। DDU ও DDP ডেলিভারি নিয়ে আমরা আপনাকে গাইড করি, যাতে আপনি ডিউটি ও ট্যাক্স ছাড়া বা সহ — যেভাবে চান শিপমেন্ট পাঠাতে পারেন।",
    },
  },
  {
    id: "pickup",
    question: {
      en: "Do you offer pickup and packaging?",
      bn: "পিকআপ ও প্যাকেজিং সুবিধা আছে?",
    },
    answer: {
      en: "Pickup from your address is available depending on the lane and service type, and we offer packaging support so goods travel securely.",
      bn: "রুট ও সার্ভিসের ধরন অনুযায়ী আপনার ঠিকানা থেকে পিকআপ করা হয়। আর পণ্য যেন নিরাপদে পৌঁছায়, সেজন্য আমরা প্যাকেজিং সাপোর্টও দিই।",
    },
  },
  {
    id: "quote",
    question: {
      en: "How do I get a quote?",
      bn: "কোটেশন কীভাবে পাব?",
    },
    answer: {
      en: "Send us a quote request with your destination, package type and weight, or call and WhatsApp our team directly.",
      bn: "গন্তব্য, প্যাকেজের ধরন ও ওজন লিখে আমাদের কাছে কোটেশন রিকোয়েস্ট পাঠান, অথবা সরাসরি কল বা WhatsApp করুন।",
    },
    actions: [{ type: "route", to: quotePath, label: { en: "Get a Quote", bn: "কোটেশন নিন" } }],
  },
  {
    id: "contact",
    question: {
      en: "How can I contact you?",
      bn: "আপনাদের সাথে কীভাবে যোগাযোগ করব?",
    },
    answer: {
      en: "You can call us or send an email any time:",
      bn: "কল করুন অথবা ইমেইল পাঠান:",
    },
    lines: [...site.phones.map((phone) => phone.display), site.email],
    actions: [
      { type: "external", href: site.phones[0].href, label: { en: "Call now", bn: "এখনই কল করুন" } },
      { type: "external", href: `mailto:${site.email}`, label: { en: "Send email", bn: "ইমেইল পাঠান" } },
    ],
  },
  {
    id: "office",
    question: {
      en: "Where is your office?",
      bn: "আপনাদের অফিস কোথায়?",
    },
    answer: {
      en: `Our office: ${site.address}`,
      bn: "আমাদের অফিস: জয়দুল ম্যানর (২য় তলা), ১৫৯ নিউ এলিফ্যান্ট রোড, হাতিরপুল, ঢাকা-১২০৫, বাংলাদেশ।",
    },
    actions: [
      { type: "external", href: site.mapLink, label: { en: "Open in Google Maps", bn: "Google Maps-এ দেখুন" } },
    ],
  },
];
