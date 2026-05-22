import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function LegacyWhatWeOfferRedirect() {
  permanentRedirect(ROUTES.whatWeOffer);
}
