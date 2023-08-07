// Обозначение элементов
import { initialCards, config } from "./constants.js"
import Card from "./Card.js"
import FormValidator from "./FormValidator.js"

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const editForm = document.querySelector('.popup__form_type_edit');
const popupForm = document.querySelector('.popup__form')
const popupImageForm = document.querySelector('.popup__container_type_image')
const nameInput = document.querySelector('.popup__input_type_name');
const detailInput = document.querySelector('.popup__input_type_details');
const popupAdd = document.querySelector('.popup_type_add');
const addForm = document.querySelector('.popup__form_type_add');
const submitButton = addForm.querySelector('.popup__submit-button')
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupClose = document.querySelector('.popup__close');
export const popupImage = document.querySelector('.popup_type_image');
export const popupImageContainer = document.querySelector('.popup__image');
export const popupImageName = document.querySelector('.popup__image-name');

const elements =  document.querySelector('.elements');
const elementsItem = document.querySelector('#item').content;
const elementTemplate = document.querySelector('.elements-template');

const popups = document.querySelectorAll(".popup");

// Рендер карточек

const createNewCard = (element, openPopup, template) => {
  const card = new Card(element, openPopup, template)
  return card.generate()
}

const cardFormValidator = new FormValidator(config, addForm)
const profileFormValidator = new FormValidator(config, editForm)


const renderElement = (element) => {
  elements.prepend(element)
}

const renderElementAdd = (element) => {
  elements.append(element)
}

initialCards.forEach(element => {
  renderElementAdd(createNewCard(element, openPopup, elementTemplate))
})

// закрытие, открытие попапов

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
  document.removeEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (event) => {
  if (event.key === "Escape") {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
  }
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened')

  document.addEventListener("keydown", closePopupEsc);
}

popups.forEach(element => { 
  const button = element.querySelector(".popup__close");
      button.addEventListener("click", ()=>{
        closePopup(element);
  });

  element.addEventListener("click", (evt) =>{
    if (evt.target === evt.currentTarget) closePopup(element);
  });

  
});

// Кнопки и формы 

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

addButton.addEventListener('click', () => {
  submitButton.classList.add('popup_opened')
  openPopup(popupAdd);
  addForm.reset() 
})

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup(popup);
})

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value
  const link = linkInput.value
  const elementData = {name, link}

  renderElement(createNewCard(elementData, openPopup, elementTemplate))
  addForm.reset();
  closePopup(popupAdd);
})
