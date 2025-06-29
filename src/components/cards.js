function createDetails() {
  return `
    <div class="details js-details-panel">
      <div class="details__header">
        <h3 class="details__title">Desglose de precios</h3>
        <svg class="details__close js-details-close" aria-hidden="true">
          <use xlink:href="/src/assets/svg/sprite.svg#cerrar"></use>
        </svg>
      </div>
      <div class="details__body">
        <h3 class="details__summary">
          <strong>Marruecos, África</strong>
          9 días
        </h3>
        <dl class="details__list">
          <dt>Precio antes de impuestos</dt>
          <dd>1.124,00 €</dd>
          <dt>Impuesto</dt>
          <dd>4,43 €</dd>
          <dt>Lorem ipsum</dt>
          <dd>150,42 €</dd>
        </dl>
      </div>
      <div class="details__footer">
        <dl class="details__total">
          <dt>Precio final</dt>
          <dd>2.455,00 €</dd>
        </dl>
      </div>
    </div>
  `;
}

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
            ${createDetails()}
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
      <div class="cards__list">
        <h2 class="cards__title">Asia</h2>
        <div class="cards__item">${createCard("card1.png", "quads")}</div>
        <div class="cards__item">${createCard("card2.png", "parapente")}</div>
        <div class="cards__item">${createCard("card3.png", "quads")}</div>
      </div>
      <div class="cards__list">
        <h2 class="cards__title">América</h2>
        <div class="cards__item">${createCard("card1.png", "surf")}</div>
        <div class="cards__item">${createCard("card2.png", "snowboard")}</div>
        <div class="cards__item">${createCard("card3.png", "buceo")}</div>
      </div>
    </div>
  `);

  return fragment;
}

function resetDetailsPanels() {
  const allDetailsPanels = document.querySelectorAll(".js-details-panel");
  allDetailsPanels.forEach((el) => {
    el.classList.remove("is-visible");
  });
  document.body.classList.remove("no-scroll");
}

export function showCardDetails() {
  const body = document.body;
  const detailsShow = document.querySelectorAll(".js-details-show");

  detailsShow.forEach((el) => {
    el.addEventListener("click", () => {
      // Ocultamos paneles
      resetDetailsPanels();

      // Mostramos panel
      const detailsPanel = el
        .closest(".card")
        .querySelector(".js-details-panel");
      const detailsClose = el
        .closest(".card")
        .querySelector(".js-details-close");
      detailsPanel.classList.add("is-visible");

      // Posicionamos panel
      const cardsRect = document
        .querySelector(".js-cards")
        .getBoundingClientRect();
      const detailsRect = detailsPanel.getBoundingClientRect();
      if (window.getComputedStyle(detailsPanel).position == "fixed") {
        body.classList.add("no-scroll");
      }
      if (
        detailsRect.left + detailsRect.width >
          cardsRect.left + cardsRect.width &&
        detailsRect.left != "0"
      ) {
        detailsPanel.style.left = `${cardsRect.right - detailsRect.right}px`;
      }
      if (
        detailsRect.top + detailsRect.height >
          cardsRect.top + cardsRect.height &&
        detailsRect.top != "0"
      ) {
        detailsPanel.style.top = `${
          cardsRect.bottom - detailsRect.bottom - 64
        }px`;
      }

      // Cerramos panel
      detailsClose.addEventListener("click", () => {
        detailsPanel.classList.remove("is-visible");
        body.classList.remove("no-scroll");
      });
    });
  });

  window.addEventListener("resize", () => {
    resetDetailsPanels();
  });
}
