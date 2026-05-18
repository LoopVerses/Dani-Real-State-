import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function LegacyContactRedirect() {
  permanentRedirect(ROUTES.contact);
}
