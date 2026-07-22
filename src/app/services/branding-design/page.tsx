import { Metadata } from "next";
import ParallaxImage from "@/app/component/Prallex";
import NewServiceBanner from "@/app/component/NewServiceBanner";
import AboutReveal from "@/app/component/ServiceAbout";
import FeaturedProjects from "@/app/component/FeaturedProjects";
import Portfolio from "@/app/portfolio/page";
import StackingCards from "@/app/component/ServiceProcess";
import TypesofServices from "@/app/component/ServicesTypes";
import { PricingSection } from "@/app/component/ServicePricing";
import ContactSection from "@/components/CTA";
import FAQSection from "@/app/component/FAQ's";
export const metadata: Metadata = {
  title: "Branding Services | Pixel Perfekt Solutions",
  description: "Transform your business with our comprehensive branding services. We specialize in brand strategy, visual identity, and brand guidelines.",
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      {/* <BrandingHero />
      
      <ServiceDetails />
      <BrandingProcess />
      <section id="portfolio">
        <BrandingPortfolio />
      </section>
      <BrandingPricing />
      <BrandingCTA />
      <BrandingFAQ />
      <BrandingContact /> */}
      <NewServiceBanner service="branding-design" />
      <ParallaxImage service="branding-design" />
    <AboutReveal service="branding-design"/>
    <FeaturedProjects/>
    <Portfolio 
        singleCategory="Branding" 
        hideTabs={true} 
        showHeader={true} // Agar title "You should believe we made it well" dikhana hai, nahi to false kar dein
      />
    <StackingCards/>
    <TypesofServices/>
    <PricingSection/>
    <FAQSection/>
    <ContactSection/>
    </main>
  );
}
