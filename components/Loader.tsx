"use client";

import { useEffect, useRef, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    const onLoad = () => {
      loadedRef.current = true;
      setLoaded(true);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const cap = loadedRef.current ? 100 : 90;
        if (p >= cap) return p;
        const step = loadedRef.current ? 6 : (cap - p) * 0.08 + 0.3;
        return Math.min(cap, p + step);
      });
    }, 40);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setHidden(true), 350);
      return () => clearTimeout(t);
    }
  }, [progress]);

  if (hidden) return null;

  return (
    <div className={`loader${loaded ? " loader--done" : ""}`} aria-hidden="true">
      <img className="loader__logo" src="/images/footer-banner.png" alt="" />
      <div className="loader__bar">
        <div className="loader__bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
