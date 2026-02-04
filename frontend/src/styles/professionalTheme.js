// Professional Theme Configuration
export const professionalTheme = {
  // Primary Colors - Deep Professional Blue
  primary: {
    main: '#1e40af',
    light: '#3b82f6',
    dark: '#1e3a8a',
  },
  
  // Accent Colors - Professional Teal
  accent: {
    main: '#0891b2',
    light: '#06b6d4',
    dark: '#0e7490',
  },
  
  // Background Colors
  background: {
    primary: '#020617',
    secondary: '#0f172a',
    tertiary: '#1e293b',
  },
  
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
  },
  
  // Border Colors
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(8, 145, 178, 0.3)',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #1e40af 0%, #0891b2 100%)',
    accent: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    card: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%)',
  },
  
  // Shadows
  shadows: {
    glow: '0 0 20px rgba(30, 64, 175, 0.5)',
    glowAccent: '0 0 20px rgba(8, 145, 178, 0.5)',
    card: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
};

// Tailwind class helpers
export const professionalClasses = {
  // Gradients
  gradientPrimary: 'from-blue-800 to-cyan-600',
  gradientAccent: 'from-blue-500 to-cyan-500',
  
  // Backgrounds
  bgDark: 'bg-slate-950',
  bgDarker: 'bg-slate-900',
  bgCard: 'bg-slate-800/50',
  
  // Text
  textPrimary: 'text-white',
  textSecondary: 'text-slate-300',
  textMuted: 'text-slate-400',
  textAccent: 'text-cyan-600',
  
  // Borders
  borderDefault: 'border-white/10',
  borderHover: 'hover:border-cyan-600/30',
  
  // Buttons
  btnPrimary: 'bg-gradient-to-r from-blue-800 to-cyan-600 hover:shadow-lg hover:shadow-blue-800/50',
  btnSecondary: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600/10',
};
