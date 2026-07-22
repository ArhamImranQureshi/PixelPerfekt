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
  title: "App Development Services",
  description: `Professional mobile app development services by ${siteConfig.name}. We build native and cross-platform apps for iOS and Android.`,
};

export default function AppDevelopmentPage() {
  return (
    <>
    <NewServiceBanner service="app-development" />
          <ParallaxImage service="app-development" />
        <AboutReveal service="app-development"/>
        <FeaturedProjects service="app-development"/>
        <Portfolio 
            singleCategory="Branding" 
            hideTabs={true} 
            showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
          />
        <StackingCards service="app-development"/>
        <TypesofServices service="app-development"/>
        <PricingSection  service="app-development"/>
        <FAQSection/>
        <ContactSection/>
          </>
  );
}
