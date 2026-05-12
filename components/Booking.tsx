"use client"

import { useState, FormEvent } from "react"
import { Calendar, Clock, User, Phone, CheckCircle } from "lucide-react"

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00"
]

const services = [
  { value: "corte", label: "Corte - R$45" },
  { value: "barba", label: "Barba - R$35" },
  { value: "combo", label: "Combo Corte + Barba - R$70" },
]

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="agendar" className="py-24 md:py-32 bg-noir-bg relative">
        <div className="gold-divider w-full absolute top-0" />
        
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="p-12 border border-noir-gold bg-noir-gold/5">
            <CheckCircle className="w-16 h-16 text-noir-gold mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="font-serif text-3xl text-noir-text mb-4">
              Agendamento Confirmado!
            </h3>
            <p className="text-noir-muted mb-8">
              Obrigado, <span className="text-noir-text">{formData.name}</span>! Seu horário foi reservado. 
              Enviaremos uma confirmação para o número informado.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: "", phone: "", service: "", date: "", time: "" })
              }}
              className="text-noir-gold hover:text-noir-text transition-colors text-sm uppercase tracking-widest"
            >
              Fazer novo agendamento
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="agendar" className="py-24 md:py-32 bg-noir-bg relative">
      {/* Gold divider top */}
      <div className="gold-divider w-full absolute top-0" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-noir-gold text-sm uppercase tracking-[0.3em] font-medium">
            Agendamento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-noir-text mt-4 text-balance">
            Reserve Seu Horário
          </h2>
          <p className="text-noir-muted mt-4 max-w-lg mx-auto">
            Escolha o melhor horário para você e garanta sua experiência premium.
          </p>
        </div>

        {/* Booking form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="block text-noir-muted text-sm uppercase tracking-wider mb-2">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-noir-muted" strokeWidth={1.5} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-noir-card border border-noir-border text-noir-text pl-12 pr-4 py-4 focus:border-noir-gold focus:outline-none transition-colors placeholder:text-noir-muted/50"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="phone" className="block text-noir-muted text-sm uppercase tracking-wider mb-2">
                Telefone
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-noir-muted" strokeWidth={1.5} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-noir-card border border-noir-border text-noir-text pl-12 pr-4 py-4 focus:border-noir-gold focus:outline-none transition-colors placeholder:text-noir-muted/50"
                />
              </div>
            </div>

            {/* Service */}
            <div className="md:col-span-2">
              <label htmlFor="service" className="block text-noir-muted text-sm uppercase tracking-wider mb-2">
                Serviço
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-noir-card border border-noir-border text-noir-text px-4 py-4 focus:border-noir-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-noir-muted">
                  Selecione o serviço
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value} className="bg-noir-card">
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="relative">
              <label htmlFor="date" className="block text-noir-muted text-sm uppercase tracking-wider mb-2">
                Data
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-noir-muted pointer-events-none" strokeWidth={1.5} />
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-noir-card border border-noir-border text-noir-text pl-12 pr-4 py-4 focus:border-noir-gold focus:outline-none transition-colors cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Time */}
            <div className="relative">
              <label htmlFor="time" className="block text-noir-muted text-sm uppercase tracking-wider mb-2">
                Horário
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-noir-muted pointer-events-none" strokeWidth={1.5} />
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-noir-card border border-noir-border text-noir-text pl-12 pr-4 py-4 focus:border-noir-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-noir-muted">
                    Selecione o horário
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-noir-card">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-8 bg-noir-gold text-noir-bg py-5 text-sm uppercase tracking-widest font-semibold hover:bg-noir-text transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Confirmar Agendamento
            <span className="w-5 h-px bg-noir-bg group-hover:w-8 transition-all duration-300" />
          </button>
        </form>
      </div>
    </section>
  )
}
