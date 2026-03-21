'use client'

import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'How does Bluedate match me?',
    a: 'We use your preferences, vibe, and feedback from past dates to curate one highly compatible match every week — no random profiles.',
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
    q: 'Is it safe to go on these dates?',
    a: 'Yes. All dates are designed around verified campus canteens or trusted public cafés, ensuring a safe and comfortable environment.',
  },
]

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq">
      <div className="faq__inner">

        <h2 className="faq__heading">Questions you might have</h2>

        <ul className="faq__list">
          {faqs.map((item, i) => (
            <li key={i} className="faq__item">
              <button
                className={`faq__q${open === i ? ' faq__q--open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
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
