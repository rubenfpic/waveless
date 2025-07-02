import { slidesData } from "../data/data.js";

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

function createDot(index) {
  return `
    <button class="slider__dot js-slider-dot" aria-label="Ir al slide ${
      index + 1
    }"></button>
  `;
}

export function createSlider() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="slider__layout">
      <div class="slider__track js-slider-track"></div>
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
      <div class="slider__dots js-dots-container"></div>
    </div>
  `);

  return fragment;
}

export function activateSlider() {
  const prevButton = document.querySelector(".js-slider-prev");
  const nextButton = document.querySelector(".js-slider-next");
  const sliderTrack = document.querySelector(".js-slider-track");
  const dotsContainer = document.querySelector(".js-dots-container");
  const sliderWidth = document
    .querySelector(".js-slider")
    .getBoundingClientRect().width;

  let currentItem = 0;

  // Get index
  //
  function getPrevIndex(index, length) {
    return index == 0 ? length - 1 : index - 1;
  }
  function getNextIndex(index, length) {
    return index == length - 1 ? 0 : index + 1;
  }

  // Add items
  //
  function addCurrentItem() {
    const sliderCurrentItemHTML = createSliderItem(
      slidesData[currentItem].image,
      slidesData[currentItem].country
    );
    const sliderCurrentItemNode = document
      .createRange()
      .createContextualFragment(sliderCurrentItemHTML);
    sliderTrack.append(sliderCurrentItemNode);
  }
  function addPrevItem() {
    const sliderPrevItemHTML = createSliderItem(
      slidesData[getPrevIndex(currentItem, slidesData.length)].image,
      slidesData[getPrevIndex(currentItem, slidesData.length)].country
    );
    const sliderPrevItemNode = document
      .createRange()
      .createContextualFragment(sliderPrevItemHTML);
    sliderTrack.prepend(sliderPrevItemNode);
  }
  function addNextItem() {
    const sliderNextItemHTML = createSliderItem(
      slidesData[getNextIndex(currentItem, slidesData.length)].image,
      slidesData[getNextIndex(currentItem, slidesData.length)].country
    );
    const sliderNextItemNode = document
      .createRange()
      .createContextualFragment(sliderNextItemHTML);
    sliderTrack.append(sliderNextItemNode);
  }

  function updateDots() {
    const sliderDots = document.querySelectorAll(".js-slider-dot");
    sliderDots.forEach((el, index) => {
      el.classList.remove("is-active");
      index == currentItem &&
        document
          .querySelectorAll(".js-slider-dot")
          [index].classList.add("is-active");
    });
  }

  function showSlide(index) {
    currentItem = index;
    sliderTrack.style.transform = `translateX(-${sliderWidth * currentItem}px)`;
    updateDots();
  }

  prevButton.addEventListener("click", () => {
    currentItem = getPrevIndex(currentItem, slidesData.length);
    showSlide(currentItem);
  });

  nextButton.addEventListener("click", () => {
    currentItem = getNextIndex(currentItem, slidesData.length);
    showSlide(currentItem);
  });

  slidesData.forEach((el, index) => {
    const dotHTML = createDot(index);
    const dotNode = document.createRange().createContextualFragment(dotHTML);
    const dotButton = dotNode.querySelector(".js-slider-dot");
    dotButton.addEventListener("click", () => {
      showSlide(index);
    });
    dotsContainer.append(dotNode);
  });

  addCurrentItem();
  addPrevItem();
  addNextItem();
  updateDots();
}
