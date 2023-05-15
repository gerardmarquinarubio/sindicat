import type { Schema } from "../schema";

const en: Schema = {
  index: {
    greeting: "A better future",
    subtitle:
      "In an increasingly globalized world where remote jobs have a greater presence, environments of collective organization are missing, where the proletariat could freely express his ideas and manage himself against their boss.",
    startButton: "Start now",
    userCounterTitle: "Our users",
    userCounteSubtitle:
      "Our users around the world are doing amazing things, here you can see an example",
  },
  err: {
    empty: "cannot be empty",
  },
  org: {
    filter: {
      all: "Show all posts",
    },
    posts: "posts",
    unverified: "unverified",
    verified: "verified",
    users: "users",
  },
  res: {
    title: "Title",
    subtitle: "Lorem ipsum dolor sit amet",
    quotes: {
      "1": {
        label:
          "The worker who becomes a cog in the machine is robbed of his humanity",
        author: "- Mikhail Bakunin",
      },
      "2": {
        label:
          "The most powerful weapon in the hands of the oppressor is the mind of the oppressed",
        author: "- Steve Biko",
      },
      "3": {
        label:
          "We must carry the fire of the revolution in our hearts and continue the struggle for a better world",
        author: "- Emma Goldman",
      },
      "4": {
        label:
          "Solidarity is not a matter of sentiment but a fact, cold and impassive as the granite foundations of a skyscraper",
        author: "- Rosa Luxemburg",
      },
    },
    hero1: {
      title: "Title!",
      subtitle: "Lorem ipsum",
    },
    hero2: {
      title: "Title!",
      subtitle: "Lorem ipsum",
    },
  },
  components: {
    browseButton: {
      label: "Browse communities",
    },
    loginButton: {
      label: "Register now",
    },
    post: {
      by: "by",
      comments: "comments",
      comment: "Comment",
    },
    postModal: {
      openButtonDefault: "Create post",
      postType: `Post type`,
      title: {
        label: `Title`,
        placeholder: `The news are here!`,
      },
      text: {
        label: `Body`,
        placeholder: `The brown fox jumped over the lazy dog?`,
      },
      link: {
        label: `Link`,
        placeholder: `https://no.magic`,
      },
      image: {
        label: `Image`,
      },
      submit: {
        label: `Submit`,
      },
    },
  },
  search: {
    lost: {
      title: "Nothing found",
      subtitle: "Try searching again with new terms",
    },
    toggles: {
      filterUnverified: "Hide unverified organizations",
    },
    sort: {
      modes: {
        activity: {
          asc: "Sort by more activity",
          desc: "Sort by less activity",
        },
        userCount: {
          asc: "Sort by crowdedness",
          desc: "Sort by emptyness",
        },
        newest: {
          asc: "Sort by newest",
          desc: "Sort by oldest",
        },
      },
    },
  },
  access: {
    login: {
      title: "Sign in",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    register: {
      title: "Sign up",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    },
    name: {
      label: "Name",
      placeholder: "John doe",
    },
    email: {
      label: "Email",
      placeholder: "johndoe@gmail.com",
    },
    password: {
      label: "Password",
      placeholder: "verysecurepassword",
      forgot: "Forgot your password?",
    },
    cookies: {
      label: "I accept the terms of service",
    },
    buttons: {
      login: "Sign in",
      register: "Sign up",
    },
  },
  create: {
    title: "Start organizing now",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet nisi vel turpis rhoncus, sit amet dignissim neque scelerisque. Nam lobortis lobortis purus in blandit",
    name: {
      label: "Name",
      placeholder: "Cool Corp",
    },
    description: {
      label: "Description",
      placeholder: "Lorem ipsum dolor sit amet",
    },
    visibility: {
      label: "Visibility",
    },
    submit: "Create",
  },
  navbar: {
    createOrg: "Create organization",
    myOrg: "My organizations",
    searchPlaceholder: "Name of the organization",
    userButton: "My profile",
    settingsButton: "Settings",
    registerButton: "Sign up",
    loginButton: "Sign in",
    logoutButton: "Sign off",
  },
  footer: {
    legal: {
      label: "Legal",
      tos: "Terms of Service & Conditions",
      privacy: "Privacy and GDPR",
      licenses: "Licenses",
    },
    faq: {
      label: "FAQ",
      who: "Who are we?",
      data: "Do you collect my data?",
      how: "How was this made?",
      res: "Where can I find more resources?",
    },
    res: {
      label: "Resources",
      rights: "Your rights as a worker",
      quotes: "Quotes and inspiration",
    },
  },
  faq: {
    what: {
      label: "What is this sindi.cat?",
      text: {
        1: `In an increasingly globalized world where remote jobs have a greater
            presence, the lack of collective organization environments, where
            the proletariat could freely express their ideas and self-manage
            against employers, is felt. sindi.cat is a digital platform designed
            to allow workers from around the world to organize and collaborate
            remotely, securely, and anonymously.`,
        2: `This platform will offer a variety of tools and resources to help
            workers come together and form unions, establish common goals, plan
            and coordinate collective actions, and promote their labor interests
            and rights.`,
        3: `In addition to providing a secure platform for union organization,
            the project will also strive to provide information and resources to
            help workers understand their labor rights and how to enforce them.`,
        4: `This platform will also be an online community where workers can
            discuss and share information about their working conditions, as
            well as receive advice and support from other members. Remote
            workers are the key audience of sindi.cat, as they may have more
            difficulties in connecting and collaborating with their peers on
            labor rights issues. A specially designed solution will be offered
            for workers who do not have a physical place to meet and organize in
            a traditional manner. However, it is important to note that the
            platform is not limited exclusively to remote workers. It will be
            designed to help all workers seeking ways to protect and promote
            their rights, regardless of their sector, level of experience, or
            geographical location.`,
      },
    },
    data: {
      label: `Do you collect my data?`,
      text: `Yes, as described in the Privacy and Data Protection Notice, the
            website "sindi.cat" collects and processes personal data in order to
            provide its services. When you use the website, certain information
            such as your account details, communications, and interactions may
            be collected and stored. It is important to review the detailed
            Privacy and Data Protection Notice for a comprehensive understanding
            of how your data is collected, used, and protected by the website.`,
    },
    how: {
      label: `How was this website made?`,
      text: {
        1: `The website "sindi.cat" was built using a combination of
            technologies and frameworks. Here is a brief technical description
            of how the website was made:`,
        2: `Front-end: The front-end of the website was developed using React,
            a popular JavaScript library for building user interfaces.
            Next.js, a framework built on top of React, was used to enhance
            the development experience and provide server-side rendering and
            Tailwind CSS, a highly customizable CSS framework, was utilized
            for styling and creating a responsive design.`,
        3: `Back-end: The back-end of the website was implemented using
            Node.js, a runtime environment for executing JavaScript code on
            the server. Prisma, an ORM (Object-Relational Mapping) tool, was
            utilized for database management and interacting with the
            database. The trpc (TypeScript RPC) library was used to build
            efficient and type-safe APIs for the server-client communication.
            Authentication functionality was implemented using NextAuth, an
            authentication library specifically designed for Next.js
            applications.`,
        4: `Database: The website uses a database for storing and retrieving
            data. It utilizes Prisma's database toolkit to interact with the
            database. The specific database management system (e.g.,
            PostgreSQL, MySQL, SQLite) is not mentioned in the information
            provided. Overall, the website combines front-end technologies
            like React, Next.js, and Tailwind CSS with back-end technologies
            like Node.js, Prisma, and trpc to create a platform that allows
            workers to organize, collaborate, and promote their labor rights
            in a remote, secure, and anonymous manner.`,
      },
    },
    res: {
      label: `Where can I find more resources?`,
      text: {
        1: `There are several online resources available for workers and unions
            to access valuable information and support. Here are some
            suggestions on where you can find more resources:`,
        2: `1. International Labour Organization (ILO): The ILO is a United
            Nations agency dedicated to promoting labor rights, decent work,
            and social justice. Their website offers a wide range of
            resources, including publications, research, and tools for workers
            and unions. Visit their website at www.ilo.org.`,
        3: `2. Trade Union Confederations: Trade union confederations at
            national and international levels often provide resources and
            support for workers and unions. Examples include the American
            Federation of Labor and Congress of Industrial Organizations
            (AFL-CIO) in the United States, Trades Union Congress (TUC) in the
            United Kingdom, and International Trade Union Confederation (ITUC)
            globally. Explore the websites of relevant trade union
            confederations in your country or region.`,
        4: `3. Labor Rights Organizations: Various labor rights organizations
            focus on advocating for workers' rights and providing resources.
            Examples include Human Rights Watch, Labor Rights Forum, and
            Worker Rights Consortium. These organizations often publish
            reports, studies, and guides related to workers' rights and
            issues. Search for labor rights organizations specific to your
            country or region.`,
        5: `4. Government Websites: Government labor departments or ministries
            often have resources and information on labor rights, employment
            laws, and worker protections. Check the official website of your
            country's labor department or ministry for relevant resources.`,
        6: `5. Online Communities and Forums: Online communities and forums
            dedicated to workers' rights and unions can provide a platform for
            sharing information, experiences, and resources. Websites like
            Reddit and dedicated labor rights forums can be valuable sources
            of information and support. Participate in relevant communities to
            connect with other workers and gain insights. Remember to evaluate
            the credibility and reliability of the sources you access. It's
            always a good idea to cross-reference information and consult with
            legal experts or trade union representatives for specific advice
            related to your circumstances.`,
      },
    },
  },
  legal: {
    terms: {
      label: `Terms of service & Conditions`,
      text: {
        1: `Please read these Terms of Service and Conditions ("Terms")
            carefully before using our Alpha Version social media platform for
            workers and unions (referred to as the "Service"). These Terms
            constitute a legally binding agreement between you and Sindi.cat
            (referred to as "we," "us," or "our") governing your use of the
            Service. By accessing or using the Service, you agree to be bound by
            these Terms. If you do not agree to these Terms, you may not use the
            Service.`,
        2: `1. Alpha Version Disclaimer`,
        3: `The Service is currently in its alpha stage, which means it is a
            testing phase and is provided on an "as is" and "as available"
            basis. The purpose of this alpha version is to gather user feedback
            and identify potential issues or improvements. You understand and
            acknowledge that the Service may have bugs, errors, and other
            issues, and may not function properly. Therefore, you agree not to
            rely on the Service for any serious or critical purposes.`,
        4: `2. Eligibility`,
        5: `You must be at least 18 years old or the legal age of majority in
            your jurisdiction to use the Service. By using the Service, you
            represent and warrant that you meet the eligibility requirements and
            have the legal capacity to enter into these Terms.`,
        6: `3. User Accounts`,
        7: `To access certain features of the Service, you may need to create a
            user account. You agree to provide accurate, current, and complete
            information during the registration process and to keep your account
            information up to date. You are solely responsible for maintaining
            the confidentiality of your account credentials and for any
            activities or actions that occur under your account. You agree not
            to share your account credentials with any third party. We reserve
            the right to suspend or terminate your account at any time for any
            reason without prior notice.`,
        8: `4. User Conduct While using the Service`,
        9: `You agree to comply with the following guidelines: - 4.1. You will
            not use the Service for any illegal, harmful, or unauthorized
            purposes. - 4.2. You will not engage in any form of harassment,
            abuse, or threatening behavior towards others. - 4.3. You will not
            upload, post, transmit, or otherwise make available any content that
            is unlawful, defamatory, obscene, or infringing upon the rights of
            others. - 4.4. You will not attempt to gain unauthorized access to
            the Service or any user accounts. - 4.5. You will not interfere with
            or disrupt the Service or the servers or networks connected to the
            Service. - 4.6. You will not use the Service to solicit personal
            information from other users.`,
        10: `5. Intellectual Property Rights`,
        11: `All intellectual property rights in the Service, including but not
            limited to text, graphics, user interfaces, visual interfaces,
            photographs, trademarks, logos, sounds, music, artwork, computer
            code, and any other materials provided by us, are owned by or
            licensed to us. You agree not to reproduce, modify, distribute, or
            create derivative works based on any content from the Service
            without our prior written consent.`,
        12: `6. Limitation of Liability`,
        13: `To the extent permitted by applicable law, we shall not be liable
            for any direct, indirect, incidental, special, consequential, or
            exemplary damages, including but not limited to damages for loss of
            profits, goodwill, use, data, or other intangible losses resulting
            from your use of the Service or inability to access or use the
            Service.`,
        14: `7. Modifications to the Service`,
        15: `We reserve the right to modify or discontinue the Service,
            temporarily or permanently, with or without notice. We shall not be
            liable to you or any third party for any modifications, suspension,
            or discontinuation of the Service.`,
        16: `8. Indemnification`,
        17: `You agree to indemnify and hold us harmless from and against any
            claims, liabilities, damages, losses, and expenses (including
            reasonable attorney's fees) arising out of or related to your use of
            the Service, your violation of these Terms, or your violation of any
            rights of another.`,
        18: `9. Third-Party Links and Services`,
        19: `The Service may contain links to third-party websites or services
            that are not owned or controlled by us. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services. You acknowledge
            and agree that we shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with the use of or reliance on any such content,
            goods, or services available on or through any third-party websites
            or services.`,
        20: `10. Termination`,
        21: `We may, in our sole discretion, suspend or terminate your access to
            the Service for any reason, including but not limited to your breach
            of these Terms. Upon termination, your right to access and use the
            Service will immediately cease, and you must promptly delete any
            downloaded or printed materials obtained from the Service.`,
        22: `11. Governing Law and Jurisdiction`,
        23: `These Terms shall be governed by and construed in accordance with
            the laws of Germany. Any disputes arising out of or relating to
            these Terms or the use of the Service shall be exclusively resolved
            in the state or federal courts located within Germany.`,
        24: `12. Severability`,
        25: `If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary so that these Terms shall otherwise remain
            in full force and effect and enforceable.`,
        26: `13. Entire Agreement`,
        27: `These Terms constitute the entire agreement between you and us
            regarding the Service and supersede all prior and contemporaneous
            agreements, proposals, or representations, whether written or oral,
            regarding the subject matter herein.`,
        28: `14. Changes to the Terms`,
        29: `We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will notify you of any material changes
            by posting the updated Terms on the Service or through other
            communication channels. By continuing to access or use the Service
            after such modifications, you agree to be bound by the revised
            Terms.`,
        30: `15. Contact Us`,
        31: `If you have any questions or concerns regarding these Terms or the
            Service, please contact us at admin@sindi.cat.`,
        32: `By using the Service, you acknowledge that you have read,
            understood, and agreed to these Terms of Service and Conditions.`,
      },
    },
    privacy: {
      label: `Data Privacy & GDPR`,
      text: {
        1: `This Privacy and Data Protection Notice ("Notice") explains how
            sindi.cat ("we," "us," or "our") collects, uses, and protects your
            personal information when you access and use our social media
            platform for workers and unions (referred to as the "Service").`,
        2: `1. Information We Collect`,
        3: `We may collect the following categories of personal information from
            you when you use the Service: Information you provide: When you
            create an account, communicate with us, or use certain features of
            the Service, you may voluntarily provide us with personal
            information, such as your name, email address, and other contact
            details. Automatically collected information: We may collect certain
            information automatically when you access or use the Service,
            including your IP address, device information, log data, and usage
            information. Cookies and similar technologies: We may use cookies
            and similar tracking technologies to collect information about your
            interactions with the Service. You can control the use of cookies
            through your browser settings.`,
        4: `2. Use of Information`,
        5: `We use the collected personal information for the following
            purposes: Providing and maintaining the Service Improving and
            customizing the Service Responding to your inquiries and providing
            support Sending you administrative messages, updates, and
            notifications Protecting our legal rights and preventing fraud or
            misuse of the Service`,
        6: `3. Sharing of Information`,
        7: `We may share your personal information with third parties under the
            following circumstances: With your consent: We may share your
            information when you give us your explicit consent to do so. Service
            providers: We may engage third-party service providers to assist us
            in providing and improving the Service. These service providers will
            have access to your personal information only to perform tasks on
            our behalf and are obligated not to disclose or use it for any other
            purpose. Compliance with laws: We may disclose your information to
            comply with applicable laws, regulations, legal processes, or
            governmental requests. Business transfers: If we are involved in a
            merger, acquisition, or sale of all or a portion of our assets, your
            personal information may be transferred as part of that transaction.`,
        8: `4. Data Security`,
        9: `We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute
            security of your information.`,
        10: `5. Your Rights and Choices`,
        11: `You have certain rights and choices regarding your personal
            information. These include: Access and Correction: You have the
            right to access and update your personal information. You can do
            this by logging into your account or contacting us directly.
            Opt-Out: You can choose to opt out of receiving promotional
            communications from us by following the instructions provided in the
            communication or by contacting us. Data Retention: We retain your
            personal information for as long as necessary to fulfill the
            purposes outlined in this Notice, unless a longer retention period
            is required or permitted by law. Deletion: You can request the
            deletion of your personal information by contacting us. Please note
            that we may retain certain information as required by law or for
            legitimate business purposes. Do Not Track: The Service does not
            respond to "Do Not Track" signals. However, you can adjust your
            browser settings to refuse cookies or alert you when cookies are
            being sent.`,
        12: `6. Children's Privacy`,
        13: `The Service is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            become aware that we have inadvertently collected personal
            information from a child, we will take steps to delete such
            information as soon as possible.`,
        14: `7. Changes to this Notice`,
        15: `We may update this Notice from time to time to reflect changes in
            our practices or legal requirements. We will notify you of any
            material updates by posting the revised Notice on the Service or
            through other communication channels. We encourage you to review
            this Notice periodically for the latest information on our privacy
            practices.`,
        16: `8. Contact Us`,
        17: `If you have any questions, concerns, or requests regarding this
            Notice or our privacy practices, please contact us at
            admin@sindi.cat.`,
        18: `By using the Service, you acknowledge that you have read,
            understood, and agreed to the terms and conditions of this Privacy
            and Data Protection Notice.`,
      },
    },
    licenses: {
      label: `Licenses & attributions`,
      text: {
        1: `This section outlines the licenses and attributions for the
            third-party packages and dependencies used in sindi.cat. All the
            corresponding libraries and packages may use a different license
            than the one described in the project, please go to each's project
            website to document yourself on the different licenses used.`,
        2: `@prisma/client: A database toolkit for TypeScript and Node.js.`,
        3: `@tanstack/react-query: A React library for managing remote and
              asynchronous data.`,
        4: `@total-typescript/ts-reset: A utility library for resetting
              TypeScript settings.`,
        5: `@trpc/client: A TypeScript RPC (Remote Procedure Call) library for
              building efficient and type-safe APIs.`,
        6: `@trpc/next: Server-side rendering and API handling for trpc.`,
        7: `@trpc/react-query: React Query integration for trpc.`,
        8: `@trpc/server: Server middleware for trpc.`,
        9: `bcrypt: A library for hashing passwords.`,
        10: `check-password-strength: A library for checking password strength.`,
        11: `daisyui: A Tailwind CSS component library.`,
        12: `email-validator: A library for validating email addresses.`,
        13: `eslint: A pluggable and configurable linter for JavaScript and
              TypeScript.`,
        14: `eslint-config-next: ESLint configuration for Next.js projects.`,
        15: `javascript-time-ago: A library for formatting time ago in
              JavaScript.`,
        16: `next: A React framework for server-rendered and statically
              exported applications.`,
        17: `next-auth: An authentication library for Next.js applications.`,
        18: `next-superjson-plugin: A plugin for serializing Next.js page
              props.`,
        19: `normalize-email: A library for normalizing email addresses.`,
        20: `react: A JavaScript library for building user interfaces.`,
        21: `react-dom: A package for working with the DOM in React
              applications.`,
        22: `react-dropzone: A simple React component for file uploads.`,
        23: `react-icons: A library of icons for React applications.`,
        24: `typescript: A typed superset of JavaScript.`,
        25: `zod: A TypeScript-first schema validation library.`,
        26: `autoprefixer: A tool for parsing CSS and adding vendor prefixes.`,
        27: `prisma: A database toolkit and ORM (Object-Relational Mapping) for
              TypeScript and Node.js.`,
        28: `tailwindcss: A highly customizable CSS framework.`,
      },
    },
  },
};

export default en;
