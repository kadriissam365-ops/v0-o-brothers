"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Phone, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RESTAURANT } from "@/lib/constants"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoUrl = `mailto:${RESTAURANT.email}?subject=${encodeURIComponent(
      formData.subject || "Message depuis le site"
    )}&body=${encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    )}`

    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 800)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Informations */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <h2 className="text-2xl font-playfair font-bold mb-6">Nos informations</h2>

              <div className="space-y-6">
                <motion.div variants={fadeIn} className="flex items-start">
                  <MapPin className="h-6 w-6 text-navy mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      {RESTAURANT.address.street}
                      <br />
                      {RESTAURANT.address.city}
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      {RESTAURANT.parking.label}
                      <br />
                      {RESTAURANT.parking.note}
                      <br />
                      {RESTAURANT.parking.entrance}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Clock className="h-6 w-6 text-navy mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Horaires</h3>
                    <p className="text-gray-700">
                      <span className="font-medium">Ouverture :</span>
                      <br />
                      {RESTAURANT.hours.opening.weekdays}
                      <br />
                      {RESTAURANT.hours.opening.saturday}
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-medium">Service restauration :</span>
                      <br />
                      {RESTAURANT.hours.service}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Phone className="h-6 w-6 text-navy mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Téléphone</h3>
                    <a
                      href={`tel:${RESTAURANT.phone.tel}`}
                      className="text-gray-700 hover:text-navy transition-colors"
                    >
                      {RESTAURANT.phone.display}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start">
                  <Instagram className="h-6 w-6 text-navy mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Réseaux sociaux</h3>
                    {RESTAURANT.instagram.map((ig) => (
                      <a
                        key={ig.handle}
                        href={ig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-navy transition-colors"
                      >
                        {ig.handle}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-2xl font-playfair font-bold mb-6">Envoyer un message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-medium text-lg mb-2">Message prêt à envoyer !</p>
                  <p className="text-green-700 text-sm">
                    Votre client mail s&apos;est ouvert avec votre message pré-rempli.
                  </p>
                  <Button
                    className="mt-4 bg-navy hover:bg-navy-light"
                    onClick={() => setSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={5}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-navy hover:bg-navy-light flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Ouverture du client mail...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
