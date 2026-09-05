import Link from "next/link";

/**
 * Coquille commune aux pages légales. Composant serveur : ces pages sont du
 * contenu statique, elles n'ont besoin d'aucun JavaScript côté client.
 */

const conteneur: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "0 24px",
};

export function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2 style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        color: "#ffffff",
        marginBottom: "14px",
        paddingBottom: "10px",
        borderBottom: "1px solid #1e3a70",
      }}>
        {titre}
      </h2>
      <div style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}

export function Ligne({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", marginBottom: "10px" }}>
      <span style={{
        color: "#22d3ee",
        fontFamily: "var(--font-mono), monospace",
        fontSize: "13px",
        minWidth: "170px",
        flexShrink: 0,
      }}>
        {label}
      </span>
      <span style={{ color: "#cbd5e1", fontSize: "15px" }}>{children}</span>
    </div>
  );
}

export function Encart({ children, ton = "info" }: { children: React.ReactNode; ton?: "info" | "attention" }) {
  const couleur = ton === "attention" ? "#fb923c" : "#22d3ee";
  return (
    <div style={{
      backgroundColor: ton === "attention" ? "rgba(251,146,60,0.06)" : "rgba(6,182,212,0.05)",
      border: `1px solid ${couleur}44`,
      borderLeft: `3px solid ${couleur}`,
      borderRadius: "8px",
      padding: "16px 18px",
      margin: "18px 0",
      fontSize: "14.5px",
      lineHeight: 1.7,
      color: "#cbd5e1",
    }}>
      {children}
    </div>
  );
}

export default function PageLegale({
  titre,
  soustitre,
  maj,
  children,
}: {
  titre: string;
  soustitre: string;
  maj: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ backgroundColor: "#060d18", minHeight: "100vh", paddingBottom: "80px" }}>

      <header style={{
        background: "linear-gradient(135deg, #060d18 0%, #0a1628 60%, #112652 100%)",
        borderBottom: "1px solid #1e3a70",
        padding: "40px 0 44px",
        marginBottom: "48px",
      }}>
        <div style={conteneur}>
          <Link
            href="/"
            style={{
              color: "#22d3ee",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "13px",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "26px",
            }}
          >
            &larr; Retour au site
          </Link>
          <h1 style={{
            fontSize: "clamp(1.7rem, 4vw, 2.3rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 10px",
            lineHeight: 1.15,
          }}>
            {titre}
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0, maxWidth: "60ch" }}>
            {soustitre}
          </p>
        </div>
      </header>

      <div style={conteneur}>
        {children}

        <p style={{
          color: "#64748b",
          fontSize: "12.5px",
          fontFamily: "var(--font-mono), monospace",
          marginTop: "48px",
          paddingTop: "18px",
          borderTop: "1px solid #1e3a70",
        }}>
          Dernière mise à jour : {maj}
        </p>
      </div>
    </main>
  );
}
