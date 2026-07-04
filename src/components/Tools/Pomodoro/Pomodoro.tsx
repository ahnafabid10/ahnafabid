'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

// ─── Types ────────────────────────────────────────────────────────────────────

type ModeKey = 'focus' | 'short' | 'long';

interface Quote {
  text: string;
  author: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MODES: Record<ModeKey, { label: string; secs: number }> = {
  focus: { label: 'Focus', secs: 25 * 60 },
  short: { label: 'Short Break', secs: 5 * 60 },
  long: { label: 'Long Break', secs: 15 * 60 },
};

const QUOTE_INTERVAL_SECS = 30;
const SVG_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * SVG_RADIUS;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pickRandomIndex(length: number, exclude: number): number {
  if (length <= 1) return 0;
  let next: number;
  do { next = Math.floor(Math.random() * length); } while (next === exclude);
  return next;
}

function formatTime(totalSeconds: number): { mins: string; secs: string } {
  return {
    mins: String(Math.floor(totalSeconds / 60)).padStart(2, '0'),
    secs: String(totalSeconds % 60).padStart(2, '0'),
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pomodoro() {
  const [mode, setMode] = useState<ModeKey>('focus');
  const [secondsLeft, setSeconds] = useState(MODES.focus.secs);
  const [running, setRunning] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  // Timestamp when the timer last started (used for background-safe countdown)
  const startedAtRef = useRef<number>(0);
  const startSecsRef = useRef<number>(MODES.focus.secs);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const quoteTickRef = useRef<number>(0);
  const quoteIdxRef = useRef<number>(0);

  // ─── Quotes via TanStack Query ──────────────────────────────────────────────

  const { data: quotes = [] } = useQuery<Quote[]>({
    queryKey: ['quotes'],
    queryFn: () => fetch('/quotes.json').then((r) => r.json()),
    staleTime: Infinity, // static file — never re-fetch
  });

  // Pick a random starting quote once quotes load
  useEffect(() => {
    if (quotes.length === 0) return;
    const i = Math.floor(Math.random() * quotes.length);
    setQuoteIdx(i);
    quoteIdxRef.current = i;
  }, [quotes]);

  // ─── Background-safe ticker ─────────────────────────────────────────────────
  // We store the real wall-clock start time. Each tick computes elapsed time
  // from that anchor, so the countdown stays accurate even if the tab is hidden.

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const rotateQuote = useCallback(() => {
    if (quotes.length === 0) return;
    const next = pickRandomIndex(quotes.length, quoteIdxRef.current);
    quoteIdxRef.current = next;
    setQuoteVisible(false);
    setTimeout(() => { setQuoteIdx(next); setQuoteVisible(true); }, 400);
  }, [quotes.length]);

  useEffect(() => {
    if (!running) {
      stopInterval();
      return;
    }

    // Record the wall-clock moment the timer started
    startedAtRef.current = Date.now();
    startSecsRef.current = secondsLeft;
    quoteTickRef.current = 0;

    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAtRef.current) / 1000);
      const remaining = Math.max(startSecsRef.current - elapsed, 0);

      setSeconds(remaining);

      // Rotate quote every QUOTE_INTERVAL_SECS ticks
      quoteTickRef.current += 1;
      if (quoteTickRef.current >= QUOTE_INTERVAL_SECS) {
        quoteTickRef.current = 0;
        rotateQuote();
      }

      if (remaining === 0) {
        setRunning(false);
        stopInterval();
      }
    }, 1000);

    return stopInterval;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  // ─── Controls ───────────────────────────────────────────────────────────────

  const switchMode = (m: ModeKey) => {
    stopInterval();
    setRunning(false);
    setMode(m);
    setSeconds(MODES[m].secs);
    startSecsRef.current = MODES[m].secs;
    quoteTickRef.current = 0;
  };

  const reset = () => {
    stopInterval();
    setRunning(false);
    setSeconds(MODES[mode].secs);
    startSecsRef.current = MODES[mode].secs;
    quoteTickRef.current = 0;
  };

  const toggleRunning = () => {
    setRunning((prev) => {
      if (!prev) {
        // Re-anchor the start time when resuming so elapsed calc is correct
        startedAtRef.current = Date.now();
        startSecsRef.current = secondsLeft;
      }
      return !prev;
    });
  };

  // ─── Derived display values ─────────────────────────────────────────────────

  const progress = secondsLeft / MODES[mode].secs;
  const dashOffset = RING_CIRCUMFERENCE * (1 - progress);
  const { mins, secs } = formatTime(secondsLeft);
  const quote = quotes[quoteIdx] ?? null;

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] flex flex-col">
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── Timer section ── */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 py-10 px-6">

          {/* Mode tabs */}
          <div className="flex gap-8">
            {(Object.entries(MODES) as [ModeKey, { label: string }][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => switchMode(key)}
                className={`text-sm font-bold tracking-tight pb-1 transition-colors ${mode === key
                    ? 'text-[#1a1a1a] border-b-2 border-[#1a1a1a]'
                    : 'text-[#aaa] hover:text-[#555] border-b-2 border-transparent'
                  }`}
              >
                {val.label}
              </button>
            ))}
          </div>

          {/* Progress ring */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: 'min(80vw, 520px)', height: 'min(80vw, 520px)' }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              style={{ transform: 'rotate(-90deg)' }}
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r={SVG_RADIUS} fill="none" stroke="#ddd" strokeWidth="2.5" />
              <circle
                cx="50" cy="50" r={SVG_RADIUS}
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>

            <p
              className="z-10 font-black tabular-nums leading-none text-[#1a1a1a]"
              style={{ fontSize: 'clamp(5rem, 20vw, 9rem)', letterSpacing: '-0.03em' }}
              aria-live="polite"
              aria-label={`${mins} minutes ${secs} seconds remaining`}
            >
              {mins}:{secs}
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-4 w-full" style={{ maxWidth: 'min(80vw, 520px)' }}>
            <button
              onClick={toggleRunning}
              className="flex-1 py-5 text-sm font-bold uppercase tracking-[0.25em] bg-[#1a1a1a] text-white hover:opacity-80 transition-opacity"
            >
              {running ? 'PAUSE' : 'START'}
            </button>
            <button
              onClick={reset}
              className="flex-1 py-5 text-sm font-bold uppercase tracking-[0.25em] bg-transparent text-[#aaa] border border-[#ccc] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all"
            >
              RESET
            </button>
          </div>
        </div>

        {/* ── Quote sidebar ── */}
        <aside
          className="flex flex-col gap-4 lg:w-72 xl:w-80 shrink-0"
          aria-label="Inspirational quote"
        >
          <div
            className="bg-[#eeede8] p-8 h-full"
            style={{ opacity: quoteVisible ? 1 : 0, transition: 'opacity 0.35s ease' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[#1a1a1a] inline-block shrink-0" aria-hidden="true" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#999]">
                Daily Inspiration
              </span>
            </div>

            {quote ? (
              <>
                <p className="text-xl font-light italic leading-snug text-[#1a1a1a] mb-6">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="text-xs text-[#888] tracking-wider">— {quote.author}</p>
              </>
            ) : (
              <div className="w-8 h-px bg-[#ccc] animate-pulse" />
            )}
          </div>
        </aside>

      </div>
    </div>
  );
}
