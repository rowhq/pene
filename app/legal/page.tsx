export default function Legal() {
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

      <h2 className="page-title">Aviso Legal</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Información Legal</h3>
        <p>
          Este sitio web es propiedad de Productos Extranjeros y Novedades Electrónicas del Perú S.A.,
          empresa constituida bajo las leyes de la República del Perú, con RUC N° 20100123456,
          domiciliada en Av. Javier Prado Este 4567, San Isidro, Lima, Perú.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Propiedad Intelectual</h3>
        <p>
          Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos,
          logotipos, imágenes y software, es propiedad de Productos Extranjeros y Novedades
          Electrónicas del Perú S.A. o de sus proveedores de contenido, y está protegido por
          las leyes peruanas e internacionales de propiedad intelectual.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, transmisión o modificación del contenido
          de este sitio sin autorización previa por escrito de la empresa.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Limitación de Responsabilidad</h3>
        <p>
          La información contenida en este sitio web se proporciona "tal cual" sin garantías
          de ningún tipo, expresas o implícitas. PENE no garantiza que el sitio esté libre
          de errores o que el acceso sea ininterrumpido.
        </p>
        <p>
          En ningún caso PENE será responsable por daños directos, indirectos, incidentales,
          especiales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Enlaces Externos</h3>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros. PENE no es responsable
          del contenido, políticas de privacidad o prácticas de dichos sitios. La inclusión
          de cualquier enlace no implica respaldo por parte de la empresa.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Protección de Datos Personales</h3>
        <p>
          PENE se compromete a proteger la privacidad de los usuarios de este sitio web.
          Cualquier información personal proporcionada será tratada de acuerdo con la
          Ley N° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento.
        </p>
        <p>
          No compartimos información personal con terceros sin su consentimiento expreso,
          excepto cuando sea requerido por ley.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Ley Aplicable y Jurisdicción</h3>
        <p>
          El uso de este sitio web se rige por las leyes de la República del Perú.
          Cualquier controversia será sometida a la jurisdicción de los tribunales
          de Lima, Perú, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Contacto</h3>
        <p>
          Para consultas relacionadas con este aviso legal, puede comunicarse con nosotros a:
          <a href="mailto:legal@pene.pe">legal@pene.pe</a>
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Última actualización: Enero 2025
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
