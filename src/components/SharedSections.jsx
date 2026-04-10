import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  contactSteps,
  faqItems,
  partnershipLogos,
  revealProps,
  testimonialCards,
  whatsappBaseLink,
} from "../siteData";

export function PageIntro({
  tag,
  title,
  accent,
  text,
  dark = false,
  actions = null,
  bgImage = null,
  id = null,
}) {
  return (
    <section
      id={id || undefined}
      className={`section page-intro ${dark ? "page-intro-dark" : ""}`}
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      <div className="section-shell">
        <motion.div className="page-intro-card" {...revealProps}>
          <span className={`section-tag ${dark ? "" : "section-tag-light"}`}>
            {tag}
          </span>
          <h1>
            {title}
            {accent && <span>{accent}</span>}
          </h1>
          <p>{text}</p>
          {actions && (
            <div className="hero-actions page-intro-actions">{actions}</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ marquee = false, title, text }) {
  const cards = marquee
    ? [...testimonialCards, ...testimonialCards]
    : testimonialCards;

  return (
    <section className="section section-soft">
      <div className="section-shell">
        <motion.div className="section-heading" {...revealProps}>
          <span className="section-tag section-tag-light">Témoignages</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </motion.div>

        {marquee ? (
          <div className="marquee">
            <div className="marquee-track">
              {cards.map((card, index) => (
                <TestimonialCard key={`${card.id}-${index}`} card={card} />
              ))}
            </div>
          </div>
        ) : (
          <div className="testimonial-grid">
            {cards.map((card) => (
              <motion.div key={card.id} {...revealProps}>
                <TestimonialCard card={card} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ card }) {
  return (
    <article className="testimonial-card">
      {card.type === "video" ? (
        <div className="testimonial-video">
          <video autoPlay loop muted playsInline preload="metadata">
            <source src={card.video} type="video/mp4" />
          </video>
          <div className="video-chip">
            <MessageCircle size={16} />
            Video
          </div>
          <div className="testimonial-meta testimonial-meta-overlay">
            <strong>{card.name}</strong>
            <span>{card.subtitle}</span>
          </div>
        </div>
      ) : (
        <div className="testimonial-quote">
          <QuoteBubble />
          <p>{card.quote}</p>
          <div className="testimonial-meta">
            <strong>{card.name}</strong>
            <span>{card.subtitle}</span>
          </div>
        </div>
      )}
    </article>
  );
}

export function PartnersGridSection({ title, text }) {
  return (
    <section className="section section-light">
      <div className="section-shell">
        <motion.div className="section-heading" {...revealProps}>
          <span className="section-tag section-tag-light">Nos écoles</span>
          <h2>{title}</h2>
          <p>{text}</p>
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
  );
}

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="section section-soft">
      <div className="section-shell faq-layout single-column-layout">
        <motion.div className="section-heading heading-left" {...revealProps}>
          <span className="section-tag section-tag-light">FAQ</span>
          <h2>
            Les questions qui bloquent avant même de <span>se lancer</span>.
          </h2>
          <p>
            Une FAQ en accord avec la cible SchoolMo : âge, refus, reconversion,
            réalisme du projet et première prise de contact.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.article
                key={item.question}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                {...revealProps}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      city: "",
      email: "",
      profile: "",
      project: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    const text = [
      "Bonjour SchoolMo,",
      `Je m'appelle ${values.fullname}.`,
      `Ville / Pays : ${values.city}.`,
      `Profil : ${values.profile}.`,
      `Projet : ${values.project}.`,
      values.email ? `Email : ${values.email}.` : "Email : non renseigné.",
      `Contexte : ${values.message}`,
    ].join("\n");

    window.open(
      `${whatsappBaseLink}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setFormSent(true);
    reset();
  };

  return (
    <section id="diagnostic" className="section section-cta">
      <div className="section-shell cta-layout">
        <motion.div className="cta-copy-panel" {...revealProps}>
          <span className="section-tag section-tag-light">
            Diagnostic gratuit
          </span>
          <h2>
            Le bon premier geste : <span>qualifier le projet</span> avant de
            s'épuiser.
          </h2>
          <p>
            Partage ton profil et ta situation. On analyse ta cohérence, on
            identifie les risques et on te dit exactement ce qu'il faut faire
            pour vraiment avancer.
          </p>

          <div className="cta-steps">
            {contactSteps.map((step, index) => (
              <div key={step} className="cta-step">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>

          {/* <div className="contact-badges">
            <a href={whatsappBaseLink} target="_blank" rel="noreferrer">
              <Phone size={16} />
              +33 7 55 17 44 64
            </a>
            <a href="mailto:contact@schoolmo.fr">
              <Mail size={16} />
              contact@schoolmo.fr
            </a>
          </div> */}
        </motion.div>

        <motion.div className="form-panel" {...revealProps}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-grid">
              <label>
                Nom complet
                <input
                  type="text"
                  placeholder="Ex: Francis Kenne"
                  {...register("fullname", { required: "Champ requis" })}
                />
                {errors.fullname && (
                  <span className="form-error">{errors.fullname.message}</span>
                )}
              </label>

              <label>
                Ville / Pays
                <input
                  type="text"
                  placeholder="Yaoundé, Cameroun"
                  {...register("city", { required: "Champ requis" })}
                />
                {errors.city && (
                  <span className="form-error">{errors.city.message}</span>
                )}
              </label>

              <label>
                Email
                <input
                  type="email"
                  placeholder="adresse@email.com"
                  {...register("email")}
                />
              </label>

              <label>
                Profil
                <select {...register("profile", { required: "Champ requis" })}>
                  <option value="">Choisir</option>
                  <option value="Étudiant">Étudiant</option>
                  <option value="Reconversion">Reconversion</option>
                  <option value="Parent">Parent</option>
                </select>
                {errors.profile && (
                  <span className="form-error">{errors.profile.message}</span>
                )}
              </label>

              <label className="full">
                Projet principal
                <select {...register("project", { required: "Champ requis" })}>
                  <option value="">Choisir</option>
                  <option value="Étudier en France">Étudier en France</option>
                  <option value="Reprendre des études">
                    Reprendre des études
                  </option>
                  <option value="Accompagner mon enfant">
                    Accompagner mon enfant
                  </option>
                  <option value="Vérifier la faisabilité du dossier">
                    Vérifier la faisabilité du dossier
                  </option>
                </select>
                {errors.project && (
                  <span className="form-error">{errors.project.message}</span>
                )}
              </label>

              <label className="full">
                Contexte
                <textarea
                  rows="5"
                  placeholder="Âge, niveau d'études, objectif, difficulté actuelle..."
                  {...register("message", { required: "Champ requis" })}
                />
                {errors.message && (
                  <span className="form-error">{errors.message.message}</span>
                )}
              </label>
            </div>

            <button className="btn btn-primary btn-submit" type="submit">
              Envoyer sur WhatsApp
              <Send size={18} />
            </button>

            <p className="form-note">
              (*) Soyez le plus honnête possible dans vos déclarations.
            </p>

            {formSent && (
              <div className="form-success">
                <CheckCircle2 size={18} />
                WhatsApp s'est ouvert avec ton message pré-rempli.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function ClosingBanner({ title, text }) {
  return (
    <section className="section section-dark closing-banner">
      <div className="section-shell">
        <motion.div
          className="section-heading closing-banner-card"
          {...revealProps}
        >
          <span className="section-tag">SchoolMo</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="hero-actions">
            <NavLink
              className="btn btn-primary"
              to="/accompagnement#diagnostic"
            >
              Demander un diagnostic
              <ArrowRight size={18} />
            </NavLink>
            <a
              className="btn btn-secondary"
              href={whatsappBaseLink}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Écrire sur WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteBubble() {
  return (
    <div className="quote-bubble">
      <MessageCircle size={18} />
    </div>
  );
}
