export default function Carreras() {
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

      <h2 className="page-title">Oportunidades de Empleo</h2>

      <div className="content-section">
        <p>
          En Productos Extranjeros y Novedades Electrónicas del Perú S.A. valoramos el talento y
          ofrecemos un ambiente de trabajo profesional con oportunidades de crecimiento.
          Únase a nuestro equipo de más de 150 colaboradores.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Vacantes Actuales</h3>

        <div style={{ marginBottom: '15px', paddingLeft: '15px', borderLeft: '2px solid #800000' }}>
          <p><strong>Ejecutivo de Ventas - Lima</strong></p>
          <p style={{ fontSize: '12px' }}>
            Requisitos: Experiencia mínima de 2 años en ventas, conocimiento del sector retail,
            disponibilidad para viajar. Ofrecemos sueldo base + comisiones + beneficios de ley.
          </p>
        </div>

        <div style={{ marginBottom: '15px', paddingLeft: '15px', borderLeft: '2px solid #800000' }}>
          <p><strong>Técnico en Electrónica - Lima</strong></p>
          <p style={{ fontSize: '12px' }}>
            Requisitos: Título técnico en electrónica, experiencia en reparación de equipos de audio,
            conocimiento de instrumentos de medición. Horario de oficina.
          </p>
        </div>

        <div style={{ marginBottom: '15px', paddingLeft: '15px', borderLeft: '2px solid #800000' }}>
          <p><strong>Asistente de Almacén - Callao</strong></p>
          <p style={{ fontSize: '12px' }}>
            Requisitos: Secundaria completa, experiencia en manejo de inventarios,
            conocimiento de sistemas de gestión de almacenes. Turnos rotativos.
          </p>
        </div>

        <div style={{ marginBottom: '15px', paddingLeft: '15px', borderLeft: '2px solid #800000' }}>
          <p><strong>Coordinador Regional - Arequipa</strong></p>
          <p style={{ fontSize: '12px' }}>
            Requisitos: Profesional en administración o carreras afines, experiencia de 3 años
            en coordinación de equipos de venta, residencia en Arequipa.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Beneficios</h3>
        <ul style={{ paddingLeft: '25px', marginBottom: '15px' }}>
          <li>Sueldo competitivo acorde al mercado</li>
          <li>Todos los beneficios de ley (CTS, gratificaciones, vacaciones)</li>
          <li>Seguro de salud EPS</li>
          <li>Capacitación continua</li>
          <li>Oportunidades de crecimiento profesional</li>
          <li>Descuentos en productos de la empresa</li>
        </ul>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Cómo Postular</h3>
        <p>
          Envíe su curriculum vitae actualizado indicando el puesto al que postula a:
          <a href="mailto:rrhh@pene.pe">rrhh@pene.pe</a>
        </p>
        <p style={{ marginTop: '10px' }}>
          También puede dejar su CV en nuestra oficina principal de lunes a viernes
          de 9:00 AM a 5:00 PM.
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Somos una empresa que promueve la igualdad de oportunidades.
        No discriminamos por género, edad, religión, origen o discapacidad.
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
