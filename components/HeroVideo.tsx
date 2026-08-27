"use client";

import { useEffect, useState } from "react";

/**
 * Serves a lighter 720p file to phones and the full 1080p file to everything
 * else. The source is chosen after mount, so the poster frame carries the
 * first paint and no device downloads a file it won't use.
 */
export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    setSrc(isSmall ? "/video/hero-mobile.mp4" : "/video/hero-desktop.mp4");
  }, []);

  return (
    <video
      key={src ?? "poster-only"}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    >
      {src && <source src={src} type="video/mp4" />}
    </video>
  );
}
