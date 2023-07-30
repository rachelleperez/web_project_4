import Popup from './Popup';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);       
        this._image = this._modal.querySelector('.modal__image');
        this._imageCaption = this._modal.querySelector('.modal__image-caption');
    }

    // override open function
    open(data) {
        this._image.src= data.link;
        this._imageCaption.textContent = data.name;
        this._image.alt= data.name;
        super.open();
    }

}