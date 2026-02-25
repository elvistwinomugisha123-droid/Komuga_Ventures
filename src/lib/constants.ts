export const COMPANY = {
  name: "Komuga Ventures",
  legalName: "Komuga Limited Ventures",
  tagline: "Your Business, Backed by a Partner You Can Trust",
  subheadline:
    "Strategic guidance, banking, mobile money, and internet solutions — all under one roof in Bukoto, Kampala.",
  description:
    "Komuga Limited Ventures is a fully registered, growth-focused business based in Bukoto, Kampala. We provide strategic business guidance alongside essential services like agent banking, mobile money, internet connectivity, and data solutions — all delivered with transparency and trust.",
  mission:
    "To empower individuals and businesses in Uganda with accessible, transparent, and reliable financial and connectivity services that fuel sustainable growth.",
  phone: "+256 787 767 132",
  phoneAlt: "+256 758 320 515",
  whatsapp: "256787767132",
  address: "Bukoto, Kampala, Uganda",
  facebook: "https://www.facebook.com/profile.php?id=61575539498498",
  trustBadge:
    "Fully Registered with URSB & URA · Identified High-Growth Business",
};

export const CEO = {
  name: "Mr. Mugabe Rodgers",
  title: "CEO & Founder, Komuga Limited Ventures",
  phone: "+256 787 767 132",
  phoneAlt: "+256 758 320 515",
  whatsapp: "256787767132",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Strategic Business Guidance",
    description: "Expert advisory to help your business grow smarter.",
    icon: "compass",
  },
  {
    title: "Agent Banking",
    description: "Access banking services from multiple Ugandan banks.",
    icon: "bank",
  },
  {
    title: "Mobile Money",
    description: "Fast, reliable MoMo transactions at your convenience.",
    icon: "phone",
  },
  {
    title: "Internet Services",
    description: "Airtel, MTN & Lyca connectivity solutions.",
    icon: "wifi",
  },
  {
    title: "Prepaid Data Bundles",
    description: "Flexible data plans for individuals and businesses.",
    icon: "data",
  },
  {
    title: "Router Bundles",
    description: "Business-grade routers with transparent pricing.",
    icon: "router",
  },
];

export const TRUST_PILLARS = [
  {
    emoji: "check",
    title: "Fully Registered",
    description: "URSB & URA certified, no doubts.",
  },
  {
    emoji: "handshake",
    title: "Transparent Systems",
    description: "Honest, no-hidden-fee service delivery.",
  },
  {
    emoji: "growth",
    title: "Growth-Focused",
    description: "We grow when you grow.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Small Business Owner, Bukoto",
    text: "Komuga has been a game-changer for my shop. Their mobile money service is fast, and Rodgers always goes the extra mile to help.",
  },
  {
    name: "David M.",
    role: "Freelance Consultant",
    text: "I switched to Komuga for my internet bundles and never looked back. Transparent pricing, no hidden fees — exactly what they promise.",
  },
  {
    name: "Grace N.",
    role: "Restaurant Owner, Kampala",
    text: "The business guidance I received helped me restructure my operations. They truly care about their clients' growth.",
  },
];
