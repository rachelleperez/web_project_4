import "./index.css";

// Import all the classes
import initialCards from "../utils/data";
import FormValidator from "../components/FormValidator";
import Card from "../components/Card";

import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

import { selectors, overlay } from "../utils/constants";

// ------------------------ DEFAULT CARDS ---------------------------

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
  ).createCard();
  cardSection.addItem(card, shouldAppend);
}

cardSection.renderItems(initialCards);

// ------------------------ CARD PREVIEW ---------------------------

const cardPreviewPopup = new PopupWithImage(selectors.imagePreview);

// ------------------------ NEW CARD ---------------------------

const addCardPopup = new PopupWithForm({
  popupSelector: "modal_add",
  handleFormInputs: (data) => renderCard(data, false),
});

const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  addFormValidator.clearValidationErrors();
  addCardPopup.open();
});

// ------------------------ PROFILE INFO STORAGE ---------------------------

const currentUserProfile = new UserInfo({
  name: "display_profile_name",
  bio: "display_profile_bio",
});

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

const editProfilePopup = new PopupWithForm({
  popupSelector: "modal_profile",
  handleFormSubmit: (data) => {
    currentUserProfile.setUserInfo(
      data.input_profile_name,
      data.input_profile_bio,
    );
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
