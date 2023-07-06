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



// закрытие, открытие попапов

function openCard(evt){
  const card = evt.target.parentElement;

  openPopup(popupImages);

  const elementPlace = card.querySelector(".elements__place");
  const srcCard = card.querySelector(".elements__photo").src;
  const altCard = card.querySelector(".elements__photo").alt;
      
  popupImageName.textContent = elementPlace.textContent; //?
  popupImage.src = srcCard; 
  popupImage.alt = altCard;

  document.addEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (event) => {
  const popup = document.querySelector('.popup_opened');

  if (event.key === "Escape") {
      closePopup(popup);
  }
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened')
  document.removeEventListener("keydown", closePopupEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened')
  inputs.forEach((input) => {
    const errElement = document.querySelector(`#err-${input.id}`)
    setInputInvalidState(input, errElement, enableValidation)
})
  document.addEventListener("keydown", closePopupEsc);
}

popups.forEach(element => { 
  element.addEventListener("click", (event)=>{
      const button = element.querySelector(".popup__close");
      button.addEventListener("click", ()=>{
        closePopup(element);
      });
  });

  element.addEventListener("click", (evt) =>{
    if (evt.target === evt.currentTarget) closePopup(element);
  });

  element.addEventListener('keydown', closePopupEsc);
});


// Кнопки и формы 

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  detailInput.value = profileSubtitle.textContent;
  const form = document.querySelector('.popup__form_edit');
  toggleButtonValidity(form, enableValidation);
  console.log(toggleButtonValidity)
})

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  const form = document.querySelector('.popup__form_add');
    toggleButtonValidity(form, enableValidation);
    console.log(toggleButtonValidity)
    addForm.reset();
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

  renderCard(nameInput, linkInput);
  addForm.reset();
  closePopup(popupAdd);
})
