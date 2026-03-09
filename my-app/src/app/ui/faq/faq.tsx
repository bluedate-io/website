"use client";

import React, { useState } from "react";
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
      "bluedate is a dating experience focused on real-life dates instead of endless swipes. Tell us your type, and we help you get to an IRL coffee date faster.",
  },
  {
    id: "02",
    question: "How is this different from other dating apps?",
    answer:
      "Instead of chatting forever, bluedate is built around quick, verified meetups at safe on-campus or city locations. You spend more time on real dates and less time in DMs.",
  },
  {
    id: "03",
    question: "Who can join bluedate?",
    answer:
      "We are starting with verified students in select colleges and cities. Join the waitlist and we’ll let you know as soon as we launch in your campus or area.",
  },
  {
    id: "04",
    question: "Is my profile and data private?",
    answer:
      "Only your date sees you. We verify students and keep your profile private, focusing on safe, low-pressure coffee dates rather than public swiping feeds.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="FaqComponent" aria-labelledby="faq-section-title">
      <div className="FaqComponent__in">
        <div className="faq__label">
          <h2 id="faq-section-title">Answers to common questions</h2>
        </div>

        <div className="faq__list" role="list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={item.id}
                className={`faq__item ${isActive ? "faq__item--active" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="faq__header"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className="faq__number">{item.id}</span>

                  <div className="faq__question">
                    <p>{item.question}</p>
                  </div>

                  <span className="faq__toggle" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div
                    id={`faq-panel-${item.id}`}
                    className="faq__panel"
                    aria-hidden={!isActive}
                  >
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;