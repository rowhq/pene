export default function Garantia() {
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

      <h2 className="page-title">Información de Garantía</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Cobertura de Garantía</h3>
        <p>
          Todos los productos comercializados por Productos Extranjeros y Novedades Electrónicas del Perú S.A.
          cuentan con garantía de fábrica de <strong>un (1) año</strong> a partir de la fecha de compra,
          siempre que hayan sido adquiridos a través de un distribuidor autorizado.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>La garantía cubre:</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Defectos de fabricación en materiales y mano de obra</li>
          <li>Mal funcionamiento bajo condiciones normales de uso</li>
          <li>Componentes internos defectuosos</li>
          <li>Reparación o reemplazo del producto a criterio del fabricante</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>La garantía NO cubre:</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Daños causados por mal uso, negligencia o accidentes</li>
          <li>Daños por variaciones de voltaje o descargas eléctricas</li>
          <li>Daños causados por reparaciones no autorizadas</li>
          <li>Desgaste normal por uso</li>
          <li>Daños causados por líquidos o humedad</li>
          <li>Productos con número de serie alterado o removido</li>
          <li>Accesorios consumibles (pilas, audífonos, cables)</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Para hacer válida su garantía:</h3>
        <ol style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Conserve su comprobante de pago original (boleta o factura)</li>
          <li>Conserve la tarjeta de garantía debidamente sellada por el distribuidor</li>
          <li>Presente el producto en su empaque original (de ser posible)</li>
          <li>Acuda a cualquier distribuidor autorizado o a nuestro centro de servicio</li>
        </ol>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Centro de Servicio Autorizado</h3>
        <p>
          <strong>Dirección:</strong> Av. Javier Prado Este 4567, San Isidro, Lima<br />
          <strong>Teléfono:</strong> (01) 555-0150<br />
          <strong>Horario:</strong> Lunes a Viernes de 9:00 AM a 5:00 PM<br />
          <strong>Correo:</strong> <a href="mailto:garantia@pene.pe">garantia@pene.pe</a>
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Nota: El tiempo estimado de reparación es de 7 a 15 días hábiles, dependiendo de la disponibilidad
        de repuestos. Para productos importados, el tiempo puede extenderse hasta 30 días hábiles.
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
