import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircleGauge,
  FileCheck2,
  Globe2,
  GraduationCap,
  Handshake,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./components/BrandIcons";
import founderPhoto from "../Assets/Anicet_nemani.jpg";
import eceLogo from "../Assets/ECE_LOGO_2021_web.png";
import ebsLogo from "../Assets/ebs-paris-european-business-school-logo-vector.png";
import inseecLogo from "../Assets/ecole-inseec-formations.webp";
import edcLogo from "../Assets/EDC_PARIS_BUSINESS_SCHOOL_LOGO_MONOCHROME_BLEU.png";
import temoignageVideo1 from "../Assets/temoignage_1.mp4";
import temoignageVideo2 from "../Assets/temoignage_2.mp4";
import heroSlideVisa from "../Assets/schhollMo_image.png";
import heroSlideSupport from "./assets/hero-slide-support.jpeg";
import heroSlideStudents from "/Assets/women-traveling-together-paris.jpg";

export const whatsappNumber = "33755174464";
export const whatsappBaseLink = `https://wa.me/${whatsappNumber}`;
export const contactEmail = "contact@schoolmo.fr";
export const locationMapLink =
  "https://www.google.com/maps/search/?api=1&query=Yaounde%2C+Cameroun";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bimstr237?mibextid=ZbWKwL",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/schoolmo_?igsh=enpwdDM0bXB6ZGtl",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@anicetnemani?_r=1&_t=ZS-95Jh0ExtMbF",
    icon: TikTokIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@schoolmo237?si=P7vaHmg8MFJbqlhy",
    icon: YouTubeIcon,
  },
];

export const footerMetaLinks = [
  {
    label: "Mentions légales",
    href: `mailto:${contactEmail}?subject=Mentions%20legales%20SchoolMo`,
  },
  {
    label: "Confidentialité",
    href: `mailto:${contactEmail}?subject=Confidentialite%20et%20donnees%20personnelles`,
  },
];

export const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Étudier en France", path: "/etudier-en-france" },
  { label: "Accompagnement", path: "/accompagnement" },
  { label: "Partenariats", path: "/partenariats" },
  { label: "Notre histoire", path: "/notre-histoire" },
  { label: "Témoignages", path: "/temoignages" },
];

export const heroSlides = [
  {
    id: "clarity",
    label: "Visa etudes France",
    title: "Ton dossier de visa",
    accent: "entre de bonnes mains.",
    description:
      "SchoolMo accompagne les etudiants africains, camerounais en particulier, pour transformer une envie d etudier en France en dossier credible, clair et defendable.",
    image: heroSlideVisa,
    imageAlt: "Transmission de colis et documents",
    imagePosition: "76% center",
  },
  {
    id: "journey",
    label: "Suivi et accompagnement",
    title: "Ton projet France",
    accent: "pilote de bout en bout.",
    description:
      "Orientation, candidatures, Campus France, consulaire, preparation au depart: chaque phase est cadree pour eviter les improvisations qui coutent du temps et des refus.",
    image: heroSlideSupport,
    imageAlt: "Femme travaillant sur ordinateur avec documents",
    imagePosition: "72% center",
  },
  {
    id: "confidence",
    label: "Mobilite etudes",
    title: "La France est accessible,",
    accent: "si le projet est bien construit.",
    description:
      "Le positionnement SchoolMo est simple: dire ce qui est possible, ce qui ne l est pas, puis monter une trajectoire coherente pour les profils etudiants, reconversions et parents.",
    image: heroSlideStudents,
    imageAlt: "Deux etudiants souriants avec ordinateur",
    imagePosition: "68% center",
  },
];

export const credibilityStats = [
  {
    value: "+2 000",
    countValue: 2000,
    prefix: "+",
    label: "visas etudiants obtenus pour la France",
    icon: GraduationCap,
  },
  {
    value: "+20",
    countValue: 20,
    prefix: "+",
    label: "conferences et ateliers menes en Afrique",
    icon: Sparkles,
  },
  {
    value: "24h",
    label: "pour un premier retour honnete et actionnable",
    icon: CircleGauge,
  },
  {
    value: "5",
    countValue: 5,
    label: "phases pour piloter un dossier de bout en bout",
    icon: FileCheck2,
  },
];

export const homeSituations = [
  {
    title: "Parcours atypique",
    text: "Tu as obtenu ton bac il y a plusieurs annees et tu crois que la porte est fermee.",
    icon: CircleGauge,
  },
  {
    title: "Reprise d etudes",
    text: "Tu envisages une reprise d etudes ou une reconversion vers la France.",
    icon: GraduationCap,
  },
  {
    title: "Choix d ecole",
    text: "Tu ne sais pas quelle ecole choisir ni comment construire un projet credible.",
    icon: Globe2,
  },
  {
    title: "Dossier Campus France",
    text: "Tu veux eviter les erreurs Campus France et visa qui coutent du temps.",
    icon: FileCheck2,
  },
  {
    title: "Projet familial",
    text: "Tu es parent et tu veux securiser le depart de ton enfant dans de bonnes conditions.",
    icon: Users,
  },
  {
    title: "Apres un refus",
    text: "Tu as deja eu un refus et tu veux repartir sur une strategie plus solide.",
    icon: ShieldCheck,
  },
];

export const homeMethodCards = [
  {
    title: "Mo",
    text: "La mobilite - celle qui transforme les trajectoires, pas seulement les adresses.",
  },
  {
    title: "Mo",
    text: "La mega-connexion - entre l Afrique et le monde, entre qui tu es et qui tu peux devenir.",
  },
  {
    title: "Mo",
    text: "Le moyen de bien faire - la bonne methode, au bon moment, avec le bon accompagnement.",
  },
];

export const homeMethodPhases = [
  {
    title: "Phase 1 - Accueil & orientation",
    text: "Analyse de ton profil, conseil personnalise, definition de ton projet d etudes en France.",
  },
  {
    title: "Phase 2 - Ecole & candidatures",
    text: "CV, lettres de motivation, depot de candidatures, coaching entretiens en visioconference.",
  },
  {
    title: "Phase 3 - Campus France",
    text: "Creation du compte, alimentation du dossier, simulations d entretien et prise de rendez-vous.",
  },
  {
    title: "Phase 4 - Consulaire",
    text: "Constitution du dossier visa, AVI, garant financier, France-Visas, rendez-vous TLS.",
  },
  {
    title: "Phase 5 - Apres le visa",
    text: "Preparation a l arrivee en France et integration dans la communaute SchoolMo.",
  },
];

export const valuePillars = [
  {
    icon: ShieldCheck,
    title: "Un filtre utile contre les fausses promesses",
    text: "Avant de vendre un accompagnement, SchoolMo regarde si le projet tient debout. L objectif est d eviter les dossiers montes au hasard.",
  },
  {
    icon: CircleGauge,
    title: "Une lecture strategique du profil",
    text: "Age, annees vides, reconversion, coherence du parcours, financement: chaque detail compte et peut etre travaille intelligemment.",
  },
  {
    icon: Globe2,
    title: "Une narration pensee pour la mobilite",
    text: "Le projet n est pas seulement administratif. Il faut raconter une trajectoire lisible entre le Cameroun, l ecole choisie et l objectif en France.",
  },
  {
    icon: BadgeCheck,
    title: "Une execution structuree",
    text: "SchoolMo cadre le parcours en sequences concretes: orientation, candidatures, Campus France, visa, preparation a l arrivee.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Accueil et orientation",
    icon: Sparkles,
    text: "Analyse du profil, lecture des points forts et faibles, choix d un cap d etudes coherent pour la France.",
    points: [
      "Diagnostic gratuit",
      "Positionnement du profil",
      "Premier plan de route",
    ],
  },
  {
    number: "02",
    title: "Ecoles et candidatures",
    icon: GraduationCap,
    text: "Selection des etablissements, dossier de candidature, CV, lettre de motivation et coaching si entretien.",
    points: ["Cibles adaptees", "Pieces academiques", "Coaching candidature"],
  },
  {
    number: "03",
    title: "Dossier Campus France",
    icon: FileCheck2,
    text: "Creation et alimentation du dossier, coherence du discours, simulations d entretien et validation des pieces.",
    points: [
      "Compte et pieces",
      "Narration du projet",
      "Preparation entretien",
    ],
  },
  {
    number: "04",
    title: "Phase consulaire",
    icon: ShieldCheck,
    text: "Montage du dossier visa, preuves financieres, check final, rendez-vous et reduction des erreurs critiques.",
    points: ["France-Visas", "Garant et financement", "Checklist consulaire"],
  },
  {
    number: "05",
    title: "Apres le visa",
    icon: MapPinned,
    text: "Preparation a l arrivee en France, conseils d installation et integration dans l ecosysteme SchoolMo.",
    points: ["Preparation depart", "Reperes pratiques", "Suite du parcours"],
  },
];

export const audienceCards = [
  {
    icon: GraduationCap,
    title: "Bacheliers et etudiants",
    text: "Bac, BTS, licence ou master: une lecture claire du profil et un cap de poursuite d etudes en France.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Reconversion et reprise d etudes",
    text: "Pour les profils plus ages, SchoolMo travaille la coherence et casse l idee qu il est trop tard pour tenter la France.",
  },
  {
    icon: Users,
    title: "Parents et familles",
    text: "Un accompagnement pour securiser le projet, clarifier les etapes et limiter les mauvaises decisions avant le depart.",
  },
];

export const testimonialCards = [
  {
    id: "video-1",
    type: "video",
    name: "Retour d experience",
    subtitle: "Temoignage video SchoolMo",
    video: temoignageVideo1,
  },
  {
    id: "quote-1",
    type: "quote",
    name: "Armand Kouakam",
    subtitle: "Yaounde vers Lyon | Master Finance",
    quote:
      "J avais deja tente seul. Avec SchoolMo, le dossier a ete recadre de zero et le visa est enfin passe.",
  },
  {
    id: "video-2",
    type: "video",
    name: "Parcours accompagne",
    subtitle: "Mobilite etudes en France",
    video: temoignageVideo2,
  },
  {
    id: "quote-2",
    type: "quote",
    name: "Paul Ngono",
    subtitle: "Douala vers Bordeaux | Reconversion",
    quote:
      "A plus de 40 ans, je pensais la porte fermee. SchoolMo a surtout apporte une lecture serieuse et honnete de mon projet.",
  },
  {
    id: "quote-3",
    type: "quote",
    name: "Stephanie Mboua",
    subtitle: "Douala vers Paris | Licence Pro",
    quote:
      "On m a dit clairement ce qui n allait pas, puis on a corrige point par point. Le site doit respirer cette franchise.",
  },
];

export const partnershipLogos = [
  { src: eceLogo, alt: "Logo ECE", label: "ECE" },
  { src: edcLogo, alt: "Logo EDC Paris Business School", label: "EDC Paris" },
  { src: ebsLogo, alt: "Logo European Business School", label: "EBS Paris" },
  { src: inseecLogo, alt: "Logo INSEEC", label: "INSEEC" },
];

export const faqItems = [
  {
    question:
      "J ai plus de 30 ans, est-ce encore jouable pour un visa etudes ?",
    answer:
      "Oui, mais pas avec un dossier standard. Il faut une logique de reconversion, une ecole adaptee et un projet qui se defend serieusement. C est la que SchoolMo apporte de la valeur.",
  },
  {
    question:
      "Je suis au Cameroun, est-ce que l accompagnement est pense pour moi ?",
    answer:
      "Oui. Le message du site cible en priorite les etudiants africains et camerounais, avec une lecture concrete des enjeux Campus France, consulaire et financiers.",
  },
  {
    question: "SchoolMo garantit-il un visa ?",
    answer:
      "Non. SchoolMo ne promet pas un resultat automatique. Il promet une lecture honnete du profil, une methode et une execution plus solide.",
  },
  {
    question: "Puis-je etre accompagne si j ai deja essuye un refus ?",
    answer:
      "Oui. Un refus ne ferme pas toujours la porte. Il faut identifier ce qui a bloque, revoir la strategie, les pieces et parfois le positionnement complet du projet.",
  },
];

export const contactSteps = [
  "Tu laisses ton profil et ton contexte en 2 minutes.",
  "SchoolMo analyse la coherence du projet, du parcours et du niveau de risque.",
  "Tu recois un retour clair et la meilleure suite possible pour avancer.",
];

export const pageIntros = {
  etudes: {
    tag: "Etude en France",
    title: "La France est accessible.",
    accent: "SchoolMo te montre le chemin.",
    text: "Des milliers d etudiants africains reussissent chaque annee. La France existe pour ceux qui ont fait leurs devoirs et qui cherchent un environnement pour vraiment construire.",
  },
  accompagnement: {
    tag: "Accompagnement",
    title: "Un parcours cadre pour chaque dossier.",
    text: "De l orientation au depart, SchoolMo organise chaque etape pour reduire les zones floues et les erreurs qui provoquent des refus ou des blocages.",
  },
  partenariats: {
    tag: "Partenariats",
    title: "Une relation serieuse avec les ecoles partenaires.",
    text: "SchoolMo met en relation les etablissements et les etudiants avec une logique de qualite: profils mieux cadres, attentes clarifiees et communication plus nette.",
  },
  histoire: {
    tag: "Notre histoire",
    title: "Une marque construite autour de la franchise.",
    text: "SchoolMo s est construit autour d un constat simple: beaucoup de projets etudiants echouent moins par manque d envie que par manque de cadre, de lucidite et de methode.",
  },
  temoignages: {
    tag: "Témoignages",
    title: "Des parcours reels, pas des promesses creuses.",
    text: "Cette page rassemble des retours d experience, des videos et des citations pour montrer ce que SchoolMo apporte concreteme nt aux projets d etudes vers la France.",
  },
};

export const footerColumns = [
  {
    title: "Navigation",
    links: navItems,
  },
  {
    title: "Les 5 phases",
    links: homeMethodPhases.map((phase, index) => {
      const phaseNum = index + 1;
      const phaseType = [
        "Accueil",
        "École",
        "Campus France",
        "Consulaire",
        "Après visa",
      ][index];
      return {
        label: `Phase ${phaseNum} — ${phaseType}`,
        path: `/accompagnement#phase-${phaseNum}`,
      };
    }),
  },
  {
    title: "Contact",
    links: [
      { label: "Yaoundé, Cameroun", href: locationMapLink },
      { label: "WhatsApp", href: whatsappBaseLink },
      { label: contactEmail, href: `mailto:${contactEmail}` },
    ],
  },
];

export const storyHighlights = [
  {
    title: "Une lecture plus honnete des profils",
    text: "SchoolMo est ne d un besoin simple: arreter les reponses automatiques et regarder la realite des dossiers etudiants africains avec plus de finesse.",
  },
  {
    title: "Un projet de mobilite, pas une usine a dossiers",
    text: "La marque s est construite autour de la coherence du parcours, du choix d ecole, du financement et du discours de visa.",
  },
  {
    title: "Une execution qui reste humaine",
    text: "SchoolMo accompagne avec de la methode, mais aussi avec une logique de franchise et de proximite qui rassure les etudiants et leurs familles.",
  },
];

export const partnerBenefits = [
  {
    icon: Handshake,
    title: "Des profils mieux qualifies",
    text: "Un premier filtre plus serieux avant de projeter les etudiants vers les programmes partenaires.",
  },
  {
    icon: PhoneCall,
    title: "Des ateliers et conferences terrain",
    text: "SchoolMo sait activer des prises de parole en Afrique pour presenter les etablissements et leurs opportunites.",
  },
  {
    icon: ArrowRight,
    title: "Une relation plus lisible",
    text: "Communication, accompagnement et suivi sont penses pour rendre le parcours plus clair pour tout le monde.",
  },
];

export const franceBenefits = [
  {
    icon: ShieldCheck,
    title: "Un systeme social solide et protecteur",
    text: "La France te donne acces a une couverture sociale largement superieure a ce que tu vas trouver ailleurs: sante, logement, transport subventionnes.",
  },
  {
    icon: BadgeCheck,
    title: "Des diplômes reconnus scientifiquement",
    text: "Un diplôme francais reste un signe fort sur le marche du travail africain et international. Ce n est pas rien.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Travailler pendant les etudes",
    text: "Legalement et facilement. Entre 15 et 20h par semaine tu peux financer une partie de ton sejour et acquérir une experience professionnelle reelle.",
  },
  {
    icon: CircleGauge,
    title: "L alternance : etudier et travailler",
    text: "Beaucoup d ecoles francaises proposent l alternance. Tu etudies 3 jours, tu travailles 2 jours. C est du vrai formation professionnelle.",
  },
  {
    icon: Globe2,
    title: "Des opportunites apres les etudes",
    text: "Un VIE (Volontariat International en Entreprise) te permet de rester et de bosser 2 ans apres tes etudes grace a des contrats facilites.",
  },
  {
    icon: Users,
    title: "Une ouverture internationale",
    text: "Les ecoles francaises te mettent en contact avec des etudiants de plus de 100 nationalites. Tu ouvres ton reseau avant meme de chercher un job.",
  },
];

export const visaErrorCategories = [
  {
    icon: AlertCircle,
    title: "Un projet d etudes incoherent",
    description: "Ton projet doit avoir du sens. Si ta formation en France :",
    errors: [
      "ne correspond pas a ton parcours academique",
      "ne correspond pas a tes experiences professionnelles",
      "ressemble a une reconversion non justifiee",
    ],
    highlight: "Ton dossier sera considere comme incoherent",
  },
  {
    icon: AlertCircle,
    title: "Une mauvaise maitrise de ton projet",
    description:
      "Lors de l entretien Campus France, tu dois etre capable d expliquer :",
    errors: [
      "pourquoi cette formation",
      "pourquoi cette ecole",
      "pourquoi la France",
      "quels sont tes objectifs",
    ],
    highlight:
      "Si tu hesites ou si tes reponses ne sont pas convaincantes, l avis sera defavorable",
  },
  {
    icon: AlertCircle,
    title: "Un mauvais choix de formation ou d etablissement",
    description: "Le choix du programme est strategique. Tu dois verifier :",
    errors: [
      "que le titre est reconnu (RNCP actif)",
      "que le niveau du diplome est coherent",
      "que l ecole est habilitee ou partenaire du certificateur",
    ],
    highlight: "Un mauvais choix peut discredibiliser tout ton projet",
  },
  {
    icon: AlertCircle,
    title: "Des annees vides non justifiees",
    description:
      "Les periodes sans activite sont tres sensibles. Si tu as des annees vides :",
    errors: ["sans formation", "sans emploi", "sans justification claire"],
    highlight: "Cela peut etre percu comme un manque de serieux",
  },
  {
    icon: AlertCircle,
    title: "Un projet professionnel flou ou absent",
    description:
      "Ton projet ne doit pas s arreter aux etudes. Tu dois montrer :",
    errors: [
      "ce que tu veux faire apres",
      "comment ta formation t y amene",
      "en quoi ton projet est realiste",
    ],
    highlight: "Sans vision claire, ton dossier perd en credibilite",
  },
  {
    icon: AlertCircle,
    title: "Une motivation mal expliquee",
    description:
      "Dire je veux aller en France ne suffit pas. Tu dois prouver :",
    errors: [
      "que tu comprends ton choix",
      "que tu sais pourquoi la France",
      "que ton projet est reflechi",
    ],
    highlight: "Une motivation faible ou copiee est souvent eliminatoire",
  },
];

export const faqEtudes = [
  {
    question: "A quel age peut-on demander un visa etudes pour la France ?",
    answer:
      "Il n y a pas d age legal minimum. SchoolMo a accompagne des etudiants des 17 ans. Par contre plus tu es jeune, plus ton dossier doit etre solide parce qu on va te poser des questions sur ta maturite.",
  },
  {
    question: "Comment bien se preparer a un entretien Campus France ?",
    answer:
      "Il y a deux choses: connaitre ton dossier par coeur (ton parcours, ton ecole, ton domaine, tes financements) et pouvoir repondre aux questions avec naturel, pas en recitant. SchoolMo te fait des simulations avant.",
  },
  {
    question:
      "S abonner gratuitement a l assurance etudiant en France est-il possible ?",
    answer:
      "Oui. L assurance maladie des etudiants en France est presque gratuite (moins de 100 euros par an). Tu es automatiquement couvert. Par contre tu dois aussi prendre une assurance logement et responsabilite civile, et c est franchement pas couteux.",
  },
  {
    question: "Pour un etudiant en France apres ?",
    answer:
      "Apres un bac+3 ou bac+5 tu peux rester en France via un VIE (Volontariat International en Entreprise) pendant 2 ans, ou chercher un contrat de travail classique. Les ecoles gardent des contacts avec des entreprises qui recrutent des jeunes diplomes.",
  },
  {
    question:
      "Qu est-ce qui se passe si on recoit un refus de visa en France ?",
    answer:
      "Un refus n est pas fatal. Il faut identifier ce qui a bloque (motivation, situation bancaire, etapes manquantes) et repostuler avec un dossier plus solide. SchoolMo aide a relire ton dossier apres un refus pour te remettre sur les rails.",
  },
];

export const etudiesFranceCTA = {
  leftTitle: "Ce qu il faut retenir",
  leftText:
    "Un refus ne vient presque jamais du hasard. Il vient d un projet mal prepare.",
  rightTitle: "Pourquoi se faire accompagner",
  rightText:
    "Chez SchoolMo, on t aide a construire un projet coherent, faire les bons choix, preparer ton entretien et securiser ton dossier.",
  buttonLabel: "Securiser mon dossier",
};

export const revealProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export const founder = {
  photo: founderPhoto,
  name: "Anicet Nemani",
  role: "SchoolMo",
};
