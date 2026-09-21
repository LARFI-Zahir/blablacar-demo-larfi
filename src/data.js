// Le "nouveau conducteur" qui vit le parcours de la feature Coup de pouce.
export const currentDriver = {
  id: "u1",
  firstName: "Thomas",
  lastNameInitial: "M.",
  avatar: "🧑",
  age: 27,
  email: "thomas.martin@exemple.com",
  tripsAsDriver: 0,
  savings: 0,
  hasCompletedTripWithPassenger: false, // devient true -> fin définitive du dispositif
};

// Trajet publié par le nouveau conducteur, affiché dans "Vos trajets".
export const publishedTrip = {
  id: "t1",
  from: "Paris",
  to: "Uzerche",
  date: "Dim. 28 févr. 2027",
  departureTime: "08:00",
  arrivalTime: "12:20",
  duration: "4h20",
  price: "38 €",
  seats: 3,
};

// Autre trajet sur la même recherche, proposé par un conducteur expérimenté
// (déjà des avis) : pas concerné par le dispositif "Coup de pouce".
export const otherTrip = {
  id: "t2",
  from: "Paris",
  to: "Uzerche",
  date: "Dim. 28 févr. 2027",
  departureTime: "09:15",
  arrivalTime: "13:30",
  duration: "4h15",
  price: "35 €",
  driver: {
    firstName: "Marc",
    lastNameInitial: "D.",
    avatar: "👨",
    rating: 4.7,
    trips: 340,
  },
};

// Conducteurs éligibles à être parrain (règle MVP : >= 10 trajets).
// traveledTogether = true -> le nouveau conducteur a déjà voyagé avec eux en tant que passager (priorité 1).
export const eligibleDrivers = [
  {
    id: "d1",
    firstName: "Sophie",
    lastNameInitial: "L.",
    avatar: "👩",
    rating: 4.9,
    trips: 214,
    city: "Paris",
    traveledTogether: true,
  },
  {
    id: "d2",
    firstName: "Julie",
    lastNameInitial: "P.",
    avatar: "👩‍🦰",
    rating: 4.8,
    trips: 96,
    city: "Paris",
    traveledTogether: true,
  },
  {
    id: "d3",
    firstName: "Marc",
    lastNameInitial: "D.",
    avatar: "👨",
    rating: 4.7,
    trips: 340,
    city: "Uzerche",
    traveledTogether: false,
  },
  {
    id: "d4",
    firstName: "Karim",
    lastNameInitial: "B.",
    avatar: "🧔",
    rating: 4.9,
    trips: 58,
    city: "Paris",
    traveledTogether: false,
  },
  {
    id: "d5",
    firstName: "Elena",
    lastNameInitial: "R.",
    avatar: "👩‍🦱",
    rating: 4.6,
    trips: 127,
    city: "Limoges",
    traveledTogether: false,
  },
];
