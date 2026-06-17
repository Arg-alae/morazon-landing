export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#8B2635]" />
            <span className="text-[10px] tracking-widest uppercase text-[#8B2635]" style={{ fontFamily: 'Georgia, serif' }}>
              Reviews
            </span>
            <div className="w-6 h-px bg-[#8B2635]" />
          </div>
          <h2 className="text-3xl font-normal text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            They got theirs.
            <span className="block text-[#8B2635] italic">Here's what they think.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: 'Sarah M.',
              location: 'New York, USA',
              text: 'The colors are even more beautiful in person. My living room has been completely transformed. Worth every penny.',
            },
            {
              name: 'Pierre L.',
              location: 'Paris, France',
              text: 'We bought this as a wedding gift. The certificate of authenticity made it feel truly special. Our friends were speechless.',
            },
            {
              name: 'Amina K.',
              location: 'London, UK',
              text: 'As a Moroccan living abroad, this rug brought a piece of home to my flat. The craftsmanship is incredible.',
            },
          ].map(t => (
            <div key={t.name} className="bg-white p-6">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#8B2635">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "{t.text}"
              </p>
              <div className="w-6 h-px bg-[#8B2635] mb-3" />
              <div className="text-sm text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{t.name}</div>
              <div className="text-xs text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>{t.location}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
          {[
            { number: '500+', label: 'Happy customers' },
            { number: '4.9/5', label: 'Average rating' },
            { number: '100%', label: 'Authentic' },
            { number: 'Free', label: 'Worldwide shipping' },
          ].map(badge => (
            <div key={badge.label} className="text-center">
              <div className="text-2xl font-normal text-[#8B2635] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                {badge.number}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
                {badge.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}