"use client";

import { useState } from "react";
import "./faq.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: "01",
    question: "What is bluedate?",
    answer:
      "bluedate is a dating experience focused on real-life dates instead of endless swipes. Tell us your type and we help you get to an IRL coffee date faster.",
  },
  {
    id: "02",
    question: "How is bluedate different from other dating apps?",
    answer:
      "Most dating apps focus on endless swiping and chatting. bluedate is built around real-life meetups. Instead of spending weeks in DMs, you get a ready-to-go coffee date invite with someone who matches your vibe.",
  },
  {
    id: "03",
    question: "Who can join bluedate?",
    answer:
      "We are starting with verified students in select colleges and cities. Join the waitlist and we'll notify you when bluedate launches in your campus or area.",
  },
  {
    id: "04",
    question: "Is my profile private?",
    answer:
      "Yes. bluedate is private by design. Your profile is only visible to your matched date. There is no public swiping feed or profile browsing.",
  },
  {
    id: "05",
    question: "How does the date work?",
    answer:
      "Once you join, we match you with someone compatible and send a ready-to-go coffee date invite at a safe on-campus or city location.",
  },
  {
    id: "06",
    question: "Are the users verified?",
    answer:
      "Yes. We verify users to make sure you're meeting real students from your college or nearby city.",
  },
  {
    id: "07",
    question: "Is it safe?",
    answer:
      "Safety is a core part of bluedate. We focus on verified users, private profiles, and public coffee-date locations to keep the experience comfortable and secure.",
  },
  {
    id: "08",
    question: "When is bluedate launching?",
    answer:
      "We are launching college by college. Join the waitlist and we'll notify you as soon as bluedate becomes available in your campus.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="FaqComponent" aria-labelledby="faq-section-title">
      <div className="faq__overlay" />

      <div className="FaqComponent__in">
        <div className="faq__label">
          <h2 id="faq-section-title">FAQ</h2>
        </div>

        <div className="faq__card" role="list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            const isLast = index === faqItems.length - 1;

            return (
              <article key={item.id} className="faq__item" role="listitem">
                <button
                  type="button"
                  className="faq__header"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <p className="faq__question">{item.question}</p>

                  <span
                    className={`faq__chevron ${isActive ? "faq__chevron--open" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="20"
                      height="20"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Always in DOM — CSS grid animates the height */}
                <div
                  id={`faq-panel-${item.id}`}
                  className={`faq__panel ${isActive ? "faq__panel--open" : ""}`}
                  aria-hidden={!isActive}
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>

                {!isLast && <div className="faq__divider" />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
