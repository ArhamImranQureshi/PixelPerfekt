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
  title: "Web Development Services",
  description: `Professional web development services by ${siteConfig.name}. Custom websites and web applications built with modern technologies.`,
};

export default function WebDevelopmentPage() {
  return (
    <>
    <NewServiceBanner service="web-development" />
          <ParallaxImage service="web-development" />
        <AboutReveal service="web-development"/>
        <FeaturedProjects service="web-development"/>
        <Portfolio 
            singleCategory="Branding" 
            hideTabs={true} 
            showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
          />
        <StackingCards service="web-development"/>
        <TypesofServices service="web-development"/>
        <PricingSection  service="web-development"/>
        <FAQSection/>
        <ContactSection/>
          </>
  );
}
