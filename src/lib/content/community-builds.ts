export type CommunityBuild = {
  name: string;
  summary: string;
  url: string;
  author?: string;
  tags?: string[];
};

// You asked for builds sourced from X; we don't have X auth wired yet.
// For now, we list 10 notable OpenClaw ecosystem projects from public GitHub/web sources.
export const COMMUNITY_BUILDS: CommunityBuild[] = [
  {
    name: 'OpenClaw (core)',
    summary: 'The main OpenClaw project: gateway + agent runtime + tools.',
    url: 'https://github.com/openclaw/openclaw',
    author: 'openclaw',
    tags: ['core'],
  },
  {
    name: 'openclaw.ai (website)',
    summary: 'Marketing/docs website repo for OpenClaw.',
    url: 'https://github.com/openclaw/openclaw.ai',
    author: 'openclaw',
    tags: ['site'],
  },
  {
    name: 'ClawHub (skill registry)',
    summary: 'Public skill registry for OpenClaw/Clawdbot.',
    url: 'https://github.com/openclaw/clawhub',
    author: 'openclaw',
    tags: ['skills'],
  },
  {
    name: 'openclaw/skills archive',
    summary: 'Archive of skills that are published on clawdhub.com.',
    url: 'https://github.com/openclaw/skills',
    author: 'openclaw',
    tags: ['skills'],
  },
  {
    name: 'moltworker (Cloudflare Workers)',
    summary: 'Run OpenClaw/Moltbot in a Cloudflare Workers sandbox.',
    url: 'https://github.com/cloudflare/moltworker',
    author: 'cloudflare',
    tags: ['deployment'],
  },
  {
    name: 'openclaw-composio',
    summary: 'Fork with Composio plugin for easier tool authentication.',
    url: 'https://github.com/ComposioHQ/openclaw-composio',
    author: 'ComposioHQ',
    tags: ['integrations'],
  },
  {
    name: 'awesome-openclaw-skills',
    summary: 'Curated list of OpenClaw skills and examples.',
    url: 'https://github.com/VoltAgent/awesome-openclaw-skills',
    author: 'VoltAgent',
    tags: ['skills', 'awesome-list'],
  },
  {
    name: 'awesome-openclaw (ecosystem directory)',
    summary: 'Curated directory of OpenClaw ecosystem projects.',
    url: 'https://github.com/rohitg00/awesome-openclaw',
    author: 'rohitg00',
    tags: ['awesome-list'],
  },
  {
    name: 'OpenClaw runbook',
    summary: 'Practical notes on running OpenClaw cheaply and safely.',
    url: 'https://github.com/digitalknk/openclaw-runbook',
    author: 'digitalknk',
    tags: ['ops'],
  },
  {
    name: 'openclaw-skills (community)',
    summary: 'Community skill library focused on finance/automation examples.',
    url: 'https://github.com/BankrBot/openclaw-skills',
    author: 'BankrBot',
    tags: ['skills'],
  },
];
