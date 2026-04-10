import { ClosingBanner, PageIntro, TestimonialsSection } from '../components/SharedSections'
import { pageIntros } from '../siteData'

export function TemoignagesPage() {
  return (
    <>
      <PageIntro tag={pageIntros.temoignages.tag} title={pageIntros.temoignages.title} text={pageIntros.temoignages.text} />

      <TestimonialsSection
        marquee
        title={
          <>
            Ils pensaient que c'était <span>bloqué</span>. Le projet a avancé.
          </>
        }
        text="Ici on privilégie les retours réels, les vidéos, les contextes et les phrases qui montrent la valeur du cadrage SchoolMo."
      />

      <ClosingBanner
        title={
          <>
            Derrière chaque témoignage, il y a surtout une <span>méthode</span>.
          </>
        }
        text="Les témoignages servent à rassurer, mais aussi à montrer qu'un projet solide se construit et s'argumente."
      />
    </>
  )
}
