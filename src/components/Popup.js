// opens and close all popups in application (edit profile, add place, image popup)

export default class Popup {
    constructor(popupSelector) {
        this._modal = document.getElementById(`${popupSelector}`); // modal-profile
        this._overlay = document.querySelector('.modal__overlay'); // note, right above
        this._closeButton = this._modal.querySelector('.modal__close');
        this._handleEscEscape = this._handleEscEscape.bind(this); // to make sure correct context for this in this function.
        this._close = this.close.bind(this); // binding close() to the constructor
        this._handleOverlayClick = this._handleOverlayClick.bind(this); // bind to constructor
    }

    open() {
        // opens popup
        this._modal.classList.add('modal__container_active')
        this._overlay.classList.add('modal__overlay_active')
        this.setEventListeners();
    }

    close() {
        // closes popup
        this._modal.classList.remove('modal__container_active')
        this._overlay.classList.remove('modal__overlay_active')
        this.removeEventListeners();
    }

    _handleEscEscape(event) {
        // listens for esc button
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClick () {
        if (this._overlay.classList.contains('modal__overlay_active')) {
            this.close();
        };
    }


    // sets event listeners
    setEventListeners() {
        
        // close button
        this._closeButton.addEventListener('click', this._close);

        // if a key is pressed, _handleEscEscape will call close() is key is Esc
        document.addEventListener('keydown', this._handleEscEscape);

        // if overlay is clicked, close
        this._overlay.addEventListener('click', this._handleOverlayClick)

    }



    removeEventListeners() {
        
        document.removeEventListener('keydown', this._handleEscEscape);

    }


}