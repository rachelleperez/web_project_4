import "./index.css";

// Import all the classes
import initialCards from '../components/data';
import FormValidator from '../components/FormValidator';
import Card from '../components/Card';

import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

import {selectors, overlay} from '../components/constants';


// ------------------------ DEFAULT CARDS ---------------------------

const CardSection = new Section(
    {
        renderer: (data) => {
            const card = new Card({data, handleImageClick: (imgData) => {
                CardPreviewPopup.open(imgData);
            }}, selectors.cardTemplate).createCard();;
            CardSection.addItem(card, true);
        },
        selector: selectors.cardSection,
    }
);

CardSection.renderItems(initialCards);

// ------------------------ CARD PREVIEW ---------------------------

const CardPreviewPopup = new PopupWithImage (selectors.imagePreview);
CardPreviewPopup.setEventListeners();

// ------------------------ NEW CARD ---------------------------

const AddCardPopup = new PopupWithForm ({popupSelector:'modal_add', 
    handleFormSubmit: (data) => { 
        const card = new Card({data, handleImageClick: (imgData) => {
            CardPreviewPopup.open(imgData);
        }}, selectors.cardTemplate).createCard();;
        CardSection.addItem(card, false);
    }
});

const addCardButton = document.querySelector('.profile__add-button');

addCardButton.addEventListener('click', () => {
    addFormValidator.clearValidationErrors();
    AddCardPopup.open();
})

// ------------------------ PROFILE INFO STORAGE ---------------------------

const CurrentUserProfile = new UserInfo ({name:'display_profile_name', bio: 'display_profile_bio'})

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

const EditProfilePopup = new PopupWithForm ({popupSelector:'modal_profile', 
    handleFormSubmit: (data) => { 
        CurrentUserProfile.setUserInfo(data.input_profile_name, data.input_profile_bio);
    }
});

const editProfileButton = document.querySelector('.profile__edit-button');

editProfileButton.addEventListener('click', () => {
    editFormValidator.clearValidationErrors();
    prefillProfileForm();
    EditProfilePopup.open();
})

// To prefill Edit Profile Form

const inputProfileName = document.getElementById('input_profile_name')
const inputBio = document.getElementById('input_profile_bio');

function prefillProfileForm() {
    inputProfileName.value = CurrentUserProfile.getUserInfo().name;
    inputBio.value = CurrentUserProfile.getUserInfo().bio;
}

// ------------------------ FORM VALIDATION ---------------------------


const addForm = document.getElementById('form_add_place');
const profileForm = document.getElementById('form_edit_profile');

const formValidationConfig = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit", //# = id, . is clss
    inactiveButtonClass: "form__submit_disabled", // classes
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  };

const addFormValidator = new FormValidator(formValidationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, profileForm);
editFormValidator.enableValidation();
