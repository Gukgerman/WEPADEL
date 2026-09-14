"use client";

import { useEffect, useState } from "react";
import { hero, nav } from "@/lib/content";
import "./sticky-header.css";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-header ${visible ? "sticky-header--visible" : ""}`}>
      <div className="sticky-header__inner">
        <img
          className="sticky-header__logo"
          src="/icons/logo.svg"
          alt="WE are PADEL · I-ПАДЕЛ"
        />
        <nav className="sticky-header__nav" aria-label="Основна навігація">
          {nav.map((item) => (
            <a key={item.id} className="sticky-header__nav-link" href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="sticky-header__cta" href="#pricing">
          {hero.cta}
        </a>
      </div>
    </div>
  );
}
