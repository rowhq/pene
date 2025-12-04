export default function Contacto() {
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

      <h2 className="page-title">Contáctenos</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Oficina Principal</h3>
        <div className="contact-info">
          <p><strong>Dirección:</strong></p>
          <p>Av. Javier Prado Este 4567</p>
          <p>San Isidro, Lima 15023</p>
          <p>Perú</p>
        </div>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Teléfonos</h3>
        <div className="contact-info">
          <p><strong>Central Telefónica:</strong> (01) 555-0100</p>
          <p><strong>Ventas Mayoristas:</strong> (01) 555-0123</p>
          <p><strong>Soporte Técnico:</strong> (01) 555-0150</p>
          <p><strong>Fax:</strong> (01) 555-0199</p>
        </div>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Correo Electrónico</h3>
        <div className="contact-info">
          <p><strong>Información General:</strong> <a href="mailto:info@pene.pe">info@pene.pe</a></p>
          <p><strong>Ventas:</strong> <a href="mailto:ventas@pene.pe">ventas@pene.pe</a></p>
          <p><strong>Soporte Técnico:</strong> <a href="mailto:soporte@pene.pe">soporte@pene.pe</a></p>
          <p><strong>Recursos Humanos:</strong> <a href="mailto:rrhh@pene.pe">rrhh@pene.pe</a></p>
        </div>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Horario de Atención</h3>
        <div className="contact-info">
          <p><strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM</p>
          <p><strong>Sábados:</strong> 9:00 AM - 1:00 PM</p>
          <p><strong>Domingos y Feriados:</strong> Cerrado</p>
        </div>
      </div>

      <hr />

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Sucursales</h3>
        <p style={{ marginBottom: '10px' }}>
          Para encontrar el distribuidor autorizado más cercano a su ubicación,
          visite nuestra página de <a href="/distribuidores">Distribuidores Autorizados</a>
          o llame a nuestra central telefónica.
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Nota: Debido al alto volumen de correspondencia, el tiempo de respuesta para
        correos electrónicos puede ser de 3 a 5 días hábiles. Para consultas urgentes,
        le recomendamos comunicarse por teléfono.
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
