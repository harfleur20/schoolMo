import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../Assets/logo_site_web.png";
import { WhatsAppIcon } from "./BrandIcons";
import {
  footerColumns,
  footerMetaLinks,
  navItems,
  socialLinks,
  whatsappBaseLink,
} from "../siteData";

const MotionDiv = motion.div;
const MotionHeader = motion.header;
const MotionNav = motion.nav;

function isExternalHref(href) {
  return (
    typeof href === "string" &&
    (href.startsWith("http") || href.startsWith("mailto:"))
  );
}

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 24 : false,
  );
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        const target = document.getElementById(location.hash.slice(1));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return;
    }

    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const handleMenuEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleMenuEscape);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleMenuEscape);
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <MotionDiv
        layout
        className={`site-header-shell ${isScrolled ? "is-scrolled" : ""}`}
        transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }}
      >
        <MotionHeader
          layout
          className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
            mass: 0.9,
          }}
        >
          <NavLink
            className="brand"
            to="/"
            aria-label="Retour à l'accueil"
            onClick={handleCloseMenu}
          >
            <img src={logo} alt="Logo SchoolMo" />
          </NavLink>

          {/* Nav desktop */}
          <nav className="site-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleCloseMenu}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              className="nav-cta"
              to="/accompagnement#diagnostic"
              onClick={handleCloseMenu}
            >
              Diagnostic gratuit
              <ArrowRight size={16} />
            </NavLink>
          </nav>

          {/* Burger */}
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="menu-toggle-box" aria-hidden="true">
              <span className="menu-toggle-line" />
              <span className="menu-toggle-line" />
              <span className="menu-toggle-line" />
            </span>
            <span className="menu-toggle-label">
              {menuOpen ? "Fermer" : "Menu"}
            </span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <MotionNav
                id="mobile-navigation"
                className="mobile-nav-dropdown"
                aria-label="Navigation mobile"
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mobile-nav-panel">
                  <div className="mobile-nav-list">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{
                          delay: index * 0.025,
                          duration: 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={handleCloseMenu}
                          className={({ isActive }) =>
                            `mobile-nav-link ${isActive ? "is-active" : ""}`
                          }
                        >
                          <span>{item.label}</span>
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>

                  <NavLink
                    className="mobile-nav-cta"
                    to="/accompagnement#diagnostic"
                    onClick={handleCloseMenu}
                  >
                    Diagnostic gratuit
                    <ArrowRight size={16} />
                  </NavLink>
                </div>
              </MotionNav>
            )}
          </AnimatePresence>
        </MotionHeader>
      </MotionDiv>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-brand-block">
            <img className="footer-logo" src={logo} alt="Logo SchoolMo" />
            <p className="footer-brand-text">
              <span className="footer-quote">
                "Une nouvelle chance de mieux faire... et d'aller plus loin."
              </span>
              <br />
              <span className="footer-motto">
                On ne vend pas du rêve. On construit des parcours.
              </span>
            </p>
            <div className="footer-contact-chips">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;

                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    title={socialLink.label}
                  >
                    <Icon className="footer-social-icon" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-columns">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className={`footer-column ${column.title === "Contact" ? "footer-contact-column" : ""}`}
              >
                <strong>{column.title}</strong>
                <div className="footer-links footer-links-column">
                  {column.links.map((link) =>
                    isExternalHref(link.href ?? link.path) ? (
                      <a
                        key={link.label}
                        href={link.href ?? link.path}
                        target={
                          (link.href ?? link.path).startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink key={link.label} to={link.path ?? link.href}>
                        {link.label}
                      </NavLink>
                    ),
                  )}
                </div>

                {column.title === "Contact" ? (
                  <a
                    className="footer-cta-card"
                    href={whatsappBaseLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="footer-cta-head">
                      <div className="footer-whatsapp-badge" aria-hidden="true">
                        <WhatsAppIcon className="footer-whatsapp-badge-icon" />
                      </div>
                      <div className="footer-cta-copy">
                        <strong>Communauté WhatsApp</strong>
                        <span>+100 membres actifs</span>
                      </div>
                    </div>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section-shell">
            <p>© {currentYear} SchoolMo. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              {footerMetaLinks.map((link) => (
                <NavLink key={link.label} to={link.path}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
