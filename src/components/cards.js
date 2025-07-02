import {
  createPopover,
  openPopover,
  closePopover,
} from "../components/popover.js";

function createCard(image, adventure) {
  return `
    <article class="card js-card" data-adventure="${adventure}">
      <div class="card__image">
        <img src="/src/assets/img/${image}" alt="Destino destacado" />
        <span class="card__tag">${adventure}</span>
      </div>
      <div class="card__body">
        <p class="card__location"><strong>Marruecos, África</strong> 9 días</p>
        <h3 class="card__title">Descubre Bangkok con Iberojet</h3>
      </div>
      <div class="card__footer">
        <div class="card__price">
          <strong>
            <small>Desde</small>
            248,00 €
          </strong>
          <div class="card__show-details">
            <button type="button" class="button button--link p-0 js-details-show">
              Ver desglose<svg class="button__icon-16" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </button>
            ${createPopover(
              "Marruecos, África",
              7,
              "1.124,00 €",
              "3,43 €",
              "4.455,00 €"
            )}
          </div>
        </div>
        <button type="button" class="button button--sm button--secondary">Reservar</button>
      </div>
    </article>
  `;
}

export function createCards() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="cards__layout">
      <div class="cards__list js-cards-list">
        <h2 class="cards__title js-cards-title">Asia</h2>
        <div class="cards__item js-cards-item">${createCard(
          "card1.png",
          "quads"
        )}</div>
        <div class="cards__item js-cards-item">${createCard(
          "card2.png",
          "parapente"
        )}</div>
        <div class="cards__item js-cards-item">${createCard(
          "card3.png",
          "quads"
        )}</div>
      </div>
      <div class="cards__list js-cards-list">
        <h2 class="cards__title js-cards-title">América</h2>
        <div class="cards__item js-cards-item">${createCard(
          "card1.png",
          "surf"
        )}</div>
        <div class="cards__item js-cards-item">${createCard(
          "card2.png",
          "snowboard"
        )}</div>
        <div class="cards__item js-cards-item">${createCard(
          "card3.png",
          "buceo"
        )}</div>
      </div>
    </div>
  `);

  return fragment;
}

export function showCardDetails() {
  const detailsShow = document.querySelectorAll(".js-details-show");

  detailsShow.forEach((el) => {
    el.addEventListener("click", () => {
      closePopover();
      openPopover(el);
    });
  });

  window.addEventListener("resize", () => {
    closePopover();
  });
}
