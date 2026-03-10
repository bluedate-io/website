'use client'

import React, { useState } from 'react'
import './faq.css'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: '01',
    question: 'What is bluedate?',
    answer:
      'bluedate is a dating experience focused on real-life dates instead of endless swipes. Tell us your type and we help you get to an IRL coffee date faster.',
  },
  {
    id: '02',
    question: 'How is bluedate different from other dating apps?',
    answer:
      'Most dating apps focus on endless swiping and chatting. bluedate is built around real-life meetups. Instead of spending weeks in DMs, you get a ready-to-go coffee date invite with someone who matches your vibe.',
  },
  {
    id: '03',
    question: 'Who can join bluedate?',
    answer:
      'We are starting with verified students in select colleges and cities. Join the waitlist and we\'ll notify you when bluedate launches in your campus or area.',
  },
  {
    id: '04',
    question: 'Is my profile private?',
    answer:
      'Yes. bluedate is private by design. Your profile is only visible to your matched date. There is no public swiping feed or profile browsing.',
  },
  {
    id: '05',
    question: 'How does the date work?',
    answer:
      'Once you join, we match you with someone compatible and send a ready-to-go coffee date invite at a safe on-campus or city location.',
  },
  {
    id: '06',
    question: 'Are the users verified?',
    answer:
      'Yes. We verify users to make sure you\'re meeting real students from your college or nearby city.',
  },
  {
    id: '07',
    question: 'Is it safe?',
    answer:
      'Safety is a core part of bluedate. We focus on verified users, private profiles, and public coffee-date locations to keep the experience comfortable and secure.',
  },
  {
    id: '08',
    question: 'When is bluedate launching?',
    answer:
      'We are launching college by college. Join the waitlist and we\'ll notify you as soon as bluedate becomes available in your campus.',
  },
]

const Faq = () => {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => setOpen(prev => prev === id ? null : id)

  return (
    <section className="FaqSection" id="faq">
      <div className="faq-inner">

        <div className="faq-header">
          <div className="faq-header-top">
            <span className="faq-label">FAQ</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-sub">Everything you need to know about bluedate.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`faq-item${open === item.id ? ' faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(item.id)}
                aria-expanded={open === item.id}
              >
                <span className="faq-num">{item.id}</span>
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon">{open === item.id ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Faq
