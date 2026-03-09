import React from 'react'
import Image from 'next/image'

import "./working.css";

const working = () => {

  const options = [
    {
      title: "Tell Bluedate your type",
      description: "Share your type and the vibes you’re looking for.",
      image: "/working/type.png"
    },
    {
      title: "Get matched with your IRL dates",
      description: "We’ll match you with people who fit your vibe and are nearby.",
      image: "/working/match.webp"
    },
    {
      title: "Schedule your date",
      description: "Chat, plan, and meet up with your matches in real life.",
      image: "/working/schedule.png"
    },
    {
      title: "Have fun on your date",
      description: "Enjoy your time together and let us know how it went!",
      image: "/working/image.png"
    },
  ]

  return (
    <div className="WorkingComponent">
        <div className="WorkingComponent__in">

            <div className="working__one">
                <h1>How bluedate <span>works</span></h1>
            </div>

            <div className="working__two">
                {options.map((option, index) => (
                    <div className={`working__step ${index % 2 === 0 ? 'working__step__left' : 'working__step__right'}`} key={index}>
                        <h1>{index + 1}. {option.title}</h1>
                        <p>{option.description}</p>
                        <Image src={option.image} alt={option.title} width={100} height={100} />
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default working