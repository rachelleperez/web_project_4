export default class Popup {

  constructor(popupSelector) { 
    console.log(popupSelector);
    this._element = document.getElementById(popupSelector);
    this._closeButton = this._element.querySelector('.modal__close')
  }

  overlay = document.querySelector('.modal__overlay')
  
  open() {
    if (this._element == null) return
    this._element.classList.add('modal__container_active')
    this.overlay.classList.add('modal__overlay_active')
    document.addEventListener('keydown', this._closeEsc);    
  }

// close by pressing escape
  _closeEsc(event) {
    if (event.key === 'Escape') {
      this._closePopup();
    }
  }

  //close()
  _closePopup() {
    this._element.classList.remove('modal__container_active')
    this.overlay.classList.remove('modal__overlay_active')
    document.removeEventListener('keydown', this._closeEsc);
  }

  //set standard EventListeners

  setEventListeners() {    
    
    //close by clicking the closeButton
    this._closeButton.addEventListener('click', () => {
      this._closePopup()
    })

    //close when overlay clicked
    this.overlay.addEventListener('click', () => {
      this._closePopup()
    })

  }

}