export default class Popup {

  constructor(popupSelector) { // popupClassName = '.modal__container'
    this._element = document.querySelector(popupSelector);
    this._closeButton = this._element.querySelector('.modal__close')
    setEventListeners()
  }

  overlay = document.querySelector('.modal__overlay')
  
  open() {
    if (this._element == null) return
    this._element.classList.add('modal__container_active')
    overlay.classList.add('modal__overlay_active')
  }

  //close()
  close() {
    if (this._element == null) return
    this._element.classList.remove('modal__container_active')
    overlay.classList.remove('modal__overlay_active')
    document.removeEventListener('keydown', closeEsc);
  }

  // close by pressing escape
  closeEsc(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  //setEventListeners

  setEventListeners() {    

    // listener to close by pressing ESC
    document.addEventListener('keydown', closeEsc);

    //close by clicking the closeButton
    this._closeButton.addEventListener('click', () => {
      close()
    })

    //close when overlay clicked
    overlay.addEventListener('click', () => {
      if (overlay.classList.contains('modal__overlay_active')) {
        close()
      };
    })
  }

}