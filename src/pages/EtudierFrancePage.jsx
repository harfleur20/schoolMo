import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
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

  return (
    <>
      <PageIntro
        tag={pageIntros.etudes.tag}
        title={pageIntros.etudes.title}
        accent={pageIntros.etudes.accent}
        text={pageIntros.etudes.text}
        bgImage={studyImage}
        dark
        actions={
          <NavLink className="btn btn-primary" to="/accompagnement#diagnostic">
            Demarrer mon diagnostic
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
              La France, c est bien plus qu un diplome —{" "}
              <span>c est un environnement pour te construire</span>.
            </h2>
            <p>
              Voila ce qui rend le projet France serieux et defendable si tu
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
              Attention aux pieges
            </span>
            <h2>
              Les erreurs qui peuvent conduire a un{" "}
              <span>defavorable Campus France</span> et un refus de visa.
            </h2>
            <p>Ces blocs recurrent. Voici comment les eviter.</p>
          </motion.div>

          <div className="error-grid">
            {visaErrorCategories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  className="error-card"
                  {...revealProps}
                >
                  <div className="error-header">
                    <div className="error-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                  <p className="error-description">{category.description}</p>
                  <ul className="error-list">
                    {category.errors.map((error, index) => (
                      <li key={index}>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="error-highlight">
                    <strong>💡 {category.highlight}</strong>
                  </div>
                </motion.article>
              );
            })}
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
              Tes questions — <span>nos reponses honnetes</span>.
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
                {expandedFaq === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
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
        text="Pas de promesses vides, juste une lecture d analyse : est-ce que ca peut marcher ? Qu est-ce qui manque ?"
      />
    </>
  );
}
