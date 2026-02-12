import { XMLParser } from 'fast-xml-parser';

export type NewsItem = {
  title: string;
  link: string;
  source?: string;
  pubDate?: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
});

function arr<T>(x: T | T[] | undefined | null): T[] {
  if (!x) return [];
  return Array.isArray(x) ? x : [x];
}

// Google News RSS. Public + no API key.
export async function fetchGoogleNewsRss(params: {
  query: string;
  limit?: number;
}): Promise<NewsItem[]> {
  const { query, limit = 5 } = params;

  const url = new URL('https://news.google.com/rss/search');
  url.searchParams.set('q', `${query} when:7d`);
  url.searchParams.set('hl', 'en-US');
  url.searchParams.set('gl', 'US');
  url.searchParams.set('ceid', 'US:en');

  const res = await fetch(url.toString(), {
    // Cache a bit to avoid hammering Google.
    next: { revalidate: 60 * 30 },
    headers: {
      'user-agent': 'moltybygeorge/1.0 (+https://github.com/lugeorge8/moltybygeorge)',
    },
  });
  if (!res.ok) {
    throw new Error(`Google News RSS failed: ${res.status}`);
  }

  const xml = await res.text();
  const parsed = parser.parse(xml) as any;
  const items = arr(parsed?.rss?.channel?.item);

  const out: NewsItem[] = items.slice(0, limit).map((it: any) => ({
    title: String(it?.title ?? '').trim(),
    link: String(it?.link ?? '').trim(),
    source: String(it?.source?.['#text'] ?? it?.source ?? '').trim() || undefined,
    pubDate: String(it?.pubDate ?? '').trim() || undefined,
  }));

  return out.filter((x) => x.title && x.link);
}
