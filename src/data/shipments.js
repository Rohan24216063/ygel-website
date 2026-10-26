// ---------------------------------------------------------------------------
// Shipment template data (demo). To add a shipment, copy one object below,
// change the values, and keep `awb` unique. `stage` controls the progress bar:
//   0 Label Created | 1 Picked Up | 2 In Transit | 3 Customs | 4 Out for Delivery | 5 Delivered
// `history` is newest-first. Later, replace findShipment() with an API call.
// ---------------------------------------------------------------------------

export const stages = [
  "Label Created",
  "Picked Up",
  "In Transit",
  "Customs",
  "Out for Delivery",
  "Delivered",
];

export const shipments = [
  {
    awb: "16152332",
    refNo: "003",
    status: "Shipment Label Created",
    stage: 0,
    currentLocation: "Hatirpool, Bangladesh",
    lastUpdate: "Sunday, 11 October 2026 02:27 PM",
    origin: { city: "DHAKA", country: "BANGLADESH" },
    destination: { city: "MUMBAI", country: "INDIA" },
    details: {
      content: "SPX",
      service: "Yara Global",
      pcs: 1,
      bookingDate: "11-10-2026",
    },
    sender: {
      name: "ARISTOPHARMA LTD",
      address: "239, BIR UTTAM MIR SHAWKAT SARAK, TEJGAON-GULSHAN LINK ROAD, DHAKA",
    },
    receiver: {
      name: "QBD RESEARCH AND DEVELOPMENT LAB PVT LTD.",
      address:
        "2ND FLOOR, TSSIA HOUSE, PLOT NO. P-26, ROAD NO. 16/T, WAGLE INDUSTRIES ESTATE, THANE WEST- 400604, MAHARASHTRA",
    },
    history: [
      {
        status: "Shipment Label Created",
        location: "Hatirpool, Bangladesh",
        date: "11-10-2026",
        time: "02:27 PM",
      },
    ],
  },
  {
    awb: "16152301",
    refNo: "001",
    status: "Delivered",
    stage: 5,
    currentLocation: "London, United Kingdom",
    lastUpdate: "Friday, 09 October 2026 11:42 AM",
    origin: { city: "DHAKA", country: "BANGLADESH" },
    destination: { city: "LONDON", country: "UNITED KINGDOM" },
    details: {
      content: "DOCUMENTS",
      service: "Yara Express",
      pcs: 2,
      bookingDate: "04-10-2026",
    },
    sender: {
      name: "DEMO TEXTILES LTD",
      address: "HOUSE 12, ROAD 7, DHANMONDI, DHAKA-1205, BANGLADESH",
    },
    receiver: {
      name: "SAMPLE TRADING UK LTD.",
      address: "45 COMMERCIAL ROAD, WHITECHAPEL, LONDON E1 1LA, UNITED KINGDOM",
    },
    history: [
      { status: "Delivered — signed by J. Smith", location: "London, United Kingdom", date: "09-10-2026", time: "11:42 AM" },
      { status: "Out for Delivery", location: "London, United Kingdom", date: "09-10-2026", time: "08:15 AM" },
      { status: "Customs Clearance Completed", location: "London Heathrow, United Kingdom", date: "08-10-2026", time: "04:30 PM" },
      { status: "Arrived at Destination Hub", location: "London Heathrow, United Kingdom", date: "07-10-2026", time: "10:05 PM" },
      { status: "In Transit — Departed Origin", location: "Dhaka Airport, Bangladesh", date: "06-10-2026", time: "02:40 AM" },
      { status: "Picked Up", location: "Hatirpool, Bangladesh", date: "05-10-2026", time: "03:10 PM" },
      { status: "Shipment Label Created", location: "Hatirpool, Bangladesh", date: "04-10-2026", time: "12:20 PM" },
    ],
  },
];

/** Looks up a shipment by AWB. Async so it can later be swapped for a real API. */
export async function findShipment(awb) {
  const key = String(awb || "").trim().toUpperCase();
  await new Promise((resolve) => setTimeout(resolve, 600));
  return shipments.find((s) => s.awb.toUpperCase() === key) || null;
}
