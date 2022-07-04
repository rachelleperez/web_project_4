import './index.css' // importing here for webpack

//import constants and utils
import {initialCards, selectors} from '../components/constants.js'; //use to be import initialCards
//import * as utils from '../components/utils.js';

//import all the classes
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Generate Cards Section
const cardSection = new Section (
  initialCards,
  {
  renderer:(item) => { //item = data in Card.js
    const cardEl = new Card(item, selectors.cardTemplate).createCard();
    cardSection.addItem(cardEl) //appends to section
    } //no getView right?}
  }
  , selectors.cardSection
)

//Initialize Card Section

cardSection.renderItems(initialCards.reverse()); //first pass needs a reverse to maintain order desired

// Create Modal instances
const profileModal = new Popup(selectors.profileModalId) 
const addModal = new Popup(selectors.addModalId)  
//const imageModal = new PopupWithImage(selectors.imageModal) 

//Set Event Listeners for Modals
profileModal.setEventListeners();
addModal.setEventListeners();
//imageModal.setEventListeners();

// Isolate buttons outside Popup and Card elements
const editButton = document.querySelector(selectors.profileEditButtonClass) 
const addPlaceButton = document.querySelector(selectors.addPlaceButtonClass) 

// Set event listeners for buttons

editButton.addEventListener('click', () => {
  profileModal.open();
  //prefillProfileForm() //TODO
})

addPlaceButton.addEventListener('click', () => {
  // default settings
  //resetAddForm(); //TODO
  //open modal
  addModal.open();
})
