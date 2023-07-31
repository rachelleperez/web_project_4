// opens and close all popups in application (edit profile, add place, image popup)

export default class Popup {
    constructor(popupSelector) {
        this._modal = document.getElementById(`${popupSelector}`); // modal-profile
        this._overlay = document.querySelector('.modal__overlay'); // note, right above
        this._closeButton = this._modal.querySelector('.modal__close');
        this._handleEscEscape = this._handleEscEscape.bind(this); // to make sure correct context for this in this function.
    }

    open() {
        // opens popup
        this._modal.classList.add('modal__container_active')
        this._overlay.classList.add('modal__overlay_active')
        this._setEventListeners();
    }

    close() {
        // closes popup
        this._modal.classList.remove('modal__container_active')
        this._overlay.classList.remove('modal__overlay_active')
        this._removeEventListeners();
    }

    _handleEscEscape(event) {
        // listens for esc button
        if (event.key === 'Escape') {
            this.close();

        }
    }
    // sets event listeners
    _setEventListeners() {
        
        // close button
        this._closeButton.addEventListener('click', () => {
            this.close();
        })

        // if a key is pressed, _handleEscEscape will call close() is key is Esc
        document.addEventListener('keydown', this._handleEscEscape);

        // if overlay is clicked, close
        this._overlay.addEventListener('click', () => {
            if (this._overlay.classList.contains('modal__overlay_active')) {
                this.close();
            };
        })

    }

    _removeEventListeners() {
        this._closeButton.removeEventListener('click', this._closeButtonListener);
        document.removeEventListener('keydown', this._handleEscEscapeListener);
        this._overlay.removeEventListener('click', this._overlayListener);
    }


}