"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import "./mobile-nav.css";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 200;
      setVisible(past);
      if (!past) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-nav${visible ? " mobile-nav--visible" : ""}`}>
      <button
        type="button"
        className={`mobile-nav__toggle${open ? " mobile-nav__toggle--open" : ""}`}
        aria-label={open ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav__panel${open ? " mobile-nav__panel--open" : ""}`}>
        <nav aria-label="Основна навігація">
          {nav.map((item) => (
            <a
              key={item.id}
              className="mobile-nav__link"
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
