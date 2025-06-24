export function createIntro() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="intro__layout">
      <h1>Vive tus propias aventuras</h1>
      <p>Para los que les gusta explorar y conocer mundo sin complejos</p>
    </div>
  `);

  return fragment;
}
