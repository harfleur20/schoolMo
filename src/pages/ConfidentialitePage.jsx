export function ConfidentialitePage() {
  return (
    <div className="section section-soft legal-page">
      <div className="section-shell legal-shell">
        <h1>Politique de confidentialité</h1>
        <p className="legal-updated">Dernière mise à jour : avril 2025</p>

        <section className="legal-block">
          <h2>1. Responsable du traitement</h2>
          <p>
            SchoolMo, représenté par Anicet Nemani, est responsable du traitement
            de vos données personnelles collectées via le site{" "}
            <strong>schoolmo.fr</strong>.
          </p>
          <ul>
            <li><strong>Contact :</strong> contact@schoolmo.fr</li>
            <li><strong>Téléphone :</strong> +33 7 55 17 44 64</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>2. Données collectées</h2>
          <p>
            Dans le cadre de nos services, SchoolMo peut collecter les données
            suivantes :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (via WhatsApp)</li>
            <li>Ville et pays de résidence</li>
            <li>Niveau d'études et parcours académique</li>
            <li>Projet d'études en France</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>3. Finalités du traitement</h2>
          <p>Vos données sont collectées pour :</p>
          <ul>
            <li>Analyser votre profil et votre projet d'études</li>
            <li>Vous fournir un diagnostic personnalisé</li>
            <li>Assurer le suivi de votre accompagnement</li>
            <li>Vous contacter via WhatsApp ou email</li>
            <li>Améliorer nos services</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement explicite
            lors de la soumission du formulaire de contact, ainsi que sur
            l'exécution d'un contrat de prestation de services.
          </p>
        </section>

        <section className="legal-block">
          <h2>5. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire à la
            réalisation des finalités décrites ci-dessus, et au maximum{" "}
            <strong>3 ans</strong> à compter du dernier contact, sauf obligation
            légale contraire.
          </p>
        </section>

        <section className="legal-block">
          <h2>6. Partage des données</h2>
          <p>
            SchoolMo ne vend ni ne loue vos données personnelles à des tiers. Vos
            données peuvent être partagées uniquement avec des prestataires
            techniques nécessaires au bon fonctionnement du service (hébergement,
            messagerie), dans le respect du RGPD.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d'accès</strong> à vos données personnelles</li>
            <li><strong>Droit de rectification</strong> des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> de vos données</li>
            <li><strong>Droit à la portabilité</strong> de vos données</li>
            <li><strong>Droit d'opposition</strong> au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href="mailto:contact@schoolmo.fr">contact@schoolmo.fr</a>
          </p>
        </section>

        <section className="legal-block">
          <h2>8. Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est
            utilisé sans votre consentement.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Contact & réclamations</h2>
          <p>
            Pour toute question relative à vos données personnelles, vous pouvez
            nous contacter à <a href="mailto:contact@schoolmo.fr">contact@schoolmo.fr</a>.
          </p>
          <p>
            Vous disposez également du droit d'introduire une réclamation auprès
            de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et
            des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>
          </p>
        </section>
      </div>
    </div>
  );
}
