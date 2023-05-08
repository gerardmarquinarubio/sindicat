export type Schema = {
  index: {
    greeting: string;
    subtitle: string;
    startButton: string;
    userCounterTitle: string;
    userCounteSubtitle: string;
  };
  search: {
    toggles: {
      filterUnverified: string;
    };
    sort: {
      modes: {
        activity: {
          asc: string;
          desc: string;
        };
        userCount: {
          asc: string;
          desc: string;
        };
        newest: {
          asc: string;
          desc: string;
        };
      };
    };
  };
  access: {
    login: {
      title: string;
      subtitle: string;
    };
    register: {
      title: string;
      subtitle: string;
    };
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    password: {
      label: string;
      placeholder: string;
      forgot: string;
    };
    cookies: {
      label: string;
    };
    buttons: {
      login: string;
      register: string;
    };
  };
  create: {
    title: string;
    subtitle: string;
    name: {
      label: string;
      placeholder: string;
    };
    description: {
      label: string;
      placeholder: string;
    };
    visibility: {
      label: string;
    };
    submit: string;
  }
  navbar: {
    myOrg: string;
    createOrg: string;
    searchPlaceholder: string;
    userButton: string;
    settingsButton: string;
    registerButton: string;
    loginButton: string;
    logoutButton: string;
  };
  footer: {};
};
