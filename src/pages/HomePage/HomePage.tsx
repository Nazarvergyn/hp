import AboutUs from "../../components/AboutUs/AboutUs";
import Advantages from "../../components/Advantages/Advantages";
import ContactSection from "../../components/ContactSection/ContactSection";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Projects from "../../components/Projects/Projects";

const HomePage = () => {
  return (
    <div
        style={{
          backgroundImage: "url('/bg-main.jpg')",
        }}
        className="overflow-x-hidden w-full pt-12 md:pt-16 lg:pt-24 flex flex-col gap-12 md:gap-16 lg:gap-24 min-h-screen bg-cover bg-no-repeat"
      >
      <HeroSection />
      <AboutUs />
      <Projects />
      <Advantages />
      <ContactSection />
      <FAQ  />
      <Footer />
    </div>
  );
};

export default HomePage;