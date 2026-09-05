"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "web",
    icon: "💻",
    title: "Développement Web Full-Stack",
    pitch:
      "Applications métier, tableaux de bord et sites sur mesure, de la maquette à la mise en production.",
    deliverables: [
      "Application web complète (front + back + base de données)",
      "API REST documentée et sécurisée",
      "Interface responsive, testée sur mobile et desktop",
      "Reprise et modernisation d’une application existante",
    ],
    stack: ["React", "Next.js", "TypeScript", "Spring Boot", "Python", "PostgreSQL"],
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,94,166,0.08))",
  },
  {
    id: "ia",
    icon: "🤖",
    title: "Solutions IA & Chatbots",
    pitch:
      "Des modèles de langage mis au service d’un besoin concret : répondre, trier, extraire, résumer.",
    deliverables: [
      "Chatbot entraîné sur vos propres documents (RAG)",
      "Moteur de recherche sémantique interne",
      "Extraction et classification automatique de documents",
      "Fine-tuning d’un modèle sur votre domaine métier",
    ],
    stack: ["Python", "PyTorch", "HuggingFace", "LangChain", "RAG", "LLaMA 3"],
    color: "#a855f7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(59,94,166,0.08))",
  },
  {
    id: "agents",
    icon: "🕸️",
    title: "Agents IA & Automatisation",
    pitch:
      "J’automatise les tâches répétitives qui consomment vos heures : veille, reporting, traitement de données.",
    deliverables: [
      "Agents IA spécialisés orchestrés en pipeline",
      "Workflows automatisés n8n connectés à vos outils",
      "Génération automatique de rapports et de synthèses",
      "Intégration aux API que vous utilisez déjà",
    ],
    stack: ["CrewAI", "LangChain", "n8n", "Python", "API REST"],
    color: "#4ade80",
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(59,94,166,0.08))",
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "Déploiement & Sécurisation",
    pitch:
      "Votre projet mis en ligne proprement, avec des déploiements automatisés et une application durcie.",
    deliverables: [
      "Conteneurisation Docker et mise en production cloud",
      "Pipeline CI/CD : test et déploiement à chaque commit",
      "Revue de sécurité applicative et gestion des accès",
      "Supervision, journalisation et alertes",
    ],
    stack: ["Docker", "Kubernetes", "GitHub Actions", "GCP", "Terraform", "Linux"],
    color: "#fb923c",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.15), rgba(59,94,166,0.08))",
  },
];

const process = [
  {
    step: "01",
    title: "Échange gratuit",
    desc: "30 minutes en visio pour comprendre votre besoin, votre contexte et vos contraintes.",
  },
  {
    step: "02",
    title: "Devis détaillé",
    desc: "Périmètre écrit, livrables, planning et prix fixe. Vous savez exactement ce que vous achetez.",
  },
  {
    step: "03",
    title: "Développement itératif",
    desc: "Livraisons régulières et démonstrations, pour ajuster au fil de l’eau plutôt qu’à la fin.",
  },
  {
    step: "04",
    title: "Livraison & suivi",
    desc: "Mise en production, documentation, transfert de compétences et garantie corrective.",
  },
];

const modalities = [
  { icon: "🌍", label: "Télétravail",   value: "100 % à distance, clients francophones" },
  { icon: "🕐", label: "Fuseau",         value: "UTC+3 - chevauche la journée française" },
  { icon: "💬", label: "Langues",        value: "Français, anglais, malgache" },
  { icon: "📄", label: "Tarification",   value: "Sur devis - forfait ou régie" },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
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
    backgroundColor: "#070e1f",
  };

  if (!mounted) {
    return (
      <section id="services" style={sectionStyle}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>
            {"// prestations"}
          </p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>
            Comment je peux vous <span style={{ color: "#22d3ee" }}>aider</span>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="services" ref={ref} style={sectionStyle}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{
            color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em",
            textTransform: "uppercase", fontFamily: "var(--font-mono), monospace",
            marginBottom: "8px",
          }}>
            {"// prestations"}
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700,
            color: "#ffffff", marginBottom: "12px",
          }}>
            Comment je peux vous <span style={{ color: "#22d3ee" }}>aider</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px", marginBottom: "20px" }} />
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8, maxWidth: "680px" }}>
            Je travaille en freelance avec des entreprises et des indépendants francophones.
            Chaque mission démarre par un échange gratuit et un devis écrit :
            périmètre, livrables et prix fixés avant la première ligne de code.
          </p>
        </div>

        {/* Cartes prestations */}
        <div style={{
          display: "grid",
          // 4 prestations : en 3 colonnes la dernière carte reste seule avec deux
          // emplacements vides. `min(100%, 460px)` force 2 colonnes sur desktop,
          // soit une grille 2×2 équilibrée, et 1 colonne sur mobile.
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: "24px",
          marginBottom: "64px",
        }}>
          {services.map((s, i) => {
            const hovered = hoveredId === s.id;
            return (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: s.gradient,
                  backgroundColor: "#112652",
                  border: `1px solid ${hovered ? s.color : "#1e3a70"}`,
                  borderRadius: "14px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? hovered ? "translateY(-4px)" : "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                  boxShadow: hovered ? `0 12px 32px rgba(0,0,0,0.35), 0 0 24px ${s.color}22` : "none",
                }}
              >
                {/* En-tête carte */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    backgroundColor: `${s.color}1a`,
                    border: `1px solid ${s.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "24px", flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                </div>

                <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                  {s.pitch}
                </p>

                {/* Livrables */}
                <p style={{
                  color: s.color, fontSize: "11px", fontFamily: "var(--font-mono), monospace",
                  textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px",
                }}>
                  Ce que vous obtenez
                </p>
                <div style={{ marginBottom: "20px", flex: 1 }}>
                  {s.deliverables.map((d, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ color: s.color, fontSize: "13px", flexShrink: 0, lineHeight: 1.6 }}>▸</span>
                      <span style={{ fontSize: "13.5px", color: "#cbd5e1", lineHeight: 1.6 }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {s.stack.map((t) => (
                    <span key={t} style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono), monospace",
                      color: "#94a3b8",
                      backgroundColor: "rgba(30,58,112,0.6)",
                      border: "1px solid #2d4d8e",
                      borderRadius: "9999px",
                      padding: "3px 10px",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Pied de carte */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(30,58,112,0.8)",
                }}>
                  <span style={{
                    fontSize: "12px", color: "#94a3b8",
                    fontFamily: "var(--font-mono), monospace",
                  }}>
                    Tarif : sur devis
                  </span>
                  <a
                    href="#contact"
                    style={{
                      fontSize: "13px", fontWeight: 600,
                      color: hovered ? "#060d18" : s.color,
                      backgroundColor: hovered ? s.color : "transparent",
                      border: `1px solid ${s.color}`,
                      borderRadius: "7px",
                      padding: "7px 16px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Processus */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease 0.4s",
          marginBottom: "56px",
        }}>
          <h3 style={{
            fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 700,
            color: "#ffffff", marginBottom: "8px", textAlign: "center",
          }}>
            Comment se déroule une <span style={{ color: "#22d3ee" }}>mission</span>
          </h3>
          <p style={{
            color: "#94a3b8", fontSize: "14px", textAlign: "center",
            marginBottom: "36px", maxWidth: "560px", margin: "0 auto 36px",
          }}>
            Un cadre simple et prévisible, du premier échange jusqu’à la livraison.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}>
            {process.map((p) => (
              <div key={p.step} style={{
                backgroundColor: "#0a1628",
                border: "1px solid #1e3a70",
                borderRadius: "12px",
                padding: "22px",
                position: "relative",
                overflow: "hidden",
              }}>
                <span style={{
                  position: "absolute", top: "10px", right: "14px",
                  fontSize: "40px", fontWeight: 800,
                  color: "rgba(6,182,212,0.08)",
                  fontFamily: "var(--font-mono), monospace",
                  lineHeight: 1,
                }}>
                  {p.step}
                </span>
                <p style={{
                  color: "#22d3ee", fontSize: "11px",
                  fontFamily: "var(--font-mono), monospace",
                  marginBottom: "10px", letterSpacing: "0.1em",
                }}>
                  ÉTAPE {p.step}
                </p>
                <h4 style={{ color: "#ffffff", fontWeight: 600, fontSize: "15px", marginBottom: "8px" }}>
                  {p.title}
                </h4>
                <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modalités de collaboration */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          padding: "28px",
          borderRadius: "14px",
          backgroundColor: "rgba(6,182,212,0.04)",
          border: "1px solid rgba(6,182,212,0.2)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease 0.5s",
        }}>
          {modalities.map((m) => (
            <div key={m.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "20px", flexShrink: 0, lineHeight: 1.3 }}>{m.icon}</span>
              <div>
                <p style={{
                  color: "#22d3ee", fontSize: "11px",
                  fontFamily: "var(--font-mono), monospace",
                  textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px",
                }}>
                  {m.label}
                </p>
                <p style={{ color: "#cbd5e1", fontSize: "13.5px", lineHeight: 1.5 }}>{m.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
