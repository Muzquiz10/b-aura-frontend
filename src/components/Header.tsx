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
            <li><Link href="/Servicios">Otros Servicios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/sobre-mi">Sobre mi</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}