import { PROMPTS } from '@/lib/content/prompts';
import { fetchGithubCommits } from '@/lib/github';

export const dynamic = 'force-dynamic';

function fmt(ts: string) {
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return ts;
  }
}

export default async function ActivityPage() {
  const commits = await fetchGithubCommits({ owner: 'lugeorge8', repo: 'moltybygeorge', limit: 20 }).catch(() => []);

  return (
    <div className="grid gap-10">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Activity log</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Prompts, commits, and deployments. This is designed to be exhaustive.
        </p>
      </section>

      <section className="grid gap-3">
        <div className="text-sm font-semibold">Prompt log</div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
          {PROMPTS.length === 0 ? (
            <div className="text-slate-600 dark:text-slate-400">No prompts logged yet.</div>
          ) : (
            <ul className="grid gap-3">
              {PROMPTS
                .slice()
                .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
                .map((p) => (
                  <li key={p.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <div className="text-xs text-slate-500 dark:text-slate-400">{fmt(p.timestamp)}</div>
                    <div className="mt-1 font-semibold">{p.prompt}</div>
                    {p.notes ? <div className="mt-1 text-slate-600 dark:text-slate-300">{p.notes}</div> : null}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          To make this exhaustive, we can auto-append prompts via a simple endpoint or by committing markdown files.
        </div>
      </section>

      <section className="grid gap-3">
        <div className="text-sm font-semibold">Git commits</div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
          {commits.length === 0 ? (
            <div className="text-slate-600 dark:text-slate-400">No commit data available (or API rate limit hit).</div>
          ) : (
            <ul className="grid gap-2">
              {commits.map((c) => (
                <li key={c.sha} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{c.message}</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{fmt(c.date)} · {c.sha}{c.author ? ` · ${c.author}` : ''}</div>
                  </div>
                  <a className="text-xs underline" href={c.url} target="_blank" rel="noreferrer">
                    View
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="text-sm font-semibold">Vercel deployments</div>
        <div className="mt-2 text-slate-700 dark:text-slate-200">
          Recommended approach: add a Vercel Deploy Hook that posts deployment metadata into this repo (or provide a Vercel token
          to fetch deployments at build time).
        </div>
      </section>
    </div>
  );
}
