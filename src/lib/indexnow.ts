import { INDEXNOW_KEY } from "@/lib/backlinks";
import { absoluteUrl, siteOrigin } from "@/lib/absolute-url";
import { INDEXABLE_PAGES } from "@/lib/sitemap-config";

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const;

export function indexNowKeyFileUrl(): string {
  return absoluteUrl(`/${INDEXNOW_KEY}.txt`);
}

export function getIndexableUrls(): string[] {
  return INDEXABLE_PAGES.map((page) => absoluteUrl(page.path));
}

export type IndexNowSubmitResult = {
  ok: boolean;
  submitted: number;
  host: string;
  keyLocation: string;
  endpoints: { url: string; status: number; statusText: string }[];
};

/** Notify Bing & IndexNow partners after deploy or content updates */
export async function submitIndexNow(
  urlList: string[] = getIndexableUrls()
): Promise<IndexNowSubmitResult> {
  const origin = siteOrigin();
  const host = new URL(origin).host;
  const key = process.env.INDEXNOW_API_KEY ?? INDEXNOW_KEY;
  const keyLocation = absoluteUrl(`/${key}.txt`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  const endpoints: IndexNowSubmitResult["endpoints"] = [];

  await Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(payload),
        });
        endpoints.push({
          url: endpoint,
          status: res.status,
          statusText: res.statusText,
        });
      } catch (err) {
        endpoints.push({
          url: endpoint,
          status: 0,
          statusText: err instanceof Error ? err.message : "Request failed",
        });
      }
    })
  );

  const ok = endpoints.some((e) => e.status === 200 || e.status === 202);

  return {
    ok,
    submitted: urlList.length,
    host,
    keyLocation,
    endpoints,
  };
}
