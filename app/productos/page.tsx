export default function Productos() {
  return (
    <>
      <header className="header">
        <h1>
          <span className="small-caps">Productos Extranjeros y Novedades Electrónicas</span>
        </h1>
        <p className="address">Av. Javier Prado Este 4567</p>
        <p className="address">Lima, Perú 15023</p>
      </header>

      <hr style={{ borderTopWidth: '2px', borderColor: '#800000' }} />

      <h2 className="page-title">Catálogo de Productos</h2>

      <p style={{ marginBottom: '20px' }}>
        A continuación presentamos nuestra línea completa de productos electrónicos importados.
        Para información de precios y disponibilidad, consulte con su distribuidor autorizado.
      </p>

      <div className="product-category">
        <h3>Radios y Equipos de Audio</h3>
        <ul>
          <li>Radio Portátil AM/FM Modelo RP-2000</li>
          <li>Radio Reloj Digital Modelo RC-450</li>
          <li>Radiograbadora con Cassette Modelo RG-880</li>
          <li>Walkman Reproductor de Cassettes Modelo WK-100</li>
          <li>Reproductor de CD Portátil Modelo CDP-300</li>
          <li>Mini Componente Estéreo Modelo MC-5500</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Calculadoras</h3>
        <ul>
          <li>Calculadora de Bolsillo 8 Dígitos Modelo CB-08</li>
          <li>Calculadora Científica 240 Funciones Modelo CC-240</li>
          <li>Calculadora de Escritorio con Impresora Modelo CE-120P</li>
          <li>Calculadora Solar Ecológica Modelo CS-ECO</li>
          <li>Calculadora Financiera Modelo CF-PRO</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Relojes Digitales</h3>
        <ul>
          <li>Reloj de Pulsera Digital Modelo RD-100</li>
          <li>Reloj Deportivo Resistente al Agua Modelo RD-SPORT</li>
          <li>Reloj de Pared Digital Modelo RP-LCD</li>
          <li>Reloj Despertador con Proyección Modelo RD-PROJ</li>
          <li>Cronómetro Digital Profesional Modelo CR-PRO</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Accesorios Electrónicos</h3>
        <ul>
          <li>Linterna LED Recargable Modelo LT-500</li>
          <li>Cargador Universal de Pilas Modelo CG-UNI</li>
          <li>Adaptador de Corriente Multi-voltaje Modelo AC-MV</li>
          <li>Audífonos Estéreo Modelo AU-200</li>
          <li>Pilas Alcalinas AA/AAA (Paquete de 4)</li>
          <li>Cables de Audio RCA Modelo CA-RCA</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Productos para el Hogar</h3>
        <ul>
          <li>Ventilador de Mesa 12" Modelo VM-12</li>
          <li>Plancha de Vapor Modelo PV-1000</li>
          <li>Hervidor Eléctrico 1.7L Modelo HE-17</li>
          <li>Báscula Digital de Cocina Modelo BC-DIG</li>
          <li>Termómetro Digital Ambiental Modelo TD-AMB</li>
        </ul>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Nota: Todos los productos incluyen garantía de fábrica de 1 año.
        Para servicio técnico, consulte nuestra sección de <a href="/soporte">Soporte Técnico</a>.
      </p>

      <hr />

      <p className="back-link">
        <a href="/">← Volver a la página principal</a>
      </p>

      <footer className="footer">
        <p>
          Copyright © 1987-2025 <strong>Productos Extranjeros y Novedades Electrónicas del Perú S.A.</strong>
        </p>
      </footer>
    </>
  )
}
