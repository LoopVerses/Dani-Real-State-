import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-primary hover:bg-primary-dark text-dark font-semibold border border-transparent",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-dark bg-transparent",
  ghost: "text-primary hover:text-primary-dark underline bg-transparent border-0",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 active:scale-95",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
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
