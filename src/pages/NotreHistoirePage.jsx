import { motion } from 'framer-motion'
import { ClosingBanner, PageIntro } from '../components/SharedSections'
import { founder, pageIntros, revealProps, storyHighlights } from '../siteData'

export function NotreHistoirePage() {
  return (
    <>
      <PageIntro tag={pageIntros.histoire.tag} title={pageIntros.histoire.title} text={pageIntros.histoire.text} />

      <section className="section section-light">
        <div className="section-shell profiles-layout">
          <motion.div className="section-heading heading-left" {...revealProps}>
            <span className="section-tag section-tag-light">Notre histoire</span>
            <h2>
              Une histoire de <span>lucidité</span>, de structure et de terrain.
            </h2>
            <p>
              Cette page assume un ton plus éditorial : d'où vient SchoolMo, ce que la marque
              refuse, et pourquoi elle parle aussi fort de cohérence.
            </p>
          </motion.div>

          <motion.div className="founder-card" {...revealProps}>
            <div className="founder-photo-wrap">
              <img src={founder.photo} alt="Portrait du fondateur de SchoolMo" />
            </div>
            <div className="founder-copy">
              <span className="section-tag section-tag-light">Vision SchoolMo</span>
              <h3>Une marque plus humaine, plus directe, plus crédible.</h3>
              <p>
                SchoolMo a été pensé pour remettre de l'exigence et du bon sens dans les projets
                d'études vers la France. Le design doit servir cette clarté, pas la masquer.
              </p>
              <div className="founder-note">
                <strong>{founder.name}</strong>
                <span>{founder.role}</span>
              </div>
            </div>
          </motion.div>

          <div className="story-grid">
            {storyHighlights.map((highlight) => (
              <motion.article key={highlight.title} className="pillar-card" {...revealProps}>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ClosingBanner
        title={
          <>
            L'histoire SchoolMo repose sur une idée simple : <span>mieux faire</span>.
          </>
        }
        text="Mieux lire les profils, mieux construire les dossiers, mieux préparer les étudiants au départ."
      />
    </>
  )
}
