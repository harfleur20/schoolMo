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
            Ils pensaient que c etait <span>bloque</span>. Le projet a avance.
          </>
        }
        text="Ici on privilegie les retours reels, les videos, les contextes et les phrases qui montrent la valeur du cadrage SchoolMo."
      />

      <ClosingBanner
        title={
          <>
            Derriere chaque temoignage, il y a surtout une <span>methode</span>.
          </>
        }
        text="Les temoignages servent a rassurer, mais aussi a montrer qu un projet solide se construit et s argumente."
      />
    </>
  )
}
