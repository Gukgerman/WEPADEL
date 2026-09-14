"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";

type ParallaxImageProps = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  strength?: number;
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 40,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = Math.max(-1, Math.min(1, progress)) * strength;
      img.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className={className} style={{ overflow: "hidden", position: "relative" }}>
      <div
        ref={imgRef}
        style={{
          position: "absolute",
          inset: "-6% -6%",
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
