"use client";

import { useState, useEffect, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Veuillez remplir tous les champs obligatoires." });
      return;
    }
    setStatus({ type: "loading", message: "Envoi en cours..." });
    await new Promise((r) => setTimeout(r, 1500));
    setStatus({
      type: "success",
      message: "Message envoye ! Je vous repondrai dans les plus brefs delais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "alfahashirama@gmail.com", href: "mailto:alfahashirama@gmail.com" },
    { icon: "📱", label: "Telephone", value: "034 78 284 05", href: "tel:+261347828405" },
    { icon: "📍", label: "Localisation", value: "Fianarantsoa, Madagascar", href: null },
    { icon: "🎓", label: "Formation", value: "ENI Fianarantsoa - Master 2", href: null },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/", icon: "⌨️" },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: "💼" },
    { label: "Credly", href: "https://www.credly.com/badges/1c060142-75ca-4c9c-80a5-27445096a74a", icon: "🏆" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#0a1628",
    border: "1px solid #1e3a70",
    borderRadius: "8px",
    color: "#f1f5f9",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    color: "#94a3b8",
    marginBottom: "6px",
    fontWeight: 500,
  };

  if (!mounted) {
    return (
      <section id="contact" style={{ padding: "96px 0", backgroundColor: "#060d18" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace" }}>// contact</p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>Me <span style={{ color: "#22d3ee" }}>Contacter</span></h2>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "96px 0", backgroundColor: "#060d18" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          marginBottom: "56px", textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-mono), monospace", marginBottom: "8px" }}>
            // contact
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
            Me <span style={{ color: "#22d3ee" }}>Contacter</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px", margin: "0 auto 16px" }} />
          <p style={{ fontSize: "15px", color: "#94a3b8", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Disponible pour un emploi junior en IA, Data ou Cybersecurite.
            N hesitez pas a me contacter !
          </p>
        </div>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}>

          {/* Left - Info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s ease 0.2s",
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "24px" }}>
              Informations de contact
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              {contactInfo.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "14px",
                  padding: "16px", borderRadius: "12px",
                  backgroundColor: "#0e1f3d", border: "1px solid #1e3a70",
                }}>
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace", marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ fontSize: "14px", color: "#22d3ee", textDecoration: "none", fontWeight: 500 }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "14px", color: "#cbd5e1", fontWeight: 500 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <h4 style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "14px", fontWeight: 500 }}>
              Retrouvez-moi sur
            </h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "10px 16px", borderRadius: "8px",
                    backgroundColor: "#112652", border: "1px solid #1e3a70",
                    color: "#94a3b8", textDecoration: "none",
                    fontSize: "13px", fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#06b6d4";
                    el.style.color = "#22d3ee";
                    el.style.backgroundColor = "rgba(6,182,212,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#1e3a70";
                    el.style.color = "#94a3b8";
                    el.style.backgroundColor = "#112652";
                  }}
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s ease 0.3s",
          }}>
            <div style={{
              backgroundColor: "#0e1f3d",
              border: "1px solid #1e3a70",
              borderRadius: "16px",
              padding: "32px",
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "24px" }}>
                Envoyer un message
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={labelStyle}>Nom <span style={{ color: "#22d3ee" }}>*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#06b6d4"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#1e3a70"; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: "#22d3ee" }}>*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#06b6d4"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#1e3a70"; }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={labelStyle}>Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#06b6d4"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#1e3a70"; }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message <span style={{ color: "#22d3ee" }}>*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#06b6d4"; }}
                    onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "#1e3a70"; }}
                  />
                </div>

                {/* Status message */}
                {status.type !== "idle" && (
                  <div style={{
                    padding: "12px 16px", borderRadius: "8px", fontSize: "13px",
                    backgroundColor: status.type === "success" ? "rgba(74,222,128,0.1)"
                      : status.type === "error" ? "rgba(239,68,68,0.1)"
                      : "rgba(6,182,212,0.1)",
                    color: status.type === "success" ? "#4ade80"
                      : status.type === "error" ? "#f87171"
                      : "#22d3ee",
                    border: `1px solid ${status.type === "success" ? "#4ade8033"
                      : status.type === "error" ? "#f8717133"
                      : "#22d3ee33"}`,
                  }}>
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status.type === "loading"}
                  style={{
                    padding: "14px 28px", borderRadius: "8px",
                    backgroundColor: status.type === "loading" ? "#0891b2" : "#06b6d4",
                    color: "#060d18", fontWeight: 700, fontSize: "15px",
                    border: "none", cursor: status.type === "loading" ? "not-allowed" : "pointer",
                    transition: "all 0.2s", width: "100%",
                    opacity: status.type === "loading" ? 0.8 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status.type !== "loading") {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#22d3ee";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status.type !== "loading") {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#06b6d4";
                    }
                  }}
                >
                  {status.type === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}