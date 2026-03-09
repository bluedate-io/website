import React from 'react'
import Image from 'next/image'

import "./verified.css";

const safeCards = [
  {
    label: "Safe #1",
    title: "Verified students at your College / City only",
    image: "/verify/student.png",
  },
  {
    label: "Safe #2",
    title: "Only your date sees you",
    image: "/verify/image.png",
  },
  {
    label: "Safe #3",
    title: "Coffee dates on campus / City",
    image: "/verify/date.png",
  },
];

const Verified = () => {
  return (
    <div className="VerifiedComponent">
      <div className="VerifiedComponent__in">

        <div className="verified__title">
          <h1>Verified. Private. <span>Safe.</span></h1>
        </div>

        <div className="verified__cards">
          {safeCards.map((card, index) => (
            <div className="verified__card" key={index}>
              <div className="verified__card__image">
                <Image src={card.image} alt={card.title} width={200} height={200} />
              </div>
              <p className="verified__card__label">{card.label}</p>
              <h2 className="verified__card__title">{card.title}</h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Verified
