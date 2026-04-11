import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Headphones, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { WhatsAppIcon } from "./BrandIcons";
import { whatsappBaseLink } from "../siteData";

const MotionBackdrop = motion.button;
const MotionPanel = motion.div;

function waLink(message) {
  return `${whatsappBaseLink}?text=${encodeURIComponent(message)}`;
}

// option types:
//   next: "nodeKey"          → navigate to node
//   next: "cta_diagnostic"  → show diagnostic CTA button
//   next: "cta_whatsapp"    → show WhatsApp button (requires waMsg)
//   waMsg: string           → pre-filled WhatsApp message

const FLOW = {
  start: {
    bot: "Bonjour ! Je suis Francis, l'assistant SchoolMo 👋\nComment puis-je t'aider ?",
    options: [
      { label: "Suis-je éligible ?", next: "eligibility" },
      { label: "Comment ça marche ?", next: "howItWorks" },
      { label: "Combien ça coûte ?", next: "pricing" },
      { label: "Délais & visa", next: "delays" },
      { label: "Débuter mon dossier", next: "startFile" },
      { label: "Parler à un conseiller", next: "contact" },
    ],
  },

  eligibility: {
    bot: "SchoolMo accompagne les étudiants africains avec un projet sérieux d'études en France. Bac, BTS, Licence, Master ou reconversion — tous les profils sont étudiés au cas par cas.",
    options: [
      { label: "Quels pays sont acceptés ?", next: "countries" },
      { label: "J'ai un profil atypique", next: "atypical" },
      { label: "Vérifier mon éligibilité sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je souhaite vérifier mon éligibilité pour étudier en France. Pouvez-vous m'aider ?" },
      { label: "Faire mon diagnostic gratuit", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  countries: {
    bot: "Nous accompagnons principalement des étudiants du Cameroun, Sénégal, Côte d'Ivoire, Mali, Guinée et d'autres pays d'Afrique subsaharienne. Tu n'es pas dans cette liste ? Contacte-nous quand même.",
    options: [
      { label: "Me renseigner sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je viens d'un pays non listé et je voudrais savoir si je suis éligible à votre accompagnement." },
      { label: "Démarrer mon diagnostic", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  atypical: {
    bot: "Trou dans le parcours, reconversion, âge avancé — ça ne ferme pas automatiquement la porte. Ce qui compte c'est la cohérence du projet et la façon dont il est présenté.",
    options: [
      { label: "Discuter de mon profil sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! J'ai un profil atypique (reconversion / trou de parcours) et je voudrais savoir si vous pouvez m'accompagner." },
      { label: "Faire mon diagnostic gratuit", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  howItWorks: {
    bot: "L'accompagnement SchoolMo se déroule en 5 phases : diagnostic de profil, choix de l'établissement, constitution du dossier, préparation au visa, puis suivi post-arrivée en France.",
    options: [
      { label: "La phase diagnostic", next: "diagnostic" },
      { label: "La phase visa", next: "visa" },
      { label: "En savoir plus sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je voudrais en savoir plus sur votre accompagnement et ses différentes phases." },
      { label: "Voir l'accompagnement complet", next: "fullAccompagnement" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  diagnostic: {
    bot: "Le diagnostic est la 1ère étape — et il est gratuit. On analyse ton profil, ton projet et tes contraintes pour définir la meilleure stratégie avant de commencer.",
    options: [
      { label: "Suivre un diagnostic sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je souhaite démarrer mon diagnostic gratuit pour mon projet d'études en France." },
      { label: "Faire mon diagnostic en ligne", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  visa: {
    bot: "La phase visa, c'est la plus délicate. SchoolMo t'accompagne dans la préparation du dossier Campus France, l'entretien consulaire et toutes les démarches administratives.",
    options: [
      { label: "Combien de temps ça prend ?", next: "delays" },
      { label: "Préparer mon visa sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je souhaite être accompagné(e) dans la préparation de mon visa étudiant pour la France." },
      { label: "Faire mon diagnostic gratuit", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  fullAccompagnement: {
    bot: "Tu peux consulter le détail complet de notre accompagnement sur la page dédiée.",
    options: [
      { label: "Voir la page accompagnement", next: "cta_accompagnement" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  pricing: {
    bot: "Les tarifs varient selon le niveau d'accompagnement. La meilleure façon de savoir ce qui te correspond, c'est de commencer par le diagnostic gratuit ou de nous contacter directement.",
    options: [
      { label: "Connaître les tarifs sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je voudrais connaître les tarifs de votre accompagnement pour étudier en France." },
      { label: "Diagnostic gratuit", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  delays: {
    bot: "Les délais dépendent de ta situation et de la période de candidature. En général, il faut compter 3 à 6 mois entre le début de l'accompagnement et l'obtention du visa.",
    options: [
      { label: "Me renseigner sur les délais sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je voudrais en savoir plus sur les délais pour obtenir mon visa étudiant avec votre accompagnement." },
      { label: "Comment ça marche ?", next: "howItWorks" },
      { label: "Démarrer maintenant", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  startFile: {
    bot: "Pour débuter ton dossier, on commence toujours par un diagnostic gratuit. Ça nous permet de cerner ton profil et de t'orienter vers la bonne stratégie dès le départ.",
    options: [
      { label: "Débuter mon dossier sur WhatsApp", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je souhaite débuter mon dossier pour étudier en France. Par où commencer ?" },
      { label: "Faire mon diagnostic en ligne", next: "cta_diagnostic" },
      { label: "← Menu principal", next: "start" },
    ],
  },

  contact: {
    bot: "Tu peux joindre un conseiller SchoolMo directement sur WhatsApp. Nous répondons généralement en moins de 24h.",
    options: [
      { label: "Contacter un conseiller", next: "cta_whatsapp", waMsg: "Bonjour SchoolMo ! Je souhaite parler à un conseiller pour mon projet d'études en France." },
      { label: "← Menu principal", next: "start" },
    ],
  },
};

const BOT_DELAY = 600;

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const triggerNode = useCallback((nodeKey, userLabel) => {
    const node = FLOW[nodeKey];
    if (!node) return;

    setOptions([]);
    if (userLabel) {
      setMessages((prev) => [...prev, { from: "user", text: userLabel }]);
    }
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: node.bot }]);
      setOptions(node.options);
    }, BOT_DELAY);
  }, []);

  useEffect(() => {
    if (!open || typeof window === "undefined") {
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 560px)").matches;
    if (!isMobile) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  function handleToggle() {
    if (!open && !hasInitialized.current) {
      hasInitialized.current = true;
      triggerNode("start", null);
    }

    setOpen((current) => !current);
  }

  function handleOption(option) {
    if (option.next === "cta_diagnostic") {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: option.label },
        {
          from: "bot",
          text: "Super ! Clique sur le bouton ci-dessous pour démarrer ton diagnostic gratuit.",
          cta: { label: "Démarrer mon diagnostic", to: "/accompagnement#diagnostic" },
        },
      ]);
      setOptions([{ label: "← Menu principal", next: "start" }]);
      return;
    }

    if (option.next === "cta_accompagnement") {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: option.label },
        {
          from: "bot",
          text: "Voici la page dédiée à notre accompagnement.",
          cta: { label: "Voir l'accompagnement", to: "/accompagnement" },
        },
      ]);
      setOptions([{ label: "← Menu principal", next: "start" }]);
      return;
    }

    if (option.next === "cta_whatsapp") {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: option.label },
        {
          from: "bot",
          text: "Un conseiller va te répondre rapidement. Clique ci-dessous pour le contacter sur WhatsApp.",
          ctaWhatsapp: { label: "Contacter un conseiller", href: waLink(option.waMsg) },
        },
      ]);
      setOptions([{ label: "← Menu principal", next: "start" }]);
      return;
    }

    triggerNode(option.next, option.label);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <MotionBackdrop
            className="chatbot-backdrop"
            type="button"
            aria-label="Fermer l'assistant"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      <button
        className={`chatbot-bubble ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Fermer Francis" : "Ouvrir Francis, l'assistant SchoolMo"}
        onClick={handleToggle}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <MotionPanel
            className="chatbot-panel"
            role="dialog"
            aria-label="Assistant SchoolMo"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-brand">
                <div className="chatbot-avatar" aria-hidden="true">
                  <Headphones size={20} />
                </div>
                <div>
                  <strong>Assistant SchoolMo</strong>
                  <span>Répond en quelques secondes</span>
                </div>
              </div>
              <button
                className="chatbot-close"
                type="button"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-msg chatbot-msg--${msg.from}`}>
                  <p>{msg.text}</p>
                  {msg.cta && (
                    <NavLink
                      className="chatbot-cta-btn"
                      to={msg.cta.to}
                      onClick={() => setOpen(false)}
                    >
                      {msg.cta.label}
                      <ArrowRight size={14} />
                    </NavLink>
                  )}
                  {msg.ctaWhatsapp && (
                    <a
                      className="chatbot-cta-btn chatbot-cta-btn--wa"
                      href={msg.ctaWhatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon width={16} height={16} />
                      {msg.ctaWhatsapp.label}
                    </a>
                  )}
                </div>
              ))}

              {typing && (
                <div className="chatbot-msg chatbot-msg--bot chatbot-typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {options.length > 0 && (
              <div className="chatbot-options">
                {options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    className={`chatbot-option-btn${opt.next === "cta_whatsapp" ? " chatbot-option-btn--wa" : ""}`}
                    onClick={() => handleOption(opt)}
                  >
                    {opt.next === "cta_whatsapp" && (
                      <WhatsAppIcon width={13} height={13} />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </MotionPanel>
        )}
      </AnimatePresence>
    </>
  );
}
