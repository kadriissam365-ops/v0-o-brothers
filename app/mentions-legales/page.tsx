import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales - Brother's restaurant Gennevilliers",
  description: "Mentions légales du restaurant Brother's restaurant Gennevilliers situé à Gennevilliers",
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Mentions légales</h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Informations légales</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Dénomination sociale :</strong> Brother's restaurant Gennevilliers
                </p>
                <p>
                  <strong>Forme juridique :</strong> SARL
                </p>
                <p>
                  <strong>Adresse du siège social :</strong>
                  <br />
                  148 avenue Gabriel Péri
                  <br />
                  92230 Gennevilliers
                </p>
                <p>
                  <strong>Téléphone :</strong> 01 47 90 25 72
                </p>
                <p>
                  <strong>Email :</strong> contact@brothers-gennevilliers.fr
                </p>
                <p>
                  <strong>Numéro SIRET :</strong> [À compléter]
                </p>
                <p>
                  <strong>Code APE :</strong> 5610A - Restauration traditionnelle
                </p>
                <p>
                  <strong>Capital social :</strong> [À compléter]
                </p>
                <p>
                  <strong>RCS :</strong> [À compléter] Nanterre
                </p>
                <p>
                  <strong>Numéro de TVA intracommunautaire :</strong> [À compléter]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Directeur de la publication</h2>
              <div className="text-gray-700">
                <p>
                  <strong>Directeur de la publication :</strong> [Nom du gérant]
                </p>
                <p>
                  <strong>Qualité :</strong> Gérant
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Hébergement du site</h2>
              <div className="text-gray-700">
                <p>
                  <strong>Hébergeur :</strong> KADRI AI
                </p>
                <p>
                  <strong>Adresse :</strong> 4 rue du Puits Guyon
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://brothers-restaurant-gennevilliers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    brothers-restaurant-gennevilliers.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Conception et développement</h2>
              <div className="text-gray-700">
                <p>
                  <strong>Agence :</strong> KadriWebAI
                </p>
                <p>
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://www.kadriwebai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    kadriwebai.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
                  propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                  téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos reproduits sur ce site sont déposés par les sociétés qui en sont propriétaires.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Responsabilité</h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
                  remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                  le signaler par email en décrivant le problème de la manière la plus précise possible.
                </p>
                <p>
                  Brother's restaurant Gennevilliers ne pourra en aucune manière être tenu responsable de tout dommage
                  de quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation des informations et/ou
                  documents disponibles sur ce site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources
                  présentes sur le réseau Internet, et notamment vers ses partenaires ont fait l'objet d'une
                  autorisation préalable, expresse et écrite.
                </p>
                <p>
                  Cependant, Brother's restaurant Gennevilliers n'a pas la possibilité de vérifier l'ensemble du contenu
                  des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de
                  contenus illicites.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                Collecte et traitement de données personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d'un droit
                  d'accès, de modification et de suppression des données qui vous concernent.
                </p>
                <p>
                  Pour exercer ce droit, adressez-vous à :<br />
                  Brother's restaurant Gennevilliers
                  <br />
                  148 avenue Gabriel Péri
                  <br />
                  92230 Gennevilliers
                  <br />
                  Email : contact@brothers-gennevilliers.fr
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos données personnelles, consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Droit applicable</h2>
              <div className="text-gray-700">
                <p>
                  Le présent site web et les présentes mentions légales sont régis par le droit français. En cas de
                  litige, les tribunaux français seront seuls compétents.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="text-gray-700">
                <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Par téléphone : 01 47 90 25 72</li>
                  <li>Par email : contact@brothers-gennevilliers.fr</li>
                  <li>Par courrier : 148 avenue Gabriel Péri, 92230 Gennevilliers</li>
                </ul>
              </div>
            </section>

            <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
              <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
