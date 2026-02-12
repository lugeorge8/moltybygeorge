import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'moltybygeorge',
  description: 'OpenClaw use cases, integrations, and activity log.',
};

const nav = [
  { href: '/', label: 'Use cases' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/activity', label: 'Activity' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-950 dark:bg-black dark:text-slate-50">
        <header className="border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-black/40">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-black">
                m
              </div>
              <div>
                <div className="text-sm font-semibold">moltybygeorge</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">OpenClaw (formerly MoltBot) docs</div>
              </div>
            </div>
            <nav className="flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
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
