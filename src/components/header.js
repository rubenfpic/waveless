export function createHeader() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <a href="/" class="logo" aria-label="Inicio">
          <img src="/src/assets/svg/logo.svg" class="logo__img" alt="Waveless" />
      </a>
      <nav class="nav" aria-label="Menú principal">
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
      <div class="header__actions">
        <button class="button button--base button--primary">Reserva</button>
      </div>
      <img src="/src/assets/svg/burger.svg" class="header__burger" alt="Burger" />
    </div>`);

  return fragment;
}
