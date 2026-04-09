import { motion } from 'framer-motion'
import { ClosingBanner, ContactSection, PageIntro } from '../components/SharedSections'
import { pageIntros, processSteps, revealProps } from '../siteData'

export function AccompagnementPage() {
  return (
    <>
      <PageIntro tag={pageIntros.accompagnement.tag} title={pageIntros.accompagnement.title} text={pageIntros.accompagnement.text} />

      <section className="section section-dark">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag">Parcours</span>
            <h2>
              Chaque etape a une <span>mission claire</span>.
            </h2>
            <p>
              Cette page detaille le coeur de l accompagnement SchoolMo et la logique de travail
              derriere chaque phase.
            </p>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.article
                  key={step.number}
                  id={`phase-${index + 1}`}
                  className={`process-card ${index === 0 ? 'is-featured' : ''}`}
                  {...revealProps}
                >
                  <div className="process-topline">
                    <span>{step.number}</span>
                    <Icon size={18} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection />

      <ClosingBanner
        title={
          <>
            Un accompagnement utile commence par un <span>cadre clair</span>.
          </>
        }
        text="Cette page sert a montrer la methode: ce que SchoolMo fait, dans quel ordre, et pourquoi chaque phase compte."
      />
    </>
  )
}
