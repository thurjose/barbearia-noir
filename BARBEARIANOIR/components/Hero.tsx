import { Scissors } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-bg via-noir-bg to-noir-bg/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-noir-gold/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-noir-gold/20 to-transparent hidden lg:block" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small decorative icon */}
        <div className="flex justify-center mb-8">
          <Scissors className="w-8 h-8 text-noir-gold rotate-[-45deg]" strokeWidth={1.5} />
        </div>
        
        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-noir-text mb-6 leading-tight text-balance">
          A Arte do <span className="text-noir-gold">Corte</span> Perfeito
        </h1>
        
        {/* Tagline */}
        <p className="text-noir-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Tradição e sofisticação em cada detalhe. Onde o clássico encontra o contemporâneo.
        </p>
        
        {/* CTA Button */}
        <a
          href="#agendar"
          className="inline-flex items-center gap-3 bg-noir-gold text-noir-bg px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-noir-text transition-all duration-300 group"
        >
          Agendar Horário
          <span className="w-5 h-px bg-noir-bg group-hover:w-8 transition-all duration-300" />
        </a>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-noir-muted text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-noir-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
