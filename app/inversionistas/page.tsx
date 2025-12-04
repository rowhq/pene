export default function Inversionistas() {
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

      <h2 className="page-title">Información para Inversionistas</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Reportes Financieros</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li><a href="#">Memoria Anual 2024</a> (PDF, 2.3 MB) - Actualizado Marzo 2025</li>
          <li><a href="#">Estados Financieros Auditados 2024</a> (PDF, 890 KB)</li>
          <li><a href="#">Reporte Trimestral Q3 2025</a> (PDF, 450 KB) - Actualizado Noviembre 2025</li>
          <li><a href="#">Reporte Trimestral Q2 2025</a> (PDF, 420 KB)</li>
          <li><a href="#">Reporte Trimestral Q1 2025</a> (PDF, 410 KB)</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Información Corporativa</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li><a href="#">Estatutos de la Sociedad</a> (PDF, 156 KB)</li>
          <li><a href="#">Reglamento de Junta General de Accionistas</a> (PDF, 89 KB)</li>
          <li><a href="#">Política de Dividendos</a> (PDF, 45 KB)</li>
          <li><a href="#">Código de Buen Gobierno Corporativo</a> (PDF, 234 KB)</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Datos de la Acción</h3>
        <p style={{ marginBottom: '10px' }}>
          Las acciones de Productos Extranjeros y Novedades Electrónicas del Perú S.A. se negocian
          en la Bolsa de Valores de Lima bajo el símbolo <strong>PENEC1</strong>.
        </p>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Valor Nominal: S/. 1.00 por acción</li>
          <li>Acciones en Circulación: 50,000,000</li>
          <li>Capital Social: S/. 50,000,000</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Próximos Eventos</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Junta General de Accionistas - 28 de Marzo, 2026</li>
          <li>Publicación de Resultados Q4 2025 - 15 de Febrero, 2026</li>
        </ul>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Para consultas de inversionistas, comuníquese con el Departamento de Relaciones con Inversionistas
        al (01) 555-0180 o escriba a <a href="mailto:inversionistas@pene.pe">inversionistas@pene.pe</a>
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
