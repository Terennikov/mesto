
function like(evt) {
  evt.currentTarget.classList.toggle("elements__like-button_activ");
}

function deleteItem (evt) {
  evt.target.closest('.elements__item').remove();
}

// Рендер карточек из массива

function createCard(name, link) {
  const itemElement = elementsItem.cloneNode(true);
  const elementsPlace = itemElement.querySelector('.elements__place');
  const elementsPhoto = itemElement.querySelector('.elements__photo');
  const likeButton = itemElement.querySelector('.elements__like-button');
  const deleteButton = itemElement.querySelector(".elements__delete-button");

  elementsPlace.textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

  elements.prepend(itemElement);
  openCards();

  deleteButton.addEventListener('click', deleteItem);
  likeButton.addEventListener('click', like);
}


initialCards.forEach(item => {
  createCard(item.name, item.link);
});





const elementsItems = document.querySelector('.elements__item');
const elementsPlace = document.querySelector('.elements__place');
const elementsPhoto = document.querySelector('.elements__photo');

let likeButton = document.querySelector(".elements__like-button");




// elementsOpen();

function openCards(params) {
  let elementsPhotos = document.querySelectorAll('.elements__photo');
  
  elementsPhotos.forEach(element => {
    element.addEventListener('click', (element)=>{
        popupImages.classList.add('popup_opened');
        let card = element.target.parentElement;
        let elementPlace = card.querySelector(".elements__place");
      
        let srcCard = card.querySelector(".elements__photo").src;
        let altCard = card.querySelector(".elements__photo").alt;
      
      
        popupImageName.textContent = elementPlace.textContent; //?
        popupImage.src = srcCard; 
        popupImage.alt = altCard;
    });
  })
};



// закрытие попапов

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened')
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
  
// Кнопки и формы 

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
})

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
})

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = detailInput.value;
  closePopup(popup);
})

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput =  addForm.querySelector(".popup__input_type_place").value;
  const linkInput = addForm.querySelector(".popup__input_type_link").value;
  // addItem();

  createCard(nameInput, linkInput);

  addForm.reset();

  closePopup(popupAdd);
  elementsPhotos = document.querySelectorAll('.elements__photo');

  let newElementPhoto = elementsPhotos[0];
  let itemElement = newElementPhoto.parentElement;

  likeButton = itemElement.querySelector('.elements__like-button');
  deleteButton = itemElement.querySelector(".elements__delete-button");

  deleteButton.addEventListener('click', deleteItem);
  likeButton.addEventListener('click', like);
})


