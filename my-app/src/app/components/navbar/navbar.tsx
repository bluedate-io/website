import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import "./navbar.css"

const navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent__in">

                <div className="navbar__logo">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </div>

                <div className="navbar__name">
                    <h1>BlueDate</h1>
                </div>
                
                <div className="navbar__one">
                    <p>100% verified profiles & curated college meet spots.</p>
                </div>
                <div className="navbar__two">
                    <Link href="/join"><button>Get Started</button></Link>
                </div>
            </div>
        </div>
  )
}

export default navbar