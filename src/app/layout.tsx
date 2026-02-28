import './globals.css'

export const metadata = {
  title: 'B-AURA',
  description: 'Frontend conectado a WordPress'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
