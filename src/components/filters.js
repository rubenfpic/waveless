export function createFilters() {
  const fragment = document.createRange().createContextualFragment(`
    <button class="filters__toggle js-filters-toggle">
      <svg class="filters__icon" aria-hidden="true">
        <use xlink:href="/src/assets/svg/sprite.svg#filtros"></use>
      </svg>
      <span>Ver filtros</span>
    </button>
    <div class="filters__panel js-filters-panel" id="filtersPanel">
      <div class="filters__panel-inner">
        <div class="filters__header">
          <h3 class="filters__title">Filtrar mi búsqueda</h3>
          <svg class="filters__close js-filters-close" aria-hidden="true">
            <use xlink:href="/src/assets/svg/sprite.svg#cerrar"></use>
          </svg>
        </div>
        <form class="filters__form">
          <fieldset class="filters__fieldset" id="aventuraFieldset">
            <legend class="filters__legend js-legend">
              <svg class="filters__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#aventura"></use>
              </svg>
              <span class="filters__legend-text">Aventura</span>
              <svg class="filters__chevron js-chevron" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </legend>
            <div class="input-wrapper">
              <label for="quads">
                <input class="input" type="checkbox" name="aventura" id="quads" value="quads">
                Quads 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper">
              <label for="parapente">
                <input class="input" type="checkbox" name="aventura" id="parapente" value="parapente">
                Parapente 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper">
              <label for="rafting">
                <input class="input" type="checkbox" name="aventura" id="rafting" value="rafting">
                Rafting 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper is-hidden">
              <label for="buceo">
                <input class="input" type="checkbox" name="aventura" id="buceo" value="buceo">
                Buceo 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper is-hidden">
              <label for="surf">
                <input class="input" type="checkbox" name="aventura" id="surf" value="surf">
                Surf 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper is-hidden">
              <label for="snowboard">
                <input class="input" type="checkbox" name="aventura" id="snowboard" value="snowboard">
                Snowboard 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper is-hidden">
              <label for="paracaidas">
                <input class="input" type="checkbox" name="aventura" id="paracaidas" value="paracaidas">
                Paracaídas 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <button class="button button--link" id="aventuraToggle" type="button">Ver más</button>
          </fieldset>
          <fieldset class="filters__fieldset is-collapsed" id="destinosFieldset">
            <legend class="filters__legend js-legend">
              <svg class="filters__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#destinos"></use>
              </svg>
              <span class="filters__legend-text">Destinos</span>
              <svg class="filters__chevron js-chevron" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </legend>
            <div class="input-wrapper">
              <label for="asia">
                <input class="input" type="checkbox" name="destinos" id="asia" value="asia">
                Asia 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper">
              <label for="america">
                <input class="input" type="checkbox" name="destinos" id="america" value="america">
                América 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset class="filters__fieldset is-collapsed" id="alojamientoFieldset">
            <legend class="filters__legend js-legend">
              <svg class="filters__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#alojamiento"></use>
              </svg>
              <span class="filters__legend-text">Alojamiento</span>
              <svg class="filters__chevron js-chevron" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </legend>
            <div class="input-wrapper">
              <label for="hotel">
                <input class="input" type="checkbox" name="alojamiento" id="hotel" value="hotel">
                Hotel 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
            <div class="input-wrapper">
              <label for="apartamento">
                <input class="input" type="checkbox" name="alojamiento" id="apartamento" value="apartamento">
                Apartamento 
                <span class="tooltip">
                  <svg class="tooltip__icon" aria-hidden="true">
                    <use xlink:href="/src/assets/svg/sprite.svg#info"></use>
                  </svg>
                  <span class="tooltip__text">Lorem ipsum</span>
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset class="filters__fieldset is-collapsed">
            <legend class="filters__legend js-legend">
              <svg class="filters__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#precio"></use>
              </svg>
              <span class="filters__legend-text">Precio</span>
              <svg class="filters__chevron js-chevron" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </legend>
            <div class="input-wrapper">
              <svg class="input-wrapper__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#precio"></use>
              </svg>
              <input class="input input--icon" type="text" name="precio" placeholder="Mínimo">
            </div>
            <div class="input-wrapper">
              <svg class="input-wrapper__icon" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#precio"></use>
              </svg>
              <input class="input input--icon" type="text" name="precio" placeholder="Máximo">
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  `);

  return fragment;
}

export function toggleFiltersPanel() {
  const filtersToggle = document.querySelector(".js-filters-toggle");
  const filtersPanel = document.querySelector(".js-filters-panel");
  const filtersClose = document.querySelector(".js-filters-close");
  filtersToggle.addEventListener("click", () => {
    filtersPanel.classList.toggle("is-visible");
  });
  filtersClose.addEventListener("click", () => {
    filtersPanel.classList.toggle("is-visible");
  });
}

export function toggleFiltersFieldset() {
  const legendsList = document.querySelectorAll(".js-legend");
  legendsList.forEach((legend) => {
    legend.addEventListener("click", () => {
      legend.parentElement.classList.toggle("is-collapsed");
    });
  });
}

export function toggleFiltersList() {
  const aventuraButton = document.querySelector("#aventuraToggle");
  const aventuraList = document.querySelectorAll(
    "#aventuraFieldset .input-wrapper.is-hidden"
  );
  aventuraButton.addEventListener("click", () => {
    aventuraList.forEach((item) => {
      item.classList.toggle("is-hidden");
    });
    aventuraButton.textContent = !document.querySelector(
      "#aventuraFieldset .input-wrapper.is-hidden"
    )
      ? "Ver menos"
      : "Ver más";
  });
}
