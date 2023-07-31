import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    // callback function that gets invoked when you submit the form

    super(popupSelector); // for Popup

    this._popupForm = this._modal.querySelector(".form"); // <form id = "form_add_place" class="form" name="form_add_place" novalidate>

    this._handleFormSubmit = handleFormSubmit;

    this._inputs = this._popupForm.querySelectorAll(".form__input");

    this._handleSubmit = this._handleSubmit.bind(this); // bind to constructor

  }

  close() {
    this._popupForm.reset();
    super.close(); // calls parent's close()
  }

  // handles submit event
  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues()); // handle form inputs
    this.close();
  }

  _getInputValues() {
    //collects data from all input fields and returns that data as an object
    const inputMap = {};
    this._inputs.forEach((input) => {
      inputMap[input.id] = input.value;
    });
    return inputMap;
  }

  setEventListeners() {
    // add submit event handler
    this._popupForm.addEventListener("submit", this._handleSubmit);

    // maintains parent settings, closing upon pressing close button, Esc, and click overlay
    super.setEventListeners();
  }

  removeEventListeners() {
    // adds submit eventlistener only once
    this._popupForm.removeEventListener("submit", this._handleSubmit);

    // maintains parent settings, closing upon pressing close button, Esc, and click overlay
    super.removeEventListeners();
  }
}
