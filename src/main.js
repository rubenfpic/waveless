import "./styles/main.scss";

import { createHeader } from "./components/header.js";
import { createHero } from "./components/hero.js";
import { createIntro } from "./components/intro.js";
import {
  createFilters,
  toggleFiltersPanel,
  toggleFiltersFieldset,
  toggleFiltersList,
} from "./components/filters.js";
import { createCards, showCardDetails } from "./components/cards.js";
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

toggleFiltersPanel();
toggleFiltersFieldset();
toggleFiltersList();

showCardDetails();
