import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactSection from "@/components/CTA";
import FAQSection from "@/app/component/FAQ's";
import TypesofServices from "@/app/component/ServicesTypes";
import StackingCards from "@/app/component/ServiceProcess";
import NewServiceBanner from "@/app/component/NewServiceBanner";
import ParallaxImage from "@/app/component/Prallex";
import AboutReveal from "@/app/component/ServiceAbout";
import FeaturedProjects from "@/app/component/FeaturedProjects";
import Portfolio from "@/app/portfolio/page";
import PricingSection from "@/app/component/ServicePricing";

export const metadata: Metadata = {
  title: "SEO Services",
  description: `Professional SEO services by ${siteConfig.name}. Improve your search rankings and drive organic traffic.`,
};

export default function SeoServicesPage() {
  return (
    <>
    <NewServiceBanner service="seo" />
          <ParallaxImage service="seo" />
        <AboutReveal service="seo"/>
        <FeaturedProjects service="seo"/>
        <Portfolio 
            singleCategory="Branding" 
            hideTabs={true} 
            showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
          />
        <StackingCards service="seo"/>
        <TypesofServices service="seo"/>
        <PricingSection  service="seo"/>
        <FAQSection/>
        <ContactSection/>
          </>
  );
}
