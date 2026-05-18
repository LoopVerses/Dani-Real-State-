export default function NavbarSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass nav-glass-hero h-[96px]" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center">
        <div className="h-16 w-56 rounded bg-black/20 animate-pulse" aria-hidden />
      </div>
    </header>
  );
}
