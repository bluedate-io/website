import React from 'react'
import Link from 'next/link'

import './navbar.css'

const navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent__in">

                <div className="navbar__one">
                    <p>bluedate.io</p>
                </div>
                <div className="navbar__two">
                    <Link href={'#home'}>Home</Link>
                    <Link href={'#about'}>About</Link>
                    <Link href={'#faq'}>FAQs</Link>
                </div>
                <div className="navbar__three">
                    <Link href={'#home'} className="navbar__login-btn">Join waitlist</Link>
                </div>

            </div>
        </div>
  )
}

export default navbar