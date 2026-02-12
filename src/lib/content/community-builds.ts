export type CommunityBuild = {
  name: string;
  summary: string;
  url: string; // ideally X post URL
  author?: string;
  date?: string; // ISO or human
  tags?: string[];
};

// NOTE: User requested these to be sourced from X.
// This list is intentionally empty until we can authenticate to X (bird skill requires auth_token + ct0).
export const COMMUNITY_BUILDS: CommunityBuild[] = [];
