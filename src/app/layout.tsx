import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'moltybygeorge',
  description: 'OpenClaw use cases, integrations, and activity log.',
};

const nav = [
  { href: '/', label: 'Use cases' },
  { href: '/community', label: 'Community builds' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/mag7', label: 'Mag7 news' },
  { href: '/activity', label: 'Activity' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(900px_400px_at_20%_0%,rgba(249,115,22,0.14),transparent_60%),radial-gradient(900px_400px_at_90%_10%,rgba(251,146,60,0.16),transparent_55%)] text-slate-950 dark:text-orange-50">
        <header className="border-b border-orange-200/60 bg-white/50 backdrop-blur dark:border-orange-400/20 dark:bg-black/35">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-600 text-sm font-bold text-white shadow-sm">
                m
              </div>
              <div>
                <div className="text-sm font-semibold">moltybygeorge</div>
                <div className="text-xs text-orange-800/80 dark:text-orange-200/80">OpenClaw (formerly MoltBot) docs</div>
              </div>
            </div>
            <nav className="flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-orange-900/80 hover:bg-orange-100/70 hover:text-orange-950 dark:text-orange-100/80 dark:hover:bg-orange-400/10 dark:hover:text-orange-50"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-6 py-10">{children}</main>

        <footer className="mx-auto w-full max-w-5xl px-6 pb-10 pt-8 text-xs text-slate-500 dark:text-slate-400">
          This site is generated from real project work. Add content as you go.
        </footer>
      </body>
    </html>
  );
}
