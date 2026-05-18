export default function PropertiesLoading() {
  return (
    <div className="py-16 bg-dark px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-dark-3 rounded-xl overflow-hidden border border-primary/10 animate-pulse"
          >
            <div className="h-56 bg-dark-2" />
            <div className="p-5 space-y-3">
              <div className="h-6 bg-dark-2 rounded w-1/3" />
              <div className="h-5 bg-dark-2 rounded w-2/3" />
              <div className="h-4 bg-dark-2 rounded w-1/2" />
              <div className="flex gap-4 pt-4 border-t border-primary/10">
                <div className="h-4 bg-dark-2 rounded w-12" />
                <div className="h-4 bg-dark-2 rounded w-12" />
                <div className="h-4 bg-dark-2 rounded w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
