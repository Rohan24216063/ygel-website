import {
  ArrowLeftRight,
  Building2,
  FileText,
  FlaskConical,
  Headset,
  PackageSearch,
  Pill,
  Receipt,
  ShieldCheck,
  Thermometer,
  Truck,
  Zap,
} from "lucide-react";

export const services = [
  {
    id: "document-parcel",
    icon: FileText,
    title: "International Document & Parcel Delivery",
    summary:
      "Secure door-to-door delivery of personal and commercial documents and parcels, from booking to final destination.",
    details:
      "Secure door-to-door delivery of personal and commercial documents and parcels, from booking to final destination.",
    showOnHome: true,
  },
  {
    id: "express-courier",
    icon: Zap,
    title: "International Express Courier Services",
    summary:
      "Priority express shipping for urgent documents and parcels from Bangladesh to international destinations.",
    details:
      "Priority express shipping for urgent documents and parcels from Bangladesh to international destinations.",
    showOnHome: true,
  },
  {
    id: "corporate-shipping",
    icon: Building2,
    title: "Corporate & Business Shipping Solutions",
    summary:
      "Reliable, coordinated shipping solutions for businesses with regular document, sample, and goods shipments.",
    details:
      "Reliable, coordinated shipping solutions for businesses with regular document, sample, and goods shipments.",
    showOnHome: true,
  },
  {
    id: "import-export",
    icon: ArrowLeftRight,
    title: "International Import & Export Shipments",
    summary:
      "Reliable coordination of international import and export shipments, with assistance in preparing the required shipping documents.",
    details:
      "Reliable coordination of international import and export shipments, with assistance in preparing the required shipping documents.",
    showOnHome: true,
  },
  {
    id: "pickup-delivery",
    icon: Truck,
    title: "Pickup & Delivery Services",
    summary:
      "Convenient pickup and reliable delivery of documents and parcels, tailored to your destination and service needs.",
    details:
      "Convenient pickup and reliable delivery of documents and parcels, tailored to your destination and service needs.",
    showOnHome: true,
  },
  {
    id: "tracking-updates",
    link: "/tracking",
    linkLabel: "Track now",
    icon: PackageSearch,
    title: "Shipment Tracking & Status Updates",
    summary:
      "Track your shipment with your tracking number and receive transit updates from our team.",
    details:
      "Track your shipment with your tracking number and receive transit updates from our team.",
    showOnHome: true,
  },
  {
    id: "customs-updates",
    icon: ShieldCheck,
    title: "Customs Clearance",
    summary:
      "Assistance with import and export customs clearance, with regular shipment status updates.",
    details:
      "Assistance with import and export customs clearance, with regular shipment status updates.",
    showOnHome: false,
  },
  {
    id: "customer-support",
    icon: Headset,
    title: "Customer Service & Support",
    summary:
      "Contact our team by phone, WhatsApp, or email for quotations, booking assistance, and shipment support.",
    details:
      "Contact our team by phone, WhatsApp, or email for quotations, booking assistance, and shipment support.",
    showOnHome: false,
  },
  {
    id: "duties",
    icon: Receipt,
    title: "Delivery with Duties Paid or Unpaid",
    summary:
      "Clear duty and tax payment options explained before booking, so you can choose who pays.",
    details:
      "Clear duty and tax payment options explained before booking, so you can choose who pays.",
    showOnHome: false,
  },
];

export const pharmaServices = [
  {
    id: "pharma-healthcare",
    icon: Pill,
    title: "Pharmaceutical & Healthcare Shipments",
    summary:
      "Reliable international courier solutions for pharmaceutical and healthcare products, tailored to product requirements and destination needs.",
    details:
      "Reliable international courier solutions for pharmaceutical and healthcare products, tailored to product requirements and destination needs.",
  },
  {
    id: "temperature-sensitive",
    icon: Thermometer,
    title: "Temperature-Sensitive Shipments",
    summary:
      "Packing guidance, booking assistance, and suitable shipping options for temperature-sensitive pharmaceutical products.",
    details:
      "Packing guidance, booking assistance, and suitable shipping options for temperature-sensitive pharmaceutical products.",
  },
  {
    id: "pharma-samples",
    icon: FileText,
    title: "Pharmaceutical Sample & Document Delivery",
    summary:
      "Secure and reliable international shipping for pharmaceutical samples, dossiers, and business documents worldwide.",
    details:
      "Secure and reliable international shipping for pharmaceutical samples, dossiers, and business documents worldwide.",
  },
];

export const homeServices = services.filter((item) => item.showOnHome);
