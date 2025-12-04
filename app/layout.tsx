import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PENE - Productos Extranjeros y Novedades Electrónicas del Perú',
  description: 'Importadores y distribuidores de productos electrónicos desde 1987',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
