import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

function HistoireStatValue({ stat }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frameId = 0;
    const duration = 1400;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplayValue(Math.round(stat.countValue * eased));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.55 }
    );
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frameId); };
  }, [stat.countValue]);

  const formatted = `${stat.prefix ?? ""}${new Intl.NumberFormat("fr-FR").format(displayValue).replace(/\u202f/g, " ")}${stat.suffix ?? ""}`;
  return <strong ref={ref}>{formatted}</strong>;
}
import { ClosingBanner, PageIntro } from "../components/SharedSections";
import {
  founder,
  founderAchievements,
  founderStory,
  histoireStats,
  histoireTeam,
  histoireValeurs,
  pageIntros,
  revealProps,
} from "../siteData";
import parisImage from "/Assets/full-shot-friends-with-drinks-paris.webp";

export function NotreHistoirePage() {
  return (
    <>
      {/* Hero */}
      <PageIntro
        tag={pageIntros.histoire.tag}
        title={pageIntros.histoire.title}
        accent={pageIntros.histoire.accent}
        text={pageIntros.histoire.text}
        bgImage={parisImage}
        dark
      />

      {/* Fondateur */}
      <section className="section section-soft">
        <div className="section-shell histoire-founder-layout">
          {/* Colonne gauche — chapitres */}
          <motion.div className="histoire-story" {...revealProps}>
            <span className="section-tag section-tag-light">Le Fondateur</span>
            <h2 className="histoire-story-name">Anicet Nemani</h2>
            <div className="histoire-chapters">
              {founderStory.map((chapter, i) => (
                <div key={i} className="histoire-chapter">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite — carte sticky */}
          <motion.div className="histoire-founder-card" {...revealProps}>
            <div className="histoire-founder-photo-wrap">
              <img src={founder.photo} alt="Anicet Nemani, fondateur de SchoolMo" />
            </div>
            <div className="histoire-founder-card-body">
              <div className="histoire-founder-avatar">AN</div>
              <h3>Anicet Nemani</h3>
              <span className="histoire-founder-title">Fondateur de SchoolMo</span>
              <ul className="histoire-achievements">
                {founderAchievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que SchoolMo veut changer */}
      <section className="section section-dark">
        <div className="section-shell">
          <motion.div className="histoire-mission" {...revealProps}>
            <h2>
              Ce que SchoolMo <span>veut changer</span>
            </h2>
            <p>
              Trop d&apos;étudiants africains font des choix sans comprendre les
              débouchés. Trop pensent que la France n&apos;est pas pour eux.
              SchoolMo existe pour changer ça — en remettant de la clarté dans
              les parcours et en accompagnant chaque personne à travers 5 phases
              structurées jusqu&apos;à l&apos;obtention de son visa.
            </p>
            <NavLink className="btn btn-primary" to="/accompagnement">
              Voir notre méthode
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section section-light">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">Nos valeurs</span>
            <h2>
              Ce qui nous <span>guide au quotidien</span>
            </h2>
          </motion.div>

          <div className="histoire-valeurs-grid">
            {histoireValeurs.map((valeur, i) => (
              <motion.article key={i} className="histoire-valeur-card" {...revealProps}>
                <span className="histoire-valeur-dash">—</span>
                <h3>{valeur.title}</h3>
                <p>{valeur.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="section section-soft">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">L&apos;équipe</span>
            <h2>
              Les personnes derrière <span>SchoolMo</span>
            </h2>
            <p>Des profils complémentaires. Une même conviction.</p>
          </motion.div>

          <div className="histoire-team-grid">
            {histoireTeam.map((member) => (
              <motion.article key={member.name} className="histoire-team-card" {...revealProps}>
                <div
                  className="histoire-team-avatar"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <span className="histoire-team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="histoire-team-location">
                  <MapPin size={13} />
                  {member.location}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="section-shell">
          <div className="partner-stats histoire-stats-row">
            {histoireStats.map((stat) => (
              <motion.div key={stat.label} className="partner-stat-card" {...revealProps}>
                <HistoireStatValue stat={stat} />
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <ClosingBanner
        title={
          <>
            Notre histoire te parle ?{" "}
            <span>La tienne peut lui ressembler.</span>
          </>
        }
        text="Quel que soit ton point de départ, SchoolMo est là pour t'accompagner."
      />
    </>
  );
}
