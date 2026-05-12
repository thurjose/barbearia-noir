import { Instagram, MapPin, MessageCircle } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="py-16 bg-noir-card border-t border-noir-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <span className="font-serif text-2xl text-noir-text">
              Barbearia <span className="text-noir-gold">Noir</span>
            </span>
            <p className="text-noir-muted mt-4 text-sm leading-relaxed max-w-xs">
              Tradição e sofisticação em cada detalhe. A melhor experiência em cuidados masculinos.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-noir-text text-sm uppercase tracking-widest mb-4 font-medium">
              Localização
            </h4>
            <div className="flex items-start gap-3 text-noir-muted text-sm">
              <MapPin className="w-5 h-5 text-noir-gold shrink-0 mt-0.5" strokeWidth={1.5} />
              <address className="not-italic leading-relaxed">
                Rua das Tesouras, 123<br />
                Centro - São Paulo, SP<br />
                CEP 01234-567
              </address>
            </div>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="text-noir-text text-sm uppercase tracking-widest mb-4 font-medium">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/barbearianoir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-noir-muted hover:text-noir-gold transition-colors text-sm group"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                <span>@barbearianoir</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-noir-gold text-noir-bg px-5 py-3 text-sm font-medium hover:bg-noir-text transition-all duration-300 w-fit"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-noir-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-noir-muted text-xs">
            © {new Date().getFullYear()} Barbearia Noir. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-noir-muted text-xs">
            <span>Horário:</span>
            <span className="text-noir-text">Seg - Sáb, 09:00 - 19:00</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
