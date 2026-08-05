import React from 'react'
import './Trust.css'

/* ─────────────────────────────────────────────────────────────
   Safe #1 – Verified student badge
───────────────────────────────────────────────────────────── */
const BadgeSVG = () => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="trust__visual">
    <defs>
      <filter id="rf-badge">
        <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" seed="3" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>

    <g filter="url(#rf-badge)">
      {/* outer dashed ring */}
      <circle cx="120" cy="120" r="112" stroke="var(--text-primary)" strokeWidth="2" strokeDasharray="6 5" />
      {/* inner solid ring */}
      <circle cx="120" cy="120" r="96" stroke="var(--text-primary)" strokeWidth="2.5" />

      {/* TOP arc: "STUDENT VERIFIED"
          sweep=1 (CW in SVG Y-down) from left→top→right = text sits on top, outside */}
      <path id="bd-top" d="M 16,120 A 104,104 0 0,1 224,120" fill="none" />
      <text fontSize="13" fontWeight="800" fill="var(--text-primary)"
            fontFamily="Arial, sans-serif" letterSpacing="3.5">
        <textPath href="#bd-top" startOffset="50%" textAnchor="middle">STUDENT VERIFIED</textPath>
      </text>

      {/* BOTTOM text – straight, centred between the two rings at the bottom.
          SVG textPath bottom arcs always render reversed; a positioned <text> is cleaner. */}
      <text
        x="120" y="222"
        textAnchor="middle"
        fontSize="12" fontWeight="700"
        fill="var(--text-primary)"
        fontFamily="Arial, sans-serif"
        letterSpacing="4"
      >· TRYREN.IN ·</text>

      {/* shield */}
      <path
        d="M120,56 C94,56 78,71 78,90 L78,133 C78,160 97,178 120,188 C143,178 162,160 162,133 L162,90 C162,71 146,56 120,56 Z"
        fill="var(--accent-orange)" fillOpacity="0.15"
        stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round"
      />

      {/* checkmark – thick, rounded */}
      <path
        d="M 96,122 L 113,140 L 148,96"
        stroke="var(--text-primary)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* orange diamond separators at 4 compass points */}
      <polygon points="120,10 117,14 120,18 123,14" fill="var(--accent-orange)" />
      <polygon points="120,222 117,226 120,230 123,226" fill="var(--accent-orange)" />
      <polygon points="10,120 6,117 10,114 14,117" fill="var(--accent-orange)" />
      <polygon points="230,120 226,117 230,114 234,117" fill="var(--accent-orange)" />
    </g>
  </svg>
)

/* ─────────────────────────────────────────────────────────────
   Safe #2 – Only your match sees you
   Big clean padlock with heart keyhole
───────────────────────────────────────────────────────────── */
const LockSVG = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="trust__visual">
    <defs>
      <filter id="rf-lock">
        <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" seed="9" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>

    <g filter="url(#rf-lock)">
      {/* ── Shackle: thick U-arc well above the body ── */}
      <path
        d="M 54,112 L 54,66 Q 54,24 100,24 Q 146,24 146,66 L 146,112"
        stroke="var(--on-accent)" strokeWidth="14" strokeLinecap="round"
        fill="none"
      />
      {/* shackle inner highlight so it reads as a bar not a blob */}
      <path
        d="M 54,112 L 54,66 Q 54,24 100,24 Q 146,24 146,66 L 146,112"
        stroke="var(--navbar-logo-bg)" strokeWidth="5" strokeLinecap="round"
        fill="none" opacity="0.35"
      />

      {/* ── Lock body ── */}
      <rect x="20" y="104" width="160" height="110" rx="22"
        fill="var(--navbar-logo-bg)" stroke="var(--on-accent)" strokeWidth="3.5" />

      {/* ── Keyhole: circle + slot ── */}
      {/* outer circle (orange accent ring) */}
      <circle cx="100" cy="148" r="24"
        fill="var(--accent-orange)" fillOpacity="0.12"
        stroke="var(--on-accent)" strokeWidth="3" />
      {/* filled dark centre */}
      <circle cx="100" cy="148" r="11" fill="var(--on-accent)" />
      {/* slot below */}
      <rect x="93" y="157" width="14" height="28" rx="5" fill="var(--on-accent)" />

      {/* ── Small orange heart above keyhole ── */}
      <path
        d="M100,126 C100,120 107,120 107,126 C107,120 114,120 114,126 C114,132 107,138 107,138 C107,138 100,132 100,126 Z"
        fill="var(--accent-orange)"
      />
    </g>
  </svg>
)

/* ─────────────────────────────────────────────────────────────
   Safe #3 – Coffee meets on campus
   Clean coffee cup + simple building silhouette
───────────────────────────────────────────────────────────── */
const CoffeeSVG = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="trust__visual">
    <defs>
      <filter id="rf-coffee">
        <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="2" seed="12" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>

    <g filter="url(#rf-coffee)">
      {/* building silhouette (background) */}
      {/* main block */}
      <rect x="38" y="100" width="60" height="72" rx="3" fill="rgb(200,190,175)" stroke="var(--text-primary)" strokeWidth="2" />
      {/* windows */}
      <rect x="46" y="108" width="10" height="12" rx="1" fill="rgb(180,220,255)" opacity="0.9" />
      <rect x="62" y="108" width="10" height="12" rx="1" fill="rgb(180,220,255)" opacity="0.9" />
      <rect x="78" y="108" width="10" height="12" rx="1" fill="rgb(180,220,255)" opacity="0.9" />
      <rect x="46" y="126" width="10" height="12" rx="1" fill="rgb(180,220,255)" opacity="0.9" />
      <rect x="78" y="126" width="10" height="12" rx="1" fill="rgb(180,220,255)" opacity="0.9" />
      {/* door */}
      <rect x="59" y="148" width="14" height="24" rx="2" fill="var(--text-primary)" fillOpacity="0.35" />
      {/* tower */}
      <rect x="60" y="60" width="18" height="42" fill="rgb(215,205,190)" stroke="var(--text-primary)" strokeWidth="1.8" />
      {/* spire – orange tip */}
      <polygon points="69,36 58,62 80,62" fill="var(--accent-orange)" />
      {/* clock */}
      <circle cx="69" cy="76" r="6" fill="var(--surface)" stroke="var(--text-primary)" strokeWidth="1.5" />
      <line x1="69" y1="76" x2="69" y2="71" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="69" y1="76" x2="73" y2="76" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" />

      {/* ground line */}
      <line x1="22" y1="172" x2="198" y2="172" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" />

      {/* ── Coffee cup (foreground, right side) ── */}
      {/* steam */}
      <path d="M 148,68 C 148,58 154,58 154,48 C 154,38 160,38 160,28"
        stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 162,72 C 162,62 168,62 168,52 C 168,42 174,42 174,32"
        stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* cup body */}
      <path d="M 132,80 L 138,162 L 192,162 L 198,80 Z"
        fill="var(--surface)" stroke="var(--text-primary)" strokeWidth="3" strokeLinejoin="round" />
      {/* coffee fill */}
      <path d="M 134,96 L 138,162 L 192,162 L 196,96 Z"
        fill="var(--text-primary)" fillOpacity="0.08" />

      {/* handle */}
      <path d="M 195,102 C 215,102 215,140 195,140"
        stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* saucer */}
      <ellipse cx="165" cy="166" rx="42" ry="8"
        fill="var(--surface)" stroke="var(--text-primary)" strokeWidth="2.5" />

      {/* heart latte art */}
      <path d="M 158,118 C 158,113 163,113 163,118 C 163,113 168,113 168,118 C 168,123 163,128 163,128 C 163,128 158,123 158,118 Z"
        fill="var(--accent-orange)" />
    </g>
  </svg>
)

/* ── Component ─────────────────────────────────────────────── */
const Trust = () => {
  return (
    <section className="trust">
      <div className="trust__inner">

        <div className="trust__heading">
          <p className="trust__eyebrow">Why it&apos;s safe</p>
          <h2>
            Verified. Private.{' '}
            <span className="trust__orange">Safe.</span>
          </h2>
        </div>

        <div className="trust__cards">

          <div className="trust__card">
            <div className="trust__img-wrap">
              <BadgeSVG />
            </div>
            <p className="trust__num">Safe #1</p>
            <h3 className="trust__title">Verified students at your school only</h3>
          </div>

          <div className="trust__card trust__card--accent">
            <div className="trust__img-wrap">
              <LockSVG />
            </div>
            <p className="trust__num trust__num--light">Safe #2</p>
            <h3 className="trust__title trust__title--light">Only your meet sees you</h3>
          </div>

          <div className="trust__card">
            <div className="trust__img-wrap">
              <CoffeeSVG />
            </div>
            <p className="trust__num">Safe #3</p>
            <h3 className="trust__title">Coffee meets on campus</h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Trust
