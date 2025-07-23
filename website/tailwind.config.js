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
        // Official Sheridan Richey Brand Colors
        primary: {
          50: '#f0fdfd',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#009696', // Primary Teal
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
          500: '#009696', // Primary Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        'light-teal': '#70C6C6',
        'light-bg': '#FAFBFF',
        // Grayscale Palette
        cloud: '#EDEFF7',
        smoke: '#D3D6E0',
        steel: '#BCBFCC',
        space: '#9DA2B3',
        graphite: '#6E7180',
        arsenic: '#40424D',
        phantom: '#1E1E24',
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
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
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