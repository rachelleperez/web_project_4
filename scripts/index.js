import initialCards from './data.js';
import FormValidator from './FormValidator.js';
//import Card from './Card.js';


// ----------------------- TO REMOVE --------------------------

// window.alert("");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------


const closeModalButtons = document.querySelectorAll('.modal__close')
const overlay = document.querySelector('.modal__overlay')
const editButton = document.querySelector('.profile__edit-button') 
const addPlaceButton = document.querySelector('.profile__add-button') 
const submitAddPlaceButton = document.getElementById("button-create-place");

editButton.addEventListener('click', () => {
  // const modal = document.querySelector(editButton.dataset.modal) // from data-modal
  openModal(profileModal)
  prefillProfileForm()
})

addPlaceButton.addEventListener('click', () => {
  // default settings
  resetAddForm();
  //open modal
  openModal(addModal);
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal__container')
    closeModal(modal)
  })
})

function resetAddForm() {
  addForm.reset();
  submitAddPlaceButton.disabled=true;
  submitAddPlaceButton.classList.add("form__submit_disabled");
}

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal__container_active')
  overlay.classList.add('modal__overlay_active')
  document.addEventListener('keydown', closeModalEsc);
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal__container_active')
  overlay.classList.remove('modal__overlay_active')
  document.removeEventListener('keydown', closeModalEsc);
}


// CLOSE MODALS WHEN ESCAPE IS PRESSED

function closeModalEsc(event, modal) {
  if (event.key === 'Escape') {
    findCloseAnyOpenModal();
  }
}

// CLOSE OVERLAY IF PRESSED

overlay.addEventListener('click', () => {
  const modal = overlay.closest('.modal__container');
  if (overlay.classList.contains('modal__overlay_active')) {
    findCloseAnyOpenModal();
  };
})

function findCloseAnyOpenModal() {
  const openedModal = document.querySelector('.modal__container_active');
  closeModal(openedModal);
}

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

// Form Variables
const profileModal = document.getElementById('modal_profile');
const profileForm = document.getElementById('form_edit_profile');
// const buttonSubmitEditProfile = document.getElementById("button-submit-edit-profile")

// Name Variables

const displayProfileName = document.getElementById('display_profile_name')
const inputProfileName = document.getElementById('input_profile_name')

// Bio Variables

const displayBio = document.getElementById('display_profile_bio');
const inputBio = document.getElementById('input_profile_bio');

// Function: Pre-fill form with current displayed name and bio

function prefillProfileForm() {
  inputProfileName.value = displayProfileName.textContent;
  inputBio.value = displayBio.textContent;
}

// Update Name and Bio

profileForm.addEventListener("submit", function (evt) {
  // let's cancel the default action that belongs to the event
  // evt.preventDefault();

  // checking the user data
  updateName();
  updateBio();
  closeModal(profileModal);
}); 

function updateName() {
  const elementValue = inputProfileName.value;
  displayProfileName.textContent = elementValue;
}

function updateBio() {
  const elementValue = inputBio.value;
  displayBio.textContent = elementValue;
}

// ------------------------ DEFAULT CARDS ---------------------------

// Card Variables
const elementsSection = document.querySelector('.elements');

//Card Template
const cardTemplate = document.querySelector('#card-template');

// Render Card
function createCard(data) {
  // create new card
  const card = cardTemplate.content.cloneNode(true).querySelector('.elements__element');
  const imageCard = card.querySelector('.elements__image')
  imageCard.style.backgroundImage = `url('${data.link}')`
  const nameCard = card.querySelector('.elements__name')
  nameCard.textContent = data.name

  //add event listeners
  imageCard.addEventListener('click', () => handlePreviewPicture(card, data))
  const deleteButton = card.querySelector('.elements_delete-button')
  deleteButton.addEventListener('click', () => handleDeleteCard(card))
  const likeButton = card.querySelector('.elements__like-symbol')
  likeButton.addEventListener('click', () => handleLike(card))

  // return the created card
  return card
}

function renderCard (data, selector) {
  // get a card
  const card = createCard(data);
  // render a card
  const sectionCards = document.querySelector(selector)
  sectionCards.append(card);
  
}

initialCards.forEach(place => {
  renderCard(place, '.elements');
})

// ------------------------ ADD NEW PLACE ---------------------------

// Form Variables
const addModal = document.getElementById('modal_add');
const addForm = document.getElementById('form_add_place');

// Submit Event

addForm.addEventListener("submit", function (evt) {
  // let's cancel the default action that belongs to the event
  evt.preventDefault();
  addNewCard();
  closeModal(addModal);
}); 

function addNewCard () {
  const data = {
    name: addForm.elements['input_place_title'].value,
    link: addForm.elements['input_place_image'].value
  }
  const card = createCard(data)
  elementsSection.prepend(card);

}

// ------------------------ REMOVE PLACE ---------------------------

function handleDeleteCard(card) {
  card.remove();
}

// ------------------------ LIKING ELEMENTS ---------------------------

function handleLike(card) {
  button = card.querySelector('.elements__like-symbol');
  button.classList.toggle("elements__like-symbol_active");
}

// ------------------------ OPENING IMAGES ---------------------------




function handlePreviewPicture(card, data) {
  button = card.querySelector('.elements__image');
  const modal = document.querySelector(button.dataset.modal); // from data-modal
  const image = modal.querySelector('.modal__image');
  const imageCaption = modal.querySelector('.modal__image-caption');
  image.src= data.link
  imageCaption.textContent = data.name
  image.alt= data.name
  openModal(modal)

}


// ------------------------ FORM VALIDATION ---------------------------

const formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit", //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled", // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

const addFormValidator = new FormValidator(formValidationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, profileForm);
editFormValidator.enableValidation();
