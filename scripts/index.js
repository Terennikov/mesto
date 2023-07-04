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
  popupImages.classList.add('popup_opened');

  const elementPlace = card.querySelector(".elements__place");
  const srcCard = card.querySelector(".elements__photo").src;
  const altCard = card.querySelector(".elements__photo").alt;
      
  popupImageName.textContent = elementPlace.textContent; //?
  popupImage.src = srcCard; 
  popupImage.alt = altCard;
}



// закрытие, открытие попапов

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
        closePopup(element);
      });
  });
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

  renderCard(nameInput, linkInput);
  addForm.reset();
  closePopup(popupAdd);
})
