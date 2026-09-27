import { ImageResponse } from "next/og";

/**
 * Vignette affichée quand le lien est partagé sur LinkedIn, WhatsApp, Facebook
 * ou Slack. Elle remplace le portrait carré qui servait jusqu'ici : au format
 * 1200x630 la plupart des réseaux recadraient l'image, et un partage sans
 * vignette correcte passe inaperçu dans un fil.
 *
 * Générée à la compilation, sans dépendance ni fichier image à maintenir.
 */

export const alt =
  "Nasandratra Alfa, ingénieur informatique freelance, full-stack et intelligence artificielle";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #060d18 0%, #0a1628 55%, #112652 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Filet d'accent en haut */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: "linear-gradient(90deg, #06b6d4, #22d3ee, #3b5ea6)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(74,222,128,0.45)",
              background: "rgba(74,222,128,0.08)",
              borderRadius: 999,
              padding: "10px 24px",
              color: "#4ade80",
              fontSize: 24,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#4ade80",
                display: "flex",
              }}
            />
            Disponible pour vos projets freelance
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -1.5,
            }}
          >
            Nasandratra&nbsp;
            <span style={{ color: "#22d3ee" }}>Alfa</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#94a3b8",
              marginTop: 18,
            }}
          >
            Ingénieur informatique · Full-Stack &amp; IA
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 27,
              color: "#cbd5e1",
              marginTop: 26,
              maxWidth: 940,
              lineHeight: 1.45,
            }}
          >
            Applications web sur mesure et solutions d&apos;intelligence artificielle,
            de la maquette à la mise en production.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          {["React", "Next.js", "Spring Boot", "Python", "PyTorch", "LangChain", "Docker"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  border: "1px solid #2d4d8e",
                  background: "#112652",
                  color: "#22d3ee",
                  borderRadius: 10,
                  padding: "9px 20px",
                  fontSize: 23,
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
