import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, caption) {
    this._element.querySelector('.modal__image').src = link;
    this._element.querySelector('.modal__image-caption').textContent = caption
    super.open();
  }

}