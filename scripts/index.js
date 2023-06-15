
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupClose = popup.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const detailInput = document.querySelector('.popup__input_type_details');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form')
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');

const elements =  document.querySelector('#elements-table');
const elementsItem = document.querySelector('#item').content;
const elementsPlace = document.querySelector('.elements__place');
const elementsLink = document.querySelector('.elements__link');
const likeButton = document.querySelector('.elements__like-button');
const deleteButton = document.querySelector('.elements__delete-button');

let initialCards = [
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


function renderItems (name, link) {
  const item = elementsItem.cloneNode(true);
  const elementsPlace = document.querySelector('.elements__place');
  const elementsLink = document.querySelector('.elements__link');
  elementsPlace.textContent = name;
  elementsLink.textContent = link;
  elements.append(item);
}

for (let index = 0; index < initialCards.lengts; index++) {
  renderItems(initialCards[index]);
}


const closePopup = () => {
  popup.classList.remove('.popup_opened');
}

popupClose.addEventListener('click', () => {
  closePopup();
})




editButton.addEventListener('click', () => {
  popup.classList.add('.popup_opened');
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

addButton.addEventListener('click', () => {
  popupAdd.classList.add('.popup_opened');
  placeInput.value = elementsItem.textContent;
  linkInput.value = elementsLink.textContent;
})

// deleteButton.addEventListener('click', function () {
//   elementsItem.remove();
//   })

popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup();
})



function addItem () {


  elements.insertAdjacentHTML('afterbegin', `
  <div class="elements__item">
    <img class="elements__photo src="${linkInput.value}">
    <div class="elements__container">
      <h2 class="elements__place">${placeInput.value}</h2>
      <button type="button" name="like" class="elements__like-button"></button>
      <button type="button" name="delete" class="elements__delete-button"></button>
    </div>
  </div>`);
}

