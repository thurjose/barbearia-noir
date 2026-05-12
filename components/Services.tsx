import { Scissors, Sparkles } from "lucide-react"

const services = [
  {
    title: "Corte",
    price: "R$45",
    description: "Corte masculino personalizado com técnicas clássicas e modernas. Inclui lavagem e finalização.",
    icon: Scissors,
  },
  {
    title: "Barba",
    price: "R$35",
    description: "Aparagem e modelagem de barba com toalha quente e produtos premium para um acabamento impecável.",
    icon: Sparkles,
  },
  {
    title: "Combo Corte + Barba",
    price: "R$70",
    description: "A experiência completa. Corte e barba com toda a atenção aos detalhes que você merece.",
    icon: Scissors,
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-noir-bg relative">
      {/* Gold divider top */}
      <div className="gold-divider w-full absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-noir-gold text-sm uppercase tracking-[0.3em] font-medium">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-noir-text mt-4 text-balance">
            Experiência Premium
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 md:p-10 border transition-all duration-500 hover:-translate-y-2 ${
                service.featured
                  ? "border-noir-gold bg-noir-gold/5"
                  : "border-noir-border bg-noir-card hover:border-noir-gold/50"
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-noir-gold text-noir-bg px-4 py-1 text-xs uppercase tracking-wider font-semibold">
                  Mais Popular
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <service.icon
                  className="w-8 h-8 text-noir-gold"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title & Price */}
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-serif text-2xl text-noir-text">
                  {service.title}
                </h3>
                <span className="text-noir-gold font-semibold text-xl">
                  {service.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-noir-muted leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-noir-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gold divider bottom */}
      <div className="gold-divider w-full absolute bottom-0" />
    </section>
  )
}
