// Global type declarations for the Gentleman Programming RPG site

export interface PlayerStats {
  hp: number;
  mp: number;
  xp: number;
  maxXp: number;
  level: number;
}

export interface GentlemanRPG {
  showAchievement: (icon: string, title: string, description: string) => void;
  showDialog: (message: string | string[], callback?: () => void) => void;
  updatePlayerStats?: () => void;
}

export interface ContactPlatforms {
  youtube: string;
  twitch: string;
  linkedin: string;
  email: string;
}

export interface PlatformNames {
  youtube: string;
  twitch: string;
  linkedin: string;
  email: string;
}

declare global {
  interface Window {
    GentlemanRPG?: GentlemanRPG;
    playerStats?: PlayerStats;
    updatePlayerStats?: () => void;

    // Language functions
    changeLanguage?: (newLang: string) => void;
    getCurrentLanguage?: () => string;

    // Screen effects
    triggerScreenShake?: () => void;

    // About component functions
    showNextDialog?: () => void;
    openContact?: (platform: keyof ContactPlatforms) => void;

    // Business Services component functions
    acceptMission?: (missionType: string) => void;
    contactGuildMaster?: () => void;

    // Individual Services component functions
    unlockSkill?: (skillType: string) => void;
    scheduleQuest?: () => void;

    // Hero Hub component functions
    selectQuest?: (questType: string) => void;
    selectQuestType?: (questType: string) => void;
    scrollToSection?: (sectionId: string) => void;

    // Testimonials component functions
    nextTestimonial?: () => void;
    prevTestimonial?: () => void;
    startYourQuest?: () => void;

    // Final Boss CTA component functions
    launchAttack?: () => void;
    launchFinalAttack?: () => void;

    // Experience component functions
    selectExperience?: (expType: string) => void;

    // Temple Footer
    scrollToTop?: () => void;

    // Index page
    navigateToLevel?: (levelIndex: number) => void;
    showAchievement?: (icon: string, title: string, description: string) => void;
  }



  interface Element {
    style?: CSSStyleDeclaration;
    dataset?: DOMStringMap;
    textContent?: string | null;
    focus?: () => void;
  }

  interface HTMLElement {
    style: CSSStyleDeclaration;
    focus: () => void;
    offsetHeight: number;
    dataset: DOMStringMap;
    value?: string;
    disabled?: boolean;
    click: () => void;
    textContent?: string | null;
  }

  interface EventTarget {
    closest?(selector: string): Element | null;
  }
}

// Re-export for module augmentation
export type { PlayerStats, GentlemanRPG, ContactPlatforms, PlatformNames };
