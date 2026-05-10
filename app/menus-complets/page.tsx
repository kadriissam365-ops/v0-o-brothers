"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function MenusComplets() {
  const [activeTab, setActiveTab] = useState("menu-principal")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Nos Menus</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Découvrez notre carte complète avec nos plats traditionnels, salades composées, pizzas maison, desserts et
            boissons.
          </p>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Tabs defaultValue="menu-principal" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="menu-principal">Menu Principal</TabsTrigger>
              <TabsTrigger value="desserts-boissons">Desserts & Boissons</TabsTrigger>
            </TabsList>

            <TabsContent value="menu-principal" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-playfair font-bold text-navy">Menu Principal</h2>
                <Button className="bg-navy hover:bg-navy-light">
                  <Download className="mr-2 h-4 w-4" /> Télécharger le menu
                </Button>
              </div>

              {/* Menu du jour */}
              <div className="mb-12 p-6 bg-cream/30 rounded-lg border border-cream">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-4 text-center">Menu du Jour</h3>
                <div className="text-center mb-4">
                  <div className="text-xl font-bold mb-2">Plat + Dessert</div>
                  <div className="text-2xl font-bold text-navy mb-4">21,90€</div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-2 text-navy">PLAT AU CHOIX :</h4>
                    <ul className="space-y-2">
                      <li>Salade César</li>
                      <li>Salade de chèvre chaud</li>
                      <li>Escalope de poulet, crème de champignons, linguine</li>
                      <li>Linguine crème de truffes, jambon de Pays* ou aux fromages</li>
                      <li>Plat du jour</li>
                      <li>Pizza Regina ou Pizza Fermière</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-navy">DESSERT AU CHOIX :</h4>
                    <p>Dessert au choix (Thé et café gourmand +3,00€)</p>
                    <p className="mt-4">Supplément de garnitures ou légumes +3,00€</p>
                    <p className="text-sm mt-4 text-gray-500">Uniquement du lundi au vendredi (hors jours fériés)</p>
                  </div>
                </div>
              </div>

              {/* Salades Composées */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  SALADES COMPOSÉES
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">César salade</span> - salade, filet de poulet, œuf, tomates cerises,
                      croûtons, copeaux de parmesan
                    </div>
                    <div className="text-navy font-bold">16.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Chèvre chaud</span> - salade, chèvre sur toasts, œuf, jambon de parme*
                    </div>
                    <div className="text-navy font-bold">16.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Brother's salade</span> - salade, saumon fumé, œuf, avocats, tomates,
                      parmesan
                    </div>
                    <div className="text-navy font-bold">18.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Bowl saumon</span> - salade, riz, avocat, choux rouge, saumon mariné,
                      tomates cerises, carottes, fèves
                    </div>
                    <div className="text-navy font-bold">18.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Bowl poulet</span> - salade, riz, avocat, choux rouge, poulet mariné,
                      tomates cerises, carottes, fèves
                    </div>
                    <div className="text-navy font-bold">18.90 €</div>
                  </div>
                </div>
              </div>

              {/* Plats Traditionnels */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  PLATS TRADITIONNELS
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Escalope de poulet</span> - crème de champignons, linguine
                    </div>
                    <div className="text-navy font-bold">17.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Entrecôte grillée</span> - env. 300g au sel de Guérande et piment
                      d'Espelette, frites, salade
                    </div>
                    <div className="text-navy font-bold">24.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Bavette d'aloyau grillée</span> - env. 200g sauce au poivre, frites,
                      salade
                    </div>
                    <div className="text-navy font-bold">19.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Steak haché</span> - env. 180g Frites, salade (supplément œuf à cheval
                      : +1,50€)
                    </div>
                    <div className="text-navy font-bold">14.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Burger BROTHER'S</span> - viande hachée env. 180g, salade, tomate,
                      oignons rouges, cheddar, sauce burger
                    </div>
                    <div className="text-navy font-bold">16.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Burger Raclette</span> - viande hachée env. 180g, tomate, salade,
                      oignons rouges, raclette fondue, sauce burger
                    </div>
                    <div className="text-navy font-bold">17.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Tartare aux deux saumons</span> - coupé au couteau assaisonné, frites,
                      salade
                    </div>
                    <div className="text-navy font-bold">19.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Tartare de boeuf classique</span> - préparé, frites, salade (câpres,
                      oignons, persils, cornichons)
                    </div>
                    <div className="text-navy font-bold">18.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Pavé de saumon à la plancha</span> - Linguine pesto, sauce vierge
                    </div>
                    <div className="text-navy font-bold">18.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Linguine au saumon</span>
                    </div>
                    <div className="text-navy font-bold">17.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Linguine à la crème de truffes, jambon de Pays*</span>
                    </div>
                    <div className="text-navy font-bold">17.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Linguine aux fromages</span>
                    </div>
                    <div className="text-navy font-bold">17.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Croque-Monsieur*</span> - frites, salade
                    </div>
                    <div className="text-navy font-bold">13.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Croque-Madame*</span> - frites, salade
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                </div>
              </div>

              {/* Pizzas Maisons */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  PIZZAS MAISONS
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Margarita</span> - sauce tomate, mozzarella
                    </div>
                    <div className="text-navy font-bold">13.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Régina</span> - sauce tomate, mozzarella, champignons, jambon blanc*
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">4 Fromages</span> - sauce tomate, mozzarella, chèvre, parmesan,
                      camembert
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Végétarienne</span> - sauce tomate, mozzarella, oignons, poivrons,
                      champignons, tomates fraîches
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Calzone</span> - sauce tomate, mozzarella, jambon blanc*, oeuf
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Orientale</span> - sauce tomate, mozzarella, oignons, poivrons,
                      merguez, œuf
                    </div>
                    <div className="text-navy font-bold">15.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Norvégienne</span> - crème fraîche, mozzarella, saumon fumé
                    </div>
                    <div className="text-navy font-bold">16.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Raclette</span> - crème fraîche, mozzarella, pomme de terre, jambon*,
                      fromage raclette
                    </div>
                    <div className="text-navy font-bold">15.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Fermière</span> - crème fraîche, mozzarella, champignons, poulet
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Chèvre miel</span> - sauce tomate, mozzarella, chèvre, miel
                    </div>
                    <div className="text-navy font-bold">14.90 €</div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500 mt-8">
                <p>
                  Tarifs en euro nets service compris. *Contient du porc. Pour votre santé, l'abus d'alcool est
                  dangereux, consommez avec modération. Les chèques ne sont pas acceptés. Nous ne rendons pas la monnaie
                  sur les titres restaurants. La maison se réserve le droit de modifier ses offres et ses prix sans
                  préavis. Sauf erreurs typographiques.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="desserts-boissons" className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-playfair font-bold text-navy">Desserts & Boissons</h2>
                <Button className="bg-navy hover:bg-navy-light">
                  <Download className="mr-2 h-4 w-4" /> Télécharger le menu
                </Button>
              </div>

              {/* Desserts */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">Desserts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Dessert du jour</span> - voir tableau
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Tiramisu maison du moment</span>
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Crème brûlée</span>
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Brioche façon pain perdu</span> - avec sa boule de glace vanille
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Mœlleux au chocolat</span> - avec sa boule de glace vanille
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café gourmand</span> - accompagné de ses mignardises du moment
                    </div>
                    <div className="text-navy font-bold">9.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Thé gourmand</span> - accompagné de ses mignardises du moment
                    </div>
                    <div className="text-navy font-bold">11.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Assortiment de fromages</span> - selon arrivage
                    </div>
                    <div className="text-navy font-bold">9.90 €</div>
                  </div>
                </div>
              </div>

              {/* Coupes Glacées */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Coupes Glacées
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café liégeois</span> - Glace café, chantilly, coulis de café
                    </div>
                    <div className="text-navy font-bold">8.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Chocolat liégeois</span> - Glace chocolat, chantilly, coulis de
                      chocolat
                    </div>
                    <div className="text-navy font-bold">8.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Fraise Melba</span> - Glace fraise, glace vanille, chantilly, coulis
                      de fraise
                    </div>
                    <div className="text-navy font-bold">8.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Dame Blanche</span> - Glace vanille, chantilly, coulis de chocolat
                    </div>
                    <div className="text-navy font-bold">8.90 €</div>
                  </div>
                </div>

                <h4 className="text-xl font-bold mt-6 mb-4">AVEC ALCOOL</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Colonel</span> - Sorbet de citron vert, vodka 5cl
                    </div>
                    <div className="text-navy font-bold">11.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Mojito glacé</span> - Sorbet citron vert, rhum 5cl, citron vert,
                      menthe fraîche, sucre de canne
                    </div>
                    <div className="text-navy font-bold">11.90 €</div>
                  </div>
                </div>
              </div>

              {/* Glaces */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">Glaces</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">1 boule</span>
                    </div>
                    <div className="text-navy font-bold">3.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">2 boules</span>
                    </div>
                    <div className="text-navy font-bold">5.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Boule supplémentaire</span>
                    </div>
                    <div className="text-navy font-bold">+2.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Supplément chantilly</span>
                    </div>
                    <div className="text-navy font-bold">+1.50 €</div>
                  </div>
                </div>
                <p className="mt-4">
                  <span className="font-bold">Parfums au choix :</span> Chocolat, vanille, fraise, café, citron vert
                </p>
              </div>

              {/* Boissons chaudes */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Boissons chaudes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Expresso</span>
                    </div>
                    <div className="text-navy font-bold">2.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Double Expresso</span>
                    </div>
                    <div className="text-navy font-bold">4.60 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Décaféiné</span>
                    </div>
                    <div className="text-navy font-bold">2.60 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café noisette</span>
                    </div>
                    <div className="text-navy font-bold">2.60 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café allongé</span>
                    </div>
                    <div className="text-navy font-bold">2.60 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café crème</span>
                    </div>
                    <div className="text-navy font-bold">4.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Cappuccino</span>
                    </div>
                    <div className="text-navy font-bold">5.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Chocolat chaud</span>
                    </div>
                    <div className="text-navy font-bold">4.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café ou Chocolat viennois</span>
                    </div>
                    <div className="text-navy font-bold">6.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Thé ou infusion</span>
                    </div>
                    <div className="text-navy font-bold">4.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Lait chaud</span>
                    </div>
                    <div className="text-navy font-bold">3.90 €</div>
                  </div>
                </div>
              </div>

              {/* Les frappés */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Les frappés (glacés)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Frappuccino</span>
                    </div>
                    <div className="text-navy font-bold">6.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Café frappé</span>
                    </div>
                    <div className="text-navy font-bold">4.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Latte frappé</span>
                    </div>
                    <div className="text-navy font-bold">5.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Lait fraise</span>
                    </div>
                    <div className="text-navy font-bold">4.50 €</div>
                  </div>
                </div>
              </div>

              {/* Boissons fraîches */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Boissons fraîches
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Jus de fruits 25cl</span>
                      <div className="text-sm">Ananas, orange, pomme, abricot, pamplemousse, tomate, ACE</div>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Orangina 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Schweppes Tonic ou Agrumes 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Limonade bouteille 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Ice Tea 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Red Bull 25cl</span>
                    </div>
                    <div className="text-navy font-bold">5.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Oranges ou Citrons pressés 25cl</span>
                    </div>
                    <div className="text-navy font-bold">6.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Coca-Cola, Coca-Cola zero 33cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Fanta orange 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Oasis 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.70 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Perrier 33cl</span>
                    </div>
                    <div className="text-navy font-bold">4.90 €</div>
                  </div>
                </div>

                <h4 className="text-xl font-bold mt-6 mb-4">EAUX MINÉRALES</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Vittel 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Vittel 50cl</span>
                    </div>
                    <div className="text-navy font-bold">5.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Vittel 1L</span>
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">San Pellegrino 50cl</span>
                    </div>
                    <div className="text-navy font-bold">5.90 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">San Pellegrino 1L</span>
                    </div>
                    <div className="text-navy font-bold">7.90 €</div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="font-bold">Supplément sirop</span>{" "}
                  <span className="text-navy font-bold">+0.50 €</span>
                </div>
              </div>

              {/* Apéritifs & Digestifs */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Apéritifs & Digestifs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Ricard ou Pastis 2cl</span>
                    </div>
                    <div className="text-navy font-bold">4.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Kir cassis, mûres, pêche ou framboise 14cl</span>
                    </div>
                    <div className="text-navy font-bold">5.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Kir royal cassis, mûres, pêche ou framboise 12cl</span>
                    </div>
                    <div className="text-navy font-bold">11.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Coupe de champagne 12cl</span>
                    </div>
                    <div className="text-navy font-bold">11.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Martini blanc ou rouge 5cl</span>
                    </div>
                    <div className="text-navy font-bold">5.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Porto blanc ou rouge 5cl</span>
                    </div>
                    <div className="text-navy font-bold">5.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Baileys 4cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Vodka 4cl</span>
                    </div>
                    <div className="text-navy font-bold">8.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Vodka Grey Goose 4cl</span>
                    </div>
                    <div className="text-navy font-bold">13.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">J&B ou Clan Campbell 4cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Chivas Regal 12ans 4cl</span>
                    </div>
                    <div className="text-navy font-bold">9.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Jack Daniel's 4cl</span>
                    </div>
                    <div className="text-navy font-bold">9.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Nikka From the Barrel 4cl</span>
                    </div>
                    <div className="text-navy font-bold">13.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Poire Williams 4cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Calvados 4cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Cognac 4cl</span>
                    </div>
                    <div className="text-navy font-bold">8.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Armagnac 4cl</span>
                    </div>
                    <div className="text-navy font-bold">8.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Get 27 5cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Get 31 5cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Gin 4cl</span>
                    </div>
                    <div className="text-navy font-bold">8.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Limoncello ou Manzana 5cl</span>
                    </div>
                    <div className="text-navy font-bold">7.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Rhum Diplomatico 4cl</span>
                    </div>
                    <div className="text-navy font-bold">11.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Rhum Don Papa 4cl</span>
                    </div>
                    <div className="text-navy font-bold">11.00 €</div>
                  </div>
                </div>
              </div>

              {/* Bières Bouteilles */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Bières Bouteilles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Heineken 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Desperados 33cl</span>
                    </div>
                    <div className="text-navy font-bold">6.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Super Bock 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.50 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Leffe Ruby 25cl</span>
                    </div>
                    <div className="text-navy font-bold">4.80 €</div>
                  </div>
                </div>
              </div>

              {/* Bières Pressions */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Bières Pressions
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        <th className="text-right">25 cl</th>
                        <th className="text-right">50 cl</th>
                        <th className="text-right">Happy Hour</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Alex beer</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">6.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Alex beer Abbaye</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.80 €</td>
                        <td className="text-right text-navy font-bold">9.00 €</td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">La Chouffe</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.80 €</td>
                        <td className="text-right text-navy font-bold">9.00 €</td>
                        <td className="text-right text-navy font-bold">8.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Meteor Blanche</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Panaché</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.50 €</td>
                        <td className="text-right text-navy font-bold">8.00 €</td>
                        <td className="text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Picon bière</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Monaco</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right"></td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Meteor IPA</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.80 €</td>
                        <td className="text-right text-navy font-bold">9.00 €</td>
                        <td className="text-right"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm">
                  <p>
                    <span className="font-bold">Happy Hour :</span> de 17h à 20h
                  </p>
                </div>
              </div>

              {/* Planches à partager */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Planches à partager
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        <th className="text-right">Petite</th>
                        <th className="text-right">Grande</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Planche de charcuterie*</span>
                        </td>
                        <td className="text-right text-navy font-bold">12.90 €</td>
                        <td className="text-right text-navy font-bold">17.90 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Planche de fromages</span>
                        </td>
                        <td className="text-right text-navy font-bold">12.90 €</td>
                        <td className="text-right text-navy font-bold">17.90 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Planche Mixte* (charcuterie et fromages)</span>
                        </td>
                        <td className="text-right text-navy font-bold">12.90 €</td>
                        <td className="text-right text-navy font-bold">17.90 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm">
                  <p>
                    <span className="font-bold">à partir de 14h30</span>
                  </p>
                </div>
              </div>

              {/* Vins */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Vins supérieurs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        <th className="text-right">14 cl</th>
                        <th className="text-right">25 cl</th>
                        <th className="text-right">50 cl</th>
                        <th className="text-right">75 cl</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 font-bold" colSpan={5}>
                          ROUGES
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Côtes du Rhône AOP</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.90 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">15.00 €</td>
                        <td className="text-right text-navy font-bold">22.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Médoc « Château Roquegrave » AOC</span>
                        </td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                        <td className="text-right text-navy font-bold">13.50 €</td>
                        <td className="text-right text-navy font-bold">22.50 €</td>
                        <td className="text-right text-navy font-bold">34.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Saint-Estèphe « Marquis Prestige » AOP</span>
                        </td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                        <td className="text-right text-navy font-bold">14.00 €</td>
                        <td className="text-right text-navy font-bold">25.00 €</td>
                        <td className="text-right text-navy font-bold">37.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold" colSpan={5}>
                          ROSÉS
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Le Brise Marine IGP</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.90 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">15.00 €</td>
                        <td className="text-right text-navy font-bold">22.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Château Léoube AOP</span>
                        </td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                        <td className="text-right text-navy font-bold">13.50 €</td>
                        <td className="text-right text-navy font-bold">25.00 €</td>
                        <td className="text-right text-navy font-bold">37.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Love By Léoube AOP</span>
                        </td>
                        <td className="text-right text-navy font-bold">6.50 €</td>
                        <td className="text-right text-navy font-bold">11.00 €</td>
                        <td className="text-right text-navy font-bold">20.00 €</td>
                        <td className="text-right text-navy font-bold">29.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold" colSpan={5}>
                          BLANCS
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Chardonnay IGP</span>
                        </td>
                        <td className="text-right text-navy font-bold">4.90 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">15.00 €</td>
                        <td className="text-right text-navy font-bold">22.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Pouilly fumé AOC</span>
                        </td>
                        <td className="text-right text-navy font-bold">7.50 €</td>
                        <td className="text-right text-navy font-bold">13.50 €</td>
                        <td className="text-right text-navy font-bold">25.00 €</td>
                        <td className="text-right text-navy font-bold">37.00 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Champagnes */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Champagnes
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Coupe de champagne « Collet » 12cl</span>
                    </div>
                    <div className="text-navy font-bold">11.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Collet 75cl</span>
                    </div>
                    <div className="text-navy font-bold">70.00 €</div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-bold">Ruinart 75cl</span>
                    </div>
                    <div className="text-navy font-bold">120.00 €</div>
                  </div>
                </div>
              </div>

              {/* Cocktails */}
              <div className="mb-12">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-6 pb-2 border-b border-cream">
                  Cocktails
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        <th className="text-right">Prix</th>
                        <th className="text-right">Happy Hour</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Mojito</span> - Rhum 5cl, menthe fraîche, citron vert, Perrier,
                          sucre de canne
                        </td>
                        <td className="text-right text-navy font-bold">10.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Tequila Sunrise</span> - Tequila 5cl, jus d'orange, sirop de
                          grenadine
                        </td>
                        <td className="text-right text-navy font-bold">10.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Malibu Sunset</span> - Malibu 5cl, jus d'ananas, sirop de fraise
                        </td>
                        <td className="text-right text-navy font-bold">10.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Red Mojito</span> - Rhum 5cl, menthe fraîche, coulis de fruits
                          rouges, Perrier, sucre de canne
                        </td>
                        <td className="text-right text-navy font-bold">11.00 €</td>
                        <td className="text-right text-navy font-bold">9.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Royal Mojito</span> - Rhum 5cl, menthe fraîche, citron vert, sucre
                          de canne, champagne
                        </td>
                        <td className="text-right text-navy font-bold">12.50 €</td>
                        <td className="text-right text-navy font-bold">9.90 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Spritz</span> - Apérol 6cl, Prosecco 6cl, Perrier
                        </td>
                        <td className="text-right text-navy font-bold">10.50 €</td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Spritz St Germain</span> - St Germain (Liqueur de sureau) 5cl,
                          Prosecco 6cl, Perrier
                        </td>
                        <td className="text-right text-navy font-bold">11.00 €</td>
                        <td className="text-right text-navy font-bold">9.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Virgin Mojito</span> - Menthe fraîche, citron vert, Perrier, sucre
                          de canne
                        </td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">7.00 €</td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <span className="font-bold">Virgin Colada</span> - Jus d'ananas, lait de coco, crème de coco
                        </td>
                        <td className="text-right text-navy font-bold">8.50 €</td>
                        <td className="text-right text-navy font-bold">7.00 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm">
                  <p>
                    <span className="font-bold">Happy Hour :</span> de 17h à 20h
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
