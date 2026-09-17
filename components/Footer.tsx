import Image from "next/image";
import { footer } from "@/lib/content";
import Reveal from "./Reveal";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__body">
          <div className="footer__top">
            <Reveal as="p" className="footer__tagline footer__tagline--left">
              {footer.taglineLeft}
            </Reveal>

            {/* transform is load-bearing here (scale/position, not just
                decoration) — .reveal's own transform is overridden back to
                it in footer.css, the entrance motion runs on the separate
                `translate` property instead so the two don't fight */}
            <Reveal as="div" className="footer__mobile-cluster" delay={80}>
              <div className="footer__decor">
                <Image
                  src="/images/footer-decor.jpg"
                  alt="Відпочинок на корті We are Padel"
                  fill
                  sizes="(min-width: 900px) 300px, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="footer__gallery">
                <div className="footer__gallery-photo-item">
                  <div className="footer__collage-photo footer__collage-photo--gallery">
                    <Image
                      src="/images/footer-gallery.jpg"
                      alt="М'ячі We are Padel"
                      fill
                      sizes="(min-width: 900px) 300px, 45vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="footer__button-item">
                  <a className="footer__button" href="#pricing">
                    <span className="footer__button-text">{footer.cta}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal as="p" className="footer__tagline footer__tagline--right" delay={140}>
              {footer.taglineRight}
            </Reveal>
          </div>

          <Reveal as="div" className="footer__banner">
            <Image
              src="/images/footer-banner.png"
              alt="WE are PADEL"
              fill
              sizes="(min-width: 900px) 1440px, 100vw"
              style={{ objectFit: "contain" }}
            />
          </Reveal>

          <Reveal as="a" className="footer__banner-button" href="#pricing" delay={80}>
            <span className="footer__banner-button-text">{footer.cta}</span>
          </Reveal>

          <Reveal as="div" className="footer__legal" delay={80}>
            <p className="footer__legal-company">
              ФОП Казіна Т.Б.
              <br />
              ЄДРПОУ: 74938216
              <br />
              ІПН: 7493821634
            </p>
            <p className="footer__legal-copyright">{footer.legal.copyright}</p>
            <a className="footer__legal-link footer__legal-link--privacy" href="#">
              {footer.legal.privacy}
            </a>
            <a
              className="footer__legal-link footer__legal-link--credit"
              href="https://miro-form.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.legal.credit}
            </a>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
