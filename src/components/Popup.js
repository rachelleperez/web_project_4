export default class Popup {

  constructor(popupSelector) { 
    this._element = document.getElementById(popupSelector);
    this._closeButton = this._element.querySelector('.modal__close')
    this._setEventListeners()
  }

  overlay = document.querySelector('.modal__overlay')
  
  open() {
    if (this._element == null) return
    this._element.classList.add('modal__container_active')
    this.overlay.classList.add('modal__overlay_active')
  }

  //close()
  _close() {
    if (this._element == null) return
    this._element.classList.remove('modal__container_active')
    this.overlay.classList.remove('modal__overlay_active')
    document.removeEventListener('keydown', this._closeEsc);
  }

  // close by pressing escape
  _closeEsc(event) {
    if (event.key === 'Escape') {
      this._close();
    }
  }

  //setEventListeners

  _setEventListeners() {    

    // listener to close by pressing ESC
    document.addEventListener('keydown', this._closeEsc);

    //close by clicking the closeButton
    this._closeButton.addEventListener('click', () => {
      this._close()
    })

    //TODO: clicking on overlay closes window
    //close when overlay clicked
    this.overlay.addEventListener('click', () => {
      //evt.preventDefault();
      if (this.overlay.classList.contains('modal__overlay_active')) {
        close()
      };
    })
  }

}