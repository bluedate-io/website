import React from 'react'
import './match.css'

const rows = [
  {
    a: { icon: '🎬', label: 'Cinema & storytelling' },
    vibe: { label: 'Adventurous & Expressive', color: '#c97c2a' },
    b: { icon: '🪂', label: 'Skydiving & travel' },
  },
  {
    a: { icon: '🚴', label: 'Urban cycling' },
    vibe: { label: 'Depth Beneath the Surface', color: '#b04a7a' },
    b: { icon: '🎨', label: 'Painting & design' },
  },
  {
    a: { icon: '🎧', label: 'Lo-fi & indie' },
    vibe: { label: 'Artistic & Individualistic', color: '#2a6fc9' },
    b: { icon: '🎵', label: 'Alt & acoustic' },
  },
  {
    a: { icon: '🧠', label: 'Deep conversations' },
    vibe: { label: 'Humor & Realness', color: '#2a9c5a' },
    b: { icon: '📚', label: 'Psychology major' },
  },
]

const Match = () => {
  return (
    <section className="MatchSection" id="match">
      <div className="match-inner">

        {/* Header */}
        <div className="match-header">
          <div className="match-header-top">
            <span className="match-label">How It Works</span>
          </div>
          <h2 className="match-title">How Bluedate Matches You</h2>
          <p className="match-sub">AI understands your vibe, not just photos</p>
        </div>

        {/* Diagram */}
        <div className="match-diagram">


          {/* Profile name rows */}
          <div className="match-names-row">
            <div className="match-person">
              <div className="match-avatar">S</div>
              <span className="match-person-name">Sai, 22</span>
            </div>

            <div className="match-engine-header">
              <span className="match-engine-label">AI Vibe Engine</span>
            </div>

            <div className="match-person match-person--right">
              <div className="match-avatar match-avatar--right">A</div>
              <span className="match-person-name">Akshara, 21</span>
            </div>
          </div>

          {/* Connection rows */}
          <div className="match-rows">
            {rows.map((row, i) => (
              <div key={i} className="match-row">

                {/* Left signal */}
                <div className="match-signal-left">
                  <span className="match-signal-text">{row.a.label}</span>
                  <span className="match-signal-icon">{row.a.icon}</span>
                  <span className="match-signal-dot" style={{ background: row.vibe.color }} />
                </div>

                {/* Line left */}
                <div
                  className="match-line match-line--left"
                  style={{ '--c': row.vibe.color } as React.CSSProperties}
                />

                {/* Vibe pill */}
                <div
                  className="match-vibe-pill"
                  style={{ '--c': row.vibe.color } as React.CSSProperties}
                >
                  <span className="match-vibe-dot" />
                  {row.vibe.label}
                </div>

                {/* Line right */}
                <div
                  className="match-line match-line--right"
                  style={{ '--c': row.vibe.color } as React.CSSProperties}
                />

                {/* Right signal */}
                <div className="match-signal-right">
                  <span className="match-signal-dot" style={{ background: row.vibe.color }} />
                  <span className="match-signal-icon">{row.b.icon}</span>
                  <span className="match-signal-text">{row.b.label}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom result bar */}
        <div className="match-result-bar">
          <span className="match-result-icon">✦</span>
          <span className="match-result-text">Compatibility found — a real date invite is on its way</span>
          <span className="match-result-icon">✦</span>
        </div>

      </div>
    </section>
  )
}

export default Match
