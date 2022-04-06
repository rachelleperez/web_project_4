function showError(errorEl, inputEl, settings) {
  
  errorEl.classList.add(settings.errorClass);
  errorEl.textContent = inputEl.validationMessage;
  inputEl.classList.add(settings.inputErrorClass);
}


function hideError(errorEl, inputEl, settings) {
  errorEl.classList.remove(settings.errorClass);
  errorEl.textContent = '';
  inputEl.classList.remove(settings.inputErrorClass);
}

function isInvalidInput(inputEl) {
  return !inputEl.validity.valid;
}

function checkInputValidity(inputEl, formEl, settings) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`); // added "-error" to error versions

  // console.log(inputEl.validity.valid);
  if (isInvalidInput(inputEl)) {
    // hide the error messages and style
    showError(errorEl, inputEl, settings);
  }
  else {
    // show error messages and style
    hideError(errorEl, inputEl, settings);
  }

}

function toggleButton(inputList, buttonEl, settings) {
  if (inputList.some(inputEl => isInvalidInput(inputEl))) { // if any of them invalid (arrow function)
    // disable the button
    buttonEl.disabled=true;
    buttonEl.classList.add(settings.inactiveButtonClass);
  }
  else {
    buttonEl.disabled=false;
    buttonEl.classList.remove(settings.inactiveButtonClass);
  }
}


function setEventListeners(formEl, settings) {
  // select all inputs and buttons
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector)); // note just for formEl
  const buttonEl = formEl.querySelector(settings.submitButtonSelector);

  // loop through the inputs and add validation
  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      //check the input
      checkInputValidity(inputEl, formEl, settings);
      // update the button (if input is valid, enable. if not, disabled)
      toggleButton(inputList, buttonEl, settings);
    })
  })
}

function enableValidation(settings) {
  //select all forms
  const formList = document.querySelectorAll(settings.formSelector); //Node List, not an array. Can be switched to array via Array.from(document...)
  // loop through forms, prevent default, and add validation
  formList.forEach(formEl => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    //setup validation
    setEventListeners(formEl, settings);
  })
}

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
  formSelector: ".form", //selectors
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit", //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled", // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
});

// could have been cons settings = { formSelector: X, inputSelectio: Y}