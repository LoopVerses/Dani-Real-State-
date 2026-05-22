import { NextResponse } from "next/server";
import { submitIndexNow, getIndexableUrls, indexNowKeyFileUrl } from "@/lib/indexnow";

export const dynamic = "force-dynamic";

/** GET — verify IndexNow key file URL and indexable URL list */
export async function GET() {
  return NextResponse.json({
    keyFile: indexNowKeyFileUrl(),
    urls: getIndexableUrls(),
    hint: "POST with header x-indexnow-secret (if INDEXNOW_SECRET is set) to submit URLs to Bing/IndexNow",
  });
}

/** POST — submit all canonical URLs to IndexNow (after deploy) */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    const provided = request.headers.get("x-indexnow-secret");
    if (provided !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let urlList: string[] | undefined;
  try {
    const body = await request.json().catch(() => null);
    if (body && Array.isArray(body.urlList)) {
      urlList = body.urlList.filter((u: unknown) => typeof u === "string");
    }
  } catch {
    /* use default list */
  }

  const result = await submitIndexNow(urlList);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
