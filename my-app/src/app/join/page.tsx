import React from 'react'
import Image from 'next/image'
import './join.css'

export default function JoinPage() {
  return (
    <div className="JoinPage">
      <div className="JoinPage__in">
        <div className="JoinPage__logo">
          <Image src="/logo.png" alt="Bluedate logo" width={56} height={56} />
        </div>
        <h1 className="JoinPage__title">Your privacy is our promise.</h1>
        <p className="JoinPage__body">
          Your data is <strong>100% protected</strong> and never publicly available.
          Everything you share stays strictly between you and your match — no one else sees it.
        </p>
        <a
          href="https://app.bluedate.io"
          className="JoinPage__btn"
          rel="noopener noreferrer"
        >
          Let&apos;s Go
        </a>
      </div>
    </div>
  )
}
