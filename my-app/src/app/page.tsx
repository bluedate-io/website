import Image from "next/image";

import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent__in">
        <Navbar />
      </div>
    </div>
  );
}
