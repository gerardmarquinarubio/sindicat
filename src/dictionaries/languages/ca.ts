import type { Schema } from "../schema";

const ca: Schema = {
  index: {
    greeting: "Un futur millor",
    subtitle:
      "En un món cada cop més globalitzat on els treballs a distància tenen una major presència, falten entorns d'organització col·lectiva, on el proletariat pogués expressar lliurement les seves idees i gestionar-se contra el seu cap.",
    startButton: "Comença ara",
    userCounterTitle: "Els nostres usuaris",
    userCounteSubtitle:
      "Els nostres usuaris d'arreu del món estan fent coses increïbles, aquí podeu veure'n un exemple",
  },
  err: {
    empty: "no pot estar buit",
  },
  org: {
    filter: {
      all: "Mostra totes les publicacions",
    },
    posts: "publicacions",
    unverified: "sense verificar",
    verified: "verificat",
    users: "usuaris",
  },
  res: {
    title: "El temps és a prop",
    subtitle:
      "Imagineu un món on s'escolti la veu col·lectiva dels treballadors, on prevalgui l'equitat i la justícia, i on cada individu tingui el poder de configurar el seu propi destí...",
    quotes: {
      "1": {
        label:
          "El treballador que es converteix en un engranatge de la màquina és robat de la seva humanitat",
        author: "- Mikhail Bakunin",
      },
      "2": {
        label:
          "L'arma més poderosa a les mans de l'opressor és la ment de l'oprimit",
        author: "- Steve Biko",
      },
      "3": {
        label:
          "Hem de portar el foc de la revolució al cor i continuar la lluita per un món millor",
        author: "- Emma Goldman",
      },
      "4": {
        label:
          "La solidaritat no és una qüestió de sentiment sinó un fet, fred i impassible com els fonaments de granit d'un gratacels",
        author: "- Rosa Luxemburg",
      },
    },
    hero1: {
      title: "Ho savies?",
      subtitle:
        "Els sindicats de treballadors van tenir un paper fonamental per acabar amb el treball infantil generalitzat que va persistir fins al segle passat. ",
    },
    hero2: {
      title: "Ho savies?",
      subtitle:
        "Els sindicats de treballadors han defensat els drets de les dones, fet que ha suposat un avenç significatiu en el darrer segle. ",
    },
  },
  components: {
    browseButton: {
      label: "Navega per comunitats",
    },
    loginButton: {
      label: "Registra't ara",
    },
    post: {
      by: "per",
      comments: "comentaris",
      comment: "Comenta",
    },
    postModal: {
      openButtonDefault: "Crea una publicació",
      postType: "Tipus de publicació",
      title: {
        label: "Títol",
        placeholder: "Les notícies són aquí!",
      },
      text: {
        label: "Cos",
        placeholder: "La guineu marró va saltar per sobre del gos mandrós?",
      },
      link: {
        label: "Enllaç",
        placeholder: "https://no.magic",
      },
      image: {
        label: "Imatge",
      },
      submit: {
        label: "Presentar",
      },
    },
  },
  search: {
    lost: {
      title: "No s'ha trobat res",
      subtitle: "Prova de cercar de nou amb termes nous",
    },
    toggles: {
      filterUnverified: "Amaga les organitzacions no verificades",
    },
    sort: {
      modes: {
        activity: {
          asc: "Ordena per més activitat",
          desc: "Ordena per menys activitat",
        },
        userCount: {
          asc: "Ordena per aglomeració",
          desc: "Ordena per buit",
        },
        newest: {
          asc: "Ordena per més recent",
          desc: "Ordena per més antics",
        },
      },
    },
  },
  access: {
    login: {
      title: "Inicia sessió",
      subtitle: "Ens tornem a veure, junts podem canviar el món",
    },
    register: {
      title: "Registra't",
      subtitle: "Tria sàviament, Neo",
    },
    name: {
      label: "Nom",
      placeholder: "John doe",
    },
    email: {
      label: "Correu electrònic",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      label: "Contrasenya",
      placeholder: "contrasenya molt segura",
      forgot: "Has oblidat la teva contrasenya?",
    },
    cookies: {
      label: "Accepto les condicions del servei",
    },
    buttons: {
      login: "Inicia sessió",
      register: "Registra't",
    },
  },
  create: {
    title: "Comenceu a organitzar-vos ara",
    subtitle: "Un DJ dolent en la seva vida a trencat un plat",
    name: {
      label: "Nom",
      placeholder: "Cool Corp",
    },
    description: {
      label: "Descripció",
      placeholder: "Descripció interessant",
    },
    visibility: {
      label: "Visibilitat",
    },
    submit: "Crear",
  },
  navbar: {
    createOrg: "Crear organització",
    myOrg: "Les meves organitzacions",
    searchPlaceholder: "Nom de l'organització",
    userButton: "El meu perfil",
    settingsButton: "Configuració",
    registerButton: "Registra't",
    loginButton: "Inicia sessió",
    logoutButton: "Tanqueu la sessió",
  },
  footer: {
    legal: {
      label: "Legal",
      tos: "Termes del servei",
      privacy: "Privadesa i GDPR",
      licenses: "Llicències",
    },
    faq: {
      label: "Preguntes freqüents",
      who: "Qui sóm?",
      data: "Recolliu les meves dades?",
      how: "Com es va fer això?",
      res: "On puc trobar més recursos?",
    },
    res: {
      label: "Recursos",
      rights: "Els teus drets com a treballador",
      quotes: "Cites i inspiració",
    },
  },
  faq: {
    what: {
      label: "Què és això sindi.cat?",
      text: {
        "1": "En un món cada cop més globalitzat on els treballs remots tenen una major intensitat",
        "2": "Aquesta plataforma oferirà una varietat d'eines i recursos per ajudar",
        "3": "A més de proporcionar una plataforma segura per a l'organització sindical,",
        "4": "Aquesta plataforma també serà una comunitat en línia on els treballadors podran",
      },
    },
    data: {
      label: "Recolliu les meves dades?",
      text: "Sí, tal com es descriu a l'Avís de Privacitat i Protecció de Dades, el",
    },
    how: {
      label: "Com es va fer aquesta web?",
      text: {
        "1": 'El lloc web "sindi.cat" es va crear amb una combinació de\n            ',
        "2": "Front-end: el front-end del lloc web es va desenvolupar amb React,",
        "3": "Back-end: el back-end del lloc web es va implementar mitjançant",
        "4": "Base de dades: el lloc web utilitza una base de dades per emmagatzemar i recuperar",
      },
    },
    res: {
      label: "On puc trobar més recursos?",
      text: {
        "1": "Hi ha diversos recursos en línia disponibles per als treballadors i els sindicats",
        "2": "1. Organització Internacional del Treball (OIT): L'OIT és una Unió",
        "3": "2. Confederacions Sindicals: Confederacions Sindicals a",
        "4": "3. Organitzacions de drets laborals: Diverses organitzacions de drets laborals",
        "5": "4. Webs governamentals: departaments o ministeris de treball del govern",
        "6": "5. Comunitats i fòrums en línia: comunitats i fòrums en línia",
      },
    },
  },
  legal: {
    terms: {
      label: "Termes del servei",
      text: {
        "1": 'Si us plau, llegiu aquests Termes i condicions del servei ("Condicions")\n            ',
        "2": "1. Exempció de responsabilitat de la versió alfa",
        "3": "El Servei es troba actualment en la seva fase alfa, el que significa que és a",
        "4": "2. Elegibilitat",
        "5": "Has de tenir com a mínim 18 anys o la majoria d'edat legal",
        "6": "3. Comptes d'usuari",
        "7": "Per accedir a determinades funcions del Servei, és possible que hàgiu de crear un",
        "8": "4. Conducta de l'usuari mentre utilitza el Servei",
        "9": "Vostè accepta complir les següents directrius: - 4.1. ",
        "10": "5. Drets de propietat intel·lectual",
        "11": "Tots els drets de propietat intel·lectual del Servei, inclosos però no",
        "12": "6. Limitació de responsabilitat",
        "13": "En la mesura que ho permeti la llei aplicable, no serem responsables",
        "14": "7. Modificacions del Servei",
        "15": "Ens reservem el dret de modificar o interrompre el Servei,",
        "16": "8. Indemnització",
        "17": "Accepteu indemnitzar-nos i mantenir-nos exempts de qualsevol responsabilitat",
        "18": "9. Enllaços i serveis de tercers",
        "19": "El Servei pot contenir enllaços a llocs web o serveis de tercers",
        "20": "10. Termini",
        "21": "Podem, a la nostra discreció, suspendre o cancel·lar el vostre accés a",
        "22": "11. Llei aplicable i jurisdicció",
        "23": "Aquestes Condicions es regiran i s'interpretaran d'acord amb",
        "24": "12. Divisibilitat",
        "25": "Si es considera que alguna disposició d'aquestes Condicions és inaplicable o",
        "26": "13. Acord complet",
        "27": "Aquestes Condicions constitueixen l'acord complet entre vostè i nosaltres",
        "28": "14. Canvis a les Condicions",
        "29": "Ens reservem el dret, a la nostra discreció, de modificar o substituir",
        "30": "15. Contacta amb nosaltres",
        "31": "Si teniu cap pregunta o dubte sobre aquestes Condicions o la",
        "32": "En utilitzar el Servei, reconeixeu que heu llegit,",
      },
    },
    privacy: {
      label: "Privadesa de les dades",
      text: {
        "1": 'Aquest Avís de Privacitat i Protecció de Dades ("Avís") explica com\n            ',
        "2": "1. Informació que recollim",
        "3": "Podem recopilar les següents categories d'informació personal",
        "4": "2. Ús de la informació",
        "5": "Utilitzem la informació personal recopilada per al següent",
        "6": "3. Compartir informació",
        "7": "Podem compartir la vostra informació personal amb tercers en virtut de la",
        "8": "4. Seguretat de les dades",
        "9": "Prenem mesures raonables per protegir la vostra informació personal",
        "10": "5. Els teus drets i eleccions",
        "11": "Teniu certs drets i opcions pel que fa al vostre personal",
        "12": "6. Privacitat dels nens",
        "13": "El Servei no està destinat a persones menors de 18 anys. Nosaltres",
        "14": "7. Canvis a aquest Avís",
        "15": "És possible que actualitzem aquest avís de tant en tant per reflectir els canvis",
        "16": "8. Contacta amb nosaltres",
        "17": "Si teniu cap pregunta, inquietud o sol·licitud al respecte",
        "18": "En utilitzar el Servei, reconeixeu que heu llegit,",
      },
    },
    licenses: {
      label: "Llicències",
      text: {
        "1": "En aquesta secció es descriuen les llicències i les atribucions per al",
        "2": "@prisma/client: un conjunt d'eines de base de dades per a TypeScript i Node.js.",
        "3": "@tanstack/react-query: una biblioteca de React per a la gestió remota i",
        "4": "@total-typescript/ts-reset: una biblioteca d'utilitats per restablir",
        "5": "@trpc/client: una biblioteca TypeScript RPC (Remote Procedure Call) per a",
        "6": "@trpc/next: representació del servidor i gestió de l'API per a trpc.",
        "7": "@trpc/react-query: integració de React Query per a trpc.",
        "8": "@trpc/server: programari intermedi del servidor per a trpc.",
        "9": "bcrypt: una biblioteca per utilitzar contrasenyes hash.",
        "10": "check-password-strength: una biblioteca per comprovar la força de la contrasenya.",
        "11": "daisyui: una biblioteca de components CSS de Tailwind.",
        "12": "email-validator: una biblioteca per validar adreces de correu electrònic.",
        "13": "eslint: un linter connectable i configurable per a JavaScript i",
        "14": "eslint-config-next: configuració ESLint per als projectes Next.js.",
        "15": "javascript-time-ago: una biblioteca per donar format a temps enrere",
        "16": "següent: Un marc de React per a servidors i estàticament",
        "17": "next-auth: una biblioteca d'autenticació per a aplicacions Next.js.",
        "18": "next-superjson-plugin: un connector per serialitzar la pàgina Next.js",
        "19": "normalize-email: una biblioteca per normalitzar adreces de correu electrònic.",
        "20": "react: una biblioteca de JavaScript per crear interfícies d'usuari.",
        "21": "react-dom: un paquet per treballar amb el DOM a React",
        "22": "react-dropzone: un component de React senzill per a la càrrega de fitxers.",
        "23": "react-icons: una biblioteca d'icones per a aplicacions React.",
        "24": "mecanografia: un superconjunt de JavaScript escrit.",
        "25": "zod: una biblioteca de validació d'esquemes de TypeScript.",
        "26": "autoprefixer: una eina per analitzar CSS i afegir prefixos de proveïdor.",
        "27": "prisma: un conjunt d'eines de base de dades i ORM (Mapa relacional-objecte) per a",
        "28": "tailwindcss: un marc CSS altament personalitzable.",
      },
    },
  },
};

export default ca;
