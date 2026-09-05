"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Les objections d'un client français face à un prestataire qu'il ne connaît pas
 * et qui travaille depuis l'étranger. Non traitées, elles ne sont jamais posées :
 * le prospect renonce en silence. Chaque réponse va droit au fait, y compris
 * quand la réponse est inconfortable.
 */
const questions = [
  {
    q: "Vous travaillez depuis Madagascar. Comment se passe la collaboration au quotidien ?",
    r: "Madagascar est à UTC+3, soit une à deux heures d'avance sur la France selon la saison. " +
       "Votre journée de travail est donc entièrement couverte par la mienne : quand vous arrivez " +
       "le matin, je suis déjà disponible. Nous échangeons par visio, par messagerie et par courriel, " +
       "au rythme que vous préférez. Je propose un point d'avancement hebdomadaire et une démonstration " +
       "à chaque livraison, pour que vous ne découvriez jamais le résultat à la fin.",
  },
  {
    q: "À qui appartient le code une fois le projet livré ?",
    r: "À vous. Les droits d'exploitation du code produit vous sont cédés au paiement intégral de la " +
       "facture, et le contrat le formalise. Vous recevez l'intégralité des sources, la documentation " +
       "et les accès. Les bibliothèques libres utilisées restent régies par leurs licences respectives, " +
       "toutes compatibles avec un usage commercial, et je vous les liste.",
  },
  {
    q: "Mes documents sont confidentiels. Comment sont-ils protégés ?",
    r: "Un accord de confidentialité peut être signé avant même le premier échange technique, sur simple " +
       "demande. Les fichiers que vous me confiez servent uniquement à la mission et sont supprimés à sa " +
       "clôture si vous le souhaitez. C'est aussi la raison pour laquelle certaines réalisations de ce " +
       "site sont décrites sans nommer le client.",
  },
  {
    q: "Comment vous payer depuis la France, et que dira mon comptable ?",
    r: "Facturation en euros, règlement par virement bancaire international, à trente jours date de " +
       "facture. Étant établi hors Union européenne, je facture hors taxes : la TVA est due par vous au " +
       "titre de l'autoliquidation, et la mention correspondante figure sur chaque facture. Votre " +
       "comptable a donc tout ce qu'il lui faut, sans démarche inhabituelle.",
  },
  {
    q: "Et si le résultat ne correspond pas à ce que j'attendais ?",
    r: "C'est précisément ce que le devis détaillé sert à éviter : périmètre écrit, livrables et prix " +
       "fixés avant la première ligne de code. Pendant la mission, les livraisons sont régulières et " +
       "démontrées, ce qui permet de corriger le tir en cours de route plutôt qu'à la fin. Après la " +
       "livraison, les correctifs sur le périmètre convenu sont pris en charge sans supplément pendant " +
       "trente jours.",
  },
  {
    q: "Vous débutez en freelance. Pourquoi vous plutôt qu'une agence ?",
    r: "Parce que vous parlez directement à la personne qui écrit le code, sans intermédiaire ni marge " +
       "de structure. J'ai déjà mené un projet de bout en bout en autonomie complète, de la maquette à " +
       "la mise en production, pour l'État-Major de l'Armée de l'Air. Et mes travaux sont vérifiables : " +
       "l'anonymiseur RGPD est en ligne, vous pouvez le tester avant même de m'écrire. Si votre projet " +
       "dépasse ce que je peux tenir seul, je vous le dirai plutôt que de l'accepter.",
  },
  {
    q: "Combien coûte un projet, et sous quel délai ?",
    r: "Cela dépend du périmètre, mais le premier échange et le devis sont gratuits et sans engagement. " +
       "Décrivez-moi votre besoin en quelques lignes : je reviens vers vous sous 24 heures ouvrées avec " +
       "un avis honnête sur la faisabilité, une fourchette de prix et un délai. Si votre projet ne " +
       "relève pas de mes compétences, je vous le dis tout de suite.",
  },
];

export default function Faq() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ouverte, setOuverte] = useState<number | null>(0);
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
      <section id="faq" style={sectionStyle}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "8px" }}>
            {"// questions fréquentes"}
          </p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>
            Ce que vous vous demandez <span style={{ color: "#22d3ee" }}>sûrement</span>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" ref={ref} style={sectionStyle}>
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 24px" }}>

        <div style={{
          marginBottom: "40px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <p style={{
            color: "#22d3ee", fontSize: "12px", letterSpacing: "0.15em",
            textTransform: "uppercase", fontFamily: "var(--font-mono), monospace",
            marginBottom: "8px",
          }}>
            {"// questions fréquentes"}
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700,
            color: "#ffffff", marginBottom: "12px",
          }}>
            Ce que vous vous demandez <span style={{ color: "#22d3ee" }}>sûrement</span>
          </h2>
          <div style={{ width: "64px", height: "4px", backgroundColor: "#06b6d4", borderRadius: "2px", marginBottom: "18px" }} />
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.8 }}>
            Les questions que l&apos;on me pose avant de signer, et celles que l&apos;on n&apos;ose pas
            toujours poser. Les réponses sont ici, y compris quand elles ne m&apos;arrangent pas.
          </p>
        </div>

        <div style={{
          display: "flex", flexDirection: "column", gap: "10px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease 0.15s",
        }}>
          {questions.map((item, i) => {
            const active = ouverte === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: active ? "#0e1f3d" : "#0a1628",
                  border: `1px solid ${active ? "#06b6d4" : "#1e3a70"}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "border-color 0.25s, background-color 0.25s",
                }}
              >
                <button
                  onClick={() => setOuverte(active ? null : i)}
                  aria-expanded={active}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "18px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    font: "inherit",
                    color: active ? "#ffffff" : "#cbd5e1",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: 1.45,
                  }}
                >
                  {item.q}
                  <span style={{
                    color: "#22d3ee",
                    fontSize: "20px",
                    lineHeight: 1,
                    flexShrink: 0,
                    transform: active ? "rotate(45deg)" : "none",
                    transition: "transform 0.25s",
                  }}>
                    +
                  </span>
                </button>

                {active && (
                  <p style={{
                    margin: 0,
                    padding: "0 20px 20px",
                    color: "#94a3b8",
                    fontSize: "14.5px",
                    lineHeight: 1.8,
                  }}>
                    {item.r}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p style={{
          marginTop: "32px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "14.5px",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease 0.3s",
        }}>
          Une question qui n&apos;est pas ici ?{" "}
          <a href="#contact" style={{ color: "#22d3ee", fontWeight: 600 }}>
            Posez-la-moi directement
          </a>, la réponse est gratuite.
        </p>
      </div>
    </section>
  );
}
