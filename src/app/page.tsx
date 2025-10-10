import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import PortfolioSection from "@/components/Portfolio";



export default function Home () {
  return(
    <>
      <div>
        <HeroSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactSection/>
      </div>
    </>
  )
}