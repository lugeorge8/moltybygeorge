export type Integration = {
  key: string;
  name: string;
  category: 'Chat channel' | 'Built-in tool' | 'Devices/nodes' | 'Skills ecosystem';
  whatItDoes: string;
  examples?: string[];
  link?: string;
  notes?: string;
};

// "Integrations" here means: things OpenClaw can connect to / act through.
// This list is intentionally broad: chat channels + built-in tools + device nodes + skill ecosystem.
export const INTEGRATIONS: Integration[] = [
  // Chat channels (from Clawdbot/OpenClaw docs)
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    category: 'Chat channel',
    whatItDoes: 'Message routing via WhatsApp (QR pairing).',
    link: 'https://docs.openclaw.ai/channels/whatsapp',
  },
  {
    key: 'telegram',
    name: 'Telegram',
    category: 'Chat channel',
    whatItDoes: 'Bot API via grammY; supports groups.',
    link: 'https://docs.openclaw.ai/channels/telegram',
  },
  {
    key: 'discord',
    name: 'Discord',
    category: 'Chat channel',
    whatItDoes: 'Discord Bot API; servers, channels, DMs.',
    link: 'https://docs.openclaw.ai/channels/discord',
  },
  {
    key: 'slack',
    name: 'Slack',
    category: 'Chat channel',
    whatItDoes: 'Slack app via Bolt SDK; DMs + channels.',
    link: 'https://docs.openclaw.ai/channels/slack',
  },
  {
    key: 'googlechat',
    name: 'Google Chat',
    category: 'Chat channel',
    whatItDoes: 'Google Chat API / webhook-based app.',
    link: 'https://docs.openclaw.ai/channels/googlechat',
  },
  {
    key: 'signal',
    name: 'Signal',
    category: 'Chat channel',
    whatItDoes: 'Signal via signal-cli.',
    link: 'https://docs.openclaw.ai/channels/signal',
  },
  {
    key: 'imessage',
    name: 'iMessage (native)',
    category: 'Chat channel',
    whatItDoes: 'macOS-only legacy iMessage integration.',
    link: 'https://docs.openclaw.ai/channels/imessage',
  },
  {
    key: 'bluebubbles',
    name: 'BlueBubbles (iMessage)',
    category: 'Chat channel',
    whatItDoes: 'Recommended iMessage channel via BlueBubbles macOS server.',
    link: 'https://docs.openclaw.ai/channels/bluebubbles',
  },
  {
    key: 'mattermost',
    name: 'Mattermost',
    category: 'Chat channel',
    whatItDoes: 'Self-hosted Slack-like chat (plugin).',
    link: 'https://docs.openclaw.ai/channels/mattermost',
  },
  {
    key: 'msteams',
    name: 'Microsoft Teams',
    category: 'Chat channel',
    whatItDoes: 'Bot Framework; enterprise support (plugin).',
    link: 'https://docs.openclaw.ai/channels/msteams',
  },
  {
    key: 'nextcloudtalk',
    name: 'Nextcloud Talk',
    category: 'Chat channel',
    whatItDoes: 'Self-hosted chat via Nextcloud Talk (plugin).',
    link: 'https://docs.openclaw.ai/channels/nextcloud-talk',
  },
  {
    key: 'matrix',
    name: 'Matrix',
    category: 'Chat channel',
    whatItDoes: 'Matrix protocol (plugin).',
    link: 'https://docs.openclaw.ai/channels/matrix',
  },
  {
    key: 'nostr',
    name: 'Nostr',
    category: 'Chat channel',
    whatItDoes: 'Decentralized DMs via NIP-04 (plugin).',
    link: 'https://docs.openclaw.ai/channels/nostr',
  },
  {
    key: 'tlon',
    name: 'Tlon',
    category: 'Chat channel',
    whatItDoes: 'Urbit-based messenger (plugin).',
    link: 'https://docs.openclaw.ai/channels/tlon',
  },
  {
    key: 'zalo',
    name: 'Zalo',
    category: 'Chat channel',
    whatItDoes: 'Zalo Bot API (plugin).',
    link: 'https://docs.openclaw.ai/channels/zalo',
  },
  {
    key: 'zalouser',
    name: 'Zalo Personal',
    category: 'Chat channel',
    whatItDoes: 'Zalo personal account via QR login (plugin).',
    link: 'https://docs.openclaw.ai/channels/zalouser',
  },
  {
    key: 'webchat',
    name: 'WebChat',
    category: 'Chat channel',
    whatItDoes: 'Built-in Web UI over WebSocket.',
    link: 'https://docs.openclaw.ai/web/webchat',
  },

  // Built-in tools (capabilities exposed to the agent)
  {
    key: 'cron',
    name: 'Cron scheduler',
    category: 'Built-in tool',
    whatItDoes: 'Persistent scheduled tasks (one-off reminders and recurring jobs).',
    link: 'https://docs.openclaw.ai/automation/cron-jobs',
  },
  {
    key: 'browser',
    name: 'Browser automation',
    category: 'Built-in tool',
    whatItDoes: 'Control a browser to click/type/navigate for web workflows.',
  },
  {
    key: 'web',
    name: 'Web search + fetch',
    category: 'Built-in tool',
    whatItDoes: 'Search the web and fetch pages into readable text for research.',
  },
  {
    key: 'files',
    name: 'Local files + shell',
    category: 'Built-in tool',
    whatItDoes: 'Read/write/edit files and run commands (build, git, scripts).',
  },
  {
    key: 'vision-audio',
    name: 'Vision + audio',
    category: 'Built-in tool',
    whatItDoes: 'Image understanding and speech-to-text transcription.',
  },

  // Devices/nodes
  {
    key: 'nodes',
    name: 'Paired devices (nodes)',
    category: 'Devices/nodes',
    whatItDoes: 'Approve iOS/Android/macOS nodes for camera/screen/location actions.',
    link: 'https://docs.openclaw.ai/start/pairing',
  },

  // Skills ecosystem
  {
    key: 'skills',
    name: 'Skills (ClawHub)',
    category: 'Skills ecosystem',
    whatItDoes: 'Install and publish skills to extend OpenClaw with new tools/workflows.',
    link: 'https://clawdhub.com/skills',
  },
];
