import Popup from "./Popup"

export default class PopupDelete extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._submitButton = this._popup.querySelector(".popup__submit-button")
    this._form = this._popup.querySelector(".popup__form")
  }



  setEventListeners () {
    super.setEventListeners()
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._element)
    })
  }

  setSubmitButtonText (text) {
    this._submitButton.textContent = text
  }
  setDefaultSubmitButtonText () {
    this._submitButton.textContent = this._defaultSubmitButtonText
  }


  open = (element) => {
    super.open()
    this._element = element
  }
}