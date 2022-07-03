export default class Section {
  constructor (items, {renderer}, selector) {
    this._initialArray = items; //empty array
    this._renderer = renderer; // renderer is a function. When it's cardsection, the rendered renders cards
    this._element = document.querySelector(selector);
  }

  renderItems(items) {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(renderedItem) { 
    this._element.prepend(renderedItem);
  }
} 
