import type { Schema } from "../schema";

const de: Schema = {
  index: {
    greeting: "Eine bessere Zukunft",
    subtitle:
      "In einer zunehmend globalisierten Welt, in der Remote-Jobs eine größere Präsenz haben, fehlen Umgebungen kollektiver Organisation, in denen das Proletariat seine Ideen frei äußern und sich gegen seinen Chef behaupten kann.",
    startButton: "Jetzt anfangen",
    userCounterTitle: "Unsere Benutzer",
    userCounteSubtitle:
      "Unsere Benutzer auf der ganzen Welt leisten erstaunliche Dinge. Hier können Sie ein Beispiel sehen",
  },
  err: {
    empty: "kann nicht leer sein",
  },
  org: {
    filter: {
      all: "Alle Beiträge anzeigen",
    },
    posts: "Beiträge",
    unverified: "unbestätigt",
    verified: "verifiziert",
    users: "Benutzer",
  },
  res: {
    title: "Die Zeit ist nahe",
    subtitle:
      "Stellen Sie sich eine Welt vor, in der die kollektive Stimme der Arbeitnehmer gehört wird, in der Fairness und Gerechtigkeit vorherrschen und in der jeder Einzelne die Macht hat, sein eigenes Schicksal zu gestalten ...",
    quotes: {
      "1": {
        label:
          "Der Arbeiter, der zum Rädchen der Maschine wird, wird seiner Menschlichkeit beraubt",
        author: "- Michail Bakunin",
      },
      "2": {
        label:
          "Die stärkste Waffe in den Händen des Unterdrückers ist der Geist des Unterdrückten",
        author: "-Steve Biko",
      },
      "3": {
        label:
          "Wir müssen das Feuer der Revolution in unseren Herzen tragen und den Kampf für eine bessere Welt fortsetzen",
        author: "-Emma Goldman",
      },
      "4": {
        label:
          "Solidarität ist keine Frage des Gefühls, sondern eine Tatsache, kalt und teilnahmslos wie die Granitfundamente eines Wolkenkratzers",
        author: "-Rosa Luxemburg",
      },
    },
    hero1: {
      title: "Wussten Sie?",
      subtitle:
        "Arbeitergewerkschaften spielten eine entscheidende Rolle bei der Beendigung der weitverbreiteten Kinderarbeit, die bis ins letzte Jahrhundert andauerte. ",
    },
    hero2: {
      title: "Wussten Sie?",
      subtitle:
        "Die Arbeitnehmergewerkschaften haben sich für die Rechte der Frauen eingesetzt, was im letzten Jahrhundert zu erheblichen Fortschritten geführt hat. ",
    },
  },
  components: {
    browseButton: {
      label: "Durchsuchen Sie Communities",
    },
    loginButton: {
      label: "Jetzt registrieren",
    },
    post: {
      by: "von",
      comments: "Kommentare",
      comment: "Kommentar",
    },
    postModal: {
      openButtonDefault: "Beitrag erstellen",
      postType: "Post-Typ",
      title: {
        label: "Titel",
        placeholder: "Die Neuigkeiten sind da!",
      },
      text: {
        label: "Körper",
        placeholder: "Der Braunfuchs ist über den faulen Hund gesprungen?",
      },
      link: {
        label: "Verknüpfung",
        placeholder: "https://no.magic",
      },
      image: {
        label: "Bild",
      },
      submit: {
        label: "Einreichen",
      },
    },
  },
  search: {
    lost: {
      title: "Nichts gefunden",
      subtitle: "Versuchen Sie erneut, mit neuen Begriffen zu suchen",
    },
    toggles: {
      filterUnverified: "Nicht verifizierte Organisationen ausblenden",
    },
    sort: {
      modes: {
        activity: {
          asc: "Sortieren Sie nach mehr Aktivität",
          desc: "Sortieren nach weniger Aktivität",
        },
        userCount: {
          asc: "Sortieren Sie nach Gedränge",
          desc: "Nach Leerheit sortieren",
        },
        newest: {
          asc: "Sortieren nach Neuestem",
          desc: "Nach Ältesten sortieren",
        },
      },
    },
  },
  access: {
    login: {
      title: "anmelden",
      subtitle: "Wir sehen uns wieder, gemeinsam können wir die Welt verändern",
    },
    register: {
      title: "Anmeldung",
      subtitle: "Wähle mit Bedacht, Neo",
    },
    name: {
      label: "Name",
      placeholder: "John Doe",
    },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      label: "Passwort",
      placeholder: "sehr sicheres Passwort",
      forgot: "Haben Sie Ihr Passwort vergessen?",
    },
    cookies: {
      label: "Ich akzeptiere die Servicebedingungen",
    },
    buttons: {
      login: "anmelden",
      register: "Anmeldung",
    },
  },
  create: {
    title: "Beginnen Sie jetzt mit der Organisation",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    name: {
      label: "Name",
      placeholder: "Cool Corp",
    },
    description: {
      label: "Beschreibung",
      placeholder: "Lorem ipsum dolor sit amet",
    },
    visibility: {
      label: "Sichtweite",
    },
    submit: "Erstellen",
  },
  navbar: {
    createOrg: "Organisation schaffen",
    myOrg: "Meine Organisationen",
    searchPlaceholder: "Name der Organisation",
    userButton: "Mein Profil",
    settingsButton: "Einstellungen",
    registerButton: "Anmeldung",
    loginButton: "anmelden",
    logoutButton: "abmelden",
  },
  footer: {
    legal: {
      label: "Legal",
      tos: "Nutzungsbedingungen",
      privacy: "Datenschutz und DSGVO",
      licenses: "Lizenzen",
    },
    faq: {
      label: "FAQ",
      who: "Wer sind wir?",
      data: "Sammeln Sie meine Daten?",
      how: "Wie wurde das gemacht?",
      res: "Wo finde ich weitere Ressourcen?",
    },
    res: {
      label: "Ressourcen",
      rights: "Ihre Rechte als Arbeitnehmer",
      quotes: "Zitate und Inspiration",
    },
  },
  faq: {
    what: {
      label: "Was ist diese sindi.cat?",
      text: {
        "1": "In einer zunehmend globalisierten Welt, in der Remote-Jobs eine größere Bedeutung haben\n            ",
        "2": "Diese Plattform bietet eine Vielzahl hilfreicher Tools und Ressourcen\n            ",
        "3": "Neben der Bereitstellung einer sicheren Plattform für die Gewerkschaftsorganisation,\n            ",
        "4": "Diese Plattform wird auch eine Online-Community sein, in der Arbeitnehmer arbeiten können\n            ",
      },
    },
    data: {
      label: "Sammeln Sie meine Daten?",
      text: "Ja, wie in der Datenschutzerklärung beschrieben\n            ",
    },
    how: {
      label: "Wie wurde diese Website erstellt?",
      text: {
        "1": "Die Website „sindi.cat“ wurde mit einer Kombination aus erstellt\n            ",
        "2": "Frontend: Das Frontend der Website wurde mit React entwickelt,\n            ",
        "3": "Back-End: Das Backend der Website wurde mit implementiert\n            ",
        "4": "Datenbank: Die Website nutzt zum Speichern und Abrufen eine Datenbank\n            ",
      },
    },
    res: {
      label: "Wo finde ich weitere Ressourcen?",
      text: {
        "1": "Für Arbeitnehmer und Gewerkschaften stehen mehrere Online-Ressourcen zur Verfügung\n            ",
        "2": "1. Internationale Arbeitsorganisation (ILO): Die ILO ist eine vereinte Organisation\n            ",
        "3": "2. Gewerkschaftsbünde: Gewerkschaftsbünde bei\n            ",
        "4": "3. Arbeitsrechtsorganisationen: Verschiedene Arbeitsrechtsorganisationen\n            ",
        "5": "4. Regierungswebsites: Arbeitsämter oder -ministerien der Regierung\n            ",
        "6": "5. Online-Communitys und Foren: Online-Communitys und Foren\n            ",
      },
    },
  },
  legal: {
    terms: {
      label: "Nutzungsbedingungen",
      text: {
        "1": "Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen („Bedingungen“).\n            ",
        "2": "1. Haftungsausschluss für die Alpha-Version",
        "3": "Der Dienst befindet sich derzeit im Alpha-Stadium, was bedeutet, dass es sich um einen handelt\n            ",
        "4": "2. Teilnahmeberechtigung",
        "5": "Sie müssen mindestens 18 Jahre alt oder volljährig sein\n            ",
        "6": "3. Benutzerkonten",
        "7": "Um auf bestimmte Funktionen des Dienstes zugreifen zu können, müssen Sie möglicherweise eine erstellen\n            ",
        "8": "4. Nutzerverhalten bei der Nutzung des Dienstes",
        "9": "Sie verpflichten sich, die folgenden Richtlinien einzuhalten: - 4.1. ",
        "10": "5. Geistige Eigentumsrechte",
        "11": "Alle geistigen Eigentumsrechte am Dienst, einschließlich, aber nicht\n            ",
        "12": "6. Haftungsbeschränkung",
        "13": "Soweit gesetzlich zulässig, übernehmen wir keine Haftung\n            ",
        "14": "7. Änderungen am Service",
        "15": "Wir behalten uns das Recht vor, den Dienst zu ändern oder einzustellen.\n            ",
        "16": "8. Schadensersatz",
        "17": "Sie erklären sich damit einverstanden, uns von jeglicher Haftung freizustellen und schadlos zu halten\n            ",
        "18": "9. Links und Dienste Dritter",
        "19": "Der Dienst kann Links zu Websites oder Diensten Dritter enthalten\n            ",
        "20": "10. Kündigung",
        "21": "Wir können Ihren Zugriff auf nach unserem alleinigen Ermessen sperren oder beenden\n            ",
        "22": "11. Anwendbares Recht und Gerichtsstand",
        "23": "Diese Bedingungen unterliegen den Bestimmungen und werden in Übereinstimmung mit diesen ausgelegt\n            ",
        "24": "12. Salvatorische Klausel",
        "25": "Sollte sich herausstellen, dass eine Bestimmung dieser Bedingungen nicht durchsetzbar ist oder\n            ",
        "26": "13. Gesamte Vereinbarung",
        "27": "Diese Bedingungen stellen die gesamte Vereinbarung zwischen Ihnen und uns dar\n            ",
        "28": "14. Änderungen der Bedingungen",
        "29": "Wir behalten uns das Recht vor, nach eigenem Ermessen Änderungen oder Ersatz vorzunehmen\n            ",
        "30": "15. Kontaktieren Sie uns",
        "31": "Wenn Sie Fragen oder Bedenken bezüglich dieser Bedingungen oder der haben\n            ",
        "32": "Durch die Nutzung des Dienstes bestätigen Sie, dass Sie Folgendes gelesen haben:\n            ",
      },
    },
    privacy: {
      label: "Datenprivatsphäre",
      text: {
        "1": "Diese Datenschutz- und Datenschutzhinweise („Hinweise“) erklären, wie das geht\n            ",
        "2": "1. Informationen, die wir sammeln",
        "3": "Wir können die folgenden Kategorien personenbezogener Daten erfassen\n            ",
        "4": "2. Nutzung der Informationen",
        "5": "Wir verwenden die erhobenen personenbezogenen Daten für folgende Zwecke\n            ",
        "6": "3. Weitergabe von Informationen",
        "7": "Wir können Ihre persönlichen Daten gemäß den Bestimmungen an Dritte weitergeben\n            ",
        "8": "4. Datensicherheit",
        "9": "Wir ergreifen angemessene Maßnahmen zum Schutz Ihrer personenbezogenen Daten\n            ",
        "10": "5. Ihre Rechte und Wahlmöglichkeiten",
        "11": "Sie haben bestimmte Rechte und Wahlmöglichkeiten bezüglich Ihrer persönlichen Daten\n            ",
        "12": "6. Privatsphäre von Kindern",
        "13": "Der Dienst ist nicht für Personen unter 18 Jahren bestimmt. Wir\n            ",
        "14": "7. Änderungen dieser Mitteilung",
        "15": "Wir können diese Erklärung von Zeit zu Zeit aktualisieren, um Änderungen zu berücksichtigen\n            ",
        "16": "8. Kontaktieren Sie uns",
        "17": "Wenn Sie diesbezüglich Fragen, Bedenken oder Wünsche haben\n            ",
        "18": "Durch die Nutzung des Dienstes bestätigen Sie, dass Sie Folgendes gelesen haben:\n            ",
      },
    },
    licenses: {
      label: "Lizenzen",
      text: {
        "1": "In diesem Abschnitt werden die Lizenzen und Zuschreibungen für die aufgeführt\n            ",
        "2": "@prisma/client: Ein Datenbank-Toolkit für TypeScript und Node.js.",
        "3": "@tanstack/react-query: Eine React-Bibliothek zum Verwalten von Remote- und\n              ",
        "4": "@total-typescript/ts-reset: Eine Hilfsbibliothek zum Zurücksetzen\n              ",
        "5": "@trpc/client: Eine TypeScript-RPC-Bibliothek (Remote Procedure Call) für\n              ",
        "6": "@trpc/next: Serverseitiges Rendering und API-Handling für trpc.",
        "7": "@trpc/react-query: React Query-Integration für trpc.",
        "8": "@trpc/server: Server-Middleware für trpc.",
        "9": "bcrypt: Eine Bibliothek zum Hashing von Passwörtern.",
        "10": "check-password-strength: Eine Bibliothek zur Überprüfung der Passwortstärke.",
        "11": "daisyui: Eine Tailwind-CSS-Komponentenbibliothek.",
        "12": "email-validator: Eine Bibliothek zur Validierung von E-Mail-Adressen.",
        "13": "eslint: Ein steckbarer und konfigurierbarer Linter für JavaScript und\n              ",
        "14": "eslint-config-next: ESLint-Konfiguration für Next.js-Projekte.",
        "15": "javascript-time-ago: Eine Bibliothek zum Formatieren von time ago in\n              ",
        "16": "Weiter: Ein React-Framework für servergerendertes und statisches\n              ",
        "17": "next-auth: Eine Authentifizierungsbibliothek für Next.js-Anwendungen.",
        "18": "next-superjson-plugin: Ein Plugin zum Serialisieren der Next.js-Seite\n              ",
        "19": "normalize-email: Eine Bibliothek zum Normalisieren von E-Mail-Adressen.",
        "20": "reagieren: Eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.",
        "21": "React-Dom: Ein Paket für die Arbeit mit dem DOM in React\n              ",
        "22": "React-Dropzone: Eine einfache React-Komponente für Datei-Uploads.",
        "23": "React-Icons: Eine Bibliothek mit Symbolen für React-Anwendungen.",
        "24": "Typoskript: Eine typisierte Obermenge von JavaScript.",
        "25": "zod: Eine TypeScript-First-Schemavalidierungsbibliothek.",
        "26": "Autoprefixer: Ein Tool zum Parsen von CSS und zum Hinzufügen von Herstellerpräfixen.",
        "27": "Prisma: Ein Datenbank-Toolkit und ORM (Object-Relational Mapping) für\n              ",
        "28": "tailwindcss: Ein hochgradig anpassbares CSS-Framework.",
      },
    },
  },
};

export default de;
