import React from 'react'
import "./HowItWorks.css"

/* ── Shared SVG filter ─────────────────────────────────────── */
const RoughFilter = () => (
  <defs>
    <filter id="rough">
      <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" seed="5" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
)

/* ── Illustrations ─────────────────────────────────────────── */
const IconProfile = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hiw__icon-svg">
    <RoughFilter />
    <g filter="url(#rough)">
      <circle cx="50" cy="34" r="18" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M16 85 C16 65 84 65 84 85" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 34 C38 34 44 44 50 44 C56 44 62 34 62 34" stroke="var(--accent-orange)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M72 20 L76 24 L84 14" stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const IconCalendar = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hiw__icon-svg">
    <RoughFilter />
    <g filter="url(#rough)">
      <rect x="12" y="20" width="76" height="68" rx="8" stroke="var(--text-primary)" strokeWidth="3.5" />
      <path d="M12 38 L88 38" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 12 L34 28" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M66 12 L66 28" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="28" y="50" width="14" height="14" rx="3" fill="var(--accent-orange)" opacity="0.85" />
      <rect x="50" y="50" width="14" height="14" rx="3" stroke="var(--text-primary)" strokeWidth="2.5" />
      <rect x="28" y="70" width="14" height="10" rx="3" stroke="var(--text-primary)" strokeWidth="2.5" />
      <rect x="50" y="70" width="14" height="10" rx="3" stroke="var(--text-primary)" strokeWidth="2.5" />
    </g>
  </svg>
)

const IconChat = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hiw__icon-svg">
    <RoughFilter />
    <g filter="url(#rough)">
      <path d="M14 20 C14 14 86 14 86 20 L86 60 C86 66 14 66 14 60 Z" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M30 82 L26 66 L50 72 Z" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" fill="var(--surface)" />
      <path d="M30 38 L70 38" stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 50 L55 50" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </g>
  </svg>
)

const IconCoffee = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hiw__icon-svg">
    <RoughFilter />
    <g filter="url(#rough)">
      <path d="M20 38 L24 86 L76 86 L80 38 Z" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M80 46 C90 46 90 62 80 62" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 38 L86 38" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M36 20 C36 14 42 14 42 20 C42 26 48 26 48 20" stroke="var(--accent-orange)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 20 C52 14 58 14 58 20 C58 26 64 26 64 20" stroke="var(--accent-orange)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 92 L86 92" stroke="var(--text-primary)" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hiw__icon-svg">
    <RoughFilter />
    <g filter="url(#rough)">
      <path
        d="M50 10 L60 36 L88 36 L66 54 L74 82 L50 66 L26 82 L34 54 L12 36 L40 36 Z"
        stroke="var(--text-primary)" strokeWidth="3.5" strokeLinejoin="round"
        fill="var(--accent-orange)" fillOpacity="0.25"
      />
      <path d="M50 28 L54 40 L66 40 L56 48 L60 60 L50 52 L40 60 L44 48 L34 40 L46 40 Z"
        fill="var(--accent-orange)" fillOpacity="0.6"
      />
    </g>
  </svg>
)

/* ── Step data ─────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Tell Bluedate Your Type",
    desc: "Share your vibe, interests, and what you're looking for. Not just looks — real compatibility.",
    Icon: IconProfile,
    accent: false,
  },
  {
    num: "02",
    title: "Join the Weekly Drop",
    desc: "Opt in before Friday to be considered for that week. No swiping. No browsing. Just intent.",
    Icon: IconCalendar,
    accent: true,
  },
  {
    num: "03",
    title: "Get One Curated Match",
    desc: "We send one carefully selected match via WhatsApp — no overload, just one high-quality person.",
    Icon: IconChat,
    accent: false,
  },
  {
    num: "04",
    title: "Go on the Date",
    desc: "A curated coffee meet at a verified campus spot.",
    Icon: IconCoffee,
    accent: false,
  },
  {
    num: "05",
    title: "Give Feedback",
    desc: "Tell us how it went. We learn → your next match gets better.",
    Icon: IconStar,
    accent: false,
  },
]

const HowItWorks = () => {
  return (
    <section className="hiw">
      <div className="hiw__heading">
        <p className="hiw__label">The process</p>
        <h2>
          How it <span className="hiw__orange">actually</span> works
        </h2>
      </div>

      <div className="hiw__grid">
        {steps.map((step) => (
          <div key={step.num} className={`hiw__card${step.accent ? ' hiw__card--accent' : ''}`}>
            <div className="hiw__card-top">
              <span className="hiw__num">{step.num}</span>
              <step.Icon />
            </div>
            <h3 className="hiw__card-title">{step.title}</h3>
            <p className="hiw__card-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
