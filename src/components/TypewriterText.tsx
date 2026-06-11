"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  startDelay?: number;
  active?: boolean;
};

export default function TypewriterText({
  words,
  className = "",
  cursorClassName = "",
  typingSpeed = 82,
  deletingSpeed = 38,
  pauseDelay = 1300,
  startDelay = 350,
  active = true,
}: TypewriterTextProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!active) return;

    const starter = window.setTimeout(() => setHasStarted(true), startDelay);
    return () => window.clearTimeout(starter);
  }, [active, startDelay]);

  useEffect(() => {
    if (!active || !hasStarted || safeWords.length === 0) return;

    const currentWord = safeWords[wordIndex % safeWords.length];
    const isComplete = !isDeleting && text === currentWord;
    const isEmpty = isDeleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % safeWords.length);
          return;
        }

        setText((prev) =>
          isDeleting
            ? currentWord.slice(0, Math.max(prev.length - 1, 0))
            : currentWord.slice(0, prev.length + 1),
        );
      },
      isComplete ? pauseDelay : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [active, deletingSpeed, hasStarted, isDeleting, pauseDelay, safeWords, text, typingSpeed, wordIndex]);

  return (
    <span className={`inline-flex max-w-full items-center overflow-hidden whitespace-nowrap ${className}`} aria-label={text || safeWords[0]}>
      <span className="min-w-0 truncate">{text}</span>
      <span
        aria-hidden="true"
        className={`ml-2 inline-block h-[1.1em] w-0.5 shrink-0 animate-pulse rounded-full bg-cyanx shadow-[0_0_18px_rgba(34,211,238,0.9)] ${cursorClassName}`}
      />
    </span>
  );
}
