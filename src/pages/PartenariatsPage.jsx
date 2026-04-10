import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronRight, MapPin, Send } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import frPhoneLabels from "react-phone-number-input/locale/fr.json";
import "react-phone-number-input/style.css";
import {
  ClosingBanner,
  PageIntro,
} from "../components/SharedSections";
import siteIcon from "../../Assets/icon.png";
import {
  pageIntros,
  partnerBenefits,
  partnershipBullets,
  partnershipLogos,
  partnershipStats,
  revealProps,
  whatsappBaseLink,
} from "../siteData";

export function PartenariatsPage() {
  return (
    <>
      <PageIntro
        tag={pageIntros.partenariats.tag}
        title={pageIntros.partenariats.title}
        accent={pageIntros.partenariats.accent}
        text={pageIntros.partenariats.text}
        dark
      />

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Nos partenaires en France
            </span>
            <h2>
              Des écoles françaises reconnues{" "}
              <span>qui nous font confiance</span>
            </h2>
            <p>
              Ces établissements travaillent avec SchoolMo pour accueillir des
              étudiants africains sérieux et bien préparés. Leur confiance,
              c&apos;est ta garantie.
            </p>
          </motion.div>

          <motion.div className="logo-grid partner-logo-grid" {...revealProps}>
            {partnershipLogos.map((partner) => (
              <article key={partner.label} className="logo-card partner-logo-card">
                <img src={partner.src} alt={partner.alt} />
                <small>
                  <MapPin size={15} aria-hidden="true" />
                  {partner.city}
                </small>
              </article>
            ))}
          </motion.div>

          <motion.aside className="partner-note" {...revealProps}>
            Ces écoles font confiance à SchoolMo pour la qualité des dossiers
            qu&apos;on prépare. Pour toi, étudiant africain, c&apos;est un
            avantage concret : ton dossier est connu, attendu, et pris au
            sérieux.
          </motion.aside>
        </div>
      </section>

      <PartnerRecruitSection />

      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Programme SchoolMo Parcours
            </span>
            <h2>
              Ce que SchoolMo apporte{" "}
              <span>concrètement à vos étudiants</span>
            </h2>
          </motion.div>

          <div className="audience-grid">
            {partnerBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  key={benefit.title}
                  className="audience-card"
                  {...revealProps}
                >
                  <div className="audience-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <PartnershipFormSection />

      <ClosingBanner
        title={
          <>
            Vous êtes une école ?{" "}
            <span>Construisons un dispositif utile.</span>
          </>
        }
        text="SchoolMo peut activer des ateliers, qualifier les profils et fluidifier le parcours des étudiants."
      />
    </>
  );
}

function PartnerRecruitSection() {
  return (
    <section className="section section-cta">
      <div className="section-shell cta-layout partner-recruit-layout">
        <motion.div className="cta-copy-panel partner-recruit-copy" {...revealProps}>
          <span className="section-tag section-tag-light">
            Devenir établissement partenaire
          </span>
          <h2>
            Rejoins le réseau SchoolMo et{" "}
            <span>ouvre la France à tes étudiants</span>.
          </h2>
          <p>
            En devenant partenaire SchoolMo, tu offres à tes étudiants un
            accompagnement personnalisé, structuré et sérieux vers les études en
            France — et tu bénéficies d'une visibilité sur un réseau
            international en pleine croissance.
          </p>

          <div className="cta-steps">
            {partnershipBullets.map((bullet, index) => (
              <div key={index} className="cta-step">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <a className="btn btn-primary" href="#demande-partenariat">
            Devenir école partenaire
            <ChevronRight size={18} />
          </a>
        </motion.div>

        <motion.div className="form-panel partner-recruit-stats-panel" {...revealProps}>
          <span className="hero-badge partner-recruit-badge">
            <span className="hero-badge-icon" aria-hidden="true">
              <img src={siteIcon} alt="" />
            </span>
            <span className="hero-badge-label">Impact du réseau SchoolMo</span>
          </span>

          <div className="partner-stats">
            {partnershipStats.map((stat) => (
              <div key={stat.label} className="partner-stat-card">
                <PartnerStatValue stat={stat} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PartnerStatValue({ stat }) {
  const [displayValue, setDisplayValue] = useState(() =>
    typeof stat.countValue === "number" ? 0 : stat.value,
  );
  const valueRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof stat.countValue !== "number") {
      return undefined;
    }

    const node = valueRef.current;

    if (!node) {
      return undefined;
    }

    let frameId = 0;
    const duration = 1400;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplayValue(Math.round(stat.countValue * eased));

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick);
          }
        };

        frameId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.55 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [stat.countValue, stat.value]);

  const formattedValue =
    typeof stat.countValue === "number"
      ? `${stat.prefix ?? ""}${new Intl.NumberFormat("fr-FR")
          .format(displayValue)
          .replace(/\u202f/g, " ")}${stat.suffix ?? ""}`
      : stat.value;

  return <strong ref={valueRef}>{formattedValue}</strong>;
}

function PartnershipFormSection() {
  const [formSent, setFormSent] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      etablissement: "",
      type: "",
      pays: "",
      responsable: "",
      fonction: "",
      whatsapp: undefined,
      email: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    const text = [
      "Bonjour SchoolMo,",
      `Demande de partenariat de ${values.etablissement}.`,
      `Type : ${values.type} — Pays : ${values.pays}.`,
      `Responsable : ${values.responsable} (${values.fonction}).`,
      `WhatsApp : ${values.whatsapp}.`,
      values.email ? `Email : ${values.email}.` : "Email : non renseigné.",
      `Message : ${values.message}`,
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
    <section id="demande-partenariat" className="section section-soft">
      <div className="section-shell single-column-layout">
        <motion.div className="section-heading" {...revealProps}>
          <span className="section-tag section-tag-light">Partenariat</span>
          <h2>
            Demande de partenariat <span>SchoolMo</span>
          </h2>
          <p>Notre équipe vous répondra sous 48h ouvrées.</p>
        </motion.div>

        <motion.div className="form-panel partnership-form-panel" {...revealProps}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-grid">
              <label className="full">
                Nom de l'établissement *
                <input
                  type="text"
                  placeholder="Ex : Lycée Bilingue Excellence"
                  {...register("etablissement", { required: "Champ requis" })}
                />
                {errors.etablissement && (
                  <span className="form-error">{errors.etablissement.message}</span>
                )}
              </label>

              <label>
                Type d'établissement *
                <select {...register("type", { required: "Champ requis" })}>
                  <option value="">Sélectionner</option>
                  <option value="Lycée">Lycée</option>
                  <option value="Université">Université</option>
                  <option value="École Supérieure">École Supérieure</option>
                  <option value="Institut de Formation">
                    Institut de Formation
                  </option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.type && <span className="form-error">{errors.type.message}</span>}
              </label>

              <label>
                Pays *
                <select {...register("pays", { required: "Champ requis" })}>
                  <option value="">Sélectionner</option>
                  <option value="Cameroun">Cameroun</option>
                  <option value="Côte d'Ivoire">Côte d&apos;Ivoire</option>
                  <option value="Sénégal">Sénégal</option>
                  <option value="Mali">Mali</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Congo">Congo</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Bénin">Bénin</option>
                  <option value="Togo">Togo</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.pays && <span className="form-error">{errors.pays.message}</span>}
              </label>

              <label>
                Nom du responsable *
                <input
                  type="text"
                  placeholder="Nom et prénom"
                  {...register("responsable", { required: "Champ requis" })}
                />
                {errors.responsable && (
                  <span className="form-error">{errors.responsable.message}</span>
                )}
              </label>

              <label>
                Fonction *
                <select {...register("fonction", { required: "Champ requis" })}>
                  <option value="">Sélectionner</option>
                  <option value="Directeur / Directrice">
                    Directeur / Directrice
                  </option>
                  <option value="Proviseur / Proviseure">
                    Proviseur / Proviseure
                  </option>
                  <option value="Responsable pédagogique">
                    Responsable pédagogique
                  </option>
                  <option value="Responsable des admissions">
                    Responsable des admissions
                  </option>
                  <option value="Responsable des relations internationales">
                    Responsable des relations internationales
                  </option>
                  <option value="Coordinateur / Coordinatrice">
                    Coordinateur / Coordinatrice
                  </option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.fonction && <span className="form-error">{errors.fonction.message}</span>}
              </label>

              <label>
                WhatsApp *
                <PhoneInputWithCountry
                  defaultCountry="CM"
                  international
                  autoComplete="tel"
                  labels={frPhoneLabels}
                  className={`partnership-phone-input${errors.whatsapp ? " is-error" : ""}`}
                  name="whatsapp"
                  control={control}
                  placeholder="Numéro WhatsApp"
                  rules={{
                    required: "Champ requis",
                    validate: (value) =>
                      !value ||
                      isPossiblePhoneNumber(value) ||
                      "Numéro invalide",
                  }}
                />
                {errors.whatsapp && <span className="form-error">{errors.whatsapp.message}</span>}
              </label>

              <label>
                Email
                <input
                  type="email"
                  placeholder="contact@ecole.cm"
                  {...register("email")}
                />
              </label>

              <label className="full">
                Votre message
                <textarea
                  rows="5"
                  placeholder="Décrivez votre établissement et vos attentes..."
                  {...register("message")}
                />
              </label>
            </div>

            <button className="btn btn-primary btn-submit" type="submit">
              Envoyer ma demande de partenariat
              <Send size={18} />
            </button>

            <p className="form-note">
              Vos informations sont confidentielles. Nous vous répondrons
              rapidement sur WhatsApp.
            </p>

            {formSent && (
              <div className="form-success">
                <CheckCircle2 size={18} />
                WhatsApp s&apos;est ouvert avec votre demande pré-remplie.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
