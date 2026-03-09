import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Hero from "./ui/hero/hero";
import Working from "./ui/working/working";
import Why from "./ui/why/why";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent__in">
        <Navbar />
        <Hero />
        <Working /> 
        <Why />
      </div>
    </div>
  );
}
