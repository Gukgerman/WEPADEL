"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-main.jpg", alt: "Гравець на падел-корті We are Padel" },
  { src: "/images/hero-slide-1.jpg", alt: "Гравці відпочивають біля сітки на корті" },
  { src: "/images/hero-slide-2.jpg", alt: "Гравець на корті We are Padel" },
  { src: "/images/hero-slide-3.jpg", alt: "Гравці дають \"п'ять\" на корті" },
  { src: "/images/hero-slide-4.jpg", alt: "Гравець сидить на корті We are Padel" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero__media">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero__media-slide${i === index ? " hero__media-slide--active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}
      <div className="hero__media-dots" role="presentation">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`hero__media-dot${i === index ? " hero__media-dot--active" : ""}`}
            aria-label={`Фото ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
