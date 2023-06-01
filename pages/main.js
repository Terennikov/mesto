const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__input_type_name');
const detailInput = popup.querySelector('.popup__input_type_details');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = popup.querySelector('.popup__form')

const closePopup = () => {
  popup.classList.remove('popup__opened');
}


editButton.addEventListener('click', () => {
  popup.classList.add('popup__opened');
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

popupClose.addEventListener('click', () => {
  closePopup();
})

popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup();
})
