"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./VoidJournal.module.css";

interface Entry {
  id: number;
  cycle: string;
  time: string;
  content: string;
}

const INITIAL_ENTRIES: Entry[] = [
  {
    id: 1,
    cycle: "Cycle 492.01",
    time: "Just Now",
    content:
      "The silence is louder tonight. I saw the silhouette again on the ridge, motionless. It feels like the sky is pressing down on my chest. I'm afraid to sleep.",
  },
  {
    id: 2,
    cycle: "Cycle 491.98",
    time: "1 Day Ago",
    content:
      "Found a strange geometric marking on the doorframe. Not sure if I put it there or if it was always there. The memory is slippery, like oil.",
  },
  {
    id: 3,
    cycle: "Cycle 485.44",
    time: "7 Days Ago",
    content:
      "Dreams of vast oceans beneath the ice. Something huge moving in the deep. I woke up screaming but no sound came out. Why is the light so cold?",
  },
  {
    id: 4,
    cycle: "Cycle 420.00",
    time: "Unknown",
    content:
      "THEY ARE WATCHING THEY ARE WATCHING DO NOT LOOK UP DO NOT LOOK UP THE STARS ARE WRONG THE GEOMETRY IS WRONG",
  },
  {
    id: 5,
    cycle: "Cycle 001.00",
    time: "Unknown",
    content: "Start log. Everything is normal. Everything is fine.",
  },
];

function getStage(index: number): number {
  if (index === 0) return 0;
  if (index < 3) return 1;
  if (index < 5) return 2;
  return 3;
}

export default function VoidJournal() {
  const [entries, setEntries] = useState<Entry[]>(INITIAL_ENTRIES);
  const [text, setText] = useState("");
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when entries change
    if (streamRef.current) {
      streamRef.current.scrollTop = 0;
    }
  }, [entries]);

  function handleTransmit() {
    if (!text.trim()) return;
    const newEntry: Entry = {
      id: Date.now(),
      cycle: `Cycle ${(Math.random() * 500 + 492).toFixed(2)}`,
      time: "Syncing...",
      content: text,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleTransmit();
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.atmosphere} />

      {/* Dust motes rendered via CSS animation — 30 elements */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className={styles.dust}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <header className={styles.header}>
        <h1 className={styles.title}>ENTROPY LOG_</h1>
      </header>

      <div className={styles.journalStream} ref={streamRef}>
        {entries.map((entry, index) => {
          const stage = getStage(index);
          const isLastDeep = index >= 4;
          return (
            <div
              key={entry.id}
              className={`${styles.entry} ${styles[`stage${stage}`]} ${
                isLastDeep ? styles.deepFade : ""
              }`}
            >
              <div className={styles.entryMeta}>
                <span>{entry.cycle}</span>
                <span>{entry.time}</span>
              </div>
              <div className={styles.entryContent}>{entry.content}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.inputDock}>
        <div className={styles.inputContainer}>
          <textarea
            className={styles.textarea}
            placeholder="Record the signal..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className={`${styles.submitBtn} ${text ? styles.submitBtnVisible : ""}`}
            onClick={handleTransmit}
          >
            Transmit
          </button>
        </div>
      </div>
    </div>
  );
}
