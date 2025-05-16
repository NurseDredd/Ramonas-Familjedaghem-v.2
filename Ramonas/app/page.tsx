import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import ScheduleGallerySection from "@/components/ScheduleGallerySection/ScheduleGallerySection";
import ActivitiesSection from "@/components/ActivitiesSection/ActivitiesSection";
import FoodSection from "@/components/FoodSection/FoodSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import BackToTopBtn from "@/components/BackToTopBtn/BackToTopBtn";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ScheduleGallerySection />
      <ActivitiesSection />
      <FoodSection />
      <ContactSection />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
