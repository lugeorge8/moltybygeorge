import { INTEGRATIONS } from '@/lib/content/integrations';

export default function IntegrationsPage() {
  const groups = {
    'Chat channel': INTEGRATIONS.filter((i) => i.category === 'Chat channel'),
    'Built-in tool': INTEGRATIONS.filter((i) => i.category === 'Built-in tool'),
    'Devices/nodes': INTEGRATIONS.filter((i) => i.category === 'Devices/nodes'),
    'Skills ecosystem': INTEGRATIONS.filter((i) => i.category === 'Skills ecosystem'),
  } as const;

  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Integrations</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-orange-900/70 dark:text-orange-100/70">
          This is a comprehensive list of integrations you can connect to OpenClaw: chat channels, built-in tools, device nodes,
          and the skills ecosystem.
        </p>
      </section>

      {Object.entries(groups).map(([title, items]) => (
        <section key={title} className="grid gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-900/70 dark:text-orange-100/70">
            {title}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {items.map((i) => (
              <div
                key={i.key}
                className="rounded-2xl border border-orange-200/70 bg-white/70 p-6 text-sm shadow-sm backdrop-blur hover:shadow-md dark:border-orange-400/20 dark:bg-black/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-lg font-semibold">{i.name}</div>
                  {i.link ? (
                    <a className="text-xs underline" href={i.link} target="_blank" rel="noreferrer">
                      docs
                    </a>
                  ) : null}
                </div>
                <div className="mt-1 text-orange-900/80 dark:text-orange-100/80">{i.whatItDoes}</div>

                {i.examples && i.examples.length > 0 ? (
                  <>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-orange-900/60 dark:text-orange-100/60">
                      Examples
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-orange-900/80 dark:text-orange-100/80">
                      {i.examples.map((e, idx) => (
                        <li key={idx}>{e}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {i.notes ? (
                  <div className="mt-3 text-xs text-orange-900/60 dark:text-orange-100/60">{i.notes}</div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-2xl border border-orange-200/70 bg-orange-50/60 p-6 text-sm dark:border-orange-400/20 dark:bg-black/20">
        <div className="font-semibold">Ideas to add</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-orange-900/80 dark:text-orange-100/80">
          <li>Permission model: what requires explicit confirmation vs safe defaults</li>
          <li>Reliability notes: retries, rate limits, and best-effort delivery</li>
          <li>Templates: daily schedule posts, inbox triage, release notes, incident reports</li>
        </ul>
      </section>
    </div>
  );
}
