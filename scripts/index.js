// ----------------------- TO REMOVE --------------------------

// window.alert("");

// -----------------------GENERAL MODAL BEHAVIOR---------------------------

const openModalButtons = document.querySelectorAll('.profile__edit-button') //.profile__add-button
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

// ------------------------ CARD MANAGEMENT---------------------------

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
];


let hardCodedCards = `
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img1.jpg" alt = "Picture of Place">
    <div class = "elements__container">
      <h2 class = "elements__name">Yosemite Valley</h2>
      <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article> 
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img2.png" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">Lake Louise</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article> 
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img3.png" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">Bald Mountains</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article> 
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img4.png" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">Latemar</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article> 
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img5.png" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">Vanoise National Park</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article> 
    <article class = "elements__element">
    <img class = "elements__image" src = "./images/place-img6.png" alt = "Picture of Place">
    <div class = "elements__container">
    <h2 class = "elements__name">Lago di Braies</h2>
    <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
    </div>
    </article>
`;

//TEST - hard coding works?
elementsSection.innerHTML = hardCodedCards;

// //elements contains nothing at first
// let elementsContent = `
// `;

// for (var i = 0; i < initialCards.length; i++) {
//   //code for newCard
//   let newCardHTML = `
//   <article class = "elements__element">
//   <img class = "elements__image" src = "{}" alt = "Picture of Place">
//   <div class = "elements__container">
//     <h2 class = "elements__name">{}</h2>
//     <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
//   </div>
//   </article> 
//   `.format(initialCards[i]["link"], initialCards[i]["name"]);

//   //add to content
//   elementsContent = newCardHTML; // TODO: will only take the last one
// } //end of for loop

// elementsSection.innerHTML = `
// is
// this 
// wor 
// `;

// // would run upon loading
// window.onload = setDefaults;

// // function that will include ANY function that must run upon navigating to page
// function setDefaults() {
//   elementsSection = elementsSection;
// }

// //elements contains nothing at first
// let elementsContent = `
// `;


// for (var i = 0; i < initialCards.length; i++) {
//   //code for newCard
//   let newCardHTML = `
//   <article class = "elements__element">
//   <img class = "elements__image" src = "{}" alt = "Picture of Place">
//   <div class = "elements__container">
//     <h2 class = "elements__name">{}</h2>
//     <button type="button" aria-label = "Like Button" class = "elements__like-symbol"></button>
//   </div>
//   </article> 
//   `.format(initialCards[i]["link"], initialCards[i]["name"]);

//   //add to content
//   elementsContent += newCardHTML
// } //end of for loop


// put together content for elements and then add to section
// function enterInitialCards() {
//   elementsSection.InnerHTML = hardCodedCards;
// }


// ------------------------ LIKING ELEMENTS ---------------------------

const likeButtons = document.querySelectorAll('.elements__like-symbol')

//When any like button is clicked, toggle between active or not
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains("elements__like-symbol_active")) {
      button.classList.remove("elements__like-symbol_active");
    } else button.classList.add("elements__like-symbol_active");
  })
})


