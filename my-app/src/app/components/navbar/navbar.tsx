import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './navbar.css'

const navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent__in">

                <div className="navbar__one">
                    <Image
                        src="/bluedate.png"
                        alt="Bluedate Logo"
                        width={20}
                        height={20}
                    />
                    <p>Bluedate</p>
                </div>
                <div className="navbar__two">
                    <Link href={'#home'}>Home</Link>
                    <Link href={'#about'}>About</Link>
                    <Link href={'#faq'}>FAQs</Link>
                </div>
                <div className="navbar__three">
                    <Link href={'/waitlist'} className="navbar__login-btn">Join waitlist</Link>
                </div>

            </div>
        </div>
  )
}

export default navbar