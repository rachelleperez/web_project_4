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
    console.log("escape pressed")
    if (event.key === 'Escape') {
      console.log("yes, it was escape");
      this._closePopup();
      console.log("post 'closed'");
    }
  }

  //close()
  _closePopup() {
    console.log("reached close")
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