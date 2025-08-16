/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Sheridan Richey Brand Colors (Exact hex values)
        primary: {
          50: '#f0fdfd',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#009696', // Official Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        teal: {
          50: '#f0fdfd',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#009696', // Official Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Official Brand Colors (Exact hex values from guidelines)
        'light-bg': '#FAFBFF',      // Light Background
        'light-teal': '#70C6C6',    // Light Teal
        black: '#000000',            // Black
        
        // Official Grayscale Palette (Exact hex values)
        cloud: '#EDEFF7',            // Cloud
        smoke: '#D3D6E0',            // Smoke
        steel: '#BCBFCC',            // Steel
        space: '#9DA2B3',            // Space
        graphite: '#6E7180',         // Graphite
        arsenic: '#40424D',          // Arsenic
        phantom: '#1E1E24',          // Phantom
        
        // Legacy secondary colors for backward compatibility
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        
        // ZAG Matrix Secondary Color System
        zag: {
          zen: {
            base: '#4A90E2',      // Base Blue for ZEN
            light: '#A0C3ED',     // Light Blue (Tint) for tags, backgrounds
            dark: '#2C588E',      // Dark Blue (Shade) for hover states, dark accents
          },
          act: {
            base: '#22C55E',      // Base Green for ACT
            light: '#86EFAC',     // Light Green (Tint) for tags, backgrounds
            dark: '#15803D',      // Dark Green (Shade) for hover states, dark accents
          },
          gem: {
            base: '#F5A623',      // Base Gold for GEM
            light: '#FAD28C',     // Light Gold (Tint) for tags, backgrounds
            dark: '#B87D1A',      // Dark Gold (Shade) for hover states, dark accents
          },
        },
        
        // ZAG Matrix Gradient Colors
        'zen-gradient': '#4A90E2',
        'act-gradient': '#22C55E', 
        'gem-gradient': '#F5A623',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        heading: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Typographic hierarchy from brand guidelines
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }], // Manrope Bold
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600' }], // Manrope Semibold
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }], // Manrope Semibold
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }], // Manrope Regular
        'lead': ['20px', { lineHeight: '1.5', fontWeight: '300' }], // Manrope Light
        'caption': ['14px', { lineHeight: '1.4', fontWeight: '400' }], // Manrope Regular
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1E1E24', // Phantom for body text
            fontFamily: 'Manrope, sans-serif',
            h1: {
              fontFamily: 'Manrope, sans-serif',
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '1.2',
              color: '#000000',
            },
            h2: {
              fontFamily: 'Manrope, sans-serif',
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '1.3',
              color: '#000000',
            },
            h3: {
              fontFamily: 'Manrope, sans-serif',
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '1.4',
              color: '#000000',
            },
            p: {
              fontFamily: 'Manrope, sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#1E1E24',
            },
            a: {
              color: '#009696',
              '&:hover': {
                color: '#70C6C6',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 