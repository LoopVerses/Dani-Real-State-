"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How do I schedule a property visit?",
    a: "Contact us via phone, email, or the form above. Our team will arrange a convenient viewing within 24-48 hours.",
  },
  {
    q: "Do you offer installment payment plans?",
    a: "Yes, we partner with leading banks and developers to offer flexible installment plans on select properties.",
  },
  {
    q: "Are your properties RERA/PBA certified?",
    a: "All our listings are verified and comply with RERA and PBA regulations. Legal documentation is provided for every transaction.",
  },
  {
    q: "Which cities do you currently operate in?",
    a: "We operate in Karachi, Lahore, and Islamabad with plans to expand to more cities across Pakistan.",
  },
  {
    q: "How long does the complete buying process take?",
    a: "Typically 4-8 weeks from offer acceptance to handover, depending on property type and financing arrangements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-4 bg-dark-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-primary/20 rounded-lg overflow-hidden bg-dark-3"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
