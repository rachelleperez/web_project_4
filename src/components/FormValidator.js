class FormValidator {
    
  //settings = covid, formElement = no need to loop through all forms. Say upfront the form needed
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass,
    this._errorClass = config.errorClass;

    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
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

  toggleButton() { //removed settings
    if (this._inputList.some(inputEl => this._isInvalidInput(inputEl))) { // if any of them invalid (arrow function)
      // disable the button
      this._submitButton.disabled=true;
      this._submitButton.classList.add(this._inactiveButtonClass);
    }
    else {
      this._submitButton.disabled=false;
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } 
  }

  _setEventListeners() {
    // loop through the inputs and add validation
    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        //check the input
        this._checkInputValidity(inputEl); //settings, formEl removed
        // update the button (if input is valid, enable. if not, disabled)
        this.toggleButton();
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

  // no errors upon opening a form.
  clearValidationErrors() {
    this._inputList.forEach(inputEl => {
      const errorEl = this._formElement.querySelector(`#${inputEl.id}-error`);
      this._hideError(errorEl, inputEl);
    });
  }


}

//export for index.js
export default FormValidator;