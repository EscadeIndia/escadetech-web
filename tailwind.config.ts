import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#0A2540', sky: '#38BDF8', mist: '#F8FAFC', ink: '#1E293B' }, fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] }, boxShadow: { glow: '0 24px 80px rgba(56,189,248,.22)' } } }, plugins: [] };
export default config;
