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
  //console.log(card.querySelector('.elements__image').style);
  card.querySelector('.elements__image').style.backgroundImage = `url('${data.link}')`
  card.querySelector('.elements__name').textContent = data.name
  card.querySelector('.elements__image').addEventListener('click', () => handlePreviewPicture(card, data))
  //console.log(card);
  //add event listeners

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

// // setDefaults will run upon loading
// window.onload = setDefaults;

// // function that will include ANY function that must run upon navigating to page
// function setDefaults() {
//   
// }

// ------------------------ ADD NEW PLACE ---------------------------


// Form Variables
const addModal = document.getElementById('modal_add');
const addForm = document.getElementById('form_add_place');
const buttonCreatePlace = document.getElementById("button-create-place");

// Input Variables

const inputPlaceTitle = document.getElementById('input_place_title');
const inputPlaceImage = document.getElementById('input_place_image');

// Update Name and Bio

addForm.addEventListener("submit", function (evt) {
  // let's cancel the default action that belongs to the event
  evt.preventDefault();
  // add new card
  addNewCard();
  //close modal
  closeModal(addModal);
}); 

function addNewCard () {
  const name =  addForm.elements['input_place_image'].value
  const place = addForm.elements['input_place_title'].value
  // outside of this function, make a current cards array to add/remove from 

  // let newCardsStringAdd = `
  //   <article class = "elements__element">
  //   <img class = "elements__image" data-modal="#modal_image" src = "`
  //   + addForm.elements['input_place_image'].value //user input
  //   + `" alt = "Picture of Place">
  //   <div class = "elements__container">
  //   <h2 class = "elements__name">`
  //   + addForm.elements['input_place_title'].value //user input
  //   + `</h2>
  //   <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
  //   </div>
  //   </article>
  // `;

  //  //add to html section 
  // elementsSection.innerHTML = newCardsStringAdd + elementsSection.innerHTML;

  //reset values to blank
  addForm.elements['input_place_title'].value = ""
  addForm.elements['input_place_image'].value = ""
}

// ------------------------ REMOVE PLACE ---------------------------

let deleteButtons = document.querySelectorAll('.elements_delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("delete button clicked");
    const card = button.closest(".elements__element");
    deleteCard(card);
  })
})

function deleteCard(card) {
  card.innerHTML = "";
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