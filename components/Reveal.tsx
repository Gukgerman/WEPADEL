"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type RevealOwnProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  className?: string;
  delay?: number;
};

// generic + rest-prop passthrough so Reveal can stand in directly for an
// interactive tag (e.g. as="a" href="...") instead of needing an extra
// wrapper element around it
type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

export default function Reveal<T extends ElementType = "div">({
  children,
  as,
  className = "",
  delay = 0,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add("is-visible");

    // Safety net: some mobile browsers (notably older Safari, with
    // percentage-based rootMargin) can fail to ever fire the observer.
    // Content must never stay permanently invisible because of that.
    const fallback = window.setTimeout(show, 2500);

    if (typeof IntersectionObserver === "undefined") {
      show();
      return () => window.clearTimeout(fallback);
    }

    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              window.clearTimeout(fallback);
              window.setTimeout(show, delay);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      observer.observe(node);
    } catch {
      show();
    }

    return () => {
      window.clearTimeout(fallback);
      observer?.disconnect();
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
