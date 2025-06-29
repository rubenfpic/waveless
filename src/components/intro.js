export function createIntro() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="intro__layout">
      <h1 class="intro__title">Vive tus propias aventuras</h1>
      <p class="intro__subtitle">Para los que les gusta explorar y conocer mundo sin complejos</p>
    </div>
  `);

  return fragment;
}
