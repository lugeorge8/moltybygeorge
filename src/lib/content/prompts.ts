export type PromptLog = {
  id: string;
  timestamp: string; // ISO
  prompt: string;
  notes?: string;
};

// Curated log of notable prompts from this workspace's build history.
// Timestamps are taken from Discord message metadata (UTC) when available.
export const PROMPTS: PromptLog[] = [
  {
    id: '2026-02-04-0850Z-inline-screenshot-preview',
    timestamp: '2026-02-04T08:50:00Z',
    prompt: "Add feature so the screenshot is visible on the augment-answer page for pros (no extra click).",
    notes: 'twodashone admin QoL: inline screenshot preview on spot page.',
  },
  {
    id: '2026-02-04-0850Z-auto-next-spot',
    timestamp: '2026-02-04T08:50:23Z',
    prompt: 'After a pro saves their answer automatically move to the next spot.',
    notes: 'twodashone admin QoL: redirect to next spot after saving.',
  },
  {
    id: '2026-02-04-0856Z-unit-knowledge-and-items',
    timestamp: '2026-02-04T08:56:07Z',
    prompt: 'Add unit knowledge test + stage 2 itemization/component-anvil choice training mode.',
    notes: 'Planned future training modes beyond augments.',
  },
  {
    id: '2026-02-04-0856Z-augment-32-42',
    timestamp: '2026-02-04T08:56:27Z',
    prompt: 'Add 3-2 and 4-2 augment selects (separate sets).',
    notes: 'Prompted adding set modes and stage-based augment pools.',
  },
  {
    id: '2026-02-04-0859Z-store-mode-in-db',
    timestamp: '2026-02-04T08:59:21Z',
    prompt: "Lets store mode in DB (don’t encode stage into set ID).",
    notes: 'Decision: keep IDs stable; add training_sets.mode.',
  },
  {
    id: '2026-02-05-0807Z-homepage-published-sets',
    timestamp: '2026-02-05T08:07:00Z',
    prompt: 'After publishing a set, it should show up on the main homepage.',
    notes: 'twodashone: added homepage entry point to /sets.',
  },
  {
    id: '2026-02-05-0808Z-global-nav',
    timestamp: '2026-02-05T08:08:00Z',
    prompt: "Make sure all site links are intuitively accessible (buttons to navigate everywhere).",
    notes: 'twodashone: global top nav.',
  },
  {
    id: '2026-02-05-0818Z-public-playthrough-ui',
    timestamp: '2026-02-05T08:18:00Z',
    prompt: 'Build the public playthrough UI (like MVP). Keep rule: rerolling pro pick is an auto-loss.',
    notes: 'twodashone: /sets/[id] MVP-style playthrough + reroll-pro-pick loss rule.',
  },
  {
    id: '2026-02-05-0820Z-training-set-title',
    timestamp: '2026-02-05T08:20:00Z',
    prompt: 'Title training sets with [name].patch[patch#].[user input].',
    notes: 'twodashone: added training_sets.title + UI display.',
  },
  {
    id: '2026-02-05-0849Z-fix-upload-too-large',
    timestamp: '2026-02-05T08:49:00Z',
    prompt: 'FUNCTION_PAYLOAD_TOO_LARGE when uploading screenshots; fix it (Vercel).',
    notes: 'twodashone: switched to direct-to-Vercel Blob client uploads.',
  },
  {
    id: '2026-02-05-0907Z-patch-mode-dropdowns',
    timestamp: '2026-02-11T05:09:00Z',
    prompt: 'Combine augments and stage label; create patch dropdown (16.01–16.10).',
    notes: 'twodashone: patch dropdown + stage label derived from mode.',
  },
  {
    id: '2026-02-11-0523Z-remove-spot-screenshot-upload',
    timestamp: '2026-02-11T05:23:00Z',
    prompt: 'Remove upload screenshot choose-file feature on spot page; use screenshot library only.',
    notes: 'twodashone: removed per-spot file upload UI.',
  },
  {
    id: '2026-02-11-0526Z-redirect-new-set-to-spot1',
    timestamp: '2026-02-11T05:26:00Z',
    prompt: 'After creating a new set, automatically redirect to spot 1.',
    notes: 'twodashone admin flow improvement.',
  },
  {
    id: '2026-02-11-0527Z-scoring',
    timestamp: '2026-02-11T05:27:00Z',
    prompt: 'Add scoring feature when players complete playing a set (how many right).',
    notes: 'twodashone public sets: correct/total scoring.',
  },
  {
    id: '2026-02-11-0530Z-screenshot-counts',
    timestamp: '2026-02-11T05:30:00Z',
    prompt: 'Admin: show how many screenshots are available for the patch when creating a set.',
    notes: 'twodashone admin new set: screenshot counts per patch+mode.',
  },
  {
    id: '2026-02-11-0532Z-remove-mvp-trainer',
    timestamp: '2026-02-11T05:32:25Z',
    prompt: 'Remove MVP trainer entirely.',
    notes: 'twodashone: removed /train and MVP dataset; kept generator and sets.',
  },
  {
    id: '2026-02-11-0532Z-patch-16-4-augment-updates',
    timestamp: '2026-02-11T05:32:25Z',
    prompt: 'Read patch 16.4 notes; identify new/modified augments; update augment database.',
    notes: 'twodashone: updated src/data/augments.json for patch 16.4.',
  },
  {
    id: '2026-02-11-0613Z-gamegym-repo-and-landing',
    timestamp: '2026-02-11T06:13:00Z',
    prompt: 'Create new GitHub project gamegym and build a landing page with a demo button using provided docs.',
    notes: 'Created lugeorge8/gamegym, Next.js landing, demo button via NEXT_PUBLIC_DEMO_URL.',
  },
  {
    id: '2026-02-11-0717Z-gamegym-orange-theme',
    timestamp: '2026-02-11T07:17:00Z',
    prompt: 'Add image assets and make the GameGym site colorful (orange themed).',
    notes: 'gamegym: orange theme + SVG assets.',
  },
  {
    id: '2026-02-11-0738Z-fix-vercel-commit-author',
    timestamp: '2026-02-11T07:38:00Z',
    prompt: 'Fix Vercel GitHub commit author mapping error by rewriting commit authors to my noreply email.',
    notes: 'gamegym: rebase + force-push so Vercel can associate commit author.',
  },
  {
    id: '2026-02-11-0741Z-expand-classes-and-icons',
    timestamp: '2026-02-11T07:41:00Z',
    prompt: 'Expand classes section with images; add images/icons to every textbox.',
    notes: 'gamegym landing: bigger class cards + icons in cards.',
  },
  {
    id: '2026-02-11-0743Z-hover-boxes-only',
    timestamp: '2026-02-11T07:43:00Z',
    prompt: 'Hover should highlight individual boxes only (every textbox), not individual text.',
    notes: 'gamegym landing: hover interaction changed to boxes/cards only.',
  },
  {
    id: '2026-02-12-0145Z-moltybygeorge-site',
    timestamp: '2026-02-12T01:45:00Z',
    prompt: 'Build moltybygeorge site documenting OpenClaw use cases, integrations, prompts w/ timestamps, git commits, and Vercel deployments.',
    notes: 'Created lugeorge8/moltybygeorge Next.js docs site with /activity and GitHub commit fetch.',
  },
  {
    id: '2026-02-12-1757Z-mag7-news-page',
    timestamp: '2026-02-12T17:37:00Z',
    prompt: 'Add a page compiling 5 news articles (last week) per stock for the Mag7.',
    notes: 'moltybygeorge: /mag7 using Google News RSS.',
  },
  {
    id: '2026-02-12-1959Z-10-community-builds-and-orange-theme',
    timestamp: '2026-02-12T01:59:00Z',
    prompt: 'Include 10 applications made using OpenClaw (browse X). Make site orange themed.',
    notes: 'Orange theme added; community builds page scaffolded (X browsing requires auth).',
  },
  {
    id: '2026-02-12-2032Z-add-all-integrations',
    timestamp: '2026-02-12T20:32:00Z',
    prompt: 'Add all integrations currently available to connect to OpenClaw.',
    notes: 'Expanded integrations list (channels + built-in tools + nodes + skills ecosystem).',
  },
  {
    id: '2026-02-12-2040Z-expand-skills-page',
    timestamp: '2026-02-12T20:40:00Z',
    prompt: 'Expand the skills section to its own page.',
    notes: 'moltybygeorge: added /skills page.',
  },
];
