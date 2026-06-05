import PortraitImage from "@/components/ui/PortraitImage";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageSizes?: string;
  dense?: boolean;
  className?: string;
};

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
  imageSizes = "(max-width: 768px) 100vw, 280px",
  dense = false,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-primary/10 bg-dark-3 transition-colors hover:border-primary/40",
        className
      )}
    >
      <PortraitImage src={image} alt={name} sizes={imageSizes} />
      <div className={cn("flex flex-1 flex-col", dense ? "p-4 md:p-5" : "p-5 md:p-6")}>
        <h3
          className={cn(
            "font-semibold text-foreground",
            dense ? "text-sm md:text-base" : "text-base md:text-lg"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "font-medium text-primary",
            dense ? "mt-1 mb-2 text-xs" : "mt-1 mb-3 text-sm"
          )}
        >
          {role}
        </p>
        <p
          className={cn(
            "leading-relaxed text-text-muted",
            dense ? "text-xs" : "text-sm"
          )}
        >
          {bio}
        </p>
      </div>
    </article>
  );
}
