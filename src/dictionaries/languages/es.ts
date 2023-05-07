import type { Schema } from "../schema";

const es: Schema = {
  index: {
    greeting: "Un futuro mejor",
    subtitle: "En un mundo cada vez más globalizado donde los trabajos remotos tienen una mayor presencia, se echan en falta los ambientes de organización colectiva, donde el proletariado podía expresar de manera libre sus ideas y auto-gestionarse frente a la patronal.",
    startButton: "Empieza ya",
    userCounterTitle: "Nuestros usuarios",
    userCounteSubtitle: "Nuestros usuarios alrededor del mundo están haciendo cosas increibles, aquí puedes ver un ejemplo"
  },
  search: {
    toggles: {
      filterUnverified: "Oculta organizaciones sin verificar",
    },
    sort: {
      modes: {
        activity: {
          asc: "Ordena por mas actividad",
          desc: "Ordena por menos actividad",
        },
        userCount: {
          asc: "Ordena por mayor numero de usuarios",
          desc: "Ordena por menor numero de usuarios",
        },
        newest: {
          asc: "Ordena por mas nuevo",
          desc: "Ordena por menos nuevo",
        },
      },
    },
  },
  access: {
    login: {
      title: "Inicia sesión",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    register: {
      title: "Registrate",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      label: "Contraseña",
      placeholder: "verysecurepassword",
      forgot: "Has olvidado tu contraseña?",
    },
    cookies: {
      label: "Acepto los terminos y condiciones",
    },
    buttons: {
      login: "Iniciar sesión",
      register: "Registrar",
    },
  },
  navbar: {
    searchPlaceholder: "Nombre de la organización",
    userButton: "Mi perfil",
    settingsButton: "Opciones",
    registerButton: "Registrate",
    loginButton: "Inicia sesión",
    logoutButton: "Cerrar sesión",
  },
  footer: {},
};

export default es;
