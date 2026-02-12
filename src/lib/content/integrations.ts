export type Integration = {
  key: string;
  name: string;
  whatItDoes: string;
  examples: string[];
};

export const INTEGRATIONS: Integration[] = [
  {
    key: 'discord',
    name: 'Discord',
    whatItDoes: 'Read/post messages, recaps, threads, and channel operations.',
    examples: ['Post a recap to #general', 'Schedule daily posts to a channel', 'React/pin messages'],
  },
  {
    key: 'github',
    name: 'GitHub',
    whatItDoes: 'Create repos, issues, PRs, and inspect CI runs via `gh`.',
    examples: ['Create a new repo', 'Push commits and open PRs', 'Check workflow failures'],
  },
  {
    key: 'vercel',
    name: 'Vercel',
    whatItDoes: 'Track deployments (via commit links) and document release status.',
    examples: ['Show latest deployment per commit', 'Link to build logs', 'Deployment checklist'],
  },
  {
    key: 'google',
    name: 'Google (Calendar/Sheets)',
    whatItDoes: 'Create calendar events, read/edit Sheets, and automate schedule workflows.',
    examples: ['Create a calendar event', 'Pull training data from a Sheet', 'Generate weekly schedule summary'],
  },
  {
    key: 'speech',
    name: 'Speech-to-text',
    whatItDoes: 'Transcribe audio notes into tasks or documentation.',
    examples: ['Transcribe a voice note into a to-do list', 'Extract schedule items from audio'],
  },
];
