"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Menu data for ordering
const menuData = {
  salades: [
    {
      id: "salade-cesar",
      name: "César salade",
      description: "Salade, filet de poulet, œuf, tomates cerises, croûtons, copeaux de parmesan",
      price: 16.9,
      image: "/gourmet-caesar-salad.png",
    },
    {
      id: "salade-chevre",
      name: "Chèvre chaud",
      description: "Salade, chèvre sur toasts, œuf, jambon de parme*",
      price: 16.9,
      image: "/placeholder.svg",
    },
    {
      id: "salade-brothers",
      name: "Brother's salade",
      description: "Salade, saumon fumé, œuf, avocats, tomates, parmesan",
      price: 18.9,
      image: "/placeholder.svg",
    },
    {
      id: "bowl-saumon",
      name: "Bowl saumon",
      description: "Salade, riz, avocat, choux rouge, saumon mariné, tomates cerises, carottes, fèves",
      price: 18.9,
      image: "/images/gallery/plats/bowl-saumon.png",
    },
    {
      id: "bowl-poulet",
      name: "Bowl poulet",
      description: "Salade, riz, avocat, choux rouge, poulet mariné, tomates cerises, carottes, fèves",
      price: 18.9,
      image: "/placeholder.svg",
    },
  ],
  plats: [
    {
      id: "escalope-poulet",
      name: "Escalope de poulet",
      description: "Crème de champignons, linguine",
      price: 17.9,
      image: "/images/plats/escalope-poulet.png",
    },
    {
      id: "entrecote",
      name: "Entrecôte grillée env. 300g",
      description: "Au sel de Guérande et piment d'Espelette, frites, salade",
      price: 24.9,
      image: "/images/plats/entrecote.png",
    },
    {
      id: "bavette",
      name: "Bavette d'aloyau grillée env. 200g",
      description: "Sauce au poivre, frites, salade",
      price: 19.9,
      image: "/images/plats/bavette.png",
    },
    {
      id: "steak-hache",
      name: "Steak haché env. 180g",
      description: "Frites, salade (supplément œuf à cheval : +1,50€)",
      price: 14.5,
      image: "/images/plats/steak-hache.png",
    },
    {
      id: "burger-brothers",
      name: "Burger BROTHER'S",
      description: "Viande hachée env. 180g, salade, tomate, oignons rouges, cheddar, sauce burger",
      price: 16.9,
      image: "/images/plats/burger-brothers.png",
    },
    {
      id: "burger-raclette",
      name: "Burger Raclette",
      description: "Viande hachée env. 180g, tomate, salade, oignons rouges, raclette fondue, sauce burger",
      price: 17.9,
      image: "/images/plats/burger-raclette.png",
    },
    {
      id: "tartare-saumon",
      name: "Tartare aux deux saumons",
      description: "Coupé au couteau assaisonné, frites, salade",
      price: 19.9,
      image: "/images/plats/tartare-saumon.png",
    },
    {
      id: "tartare-boeuf",
      name: "Tartare de boeuf classique",
      description: "Préparé, frites, salade (câpres, oignons, persils, cornichons)",
      price: 18.9,
      image: "/images/plats/tartare-boeuf.png",
    },
  ],
  pizzas: [
    {
      id: "pizza-margarita",
      name: "Margarita",
      description: "Sauce tomate, mozzarella",
      price: 13.9,
      image: "/images/gallery/pizzas/margarita.png",
    },
    {
      id: "pizza-regina",
      name: "Régina",
      description: "Sauce tomate, mozzarella, champignons, jambon blanc*",
      price: 14.9,
      image: "/images/gallery/pizzas/regina.png",
    },
    {
      id: "pizza-4-fromages",
      name: "4 Fromages",
      description: "Sauce tomate, mozzarella, chèvre, parmesan, camembert",
      price: 14.9,
      image: "/images/gallery/pizzas/4-fromages.png",
    },
    {
      id: "pizza-vegetarienne",
      name: "Végétarienne",
      description: "Sauce tomate, mozzarella, oignons, poivrons, champignons, tomates fraîches",
      price: 14.9,
      image: "/placeholder.svg",
    },
    {
      id: "pizza-calzone",
      name: "Calzone",
      description: "Sauce tomate, mozzarella, jambon blanc*, oeuf",
      price: 14.9,
      image: "/placeholder.svg",
    },
    {
      id: "pizza-orientale",
      name: "Orientale",
      description: "Sauce tomate, mozzarella, oignons, poivrons, merguez, œuf",
      price: 15.9,
      image: "/placeholder.svg",
    },
    {
      id: "pizza-norvegienne",
      name: "Norvégienne",
      description: "Crème fraîche, mozzarella, saumon fumé",
      price: 16.9,
      image: "/images/gallery/pizzas/norvegienne.png",
    },
    {
      id: "pizza-raclette",
      name: "Raclette",
      description: "Crème fraîche, mozzarella, pomme de terre, jambon*, fromage raclette",
      price: 15.9,
      image: "/placeholder.svg",
    },
    {
      id: "pizza-fermiere",
      name: "Fermière",
      description: "Crème fraîche, mozzarella, champignons, poulet",
      price: 14.9,
      image: "/placeholder.svg",
    },
    {
      id: "pizza-chevre-miel",
      name: "Chèvre miel",
      description: "Sauce tomate, mozzarella, chèvre, miel",
      price: 14.9,
      image: "/placeholder.svg",
    },
  ],
  desserts: [
    {
      id: "dessert-jour",
      name: "Dessert du jour",
      description: "Voir tableau",
      price: 7.9,
      image: "/french-chocolate-vanilla-dessert.png",
    },
    {
      id: "tiramisu",
      name: "Tiramisu",
      description: "Maison du moment",
      price: 7.9,
      image: "/images/gallery/desserts/tiramisu.png",
    },
    {
      id: "creme-brulee",
      name: "Crème brûlée",
      description: "",
      price: 7.9,
      image: "/images/gallery/desserts/creme-brulee.png",
    },
    {
      id: "pain-perdu",
      name: "Brioche façon pain perdu",
      description: "Avec sa boule de glace vanille",
      price: 7.9,
      image: "/placeholder.svg",
    },
    {
      id: "moelleux",
      name: "Mœlleux au chocolat",
      description: "Avec sa boule de glace vanille",
      price: 7.9,
      image: "/images/gallery/desserts/moelleux-chocolat.png",
    },
    {
      id: "cafe-gourmand",
      name: "Café gourmand",
      description: "Accompagné de ses mignardises du moment",
      price: 9.9,
      image: "/images/gallery/desserts/cafe-gourmand.png",
    },
    {
      id: "the-gourmand",
      name: "Thé gourmand",
      description: "Accompagné de ses mignardises du moment",
      price: 11.9,
      image: "/placeholder.svg",
    },
  ],
  boissons_fraiches: [
    {
      id: "jus-fruits",
      name: "Jus de fruits",
      description: "Ananas, orange, pomme, abricot, pamplemousse, tomate, ACE 25cl",
      price: 4.7,
      image: "fruit juice",
    },
    {
      id: "orangina",
      name: "Orangina",
      description: "25cl",
      price: 4.7,
      image: "orangina bottle",
    },
    {
      id: "schweppes",
      name: "Schweppes Tonic ou Agrumes",
      description: "25cl",
      price: 4.7,
      image: "schweppes bottle",
    },
    {
      id: "limonade",
      name: "Limonade bouteille",
      description: "25cl",
      price: 4.7,
      image: "lemonade bottle",
    },
    {
      id: "ice-tea",
      name: "Ice Tea",
      description: "25cl",
      price: 4.7,
      image: "ice tea bottle",
    },
    {
      id: "red-bull",
      name: "Red Bull",
      description: "25cl",
      price: 5.5,
      image: "red bull can",
    },
    {
      id: "coca-cola",
      name: "Coca-Cola, Coca-Cola zero",
      description: "33cl",
      price: 4.7,
      image: "coca cola bottle",
    },
  ],
  boissons_chaudes: [
    {
      id: "expresso",
      name: "Expresso",
      description: "",
      price: 2.5,
      image: "espresso coffee",
    },
    {
      id: "double-expresso",
      name: "Double Expresso",
      description: "",
      price: 4.6,
      image: "double espresso coffee",
    },
    {
      id: "cafe-creme",
      name: "Café crème",
      description: "",
      price: 4.9,
      image: "coffee with cream",
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      description: "",
      price: 5.5,
      image: "cappuccino coffee",
    },
    {
      id: "chocolat-chaud",
      name: "Chocolat chaud",
      description: "",
      price: 4.9,
      image: "hot chocolate",
    },
    {
      id: "the-infusion",
      name: "Thé ou infusion",
      description: "",
      price: 4.9,
      image: "tea or herbal tea",
    },
  ],
  cocktails: [
    {
      id: "mojito",
      name: "Mojito",
      description: "Rhum 5cl, menthe fraîche, citron vert, Perrier, sucre de canne",
      price: 10.5,
      image: "mojito cocktail",
    },
    {
      id: "tequila-sunrise",
      name: "Tequila Sunrise",
      description: "Tequila 5cl, jus d'orange, sirop de grenadine",
      price: 10.5,
      image: "tequila sunrise cocktail",
    },
    {
      id: "malibu-sunset",
      name: "Malibu Sunset",
      description: "Malibu 5cl, jus d'ananas, sirop de fraise",
      price: 10.5,
      image: "malibu sunset cocktail",
    },
    {
      id: "spritz",
      name: "Spritz",
      description: "Apérol 6cl, Prosecco 6cl, Perrier",
      price: 10.5,
      image: "spritz cocktail",
    },
  ],
  mocktails: [
    {
      id: "virgin-mojito",
      name: "Virgin Mojito",
      description: "Menthe fraîche, citron vert, Perrier, sucre de canne",
      price: 9.5,
      image: "virgin mojito mocktail",
    },
    {
      id: "brothers",
      name: "Brother's",
      description: "Jus d'orange, jus d'ananas, jus de pamplemousse, sirop de grenadine",
      price: 9.5,
      image: "brothers mocktail",
    },
  ],
}

// Cart item type
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

export default function OrderPage() {
  const { toast } = useToast()
  const [isLoaded, setIsLoaded] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    pickupTime: "",
    notes: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const addToCart = (item: { id: string; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })

    toast({
      title: "Ajouté au panier",
      description: `${item.name} a été ajouté à votre panier.`,
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()

    const itemsList = cart
      .map((item) => `- ${item.name} x${item.quantity} = ${(item.price * item.quantity).toFixed(2)} €`)
      .join("\n")

    const body = `NOUVELLE COMMANDE À EMPORTER\n\n` +
      `Client : ${customerInfo.name}\n` +
      `Téléphone : ${customerInfo.phone}\n` +
      `Email : ${customerInfo.email}\n` +
      `Heure de retrait : ${customerInfo.pickupTime}\n` +
      `Notes : ${customerInfo.notes || "Aucune"}\n\n` +
      `ARTICLES :\n${itemsList}\n\n` +
      `TOTAL : ${getTotalPrice().toFixed(2)} €`

    const mailtoUrl = `mailto:contact@brothers-restaurant-gennevilliers.com?subject=${encodeURIComponent(
      `Commande à emporter — ${customerInfo.name}`
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl

    toast({
      title: "Commande envoyée !",
      description: `Votre client mail s'est ouvert. Envoyez l'email pour confirmer votre commande.`,
    })

    setCart([])
    setIsCheckoutOpen(false)
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      pickupTime: "",
      notes: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Commander en ligne</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Commandez vos plats préférés à emporter. Votre commande sera prête à l&apos;heure que vous aurez choisie.
          </p>
        </div>

        {isLoaded && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative">
            {/* Cart button */}
            <div className="fixed bottom-6 right-6 z-40">
              <Button
                onClick={() => setIsCartOpen(true)}
                className="bg-navy hover:bg-navy-light rounded-full h-16 w-16 p-0 shadow-lg"
                aria-label={`Voir le panier (${getTotalItems()} article${getTotalItems() > 1 ? "s" : ""})`}
              >
                <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-white text-navy">{getTotalItems()}</Badge>
                )}
              </Button>
            </div>

            {/* Menu tabs */}
            <Tabs defaultValue="salades" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full mb-8">
                <TabsTrigger value="salades">Salades</TabsTrigger>
                <TabsTrigger value="plats">Plats</TabsTrigger>
                <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="boissons">Boissons</TabsTrigger>
                <TabsTrigger value="cocktails">Cocktails</TabsTrigger>
              </TabsList>

              <TabsContent value="salades">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.salades.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="plats">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.plats.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pizzas">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.pizzas.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="desserts">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.desserts.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="boissons">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.boissons_fraiches.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">Boissons Chaudes</h3>
                </div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.boissons_chaudes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="cocktails">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.cocktails.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">
                    Mocktails (sans alcool)
                  </h3>
                </div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData.mocktails.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="overflow-hidden h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:col-span-2 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                                <span className="text-navy font-bold">{item.price.toFixed(2)} €</span>
                              </div>
                              <p className="text-gray-600 mb-4">{item.description}</p>
                            </div>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-navy hover:bg-navy-light w-full md:w-auto md:self-end"
                            >
                              Ajouter au panier
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>

            {/* Cart sidebar */}
            {isCartOpen && (
              <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
                <div className="bg-white w-full max-w-md h-full overflow-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-playfair font-bold">Votre panier</h2>
                      <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingCart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500">Votre panier est vide</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 mb-8">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-4">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-navy">{item.price.toFixed(2)} €</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  aria-label={`Diminuer la quantité de ${item.name}`}
                                >
                                  <Minus className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <span className="w-8 text-center" aria-live="polite" aria-label={`Quantité : ${item.quantity}`}>{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  aria-label={`Augmenter la quantité de ${item.name}`}
                                >
                                  <Plus className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 ml-2"
                                  aria-label={`Supprimer ${item.name} du panier`}
                                >
                                  <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t pt-4 mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span>Sous-total</span>
                            <span>{getTotalPrice().toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total</span>
                            <span>{getTotalPrice().toFixed(2)} €</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => {
                            setIsCartOpen(false)
                            setIsCheckoutOpen(true)
                          }}
                          className="w-full bg-navy hover:bg-navy-light"
                        >
                          Commander
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Checkout modal */}
            {isCheckoutOpen && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-playfair font-bold">Finaliser la commande</h2>
                      <button onClick={() => setIsCheckoutOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <form onSubmit={handleCheckout} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium">
                          Nom et prénom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border rounded-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block font-medium">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border rounded-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border rounded-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="pickupTime" className="block font-medium">
                          Heure de retrait
                        </label>
                        <select
                          id="pickupTime"
                          name="pickupTime"
                          value={customerInfo.pickupTime}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Sélectionnez une heure</option>
                          <option value="11:45">11:45</option>
                          <option value="12:00">12:00</option>
                          <option value="12:15">12:15</option>
                          <option value="12:30">12:30</option>
                          <option value="12:45">12:45</option>
                          <option value="13:00">13:00</option>
                          <option value="13:15">13:15</option>
                          <option value="13:30">13:30</option>
                          <option value="13:45">13:45</option>
                          <option value="14:00">14:00</option>
                          <option value="14:15">14:15</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="notes" className="block font-medium">
                          Notes (optionnel)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={customerInfo.notes}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-2 border rounded-md"
                          placeholder="Précisez vos demandes particulières (allergies, etc.)"
                        ></textarea>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Total</span>
                          <span className="font-bold">{getTotalPrice().toFixed(2)} €</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Paiement sur place lors du retrait de votre commande.
                        </p>
                      </div>

                      <Button type="submit" className="w-full bg-navy hover:bg-navy-light">
                        Confirmer la commande
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
      <p className="text-sm text-gray-500 text-center mt-4">
        * Contient du porc. Pour votre santé, l'abus d'alcool est dangereux, consommez avec modération.
      </p>
    </div>
  )
}
