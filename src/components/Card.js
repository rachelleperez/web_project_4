export default class Card {
// can I get template from here?
// should never reference "card" here. This is just MVP


  // just 1 card
  constructor ({data, handleImageClick}, cardTemplateSelector) {

    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    // to match indx.html
    if (data.name === undefined) {this._name = data.input_place_title;}
    if (data.link === undefined) {this._link = data.input_place_image;}
    
    this._cardTemplate = document.querySelector(cardTemplateSelector);
    this._element = null;

    this._handleImageClick = handleImageClick;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLike() {
    const button = this._element.querySelector('.elements__like-symbol');
    button.classList.toggle("elements__like-symbol_active");
  }

  //instance variables
  
  _setEventListeners (imageCard) {
    imageCard.addEventListener('click', () => this._handleImageClick({link: this._link, name: this._name}))
    const likeButton = this._element.querySelector('.elements__like-symbol')
    likeButton.addEventListener('click', () => this._handleLike())
  }

  // create new card
  createCard() {
  
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

  // return card info
  getCardInfo() {
    const cardInfo = {
        name: this._name,
        link: this._link,
        id: this._id,
    }
    return cardInfo
  }

}