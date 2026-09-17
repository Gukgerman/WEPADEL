"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { pricing } from "@/lib/content";
import Reveal from "./Reveal";
import "./pricing.css";

type ModalKey = "basic" | "guest" | null;

type PricingModalContent = {
  title: string;
  subtitle?: string;
  heading: string;
  items: string[];
  cta: string;
};

export default function Pricing() {
  const [openModal, setOpenModal] = useState<ModalKey>(null);

  useEffect(() => {
    if (!openModal) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openModal]);

  const activeModal: PricingModalContent | null =
    openModal === "basic" ? pricing.basic.modal : openModal === "guest" ? pricing.guest.modal : null;

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <Reveal className="pricing__label">
            <img
              className="pricing__label-icon-wrap"
              src="/icons/icon-label.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="pricing__label-text">{pricing.label}</span>
          </Reveal>
          <Reveal as="h2" className="pricing__title" delay={80}>
            {pricing.title}
          </Reveal>
        </div>

        <div className="pricing__list">
          <Reveal as="div" className="pricing__media pricing__media--1">
            <Image
              src="/images/pricing-media-1.jpg"
              alt="Подача м'яча на корті"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 24vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>

          <Reveal as="article" className="pricing__card pricing__card--basic" delay={80}>
            <div className="pricing__card-head">
              <h3 className="pricing__card-title">
                {pricing.basic.title.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </h3>
            </div>

            <div className="pricing__card-schedule">
              {pricing.basic.schedule.map((group) => (
                <div className="pricing__schedule-group" key={group.label}>
                  <p className="pricing__schedule-label">{group.label}</p>
                  <div className="pricing__schedule-rows">
                    {group.rows.map((row) => (
                      <div className="pricing__schedule-row" key={row.time}>
                        <span className="pricing__schedule-time">{row.time}</span>
                        <span className="pricing__schedule-price">{row.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pricing__card-footer">
              <div className="pricing__card-meta">
                <p className="pricing__card-meta-duration">{pricing.basic.duration}</p>
                <p className="pricing__card-meta-capacity">{pricing.basic.capacity}</p>
              </div>
              <button
                type="button"
                className="pricing__card-button"
                onClick={() => setOpenModal("basic")}
              >
                <span className="pricing__card-button-text">{pricing.basic.button}</span>
              </button>
            </div>
          </Reveal>

          <Reveal as="div" className="pricing__media pricing__media--2">
            <Image
              src="/images/pricing-media-2.jpg"
              alt="Гравці на корті We are Padel"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 24vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>

          <Reveal as="article" className="pricing__card pricing__card--guest" delay={120}>
            <div className="pricing__card-head">
              <h3 className="pricing__card-title">
                <span className="pricing__card-title--desktop">
                  {pricing.guest.title.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
                <span className="pricing__card-title--mobile">
                  <span>Тариф для</span>
                  <span>гостей гемпінгу</span>
                </span>
              </h3>
            </div>

            <div className="pricing__card-schedule">
              <div className="pricing__schedule-group">
                <div className="pricing__schedule-label-wrap">
                  <span className="pricing__schedule-label">{pricing.guest.label}</span>
                  <span className="pricing__schedule-price">{pricing.guest.price}</span>
                </div>
              </div>
              <p className="pricing__card-note">{pricing.guest.note}</p>
            </div>

            <div className="pricing__card-footer">
              <div className="pricing__card-meta">
                <p className="pricing__card-meta-duration">{pricing.guest.duration}</p>
                <p className="pricing__card-meta-capacity">{pricing.guest.capacity}</p>
              </div>
              <button
                type="button"
                className="pricing__card-button"
                onClick={() => setOpenModal("guest")}
              >
                <span className="pricing__card-button-text">{pricing.guest.button}</span>
              </button>
            </div>
          </Reveal>

          <Reveal as="div" className="pricing__media pricing__media--3">
            <Image
              src="/images/pricing-media-2.jpg"
              alt="Гравці на корті We are Padel"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </div>

      {activeModal && (
        <div
          className="pricing-modal-overlay"
          onClick={() => setOpenModal(null)}
          role="presentation"
        >
          <div
            className="pricing-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pricing-modal__close"
              aria-label="Закрити"
              onClick={() => setOpenModal(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <h3 id="pricing-modal-title" className="pricing-modal__title">
              {activeModal.title}
            </h3>
            {activeModal.subtitle && (
              <p className="pricing-modal__subtitle">{activeModal.subtitle}</p>
            )}

            <p className="pricing-modal__heading">{activeModal.heading}</p>
            <ul className="pricing-modal__list">
              {activeModal.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              className="pricing-modal__cta"
              href="https://t.me/germanguk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpenModal(null)}
            >
              {activeModal.cta}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
