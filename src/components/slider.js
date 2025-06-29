const slidesData = [
  { image: "slider1.png", country: "Australia" },
  { image: "slider2.png", country: "Brasil" },
  { image: "slider3.png", country: "Egipto" },
];

function createSliderItem(image, country, visible = "") {
  return `
    <div class="slider__item ${visible} js-slider-item" style="background-image: url('/src/assets/img/${image}');">
      <div class="slider__content">
        <div class="slider__text">
          <h2 class="slider__title">Ruta por ${country}</h2>
          <p class="slider__subtitle">Si te va la aventura, no te lo puedes perder</p>
        </div>
        <div class="slider__cta">
          <button class="button button--lg button--accent">Más información</button>
        </div>
      </div> 
    </div>
  `;
}

export function createSlider() {
  // ${createSliderItem("slider1.png", "Australia", "is-visible")}
  // ${createSliderItem("slider2.png", "Brasil")}
  // ${createSliderItem("slider3.png", "Egipto")}
  const fragment = document.createRange().createContextualFragment(`
    <div class="slider__layout">
      <div class="slider__track js-slider-track">



      </div>
      <button type="button" class="slider__nav-button slider__nav-button--prev js-slider-prev" aria-label="Anterior">
        <svg aria-hidden="true">
          <use xlink:href="/src/assets/svg/sprite.svg#chevron"></use>
        </svg>
      </button>
      <button type="button" class="slider__nav-button slider__nav-button--next js-slider-next" aria-label="Siguiente">
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
  `);

  return fragment;
}

export function activateSlider() {
  const prevButton = document.querySelector(".js-slider-prev");
  const nextButton = document.querySelector(".js-slider-next");
  const sliderTrack = document.querySelector(".js-slider-track");
  const sliderItems = document.querySelectorAll(".js-slider-item");
  const sliderWidth = document
    .querySelector(".js-slider")
    .getBoundingClientRect().width;

  let currentItem = 0;

  // Helpers
  //
  function getPrevItem(index, length) {
    return index == 0 ? length - 1 : index - 1;
  }
  function getNextItem(index, length) {
    return index == length - 1 ? 0 : index + 1;
  }

  // Añado el item actual
  //
  const sliderCurrentItemHTML = createSliderItem(
    slidesData[currentItem].image,
    slidesData[currentItem].country
  );
  const sliderCurrentItemNode = document
    .createRange()
    .createContextualFragment(sliderCurrentItemHTML);
  sliderTrack.append(sliderCurrentItemNode);

  // Añado el item anterior
  //
  const sliderPrevItemHTML = createSliderItem(
    slidesData[getPrevItem(currentItem, slidesData.length)].image,
    slidesData[getPrevItem(currentItem, slidesData.length)].country
  );
  const sliderPrevItemNode = document
    .createRange()
    .createContextualFragment(sliderPrevItemHTML);
  sliderTrack.prepend(sliderPrevItemNode);

  // Añado el item posterior
  //
  const sliderNextItemHTML = createSliderItem(
    slidesData[getNextItem(currentItem, slidesData.length)].image,
    slidesData[getNextItem(currentItem, slidesData.length)].country
  );
  const sliderNextItemNode = document
    .createRange()
    .createContextualFragment(sliderNextItemHTML);
  sliderTrack.append(sliderNextItemNode);

  // Dejar el currentItem en el centro
  //
  sliderTrack.style.transform = `translateX(-${sliderWidth}px)`;
  console.log("anchura: ", sliderWidth);

  // setCurrentItem
  //
  function showSlide(index) {
    currentItem = index;
    sliderTrack.style.transform = `translateX(-${currentItem * sliderWidth}px)`;
  }

  // Ir al elemento previo
  //
  prevButton.addEventListener("click", () => {
    currentItem = getPrevItem(currentItem, slidesData.length);
    console.log("currentItem", currentItem);
    showSlide(currentItem);
  });

  // Ir al elemento siguiente
  //
  nextButton.addEventListener("click", () => {
    currentItem = getNextItem(currentItem, slidesData.length);
    console.log("currentItem", currentItem);
    showSlide(currentItem);
  });
}
