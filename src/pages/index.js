import "./index.css";

// Import all the classes
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";

import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

import Api from "../components/Api";

import { selectors, overlay } from "../utils/constants";


// ------------------------ API SETTINGS ---------------------------

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "1412012d-ba61-4d75-b55a-14504d6e23ae",
    "Content-Type": "application/json"
  }
});

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
    },
    selectors.cardTemplate,
  )
  const cardHTML = card.createCard(); // an html element

  cardSection.addItem(cardHTML , shouldAppend);

  // listen for delete button click
  cardHTML.querySelector('.elements_delete-button').addEventListener('click', () => handleDeleteCardRequest(card));

  // listen for like button click
  cardHTML.querySelector('.elements__like-symbol').addEventListener('click', () => handleLikeClick(card))

}

// ------------------------ FETCH CURRENT CARDS ---------------------------

api.getInitialCards().then((data) => {
    if (typeof data !== "undefined") cardSection.renderItems(data); // only attempt rendering if there is data to display
  }
);


// ------------------------ NEW CARD ---------------------------

const addCardPopup = new PopupWithForm({
  popupSelector: "modal_add",
  handleFormSubmit: (dataIn) => {
    api.addCard(dataIn).then((dataOut) => {
      renderCard(dataOut, false)
    });  
  },
});

const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  addFormValidator.clearValidationErrors();
  addCardPopup.open();
});

// ------------------------ DELETE CARD CONFIRMATION ---------------------------


function handleDeleteCardRequest(card) {
  
  const deleteCardConfirmationPopup = new PopupWithForm({
    popupSelector: "delete_card_confirmation",
    handleFormSubmit: () => {
      //console.log(card.constructor === Card);
      api.deleteCard(card.getCardInfo().id);
      card.deleteCard();
    },
  });

  deleteCardConfirmationPopup.open();
}

// ------------------------ LIKE BEHAVIOR ---------------------------


function handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) { // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id);  
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id);
  }

  card.updateLikeHeart(true); // toggle to alternative color and update isLiked card property
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

const currentUserProfile = new UserInfo({
  name: "display_profile_name",
  bio: "display_profile_bio",
  avatar: "display_profile_avatar"
})

api.getUserInfo().then((data) => {
    currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
  }
);


// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

const editProfilePopup = new PopupWithForm({
  popupSelector: "modal_profile",
  handleFormSubmit: (data) => {
    currentUserProfile.setUserInfo(
      data.input_profile_name,
      data.input_profile_bio,
    );
    api.updateProfile(data);
  },
});

const editProfileButton = document.querySelector(".profile__edit-button");

editProfileButton.addEventListener("click", () => {
  editFormValidator.clearValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// To prefill Edit Profile Form

const inputProfileName = document.getElementById("input_profile_name");
const inputBio = document.getElementById("input_profile_bio");

function prefillProfileForm() {
  const currentUser = currentUserProfile.getUserInfo();
  inputProfileName.value = currentUser.name;
  inputBio.value = currentUser.bio;
}

// ------------------------ AVATAR MANAGEMENT ---------------------------

// // MVP functionality
// const testImageLink = "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI"
// const testImageLink2 = "https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"


const updateAvatarButton = document.querySelector(".profile__avatar-button");
const inputAvatarLink = document.getElementById("input_avatar_link");

const updateAvatarPopup = new PopupWithForm({
  popupSelector: "modal_update_avatar",
  handleFormSubmit: (data) => {
    console.log("update avatar submitted");
    console.log(data.input_avatar_link);
    currentUserProfile.setAvatar(data.input_avatar_link);
    api.updateAvatar(data.input_avatar_link);
  },
});

function prefillAvatarForm() {
  const currentUser = currentUserProfile.getUserInfo();
  inputAvatarLink.value = currentUser.avatar.src;
}

updateAvatarButton.addEventListener("click", () => {
  console.log("avatar pic linked");
  //editFormValidator.clearValidationErrors();
  prefillAvatarForm();
  updateAvatarPopup.open();
});

// ------------------------ IMAGE CARD PREVIEW ---------------------------

const cardPreviewPopup = new PopupWithImage(selectors.imagePreview);

// ------------------------ FORM VALIDATION ---------------------------

const addForm = document.getElementById("form_add_place");
const profileForm = document.getElementById("form_edit_profile");

const formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit", //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled", // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const addFormValidator = new FormValidator(formValidationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, profileForm);
editFormValidator.enableValidation();
