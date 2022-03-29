// ----------------------- TO REMOVE --------------------------

// window.alert("");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------


const closeModalButtons = document.querySelectorAll('.modal__close')
const overlay = document.querySelector('.modal__overlay')
const EditButton = document.querySelector('.profile__edit-button') 
const AddPlaceButton = document.querySelector('.profile__add-button') 

EditButton.addEventListener('click', () => {
  const modal = document.querySelector(EditButton.dataset.modal) // from data-modal
  openModal(modal)
  prefillProfileForm()
})

AddPlaceButton.addEventListener('click', () => {
  const modal = document.querySelector(AddPlaceButton.dataset.modal) // from data-modal
  openModal(modal)
  prefillProfileForm()
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal__container')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal__container_active')
  overlay.classList.add('modal__overlay_active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal__container_active')
  overlay.classList.remove('modal__overlay_active')
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
  evt.preventDefault();

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
  card.querySelector('.elements__image').style.backgroundImage = `url('${data.link}')`
  card.querySelector('.elements__name').textContent = data.name

  //add event listeners
  card.querySelector('.elements__image').addEventListener('click', () => handlePreviewPicture(card, data))
  card.querySelector('.elements_delete-button').addEventListener('click', () => handleDeleteCard(card))
  card.querySelector('.elements__like-symbol').addEventListener('click', () => handleLike(card))

  // return the created card
  return card
}

function renderCard (data, selector) {
  // get a card
  const card = createCard(data);
  // render a card
  document.querySelector(selector).append(card);
  
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
  data = {
    name: addForm.elements['input_place_title'].value,
    link: addForm.elements['input_place_image'].value
  }
  card = createCard(data)
  document.querySelector('.elements').prepend(card);

  //reset values to blank
  addForm.elements['input_place_title'].value = ""
  addForm.elements['input_place_image'].value = ""
}

// ------------------------ REMOVE PLACE ---------------------------

function handleDeleteCard(card) {
  card.remove();
}

// ------------------------ LIKING ELEMENTS ---------------------------

function handleLike(card) {
  button = card.querySelector('.elements__like-symbol');
  if (button.classList.contains("elements__like-symbol_active")) {
    button.classList.remove("elements__like-symbol_active");
  } else button.classList.add("elements__like-symbol_active");
}

// ------------------------ OPENING IMAGES ---------------------------

function handlePreviewPicture(card, data) {
  button = card.querySelector('.elements__image');
  const modal = document.querySelector(button.dataset.modal); // from data-modal
  const image = modal.querySelector('.modal__image');
  const imageCaption = modal.querySelector('.modal__image-caption');
  image.src= data.link
  imageCaption.textContent = data.name
  openModal(modal)

}