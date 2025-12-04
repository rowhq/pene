export default function Comunicados() {
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

      <h2 className="page-title">Comunicados de Prensa</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          <a href="#">PENE anuncia expansión de red de distribución en la región sur</a>
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>28 de Octubre, 2025</p>
        <p>
          La empresa anunció la incorporación de cinco nuevos distribuidores autorizados en las ciudades
          de Arequipa, Tacna, Moquegua, Puno e Ilo, fortaleciendo su presencia en el sur del país.
        </p>
      </div>

      <hr />

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          <a href="#">Nueva línea de calculadoras científicas para el sector educativo</a>
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>15 de Septiembre, 2025</p>
        <p>
          PENE presenta su nueva línea de calculadoras científicas diseñadas específicamente para
          estudiantes de secundaria y universidad, con precios accesibles y garantía extendida.
        </p>
      </div>

      <hr />

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          <a href="#">Resultados financieros del primer semestre 2025</a>
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>30 de Julio, 2025</p>
        <p>
          La compañía reporta un crecimiento del 12% en ventas durante el primer semestre del año,
          impulsado por la demanda de productos de audio y accesorios electrónicos.
        </p>
      </div>

      <hr />

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          <a href="#">PENE celebra 38 años de operaciones en el Perú</a>
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>15 de Marzo, 2025</p>
        <p>
          Con motivo de nuestro 38 aniversario, agradecemos la confianza de nuestros clientes
          y distribuidores que nos han acompañado a lo largo de estas casi cuatro décadas.
        </p>
      </div>

      <hr />

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          <a href="#">Apertura de nuevo centro de distribución en Callao</a>
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>10 de Enero, 2025</p>
        <p>
          Para mejorar los tiempos de entrega a nivel nacional, inauguramos un moderno centro
          de distribución de 5,000 m² en la zona industrial del Callao.
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Para consultas de prensa, comuníquese con <a href="mailto:prensa@pene.pe">prensa@pene.pe</a>
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
