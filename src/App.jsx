import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  FileCheck2,
  Globe2,
  GraduationCap,
  Handshake,
  Mail,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import logo from '../Assets/logo_site_web.png'
import siteIcon from '../Assets/icon.png'
import founderPhoto from '../Assets/Anicet_nemani.jpg'
import eceLogo from '../Assets/ECE_LOGO_2021_web.png'
import ebsLogo from '../Assets/ebs-paris-european-business-school-logo-vector.png'
import inseecLogo from '../Assets/ecole-inseec-formations.webp'
import edcLogo from '../Assets/EDC_PARIS_BUSINESS_SCHOOL_LOGO_MONOCHROME_BLEU.png'
import temoignageVideo1 from '../Assets/temoignage_1.mp4'
import temoignageVideo2 from '../Assets/temoignage_2.mp4'
import heroSlideVisa from './assets/hero-slide-visa.jpeg'
import heroSlideSupport from './assets/hero-slide-support.jpeg'
import heroSlideStudents from './assets/hero-slide-students.jpeg'
import './App.css'

const whatsappNumber = '33755174464'
const whatsappBaseLink = `https://wa.me/${whatsappNumber}`

const navItems = [
  { label: 'Accueil', href: '#top' },
  { label: 'Étudier en France', href: '#etudier-en-france' },
  { label: 'Accompagnement', href: '#accompagnement' },
  { label: 'Partenariats', href: '#partenariats' },
  { label: 'Notre histoire', href: '#notre-histoire' },
  { label: 'Témoignages', href: '#temoignages' },
]

const heroSlides = [
  {
    id: 'clarity',
    label: 'Visa etudes France',
    title: 'Ton dossier de visa',
    accent: 'entre de bonnes mains.',
    description:
      "SchoolMo accompagne les etudiants africains, camerounais en particulier, pour transformer une envie d etudier en France en dossier credible, clair et defendable.",
    image: heroSlideVisa,
    imageAlt: 'Transmission de colis et documents',
    imagePosition: '76% center',
  },
  {
    id: 'journey',
    label: 'Suivi et accompagnement',
    title: 'Ton projet France',
    accent: 'pilote de bout en bout.',
    description:
      "Orientation, candidatures, Campus France, consulaire, preparation au depart: chaque phase est cadree pour eviter les improvisations qui coutent du temps et des refus.",
    image: heroSlideSupport,
    imageAlt: 'Femme travaillant sur ordinateur avec documents',
    imagePosition: '72% center',
  },
  {
    id: 'confidence',
    label: 'Mobilite etudes',
    title: 'La France est accessible,',
    accent: 'si le projet est bien construit.',
    description:
      "Le positionnement SchoolMo est simple: dire ce qui est possible, ce qui ne l est pas, puis monter une trajectoire coherente pour les profils etudiants, reconversions et parents.",
    image: heroSlideStudents,
    imageAlt: 'Deux etudiants souriants avec ordinateur',
    imagePosition: '68% center',
  },
]

const credibilityStats = [
  { value: '+2 000', label: 'visas etudiants obtenus pour la France' },
  { value: '5', label: 'phases pour piloter un dossier de bout en bout' },
  { value: '24h', label: 'pour un premier retour honnete et actionnable' },
  { value: '+20', label: 'conferences et ateliers menes en Afrique' },
]

const valuePillars = [
  {
    icon: ShieldCheck,
    title: 'Un filtre utile contre les fausses promesses',
    text: "Avant de vendre un accompagnement, SchoolMo regarde si le projet tient debout. L objectif est d eviter les dossiers montes au hasard.",
  },
  {
    icon: CircleGauge,
    title: 'Une lecture strategique du profil',
    text: "Age, annees vides, reconversion, coherence du parcours, financement: le site montre que chaque detail compte et peut etre travaille intelligemment.",
  },
  {
    icon: Globe2,
    title: 'Une narration pensee pour la mobilite',
    text: "Le projet n est pas seulement administratif. Il faut raconter une trajectoire lisible entre le Cameroun, l ecole choisie et l objectif en France.",
  },
  {
    icon: BadgeCheck,
    title: 'Une execution structuree',
    text: "SchoolMo cadre le parcours en sequences concretes: orientation, candidatures, Campus France, visa, preparation a l arrivee.",
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Accueil et orientation',
    icon: Sparkles,
    text: "Analyse du profil, lecture des points forts et faibles, choix d un cap d etudes coherent pour la France.",
    points: ['Diagnostic gratuit', 'Positionnement du profil', 'Premier plan de route'],
  },
  {
    number: '02',
    title: 'Ecoles et candidatures',
    icon: GraduationCap,
    text: "Selection des etablissements, dossier de candidature, CV, lettre de motivation et coaching si entretien.",
    points: ['Cibles adaptees', 'Pieces academiques', 'Coaching candidature'],
  },
  {
    number: '03',
    title: 'Dossier Campus France',
    icon: FileCheck2,
    text: "Creation et alimentation du dossier, coherence du discours, simulations d entretien et validation des pieces.",
    points: ['Compte et pieces', 'Narration du projet', 'Preparation entretien'],
  },
  {
    number: '04',
    title: 'Phase consulaire',
    icon: ShieldCheck,
    text: "Montage du dossier visa, preuves financieres, check final, rendez-vous et reduction des erreurs critiques.",
    points: ['France-Visas', 'Garant et financement', 'Checklist consulaire'],
  },
  {
    number: '05',
    title: 'Apres le visa',
    icon: MapPinned,
    text: "Preparation a l arrivee en France, conseils d installation et integration dans l ecosysteme SchoolMo.",
    points: ['Preparation depart', 'Reperes pratiques', 'Suite du parcours'],
  },
]

const audienceCards = [
  {
    icon: GraduationCap,
    title: 'Etudiants',
    text: "Bac, BTS, licence ou master: le site rassure sur la methode et donne envie de passer a l action vite.",
  },
  {
    icon: BriefcaseBusiness,
    title: 'Reconversion',
    text: "Pour les profils plus ages, le message casse l idee que la France est fermee d avance. Tout repose sur la coherence du projet.",
  },
  {
    icon: Handshake,
    title: 'Parents',
    text: "SchoolMo peut aussi aider a securiser le depart d un enfant, clarifier les etapes et limiter les mauvaises decisions.",
  },
]

const testimonialCards = [
  { id: 'video-1', type: 'video', name: 'Retour d experience', subtitle: 'Temoignage video SchoolMo', video: temoignageVideo1 },
  {
    id: 'quote-1',
    type: 'quote',
    name: 'Armand Kouakam',
    subtitle: 'Yaounde vers Lyon | Master Finance',
    quote: "J avais deja tente seul. Avec SchoolMo, le dossier a ete recadre de zero et le visa est enfin passe.",
  },
  { id: 'video-2', type: 'video', name: 'Parcours accompagne', subtitle: 'Mobilite etudes en France', video: temoignageVideo2 },
  {
    id: 'quote-2',
    type: 'quote',
    name: 'Paul Ngono',
    subtitle: 'Douala vers Bordeaux | Reconversion',
    quote: "A plus de 40 ans, je pensais la porte fermee. SchoolMo a surtout apporte une lecture serieuse et honnete de mon projet.",
  },
  {
    id: 'quote-3',
    type: 'quote',
    name: 'Stephanie Mboua',
    subtitle: 'Douala vers Paris | Licence Pro',
    quote: "On m a dit clairement ce qui n allait pas, puis on a corrige point par point. Le site doit respirer cette franchise.",
  },
]

const partnershipLogos = [
  { src: eceLogo, alt: 'Logo ECE', label: 'ECE' },
  { src: edcLogo, alt: 'Logo EDC Paris Business School', label: 'EDC Paris' },
  { src: ebsLogo, alt: 'Logo European Business School', label: 'EBS Paris' },
  { src: inseecLogo, alt: 'Logo INSEEC', label: 'INSEEC' },
]

const faqItems = [
  {
    question: "J ai plus de 30 ans, est-ce encore jouable pour un visa etudes ?",
    answer:
      "Oui, mais pas avec un dossier standard. Il faut une logique de reconversion, une ecole adaptee et un projet qui se defend serieusement. C est la que SchoolMo apporte de la valeur.",
  },
  {
    question: "Je suis au Cameroun, est-ce que l accompagnement est pense pour moi ?",
    answer:
      "Oui. Le message du site cible en priorite les etudiants africains et camerounais, avec une lecture concrete des enjeux Campus France, consulaire et financiers.",
  },
  {
    question: 'SchoolMo garantit-il un visa ?',
    answer:
      "Non. Le site reste credible: SchoolMo ne promet pas un resultat automatique. Il promet une lecture honnete du profil, une methode et une execution plus solide.",
  },
  {
    question: "Puis-je etre accompagne si j ai deja essuye un refus ?",
    answer:
      "Oui. Un refus ne ferme pas toujours la porte. Il faut identifier ce qui a bloque, revoir la strategie, les pieces et parfois le positionnement complet du projet.",
  },
  {
    question: 'Comment se passe le premier contact ?',
    answer:
      "Le tunnel ideal commence par un diagnostic gratuit. Le formulaire ouvre WhatsApp avec un message pre-rempli, puis SchoolMo repond avec un premier retour exploitable.",
  },
]

const contactSteps = [
  'Tu laisses ton profil et ton contexte en 2 minutes.',
  'SchoolMo analyse la coherence du projet, du parcours et du niveau de risque.',
  'Tu recois un retour clair et la meilleure suite possible pour avancer.',
]

const revealProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [formSent, setFormSent] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      city: '',
      email: '',
      profile: '',
      project: '',
      message: '',
    },
  })

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    heroSlides.forEach((slide) => {
      const image = new Image()
      image.src = slide.image
    })
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onSubmit = (values) => {
    const text = [
      'Bonjour SchoolMo,',
      `Je m appelle ${values.fullname}.`,
      `Ville / Pays : ${values.city}.`,
      `Profil : ${values.profile}.`,
      `Projet : ${values.project}.`,
      values.email ? `Email : ${values.email}.` : 'Email : non renseigne.',
      `Contexte : ${values.message}`,
    ].join('\n')

    window.open(`${whatsappBaseLink}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setFormSent(true)
    reset()
  }

  return (
    <div className="site-shell">
      <motion.div
        layout
        className={`site-header-shell ${isScrolled ? 'is-scrolled' : ''}`}
        transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }}
      >
        <motion.header
          layout
          className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
          transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }}
        >
          <a className="brand" href="#top" aria-label="Retour en haut">
            <img src={logo} alt="Logo SchoolMo" />
          </a>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#diagnostic" onClick={() => setMenuOpen(false)}>
              Diagnostic gratuit
              <ArrowRight size={16} />
            </a>
          </nav>

          <button className="menu-toggle" type="button" aria-label="Menu" onClick={() => setMenuOpen((current) => !current)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.header>
      </motion.div>

      <main id="top">
        <section className="hero-section">
          <div className="section-shell">
            <section className="hero-stage">
              <div className="hero-backgrounds" aria-hidden="true">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`hero-slide-bg ${index === activeSlide ? 'is-active' : ''}`}
                    style={{
                      '--hero-image': `url(${slide.image})`,
                      '--hero-position': slide.imagePosition,
                    }}
                  />
                ))}
              </div>

              <div className="hero-stage-inner">
                <div className="hero-copy hero-copy-banner">
                  <div className="hero-copy-stack">
                    {heroSlides.map((slide, index) => (
                      <motion.div
                        key={slide.id}
                        className={`hero-copy-motion ${index === activeSlide ? 'is-active' : ''}`}
                        initial={false}
                        animate={
                          index === activeSlide
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 18, scale: 0.985 }
                        }
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="hero-badge">
                          <span className="hero-badge-icon" aria-hidden="true">
                            <img src={siteIcon} alt="" />
                          </span>
                          <span className="hero-badge-label">{slide.label}</span>
                        </span>

                        <div className="hero-copy-block">
                          <h1>
                            {slide.title} <span>{slide.accent}</span>
                          </h1>
                          <p className="hero-lead">{slide.description}</p>
                        </div>

                        <div className="hero-actions">
                          <a className="btn btn-primary" href="#diagnostic">
                            Demarrer mon diagnostic
                            <ArrowRight size={18} />
                          </a>
                          <a className="btn btn-secondary" href={whatsappBaseLink} target="_blank" rel="noreferrer">
                            <MessageCircle size={18} />
                            Ecrire sur WhatsApp
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-controls" aria-label="Navigation du slider">
                {heroSlides.map((slide, index) => (
                  <motion.button
                    key={slide.id}
                    className={index === activeSlide ? 'is-active' : ''}
                    type="button"
                    aria-current={index === activeSlide ? 'true' : 'false'}
                    aria-label={`Afficher le slide ${String(index + 1).padStart(2, '0')} : ${slide.label}`}
                    onClick={() => setActiveSlide(index)}
                    initial={false}
                    animate={
                      index === activeSlide
                        ? { x: 8, opacity: 1 }
                        : { x: 0, opacity: 0.72 }
                    }
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  >
                    <span className="hero-control-rail" aria-hidden="true">
                      {index === activeSlide && (
                        <motion.span
                          className="hero-control-progress"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 5.2, ease: 'linear' }}
                        />
                      )}
                    </span>
                    <motion.span
                      className="hero-control-index"
                      initial={false}
                      animate={
                        index === activeSlide
                          ? { opacity: 1, scale: 1.12 }
                          : { opacity: 0.42, scale: 1 }
                      }
                      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </section>

            <div className="hero-stats-row">
              {credibilityStats.map((stat) => (
                <div key={stat.label} className="credibility-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="etudier-en-france" className="section-shell split-section">
          <motion.div className="split-copy" {...revealProps}>
            <span className="section-tag section-tag-light">Pourquoi ce nouveau site</span>
            <h2>
              Donner de la <span>perspective</span> au projet, pas juste aligner des blocs.
            </h2>
            <p>
              La refonte tire le site vers une direction plus editoriale, plus premium et plus
              convaincante: on garde les couleurs SchoolMo, mais on muscle la narration, l energie
              visuelle et la lisibilite du parcours.
            </p>
            <div className="split-quote">
              <p>Le site doit faire ressentir la rigueur du dossier visa et l elan d un nouveau depart.</p>
            </div>
          </motion.div>

          <motion.div className="pillar-grid" {...revealProps}>
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="pillar-card">
                  <div className="icon-chip">
                    <Icon size={22} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              )
            })}
          </motion.div>
        </section>

        <section id="accompagnement" className="section section-dark">
          <div className="section-shell">
            <motion.div className="section-heading" {...revealProps}>
              <span className="section-tag">Accompagnement</span>
              <h2>
                Un cadre en <span>5 phases</span> pour sortir des demarches improvisees.
              </h2>
              <p>
                Chaque phase a une mission claire: faire gagner du temps, limiter les erreurs et
                renforcer la credibilite du dossier a chaque etape.
              </p>
            </motion.div>

            <div className="process-grid">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.article key={step.number} className={`process-card ${index === 0 ? 'is-featured' : ''}`} {...revealProps}>
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

        <section id="notre-histoire" className="section section-light">
          <div className="section-shell profiles-layout">
            <motion.div className="profiles-copy" {...revealProps}>
              <span className="section-tag section-tag-light">Pour qui</span>
              <h2>
                Le discours s adresse aux <span>etudiants</span>, aux reconversions et aux parents.
              </h2>
              <p>
                La refonte segmente mieux les besoins. Chacun doit se reconnaitre en quelques
                secondes et comprendre ce que SchoolMo peut faire pour lui.
              </p>
            </motion.div>

            <div className="audience-grid">
              {audienceCards.map((card) => {
                const Icon = card.icon
                return (
                  <motion.article key={card.title} className="audience-card" {...revealProps}>
                    <div className="audience-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </motion.article>
                )
              })}
            </div>

            <motion.div className="founder-card" {...revealProps}>
              <div className="founder-photo-wrap">
                <img src={founderPhoto} alt="Portrait du fondateur de SchoolMo" />
              </div>
              <div className="founder-copy">
                <span className="section-tag section-tag-light">Vision SchoolMo</span>
                <h3>Un ton plus humain, plus direct, plus credible.</h3>
                <p>
                  La marque doit respirer la franchise: on explique, on cadre, on execute. Le
                  design sert ce positionnement avec une interface plus vivante, plus claire et plus
                  memorisable.
                </p>
                <div className="founder-note">
                  <strong>Anicet Nemani</strong>
                  <span>SchoolMo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="temoignages" className="section section-soft">
          <div className="section-shell">
            <motion.div className="section-heading" {...revealProps}>
              <span className="section-tag section-tag-light">Temoignages</span>
              <h2>
                Un carousel automatique pour montrer du <span>vrai</span>, pas du decoratif.
              </h2>
              <p>
                Videos courtes, retours d experience et citations: la preuve sociale tourne en
                continu sans rendre la page lourde ou statique.
              </p>
            </motion.div>

            <div className="marquee">
              <div className="marquee-track">
                {[...testimonialCards, ...testimonialCards].map((card, index) => (
                  <article key={`${card.id}-${index}`} className="testimonial-card">
                    {card.type === 'video' ? (
                      <div className="testimonial-video">
                        <video autoPlay loop muted playsInline preload="metadata">
                          <source src={card.video} type="video/mp4" />
                        </video>
                        <div className="video-chip">
                          <MessageCircle size={16} />
                          Video
                        </div>
                      </div>
                    ) : (
                      <div className="testimonial-quote">
                        <QuoteBubble />
                        <p>{card.quote}</p>
                      </div>
                    )}

                    <div className="testimonial-meta">
                      <strong>{card.name}</strong>
                      <span>{card.subtitle}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partenariats" className="section section-light">
          <div className="section-shell partnerships-layout">
            <motion.div className="partnership-copy" {...revealProps}>
              <span className="section-tag section-tag-light">Partenariats</span>
              <h2>
                Une vitrine plus nette pour les <span>ecoles partenaires</span>.
              </h2>
              <p>
                Le site sert le double discours: rassurer les futurs etudiants tout en montrant aux
                etablissements que SchoolMo sait structurer un programme d accompagnement.
              </p>

              <div className="partnership-points">
                <div>
                  <Handshake size={18} />
                  <span>Ateliers et conferences en Afrique</span>
                </div>
                <div>
                  <Globe2 size={18} />
                  <span>Projection des etudiants vers la France</span>
                </div>
                <div>
                  <ShieldCheck size={18} />
                  <span>Parcours cadre avant depots Campus France et visa</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="logo-grid" {...revealProps}>
              {partnershipLogos.map((partner) => (
                <article key={partner.label} className="logo-card">
                  <img src={partner.src} alt={partner.alt} />
                  <span>{partner.label}</span>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="section-shell faq-layout">
            <motion.div className="section-heading heading-left" {...revealProps}>
              <span className="section-tag section-tag-light">FAQ</span>
              <h2>
                Les questions qui bloquent avant meme de <span>se lancer</span>.
              </h2>
              <p>
                Une FAQ en accord avec la cible SchoolMo: age, refus, reconversion, realisme du
                projet et premiere prise de contact.
              </p>
            </motion.div>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <motion.article key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`} {...revealProps}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <ChevronDown size={18} />
                    </button>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="diagnostic" className="section section-cta">
          <div className="section-shell cta-layout">
            <motion.div className="cta-copy-panel" {...revealProps}>
              <span className="section-tag section-tag-light">Diagnostic gratuit</span>
              <h2>
                Le bon premier geste: <span>qualifier le projet</span> avant de s epuiser.
              </h2>
              <p>
                Le formulaire ci-dessous alimente un message WhatsApp pre-rempli. Il capte les
                leads sans backend complexe tout en gardant un contact humain immediat.
              </p>

              <div className="cta-steps">
                {contactSteps.map((step, index) => (
                  <div key={step} className="cta-step">
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="contact-badges">
                <a href={whatsappBaseLink} target="_blank" rel="noreferrer">
                  <Phone size={16} />
                  +33 7 55 17 44 64
                </a>
                <a href="mailto:contact@schoolmo.fr">
                  <Mail size={16} />
                  contact@schoolmo.fr
                </a>
              </div>
            </motion.div>

            <motion.div className="form-panel" {...revealProps}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grid">
                  <label>
                    Nom complet
                    <input type="text" placeholder="Ex: Brenda N." {...register('fullname', { required: 'Champ requis' })} />
                    {errors.fullname && <span>{errors.fullname.message}</span>}
                  </label>

                  <label>
                    Ville / Pays
                    <input type="text" placeholder="Yaounde, Cameroun" {...register('city', { required: 'Champ requis' })} />
                    {errors.city && <span>{errors.city.message}</span>}
                  </label>

                  <label>
                    Email
                    <input type="email" placeholder="adresse@email.com" {...register('email')} />
                  </label>

                  <label>
                    Profil
                    <select {...register('profile', { required: 'Champ requis' })}>
                      <option value="">Choisir</option>
                      <option value="Etudiant">Etudiant</option>
                      <option value="Reconversion">Reconversion</option>
                      <option value="Parent">Parent</option>
                    </select>
                    {errors.profile && <span>{errors.profile.message}</span>}
                  </label>

                  <label className="full">
                    Projet principal
                    <select {...register('project', { required: 'Champ requis' })}>
                      <option value="">Choisir</option>
                      <option value="Etudier en France">Etudier en France</option>
                      <option value="Reprendre des etudes">Reprendre des etudes</option>
                      <option value="Accompagner mon enfant">Accompagner mon enfant</option>
                      <option value="Verifier la faisabilite du dossier">Verifier la faisabilite du dossier</option>
                    </select>
                    {errors.project && <span>{errors.project.message}</span>}
                  </label>

                  <label className="full">
                    Contexte
                    <textarea rows="5" placeholder="Age, niveau d etudes, objectif, difficulte actuelle..." {...register('message', { required: 'Champ requis' })} />
                    {errors.message && <span>{errors.message.message}</span>}
                  </label>
                </div>

                <button className="btn btn-primary btn-submit" type="submit">
                  Envoyer sur WhatsApp
                  <Send size={18} />
                </button>

                <p className="form-note">
                  Le formulaire n envoie rien en base de donnees. Il ouvre simplement WhatsApp avec
                  un message pre-structure pour accelerer le premier diagnostic.
                </p>

                {formSent && (
                  <div className="form-success">
                    <CheckCircle2 size={18} />
                    WhatsApp s est ouvert avec ton message pre-rempli.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div>
            <img className="footer-logo" src={logo} alt="Logo SchoolMo" />
            <p>
              SchoolMo accompagne les etudiants africains vers la France avec une approche
              structuree, franche et orientee resultat.
            </p>
          </div>

          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function QuoteBubble() {
  return (
    <div className="quote-bubble">
      <MessageCircle size={18} />
    </div>
  )
}

export default App
