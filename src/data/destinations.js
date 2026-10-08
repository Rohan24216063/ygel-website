export const destinations = [
  { id: "us", name: "United States", region: "USA", featured: true },
  { id: "gb", name: "United Kingdom", region: "UK", featured: true },
  { id: "ca", name: "Canada", region: "North America", featured: true },
  { id: "au", name: "Australia", region: "Oceania", featured: true },
  { id: "it", name: "Italy", region: "Europe", featured: true },
  { id: "de", name: "Germany", region: "Europe", featured: true },
  { id: "ae", name: "United Arab Emirates", region: "Middle East", featured: false },
  { id: "sa", name: "Saudi Arabia", region: "Middle East", featured: false },
  { id: "fr", name: "France", region: "Europe", featured: false },
  { id: "nl", name: "Netherlands", region: "Europe", featured: false },
  { id: "jp", name: "Japan", region: "Asia", featured: false },
  { id: "sg", name: "Singapore", region: "Asia", featured: false },
  { id: "my", name: "Malaysia", region: "Asia", featured: false },
  { id: "kr", name: "South Korea", region: "Asia", featured: false },
  { id: "cn", name: "China", region: "Asia", featured: false },
  { id: "nz", name: "New Zealand", region: "Oceania", featured: false },
  { id: "ch", name: "Switzerland", region: "Europe", featured: false },
  { id: "es", name: "Spain", region: "Europe", featured: false },
];

export function flagUrl(countryId) {
  return `https://flagcdn.com/${countryId}.svg`;
}
