export default function Nosotros() {
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

      <h2 className="page-title">Información de la Empresa</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Nuestra Historia</h3>
        <p>
          Productos Extranjeros y Novedades Electrónicas del Perú S.A. fue fundada en 1987 por un grupo
          de empresarios peruanos con la visión de traer productos electrónicos de calidad al mercado nacional.
          Desde nuestros humildes inicios en un pequeño local en el centro de Lima, hemos crecido hasta
          convertirnos en uno de los principales importadores y distribuidores de electrónicos del país.
        </p>
        <p>
          Durante más de 35 años, hemos mantenido nuestro compromiso con la calidad, el servicio al cliente
          y los precios accesibles. Nuestra red de distribución abarca las 25 regiones del Perú, con más
          de 200 puntos de venta autorizados a nivel nacional.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Misión</h3>
        <p>
          Proporcionar a las familias peruanas productos electrónicos de calidad a precios justos,
          contribuyendo al desarrollo tecnológico y al bienestar de nuestra sociedad.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Visión</h3>
        <p>
          Ser reconocidos como la empresa líder en importación y distribución de productos electrónicos
          en el Perú, destacando por nuestra excelencia en servicio y compromiso con la satisfacción del cliente.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Valores Corporativos</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Integridad en todas nuestras operaciones</li>
          <li>Compromiso con la calidad</li>
          <li>Respeto por nuestros clientes y colaboradores</li>
          <li>Responsabilidad social y ambiental</li>
          <li>Innovación constante</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Datos de la Empresa</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Razón Social: Productos Extranjeros y Novedades Electrónicas del Perú S.A.</li>
          <li>RUC: 20100123456</li>
          <li>Fecha de Fundación: 15 de Marzo de 1987</li>
          <li>Sede Principal: Lima, Perú</li>
          <li>Empleados: Más de 150 colaboradores</li>
        </ul>
      </div>

      <hr />

      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
        "Sirviendo al Perú con calidad desde 1987"
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
