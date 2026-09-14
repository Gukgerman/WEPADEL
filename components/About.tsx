import Image from "next/image";
import { about } from "@/lib/content";
import Reveal from "./Reveal";
import AboutSlider from "./AboutSlider";
import "./about.css";

function MultilineText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__intro">
        <Reveal className="about__intro-label">
          <img
            className="about__intro-label-icon-wrap"
            src="/icons/icon-label.svg"
            alt=""
            aria-hidden="true"
          />
          <span className="about__intro-label-text">{about.label}</span>
        </Reveal>

        <Reveal className="about__intro-content" delay={80}>
          <h2 className="about__intro-heading">
            {about.heading.map((line, i) => (
              <span className="about__intro-heading-line" key={i}>
                {line}
              </span>
            ))}
          </h2>
          <p className="about__intro-lead">
            <MultilineText text={about.lead} />
          </p>
          <p className="about__intro-text">
            <MultilineText text={about.text} />
          </p>
        </Reveal>
      </div>

      <div className="container">
        <div className="about__features">
          <Reveal as="article" className="about__feature-card about__feature-card--1">
            <div className="about__feature-card-head">
              <span className="about__feature-card-number">{about.features[0].number}</span>
              <span className="about__feature-card-title">
                <MultilineText text={about.features[0].title} />
              </span>
            </div>
            <p className="about__feature-card-desc">
              <MultilineText text={about.features[0].desc} />
            </p>
          </Reveal>

          <Reveal as="article" className="about__feature-card about__feature-card--2" delay={80}>
            <div className="about__feature-card-head">
              <span className="about__feature-card-number">{about.features[1].number}</span>
              <span className="about__feature-card-title">
                <MultilineText text={about.features[1].title} />
              </span>
            </div>
            <p className="about__feature-card-desc">
              <MultilineText text={about.features[1].desc} />
            </p>
          </Reveal>

          <AboutSlider />

          <Reveal className="about__feature-media about__feature-media--photo">
            <Image
              src="/images/about-photo.png"
              alt="Гравець на корті We are Padel"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>

          <Reveal as="article" className="about__feature-card about__feature-card--3" delay={80}>
            <div className="about__feature-card-head">
              <span className="about__feature-card-number">{about.features[2].number}</span>
              <span className="about__feature-card-title">
                <MultilineText text={about.features[2].title} />
              </span>
            </div>
            <p className="about__feature-card-desc">
              <MultilineText text={about.features[2].desc} />
            </p>
          </Reveal>

          <Reveal as="article" className="about__feature-card about__feature-card--4">
            <div className="about__feature-card-head">
              <span className="about__feature-card-number">{about.features[3].number}</span>
              <span className="about__feature-card-title">
                <MultilineText text={about.features[3].title} />
              </span>
            </div>
            <p className="about__feature-card-desc">
              <MultilineText text={about.features[3].desc} />
            </p>
          </Reveal>

          <Reveal className="about__feature-card about__feature-card--cta" delay={80}>
            <p className="about__feature-cta-text">
              {about.cta.text.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < about.cta.text.length - 1 && <br />}
                </span>
              ))}
            </p>
            <a className="about__feature-cta-link" href="#pricing">
              {about.cta.link}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
