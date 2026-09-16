import Image from "next/image";
import { pricing } from "@/lib/content";
import Reveal from "./Reveal";
import "./pricing.css";

export default function Pricing() {
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
          <div className="pricing__media pricing__media--1">
            <Image
              src="/images/pricing-media-1.jpg"
              alt="Подача м'яча на корті"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 24vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

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
              <a className="pricing__card-button" href="#contacts">
                <span className="pricing__card-button-text">{pricing.basic.button}</span>
              </a>
            </div>
          </Reveal>

          <div className="pricing__media pricing__media--2">
            <Image
              src="/images/pricing-media-2.jpg"
              alt="Гравці на корті We are Padel"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 24vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

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
              <a className="pricing__card-button" href="#contacts">
                <span className="pricing__card-button-text">{pricing.guest.button}</span>
              </a>
            </div>
          </Reveal>

          <div className="pricing__media pricing__media--3">
            <Image
              src="/images/pricing-media-2.jpg"
              alt="Гравці на корті We are Padel"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
