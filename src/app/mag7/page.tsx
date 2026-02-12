import { fetchGoogleNewsRss } from '@/lib/news/google-news';

export const dynamic = 'force-dynamic';

const MAG7 = [
  { ticker: 'AAPL', name: 'Apple' },
  { ticker: 'MSFT', name: 'Microsoft' },
  { ticker: 'AMZN', name: 'Amazon' },
  { ticker: 'GOOGL', name: 'Alphabet' },
  { ticker: 'META', name: 'Meta' },
  { ticker: 'NVDA', name: 'NVIDIA' },
  { ticker: 'TSLA', name: 'Tesla' },
] as const;

export default async function Mag7NewsPage() {
  const results = await Promise.all(
    MAG7.map(async (s) => {
      const items = await fetchGoogleNewsRss({ query: `${s.ticker} stock`, limit: 5 }).catch(() => []);
      return { ...s, items };
    }),
  );

  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Mag7 news (last 7 days)</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-orange-900/70 dark:text-orange-100/70">
          5 recent articles per stock (Google News RSS). Use this as a quick weekly scan.
        </p>
      </section>

      <section className="grid gap-4">
        {results.map((s) => (
          <div
            key={s.ticker}
            className="rounded-2xl border border-orange-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-black/20"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="text-lg font-semibold">
                {s.name} <span className="text-orange-900/60 dark:text-orange-100/60">({s.ticker})</span>
              </div>
              <div className="text-xs text-orange-900/60 dark:text-orange-100/60">last 7 days</div>
            </div>

            {s.items.length === 0 ? (
              <div className="mt-3 text-sm text-orange-900/70 dark:text-orange-100/70">No results (or fetch failed).</div>
            ) : (
              <ul className="mt-4 grid gap-2">
                {s.items.map((it) => (
                  <li key={it.link} className="rounded-xl border border-orange-200/60 bg-white/60 p-3 text-sm dark:border-orange-400/15 dark:bg-black/15">
                    <a className="font-semibold underline decoration-orange-300/70 underline-offset-2 hover:decoration-orange-500" href={it.link} target="_blank" rel="noreferrer">
                      {it.title}
                    </a>
                    <div className="mt-1 text-xs text-orange-900/60 dark:text-orange-100/60">
                      {it.source ? `${it.source} · ` : ''}{it.pubDate ? new Date(it.pubDate).toLocaleString() : ''}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-orange-200/70 bg-orange-50/60 p-6 text-sm dark:border-orange-400/20 dark:bg-black/20">
        <div className="font-semibold">Notes / ideas</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-orange-900/80 dark:text-orange-100/80">
          <li>Add sentiment tags (manual or LLM summarization)</li>
          <li>Add a per-stock weekly summary paragraph</li>
          <li>Track “seen” links and only show new ones</li>
        </ul>
      </section>
    </div>
  );
}
