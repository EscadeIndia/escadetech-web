import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Escade Technologies | AI-Driven Digital Agency',
  description: 'Design, development, marketing, and AI-powered business solutions for startups, small businesses, and enterprises.',
  keywords: ['digital agency', 'web development', 'UI UX design', 'AI solutions', 'SEO', 'Escade Technologies'],
  openGraph: { title: 'Escade Technologies', description: 'Design. Build. Market. Scale.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
