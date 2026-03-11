'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getWaitlistCounts } from '@/app/waitlist/actions';
import './notificationbanner.css';

export default function NotificationBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [counts, setCounts] = useState<{ men: number; women: number } | null>(null);

  useEffect(() => {
    getWaitlistCounts().then(setCounts).catch(() => {});
  }, []);

  if (dismissed) return null;

  return (
    <div className="nb__wrap">
      <div className="nb__inner">

        <div className="nb__left">
          <div className="nb__text">
            {counts && (
              <div className="nb__counts">
                <span className="nb__count-item">
                  <span className="nb__count-num">{counts.men}</span>
                  <span className="nb__count-label">men</span>
                </span>
                <span className="nb__count-sep">&</span>
                <span className="nb__count-item">
                  <span className="nb__count-num">{counts.women}</span>
                  <span className="nb__count-label">women</span>
                </span>
                <span className="nb__count-suffix">already joined</span>
              </div>
            )}
            <span className="nb__sub">
              First <strong>500 men</strong> &amp; <strong>1,000 women</strong> get lifetime premium free.
            </span>
          </div>
        </div>

        <div className="nb__right">
          <Link href="/waitlist" className="nb__cta">
            Join Now &rarr;
          </Link>
          <button
            className="nb__close"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>

      </div>
    </div>
  );
}
