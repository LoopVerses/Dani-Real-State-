import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-dark flex items-center justify-center px-4 overflow-hidden">
      <span className="absolute font-display text-[20rem] text-primary opacity-20 select-none pointer-events-none">
        404
      </span>
      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
