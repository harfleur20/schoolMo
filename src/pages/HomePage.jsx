import { useState } from 'react'
import { ArrowRight, ChevronDown, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { HomeHero } from '../components/HomeHero'
import { ClosingBanner, PartnersGridSection, TestimonialsSection } from '../components/SharedSections'
import {
  audienceCards,
  homeMethodCards,
  homeMethodPhases,
  homeSituations,
  revealProps,
} from '../siteData'

export function HomePage() {
  const [openPhase, setOpenPhase] = useState(0)

  return (
    <>
      <HomeHero />

      <section className="section section-light study-france-section">
        <div className="section-shell study-france-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">Étudier en France</span>
            <h2>
              Tu te reconnais dans <span>l une de ces situations</span> ?
            </h2>
            <p>
              L accueil doit poser le decor rapidement: SchoolMo parle aux etudiants, aux
              reconversions et aux familles qui veulent un projet France plus cadre.
            </p>
          </motion.div>

          <div className="situation-grid">
            {homeSituations.map((situation, index) => {
              const Icon = situation.icon

              return (
                <motion.article key={situation.title} className="situation-card" {...revealProps}>
                  <div className="situation-card-head">
                    <div className="situation-icon">
                      <Icon size={28} />
                    </div>
                    <span className="situation-index">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{situation.title}</h3>
                  <p>{situation.text}</p>
                </motion.article>
              )
            })}
          </div>

          <motion.div className="situation-note" {...revealProps}>
            <div className="situation-note-icon" aria-hidden="true">
              <Info size={18} />
            </div>
            SchoolMo reconnait dans chaque cas qu un bon projet ne repose ni sur l age ni sur des
            promesses faciles, mais sur un dossier coherent et defendable.
          </motion.div>
        </div>
      </section>

      <section className="section section-light method-section">
        <div className="section-shell method-layout">
          <motion.div className="method-panel method-panel-left" {...revealProps}>
            <h2>Le sens de SchoolMo</h2>
            <p className="method-panel-intro">
              Une lecture simple de ce que porte la marque: mobilite, connexion et bonne methode
              pour faire avancer un projet France avec plus de clarte.
            </p>

            <div className="method-points method-points-meaning">
              {homeMethodCards.map((card) => (
                <article key={`${card.title}-${card.text}`} className="method-meaning-card">
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div className="method-panel method-panel-right" {...revealProps}>
            <span className="section-tag section-tag-light">Notre difference</span>
            <h2>
              SchoolMo, ce n est pas une agence. <span>C est un projet de mobilite.</span>
            </h2>
            <p>
              On ne vend pas du reve. On construit des parcours serieux - et on accompagne chaque
              personne a travers 5 phases structurees jusqu a l obtention de son visa etudiant.
            </p>

            <div className="method-accordion">
              {homeMethodPhases.map((phase, index) => {
                const isOpen = openPhase === index

                return (
                  <article key={phase.title} className={`method-accordion-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      className="method-accordion-trigger"
                      type="button"
                      onClick={() => setOpenPhase(isOpen ? -1 : index)}
                    >
                      <span className="method-phase-chip">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="method-accordion-title">{phase.title}</span>
                      <ChevronDown size={18} />
                    </button>

                    <div className="method-accordion-body">
                      <div>
                        <p>{phase.text}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <NavLink className="btn btn-primary method-cta" to="/accompagnement#diagnostic">
              Tu souhaites etre accompagne(e) ?
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      <section className="section reassurance-banner">
        <div className="section-shell">
          <motion.div className="section-heading reassurance-card" {...revealProps}>
            <span className="section-tag">Projet France</span>
            <h2>
              Il n est jamais trop tard <span>pour etudier en France</span>.
            </h2>
            <p>
              Age, trou dans le parcours ou reconversion ne ferment pas automatiquement la porte.
              Ce qui compte, c est la coherence du projet et la facon dont il est construit.
            </p>
            <NavLink className="btn btn-primary" to="/accompagnement">
              Voir notre accompagnement
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">Profils</span>
            <h2>
              SchoolMo t accompagne <span>quel que soit ton profil</span>.
            </h2>
            <p>
              L accueil doit montrer tres vite que le service n est pas reserve a un seul type de
              candidat. Le discours s adresse a plusieurs realites.
            </p>
          </motion.div>

          <div className="audience-grid">
            {audienceCards.map((card) => {
              const Icon = card.icon

              return (
                <motion.article key={card.title} className="audience-card profile-card" {...revealProps}>
                  <div className="audience-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection
        marquee
        title={
          <>
            Ils pensaient que c etait <span>impossible</span>. Ils sont en France.
          </>
        }
        text="Le social proof doit respirer le vecu: retours d experience, reformulations honnetes et videos courtes."
      />

      <section className="section institution-banner">
        <div className="section-shell">
          <motion.div className="institution-card" {...revealProps}>
            <span className="section-tag section-tag-light">Partenariats</span>
            <h2>
              Tu es un <span>etablissement scolaire ou universitaire</span> ?
            </h2>
            <p>
              SchoolMo peut aussi presenter votre offre, qualifier les profils et accompagner les
              etudiants vers des parcours plus lisibles.
            </p>
            <NavLink className="btn btn-primary" to="/partenariats">
              Decouvrir la page partenariats
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      <PartnersGridSection
        title={
          <>
            Des ecoles reconnues <span>qui nous font confiance</span>.
          </>
        }
        text="Nous gardons notre design, mais nous utilisons ce bloc comme preuve de credibilite et d ancrage."
      />

      <ClosingBanner
        title={
          <>
            Tout projet merite d aboutir. <span>SchoolMo est la pour ca.</span>
          </>
        }
        text="Le service cadre, accompagne, puis reste present dans la phase de depart et d installation."
      />
    </>
  )
}
