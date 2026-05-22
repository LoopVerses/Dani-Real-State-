import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

const variants = {
  primary:
    "bg-primary hover:bg-primary-dark text-on-primary font-semibold border border-transparent",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-on-primary bg-transparent",
  ghost: "text-primary hover:text-primary-dark underline bg-transparent border-0",
  whatsapp:
    "bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const iconAlign =
  "inline-flex items-center justify-center gap-2.5 leading-none [&_svg]:block [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.125em]";

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    iconAlign,
    "rounded-lg transition-all duration-200 active:scale-[0.98] text-center",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const externalLink = external ?? isExternalHref(href);
    if (externalLink) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
