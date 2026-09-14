import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import MobileNav from "@/components/MobileNav";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <MobileNav />
      <Hero />
      <About />
      <Pricing />
      <Contacts />
      <Footer />
      <BackToTop />
    </>
  );
}
