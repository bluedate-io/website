import React from 'react'
import Link from 'next/link'
import "./hero.css"

const hero = () => {
  return (
        <div className="HeroComponent">
            <div className="HeroComponent__in">
                <div
                    className="hero__img hero__img--left"
                    role="img"
                    aria-label="hero image 1"
                    style={{ backgroundImage: 'url(/1.png)' }}
                />
                <div
                    className="hero__img hero__img--right"
                    role="img"
                    aria-label="hero image 2"
                    style={{ backgroundImage: 'url(/2.png)' }}
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
                    <Link href="/join"><button className="hero__cta-btn">Join Now</button></Link>
                </div>
            </div>
        </div>
  )
}

export default hero
