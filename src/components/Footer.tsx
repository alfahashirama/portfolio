"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [year,    setYear]    = useState(2025);

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  const links = [
    { href: "#services",       label: "Prestations" },
    { href: "#about",          label: "À propos" },
    { href: "#skills",         label: "Compétences" },
    { href: "#projects",       label: "Réalisations" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact",        label: "Devis gratuit" },
  ];

  if (!mounted) {
    return (
      <footer style={{ backgroundColor: "#030a14", borderTop: "1px solid #1e3a70", padding: "40px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#334155", fontSize: "13px" }}>
            RAMANATENANIAVO Nasandratra Alfa
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{
      backgroundColor: "#030a14",
      borderTop: "1px solid #1e3a70",
      padding: "56px 0 32px",
    }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}>

          {/* Brand */}
          <div>
            <div style={{
              fontSize: "22px", fontWeight: 800, color: "#ffffff",
              fontFamily: "var(--font-mono), monospace", marginBottom: "12px",
            }}>
              {"<"}Alfa<span style={{ color: "#22d3ee" }}>/</span>{">"}
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, maxWidth: "240px" }}>
              Ingénieur informatique freelance - full-stack et IA.
              J’accompagne des clients francophones, 100 % à distance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "12px", color: "#22d3ee", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "13px", color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748b"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <p style={{ fontSize: "12px", color: "#22d3ee", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "alfahashirama@gmail.com", href: "mailto:alfahashirama@gmail.com" },
                { label: "+261 34 78 284 05", href: "https://wa.me/261347828405" },
                { label: "Fianarantsoa, Madagascar - 100 % à distance", href: null },
              ].map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    style={{ fontSize: "13px", color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748b"; }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <p key={i} style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>{item.label}</p>
                )
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <p style={{ fontSize: "12px", color: "#22d3ee", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>
              Stack principal
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["Next.js", "React", "TypeScript", "Spring Boot", "Python", "PyTorch", "LangChain", "Docker"].map((t, i) => (
                <span key={i} style={{
                  fontSize: "11px", fontFamily: "monospace",
                  padding: "3px 10px", borderRadius: "9999px",
                  backgroundColor: "#112652", color: "#22d3ee",
                  border: "1px solid #1e3a70",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #1e3a70", paddingTop: "24px" }}>
          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center",
            gap: "12px",
          }}>
            <p style={{ fontSize: "13px", color: "#334155" }}>
              © {year} RAMANATENANIAVO Nasandratra Alfa. Tous droits réservés.
            </p>
            <p style={{ fontSize: "12px", color: "#1e3a70", fontFamily: "monospace" }}>
              Built with Next.js + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}