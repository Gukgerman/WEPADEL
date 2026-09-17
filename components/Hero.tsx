import Image from "next/image";
import { hero, nav } from "@/lib/content";
import HeroSlider from "./HeroSlider";
import Reveal from "./Reveal";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__row">
        <div className="hero__content">
          <div className="hero__content-body">
            <header className="hero__navbar">
              <div className="hero__navbar-inner">
                <div className="hero__logo">
                  <img
                    className="hero__logo-mark"
                    src="/icons/logo.svg"
                    alt="WE are PADEL · I-ПАДЕЛ"
                  />
                </div>
                <nav className="hero__nav" aria-label="Основна навігація">
                  {nav.map((item) => (
                    <a
                      key={item.id}
                      className={`hero__nav-link hero__nav-link--${item.id}`}
                      href={`#${item.id}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </header>

            <div className="hero__intro">
              <div className="hero__intro-inner">
                {/* wrapped in a plain Reveal div, not applied to the h1
                    itself, since .hero__title already owns its own
                    (unrelated) transform on mobile and the two would
                    fight over the same CSS property */}
                <Reveal>
                  <h1 className="hero__title">
                    {hero.title.map((line, i) => (
                      <span className="hero__title-line" key={i}>
                        {line}
                      </span>
                    ))}
                  </h1>
                </Reveal>
                <div className="hero__address">
                  <div className="hero__address-inner">
                    <img
                      className="hero__address-icon-wrap"
                      src="/icons/icon-address.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="hero__address-text-wrap">
                      <p className="hero__address-text">
                        {hero.address.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < hero.address.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="hero__gallery">
              <Reveal as="li" className="hero__gallery-item hero__gallery-item--1" delay={150}>
                <div className="hero__gallery-photo">
                  <Image
                    src="/images/hero-gallery-1.jpg"
                    alt="Гравці на корті We are Padel"
                    fill
                    sizes="(min-width: 900px) 200px, 45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Reveal>
              <Reveal as="li" className="hero__gallery-item hero__gallery-item--2" delay={250}>
                <div className="hero__gallery-photo">
                  <Image
                    src="/images/hero-gallery-2.jpg"
                    alt="Гравці біля сітки на корті"
                    fill
                    sizes="(min-width: 900px) 200px, 45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Reveal>
              <Reveal as="li" className="hero__gallery-item hero__gallery-item--3" delay={350}>
                <div className="hero__gallery-caption-card">
                  <p className="hero__gallery-caption">
                    {hero.galleryCaption.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < hero.galleryCaption.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <div className="hero__gallery-card-address">
                    <img
                      className="hero__gallery-card-address-icon"
                      src="/icons/icon-address.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <p className="hero__gallery-card-address-text">
                      {hero.address.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < hero.address.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal as="li" className="hero__gallery-item hero__gallery-item--cta" delay={450}>
                <a className="hero__button" href="#pricing">
                  <span className="hero__button-text">{hero.cta}</span>
                </a>
              </Reveal>
            </ul>
          </div>
        </div>

        <div className="hero__media-wrap">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
