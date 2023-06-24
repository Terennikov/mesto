const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const editForm = document.querySelector('.popup__form_type_edit');
const popupForm = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name');
const detailInput = document.querySelector('.popup__input_type_details');
const popupAdd = document.querySelector('.popup_type_add');
const addForm = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupClose = document.querySelector('.popup__close');

const elements =  document.querySelector('.elements');
const elementsItem = document.querySelector('#item').content;


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
function renderItems(name, link) {
  const itemElement = elementsItem.cloneNode(true);
  const elementsPlace = itemElement.querySelector('.elements__place');
  const elementsPhoto = itemElement.querySelector('.elements__photo');

  elementsPlace.textContent = name;
  elementsPhoto.setAttribute ('src', link);
  elementsPhoto.setAttribute ('alt', name);

  elements.append(itemElement);
}
initialCards.forEach ( (item, index, arr) => {
  renderItems(initialCards[index].name, initialCards[index].link);
});
const elementsItems = document.querySelector('.elements__item');
const elementsPlace = document.querySelector('.elements__place');
const elementsPhoto = document.querySelector('.elements__photo');
const likeButton = document.querySelector(".elements__like-button");


const closePopup = () => {
  popup.classList.remove('.popup_opened');
}

// popupClose.forEach(element => {
//   const popup = element.closest('.popup');
//   element.addEventListener('click', () => closePopup(popup));
// })

// popupClose.addEventListener('click', () => {
//   closePopup();
// })

editButton.addEventListener('click', () => {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popup_opened');
  placeInput.value = elementsPlace.textContent;
  linkInput.value = elementsPhoto.textContent;
})

const deleteButton = document.querySelector(".elements__delete-button");
deleteButton.addEventListener('click', (evt) =>
  evt.target.closest('.elements__item').remove()
);

likeButton.addEventListener('click', (evt) =>
  evt.target.classList.toggle(".elements__like-button_activ")
);

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup();
})

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  elementsPlace.textContent = placeInput.value;
  elementsPhoto.textContent = linkInput.value;
  closePopup();
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

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  elementsPlace.textContent = placeInput.value;
  elementsPhoto.src = linkInput.value;
  addItem();
  closePopup();
})


// likeButton.onclick = function () {
//   // если фон кнопки чёрный
//   if (likeButton.style.backgroundIimage == 'url(../../../images/Vector1.svg)') {
//     // изменим его на белый, а текст сделаем чёрным
//     likeButton.style.backgroundIimage = 'url(../../../images/UnionActive.svg)';
//   } else {
//     // иначе сделаем фон чёрным, а текст белым
//     likeButton.style.backgroundIimage == 'url(../../../images/Vector1.svg)';
//   }
// }

// const like = () => {
//   likeButton.classList.remove(".elements__like-button");
//   likeButton.classList.add(".elements__like-button_active");
// }

// likeButton.addEventListener('click', () => {
//   like();
// })
