function createLegend(icon, name) {
  return `
    <legend class="filters__legend js-legend">
      <svg class="filters__icon" aria-hidden="true">
        <use xlink:href="./assets/svg/sprite.svg#${icon}"></use>
      </svg>
      <span class="filters__legend-text">${name}</span>
      <svg class="filters__chevron js-chevron" aria-hidden="true">
        <use xlink:href="./assets/svg/sprite.svg#chevron"></use>
      </svg>
    </legend>
  `;
}

function createCheckbox(group, filter, label) {
  return `
    <label for="${filter}">
      <input class="input" type="checkbox" name="${group}" id="${filter}" value="${filter}">
      ${label} 
      <span class="tooltip">
        <svg class="tooltip__icon" aria-hidden="true">
          <use xlink:href="./assets/svg/sprite.svg#info"></use>
        </svg>
        <span class="tooltip__text">Lorem ipsum</span>
      </span>
    </label>
  `;
}

function createInput(icon, name, placeholder) {
  return `
    <svg class="input-wrapper__icon" aria-hidden="true">
      <use xlink:href="./assets/svg/sprite.svg#${icon}"></use>
    </svg>
    <input class="input input--icon" type="text" name="${name}" placeholder="${placeholder}">
  `;
}

export function createFilters() {
  const fragment = document.createRange().createContextualFragment(`
    <button type="submit" class="filters__toggle js-filters-toggle" aria-controls="filtersPanel" aria-expanded="false">
      <svg class="filters__icon" aria-hidden="true">
        <use xlink:href="./assets/svg/sprite.svg#filtros"></use>
      </svg>
      <span>Ver filtros</span>
    </button>
    <div class="filters__panel js-filters-panel" id="filtersPanel">
      <div class="filters__panel-inner">
        <div class="filters__header">
          <h3 class="filters__title">Filtrar mi búsqueda</h3>
          <svg class="filters__close js-filters-close" aria-hidden="true">
            <use xlink:href="./assets/svg/sprite.svg#cerrar"></use>
          </svg>
        </div>
        <form class="filters__form">
          <fieldset class="filters__fieldset js-filters-fieldset" id="adventureFieldset">
            ${createLegend("aventura", "Aventura")}
            <div class="checkbox-wrapper">
              ${createCheckbox("adventure", "quads", "Quads")}
            </div>
            <div class="checkbox-wrapper">
              ${createCheckbox("adventure", "parapente", "Parapente")}
            </div>
            <div class="checkbox-wrapper">
              ${createCheckbox("adventure", "rafting", "Rafting")}
            </div>
            <div class="checkbox-wrapper is-hidden">
              ${createCheckbox("adventure", "buceo", "Buceo")}
            </div>
            <div class="checkbox-wrapper is-hidden">
              ${createCheckbox("adventure", "surf", "Surf")}
            </div>
            <div class="checkbox-wrapper is-hidden">
              ${createCheckbox("adventure", "snowboard", "Snowboard")}
            </div>
            <div class="checkbox-wrapper is-hidden">
              ${createCheckbox("adventure", "paracaidas", "Paracaídas")}
            </div>
            <button class="button button--link js-filters-list-toggle" id="adventureToggle" type="button">Ver más</button>
          </fieldset>
          <fieldset class="filters__fieldset js-filters-fieldset is-collapsed" id="destinationFieldset">
            ${createLegend("destinos", "Destinos")}
            <div class="checkbox-wrapper">
              ${createCheckbox("destination", "asia", "Asia")}
            </div>
            <div class="checkbox-wrapper">
              ${createCheckbox("destination", "america", "América")}
            </div>
          </fieldset>
          <fieldset class="filters__fieldset js-filters-fieldset is-collapsed" id="accommodationFieldset">
            ${createLegend("alojamiento", "Alojamiento")}
            <div class="checkbox-wrapper">
              ${createCheckbox("accommodation", "hotel", "Hotel")}
            </div>
            <div class="checkbox-wrapper">
              ${createCheckbox("accommodation", "apartamento", "Apartamento")}
            </div>
          </fieldset>
          <fieldset class="filters__fieldset js-filters-fieldset is-collapsed" id="priceFieldset">
            ${createLegend("precio", "Precio")}
            <div class="input-wrapper">
              ${createInput("precio", "precio", "Mínimo")}
            </div>
            <div class="input-wrapper">
              ${createInput("precio", "precio", "Máximo")}
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
  const body = document.querySelector("body");

  filtersToggle.addEventListener("click", () => {
    const isExpanded = filtersPanel.classList.contains("is-visible");

    filtersToggle.setAttribute("aria-expanded", !isExpanded);
    filtersPanel.classList.toggle("is-visible");
    if (
      window.getComputedStyle(filtersPanel).position == "fixed" &&
      filtersPanel.classList.contains("is-visible")
    ) {
      body.classList.add("no-scroll");
    }
  });

  filtersClose.addEventListener("click", () => {
    filtersPanel.classList.toggle("is-visible");
    body.classList.remove("no-scroll");
  });

  window.addEventListener("resize", () => {
    filtersPanel.classList.remove("is-visible");
    filtersToggle.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
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
  const filtersFieldsets = document.querySelectorAll(".js-filters-fieldset");

  filtersFieldsets.forEach((el) => {
    const filtersListToggle = el.querySelector(".js-filters-list-toggle");
    const filtersListHiddenElements = el.querySelectorAll(".is-hidden");

    if (filtersListToggle) {
      filtersListToggle.addEventListener("click", () => {
        filtersListHiddenElements.forEach((item) => {
          item.classList.toggle("is-hidden");
        });
        filtersListToggle.textContent = !document.querySelector(".is-hidden")
          ? "Ver menos"
          : "Ver más";
      });
    }
  });
}

export function activateAdventureFilter() {
  const checkboxes = document.querySelectorAll('input[name="adventure"]');
  const cards = document.querySelectorAll(".js-card");
  const cardsLists = document.querySelectorAll(".js-cards-list");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const activeCheckboxes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      cards.forEach((card) => {
        const cardValue = card.getAttribute("data-adventure");
        const shouldShow =
          activeCheckboxes.length === 0 || activeCheckboxes.includes(cardValue);

        shouldShow
          ? card.closest(".js-cards-item").classList.remove("is-hidden")
          : card.closest(".js-cards-item").classList.add("is-hidden");
      });

      cardsLists.forEach((el) => {
        el.querySelector(".js-cards-item:not(.is-hidden)")
          ? el.classList.remove("is-hidden")
          : el.classList.add("is-hidden");
      });
    });
  });
}
