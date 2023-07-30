export default class Section {
    constructor({ renderer, selector}) { // OR className instead of selector
        this._renderer = renderer;
        this._element = document.querySelector(`${selector}`);
    }

    renderItems(items) { // public function
        // use this._renderer create the element for rendering =  this._element
        items.forEach(item => {
            this._renderer(item)
        });
    }

    addItem(item) {
        //console.log(item);
        //console.log(this._element); // NULL
        //console.log(document.querySelector('.elements')); // NOT NULL
        // take the item and render it into this._element
        //this._element.append(item)
        //console.log(this._element);
        if (this._element === null) {
            console.error('".elements" was not found in the DOM.');
        }
        else {
            this._element.append(item)
        }
    }

}