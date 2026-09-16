import { contacts } from "@/lib/content";
import Reveal from "./Reveal";
import "./contacts.css";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__card">
        <div className="contacts__row">
          <div className="contacts__col contacts__col--info">
            <Reveal className="contacts__info-header">
              <div className="contacts__label">
                <img
                  className="contacts__label-icon-wrap"
                  src="/icons/icon-label.svg"
                  alt=""
                  aria-hidden="true"
                />
                <span className="contacts__label-text">{contacts.label}</span>
              </div>
              <h2 className="contacts__title">{contacts.title}</h2>
            </Reveal>

            <Reveal as="dl" className="contacts__details" delay={60}>
              <div className="contacts__detail-row contacts__detail-row--phone">
                <dt className="contacts__detail-label">Телефон</dt>
                <dd className="contacts__detail-value">
                  <a href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}>{contacts.phone}</a>
                </dd>
              </div>
              <div className="contacts__detail-row contacts__detail-row--hours">
                <dt className="contacts__detail-label">Час роботи</dt>
                <dd className="contacts__detail-value">{contacts.hours}</dd>
              </div>
              <div className="contacts__detail-row contacts__detail-row--address">
                <dt className="contacts__detail-label">Адреса</dt>
                <dd className="contacts__detail-value">
                  {contacts.address.map((line, i) => {
                    const commaIndex = line.indexOf(", ");
                    return (
                      <span key={i}>
                        {i === 0 && commaIndex !== -1 ? (
                          <>
                            {line.slice(0, commaIndex + 1)}
                            <br className="contacts__address-break" />
                            {line.slice(commaIndex + 1)}
                          </>
                        ) : (
                          line
                        )}
                        {i < contacts.address.length - 1 && (
                          <>
                            {" "}
                            <br className="contacts__address-line-break" />
                          </>
                        )}
                      </span>
                    );
                  })}
                </dd>
              </div>
            </Reveal>

            <Reveal className="contacts__socials" delay={100}>
              {contacts.socials.map((social) => (
                <a
                  key={social.id}
                  className={`contacts__social contacts__social--${social.id}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contacts__social-text">
                    {social.text.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < social.text.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  <span className="contacts__social-arrow-wrap">
                    <img
                      className="contacts__social-arrow-icon"
                      src="/icons/icon-arrow-diagonal.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal className="contacts__col contacts__col--map" delay={80}>
            <div className="contacts__map">
              <iframe
                className="contacts__map-iframe"
                src={contacts.mapsEmbedSrc}
                title="Карта — We are Padel"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="true"
                tabIndex={-1}
              />
              <div className="contacts__map-pin">
                <span className="contacts__map-pin-icon-wrap">
                  <img
                    className="contacts__map-pin-icon-bg"
                    src="/icons/icon-pin.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <span className="contacts__map-pin-text">{contacts.mapPinLabel}</span>
              </div>
              <a
                className="contacts__map-route"
                href={contacts.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contacts__map-route-text">{contacts.routeCta}</span>
              </a>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
