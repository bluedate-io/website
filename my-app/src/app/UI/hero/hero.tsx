import React from 'react'
import Image from 'next/image'

import "./hero.css"

const hero = () => {
  return (
        <div className="HeroComponent">
            <div className="HeroComponent__in">
                <Image
                    src="/1.png"
                    alt="hero image 1"
                    width={300}
                    height={400}
                    className="hero__img hero__img--left"
                    style={{ height: 'auto' }}
                    sizes="(max-width: 639px) 0px, (max-width: 767px) 130px, (max-width: 1023px) 160px, (max-width: 1279px) 200px, (max-width: 1535px) 220px, 300px"
                />
                <Image
                    src="/2.png"
                    alt="hero image 2"
                    width={300}
                    height={400}
                    className="hero__img hero__img--right"
                    style={{ height: 'auto' }}
                    sizes="(max-width: 639px) 0px, (max-width: 767px) 130px, (max-width: 1023px) 160px, (max-width: 1279px) 200px, (max-width: 1535px) 220px, 300px"
                />
                <div className="hero__one">
                    <p>Welcome, The AI era of dating!</p>
                </div>
                <div className="hero__two">
                    <h1>
                        Get Real-Life{' '}
                        <span className="hero__coffee">
                            Coffee
                            <svg className="hero__circle" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                                <ellipse
                                    cx="100"
                                    cy="40"
                                    rx="92"
                                    ry="34"
                                    fill="none"
                                    stroke="#0080ff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    pathLength="100"
                                    strokeDasharray="100"
                                    strokeDashoffset="0"
                                    style={{
                                        filter: 'url(#roughen)',
                                    }}
                                />
                                <defs>
                                    <filter id="roughen">
                                        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" seed="2" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>{' '}
                        Dates
                    </h1>
                    <h1 className="hero__nowrap">Without Swiping</h1>
                </div>
                <div className="hero__three">
                    <p><span className="hero__at">@</span>your college</p>
                </div>
                <div className="hero__cta">
                    <button className="hero__cta-btn">Join Now</button>
                </div>
            </div>
        </div>
  )
}

export default hero
