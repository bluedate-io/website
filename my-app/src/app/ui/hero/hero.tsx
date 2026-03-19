import React from "react";
import Link from "next/link";

import "./hero.css";

const page = () => {
  return (
    <div className="HeroComponent" id="home">
      <div className="HeroComponent__in">
        <div className="hero__bg" />
        <div className="hero__badge">
          <span className="hero__badge-text">
            {" "}
            AI agents match you with the right person.
          </span>
          <Link href={"/waitlist"} className="hero__badge-btn">
            Join waitlist &rarr;
          </Link>
        </div>

        <div className="hero__main">
          <h1 className="hero__title">
            Get Real-Life Dates
            <br />
            <span className="hero__title__span" >Without Swiping</span>
          </h1>
          <p className="hero__tagline">
            Tell us your type, interests, and vibe. Our AI agent finds a
            compatible match and sends you a real-life date invite.
          </p>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-circle" />
          <div className="hero__scroll-line" />
          <div className="hero__scroll-arrow" />
          <span className="hero__scroll-label">scroll to know more</span>
        </div>

      </div>
    </div>
  );
};

export default page;
