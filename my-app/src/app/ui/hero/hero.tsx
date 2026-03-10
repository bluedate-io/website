"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

import "./hero.css";

const hero = () => {
  // Slideshow state
  const images = [
    "/hero/1.png",
    "/hero/2.png"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HeroComponent">
      <div className="HeroComponent__in">

        <div className="home__title">
          <p>No more <span>swipes</span></p>
        </div>

        <div className="hero__one">
          <h1>Verified people. Private profiles. <br />
          Coffee dates.</h1>
        </div>
        <div className="hero__two">
          <Image src={images[current]} alt="college" width={300} height={500} />
        </div>
      </div>
    </div>
  );
};

export default hero;
