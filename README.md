# moltybygeorge

A lightweight documentation site for OpenClaw (formerly MoltBot):
- Use cases
- Integrations
- Activity log (prompts, commits, deployments)

## Run locally

```bash
npm install
npm run dev
```

## Ideas for making the Activity log exhaustive
- Store prompts as markdown files under `content/prompts/` and render them.
- Add a small webhook endpoint (protected) that appends prompt entries.
- Fetch Git commits from GitHub API (already implemented).
- Fetch Vercel deployments if you provide a token / project id as env vars.
