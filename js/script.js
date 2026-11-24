const buttons = document.querySelectorAll('.tabs__btn')
const panels = document.querySelectorAll('.tabs-panel')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    buttons.forEach(b => b.classList.remove('tabs__btn--active'));
    panels.forEach(p => p.classList.remove('tab-panel--active'));

    button.classList.add('tabs__btn--active');
    document.querySelector(`.tab-panel[data-panel="${target}"]`)
      .classList.add('tab-panel--active');
  });
});
