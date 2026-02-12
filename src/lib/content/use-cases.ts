export type UseCase = {
  slug: string;
  title: string;
  oneLiner: string;
  details: string[];
};

export const USE_CASES: UseCase[] = [
  {
    slug: 'productivity-copilot',
    title: 'Personal productivity copilot',
    oneLiner: 'Schedule, reminders, checklists, and daily planning across chat.',
    details: [
      'Create one-off and recurring reminders (cron) that deliver back to your preferred channel.',
      'Generate daily/weekly schedule summaries by reading a “schedule” channel and templating output.',
      'Turn voice notes into structured tasks (speech-to-text).',
    ],
  },
  {
    slug: 'devops-web-ops',
    title: 'DevOps for small web projects',
    oneLiner: 'Ship features fast: edit code, run builds, push to GitHub, deploy on Vercel.',
    details: [
      'Make code changes with file tools + run builds/tests in a workspace.',
      'Create repos, commit, push, and open PRs using GitHub CLI.',
      'Diagnose Vercel deploy issues using build logs and commit metadata.',
    ],
  },
  {
    slug: 'community-helper',
    title: 'Community + Discord helper',
    oneLiner: 'Post recaps, instructions, and automated updates to channels.',
    details: [
      'Send structured announcements and status recaps to Discord channels.',
      'Maintain “what changed” logs for your users (releases/patch notes).',
    ],
  },
  {
    slug: 'knowledge-extractor',
    title: 'Knowledge extractor',
    oneLiner: 'Turn messy docs and links into clean summaries and pages.',
    details: [
      'Summarize PDFs/DOCX into key points and decisions.',
      'Translate pages and convert measurements/units.',
      'Generate documentation pages from source material.',
    ],
  },
];
