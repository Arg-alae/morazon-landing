export default function Features() {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="1.2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              ),
              title: 'Made by Hand',
              desc: 'Every knot tied by a Berber artisan. No machines.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="1.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
              title: '100% Natural Wool',
              desc: 'Sourced from Atlas Mountain sheep. Naturally dyed.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="1.2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              ),
              title: 'Free Shipping',
              desc: 'Delivered worldwide in 7-14 days. Fully tracked.',
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B2635" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
              title: 'Authenticity Cert.',
              desc: 'Every rug ships with a certificate of authenticity.',
            },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#8B2635]/5 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs font-normal text-gray-900 mb-1 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}