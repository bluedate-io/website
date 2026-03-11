'use client';

import { useState, useTransition, useEffect } from 'react';
import Link from 'next/link';
import { joinWaitlist, getWaitlistCounts } from './actions';
import './waitlist.css';

export default function WaitlistPage() {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();
  const [counts, setCounts] = useState<{ men: number; women: number } | null>(null);

  useEffect(() => {
    getWaitlistCounts().then(setCounts).catch(() => {});
  }, []);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setErrorMsg('');
    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.success) setSuccess(true);
      else setErrorMsg(result.error ?? 'Something went wrong. Try again.');
    });
  }

  /* ── Success ── */
  if (success) {
    return (
      <div className="wl__page wl__page--center">
        <div className="wl__success-card">
          <span className="wl__success-emoji">🎉</span>
          <h1 className="wl__success-title">You&apos;re in.</h1>
          <p className="wl__success-body">
            You&apos;re on the <strong>Bluedate waitlist</strong>.<br />
            We&apos;ll reach out when your spot opens.
          </p>
          <div className="wl__offer">
            <p className="wl__offer-label">Early Access Offer</p>
            <div className="wl__offer-row">
              <span>First 500 men</span>
              <span className="wl__offer-tag">Lifetime Premium Free</span>
            </div>
            <div className="wl__offer-divider" />
            <div className="wl__offer-row">
              <span>First 1000 women</span>
              <span className="wl__offer-tag">Lifetime Premium Free</span>
            </div>
          </div>
          <Link href="/" className="wl__back">← Back to home</Link>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="wl__page">

      {/* Left panel */}
      <div className="wl__left">
        <Link href="/" className="wl__back-link">← bluedate.io</Link>

        <div className="wl__left-content">
          <div className="wl__badge">
            <span className="wl__badge-dot" />
            Early Access
          </div>
          <h1 className="wl__left-title">
            Real dates.<br />No swiping.
          </h1>
          <p className="wl__left-sub">
            Tell us your type, interests, and vibe — our AI agent finds you a compatible match and sends a real-life date invite.
          </p>

          <div className="wl__left-offer">
            <p className="wl__left-offer-label">Limited offer</p>
            <div className="wl__left-offer-row">
              <div>
                <p className="wl__left-offer-who">men joined</p>
                <p className="wl__left-offer-perk">Lifetime Premium Free · first 500</p>
              </div>
              <span className="wl__left-offer-num">
                {counts ? counts.men : '—'}
              </span>
            </div>
            <div className="wl__left-offer-sep" />
            <div className="wl__left-offer-row">
              <div>
                <p className="wl__left-offer-who">women joined</p>
                <p className="wl__left-offer-perk">Lifetime Premium Free · first 1,000</p>
              </div>
              <span className="wl__left-offer-num">
                {counts ? counts.women : '—'}
              </span>
            </div>
          </div>
        </div>

        <p className="wl__left-footnote">No credit card. No algorithms. Just real dates.</p>
      </div>

      {/* Right panel — form */}
      <div className="wl__right">
        <div className="wl__form-wrap">
          <div className="wl__form-header">
            <h2 className="wl__form-title">Join the Waitlist</h2>
            <p className="wl__form-sub">Be first in line when we launch.</p>
          </div>

          <form onSubmit={handleSubmit} className="wl__form">

            <div className="wl__field">
              <label className="wl__label">Email <span>*</span></label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="wl__input"
              />
            </div>

            <div className="wl__field">
              <label className="wl__label">Gender <span>*</span></label>
              <div className="wl__select-wrap">
                <select
                  name="gender"
                  required
                  defaultValue=""
                  className="wl__select"
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span className="wl__select-arrow">▾</span>
              </div>
            </div>

            <div className="wl__field">
              <label className="wl__label">City <span>*</span></label>
              <input
                name="city"
                type="text"
                required
                placeholder="Mumbai, Delhi, Bangalore..."
                className="wl__input"
              />
            </div>

            <div className="wl__field">
              <label className="wl__label">
                Phone <span className="wl__optional">(optional)</span>
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="wl__input"
              />
            </div>

            {errorMsg && <p className="wl__error">{errorMsg}</p>}

            <button type="submit" disabled={isPending} className="wl__submit">
              {isPending ? 'Joining...' : 'Claim My Spot →'}
            </button>

            <p className="wl__terms">
              By joining you agree to receive updates from Bluedate.
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}
