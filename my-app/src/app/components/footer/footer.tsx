"use client";
import { useState, useEffect } from "react";
import "./footer.css";

const bgImages = [
  "/hero/1.png",
  "/hero/2.png",
];

const navLinks = ["Home", "About", "Dating Tips", "Join Waitlist", "Contact"];

const Footer = () => {
  const [bg, setBg] = useState(bgImages[0]);

  useEffect(() => {
    const random = bgImages[Math.floor(Math.random() * bgImages.length)];
    setBg(random);
  }, []);

  return (
    <footer className="FooterComponent">
      {/* Background image with overlay */}
      <div
        className="footer__bg"
        style={{ backgroundImage: `url('${bg}')` }}
      />
      <div className="footer__overlay" />

      {/* Upper section */}
      <div className="footer__upper">
        <div className="footer__logo">
          <span className="footer__logo-text">bluedate.io</span>
        </div>

        <nav className="footer__nav">
          {navLinks.map((link) => (
            <a key={link} href="#" className="footer__nav-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {/* Facebook */}
          <a href="#" className="footer__social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="#" className="footer__social-icon" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="footer__social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="footer__social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="footer__divider" />

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-logo">
          <span className="footer__logo-text footer__logo-text--sm">bluedate.io</span>
        </div>

        <p className="footer__copyright">
          Copyright 2025&copy; bluedate.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;
