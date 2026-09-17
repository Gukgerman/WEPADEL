"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const slides = [
  { src: "/images/about-gallery.jpg", alt: "Територія глемпінгу «Двері в ліс»" },
  { src: "/images/about-slide-1.jpg", alt: "Шатер глемпінгу з чаном серед лісу" },
  { src: "/images/about-slide-2.jpg", alt: "Тераса дерев'яного будиночка глемпінгу" },
  { src: "/images/about-slide-3.jpg", alt: "Великий білий шатер на дерев'яній терасі" },
  { src: "/images/about-slide-4.jpg", alt: "Дерев'яний будиночок глемпінгу в лісі" },
];

export default function AboutSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Reveal as="div" className="about__feature-media about__feature-media--gallery">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`about__feature-media-slide${i === index ? " about__feature-media-slide--active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}
      <button
        type="button"
        className="about__feature-media-nav about__feature-media-nav--prev"
        aria-label="Попереднє фото"
        onClick={prev}
      >
        <img src="/icons/icon-arrow-prev.svg" alt="" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="about__feature-media-nav about__feature-media-nav--next"
        aria-label="Наступне фото"
        onClick={next}
      >
        <img src="/icons/icon-arrow-next.svg" alt="" aria-hidden="true" />
      </button>
      <div className="about__feature-media-dots" role="presentation">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`about__feature-media-dot${i === index ? " about__feature-media-dot--active" : ""}`}
            aria-label={`Фото ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
