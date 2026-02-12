export type PromptLog = {
  id: string;
  timestamp: string; // ISO
  prompt: string;
  notes?: string;
};

// Seed with a couple examples; you can append logs as you go.
export const PROMPTS: PromptLog[] = [
  {
    id: 'seed-1',
    timestamp: new Date().toISOString(),
    prompt: 'Post a recap of recent updates in the Discord server.',
    notes: 'Demonstrates messaging integration + summarization.',
  },
];
