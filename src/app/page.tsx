import Link from 'next/link';
import { USE_CASES } from '@/lib/content/use-cases';

export default function UseCasesPage() {
  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">OpenClaw use cases</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          A practical catalogue of what OpenClaw can do in the real world. These examples are based on actual workflows: building
          websites, scheduling, messaging, and automations.
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {USE_CASES.map((u) => (
          <div
            key={u.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="text-lg font-semibold">{u.title}</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{u.oneLiner}</div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
              {u.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="font-semibold">Suggested structure</div>
        <div className="mt-2 text-slate-700 dark:text-slate-200">
          Next steps: expand use cases with real examples (screenshots, links, and outcomes), then keep a running Activity Log.
        </div>
        <div className="mt-4">
          <Link className="underline" href="/activity">
            Go to Activity →
          </Link>
        </div>
      </section>
    </div>
  );
}
