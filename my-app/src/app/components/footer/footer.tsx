import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="FooterComponent">
      <div className="FooterComponent__in">
        <div className="footer__card">
          <div className="footer__card__content">
            <p className="footer__eyebrow">Ready to go on real dates?</p>
            <h2 className="footer__headline">
              Ready to grow your dating life?
              <span> Let&apos;s get started</span>
            </h2>

            <div className="footer__contact">
              <div className="footer__contact__details">
                <p className="footer__contact__label">Get in touch</p>
                <a href="mailto:hello@bluedate.io" className="footer__link">
                  hello@bluedate.io
                </a>
                <a href="tel:+14408407532" className="footer__link">
                  +1 (440) 840-7532
                </a>
                <a href="tel:+14467353224" className="footer__link">
                  +1 (446) 735-3224
                </a>
              </div>

              <form className="footer__form">
                <div className="footer__form__row footer__form__row--split">
                  <label className="footer__field">
                    <span>First Name</span>
                    <input type="text" placeholder="First name" />
                  </label>
                  <label className="footer__field">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last name" />
                  </label>
                </div>

                <div className="footer__form__row">
                  <label className="footer__field">
                    <span>Email</span>
                    <input type="email" placeholder="you@example.com" />
                  </label>
                </div>

                <div className="footer__form__row">
                  <label className="footer__field">
                    <span>Message</span>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you have in mind"
                    />
                  </label>
                </div>

                <button type="submit" className="footer__submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__bottom__links">
              <div className="footer__bottom__column">
                <p className="footer__bottom__heading">Company</p>
                <button type="button">About</button>
                <button type="button">Careers</button>
                <button type="button">Press</button>
              </div>

              <div className="footer__bottom__column">
                <p className="footer__bottom__heading">Product</p>
                <button type="button">How it works</button>
                <button type="button">Safety</button>
                <button type="button">FAQ</button>
              </div>

              <div className="footer__bottom__column">
                <p className="footer__bottom__heading">Legal</p>
                <button type="button">Terms</button>
                <button type="button">Privacy</button>
              </div>
            </div>

            <div className="footer__bottom__meta">
              <p>© {new Date().getFullYear()} bluedate. All rights reserved.</p>
            </div>

            <div className="footer__wordmark" aria-hidden="true">
              bluedate.io
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

