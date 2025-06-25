export function createFilters() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="filters__layout">
      <button class="filters__toggle">
        <svg class="filters__icon" aria-hidden="true">
          <use xlink:href="/src/assets/svg/sprite.svg#filtros"></use>
        </svg>
        <span>Ver filtros</span>
      </button>
      <div class="filters__panel" id="filtersPanel">
        PANEL DE FILTROS
      </div>
    </div>
  `);

  const filtersToggle = fragment.querySelector(".filters__toggle");
  const filtersPanel = fragment.querySelector("#filtersPanel");
  filtersToggle.addEventListener("click", () => {
    filtersPanel.classList.toggle("is-visible");
  });
  return fragment;
}
