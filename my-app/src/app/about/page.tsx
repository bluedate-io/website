import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/Footer";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tryren is an AI-powered matchmaking platform for college students in India — one curated match every week, real coffee meets on campus, no swiping.",
  alternates: { canonical: "/about" },
};

/* ── Hand-drawn decorations ─────────────────────────────────── */
const Squiggle = () => (
  <svg className="about__squiggle" viewBox="0 0 200 30" aria-hidden="true">
    <defs>
      <filter id="about-rough">
        <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <path
      d="M6 20 C30 8 50 26 74 16 C98 6 118 24 142 14 C160 7 178 18 194 12"
      fill="none"
      stroke="var(--accent-orange)"
      strokeWidth="3.5"
      strokeLinecap="round"
      filter="url(#about-rough)"
    />
  </svg>
)

const CoffeeSketch = () => (
  <svg className="about__sketch" viewBox="0 0 200 220" fill="none" aria-hidden="true">
    <defs>
      <filter id="about-sketch-rough">
        <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="2" seed="12" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <g filter="url(#about-sketch-rough)">
      <path
        d="M52 62 C52 46 66 38 80 38 C94 38 108 46 108 62"
        stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" fill="none"
      />
      <path
        d="M44 62 L46 172 C46 182 60 190 80 190 C100 190 114 182 114 172 L116 62 Z"
        fill="var(--surface)" stroke="var(--text-primary)" strokeWidth="4" strokeLinejoin="round"
      />
      <path
        d="M114 88 C140 88 140 146 114 146"
        stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" fill="none"
      />
      <line x1="34" y1="62" x2="126" y2="62" stroke="var(--text-primary)" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M80 100 C80 94 86 94 86 100 C86 94 92 94 92 100 C92 106 86 112 86 112 C86 112 80 106 80 100 Z"
        fill="var(--accent-orange)"
      />
      <path
        d="M62 44 C62 32 68 32 68 22 C68 14 72 12 76 10"
        stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" fill="none"
      />
      <path
        d="M94 46 C94 36 100 36 100 28 C100 20 104 18 108 16"
        stroke="var(--accent-orange)" strokeWidth="3" strokeLinecap="round" fill="none"
      />
    </g>
  </svg>
)

/* ── Values data ────────────────────────────────────────────── */
const values = [
  {
    num: "01",
    title: "Verified students, not strangers",
    desc: "Every profile is tied to a real college and verified before it can be matched. No catfish, no bots, no random profiles.",
  },
  {
    num: "02",
    title: "One match, not a feed",
    desc: "Instead of infinite scrolling, our AI curates one compatible person for you every week. Intent beats options.",
    accent: true,
  },
  {
    num: "03",
    title: "Real life first",
    desc: "Matches are made for meets — at campus canteens and trusted cafés. Two people, one coffee, a real conversation.",
  },
  {
    num: "04",
    title: "Privacy by design",
    desc: "Your profile is never publicly searchable. It is shared only with your curated match and the people who help us run Tryren.",
  },
]

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Navbar />
      <main className="AboutPage__main">
        <div className="AboutPage__in">

          <header className="about__hero">
            <p className="about__label">About us</p>
            <h1 className="about__title">
              Meeting people in the AI era,{" "}
              <span className="about__orange">done differently</span>
              <Squiggle />
            </h1>
            <p className="about__intro">
              Tryren is a matchmaking platform built for college students in India.
              No swiping. No infinite scroll. No ghosting. Just one curated
              match every week and a real coffee meet to go with it.
            </p>
          </header>

          <section className="about__story">
            <div className="about__story-text">
              <p className="about__label about__label--left">Our story</p>
              <h2 className="about__h2">
                Why <span className="about__orange">Tryren</span> exists
              </h2>
              <p>
                Swiping apps made meeting people feel like shopping — thousands of
                faces, seconds of attention, and almost nothing real at the end of
                it. For college students, the loneliness was louder than the noise:
                surrounded by thousands of people on campus, and still no real
                connection.
              </p>
              <p>
                Tryren was built to fix that. We use AI to do the hard work — reading
                your vibe, your preferences, and your feedback from past meets — so
                we can send you one highly compatible match every week. Then we get
                you off the screen and into a coffee shop, because that&apos;s where
                connections actually happen.
              </p>
            </div>
            <div className="about__story-art">
              <CoffeeSketch />
            </div>
          </section>

          <section className="about__values">
            <p className="about__label">What we believe in</p>
            <h2 className="about__h2">
              The <span className="about__orange">Tryren</span> way
            </h2>

            <div className="about__grid">
              {values.map((v) => (
                <div
                  key={v.num}
                  className={`about__card${v.accent ? " about__card--accent" : ""}`}
                >
                  <div className="about__card-top">
                    <span className="about__card-num">{v.num}</span>
                  </div>
                  <h3 className="about__card-title">{v.title}</h3>
                  <p className="about__card-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about__philosophy">
            <p className="about__pullquote">
              &ldquo;One good meet beats a hundred swipes.&rdquo;
            </p>
            <p className="about__philosophy-sub">
              That&apos;s it. That&apos;s the whole philosophy. We keep the weekly drop
              simple — opt in before Friday, get your match on WhatsApp, and go
              meet for a coffee.
            </p>
          </section>

          <section className="about__cta">
            <h2 className="about__h2 about__h2--cta">
              Ready for your first <span className="about__orange">real meet?</span>
            </h2>
            <Link href="/join" className="about__btn">
              Join Tryren
            </Link>
            <p className="about__cta-sub">
              Free to start. Your first match is a click away.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
