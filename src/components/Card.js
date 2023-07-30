import { openModal } from './utils.js';

class Card {
// can I get template from here?
// should never reference "card" here. This is just MVP


  // just 1 card
  constructor (data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector);
    this._element = null;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }


  _handleLike() {
    const button = this._element.querySelector('.elements__like-symbol');
    button.classList.toggle("elements__like-symbol_active");
  }

  _handlePreviewPicture() {
    const button = this._element.querySelector('.elements__image');
    const modal = document.querySelector(button.dataset.modal); // from data-modal
    const image = modal.querySelector('.modal__image');
    const imageCaption = modal.querySelector('.modal__image-caption');
    image.src= this._link
    imageCaption.textContent = this._name
    image.alt= this._name
    openModal(modal)
  
  }

  //instance variables
  
  _setEventListeners (imageCard) {
    // this is where we set up the events
    imageCard.addEventListener('click', () => this._handlePreviewPicture())
    const deleteButton = this._element.querySelector('.elements_delete-button')
    deleteButton.addEventListener('click', () => this._handleDeleteCard())
    const likeButton = this._element.querySelector('.elements__like-symbol')
    likeButton.addEventListener('click', () => this._handleLike())
    
  }

  // only public function
  createCard() {
    // create new card
    this._element = this._cardTemplate.content.cloneNode(true).querySelector('.elements__element');
    const imageCard = this._element.querySelector('.elements__image')
    imageCard.style.backgroundImage = `url('${this._link}')`
    const nameCard = this._element.querySelector('.elements__name')
    nameCard.textContent = this._name

    //set event listeners
    this._setEventListeners(imageCard);
    
    // return the created card
    return this._element
  }

}

export default Card;