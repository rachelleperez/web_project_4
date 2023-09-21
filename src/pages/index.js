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
    if (typeof data !== "undefined") cardSection.renderItems(data); // only attempt rendering if there is data to display
  })
  .catch((err) => {
    handleApiError(err);
  });


// ------------------------ NEW CARD ---------------------------

const addCardButton = document.querySelector(selectors.addCardButton);
const addCardSubmitButton = document.getElementById(selectors.addCardSubmitButton);

const addCardPopup = new PopupWithForm({
  popupSelector: selectors.addCardPopup,
  handleFormSubmit: (dataIn) => {
    addCardSubmitButton.textContent = "Saving..."
    api.addCard(dataIn)
      .then((dataOut) => {
        renderCard(dataOut, false)
      })
      .catch((err) => {
        handleApiError(err);
      })
      .finally(() => {
        addCardSubmitButton.textContent = "Create";
        closePopup(addCardPopup);
      })

  },
});

addCardButton.addEventListener("click", () => {
  addFormValidator.clearValidationErrors();
  addCardPopup.open();
});

// ------------------------ DELETE CARD CONFIRMATION ---------------------------


function handleDeleteCardRequest(card) {
  
  const deleteCardConfirmationPopup = new PopupWithForm({
    popupSelector: selectors.deleteCardPopup,
    handleFormSubmit: () => {
      //console.log(card.constructor === Card);
      api.deleteCard(card.getCardInfo().id)
        .catch((err) => {
          handleApiError(err);
        })
        .finally(
          closePopup(deleteCardConfirmationPopup)
        );
      card.deleteCard();
    },
  });

  deleteCardConfirmationPopup.open();
}

// ------------------------ LIKE BEHAVIOR ---------------------------


function handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) { // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id)
    .catch((err) => {
      handleApiError(err);
    });  
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id)
    .catch((err) => {
      handleApiError(err);
    });
  }

  card.updateLikeHeart(true); // toggle to alternative color and update isLiked card property
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

const currentUserProfile = new UserInfo({
  name: selectors.userName,
  bio: selectors.userBio,
  avatar: selectors.userAvatar
})

api.getUserInfo()
  .then((data) => {
    currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
  })
  .catch((err) => {
    handleApiError(err);
  });


// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

const editProfileSubmitButton = document.getElementById(selectors.editProfileSubmitButton);

const editProfilePopup = new PopupWithForm({
  popupSelector: selectors.editProfilePopup,
  handleFormSubmit: (data) => {
    editProfileSubmitButton.textContent = "Saving..."
    api.updateProfile(data)
      .then((dataIn) => {
        currentUserProfile.setUserInfo(
          dataIn.name,
          dataIn.about,
        );
      })
      .catch((err) => {
        handleApiError(err);
      })
      .finally(() => {
        editProfileSubmitButton.textContent = "Save";
        closePopup(editProfilePopup);
      })

  },
});

const editProfileButton = document.querySelector(selectors.editProfileButton);

editProfileButton.addEventListener("click", () => {
  editFormValidator.clearValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// To prefill Edit Profile Form

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
      .then(() => {
        currentUserProfile.setAvatar(data.input_avatar_link);
      })
      .catch((err) => {
        handleApiError(err);
      })
      .finally(() => {
        updateAvatarSubmitButton.textContent = "Save";
        closePopup(updateAvatarPopup);
      })

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

const addForm = document.getElementById(selectors.addPlaceForm);
const profileForm = document.getElementById(selectors.editProfileForm);

const addFormValidator = new FormValidator(formValidationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, profileForm);
editFormValidator.enableValidation();
