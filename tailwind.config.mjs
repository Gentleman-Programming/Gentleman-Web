/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 16-bit Design System Colors
        'bg-dark': '#111827',
        'primary-genie': '#FF66B2',
        'secondary-yellow': '#FDE047',
        'text-primary': '#F9FAFB',
        'text-secondary': '#9CA3AF',
        'highlight-purple': '#6A4FFF',
        'error-red': '#E54B4B',
        'pixel-border': '#2E2E3A',

        // Additional RPG Colors
        'pixel-bg': '#0a0a0a',
        'pixel-dark': '#1a1a2e',
        'pixel-purple': '#16213e',
        'pixel-blue': '#0f3460',
        'pixel-cyan': '#00d4aa',
        'pixel-green': '#00ff41',
        'pixel-yellow': '#ffff00',
        'pixel-orange': '#ff8c00',
        'pixel-red': '#ff0040',
        'pixel-pink': '#ff69b4',
        'pixel-white': '#ffffff',
        'pixel-gray': '#8b949e',
        'hp-red': '#dc2626',
        'mp-blue': '#2563eb',
        'xp-green': '#16a34a',
        'gold': '#ffd700',
      },
      fontFamily: {
        'pixel': ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        'rpg': ['Courier New', 'monospace'],
      },
      fontSize: {
        'pixel-xs': ['8px', '12px'],
        'pixel-sm': ['12px', '16px'],
        'pixel-base': ['16px', '20px'],
        'pixel-lg': ['20px', '24px'],
        'pixel-xl': ['24px', '28px'],
        'pixel-2xl': ['32px', '36px'],
        'pixel-3xl': ['48px', '52px'],
      },
      spacing: {
        'pixel': '8px',
        'tile': '32px',
        'dialog': '16px',
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'pixel-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.8)',
        'pixel-inset': 'inset 2px 2px 0px 0px rgba(255, 255, 255, 0.2)',
        'glow-cyan': '0 0 20px rgba(0, 212, 170, 0.5)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.5)',
        'glow-yellow': '0 0 20px rgba(255, 255, 0, 0.5)',
      },
      animation: {
        'pixel-blink': 'pixelBlink 1s step-end infinite',
        'pixel-float': 'pixelFloat 2s ease-in-out infinite',
        'pixel-shake': 'pixelShake 0.5s ease-in-out',
        'pixel-glow': 'pixelGlow 2s ease-in-out infinite alternate',
        'hp-drain': 'hpDrain 3s ease-out',
        'xp-fill': 'xpFill 2s ease-out',
        'parallax-slow': 'parallaxSlow 20s linear infinite',
        'parallax-fast': 'parallaxFast 10s linear infinite',
      },
      keyframes: {
        pixelBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        pixelFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pixelShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        pixelGlow: {
          '0%': {
            'text-shadow': '0 0 5px rgba(0, 212, 170, 0.5), 0 0 10px rgba(0, 212, 170, 0.3)',
          },
          '100%': {
            'text-shadow': '0 0 10px rgba(0, 212, 170, 1), 0 0 20px rgba(0, 212, 170, 0.8), 0 0 30px rgba(0, 212, 170, 0.6)',
          },
        },
        hpDrain: {
          '0%': { width: '100%' },
          '100%': { width: '20%' },
        },
        xpFill: {
          '0%': { width: '0%' },
          '100%': { width: '85%' },
        },
        parallaxSlow: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-100px)' },
        },
        parallaxFast: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-200px)' },
        },
      },
      backdropBlur: {
        'pixel': '4px',
      },
    },
  },
  plugins: [],
}
