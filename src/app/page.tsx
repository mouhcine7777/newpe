import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CaseStudySection from "./components/CaseStudySection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudySection />
      <NewsletterSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}