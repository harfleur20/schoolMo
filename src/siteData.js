import {
  AlertCircle,
  BadgeCheck,
  BriefcaseBusiness,
  CircleGauge,
  FileCheck2,
  Globe2,
  GraduationCap,
  MapPinned,
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
import founderPhoto from "../Assets/Anicet_nemani.webp";
import eceLogo from "../Assets/ECE_LOGO_2021_web.png";
import ebsLogo from "../Assets/ebs-paris-european-business-school-logo-vector.png";
import inseecLogo from "../Assets/ecole-inseec-formations.webp";
import edcLogo from "../Assets/EDC_PARIS_BUSINESS_SCHOOL_LOGO_MONOCHROME_BLEU.png";
import isenLogo from "../Assets/ISEN_Méditerranée_Logo.png";
import temoignageVideo1 from "../Assets/temoignage_1.mp4";
import temoignageVideo2 from "../Assets/temoignage_2.mp4";
import heroSlideVisa from "../Assets/schhollMo_image.webp";
import heroSlideSupport from "./assets/hero-slide-support.jpeg";
import heroSlideStudents from "/Assets/women-traveling-together-paris.webp";
import heroSliderDossier from "../Assets/bienvenueenfrance.webp";
import phaseImgSchool from "../Assets/istockphoto-1334063560-612x612.jpg";
import phaseImgCampus from "../Assets/woman-with-mobile-phone-lady-with-documents.webp";

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
    id: "faveur",
    label: "Visa études France",
    title: "Tu souhaites étudier en France ?",
    accent: "Tu es au bon endroit !",
    description:
      "Tu as eu ton bac il y a longtemps ? Des années vides dans ton parcours ? Tu as plus de 35 ans ? C'est justement pour toi que SchoolMo existe.",
    mobileDescription:
      "Bac ancien, années vides ou +35 ans ? On cadre ton projet.",
    image: heroSliderDossier,
    imageAlt: "Eligibilité voyage en France",
    imagePosition: "76% center",
  },
  {
    id: "clarity",
    label: "Visa études France",
    title: "Ton dossier de visa",
    accent: "entre de bonnes mains.",
    description:
      "SchoolMo accompagne les étudiants africains, camerounais en particulier, pour transformer une envie d'étudier en France en dossier crédible, clair et défendable.",
    mobileDescription:
      "Ton projet devient un dossier clair et défendable.",
    image: heroSlideVisa,
    imageAlt: "Transmission de colis et documents",
    imagePosition: "76% center",
  },
  {
    id: "journey",
    label: "Suivi et accompagnement",
    title: "Ton projet France",
    accent: "piloté de bout en bout.",
    description:
      "Orientation, candidatures, Campus France, consulaire, préparation au départ : chaque phase est cadrée pour éviter les improvisations qui coûtent du temps et des refus.",
    mobileDescription:
      "On cadre l'orientation, l'école, Campus France et le visa.",
    image: heroSlideSupport,
    imageAlt: "Femme travaillant sur ordinateur avec documents",
    imagePosition: "72% center",
  },
  {
    id: "confidence",
    label: "Mobilité études",
    title: "La France est accessible,",
    accent: "si le projet est bien construit.",
    description:
      "Le positionnement SchoolMo est simple : dire ce qui est possible, ce qui ne l'est pas, puis monter une trajectoire cohérente pour les profils étudiants, reconversions et parents.",
    mobileDescription:
      "On vérifie le possible, puis on construit une trajectoire cohérente.",
    image: heroSlideStudents,
    imageAlt: "Deux étudiants souriants avec ordinateur",
    imagePosition: "68% center",
  },
];

export const credibilityStats = [
  {
    value: "+2 000",
    countValue: 2000,
    prefix: "+",
    label: "visas étudiants obtenus pour la France",
    icon: GraduationCap,
  },
  {
    value: "+20",
    countValue: 20,
    prefix: "+",
    label: "conférences et ateliers menés en Afrique",
    icon: Sparkles,
  },
  {
    value: "24h",
    label: "pour un premier retour honnête et actionnable",
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
    text: "Tu as obtenu ton bac il y a plusieurs années et tu crois que la porte est fermée.",
    icon: CircleGauge,
  },
  {
    title: "Reprise d'études",
    text: "Tu envisages une reprise d'études ou une reconversion vers la France.",
    icon: GraduationCap,
  },
  {
    title: "Choix d'école",
    text: "Tu ne sais pas quelle école choisir ni comment construire un projet crédible.",
    icon: Globe2,
  },
  {
    title: "Dossier Campus France",
    text: "Tu veux éviter les erreurs Campus France et visa qui coûtent du temps.",
    icon: FileCheck2,
  },
  {
    title: "Projet familial",
    text: "Tu es parent et tu veux sécuriser le départ de ton enfant dans de bonnes conditions.",
    icon: Users,
  },
  {
    title: "Après un refus",
    text: "Tu as déjà eu un refus et tu veux repartir sur une stratégie plus solide.",
    icon: ShieldCheck,
  },
];

export const homeMethodCards = [
  {
    title: "Mo",
    text: "La mobilité — celle qui transforme les trajectoires, pas seulement les adresses.",
  },
  {
    title: "Mo",
    text: "La méga-connexion — entre l'Afrique et le monde, entre qui tu es et qui tu peux devenir.",
  },
  {
    title: "Mo",
    text: "Le moyen de bien faire — la bonne méthode, au bon moment, avec le bon accompagnement.",
  },
];

export const homeMethodPhases = [
  {
    title: "Phase 1 - Accueil & orientation",
    text: "Analyse de ton profil, conseil personnalisé, définition de ton projet d'études en France.",
  },
  {
    title: "Phase 2 - École & candidatures",
    text: "CV, lettres de motivation, dépôt de candidatures, coaching entretiens en visioconférence.",
  },
  {
    title: "Phase 3 - Campus France",
    text: "Création du compte, alimentation du dossier, simulations d'entretien et prise de rendez-vous.",
  },
  {
    title: "Phase 4 - Consulaire",
    text: "Constitution du dossier visa, AVI, garant financier, France-Visas, rendez-vous TLS.",
  },
  {
    title: "Phase 5 - Après le visa",
    text: "Préparation à l'arrivée en France et intégration dans la communauté SchoolMo.",
  },
];

export const valuePillars = [
  {
    icon: ShieldCheck,
    title: "Un filtre utile contre les fausses promesses",
    text: "Avant de vendre un accompagnement, SchoolMo regarde si le projet tient debout. L'objectif est d'éviter les dossiers montés au hasard.",
  },
  {
    icon: CircleGauge,
    title: "Une lecture stratégique du profil",
    text: "Âge, années vides, reconversion, cohérence du parcours, financement : chaque détail compte et peut être travaillé intelligemment.",
  },
  {
    icon: Globe2,
    title: "Une narration pensée pour la mobilité",
    text: "Le projet n'est pas seulement administratif. Il faut raconter une trajectoire lisible entre le Cameroun, l'école choisie et l'objectif en France.",
  },
  {
    icon: BadgeCheck,
    title: "Une exécution structurée",
    text: "SchoolMo cadre le parcours en séquences concrètes : orientation, candidatures, Campus France, visa, préparation à l'arrivée.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Accueil et orientation",
    icon: Sparkles,
    text: "Analyse du profil, lecture des points forts et faibles, choix d'un cap d'études cohérent pour la France.",
    points: [
      "Diagnostic gratuit",
      "Positionnement du profil",
      "Premier plan de route",
    ],
  },
  {
    number: "02",
    title: "Écoles et candidatures",
    icon: GraduationCap,
    text: "Sélection des établissements, dossier de candidature, CV, lettre de motivation et coaching si entretien.",
    points: ["Cibles adaptées", "Pièces académiques", "Coaching candidature"],
  },
  {
    number: "03",
    title: "Dossier Campus France",
    icon: FileCheck2,
    text: "Création et alimentation du dossier, cohérence du discours, simulations d'entretien et validation des pièces.",
    points: [
      "Compte et pièces",
      "Narration du projet",
      "Préparation entretien",
    ],
  },
  {
    number: "04",
    title: "Phase consulaire",
    icon: ShieldCheck,
    text: "Montage du dossier visa, preuves financières, check final, rendez-vous et réduction des erreurs critiques.",
    points: ["France-Visas", "Garant et financement", "Checklist consulaire"],
  },
  {
    number: "05",
    title: "Après le visa",
    icon: MapPinned,
    text: "Préparation à l'arrivée en France, conseils d'installation et intégration dans l'écosystème SchoolMo.",
    points: ["Préparation départ", "Repères pratiques", "Suite du parcours"],
  },
];

export const audienceCards = [
  {
    icon: GraduationCap,
    title: "Bacheliers et étudiants",
    text: "Bac, BTS, licence ou master : une lecture claire du profil et un cap de poursuite d'études en France.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Reconversion et reprise d'études",
    text: "Pour les profils plus âgés, SchoolMo travaille la cohérence et casse l'idée qu'il est trop tard pour tenter la France.",
  },
  {
    icon: Users,
    title: "Parents et familles",
    text: "Un accompagnement pour sécuriser le projet, clarifier les étapes et limiter les mauvaises décisions avant le départ.",
  },
];

export const testimonialCards = [
  {
    id: "video-1",
    type: "video",
    name: "Retour d'expérience",
    subtitle: "Témoignage vidéo SchoolMo",
    video: temoignageVideo1,
  },
  {
    id: "quote-1",
    type: "quote",
    name: "Armand Kouakam",
    subtitle: "Yaoundé vers Lyon | Master Finance",
    quote:
      "J'avais déjà tenté seul. Avec SchoolMo, le dossier a été recadré de zéro et le visa est enfin passé.",
  },
  {
    id: "video-2",
    type: "video",
    name: "Parcours accompagné",
    subtitle: "Mobilité études en France",
    video: temoignageVideo2,
  },
  {
    id: "quote-2",
    type: "quote",
    name: "Paul Ngono",
    subtitle: "Douala vers Bordeaux | Reconversion",
    quote:
      "À plus de 40 ans, je pensais la porte fermée. SchoolMo a surtout apporté une lecture sérieuse et honnête de mon projet.",
  },
  {
    id: "quote-3",
    type: "quote",
    name: "Stéphanie Mboua",
    subtitle: "Douala vers Paris | Licence Pro",
    quote:
      "On m'a dit clairement ce qui n'allait pas, puis on a corrigé point par point. Le site doit respirer cette franchise.",
  },
];

export const partnershipLogos = [
  { src: eceLogo, alt: "Logo ECE", label: "ECE", city: "Paris" },
  { src: edcLogo, alt: "Logo EDC Paris Business School", label: "EDC Paris", city: "Paris" },
  { src: ebsLogo, alt: "Logo European Business School", label: "EBS Paris", city: "Paris" },
  { src: inseecLogo, alt: "Logo INSEEC", label: "INSEEC", city: "Paris, Bordeaux, Lyon" },
  { src: isenLogo, alt: "Logo ISEN", label: "ISEN", city: "Paris, Lille, Brest" },
];

export const partnerSchools = [
  {
    acronym: "INSEEC",
    fullName: "INSEEC Business School",
    city: "Paris, Bordeaux, Lyon",
  },
  {
    acronym: "EDC",
    fullName: "EDC Paris Business School",
    city: "Paris",
  },
  {
    acronym: "ECE",
    fullName: "ECE Paris — École d'Ingénieurs",
    city: "Paris",
  },
  {
    acronym: "ISEN",
    fullName: "ISEN Yncréa — École d'Ingénieurs",
    city: "Paris, Lille, Brest",
  },
  {
    acronym: "MBA EGS",
    fullName: "MBA European Business School",
    city: "Paris",
  },
];

export const faqItems = [
  {
    question:
      "J'ai plus de 30 ans, est-ce encore jouable pour un visa études ?",
    answer:
      "Oui, mais pas avec un dossier standard. Il faut une logique de reconversion, une école adaptée et un projet qui se défend sérieusement. C'est là que SchoolMo apporte de la valeur.",
  },
  {
    question:
      "Je suis au Cameroun, est-ce que l'accompagnement est pensé pour moi ?",
    answer:
      "Oui. Le message du site cible en priorité les étudiants africains et camerounais, avec une lecture concrète des enjeux Campus France, consulaire et financiers.",
  },
  {
    question: "SchoolMo garantit-il un visa ?",
    answer:
      "Non. SchoolMo ne promet pas un résultat automatique. Il promet une lecture honnête du profil, une méthode et une exécution plus solide.",
  },
  {
    question: "Puis-je être accompagné si j'ai déjà essuyé un refus ?",
    answer:
      "Oui. Un refus ne ferme pas toujours la porte. Il faut identifier ce qui a bloqué, revoir la stratégie, les pièces et parfois le positionnement complet du projet.",
  },
];

export const contactSteps = [
  "Tu laisses ton profil et ton contexte en 2 minutes.",
  "SchoolMo analyse la cohérence du projet, du parcours et du niveau de risque.",
  "Tu reçois un retour clair et la meilleure suite possible pour avancer.",
];

export const pageIntros = {
  etudes: {
    tag: "Étude en France",
    title: "La France est accessible.",
    accent: "SchoolMo te montre le chemin.",
    text: "Des milliers d'étudiants africains réussissent chaque année. La France existe pour ceux qui ont fait leurs devoirs et qui cherchent un environnement pour vraiment construire.",
  },
  accompagnement: {
    tag: "Notre accompagnement",
    title: "5 phases. Un seul objectif :",
    accent: "Ton visa étudiant pour la France.",
    text: "SchoolMo t'accompagne à travers un processus structuré, clair et personnalisé — de l'analyse de ton profil jusqu'à ton intégration en France.",
  },
  partenariats: {
    tag: "Partenariats",
    title: "SchoolMo, un réseau qui grandit",
    accent: "— pour toi.",
    text: "SchoolMo collabore avec des établissements africains pour détecter, orienter et accompagner les meilleurs profils étudiants vers la France.",
    dark: true,
  },
  histoire: {
    tag: "Notre histoire",
    title: "SchoolMo n'est pas né dans un bureau.",
    accent: "Il est né d'une vie.",
    text: "Derrière SchoolMo, il y a un parcours inattendu. Une conviction profonde que les trajectoires les plus belles ne sont pas toujours les plus droites.",
  },
  temoignages: {
    tag: "Témoignages",
    title: "Des parcours réels, pas des promesses creuses.",
    text: "Cette page rassemble des retours d'expérience, des vidéos et des citations pour montrer ce que SchoolMo apporte concrètement aux projets d'études vers la France.",
  },
};

export const accompanimentPhaseDetails = [
  {
    id: 1,
    title: "Phase Accueil",
    shortTitle: "Analyse du profil",
    image: heroSlideSupport,
    fullDescription:
      "Tout commence par une analyse détaillée de ton profil. Après de nombreux cas traités par SchoolMo, tu peux repartir confiant — ou savoir exactement ce qu'il faut changer.",
    details: [
      "Analyse de ta situation académique, tes expériences professionnelles",
      "Identification des forces et des risques de ton profil",
      "Définition des objectifs réalistes et stratégiques",
      "Conseil sur l'école, le diplôme et le projet post-études",
    ],
    highlight: "Le bon départ, c'est la bonne analyse",
    highlightText:
      "Si tu es perdu ou si tu ne sais pas par où commencer, c'est normal. SchoolMo existe pour ça : transformer une envie en projet défendable.",
  },
  {
    id: 2,
    title: "Phase École",
    shortTitle: "Conseil et orientation personnalisée",
    image: phaseImgSchool,
    fullDescription:
      "Une fois le projet défini, SchoolMo vous aide à identifier les formations les plus cohérentes avec votre profil et à préparer des candidatures solides. Lettre de motivation, CV, coaching entretiens — rien n'est laissé au hasard.",
    details: [
      "Recherche de programmes",
      "Rédaction du CV",
      "Rédaction des lettres de motivation",
      "Dépôt de candidatures",
      "Coaching entretiens en visioconférence",
      "Accompagnement paiement de l'acompte",
    ],
    detailsContent: [
      "Recherche de programmes cohérents avec votre profil et adaptés aux exigences de Campus France.",
      "SchoolMo rédige avec vous un CV professionnel, adapté aux standards français et aux établissements ciblés.",
      "Des lettres personnalisées, cohérentes avec votre profil — pas des modèles génériques.",
      "Accompagnement dans le dépôt de candidatures auprès des établissements sélectionnés.",
      "Préparation aux entretiens avec les établissements via des séances de coaching en visioconférence.",
      "SchoolMo t'accompagne dans le processus de paiement de l'acompte à l'école une fois l'admission obtenue.",
    ],
    highlight: "Un dossier qui convainc dès le premier regard",
    highlightText: " ",
    continuousSupport: {
      title: "Durant toute la procédure — Sans interruption",
      items: [
        "Conseils et suivi personnalisés sur la documentation nécessaire tout au long du processus.",
        "Assistance pour la traduction des documents pour les cursus anglophones.",
        "Accompagnement pour les équivalences Enic-Naric si nécessaire.",
        "Vérification et suivi des informations du passeport et de leur conformité.",
      ],
    },
  },
  {
    id: 3,
    title: "Phase Campus France",
    shortTitle: "Préparation pour la procédure",
    image: phaseImgCampus,
    fullDescription:
      "Campus France est souvent l'étape la plus redoutée — et la plus mal préparée. SchoolMo vous accompagne de la création de votre compte jusqu'à l'entretien, avec des simulations réelles en visioconférence.",
    details: [
      "Documentation questions Campus France",
      "Création et alimentation du compte",
      "Simulations d'entretien en visioconférence",
      "Prise de rendez-vous Campus France",
    ],
    detailsContent: [
      "Rédaction d'une documentation complète sur les questions potentielles de Campus France.",
      "SchoolMo t'accompagne dans la création et l'alimentation complète de ton compte Campus France.",
      "Préparation aux entretiens Campus France à travers des simulations réelles — 3 à 5 séances selon le niveau du candidat.",
      "SchoolMo t'accompagne dans la prise de rendez-vous Campus France aux meilleurs créneaux disponibles.",
    ],
    highlight: "3 à 5 simulations d'entretien selon votre niveau",
    highlightText: " ",
    continuousSupport: {
      title: "Durant toute la procédure — Sans interruption",
      items: [
        "Conseils et suivi personnalisés sur la documentation nécessaire tout au long du processus.",
        "Assistance pour la traduction des documents pour les cursus anglophones.",
        "Accompagnement pour les équivalences Enic-Naric si nécessaire.",
        "Vérification et suivi des informations du passeport et de leur conformité.",
      ],
    },
  },
  {
    id: 4,
    title: "Phase Consulaire",
    shortTitle: "Constitution du dossier visa",
    image: heroSlideVisa,
    fullDescription:
      "La phase consulaire est le cœur de l'accompagnement SchoolMo. Constitution du dossier, garant financier, AVI, France Visa, prise de rendez-vous TLS — chaque détail est géré avec rigueur.",
    details: [
      "Constitution du dossier de visa",
      "Documentation pièces à fournir",
      "Recherche du garant financier",
      "Mise en place de l'AVI",
      "Création du compte France Visa",
      "Remplissage du formulaire de demande",
      "Prise de rendez-vous TLS",
    ],
    detailsContent: [
      "SchoolMo constitue avec toi le dossier complet de demande de visa étudiant.",
      "Envoi d'une documentation détaillée listant toutes les pièces à fournir pour la demande de visa.",
      "SchoolMo t'accompagne dans la recherche et la mise en place de ton garant financier.",
      "Aide dans la mise en place de l'Attestation de Virement Irrévocable (AVI) — une exigence consulaire incontournable.",
      "SchoolMo crée et configure ton compte sur la plateforme officielle France Visa.",
      "Remplissage rigoureux du formulaire officiel de demande de visa — chaque case compte.",
      "SchoolMo prend ton rendez-vous auprès de TLS Contact pour le dépôt de ton dossier de visa.",
    ],
    highlight: "Zéro détail laissé au hasard",
    highlightText: " ",
    continuousSupport: {
      title: "Durant toute la procédure — Sans interruption",
      items: [
        "Conseils et suivi personnalisés sur la documentation nécessaire tout au long du processus.",
        "Assistance pour la traduction des documents pour les cursus anglophones.",
        "Accompagnement pour les équivalences Enic-Naric si nécessaire.",
        "Vérification et suivi des informations du passeport et de leur conformité.",
      ],
    },
  },
  {
    id: 5,
    title: "Après obtention du visa",
    shortTitle: "Intégration en France",
    image: heroSlideStudents,
    fullDescription:
      "Obtenir le visa, c'est une victoire. Mais le voyage ne s'arrête pas là. SchoolMo te prépare à bien vivre ton arrivée en France et t'intègre dans une communauté qui te soutient avant, pendant et après.",
    details: [
      "Guide d'intégration en France",
      "Intégration dans la communauté SchoolMo",
    ],
    detailsContent: [
      "Rédaction d'une documentation complète sur les points clés pour réussir son intégration en France — logement, banque, CVEC, sécurité sociale, vie étudiante.",
      "Tu rejoins le groupe WhatsApp SchoolMo regroupant tous les étudiants accompagnés — une communauté de +100 membres actifs.",
    ],
    highlight: "Tu ne pars jamais seul(e)",
    highlightText: "",
    continuousSupport: {
      title: "Durant toute la procédure — Sans interruption",
      items: [
        "Conseils et suivi personnalisés sur la documentation nécessaire tout au long du processus.",
        "Assistance pour la traduction des documents pour les cursus anglophones.",
        "Accompagnement pour les équivalences Enic-Naric si nécessaire.",
        "Vérification et suivi des informations du passeport et de leur conformité.",
      ],
    },
  },
];

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
    title: "Une lecture plus honnête des profils",
    text: "SchoolMo est né d'un besoin simple : arrêter les réponses automatiques et regarder la réalité des dossiers étudiants africains avec plus de finesse.",
  },
  {
    title: "Un projet de mobilité, pas une usine à dossiers",
    text: "La marque s'est construite autour de la cohérence du parcours, du choix d'école, du financement et du discours de visa.",
  },
  {
    title: "Une exécution qui reste humaine",
    text: "SchoolMo accompagne avec de la méthode, mais aussi avec une logique de franchise et de proximité qui rassure les étudiants et leurs familles.",
  },
];

export const partnerBenefits = [
  {
    icon: GraduationCap,
    title: "Pilier 1 — Les domaines & leurs débouchés",
    text: "On présente à tes étudiants les filières disponibles en France, leurs réalités, leurs niveaux d'exigence et les métiers auxquels elles mènent concrètement — pour qu'ils choisissent en connaissance de cause.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Pilier 2 — Les réalités du monde pro",
    text: "On leur parle franchement du marché du travail en France et en Afrique : ce que les employeurs attendent, les compétences qui manquent, et comment le diplôme français peut changer la donne dans leur carrière.",
  },
  {
    icon: Sparkles,
    title: "Pilier 3 — La reconversion, c'est possible",
    text: "Pour les profils atypiques ou ceux qui changent de voie, on sensibilise sur les opportunités de reconversion sur les études en France — et on montre que ce n'est pas trop tard pour construire un projet solide.",
  },
];

export const partnershipStats = [
  {
    value: "+20",
    countValue: 20,
    prefix: "+",
    label: "Conférences organisées dans des établissements africains",
  },
  {
    value: "5",
    countValue: 5,
    label: "Écoles françaises partenaires prêtes à accueillir les étudiants",
  },
  {
    value: "+2 000",
    countValue: 2000,
    prefix: "+",
    label: "Vrais étudiants détectés grâce au réseau SchoolMo",
  },
];

export const partnershipBullets = [
  "Tes étudiants sont accompagnés de A à Z pour l'obtention de leur visa et leur inscription en formation.",
  "Ils se dirigent vers les écoles françaises partenaires SchoolMo — des établissements qui connaissent et valorisent les candidats.",
  "SchoolMo organise des conférences de sensibilisation dans ton établissement pour informer les étudiants.",
  "Ton établissement est mis en avant sur le réseau SchoolMo comme partenaire de réputation internationale.",
];

export const franceBenefits = [
  {
    icon: ShieldCheck,
    title: "Un système social solide et protecteur",
    text: "La France te donne accès à une couverture sociale largement supérieure à ce que tu vas trouver ailleurs : santé, logement, transport subventionnés.",
  },
  {
    icon: BadgeCheck,
    title: "Des diplômes reconnus internationalement",
    text: "Un diplôme français reste un signe fort sur le marché du travail africain et international. Ce n'est pas rien.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Travailler pendant les études",
    text: "Légalement et facilement. Entre 15 et 20h par semaine tu peux financer une partie de ton séjour et acquérir une expérience professionnelle réelle.",
  },
  {
    icon: CircleGauge,
    title: "L'alternance : étudier et travailler",
    text: "Beaucoup d'écoles françaises proposent l'alternance. Tu études 3 jours, tu travailles 2 jours. C'est de la vraie formation professionnelle.",
  },
  {
    icon: Globe2,
    title: "Des opportunités après les études",
    text: "Un VIE (Volontariat International en Entreprise) te permet de rester et de bosser 2 ans après tes études grâce à des contrats facilités.",
  },
  {
    icon: Users,
    title: "Une ouverture internationale",
    text: "Les écoles françaises te mettent en contact avec des étudiants de plus de 100 nationalités. Tu ouvres ton réseau avant même de chercher un job.",
  },
];

export const visaErrorCategories = [
  {
    icon: AlertCircle,
    title: "Un projet d'études incohérent",
    description: "Ton projet doit avoir du sens. Si ta formation en France :",
    errors: [
      "ne correspond pas à ton parcours académique",
      "ne correspond pas à tes expériences professionnelles",
      "ressemble à une reconversion non justifiée",
    ],
    highlight: "Ton dossier sera considéré comme incohérent",
  },
  {
    icon: AlertCircle,
    title: "Une mauvaise maîtrise de ton projet",
    description:
      "Lors de l'entretien Campus France, tu dois être capable d'expliquer :",
    errors: [
      "pourquoi cette formation",
      "pourquoi cette école",
      "pourquoi la France",
      "quels sont tes objectifs",
    ],
    highlight:
      "Si tu hésites ou si tes réponses ne sont pas convaincantes, l'avis sera défavorable",
  },
  {
    icon: AlertCircle,
    title: "Un mauvais choix de formation ou d'établissement",
    description: "Le choix du programme est stratégique. Tu dois vérifier :",
    errors: [
      "que le titre est reconnu (RNCP actif)",
      "que le niveau du diplôme est cohérent",
      "que l'école est habilitée ou partenaire du certificateur",
    ],
    highlight: "Un mauvais choix peut décrédibiliser tout ton projet",
  },
  {
    icon: AlertCircle,
    title: "Des années vides non justifiées",
    description:
      "Les périodes sans activité sont très sensibles. Si tu as des années vides :",
    errors: ["sans formation", "sans emploi", "sans justification claire"],
    highlight: "Cela peut être perçu comme un manque de sérieux",
  },
  {
    icon: AlertCircle,
    title: "Un projet professionnel flou ou absent",
    description:
      "Ton projet ne doit pas s'arrêter aux études. Tu dois montrer :",
    errors: [
      "ce que tu veux faire après",
      "comment ta formation t'y amène",
      "en quoi ton projet est réaliste",
    ],
    highlight: "Sans vision claire, ton dossier perd en crédibilité",
  },
  {
    icon: AlertCircle,
    title: "Une motivation mal expliquée",
    description:
      "Dire « je veux aller en France » ne suffit pas. Tu dois prouver :",
    errors: [
      "que tu comprends ton choix",
      "que tu sais pourquoi la France",
      "que ton projet est réfléchi",
    ],
    highlight: "Une motivation faible ou copiée est souvent éliminatoire",
  },
];

export const faqEtudes = [
  {
    question: "À quel âge peut-on demander un visa études pour la France ?",
    answer:
      "Il n'y a pas d'âge légal minimum. SchoolMo a accompagné des étudiants dès 17 ans. Par contre plus tu es jeune, plus ton dossier doit être solide parce qu'on va te poser des questions sur ta maturité.",
  },
  {
    question: "Comment bien se préparer à un entretien Campus France ?",
    answer:
      "Il y a deux choses : connaître ton dossier par cœur (ton parcours, ton école, ton domaine, tes financements) et pouvoir répondre aux questions avec naturel, pas en récitant. SchoolMo te fait des simulations avant.",
  },
  {
    question:
      "S'abonner gratuitement à l'assurance étudiant en France est-il possible ?",
    answer:
      "Oui. L'assurance maladie des étudiants en France est presque gratuite (moins de 100 euros par an). Tu es automatiquement couvert. Par contre tu dois aussi prendre une assurance logement et responsabilité civile, et c'est franchement pas coûteux.",
  },
  {
    question: "Quelles options pour un étudiant en France après les études ?",
    answer:
      "Après un bac+3 ou bac+5 tu peux rester en France via un VIE (Volontariat International en Entreprise) pendant 2 ans, ou chercher un contrat de travail classique. Les écoles gardent des contacts avec des entreprises qui recrutent des jeunes diplômés.",
  },
  {
    question:
      "Qu'est-ce qui se passe si on reçoit un refus de visa en France ?",
    answer:
      "Un refus n'est pas fatal. Il faut identifier ce qui a bloqué (motivation, situation bancaire, étapes manquantes) et repostuler avec un dossier plus solide. SchoolMo aide à relire ton dossier après un refus pour te remettre sur les rails.",
  },
];

export const etudiesFranceCTA = {
  leftTitle: "Ce qu'il faut retenir",
  leftText:
    "Un refus ne vient presque jamais du hasard. Il vient d'un projet mal préparé.",
  rightTitle: "Pourquoi se faire accompagner",
  rightText:
    "Chez SchoolMo, on t'aide à construire un projet cohérent, faire les bons choix, préparer ton entretien et sécuriser ton dossier.",
  buttonLabel: "Sécuriser mon dossier",
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

export const founderStory = [
  {
    title: "Le bac. Puis rien.",
    text: "Après son bac obtenu, Anicet ne suit pas le chemin attendu. Comme beaucoup de jeunes Africains livrés à eux-mêmes, il traverse une période difficile — la délinquance, l'errance, les mauvais choix.",
  },
  {
    title: "L'Afrique du Sud. Les mains dans les machines.",
    text: "Il se retrouve en Afrique du Sud pour survivre. Il répare des téléphones, des ordinateurs. C'est là qu'il comprend — quand on sait comment les choses fonctionnent, on peut tout reconstruire.",
  },
  {
    title: "La France. Et BIMSTR.",
    text: "Anicet arrive en France et fonde BIMSTR en 2014 — le premier média musical camerounais sur le web. Grâce à son approche REVOLT (Devenir the Target), BIMSTR atteint plus de 450 000 abonnés et devient une référence nationale.",
  },
  {
    title: "Du terrain aux amphithéâtres.",
    text: "Ses travaux sur le marketing tribal sont publiés sur des plateformes académiques internationales — dont Harvard Business Review. Ce même accomplissement lui permet d'intervenir dans des écoles de commerce françaises.",
  },
  {
    title: "Aujourd'hui. Consultant SAP. Fondateur. Convaincu.",
    text: "Anicet travaille comme consultant SAP et freelance en informatique. Il a créé SchoolMo pour que d'autres étudiants ne ratent pas leur départ — avec la méthode qu'il n'a jamais eue.",
  },
];

export const founderAchievements = [
  "Fondateur de BIMSTR — 1er média musical camerounais",
  "+450 000 abonnés Facebook en 4 ans",
  "Publié dans Harvard Business Review",
  "Conférencier en écoles de commerce françaises",
  "Consultant SAP & expert digital",
];

export const histoireValeurs = [
  {
    title: "L'honnêteté avant tout",
    text: "SchoolMo ne promet jamais ce qu'il n'est pas sûr de tenir. On te dit la vérité sur ton dossier, tes chances réelles et les délais.",
  },
  {
    title: "La méthode plutôt que la chance",
    text: "Un visa obtenu, c'est rarement une question de chance. C'est une question de préparation et de cohérence. SchoolMo apporte la méthode.",
  },
  {
    title: "L'ancrage africain, l'ouverture mondiale",
    text: "SchoolMo comprend la réalité africaine parce qu'on en est là. On part avec l'Afrique, pour l'Afrique.",
  },
  {
    title: "L'humain au centre",
    text: "Chaque personne accompagnée par SchoolMo est une histoire unique. Pas un dossier. Pas un numéro. On prend le temps.",
  },
];

export const histoireTeam = [
  {
    initials: "AN",
    name: "Anicet Nemani",
    role: "Fondateur & Stratège",
    bio: "Fondateur de BIMSTR, consultant SAP publié dans Harvard Business Review. Conférencier en écoles de commerce françaises.",
    location: "France",
    color: "#0B1C3D",
  },
  {
    initials: "SM",
    name: "Sandrine Mballa",
    role: "Orientation & Accompagnement",
    bio: "Ancienne conseillère académique pendant 6 ans. Spécialisée en aide à la décision académique.",
    location: "Douala, Cameroun",
    color: "#1A3A5C",
  },
  {
    initials: "RE",
    name: "Rodrigue Esaema",
    role: "Processus Visa & Démarches",
    bio: "A lui-même vécu un refus de visa avant de tout recommencer avec méthode. Il connaît les pièges — et sait comment les éviter.",
    location: "Kribi, France",
    color: "#0D2B4E",
  },
  {
    initials: "IT",
    name: "Inés Tchoumba",
    role: "Communication & Réseaux",
    bio: "Arrivée en France à 21 ans pour ses études, elle aide à dire comment ça se passe vraiment.",
    location: "Paris, France",
    color: "#162D4A",
  },
];

export const histoireStats = [
  { value: "+2 000", countValue: 2000, prefix: "+", label: "Visas étudiants obtenus pour la France" },
  { value: "+20", countValue: 20, prefix: "+", label: "Conférences et ateliers réalisés" },
];
