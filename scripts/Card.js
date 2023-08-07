import { popupImage, popupImageContainer, popupImageName } from './index.js';

export default class Card {
  constructor (element, openPopup, template) {
    this._openPopup = openPopup
    this._element = element
    this._card = template.content
    .querySelector('.elements__item')
    .cloneNode(true)
    this._elementsPlace = this._card.querySelector('.elements__place')
    this._elementsPhoto = this._card.querySelector('.elements__photo')
    this._likeElement = this._card.querySelector('.elements__like-button')
    this._deleteElement = this._card.querySelector('.elements__delete-button')
  }

  generate () {
    this._elementsPlace.textContent = this._element.name
    this._elementsPhoto.src = this._element.link
    this._elementsPhoto.alt = this._element.name
    this._setEventListeners()
    return this._card
  }

  _setEventListeners () {
    this._elementsPhoto.addEventListener('click', () => this._handleImageClick())
    this._likeElement.addEventListener('click', () => this._handleLike())
    this._deleteElement.addEventListener('click', () => this._handleDelete())
  }

  _handleImageClick () {
    this._popupImage = popupImage;
    this._popupImageContainer = popupImageContainer;
    this._popupImageName= popupImageName;
    this._openPopup(this._popupImage)
    this._popupImageContainer.src = this._element.link
    this._popupImageContainer.alt = this._element.name
    this._popupImageName.textContent = this._element.name
  }

  _handleLike () {
    this._likeElement.classList.toggle('elements__like-button_activ')
  }

  _handleDelete () {
    this._card.remove()
    this._card = null;
  }
}