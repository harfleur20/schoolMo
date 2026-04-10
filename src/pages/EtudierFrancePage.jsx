import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  ClosingBanner,
  ContactSection,
  PageIntro,
} from "../components/SharedSections";
import {
  etudiesFranceCTA,
  franceBenefits,
  faqEtudes,
  pageIntros,
  revealProps,
  visaErrorCategories,
  // eslint-disable-next-line no-unused-vars
  whatsappBaseLink,
} from "../siteData";
import studyImage from "/Assets/women-traveling-together-paris.jpg";

export function EtudierFrancePage() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const CARDS_PER_SLIDE = 2;
  const [errorIndex, setErrorIndex] = useState(0);
  const totalSlides = Math.ceil(visaErrorCategories.length / CARDS_PER_SLIDE);
  const prevError = () => setErrorIndex((i) => (i - 1 + totalSlides) % totalSlides);
  const nextError = () => setErrorIndex((i) => (i + 1) % totalSlides);
  const isPaused = useRef(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) setErrorIndex((i) => (i + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <>
      <PageIntro
        id="etude-france-hero"
        tag={pageIntros.etudes.tag}
        title={pageIntros.etudes.title}
        accent={pageIntros.etudes.accent}
        text={pageIntros.etudes.text}
        bgImage={studyImage}
        dark
        actions={
          <NavLink className="btn btn-primary" to="/accompagnement#diagnostic">
            Démarrer mon diagnostic
            <ArrowRight size={18} />
          </NavLink>
        }
      />

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Pourquoi la France ?
            </span>
            <h2>
              La France, c'est bien plus qu'un diplôme —{" "}
              <span>c'est un environnement pour te construire</span>.
            </h2>
            <p>
              Voilà ce qui rend le projet France sérieux et défendable si tu
              veux vraiment avancer.
            </p>
          </motion.div>

          <div className="pillar-grid">
            {franceBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  className="pillar-card"
                  {...revealProps}
                >
                  <div className="icon-chip">
                    <Icon size={40} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Attention aux pièges
            </span>
            <h2>
              Les erreurs qui peuvent conduire à un{" "}
              <span>défavorable Campus France</span> et un refus de visa.
            </h2>
            <p>Ces situations sont récurrentes. Voici comment les éviter.</p>
          </motion.div>

          <div
            className="error-carousel"
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
          >
            <button className="error-carousel-btn" onClick={prevError} aria-label="Précédent">
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={errorIndex}
              className="error-carousel-track"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              {visaErrorCategories.slice(errorIndex * CARDS_PER_SLIDE, errorIndex * CARDS_PER_SLIDE + CARDS_PER_SLIDE).map((category, localIdx) => {
                const Icon = category.icon;
                const cardNumber = String(errorIndex * CARDS_PER_SLIDE + localIdx + 1).padStart(2, "0");
                return (
                  <article key={category.title} className="error-card">
                    <span className="error-card-number">{cardNumber}</span>
                    <div className="error-header">
                      <div className="error-icon"><Icon size={24} /></div>
                      <h3>{category.title}</h3>
                    </div>
                    <p className="error-description">{category.description}</p>
                    <ul className="error-list">
                      {category.errors.map((error, i) => (
                        <li key={i}><span>{error}</span></li>
                      ))}
                    </ul>
                    <div className="error-highlight">
                      <strong>💡 {category.highlight}</strong>
                    </div>
                  </article>
                );
              })}
            </motion.div>

            <button className="error-carousel-btn" onClick={nextError} aria-label="Suivant">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="error-carousel-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`error-dot${i === errorIndex ? " is-active" : ""}`}
                onClick={() => setErrorIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark reassurance-section">
        <div className="section-shell">
          <motion.div className="reassurance-layout" {...revealProps}>
            <div className="reassurance-left">
              <h3>{etudiesFranceCTA.leftTitle}</h3>
              <p>{etudiesFranceCTA.leftText}</p>
            </div>
            <div className="reassurance-right">
              <h3>{etudiesFranceCTA.rightTitle}</h3>
              <p>{etudiesFranceCTA.rightText}</p>
              <NavLink
                className="btn btn-primary"
                to="/accompagnement#diagnostic"
              >
                {etudiesFranceCTA.buttonLabel}
                <ArrowRight size={18} />
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">FAQ</span>
            <h2>
              Tes questions — <span>nos réponses honnêtes</span>.
            </h2>
          </motion.div>

          <div className="faq-list">
            {faqEtudes.map((item, index) => (
              <motion.div
                key={index}
                className={`faq-item ${expandedFaq === index ? "is-open" : ""}`}
                {...revealProps}
              >
                <button
                  className="faq-trigger"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  aria-expanded={expandedFaq === index}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} />
                </button>
                <AnimatePresence initial={false}>
                  {expandedFaq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <ClosingBanner
        title={
          <>
            Ton projet France commence par <span>un diagnostic gratuit</span>.
          </>
        }
        text="Pas de promesses vides, juste une lecture d'analyse : est-ce que ça peut marcher ? Qu'est-ce qui manque ?"
      />
    </>
  );
}
