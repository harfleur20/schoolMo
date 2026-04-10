import { motion } from 'framer-motion'
import { ClosingBanner, ContactSection, PageIntro, PartnersGridSection } from '../components/SharedSections'
import { partnerBenefits, pageIntros, revealProps } from '../siteData'

export function PartenariatsPage() {
  return (
    <>
      <PageIntro tag={pageIntros.partenariats.tag} title={pageIntros.partenariats.title} text={pageIntros.partenariats.text} />

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">Pourquoi SchoolMo</span>
            <h2>
              Un partenaire qui sait parler aux <span>étudiants africains</span>.
            </h2>
            <p>
              La page partenariats doit montrer la valeur pour les établissements : meilleurs
              profils, discours plus lisible, activations plus sérieuses.
            </p>
          </motion.div>

          <div className="audience-grid">
            {partnerBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <motion.article key={benefit.title} className="audience-card" {...revealProps}>
                  <div className="audience-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <PartnersGridSection
        title={
          <>
            Des écoles reconnues <span>déjà engagées</span>.
          </>
        }
        text="Ce bloc reprend les établissements visibles aujourd'hui et les présente dans un cadre plus premium."
      />

      <ContactSection />

      <ClosingBanner
        title={
          <>
            Vous êtes une école ? <span>Construisons un dispositif utile.</span>
          </>
        }
        text="SchoolMo peut activer des ateliers, qualifier les profils et fluidifier le parcours des étudiants."
      />
    </>
  )
}
