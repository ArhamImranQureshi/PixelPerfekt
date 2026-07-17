import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/about-us", "/contact-us", "/portfolio", "/pricing", "/faqs",
    "/get-quote", "/privacypolicy", "/terms-and-conditions",
    "/services/branding-design", "/services/web-development",
    "/services/app-development", "/services/content-writing",
    "/services/seo-services", "/services/social-media-marketing",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
