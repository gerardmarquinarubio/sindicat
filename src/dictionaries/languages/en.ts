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
  search: {
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
  navbar: {
    searchPlaceholder: "Name of the organization",
    userButton: "My profile",
    settingsButton: "Settings",
    registerButton: "Sign up",
    loginButton: "Sign in",
    logoutButton: "Sign off",
  },
  footer: {},
};

export default en;
