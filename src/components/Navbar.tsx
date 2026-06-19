"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about",          labelFr: "A propos",       label: "About" },
  { href: "#skills",         labelFr: "Competences",    label: "Skills" },
  { href: "#projects",       labelFr: "Projets",        label: "Projects" },
  { href: "#certifications", labelFr: "Certifications", label: "Certifications" },
  { href: "#contact",        labelFr: "Contact",        label: "Contact" },
];

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: "16px 0",
    backgroundColor: "rgba(6, 13, 24, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(30, 58, 112, 0.6)",
    transition: "all 0.3s ease",
  },
  navScrolled: {
    padding: "10px 0",
    backgroundColor: "rgba(6, 13, 24, 0.97)",
    boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
  },
  inner: {
    maxWidth: "1152px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "var(--font-mono), monospace",
  },
  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },
  link: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#94a3b8",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  langBtn: {
    fontSize: "12px",
    fontFamily: "var(--font-mono), monospace",
    padding: "4px 12px",
    borderRadius: "9999px",
    border: "1px solid #06b6d4",
    color: "#22d3ee",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.2s",
  },
};

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [lang,      setLang]      = useState("fr");
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  const navStyle = { ...styles.nav, ...(scrolled ? styles.navScrolled : {}) };

  if (!mounted) {
    return (
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <span style={styles.logo}>
            {"<"}Alfa<span style={{ color: "#22d3ee" }}>/</span>{">"}
          </span>
        </div>
      </nav>
    );
  }

  return (
    <nav style={navStyle}>
      <div style={styles.inner}>

        {/* Logo */}
        <a href="#" style={styles.logo}>
          {"<"}Alfa<span style={{ color: "#22d3ee" }}>/</span>{">"}
        </a>

        {/* Desktop Links - hidden on mobile */}
        <div style={styles.desktopLinks} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={styles.link}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8"; }}
            >
              {lang === "fr" ? link.labelFr : link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={styles.right}>
          <button
            style={styles.langBtn}
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#06b6d4";
              el.style.color = "#060d18";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#22d3ee";
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            aria-label="Menu"
          >
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{
                display: "block", height: "2px", backgroundColor: "#cbd5e1", borderRadius: "2px",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
                transition: "all 0.3s",
              }} />
              <span style={{
                display: "block", height: "2px", backgroundColor: "#cbd5e1", borderRadius: "2px",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.3s",
              }} />
              <span style={{
                display: "block", height: "2px", backgroundColor: "#cbd5e1", borderRadius: "2px",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                transition: "all 0.3s",
              }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          padding: "16px 24px 24px",
          backgroundColor: "rgba(6, 13, 24, 0.99)",
          borderTop: "1px solid #1e3a70",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ ...styles.link, fontSize: "15px" }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8"; }}
            >
              {lang === "fr" ? link.labelFr : link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}