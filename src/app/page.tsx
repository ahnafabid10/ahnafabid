import AboutMe from "@/components/HomePage/AboutMe";
import Banner from "@/components/HomePage/Banner";
import Contact from "@/components/HomePage/Contact";
import Projects from "@/components/HomePage/Projects";
import TechStacks from "@/components/HomePage/TechStacks";
import Footer from "@/components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <TechStacks/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
