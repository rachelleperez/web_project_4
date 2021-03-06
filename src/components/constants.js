export const initialCards = [
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

export const selectors = {
  cardSection: '#elements', //id
  cardTemplate: '#card-template', //id
  popupClassName: '.modal__container',
  overlayClassName: '.modal__overlay',
  profileModalId: 'modal_profile',
  profileFormId: 'form_edit_profile',
  profileEditButtonClass: '.profile__edit-button',
  addPlaceButtonClass: '.profile__add-button',
  addModalId: 'modal_add',
  addFormId: 'form_add_place',
  imageModalId: 'popup-image'



}

export const formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit", //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled", // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

// for userInfo constructor
export const defaultName = "Jacques Cousteau"
export const defaultBio = "Explorer"