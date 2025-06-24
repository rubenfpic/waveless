export function createFooter() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="footer__layout">
      <div class="footer__main">
        <a href="/" class="logo" aria-label="Inicio">
          <img src="/src/assets/svg/logo.svg" class="logo__img" alt="Waveless" />
        </a>
      </div>
      <div class="footer__legal">
        <p>@2025 Waveless - Todos los derechos reservados.</p>
      </div>
    </div>
  `);

  return fragment;
}
