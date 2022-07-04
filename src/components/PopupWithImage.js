import Popup from './Popup.js';

export default class PopupWithImage extends Popup{

  constructor(popupSelector) {
    super(popupSelector);
    this._image;
    this._link;
    this._caption;
  }

  open(link, caption) {
    this._element.classList.add('modal__container_active')
    this.overlay.classList.add('modal__overlay_active')
    document.addEventListener('keydown', this._handleEscClose);

    this._element.querySelector('.modal__image').src = link; 
    this._element.querySelector('.modal__image').alt = caption;
    this._element.querySelector('.modal__image-caption').textContent = caption;   
  }

}
