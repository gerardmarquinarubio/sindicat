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
    lost: {
      title: string;
      subtitle: string;
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
  };
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
  legal: {
    terms: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        21: string;
        22: string;
        23: string;
        24: string;
        25: string;
        26: string;
        27: string;
        28: string;
        29: string;
        30: string;
        31: string;
        32: string;
      };
    };
    privacy: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
      };
    };
    licenses: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        21: string;
        22: string;
        23: string;
        24: string;
        25: string;
        26: string;
        27: string;
        28: string;
      };
    };
  };
  footer: {
    legal: {
      label: string;
      tos: string;
      privacy: string;
      licenses: string;
    };
    faq: {
      label: string;
      who: string;
      data: string;
      how: string;
      res: string;
    };
    res: {
      label: string;
      rights: string;
      quotes: string;
    };
  };
  faq: {
    what: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
    };
    data: {
      label: string;
      text: string;
    };
    how: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
    };
    res: {
      label: string;
      text: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
      };
    };
  };
  res: {
    title: string;
    subtitle: string;
    quotes: {
      1: {
        label: string;
        author: string;
      };
      2: {
        label: string;
        author: string;
      };
      3: {
        label: string;
        author: string;
      };
      4: {
        label: string;
        author: string;
      };
    };
    hero1: {
      title: string;
      subtitle: string;
    };
    hero2: {
      title: string;
      subtitle: string;
    };
  };
  org: {
    users: string;
    verified: string;
    unverified: string;
    posts: string;
    filter: {
      all: string;
    };
  };
  err: {
    empty: string;
  };
  components: {
    browseButton: {
      label: string;
    };
    loginButton: {
      label: string;
    };
    post: {
      by: string;
      comments: string;
    };
    postModal: {
      openButtonDefault: string;
      postType: string;
      title: {
        label: string;
        placeholder: string;
      };
      text: {
        label: string;
        placeholder: string;
      };
      link: {
        label: string;
        placeholder: string;
      };
      image: {
        label: string;
      };
      submit: {
        label: string;
      };
    };
  };
};
