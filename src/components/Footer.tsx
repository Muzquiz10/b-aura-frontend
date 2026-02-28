// src/components/Footer.tsx
import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Columna 1 - Logo y descripción */}
        <div className="footer-column">
          <img 
            src="/nutricion_b-aura_logo.png" 
            alt="B-AURA Logo" 
            className="footer-logo"
          />
          <p>
            Acompañamiento nutricional personalizado para mejorar tu salud,
            energía y bienestar.
          </p>
        </div>

        {/* Columna 2 - Enlaces */}
        <div className="footer-column">
          <h4>Enlaces</h4>
          <ul>
            <li><Link href="/">Servicios</Link></li>
            <li><Link href="/otros-servicios">Contacto</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Sobre mí</Link></li>
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Email: info@b-aura.es</p>
          <p>Teléfono: +34 XXX XXX XXX</p>
          <p>España</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} B-AURA. Todos los derechos reservados.
      </div>
    </footer>
  )
}