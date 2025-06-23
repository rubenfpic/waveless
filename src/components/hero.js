export function createHero() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="hero__layout">
      THE HERO COMPONENT
    </div>`);

  return fragment;
}
