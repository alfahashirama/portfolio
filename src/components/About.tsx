"use client";

import { useState, useEffect, useRef } from "react";

const infos = [
  { label: "Nom",          value: "RAMANATENANIAVO Nasandratra Alfa" },
  { label: "Email",        value: "alfahashirama@gmail.com" },
  { label: "Tel",          value: "034 78 284 05" },
  { label: "Localisation", value: "Fianarantsoa, Madagascar" },
  { label: "Formation",    value: "Master 2 Informatique, ENI Fianarantsoa" },
  { label: "Disponible",   value: "Immediatement, duree flexible" },
];

const highlights = [
  { icon: "🤖", title: "Intelligence Artificielle", desc: "2 ans en ML, Deep Learning, NLP et Generative AI avec PyTorch et HuggingFace." },
  { icon: "🔐", title: "Cybersecurite", desc: "Analyse SOC, SIEM avec Splunk, detection d intrusions et rapports d incidents." },
  { icon: "⚙️", title: "Automatisation", desc: "Pipelines CI/CD avec GitHub Actions, workflows n8n et deploiement MLOps." },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted]);

  const sectionStyle: React.CSSProperties = {
    padding: "96px 0",
    backgroundColor: "#060d18",
  };

  if (!mounted) {
    return (
      <section id="about" style={sectionStyle}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>// a propos</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Qui suis-<span style={{ color: "#22d3ee" }}>je</span> ?</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="about" ref={ref} style={sectionStyle}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
            // a propos
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Qui suis-<span style={{ color: "#22d3ee" }}>je</span> ?
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "start",
        }}>

          {/* Left */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s ease 0.2s",
          }}>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
              Etudiant en <strong style={{ color: "#ffffff" }}>Master 2 Informatique</strong> a l ENI Fianarantsoa,
              je me forme a l intelligence artificielle depuis deux ans, d abord en autodidacte puis via
              une formation structuree chez <span style={{ color: "#22d3ee" }}>Arato Fianarantsoa</span>.
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
              Je construis actuellement un <strong style={{ color: "#ffffff" }}>chatbot educatif multilingue</strong>,
              fine-tune sur des textes malgache et francais — un defi technique rarement documente.
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "36px", fontSize: "15px" }}>
              Je cherche un <span style={{ color: "#22d3ee" }}>emploi junior</span> ou je touche a de vrais enjeux :
              analyse de donnees, automatisation intelligente et amelioration de l experience utilisateur.
            </p>

            {/* Info list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {infos.map((info, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", fontSize: "14px" }}>
                  <span style={{ color: "#22d3ee", fontFamily: "var(--font-mono), monospace", minWidth: "110px", flexShrink: 0 }}>
                    {info.label}:
                  </span>
                  <span style={{ color: "#cbd5e1" }}>{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "16px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s ease 0.3s",
          }}>
            {highlights.map((item, i) => (
              <div key={i} style={{
                backgroundColor: "#112652",
                border: "1px solid #1e3a70",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                transition: "border-color 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#06b6d4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1e3a70"; }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  backgroundColor: "rgba(6,182,212,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "6px", fontSize: "15px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Experience */}
            <div style={{
              padding: "20px", borderRadius: "12px",
              backgroundColor: "rgba(6,182,212,0.04)",
              border: "1px solid rgba(6,182,212,0.2)",
            }}>
              <p style={{ color: "#22d3ee", fontSize: "11px", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
                // experience professionnelle
              </p>
              <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>Developpeur Applicatif</p>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>Etat-Major de l Armee de l Air, Antananarivo</p>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "8px", lineHeight: 1.6 }}>
                Application web de gestion logistique de la maquette jusqu a la mise en production, en totale autonomie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}