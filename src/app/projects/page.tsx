import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function LegacyProjectsRedirect() {
  permanentRedirect(ROUTES.projects);
}
