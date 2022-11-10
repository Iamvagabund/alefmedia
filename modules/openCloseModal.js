export const modal = document.querySelector('[data-modal-target]'),
  btnRegistration = document.querySelector('.btn-registration'),
  modalRadio = document.querySelector('[data-radio]'),
  modalForm = document.querySelector('[data-form]'),
  buttonNext = document.querySelector('[data-button-next]'),
  buttonPrev = document.querySelector('[data-button-prev]');

// open, close modal
export function openModal() {
  modal.classList.toggle('open');
}

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') === '' || e.target.getAttribute('data-close-button') === '') {
    openModal()
  }
});

//show next modal content
buttonNext.addEventListener('click', () => {
  modalRadio.classList.remove('show');
  modalForm.classList.add('show');
})

//show prev modal content
buttonPrev.addEventListener('click', () => {
  modalForm.classList.remove('show');
  modalRadio.classList.add('show');
})