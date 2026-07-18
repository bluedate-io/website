import React from 'react'
import Link from 'next/link'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      {/* ── Top row: tagline + nav ── */}
      <div className="footer__top">
        <p className="footer__tagline">
          Real meets.<br />Real connections.
        </p>

        <nav className="footer__nav">
          <div className="footer__nav-col">
            <a href="#" className="footer__link">Our Story</a>
            <a href="#" className="footer__link">Write to us</a>
            <a
              href="https://www.instagram.com/tryren.io/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="footer__nav-col">
            <Link href="/privacy" className="footer__link">Privacy Policy</Link>
            <Link href="/terms" className="footer__link">Terms &amp; Conditions</Link>
          </div>
        </nav>
      </div>

      {/* ── SVG filter for liquid distortion ── */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.008"
              numOctaves="3" seed="8" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise"
              scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── Full-bleed wordmark ── */}
      <div className="footer__wordmark" aria-hidden="true">tryren</div>

      {/* ── Bottom bar: overlaid on wordmark ── */}
      <div className="footer__bottom">
        <span className="footer__legal">Tryren</span>
        <span className="footer__credit">Designed and built in India</span>
      </div>

    </footer>
  )
}

export default Footer
