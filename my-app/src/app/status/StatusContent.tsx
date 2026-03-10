"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./page.css";

type StatusData = {
  queue_position: number;
  referral_code: string;
  city: string;
};

export default function StatusContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "";

  const [data, setData] = useState<StatusData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!code) {
      setError("No referral code found.");
      setLoading(false);
      return;
    }

    fetch(`/api/status?code=${code}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Could not load your status."))
      .finally(() => setLoading(false));
  }, [code]);

  const shareUrl = `https://bluedate.io?ref=${code}`;
  const shareText = `I just joined the bluedate.io waitlist 🎉 Skip the swipes and get real IRL dates. Join here 👇`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`;

  async function copyLink() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="StatusPage">
      <div className="status__bg" />
      <div className="status__overlay" />

      <div className="status__center">
        <div className="status__logo">bluedate.io</div>

        {loading && (
          <div className="status__card">
            <p className="status__loading">Loading your spot...</p>
          </div>
        )}

        {error && (
          <div className="status__card">
            <p className="status__error">{error}</p>
            <a href="/join" className="status__back">← Back to waitlist</a>
          </div>
        )}

        {data && (
          <div className="status__card">
            <div className="status__badge">You&apos;re in! 🎉</div>

            <div className="status__position-wrap">
              <p className="status__position-label">Your position in line</p>
              <p className="status__position-number">#{data.queue_position.toLocaleString()}</p>
              <p className="status__position-city">{data.city}</p>
            </div>

            <div className="status__divider" />

            <div className="status__share-section">
              <p className="status__share-heading">Move up the list 🚀</p>
              <p className="status__share-sub">
                Share your referral link and jump the queue when your friends join.
              </p>

              <div className="status__ref-box">
                <span className="status__ref-url">{shareUrl}</span>
                <button className="status__copy-btn" onClick={copyLink}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <a
                className="status__whatsapp-btn"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Share on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
