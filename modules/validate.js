export const name = document.querySelector('.name-input'),
  lastname = document.querySelector('.lastname-input'),
  email = document.querySelector('.email-input'),
  phone = document.querySelector('.phone-input'),
  btnSubmit = document.querySelector('.btn-submit');

// form check validate inputs
function validation(validTest, input, classOfInput) {
  if (input.classList.contains(classOfInput)) {
    if (validTest(input)) {
      formAddError(input);
      return true;
    } else {
      formRemoveError(input);
      return false;
    }
  }
}

//check disabled on submit
function enebleDisableButton(validTest, input) {
  if (validTest(input)) {
    btnSubmit.setAttribute('disabled', true);
    btnSubmit.classList.add('disabled');
  } else {
    btnSubmit.removeAttribute('disabled');
    btnSubmit.classList.remove('disabled');
  }
}

//change validate onchange inputs
export const inputAll = document.querySelectorAll('.input');
export function isError(validTest, input, classOfInput) {
  inputAll.forEach(i => {
    i.addEventListener('keyup', (e) => {
      if (e.target === input) validation(validTest, input, classOfInput);
      enebleDisableButton(validTest, input)
    })
  })
}

//add error class
function formAddError(input) {
  input.classList.add('error-border', 'error-color');
  input.previousElementSibling.classList.add('error-color');
}
//remove error class
function formRemoveError(input) {
  input.classList.remove('error-border', 'error-color')
  input.previousElementSibling.classList.remove('error-color');
}
//validate name
export function nameTest(input) {
  return !/^([А-Яа-я\-\']{2,50})$/.test(input.value);
}
//validate last name
export function lastNameTest(input) {
  return !/^([А-Яа-я\-\']{4,50})$/.test(input.value);
}
//validate email
export function emailTest(input) {
  return !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(input.value);
}
//validate phone
export function phoneTest(input) {
  return !/^[\+]{0,1}380([0-9]{9})$/.test(input.value);
}