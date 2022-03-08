// ----------------------- TO REMOVE --------------------------

// window.alert("");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------

const openModalButtons = document.querySelectorAll('.profile__edit-button, .profile__add-button') 
const closeModalButtons = document.querySelectorAll('.modal__close')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
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

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
  // ,{
  //   name: "Grand Canyon",
  //   link: "https://images.unsplash.com/photo-1491258524513-1e5b31b77452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  // }
  // ,{
  //   name: "Big Sur",
  //   link: "https://images.unsplash.com/photo-1577940800897-c082cd6790f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  // }
  // ,{
  //   name: "Crater Lake",
  //   link: "https://images.unsplash.com/photo-1517639735409-5d4a41f000ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  // }

];

//empty string to collect html tags for all cards
let initialCardsString = `
`;

//for each card, add html tags to initialCardsString
initialCards.forEach(fillInitialCardsString);

function fillInitialCardsString (cardDict) {
  let initialCardsStringAdd = `
    <article class = "elements__element">
    <img class = "elements__image" src = "${cardDict["link"]}" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">${cardDict["name"]}</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article>
  `;
  initialCardsString += initialCardsStringAdd
}

// setDefaults will run upon loading
window.onload = setDefaults;

// function that will include ANY function that must run upon navigating to page
function setDefaults() {
  elementsSection.innerHTML = initialCardsString; //textContent does not work
}

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

  let newCardsStringAdd = `
    <article class = "elements__element">
    <img class = "elements__image" src = "`
    + addForm.elements['input_place_image'].value //user input
    + `" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">`
    + addForm.elements['input_place_title'].value //user input
    + `</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article>
  `;

   //add to html section // if input null
  elementsSection.innerHTML = newCardsStringAdd + elementsSection.innerHTML;

  //reset values to blank
  addForm.elements['input_place_title'].value = ""
  addForm.elements['input_place_image'].value = ""
}

// ------------------------ LIKING ELEMENTS ---------------------------

// NEED HELP IN THIS SECTION: unsure why this doesnt work. Worked with cards in index.html but not when cards come from index.js.
let likeButtons = document.getElementsByClassName('.elements__like-symbol');
// const likeButtons = document.querySelectorAll('.elements__like-symbol')

//When any like button is clicked, toggle between active or not
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log("button clicked");
    if (button.classList.contains("elements__like-symbol_active")) {
      button.classList.remove("elements__like-symbol_active");
    } else button.classList.add("elements__like-symbol_active");
  })
})

// elementsSection.addEventListener("change", function (evt) {
//   // let's cancel the default action that belongs to the event
//   evt.preventDefault();

//   //update likeButtons
//   //const likeButtons = document.getElementsByClassName('.elements__like-symbol');

//   //When any like button is clicked, toggle between active or not
//   document.getElementsByClassName('.elements__like-symbol').forEach(button => {
//     button.addEventListener('click', () => {
//       console.log("button clicked");
//       if (button.classList.contains("elements__like-symbol_active")) {
//         button.classList.remove("elements__like-symbol_active");
//       } else button.classList.add("elements__like-symbol_active");
//     })
//   })

// }); 