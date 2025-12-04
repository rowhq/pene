export default function Distribuidores() {
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

      <h2 className="page-title">Distribuidores Autorizados</h2>

      <p style={{ marginBottom: '20px' }}>
        Nuestra red de distribuidores autorizados garantiza que usted reciba productos originales
        con garantía oficial. A continuación presentamos nuestros principales distribuidores por región.
      </p>

      <div className="product-category">
        <h3>Lima Metropolitana</h3>
        <ul>
          <li><strong>Electrónica San Isidro S.A.C.</strong> - Av. Conquistadores 1250, San Isidro - Tel: (01) 422-1100</li>
          <li><strong>Importaciones Miraflores</strong> - Av. Larco 812, Miraflores - Tel: (01) 445-2200</li>
          <li><strong>Centro Electrónico Lima</strong> - Jr. de la Unión 538, Cercado de Lima - Tel: (01) 427-3300</li>
          <li><strong>Mega Electro S.A.</strong> - Av. Aviación 3456, San Borja - Tel: (01) 225-4400</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Región Norte</h3>
        <ul>
          <li><strong>Electronorte E.I.R.L.</strong> - Av. Balta 567, Chiclayo - Tel: (074) 23-4567</li>
          <li><strong>Casa del Electrón</strong> - Jr. Pizarro 890, Trujillo - Tel: (044) 25-6789</li>
          <li><strong>Piura Electronics</strong> - Av. Grau 234, Piura - Tel: (073) 32-1234</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Región Sur</h3>
        <ul>
          <li><strong>Electrosur Arequipa</strong> - Calle Mercaderes 456, Arequipa - Tel: (054) 21-5678</li>
          <li><strong>Importaciones Cusco</strong> - Av. El Sol 789, Cusco - Tel: (084) 23-4321</li>
          <li><strong>Tacna Import</strong> - Av. Bolognesi 123, Tacna - Tel: (052) 42-1098</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Región Centro</h3>
        <ul>
          <li><strong>Electro Huancayo</strong> - Jr. Real 567, Huancayo - Tel: (064) 23-4567</li>
          <li><strong>Central Electronics</strong> - Av. Centenario 890, Huánuco - Tel: (062) 51-2345</li>
        </ul>
      </div>

      <div className="product-category">
        <h3>Región Oriente</h3>
        <ul>
          <li><strong>Amazonas Electrónica</strong> - Jr. Próspero 456, Iquitos - Tel: (065) 23-6789</li>
          <li><strong>Selva Digital</strong> - Jr. Tarapacá 234, Pucallpa - Tel: (061) 57-1234</li>
        </ul>
      </div>

      <hr />

      <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
        Para convertirse en distribuidor autorizado, comuníquese con nuestro departamento de ventas
        al (01) 555-0123 o escriba a <a href="mailto:distribuidores@pene.pe">distribuidores@pene.pe</a>
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
