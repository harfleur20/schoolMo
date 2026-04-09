import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ClosingBanner, ContactSection, FaqSection, PageIntro } from '../components/SharedSections'
import { homeSituations, pageIntros, revealProps, valuePillars } from '../siteData'

export function EtudierFrancePage() {
  return (
    <>
      <PageIntro
        tag={pageIntros.etudes.tag}
        title={pageIntros.etudes.title}
        text={pageIntros.etudes.text}
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
            <span className="section-tag section-tag-light">Situations frequentes</span>
            <h2>
              Les cas les plus frequents avant de <span>lancer les demarches</span>.
            </h2>
            <p>
              Cette page pose les vraies questions de depart avant Campus France, les candidatures
              et le visa.
            </p>
          </motion.div>

          <div className="situation-grid">
            {homeSituations.map((situation) => (
              <motion.article key={situation} className="situation-card" {...revealProps}>
                <p>{situation}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">Ce qui compte</span>
            <h2>
              Un projet France se joue sur la <span>coherence</span>, pas sur la chance.
            </h2>
            <p>
              Les pieces, le discours et le positionnement doivent raconter la meme trajectoire.
            </p>
          </motion.div>

          <div className="pillar-grid">
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <motion.article key={pillar.title} className="pillar-card" {...revealProps}>
                  <div className="icon-chip">
                    <Icon size={22} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />
      <ClosingBanner
        title={
          <>
            Tu veux savoir si ton projet peut <span>vraiment avancer</span> ?
          </>
        }
        text="Le meilleur point d entree reste un diagnostic franc avant d empiler les demarches."
      />
    </>
  )
}
