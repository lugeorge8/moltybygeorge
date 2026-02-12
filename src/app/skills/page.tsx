import Link from 'next/link';

const sections = [
  {
    title: 'What is a skill?',
    body: [
      'A skill is a folder that contains a SKILL.md (instructions) plus supporting files (scripts, prompts, assets).',
      'Skills extend OpenClaw with new tools and best-practice workflows (e.g. GitHub, Notion, Whisper transcription, weather).',
    ],
  },
  {
    title: 'Where skills come from',
    body: [
      'Bundled skills ship with OpenClaw/Clawdbot (available immediately).',
      'Community skills can be discovered and installed from ClawHub (the public skill registry).',
    ],
    links: [
      { label: 'ClawHub directory', href: 'https://clawdhub.com/skills' },
      { label: 'openclaw/skills archive', href: 'https://github.com/openclaw/skills' },
    ],
  },
  {
    title: 'Common skill patterns',
    body: [
      '“Read → plan → act” workflows: pull context (files/web/messages), then execute a safe series of tool calls.',
      'Gated capabilities: skills can require env vars, secrets, or explicit user confirmation before acting externally.',
      'Composable automation: combine cron + messaging + a domain skill to build proactive workflows.',
    ],
  },
  {
    title: 'Ideas for your instance (quick wins)',
    body: [
      'Schedule helper: daily schedule posts + “today/7-day” triggers.',
      'Repo shipper: create repos, scaffold Next.js apps, push commits, and track deployments.',
      'Transcription inbox: voice note → transcript → checklist/tasks → reminder cron.',
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-orange-900/70 dark:text-orange-100/70">
          Skills are how OpenClaw learns repeatable workflows. Think: mini playbooks that bundle instructions + scripts so the agent
          can act reliably.
        </p>
      </section>

      <section className="grid gap-3">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-orange-200/70 bg-white/70 p-6 text-sm shadow-sm backdrop-blur dark:border-orange-400/20 dark:bg-black/20"
          >
            <div className="text-lg font-semibold">{s.title}</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-orange-900/80 dark:text-orange-100/80">
              {s.body.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {s.links && s.links.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {s.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold underline decoration-orange-300/70 underline-offset-2 hover:decoration-orange-500"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-orange-200/70 bg-orange-50/60 p-6 text-sm dark:border-orange-400/20 dark:bg-black/20">
        <div className="font-semibold">Next steps</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-orange-900/80 dark:text-orange-100/80">
          <li>Add a “Skills catalog” page that lists installed skills on your instance (requires runtime introspection).</li>
          <li>Add per-skill pages with examples and configuration.</li>
        </ul>
        <div className="mt-4">
          <Link className="underline" href="/integrations">
            ← Back to Integrations
          </Link>
        </div>
      </section>
    </div>
  );
}
