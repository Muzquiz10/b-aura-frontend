// src/components/Header.tsx
import React from 'react'
import Link from 'next/link'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/nutricion_b-aura_logo.png" alt="B-AURA Logo" />
          </Link>
        </div>

        {/* Menú */}
        <nav className="nav">
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li className="dropdown">
              <button className="dropdown-button">
              Servicios <span className="arrow">▾</span>
              </button>
              <ul className="dropdown-menu">
                <li><Link href="/servicios/cursos">Cursos</Link></li>
                <li><Link href="/servicios/asesorias">Asesorías</Link></li>
              </ul>
            </li>

            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/sobre-mi">Sobre mi</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}