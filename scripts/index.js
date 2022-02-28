// ----------------------- TO REMOVE --------------------------

window.alert("Thanks for your review Yana!\n \nI made the BEM element within element adjustment. I hope this version is closer to the required or just enough to move on to its next iteration in Project 5. Please note I'm having some issues with Github. Thanks for your help!\n \nRachelle");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------

const openModalButtons = document.querySelectorAll('.profile__add-button, .profile__edit-button')
const closeModalButtons = document.querySelectorAll('.modal__close')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modal) // from data-modal
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal__container')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

// Form Variables
const profileModal = document.getElementById('modal_profile');
const profileForm = document.getElementById('form_edit_profile');
const buttonOpenEditProfile = document.getElementById("button-open-edit-profile")
const buttonSubmitEditProfile = document.getElementById("button-submit-edit-profile")

// Name Variables

const displayProfileName = document.getElementById('display_profile_name')
const inputProfileName = document.getElementById('input_profile_name')
const defaultName = "Jacques Cousteau"

// Bio Variables

const displayBio = document.getElementById('display_profile_bio');
const inputBio = document.getElementById('input_profile_bio');
const defaultBio = "Explorer";

// Set Defaults

// window.onload = setDefaults;

// function setDefaults() {
// 	displayProfileName.innerHTML = defaultName;
//   displayBio.innerHTML = defaultBio;
// }

//Pre-fill Profile Form

buttonOpenEditProfile.addEventListener("click", prefillProfileForm)

function prefillProfileForm() {
  inputProfileName.value = displayProfileName.innerHTML;
  inputBio.value = displayBio.innerHTML;
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
  var elementValue = inputProfileName.value;
  displayProfileName.innerHTML = elementValue;
}

function updateBio() {
  var elementValue = inputBio.value;
  displayBio.innerHTML = elementValue;
}


// ------------------------ LIKING ELEMENTS ---------------------------

const likeButtons = document.querySelectorAll('.elements__like-symbol')

// When any like button is clicked, toggle between active or not
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains("elements__like-symbol--active")) {
      button.classList.toggle("elements__like-symbol");
    } else button.classList.toggle("elements__like-symbol--active");
  })
})
