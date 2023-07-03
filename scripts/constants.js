// Обозначение элементов

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
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupClose = document.querySelector('.popup__close');
const popupImages = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

const elements =  document.querySelector('.elements');
const elementsItem = document.querySelector('#item').content;

const popups = document.querySelectorAll(".popup");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
