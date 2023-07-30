import Popup from './Popup';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        const button = this._element.querySelector('.elements__image');
        const modal = document.querySelector(button.dataset.modal); // from data-modal
        const image = modal.querySelector('.modal__image');
        const imageCaption = modal.querySelector('.modal__image-caption');
    
    }

    // override open function
    open(imageData) {

    }
}