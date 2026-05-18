import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function LegacyAboutRedirect() {
  permanentRedirect(ROUTES.about);
}
