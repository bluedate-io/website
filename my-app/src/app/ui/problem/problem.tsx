import React from 'react'
import './problem.css'

const problem = () => {
  return (
    <div className="ProblemComponent" id="about">

      {/* ── THE PROBLEM ── */}
      <section className="ps-section">
        <div className="ps-section-header">
          <span className="ps-label">The Problem</span>
        </div>

        <div className="ps-problem-grid">

          <div className="ps-problem-card">
            <div className="ps-problem-card-top">
              <span className="ps-problem-badge">01</span>
              <span className="ps-problem-tag">Swiping</span>
            </div>
            <h3 className="ps-problem-title">Endless Swiping</h3>
            <p className="ps-problem-desc">
              Most dating apps turn dating into a never-ending swipe loop.
              You scroll through hundreds of profiles but rarely meet anyone in real life.
            </p>
            <div className="ps-problem-visual ps-problem-visual--swipe">
              <div className="ps-swipe-card ps-swipe-card--back" />
              <div className="ps-swipe-card ps-swipe-card--mid" />
              <div className="ps-swipe-card ps-swipe-card--front">
                <div className="ps-swipe-line" />
                <div className="ps-swipe-line ps-swipe-line--short" />
                <div className="ps-swipe-arrow">✕</div>
              </div>
            </div>
          </div>

          <div className="ps-problem-card">
            <div className="ps-problem-card-top">
              <span className="ps-problem-badge">02</span>
              <span className="ps-problem-tag">Waiting</span>
            </div>
            <h3 className="ps-problem-title">Endless Waiting</h3>
            <p className="ps-problem-desc">
              You match with someone… then wait for replies. Conversations fade,
              plans never happen, and most matches never become real dates.
            </p>
            <div className="ps-problem-visual ps-problem-visual--chat">
              <div className="ps-chat-bubble ps-chat-bubble--out">Hey! How are you?</div>
              <div className="ps-chat-bubble ps-chat-bubble--in">...</div>
              <div className="ps-chat-status">Last seen 3 days ago</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="ps-section">
        <div className="ps-section-header">
          <span className="ps-label">The Solution</span>
        </div>

        <div className="ps-solution-grid">

          <div className="ps-solution-left">
            <h2 className="ps-solution-title">AI That Finds<br />Your Date</h2>
            <p className="ps-solution-sub">
              Bluedate replaces swiping with an AI-native matching agent.
            </p>
            <a href="/" className="ps-solution-btn">Join the waitlist &rarr;</a>
          </div>

          <div className="ps-solution-right">
            {[
              { num: '01', title: 'Learns your preferences', desc: 'Your vibe, interests, and type.' },
              { num: '02', title: 'Scans the entire pool', desc: 'Instead of you browsing profiles.' },
              { num: '03', title: 'Finds the best match', desc: 'Someone you\'re actually compatible with.' },
              { num: '04', title: 'Creates a real date opportunity', desc: 'Not just another chat.' },
            ].map((f, i) => (
              <div key={i} className="ps-feature-row">
                <span className="ps-feature-num">{f.num}</span>
                <div className="ps-feature-body">
                  <h4 className="ps-feature-title">{f.title}</h4>
                  <p className="ps-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default problem
