import Link from 'next/link';
import { COMMUNITY_BUILDS } from '@/lib/content/community-builds';

export default function CommunityPage() {
  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Community builds</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-orange-900/70 dark:text-orange-100/70">
          A curated list of applications built using OpenClaw.
        </p>
      </section>

      {COMMUNITY_BUILDS.length === 0 ? (
        <section className="rounded-2xl border border-orange-200/70 bg-white/70 p-6 text-sm shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-black/20">
          <div className="font-semibold">Not populated yet</div>
          <p className="mt-2 text-orange-900/80 dark:text-orange-100/80">
            I can’t browse X from the server yet because the X search tool (bird) requires your cookies
            (<span className="font-mono">auth_token</span> + <span className="font-mono">ct0</span>) or a connected browser
            profile.
          </p>
          <div className="mt-4 grid gap-2 text-orange-900/80 dark:text-orange-100/80">
            <div className="font-semibold">Two ways to enable this:</div>
            <ol className="list-decimal pl-5">
              <li>Send me <span className="font-mono">auth_token</span> + <span className="font-mono">ct0</span> (from your logged-in X session).</li>
              <li>Or log into X in Chrome on the server profile and we’ll point bird at that cookie store.</li>
            </ol>
          </div>
          <div className="mt-4">
            <Link className="underline" href="/">
              ← Back
            </Link>
          </div>
        </section>
      ) : (
        <section className="grid gap-3">
          {COMMUNITY_BUILDS.slice(0, 50).map((b) => (
            <a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-orange-200/70 bg-white/70 p-6 text-sm shadow-sm backdrop-blur hover:shadow-md dark:border-orange-400/20 dark:bg-black/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-lg font-semibold">{b.name}</div>
                <div className="text-xs text-orange-900/60 dark:text-orange-100/60">{b.author ?? ''}</div>
              </div>
              <div className="mt-2 text-orange-900/80 dark:text-orange-100/80">{b.summary}</div>
            </a>
          ))}
        </section>
      )}
    </div>
  );
}
