import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Star, X } from "lucide-react";
import { WhatsAppIcon } from "../components/BrandIcons";
import { ClosingBanner, PageIntro } from "../components/SharedSections";
import {
  pageIntros,
  revealProps,
  temoignagesStats,
  videoTestimonials,
  whatsappBaseLink,
  writtenTestimonials,
} from "../siteData";

const videoPosterCache = new Map();

function VideoPreview({ src, alt }) {
  const [poster, setPoster] = useState(() => videoPosterCache.get(src) ?? null);

  useEffect(() => {
    if (!src || videoPosterCache.has(src)) {
      return undefined;
    }

    let isCancelled = false;
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");

    const cleanup = () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("seeked", captureFrame);
      video.removeEventListener("error", handleError);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    const applyPoster = (dataUrl) => {
      videoPosterCache.set(src, dataUrl);
      if (!isCancelled) {
        setPoster(dataUrl);
      }
    };

    const captureFrame = () => {
      if (!video.videoWidth || !video.videoHeight) {
        handleError();
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        handleError();
        return;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      applyPoster(canvas.toDataURL("image/jpeg", 0.82));
    };

    const handleLoadedData = () => {
      if (video.readyState < 2) {
        return;
      }

      const targetTime = Math.min(
        Math.max(video.duration * 0.1, 0.15),
        1,
      );

      if (Number.isFinite(targetTime) && targetTime > 0) {
        video.currentTime = targetTime;
        return;
      }

      captureFrame();
    };

    const handleError = () => {
      if (!isCancelled) {
        setPoster(null);
      }
    };

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = src;
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("seeked", captureFrame);
    video.addEventListener("error", handleError);
    video.load();

    return () => {
      isCancelled = true;
      cleanup();
    };
  }, [src]);

  if (poster) {
    return <img className="testimonial-video-preview" src={poster} alt={alt} loading="lazy" />;
  }

  return <div className="testimonial-video-preview testimonial-video-preview-placeholder" aria-hidden="true" />;
}

function VideoSlider({ videos, onOpen }) {
  const sliderRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const getStep = () => {
    const el = sliderRef.current;
    if (!el) return 0;
    const card = el.querySelector(".testimonial-card");
    return card ? card.offsetWidth + 20 : 0;
  };

  const prev = () => sliderRef.current?.scrollBy({ left: -getStep(), behavior: "smooth" });
  const next = () => sliderRef.current?.scrollBy({ left: getStep(), behavior: "smooth" });

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  return (
    <div className="video-slider-wrapper">
      <button
        className="video-slider-btn"
        onClick={prev}
        disabled={!canPrev}
        aria-label="Précédent"
      >
        <ChevronLeft size={20} />
      </button>

      <div ref={sliderRef} className="video-slider" onScroll={handleScroll}>
        {videos.map((vid) => (
          <article
            key={vid.id}
            className={`testimonial-card${vid.video ? " has-video" : ""}`}
            onClick={() => vid.video && onOpen(vid)}
          >
            <div className="testimonial-video">
              {vid.video && (
                <VideoPreview
                  src={vid.video}
                  alt={`${vid.title} - ${vid.name}`}
                />
              )}
              <div className="video-play-center">
                <Play size={20} fill="currentColor" />
              </div>
              <div className="testimonial-meta testimonial-meta-overlay">
                <strong>{vid.title}</strong>
                <span>{vid.name} — {vid.info}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="video-slider-btn"
        onClick={next}
        disabled={!canNext}
        aria-label="Suivant"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export function TemoignagesPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      {/* Hero */}
      <PageIntro
        id="temoignages-hero"
        tag={pageIntros.temoignages.tag}
        title={pageIntros.temoignages.title}
        accent={pageIntros.temoignages.accent}
        text={pageIntros.temoignages.text}
        actions={
          <>
            {temoignagesStats.map((stat) => (
              <div key={stat.label} className="temoignage-stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </>
        }
      />

      {/* Vidéos — slider */}
      <section id="videos" className="section section-soft">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Témoignages vidéo
            </span>
            <h2>
              Ils parlent mieux que nous ne pourrions{" "}
              <span>le faire</span>
            </h2>
            <p>
              Pas de script. Des personnes réelles qui racontent leur expérience
              avec SchoolMo.
            </p>
          </motion.div>

          <VideoSlider videos={videoTestimonials} onOpen={setActiveVideo} />

          <motion.div className="temoignage-tiktok-row" {...revealProps}>
            <a
              className="btn btn-primary"
              href="https://www.tiktok.com/@anicetnemani"
              target="_blank"
              rel="noreferrer"
            >
              Voir toutes nos vidéos sur TikTok
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Avis écrits */}
      <section id="avis-ecrits" className="section section-soft">
        <div className="section-shell">
          <motion.div className="section-heading" {...revealProps}>
            <span className="section-tag section-tag-light">
              Témoignages écrits
            </span>
            <h2>
              Ce qu&apos;ils disent <span>de SchoolMo</span>
            </h2>
          </motion.div>

          <div className="written-review-grid">
            {writtenTestimonials.map((review) => (
              <motion.article
                key={review.id}
                className="written-review-card"
                {...revealProps}
              >
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p>{review.quote}</p>
                <div className="review-author">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.meta}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA communauté */}
      <section className="section section-soft">
        <div className="section-shell">
          <motion.div className="community-cta-card" {...revealProps}>
            <h2>Rejoignez la communauté SchoolMo</h2>
            <p>
              Plus de 100 membres actifs. Des étudiants, des adultes, des
              familles — unis par le même projet. Informations utiles, soutien
              mutuel, victoires célébrées ensemble.
            </p>
            <a
              className="btn btn-light"
              href={whatsappBaseLink}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon width={20} height={20} style={{ color: "#25D366" }} />
              Rejoindre la communauté WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <ClosingBanner
        title={
          <>
            Leur histoire peut <span>devenir la vôtre</span>.
          </>
        }
        text="La première étape, c'est un diagnostic gratuit."
      />

      {/* Modal vidéo */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
            <video autoPlay controls playsInline>
              <source src={activeVideo.video} type="video/mp4" />
            </video>
            <div className="video-modal-info">
              <strong>{activeVideo.title}</strong>
              <span>{activeVideo.name} — {activeVideo.info}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
