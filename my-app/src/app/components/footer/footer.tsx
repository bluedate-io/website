import React from 'react'
import Link from 'next/link'
import './footer.css'

const Footer = () => {
  return (
    <footer className="FooterComponent">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">bluedate.io</span>
            <p className="footer-tagline">Real dates. No swiping.</p>
          </div>

          <nav className="footer-nav">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#match">How it works</Link>
            <Link href="#faq">FAQ</Link>
          </nav>

          <Link href="#home" className="footer-cta">Join the waitlist &rarr;</Link>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; {new Date().getFullYear()} bluedate.io — All rights reserved.</span>
          <span className="footer-built">Built for real connections.</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
