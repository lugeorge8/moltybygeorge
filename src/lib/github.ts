export async function fetchGithubCommits(params: {
  owner: string;
  repo: string;
  limit?: number;
}): Promise<
  Array<{ sha: string; message: string; url: string; date: string; author: string | null }>
> {
  const { owner, repo, limit = 25 } = params;
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`, {
    // GitHub allows unauthenticated requests with low rate limits.
    headers: { Accept: 'application/vnd.github+json' },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API failed: ${res.status}`);
  }

  const json = (await res.json()) as any[];
  return json.map((c) => ({
    sha: String(c.sha).slice(0, 7),
    message: String(c.commit?.message ?? '').split('\n')[0],
    url: String(c.html_url ?? ''),
    date: String(c.commit?.author?.date ?? ''),
    author: c.author?.login ?? null,
  }));
}
