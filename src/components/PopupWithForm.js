import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) { // callback function that gets invoked when you submit the form
        super(popupSelector); // for Popup
        this._popupForm = this._modal.querySelector('.form'); // <form id = "form_add_place" class="form" name="form_add_place" novalidate>
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popupForm.querySelectorAll(".form__input");
    }

    close() {
        this._popupForm.reset();
        super.close(); // calls parent's close()
    }

    _getInputValues() {
        //collects data from all input fields and returns that data as an object
        const inputMap = {};
        this._inputs.forEach(input => {inputMap[input.id] = input.value;})
        return inputMap
    }

    setEventListeners() {
        
        // add sumit event handler
        this._popupForm.addEventListener("submit", function (evt) {
            // let's cancel the default action that belongs to the event
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues);
            this.close();
          }); 


        // maintains parent settings, closing upon pressing close button, Esc, and click overlay
        super.setEventListeners();

    }

}

