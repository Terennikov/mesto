const enableValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

const inputs = Array.from(document.querySelectorAll(enableValidation.inputSelector));

const setInputValidState = (input, errElement, enableValidation) => {
    input.classList.add(enableValidation.inputErrorClass)
    errElement.classList.add(enableValidation.errorClass)
    errElement.textContent = input.validationMessage;
}

const setInputInvalidState = (input, errElement, enableValidation) => {
    input.classList.remove(enableValidation.inputErrorClass)
    errElement.classList.remove(enableValidation.errorClass)
    errElement.textContent = '';
}

function checkInputValidity(input, enableValidation) {

    const errElement = document.querySelector(`#err-${input.id}`)

    if (input.checkValidity()) {
        setInputInvalidState(input, errElement, enableValidation)
    } else {
        setInputValidState(input, errElement, enableValidation)
    }
}

const disableButton = (button, enableValidation) => {
    button.setAttribute('disabled', '')
    button.classList.add(enableValidation.inactiveButtonClass)
}

const enableButton = (button, enableValidation) => {
    button.removeAttribute('disabled');
    button.classList.remove(enableValidation.inactiveButtonClass)
}


const toggleButtonValidity = (form, enableValidation) => {
    const submitButton = form.querySelector(enableValidation.submitButtonSelector);
    if (form.checkValidity()) {
        enableButton(submitButton, enableValidation)
    } else {
        disableButton(submitButton, enableValidation)
    }
}

const setSubmitListener = (form, enableValidation) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        toggleButtonValidity(form, enableValidation)
    });
}

function setEventListeners(form, enableValidation) {

    setSubmitListener(form, enableValidation);
    toggleButtonValidity(form, enableValidation);

    const inputs = form.querySelectorAll(enableValidation.inputSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, enableValidation);
            toggleButtonValidity(form, enableValidation);
        })
    })
}

function validation(enableValidation) {
    const forms = document.querySelectorAll(enableValidation.formSelector);

    forms.forEach((form) => {
        setEventListeners(form, enableValidation);
    });
}

validation(enableValidation);