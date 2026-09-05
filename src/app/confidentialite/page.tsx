import type { Metadata } from "next";
import PageLegale, { Bloc, Encart } from "@/components/PageLegale";

export const metadata: Metadata = {
  title: "Données personnelles",
  description:
    "Ce site ne dépose aucun cookie et ne collecte aucune donnée de navigation. " +
    "Détail de ce qui est traité, pourquoi, et pendant combien de temps.",
  robots: { index: false, follow: true },
};

const EMAIL = "alfahashirama@gmail.com";

export default function Confidentialite() {
  return (
    <PageLegale
      titre="Données personnelles"
      soustitre="Ce que ce site collecte, ce qu'il ne collecte pas, et ce que deviennent les informations que vous m'envoyez."
      maj="septembre 2026"
    >
      <Encart>
        <strong style={{ color: "#ffffff" }}>Résumé.</strong> Ce site ne dépose aucun cookie,
        n&apos;utilise aucun outil de mesure d&apos;audience, ne charge aucune ressource externe
        au chargement et ne stocke rien dans votre navigateur. Aucun formulaire n&apos;envoie
        de données vers un serveur. Les seules informations que je détiens sont celles que
        vous choisissez de m&apos;écrire.
      </Encart>

      <Bloc titre="Ce que ce site ne fait pas">
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          <li style={{ marginBottom: "9px" }}>Aucun cookie, de quelque nature que ce soit.</li>
          <li style={{ marginBottom: "9px" }}>
            Aucun outil de mesure d&apos;audience : ni Google Analytics, ni équivalent.
          </li>
          <li style={{ marginBottom: "9px" }}>
            Aucun traceur publicitaire, aucun bouton de réseau social qui vous suivrait.
          </li>
          <li style={{ marginBottom: "9px" }}>
            Aucun appel à un service tiers au chargement de la page. Les polices de caractères
            sont servies depuis ce site, et non depuis Google Fonts.
          </li>
          <li>
            Aucun stockage local dans votre navigateur.
          </li>
        </ul>
        <p style={{ marginTop: "16px" }}>
          C&apos;est vérifiable : ouvrez les outils de développement de votre navigateur,
          onglet réseau, et rechargez la page.
        </p>
      </Bloc>

      <Bloc titre="Le formulaire de contact">
        <p style={{ marginBottom: "14px" }}>
          Le formulaire de la page d&apos;accueil <strong style={{ color: "#ffffff" }}>n&apos;envoie
          rien à un serveur</strong>. Il compose un message et ouvre votre propre logiciel de
          messagerie, pré-rempli. Tant que vous n&apos;avez pas cliqué sur « envoyer » dans
          votre messagerie, rien ne m&apos;est transmis.
        </p>
        <p>
          Ce que vous m&apos;envoyez ensuite arrive donc par courrier électronique ordinaire,
          comme n&apos;importe quel message.
        </p>
      </Bloc>

      <Bloc titre="Ce que je conserve, et combien de temps">
        <p style={{ marginBottom: "14px" }}>
          Quand vous me contactez par courriel, par téléphone ou par messagerie, je conserve
          nos échanges et les informations que vous y communiquez : nom, coordonnées, et
          description de votre besoin.
        </p>
        <ul style={{ paddingLeft: "20px", margin: "0 0 14px" }}>
          <li style={{ marginBottom: "9px" }}>
            <strong style={{ color: "#ffffff" }}>Finalité :</strong> répondre à votre demande,
            établir un devis, puis exécuter la mission si elle est conclue.
          </li>
          <li style={{ marginBottom: "9px" }}>
            <strong style={{ color: "#ffffff" }}>Base légale :</strong> votre démarche
            elle-même, puis l&apos;exécution du contrat s&apos;il y en a un.
          </li>
          <li style={{ marginBottom: "9px" }}>
            <strong style={{ color: "#ffffff" }}>Durée :</strong> trois ans après notre dernier
            échange pour une demande sans suite. Les documents comptables liés à une mission
            facturée sont conservés selon les obligations légales applicables.
          </li>
          <li>
            <strong style={{ color: "#ffffff" }}>Destinataires :</strong> moi seul. Vos données
            ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.
          </li>
        </ul>
        <p>
          Étant établi à Madagascar, je traite ces informations depuis un pays hors Union
          européenne. Elles se limitent à nos échanges professionnels et ne font l&apos;objet
          d&apos;aucun transfert au-delà des outils de messagerie utilisés pour communiquer.
        </p>
      </Bloc>

      <Bloc titre="Les documents confiés pendant une mission">
        <p style={{ marginBottom: "14px" }}>
          Les fichiers et données transmis dans le cadre d&apos;un projet sont traités comme
          confidentiels, utilisés uniquement pour la mission concernée, et supprimés à sa
          clôture sur simple demande. Un accord de confidentialité peut être signé au préalable.
        </p>
        <p>
          Lorsqu&apos;une mission implique des données personnelles appartenant à vos propres
          clients ou salariés, j&apos;interviens en qualité de sous-traitant au sens du RGPD,
          dans le cadre défini par le contrat.
        </p>
      </Bloc>

      <Bloc titre="La démonstration « Anonymiseur RGPD »">
        <p style={{ marginBottom: "14px" }}>
          Cet outil s&apos;exécute intégralement dans votre navigateur. Le modèle
          d&apos;intelligence artificielle est téléchargé une fois depuis Hugging Face, puis
          exécuté sur votre machine.
        </p>
        <p>
          <strong style={{ color: "#ffffff" }}>
            Le texte que vous y collez, et le PDF que vous y déposez, ne quittent jamais votre
            appareil.
          </strong>{" "}
          Ils ne sont transmis à aucun serveur, ni au mien, ni à celui de Hugging Face. C&apos;est
          la raison pour laquelle cet outil est conçu ainsi : un service d&apos;anonymisation qui
          téléverserait vos documents n&apos;aurait aucun sens.
        </p>
      </Bloc>

      <Bloc titre="Vos droits">
        <p style={{ marginBottom: "14px" }}>
          Vous pouvez à tout moment demander l&apos;accès aux informations vous concernant, leur
          rectification, leur effacement, ou vous opposer à leur traitement. Une simple demande
          par courriel suffit, et j&apos;y réponds sous trente jours.
        </p>
        <p>
          Écrivez à{" "}
          <a href={`mailto:${EMAIL}`} style={{ color: "#22d3ee" }}>{EMAIL}</a>.
          Si vous résidez dans l&apos;Union européenne et estimez que vos droits ne sont pas
          respectés, vous pouvez saisir l&apos;autorité de protection des données de votre pays,
          la CNIL pour la France.
        </p>
      </Bloc>
    </PageLegale>
  );
}
