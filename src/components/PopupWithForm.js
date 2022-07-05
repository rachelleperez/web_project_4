// popupselectors
// profileModalId: 'modal_profile',
// addModalId: 'modal_add',

// available?
// profileFormId: 'form_edit_profile',
// addFormId: 'form_add_place',

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  //constructor >  update (popupSelector, handleFormSubmitFunction)
  //form is specific to a modal type (edit profile or add place)
  constructor(popupSelector, handleFormSubmitFunction) {
    super(popupSelector);
    this._cardId = popupSelector;
    this._form = this._element.querySelector('.form');
    this._handleFormSubmit = handleFormSubmitFunction;
  }

  // updated do that it sets the form once popup is closed.
  // all forms reset, default behavior. bio must prefill when opened. where?

  close() {
    super.close();
    this._form.reset();
  }

  //return form element (for validation)
  getFormEl() {
    return this._form;
  }

  // collects data from all the input fields and returns that data as an object

  _getInputValues() {
    this._formInputs = this._form.querySelectorAll(".form__input");
    this._formMap = {}
    this._formInputs.forEach(input => this._formMap[input.name] = input.value);
    return this._formMap;
  }

  setEventListeners() {
    // same (including close icon)
    super.setEventListeners();

    // add submit event handler to the form
    this._form.addEventListener("submit", function (evt) {
      "submit pressed"
      // let's cancel the default action that belongs to the event
      evt.preventDefault();
      this._handleFormSubmitFunction(this._getInputValues())
      this.close();
    });

  }
}


