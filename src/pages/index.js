// Обозначение элементов
import "./index.css"
import { initialCards, config } from "../scripts/constants.js"
import FormValidator from "../scripts/FormValidator.js"
import UserInfo from "../scripts/UserInfo.js"
import PopupWithImage from "../scripts/PopupWithImage.js"
import Section from "../scripts/Section.js"
import createCard from "../scripts/createCard.js"
import PopupWithForm from "../scripts/PopupWithForm.js"



const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');


const popup = document.querySelector('.popup');
const editForm = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const detailInput = document.querySelector('.popup__input_type_details');
const addForm = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupClose = document.querySelector('.popup__close');
const popupImage = document.querySelector('.popup_type_image');
const popupImageContainer = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

const elements =  document.querySelector('.elements');
const elementsItem = document.querySelector('#item').content;
const element = document.querySelector('.elements__item')
const elementTemplate = document.querySelector('.elements-template');

const popups = document.querySelectorAll(".popup");
const imageSelector = ".popup_type_image"
const profileSelector = ".popup_type_edit"
const cardSelector = ".popup_type_add"
const templateSelector = ".elements-template"
const containerSelector = ".elements__container"

// Рендер карточек

const userInfo = new UserInfo(profileTitle, profileSubtitle)

const imagePopup = new PopupWithImage(imageSelector)
imagePopup.setEventListeners()

const cardFormValidator = new FormValidator(config, addForm)
cardFormValidator.enableValidation()

const profileFormValidator = new FormValidator(config, editForm)
profileFormValidator.enableValidation()


const cardList = new Section({
  data: initialCards, renderer: (item) => {
    const newCard = createCard(item, templateSelector, imagePopup.open)
    cardList.addItem(newCard)
  }
},
containerSelector
)
cardList.renderItems()

// function handleImageClick (element) {
//   openPopup(popupImage)
//   popupImageContainer.src = element.link;
//   popupImageContainer.alt = element.name;
//   popupImageName.textContent = element.name;
// }

// Кнопки и формы 

// profileFormValidator.enableValidation();
// cardFormValidator.enableValidation();



const profilePopup = new PopupWithForm(profileSelector, (data) => {
  userInfo.setUserInfo(data)
  profilePopup.close()
})
profilePopup.setEventListeners()

// editForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = detailInput.value;
//   closePopup(popup);
// })

editButton.addEventListener("click", () => {
  profilePopup.setInputValue(userInfo.getUserInfo())
  profilePopup.open()
})

const cardPopup = new PopupWithForm(cardSelector, (data) => {
  const newCard = createCard(data, templateSelector, imagePopup.open)
  cardList.addItem(newCard)
  cardPopup.close()
})
cardPopup.setEventListeners()

addButton.addEventListener("click", () => {
  cardFormValidator.resetValidation(popupAddForm)
  cardPopup.open()
 })
 