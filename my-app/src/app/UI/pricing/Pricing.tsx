import React from 'react'
import Link from 'next/link'
import './Pricing.css'

/* ── SVG icons ───────────────────────────────────────────────── */
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10.5L8 14.5L16 5.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CrossIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

/* ── Plan data ───────────────────────────────────────────────── */
const plans = [
  {
    name: 'Basic',
    price: 'Free',
    period: '',
    featured: false,
    features: [
      { text: 'Full profile & onboarding', included: true },
      { text: 'Browse the app', included: true },
      { text: 'Weekly matchmaking', included: true },
      { text: 'Priority matching', included: false },
    ],
  },
  {
    name: 'VIP',
    price: '₹99',
    period: '/ 30 days',
    featured: true,
    badge: 'Most popular',
    features: [
      { text: 'Full profile & onboarding', included: true },
      { text: 'Browse the app', included: true },
      { text: 'Weekly matchmaking', included: true },
      { text: 'Priority matching', included: true },
    ],
  },
]

/* ── Component ───────────────────────────────────────────────── */
const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__inner">

        <div className="pricing__heading">
          <p className="pricing__eyebrow">Pricing</p>
          <h2>
            Simple,{' '}
            <span className="pricing__orange">transparent</span>{' '}
            plans
          </h2>
          <p className="pricing__subtitle">
            Start for free. Upgrade when you&apos;re ready for priority matching.
          </p>
        </div>

        <div className="pricing__cards">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing__card${plan.featured ? ' pricing__card--featured' : ''}`}
            >
              {plan.badge && (
                <span className="pricing__badge">{plan.badge}</span>
              )}

              <div className="pricing__card-header">
                <p className="pricing__plan-name">{plan.name}</p>
                <div className="pricing__price">
                  <span className="pricing__amount">{plan.price}</span>
                  {plan.period && (
                    <span className="pricing__period">{plan.period}</span>
                  )}
                </div>
              </div>

              <hr className="pricing__divider" />

              <ul className="pricing__features">
                {plan.features.map((f) => (
                  <li key={f.text} className="pricing__feature">
                    <span
                      className={`pricing__icon ${f.included ? 'pricing__icon--check' : 'pricing__icon--cross'}`}
                    >
                      {f.included ? <CheckIcon /> : <CrossIcon />}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link
                href="/join"
                className={`pricing__cta${plan.featured ? ' pricing__cta--featured' : ''}`}
              >
                {plan.featured ? 'Get VIP' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
