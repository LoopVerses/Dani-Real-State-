import { CONTACT } from "@/lib/site";
import { INDEXNOW_KEY } from "@/lib/backlinks";
import { absoluteUrl } from "@/lib/absolute-url";

/** Supplemental head links — authority, IndexNow key discovery, AI/llms.txt */
export default function HeadLinks() {
  return (
    <>
      <link rel="author" href="https://loopverses.com/" />
      <link rel="me" href={CONTACT.whatsappUrl} />
      <link rel="help" href={absoluteUrl("/llms.txt")} title="LLM site summary" />
      <link rel="sitemap" type="application/xml" href={absoluteUrl("/sitemap.xml")} />
      <link
        rel="alternate"
        type="text/plain"
        href={absoluteUrl(`/${INDEXNOW_KEY}.txt`)}
        title="IndexNow verification key"
      />
    </>
  );
}
