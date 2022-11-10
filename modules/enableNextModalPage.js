export function enableNextModalPage() {
  const checkbox = document.querySelectorAll('.radio'),
    buttonNext = document.querySelector('[data-button-next]');
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', () => {
      if (checkbox[i].hasAttribute('checked')) {
        buttonNext.removeAttribute('disabled');
        buttonNext.classList.remove('disabled');
      } else {
        buttonNext.setAttribute('disabled', true);
        buttonNext.classList.add('disabled');
      }
    })
  }
}