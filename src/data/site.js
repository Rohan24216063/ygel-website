export const site = {
  name: "Yara Global Express Ltd.",
  shortName: "YGE",
  tagline:
    "Reliable international courier solutions connecting Bangladesh with the world.",
  email: "info@ygexbd.com",
  phones: [
    { display: "+880 1708-524036", href: "tel:+8801708524036" },
    { display: "+880 9611-678675", href: "tel:+8809611678675" },
    { display: "+880 1812-705950", href: "tel:+8801812705950" },
  ],
  whatsapp: "https://wa.me/8801708524036",
  facebook: "https://www.facebook.com/yaraglobalexpressbd/",
  address:
    "Joydul Manor (2nd Floor), 159 New Elephant Road, Hatirpool, Dhaka-1205, Bangladesh",
  mapEmbed:
    "https://www.google.com/maps?q=Yara+Global+Express+Ltd+Joydul+Manor+159+New+Elephant+Rd+Dhaka+1205&output=embed",
  mapLink:
    "https://www.google.com/maps/search/Yara+Global+Express+Joydul+Manor+159+New+Elephant+Rd+Dhaka+1205",
  quoteEndpoint: "https://formsubmit.co/ajax/info@ygexbd.com",
};

export const quotePath = "/contact#quote";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/#why-us" },
  { label: "How It Works", to: "/#process" },
  { label: "Track", to: "/tracking" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 200, suffix: "+", label: "Destinations" },
  { value: 45, suffix: "K+", label: "Shipments" },
  { value: 11, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

// Returns a stat as display text, e.g. statText("Destinations") -> "200+".
export const statText = (label) => {
  const stat = stats.find((s) => s.label === label);
  return stat ? `${stat.value}${stat.suffix}` : "";
};

