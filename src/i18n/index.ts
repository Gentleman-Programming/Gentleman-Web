// Internationalization system for Gentleman Programming RPG Landing
export type Language = 'en' | 'es';

export interface Translations {
  // Hero Hub
  hero: {
    subtitle: string;
    title: {
      mentoring: string;
      consulting: string;
      talks: string;
    };
    tagline: string;
    menu: {
      individual: {
        text: string;
        description: string;
      };
      business: {
        text: string;
        description: string;
      };
      about: {
        text: string;
        description: string;
      };
    };
    stats: {
      quests: string;
      youtube: string;
      twitch: string;
    };
    cta: {
      button: string;
    };
    scrollIndicator: string;
  };

  // Individual Services
  individual: {
    subtitle: string;
    title: string;
    description: string;
    skills: {
      architecture: {
        title: string;
        description: string;
        benefits: string[];
      };
      workflow: {
        title: string;
        description: string;
        benefits: string[];
      };
      review: {
        title: string;
        description: string;
        benefits: string[];
      };
    };
    cta: string;
    button: string;
    buttonCost: string;
  };

  // Business Services
  business: {
    subtitle: string;
    title: string;
    description: string;
    banner: {
      title: string;
      subtitle: string;
    };
    missions: {
      audit: {
        title: string;
        subtitle: string;
        description: string;
        objectives: string[];
      };
      workshop: {
        title: string;
        subtitle: string;
        description: string;
        objectives: string[];
      };
      course: {
        title: string;
        subtitle: string;
        description: string;
        objectives: string[];
      };
      coaching: {
        title: string;
        subtitle: string;
        description: string;
        objectives: string[];
      };
      leadership: {
        title: string;
        subtitle: string;
        description: string;
        objectives: string[];
      };
    };
    cta: string;
  };

  // About
  about: {
    subtitle: string;
    title: string;
    description: string;
    dialog: {
      name: string;
      level: string;
      greeting: string;
      lines: string[];
      continue: string;
      progress: string;
    };
    stats: {
      title: string;
      experience: string;
      experienceValue: string;
      knowledge: string;
      knowledgeValue: string;
      teaching: string;
      teachingValue: string;
      status: string;
    };
    badges: {
      title: string;
      speaking: {
        title: string;
        description: string;
      };
      author: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
      recognition: {
        title: string;
        description: string;
      };
    };
    skills: {
      title: string;
      items: {
        architecture: {
          name: string;
          description: string;
        };
        mentoring: {
          name: string;
          description: string;
        };
        learning: {
          name: string;
          description: string;
        };
        solving: {
          name: string;
          description: string;
        };
      };
      list: {
        icon: string;
        name: string;
        level: string;
      }[];
    };
    milestones: {
      title: string;
      list: {
        year: string;
        title: string;
        description: string;
      }[];
    };
    contact: {
      title: string;
      buttons: {
        youtube: string;
        twitch: string;
        linkedin: string;
        email: string;
      };
      achievements: {
        contactOpened: string;
        dialogComplete: string;
        platformNames: {
          youtube: string;
          twitch: string;
          linkedin: string;
          email: string;
        };
      };
    };
  };

  // Testimonials
  testimonials: {
    subtitle: string;
    title: string;
    description: string;
    bookTitle: string;
    bookSubtitle: string;
    book: {
      title: string;
      subtitle: string;
    };
    stats: {
      title: string;
    };
    completion: {
      title: string;
      stats: {
        quests: string;
        rate: string;
        response: string;
        rating: string;
      };
    };
  };

  // Experience
  experience: {
    subtitle: string;
    title: string;
    description: string;
    stats: {
      title: string;
      quests: string;
      youtube: string;
      twitch: string;
      discord: string;
    };
    badges: {
      title: string;
    };
    philosophy: {
      title: string;
      subtitle: string;
      items: {
        research: {
          title: string;
          description: string;
        };
        customized: {
          title: string;
          description: string;
        };
        practical: {
          title: string;
          description: string;
        };
        growth: {
          title: string;
          description: string;
        };
      };
      banner: string;
    };
    timeline: {
      title: string;
      milestones: {
        2018: {
          title: string;
          description: string;
          impact: string;
        };
        2020: {
          title: string;
          description: string;
          impact: string;
        };
        2021: {
          title: string;
          description: string;
          impact: string;
        };
        2022: {
          title: string;
          description: string;
          impact: string;
        };
        2024: {
          title: string;
          description: string;
          impact: string;
        };
      };
    };
  };

  // Final Boss CTA
  finalBoss: {
    warning: string;
    bossName: string;
    bossLevel: string;
    dialog: string[];
    response: string;
    heroName: string;
    heroLevel: string;
    attack: {
      title: string;
      description: string;
      inputLabel: string;
      button: string;
      subtitle: string;
      alternatives: string;
      email: string;
      whatsapp: string;
      calendar: string;
    };
    victory: {
      title: string;
      subtitle: string;
      message: string;
    };
  };

  // Footer
  footer: {
    title: string;
    subtitle: string;
    navigation: {
      title: string;
      home: string;
      mentoring: string;
      consulting: string;
      about: string;
    };
    social: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      location: string;
      response: string;
    };
    quickActions: {
      title: string;
      start: string;
      schedule: string;
    };
    inscription: {
      quote: string;
      author: string;
    };
    copyright: string;
    legal: {
      privacy: string;
      terms: string;
      cookies: string;
    };
    tech: string;
  };

  // Common
  common: {
    level: string;
    objectives: string;
    duration: string;
    team: string;
    difficulty: string;
    acceptMission: string;
    loading: string;
    prev: string;
    next: string;
    startAdventure: string;
  };

  // Layout
  layout: {
    meta: {
      defaultDescription: string;
      keywords: string;
      author: string;
    };
    accessibility: {
      skipToContent: string;
      toggleSound: string;
      switchLanguage: string;
    };
    language: {
      english: string;
      spanish: string;
      current: string;
    };
    loading: {
      text: string;
    };
    audio: {
      enabled: string;
      disabled: string;
      hoverSound: string;
      selectSound: string;
    };
    konami: {
      activated: string;
    };
    jsonLd: {
      name: string;
      jobTitle: string;
      description: string;
      serviceType: string;
      serviceDescription: string;
      knowsAbout: string[];
    };
  };

  // Game Interface
  game: {
    startScreen: {
      title: string;
      startButton: string;
      version: string;
    };
    ui: {
      map: string;
      progress: string;
      levels: string;
      currentLevel: string;
    };
    levels: {
      heroHub: string;
      individualServices: string;
      businessServices: string;
      about: string;
      testimonials: string;
      experience: string;
      finalBoss: string;
      templeFooter: string;
    };
    achievements: {
      gameStarted: {
        title: string;
        description: string;
      };
      npcEncountered: {
        title: string;
        description: string;
      };
      finalBossAppears: {
        title: string;
        description: string;
      };
      questComplete: {
        title: string;
        description: string;
      };
    };
  };
}

// English translations
export const en: Translations = {
  hero: {
    subtitle: "STARTING HERO SESSION...",
    title: {
      mentoring: "MENTORING",
      consulting: "CONSULTING",
      talks: "TALKS"
    },
    tagline: "choose your quest and master real architecture",
    menu: {
      individual: {
        text: "I need mentoring",
        description: "individual quest"
      },
      business: {
        text: "I'm a company, need consulting",
        description: "business quest"
      },
      about: {
        text: "meet the mentor",
        description: "NPC lore"
      }
    },
    stats: {
      quests: "XP QUESTS",
      youtube: "XP YOUTUBE",
      twitch: "XP TWITCH"
    },
    cta: {
      button: "START YOUR ADVENTURE"
    },
    scrollIndicator: "SCROLL TO CONTINUE"
  },

  individual: {
    subtitle: "LEVEL 2: INDIVIDUAL QUESTS",
    title: "SKILL BOARD",
    description: "Unlock new technical skills with personalized mentoring",
    skills: {
      architecture: {
        title: "EPIC ARCHITECTURE",
        description: "1:1 mentoring in frontend/backend agnostic structures. Improve your clean code and design patterns stats.",
        benefits: [
          "Clean & scalable architecture",
          "Advanced design patterns",
          "Optimized performance"
        ]
      },
      workflow: {
        title: "WORKFLOW MASTERY",
        description: "Coaching in best practices, testing and CI/CD for +20% productivity and epic workflow.",
        benefits: [
          "Advanced automation",
          "Strategic testing",
          "DevOps workflows"
        ]
      },
      review: {
        title: "CODE REVIEW",
        description: "Instant actionable feedback that levels up your code with expert tips and best practices.",
        benefits: [
          "Instant expert review",
          "Guaranteed continuous improvement",
          "Practical mentoring"
        ]
      }
    },
    cta: "SCHEDULE INDIVIDUAL QUEST",
    button: "UNLOCK SKILL",
    buttonCost: "💰 Check price"
  },

  business: {
    subtitle: "LEVEL 3: GUILD QUESTS",
    title: "MISSION BOARD",
    description: "Epic missions for guilds seeking to dominate the technical realm",
    banner: {
      title: "GUILD MASTER AVAILABLE",
      subtitle: "Epic-level business consulting"
    },
    missions: {
      audit: {
        title: "🔍 ARCHITECTURAL AUDIT",
        subtitle: "Reconnaissance and optimization mission",
        description: "Detect hidden bugs, bottlenecks and get your upgrade roadmap. Complete architecture analysis with actionable recommendations.",
        objectives: [
          "Performance and scalability analysis",
          "Technical debt identification",
          "Priority improvement roadmap",
          "Specific recommendations"
        ]
      },
      coaching: {
        title: "🎯 TECHNICAL COACHING",
        subtitle: "Personal development mission",
        description: "1:1 mentoring sessions to level up your technical skills with personalized guidance and expert feedback.",
        objectives: [
          "Personalized skill assessment",
          "Custom learning roadmap",
          "Regular mentoring sessions",
          "Continuous progress tracking"
        ]
      },
      leadership: {
        title: "👑 TECHNICAL LEADERSHIP",
        subtitle: "Management transformation mission",
        description: "Advanced training for technical leaders and engineering managers. Build epic teams and lead successful projects.",
        objectives: [
          "Technical leadership strategies",
          "Team management best practices",
          "Architecture decision-making",
          "Project delivery optimization"
        ]
      },
      workshop: {
        title: "📚 WORKSHOPS & TALK-GRIMOIRE",
        subtitle: "Group training mission",
        description: "Epic sessions on modular designs, testing and advanced DevOps. Knowledge transferred directly to your guild with practical examples.",
        objectives: [
          "Personalized interactive workshops",
          "Motivational technical talks",
          "Hands-on coding sessions",
          "Exclusive reference material"
        ]
      },
      course: {
        title: "🎯 IN-HOUSE COURSE",
        subtitle: "Total transformation mission",
        description: "Complete script to train your entire guild: customized content and LPF (Long Play Friendly) material with personalized follow-up.",
        objectives: [
          "Complete personalized curriculum",
          "Direct guild master mentoring",
          "Continuous evaluation and follow-up",
          "Official certification upon completion"
        ]
      }
    },
    cta: "START GUILD QUEST"
  },

  about: {
    subtitle: "LEVEL 4: NPC ABOUT",
    title: "KNOWLEDGE TAVERN",
    description: "Meet the mentor behind the epic quests",
    dialog: {
      name: "GENTLEMAN PROGRAMMING",
      level: "LVL ∞ MENTOR",
      greeting: "Greetings, brave developer!",
      lines: [
        "Hi, I'm Gentleman,",
        "software architect & international speaker.",
        "GDE & MVP with +50 completed quests.",
        "I teach you to conquer real bugs",
        "with strategy, humor & XP.",
        "¡Ready for your technical adventure!"
      ],
      continue: "PRESS ENTER TO CONTINUE",
      progress: "DIALOG"
    },
    stats: {
      title: "MENTOR STATS:",
      experience: "Experience",
      experienceValue: "+10 Years",
      knowledge: "Knowledge",
      knowledgeValue: "MAX LEVEL",
      teaching: "Teaching",
      teachingValue: "LEGENDARY",
      status: "● ONLINE"
    },
    badges: {
      title: "STATS & ACHIEVEMENTS",
      speaking: {
        title: "🎙️ EPIC SPEAKER",
        description: "+50 international conferences"
      },
      author: {
        title: "📚 TECH AUTHOR",
        description: "\"How to be frontend\" & more grimoires"
      },
      community: {
        title: "👥 GUILD MASTER",
        description: "+85k YouTube, +15.2k Twitch, +9.3k Discord"
      },
      recognition: {
        title: "🏆 GDE & MVP",
        description: "Google Developer Expert & Microsoft MVP"
      }
    },
    skills: {
      title: "🎯 CORE EXPERTISE",
      items: {
        architecture: {
          name: "Software Architecture",
          description: "Scalable system design"
        },
        mentoring: {
          name: "Technical Mentoring",
          description: "1:1 developer coaching"
        },
        learning: {
          name: "Learning Approach",
          description: "I research & teach what you need"
        },
        solving: {
          name: "Problem Solving",
          description: "Real solutions for real bugs"
        }
      },
      list: [
        {
          icon: "🏗️",
          name: "Architecture",
          level: "EXPERT"
        },
        {
          icon: "👨‍🏫",
          name: "Mentoring",
          level: "MASTER"
        },
        {
          icon: "🧠",
          name: "Learning",
          level: "ADAPTIVE"
        },
        {
          icon: "🔧",
          name: "Problem Solving",
          level: "LEGENDARY"
        }
      ]
    },
    milestones: {
      title: "EPIC JOURNEY",
      list: [
        {
          year: "2018",
          title: "YouTube Channel Launch",
          description: "Started tech education journey"
        },
        {
          year: "2020",
          title: "Google Developer Expert",
          description: "Recognition for community work"
        },
        {
          year: "2021",
          title: "Microsoft MVP",
          description: "Most Valuable Professional"
        },
        {
          year: "2024",
          title: "65K+ Community",
          description: "Epic consolidated community"
        }
      ]
    },
    contact: {
      title: "📨 START YOUR QUEST",
      buttons: {
        youtube: "YouTube",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        email: "Email"
      },
      achievements: {
        contactOpened: "Contact Opened!",
        dialogComplete: "Dialog Complete!",
        platformNames: {
          youtube: "YouTube Channel",
          twitch: "Twitch Stream",
          linkedin: "LinkedIn Profile",
          email: "Email Contact"
        }
      }
    }
  },

  testimonials: {
    subtitle: "LEVEL 5: TESTIMONIAL BESTIARY",
    title: "EXPERIENCE GRIMOIRE",
    description: "Epic testimonials from heroes who completed their quests",
    book: {
      title: "BESTIARY OF SUCCESS",
      subtitle: "Compiled Adventures • Vol. I"
    },
    stats: {
      title: "EPIC ACHIEVEMENTS"
    },
    bookTitle: "BESTIARY OF SUCCESS",
    bookSubtitle: "Compiled Adventures • Vol. I",
    completion: {
      title: "BESTIARY COMPLETION",
      stats: {
        quests: "LEGENDARY QUESTS",
        rate: "SUCCESS RATE",
        response: "AVG RESPONSE",
        rating: "RATING"
      }
    }
  },

  experience: {
    subtitle: "LEVEL 6: HALL OF FAME",
    title: "HALL OF GLORY",
    description: "Epic journey and unlocked achievements in the tech world",
    stats: {
      title: "⚡ POWER LEVEL STATS",
      quests: "COMPLETED QUESTS",
      youtube: "YOUTUBE XP",
      twitch: "TWITCH XP",
      discord: "GUILD MEMBERS"
    },
    badges: {
      title: "🏆 LEGENDARY BADGES"
    },
    philosophy: {
      title: "🧠 LEARNING PHILOSOPHY",
      subtitle: "I don't know everything, but I can learn anything",
      items: {
        research: {
          title: "Research First",
          description: "I thoroughly investigate what you need before our session"
        },
        customized: {
          title: "Customized Learning",
          description: "Every mentoring session is tailored to your specific challenges"
        },
        practical: {
          title: "Practical Solutions",
          description: "Real-world examples and hands-on problem solving"
        },
        growth: {
          title: "Growth Mindset",
          description: "We learn together - no challenge is too complex"
        }
      },
      banner: "\"Tell me what you need to learn, and I'll master it to teach you better\""
    },
    timeline: {
      title: "📈 JOURNEY MILESTONES",
      milestones: {
        2018: {
          title: "YouTube Channel Launched",
          description: "Start of tech educational adventure",
          impact: "+1K subs in first year"
        },
        2020: {
          title: "Google Developer Expert",
          description: "Recognition for community contributions",
          impact: "Web Technologies Expert"
        },
        2021: {
          title: "Microsoft MVP",
          description: "Most Valuable Professional Award",
          impact: "Developer Technologies"
        },
        2022: {
          title: "Book \"How to be frontend\"",
          description: "First technical publication",
          impact: "Best-seller in category"
        },
        2024: {
          title: "65K+ Community",
          description: "Epic consolidated community",
          impact: "LATAM technical leadership"
        }
      }
    }
  },

  finalBoss: {
    warning: "⚠️ WARNING: FINAL BOSS APPROACHING ⚠️",
    bossName: "YOUR TECHNICAL PROBLEMS",
    bossLevel: "LVL ∞ • LEGENDARY DIFFICULTY",
    dialog: [
      "Ready for your final technical challenge?",
      "I've seen a thousand developers fall before me...",
      "Infinite bugs, broken architectures,",
      "impossible deadlines... I AM UNSTOPPABLE!"
    ],
    response: "But you have one last chance...",
    heroName: "YOU (DEVELOPER HERO)",
    heroLevel: "READY TO LEVEL UP",
    attack: {
      title: "⚡ SPECIAL ATTACK: EMAIL CONTACT ⚡",
      description: "Launch your magic email to summon the mentor and definitively defeat your technical problems",
      inputLabel: "ENTER YOUR EMAIL TO ATTACK:",
      button: "LAUNCH FINAL ATTACK",
      subtitle: "Send me an email!",
      alternatives: "OR USE SPECIAL ABILITIES:",
      email: "DIRECT EMAIL",
      whatsapp: "WHATSAPP",
      calendar: "SCHEDULE CALL"
    },
    victory: {
      title: "VICTORY!",
      subtitle: "You've defeated the final boss! The mentor has been contacted.",
      message: "You'll receive a response within 24 hours. Get ready for your epic quest!"
    }
  },

  footer: {
    title: "⛩️ TEMPLE OF KNOWLEDGE",
    subtitle: "May your code be clean and your bugs few",
    navigation: {
      title: "🧭 NAVIGATION",
      home: "Home",
      mentoring: "Mentoring",
      consulting: "Consulting",
      about: "About Me"
    },
    social: {
      title: "🌐 SOCIAL GUILD"
    },
    contact: {
      title: "📨 DIRECT CONTACT",
      email: "Email Quest",
      location: "Location",
      response: "Response Time"
    },
    quickActions: {
      title: "⚡ QUICK ACTIONS",
      start: "Start Quest",
      schedule: "Schedule Call"
    },
    inscription: {
      quote: "\"Made with coffee, clean code and love for technical traumas\"",
      author: "- Gentleman Programming, Mentor of epic developers"
    },
    copyright: "© 2024 Gentleman Programming. All rights reserved.",
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies"
    },
    tech: "Built with Astro ⚡ + Tailwind 🎨 + Pixel Love 💖"
  },

  common: {
    level: "LEVEL",
    objectives: "OBJECTIVES:",
    duration: "DURATION",
    team: "TEAM",
    difficulty: "DIFFICULTY",
    acceptMission: "ACCEPT MISSION",
    loading: "LOADING QUEST...",
    prev: "PREV",
    next: "NEXT",
    startAdventure: "START ADVENTURE"
  },

  layout: {
    meta: {
      defaultDescription: "Gentleman Programming - Mentoring, Consulting and Technical Talks RPG Style",
      keywords: "programming, mentoring, consulting, software architecture, frontend, backend, RPG, gentleman programming",
      author: "Gentleman Programming"
    },
    accessibility: {
      skipToContent: "Skip to main content",
      toggleSound: "Toggle ambient sound",
      switchLanguage: "Switch language"
    },
    language: {
      english: "English",
      spanish: "Español",
      current: "EN"
    },
    loading: {
      text: "LOADING QUEST..."
    },
    audio: {
      enabled: "🎵 Ambient RPG music enabled",
      disabled: "🔇 Ambient music disabled",
      hoverSound: "🔊 Menu hover sound",
      selectSound: "🔊 Menu select sound"
    },
    konami: {
      activated: "🎮 KONAMI CODE ACTIVATED! +99 XP unlocked"
    },
    jsonLd: {
      name: "Gentleman Programming",
      jobTitle: "Software Architect & Mentor",
      description: "Technical mentor specialized in software architecture, frontend and backend",
      serviceType: "Technical Mentoring and Consulting",
      serviceDescription: "1:1 mentoring, business consulting and technical talks",
      knowsAbout: [
        "Software Architecture",
        "Frontend Development",
        "Backend Development",
        "Technical Mentoring",
        "IT Consulting"
      ]
    }
  },

  game: {
    startScreen: {
      title: "GENTLEMAN PROGRAMMING",
      startButton: "START ADVENTURE",
      version: "v2024.1 - RPG Edition"
    },
    ui: {
      map: "MAP",
      progress: "PROGRESS",
      levels: "LEVELS",
      currentLevel: "LEVEL"
    },
    levels: {
      heroHub: "Hero Hub",
      individualServices: "Individual Services",
      businessServices: "Business Services",
      about: "About",
      testimonials: "Testimonials",
      experience: "Experience",
      finalBoss: "Final Boss",
      templeFooter: "Temple Footer"
    },
    achievements: {
      gameStarted: {
        title: "Game Started!",
        description: "Welcome to the ultimate developer quest"
      },
      npcEncountered: {
        title: "NPC Encountered!",
        description: "You met the mentor"
      },
      finalBossAppears: {
        title: "Final Boss Appears!",
        description: "The ultimate challenge awaits"
      },
      questComplete: {
        title: "Quest Complete!",
        description: "You reached the temple"
      }
    }
  }
};

// Spanish translations
export const es: Translations = {
  hero: {
    subtitle: "INICIANDO SESIÓN DE HÉROE...",
    title: {
      mentoring: "MENTORÍAS",
      consulting: "CONSULTORÍA",
      talks: "CHARLAS"
    },
    tagline: "elige tu quest y domina la arquitectura real",
    menu: {
      individual: {
        text: "necesito mentoring",
        description: "quest individual"
      },
      business: {
        text: "soy empresa, quiero consultoría",
        description: "quest empresarial"
      },
      about: {
        text: "conocer al mentor",
        description: "lore del NPC"
      }
    },
    stats: {
      quests: "XP QUESTS",
      youtube: "XP YOUTUBE",
      twitch: "XP TWITCH"
    },
    cta: {
      button: "INICIA TU AVENTURA"
    },
    scrollIndicator: "DESPLAZA PARA CONTINUAR"
  },

  individual: {
    subtitle: "NIVEL 2: QUEST DE INDIVIDUOS",
    title: "TABLERO DE HABILIDADES",
    description: "Desbloquea nuevas habilidades técnicas con mentorías personalizadas",
    skills: {
      architecture: {
        title: "ARQUITECTURA ÉPICA",
        description: "Mentoría 1:1 en estructuras frontend/backend agnóstico. Mejora tus stats de clean code y patrones de diseño.",
        benefits: [
          "Arquitectura limpia y escalable",
          "Patrones de diseño avanzados",
          "Performance optimizado"
        ]
      },
      workflow: {
        title: "WORKFLOW MASTERY",
        description: "Coaching en buenas prácticas, testing y CI/CD para +20% de productividad y flujo épico.",
        benefits: [
          "Automatización avanzada",
          "Testing estratégico",
          "Workflows DevOps"
        ]
      },
      review: {
        title: "CODE REVIEW",
        description: "Feedback instantáneo y accionable que sube tu nivel de código con tips expertos y mejores prácticas.",
        benefits: [
          "Review experto instantáneo",
          "Mejora continua garantizada",
          "Mentoring práctico"
        ]
      }
    },
    cta: "AGENDAR QUEST INDIVIDUAL",
    button: "DESBLOQUEAR SKILL",
    buttonCost: "💰 Consultar precio"
  },

  business: {
    subtitle: "NIVEL 3: QUEST DE GUILDS",
    title: "TABLÓN DE MISIONES",
    description: "Misiones épicas para guilds que buscan dominar el reino técnico",
    banner: {
      title: "GUILD MASTER DISPONIBLE",
      subtitle: "Consultoría empresarial de nivel épico"
    },
    missions: {
      audit: {
        title: "🔍 AUDITORÍA ARQUITECTÓNICA",
        subtitle: "Misión de reconocimiento y optimización",
        description: "Detecta bugs ocultos, cuellos de botella y obtén tu roadmap de upgrades. Análisis completo de arquitectura con recomendaciones accionables.",
        objectives: [
          "Análisis de performance y escalabilidad",
          "Identificación de deuda técnica",
          "Roadmap de mejoras prioritarias",
          "Recomendaciones específicas"
        ]
      },
      workshop: {
        title: "📚 WORKSHOPS & CHARLA-GRIMOIRE",
        subtitle: "Misión de entrenamiento grupal",
        description: "Sesiones épicas sobre diseños modulares, testing y DevOps avanzados. Conocimiento transferido directamente a tu guild con ejemplos prácticos.",
        objectives: [
          "Workshops interactivos personalizados",
          "Charlas técnicas motivacionales",
          "Sesiones hands-on de código",
          "Material de referencia exclusivo"
        ]
      },
      course: {
        title: "🎯 CURSO IN-HOUSE",
        subtitle: "Misión de transformación total",
        description: "Script completo para entrenar a toda tu guild: contenido customizado y material LPF (Long Play Friendly) con seguimiento personalizado.",
        objectives: [
          "Curriculum personalizado completo",
          "Mentoring directo del guild master",
          "Evaluaciones y seguimiento continuo",
          "Certificación oficial al completar"
        ]
      },
      coaching: {
        title: "🎯 COACHING TÉCNICO",
        subtitle: "Misión de desarrollo personal",
        description: "Sesiones de mentoría 1:1 para subir de nivel tus habilidades técnicas con guía personalizada y feedback experto.",
        objectives: [
          "Evaluación personalizada de habilidades",
          "Roadmap de aprendizaje customizado",
          "Sesiones regulares de mentoría",
          "Seguimiento continuo del progreso"
        ]
      },
      leadership: {
        title: "👑 LIDERAZGO TÉCNICO",
        subtitle: "Misión de transformación gerencial",
        description: "Entrenamiento avanzado para líderes técnicos y engineering managers. Construye equipos épicos y lidera proyectos exitosos.",
        objectives: [
          "Estrategias de liderazgo técnico",
          "Mejores prácticas de gestión de equipos",
          "Toma de decisiones arquitectónicas",
          "Optimización de entrega de proyectos"
        ]
      }
    },
    cta: "INICIAR QUEST GUILD"
  },

  about: {
    subtitle: "NIVEL 4: NPC ABOUT",
    title: "TABERNA DEL CONOCIMIENTO",
    description: "Conoce al mentor detrás de las quest épicas",
    dialog: {
      name: "GENTLEMAN PROGRAMMING",
      level: "LVL ∞ MENTOR",
      lines: [
        "hola, soy gentleman,",
        "arquitecto de software y speaker internacional.",
        "GDE & MVP, +50 quests completadas.",
        "te enseño a vencer bugs reales",
        "con estrategia, humor & XP.",
        "¡listo para tu aventura técnica!"
      ],
      continue: "PRESIONA ENTER PARA CONTINUAR",
      progress: "DIÁLOGO",
      greeting: "¡Saludos, valiente desarrollador!"
    },
    stats: {
      title: "MENTOR STATS:",
      experience: "Experiencia",
      experienceValue: "+10 Años",
      knowledge: "Conocimiento",
      knowledgeValue: "NIVEL MÁXIMO",
      teaching: "Enseñanza",
      teachingValue: "LEGENDARIO",
      status: "● EN LÍNEA"
    },
    badges: {
      title: "STATS & ACHIEVEMENTS",
      speaking: {
        title: "🎙️ SPEAKER ÉPICO",
        description: "+50 conferencias internacionales"
      },
      author: {
        title: "📚 AUTOR TÉCNICO",
        description: "\"Cómo ser front-end\" & más grimoires"
      },
      community: {
        title: "👥 GUILD MASTER",
        description: "+85k YouTube, +15.2k Twitch, +9.3k Discord"
      },
      recognition: {
        title: "🏆 GDE & MVP",
        description: "Google Developer Expert & Microsoft MVP"
      }
    },
    skills: {
      title: "🎯 EXPERTISE PRINCIPAL",
      items: {
        architecture: {
          name: "Arquitectura de Software",
          description: "Diseño de sistemas escalables"
        },
        mentoring: {
          name: "Mentoría Técnica",
          description: "Coaching 1:1 de desarrolladores"
        },
        learning: {
          name: "Enfoque de Aprendizaje",
          description: "Investigo y enseño lo que necesitas"
        },
        solving: {
          name: "Resolución de Problemas",
          description: "Soluciones reales para bugs reales"
        }
      },
      list: [
        {
          icon: "🏗️",
          name: "Arquitectura",
          level: "EXPERTO"
        },
        {
          icon: "👨‍🏫",
          name: "Mentoría",
          level: "MAESTRO"
        },
        {
          icon: "🧠",
          name: "Aprendizaje",
          level: "ADAPTATIVO"
        },
        {
          icon: "🔧",
          name: "Resolución",
          level: "LEGENDARIO"
        }
      ]
    },
    milestones: {
      title: "JORNADA ÉPICA",
      list: [
        {
          year: "2018",
          title: "Lanzamiento Canal YouTube",
          description: "Inicio del viaje educativo tech"
        },
        {
          year: "2020",
          title: "Google Developer Expert",
          description: "Reconocimiento por trabajo comunitario"
        },
        {
          year: "2021",
          title: "Microsoft MVP",
          description: "Profesional Más Valioso"
        },
        {
          year: "2024",
          title: "Comunidad 65K+",
          description: "Comunidad épica consolidada"
        }
      ]
    },
    contact: {
      title: "📨 INICIA TU QUEST",
      buttons: {
        youtube: "YouTube",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        email: "Email"
      },
      achievements: {
        contactOpened: "¡Contacto Abierto!",
        dialogComplete: "¡Diálogo Completado!",
        platformNames: {
          youtube: "Canal de YouTube",
          twitch: "Stream de Twitch",
          linkedin: "Perfil de LinkedIn",
          email: "Contacto por Email"
        }
      }
    }
  },

  testimonials: {
    subtitle: "NIVEL 5: BESTIARIO DE TESTIMONIALES",
    title: "GRIMOIRE DE EXPERIENCIAS",
    description: "Testimonios épicos de héroes que completaron sus quests",
    book: {
      title: "BESTIARIO DEL ÉXITO",
      subtitle: "Aventuras Compiladas • Vol. I"
    },
    stats: {
      title: "LOGROS ÉPICOS"
    },
    bookTitle: "BESTIARIO DEL ÉXITO",
    bookSubtitle: "Aventuras Compiladas • Vol. I",
    completion: {
      title: "COMPLETADO DEL BESTIARIO",
      stats: {
        quests: "QUESTS LEGENDARIAS",
        rate: "TASA DE ÉXITO",
        response: "RESPUESTA PROMEDIO",
        rating: "CALIFICACIÓN"
      }
    }
  },

  experience: {
    subtitle: "NIVEL 6: HALL OF FAME",
    title: "SALÓN DE LA GLORIA",
    description: "Trayectoria épica y logros desbloqueados en el mundo tech",
    stats: {
      title: "⚡ STATS DE PODER",
      quests: "QUESTS COMPLETADAS",
      youtube: "XP YOUTUBE",
      twitch: "XP TWITCH",
      discord: "MIEMBROS GUILD"
    },
    badges: {
      title: "🏆 BADGES LEGENDARIOS"
    },
    philosophy: {
      title: "🧠 FILOSOFÍA DE APRENDIZAJE",
      subtitle: "No lo sé todo, pero puedo aprender cualquier cosa",
      items: {
        research: {
          title: "Investigación Primero",
          description: "Investigo a fondo lo que necesitas antes de nuestra sesión"
        },
        customized: {
          title: "Aprendizaje Personalizado",
          description: "Cada sesión de mentoría se adapta a tus desafíos específicos"
        },
        practical: {
          title: "Soluciones Prácticas",
          description: "Ejemplos del mundo real y resolución práctica de problemas"
        },
        growth: {
          title: "Mentalidad de Crecimiento",
          description: "Aprendemos juntos - ningún desafío es demasiado complejo"
        }
      },
      banner: "\"Dime qué necesitas aprender y lo dominaré para enseñártelo mejor\""
    },
    timeline: {
      title: "📈 HITOS DEL VIAJE",
      milestones: {
        2018: {
          title: "Canal YouTube Lanzado",
          description: "Inicio de la aventura educativa tech",
          impact: "+1K subs en el primer año"
        },
        2020: {
          title: "Google Developer Expert",
          description: "Reconocimiento por contribuciones a la comunidad",
          impact: "Experto en Web Technologies"
        },
        2021: {
          title: "Microsoft MVP",
          description: "Premio Most Valuable Professional",
          impact: "Developer Technologies"
        },
        2022: {
          title: "Libro \"Cómo ser front-end\"",
          description: "Primera publicación técnica",
          impact: "Best-seller en categoría"
        },
        2024: {
          title: "Comunidad 65K+",
          description: "Comunidad épica consolidada",
          impact: "Liderazgo técnico LATAM"
        }
      }
    }
  },

  finalBoss: {
    warning: "⚠️ ADVERTENCIA: BOSS FINAL ACERCÁNDOSE ⚠️",
    bossName: "TUS PROBLEMAS TÉCNICOS",
    bossLevel: "LVL ∞ • DIFICULTAD LEGENDARIA",
    dialog: [
      "¿Listo para tu desafío técnico final?",
      "He visto mil developers caer ante mí...",
      "Bugs infinitos, arquitecturas rotas,",
      "deadlines imposibles... ¡SOY IMPARABLE!"
    ],
    response: "Pero tienes una última oportunidad...",
    heroName: "TÚ (DEVELOPER HÉROE)",
    heroLevel: "LISTO PARA SUBIR DE NIVEL",
    attack: {
      title: "⚡ ATAQUE ESPECIAL: CONTACTO EMAIL ⚡",
      description: "Lanza tu email mágico para invocar al mentor y derrotar definitivamente a tus problemas técnicos",
      inputLabel: "INGRESA TU EMAIL PARA ATACAR:",
      button: "LANZAR ATAQUE FINAL",
      subtitle: "¡Envíame un mail!",
      alternatives: "O USAR HABILIDADES ESPECIALES:",
      email: "EMAIL DIRECTO",
      whatsapp: "WHATSAPP",
      calendar: "AGENDAR CALL"
    },
    victory: {
      title: "¡VICTORIA!",
      subtitle: "¡Has derrotado al boss final! El mentor ha sido contactado.",
      message: "Recibirás respuesta en las próximas 24 horas. ¡Prepárate para tu quest épica!"
    }
  },

  footer: {
    title: "⛩️ TEMPLO DEL CONOCIMIENTO",
    subtitle: "Que tu código sea limpio y tus bugs pocos",
    navigation: {
      title: "🧭 NAVEGACIÓN",
      home: "Inicio",
      mentoring: "Mentorías",
      consulting: "Consultoría",
      about: "Sobre Mí"
    },
    social: {
      title: "🌐 GUILD SOCIAL"
    },
    contact: {
      title: "📨 CONTACTO DIRECTO",
      email: "Email Quest",
      location: "Ubicación",
      response: "Tiempo de Respuesta"
    },
    quickActions: {
      title: "⚡ ACCIONES RÁPIDAS",
      start: "Iniciar Quest",
      schedule: "Agendar Call"
    },
    inscription: {
      quote: "\"Hecho con café, código limpio y cariño a los traumas técnicos\"",
      author: "- Gentleman Programming, Mentor de desarrolladores épicos"
    },
    copyright: "© 2024 Gentleman Programming. Todos los derechos reservados.",
    legal: {
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies"
    },
    tech: "Construido con Astro ⚡ + Tailwind 🎨 + Amor Pixel 💖"
  },

  common: {
    level: "NIVEL",
    objectives: "OBJETIVOS:",
    duration: "DURACIÓN",
    team: "EQUIPO",
    difficulty: "DIFICULTAD",
    acceptMission: "ACEPTAR MISIÓN",
    loading: "CARGANDO QUEST...",
    prev: "ANTERIOR",
    next: "SIGUIENTE",
    startAdventure: "INICIAR AVENTURA"
  },

  layout: {
    meta: {
      defaultDescription: "Gentleman Programming - Mentorías, Consultoría y Charlas técnicas estilo RPG",
      keywords: "programación, mentoría, consultoría, arquitectura software, frontend, backend, RPG, gentleman programming",
      author: "Gentleman Programming"
    },
    accessibility: {
      skipToContent: "Ir al contenido principal",
      toggleSound: "Alternar sonido ambiental",
      switchLanguage: "Cambiar idioma"
    },
    language: {
      english: "English",
      spanish: "Español",
      current: "ES"
    },
    loading: {
      text: "CARGANDO QUEST..."
    },
    audio: {
      enabled: "🎵 Música RPG ambiental activada",
      disabled: "🔇 Música ambiental desactivada",
      hoverSound: "🔊 Sonido hover menú",
      selectSound: "🔊 Sonido selección menú"
    },
    konami: {
      activated: "🎮 ¡CÓDIGO KONAMI ACTIVADO! +99 XP desbloqueado"
    },
    jsonLd: {
      name: "Gentleman Programming",
      jobTitle: "Arquitecto de Software & Mentor",
      description: "Mentor técnico especializado en arquitectura de software, frontend y backend",
      serviceType: "Mentoría y Consultoría Técnica",
      serviceDescription: "Mentorías 1:1, consultorías empresariales y charlas técnicas",
      knowsAbout: [
        "Arquitectura de Software",
        "Frontend Development",
        "Backend Development",
        "Mentoría Técnica",
        "Consultoría IT"
      ]
    }
  },

  game: {
    startScreen: {
      title: "GENTLEMAN PROGRAMMING",
      startButton: "INICIAR AVENTURA",
      version: "v2024.1 - Edición RPG"
    },
    ui: {
      map: "MAPA",
      progress: "PROGRESO",
      levels: "NIVELES",
      currentLevel: "NIVEL"
    },
    levels: {
      heroHub: "Hero Hub",
      individualServices: "Servicios Individuales",
      businessServices: "Servicios Empresariales",
      about: "Acerca de",
      testimonials: "Testimonios",
      experience: "Experiencia",
      finalBoss: "Jefe Final",
      templeFooter: "Templo Footer"
    },
    achievements: {
      gameStarted: {
        title: "¡Juego Iniciado!",
        description: "Bienvenido a la aventura definitiva para desarrolladores"
      },
      npcEncountered: {
        title: "¡NPC Encontrado!",
        description: "Conociste al mentor"
      },
      finalBossAppears: {
        title: "¡Aparece el Jefe Final!",
        description: "El desafío definitivo te espera"
      },
      questComplete: {
        title: "¡Quest Completada!",
        description: "Llegaste al templo"
      }
    }
  }
};

// Translation utilities
export const translations = { en, es };

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    // First check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as Language;
    if (urlLang && urlLang in translations) {
      // Save to localStorage and return
      localStorage.setItem('preferred-language', urlLang);
      return urlLang;
    }

    // Then check localStorage
    const stored = localStorage.getItem('preferred-language') as Language;
    if (stored && stored in translations) {
      return stored;
    }

    // Finally check browser language
    const browserLang = navigator.language.split('-')[0] as Language;
    return browserLang in translations ? browserLang : 'en';
  }
  // Default to English for server-side rendering to avoid mismatch
  return 'en';
}

export function getServerLanguage(): Language {
  // For static site generation, we can't access request headers
  // Default to English and let client-side handle language detection
  return 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;

    // Update URL with language parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  }
}

export function t(key: string, lang?: Language): any {
  const currentLang = lang || getCurrentLanguage();
  const trans = getTranslations(currentLang);

  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let value: any = trans;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language: ${currentLang}`);
      return key;
    }
  }

  // Return the value if it's a string, array, or object
  if (typeof value === 'string' || Array.isArray(value) || typeof value === 'object') {
    return value;
  }

  return key;
}
