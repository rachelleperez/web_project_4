// ----------------------- TO REMOVE --------------------------

// window.alert("");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------

const openModalButtons = document.querySelectorAll('.profile__edit-button, .profile__add-button') 
const closeModalButtons = document.querySelectorAll('.modal__close')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("button clicked")
    const modal = document.querySelector(button.dataset.modal) // from data-modal
    openModal(modal)
    
    // if this is the profile-edit button, pre-fill form.
    if (button.classList.contains("profile__edit-button")) {
      prefillProfileForm()
    }
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal__container')
    closeModal(modal)
  })
})

function openModal(modal) {
  console.log("open modal")
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

//Pre-fill Profile Form

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
  let elementValue = inputProfileName.value;
  displayProfileName.textContent = elementValue;
}

function updateBio() {
  let elementValue = inputBio.value;
  displayBio.textContent = elementValue;
}

// ------------------------ DEFAULT CARDS ---------------------------

// Card Variables
let elementsSection = document.querySelector('.elements');

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

// Update Name and Bio

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
  console.log(data)
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


let likeButtons = document.querySelectorAll('.elements__like-symbol');

// When any like button is clicked, toggle between active or not
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("like button clicked");
    if (button.classList.contains("elements__like-symbol_active")) {
      button.classList.remove("elements__like-symbol_active");
    } else button.classList.add("elements__like-symbol_active");
  })
})

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