export const COMPANY = {
  name: "Komuga Ventures",
  legalName: "Komuga Ventures Limited",
  tagline: "Building Tomorrow's Industries, Today",
  description:
    "A diversified investment firm driving sustainable growth across multiple sectors in emerging markets.",
  email: "info@komugaventures.com",
  phone: "+250 788 000 000",
  address: "Kigali, Rwanda",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export const HIGHLIGHTS = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Portfolio Companies" },
  { value: "6", label: "Industry Sectors" },
  { value: "$100M+", label: "Assets Under Guidance" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Private Equity",
    description:
      "Strategic investments in high-growth companies with strong fundamentals and scalable business models.",
    icon: "chart",
  },
  {
    title: "Real Estate",
    description:
      "Development and management of commercial and residential properties across key urban markets.",
    icon: "building",
  },
  {
    title: "Agribusiness",
    description:
      "Modernizing agriculture through technology-driven farming, processing, and distribution solutions.",
    icon: "leaf",
  },
  {
    title: "Technology",
    description:
      "Investing in innovative tech startups and digital transformation initiatives across the region.",
    icon: "cpu",
  },
  {
    title: "Financial Advisory",
    description:
      "Expert guidance on mergers, acquisitions, capital raising, and corporate restructuring.",
    icon: "briefcase",
  },
  {
    title: "Energy & Infrastructure",
    description:
      "Building sustainable energy solutions and critical infrastructure for growing economies.",
    icon: "bolt",
  },
];
