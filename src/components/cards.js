import {
  createPopover,
  openPopover,
  closePopover,
} from "../components/popover.js";
import { cardsData } from "../data/data.js";

function createCard({
  id,
  image,
  adventure,
  destination,
  days,
  priceBeforeTaxes,
  taxes,
  finalPrice,
}) {
  return `
    <article class="card js-card" data-adventure="${adventure}">
      <div class="card__image">
        <img src="/src/assets/img/${image}" alt="Imagen de ${adventure} en ${destination}" />
        <span class="card__tag">${adventure}</span>
      </div>
      <div class="card__body">
        <p class="card__location"><strong>${destination}</strong> ${days} días</p>
        <h3 class="card__title">Descubre Bangkok con Iberojet</h3>
      </div>
      <div class="card__footer">
        <div class="card__price">
          <strong>
            <small>Desde</small>
            248,00 €
          </strong>
          <div class="card__show-details">
            <button type="button" class="button button--link p-0 js-details-show" aria-expanded="false" aria-controls="popover-${id}">
              Ver desglose<svg class="button__icon-16" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </button>
            ${createPopover(
              id,
              destination,
              days,
              priceBeforeTaxes,
              taxes,
              finalPrice
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
        <div class="cards__item js-cards-item">${createCard(cardsData[0])}</div>
        <div class="cards__item js-cards-item">${createCard(cardsData[1])}</div>
        <div class="cards__item js-cards-item">${createCard(cardsData[2])}</div>
      </div>
      <div class="cards__list js-cards-list">
        <h2 class="cards__title js-cards-title">América</h2>
        <div class="cards__item js-cards-item">${createCard(cardsData[3])}</div>
        <div class="cards__item js-cards-item">${createCard(cardsData[4])}</div>
        <div class="cards__item js-cards-item">${createCard(cardsData[5])}</div>
      </div>
    </div>
  `);

  return fragment;
}

export function showCardDetails() {
  const detailsShow = document.querySelectorAll(".js-details-show");

  detailsShow.forEach((el) => {
    // el.setAttribute("aria-expanded", false);
    el.addEventListener("click", () => {
      closePopover();
      openPopover(el);
      el.setAttribute("aria-expanded", true);
    });
  });

  window.addEventListener("resize", () => {
    closePopover();
  });
}
