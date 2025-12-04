export default function Home() {
  return (
    <>
      <header className="header">
        <h1>
          <span className="small-caps">Productos Extranjeros y Novedades Electrónicas</span>
        </h1>
        <p className="address">Av. Javier Prado Este 4567</p>
        <p className="address">Lima, Perú 15023</p>
        <p className="subtitle">Página Oficial</p>
      </header>

      <hr style={{ borderTopWidth: '2px', borderColor: '#800000' }} />

      <div className="link-grid">
        <div className="link-column">
          <ul>
            <li>
              <a href="/productos">Catálogo de Productos</a>
              <span className="update-date">Actualizado Noviembre 15, 2025</span>
            </li>
            <li>
              <a href="/distribuidores">Distribuidores Autorizados</a>
            </li>
            <li>
              <a href="/nosotros">Información de la Empresa</a>
            </li>
            <li>
              <a href="/comunicados">Comunicados de Prensa</a>
              <span className="update-date">Actualizado Octubre 28, 2025</span>
            </li>
            <li>
              <a href="/garantia">Información de Garantía</a>
            </li>
          </ul>
        </div>
        <div className="link-column">
          <ul>
            <li>
              <a href="/inversionistas">Información para Inversionistas</a>
              <span className="update-date">Actualizado Noviembre 1, 2025</span>
            </li>
            <li>
              <a href="/contacto">Contáctenos</a>
            </li>
            <li>
              <a href="/carreras">Oportunidades de Empleo</a>
            </li>
            <li>
              <a href="/soporte">Soporte Técnico</a>
            </li>
            <li>
              <a href="/legal">Aviso Legal</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="promo-banner">
        <p>
          PARA CONSULTAS SOBRE DISTRIBUCIÓN MAYORISTA<br />
          LLAME AL <strong>(01) 555-0123</strong> O ESCRIBA A{' '}
          <a href="mailto:ventas@pene.pe">VENTAS@PENE.PE</a>
        </p>
      </div>

      <hr />

      <footer className="footer">
        <p>
          Si tiene comentarios sobre nuestra página web, puede escribirnos a la dirección indicada arriba.
          Sin embargo, debido al limitado personal en nuestra oficina, no podemos garantizar una respuesta directa.
        </p>
        <hr />
        <p>
          <a href="/legal">Aviso Legal</a>
        </p>
        <p>
          Copyright © 1987-2025 <strong>Productos Extranjeros y Novedades Electrónicas del Perú S.A.</strong>
        </p>
      </footer>
    </>
  )
}
