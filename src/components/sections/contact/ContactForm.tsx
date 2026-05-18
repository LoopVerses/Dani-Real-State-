"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Share2,
  Camera,
  MessageCircle,
  Link2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
  "w-full bg-dark-3 border border-primary/20 focus:border-primary rounded-lg px-4 py-3 text-white placeholder:text-text-muted transition outline-none";

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
    setToast({ type: "success", message: "We'll contact you within 24 hours!" });
    setForm({ name: "", email: "", phone: "", city: "", propertyType: "", message: "" });
    setErrors({});
  };

  return (
    <section
      ref={ref}
      className="py-12 md:py-24 px-4 bg-dark relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}
    >
      {toast && (
        <div
          className={cn(
            "fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-sm font-medium",
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          )}
        >
          {toast.message}
        </div>
      )}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-display text-3xl text-white mb-6">Send Us a Message</h2>
          {(
            [
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ] as const
          ).map(({ key, label, type }) => (
            <div key={key}>
              <label className="text-sm text-text-muted mb-1 block">{label}</label>
              <input
                type={type}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className={inputClass}
                placeholder={label}
              />
              {errors[key] && <p className="text-red-400 text-xs mt-1">{errors[key]}</p>}
            </div>
          ))}
          <div>
            <label className="text-sm text-text-muted mb-1 block">City of Interest</label>
            <select
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className={inputClass}
            >
              <option value="">Select city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className="text-sm text-text-muted mb-1 block">Property Type</label>
            <select
              value={form.propertyType}
              onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
              className={inputClass}
            >
              <option value="">Select type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot</option>
            </select>
            {errors.propertyType && (
              <p className="text-red-400 text-xs mt-1">{errors.propertyType}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-text-muted mb-1 block">Message</label>
            <textarea
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
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="bg-dark-3 border border-primary/10 rounded-xl p-8 h-fit">
          <h3 className="font-display text-2xl text-white mb-6">Our Office</h3>
          <ul className="space-y-5 text-text-muted">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:+923001234567" className="hover:text-primary transition-colors">
                +92 300 1234567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:info@danirealestate.pk" className="hover:text-primary transition-colors">
                info@danirealestate.pk
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              Plot 45, Clifton Block 5, Karachi, Sindh
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              Monday – Saturday: 9 AM – 7 PM
            </li>
          </ul>
          <div className="flex gap-4 mt-8 pt-8 border-t border-primary/10">
            {[Share2, Camera, MessageCircle, Link2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-text-muted hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
