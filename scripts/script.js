const peprofileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupContainer = document.querySelector('.popup__container');

peprofileEditButton.addEventListener('click', openPopup);
function openPopup() {
  popup.classList.add('popup_opened');
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
popupContainer.addEventListener('click', function(event) {
  event.preventDefault();
}
)

const placesLikeButton = document.querySelector('places__like-button');
placesLikeButton.addEventListener('click', likeButton);
function likeButton() {
  places__like-button.classList.add('places__like-button_active');
}

const formElement = document.querySelector('popup__container');
const nameInput = document.querySelector('popup__name');
const jobInput = document.querySelector('popup__description');

function handleFormSubmit (evt) {
  evt.preventDefault();
  
   // Получите значение полей jobInput и nameInput из свойства value
   nameInput = nameInput.value;
   jobInput = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');

  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput;
  profileDescription.textContent = jobInput;
}

formElement.addEventListener('submit', handleFormSubmit);