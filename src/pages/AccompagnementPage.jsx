import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClosingBanner,
  ContactSection,
  PageIntro,
} from "../components/SharedSections";
import {
  pageIntros,
  accompanimentPhaseDetails,
  revealProps,
} from "../siteData";

export function AccompagnementPage() {
  const [activePhase, setActivePhase] = useState(0);
  const currentPhase = accompanimentPhaseDetails[activePhase];

  return (
    <>
      <PageIntro
        tag={pageIntros.accompagnement.tag}
        title={pageIntros.accompagnement.title}
        accent={pageIntros.accompagnement.accent}
        text={pageIntros.accompagnement.text}
      />

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Le processus schoolmo
            </span>
            <h2>
              Chaque phase, <span>chaque detail</span> compte
            </h2>
            <p>
              Cliquez sur chaque phase pour decouvrir ce que SchoolMo fait
              concretement pour toi.
            </p>
          </motion.div>

          <div className="phase-selector">
            {accompanimentPhaseDetails.map((phase, index) => (
              <motion.button
                key={phase.id}
                className={`phase-button ${activePhase === index ? "is-active" : ""}`}
                onClick={() => setActivePhase(index)}
                {...revealProps}
              >
                <span className="phase-number">{phase.id}</span>
                <span className="phase-name">{phase.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="phase-content">
            <motion.div
              key={currentPhase.id}
              className="phase-panel"
              {...revealProps}
            >
              <div className="phase-left">
                <h3>{currentPhase.title}</h3>
                <p className="phase-description">
                  {currentPhase.fullDescription || currentPhase.shortTitle}
                </p>
                <ul className="phase-details">
                  {currentPhase.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                {currentPhase.highlightText && (
                  <div className="phase-highlight">
                    <strong>{currentPhase.highlight}</strong>
                    <p>{currentPhase.highlightText}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {activePhase === 0 && (
              <motion.div className="phase-alt-content" {...revealProps}>
                <h3>Phase Accueil</h3>
                <p className="phase-alt-text">
                  Tout commence par une analyse detaillee de ton profil. Apres
                  de nombreux cas traites par SchoolMo avant, tu peux repartir
                  confiant — ou te savoir exactement ce qu il faut changer.
                </p>
                <ul className="phase-detailed-list">
                  <li>
                    Analyse de ta situation academique, tes experiences
                    professionnelles
                  </li>
                  <li>
                    Identification des forces et des risques de ton profil
                  </li>
                  <li>Definition des objectifs realistes et strategiques</li>
                  <li>
                    Conseil sur l ecole, le diplome et le projet post-etudes
                  </li>
                </ul>
                <div className="phase-alt-highlight">
                  <strong>Le bon depart c est la bonne analyse</strong>
                  <p>
                    Si tu es perdu ou si tu ne sais pas par ou commencer, c est
                    normal. SchoolMo existe pour ca: transformer une envie en
                    projet defendable.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <ContactSection />
      <ClosingBanner
        title={
          <>
            Pret(e) a demarrer ton <span>accompagnement</span> ?
          </>
        }
        text="La premiere etape est un diagnostic gratuit. On evalue la situation, on l analyse le processus, et on convainc ensemble."
      />
    </>
  );
}
