export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-noir-card relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-noir-border to-noir-bg flex items-center justify-center">
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-noir-gold/30" />
              <div className="absolute inset-8 border border-noir-gold/20" />
              
              {/* Placeholder content */}
              <div className="text-center z-10">
                <span className="font-serif text-6xl text-noir-gold/20">BN</span>
                <p className="text-noir-muted text-sm mt-4 uppercase tracking-widest">Desde 2018</p>
              </div>
            </div>
            
            {/* Gold accent corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-noir-gold" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-noir-gold text-sm uppercase tracking-[0.3em] font-medium">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-noir-text mt-4 mb-8 text-balance">
              Tradição que Transcende o Tempo
            </h2>
            
            <div className="space-y-6 text-noir-muted leading-relaxed">
              <p>
                Fundada em 2018, a Barbearia Noir nasceu da paixão por resgatar a essência 
                da barbearia clássica em um ambiente contemporâneo. Cada detalhe foi 
                pensado para proporcionar uma experiência única — desde a seleção dos 
                produtos até o atendimento personalizado.
              </p>
              <p>
                Nossos profissionais são mestres na arte do corte, combinando técnicas 
                tradicionais com as tendências mais atuais. Aqui, você não apenas cuida 
                da aparência, mas vivencia um momento de relaxamento e autocuidado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-noir-border">
              <div>
                <span className="block font-serif text-3xl text-noir-gold">7+</span>
                <span className="text-noir-muted text-sm uppercase tracking-wider">Anos</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-noir-gold">5k+</span>
                <span className="text-noir-muted text-sm uppercase tracking-wider">Clientes</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-noir-gold">4.9</span>
                <span className="text-noir-muted text-sm uppercase tracking-wider">Avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
