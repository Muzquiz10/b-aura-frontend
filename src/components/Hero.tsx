// src/components/Hero.tsx
import './Hero.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          B 🍃 Aura
        </h1>

        <p>
          Nutrición, Deporte y Bienestar. Acompañamiento personalizado para mejorar tu salud, energía y bienestar.
        </p>

        <Link href="/contacto" className="hero-button">
          Descubre tu plan 🌿
        </Link>
      </div>
    </section>
  )
}