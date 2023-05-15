import type { Schema } from "../schema";

const es: Schema = {
  index: {
    greeting: "Un futuro mejor",
    subtitle:
      "En un mundo cada vez más globalizado donde los trabajos remotos tienen una presencia mayor, hacen falta entornos de organización colectiva, donde el proletariado pueda expresar libremente sus ideas y gestionarse a sí mismo frente a sus jefes.",
    startButton: "Comenzar ahora",
    userCounterTitle: "Nuestros usuarios",
    userCounteSubtitle:
      "Nuestros usuarios alrededor del mundo están haciendo cosas increíbles, aquí puedes ver un ejemplo",
  },
  err: {
    empty: "no puede estar vacío",
  },
  org: {
    filter: {
      all: "Mostrar todas las publicaciones",
    },
    posts: "publicaciones",
    unverified: "no verificadas",
    verified: "verificadas",
    users: "usuarios",
  },
  res: {
    title: "El momento está cerca",
    subtitle:
      "Imagina un mundo donde se escuche la voz colectiva de los trabajadores, donde prevalezca la equidad y la justicia, y donde cada individuo tenga el poder de moldear su propio destino...",
    quotes: {
      "1": {
        label:
          "El trabajador que se convierte en un engranaje de la máquina es despojado de su humanidad",
        author: "- Mikhail Bakunin",
      },
      "2": {
        label:
          "El arma más poderosa en manos del opresor es la mente del oprimido",
        author: "- Steve Biko",
      },
      "3": {
        label:
          "Debemos llevar el fuego de la revolución en nuestros corazones y continuar la lucha por un mundo mejor",
        author: "- Emma Goldman",
      },
      "4": {
        label:
          "La solidaridad no es una cuestión de sentimiento, sino un hecho frío e impasible como los cimientos de granito de un rascacielos",
        author: "- Rosa Luxemburg",
      },
    },
    hero1: {
      title: "¿Sabías qué?",
      subtitle:
        "Los sindicatos de trabajadores desempeñaron un papel fundamental en poner fin al trabajo infantil generalizado que persistió hasta el último siglo. Lucharon por reformas laborales, límites mínimos de edad y mejores condiciones de trabajo para los niños. Gracias a sus esfuerzos, el trabajo infantil ha disminuido significativamente, destacando el poder de la acción colectiva. Los sindicatos de trabajadores continúan abogando por los derechos y el bienestar de todos los niños.",
    },
    hero2: {
      title: "¿Sabías qué?",
      subtitle:
        "Los sindicatos de trabajadores han sido defensores de los derechos de las mujeres, lo que ha llevado a avances significativos en el último siglo. Los sindicatos lucharon por igualdad salarial, licencia de maternidad y protección contra la discriminación en el lugar de trabajo. Gracias a sus esfuerzos, las mujeres han obtenido un mayor acceso a oportunidades y han logrado avances significativos en el mundo laboral. Los sindicatos de trabajadores continúan luchando por la igualdad de género y el empoderamiento de las mujeres en todas las esferas de la vida.",
    },
  },
  components: {
    browseButton: {
      label: "Explorar comunidades",
    },
    loginButton: {
      label: "Registrarse ahora",
    },
    post: {
      by: "por",
      comments: "comentarios",
      comment: "Comentario",
    },
    postModal: {
      openButtonDefault: "Crear publicación",
      postType: "Tipo de publicación",
      title: {
        label: "Título",
        placeholder: "¡Las noticias están aquí!",
      },
      text: {
        label: "Cuerpo",
        placeholder: "¿El zorro marrón saltó sobre el perro perezoso?",
      },
      link: {
        label: "Enlace",
        placeholder: "https://no.magic",
      },
      image: {
        label: "Imagen",
      },
      submit: {
        label: "Enviar",
      },
    },
  },
  search: {
    lost: {
      title: "Nada encontrado",
      subtitle: "Intenta buscar nuevamente con nuevos términos",
    },
    toggles: {
      filterUnverified: "Ocultar organizaciones no verificadas",
    },
    sort: {
      modes: {
        activity: {
          asc: "Ordenar por mayor actividad",
          desc: "Ordenar por menor actividad",
        },
        userCount: {
          asc: "Ordenar por mayor cantidad de usuarios",
          desc: "Ordenar por menor cantidad de usuarios",
        },
        newest: {
          asc: "Ordenar por más recientes",
          desc: "Ordenar por más antiguos",
        },
      },
    },
  },
  access: {
    login: {
      title: "Iniciar sesión",
      subtitle: "Volvemos a encontrarnos, tu y yo podemos cambiar el mundo",
    },
    register: {
      title: "Registrarse",
      subtitle: "Pastilla azul o pastilla roja?, escoje sábiamente, Neo",
    },
    name: {
      label: "Nombre",
      placeholder: "Juan Pérez",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "juanperez@gmail.com",
    },
    password: {
      label: "Contraseña",
      placeholder: "contraseñasegura",
      forgot: "¿Olvidaste tu contraseña?",
    },
    cookies: {
      label: "Acepto los términos del servicio",
    },
    buttons: {
      login: "Iniciar sesión",
      register: "Registrarse",
    },
  },
  create: {
    title: "Comienza a organizar ahora",
    subtitle: "Lorem ipsum dolor sit amestas leyendo esto?",
    name: {
      label: "Nombre",
      placeholder: "Mi Empresa Genial",
    },
    description: {
      label: "Descripción",
      placeholder: "Mi descripción importante",
    },
    visibility: {
      label: "Visibilidad",
    },
    submit: "Crear",
  },
  navbar: {
    createOrg: "Crear organización",
    myOrg: "Mis organizaciones",
    searchPlaceholder: "Nombre de la organización",
    userButton: "Mi perfil",
    settingsButton: "Configuración",
    registerButton: "Registrarse",
    loginButton: "Iniciar sesión",
    logoutButton: "Cerrar sesión",
  },
  footer: {
    legal: {
      label: "Legal",
      tos: "Términos de servicio y condiciones",
      privacy: "Privacidad y GDPR",
      licenses: "Licencias",
    },
    faq: {
      label: "Preguntas frecuentes",
      who: "¿Quiénes somos?",
      data: "¿Recopilan mis datos?",
      how: "¿Cómo se hizo esto?",
      res: "¿Dónde puedo encontrar más recursos?",
    },
    res: {
      label: "Recursos",
      rights: "Tus derechos como trabajador",
      quotes: "Citas e inspiración",
    },
  },
  faq: {
    what: {
      label: "¿Qué es sindi.cat?",
      text: {
        1: `En un mundo cada vez más globalizado donde los trabajos remotos tienen una mayor presencia, se siente la falta de entornos de organización colectiva donde el proletariado pueda expresar libremente sus ideas y autogestionarse frente a sus empleadores. sindi.cat es una plataforma digital diseñada para permitir a los trabajadores de todo el mundo organizarse y colaborar de forma remota, segura y anónima.`,
        2: `Esta plataforma ofrecerá una variedad de herramientas y recursos para ayudar a los trabajadores a unirse y formar sindicatos, establecer metas comunes, planificar y coordinar acciones colectivas, y promover sus intereses y derechos laborales.`,
        3: `Además de proporcionar una plataforma segura para la organización sindical, el proyecto también se esforzará por brindar información y recursos para ayudar a los trabajadores a comprender sus derechos laborales y cómo hacer valer esos derechos.`,
        4: `Esta plataforma también será una comunidad en línea donde los trabajadores pueden discutir y compartir información sobre sus condiciones laborales, así como recibir consejos y apoyo de otros miembros. Los trabajadores remotos son el público clave de sindi.cat, ya que pueden tener más dificultades para conectarse y colaborar con sus pares en temas de derechos laborales. Se ofrecerá una solución especialmente diseñada para los trabajadores que no tienen un lugar físico para reunirse y organizarse de manera tradicional. Sin embargo, es importante tener en cuenta que la plataforma no se limita exclusivamente a los trabajadores remotos. Estará diseñada para ayudar a todos los trabajadores que buscan formas de proteger y promover sus derechos, independientemente de su sector, nivel de experiencia o ubicación geográfica.`,
      },
    },
    data: {
      label: `¿Recopilan mis datos?`,
      text: `Sí, como se describe en el Aviso de Privacidad y Protección de Datos, el sitio web "sindi.cat" recopila y procesa datos personales con el fin de proporcionar sus servicios. Cuando utilizas el sitio web, se pueden recopilar y almacenar cierta información, como los detalles de tu cuenta, las comunicaciones y las interacciones. Es importante revisar el Aviso de Privacidad y Protección de Datos detallado para comprender de manera integral cómo se recopilan, utilizan y protegen tus datos por parte del sitio web.`,
    },
    how: {
      label: `¿Cómo se creó este sitio web?`,
      text: {
        1: `El sitio web "sindi.cat" fue construido utilizando una combinación de tecnologías y frameworks. Aquí tienes una breve descripción técnica de cómo se hizo el sitio web:`,
        2: `Front-end: El front-end del sitio web se desarrolló utilizando React, una popular biblioteca de JavaScript para construir interfaces de usuario. Next.js, un framework construido sobre React, se utilizó para mejorar la experiencia de desarrollo y proporcionar renderizado del lado del servidor. Tailwind CSS, un framework de CSS altamente personalizable, se utilizó para el estilo y el diseño receptivo.`,
        3: `Back-end: El back-end del sitio web se implementó utilizando Node.js, un entorno de ejecución para ejecutar código JavaScript en el servidor. Prisma, una herramienta ORM (Object-Relational Mapping), se utilizó para la gestión de la base de datos y la interacción con la misma. La biblioteca trpc (TypeScript RPC) se utilizó para construir APIs eficientes y seguras en la comunicación entre el servidor y el cliente. La funcionalidad de autenticación se implementó utilizando NextAuth, una biblioteca de autenticación diseñada específicamente para aplicaciones Next.js., 4: Base de datos: El sitio web utiliza una base de datos para almacenar y recuperar datos. Utiliza la herramienta de base de datos de Prisma para interactuar con la base de datos. No se menciona en la información proporcionada el sistema de gestión de base de datos específico (por ejemplo, PostgreSQL, MySQL, SQLite). En general, el sitio web combina tecnologías front-end como React, Next.js y Tailwind CSS con tecnologías back-end como Node.js, Prisma y trpc para crear una plataforma que permite a los trabajadores organizarse, colaborar y promover sus derechos laborales de manera remota, segura y anónima.`,
        4: `Base de datos: El sitio web utiliza una base de datos para almacenar y recuperar datos. Utiliza la herramienta de base de datos de Prisma para interactuar con la base de datos. No se menciona en la información proporcionada el sistema de gestión de base de datos específico (por ejemplo, PostgreSQL, MySQL, SQLite). En general, el sitio web combina tecnologías front-end como React, Next.js y Tailwind CSS con tecnologías back-end como Node.js, Prisma y trpc para crear una plataforma que permite a los trabajadores organizarse, colaborar y promover sus derechos laborales de manera remota, segura y anónima.`,
      },
    },
    res: {
      label: ` ¿Dónde puedo encontrar más recursos?`,
      text: {
        1: `Existen varios recursos en línea disponibles para que los trabajadores y los sindicatos accedan a información valiosa y apoyo. Aquí te ofrecemos algunas sugerencias sobre dónde puedes encontrar más recursos:,`,
        2: `1. Organización Internacional del Trabajo (OIT): La OIT es una agencia de las Naciones Unidas dedicada a promover los derechos laborales, el trabajo decente y la justicia social. Su sitio web ofrece una amplia gama de recursos, incluyendo publicaciones, investigaciones y herramientas para los trabajadores y los sindicatos. Visita su sitio web en www.ilo.org.`,
        3: `2. Confederaciones Sindicales: Las confederaciones sindicales a nivel nacional e internacional a menudo proporcionan recursos y apoyo para los trabajadores y los sindicatos. Ejemplos incluyen la Federación Estadounidense del Trabajo y Congreso de Organizaciones Industriales (AFL-CIO) en Estados Unidos, el Congreso de Sindicatos Británicos (TUC) en el Reino Unido y la Confederación Sindical Internacional (CSI) a nivel global. Explora los sitios web de las confederaciones sindicales relevantes en tu país o región.`,
        4: `3. Organizaciones de Derechos Laborales: Diversas organizaciones de derechos laborales se centran en la defensa de los derechos de los trabajadores y en proporcionar recursos. Ejemplos incluyen Human Rights Watch, Foro de Derechos Laborales y Consorcio de Derechos de los Trabajadores. Estas organizaciones a menudo publican informes, estudios y guías relacionadas con los derechos de los trabajadores y los problemas laborales. Busca organizaciones de derechos laborales específicas de tu país o región.`,
        5: `4. Sitios web gubernamentales: Los departamentos o ministerios de trabajo del gobierno a menudo tienen recursos e información sobre los derechos laborales, las leyes laborales y las protecciones para los trabajadores. Consulta el sitio web oficial del departamento o ministerio de trabajo de tu país para encontrar recursos relevantes.`,
        6: `5. Comunidades y foros en línea: Las comunidades y los foros en línea dedicados a los derechos de los trabajadores y los sindicatos pueden proporcionar una plataforma para compartir información, experiencias y recursos. Sitios web como Reddit y foros especializados en derechos laborales pueden ser fuentes valiosas de información y apoyo. Participa en comunidades relevantes para conectarte con otros trabajadores y obtener ideas. Recuerda evaluar la credibilidad y confiabilidad de las fuentes a las que accedas. Siempre es una buena idea contrastar la información y consultar con expertos legales o representantes sindicales para obtener consejos específicos relacionados con tus circunstancias.`,
      },
    },
  },
  legal: {
    terms: {
      label: "Términos de servicio y condiciones",
      text: {
        "1": 'Por favor, lea estos Términos de Servicio y Condiciones ("Términos")            ',
        "2": "1. Descargo de responsabilidad de la versión alfa",
        "3": "El Servicio se encuentra actualmente en su etapa alfa, lo que significa que es un",
        "4": "2. Elegibilidad",
        "5": "Debe tener al menos 18 años de edad o la mayoría de edad legal en",
        "6": "3.Cuentas de usuario",
        "7": "Para acceder a ciertas funciones del Servicio, es posible que deba crear un",
        "8": "4. Conducta del usuario durante el uso del Servicio",
        "9": "Usted acepta cumplir con las siguientes pautas: - 4.1. ",
        "10": "5. Derechos de propiedad intelectual",
        "11": "Todos los derechos de propiedad intelectual en el Servicio, incluidos, entre otros,",
        "12": "6. Limitación de responsabilidad",
        "13": "En la medida permitida por la ley aplicable, no seremos responsables",
        "14": "7. Modificaciones al Servicio",
        "15": "Nos reservamos el derecho de modificar o interrumpir el Servicio,",
        "16": "8. Indemnización",
        "17": "Usted acepta indemnizarnos y mantenernos indemnes de y contra cualquier",
        "18": "9. Enlaces y servicios de terceros",
        "19": "El Servicio puede contener enlaces a sitios web o servicios de terceros.",
        "20": "10. Terminación",
        "21": "Podemos, a nuestro exclusivo criterio, suspender o cancelar su acceso a",
        "22": "11. Ley aplicable y jurisdicción",
        "23": "Estos Términos se regirán e interpretarán de acuerdo con",
        "24": "12. Divisibilidad",
        "25": "Si se determina que alguna disposición de estos Términos es inaplicable o",
        "26": "13. Acuerdo completo",
        "27": "Estos Términos constituyen el acuerdo completo entre usted y nosotros.",
        "28": "14. Cambios a los Términos",
        "29": "Nos reservamos el derecho, a nuestro exclusivo criterio, de modificar o reemplazar",
        "30": "15. Contáctenos",
        "31": "Si tiene alguna pregunta o inquietud con respecto a estos Términos o al",
        "32": "Al usar el Servicio, usted reconoce que ha leído,",
      },
    },
    privacy: {
      label: "Privacidad de datos",
      text: {
        "1": 'Este Aviso de privacidad y protección de datos ("Aviso") explica cómo            ',
        "2": "1. Información que recopilamos",
        "3": "Podemos recopilar las siguientes categorías de información personal de",
        "4": "2. Uso de la Información",
        "5": "Utilizamos la información personal recopilada para lo siguiente",
        "6": "3. Intercambio de información",
        "7": "Podemos compartir su información personal con terceros bajo el",
        "8": "4. Seguridad de datos",
        "9": "Tomamos medidas razonables para proteger su información personal",
        "10": "5. Sus derechos y opciones",
        "11": "Tiene ciertos derechos y opciones con respecto a su información personal.",
        "12": "6. Privacidad de los niños",
        "13": "El Servicio no está destinado a personas menores de 18 años. Nosotros",
        "14": "7. Cambios a este Aviso",
        "15": "Podemos actualizar este Aviso de vez en cuando para reflejar cambios en",
        "16": "8. Contáctenos",
        "17": "Si tiene alguna pregunta, inquietud o solicitud con respecto a este",
        "18": "Al usar el Servicio, usted reconoce que ha leído,",
      },
    },
    licenses: {
      label: "Licencias",
      text: {
        "1": "Esta sección describe las licencias y atribuciones para el",
        "2": "@prisma/client: un conjunto de herramientas de base de datos para TypeScript y Node.js.",
        "3": "@tanstack/react-query: una biblioteca de React para administrar aplicaciones remotas y",
        "4": "@total-typescript/ts-reset: una biblioteca de utilidades para restablecer",
        "5": "@trpc/client: una biblioteca TypeScript RPC (llamada a procedimiento remoto) para",
        "6": "@trpc/next: procesamiento del lado del servidor y manejo de API para trpc.",
        "7": "@trpc/react-query: Integración de React Query para trpc.",
        "8": "@trpc/server: Middleware de servidor para trpc.",
        "9": "bcrypt: una biblioteca para cifrar contraseñas.",
        "10": "check-password-strength: una biblioteca para verificar la seguridad de la contraseña.",
        "11": "daisyui: una biblioteca de componentes Tailwind CSS.",
        "12": "email-validator: una biblioteca para validar direcciones de correo electrónico.",
        "13": "eslint: un linter conectable y configurable para JavaScript y",
        "14": "eslint-config-next: configuración de ESLint para proyectos Next.js.",
        "15": "javascript-time-ago: una biblioteca para formatear hace tiempo en",
        "16": "siguiente: Un marco React para renderizado en servidor y estático",
        "17": "next-auth: una biblioteca de autenticación para aplicaciones Next.js.",
        "18": "next-superjson-plugin: un complemento para serializar la página Next.js",
        "19": "normalize-email: una biblioteca para normalizar direcciones de correo electrónico.",
        "20": "reaccionar: una biblioteca de JavaScript para crear interfaces de usuario.",
        "21": "react-dom: un paquete para trabajar con el DOM en React",
        "22": "react-dropzone: un componente React simple para cargar archivos.",
        "23": "react-icons: una biblioteca de iconos para aplicaciones React.",
        "24": "mecanografiado: un superconjunto escrito de JavaScript.",
        "25": "zod: una biblioteca de validación de esquema de TypeScript primero.",
        "26": "autoprefixer: una herramienta para analizar CSS y agregar prefijos de proveedores.",
        "27": "prisma: un conjunto de herramientas de base de datos y ORM (mapeo relacional de objetos) para",
        "28": "tailwindcss: Un framework CSS altamente personalizable.",
      },
    },
  },
};

export default es;
