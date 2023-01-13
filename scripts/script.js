const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.form__item_el_name');
const descriptionInput = document.querySelector('.form__item_el_description');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupEditForm = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
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
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}
popupEditForm.addEventListener('submit', handleFormSubmit);