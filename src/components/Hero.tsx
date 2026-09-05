"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const titles = [
  "Ingénieur informatique",
  "Développeur Full-Stack",
  "Ingénieur IA — ML, DL, NLP",
  "Freelance en télétravail",
];

export default function Hero() {
  const [mounted,    setMounted]    = useState(false);
  const [displayed,  setDisplayed]  = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting,   setDeleting]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = titles[titleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }
  }, [mounted, displayed, deleting, titleIndex]);

  const stats = [
    { value: "6+",  label: "Projets livrés" },
    { value: "5+",  label: "Certifications" },
    { value: "2+",  label: "Ans en IA" },
    { value: "FR",  label: "Français courant" },
  ];

  const sectionStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #060d18 0%, #0a1628 60%, #112652 100%)",
  };

  if (!mounted) {
    return (
      <section id="hero" style={sectionStyle}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "#ffffff" }}>
            Nasandratra <span style={{ color: "#22d3ee" }}>Alfa</span>
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" style={sectionStyle}>

      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.08,
        backgroundImage: "linear-gradient(#1e3a70 1px, transparent 1px), linear-gradient(90deg, #1e3a70 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      {/* Orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "400px", height: "400px", borderRadius: "50%",
        backgroundColor: "rgba(6,182,212,0.07)", filter: "blur(80px)",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%",
        width: "300px", height: "300px", borderRadius: "50%",
        backgroundColor: "rgba(59,94,166,0.1)", filter: "blur(60px)",
      }} />

      {/* Content — two columns */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1100px", margin: "0 auto",
        padding: "120px 24px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        flexWrap: "wrap",
      }}>

        {/* LEFT — Text */}
        <div style={{ flex: "1", minWidth: "280px", maxWidth: "580px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "8px 20px", borderRadius: "9999px",
            border: "1px solid rgba(74,222,128,0.4)",
            backgroundColor: "rgba(74,222,128,0.06)",
            color: "#4ade80", fontSize: "14px",
            fontFamily: "var(--font-mono), monospace",
            marginBottom: "28px",
          }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              backgroundColor: "#4ade80",
              animation: "pulse 2s infinite",
              flexShrink: 0,
            }} />
            Disponible pour vos projets freelance
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}>
            Nasandratra{" "}
            <span style={{ color: "#22d3ee" }}>Alfa</span>
          </h1>

          {/* Typewriter */}
          <div style={{ height: "44px", display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <p style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "#94a3b8",
              fontFamily: "var(--font-mono), monospace",
            }}>
              {displayed}
              <span style={{
                display: "inline-block", width: "2px", height: "1.2em",
                backgroundColor: "#22d3ee", marginLeft: "3px",
                verticalAlign: "middle", animation: "pulse 1s infinite",
              }} />
            </p>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "1rem", color: "#94a3b8",
            marginBottom: "32px", lineHeight: 1.8, maxWidth: "500px",
          }}>
            Ingénieur informatique, je conçois et développe des{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>applications web sur mesure</span>{" "}
            et des solutions d’
            <span style={{ color: "#22d3ee", fontWeight: 500 }}>intelligence artificielle</span>{" "}
            — chatbots, agents IA et automatisation — de la maquette à la mise en production.
            Je travaille <span style={{ color: "#ffffff", fontWeight: 600 }}>à distance</span>{" "}
            avec des clients francophones.
          </p>

          {/* Buttons */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "14px",
            alignItems: "center", marginBottom: "40px",
          }}>
            <a href="#contact" style={{
              backgroundColor: "#06b6d4", color: "#060d18",
              fontWeight: 700, padding: "13px 28px",
              borderRadius: "8px", textDecoration: "none",
              fontSize: "14px", transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#22d3ee"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#06b6d4"; }}
            >
              Discutons de votre projet
            </a>
            <a href="#services" style={{
              border: "1px solid #06b6d4", color: "#22d3ee",
              fontWeight: 700, padding: "13px 28px",
              borderRadius: "8px", textDecoration: "none",
              fontSize: "14px", transition: "all 0.2s",
              display: "inline-block", backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#06b6d4";
              el.style.color = "#060d18";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#22d3ee";
            }}
            >
              Mes prestations
            </a>
            <a href="#projects" style={{
              border: "1px solid #475569", color: "#94a3b8",
              fontWeight: 700, padding: "13px 28px",
              borderRadius: "8px", textDecoration: "none",
              fontSize: "14px", transition: "all 0.2s",
              display: "inline-block", backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#94a3b8";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#475569";
              el.style.color = "#94a3b8";
            }}
            >
              Voir mes réalisations
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: "28px", flexWrap: "wrap",
            paddingTop: "24px",
            borderTop: "1px solid #1e3a70",
          }}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#22d3ee", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          flexShrink: 0,
        }}>

          {/* Photo container */}
          <div style={{ position: "relative" }}>

            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: "-4px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #06b6d4, #3b5ea6, #06b6d4)",
              animation: "spin 6s linear infinite",
              zIndex: 0,
            }} />

            {/* White gap ring */}
            <div style={{
              position: "absolute", inset: "-2px",
              borderRadius: "50%",
              backgroundColor: "#060d18",
              zIndex: 1,
            }} />

            {/* Photo circle */}
            <div style={{
              position: "relative", zIndex: 2,
              width: "220px", height: "220px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(6,182,212,0.3)",
            }}>
              <Image
                src="/photo-alfa.jpg"
                alt="RAMANATENANIAVO Nasandratra Alfa, développeur freelance full-stack et IA"
                width={220}
                height={220}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                priority
              />
            </div>

            {/* Badge flottant */}
            <div style={{
              position: "absolute", bottom: "8px", right: "-8px", zIndex: 3,
              backgroundColor: "#06b6d4",
              color: "#060d18",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 12px",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(6,182,212,0.4)",
            }}>
              Ingénieur · Full-Stack & IA
            </div>
          </div>

          {/* Social links sous la photo */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { href: "https://github.com/", text: "GitHub" },
              { href: "https://linkedin.com/", text: "LinkedIn" },
              { href: "mailto:alfahashirama@gmail.com", text: "Email" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  color: "#64748b", textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono), monospace",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "1px solid #1e3a70",
                  transition: "all 0.2s",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#22d3ee";
                  el.style.borderColor = "#06b6d4";
                  el.style.backgroundColor = "rgba(6,182,212,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#64748b";
                  el.style.borderColor = "#1e3a70";
                  el.style.backgroundColor = "transparent";
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Spin keyframe */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
