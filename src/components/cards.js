function createCard(image) {
  return `
      <article class="card">
        <div class="card__image">
          <img src="/src/assets/img/${image}" alt="Destino destacado" />
          <span class="card__tag">Quads</span>
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
            <button href="#" class="button button--link p-0">
              Ver desglose<svg class="button__icon-16" aria-hidden="true">
                <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
              </svg>
            </button>
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
        <div class="cards__item">${createCard("card1.png")}</div>
        <div class="cards__item">${createCard("card2.png")}</div>
        <div class="cards__item">${createCard("card3.png")}</div>
      </div>
      <div class="cards__list">
        <h2 class="cards__title">América</h2>
        <div class="cards__item">${createCard("card1.png")}</div>
        <div class="cards__item">${createCard("card2.png")}</div>
        <div class="cards__item">${createCard("card3.png")}</div>
      </div>
    </div>
  `);

  return fragment;
}
