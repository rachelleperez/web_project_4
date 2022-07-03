export default class Section {
  constructor (items, {renderer}, selector) {
    this._initialArray = items; //empty array
    this._renderer = renderer; // renderer is a function. When it's cardsection, the rendered renders cards
    this._element = document.querySelector(selector);
  }

  renderItems(items) {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(renderedItem) { //element from initialCards, format: dictionary
    this._element.prepend(renderedItem);
  }
} 

// // Card Variables
// const elementsSection = document.querySelector('.elements');

// //Card Template
// const cardTemplate = document.querySelector('#card-template');

// initialCards.forEach(data => {
//   const card = new Card(data, cardTemplate).createCard();
//   elementsSection.append(card);
// })

// function addNewCard () {
//   const data = {
//     name: addForm.elements['input_place_title'].value,
//     link: addForm.elements['input_place_image'].value
//   }
//   elementsSection.prepend(createCard(data));

// }