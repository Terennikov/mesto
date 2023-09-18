const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileImage = document.querySelector(".profile__avatar")
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editForm = document.querySelector('.popup__form_type_edit');
const addForm = document.querySelector('.popup__form_type_add');
const popupAvatarForm = document.querySelector(".popup__form_avatar")

const imageSelector = ".popup_type_image"
const profileSelector = ".popup_type_edit"
const cardSelector = ".popup_type_add"
const templateSelector = ".elements-template"
const containerSelector = "#elements-table"
const apiToken = "e33bc886-bb17-4a95-9c9d-24d61fe595f4"
const groupId = "cohort-73"
const apiURL = "https://mesto.nomoreparties.co/v1/"
const itemDeleteSelector = ".popup_type_delete"
const popupAvatarSelector = ".popup_type_avatar"
const buttonAvatar = document.querySelector(".profile__avatar-edit")
 

export { 
  validationConfig, 
  profileTitle,
  profileSubtitle,
  profileImage,
  editButton,
  addButton,
  editForm,
  addForm,
  popupAvatarForm,
  imageSelector,
  profileSelector,
  cardSelector,
  templateSelector,
  containerSelector,
  apiToken,
  groupId,
  apiURL,
  itemDeleteSelector,
  popupAvatarSelector,
  buttonAvatar
}