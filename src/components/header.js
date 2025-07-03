export function createHeader() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <a href="/" class="logo" aria-label="Inicio">
        <img src="/src/assets/svg/logo.svg" class="logo__img" alt="Waveless" />
      </a>
      <div class="header__nav">
        <nav class="nav js-nav" aria-label="Menú principal">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#" class="nav__link is-active">
                <svg class="nav__icon" aria-hidden="true">
                  <use xlink:href="/src/assets/svg/sprite.svg#aventura"></use>
                </svg>
                <span class="nav__text" data-text="Aventura">Aventura</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                <svg class="nav__icon" aria-hidden="true">
                  <use xlink:href="/src/assets/svg/sprite.svg#destinos"></use>
                </svg>
                <span class="nav__text" data-text="Destinos">Destinos</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                <svg class="nav__icon" aria-hidden="true">
                  <use xlink:href="/src/assets/svg/sprite.svg#alojamiento"></use>
                </svg>
                <span class="nav__text" data-text="Alojamiento">Alojamiento</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                <span class="nav__text" data-text="Sobre nosotros">Sobre nosotros</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__actions">
        <button type="button" class="button button--base button--primary">Reserva</button>
        
        <button type="button" class="header__burger js-burger-toggle button button--icon-32" aria-label="Abrir menú">
          <svg class="nav__burger-icon" aria-hidden="true">
            <use xlink:href="/src/assets/svg/sprite.svg#burger"></use>
          </svg>
        </button>

      </div>
    </div>  
  `);

  const burger = fragment.querySelector(".js-burger-toggle");
  const nav = fragment.querySelector(".js-nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  });

  window.addEventListener("resize", () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  });

  return fragment;
}
