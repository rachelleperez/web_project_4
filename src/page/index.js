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
    let cardEl = new Card(item, selectors.cardTemplate).createCard();
    cardSection.addItem(cardEl) //appends to section
    } //no getView right?}
  }
  , selectors.cardSection
)

//Initialize Card Section

cardSection.renderItems(initialCards.reverse()); //first pass needs a reverse to maintain order desired

// Create Modal instances
const profileModal = new PopupWithForm(selectors.profileModalId, handleEditProfileFormSubmit) 
const addModal = new PopupWithForm(selectors.addModalId, handleAddPlaceFormSubmit)  

const imageModal = new PopupWithImage(selectors.imageModalId) 

//Set Event Listeners for Modals
profileModal.setEventListeners();
addModal.setEventListeners();
imageModal.setEventListeners();

// Isolate buttons outside Popups
const editButton = document.querySelector(selectors.profileEditButtonClass) 
const addPlaceButton = document.querySelector(selectors.addPlaceButtonClass) 
const imageButtons = document.querySelectorAll('.elements__image')

// Set event listeners for clicks > open modal

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

imageButtons.forEach(imageButton => {
  imageButton.addEventListener('click', () => {
    let link = imageButton.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
    let parent = imageButton.parentElement;
    let caption = parent.querySelector(".elements__name").textContent
    imageModal.open(link, caption) //link, caption
  })
})

// Form Validations

const formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit", //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled", // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

const addFormValidator = new FormValidator(formValidationConfig, addModal.getFormEl());
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, profileModal.getFormEl());
editFormValidator.enableValidation();


// Handle for submit events (post validation)

function handleAddPlaceFormSubmit(inputValuesMap) {
  let cardEl = new Card(inputValuesMap, selectors.cardTemplate).createCard();
  cardSection.addItem(cardEl) 
}

function handleEditProfileFormSubmit(inputValuesMap) {
  return 0;
}


