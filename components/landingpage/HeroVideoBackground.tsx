"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canAutoplay, setCanAutoplay] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Attempt autoplay programmatically (some mobile browsers require this)
    const tryPlay = async () => {
      try {
        await v.play();
        setCanAutoplay(true);
      } catch {
        setCanAutoplay(false);
      }
    };

    tryPlay();
  }, []);

  const onTapPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = true;
      await v.play();
      setCanAutoplay(true);
    } catch {
      // still blocked
      setCanAutoplay(false);
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/heroPoster.jpg"
        className="h-full w-full object-cover">
        <source src="/heroVideo.mp4" type="video/mp4" />
      </video>

      {/* If autoplay is blocked, show a tap-to-play overlay */}
      {/* {!canAutoplay && (
        <button
          type="button"
          onClick={onTapPlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30"
          aria-label="Play background video">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-sm font-semibold text-white backdrop-blur"></span>
        </button>
      )} */}

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/10" />
    </div>
  );
}
