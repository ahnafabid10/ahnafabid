import AboutMe from "@/components/HomePage/AboutMe";
import Banner from "@/components/HomePage/Banner";
import Contact from "@/components/HomePage/Contact";
import Footer from "@/components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}
