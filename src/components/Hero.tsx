// src/components/Hero.tsx
import './Hero.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>B🍃Aura</h1>
        <p>
          Nutrición, Deporte y bienestar. Acompañamiento profesional para mejorar tu salud
          y tu relación con la alimentación.
        </p>
        <Link href="/contacto" className="hero-button">
          Pide tu cita
        </Link>
      </div>

      <div className="hero-image">
        <img src="/dietista_hero_Mariana.png" alt="Nutrición" />
      </div>
    </section>
  )
}