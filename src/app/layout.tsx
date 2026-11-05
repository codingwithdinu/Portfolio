import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dinesh Patel | AI/ML Engineer & Full-Stack Developer',
  description: 'Portfolio of Dinesh Patel — building AI-powered applications and full-stack products.',
  openGraph: { title: 'Dinesh Patel | Portfolio', description: 'AI/ML Engineer · Full-Stack Developer', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}