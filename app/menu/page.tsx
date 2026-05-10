"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, GlassWater, Coffee, Martini, Leaf, Snowflake, Wine, Maximize, X, Search } from "lucide-react"

// Menu item translations
const menuItemTranslations = {
  salades: {
    cesar: {
      fr: {
        name: "César salade",
        description: "Salade, filet de poulet, œuf, tomates cerises, croûtons, copeaux de parmesan",
      },
      en: {
        name: "Caesar Salad",
        description: "Lettuce, chicken fillet, egg, cherry tomatoes, croutons, parmesan shavings",
      },
      es: {
        name: "Ensalada César",
        description: "Lechuga, filete de pollo, huevo, tomates cherry, picatostes, virutas de parmesano",
      },
    },
    chevre: {
      fr: {
        name: "Chèvre chaud",
        description: "Salade, chèvre sur toasts, œuf, jambon de parme*",
      },
      en: {
        name: "Warm Goat Cheese",
        description: "Lettuce, goat cheese on toasts, egg, Parma ham*",
      },
      es: {
        name: "Queso de cabra caliente",
        description: "Lechuga, queso de cabra en tostadas, huevo, jamón de Parma*",
      },
    },
    brothers: {
      fr: {
        name: "Brother's salade",
        description: "Salade, saumon fumé, œuf, avocats, tomates, parmesan",
      },
      en: {
        name: "Brother's Salad",
        description: "Lettuce, smoked salmon, egg, avocados, tomatoes, parmesan",
      },
      es: {
        name: "Ensalada Brother's",
        description: "Lechuga, salmón ahumado, huevo, aguacates, tomates, parmesano",
      },
    },
    "bowl-saumon": {
      fr: {
        name: "Bowl saumon",
        description: "Salade, riz, avocat, choux rouge, saumon mariné, tomates cerises, carottes, fèves",
      },
      en: {
        name: "Salmon Bowl",
        description: "Lettuce, rice, avocado, red cabbage, marinated salmon, cherry tomatoes, carrots, beans",
      },
      es: {
        name: "Bowl de salmón",
        description: "Lechuga, arroz, aguacate, col morada, salmón marinado, tomates cherry, zanahorias, habas",
      },
    },
    "bowl-poulet": {
      fr: {
        name: "Bowl poulet",
        description: "Salade, riz, avocat, choux rouge, poulet mariné, tomates cerises, carottes, fèves",
      },
      en: {
        name: "Chicken Bowl",
        description: "Lettuce, rice, avocado, red cabbage, marinated chicken, cherry tomatoes, carrots, beans",
      },
      es: {
        name: "Bowl de pollo",
        description: "Lechuga, arroz, aguacate, col morada, pollo marinado, tomates cherry, zanahorias, habas",
      },
    },
  },
  plats: {
    escalope: {
      fr: {
        name: "Escalope de poulet",
        description: "Crème de champignons, linguine",
      },
      en: {
        name: "Chicken Escalope",
        description: "Mushroom cream, linguine",
      },
      es: {
        name: "Escalope de pollo",
        description: "Crema de champiñones, linguine",
      },
    },
    entrecote: {
      fr: {
        name: "Entrecôte grillée env. 300g",
        description: "Au sel de Guérande et piment d'Espelette, frites, salade",
      },
      en: {
        name: "Grilled Rib Steak approx. 300g",
        description: "With Guérande salt and Espelette pepper, fries, salad",
      },
      es: {
        name: "Entrecot a la parrilla aprox. 300g",
        description: "Con sal de Guérande y pimiento de Espelette, patatas fritas, ensalada",
      },
    },
    bavette: {
      fr: {
        name: "Bavette d'aloyau grillée env. 200g",
        description: "Sauce au poivre, frites, salade",
      },
      en: {
        name: "Grilled Flank Steak approx. 200g",
        description: "Pepper sauce, fries, salad",
      },
      es: {
        name: "Bavette a la parrilla aprox. 200g",
        description: "Salsa de pimienta, patatas fritas, ensalada",
      },
    },
    "steak-hache": {
      fr: {
        name: "Steak haché env. 180g",
        description: "Frites, salade (supplément œuf à cheval : +1,50€)",
      },
      en: {
        name: "Ground Beef Steak approx. 180g",
        description: "Fries, salad (fried egg supplement: +1.50€)",
      },
      es: {
        name: "Filete de carne picada aprox. 180g",
        description: "Patatas fritas, ensalada (suplemento huevo frito: +1,50€)",
      },
    },
    "burger-brothers": {
      fr: {
        name: "Burger BROTHER'S",
        description: "Viande hachée env. 180g, salade, tomate, oignons rouges, cheddar, sauce burger",
      },
      en: {
        name: "BROTHER'S Burger",
        description: "Ground beef approx. 180g, lettuce, tomato, red onions, cheddar, burger sauce",
      },
      es: {
        name: "Hamburguesa BROTHER'S",
        description: "Carne picada aprox. 180g, lechuga, tomate, cebollas rojas, cheddar, salsa burger",
      },
    },
    "burger-raclette": {
      fr: {
        name: "Burger Raclette",
        description: "Viande hachée env. 180g, tomate, salade, oignons rouges, raclette fondue, sauce burger",
      },
      en: {
        name: "Raclette Burger",
        description: "Ground beef approx. 180g, tomato, lettuce, red onions, melted raclette, burger sauce",
      },
      es: {
        name: "Hamburguesa Raclette",
        description: "Carne picada aprox. 180g, tomate, lechuga, cebollas rojas, raclette fundida, salsa burger",
      },
    },
    "tartare-saumon": {
      fr: {
        name: "Tartare aux deux saumons",
        description: "Coupé au couteau assaisonné, frites, salade",
      },
      en: {
        name: "Two Salmon Tartare",
        description: "Hand-cut seasoned, fries, salad",
      },
      es: {
        name: "Tartar de dos salmones",
        description: "Cortado a cuchillo sazonado, patatas fritas, ensalada",
      },
    },
    "tartare-boeuf": {
      fr: {
        name: "Tartare de boeuf classique",
        description: "Préparé, frites, salade (câpres, oignons, persils, cornichons)",
      },
      en: {
        name: "Classic Beef Tartare",
        description: "Prepared, fries, salad (capers, onions, parsley, pickles)",
      },
      es: {
        name: "Tartar de ternera clásico",
        description: "Preparado, patatas fritas, ensalada (alcaparras, cebollas, perejil, pepinillos)",
      },
    },
    "pave-saumon": {
      fr: {
        name: "Pavé de saumon à la plancha",
        description: "Linguine pesto, sauce vierge",
      },
      en: {
        name: "Grilled Salmon Fillet",
        description: "Pesto linguine, virgin sauce",
      },
      es: {
        name: "Filete de salmón a la plancha",
        description: "Linguine al pesto, salsa virgen",
      },
    },
    "linguine-saumon": {
      fr: {
        name: "Linguine au saumon",
        description: "",
      },
      en: {
        name: "Salmon Linguine",
        description: "",
      },
      es: {
        name: "Linguine con salmón",
        description: "",
      },
    },
    "linguine-truffes": {
      fr: {
        name: "Linguine à la crème de truffes, jambon de Pays*",
        description: "",
      },
      en: {
        name: "Linguine with truffle cream, Country ham*",
        description: "",
      },
      es: {
        name: "Linguine con crema de trufas, jamón serrano*",
        description: "",
      },
    },
    "linguine-fromages": {
      fr: {
        name: "Linguine aux fromages",
        description: "",
      },
      en: {
        name: "Cheese Linguine",
        description: "",
      },
      es: {
        name: "Linguine con quesos",
        description: "",
      },
    },
    "croque-monsieur": {
      fr: {
        name: "Croque-Monsieur*",
        description: "frites, salade",
      },
      en: {
        name: "Croque-Monsieur*",
        description: "fries, salad",
      },
      es: {
        name: "Croque-Monsieur*",
        description: "patatas fritas, ensalada",
      },
    },
    "croque-madame": {
      fr: {
        name: "Croque-Madame*",
        description: "frites, salade",
      },
      en: {
        name: "Croque-Madame*",
        description: "fries, salad",
      },
      es: {
        name: "Croque-Madame*",
        description: "patatas fritas, ensalada",
      },
    },
  },
  pizzas: {
    margarita: {
      fr: {
        name: "Margarita",
        description: "Sauce tomate, mozzarella",
      },
      en: {
        name: "Margarita",
        description: "Tomato sauce, mozzarella",
      },
      es: {
        name: "Margarita",
        description: "Salsa de tomate, mozzarella",
      },
    },
    regina: {
      fr: {
        name: "Régina",
        description: "Sauce tomate, mozzarella, champignons, jambon blanc*",
      },
      en: {
        name: "Regina",
        description: "Tomato sauce, mozzarella, mushrooms, ham*",
      },
      es: {
        name: "Regina",
        description: "Salsa de tomate, mozzarella, champiñones, jamón*",
      },
    },
    "4-fromages": {
      fr: {
        name: "4 Fromages",
        description: "Sauce tomate, mozzarella, chèvre, parmesan, camembert",
      },
      en: {
        name: "4 Cheeses",
        description: "Tomato sauce, mozzarella, goat cheese, parmesan, camembert",
      },
      es: {
        name: "4 Quesos",
        description: "Salsa de tomate, mozzarella, queso de cabra, parmesano, camembert",
      },
    },
    vegetarienne: {
      fr: {
        name: "Végétarienne",
        description: "Sauce tomate, mozzarella, oignons, poivrons, champignons, tomates fraîches",
      },
      en: {
        name: "Vegetarian",
        description: "Tomato sauce, mozzarella, onions, peppers, mushrooms, fresh tomatoes",
      },
      es: {
        name: "Vegetariana",
        description: "Salsa de tomate, mozzarella, cebollas, pimientos, champiñones, tomates frescos",
      },
    },
    calzone: {
      fr: {
        name: "Calzone",
        description: "Sauce tomate, mozzarella, jambon blanc*, oeuf",
      },
      en: {
        name: "Calzone",
        description: "Tomato sauce, mozzarella, ham*, egg",
      },
      es: {
        name: "Calzone",
        description: "Salsa de tomate, mozzarella, jamón*, huevo",
      },
    },
    orientale: {
      fr: {
        name: "Orientale",
        description: "Sauce tomate, mozzarella, oignons, poivrons, merguez, œuf",
      },
      en: {
        name: "Oriental",
        description: "Tomato sauce, mozzarella, onions, peppers, merguez, egg",
      },
      es: {
        name: "Oriental",
        description: "Salsa de tomate, mozzarella, cebollas, pimientos, merguez, huevo",
      },
    },
    norvegienne: {
      fr: {
        name: "Norvégienne",
        description: "Crème fraîche, mozzarella, saumon fumé",
      },
      en: {
        name: "Norwegian",
        description: "Fresh cream, mozzarella, smoked salmon",
      },
      es: {
        name: "Noruega",
        description: "Crema fresca, mozzarella, salmón ahumado",
      },
    },
    raclette: {
      fr: {
        name: "Raclette",
        description: "Crème fraîche, mozzarella, pomme de terre, jambon*, fromage raclette",
      },
      en: {
        name: "Raclette",
        description: "Fresh cream, mozzarella, potato, ham*, raclette cheese",
      },
      es: {
        name: "Raclette",
        description: "Crema fresca, mozzarella, patata, jamón*, queso raclette",
      },
    },
    fermiere: {
      fr: {
        name: "Fermière",
        description: "Crème fraîche, mozzarella, champignons, poulet",
      },
      en: {
        name: "Farmhouse",
        description: "Fresh cream, mozzarella, mushrooms, chicken",
      },
      es: {
        name: "Campesina",
        description: "Crema fresca, mozzarella, champiñones, pollo",
      },
    },
    "chevre-miel": {
      fr: {
        name: "Chèvre miel",
        description: "Sauce tomate, mozzarella, chèvre, miel",
      },
      en: {
        name: "Goat Cheese & Honey",
        description: "Tomato sauce, mozzarella, goat cheese, honey",
      },
      es: {
        name: "Queso de cabra y miel",
        description: "Salsa de tomate, mozzarella, queso de cabra, miel",
      },
    },
  },
  desserts: {
    "dessert-jour": {
      fr: {
        name: "Dessert du jour",
        description: "Voir tableau",
      },
      en: {
        name: "Dessert of the day",
        description: "See board",
      },
      es: {
        name: "Postre del día",
        description: "Ver pizarra",
      },
    },
    tiramisu: {
      fr: {
        name: "Tiramisu",
        description: "Maison du moment",
      },
      en: {
        name: "Tiramisu",
        description: "Homemade of the moment",
      },
      es: {
        name: "Tiramisú",
        description: "Casero del momento",
      },
    },
    "creme-brulee": {
      fr: {
        name: "Crème brûlée",
        description: "",
      },
      en: {
        name: "Crème brûlée",
        description: "",
      },
      es: {
        name: "Crema catalana",
        description: "",
      },
    },
    "pain-perdu": {
      fr: {
        name: "Brioche façon pain perdu",
        description: "Avec sa boule de glace vanille",
      },
      en: {
        name: "French toast brioche",
        description: "With vanilla ice cream scoop",
      },
      es: {
        name: "Brioche estilo torrija",
        description: "Con bola de helado de vainilla",
      },
    },
    moelleux: {
      fr: {
        name: "Mœlleux au chocolat",
        description: "Avec sa boule de glace vanille",
      },
      en: {
        name: "Chocolate fondant",
        description: "With vanilla ice cream scoop",
      },
      es: {
        name: "Fondant de chocolate",
        description: "Con bola de helado de vainilla",
      },
    },
    "cafe-gourmand": {
      fr: {
        name: "Café gourmand",
        description: "Accompagné de ses mignardises du moment",
      },
      en: {
        name: "Gourmet coffee",
        description: "With assorted petits fours",
      },
      es: {
        name: "Café gourmet",
        description: "Acompañado de sus pastelitos del momento",
      },
    },
    "the-gourmand": {
      fr: {
        name: "Thé gourmand",
        description: "Accompagné de ses mignardises du moment",
      },
      en: {
        name: "Gourmet tea",
        description: "With assorted petits fours",
      },
      es: {
        name: "Té gourmet",
        description: "Acompañado de sus pastelitos del momento",
      },
    },
    fromages: {
      fr: {
        name: "Assortiment de fromages",
        description: "Selon arrivage",
      },
      en: {
        name: "Cheese platter",
        description: "Subject to availability",
      },
      es: {
        name: "Surtido de quesos",
        description: "Según disponibilidad",
      },
    },
  },
  coupes: {
    "cafe-liegeois": {
      fr: {
        name: "Café liégeois",
        description: "Glace café, chantilly, coulis de café",
      },
      en: {
        name: "Coffee Sundae",
        description: "Coffee ice cream, whipped cream, coffee coulis",
      },
      es: {
        name: "Copa de café",
        description: "Helado de café, nata montada, coulis de café",
      },
    },
    "chocolat-liegeois": {
      fr: {
        name: "Chocolat liégeois",
        description: "Glace chocolat, chantilly, coulis de chocolat",
      },
      en: {
        name: "Chocolate Sundae",
        description: "Chocolate ice cream, whipped cream, chocolate coulis",
      },
      es: {
        name: "Copa de chocolate",
        description: "Helado de chocolate, nata montada, coulis de chocolate",
      },
    },
    "fraise-melba": {
      fr: {
        name: "Fraise Melba",
        description: "Glace fraise, glace vanille, chantilly, coulis de fraise",
      },
      en: {
        name: "Strawberry Melba",
        description: "Strawberry ice cream, vanilla ice cream, whipped cream, strawberry coulis",
      },
      es: {
        name: "Fresa Melba",
        description: "Helado de fresa, helado de vainilla, nata montada, coulis de fresa",
      },
    },
    "dame-blanche": {
      fr: {
        name: "Dame Blanche",
        description: "Glace vanille, chantilly, coulis de chocolat",
      },
      en: {
        name: "Dame Blanche",
        description: "Vanilla ice cream, whipped cream, chocolate coulis",
      },
      es: {
        name: "Dama Blanca",
        description: "Helado de vainilla, nata montada, coulis de chocolate",
      },
    },
    colonel: {
      fr: {
        name: "Colonel",
        description: "Sorbet de citron vert, vodka 5cl",
      },
      en: {
        name: "Colonel",
        description: "Lime sorbet, vodka 5cl",
      },
      es: {
        name: "Colonel",
        description: "Sorbete de lima, vodka 5cl",
      },
    },
    "mojito-glace": {
      fr: {
        name: "Mojito glacé",
        description: "Sorbet citron vert, rhum 5cl, citron vert, menthe fraîche, sucre de canne",
      },
      en: {
        name: "Iced Mojito",
        description: "Lime sorbet, rum 5cl, lime, fresh mint, cane sugar",
      },
      es: {
        name: "Mojito helado",
        description: "Sorbete de lima, ron 5cl, lima, menta fresca, azúcar de caña",
      },
    },
  },
  glaces: {
    "une-boule": {
      fr: {
        name: "1 boule",
        description: "Parfums au choix : Chocolat, vanille, fraise, café, citron vert",
      },
      en: {
        name: "1 scoop",
        description: "Choice of flavors: Chocolate, vanilla, strawberry, coffee, lime",
      },
      es: {
        name: "1 bola",
        description: "Sabores a elegir: Chocolate, vainilla, fresa, café, lima",
      },
    },
    "deux-boules": {
      fr: {
        name: "2 boules",
        description: "Parfums au choix : Chocolat, vanille, fraise, café, citron vert",
      },
      en: {
        name: "2 scoops",
        description: "Choice of flavors: Chocolate, vanilla, strawberry, coffee, lime",
      },
      es: {
        name: "2 bolas",
        description: "Sabores a elegir: Chocolate, vainilla, fresa, café, lima",
      },
    },
    "boule-supp": {
      fr: {
        name: "Boule supplémentaire",
        description: "",
      },
      en: {
        name: "Extra scoop",
        description: "",
      },
      es: {
        name: "Bola adicional",
        description: "",
      },
    },
    "chantilly-supp": {
      fr: {
        name: "Supplément chantilly",
        description: "",
      },
      en: {
        name: "Whipped cream supplement",
        description: "",
      },
      es: {
        name: "Suplemento de nata",
        description: "",
      },
    },
  },
  cocktails: {
    mojito: {
      fr: {
        name: "Mojito",
        description: "Rhum 5cl, menthe fraîche, citron vert, Perrier, sucre de canne",
      },
      en: {
        name: "Mojito",
        description: "Rum 5cl, fresh mint, lime, Perrier, cane sugar",
      },
      es: {
        name: "Mojito",
        description: "Ron 5cl, menta fresca, lima, Perrier, azúcar de caña",
      },
    },
    "tequila-sunrise": {
      fr: {
        name: "Tequila Sunrise",
        description: "Tequila 5cl, jus d'orange, sirop de grenadine",
      },
      en: {
        name: "Tequila Sunrise",
        description: "Tequila 5cl, orange juice, grenadine syrup",
      },
      es: {
        name: "Tequila Sunrise",
        description: "Tequila 5cl, zumo de naranja, jarabe de granadina",
      },
    },
    "malibu-sunset": {
      fr: {
        name: "Malibu Sunset",
        description: "Malibu 5cl, jus d'ananas, sirop de fraise",
      },
      en: {
        name: "Malibu Sunset",
        description: "Malibu 5cl, pineapple juice, strawberry syrup",
      },
      es: {
        name: "Malibu Sunset",
        description: "Malibu 5cl, zumo de piña, jarabe de fresa",
      },
    },
    "red-mojito": {
      fr: {
        name: "Red Mojito",
        description: "Rhum 5cl, menthe fraîche, coulis de fruits rouges, Perrier, sucre de canne",
      },
      en: {
        name: "Red Mojito",
        description: "Rum 5cl, fresh mint, red fruit coulis, Perrier, cane sugar",
      },
      es: {
        name: "Mojito Rojo",
        description: "Ron 5cl, menta fresca, coulis de frutos rojos, Perrier, azúcar de caña",
      },
    },
    "passion-mojito": {
      fr: {
        name: "Passion Mojito",
        description: "Rhum 5cl, menthe fraîche, coulis de fruits de la passion, Perrier, sucre de canne",
      },
      en: {
        name: "Passion Mojito",
        description: "Rum 5cl, fresh mint, passion fruit coulis, Perrier, cane sugar",
      },
      es: {
        name: "Mojito de Maracuyá",
        description: "Ron 5cl, menta fresca, coulis de maracuyá, Perrier, azúcar de caña",
      },
    },
    "royal-mojito": {
      fr: {
        name: "Royal Mojito",
        description: "Rhum 5cl, menthe fraîche, citron vert, sucre de canne, champagne",
      },
      en: {
        name: "Royal Mojito",
        description: "Rum 5cl, fresh mint, lime, cane sugar, champagne",
      },
      es: {
        name: "Mojito Royal",
        description: "Ron 5cl, menta fresca, lima, azúcar de caña, champán",
      },
    },
    "spritz-aperol": {
      fr: {
        name: "Spritz Apérol",
        description: "Apérol 6cl, Prosecco 6cl, Perrier",
      },
      en: {
        name: "Aperol Spritz",
        description: "Aperol 6cl, Prosecco 6cl, Perrier",
      },
      es: {
        name: "Spritz de Aperol",
        description: "Aperol 6cl, Prosecco 6cl, Perrier",
      },
    },
    "spritz-st-germain": {
      fr: {
        name: "Spritz St Germain",
        description: "St Germain (Liqueur de sureau) 5cl, Prosecco 6cl, Perrier",
      },
      en: {
        name: "St Germain Spritz",
        description: "St Germain (Elderflower liqueur) 5cl, Prosecco 6cl, Perrier",
      },
      es: {
        name: "Spritz St Germain",
        description: "St Germain (Licor de saúco) 5cl, Prosecco 6cl, Perrier",
      },
    },
  },
  mocktails: {
    "virgin-mojito": {
      fr: {
        name: "Virgin Mojito",
        description: "Menthe fraîche, citron vert, Perrier, sucre de canne",
      },
      en: {
        name: "Virgin Mojito",
        description: "Fresh mint, lime, Perrier, cane sugar",
      },
      es: {
        name: "Mojito Virgen",
        description: "Menta fresca, lima, Perrier, azúcar de caña",
      },
    },
    "brothers-mocktail": {
      fr: {
        name: "Brother's",
        description: "Jus d'orange, jus d'ananas, jus de pamplemousse, sirop de grenadine",
      },
      en: {
        name: "Brother's",
        description: "Orange juice, pineapple juice, grapefruit juice, grenadine syrup",
      },
      es: {
        name: "Brother's",
        description: "Zumo de naranja, zumo de piña, zumo de pomelo, jarabe de granadina",
      },
    },
  },
  planches: {
    charcuterie: {
      fr: {
        name: "Planche de charcuterie*",
        description: "",
      },
      en: {
        name: "Charcuterie board*",
        description: "",
      },
      es: {
        name: "Tabla de embutidos*",
        description: "",
      },
    },
    fromages: {
      fr: {
        name: "Planche de fromages",
        description: "",
      },
      en: {
        name: "Cheese board",
        description: "",
      },
      es: {
        name: "Tabla de quesos",
        description: "",
      },
    },
    mixte: {
      fr: {
        name: "Planche Mixte*",
        description: "(charcuterie et fromages)",
      },
      en: {
        name: "Mixed Board*",
        description: "(charcuterie and cheeses)",
      },
      es: {
        name: "Tabla Mixta*",
        description: "(embutidos y quesos)",
      },
    },
  },
}

// Menu data with IDs for prices
const menuData = {
  salades: [
    { id: "cesar", price: "16.90 €" },
    { id: "chevre", price: "16.90 €" },
    { id: "brothers", price: "18.90 €" },
    { id: "bowl-saumon", price: "18.90 €" },
    { id: "bowl-poulet", price: "18.90 €" },
  ],
  plats: [
    { id: "escalope", price: "17.90 €" },
    { id: "entrecote", price: "24.90 €" },
    { id: "bavette", price: "19.90 €" },
    { id: "steak-hache", price: "14.50 €" },
    { id: "burger-brothers", price: "16.90 €" },
    { id: "burger-raclette", price: "17.90 €" },
    { id: "tartare-saumon", price: "19.90 €" },
    { id: "tartare-boeuf", price: "18.90 €" },
    { id: "pave-saumon", price: "18.90 €" },
    { id: "linguine-saumon", price: "17.90 €" },
    { id: "linguine-truffes", price: "17.90 €" },
    { id: "linguine-fromages", price: "17.90 €" },
    { id: "croque-monsieur", price: "13.50 €" },
    { id: "croque-madame", price: "14.90 €" },
  ],
  pizzas: [
    { id: "margarita", price: "13.90 €" },
    { id: "regina", price: "14.90 €" },
    { id: "4-fromages", price: "14.90 €" },
    { id: "vegetarienne", price: "14.90 €" },
    { id: "calzone", price: "14.90 €" },
    { id: "orientale", price: "15.90 €" },
    { id: "norvegienne", price: "16.90 €" },
    { id: "raclette", price: "15.90 €" },
    { id: "fermiere", price: "14.90 €" },
    { id: "chevre-miel", price: "14.90 €" },
  ],
  desserts: [
    { id: "dessert-jour", price: "7.90 €" },
    { id: "tiramisu", price: "7.90 €" },
    { id: "creme-brulee", price: "7.90 €" },
    { id: "pain-perdu", price: "7.90 €" },
    { id: "moelleux", price: "7.90 €" },
    { id: "cafe-gourmand", price: "9.90 €" },
    { id: "the-gourmand", price: "11.90 €" },
    { id: "fromages", price: "9.90 €" },
  ],
  coupes: [
    { id: "cafe-liegeois", price: "8.90 €" },
    { id: "chocolat-liegeois", price: "8.90 €" },
    { id: "fraise-melba", price: "8.90 €" },
    { id: "dame-blanche", price: "8.90 €" },
    { id: "colonel", price: "11.90 €" },
    { id: "mojito-glace", price: "11.90 €" },
  ],
  glaces: [
    { id: "une-boule", price: "3.00 €" },
    { id: "deux-boules", price: "5.00 €" },
    { id: "boule-supp", price: "+2.50 €" },
    { id: "chantilly-supp", price: "+1.50 €" },
  ],
  boissons_fraiches: [
    {
      id: "jus-fruits",
      name: { fr: "Jus de fruits 25cl", en: "Fruit juice 25cl", es: "Zumo de frutas 25cl" },
      description: {
        fr: "Ananas, orange, pomme, abricot, pamplemousse, tomate, ACE",
        en: "Pineapple, orange, apple, apricot, grapefruit, tomato, ACE",
        es: "Piña, naranja, manzana, albaricoque, pomelo, tomate, ACE",
      },
      price: "4.70 €",
    },
    { id: "orangina", name: { fr: "Orangina 25cl", en: "Orangina 25cl", es: "Orangina 25cl" }, price: "4.70 €" },
    {
      id: "schweppes",
      name: {
        fr: "Schweppes Tonic ou Agrumes 25cl",
        en: "Schweppes Tonic or Citrus 25cl",
        es: "Schweppes Tonic o Cítricos 25cl",
      },
      price: "4.70 €",
    },
    {
      id: "limonade",
      name: { fr: "Limonade bouteille 25cl", en: "Lemonade bottle 25cl", es: "Limonada botella 25cl" },
      price: "4.70 €",
    },
    { id: "ice-tea", name: { fr: "Ice Tea 25cl", en: "Ice Tea 25cl", es: "Ice Tea 25cl" }, price: "4.70 €" },
    { id: "red-bull", name: { fr: "Red Bull 25cl", en: "Red Bull 25cl", es: "Red Bull 25cl" }, price: "5.50 €" },
    {
      id: "oranges-citrons-presses",
      name: {
        fr: "Oranges ou Citrons pressés 25cl",
        en: "Freshly squeezed Orange or Lemon 25cl",
        es: "Naranjas o Limones exprimidos 25cl",
      },
      price: "6.00 €",
    },
    {
      id: "coca-cola",
      name: {
        fr: "Coca-Cola, Coca-Cola zero 33cl",
        en: "Coca-Cola, Coca-Cola zero 33cl",
        es: "Coca-Cola, Coca-Cola zero 33cl",
      },
      price: "4.70 €",
    },
    {
      id: "fanta",
      name: { fr: "Fanta orange 25cl", en: "Fanta orange 25cl", es: "Fanta naranja 25cl" },
      price: "4.70 €",
    },
    { id: "oasis", name: { fr: "Oasis 25cl", en: "Oasis 25cl", es: "Oasis 25cl" }, price: "4.70 €" },
    { id: "perrier", name: { fr: "Perrier 33cl", en: "Perrier 33cl", es: "Perrier 33cl" }, price: "4.90 €" },
  ],
  eaux_minerales: [
    { id: "vittel-25", name: "Vittel 25cl", price: "4.00 €" },
    { id: "vittel-50", name: "Vittel 50cl", price: "5.90 €" },
    { id: "vittel-1l", name: "Vittel 1L", price: "7.90 €" },
    { id: "san-pellegrino-50", name: "San Pellegrino 50cl", price: "5.90 €" },
    { id: "san-pellegrino-1l", name: "San Pellegrino 1L", price: "7.90 €" },
  ],
  boissons_chaudes: [
    { id: "expresso", name: { fr: "Expresso", en: "Espresso", es: "Café expreso" }, price: "2.50 €" },
    {
      id: "double-expresso",
      name: { fr: "Double Expresso", en: "Double Espresso", es: "Doble expreso" },
      price: "4.60 €",
    },
    { id: "decafeine", name: { fr: "Décaféiné", en: "Decaffeinated", es: "Descafeinado" }, price: "2.60 €" },
    {
      id: "cafe-noisette",
      name: { fr: "Café noisette", en: "Espresso macchiato", es: "Café cortado" },
      price: "2.60 €",
    },
    { id: "cafe-allonge", name: { fr: "Café allongé", en: "Americano", es: "Café americano" }, price: "2.60 €" },
    { id: "cafe-creme", name: { fr: "Café crème", en: "Coffee with cream", es: "Café con crema" }, price: "4.90 €" },
    { id: "cappuccino", name: { fr: "Cappuccino", en: "Cappuccino", es: "Capuchino" }, price: "5.50 €" },
    {
      id: "chocolat-chaud",
      name: { fr: "Chocolat chaud", en: "Hot chocolate", es: "Chocolate caliente" },
      price: "4.90 €",
    },
    {
      id: "cafe-chocolat-viennois",
      name: { fr: "Café ou Chocolat viennois", en: "Viennese Coffee or Chocolate", es: "Café o Chocolate vienés" },
      price: "6.00 €",
    },
    {
      id: "the-infusion",
      name: { fr: "Thé ou infusion", en: "Tea or infusion", es: "Té o infusión" },
      price: "4.90 €",
    },
    { id: "lait-chaud", name: { fr: "Lait chaud", en: "Hot milk", es: "Leche caliente" }, price: "3.90 €" },
  ],
  frappes: [
    { id: "frappuccino", name: { fr: "Frappuccino", en: "Frappuccino", es: "Frappuccino" }, price: "6.00 €" },
    { id: "cafe-frappe", name: { fr: "Café frappé", en: "Iced coffee", es: "Café helado" }, price: "4.50 €" },
    { id: "latte-frappe", name: { fr: "Latte frappé", en: "Iced latte", es: "Latte helado" }, price: "5.50 €" },
    { id: "lait-fraise", name: { fr: "Lait fraise", en: "Strawberry milk", es: "Leche de fresa" }, price: "4.50 €" },
  ],
  cocktails: [
    { id: "mojito", price: "10.50 €", happyHour: "8.50 €" },
    { id: "tequila-sunrise", price: "10.50 €", happyHour: "8.50 €" },
    { id: "malibu-sunset", price: "10.50 €", happyHour: "8.50 €" },
    { id: "red-mojito", price: "11.00 €", happyHour: "9.00 €" },
    { id: "passion-mojito", price: "11.00 €", happyHour: "9.00 €" },
    { id: "royal-mojito", price: "12.50 €", happyHour: "9.90 €" },
    { id: "spritz-aperol", price: "10.50 €", happyHour: "8.50 €" },
    { id: "spritz-st-germain", price: "12.50 €" },
  ],
  mocktails: [
    { id: "virgin-mojito", price: "9.50 €", happyHour: "7.50 €" },
    { id: "brothers-mocktail", price: "9.50 €", happyHour: "7.50 €" },
  ],
  aperitifs: [
    {
      id: "ricard",
      name: { fr: "Ricard ou Pastis", en: "Ricard or Pastis", es: "Ricard o Pastis" },
      description: "2cl",
      price: "4.50 €",
    },
    {
      id: "kir",
      name: { fr: "Kir", en: "Kir", es: "Kir" },
      description: {
        fr: "cassis, mûres, pêche ou framboise 14cl",
        en: "blackcurrant, blackberry, peach or raspberry 14cl",
        es: "grosella, mora, melocotón o frambuesa 14cl",
      },
      price: "5.00 €",
    },
    {
      id: "kir-royal",
      name: { fr: "Kir royal", en: "Kir royal", es: "Kir royal" },
      description: {
        fr: "cassis, mûres, pêche ou framboise 12cl",
        en: "blackcurrant, blackberry, peach or raspberry 12cl",
        es: "grosella, mora, melocotón o frambuesa 12cl",
      },
      price: "11.00 €",
    },
    {
      id: "coupe-champagne",
      name: { fr: "Coupe de champagne", en: "Glass of champagne", es: "Copa de champán" },
      description: "12cl",
      price: "11.00 €",
    },
    {
      id: "martini",
      name: { fr: "Martini blanc ou rouge", en: "White or red Martini", es: "Martini blanco o rojo" },
      description: "5cl",
      price: "5.00 €",
    },
    {
      id: "porto",
      name: { fr: "Porto blanc ou rouge", en: "White or red Port", es: "Oporto blanco o tinto" },
      description: "5cl",
      price: "5.00 €",
    },
    { id: "baileys", name: "Baileys", description: "4cl", price: "7.50 €" },
    { id: "vodka", name: "Vodka", description: "4cl", price: "8.00 €" },
    { id: "vodka-grey-goose", name: "Vodka Grey Goose", description: "4cl", price: "13.00 €" },
    { id: "whisky-jb", name: "J&B ou Clan Campbell", description: "4cl", price: "7.50 €" },
    { id: "chivas", name: "Chivas Regal 12ans", description: "4cl", price: "9.00 €" },
    { id: "jack-daniels", name: "Jack Daniel's", description: "4cl", price: "9.00 €" },
    { id: "nikka", name: "Nikka From the Barrel", description: "4cl", price: "13.00 €" },
    { id: "poire-williams", name: "Poire Williams", description: "4cl", price: "7.50 €" },
    { id: "calvados", name: "Calvados", description: "4cl", price: "7.50 €" },
    { id: "cognac", name: "Cognac", description: "4cl", price: "8.00 €" },
    { id: "armagnac", name: "Armagnac", description: "4cl", price: "8.00 €" },
    { id: "get27", name: "Get 27", description: "5cl", price: "7.50 €" },
    { id: "get31", name: "Get 31", description: "5cl", price: "7.50 €" },
    { id: "gin", name: "Gin", description: "4cl", price: "8.00 €" },
    {
      id: "limoncello",
      name: { fr: "Limoncello ou Manzana", en: "Limoncello or Manzana", es: "Limoncello o Manzana" },
      description: "5cl",
      price: "7.50 €",
    },
    { id: "rhum-diplomatico", name: "Rhum Diplomatico", description: "4cl", price: "11.00 €" },
    { id: "rhum-don-papa", name: "Rhum Don Papa", description: "4cl", price: "11.00 €" },
  ],
  bieres_bouteilles: [
    { id: "heineken", name: "Heineken", description: "25cl", price: "4.50 €" },
    { id: "desperados", name: "Desperados", description: "33cl", price: "6.00 €" },
    { id: "super-bock", name: "Super Bock", description: "25cl", price: "4.50 €" },
    { id: "leffe-ruby", name: "Leffe Ruby", description: "25cl", price: "4.80 €" },
  ],
  bieres_pressions: [
    { id: "alex-beer", name: "Alex beer", "25cl": "4.50 €", "50cl": "8.50 €", "happy-hour": "6.00 €" },
    { id: "alex-abbaye", name: "Alex beer Abbaye", "25cl": "4.80 €", "50cl": "9.00 €", "happy-hour": "7.50 €" },
    { id: "la-chouffe", name: "La Chouffe", "25cl": "4.80 €", "50cl": "9.00 €", "happy-hour": "8.00 €" },
    { id: "meteor-blanche", name: "Meteor Blanche", "25cl": "4.50 €", "50cl": "8.50 €", "happy-hour": "7.50 €" },
    { id: "panache", name: { fr: "Panaché", en: "Shandy", es: "Clara" }, "25cl": "4.50 €", "50cl": "8.00 €" },
    {
      id: "picon",
      name: { fr: "Picon bière", en: "Picon beer", es: "Picon cerveza" },
      "25cl": "4.50 €",
      "50cl": "8.50 €",
    },
    { id: "monaco", name: "Monaco", "25cl": "4.50 €", "50cl": "8.50 €" },
    { id: "meteor-ipa", name: "Meteor IPA", "25cl": "4.80 €", "50cl": "9.00 €" },
  ],
  planches: [
    { id: "charcuterie", petite: "12.90 €", grande: "17.90 €" },
    { id: "fromages", petite: "12.90 €", grande: "17.90 €" },
    { id: "mixte", petite: "12.90 €", grande: "17.90 €" },
  ],
  vins: [
    {
      id: "cotes-du-rhone",
      type: "rouge",
      name: "Côtes du Rhône AOP",
      verre_14cl: "4.90 €",
      pichet_25cl: "8.50 €",
      pichet_50cl: "15.00 €",
      bouteille_75cl: "22.50 €",
    },
    {
      id: "medoc",
      type: "rouge",
      name: "Médoc « Château Roquegrave » AOC",
      verre_14cl: "7.50 €",
      pichet_25cl: "13.50 €",
      pichet_50cl: "22.50 €",
      bouteille_75cl: "34.00 €",
    },
    {
      id: "saint-estephe",
      type: "rouge",
      name: "Saint-Estèphe « Marquis Prestige » AOP",
      verre_14cl: "7.50 €",
      pichet_25cl: "14.00 €",
      pichet_50cl: "25.00 €",
      bouteille_75cl: "37.00 €",
    },
    {
      id: "brise-marine",
      type: "rosé",
      name: "Le Brise Marine IGP",
      verre_14cl: "4.90 €",
      pichet_25cl: "8.50 €",
      pichet_50cl: "15.00 €",
      bouteille_75cl: "22.50 €",
    },
    {
      id: "chateau-leoube",
      type: "rosé",
      name: "Château Léoube AOP",
      verre_14cl: "7.50 €",
      pichet_25cl: "13.50 €",
      pichet_50cl: "25.00 €",
      bouteille_75cl: "37.00 €",
    },
    {
      id: "love-by-leoube",
      type: "rosé",
      name: "Love By Léoube AOP",
      verre_14cl: "6.50 €",
      pichet_25cl: "11.00 €",
      pichet_50cl: "20.00 €",
      bouteille_75cl: "29.00 €",
    },
    {
      id: "chardonnay",
      type: "blanc",
      name: "Chardonnay IGP",
      verre_14cl: "4.90 €",
      pichet_25cl: "8.50 €",
      pichet_50cl: "15.00 €",
      bouteille_75cl: "22.50 €",
    },
    {
      id: "pouilly-fume",
      type: "blanc",
      name: "Pouilly fumé AOC",
      verre_14cl: "7.50 €",
      pichet_25cl: "13.50 €",
      pichet_50cl: "25.00 €",
      bouteille_75cl: "37.00 €",
    },
  ],
  champagnes: [
    {
      id: "coupe-collet",
      name: {
        fr: "Coupe de champagne « Collet »",
        en: "Glass of champagne « Collet »",
        es: "Copa de champán « Collet »",
      },
      description: "12cl",
      price: "11.00 €",
    },
    { id: "collet", name: "Collet", description: "75cl", price: "70.00 €" },
    { id: "ruinart", name: "Ruinart", description: "75cl", price: "120.00 €" },
  ],
}

const translations = {
  fr: {
    title: "Notre Carte",
    subtitle:
      "Découvrez notre sélection de plats traditionnels, salades composées, pizzas maison et desserts gourmands.",
    fullscreen: "Afficher en plein écran",
    availableFrom: "Disponible à partir de 14h30",
    flavorsChoice: "Parfums au choix : Chocolat, vanille, fraise, café, citron vert",
    syrupSupplement: "Supplément sirop: +0.50 €",
    freshDrinks: "Boissons Fraîches",
    mineralWaters: "Eaux Minérales",
    small: "Petite",
    large: "Grande",
    wine: "Vin",
    glass: "Verre (14cl)",
    pitcher25: "Pichet (25cl)",
    pitcher50: "Pichet (50cl)",
    bottle: "Bouteille (75cl)",
    reds: "ROUGES",
    roses: "ROSÉS",
    whites: "BLANCS",
    beer: "Bière",
    happyHour: "Happy Hour",
  },
  en: {
    title: "Our Menu",
    subtitle: "Discover our selection of traditional dishes, composed salads, homemade pizzas and gourmet desserts.",
    fullscreen: "Display in full screen",
    availableFrom: "Available from 2:30 PM",
    flavorsChoice: "Choice of flavors: Chocolate, vanilla, strawberry, coffee, lime",
    syrupSupplement: "Syrup supplement: +0.50 €",
    freshDrinks: "Cold Drinks",
    mineralWaters: "Mineral Waters",
    small: "Small",
    large: "Large",
    wine: "Wine",
    glass: "Glass (14cl)",
    pitcher25: "Pitcher (25cl)",
    pitcher50: "Pitcher (50cl)",
    bottle: "Bottle (75cl)",
    reds: "REDS",
    roses: "ROSÉS",
    whites: "WHITES",
    beer: "Beer",
    happyHour: "Happy Hour",
  },
  es: {
    title: "Nuestra Carta",
    subtitle:
      "Descubre nuestra selección de platos tradicionales, ensaladas compuestas, pizzas caseras y postres gourmet.",
    fullscreen: "Mostrar en pantalla completa",
    availableFrom: "Disponible a partir de las 14:30",
    flavorsChoice: "Sabores a elegir: Chocolate, vainilla, fresa, café, lima",
    syrupSupplement: "Suplemento de jarabe: +0.50 €",
    freshDrinks: "Bebidas Frías",
    mineralWaters: "Aguas Minerales",
    small: "Pequeña",
    large: "Grande",
    wine: "Vino",
    glass: "Copa (14cl)",
    pitcher25: "Jarra (25cl)",
    pitcher50: "Jarra (50cl)",
    bottle: "Botella (75cl)",
    reds: "TINTOS",
    roses: "ROSADOS",
    whites: "BLANCOS",
    beer: "Cerveza",
    happyHour: "Happy Hour",
  },
}

const tabTranslations = {
  fr: {
    salades: "SALADES COMPOSÉES",
    plats: "PLATS TRADITIONNELS",
    pizzas: "PIZZAS MAISONS",
    planches: "Planches à partager",
    desserts: "Desserts",
    coupes: "Coupes Glacées",
    glaces: "Glaces",
    cocktails: "Cocktails",
    mocktails: "Mocktails",
    boissons_fraiches: "Boissons fraîches",
    boissons_chaudes: "Boissons chaudes",
    frappes: "Les frappés",
    vins: "Vins supérieurs",
    champagnes: "Champagnes",
    bieres_pressions: "Bières Pressions",
    bieres_bouteilles: "Bières Bouteilles",
    aperitifs: "Apéritifs & Digestifs",
  },
  en: {
    salades: "COMPOSED SALADS",
    plats: "TRADITIONAL DISHES",
    pizzas: "HOMEMADE PIZZAS",
    planches: "Sharing platters",
    desserts: "Desserts",
    coupes: "Ice Cream Sundaes",
    glaces: "Ice Cream",
    cocktails: "Cocktails",
    mocktails: "Mocktails",
    boissons_fraiches: "Cold drinks",
    boissons_chaudes: "Hot drinks",
    frappes: "Iced drinks",
    vins: "Premium wines",
    champagnes: "Champagnes",
    bieres_pressions: "Draft beers",
    bieres_bouteilles: "Bottled beers",
    aperitifs: "Aperitifs & Digestifs",
  },
  es: {
    salades: "ENSALADAS COMPUESTAS",
    plats: "PLATOS TRADICIONALES",
    pizzas: "PIZZAS CASERAS",
    planches: "Tablas para compartir",
    desserts: "Postres",
    coupes: "Copas heladas",
    glaces: "Helados",
    cocktails: "Cócteles",
    mocktails: "Cócteles sin alcohol",
    boissons_fraiches: "Bebidas frías",
    boissons_chaudes: "Bebidas calientes",
    frappes: "Bebidas heladas",
    vins: "Vinos superiores",
    champagnes: "Champanes",
    bieres_pressions: "Cervezas de barril",
    bieres_bouteilles: "Cervezas en botella",
    aperitifs: "Aperitivos y Digestivos",
  },
}

export default function MenuPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("salades")
  const [language, setLanguage] = useState<"fr" | "en" | "es">("fr")
  const menuRef = useRef<HTMLDivElement>(null)
  const [isMobileFullscreen, setIsMobileFullscreen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMatches, setSearchMatches] = useState<Array<{ category: string; name: string; price: string }>>([])
  const tabsListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchMatches([])
      return
    }
    const q = searchQuery.toLowerCase().trim()
    const matches: Array<{ category: string; name: string; price: string }> = []
    Object.entries(menuData).forEach(([cat, items]) => {
      ;(items as any[]).forEach((item) => {
        const translated = (menuItemTranslations as any)[cat]?.[item.id]?.[language]
        const name = translated?.name ?? (typeof item.name === "object" ? item.name?.[language] : item.name) ?? ""
        const desc =
          translated?.description ?? (typeof item.description === "object" ? item.description?.[language] : item.description) ?? ""
        if (
          (typeof name === "string" && name.toLowerCase().includes(q)) ||
          (typeof desc === "string" && desc.toLowerCase().includes(q))
        ) {
          matches.push({ category: cat, name: typeof name === "string" ? name : String(name), price: item.price ?? "" })
        }
      })
    })
    setSearchMatches(matches.slice(0, 12))
  }, [searchQuery, language])

  const goToCategory = (cat: string) => {
    setActiveTab(cat)
    setSearchQuery("")
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${cat}`)
      window.scrollTo({ top: tabsListRef.current?.offsetTop ? tabsListRef.current.offsetTop - 80 : 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    setIsLoaded(true)
    const hash = window.location.hash.replace("#", "")
    const validTabs = Object.keys(menuData)
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash)
    }
  }, [])

  const handleFullScreen = () => {
    // Check if we're on mobile/tablet
    const isMobile = window.innerWidth < 1024

    if (isMobile) {
      // Use modal fullscreen for mobile
      setIsMobileFullscreen(true)
    } else {
      // Use native fullscreen API for desktop
      if (!menuRef.current) return

      if (!document.fullscreenElement) {
        menuRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const getTranslatedItem = (category: string, itemId: string) => {
    const translations = menuItemTranslations[category as keyof typeof menuItemTranslations]
    if (translations && translations[itemId as keyof typeof translations]) {
      return translations[itemId as keyof typeof translations][language]
    }
    return null
  }

  const renderMenuItem = (item: any, category: string) => {
    const translated = getTranslatedItem(category, item.id)
    return (
      <motion.div key={item.id} variants={fadeIn}>
        <Card className="h-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg md:text-xl font-playfair font-bold">{translated ? translated.name : item.name}</h3>
              <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              {translated ? translated.description : item.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const renderCocktailItem = (item: any) => {
    const translated = getTranslatedItem("cocktails", item.id) || getTranslatedItem("mocktails", item.id)
    return (
      <motion.div key={item.id} variants={fadeIn}>
        <Card className="h-full">
          <CardContent className="p-6">
            <h3 className="text-lg md:text-xl font-playfair font-bold">{translated ? translated.name : item.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{translated ? translated.description : item.description}</p>
            <div className="flex justify-between items-baseline">
              <span className="text-navy font-bold text-lg">{item.price}</span>
              {item.happyHour && (
                <div className="text-right">
                  <p className="text-sm font-semibold text-red-600">Happy Hour</p>
                  <p className="font-bold text-red-600">{item.happyHour}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const renderVins = (type: "rouge" | "rosé" | "blanc") => {
    const typeLabel =
      type === "rouge"
        ? translations[language].reds
        : type === "rosé"
          ? translations[language].roses
          : translations[language].whites
    return (
      <div key={type}>
        <h3 className="text-2xl font-playfair font-bold text-red-800 my-6 uppercase tracking-wider">{typeLabel}</h3>
        {menuData.vins
          .filter((vin) => vin.type === type)
          .map((vin) => (
            <div key={vin.id} className="grid grid-cols-5 gap-4 items-center py-3 border-b last:border-b-0">
              <p className="col-span-2 md:col-span-1 font-bold">{vin.name}</p>
              <div className="text-center">
                <p className="font-semibold text-sm text-gray-500">14 cl</p>
                <p>{vin.verre_14cl}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-gray-500">25 cl</p>
                <p>{vin.pichet_25cl}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-gray-500">50 cl</p>
                <p>{vin.pichet_50cl}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-sm text-gray-500">75 cl</p>
                <p>{vin.bouteille_75cl}</p>
              </div>
            </div>
          ))}
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 bg-white" ref={menuRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "fr" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "en" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "es" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🇪🇸 ES
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{translations[language].title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{translations[language].subtitle}</p>
          <button
            onClick={handleFullScreen}
            className="absolute top-0 right-0 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
            title={translations[language].fullscreen}
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>

        {isLoaded && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Tabs
              defaultValue="salades"
              value={activeTab}
              onValueChange={(value) => {
                setActiveTab(value)
                window.history.pushState(null, "", `#${value}`)
              }}
              className="w-full"
            >
              {/* Search bar */}
              <div className="max-w-xl mx-auto mb-6 relative">
                <label htmlFor="menu-search" className="sr-only">Rechercher un plat ou une boisson</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" aria-hidden="true" />
                  <input
                    id="menu-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      language === "fr"
                        ? "Rechercher un plat, une boisson…"
                        : language === "en"
                          ? "Search for a dish, a drink…"
                          : "Buscar un plato, una bebida…"
                    }
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white shadow-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                </div>
                {searchQuery && searchMatches.length > 0 && (
                  <ul
                    role="listbox"
                    aria-label="Résultats de recherche"
                    className="absolute z-30 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto"
                  >
                    {searchMatches.map((m, idx) => (
                      <li key={`${m.category}-${idx}`}>
                        <button
                          onClick={() => goToCategory(m.category)}
                          className="w-full flex justify-between items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 focus:bg-gray-100 focus:outline-none border-b last:border-b-0"
                        >
                          <span>
                            <span className="font-medium block">{m.name}</span>
                            <span className="text-xs text-gray-500 uppercase">{(tabTranslations[language] as any)[m.category] ?? m.category}</span>
                          </span>
                          <span className="text-navy font-bold whitespace-nowrap">{m.price}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {searchQuery && searchMatches.length === 0 && (
                  <p className="absolute z-30 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-500 shadow-lg">
                    {language === "fr" ? "Aucun résultat" : language === "en" ? "No results" : "Sin resultados"}
                  </p>
                )}
              </div>

              {/* Sticky TabsList wrapper */}
              <div
                ref={tabsListRef}
                className="sticky top-16 md:top-20 z-20 mb-10 overflow-x-auto p-3 md:p-4 -mx-4 md:mx-0 md:rounded-xl bg-white/95 backdrop-blur-sm shadow-md scrollbar-hide"
              >
                <style jsx>{`
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <TabsList className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-x-3 md:gap-y-2 min-w-max md:min-w-0">
                  <TabsTrigger
                    value="salades"
                    id="salades"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].salades}
                  </TabsTrigger>
                  <TabsTrigger
                    value="plats"
                    id="plats"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].plats}
                  </TabsTrigger>
                  <TabsTrigger
                    value="pizzas"
                    id="pizzas"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].pizzas}
                  </TabsTrigger>
                  <TabsTrigger
                    value="planches"
                    id="planches"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].planches}
                  </TabsTrigger>
                  <TabsTrigger
                    value="desserts"
                    id="desserts"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].desserts}
                  </TabsTrigger>
                  <TabsTrigger
                    value="coupes"
                    id="coupes"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].coupes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="glaces"
                    id="glaces"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].glaces}
                  </TabsTrigger>
                  <TabsTrigger
                    value="cocktails"
                    id="cocktails"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <Martini className="w-4 h-4 mr-2" /> {tabTranslations[language].cocktails}
                  </TabsTrigger>
                  <TabsTrigger
                    value="mocktails"
                    id="mocktails"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <Leaf className="w-4 h-4 mr-2" /> {tabTranslations[language].mocktails}
                  </TabsTrigger>
                  <TabsTrigger
                    value="boissons_fraiches"
                    id="boissons_fraiches"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <GlassWater className="w-4 h-4 mr-2" /> {tabTranslations[language].boissons_fraiches}
                  </TabsTrigger>
                  <TabsTrigger
                    value="boissons_chaudes"
                    id="boissons_chaudes"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <Coffee className="w-4 h-4 mr-2" /> {tabTranslations[language].boissons_chaudes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="frappes"
                    id="frappes"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <Snowflake className="w-4 h-4 mr-2" /> {tabTranslations[language].frappes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="vins"
                    id="vins"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    <Wine className="w-4 h-4 mr-2" /> {tabTranslations[language].vins}
                  </TabsTrigger>
                  <TabsTrigger
                    value="champagnes"
                    id="champagnes"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].champagnes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="bieres_pressions"
                    id="bieres_pressions"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].bieres_pressions}
                  </TabsTrigger>
                  <TabsTrigger
                    value="bieres_bouteilles"
                    id="bieres_bouteilles"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].bieres_bouteilles}
                  </TabsTrigger>
                  <TabsTrigger
                    value="aperitifs"
                    id="aperitifs"
                    className="whitespace-nowrap rounded-lg px-4 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 ease-in-out"
                  >
                    {tabTranslations[language].aperitifs}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="salades">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.salades.map((item) => renderMenuItem(item, "salades"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="plats">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.plats.map((item) => renderMenuItem(item, "plats"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pizzas">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.pizzas.map((item) => renderMenuItem(item, "pizzas"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="planches">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.planches.map((item) => {
                    const translated = getTranslatedItem("planches", item.id)
                    return (
                      <motion.div key={item.id} variants={fadeIn}>
                        <Card className="h-full">
                          <CardContent className="p-6">
                            <h3 className="text-lg md:text-xl font-playfair font-bold mb-2">
                              {translated ? translated.name : item.name}
                            </h3>
                            {translated?.description && (
                              <p className="text-gray-500 text-sm mb-4">{translated.description}</p>
                            )}
                            <div className="flex justify-around items-center text-center">
                              <div>
                                <p className="font-semibold">{translations[language].small}</p>
                                <p className="text-navy font-bold">{item.petite}</p>
                              </div>
                              <div>
                                <p className="font-semibold">{translations[language].large}</p>
                                <p className="text-navy font-bold">{item.grande}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>
                <div className="mt-6 text-center text-gray-600 bg-gray-50 p-3 rounded-lg flex items-center justify-center gap-2">
                  <Clock size={18} />
                  <span>{translations[language].availableFrom}</span>
                </div>
              </TabsContent>

              <TabsContent value="desserts">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.desserts.map((item) => renderMenuItem(item, "desserts"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="coupes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.coupes.map((item) => renderMenuItem(item, "coupes"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="glaces">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {menuData.glaces.map((item) => renderMenuItem(item, "glaces"))}
                  <motion.div variants={fadeIn} className="md:col-span-2">
                    <Card className="p-6">
                      <p className="text-center font-medium">{translations[language].flavorsChoice}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="cocktails">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {menuData.cocktails.map(renderCocktailItem)}
                </motion.div>
              </TabsContent>

              <TabsContent value="mocktails">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {menuData.mocktails.map(renderCocktailItem)}
                </motion.div>
              </TabsContent>

              <TabsContent value="boissons_fraiches">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">
                      {translations[language].freshDrinks}
                    </h3>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {menuData.boissons_fraiches.map((item) => (
                        <motion.div key={item.id} variants={fadeIn}>
                          <Card className="h-full">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg md:text-xl font-playfair font-bold">
                                  {typeof item.name === "object" ? item.name[language] : item.name}
                                </h3>
                                <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                              </div>
                              {item.description && (
                                <p className="text-gray-600 text-sm md:text-base">
                                  {typeof item.description === "object" ? item.description[language] : item.description}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-navy mb-6 text-center">
                      {translations[language].mineralWaters}
                    </h3>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {menuData.eaux_minerales.map((item) => (
                        <motion.div key={item.id} variants={fadeIn}>
                          <Card className="h-full">
                            <CardContent className="p-6 flex justify-between items-center">
                              <h3 className="text-lg md:text-xl font-playfair font-bold">{item.name}</h3>
                              <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="text-center mt-4">
                      <p className="text-gray-600">{translations[language].syrupSupplement}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="boissons_chaudes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuData.boissons_chaudes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6 flex justify-between items-center">
                          <h3 className="text-lg md:text-xl font-playfair font-bold">
                            {typeof item.name === "object" ? item.name[language] : item.name}
                          </h3>
                          <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="frappes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuData.frappes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6 flex justify-between items-center">
                          <h3 className="text-lg md:text-xl font-playfair font-bold">
                            {typeof item.name === "object" ? item.name[language] : item.name}
                          </h3>
                          <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="vins">
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-5 gap-4 items-center py-3 font-bold text-center text-gray-700 bg-gray-50 rounded-t-lg">
                    <p className="col-span-2 md:col-span-1 text-left pl-4">{translations[language].wine}</p>
                    <p>{translations[language].glass}</p>
                    <p>{translations[language].pitcher25}</p>
                    <p>{translations[language].pitcher50}</p>
                    <p>{translations[language].bottle}</p>
                  </div>
                  {renderVins("rouge")}
                  {renderVins("rosé")}
                  {renderVins("blanc")}
                </div>
              </TabsContent>

              <TabsContent value="champagnes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuData.champagnes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg md:text-xl font-playfair font-bold">
                              {typeof item.name === "object" ? item.name[language] : item.name}
                            </h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="bieres_pressions">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="p-4 bg-gray-100 font-playfair text-lg">{translations[language].beer}</th>
                        <th className="p-4 bg-gray-100 font-playfair text-lg text-center">25 cl</th>
                        <th className="p-4 bg-gray-100 font-playfair text-lg text-center">50 cl</th>
                        <th className="p-4 bg-red-100 text-red-800 font-playfair text-lg text-center">
                          {translations[language].happyHour}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuData.bieres_pressions.map((biere) => (
                        <tr key={biere.id} className="border-b">
                          <td className="p-4 font-bold">
                            {typeof biere.name === "object" ? biere.name[language] : biere.name}
                          </td>
                          <td className="p-4 text-center">{biere["25cl"]}</td>
                          <td className="p-4 text-center">{biere["50cl"]}</td>
                          <td className="p-4 text-center font-bold text-red-600">{biere["happy-hour"] || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="bieres_bouteilles">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuData.bieres_bouteilles.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg md:text-xl font-playfair font-bold">{item.name}</h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="aperitifs">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {menuData.aperitifs.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg md:text-xl font-playfair font-bold">
                              {typeof item.name === "object" ? item.name[language] : item.name}
                            </h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm md:text-base">
                            {typeof item.description === "object" ? item.description[language] : item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </div>
      {/* Mobile Fullscreen Modal */}
      {isMobileFullscreen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* 1. Replace container div */}
          <div className="container mx-auto px-4 py-2">
            {/* 7. Modify h2 tag */}
            {/* 2. Replace div */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-3xl font-playfair font-bold">{translations[language].title}</h2>
              <button
                onClick={() => setIsMobileFullscreen(false)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 3. Replace div */}
            <div className="flex justify-center items-center gap-4 mb-3">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "fr" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "en" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "es" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🇪🇸 ES
              </button>
            </div>

            <Tabs
              defaultValue="salades"
              value={activeTab}
              onValueChange={(value) => {
                setActiveTab(value)
                window.history.pushState(null, "", `#${value}`)
              }}
              className="w-full"
            >
              {/* 4. Replace div */}
              <div className="mb-4 overflow-x-auto p-2 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md scrollbar-hide">
                <style jsx>{`
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {/* 8. Modify TabsTrigger padding and text size */}
                <TabsList className="flex flex-nowrap justify-start gap-2 min-w-max">
                  <TabsTrigger
                    value="salades"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].salades}
                  </TabsTrigger>
                  <TabsTrigger
                    value="plats"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].plats}
                  </TabsTrigger>
                  <TabsTrigger
                    value="pizzas"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].pizzas}
                  </TabsTrigger>
                  <TabsTrigger
                    value="planches"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].planches}
                  </TabsTrigger>
                  <TabsTrigger
                    value="desserts"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].desserts}
                  </TabsTrigger>
                  <TabsTrigger
                    value="coupes"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].coupes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="glaces"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].glaces}
                  </TabsTrigger>
                  <TabsTrigger
                    value="cocktails"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Martini className="w-4 h-4 mr-2" /> {tabTranslations[language].cocktails}
                  </TabsTrigger>
                  <TabsTrigger
                    value="mocktails"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Leaf className="w-4 h-4 mr-2" /> {tabTranslations[language].mocktails}
                  </TabsTrigger>
                  <TabsTrigger
                    value="boissons_fraiches"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <GlassWater className="w-4 h-4 mr-2" /> {tabTranslations[language].boissons_fraiches}
                  </TabsTrigger>
                  <TabsTrigger
                    value="boissons_chaudes"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Coffee className="w-4 h-4 mr-2" /> {tabTranslations[language].boissons_chaudes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="frappes"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Snowflake className="w-4 h-4 mr-2" /> {tabTranslations[language].frappes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="vins"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Wine className="w-4 h-4 mr-2" /> {tabTranslations[language].vins}
                  </TabsTrigger>
                  <TabsTrigger
                    value="champagnes"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].champagnes}
                  </TabsTrigger>
                  <TabsTrigger
                    value="bieres_pressions"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].bieres_pressions}
                  </TabsTrigger>
                  <TabsTrigger
                    value="bieres_bouteilles"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].bieres_bouteilles}
                  </TabsTrigger>
                  <TabsTrigger
                    value="aperitifs"
                    className="whitespace-nowrap rounded-lg px-5 py-4 text-base font-semibold hover:bg-red-50 hover:text-red-700 hover:shadow-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {tabTranslations[language].aperitifs}
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* All TabsContent sections - same as main */}
              <TabsContent value="salades">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.salades.map((item) => renderMenuItem(item, "salades"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="plats">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.plats.map((item) => renderMenuItem(item, "plats"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="pizzas">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.pizzas.map((item) => renderMenuItem(item, "pizzas"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="planches">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.planches.map((item) => {
                    const translated = getTranslatedItem("planches", item.id)
                    return (
                      <motion.div key={item.id} variants={fadeIn}>
                        <Card className="h-full">
                          {/* 5. Replace CardContent className and text sizes */}
                          <CardContent className="p-5">
                            <h3 className="text-xl font-playfair font-bold mb-2">
                              {translated ? translated.name : item.name}
                            </h3>
                            {translated?.description && (
                              <p className="text-gray-500 text-base mb-4">{translated.description}</p>
                            )}
                            <div className="flex justify-around items-center text-center">
                              <div>
                                <p className="font-semibold">{translations[language].small}</p>
                                <p className="text-navy font-bold">{item.petite}</p>
                              </div>
                              <div>
                                <p className="font-semibold">{translations[language].large}</p>
                                <p className="text-navy font-bold">{item.grande}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>
                <div className="mt-6 text-center text-gray-600 bg-gray-50 p-3 rounded-lg flex items-center justify-center gap-2">
                  <Clock size={18} />
                  <span>{translations[language].availableFrom}</span>
                </div>
              </TabsContent>

              <TabsContent value="desserts">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.desserts.map((item) => renderMenuItem(item, "desserts"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="coupes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.coupes.map((item) => renderMenuItem(item, "coupes"))}
                </motion.div>
              </TabsContent>

              <TabsContent value="glaces">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.glaces.map((item) => renderMenuItem(item, "glaces"))}
                  <motion.div variants={fadeIn}>
                    {/* 5. Replace CardContent className and text sizes */}
                    <Card className="p-5">
                      <p className="text-center font-medium">{translations[language].flavorsChoice}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="cocktails">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.cocktails.map(renderCocktailItem)}
                </motion.div>
              </TabsContent>

              <TabsContent value="mocktails">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6"
                >
                  {menuData.mocktails.map(renderCocktailItem)}
                </motion.div>
              </TabsContent>

              <TabsContent value="boissons_fraiches">
                <div className="space-y-8">
                  <div>
                    {/* 9. Modify section title size */}
                    <h3 className="text-2xl font-playfair font-bold text-navy mb-4 text-center">
                      {translations[language].freshDrinks}
                    </h3>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="grid grid-cols-1 gap-5"
                    >
                      {menuData.boissons_fraiches.map((item) => (
                        <motion.div key={item.id} variants={fadeIn}>
                          <Card className="h-full">
                            {/* 5. Replace CardContent className and text sizes */}
                            <CardContent className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-playfair font-bold">
                                  {typeof item.name === "object" ? item.name[language] : item.name}
                                </h3>
                                <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                              </div>
                              {item.description && (
                                <p className="text-gray-600 text-base">
                                  {typeof item.description === "object" ? item.description[language] : item.description}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <div>
                    {/* 9. Modify section title size */}
                    <h3 className="text-2xl font-playfair font-bold text-navy mb-4 text-center">
                      {translations[language].mineralWaters}
                    </h3>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="grid grid-cols-1 gap-5"
                    >
                      {menuData.eaux_minerales.map((item) => (
                        <motion.div key={item.id} variants={fadeIn}>
                          <Card className="h-full">
                            {/* 5. Replace CardContent className */}
                            <CardContent className="p-5 flex justify-between items-center">
                              <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                              <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                    <div className="text-center mt-4">
                      <p className="text-gray-600 text-sm">{translations[language].syrupSupplement}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="boissons_chaudes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-5"
                >
                  {menuData.boissons_chaudes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        {/* 5. Replace CardContent className and text sizes */}
                        <CardContent className="p-5 flex justify-between items-center">
                          <h3 className="text-xl font-playfair font-bold">
                            {typeof item.name === "object" ? item.name[language] : item.name}
                          </h3>
                          <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="frappes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-5"
                >
                  {menuData.frappes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        {/* 5. Replace CardContent className and text sizes */}
                        <CardContent className="p-5 flex justify-between items-center">
                          <h3 className="text-xl font-playfair font-bold">
                            {typeof item.name === "object" ? item.name[language] : item.name}
                          </h3>
                          <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="vins">
                <div className="overflow-x-auto">
                  {/* 10. Modify table sizes */}
                  <div className="grid grid-cols-5 gap-2 items-center py-2 font-bold text-center text-gray-700 bg-gray-50 rounded-t-lg text-xs">
                    <p className="col-span-2 md:col-span-1 text-left pl-2">{translations[language].wine}</p>
                    <p>14cl</p>
                    <p>25cl</p>
                    <p>50cl</p>
                    <p>75cl</p>
                  </div>
                  {renderVins("rouge")}
                  {renderVins("rosé")}
                  {renderVins("blanc")}
                </div>
              </TabsContent>

              <TabsContent value="champagnes">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-5"
                >
                  {menuData.champagnes.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        {/* 5. Replace CardContent className and text sizes */}
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-playfair font-bold">
                              {typeof item.name === "object" ? item.name[language] : item.name}
                            </h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="bieres_pressions">
                <div className="overflow-x-auto">
                  {/* 10. Modify table sizes */}
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="p-4 bg-gray-100 font-playfair">{translations[language].beer}</th>
                        <th className="p-4 bg-gray-100 font-playfair text-center">25cl</th>
                        <th className="p-4 bg-gray-100 font-playfair text-center">50cl</th>
                        <th className="p-4 bg-red-100 text-red-800 font-playfair text-center text-xs">
                          {translations[language].happyHour}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuData.bieres_pressions.map((biere) => (
                        <tr key={biere.id} className="border-b">
                          <td className="p-4 font-bold text-base">
                            {typeof biere.name === "object" ? biere.name[language] : biere.name}
                          </td>
                          <td className="p-4 text-center">{biere["25cl"]}</td>
                          <td className="p-4 text-center">{biere["50cl"]}</td>
                          <td className="p-4 text-center font-bold text-red-600">{biere["happy-hour"] || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="bieres_bouteilles">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-5"
                >
                  {menuData.bieres_bouteilles.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        {/* 5. Replace CardContent className and text sizes */}
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-playfair font-bold">{item.name}</h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="aperitifs">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-5"
                >
                  {menuData.aperitifs.map((item) => (
                    <motion.div key={item.id} variants={fadeIn}>
                      <Card className="h-full">
                        {/* 5. Replace CardContent className and text sizes */}
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-playfair font-bold">
                              {typeof item.name === "object" ? item.name[language] : item.name}
                            </h3>
                            <span className="text-navy font-bold ml-2 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-gray-600 text-base">
                            {typeof item.description === "object" ? item.description[language] : item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}
