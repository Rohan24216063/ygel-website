import {
  ArrowLeftRight,
  Boxes,
  Building2,
  FileText,
  Globe2,
  Package,
  PackageOpen,
  Plane,
  Receipt,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

export const services = [
  {
    id: "international-courier",
    icon: Globe2,
    title: "International Courier",
    summary: "Send documents and parcels from Bangladesh to destinations worldwide.",
    details:
      "Door-to-door international courier for personal and commercial shipments, with clear transit guidance from pickup to delivery.",
    showOnHome: true,
  },
  {
    id: "express-delivery",
    icon: Zap,
    title: "Express Courier Service",
    summary: "Time-sensitive shipments handled with priority and care.",
    details:
      "Priority handling for urgent documents and parcels when delivery time matters.",
    showOnHome: true,
  },
  {
    id: "document-delivery",
    icon: FileText,
    title: "Document & Sample Delivery",
    summary: "Secure delivery for important personal and business documents.",
    details:
      "Dedicated handling for passports, certificates, contracts, and commercial samples between Bangladesh and the rest of the world.",
    showOnHome: true,
  },
  {
    id: "parcel-delivery",
    icon: Package,
    title: "Parcel Delivery",
    summary: "Safe shipping for personal and commercial packages.",
    details:
      "Packed and tracked parcel movement with options for economy or express service levels.",
    showOnHome: true,
  },
  {
    id: "corporate-courier",
    icon: Building2,
    title: "Corporate Courier",
    summary: "Professional logistics solutions for companies and organizations.",
    details:
      "Account-based shipping support for offices that send regular international documents and goods.",
    showOnHome: true,
  },
  {
    id: "global-shipping",
    icon: Boxes,
    title: "Global Shipping",
    summary: "International shipping connecting Bangladesh with the world.",
    details:
      "Coverage across major destinations with practical routing for documents, parcels, and commercial cargo.",
    showOnHome: true,
  },
  {
    id: "imports-exports",
    icon: ArrowLeftRight,
    title: "Exports and Imports",
    summary: "Two-way movement of goods between Bangladesh and overseas markets.",
    details:
      "Support for export and import shipments, including coordination around required paperwork.",
    showOnHome: false,
  },
  {
    id: "duties-taxes",
    icon: Receipt,
    title: "Delivery With or Without Duties",
    summary: "Shipments excluding or including duty and taxes.",
    details:
      "Guidance on DDU and DDP-style delivery so you can choose how duties and taxes are handled.",
    showOnHome: false,
  },
  {
    id: "pickup-delivery",
    icon: Truck,
    title: "Pick Up and Delivery",
    summary: "Collection and last-mile delivery arranged around your shipment.",
    details:
      "Pickup from your address and delivery to the destination, depending on the lane and service type.",
    showOnHome: false,
  },
  {
    id: "customs-clearance",
    icon: ShieldCheck,
    title: "Customs Clearance",
    summary: "Export and import clearance support at Dhaka Airport.",
    details:
      "Customs clearance assistance for export and import shipments moving through Dhaka Airport.",
    showOnHome: false,
  },
  {
    id: "air-freight",
    icon: Plane,
    title: "Airport to Airport Air Freight",
    summary: "Air freight between airports for larger commercial loads.",
    details:
      "Airport-to-airport air freight when your shipment is better suited to cargo than a courier bag.",
    showOnHome: false,
  },
  {
    id: "packaging",
    icon: PackageOpen,
    title: "Packaging Service",
    summary: "Packaging support so goods travel securely.",
    details:
      "Practical packing help for documents and parcels before they enter the international network.",
    showOnHome: false,
  },
];

export const homeServices = services.filter((item) => item.showOnHome);
