export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF9F7] px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-[#8B2635]" />
          <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
            404
          </span>
          <div className="w-6 h-px bg-[#8B2635]" />
        </div>
        <h1 className="text-3xl font-normal text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
          Product <span className="text-[#8B2635] italic">not found.</span>
        </h1>
        <p className="text-sm text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>
          The product you're looking for doesn't exist or may have been removed.
        </p>
      </div>
    </section>
  );
}