export default function Story() {
  return (
    <section id="story" className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* GAUCHE — IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600"
              alt="Artisan weaving"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
              alt="Rug detail"
              className="w-full h-64 object-cover mt-8"
            />
            <div className="col-span-2 bg-[#8B2635] p-6 flex items-center justify-between">
              {[
                { number: '40,000+', label: 'Knots per rug' },
                { number: '3 weeks', label: 'To complete' },
                { number: '30+ yrs', label: 'Of experience' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-normal text-white" style={{ fontFamily: 'Georgia, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-white/60" style={{ fontFamily: 'Georgia, serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DROITE — TEXTE */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#8B2635]" />
              <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
                The Story Behind
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Woven by Fatima,
            </h2>
            <h2 className="text-3xl md:text-4xl font-normal text-[#8B2635] italic mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              in the Atlas.
            </h2>

            <p className="text-sm text-gray-500 mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Fatima learned to weave at age 8, sitting beside her grandmother in a small village in the High Atlas Mountains. Today, at 52, she still uses the same wooden loom, the same natural dyes made from pomegranate and saffron.
            </p>

            <p className="text-sm text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              When you order this rug, you're not just buying a product — you're supporting a tradition, a family, and a way of life that has endured for centuries.
            </p>

            <button
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#8B2635] text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#7a1f2d] transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Own This Piece — $285
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}