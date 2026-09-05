import type { Metadata } from "next";
import PageLegale, { Bloc, Ligne, Encart } from "@/components/PageLegale";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Identité de l'éditeur du site, hébergement, propriété intellectuelle et conditions " +
    "de facturation des prestations.",
  robots: { index: false, follow: true },
};

const EMAIL = "alfahashirama@gmail.com";

export default function MentionsLegales() {
  return (
    <PageLegale
      titre="Mentions légales"
      soustitre="Qui édite ce site, où il est hébergé, et dans quelles conditions les prestations sont facturées."
      maj="septembre 2026"
    >
      <Bloc titre="Éditeur du site">
        <Ligne label="Nom">RAMANATENANIAVO Nasandratra Alfa</Ligne>
        <Ligne label="Qualité">Développeur indépendant, personne physique</Ligne>
        <Ligne label="Activité">
          Développement d&apos;applications web et de solutions d&apos;intelligence artificielle
        </Ligne>
        <Ligne label="Localisation">Fianarantsoa, Madagascar</Ligne>
        <Ligne label="Courrier électronique">
          <a href={`mailto:${EMAIL}`} style={{ color: "#22d3ee" }}>{EMAIL}</a>
        </Ligne>
        <Ligne label="Téléphone">+261 34 78 284 05</Ligne>
        <Ligne label="Directeur de publication">RAMANATENANIAVO Nasandratra Alfa</Ligne>

        <Encart>
          L&apos;adresse postale complète, l&apos;identifiant fiscal et les coordonnées bancaires
          figurent sur les devis et les factures, qui sont les documents où ces informations
          engagent réellement les deux parties.
        </Encart>
      </Bloc>

      <Bloc titre="Hébergement">
        <Ligne label="Hébergeur">Vercel Inc.</Ligne>
        <Ligne label="Adresse">440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</Ligne>
        <Ligne label="Site">
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#22d3ee" }}>
            vercel.com
          </a>
        </Ligne>
        <p style={{ marginTop: "14px" }}>
          La démonstration « Anonymiseur RGPD » est hébergée par Hugging Face, 61 Rue de
          Paradis, 75010 Paris, France. Elle s&apos;exécute intégralement dans le navigateur du
          visiteur : aucun document soumis à cet outil n&apos;est transmis à un serveur.
        </p>
      </Bloc>

      <Bloc titre="Facturation et règlement">
        <p style={{ marginBottom: "14px" }}>
          Les prestations sont facturées <strong style={{ color: "#ffffff" }}>en euros</strong> et
          réglées par <strong style={{ color: "#ffffff" }}>virement bancaire international</strong>.
          Les coordonnées bancaires complètes, au format IBAN et BIC, figurent sur chaque facture.
        </p>
        <p style={{ marginBottom: "14px" }}>
          Le prestataire étant établi hors de l&apos;Union européenne, les factures sont émises
          hors taxes. Pour un client assujetti établi en France, la taxe est due par le preneur
          au titre de l&apos;autoliquidation, conformément à l&apos;article 283-2 du code général
          des impôts. La mention correspondante figure sur chaque facture.
        </p>
        <p>
          Sauf stipulation contraire au devis, le règlement intervient à trente jours date de
          facture. Un acompte peut être demandé à la commande pour les missions au forfait.
        </p>

        <Encart ton="attention">
          Ces indications décrivent le fonctionnement retenu pour les prestations. Elles ne
          constituent pas un conseil fiscal : il appartient à chaque client de vérifier le
          traitement applicable à sa situation auprès de son propre comptable.
        </Encart>
      </Bloc>

      <Bloc titre="Propriété intellectuelle">
        <p style={{ marginBottom: "14px" }}>
          La structure, les textes, les visuels et le code de ce site sont la propriété de
          leur auteur. Toute reproduction ou représentation, totale ou partielle, sans
          autorisation écrite préalable, est interdite.
        </p>
        <p style={{ marginBottom: "14px" }}>
          Les marques, noms d&apos;organismes et logos cités dans les réalisations et les
          certifications appartiennent à leurs titulaires respectifs et sont mentionnés à
          titre d&apos;information.
        </p>
        <p>
          Concernant les prestations : sauf clause contraire au contrat, les droits
          d&apos;exploitation du code produit sont cédés au client au paiement intégral de la
          facture. Les composants tiers et les bibliothèques libres restent régis par leurs
          licences respectives.
        </p>
      </Bloc>

      <Bloc titre="Confidentialité des projets">
        <p>
          Les documents, données et informations transmis dans le cadre d&apos;une mission sont
          traités comme confidentiels. Un accord de confidentialité peut être signé avant tout
          échange, sur simple demande. Certaines réalisations présentées sur ce site sont
          volontairement décrites sans mention du client, pour cette raison.
        </p>
      </Bloc>

      <Bloc titre="Données personnelles">
        <p>
          Ce site ne dépose aucun cookie, n&apos;utilise aucun outil de mesure d&apos;audience et
          ne collecte aucune donnée de navigation. Le détail figure sur la{" "}
          <a href="/confidentialite" style={{ color: "#22d3ee" }}>
            page consacrée aux données personnelles
          </a>.
        </p>
      </Bloc>

      <Bloc titre="Limitation de responsabilité">
        <p style={{ marginBottom: "14px" }}>
          Les informations publiées sur ce site sont fournies à titre indicatif et peuvent
          évoluer. L&apos;éditeur ne saurait être tenu responsable d&apos;un dommage résultant de
          leur interprétation ou de leur utilisation.
        </p>
        <p>
          L&apos;outil de démonstration « Anonymiseur RGPD » est mis à disposition à titre
          d&apos;illustration technique. Aucun modèle statistique n&apos;atteint une exhaustivité
          totale : son résultat ne dispense en aucun cas d&apos;une relecture humaine avant
          diffusion d&apos;un document.
        </p>
      </Bloc>
    </PageLegale>
  );
}
