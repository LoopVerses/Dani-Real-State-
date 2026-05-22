"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { CONTACT, mailtoLink, whatsappLink } from "@/lib/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  propertyType?: string;
  message?: string;
}

const inputClass =
  "w-full bg-dark-3 border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted transition outline-none text-base";

export default function ContactForm() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px" });
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (form.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Phone must be at least 10 digits";
    }
    if (!form.city) newErrors.city = "Please select a city";
    if (!form.propertyType) newErrors.propertyType = "Please select property type";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setToast({ type: "error", message: "Please fix the errors above" });
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Property type: ${form.propertyType}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = mailtoLink(`Website inquiry — ${form.name}`, body);
    setToast({ type: "success", message: "Opening your email app to send the message…" });
    setForm({ name: "", email: "", phone: "", city: "", propertyType: "", message: "" });
    setErrors({});
  };

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 sm:px-6 bg-dark relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      {toast && (
        <div
          role="status"
          className={cn(
            "fixed top-24 right-4 left-4 sm:left-auto z-50 max-w-sm mx-auto sm:mx-0 px-6 py-4 rounded-lg shadow-lg text-sm font-medium",
            toast.type === "success"
              ? "bg-green-600 text-foreground"
              : "bg-red-600 text-foreground"
          )}
        >
          {toast.message}
        </div>
      )}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12">
        <form onSubmit={handleSubmit} className="space-y-5 order-2 lg:order-1">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Send Us a Message</h2>
          <p className="text-text-muted text-sm mb-6">
            Fill in the form and we will open your email app addressed to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
          {(
            [
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Your Email", type: "email" },
              { key: "phone", label: "Phone / WhatsApp", type: "tel" },
            ] as const
          ).map(({ key, label, type }) => (
            <div key={key}>
              <label htmlFor={key} className="text-sm text-text-muted mb-1 block">
                {label}
              </label>
              <input
                id={key}
                type={type}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className={inputClass}
                placeholder={label}
                autoComplete={key === "email" ? "email" : key === "phone" ? "tel" : "name"}
              />
              {errors[key] && <p className="text-red-400 text-xs mt-1">{errors[key]}</p>}
            </div>
          ))}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="city" className="text-sm text-text-muted mb-1 block">
                City of Interest
              </label>
              <select
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputClass}
              >
                <option value="">Select city</option>
                <option value="Haripur">Haripur</option>
                <option value="Abbottabad">Abbottabad</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Mansehra">Mansehra</option>
                <option value="Other">Other</option>
              </select>
              {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="propertyType" className="text-sm text-text-muted mb-1 block">
                Property Type
              </label>
              <select
                id="propertyType"
                value={form.propertyType}
                onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                className={inputClass}
              >
                <option value="">Select type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Plot">Plot / Land</option>
                <option value="Investment">Investment</option>
              </select>
              {errors.propertyType && (
                <p className="text-red-400 text-xs mt-1">{errors.propertyType}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-text-muted mb-1 block">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className={inputClass}
              placeholder="Tell us about your requirements..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" className="w-full sm:flex-1">
              Send via Email
            </Button>
            <Button
              href={whatsappLink()}
              variant="whatsapp"
              className="w-full sm:flex-1"
              external
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Instead
            </Button>
          </div>
        </form>

        <div className="bg-dark-3 border border-primary/10 rounded-xl p-6 sm:p-8 h-fit order-1 lg:order-2">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">Get In Touch</h3>
          <p className="text-text-muted text-sm mb-6">
            Call, email, or message us on WhatsApp — we typically respond within one business day.
          </p>
          <ul className="space-y-5 text-text-muted text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-primary transition-colors">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 break-all">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              {CONTACT.hours}
            </li>
          </ul>
          <div className="mt-8 pt-8 border-t border-primary/10 flex flex-col sm:flex-row gap-3">
            <Button href={whatsappLink()} variant="whatsapp" className="w-full" external>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
            <Button href={`mailto:${CONTACT.email}`} variant="outline" className="w-full" external>
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
