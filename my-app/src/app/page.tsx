import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Hero from "./ui/hero/hero";
import Working from "./ui/working/working";
import Why from "./ui/why/why";
import Verified from "./ui/verified/verified";
import Faq from "./ui/faq/faq";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent__in">
        <Navbar />
        <Hero />
        <Working />
        <Verified />
        <Why />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
