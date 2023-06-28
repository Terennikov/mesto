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

function like(evt) {
  evt.currentTarget.classList.toggle("elements__like-button_activ");
}

function deleteItem (evt) {
  evt.target.closest('.elements__item').remove();
}

function renderItems(name, link) {
  const itemElement = elementsItem.cloneNode(true);
  const elementsPlace = itemElement.querySelector('.elements__place');
  const elementsPhoto = itemElement.querySelector('.elements__photo');
  const likeButton = itemElement.querySelector('.elements__like-button');
  const deleteButton = itemElement.querySelector(".elements__delete-button");

  elementsPlace.textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

  deleteButton.addEventListener('click', deleteItem);
  likeButton.addEventListener('click', like);

  elements.append(itemElement);
}


initialCards.forEach ( (item, index, arr) => {
  renderItems(initialCards[index].name, initialCards[index].link);
});

const elementsItems = document.querySelector('.elements__item');
const elementsPlace = document.querySelector('.elements__place');
const elementsPhoto = document.querySelector('.elements__photo');
let likeButton = document.querySelector(".elements__like-button");

let elementsPhotos = document.querySelectorAll('.elements__photo');

let cardsElements = document.querySelectorAll('.elements__item');


elementsOpen();

function elementsOpen(){
  elementsPhotos.forEach(element => {
    element.addEventListener ('click', function clickImage() {
      popupImages.classList.add('popup_opened');
      let card = element.parentElement;
      let elementPlace = card.querySelector(".elements__place");

      popupImageName.textContent = elementPlace.textContent; //?
      popupImage.src = element.src; 
      popupImage.alt = element.alt;
    })
  });
}


// закрытие попапов

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
}

popups.forEach(element => {

  element.addEventListener("click", (event)=>{
    const button = element.querySelector(".popup__close");
    button.addEventListener("click", ()=>{
      element.classList.remove("popup_opened");
    });

    function closePopupByClickOverlay(evt) {
      if (evt.target === evt.currentTarget) closePopup(popup);
    }

    element.addEventListener("click", closePopupByClickOverlay(event));
  });
});

popups.forEach((popup) => {

  function closePopupByClickOverlay(evt) {
      if (evt.target === evt.currentTarget) closePopup(popup);
  }

  popup.addEventListener("click", closePopupByClickOverlay);
});
  
editButton.addEventListener('click', () => {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popup_opened');
})

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup(popup);
})

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem();
  closePopup(popupAdd);
  elementsPhotos = document.querySelectorAll('.elements__photo');

  let newElementPhoto = elementsPhotos[0];
  let itemElement = newElementPhoto.parentElement;

  likeButton = itemElement.querySelector('.elements__like-button');
  deleteButton = itemElement.querySelector(".elements__delete-button");

  deleteButton.addEventListener('click', deleteItem);
  likeButton.addEventListener('click', like);
  elementsOpen();

})

function addItem () {
  elements.insertAdjacentHTML('afterbegin',
  `<div class="elements__item">
    <img class="elements__photo" src="${linkInput.value}">
    <div class="elements__container">
      <h2 class="elements__place">${placeInput.value}</h2>
      <button type="button" name="like" class="elements__like-button"></button>
      <button type="button" name="delete" class="elements__delete-button"></button>
    </div>
  </div>`);
}
