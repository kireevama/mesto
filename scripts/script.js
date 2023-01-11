const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const form__item_el_name = document.querySelector('.popup__name');
const form__item_el_description = document.querySelector('.popup__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupEditForm = document.querySelector('.popup__edit-form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
  popup.classList.add('popup_opened');
  form__item_el_name.value = profileName.textContent;
  form__item_el_description.value = profileDescription.textContent;
}
profileEditButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);

// popup.addEventListener('click', function(event) {
//   if(!event.defaultPrevented) {
//     closePopup();
//   }
// }
// )
// popupEditForm.addEventListener('click', function(event) {
//   event.preventDefault();
// }
// )

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = form__item_el_name.value;
  profileDescription.textContent = form__item_el_description.value;
  closePopup();
}
popupEditForm.addEventListener('submit', handleFormSubmit);