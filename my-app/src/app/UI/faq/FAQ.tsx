'use client'

import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'How does Tryren match me?',
    a: 'We use your preferences, vibe, and feedback from past meets to curate one highly compatible match every week — no random profiles.',
  },
  {
    q: 'Why only one match per week?',
    a: 'Because quality > quantity. Instead of overwhelming you with options, we focus on one meaningful connection at a time.',
  },
  {
    q: 'How will I receive my match?',
    a: 'Your curated match is sent directly to you via WhatsApp, making it simple and personal.',
  },
  {
    q: 'Is it safe to go on these meets?',
    a: 'Meets are designed around campus canteens or public cafés. Always use your own judgment, tell someone you trust where you are going, and leave if you feel unsafe.',
  },
]

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq">
      <div className="faq__inner">

        <header className="faq__head">
          <p className="faq__eyebrow">Questions</p>
          <h2 className="faq__heading">Answers,<br />before you even ask.</h2>
        </header>

        <ul className="faq__list">
          {faqs.map((item, i) => (
            <li key={i} className="faq__item">
              <button
                className={`faq__q${open === i ? ' faq__q--open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <svg
                  className="faq__chevron"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`faq__answer-wrapper${open === i ? ' open' : ''}`}>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>

              <div className="faq__divider" />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default FAQ
