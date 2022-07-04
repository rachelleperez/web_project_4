import './index.css' // importing here for webpack

//import constants and utils
import {initialCards, selectors} from '../components/constants.js'; //use to be import initialCards
import * as utils from '../components/utils.js';

//import all the classes
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Create instances of the classes
const CardSection = new Section (
  initialCards,
  {
  renderer:(item) => { //item = data in Card.js
    const cardEl = new Card(item, selectors.cardTemplate).createCard();
    CardSection.addItem(cardEl) //appends to section
    } //no getView right?}
  }
  , selectors.cardSection
)

// all modal types
const profileModal = new Popup('modal_profile') 
const addModal = new Popup('modal_add')  
const imageModal = new Popup('popup-image') 

// Initialize all my instances

CardSection.renderItems(initialCards.reverse()); //first pass needs a reverse to maintain order desired

// all the rest


// **************************** OLD - FOR REFERENCE

// // -----------------------GENERAL MODAL BEHAVIOR---------------------------


// const closeModalButtons = document.querySelectorAll('.modal__close')
// const overlay = document.querySelector('.modal__overlay')
// const editButton = document.querySelector('.profile__edit-button') 
// const addPlaceButton = document.querySelector('.profile__add-button') 
// const submitAddPlaceButton = document.getElementById("button-create-place");

// editButton.addEventListener('click', () => {
//   // const modal = document.querySelector(editButton.dataset.modal) // from data-modal
//   utils.openModal(profileModal)
//   prefillProfileForm()
// })

// addPlaceButton.addEventListener('click', () => {
//   // default settings
//   resetAddForm();
//   //open modal
//   utils.openModal(addModal);
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal__container')
//     utils.closeModal(modal)
//   })
// })

// function resetAddForm() {
//   addForm.reset();
//   addFormValidator.toggleButton();
// }

// // CLOSE OVERLAY IF PRESSED

// overlay.addEventListener('click', () => {
//   const modal = overlay.closest('.modal__container');
//   if (overlay.classList.contains('modal__overlay_active')) {
//     utils.findCloseAnyOpenModal();
//   };
// })

// // ------------------------ PROFILE INFO MANAGEMENT ---------------------------

// // Form Variables
// const profileModal = document.getElementById('modal_profile');
// const profileForm = document.getElementById('form_edit_profile');
// // const buttonSubmitEditProfile = document.getElementById("button-submit-edit-profile")

// // Name Variables

// const displayProfileName = document.getElementById('display_profile_name')
// const inputProfileName = document.getElementById('input_profile_name')

// // Bio Variables

// const displayBio = document.getElementById('display_profile_bio');
// const inputBio = document.getElementById('input_profile_bio');

// // Function: Pre-fill form with current displayed name and bio

// function prefillProfileForm() {
//   inputProfileName.value = displayProfileName.textContent;
//   inputBio.value = displayBio.textContent;
// }

// // Update Name and Bio

// profileForm.addEventListener("submit", function (evt) {
//   // let's cancel the default action that belongs to the event
//   // evt.preventDefault();

//   // checking the user data
//   updateName();
//   updateBio();
//   utils.closeModal(profileModal);
// }); 

// function updateName() {
//   const elementValue = inputProfileName.value;
//   displayProfileName.textContent = elementValue;
// }

// function updateBio() {
//   const elementValue = inputBio.value;
//   displayBio.textContent = elementValue;
// }

// // ------------------------ DEFAULT CARDS - DONE ---------------------------

// // Card Variables
// const elementsSection = document.querySelector('.elements');

// //Card Template
// const cardTemplate = document.querySelector('#card-template');

// initialCards.forEach(data => {
//   const card = new Card(data, cardTemplate).createCard();
//   elementsSection.append(card);
// })

// // ------------------------ ADD NEW PLACE ---------------------------

// // Form Variables
// const addModal = document.getElementById('modal_add');
// const addForm = document.getElementById('form_add_place');

// // Submit Event

// addForm.addEventListener("submit", function (evt) {
//   // let's cancel the default action that belongs to the event
//   evt.preventDefault();
//   addNewCard();
//   utils.closeModal(addModal);
// }); 

// function createCard(data) {
//   const card = new Card(data, cardTemplate)
//   return card.createCard()
// }

// function addNewCard () {
//   const data = {
//     name: addForm.elements['input_place_title'].value,
//     link: addForm.elements['input_place_image'].value
//   }
//   elementsSection.prepend(createCard(data));

// }



// // ------------------------ FORM VALIDATION ---------------------------

// const formValidationConfig = {
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__submit", //# = id, . is clss
//   inactiveButtonClass: "form__submit_disabled", // classes
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__error_visible"
// };

// const addFormValidator = new FormValidator(formValidationConfig, addForm);
// addFormValidator.enableValidation();

// const editFormValidator = new FormValidator(formValidationConfig, profileForm);
// editFormValidator.enableValidation();


