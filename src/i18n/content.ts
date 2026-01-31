import type { Language, LocalizedString } from "./types";

export type NavKey =
  | "home"
  | "philosophy"
  | "romanKitchen"
  | "menu"
  | "experiences"
  | "reservations"
  | "gift"
  | "contact";

export type PageContent = {
  title?: LocalizedString;
  intro?: LocalizedString;
  body?: LocalizedString[];
  sections?: Array<{ heading: LocalizedString; paragraphs: LocalizedString[] }>;
  gallery?: Array<{ alt: LocalizedString; caption: LocalizedString }>;
};

export type SiteContent = {
  brand: {
    name: LocalizedString;
    localeLine: LocalizedString;
  };
  nav: Record<NavKey, LocalizedString>;
  home: {
    heroLine1: LocalizedString;
    heroLine2: LocalizedString;
  };
  philosophy: PageContent;
  romanKitchen: PageContent;
  menu: {
    title: LocalizedString;
    lead: LocalizedString;
    courseCount: LocalizedString;
    winePairing: LocalizedString;
    dietary: LocalizedString;
    pricing: {
      tasting: LocalizedString;
      pairing: LocalizedString;
      note: LocalizedString;
    };
  };
  experiences: PageContent;
  reservations: {
    title: LocalizedString;
    lead: LocalizedString;
    form: {
      name: LocalizedString;
      email: LocalizedString;
      phone: LocalizedString;
      date: LocalizedString;
      time: LocalizedString;
      guests: LocalizedString;
      notes: LocalizedString;
      submit: LocalizedString;
      success: LocalizedString;
    };
  };
  gift: {
    title: LocalizedString;
    lead: LocalizedString;
    body: LocalizedString[];
    cta: LocalizedString;
  };
  contact: {
    title: LocalizedString;
    lead: LocalizedString;
    addressLabel: LocalizedString;
    hoursLabel: LocalizedString;
    phoneLabel: LocalizedString;
    emailLabel: LocalizedString;
    hours: LocalizedString;
    privacy: LocalizedString;
    cookies: LocalizedString;
    credit: LocalizedString;
  };
};

export const DEFAULT_LANGUAGE: Language = "en";

export const siteContent: SiteContent = {
  brand: {
    name: { en: "Trattoria Vecchia Roma", it: "Trattoria Vecchia Roma", es: "Trattoria Vecchia Roma" },
    localeLine: { en: "Valencia, Spain", it: "Valencia, Spagna", es: "Valencia, España" },
  },
  nav: {
    home: { en: "HOME", it: "HOME", es: "INICIO" },
    philosophy: { en: "PHILOSOPHY", it: "FILOSOFIA", es: "FILOSOFÍA" },
    romanKitchen: { en: "THE ROMAN KITCHEN", it: "LA CUCINA ROMANA", es: "LA COCINA ROMANA" },
    menu: { en: "MENU", it: "MENU", es: "MENÚ" },
    experiences: { en: "EXPERIENCES", it: "ESPERIENZE", es: "EXPERIENCIAS" },
    reservations: { en: "RESERVATIONS", it: "PRENOTAZIONI", es: "RESERVAS" },
    gift: { en: "GIFT A DINNER", it: "REGALA UNA CENA", es: "REGALA UNA CENA" },
    contact: { en: "CONTACT", it: "CONTATTI", es: "CONTACTO" },
  },
  home: {
    heroLine1: {
      en: "IN EQUILIBRIUM BETWEEN ANCIENT ROME AND CONTEMPORARY CUISINE",
      it: "IN EQUILIBRIO TRA ROMA ANTICA E CUCINA CONTEMPORANEA",
      es: "EN EQUILIBRIO ENTRE ROMA ANTIGUA Y COCINA CONTEMPORÁNEA",
    },
    heroLine2: {
      en: "A celebration of time, taste, and culinary art.",
      it: "Una celebrazione del tempo, del gusto e dell’arte culinaria.",
      es: "Una celebración del tiempo, del gusto y del arte culinario.",
    },
  },
  philosophy: {
    title: { en: "Philosophy", it: "Filosofia", es: "Filosofía" },
    intro: {
      en: "A kitchen is not a spectacle. It is a discipline of attention.",
      it: "Una cucina non è uno spettacolo. È una disciplina dell’attenzione.",
      es: "Una cocina no es un espectáculo. Es una disciplina de atención.",
    },
    body: [
      {
        en: "At Trattoria Vecchia Roma, we treat hospitality as a Roman virtue: measured, dignified, and unwavering. Every service is a ritual—quietly exacting—where taste becomes a form of knowledge.",
        it: "Alla Trattoria Vecchia Roma, l’ospitalità è una virtù romana: misurata, dignitosa, costante. Ogni servizio è un rito—silenziosamente esigente—dove il gusto diventa conoscenza.",
        es: "En Trattoria Vecchia Roma, la hospitalidad es una virtud romana: medida, digna, inquebrantable. Cada servicio es un rito—silenciosamente exigente—donde el gusto se convierte en conocimiento.",
      },
      {
        en: "We cook with patience: reductions that learn time, broths that remember origin, and fire that respects restraint. Ancient Rome provides the grammar; the Mediterranean provides the dialect; Valencia provides the light.",
        it: "Cuciniamo con pazienza: riduzioni che imparano il tempo, brodi che ricordano l’origine, e fuoco che rispetta la misura. Roma antica offre la grammatica; il Mediterraneo il dialetto; Valencia la luce.",
        es: "Cocinamos con paciencia: reducciones que aprenden el tiempo, caldos que recuerdan el origen y fuego que respeta la medida. La Roma antigua ofrece la gramática; el Mediterráneo el dialecto; Valencia la luz.",
      },
      {
        en: "Our work is scholarly—yet never cold. It is an ethics of flavor: to honor ingredients, to dignify craft, to speak softly and precisely.",
        it: "Il nostro lavoro è colto—ma mai freddo. È un’etica del sapore: onorare gli ingredienti, dare dignità al mestiere, parlare con precisione e in tono basso.",
        es: "Nuestro trabajo es erudito—pero nunca frío. Es una ética del sabor: honrar los ingredientes, dignificar el oficio, hablar con precisión y en voz baja.",
      },
    ],
  },
  romanKitchen: {
    title: { en: "The Roman Kitchen", it: "La Cucina Romana", es: "La Cocina Romana" },
    intro: {
      en: "Cuisine as architecture: structure, proportion, and quiet power.",
      it: "La cucina come architettura: struttura, proporzione, forza silenziosa.",
      es: "La cocina como arquitectura: estructura, proporción y fuerza silenciosa.",
    },
    body: [
      {
        en: "We interpret Roman heritage through contemporary Spanish fine dining: a dialogue between empire and coast, forum and market, mosaic and plate.",
        it: "Interpretiamo l’eredità romana attraverso l’alta cucina spagnola contemporanea: un dialogo tra impero e costa, foro e mercato, mosaico e piatto.",
        es: "Interpretamos la herencia romana a través de la alta cocina española contemporánea: un diálogo entre imperio y costa, foro y mercado, mosaico y plato.",
      },
      {
        en: "The kitchen favors clarity—no excess, no noise. Each course carries a single idea, refined until it becomes inevitable.",
        it: "La cucina privilegia la chiarezza—niente eccessi, niente rumore. Ogni portata porta un’idea unica, raffinata finché diventa inevitabile.",
        es: "La cocina privilegia la claridad—sin exceso, sin ruido. Cada pase sostiene una idea, refinada hasta volverse inevitable.",
      },
      {
        en: "Our seasonality is Mediterranean: citrus, olive, sea, and the calm intelligence of vegetables. Technique is present, never performative.",
        it: "La nostra stagionalità è mediterranea: agrumi, oliva, mare e l’intelligenza calma delle verdure. La tecnica c’è, ma non è mai teatrale.",
        es: "Nuestra estacionalidad es mediterránea: cítricos, oliva, mar y la inteligencia serena de las verduras. La técnica está presente, nunca es teatral.",
      },
    ],
    gallery: [
      {
        alt: {
          en: "Plated tasting course in Roman-inspired style",
          it: "Portata degustazione impiattata in stile romano",
          es: "Pase de degustación emplatado de estilo romano",
        },
        caption: {
          en: "Salt, citrus, and silence.",
          it: "Sale, agrumi e silenzio.",
          es: "Sal, cítricos y silencio.",
        },
      },
      {
        alt: {
          en: "Contemporary fine-dining dish, minimal composition",
          it: "Piatto contemporaneo, composizione minimale",
          es: "Plato contemporáneo, composición minimal",
        },
        caption: {
          en: "A mosaic reduced to one gesture.",
          it: "Un mosaico ridotto a un solo gesto.",
          es: "Un mosaico reducido a un solo gesto.",
        },
      },
      {
        alt: {
          en: "Elegant plated dish, restrained presentation",
          it: "Piatto elegante, presentazione misurata",
          es: "Plato elegante, presentación contenida",
        },
        caption: {
          en: "Where fire learns restraint.",
          it: "Dove il fuoco impara la misura.",
          es: "Donde el fuego aprende la medida.",
        },
      },
      {
        alt: {
          en: "Seasonal tasting plate with delicate details",
          it: "Portata stagionale con dettagli delicati",
          es: "Pase estacional con detalles delicados",
        },
        caption: {
          en: "An herb, a shadow, a memory.",
          it: "Un’erba, un’ombra, una memoria.",
          es: "Una hierba, una sombra, una memoria.",
        },
      },
      {
        alt: {
          en: "Refined dish served as part of a tasting menu",
          it: "Piatto raffinato parte di un percorso degustazione",
          es: "Plato refinado de un recorrido de degustación",
        },
        caption: {
          en: "Luxury, spoken in a low voice.",
          it: "Il lusso, detto a voce bassa.",
          es: "El lujo, dicho en voz baja.",
        },
      },
      {
        alt: {
          en: "Artful plated course with Roman-inspired minimalism",
          it: "Portata artistica, minimalismo d’ispirazione romana",
          es: "Pase artístico, minimalismo de inspiración romana",
        },
        caption: {
          en: "Measured abundance.",
          it: "Abbondanza misurata.",
          es: "Abundancia medida.",
        },
      },
    ],
  },
  menu: {
    title: { en: "Menu", it: "Menu", es: "Menú" },
    lead: {
      en: "We do not present a list of dishes. We present a journey of courses, measured like a Roman procession.",
      it: "Non presentiamo un elenco di piatti. Presentiamo un percorso di portate, misurato come una processione romana.",
      es: "No presentamos una lista de platos. Presentamos un recorrido de pases, medido como una procesión romana.",
    },
    courseCount: {
      en: "Seasonal Tasting — 10 courses",
      it: "Degustazione stagionale — 10 portate",
      es: "Degustación estacional — 10 pases",
    },
    winePairing: {
      en: "Wine pairing follows terroir and memory: Mediterranean whites, volcanic reds, quiet Spanish classics.",
      it: "L’abbinamento vini segue terroir e memoria: bianchi mediterranei, rossi vulcanici, classici spagnoli discreti.",
      es: "El maridaje sigue el terruño y la memoria: blancos mediterráneos, tintos volcánicos, clásicos españoles en voz baja.",
    },
    dietary: {
      en: "Please share allergies and dietary needs in advance; our kitchen will respond with discretion and precision.",
      it: "Vi invitiamo a comunicare allergie ed esigenze alimentari in anticipo; la cucina risponderà con discrezione e precisione.",
      es: "Por favor indique alergias y necesidades alimentarias con antelación; la cocina responderá con discreción y precisión.",
    },
    pricing: {
      tasting: { en: "Tasting Menu — 165 €", it: "Menu degustazione — 165 €", es: "Menú degustación — 165 €" },
      pairing: { en: "Wine Pairing — 95 €", it: "Abbinamento vini — 95 €", es: "Maridaje — 95 €" },
      note: {
        en: "Prices are per person. A service charge is not added.",
        it: "Prezzi per persona. Nessun supplemento di servizio.",
        es: "Precios por persona. No se añade servicio.",
      },
    },
  },
  experiences: {
    title: { en: "Experiences", it: "Esperienze", es: "Experiencias" },
    intro: {
      en: "The dining room becomes a museum of taste: a sequence of experiences, each with a Roman theme.",
      it: "La sala diventa un museo del gusto: una sequenza di esperienze, ciascuna con un tema romano.",
      es: "La sala se convierte en un museo del gusto: una secuencia de experiencias, cada una con un tema romano.",
    },
    sections: [
      {
        heading: { en: "Degustazione Romana", it: "Degustazione Romana", es: "Degustazione Romana" },
        paragraphs: [
          {
            en: "A seasonal procession inspired by ancient banquets—measured, precise, and quietly generous.",
            it: "Una processione stagionale ispirata ai banchetti antichi—misurata, precisa, discretamente generosa.",
            es: "Una procesión estacional inspirada en los banquetes antiguos—medida, precisa, discretamente generosa.",
          },
        ],
      },
      {
        heading: { en: "Historia in Blind", it: "Historia in Blind", es: "Historia in Blind" },
        paragraphs: [
          {
            en: "A blind tasting guided by history: fragments, contrasts, and the pleasure of inference.",
            it: "Una degustazione al buio guidata dalla storia: frammenti, contrasti e il piacere dell’inferenza.",
            es: "Una degustación a ciegas guiada por la historia: fragmentos, contrastes y el placer de inferir.",
          },
        ],
      },
      {
        heading: { en: "Wine & Terroir Journey", it: "Viaggio tra Vini e Terroir", es: "Viaje de Vino y Terruño" },
        paragraphs: [
          {
            en: "From Mediterranean limestone to volcanic slopes—pairings curated as a scholarly narrative.",
            it: "Dal calcare mediterraneo alle pendici vulcaniche—abbinamenti curati come un racconto colto.",
            es: "De la caliza mediterránea a laderas volcánicas—maridajes como una narración erudita.",
          },
        ],
      },
      {
        heading: { en: "Seasonal Roman Banquets", it: "Banchetti Romani Stagionali", es: "Banquetes Romanos Estacionales" },
        paragraphs: [
          {
            en: "For private tables: a longer rhythm, more silence, and courses shaped around the season’s rarest elements.",
            it: "Per tavoli privati: un ritmo più lungo, più silenzio, e portate costruite sugli elementi più rari della stagione.",
            es: "Para mesas privadas: un ritmo más largo, más silencio y pases construidos con los elementos más raros de la temporada.",
          },
        ],
      },
    ],
  },
  reservations: {
    title: { en: "Reservations", it: "Prenotazioni", es: "Reservas" },
    lead: {
      en: "Request a table. We will confirm with calm precision.",
      it: "Richiedi un tavolo. Confermeremo con calma precisione.",
      es: "Solicite una mesa. Confirmaremos con calma precisión.",
    },
    form: {
      name: { en: "Name", it: "Nome", es: "Nombre" },
      email: { en: "Email", it: "Email", es: "Email" },
      phone: { en: "Phone", it: "Telefono", es: "Teléfono" },
      date: { en: "Date", it: "Data", es: "Fecha" },
      time: { en: "Time", it: "Orario", es: "Hora" },
      guests: { en: "Guests", it: "Ospiti", es: "Comensales" },
      notes: { en: "Notes (allergies)", it: "Note (allergie)", es: "Notas (alergias)" },
      submit: { en: "Send request", it: "Invia richiesta", es: "Enviar solicitud" },
      success: {
        en: "Request sent. We will contact you shortly.",
        it: "Richiesta inviata. Ti contatteremo a breve.",
        es: "Solicitud enviada. Le contactaremos en breve.",
      },
    },
  },
  gift: {
    title: { en: "Gift a Dinner", it: "Regala una Cena", es: "Regala una Cena" },
    lead: {
      en: "A dinner is not a product. It is an evening preserved in memory.",
      it: "Una cena non è un prodotto. È una sera custodita nella memoria.",
      es: "Una cena no es un producto. Es una noche guardada en la memoria.",
    },
    body: [
      {
        en: "Offer the gift of time: a table, a procession of courses, and the quiet luxury of being cared for.",
        it: "Offri il dono del tempo: un tavolo, una processione di portate e il lusso silenzioso di essere accolti.",
        es: "Ofrezca el regalo del tiempo: una mesa, una procesión de pases y el lujo silencioso de ser atendidos.",
      },
      {
        en: "A voucher can be tailored to tasting, pairing, or a private experience—always with restraint.",
        it: "Un voucher può essere personalizzato su degustazione, abbinamento o un’esperienza privata—sempre con misura.",
        es: "Un vale puede adaptarse a degustación, maridaje o una experiencia privada—siempre con mesura.",
      },
    ],
    cta: { en: "Request a gift voucher", it: "Richiedi un voucher regalo", es: "Solicitar un vale regalo" },
  },
  contact: {
    title: { en: "Contact", it: "Contatti", es: "Contacto" },
    lead: {
      en: "For reservations, private tables, and correspondence.",
      it: "Per prenotazioni, tavoli privati e corrispondenza.",
      es: "Para reservas, mesas privadas y correspondencia.",
    },
    addressLabel: { en: "Address", it: "Indirizzo", es: "Dirección" },
    hoursLabel: { en: "Opening hours", it: "Orari", es: "Horario" },
    phoneLabel: { en: "Phone", it: "Telefono", es: "Teléfono" },
    emailLabel: { en: "Email", it: "Email", es: "Email" },
    hours: {
      en: "Tue–Sat: 13:30–15:30 / 20:00–23:00",
      it: "Mar–Sab: 13:30–15:30 / 20:00–23:00",
      es: "Mar–Sáb: 13:30–15:30 / 20:00–23:00",
    },
    privacy: { en: "Privacy", it: "Privacy", es: "Privacidad" },
    cookies: { en: "Cookies", it: "Cookie", es: "Cookies" },
    credit: { en: "Website by Lovable", it: "Sito web by Lovable", es: "Web por Lovable" },
  },
};

export const t = (value: LocalizedString, lang: Language) => value[lang];
