import Hero from "@/app/UI/hero/hero";
import Navbar from "./components/navbar/navbar";
import HowItWorks from "./UI/how-it-works/HowItWorks";
import Trust from "./UI/trust/Trust";
import FAQ from "./UI/faq/FAQ";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent__in">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Trust />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
