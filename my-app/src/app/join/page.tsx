import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/navbar/navbar'
import './join.css'

export default function JoinPage() {
  return (
    <div className="JoinPage">
      <Navbar />
      <div className="JoinPage__in">
        <div className="JoinPage__icon">
          <Image src="/logo.png" alt="Bluedate" width={64} height={64} />
        </div>
        <h1 className="JoinPage__title">Your privacy is our promise.</h1>
        <p className="JoinPage__body">
          Your data is <span className="JoinPage__highlight">100% protected</span> and never publicly available.
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
