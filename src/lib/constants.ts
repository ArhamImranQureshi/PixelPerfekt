export const siteConfig = {
  name: "Pixel Perfekt Solutions",
  tagline: "Transforming Ideas into Digital Excellence",
  description:
    "Pixel Perfekt Solutions is a full-service digital agency specializing in web development, UI/UX design, SEO optimization, and brand strategy. We help businesses grow with data-driven digital solutions.",
  url: "https://pixelperfektsolutions.com",
  ogImage: "/og-image.jpg",
  author: "Pixel Perfekt Solutions",
  email: "hello@pixelperfektsolutions.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
  social: {
    twitter: "https://x.com/pixelperfekt",
    linkedin: "https://linkedin.com/company/pixelperfekt",
    github: "https://github.com/pixelperfekt",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  {
    label: "Services",
    children: [
      { href: "/services/branding-design", label: "Branding Design" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/app-development", label: "App Development" },
      { href: "/services/content-writing", label: "Content Writing" },
      { href: "/services/social-media-marketing", label: "Social Media Marketing" },
      { href: "/services/seo-services", label: "SEO Services" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact" },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks for optimal performance and user experience.",
    icon: "⚡",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered designs that combine aesthetics with functionality to create memorable digital experiences.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve your search rankings and drive organic traffic to your site.",
    icon: "📈",
  },
  {
    title: "Brand Strategy",
    description:
      "Comprehensive branding solutions that define your identity and position you for market success.",
    icon: "🎯",
  },
  {
    title: "E-Commerce",
    description:
      "Scalable online stores with seamless checkout experiences and powerful backend integrations.",
    icon: "🛒",
  },
  {
    title: "Analytics & Insights",
    description:
      "Actionable data analytics that reveal customer behavior and help optimize your digital strategy.",
    icon: "📊",
  },
];

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Bloom Cosmetics",
    category: "E-Commerce",
    description:
      "A modern e-commerce platform with personalized product recommendations and seamless checkout.",
    image: "/portfolio-bloom.jpg",
  },
  {
    title: "FinFlow Dashboard",
    category: "Web App",
    description:
      "An interactive financial analytics dashboard with real-time data visualization.",
    image: "/portfolio-finflow.jpg",
  },
  {
    title: "GreenLeaf Blog",
    category: "Content",
    description:
      "A high-performance content platform optimized for SEO and reader engagement.",
    image: "/portfolio-greenleaf.jpg",
  },
  {
    title: "TechHire Portal",
    category: "Web App",
    description:
      "A recruitment platform connecting tech talent with leading companies through smart matching.",
    image: "/portfolio-techhire.jpg",
  },
];
