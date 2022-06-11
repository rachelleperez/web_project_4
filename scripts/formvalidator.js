class FormValidator {
    
  //settings = covid, formElement = no need to loop through all forms. Say upfront the form needed
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass,
    this._errorClass = config.errorClass;

    this._formElement = formElement;
  }

    //done
  _showError(errorEl, inputEl) {
    inputEl.classList.add(this._inputErrorClass);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(this._errorClass);
  }

    //done
  _hideError(errorEl, inputEl) {
    inputEl.classList.remove(this._inputErrorClass);
    errorEl.classList.remove(this._errorClass);
    errorEl.textContent = '';
  }

  _isInvalidInput(inputEl) {
    return !inputEl.validity.valid;
  }

  _checkInputValidity(inputEl) { //settings, formEl removed
    const errorEl = this._formElement.querySelector(`#${inputEl.id}-error`); // added "-error" to error versions
    if (this._isInvalidInput(inputEl)) {
      // hide the error messages and style
      this._showError(errorEl, inputEl);
    }
    else {
      // show error messages and style
      this._hideError(errorEl, inputEl);
    }
  }

  toggleButton(inputList, buttonEl) { //removed settings
    if (inputList.some(inputEl => this._isInvalidInput(inputEl))) { // if any of them invalid (arrow function)
      // disable the button
      buttonEl.disabled=true;
      buttonEl.classList.add(this._inactiveButtonClass);
    }
    else {
      buttonEl.disabled=false;
      buttonEl.classList.remove(this._inactiveButtonClass);
    } 
  }

  _setEventListeners() {
    // select all inputs and buttons
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); // note just for formEl
    const buttonEl = this._formElement.querySelector(this._submitButtonSelector);

    // loop through the inputs and add validation
    inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        //check the input
        this._checkInputValidity(inputEl); //settings, formEl removed
        // update the button (if input is valid, enable. if not, disabled)
        this.toggleButton(inputList, buttonEl);
      })
    })

  }

  //only public function, applies to a specific form now.
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    //setup validation
    this._setEventListeners(); //settings (config) to be passed to form via constructor
  }

}

//export for index.js
export default FormValidator;