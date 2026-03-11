import Link from 'next/link';
import './earlyaccess.css';

export default function EarlyAccess() {
  return (
    <section className="EarlyAccess" id="earlyaccess">
      <div className="EarlyAccess__in">

        <div className="ea__badge">
          <span className="ea__badge-dot" />
          <span className="ea__badge-text">Limited spots</span>
        </div>

        <div className="ea__content">
          <div className="ea__emoji">🎉</div>
          <h2 className="ea__title">
            You&apos;re on the<br />Bluedate Waitlist
          </h2>
          <p className="ea__sub">Early access offer</p>
          <div className="ea__offer">
            <div className="ea__offer-row">
              <span className="ea__offer-label">First 500 boys</span>
              <span className="ea__offer-pill">Lifetime Premium Free</span>
            </div>
            <div className="ea__offer-divider" />
            <div className="ea__offer-row">
              <span className="ea__offer-label">First 1000 girls</span>
              <span className="ea__offer-pill">Lifetime Premium Free</span>
            </div>
          </div>
        </div>

        <Link href="/waitlist" className="ea__cta">
          Claim your spot →
        </Link>

        <p className="ea__footnote">No credit card. No swiping. Just real dates.</p>

      </div>
    </section>
  );
}
