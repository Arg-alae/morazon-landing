export default function Footer() {
  return (
    <footer className="bg-[#0d0507] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-bold tracking-widest text-[#8B2635] uppercase mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              Morazon
            </h2>
            <p className="text-xs text-white/30 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Authentic Moroccan artisanal rugs. Bringing the soul of Morocco to your home.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] tracking-widest uppercase text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Details', id: 'details' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Order Now', id: 'order' },
              ].map(item => (
                <li key={item.label}>
                  <span
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-white/30 hover:text-[#8B2635] transition-colors cursor-pointer"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-widest uppercase text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Contact
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="text-xs text-white/30" style={{ fontFamily: 'Georgia, serif' }}>contact@morazon.com</li>
              <li className="text-xs text-white/30" style={{ fontFamily: 'Georgia, serif' }}>+212 600 000 000</li>
              <li className="text-xs text-white/30" style={{ fontFamily: 'Georgia, serif' }}>Tamesna, Morocco</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20" style={{ fontFamily: 'Georgia, serif' }}>© 2026 Morazon. All rights reserved.</p>
          <p className="text-[11px] text-white/20" style={{ fontFamily: 'Georgia, serif' }}>welcom</p>
        </div>

      </div>
    </footer>
  );
}