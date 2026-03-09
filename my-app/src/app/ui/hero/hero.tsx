"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

import "./hero.css";

type DustMote = { left: string; animationDuration: string; animationDelay: string };

const hero = () => {
  const images = [
    "/hero/1.png",
    "/hero/2.png"
  ];
  const [current, setCurrent] = useState(0);
  const [dustMotes, setDustMotes] = useState<DustMote[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000); //
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDustMotes(
      Array.from({ length: 30 }, () => {
        const duration = Math.random() * 10 + 10;
        return {
          left: `${Math.random() * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${Math.random() * duration}s`,
        };
      })
    );
  }, []);

  return (
    <div className="HeroComponent">
      <div className="HeroComponent__in">
        {dustMotes.map((mote, i) => (
          <span
            key={i}
            className="hero__dust"
            style={mote}
          />
        ))}

        <div className="home__title">
          <p>No more <span>swipes</span></p>
        </div>

        <div className="hero__one">
          <h1>Get your IRL dates 1000X faster <br /> than traditional dating apps</h1>
        </div>
        <div className="hero__two">
          <Image src={images[current]} alt="college" width={300} height={500} />
        </div>
      </div>
    </div>
  );
};

export default hero;
