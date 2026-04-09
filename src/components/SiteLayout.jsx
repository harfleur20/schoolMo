import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../Assets/logo_site_web.png";
import { WhatsAppIcon } from "./BrandIcons";
import {
  footerColumns,
  footerMetaLinks,
  navItems,
  socialLinks,
  whatsappBaseLink,
} from "../siteData";

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

  return (
    <div className="site-shell">
      <motion.div
        layout
        className={`site-header-shell ${isScrolled ? "is-scrolled" : ""}`}
        transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.9 }}
      >
        <motion.header
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
            aria-label="Retour a l accueil"
            onClick={handleCloseMenu}
          >
            <img src={logo} alt="Logo SchoolMo" />
          </NavLink>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
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

          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.header>
      </motion.div>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-layout">
          <div className="footer-brand-block">
            <img className="footer-logo" src={logo} alt="Logo SchoolMo" />
            <p className="footer-brand-text">
              "Une nouvelle chance de mieux faire... et d'aller plus loin."
              <br />
              On ne vend pas du rêve. On construit des parcours.
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
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
