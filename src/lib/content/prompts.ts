export type PromptLog = {
  id: string;
  timestamp: string; // ISO
  prompt: string;
  notes?: string;
};

// moltybygeorge-only prompt log.
// Timestamps are based on Discord message metadata (UTC) when available.
export const PROMPTS: PromptLog[] = [
  {
    id: '2026-02-12-0145Z-moltybygeorge-site',
    timestamp: '2026-02-12T01:45:00Z',
    prompt:
      'Build a website on GitHub titled moltybygeorge to document OpenClaw use cases + integrations, and log prompts/commits/deployments.',
    notes: 'Created lugeorge8/moltybygeorge Next.js docs site with /activity and GitHub commit fetch.',
  },
  {
    id: '2026-02-12-0154Z-vercel-deploy-walkthrough',
    timestamp: '2026-02-12T01:54:00Z',
    prompt: 'Walk me through the Vercel deploy.',
    notes: 'Vercel import steps for the moltybygeorge repo.',
  },
  {
    id: '2026-02-12-0159Z-community-builds-and-orange-theme',
    timestamp: '2026-02-12T01:59:00Z',
    prompt: 'Include 10 applications made using OpenClaw (browse X). Also make the page orange themed.',
    notes: 'Orange theme added; community builds page added (later seeded from public sources until X is connected).',
  },
  {
    id: '2026-02-12-1737Z-mag7-news',
    timestamp: '2026-02-12T17:37:00Z',
    prompt: 'Add a page that compiles 5 news articles within the last week per stock for the Mag7 stocks.',
    notes: 'Added /mag7 using Google News RSS (no API key).',
  },
  {
    id: '2026-02-12-2032Z-integrations-comprehensive',
    timestamp: '2026-02-12T20:32:00Z',
    prompt: 'Add all integrations currently available to connect to OpenClaw.',
    notes: 'Expanded integrations list: channels + built-in tools + nodes + skills ecosystem.',
  },
  {
    id: '2026-02-12-2038Z-seed-community-builds',
    timestamp: '2026-02-12T20:38:00Z',
    prompt: 'Go ahead (seed 10 community builds from public sources until X is connected).',
    notes: 'Community builds populated with public GitHub/web sources.',
  },
  {
    id: '2026-02-12-2040Z-skills-page',
    timestamp: '2026-02-12T20:40:00Z',
    prompt: 'Expand the skills section to its own page.',
    notes: 'Added /skills page and nav link.',
  },
  {
    id: '2026-02-12-2043Z-prompt-log',
    timestamp: '2026-02-12T20:43:00Z',
    prompt: 'Update the prompt log with all relevant prompts, time stamped.',
    notes: 'Updated src/lib/content/prompts.ts to be curated.',
  },
];
