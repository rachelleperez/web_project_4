import Popup from './Popup';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) { // callback function that gets invoked when you submit the form
        super(popupSelector); // for Popup
        this._popupForm = this._modal.querySelector('.form'); // <form id = "form_add_place" class="form" name="form_add_place" novalidate>
        
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popupForm.querySelectorAll(".form__input");

        this._submitEventListenerOn = false; // to make sure only set once.

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
        
        // adds submit eventlistener only once

        if (!this._submitEventListenerOn) {

            // add sumit event handler
            this._popupForm.addEventListener("submit", (evt) => {
                // let's cancel the default action that belongs to the event
                evt.preventDefault();
                this._handleFormSubmit(this._getInputValues());
                this.close();
            }); 

            this._submitEventListenerOn = true;
        }

        // maintains parent settings, closing upon pressing close button, Esc, and click overlay
        super.setEventListeners();

    }


}

