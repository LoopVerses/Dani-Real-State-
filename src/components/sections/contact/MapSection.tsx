import { CONTACT } from "@/lib/site";

const HARIPUR_MAP_EMBED =
  "https://maps.google.com/maps?q=Haripur,+Khyber+Pakhtunkhwa,+Pakistan&hl=en&z=13&output=embed";

export default function MapSection() {
  return (
    <section className="bg-dark-2 px-4 sm:px-6 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl text-white text-center mb-2">
          Find Us Here
        </h2>
        <p className="text-text-muted text-sm text-center mb-8 max-w-lg mx-auto">
          {CONTACT.address} — visit by appointment or message us on WhatsApp first.
        </p>
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-primary/20">
          <iframe
            title="Dani Real Estate — Haripur office area"
            src={HARIPUR_MAP_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
