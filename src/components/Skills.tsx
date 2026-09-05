"use client";

import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    id: "dev",
    preuve: "Application de gestion logistique livrée en production pour l’État-Major de l’Armée de l’Air, et interface de monitoring PostgreSQL en React et Spring Boot.",
    title: "Développement Full-Stack",
    icon: "💻",
    skills: [
      "Python & Flask",
      "Java & Spring Boot",
      "JavaScript & Express.js",
      "TypeScript & React",
      "Next.js & React 19",
      "API REST & JSON",
    ],
  },
  {
    id: "ai",
    preuve: "Anonymiseur RGPD accessible en ligne : CamemBERT exécuté dans le navigateur pour détecter et masquer les données personnelles d’un document français.",
    title: "Intelligence Artificielle",
    icon: "🤖",
    skills: [
      "Machine Learning",
      "Deep Learning (CNN, RNN)",
      "NLP & Transformers",
      "Generative AI & LLM",
      "PyTorch & TensorFlow",
      "HuggingFace & BERT",
    ],
  },
  {
    id: "agents",
    preuve: "Système de trois agents spécialisés en pipeline (collecte, analyse, synthèse), orchestré avec LangChain et CrewAI.",
    title: "Agents IA & MLOps",
    icon: "⚙️",
    skills: [
      "LangChain & CrewAI",
      "LLaMA 3",
      "RAG & Prompt Engineering",
      "Automatisation n8n",
      "MLOps & Déploiement",
      "Pipelines ML",
    ],
  },
  {
    id: "db",
    preuve: "PostgreSQL en production sur deux applications, dont une avec tableau de bord temps réel et alertes sur seuils critiques.",
    title: "Bases de données",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Conception de BDD",
      "Optimisation de requêtes",
      "Administration de BDD",
    ],
  },
  {
    id: "devops",
    preuve: "Pipeline complet de compilation, tests et déploiement déclenché à chaque commit, conteneurisé avec Docker et déployé sur GKE.",
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker & Docker Hub",
      "Kubernetes & GKE",
      "Terraform",
      "GitHub Actions CI/CD",
      "Artifact Registry GCP",
      "Administration Linux",
    ],
  },
  {
    id: "cyber",
    preuve: "Analyse d’événements de sécurité sur environnement simulé, corrélation de logs Splunk multi-sources et rédaction de rapports d’incidents.",
    title: "Cybersécurité",
    icon: "🔐",
    skills: [
      "Analyse SOC & SIEM",
      "Splunk",
      "Analyse de logs",
      "Détection d’intrusions",
      "Windows Server & AD",
      "GPO & Gestion des accès",
    ],
  },
  {
    id: "admin",
    preuve: "Déploiement et exploitation des applications livrées, sous Linux comme sous Windows Server avec Active Directory.",
    title: "Administration système",
    icon: "🖥️",
    skills: [
      "Windows Server",
      "Active Directory",
      "GPO (Group Policy)",
      "Gestion utilisateurs",
      "Gestion des accès",
      "Linux Administration",
    ],
  },
];

const techStack = [
  "Python", "Flask", "PyTorch", "TensorFlow", "HuggingFace",
  "LangChain", "CrewAI", "LLaMA 3", "n8n", "RAG",
  "Java", "Spring Boot", "JavaScript", "TypeScript", "React", "Next.js", "React Vite", "Express.js",
  "Docker", "Kubernetes", "GKE", "Terraform", "Artifact Registry", "Docker Hub",
  "PostgreSQL", "MySQL", "MongoDB",
  "Splunk", "SIEM", "Linux", "Git", "GitHub Actions", "CI/CD",
  "Windows Server", "Active Directory", "GPO",
];

export default function Skills() {
  const [mounted,   setMounted]   = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [activeTab, setActiveTab] = useState("dev");
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

  const activeCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  if (!mounted) {
    return (
      <section id="skills" style={{ padding: "72px 0", backgroundColor: "#070e1f" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>{"// compétences"}</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Mes <span style={{ color: "#22d3ee" }}>compétences</span></h2>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" ref={ref} style={{ padding: "72px 0", backgroundColor: "#070e1f" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
            {"// compétences"}
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Mes <span style={{ color: "#22d3ee" }}>compétences</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px",
          opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.1s",
        }}>
          {skillCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveTab(cat.id)} style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "10px 16px", borderRadius: "8px",
              fontSize: "13px", fontWeight: 500, cursor: "pointer",
              transition: "all 0.2s",
              backgroundColor: activeTab === cat.id ? "#06b6d4" : "#112652",
              color: activeTab === cat.id ? "#060d18" : "#94a3b8",
              border: `1px solid ${activeTab === cat.id ? "#06b6d4" : "#1e3a70"}`,
            }}>
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Contenu de la catégorie active.
            Les barres de progression en pourcentage ont été retirées : un niveau
            auto-déclaré n'est ni mesurable ni vérifiable, et « 80 % » ne dit rien
            à un client. À la place, la preuve : le projet réel où ces technologies
            ont servi. */}
        <div style={{
          backgroundColor: "#0e1f3d",
          border: "1px solid #1e3a70",
          borderRadius: "14px",
          padding: "28px",
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease 0.2s",
        }}>
          <h3 style={{
            color: "#ffffff", fontWeight: 700, fontSize: "17px",
            marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span style={{ fontSize: "20px" }}>{activeCategory.icon}</span>
            {activeCategory.title}
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
            {activeCategory.skills.map((nom) => (
              <span key={nom} style={{
                fontSize: "13px",
                fontFamily: "var(--font-mono), monospace",
                padding: "6px 14px",
                borderRadius: "8px",
                backgroundColor: "#112652",
                color: "#cbd5e1",
                border: "1px solid #2d4d8e",
              }}>
                {nom}
              </span>
            ))}
          </div>

          <div style={{
            display: "flex", gap: "12px", alignItems: "flex-start",
            paddingTop: "18px", borderTop: "1px solid #1e3a70",
          }}>
            <span style={{
              color: "#22d3ee", fontSize: "11px",
              fontFamily: "var(--font-mono), monospace",
              textTransform: "uppercase", letterSpacing: "0.1em",
              flexShrink: 0, paddingTop: "3px", minWidth: "58px",
            }}>
              Preuve
            </span>
            <p style={{ color: "#94a3b8", fontSize: "14.5px", lineHeight: 1.7, margin: 0 }}>
              {activeCategory.preuve}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.3s" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "16px" }}>
            {"// technologies maîtrisées"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {techStack.map((tech, i) => (
              <span key={i} style={{
                fontSize: "12px", fontFamily: "var(--font-mono), monospace",
                padding: "6px 14px", borderRadius: "9999px",
                backgroundColor: "#112652", color: "#22d3ee",
                border: "1px solid #1e3a70", cursor: "default",
                transition: "all 0.2s", display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.backgroundColor = "rgba(6,182,212,0.15)";
                el.style.borderColor = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.backgroundColor = "#112652";
                el.style.borderColor = "#1e3a70";
              }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}