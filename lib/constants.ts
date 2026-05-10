export const RESTAURANT = {
  name: "Brother's Restaurant Gennevilliers",
  address: {
    street: "148 avenue Gabriel Péri",
    city: "92230 Gennevilliers",
    full: "148 avenue Gabriel Péri, 92230 Gennevilliers",
  },
  phone: {
    display: "01 47 90 25 72",
    tel: "+33147902572",
  },
  whatsapp: {
    number: "33147902572",
    url: "https://wa.me/33147902572?text=Bonjour%20Brother's%20!%20Je%20souhaite%20vous%20contacter.",
  },
  email: "contact@brothers-restaurant-gennevilliers.com",
  website: "https://www.brothers-restaurant-gennevilliers.com",
  instagram: [
    {
      handle: "@brothersgenneviliers",
      url: "https://www.instagram.com/brothersgenneviliers",
    },
    {
      handle: "brothers92230",
      url: "https://www.instagram.com/brothers92230",
    },
  ],
  hours: {
    opening: {
      weekdays: "Lundi au Vendredi : 7h à 20h",
      saturday: "Samedi : 8h à 20h",
    },
    service: "Lundi au Samedi : 11h30 à 14h30",
  },
  // Machine-readable hours for OpeningStatusBanner. day: 0 = dimanche, 1 = lundi, ..., 6 = samedi
  hoursStructured: {
    opening: [
      { days: [1, 2, 3, 4, 5], open: "07:00", close: "20:00" },
      { days: [6], open: "08:00", close: "20:00" },
    ],
    service: [
      { days: [1, 2, 3, 4, 5, 6], open: "11:30", close: "14:30" },
    ],
  },
  parking: {
    label: "PARKING Centre-Ville — 2H GRATUITES*",
    note: "*Ticket disponible chez votre commerçant",
    entrance: "Entrée du parking : 21 av. Claude Debussy",
  },
  googleMaps: "https://maps.app.goo.gl/bFex6r3",
  googleReview: "https://maps.app.goo.gl/bFex6r3",
  itinerary: "https://www.google.com/maps/dir/?api=1&destination=148+avenue+Gabriel+Peri+92230+Gennevilliers",
}
