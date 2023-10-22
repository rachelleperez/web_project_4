import "./index.css";

// Import all the classes
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";

import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

import Api from "../components/Api";

import { selectors, formValidationConfig } from "../utils/constants";


// ------------------------ API SETTINGS ---------------------------

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "1412012d-ba61-4d75-b55a-14504d6e23ae",
    "Content-Type": "application/json"
  }
});

// in this project, all API errors handled by the same function. In practice, likely would be different handlers.
function handleApiError(errorMessage) {
  console.error("Triple Ten API Error: ", errorMessage);
}

// ------------------------ POPUP SETTINGS ---------------------------


// handles closing the given popup
function closePopup(popupEl) {
  popupEl.close();
}

// ------------------------ CARD RENDERER ---------------------------

const cardSection = new Section({
  renderer: (data) => renderCard(data, true),
  selector: selectors.cardSection,
});

function renderCard(data, shouldAppend) {
  const card = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
      handleDeleteCard: () => {
        handleDeleteCardRequest(card);
      },
      handleLikeClick: () => {
        handleLikeClick(card);
      }
    },
    selectors.cardTemplate,
  )
  const cardHTML = card.createCard(); // an html element

  cardSection.addItem(cardHTML , shouldAppend);

}

// ------------------------ FETCH CURRENT CARDS ---------------------------

api.getInitialCards()
  .then((data) => {
    if (typeof data !== "undefined") cardSection.renderItems(data) // only attempt rendering if there is data to display
  })
  .catch(handleApiError); // passing as reference


// ------------------------ NEW CARD ---------------------------

const addCardButton = document.querySelector(selectors.addCardButton);
const addCardSubmitButton = document.getElementById(selectors.addCardSubmitButton);

const addCardPopup = new PopupWithForm({
  popupSelector: selectors.addCardPopup,
  handleFormSubmit: (dataIn) => {
    addCardSubmitButton.textContent = "Saving..."
    api.addCard(dataIn)
      .then(handleAddCardSuccess)
      .catch(handleApiError) // passing as reference
      .finally(() => addCardSubmitButton.textContent = "Create")


  },
});

addCardButton.addEventListener("click", () => {
  formValidators.get(selectors.addPlaceForm).clearValidationErrors(); // retrieve correct FormValidator from map
  formValidators.get(selectors.addPlaceForm).toggleButton();   // starting status should always be disabled
  addCardPopup.open();
});

function handleAddCardSuccess(data) {
  renderCard(data, false);
  closePopup(addCardPopup);
}

// ------------------------ DELETE CARD CONFIRMATION ---------------------------


const deleteCardConfirmationPopup = new PopupWithForm({
  popupSelector: selectors.deleteCardPopup,
  handleFormSubmit: () => {
    api.deleteCard(deleteCardConfirmationPopup.cardId)
      .then(handleDeleteCardSuccess)
      .catch(handleApiError); // passing as reference
  }
});

// opens popup, ready for deletion request
function handleDeleteCardRequest(card) {

  // setting properties for card in question
  deleteCardConfirmationPopup.card = card; 
  deleteCardConfirmationPopup.cardId = deleteCardConfirmationPopup.card.getCardInfo().id;

  deleteCardConfirmationPopup.open();
}

function handleDeleteCardSuccess() {
  deleteCardConfirmationPopup.card.deleteCard(); 
  closePopup(deleteCardConfirmationPopup);
}

// ------------------------ LIKE BEHAVIOR ---------------------------


function handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) { // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id)
    .then (() => card.updateLikeHeart()) // toggle to alternative color and update isLiked card property
    .catch(handleApiError); // passing as reference
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id)
    .then (() => card.updateLikeHeart()) // toggle to alternative color and update isLiked card property
    .catch(handleApiError); // passing as reference
  }  
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

const currentUserProfile = new UserInfo({
  name: selectors.userName,
  bio: selectors.userBio,
  avatar: selectors.userAvatar
})

api.getUserInfo()
  .then(handleGetUserInfoSuccess)
  .catch(handleApiError); // passing as reference

function handleGetUserInfoSuccess(data) {
  currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
}   

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

const editProfileSubmitButton = document.getElementById(selectors.editProfileSubmitButton);

const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.editProfilePopup,
  handleFormSubmit: (data) => {
    editProfileSubmitButton.textContent = "Saving..."
    api.updateProfile(data)
      .then(handleUpdateProfileSuccess)
      .catch(handleApiError) // passing as reference
      .finally(() => editProfileSubmitButton.textContent = "Save")
  },
});

function handleUpdateProfileSuccess(data) {
  currentUserProfile.setUserInfo(
    data.name,
    data.about,
  );
  closePopup(editProfilePopup);
}

const editProfileButton = document.querySelector(selectors.editProfileButton);

editProfileButton.addEventListener("click", () => {
  formValidators.get(selectors.editProfileForm).clearValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// prefilling profile

const inputProfileName = document.getElementById(selectors.inputUserName);
const inputBio = document.getElementById(selectors.inputUserBio);

function prefillProfileForm() {
  const currentUser = currentUserProfile.getUserInfo();
  inputProfileName.value = currentUser.name;
  inputBio.value = currentUser.bio;
}

// ------------------------ AVATAR MANAGEMENT ---------------------------

const updateAvatarButton = document.querySelector(selectors.updateAvatarButton);
const inputAvatarLink = document.getElementById(selectors.inputAvatarLink);
const updateAvatarSubmitButton = document.getElementById(selectors.updateAvatarSubmitButton);


const updateAvatarPopup = new PopupWithForm({
  popupSelector: selectors.updateAvatarPopup,
  handleFormSubmit: (data) => {
    updateAvatarSubmitButton.textContent = "Saving..."
    api.updateAvatar(data.input_avatar_link)
      .then((dataFromApi) => handleUpdateAvatarSuccess(dataFromApi))
      .catch(handleApiError) // passing as reference
      .finally(() => updateAvatarSubmitButton.textContent = "Save")
  },
});

function handleUpdateAvatarSuccess(data) {
  currentUserProfile.setAvatar(data.avatar);
  closePopup(updateAvatarPopup);
}

function prefillAvatarForm() {
  const currentUser = currentUserProfile.getUserInfo();
  inputAvatarLink.value = currentUser.avatar.src;
}

updateAvatarButton.addEventListener("click", () => {
  formValidators.get(selectors.updateAvatarForm).clearValidationErrors();
  prefillAvatarForm();
  updateAvatarPopup.open();
});

// ------------------------ IMAGE CARD PREVIEW ---------------------------

const cardPreviewPopup = new PopupWithImage(selectors.imagePreview);

// ------------------------ FORM VALIDATION ---------------------------

// creates form validator for every form and saves it so formValidators map

const formValidators = new Map();

for (const form of document.forms) {
  formValidators.set(form.name, new FormValidator(formValidationConfig, form)); // create FormValidator instance and track in map form_name: formValidator
}  