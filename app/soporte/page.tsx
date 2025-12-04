export default function Soporte() {
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

      <h2 className="page-title">Soporte Técnico</h2>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Centro de Servicio Técnico</h3>
        <p>
          Nuestro equipo de técnicos especializados está preparado para atender cualquier
          consulta o problema con sus productos PENE.
        </p>
        <p style={{ marginTop: '10px' }}>
          <strong>Dirección:</strong> Av. Javier Prado Este 4567, San Isidro, Lima<br />
          <strong>Teléfono:</strong> (01) 555-0150<br />
          <strong>Horario:</strong> Lunes a Viernes de 9:00 AM a 5:00 PM<br />
          <strong>Correo:</strong> <a href="mailto:soporte@pene.pe">soporte@pene.pe</a>
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Preguntas Frecuentes</h3>

        <p style={{ marginBottom: '5px' }}><strong>¿Cómo puedo verificar si mi producto tiene garantía vigente?</strong></p>
        <p style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          Revise la fecha de compra en su boleta o factura. La garantía es válida por un año
          a partir de dicha fecha. También puede llamar a nuestra línea de soporte con el
          número de serie de su producto.
        </p>

        <p style={{ marginBottom: '5px' }}><strong>¿Qué hago si mi producto no enciende?</strong></p>
        <p style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          Primero verifique que las pilas estén correctamente instaladas y no estén agotadas
          (para productos portátiles), o que el cable de alimentación esté bien conectado.
          Si el problema persiste, llévelo a un centro de servicio autorizado.
        </p>

        <p style={{ marginBottom: '5px' }}><strong>¿Dónde puedo conseguir repuestos o accesorios?</strong></p>
        <p style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          Los repuestos y accesorios originales están disponibles en todos nuestros
          distribuidores autorizados y en nuestro centro de servicio técnico.
        </p>

        <p style={{ marginBottom: '5px' }}><strong>¿Cuánto tiempo tarda una reparación?</strong></p>
        <p style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          El tiempo estimado de reparación es de 7 a 15 días hábiles para productos
          con repuestos en stock. Para casos especiales, puede extenderse hasta 30 días.
        </p>

        <p style={{ marginBottom: '5px' }}><strong>¿Reparan productos de otras marcas?</strong></p>
        <p style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          Nuestro servicio técnico solo atiende productos comercializados por PENE.
          Para otras marcas, consulte con el distribuidor correspondiente.
        </p>
      </div>

      <div className="content-section">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Manuales de Usuario</h3>
        <p>
          Si ha extraviado el manual de su producto, puede solicitar una copia digital
          enviando el modelo y número de serie a <a href="mailto:soporte@pene.pe">soporte@pene.pe</a>
        </p>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Para servicio de garantía, consulte nuestra página de <a href="/garantia">Información de Garantía</a>.
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
