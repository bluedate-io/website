"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { num: "01", text: "Register with us" },
  { num: "02", text: "Choose your type" },
  { num: "03", text: "Opt-in before Friday" },
  { num: "04", text: "Meet your match" },
];

const TICK_MS = 2400;
const ROLL_MS = 750;

const ROWS = [...STEPS, STEPS[0]];

const Track = ({
  count,
  noAnim,
  render,
}: {
  count: number;
  noAnim: boolean;
  render: (step: (typeof STEPS)[number], i: number) => React.ReactNode;
}) => (
  <div
    className="hero__score-track"
    style={{
      transform: `translateY(calc(-${count} * var(--hero-score-row-h)))`,
      transition: noAnim
        ? "none"
        : `transform ${ROLL_MS}ms cubic-bezier(0.32, 0.72, 0.22, 1)`,
    }}
  >
    {ROWS.map((step, i) => (
      <div key={i} aria-hidden={i === ROWS.length - 1}>
        {render(step, i)}
      </div>
    ))}
  </div>
);

const StepNum = ({ step }: { step: (typeof STEPS)[number] }) => (
  <span className="hero__score-num">{step.num}</span>
);

const StepText = ({ step }: { step: (typeof STEPS)[number] }) => (
  <span className="hero__score-text">{step.text}</span>
);

export default function HeroSteps() {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [count, setCount] = useState(0);
  const [noAnim, setNoAnim] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setCount((c) => (c >= ROWS.length - 1 ? c : c + 1)),
      TICK_MS
    );
    return () => clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced || count !== ROWS.length - 1) return;
    const id = setTimeout(() => {
      setNoAnim(true);
      setCount(0);
      requestAnimationFrame(() => setNoAnim(false));
    }, ROLL_MS);
    return () => clearTimeout(id);
  }, [count, reduced]);

  return (
    <div className="hero__score" aria-label="How it works in four steps">
      <span className="hero__score-chip-frame">
        <span className="hero__score-word">step</span>
        {reduced ? (
          <StepNum step={ROWS[0]} />
        ) : (
          <Track count={count} noAnim={noAnim} render={(s) => <StepNum step={s} />} />
        )}
      </span>
      <span className="hero__score-pill">
        {reduced ? (
          <StepText step={ROWS[0]} />
        ) : (
          <Track count={count} noAnim={noAnim} render={(s) => <StepText step={s} />} />
        )}
      </span>
    </div>
  );
}