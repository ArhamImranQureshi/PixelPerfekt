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
  title: "Social Media Marketing Services",
  description: `Expert social media marketing services by ${siteConfig.name}. Grow your brand across all major social platforms.`,
};

export default function SocialMediaMarketingPage() {
  return (
   <>
       <NewServiceBanner service="social-media-marketing" />
             <ParallaxImage service="social-media-marketing" />
           <AboutReveal service="social-media-marketing"/>
           <FeaturedProjects service="social-media-marketing"/>
           <Portfolio 
               singleCategory="Branding" 
               hideTabs={true} 
               showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
             />
           <StackingCards service="social-media-marketing"/>
           <TypesofServices service="social-media-marketing"/>
           <PricingSection  service="social-media-marketing"/>
           <FAQSection/>
           <ContactSection/>
             </>
  );
}
