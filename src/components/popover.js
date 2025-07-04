export function createPopover(
  id,
  destination,
  days,
  priceBeforeTaxes,
  taxes,
  finalPrice
) {
  return `
    <div class="popover js-popover" role="dialog" id="popover-${id}" aria-labelledby="title-${id}">
      <div class="popover__header">
        <h3 class="popover__title" id="title-${id}">Desglose de precios</h3>
        <button type="button" class="button button--icon-32 js-popover-close" aria-label="Cerrar desglose de precios">
          <svg aria-hidden="true">
            <use xlink:href="./assets/svg/sprite.svg#cerrar"></use>
          </svg>
        </button>
      </div>
      <div class="popover__body">
        <h3 class="popover__summary">
          <strong>${destination}</strong>
          ${days} días
        </h3>
        <dl class="popover__list">
          <dt>Precio antes de impuestos</dt>
          <dd>${priceBeforeTaxes}</dd>
          <dt>Impuesto</dt>
          <dd>${taxes}</dd>
          <dt>Lorem ipsum</dt>
          <dd>111,22 €</dd>
        </dl>
      </div>
      <div class="popover__footer">
        <dl class="popover__total">
          <dt>Precio final</dt>
          <dd>${finalPrice}</dd>
        </dl>
      </div>
    </div>
`;
}

export function openPopover(el) {
  // Ocultamos popovers si hay alguno abierto
  //
  closePopover();

  // Mostramos panel
  //
  const popover = el.closest(".card").querySelector(".js-popover");
  const popoverClose = el.closest(".card").querySelector(".js-popover-close");
  popover.classList.add("is-visible");

  // Posicionamos popover
  //
  const cardsRect = document.querySelector(".js-cards").getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  if (window.getComputedStyle(popover).position == "fixed") {
    document.body.classList.add("no-scroll");
  }
  if (
    popoverRect.left + popoverRect.width > cardsRect.left + cardsRect.width &&
    popoverRect.left != "0"
  ) {
    popover.style.left = `${cardsRect.right - popoverRect.right}px`;
  }
  if (
    popoverRect.top + popoverRect.height > cardsRect.top + cardsRect.height &&
    popoverRect.top != "0"
  ) {
    popover.style.top = `${cardsRect.bottom - popoverRect.bottom - 64}px`;
  }

  // Cerramos popover
  //
  popoverClose.addEventListener("click", () => {
    closePopover();
  });
}

export function closePopover() {
  const allPopovers = document.querySelectorAll(".js-popover");
  allPopovers.forEach((el) => {
    el.classList.remove("is-visible");
    el.parentElement
      .querySelector("button[aria-expanded]")
      .setAttribute("aria-expanded", "false");
  });
  document.body.classList.remove("no-scroll");
}
