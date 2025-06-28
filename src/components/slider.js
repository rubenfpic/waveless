export function createSlider() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="slider__layout">
      <div class="slider__item" style="background-image: url('/src/assets/img/slider1.png');">
        
        <div class="slider__content">
          <div class="slider__text">
            <h2 class="slider__title">Ruta por Australia</h2>
            <p class="slider__subtitle">Si te va la aventura, no te lo puedes perder</p>
          </div>
          <div class="slider__cta">
            <button class="button button--lg button--accent">Más información</button>
          </div>
        </div> 

        <button type="button" class="slider__nav-button slider__nav-button--prev" aria-label="Anterior">
          <svg aria-hidden="true">
            <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
          </svg>
        </button>
        <button type="button" class="slider__nav-button slider__nav-button--next" aria-label="Siguiente">
          <svg aria-hidden="true">
            <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
          </svg>
        </button>

        <div class="slider__dots">
          <button class="slider__dot is-active" aria-label="Slide 1"></button>
          <button class="slider__dot" aria-label="Slide 2"></button>
          <button class="slider__dot" aria-label="Slide 3"></button>
        </div>

      </div>
    </div>
  `);

  return fragment;
}
