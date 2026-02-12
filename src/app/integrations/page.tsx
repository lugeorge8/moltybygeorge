import { INTEGRATIONS } from '@/lib/content/integrations';

export default function IntegrationsPage() {
  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Integrations</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          OpenClaw can route actions through integrations (messaging, GitHub, Google, audio transcription, etc.). This page is meant
          to be a practical reference with example tasks.
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {INTEGRATIONS.map((i) => (
          <div
            key={i.key}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="text-lg font-semibold">{i.name}</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i.whatItDoes}</div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Examples</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
              {i.examples.map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="font-semibold">Ideas to add</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-200">
          <li>Integration permission model (what requires explicit confirmation)</li>
          <li>Reliability notes: retries, rate limits, and “best effort” delivery</li>
          <li>Templates: reminders, recaps, patch-note updates, and incident reports</li>
        </ul>
      </section>
    </div>
  );
}
