export function createCards() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="cards__layout">
      <div class="cards__list">
        <h2 class="cards__title">Asia</h2>
        <div class="cards__item">CARDS 1</div>
        <div class="cards__item">CARDS 2</div>
        <div class="cards__item">CARDS 3</div>
      </div>
      <div class="cards__list">
        <h2 class="cards__title">América</h2>
        <div class="cards__item">CARDS 4</div>
        <div class="cards__item">CARDS 5</div>
        <div class="cards__item">CARDS 6</div>
      </div>
    </div>
  `);

  return fragment;
}
