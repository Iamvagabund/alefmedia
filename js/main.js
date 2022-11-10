import { addChecked } from '../modules/addChecked.js';
import { btnRegistration, openModal } from '../modules/openCloseModal.js';
import { name, lastname, email, phone, nameTest, lastNameTest, emailTest, phoneTest, isError } from '../modules/validate.js';
import { enableNextModalPage } from '../modules/enableNextModalPage.js';

// checked for radio buttons
addChecked();

// open-close modal
btnRegistration.addEventListener('click', openModal);

// validate form in modal
isError(nameTest, name, 'name-input');
isError(lastNameTest, lastname, 'lastname-input');
isError(emailTest, email, 'email-input');
isError(phoneTest, phone, 'phone-input');

//enable button for next modal page
enableNextModalPage();