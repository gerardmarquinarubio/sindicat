import type { Schema } from '../schema';

const ca: Schema = {
  index: {
    greeting: "Un futur millor",
    subtitle:
      "En un món cada vegada més globalitzat on els treballs remots tenen una major presència, es troben a faltar els ambients d'organització col·lectiva, on el proletariat podia expressar de manera lliure les seves idees i autogestionar-se davant de la patronal.",
    startButton: "Comença ara",
    userCounterTitle: "Els nostres usuaris",
    userCounteSubtitle:
      "Els nostres usuaris arreu del món estan fent coses increïbles, aquí en pots veure un exemple",
  },
  search: {
    toggles: {
      filterUnverified: "Amaga organitzacions sense verificar",
    },
    sort: {
      modes: {
        activity: {
          asc: "Ordena por més activitat",
          desc: "Ordena por menys activitat",
        },
        userCount: {
          asc: "Ordena por major numero d'usuaris",
          desc: "Ordena por menor numero d'usuaris",
        },
        newest: {
          asc: "Ordena por més nou",
          desc: "Ordena por menys nou",
        },
      },
    },
  },
  access: {
    login: {
      title: "Inicia sessió",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    register: {
      title: "Registra't",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      label: "Contraesnya",
      placeholder: "verysecurepassword",
      forgot: "Has oblidat la teva contrasenya?",
    },
    cookies: {
      label: "Acepto els termenos i condicions",
    },
    buttons: {
      login: "Iniciar sessió",
      register: "Registrar",
    },
  },
  navbar: {
    searchPlaceholder: "Nom de l'organizació",
    userButton: "El meu perfil",
    settingsButton: "Opcions",
    registerButton: "Registra't",
    loginButton: "Inicia sessió",
    logoutButton: "Tanca sessió",
  },
  footer: {},
};

export default ca;