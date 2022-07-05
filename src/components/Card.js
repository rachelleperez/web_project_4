// card = elements__element
//button to click = elements__image

class Card {
// can I get template from here?
// should never reference "card" here. This is just MVP


  // just 1 card
  constructor (data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector);
    this._element = null;
    this._imageButton = null
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }


  _handleLike() {
    const button = this._element.querySelector('.elements__like-symbol');
    button.classList.toggle("elements__like-symbol_active");
  }
  
  //instance variables
  
  _setEventListeners () {
    
    //this._imageButton.addEventListener('click', () => this._handlePreviewPictures())
    const deleteButton = this._element.querySelector('.elements_delete-button')
    deleteButton.addEventListener('click', () => this._handleDeleteCard())
    const likeButton = this._element.querySelector('.elements__like-symbol')
    likeButton.addEventListener('click', () => this._handleLike())
    
  }

  // only public function (in cards, image is also a button that can open a modal)
  createCard() {
    // create new card
    this._element = this._cardTemplate.content.cloneNode(true).querySelector('.elements__element');
    this._imageButton = this._element.querySelector('.elements__image')
    this._imageButton.style.backgroundImage = `url('${this._link}')`
    const nameCard = this._element.querySelector('.elements__name')
    nameCard.textContent = this._name

    //set event listeners 
    this._setEventListeners();
    
    // return the created card
    return this._element
  }

}

export default Card;