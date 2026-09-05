"use client";

import { useState, useEffect, useRef } from "react";

const infos = [
  { label: "Nom",          value: "RAMANATENANIAVO Nasandratra Alfa" },
  { label: "Statut",       value: "Ingénieur informatique · freelance" },
  { label: "Email",        value: "alfahashirama@gmail.com" },
  { label: "Téléphone",    value: "+261 34 78 284 05" },
  { label: "Basé à",       value: "Fianarantsoa, Madagascar - 100 % à distance" },
  { label: "Spécialités",  value: "Full-stack · IA (ML, DL, NLP) · MLOps" },
  { label: "Disponible",   value: "Immédiatement - missions courtes ou longues" },
];

const highlights = [
  {
    icon: "💻",
    title: "Développement full-stack",
    desc: "Applications web complètes en React, Next.js, Spring Boot et Python, livrées jusqu’à la mise en production.",
  },
  {
    icon: "🤖",
    title: "Intelligence artificielle",
    desc: "Deux ans en machine learning, NLP et IA générative : chatbots, RAG et agents autonomes avec PyTorch et HuggingFace.",
  },
  {
    icon: "⚙️",
    title: "Automatisation & déploiement",
    desc: "Pipelines CI/CD avec GitHub Actions, workflows n8n, conteneurisation Docker et déploiement cloud.",
  },
  {
    icon: "🔐",
    title: "Sécurité applicative",
    desc: "Un atout en plus : analyse SIEM, gestion des accès et revue de sécurité pour livrer des applications durcies.",
  },
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
    padding: "72px 0",
    backgroundColor: "#060d18",
  };

  if (!mounted) {
    return (
      <section id="about" style={sectionStyle}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>{"// à propos"}</p>
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
            {"// à propos"}
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
              Je suis <strong style={{ color: "#ffffff" }}>ingénieur informatique</strong>, spécialisé en
              <strong style={{ color: "#ffffff" }}> développement full-stack</strong> et en
              <strong style={{ color: "#ffffff" }}> intelligence artificielle</strong> (ML, DL, NLP).
              En freelance, j’accompagne des entreprises et des indépendants
              francophones qui ont besoin d’une application sur mesure ou qui veulent intégrer
              concrètement l’IA dans leurs outils - sans jargon et sans usine à gaz.
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
              J’ai développé et mis en production, <strong style={{ color: "#ffffff" }}>en autonomie complète</strong>,
              une application de gestion logistique pour l’État-Major de l’Armée de l’Air : de la maquette
              au déploiement, jusqu’à la formation des utilisateurs. C’est cette même exigence que
              j’apporte à chaque mission.
            </p>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "36px", fontSize: "15px" }}>
              Côté IA, je travaille depuis deux ans sur le{" "}
              <span style={{ color: "#22d3ee" }}>machine learning, le deep learning et le NLP</span> :
              chatbots entraînés sur des documents métier, pipelines RAG, agents autonomes et
              automatisation de tâches répétitives. Je choisis toujours la solution la plus simple
              qui résout le problème - un modèle sur mesure quand il le faut, une règle bien écrite
              quand cela suffit.
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
                {"// référence client"}
              </p>
              <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>Développeur applicatif</p>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>État-Major de l’Armée de l’Air, Antananarivo</p>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "8px", lineHeight: 1.6 }}>
                Application web de gestion logistique livrée de la maquette à la mise en production,
                en autonomie complète, dans un environnement sécurisé - formation des utilisateurs incluse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}