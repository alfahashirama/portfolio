"use client";

import { useState, useEffect, useRef } from "react";

const certifications = [
  {
    id: 7,
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    date: "Juillet 2026",
    score: "Cert ID : efe6c202",
    category: "Data & IA",
    icon: "📈",
    color: "#38bdf8",
    credlyUrl: "https://www.credly.com/badges/13d52038-7e74-4f1f-a486-1e65497f2919",
    pdfFile: "/certifications/data.pdf",
    modules: [
      "Manipulation de données avec Pandas et NumPy",
      "Nettoyage et préparation de jeux de données",
      "Analyse exploratoire et visualisation",
      "Statistiques appliquées à la data science",
      "Modèles prédictifs avec scikit-learn",
    ],
  },
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Janvier 2026",
    score: "70/100 - Niveau intermédiaire",
    category: "Cybersécurité",
    icon: "🛡️",
    color: "#06b6d4",
    credlyUrl: "https://www.credly.com/badges/1c060142-75ca-4c9c-80a5-27445096a74a",
    pdfFile: "/certifications/cisco-cybersecurity.pdf",
    modules: [
      "Introduction à la cybersécurité",
      "Attaques, Concepts et Techniques",
      "Protection des données et confidentialité",
      "Protéger l’entreprise",
      "Carrière dans la cybersécurité",
    ],
  },
  {
    id: 2,
    title: "Introduction to Google Cloud Platform",
    issuer: "Simple Learn",
    date: "Novembre 2025",
    score: "Code : 9445930",
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#4285f4",
    credlyUrl: null,
    pdfFile: "/certifications/gcp.pdf",
    modules: [
      "Fondamentaux GCP",
      "Services cloud essentiels",
      "Infrastructure Google",
      "Sécurité et conformité cloud",
    ],
  },
  {
    id: 3,
    title: "Intro to Splunk (eLearning)",
    issuer: "Splunk",
    date: "Janvier 2026",
    score: "1 heure de formation",
    category: "Cybersécurité",
    icon: "📊",
    color: "#ff6900",
    credlyUrl: null,
    pdfFile: "/certifications/splunk.pdf",
    modules: [
      "Navigation dans Splunk",
      "Recherche et reporting",
      "Corrélation de logs",
      "Analyse d’événements de sécurité",
    ],
  },
  {
    id: 4,
    title: "Artificial Neural Networks - Theory & Applications",
    issuer: "Udemy",
    date: "Septembre 2025",
    score: "1 heure - Référence : 0004",
    category: "Data & IA",
    icon: "🧠",
    color: "#a855f7",
    credlyUrl: null,
    pdfFile: "/certifications/udemy-ann.pdf",
    modules: [
      "Fondements des réseaux de neurones",
      "Architectures CNN et RNN",
      "Applications pratiques",
      "Optimisation et régularisation",
    ],
  },
  {
    id: 5,
    title: "Analyste Junior en Cybersécurité",
    issuer: "Cisco Networking Academy",
    date: "En cours",
    score: "En progression",
    category: "Cybersécurité",
    icon: "🔐",
    color: "#22d3ee",
    credlyUrl: null,
    pdfFile: null,
    modules: [
      "Analyse des menaces",
      "Réponse aux incidents",
      "Forensique numérique",
      "Gestion des vulnérabilités",
    ],
  },
  {
    id: 6,
    title: "ML, Deep Learning & Generative AI",
    issuer: "Arato Fianarantsoa",
    date: "En cours",
    score: "Formation structurée",
    category: "Data & IA",
    icon: "🤖",
    color: "#4ade80",
    credlyUrl: null,
    pdfFile: null,
    modules: [
      "Machine Learning avancé",
      "Deep Learning et CNN",
      "Generative AI et LLM",
      "MLOps et déploiement",
    ],
  },
];

const filters = ["Tous", "Data & IA", "Cloud & DevOps", "Cybersécurité"];

interface Cert {
  id: number;
  title: string;
  issuer: string;
  date: string;
  score: string;
  category: string;
  icon: string;
  color: string;
  credlyUrl: string | null;
  pdfFile: string | null;
  modules: string[];
}

function Modal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#0e1f3d",
          border: `1px solid ${cert.color}55`,
          borderRadius: "16px",
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${cert.color}15`,
        }}
      >
        {/* Modal header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: `1px solid ${cert.color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>{cert.icon}</span>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "2px" }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: "12px", color: cert.color }}>{cert.issuer}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {cert.credlyUrl && (
              <a
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px", padding: "6px 14px", borderRadius: "6px",
                  backgroundColor: "#06b6d4", color: "#060d18",
                  textDecoration: "none", fontWeight: 600,
                }}
              >
                Badge Credly
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                width: "32px", height: "32px", borderRadius: "8px",
                backgroundColor: "#1e3a70", border: "1px solid #2d4d8e",
                color: "#94a3b8", fontSize: "18px", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
          {cert.pdfFile ? (
            /* PDF viewer */
            <div style={{ flex: 1, minHeight: "500px", position: "relative" }}>
              <iframe
                src={cert.pdfFile}
                style={{ width: "100%", height: "100%", minHeight: "500px", border: "none" }}
                title={cert.title}
              />
            </div>
          ) : (
            /* En cours - no PDF */
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "48px 24px", textAlign: "center",
            }}>
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎓</div>
              <h4 style={{ fontSize: "18px", fontWeight: 600, color: "#ffffff", marginBottom: "8px" }}>
                Formation en cours
              </h4>
              <p style={{ fontSize: "14px", color: "#94a3b8", maxWidth: "400px", lineHeight: 1.6, marginBottom: "32px" }}>
                Cette certification est actuellement en progression. Le certificat sera ajouté ici dès l’obtention.
              </p>
              <div style={{
                padding: "20px 24px", borderRadius: "12px",
                backgroundColor: "#112652", border: "1px solid #1e3a70",
                textAlign: "left", maxWidth: "400px", width: "100%",
              }}>
                <p style={{ fontSize: "11px", color: "#22d3ee", fontFamily: "monospace", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Modules couverts
                </p>
                {cert.modules.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: cert.color, fontSize: "12px", flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: "13px", color: "#cbd5e1" }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [mounted,      setMounted]      = useState(false);
  const [visible,      setVisible]      = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
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
    ? certifications
    : certifications.filter((c) => c.category === activeFilter);

  if (!mounted) {
    return (
      <section id="certifications" style={{ padding: "96px 0", backgroundColor: "#070e1f" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>{"// certifications"}</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Mes <span style={{ color: "#22d3ee" }}>Certifications</span></h2>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="certifications"
        ref={ref}
        style={{ padding: "96px 0", backgroundColor: "#070e1f" }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div style={{
            marginBottom: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}>
            <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
              {"// certifications"}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
              Mes <span style={{ color: "#22d3ee" }}>Certifications</span>
            </h2>
            <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px" }} />
          </div>

          {/* Filters */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px",
            opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.1s",
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "8px 18px", borderRadius: "8px",
                  fontSize: "13px", fontWeight: 500, cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor: activeFilter === filter ? "#06b6d4" : "#112652",
                  color: activeFilter === filter ? "#060d18" : "#94a3b8",
                  border: `1px solid ${activeFilter === filter ? "#06b6d4" : "#1e3a70"}`,
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.2s",
          }}>
            {filtered.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                style={{
                  backgroundColor: "#0e1f3d",
                  border: "1px solid #1e3a70",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = cert.color + "66";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 12px 30px ${cert.color}12`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#1e3a70";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Color bar */}
                <div style={{ height: "3px", backgroundColor: cert.color, opacity: 0.8 }} />

                <div style={{ padding: "22px" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <div style={{
                      width: "46px", height: "46px", borderRadius: "12px",
                      backgroundColor: cert.color + "18",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "22px",
                    }}>
                      {cert.icon}
                    </div>
                    <span style={{
                      fontSize: "11px", padding: "3px 10px", borderRadius: "9999px",
                      fontFamily: "monospace", fontWeight: 600,
                      backgroundColor: cert.date === "En cours" ? "rgba(6,182,212,0.1)" : "rgba(74,222,128,0.1)",
                      color: cert.date === "En cours" ? "#22d3ee" : "#4ade80",
                      border: `1px solid ${cert.date === "En cours" ? "#22d3ee33" : "#4ade8033"}`,
                    }}>
                      {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "6px", lineHeight: 1.4 }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: cert.color, fontWeight: 500, marginBottom: "6px" }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", marginBottom: "16px" }}>
                    {cert.score}
                  </p>

                  {/* Click hint */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    fontSize: "12px", color: "#475569",
                    borderTop: "1px solid #1e3a70",
                    paddingTop: "12px",
                  }}>
                    <span style={{ fontSize: "14px" }}>
                      {cert.pdfFile ? "📄" : "🎓"}
                    </span>
                    <span>
                      {cert.pdfFile ? "Cliquer pour voir le certificat" : "Formation en cours"}
                    </span>
                    {cert.credlyUrl && (
                      <span style={{
                        marginLeft: "auto", fontSize: "11px",
                        color: "#06b6d4", fontWeight: 500,
                      }}>
                        + Badge Credly
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            marginTop: "56px",
            padding: "28px 32px",
            borderRadius: "16px",
            backgroundColor: "#0e1f3d",
            border: "1px solid #1e3a70",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "24px",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.4s",
          }}>
            {[
              { value: "6", label: "Certifications", sub: "obtenues & en cours" },
              { value: "3", label: "Plateformes", sub: "Cisco, Google, Splunk" },
              { value: "2", label: "Domaines", sub: "IA & Cybersécurité" },
              { value: "1", label: "Badge Credly", sub: "verifie en ligne" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#22d3ee", marginBottom: "4px" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "13px", color: "#ffffff", fontWeight: 500, marginBottom: "2px" }}>{stat.label}</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <Modal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}