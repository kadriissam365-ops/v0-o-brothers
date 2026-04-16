"use client"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function MenuPDFPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="pt-24 pb-16 print:pt-0">
      <div className="container mx-auto px-4 print:px-0">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <h1 className="text-3xl font-playfair font-bold">Menu Restaurant</h1>
          <div className="flex gap-4">
            <Button onClick={handlePrint} className="bg-navy hover:bg-navy-light">
              <Printer className="mr-2 h-4 w-4" />
              Imprimer
            </Button>
          </div>
        </div>

        {/* Menu du jour */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:shadow-none print:mb-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-playfair font-bold text-navy mb-2">Menu du Jour</h2>
            <div className="text-xl font-bold mb-2">Plat + Dessert</div>
            <div className="text-2xl font-bold text-navy">21,90€</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2 text-navy">PLAT AU CHOIX :</h3>
              <ul className="space-y-1 text-sm">
                <li>• Salade César</li>
                <li>• Salade de chèvre chaud</li>
                <li>• Escalope de poulet, crème de champignons, linguine</li>
                <li>• Linguine crème de truffes, jambon de Pays* ou aux fromages</li>
                <li>• Plat du jour</li>
                <li>• Pizza Regina ou Pizza Fermière</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-navy">DESSERT AU CHOIX :</h3>
              <p className="text-sm">Dessert au choix (Thé et café gourmand +3,00€)</p>
              <p className="text-sm mt-2">Supplément de garnitures ou légumes +3,00€</p>
              <p className="text-xs mt-2 text-gray-500">Uniquement du lundi au vendredi (hors jours fériés)</p>
            </div>
          </div>
        </div>

        {/* Salades */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 print:shadow-none print:mb-4">
          <h2 className="text-2xl font-playfair font-bold text-navy mb-4 border-b border-cream pb-2">
            SALADES COMPOSÉES
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <div className="text-sm">
                <span className="font-bold">César salade</span> - salade, filet de poulet, œuf, tomates cerises,
                croûtons, copeaux de parmesan
              </div>
              <div className="text-navy font-bold">16.90 €</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-sm">
                <span className="font-bold">Chèvre chaud</span> - salade, chèvre sur toasts, œuf, jambon de parme*
              </div>
              <div className="text-navy font-bold">16.90 €</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-sm">
                <span className="font-bold">Brother's salade</span> - salade, saumon fumé, œuf, avocats, tomates,
                parmesan
              </div>
              <div className="text-navy font-bold">18.90 €</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-sm">
                <span className="font-bold">Bowl saumon</span> - salade, riz, avocat, choux rouge, saumon mariné,
                tomates cerises, carottes, fèves
              </div>
              <div className="text-navy font-bold">18.90 €</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-sm">
                <span className="font-bold">Bowl poulet</span> - salade, riz, avocat, choux rouge, poulet mariné,
                tomates cerises, carottes, fèves
              </div>
              <div className="text-navy font-bold">18.90 €</div>
            </div>
          </div>
        </div>

        {/* Continue with other sections... */}

        <div className="text-xs text-gray-500 mt-8 print:mt-4">
          <p>
            Tarifs en euro nets service compris. *Contient du porc. Pour votre santé, l'abus d'alcool est dangereux,
            consommez avec modération.
          </p>
        </div>
      </div>
    </div>
  )
}
