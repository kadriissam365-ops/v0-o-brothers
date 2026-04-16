"use client"

import { Button } from "@/components/ui/button"
import { Printer, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MenuBoissonsPDF() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Hidden when printing */}
      <div className="print:hidden bg-navy text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Link>
            </Button>
            <h1 className="text-xl font-playfair font-bold">Menu Boissons</h1>
          </div>
          <Button onClick={handlePrint} variant="outline" className="border-white text-white hover:bg-white/10">
            <Printer className="mr-2 h-4 w-4" />
            Imprimer
          </Button>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto p-6 print:p-4 print:max-w-none">
        {/* Header with Logo */}
        <div className="text-center mb-8 print:mb-6">
          <div className="flex justify-center mb-4">
            <Image src="/brothers-logo.png" alt="Brother's Logo" width={200} height={100} className="h-auto" />
          </div>
          <h1 className="text-3xl font-playfair font-bold text-navy print:text-2xl">MENU BOISSONS</h1>
        </div>

        {/* Boissons Fraîches */}
        <div className="mb-8 print:mb-6">
          <h2 className="text-2xl font-playfair font-bold text-navy mb-4 pb-2 border-b-2 border-navy print:text-xl print:mb-3">
            BOISSONS FRAÎCHES
          </h2>
          <div className="space-y-3 print:space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Jus de fruits 25cl</span>
                <span className="text-sm text-gray-600 print:text-xs block">
                  Ananas, orange, pomme, abricot, pamplemousse, tomate, ACE
                </span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Orangina 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Schweppes Tonic ou Agrumes 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Limonade bouteille 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Ice Tea 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Red Bull 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">5.50€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Oranges ou Citrons pressés 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">6.00€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Coca-Cola, Coca-Cola zero 33cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Fanta orange 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Oasis 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.70€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Perrier 33cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.90€</div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-navy mt-6 mb-3 print:text-base print:mt-4 print:mb-2">
            EAUX MINÉRALES
          </h3>
          <div className="space-y-3 print:space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Vittel 25cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.00€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Vittel 50cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">5.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Vittel 1L</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">7.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">San Pellegrino 50cl</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">5.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">San Pellegrino 1L</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">7.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Supplément sirop</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">+0.50€</div>
            </div>
          </div>
        </div>

        {/* Boissons Chaudes */}
        <div className="mb-8 print:mb-6">
          <h2 className="text-2xl font-playfair font-bold text-navy mb-4 pb-2 border-b-2 border-navy print:text-xl print:mb-3">
            BOISSONS CHAUDES
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 print:gap-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Expresso</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">2.50€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Double Expresso</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.60€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Décaféiné</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">2.60€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Café noisette</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">2.60€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Café allongé</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">2.60€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Café crème</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Cappuccino</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">5.50€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Chocolat chaud</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Café ou Chocolat viennois</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">6.00€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Thé ou infusion</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.90€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Lait chaud</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">3.90€</div>
            </div>
          </div>
        </div>

        {/* Les Frappés */}
        <div className="mb-8 print:mb-6">
          <h2 className="text-2xl font-playfair font-bold text-navy mb-4 pb-2 border-b-2 border-navy print:text-xl print:mb-3">
            LES FRAPPÉS (glacés)
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 print:gap-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Frappuccino</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">6.00€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Café frappé</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.50€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Latte frappé</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">5.50€</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="font-bold">Lait fraise</span>
              </div>
              <div className="text-navy font-bold whitespace-nowrap">4.50€</div>
            </div>
          </div>
        </div>

        {/* Continue with other sections... */}
        {/* I'll continue with the rest in the next part due to length */}

        {/* Footer */}
        <div className="border-t-2 border-navy pt-6 print:pt-4">
          <div className="grid md:grid-cols-2 gap-6 print:gap-4 mb-6">
            <div>
              <h3 className="font-bold text-navy mb-2">Contact</h3>
              <p className="text-sm print:text-xs">Brother's restaurant Gennevilliers</p>
              <p className="text-sm print:text-xs">148 avenue Gabriel Péri - 92230 Gennevilliers</p>
              <p className="text-sm print:text-xs">☎ 01 47 90 25 72</p>
              <p className="text-sm print:text-xs">@brothersgenneviliers • brothers92230</p>
            </div>
            <div>
              <h3 className="font-bold text-navy mb-2">Horaires</h3>
              <p className="text-sm print:text-xs">
                <span className="font-medium">Ouverture:</span> Lundi au Vendredi de 7h à 20h • Samedi de 8h à 20h
              </p>
              <p className="text-sm print:text-xs">
                <span className="font-medium">Restauration:</span> Lundi au Samedi de 11h30 à 14h30
              </p>
              <p className="text-sm print:text-xs">
                <span className="font-medium">Parking Centre-Ville:</span> 2H GRATUITES* (*Ticket disponible chez votre
                commerçant)
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500 print:text-xs">
            <p>
              Tarifs en euro nets service compris. *Contient du porc. Pour votre santé, l'abus d'alcool est dangereux,
              consommez avec modération. Les chèques ne sont pas acceptés. Nous ne rendons pas la monnaie sur les titres
              restaurants. La maison se réserve le droit de modifier ses offres et ses prix sans préavis. Sauf erreurs
              typographiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
