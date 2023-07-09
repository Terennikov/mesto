function like(evt) {
  evt.currentTarget.classList.toggle("elements__like-button_activ");
}

function deleteItem (evt) {
  evt.target.closest('.elements__item').remove();
}

// Рендер карточек из массива

const renderCard = (name, link) =>{
  const newCard = createCard(name, link);
  elements.prepend(newCard);
};


function createCard(name, link) {
  const itemElement = elementsItem.cloneNode(true);
  const elementsPlace = itemElement.querySelector('.elements__place');
  const elementsPhoto = itemElement.querySelector('.elements__photo');
  const likeButton = itemElement.querySelector('.elements__like-button');
  const deleteButton = itemElement.querySelector(".elements__delete-button");

  elementsPlace.textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

  likeButton.addEventListener('click', like);
  deleteButton.addEventListener('click', deleteItem);
  
  elementsPhoto.addEventListener('click', openCard);
  return itemElement;
}


initialCards.forEach(item => {
  renderCard(item.name, item.link);
});



function openCard(evt){
  const card = evt.target.parentElement;

  openPopup(popupImages);

  const elementPlace = card.querySelector(".elements__place");
  const srcCard = card.querySelector(".elements__photo").src;
  const altCard = card.querySelector(".elements__photo").alt;
      
  popupImageName.textContent = elementPlace.textContent; //?
  popupImage.src = srcCard; 
  popupImage.alt = altCard;
}

const closePopupEsc = (event) => {
  if (event.key === "Escape") {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
  }
}

// закрытие, открытие попапов

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
  document.removeEventListener("keydown", closePopupEsc);
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

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;

  toggleButtonValidity(editForm, config)

})

addButton.addEventListener('click', () => {
  openPopup(popupAdd);

  toggleButtonValidity(addForm, config)

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

  renderCard(placeInput.value, linkInput.value);
  addForm.reset();
  closePopup(popupAdd);
})
