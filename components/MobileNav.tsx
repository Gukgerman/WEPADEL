"use client";

import { useState } from "react";
import { nav } from "@/lib/content";
import "./mobile-nav.css";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <div className="mobile-nav__bar">
        <img
          className="mobile-nav__logo"
          src="/icons/logo.svg"
          alt="WE are PADEL · I-ПАДЕЛ"
        />
        <button
          type="button"
          className="mobile-nav__toggle"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Меню
        </button>
      </div>

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
