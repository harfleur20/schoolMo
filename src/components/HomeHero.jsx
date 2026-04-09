import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import siteIcon from '../../Assets/icon.png'
import { credibilityStats, heroSlides, whatsappBaseLink } from '../siteData'

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)

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

  return (
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
                      <NavLink className="btn btn-primary" to="/accompagnement#diagnostic">
                        Demarrer mon diagnostic
                        <ArrowRight size={18} />
                      </NavLink>
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
                animate={index === activeSlide ? { x: 8, opacity: 1 } : { x: 0, opacity: 0.72 }}
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
                  animate={index === activeSlide ? { opacity: 1, scale: 1.12 } : { opacity: 0.42, scale: 1 }}
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
              <div className="credibility-icon" aria-hidden="true">
                <stat.icon size={26} />
              </div>
              <AnimatedStatValue stat={stat} />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedStatValue({ stat }) {
  const [displayValue, setDisplayValue] = useState(() => (typeof stat.countValue === 'number' ? 0 : stat.value))
  const valueRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (typeof stat.countValue !== 'number') {
      return undefined
    }

    const node = valueRef.current

    if (!node) {
      return undefined
    }

    let frameId = 0
    const duration = 1400
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return
        }

        hasAnimatedRef.current = true
        const startTime = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setDisplayValue(Math.round(stat.countValue * eased))

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick)
          }
        }

        frameId = window.requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.55 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frameId)
    }
  }, [stat.countValue, stat.value])

  const formattedValue =
    typeof stat.countValue === 'number'
      ? `${stat.prefix ?? ''}${new Intl.NumberFormat('fr-FR')
          .format(displayValue)
          .replace(/\u202f/g, ' ')}${stat.suffix ?? ''}`
      : stat.value

  return (
    <strong ref={valueRef}>
      {formattedValue}
    </strong>
  )
}
