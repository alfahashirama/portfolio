"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    demoUrl: null,   // ex. Hugging Face Space une fois publié
    repoUrl: null,   // ex. https://github.com/<vous>/chatbot-educatif
    confidential: false,
    title: "Chatbot éducatif multilingue",
    status: "En cours",
    statusColor: "#22d3ee",
    category: "IA & NLP",
    description: "Assistant IA qui répond à des questions à partir d’un corpus de documents. Fine-tuning d’un modèle Transformers sur un corpus malgache et français - la même approche s’applique à une base documentaire d’entreprise.",
    highlights: [
      "Fine-tuning BERT sur corpus malgache et français",
      "Gestion de données peu documentées",
      "Réutilisable comme chatbot de support client",
    ],
    tags: ["NLP", "HuggingFace", "PyTorch", "BERT", "Python"],
    icon: "🤖",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,94,166,0.1))",
    border: "rgba(6,182,212,0.3)",
  },
  {
    id: 2,
    demoUrl: null,
    repoUrl: null,
    confidential: false,
    title: "Système multi-agents IA",
    status: "Terminé",
    statusColor: "#4ade80",
    category: "Agents IA",
    description: "Trois agents IA spécialisés en pipeline : collecte d’informations, analyse, puis rédaction d’une synthèse. Orchestration de grands modèles de langage avec gestion des dépendances entre agents.",
    highlights: [
      "3 agents IA spécialisés en pipeline",
      "Orchestration de LLM avec LangChain",
      "Architecture réutilisable pour la veille et le reporting",
    ],
    tags: ["CrewAI", "LangChain", "LLaMA 3", "Python", "RAG"],
    icon: "🕸️",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,94,166,0.1))",
    border: "rgba(139,92,246,0.3)",
  },
  {
    id: 3,
    demoUrl: null,
    repoUrl: null,
    confidential: false,
    title: "Monitoring PostgreSQL",
    status: "Terminé",
    statusColor: "#4ade80",
    category: "Développement Web",
    description: "Application de monitoring et d’administration de bases de données PostgreSQL. Interface React Vite avec backend Spring Boot, tableaux de bord en temps réel et alertes automatiques.",
    highlights: [
      "Tableau de bord temps réel des métriques",
      "API REST Spring Boot sécurisée",
      "Alertes automatiques sur seuils critiques",
    ],
    tags: ["Spring Boot", "React Vite", "PostgreSQL", "Java", "REST API"],
    icon: "🗄️",
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(59,94,166,0.1))",
    border: "rgba(34,197,94,0.3)",
  },
  {
    id: 4,
    demoUrl: null,
    repoUrl: null,
    confidential: false,
    title: "Pipeline CI/CD automatisé",
    status: "Terminé",
    statusColor: "#4ade80",
    category: "DevOps",
    description: "Workflow complet de compilation, tests et déploiement déclenché automatiquement après chaque commit. Zéro intervention manuelle, réduction significative du cycle de livraison.",
    highlights: [
      "Déploiement automatique après chaque commit",
      "Conteneurisation Docker et GKE",
      "Infrastructure as Code avec Terraform",
    ],
    tags: ["GitHub Actions", "Docker", "Kubernetes", "GKE", "Terraform"],
    icon: "⚙️",
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12), rgba(59,94,166,0.1))",
    border: "rgba(251,146,60,0.3)",
  },
  {
    id: 5,
    demoUrl: null,
    repoUrl: null,
    confidential: false,
    title: "Analyse SOC et SIEM",
    status: "Terminé",
    statusColor: "#4ade80",
    category: "Cybersécurité",
    description: "Suivi d’événements de sécurité sur environnement simulé, corrélation de logs multi-sources et rédaction de rapports d’incidents. Ce sont ces réflexes que j’applique pour livrer des applications durcies.",
    highlights: [
      "Corrélation de logs multi-sources",
      "Rédaction de rapports d’incidents",
      "Valorisable pour infrastructures telecoms",
    ],
    tags: ["Splunk", "Linux", "SIEM", "SOC", "Analyse de logs"],
    icon: "🔐",
    gradient: "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(59,94,166,0.1))",
    border: "rgba(239,68,68,0.3)",
  },
  {
    id: 6,
    demoUrl: null,
    repoUrl: null,
    confidential: true,   // projet livré à l’Armée de l’Air
    title: "Application web de gestion logistique",
    status: "Terminé",
    statusColor: "#4ade80",
    category: "Développement Web",
    description: "Conception et développement complet d’une application web de gestion des ressources logistiques pour l’État-Major de l’Armée de l’Air. De la maquette jusqu’à la mise en production.",
    highlights: [
      "Développement full-stack en autonomie totale",
      "Déployé en production dans un environnement sécurisé",
      "Formation des utilisateurs finaux assurée",
    ],
    tags: ["Spring Boot", "JavaScript", "PostgreSQL", "HTML/CSS", "Linux"],
    icon: "🏛️",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,94,166,0.1))",
    border: "rgba(59,130,246,0.3)",
  },
];

const filters = ["Tous", "Développement Web", "IA & NLP", "Agents IA", "DevOps", "Cybersécurité"];

export default function Projects() {
  const [mounted,      setMounted]      = useState(false);
  const [visible,      setVisible]      = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [hoveredId,    setHoveredId]    = useState<number | null>(null);
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

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  if (!mounted) {
    return (
      <section id="projects" style={{ padding: "96px 0", backgroundColor: "#060d18" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>{"// projets"}</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Projets <span style={{ color: "#22d3ee" }}>Significatifs</span></h2>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={ref} style={{ padding: "96px 0", backgroundColor: "#060d18" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>{"// projets"}</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Projets <span style={{ color: "#22d3ee" }}>Significatifs</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
        </div>

        {/* Filters */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px",
          opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.1s",
        }}>
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} style={{
              padding: "8px 18px", borderRadius: "8px",
              fontSize: "13px", fontWeight: 500, cursor: "pointer",
              transition: "all 0.2s",
              backgroundColor: activeFilter === filter ? "#06b6d4" : "#112652",
              color: activeFilter === filter ? "#060d18" : "#94a3b8",
              border: `1px solid ${activeFilter === filter ? "#06b6d4" : "#1e3a70"}`,
            }}>
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease 0.2s",
        }}>
          {filtered.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: hoveredId === project.id ? "#0e1f3d" : "#0e1f3d",
                border: `1px solid ${hoveredId === project.id ? project.border : "#1e3a70"}`,
                borderRadius: "16px", padding: "28px",
                display: "flex", flexDirection: "column", gap: "16px",
                transition: "all 0.3s ease", cursor: "default",
                transform: hoveredId === project.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredId === project.id ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
                background: hoveredId === project.id ? project.gradient : "#0e1f3d",
              }}
            >
              {/* Top */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  backgroundColor: "rgba(6,182,212,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px",
                }}>
                  {project.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 600, padding: "3px 10px",
                    borderRadius: "9999px", fontFamily: "monospace",
                    backgroundColor: project.status === "En cours" ? "rgba(6,182,212,0.1)" : "rgba(74,222,128,0.1)",
                    color: project.statusColor,
                    border: `1px solid ${project.statusColor}33`,
                  }}>
                    {project.status}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace" }}>
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
                {project.title}
              </h3>

              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.7, flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#22d3ee", fontSize: "12px", flexShrink: 0, marginTop: "2px" }}>▸</span>
                    <span style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "11px", fontFamily: "monospace",
                    padding: "3px 10px", borderRadius: "9999px",
                    backgroundColor: "#1e3a70", color: "#22d3ee",
                    border: "1px solid #2d4d8e",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens : n'apparaissent que lorsqu'ils existent. */}
              {(project.demoUrl || project.repoUrl || project.confidential) && (
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center",
                  marginTop: "14px", paddingTop: "14px",
                  borderTop: "1px solid rgba(30,58,112,0.8)",
                }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12px", fontWeight: 600,
                        color: "#060d18", backgroundColor: "#06b6d4",
                        padding: "6px 14px", borderRadius: "7px", textDecoration: "none",
                      }}
                    >
                      ▶ Démo en ligne
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12px", fontWeight: 600,
                        color: "#22d3ee", border: "1px solid #1e3a70",
                        padding: "6px 14px", borderRadius: "7px", textDecoration: "none",
                      }}
                    >
                      ⌨ Code source
                    </a>
                  )}
                  {project.confidential && (
                    <span style={{
                      fontSize: "11.5px", color: "#94a3b8",
                      fontFamily: "var(--font-mono), monospace",
                    }}>
                      🔒 Projet confidentiel - démonstration sur demande
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}