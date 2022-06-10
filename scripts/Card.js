import * as utils from './utils.js';

class Card {
// can I get template from here?
// should never reference "card" here. This is just MVP


  // just 1 card
  constructor (data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  _handleDeleteCard(card) {
    card.remove();
  }


  _handleLike(card) {
    const button = card.querySelector('.elements__like-symbol');
    button.classList.toggle("elements__like-symbol_active");
  }

  _handlePreviewPicture(card) {
    const button = card.querySelector('.elements__image');
    const modal = document.querySelector(button.dataset.modal); // from data-modal
    const image = modal.querySelector('.modal__image');
    const imageCaption = modal.querySelector('.modal__image-caption');
    image.src= this._link
    imageCaption.textContent = this._name
    image.alt= this._name
    utils.openModal(modal)
  
  }

  //instance variables
  
  _setEventListeners (card, imageCard) {
    // this is where we set up the events
    imageCard.addEventListener('click', () => this._handlePreviewPicture(card))
    const deleteButton = card.querySelector('.elements_delete-button')
    deleteButton.addEventListener('click', () => this._handleDeleteCard(card))
    const likeButton = card.querySelector('.elements__like-symbol')
    likeButton.addEventListener('click', () => this._handleLike(card))
    
  }

  // only public function
  createCard() {
    // create new card
    const card = this._cardTemplate.content.cloneNode(true).querySelector('.elements__element');
    const imageCard = card.querySelector('.elements__image')
    imageCard.style.backgroundImage = `url('${this._link}')`
    const nameCard = card.querySelector('.elements__name')
    nameCard.textContent = this._name

    //set event listeners
    this._setEventListeners(card, imageCard);
    
    // return the created card
    return card
  }

}

export default Card;