/**
 * Submit canonical URLs to IndexNow (Bing + partners).
 * Usage: npm run seo:indexnow
 * Optional: INDEXNOW_SECRET for remote POST to production API instead.
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danirealstateanddeveloper.com";
const ORIGIN = SITE.replace(/\/$/, "");
const KEY = process.env.INDEXNOW_API_KEY ?? "d4n1realestatedevindex01";

const PATHS = [
  "/",
  "/dani-real-estate-projects-haripur-kpk",
  "/what-we-offer-dani-real-estate-haripur",
  "/about-dani-real-estate-and-developers-llp",
  "/contact-dani-real-estate-haripur",
];

const urlList = PATHS.map((p) => `${ORIGIN}${p === "/" ? "/" : p}`);
const host = new URL(ORIGIN).host;
const keyLocation = `${ORIGIN}/${KEY}.txt`;

const payload = { host, key: KEY, keyLocation, urlList };

const endpoints = ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"];

console.log("IndexNow submit:", { host, keyLocation, urls: urlList.length });

for (const endpoint of endpoints) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  console.log(`${endpoint} → ${res.status} ${res.statusText}`);
}

console.log("Done. Register key in Bing Webmaster Tools if not already:");
console.log(keyLocation);
