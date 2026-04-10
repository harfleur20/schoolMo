import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ChevronDown, Minus } from "lucide-react";
import {
  ClosingBanner,
  ContactSection,
  PageIntro,
} from "../components/SharedSections";
import {
  pageIntros,
  accompanimentPhaseDetails,
  revealProps,
} from "../siteData";

export function AccompagnementPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();
  const phaseSectionRef = useRef(null);
  const phaseContentRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash && hash.startsWith("#phase-")) {
      const phaseNum = parseInt(hash.replace("#phase-", ""), 10);
      if (phaseNum >= 1 && phaseNum <= 5) {
        const timer = window.setTimeout(() => {
          setActivePhase(phaseNum - 1);
          setExpandedItems({});
          phaseSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return () => window.clearTimeout(timer);
      }
    }

    return undefined;
  }, [location.hash]);

  const currentPhase = accompanimentPhaseDetails[activePhase];
  const mainTitle = currentPhase.title.split(" ").slice(1).join(" ");
  const phaseLabel = `PHASE ${currentPhase.id} SUR 5`;

  const toggleItem = (phaseId, itemIndex) => {
    const key = `${phaseId}-${itemIndex}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePhaseSelect = (phaseIndex) => {
    setActivePhase(phaseIndex);
    setExpandedItems({});

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches) {
      window.setTimeout(() => {
        phaseContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  return (
    <>
      <PageIntro
        tag={pageIntros.accompagnement.tag}
        title={pageIntros.accompagnement.title}
        accent={pageIntros.accompagnement.accent}
        text={pageIntros.accompagnement.text}
      />

      <section ref={phaseSectionRef} className="section section-light phase-section">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentPhase.id}
            src={currentPhase.image}
            alt=""
            className="phase-section-bg-img"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="section-shell" style={{ position: "relative", zIndex: 1 }}>
          {/* Phase Selector Tabs */}
          <motion.div className="phase-selector" {...revealProps}>
            {accompanimentPhaseDetails.map((phase) => (
              <motion.button
                key={phase.id}
                className={`phase-button ${activePhase === phase.id - 1 ? "is-active" : ""}`}
                aria-label={phase.title}
                aria-pressed={activePhase === phase.id - 1}
                onClick={() => handlePhaseSelect(phase.id - 1)}
              >
                <span className="phase-number">{phase.id}</span>
                <span className="phase-name">{phase.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Phase Content Row */}
          <motion.div
            ref={phaseContentRef}
            key={currentPhase.id}
            className="phase-row"
            {...revealProps}
          >
            {/* Left side - Dark card */}
            <div className="phase-card-left">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentPhase.id}
                  src={currentPhase.image}
                  alt=""
                  className="phase-card-bg-img"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.09 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="phase-card-content">
                <div className="phase-label">{phaseLabel}</div>
                <h3 className="phase-title">
                  Phase <span className="phase-accent">{mainTitle}</span>
                </h3>
                <p className="phase-description">
                  {currentPhase.fullDescription}
                </p>
                {currentPhase.highlightText && (
                  <div className="phase-highlight-box">
                    <strong className="phase-highlight-label">
                      — {currentPhase.highlight}
                    </strong>
                    <p>{currentPhase.highlightText}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Accordion details */}
            <div className="phase-card-right">
              {currentPhase.details.map((detail, itemIndex) => {
                const key = `${currentPhase.id}-${itemIndex}`;
                const isExpanded = expandedItems[key];
                const detailContent =
                  currentPhase.detailsContent?.[itemIndex] || detail;

                return (
                  <motion.div
                    key={itemIndex}
                    className={`phase-detail-item ${isExpanded ? "is-expanded" : ""}`}
                  >
                    <button
                      className="phase-detail-trigger"
                      onClick={() => toggleItem(currentPhase.id, itemIndex)}
                    >
                      <div className="phase-detail-icon">
                        <Minus size={18} />
                      </div>
                      <span className="phase-detail-title">{detail}</span>
                      <ChevronDown size={18} className="phase-detail-chevron" />
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          className="phase-detail-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.25, ease: "easeOut" },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <p>{detailContent}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Continuous Support Section */}
          {currentPhase.continuousSupport && (
            <motion.div className="phase-continuous-support" {...revealProps}>
              <h3>{currentPhase.continuousSupport.title}</h3>
              <ul className="phase-support-list">
                {currentPhase.continuousSupport.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      <ContactSection />
      <ClosingBanner
        title={
          <>
            Prêt(e) à démarrer ton <span>accompagnement</span> ?
          </>
        }
        text="La première étape est un diagnostic gratuit. On évalue la situation, on analyse le processus, et on convainc ensemble."
      />
    </>
  );
}
