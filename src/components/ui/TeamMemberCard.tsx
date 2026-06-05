import PortraitImage from "@/components/ui/PortraitImage";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageSizes?: string;
  className?: string;
};

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
  imageSizes = "(max-width: 1024px) 50vw, 380px",
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
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-base font-semibold text-foreground md:text-lg">{name}</h3>
        <p className="mt-1 mb-3 text-sm font-medium text-primary">{role}</p>
        <p className="text-sm leading-relaxed text-text-muted">{bio}</p>
      </div>
    </article>
  );
}
