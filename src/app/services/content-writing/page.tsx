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
  title: "Content Writing Services",
  description: `Professional content writing services by ${siteConfig.name}. SEO-optimized content that engages and converts.`,
};

export default function ContentWritingPage() {
  return (
   <>
    <NewServiceBanner service="content-writing" />
          <ParallaxImage service="content-writing" />
        <AboutReveal service="content-writing"/>
        <FeaturedProjects service="content-writing"/>
        <Portfolio 
            singleCategory="Branding" 
            hideTabs={true} 
            showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
          />
        <StackingCards service="content-writing"/>
        <TypesofServices service="content-writing"/>
        <PricingSection  service="content-writing"/>
        <FAQSection/>
        <ContactSection/>
          </>
  );
}
