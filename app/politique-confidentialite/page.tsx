import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - Brother's restaurant Gennevilliers",
  description:
    "Politique de confidentialité et protection des données personnelles de Brother's restaurant Gennevilliers",
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Politique de confidentialité</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Brother's restaurant Gennevilliers s'engage à protéger la confidentialité et la sécurité des données
                personnelles de ses clients et visiteurs. Cette politique de confidentialité explique comment nous
                collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement
                Général sur la Protection des Données (RGPD) et à la loi française.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">2. Responsable du traitement</h2>
              <div className="text-gray-700">
                <p>
                  <strong>Raison sociale :</strong> Brother's restaurant Gennevilliers
                </p>
                <p>
                  <strong>Adresse :</strong> 148 avenue Gabriel Péri, 92230 Gennevilliers
                </p>
                <p>
                  <strong>Téléphone :</strong> 01 47 90 25 72
                </p>
                <p>
                  <strong>Email :</strong> contact@brothers-restaurant-gennevilliers.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">3. Données collectées</h2>
              <p className="text-gray-700 mb-4">Nous pouvons collecter les types de données suivantes :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone
                </li>
                <li>
                  <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de
                  visite
                </li>
                <li>
                  <strong>Données de réservation :</strong> date, heure, nombre de personnes, préférences alimentaires
                </li>
                <li>
                  <strong>Données de commande :</strong> produits commandés, adresse de livraison, informations de
                  paiement
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">4. Finalités du traitement</h2>
              <p className="text-gray-700 mb-4">Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Gérer vos réservations et commandes</li>
                <li>Vous contacter concernant votre réservation ou commande</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Vous envoyer des informations promotionnelles (avec votre consentement)</li>
                <li>Respecter nos obligations légales et comptables</li>
                <li>Assurer la sécurité de notre site web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">5. Base légale du traitement</h2>
              <p className="text-gray-700 mb-4">Le traitement de vos données personnelles est fondé sur :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>L'exécution d'un contrat :</strong> pour traiter vos réservations et commandes
                </li>
                <li>
                  <strong>L'intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité
                </li>
                <li>
                  <strong>Le consentement :</strong> pour l'envoi de communications marketing
                </li>
                <li>
                  <strong>L'obligation légale :</strong> pour respecter nos obligations comptables et fiscales
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">6. Destinataires des données</h2>
              <p className="text-gray-700 mb-4">Vos données peuvent être partagées avec :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Notre personnel autorisé</li>
                <li>Nos prestataires de services (hébergement, paiement, livraison)</li>
                <li>Les autorités compétentes si requis par la loi</li>
              </ul>
              <p className="text-gray-700">
                Nous nous assurons que tous nos partenaires respectent des standards de sécurité appropriés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">7. Durée de conservation</h2>
              <p className="text-gray-700 mb-4">Nous conservons vos données personnelles :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Données de réservation :</strong> 3 ans après la dernière réservation
                </li>
                <li>
                  <strong>Données de commande :</strong> 10 ans pour les obligations comptables
                </li>
                <li>
                  <strong>Données marketing :</strong> jusqu'à votre désinscription ou 3 ans d'inactivité
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">8. Vos droits</h2>
              <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger des données inexactes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la suppression de vos données
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> limiter le traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données
                </li>
                <li>
                  <strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment
                </li>
              </ul>
              <p className="text-gray-700">
                Pour exercer ces droits, contactez-nous à : contact@brothers-restaurant-gennevilliers.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">9. Sécurité des données</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération
                ou la destruction.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Surveillance et audit réguliers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos
                préférences de cookies dans les paramètres de votre navigateur.
              </p>
              <p className="text-gray-700">
                Pour plus d'informations sur notre utilisation des cookies, consultez notre politique de cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">11. Transferts internationaux</h2>
              <p className="text-gray-700">
                Vos données personnelles peuvent être transférées vers des pays situés en dehors de l'Union européenne.
                Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place pour protéger vos
                données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">12. Réclamations</h2>
              <p className="text-gray-700">
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez
                le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des
                Libertés (CNIL) :{" "}
                <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">13. Modifications</h2>
              <p className="text-gray-700">
                Cette politique de confidentialité peut être modifiée à tout moment. Les modifications seront publiées
                sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">14. Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données
                personnelles, vous pouvez nous contacter :
              </p>
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Brother's restaurant Gennevilliers</strong>
                </p>
                <p>148 avenue Gabriel Péri</p>
                <p>92230 Gennevilliers</p>
                <p>Téléphone : 01 47 90 25 72</p>
                <p>Email : contact@brothers-restaurant-gennevilliers.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
