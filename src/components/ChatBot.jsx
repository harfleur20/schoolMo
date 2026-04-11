import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, Headphones, MessageCircle, Plus, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { WhatsAppIcon } from "./BrandIcons";
import { whatsappBaseLink } from "../siteData";

const MotionBackdrop = motion.button;
const MotionPanel = motion.div;

const BOT_DELAY = 520;
const MAX_VISIBLE_OPTIONS = 3;
const WHATSAPP_CTA_LABEL = "Envoyer sur WhatsApp";
const EMPTY_QUALIFICATION = {
  country: "",
  studyLevel: "",
  profile: "",
  goal: "",
};

const PAGE_ROOTS = {
  "/": "root_home",
  "/etudier-en-france": "root_study",
  "/accompagnement": "root_support",
  "/temoignages": "root_testimonials",
};

const PAGE_LABELS = {
  "/": "Accueil",
  "/etudier-en-france": "Étudier en France",
  "/accompagnement": "Accompagnement",
  "/partenariats": "Partenariats",
  "/notre-histoire": "Notre histoire",
  "/temoignages": "Témoignages",
};

const FLOW = {
  root_home: {
    bot: "Bonjour, je suis Francis. Je peux t'aider à cadrer ton projet France, vérifier ton profil et t'envoyer vers la bonne prochaine étape.",
    options: [
      { label: "Suis-je éligible ?", action: "start_qualification" },
      { label: "Comment ça marche ?", action: "node", nodeKey: "how_it_works" },
      { label: "Combien ça coûte ?", action: "node", nodeKey: "pricing" },
      { label: "Délais & visa", action: "node", nodeKey: "delays" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je souhaite parler à un conseiller pour cadrer mon projet France.",
      },
    ],
  },
  root_study: {
    bot: "Tu es sur la page Étudier en France. Je peux t'aider à vérifier si ton profil tient la route, clarifier les délais ou t'expliquer la méthode SchoolMo.",
    options: [
      { label: "Vérifier mon profil", action: "start_qualification" },
      { label: "J'ai un profil atypique", action: "node", nodeKey: "atypical" },
      { label: "Délais & visa", action: "node", nodeKey: "delays" },
      { label: "Comment ça marche ?", action: "node", nodeKey: "how_it_works" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux parler à un conseiller au sujet de mon projet d'études en France.",
      },
    ],
  },
  root_support: {
    bot: "Tu es sur la page Accompagnement. Je peux t'expliquer les étapes, le rôle du diagnostic et le meilleur moment pour démarrer.",
    options: [
      { label: "Les 5 phases", action: "node", nodeKey: "how_it_works" },
      { label: "Le diagnostic gratuit", action: "node", nodeKey: "diagnostic" },
      { label: "Combien ça coûte ?", action: "node", nodeKey: "pricing" },
      { label: "Débuter mon dossier", action: "node", nodeKey: "start_file" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je souhaite parler à un conseiller avant de démarrer l'accompagnement.",
      },
    ],
  },
  root_testimonials: {
    bot: "Tu es sur la page Témoignages. Si tu veux savoir si ton cas ressemble à ceux qui ont réussi, on peut cadrer ton profil en quelques questions.",
    options: [
      { label: "Mon cas ressemble-t-il au leur ?", action: "start_qualification" },
      { label: "Débuter mon dossier", action: "node", nodeKey: "start_file" },
      { label: "Comment ça marche ?", action: "node", nodeKey: "how_it_works" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je viens des témoignages et je veux savoir si mon profil peut suivre la même trajectoire.",
      },
    ],
  },
  root_default: {
    bot: "Bonjour, je suis Francis. Dis-moi ce que tu veux clarifier en priorité pour ton projet d'études en France.",
    options: [
      { label: "Vérifier mon profil", action: "start_qualification" },
      { label: "Comment ça marche ?", action: "node", nodeKey: "how_it_works" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je souhaite parler à un conseiller pour mon projet d'études en France.",
      },
    ],
  },
  atypical: {
    bot: "Trou dans le parcours, reconversion, âge plus avancé ou projet familial: ce n'est pas bloquant en soi. Le vrai sujet, c'est la cohérence du dossier et la manière de le défendre.",
    options: [
      { label: "Évaluer mon profil", action: "start_qualification" },
      { label: "Le diagnostic gratuit", action: "node", nodeKey: "diagnostic" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "J'ai un profil atypique et je veux savoir comment rendre mon dossier crédible.",
      },
    ],
  },
  how_it_works: {
    bot: "L'accompagnement SchoolMo suit 5 phases: diagnostic, choix de l'école, dossier, préparation visa, puis suivi après l'arrivée. L'idée est d'éviter les décisions floues à chaque étape.",
    options: [
      { label: "Le diagnostic gratuit", action: "node", nodeKey: "diagnostic" },
      { label: "La phase visa", action: "node", nodeKey: "visa" },
      { label: "Voir la page accompagnement", action: "cta_accompagnement" },
      { label: "Débuter mon dossier", action: "node", nodeKey: "start_file" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux comprendre les étapes précises de votre accompagnement.",
      },
    ],
  },
  diagnostic: {
    bot: "Le diagnostic est la première étape. On lit ton profil, ton parcours et ton objectif pour éviter de construire un dossier sur de mauvaises hypothèses.",
    options: [
      { label: "Faire mon diagnostic en ligne", action: "cta_diagnostic" },
      { label: "Vérifier mon profil d'abord", action: "start_qualification" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux démarrer par un diagnostic gratuit et savoir quoi préparer.",
      },
    ],
  },
  visa: {
    bot: "La phase visa est sensible: calendrier, cohérence du projet, pièces financières et préparation à l'entretien. Le dossier doit être défendable, pas juste complet.",
    options: [
      { label: "Délais & calendrier", action: "node", nodeKey: "delays" },
      { label: "Évaluer mon profil", action: "start_qualification" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux être accompagné pour la préparation du visa étudiant.",
      },
    ],
  },
  pricing: {
    bot: "Les tarifs dépendent du niveau d'accompagnement. Le plus utile est d'abord de vérifier où tu en es, puis de te proposer le niveau d'aide adapté à ton cas.",
    options: [
      { label: "Faire mon diagnostic gratuit", action: "cta_diagnostic" },
      { label: "Évaluer mon profil", action: "start_qualification" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux connaître le niveau d'accompagnement qui correspond à mon dossier et son tarif.",
      },
    ],
  },
  delays: {
    bot: "Les délais dépendent de ta période de candidature et de ton niveau de préparation. En pratique, il faut cadrer tôt les écoles, Campus France et le visa pour éviter de courir après le calendrier.",
    options: [
      { label: "Évaluer mon profil", action: "start_qualification" },
      { label: "Débuter mon dossier", action: "node", nodeKey: "start_file" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je veux clarifier mes délais de candidature et de visa.",
      },
    ],
  },
  start_file: {
    bot: "Pour débuter ton dossier, le plus efficace est de partir d'un diagnostic clair. Ça permet de décider quoi faire, dans quel ordre, et ce qu'il faut vraiment défendre.",
    options: [
      { label: "Faire mon diagnostic en ligne", action: "cta_diagnostic" },
      { label: "Évaluer mon profil", action: "start_qualification" },
      {
        label: "Parler à un conseiller",
        action: "cta_whatsapp",
        waReason: "Je suis prêt à commencer et je veux savoir quelle est la prochaine étape.",
      },
    ],
  },
  qual_country: {
    bot: "Je vais te poser 4 questions rapides pour mieux cadrer ton cas. D'abord, tu viens d'où ?",
    options: [
      {
        label: "Cameroun",
        action: "qualify",
        field: "country",
        value: "Cameroun",
        nextNodeKey: "qual_level",
      },
      {
        label: "Afrique francophone",
        action: "qualify",
        field: "country",
        value: "Afrique francophone",
        nextNodeKey: "qual_level",
      },
      {
        label: "Autre pays",
        action: "qualify",
        field: "country",
        value: "Autre pays",
        nextNodeKey: "qual_level",
      },
    ],
  },
  qual_level: {
    bot: "Quel est ton point de départ actuel ?",
    options: [
      {
        label: "Bac ou terminale",
        action: "qualify",
        field: "studyLevel",
        value: "Bac ou terminale",
        nextNodeKey: "qual_profile",
      },
      {
        label: "Bac+2 / Bac+3",
        action: "qualify",
        field: "studyLevel",
        value: "Bac+2 / Bac+3",
        nextNodeKey: "qual_profile",
      },
      {
        label: "Licence / Master",
        action: "qualify",
        field: "studyLevel",
        value: "Licence / Master",
        nextNodeKey: "qual_profile",
      },
      {
        label: "Reprise d'études",
        action: "qualify",
        field: "studyLevel",
        value: "Reprise d'études",
        nextNodeKey: "qual_profile",
      },
    ],
  },
  qual_profile: {
    bot: "Quel type de profil te correspond le mieux ?",
    botMessages: [
      "Quel type de profil te correspond le mieux ?",
      "**Repère rapide :**\n\n**Parcours linéaire** = cursus assez continu et cohérent.\n\n**Profil atypique** = reprise d'études, trou de parcours, reconversion ou parcours moins classique.\n\n**Parent / accompagnant** = tu prépares surtout le projet pour ton enfant ou un proche.",
    ],
    options: [
      {
        label: "Parcours linéaire",
        action: "qualify",
        field: "profile",
        value: "Parcours linéaire",
        nextNodeKey: "qual_goal",
      },
      {
        label: "Profil atypique",
        action: "qualify",
        field: "profile",
        value: "Profil atypique",
        nextNodeKey: "qual_goal",
      },
      {
        label: "Parent / accompagnant",
        action: "qualify",
        field: "profile",
        value: "Parent / accompagnant",
        nextNodeKey: "qual_goal",
      },
    ],
  },
  qual_goal: {
    bot: "Dernière question: qu'est-ce que tu veux clarifier en priorité ?",
    options: [
      {
        label: "Évaluer mes chances",
        action: "qualify",
        field: "goal",
        value: "Évaluer mes chances",
      },
      {
        label: "Comprendre délais & visa",
        action: "qualify",
        field: "goal",
        value: "Comprendre délais & visa",
      },
      {
        label: "Démarrer maintenant",
        action: "qualify",
        field: "goal",
        value: "Démarrer maintenant",
      },
    ],
  },
};

function waLink(message) {
  return `${whatsappBaseLink}?text=${encodeURIComponent(message)}`;
}

function getRootNodeKey(pathname) {
  return PAGE_ROOTS[pathname] ?? "root_default";
}

function getPageLabel(pathname) {
  return PAGE_LABELS[pathname] ?? "le site SchoolMo";
}

function buildDirectContactMessage({ pathname, reason }) {
  const pageLabel = getPageLabel(pathname);
  const subject = reason ?? "Je souhaite parler à un conseiller pour mon projet d'études en France.";
  return `Bonjour SchoolMo ! Je viens de la page "${pageLabel}". ${subject}`;
}

function buildQualificationInsight(qualification) {
  const insights = [];

  if (
    qualification.profile === "Profil atypique" ||
    qualification.studyLevel === "Reprise d'études"
  ) {
    insights.push("Ton dossier devra surtout prouver la cohérence du parcours.");
  }

  if (qualification.goal === "Comprendre délais & visa") {
    insights.push("Le calendrier Campus France et visa devra être cadré tôt.");
  }

  if (qualification.goal === "Démarrer maintenant") {
    insights.push("Le meilleur prochain pas est un diagnostic rapide pour lancer les démarches dans le bon ordre.");
  }

  if (!insights.length) {
    insights.push("Le plus utile maintenant est de valider l'éligibilité et la stratégie globale du dossier.");
  }

  return insights.join(" ");
}

function buildQualificationWhatsappMessage({ pathname, qualification }) {
  const pageLabel = getPageLabel(pathname);

  return [
    "Bonjour SchoolMo ! Je souhaite parler à un conseiller.",
    `Je viens de la page "${pageLabel}".`,
    `Pays : ${qualification.country}.`,
    `Niveau : ${qualification.studyLevel}.`,
    `Profil : ${qualification.profile}.`,
    `Priorité : ${qualification.goal}.`,
  ].join(" ");
}

function renderFormattedText(text) {
  return text.split("\n\n").map((paragraph, paragraphIndex) => (
    <span key={`paragraph-${paragraphIndex}`} className="chatbot-msg-paragraph">
      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={`part-${paragraphIndex}-${partIndex}`}>
              {part.slice(2, -2)}
            </strong>
          );
        }

        return (
          <span key={`part-${paragraphIndex}-${partIndex}`}>
            {part}
          </span>
        );
      })}
    </span>
  ));
}

export function ChatBot() {
  const location = useLocation();
  const currentRootKey = getRootNodeKey(location.pathname);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [currentNodeKey, setCurrentNodeKey] = useState(null);
  const [conversationRootKey, setConversationRootKey] = useState(null);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const messagesEndRef = useRef(null);
  const responseTimerRef = useRef(null);
  const messageIdRef = useRef(0);
  const qualificationRef = useRef({ ...EMPTY_QUALIFICATION });

  const createMessage = useCallback(
    (from, text, extras = {}) => ({
      id: `chatbot-msg-${messageIdRef.current++}`,
      from,
      text,
      ...extras,
    }),
    [],
  );

  const clearPendingResponse = useCallback(() => {
    if (responseTimerRef.current) {
      window.clearTimeout(responseTimerRef.current);
      responseTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, options, showAllOptions, typing]);

  useEffect(() => () => clearPendingResponse(), [clearPendingResponse]);

  useEffect(() => {
    if (!open || typeof window === "undefined") {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearPendingResponse();
        setTyping(false);
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [clearPendingResponse, open]);

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

  const deliverNode = useCallback(
    (nodeKey, { userLabel = null, reset = false } = {}) => {
      const node = FLOW[nodeKey];
      if (!node) return;
      const botMessages = node.botMessages ?? (node.bot ? [node.bot] : []);

      clearPendingResponse();
      setShowAllOptions(false);
      setOptions([]);
      setCurrentNodeKey(nodeKey);
      setTyping(true);

      if (reset) {
        setMessages(userLabel ? [createMessage("user", userLabel)] : []);
      } else if (userLabel) {
        setMessages((prev) => [...prev, createMessage("user", userLabel)]);
      }

      responseTimerRef.current = window.setTimeout(() => {
        responseTimerRef.current = null;
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          ...botMessages.map((text) => createMessage("bot", text)),
        ]);
        setOptions(node.options ?? []);
      }, BOT_DELAY);
    },
    [clearPendingResponse, createMessage],
  );

  const deliverReply = useCallback(
    ({
      userLabel,
      botText,
      cta = null,
      ctaWhatsapp = null,
      nextOptions = [],
      nodeKey = "reply",
    }) => {
      clearPendingResponse();
      setShowAllOptions(false);
      setOptions([]);
      setCurrentNodeKey(nodeKey);
      setTyping(true);

      if (userLabel) {
        setMessages((prev) => [...prev, createMessage("user", userLabel)]);
      }

      responseTimerRef.current = window.setTimeout(() => {
        responseTimerRef.current = null;
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          createMessage("bot", botText, { cta, ctaWhatsapp }),
        ]);
        setOptions(nextOptions);
      }, BOT_DELAY);
    },
    [clearPendingResponse, createMessage],
  );

  const startConversation = useCallback(
    (rootKey) => {
      qualificationRef.current = { ...EMPTY_QUALIFICATION };
      setConversationRootKey(rootKey);
      deliverNode(rootKey, { reset: true });
    },
    [deliverNode],
  );

  const closeChat = useCallback(() => {
    clearPendingResponse();
    setTyping(false);
    setOpen(false);
  }, [clearPendingResponse]);

  const handleDirectWhatsapp = useCallback(
    (option) => {
      deliverReply({
        userLabel: option.label,
        botText:
          option.replyText ??
          "Ton message est prêt sur WhatsApp. Clique ci-dessous, puis appuie sur Envoyer dans WhatsApp pour le transmettre. Après validation, un conseiller pourra te recontacter.",
        ctaWhatsapp: {
          label: WHATSAPP_CTA_LABEL,
          href: waLink(
            option.waMsg ??
              buildDirectContactMessage({
                pathname: location.pathname,
                reason: option.waReason,
              }),
          ),
        },
        nodeKey: "cta_whatsapp",
      });
    },
    [deliverReply, location.pathname],
  );

  const handleQualificationCompletion = useCallback(
    (userLabel) => {
      const qualification = qualificationRef.current;

      deliverReply({
        userLabel,
        botText: `${buildQualificationInsight(qualification)} J'ai préparé un message WhatsApp avec ton pays (${qualification.country}), ton niveau (${qualification.studyLevel}), ton profil (${qualification.profile}) et ta priorité (${qualification.goal}). Clique ci-dessous, puis appuie sur Envoyer dans WhatsApp pour transmettre ta demande. Après validation, un conseiller pourra te recontacter.`,
        ctaWhatsapp: {
          label: WHATSAPP_CTA_LABEL,
          href: waLink(
            buildQualificationWhatsappMessage({
              pathname: location.pathname,
              qualification,
            }),
          ),
        },
        nodeKey: "qual_complete",
      });
    },
    [deliverReply, location.pathname],
  );

  function handleToggle() {
    if (open) {
      closeChat();
      return;
    }

    setOpen(true);

    if (!messages.length || conversationRootKey !== currentRootKey) {
      startConversation(currentRootKey);
    }
  }

  function handleOption(option) {
    switch (option.action) {
      case "node":
        deliverNode(option.nodeKey, { userLabel: option.label });
        return;

      case "cta_diagnostic":
        deliverReply({
          userLabel: option.label,
          botText:
            "Super. Clique sur le bouton ci-dessous pour démarrer ton diagnostic gratuit et poser les bases du dossier.",
          cta: {
            label: "Démarrer mon diagnostic",
            to: "/accompagnement#diagnostic",
          },
          nodeKey: "cta_diagnostic",
        });
        return;

      case "cta_accompagnement":
        deliverReply({
          userLabel: option.label,
          botText:
            "Voici la page qui détaille les étapes et la logique de l'accompagnement SchoolMo.",
          cta: {
            label: "Voir l'accompagnement",
            to: "/accompagnement",
          },
          nodeKey: "cta_accompagnement",
        });
        return;

      case "cta_whatsapp":
        handleDirectWhatsapp(option);
        return;

      case "start_qualification":
        qualificationRef.current = { ...EMPTY_QUALIFICATION };
        deliverNode("qual_country", { userLabel: option.label });
        return;

      case "qualify":
        qualificationRef.current = {
          ...qualificationRef.current,
          [option.field]: option.value,
        };

        if (option.nextNodeKey) {
          deliverNode(option.nextNodeKey, { userLabel: option.label });
          return;
        }

        handleQualificationCompletion(option.label);
        return;

      default:
        return;
    }
  }

  const visibleOptions = showAllOptions
    ? options
    : options.slice(0, MAX_VISIBLE_OPTIONS);
  const hasHiddenOptions = options.length > MAX_VISIBLE_OPTIONS && !showAllOptions;
  const isAtRoot = currentNodeKey === currentRootKey;
  const showMainMenu = open && messages.length > 0 && !typing && !isAtRoot;
  const hasFooterActions = options.length > 0 || showMainMenu;

  return (
    <>
      <AnimatePresence>
        {open && (
          <MotionBackdrop
            className="chatbot-backdrop"
            type="button"
            aria-label="Fermer l'assistant"
            onClick={closeChat}
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
            aria-modal="true"
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
                onClick={closeChat}
              >
                <X size={18} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
                  <div className="chatbot-msg-text">{renderFormattedText(msg.text)}</div>
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
                  {msg.cta && (
                    <NavLink
                      className="chatbot-cta-btn"
                      to={msg.cta.to}
                      onClick={closeChat}
                    >
                      {msg.cta.label}
                      <ArrowRight size={14} />
                    </NavLink>
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

            {hasFooterActions && (
              <div className="chatbot-actions">
                {options.length > 0 && (
                  <div className="chatbot-options">
                    {visibleOptions.map((opt) => (
                      <button
                        key={`${currentNodeKey}-${opt.label}`}
                        type="button"
                        className={`chatbot-option-btn${opt.action === "cta_whatsapp" ? " chatbot-option-btn--wa" : ""}`}
                        onClick={() => handleOption(opt)}
                      >
                        {opt.action === "cta_whatsapp" && (
                          <WhatsAppIcon width={13} height={13} />
                        )}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {(hasHiddenOptions || showMainMenu) && (
                  <div className="chatbot-controls">
                    {hasHiddenOptions && (
                      <button
                        type="button"
                        className="chatbot-option-btn chatbot-option-btn--more"
                        onClick={() => setShowAllOptions(true)}
                      >
                        <Plus size={14} strokeWidth={2.2} />
                        <span>Plus d'options</span>
                      </button>
                    )}

                    {showMainMenu && (
                      <button
                        type="button"
                        className="chatbot-option-btn chatbot-option-btn--nav"
                        onClick={() => startConversation(currentRootKey)}
                      >
                        <ChevronLeft size={14} strokeWidth={2.2} />
                        <span>Menu principal</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </MotionPanel>
        )}
      </AnimatePresence>
    </>
  );
}
