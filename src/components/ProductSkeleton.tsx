export default function ProductSkeleton() {
  return (
    <div>
      {/* NAVBAR SKELETON */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="h-6 w-28 bg-gray-200 rounded animate-pulse" />
          <div className="hidden md:flex items-center gap-10">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-3 w-14 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="hidden md:block h-10 w-36 bg-gray-200 rounded animate-pulse" />
        </div>
      </nav>

      {/* HERO SKELETON */}
      <section className="pt-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* GAUCHE — IMAGES */}
            <div>
              <div className="w-full h-[480px] bg-gray-200 rounded animate-pulse mb-3" />
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full h-20 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>

            {/* DROITE — INFO */}
            <div>
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-9 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-9 w-1/2 bg-gray-200 rounded animate-pulse mb-5" />

              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mb-6" />

              <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
              </div>

              <div className="h-8 w-28 bg-gray-200 rounded animate-pulse mb-6" />

              <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-3" />
              <div className="h-11 w-full bg-gray-200 rounded animate-pulse mb-6" />

              <div className="space-y-3 pt-4 border-t border-gray-100">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-3 w-3/4 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}