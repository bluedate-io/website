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
          <Image src="/logo.png" alt="Tryren" width={64} height={64} />
        </div>
        <h1 className="JoinPage__title">Your privacy matters.</h1>
        <p className="JoinPage__body">
          We use reasonable safeguards to protect your data and do not make your profile publicly searchable.
          Your profile is shared only as described in our privacy policy, including with a selected match and
          service providers that help us operate Tryren.
        </p>
        <a
          href="https://app.tryren.in"
          className="JoinPage__btn"
          rel="noopener noreferrer"
        >
          Let&apos;s Go
        </a>
      </div>
    </div>
  )
}
