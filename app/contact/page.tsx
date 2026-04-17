"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Clock, MapPin, Phone, Instagram } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
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
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions. N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <h2 className="text-2xl font-playfair font-bold mb-6">Nos informations</h2>

              <div className="space-y-6">
                <motion.div variants={fadeIn} className="flex items-start">
                  <MapPin className="h-6 w-6 text-navy mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      148 avenue Gabriel Péri
                      <br />
                      92230 Gennevilliers
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      PARKING Centre-Ville
                      <br />
                      2H GRATUITES*
                      <br />
                      *Ticket disponible chez votre commerçant
                      <br />
                      Entrée du parking: 21 av. Claude Debussy
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Clock className="h-6 w-6 text-navy mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Ouverture:</span>
                      <br />
                      Lundi au Vendredi: 7h à 20h
                      <br />
                      Samedi: 8h à 20h
                    </p>
                    <p className="text-gray-600 mt-2">
                      <span className="font-medium">Service restauration:</span>
                      <br />
                      Lundi au Samedi: 11h30 à 14h30
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Phone className="h-6 w-6 text-navy mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <p className="text-gray-600">01 47 90 25 72</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Instagram className="h-6 w-6 text-navy mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Réseaux sociaux</h3>
                    <p className="text-gray-600">
                      Instagram: @brothersgenneviliers
                      <br />
                      Instagram: brothers92230
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
