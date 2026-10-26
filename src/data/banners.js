import customs from "../assets/images/slide-customs-v2.webp";
import doorToDoor from "../assets/images/slide-door-to-door-v6.webp";
import globalShipping from "../assets/images/slide-global-shipping.webp";
import worldwide from "../assets/images/slide-worldwide.webp";

export const banners = [
  {
    src: worldwide,
    alt: "Night map of shipping routes from Bangladesh to Tokyo, Singapore and Sydney",
    caption: "Worldwide Courier Service",
    focusX: "64%",
    focusY: "48%",
  },
  {
    src: doorToDoor,
    alt: "Yara courier handing a parcel to a customer at the door",
    caption: "Door To Door Parcel & Documents Delivery",
    focusX: "70%",
    focusY: "48%",
    feature: true,
  },
  {
    src: globalShipping,
    alt: "Yara cargo being loaded onto a freight aircraft at night",
    caption: "Global Shipping",
    focusX: "70%",
    focusY: "58%",
  },
  {
    src: customs,
    alt: "Yara courier desk at the airport with an officer reviewing shipments",
    caption: "Customs Clearance Service",
    focusX: "68%",
    focusY: "38%",
  },
];
