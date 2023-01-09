const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__name');
const descriptionInput = document.querySelector('.popup__description');
const peprofileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

peprofileEditButton.addEventListener('click', openPopup);
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

popupCloseButton.addEventListener('click', closePopup);
function closePopup() {
  popup.classList.remove('popup_opened');
}

popup.addEventListener('click', function(event) {
  if(!event.defaultPrevented) {
    closePopup();
  }
}
)
formElement.addEventListener('click', function(event) {
  event.preventDefault();
}
)

function handleFormSubmit (evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popup.classList.remove('popup_opened');
};

const saveButton = document.querySelector('.popup__save-button');
saveButton.addEventListener('click', handleFormSubmit);