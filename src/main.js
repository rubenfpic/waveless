import "./styles/main.scss";

import { createHeader } from "./components/header.js";
import { createHero } from "./components/hero.js";
import { createIntro } from "./components/intro.js";
import { createFilters } from "./components/filters.js";
import { createCards } from "./components/cards.js";
import { createFooter } from "./components/footer.js";

const headerNode = document.getElementById("header");
const headerContent = createHeader();
headerNode.appendChild(headerContent);

const heroNode = document.getElementById("hero");
const heroContent = createHero();
heroNode.appendChild(heroContent);

const introNode = document.getElementById("intro");
const introContent = createIntro();
introNode.appendChild(introContent);

const filtersNode = document.getElementById("filters");
const filtersContent = createFilters();
filtersNode.appendChild(filtersContent);

const cardsNode = document.getElementById("cards");
const cardsContent = createCards();
cardsNode.appendChild(cardsContent);

const footerNode = document.getElementById("footer");
const footerContent = createFooter();
footerNode.appendChild(footerContent);

// Toggle para mostrar el panel de filtros
const filtersToggle = document.querySelector(".filters__toggle");
const filtersPanel = document.querySelector("#filtersPanel");
const filtersClose = document.querySelector(".js-filters-close");
filtersToggle.addEventListener("click", () => {
  filtersPanel.classList.toggle("is-visible");
});
filtersClose.addEventListener("click", () => {
  filtersPanel.classList.toggle("is-visible");
});

// Toggle para desplegar los fieldset
const legendsList = document.querySelectorAll(".js-legend");
legendsList.forEach((legend) => {
  legend.addEventListener("click", () => {
    legend.parentElement.classList.toggle("is-collapsed");
    // legend.querySelector(".js-chevron").classList.toggle("is-rotated");
  });
});

// Toggle para ampliar los listados de elementos de los filtros
const aventuraButton = document.querySelector("#aventuraToggle");
const aventuraList = document.querySelectorAll(
  "#aventuraFieldset .input-wrapper.is-hidden"
);
aventuraButton.addEventListener("click", () => {
  aventuraList.forEach((item) => {
    item.classList.toggle("is-hidden");
  });
  aventuraButton.textContent = !document.querySelector(
    "#aventuraFieldset .input-wrapper.is-hidden"
  )
    ? "Ver menos"
    : "Ver más";
});
