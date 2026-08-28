"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Hero background.
 *
 * The still is rendered as a real <Image> underneath the video rather than
 * relying on the <video poster> attribute, because a video whose autoplay is
 * blocked (iOS Low Power Mode, data saver, reduced-motion) may paint nothing at
 * all — which left the hero showing a bare CSS gradient. The video fades in over
 * the still only once it is genuinely playing, so there is never a blank hero.
 *
 * Phones get the lighter 720p file; everything else gets 1080p. The source is
 * chosen after mount so no device downloads a file it won't use.
 */
export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return; // Still image only.

    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    setSrc(isSmall ? "/video/hero-mobile.mp4" : "/video/hero-desktop.mp4");
  }, []);

  // Some browsers ignore the autoplay attribute but allow a muted play() call.
  useEffect(() => {
    if (!src || !videoRef.current) return;
    const el = videoRef.current;
    el.play().catch(() => {
      /* Autoplay refused — the still stays visible, which is fine. */
    });
  }, [src]);

  return (
    <>
      <Image
        src="/images/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {src && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
