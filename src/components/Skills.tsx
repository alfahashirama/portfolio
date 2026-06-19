"use client";

import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    id: "ai", title: "Intelligence Artificielle", icon: "🤖",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning (CNN, RNN)", level: 75 },
      { name: "NLP & Transformers", level: 80 },
      { name: "Generative AI & LLM", level: 75 },
      { name: "PyTorch & TensorFlow", level: 70 },
      { name: "HuggingFace & BERT", level: 78 },
    ],
  },
  {
    id: "cyber", title: "Cybersecurite", icon: "🔐",
    skills: [
      { name: "Analyse SOC & SIEM", level: 70 },
      { name: "Splunk", level: 72 },
      { name: "Analyse de logs", level: 68 },
      { name: "Detection d intrusions", level: 65 },
      { name: "Rapports d incidents", level: 70 },
      { name: "Securite reseaux", level: 65 },
    ],
  },
  {
    id: "dev", title: "Developpement", icon: "💻",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript & TypeScript", level: 75 },
      { name: "Java & HTML/CSS", level: 70 },
      { name: "API REST & JSON", level: 78 },
      { name: "Linux & Git & GitHub", level: 80 },
      { name: "CI/CD & GitHub Actions", level: 72 },
    ],
  },
  {
    id: "agents", title: "Agents IA & MLOps", icon: "⚙️",
    skills: [
      { name: "LangChain & CrewAI", level: 72 },
      { name: "LLaMA 3", level: 70 },
      { name: "RAG & Prompt Engineering", level: 75 },
      { name: "n8n Automatisation", level: 68 },
      { name: "MLOps & Deploiement", level: 65 },
      { name: "Pipelines ML", level: 70 },
    ],
  },
];

const techStack = [
  "Python","PyTorch","TensorFlow","HuggingFace","LangChain","CrewAI",
  "LLaMA 3","n8n","Splunk","Linux","Git","GitHub Actions",
  "JavaScript","TypeScript","Java","API REST","BERT","RAG","MLOps","CI/CD",
];

interface SkillBarProps { name: string; level: number; visible: boolean; }

function SkillBar({ name, level, visible }: SkillBarProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{name}</span>
        <span style={{ fontSize: "12px", color: "#22d3ee", fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div style={{ height: "6px", backgroundColor: "#1e3a70", borderRadius: "9999px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: visible ? `${level}%` : "0%",
          background: "linear-gradient(90deg, #06b6d4, #22d3ee)",
          borderRadius: "9999px",
          transition: "width 1.2s ease-out",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [mounted,   setMounted]   = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [activeTab, setActiveTab] = useState("ai");
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

  const sectionStyle: React.CSSProperties = {
    padding: "96px 0",
    backgroundColor: "#070e1f",
  };

  if (!mounted) {
    return (
      <section id="skills" style={sectionStyle}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>// competences</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Mes <span style={{ color: "#22d3ee" }}>Skills</span></h2>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" ref={ref} style={sectionStyle}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
            // competences
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Mes <span style={{ color: "#22d3ee" }}>Skills</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px",
          opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.1s",
        }}>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 18px", borderRadius: "8px",
                fontSize: "14px", fontWeight: 500, cursor: "pointer",
                transition: "all 0.2s",
                backgroundColor: activeTab === cat.id ? "#06b6d4" : "#112652",
                color: activeTab === cat.id ? "#060d18" : "#94a3b8",
                border: `1px solid ${activeTab === cat.id ? "#06b6d4" : "#1e3a70"}`,
              }}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          marginBottom: "56px",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease 0.2s",
        }}>
          <div>
            <h3 style={{ color: "#ffffff", fontWeight: 600, fontSize: "16px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>{activeCategory.icon}</span> {activeCategory.title}
            </h3>
            {activeCategory.skills.slice(0, 3).map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} visible={visible} />
            ))}
          </div>
          <div style={{ paddingTop: "48px" }}>
            {activeCategory.skills.slice(3).map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} visible={visible} />
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.3s" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "16px" }}>
            // tech stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {techStack.map((tech, i) => (
              <span
                key={i}
                style={{
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