import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

  constructor(popupSelector) {
    super(popupSelector);
    this._image;
    this._link;
    this._caption;
  }

  open(link, caption) {
    this._image = this._element.querySelector('.elements__image');
    console.log(this._image)
    this._link = this._element.querySelector('.modal__image').src;
    console.log(this._link)
    this._caption = this._element.querySelector('.modal__image-caption').textContent;
    super.open();
  }

}