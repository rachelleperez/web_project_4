/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this.baseUrl = baseUrl, this.headers = headers;
  }
  _createClass(Api, [{
    key: "_handleFetch",
    value: function _handleFetch(destinationUrl, method, body) {
      return fetch(destinationUrl, {
        method: method,
        headers: this.headers,
        body: body
      }).then(function (res) {
        if (res.ok) {
          return res.json();
          // test return
          // .then(data => {
          //     console.log('Data from API:', data);
          //     return data;
          // });
        }
        // if the server returns an error, reject the promise
        return Promise.reject("Response Error: ".concat(res.status)); // throws an error to be caught by .catch in index.js
      }).catch(function (err) {
        throw err; // throws an error to be caught by .catch in index.js
      });
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return this._handleFetch("".concat(this.baseUrl, "/cards"), "GET");
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._handleFetch("".concat(this.baseUrl, "/users/me"), "GET");
    }
  }, {
    key: "addCard",
    value: function addCard(data) {
      return this._handleFetch("".concat(this.baseUrl, "/cards"), "POST", JSON.stringify({
        name: data.input_place_title,
        link: data.input_place_image
      }));
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(data) {
      return this._handleFetch("".concat(this.baseUrl, "/users/me"), "PATCH", JSON.stringify({
        name: data.input_profile_name,
        about: data.input_profile_bio
      }));
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return this._handleFetch("".concat(this.baseUrl, "/cards/").concat(cardId), "DELETE");
    }
  }, {
    key: "updateAvatar",
    value: function updateAvatar(avatarLink) {
      return this._handleFetch("".concat(this.baseUrl, "/users/me/avatar"), "PATCH", JSON.stringify({
        avatar: avatarLink
      }));
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return this._handleFetch("".concat(this.baseUrl, "/cards/").concat(cardId, "/likes"), "PUT");
    }
  }, {
    key: "unlikeCard",
    value: function unlikeCard(cardId) {
      return this._handleFetch("".concat(this.baseUrl, "/cards/").concat(cardId, "/likes"), "DELETE");
    }
  }, {
    key: "getCard",
    value: function getCard(cardId) {
      return this._handleFetch("".concat(this.baseUrl, "/cards/").concat(cardId), "GET");
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  // can I get template from here?
  // should never reference "card" here. This is just MVP

  // just 1 card
  function Card(_ref, cardTemplateSelector) {
    var data = _ref.data,
      handleImageClick = _ref.handleImageClick,
      handleDeleteCard = _ref.handleDeleteCard,
      handleLikeClick = _ref.handleLikeClick;
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    // to match index.html
    if (data.name === undefined) {
      this._name = data.input_place_title;
    }
    if (data.link === undefined) {
      this._link = data.input_place_image;
    }
    this._cardTemplate = document.querySelector(cardTemplateSelector);
    this._element = null;
    this._deleteButton = null;
    this._likeButton = null;

    // callback functions to be executed in index.js
    this._handleImageClick = handleImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeClick = handleLikeClick;
  }
  _createClass(Card, [{
    key: "deleteCard",
    value: function deleteCard() {
      this._element.remove();
      this._element = null;
    }

    // changes color, nothing else.
  }, {
    key: "updateLikeHeart",
    value: function updateLikeHeart(toggleIsLiked) {
      this._likeButton.classList.toggle("elements__like-symbol_active");
      if (toggleIsLiked) this._isLiked = !this._isLiked;
    }

    //instance variables
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(imageCard) {
      var _this = this;
      imageCard.addEventListener('click', function () {
        return _this._handleImageClick({
          link: _this._link,
          name: _this._name
        });
      });

      // Add click event listener for the delete button
      this._deleteButton.addEventListener('click', function () {
        return _this._handleDeleteCard(_this);
      });

      // Add click event listener for the like button
      this._likeButton.addEventListener('click', function () {
        return _this._handleLikeClick(_this);
      });
    }

    // handles delete card request
  }, {
    key: "handleDeleteCard",
    value: function handleDeleteCard() {
      if (typeof this._handleDeleteCard === 'function') {
        this._handleDeleteCard(this);
      }
    }

    // handles like button click
  }, {
    key: "handleLikeClick",
    value: function handleLikeClick() {
      if (typeof this._handleLikeClick === 'function') {
        this._handleLikeClick(this);
      }
    }

    // create new card
  }, {
    key: "createCard",
    value: function createCard() {
      this._element = this._cardTemplate.content.cloneNode(true).querySelector('.elements__element');
      this._deleteButton = this._element.querySelector('.elements_delete-button');
      this._likeButton = this._element.querySelector('.elements__like-symbol');
      var imageCard = this._element.querySelector('.elements__image');
      imageCard.style.backgroundImage = "url('".concat(this._link, "')");
      var nameCard = this._element.querySelector('.elements__name');
      nameCard.textContent = this._name;
      this._likeButton = this._element.querySelector('.elements__like-symbol');

      //set event listeners
      this._setEventListeners(imageCard);

      // like button shown must reflect status. if button color and like status dont match, toggle like color
      var isButtonLiked = this._likeButton.classList.contains("elements__like-symbol_active");
      if (this._isLiked) {
        if (!isButtonLiked) this.updateLikeHeart(false);
      }
      // Card not liked
      else {
        if (isButtonLiked) this.updateLikeHeart(false);
      }

      // return the created card
      return this._element;
    }

    // return card info
  }, {
    key: "getCardInfo",
    value: function getCardInfo() {
      var cardInfo = {
        name: this._name,
        link: this._link,
        id: this._id,
        isLiked: this._isLiked
      };
      return cardInfo;
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  //settings = covid, formElement = no need to loop through all forms. Say upfront the form needed
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass, this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._enableValidation();
  }

  //done
  _createClass(FormValidator, [{
    key: "_showError",
    value: function _showError(errorEl, inputEl) {
      inputEl.classList.add(this._inputErrorClass);
      errorEl.textContent = inputEl.validationMessage;
      errorEl.classList.add(this._errorClass);
    }

    //done
  }, {
    key: "_hideError",
    value: function _hideError(errorEl, inputEl) {
      inputEl.classList.remove(this._inputErrorClass);
      errorEl.classList.remove(this._errorClass);
      errorEl.textContent = "";
    }
  }, {
    key: "_isInvalidInput",
    value: function _isInvalidInput(inputEl) {
      return !inputEl.validity.valid;
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputEl) {
      //settings, formEl removed
      var errorEl = this._formElement.querySelector("#".concat(inputEl.id, "-error")); // added "-error" to error versions
      if (this._isInvalidInput(inputEl)) {
        // hide the error messages and style
        this._showError(errorEl, inputEl);
      } else {
        // show error messages and style
        this._hideError(errorEl, inputEl);
      }
    }
  }, {
    key: "toggleButton",
    value: function toggleButton() {
      //removed settings

      if (this._hasInvalidInputs()) {
        // disable the button
        this._submitButton.disabled = true;
        this._submitButton.classList.add(this._inactiveButtonClass);
      } else {
        this._submitButton.disabled = false;
        this._submitButton.classList.remove(this._inactiveButtonClass);
      }
    }

    // returns true if some invalid input
  }, {
    key: "_hasInvalidInputs",
    value: function _hasInvalidInputs() {
      var _this = this;
      return this._inputList.some(function (inputEl) {
        return _this._isInvalidInput(inputEl);
      });
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      // loop through the inputs and add validation
      this._inputList.forEach(function (inputEl) {
        inputEl.addEventListener("input", function () {
          //check the input
          _this2._checkInputValidity(inputEl); //settings, formEl removed
          // update the button (if input is valid, enable. if not, disabled)
          _this2.toggleButton();
        });
      });
    }
  }, {
    key: "_enableValidation",
    value: function _enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      //setup validation
      this._setEventListeners(); //settings (config) to be passed to form via constructor
    }

    // no errors upon opening a form.
  }, {
    key: "clearValidationErrors",
    value: function clearValidationErrors() {
      var _this3 = this;
      this._inputList.forEach(function (inputEl) {
        var errorEl = _this3._formElement.querySelector("#".concat(inputEl.id, "-error"));
        _this3._hideError(errorEl, inputEl);
      });
    }
  }]);
  return FormValidator;
}(); //export for index.js
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// opens and close all popups in application (edit profile, add place, image popup)
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._modal = document.getElementById("".concat(popupSelector)); // modal-profile
    this._overlay = document.querySelector('.modal__overlay'); // note, right above
    //this.overlay = document.querySelector(`.modal #${popupSelector} ~ .modal__overlay`);
    this._closeButton = this._modal.querySelector('.modal__close');
    this._handleEscEscape = this._handleEscEscape.bind(this); // to make sure correct context for this in this function.
    this._close = this.close.bind(this); // binding close() to the constructor
    this._handleOverlayClick = this._handleOverlayClick.bind(this); // bind to constructor
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      // opens popup
      this._modal.classList.add('modal__container_active');
      this._overlay.classList.add('modal__overlay_active');
      this.setEventListeners();
    }
  }, {
    key: "close",
    value: function close() {
      // closes popup
      this._modal.classList.remove('modal__container_active');
      this._overlay.classList.remove('modal__overlay_active');
      this.removeEventListeners();
    }
  }, {
    key: "_handleEscEscape",
    value: function _handleEscEscape(event) {
      // listens for esc button
      if (event.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "_handleOverlayClick",
    value: function _handleOverlayClick() {
      if (this._overlay.classList.contains('modal__overlay_active')) {
        this.close();
      }
      ;
    }

    // sets event listeners
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      // close button
      this._closeButton.addEventListener('click', this._close);

      // if a key is pressed, _handleEscEscape will call close() is key is Esc
      document.addEventListener('keydown', this._handleEscEscape);

      // if overlay is clicked, close
      this._overlay.addEventListener('click', this._handleOverlayClick);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this._closeButton.removeEventListener('click', this._close);
      document.removeEventListener('keydown', this._handleEscEscape);
      this._overlay.removeEventListener('click', this._handleOverlayClick);
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithForm);
    // callback function that gets invoked when you submit the form

    _this = _super.call(this, popupSelector); // for Popup

    _this._popupForm = _this._modal.querySelector(".form"); // <form id = "form_add_place" class="form" name="form_add_place" novalidate>

    _this._handleFormSubmit = handleFormSubmit;
    _this._inputs = _this._popupForm.querySelectorAll(".form__input"); //HTML Element
    _this._inputMap = null; // map input_name: input_value

    _this._handleSubmit = _this._handleSubmit.bind(_assertThisInitialized(_this)); // bind to constructor
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "close",
    value: function close() {
      this._popupForm.reset();
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this); // calls parent's close()
    }

    // handleSubmit = handles submit event | handleFormSubmit = takes action on inputs
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(evt) {
      evt.preventDefault();
      this._setInputValues(); // fill in inputMap
      this._handleFormSubmit(this._inputMap);
    }
  }, {
    key: "getInputValues",
    value: function getInputValues() {
      return inputMap;
    }

    //collects data from all input fields and returns that data as an object
  }, {
    key: "_setInputValues",
    value: function _setInputValues() {
      var _this2 = this;
      this._inputMap = {};
      this._inputs.forEach(function (input) {
        _this2._inputMap[input.id] = input.value;
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      // add submit event handler
      this._popupForm.addEventListener("submit", this._handleSubmit);

      // maintains parent settings, closing upon pressing close button, Esc, and click overlay
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      // adds submit eventlistener only once
      this._popupForm.removeEventListener("submit", this._handleSubmit);

      // maintains parent settings, closing upon pressing close button, Esc, and click overlay
      _get(_getPrototypeOf(PopupWithForm.prototype), "removeEventListeners", this).call(this);
    }
  }]);
  return PopupWithForm;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._modal.querySelector('.modal__image');
    _this._imageCaption = _this._modal.querySelector('.modal__image-caption');
    return _this;
  }

  // override open function
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(data) {
      this._image.src = data.link;
      this._imageCaption.textContent = data.name;
      this._image.alt = data.name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref) {
    var renderer = _ref.renderer,
      selector = _ref.selector;
    _classCallCheck(this, Section);
    // OR className instead of selector
    this._renderer = renderer;
    this._element = document.querySelector("".concat(selector));
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      // public function
      // use this._renderer create the element for rendering =  this._element
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item, shouldAppend) {
      if (shouldAppend) {
        this._element.append(item); // initial cards only
      } else {
        this._element.prepend(item);
      }
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
      bio = _ref.bio,
      avatar = _ref.avatar;
    _classCallCheck(this, UserInfo);
    // OR className instead of selector
    this._name = document.getElementById("".concat(name));
    this._bio = document.getElementById("".concat(bio));
    this._avatar = document.getElementById("".concat(avatar));
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var user = {
        name: this._name.textContent,
        bio: this._bio.textContent,
        avatar: this._avatar
      };
      return user;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(nameText, bioText, avatarLink) {
      this._name.textContent = nameText;
      this._bio.textContent = bioText;
      if (avatarLink != null) this.setAvatar(avatarLink);
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(avatarLink) {
      this._avatar.src = avatarLink;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formValidationConfig: () => (/* binding */ formValidationConfig),
/* harmony export */   selectors: () => (/* binding */ selectors)
/* harmony export */ });
var selectors = {
  cardSection: '.elements',
  cardTemplate: '#card-template',
  cardDeleteButton: '.elements_delete-button',
  cardLikeSymbol: '.elements__like-symbol',
  imagePreview: 'popup-image',
  addCardButton: ".profile__add-button",
  addCardSubmitButton: "button-create-place",
  addCardPopup: "modal_add",
  deleteCardPopup: "delete_card_confirmation",
  editProfileSubmitButton: "button-submit-edit-profile",
  editProfileButton: ".profile__edit-button",
  editProfilePopup: "modal_profile",
  userName: "display_profile_name",
  userBio: "display_profile_bio",
  userAvatar: "display_profile_avatar",
  inputUserName: "input_profile_name",
  inputUserBio: "input_profile_bio",
  updateAvatarButton: ".profile__avatar-button",
  inputAvatarLink: "input_avatar_link",
  updateAvatarSubmitButton: "button-update-avatar",
  updateAvatarPopup: "modal_update_avatar",
  addPlaceForm: "form_add_place",
  editProfileForm: "form_edit_profile",
  updateAvatarForm: "form_update_avatar"
};
var formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled",
  // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// Import all the classes









// ------------------------ API SETTINGS ---------------------------

var api = new _components_Api__WEBPACK_IMPORTED_MODULE_7__["default"]({
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

var cardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_3__["default"]({
  renderer: function renderer(data) {
    return renderCard(data, true);
  },
  selector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.cardSection
});
function renderCard(data, shouldAppend) {
  var card = new _components_Card__WEBPACK_IMPORTED_MODULE_2__["default"]({
    data: data,
    handleImageClick: function handleImageClick(imgData) {
      cardPreviewPopup.open(imgData);
    },
    handleDeleteCard: function handleDeleteCard() {
      handleDeleteCardRequest(card);
    },
    handleLikeClick: function handleLikeClick() {
      _handleLikeClick(card);
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.cardTemplate);
  var cardHTML = card.createCard(); // an html element

  cardSection.addItem(cardHTML, shouldAppend);
}

// ------------------------ FETCH CURRENT CARDS ---------------------------

api.getInitialCards().then(function (data) {
  if (typeof data !== "undefined") cardSection.renderItems(data); // only attempt rendering if there is data to display
}).catch(function (err) {
  handleApiError(err);
});

// ------------------------ NEW CARD ---------------------------

var addCardButton = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardButton);
var addCardSubmitButton = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardSubmitButton);
var addCardPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardPopup,
  handleFormSubmit: function handleFormSubmit(dataIn) {
    addCardSubmitButton.textContent = "Saving...";
    api.addCard(dataIn).then(function (dataOut) {
      renderCard(dataOut, false);
    }).catch(function (err) {
      handleApiError(err);
    }).finally(function () {
      addCardSubmitButton.textContent = "Create";
      closePopup(addCardPopup);
    });
  }
});
addCardButton.addEventListener("click", function () {
  clearAllValidationErrors();
  addCardPopup.open();
});

// ------------------------ DELETE CARD CONFIRMATION ---------------------------

function handleDeleteCardRequest(card) {
  var deleteCardConfirmationPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
    popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.deleteCardPopup,
    handleFormSubmit: function handleFormSubmit() {
      //console.log(card.constructor === Card);
      api.deleteCard(card.getCardInfo().id).catch(function (err) {
        handleApiError(err);
      }).finally(closePopup(deleteCardConfirmationPopup));
      card.deleteCard();
    }
  });
  deleteCardConfirmationPopup.open();
}

// ------------------------ LIKE BEHAVIOR ---------------------------

function _handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) {
    // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id).catch(function (err) {
      handleApiError(err);
    });
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id).catch(function (err) {
      handleApiError(err);
    });
  }
  card.updateLikeHeart(true); // toggle to alternative color and update isLiked card property
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

var currentUserProfile = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({
  name: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userName,
  bio: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userBio,
  avatar: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userAvatar
});
api.getUserInfo().then(function (data) {
  currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
}).catch(function (err) {
  handleApiError(err);
});

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

var editProfileSubmitButton = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfileSubmitButton);
var editProfilePopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfilePopup,
  handleFormSubmit: function handleFormSubmit(data) {
    editProfileSubmitButton.textContent = "Saving...";
    api.updateProfile(data).then(function (dataIn) {
      currentUserProfile.setUserInfo(dataIn.name, dataIn.about);
    }).catch(function (err) {
      handleApiError(err);
    }).finally(function () {
      editProfileSubmitButton.textContent = "Save";
      closePopup(editProfilePopup);
    });
  }
});
var editProfileButton = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfileButton);
editProfileButton.addEventListener("click", function () {
  clearAllValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// To prefill Edit Profile Form

var inputProfileName = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.inputUserName);
var inputBio = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.inputUserBio);
function prefillProfileForm() {
  var currentUser = currentUserProfile.getUserInfo();
  inputProfileName.value = currentUser.name;
  inputBio.value = currentUser.bio;
}

// ------------------------ AVATAR MANAGEMENT ---------------------------

var updateAvatarButton = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.updateAvatarButton);
var inputAvatarLink = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.inputAvatarLink);
var updateAvatarSubmitButton = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.updateAvatarSubmitButton);
var updateAvatarPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.updateAvatarPopup,
  handleFormSubmit: function handleFormSubmit(data) {
    updateAvatarSubmitButton.textContent = "Saving...";
    api.updateAvatar(data.input_avatar_link).then(function () {
      currentUserProfile.setAvatar(data.input_avatar_link);
    }).catch(function (err) {
      handleApiError(err);
    }).finally(function () {
      updateAvatarSubmitButton.textContent = "Save";
      closePopup(updateAvatarPopup);
    });
  }
});
function prefillAvatarForm() {
  var currentUser = currentUserProfile.getUserInfo();
  inputAvatarLink.value = currentUser.avatar.src;
}
updateAvatarButton.addEventListener("click", function () {
  clearAllValidationErrors();
  prefillAvatarForm();
  updateAvatarPopup.open();
});

// ------------------------ IMAGE CARD PREVIEW ---------------------------

var cardPreviewPopup = new _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.imagePreview);

// ------------------------ FORM VALIDATION ---------------------------

// creates form validator for every form and saves it so formValidators.
var formValidators = [];
var _iterator = _createForOfIteratorHelper(document.forms),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var form = _step.value;
    formValidators.push(new _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_8__.formValidationConfig, form));
  }

  // clears all existing validation errors.
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function clearAllValidationErrors() {
  var _iterator2 = _createForOfIteratorHelper(formValidators),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var formValidator = _step2.value;
      formValidator.clearValidationErrors();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQUEsQ0FDUEYsY0FBYztJQUFBYSxNQUFBO0VBQUE7SUFBMUMsS0FBQUQsVUFBQSxDQUFBUCxDQUFBLE1BQUFRLE1BQUEsR0FBQUQsVUFBQSxDQUFBTixDQUFBLElBQUFDLElBQUEsR0FBNEM7TUFBQSxJQUFqQ08sYUFBYSxHQUFBRCxNQUFBLENBQUF2UCxLQUFBO01BQ3RCd1AsYUFBYSxDQUFDbEkscUJBQXFCLENBQUMsQ0FBQztJQUN2QztFQUFDLFNBQUF2RyxHQUFBO0lBQUF1TyxVQUFBLENBQUFGLENBQUEsQ0FBQXJPLEdBQUE7RUFBQTtJQUFBdU8sVUFBQSxDQUFBRCxDQUFBO0VBQUE7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICAgIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVyc30pIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybCxcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc1xuICAgIH1cblxuICAgIF9oYW5kbGVGZXRjaCAoZGVzdGluYXRpb25VcmwsIG1ldGhvZCwgYm9keSkge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChkZXN0aW5hdGlvblVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdEYXRhIGZyb20gQVBJOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCByZWplY3QgdGhlIHByb21pc2VcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgUmVzcG9uc2UgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTsgLy8gdGhyb3dzIGFuIGVycm9yIHRvIGJlIGNhdWdodCBieSAuY2F0Y2ggaW4gaW5kZXguanNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7IC8vIHRocm93cyBhbiBlcnJvciB0byBiZSBjYXVnaHQgYnkgLmNhdGNoIGluIGluZGV4LmpzXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIFwiR0VUXCIpO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCBcIkdFVFwiKTtcbiAgICB9XG5cbiAgICBhZGRDYXJkKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiBkYXRhLmlucHV0X3BsYWNlX3RpdGxlICxsaW5rOiBkYXRhLmlucHV0X3BsYWNlX2ltYWdlfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCBcIlBBVENIXCIsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiBkYXRhLmlucHV0X3Byb2ZpbGVfbmFtZSAsYWJvdXQ6IGRhdGEuaW5wdXRfcHJvZmlsZV9iaW99KSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIFwiREVMRVRFXCIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUF2YXRhcihhdmF0YXJMaW5rKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCBcIlBBVENIXCIsIEpTT04uc3RyaW5naWZ5KHthdmF0YXI6IGF2YXRhckxpbmt9KSk7XG4gICAgfVxuXG4gICAgbGlrZUNhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCBcIlBVVFwiKTtcbiAgICB9XG5cbiAgICB1bmxpa2VDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwgXCJERUxFVEVcIik7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIFwiR0VUXCIpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4vLyBjYW4gSSBnZXQgdGVtcGxhdGUgZnJvbSBoZXJlP1xyXG4vLyBzaG91bGQgbmV2ZXIgcmVmZXJlbmNlIFwiY2FyZFwiIGhlcmUuIFRoaXMgaXMganVzdCBNVlBcclxuXHJcblxyXG4gIC8vIGp1c3QgMSBjYXJkXHJcbiAgY29uc3RydWN0b3IgKHtkYXRhLCBoYW5kbGVJbWFnZUNsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2xpY2t9LCBjYXJkVGVtcGxhdGVTZWxlY3Rvcikge1xyXG5cclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX2lzTGlrZWQgPSBkYXRhLmlzTGlrZWQ7XHJcblxyXG4gICAgLy8gdG8gbWF0Y2ggaW5kZXguaHRtbFxyXG4gICAgaWYgKGRhdGEubmFtZSA9PT0gdW5kZWZpbmVkKSB7dGhpcy5fbmFtZSA9IGRhdGEuaW5wdXRfcGxhY2VfdGl0bGU7fVxyXG4gICAgaWYgKGRhdGEubGluayA9PT0gdW5kZWZpbmVkKSB7dGhpcy5fbGluayA9IGRhdGEuaW5wdXRfcGxhY2VfaW1hZ2U7fVxyXG4gICAgXHJcbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcmRUZW1wbGF0ZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gbnVsbDtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9ucyB0byBiZSBleGVjdXRlZCBpbiBpbmRleC5qc1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID0gaGFuZGxlRGVsZXRlQ2FyZDtcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuXHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gY2hhbmdlcyBjb2xvciwgbm90aGluZyBlbHNlLlxyXG4gIHVwZGF0ZUxpa2VIZWFydCh0b2dnbGVJc0xpa2VkKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50c19fbGlrZS1zeW1ib2xfYWN0aXZlXCIpO1xyXG4gICAgaWYgKHRvZ2dsZUlzTGlrZWQpIHRoaXMuX2lzTGlrZWQgPSAhdGhpcy5faXNMaWtlZDtcclxuICB9XHJcblxyXG4gIC8vaW5zdGFuY2UgdmFyaWFibGVzXHJcbiAgXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzIChpbWFnZUNhcmQpIHtcclxuICAgIGltYWdlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUltYWdlQ2xpY2soe2xpbms6IHRoaXMuX2xpbmssIG5hbWU6IHRoaXMuX25hbWV9KSlcclxuXHJcbiAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBkZWxldGUgYnV0dG9uXHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpKTtcclxuXHJcbiAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBsaWtlIGJ1dHRvblxyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlcyBkZWxldGUgY2FyZCByZXF1ZXN0XHJcbiAgaGFuZGxlRGVsZXRlQ2FyZCgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlcyBsaWtlIGJ1dHRvbiBjbGlja1xyXG4gIGhhbmRsZUxpa2VDbGljaygpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5faGFuZGxlTGlrZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgY2FyZFxyXG4gIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9jYXJkVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19lbGVtZW50Jyk7XHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19kZWxldGUtYnV0dG9uJyk7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2Utc3ltYm9sJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pbWFnZScpXHJcbiAgICBpbWFnZUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLl9saW5rfScpYFxyXG4gICAgY29uc3QgbmFtZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbmFtZScpXHJcbiAgICBuYW1lQ2FyZC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnKVxyXG5cclxuICAgIC8vc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoaW1hZ2VDYXJkKTtcclxuXHJcbiAgICAvLyBsaWtlIGJ1dHRvbiBzaG93biBtdXN0IHJlZmxlY3Qgc3RhdHVzLiBpZiBidXR0b24gY29sb3IgYW5kIGxpa2Ugc3RhdHVzIGRvbnQgbWF0Y2gsIHRvZ2dsZSBsaWtlIGNvbG9yXHJcbiAgICBjb25zdCBpc0J1dHRvbkxpa2VkID0gdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50c19fbGlrZS1zeW1ib2xfYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc0xpa2VkKSB7XHJcbiAgICAgIGlmICghaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FyZCBub3QgbGlrZWRcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gdGhlIGNyZWF0ZWQgY2FyZFxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBjYXJkIGluZm9cclxuICBnZXRDYXJkSW5mbygpIHtcclxuICAgIGNvbnN0IGNhcmRJbmZvID0ge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgICAgbGluazogdGhpcy5fbGluayxcclxuICAgICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgICAgaXNMaWtlZDogdGhpcy5faXNMaWtlZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcmRJbmZvXHJcbiAgfVxyXG5cclxufSIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIC8vc2V0dGluZ3MgPSBjb3ZpZCwgZm9ybUVsZW1lbnQgPSBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgZm9ybXMuIFNheSB1cGZyb250IHRoZSBmb3JtIG5lZWRlZFxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgKHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpLFxyXG4gICAgICAodGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzKTtcclxuXHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvciksXHJcbiAgICApO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2VuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8vZG9uZVxyXG4gIF9zaG93RXJyb3IoZXJyb3JFbCwgaW5wdXRFbCkge1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8vZG9uZVxyXG4gIF9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCkge1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcclxuICAgIC8vc2V0dGluZ3MsIGZvcm1FbCByZW1vdmVkXHJcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTsgLy8gYWRkZWQgXCItZXJyb3JcIiB0byBlcnJvciB2ZXJzaW9uc1xyXG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XHJcbiAgICAgIC8vIGhpZGUgdGhlIGVycm9yIG1lc3NhZ2VzIGFuZCBzdHlsZVxyXG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaG93IGVycm9yIG1lc3NhZ2VzIGFuZCBzdHlsZVxyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCdXR0b24oKSB7XHJcbiAgICAvL3JlbW92ZWQgc2V0dGluZ3NcclxuXHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0cygpKSB7XHJcbiAgICAgIC8vIGRpc2FibGUgdGhlIGJ1dHRvblxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBzb21lIGludmFsaWQgaW5wdXRcclxuICBfaGFzSW52YWxpZElucHV0cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbCkgPT4gdGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBpbnB1dHMgYW5kIGFkZCB2YWxpZGF0aW9uXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy9jaGVjayB0aGUgaW5wdXRcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7IC8vc2V0dGluZ3MsIGZvcm1FbCByZW1vdmVkXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBidXR0b24gKGlmIGlucHV0IGlzIHZhbGlkLCBlbmFibGUuIGlmIG5vdCwgZGlzYWJsZWQpXHJcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9lbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb25cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7IC8vc2V0dGluZ3MgKGNvbmZpZykgdG8gYmUgcGFzc2VkIHRvIGZvcm0gdmlhIGNvbnN0cnVjdG9yXHJcbiAgfVxyXG5cclxuICAvLyBubyBlcnJvcnMgdXBvbiBvcGVuaW5nIGEgZm9ybS5cclxuICBjbGVhclZhbGlkYXRpb25FcnJvcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwsIGlucHV0RWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2V4cG9ydCBmb3IgaW5kZXguanNcclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcclxuIiwiLy8gb3BlbnMgYW5kIGNsb3NlIGFsbCBwb3B1cHMgaW4gYXBwbGljYXRpb24gKGVkaXQgcHJvZmlsZSwgYWRkIHBsYWNlLCBpbWFnZSBwb3B1cClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwb3B1cFNlbGVjdG9yfWApOyAvLyBtb2RhbC1wcm9maWxlXG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJsYXknKTsgLy8gbm90ZSwgcmlnaHQgYWJvdmVcbiAgICAgICAgLy90aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWwgIyR7cG9wdXBTZWxlY3Rvcn0gfiAubW9kYWxfX292ZXJsYXlgKTtcbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSA9IHRoaXMuX2hhbmRsZUVzY0VzY2FwZS5iaW5kKHRoaXMpOyAvLyB0byBtYWtlIHN1cmUgY29ycmVjdCBjb250ZXh0IGZvciB0aGlzIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgICAgIHRoaXMuX2Nsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpOyAvLyBiaW5kaW5nIGNsb3NlKCkgdG8gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljayA9IHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljay5iaW5kKHRoaXMpOyAvLyBiaW5kIHRvIGNvbnN0cnVjdG9yXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgLy8gb3BlbnMgcG9wdXBcbiAgICAgICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2NvbnRhaW5lcl9hY3RpdmUnKVxuICAgICAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpXG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgLy8gY2xvc2VzIHBvcHVwXG4gICAgICAgIHRoaXMuX21vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19jb250YWluZXJfYWN0aXZlJylcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fb3ZlcmxheV9hY3RpdmUnKVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY0VzY2FwZShldmVudCkge1xuICAgICAgICAvLyBsaXN0ZW5zIGZvciBlc2MgYnV0dG9uXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlT3ZlcmxheUNsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fb3ZlcmxheV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gc2V0cyBldmVudCBsaXN0ZW5lcnNcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNsb3NlIGJ1dHRvblxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlKTtcblxuICAgICAgICAvLyBpZiBhIGtleSBpcyBwcmVzc2VkLCBfaGFuZGxlRXNjRXNjYXBlIHdpbGwgY2FsbCBjbG9zZSgpIGlzIGtleSBpcyBFc2NcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSk7XG5cbiAgICAgICAgLy8gaWYgb3ZlcmxheSBpcyBjbGlja2VkLCBjbG9zZVxuICAgICAgICB0aGlzLl9vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbG9zZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NFc2NhcGUpO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrKTsgXG5cbiAgICB9XG5cblxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW4geW91IHN1Ym1pdCB0aGUgZm9ybVxuXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7IC8vIGZvciBQb3B1cFxuXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpOyAvLyA8Zm9ybSBpZCA9IFwiZm9ybV9hZGRfcGxhY2VcIiBjbGFzcz1cImZvcm1cIiBuYW1lPVwiZm9ybV9hZGRfcGxhY2VcIiBub3ZhbGlkYXRlPlxuXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG5cbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTsgLy9IVE1MIEVsZW1lbnRcbiAgICB0aGlzLl9pbnB1dE1hcCA9IG51bGw7IC8vIG1hcCBpbnB1dF9uYW1lOiBpbnB1dF92YWx1ZVxuXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7IC8vIGJpbmQgdG8gY29uc3RydWN0b3JcblxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTsgLy8gY2FsbHMgcGFyZW50J3MgY2xvc2UoKVxuICB9XG5cbiAgLy8gaGFuZGxlU3VibWl0ID0gaGFuZGxlcyBzdWJtaXQgZXZlbnQgfCBoYW5kbGVGb3JtU3VibWl0ID0gdGFrZXMgYWN0aW9uIG9uIGlucHV0c1xuICBfaGFuZGxlU3VibWl0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3NldElucHV0VmFsdWVzKCk7IC8vIGZpbGwgaW4gaW5wdXRNYXBcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2lucHV0TWFwKTsgXG4gIH1cblxuICBnZXRJbnB1dFZhbHVlcygpIHtcbiAgICByZXR1cm4gaW5wdXRNYXA7XG4gIH1cblxuICAvL2NvbGxlY3RzIGRhdGEgZnJvbSBhbGwgaW5wdXQgZmllbGRzIGFuZCByZXR1cm5zIHRoYXQgZGF0YSBhcyBhbiBvYmplY3RcbiAgX3NldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0TWFwID0ge307XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9pbnB1dE1hcCBbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBhZGQgc3VibWl0IGV2ZW50IGhhbmRsZXJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xuXG4gICAgLy8gbWFpbnRhaW5zIHBhcmVudCBzZXR0aW5ncywgY2xvc2luZyB1cG9uIHByZXNzaW5nIGNsb3NlIGJ1dHRvbiwgRXNjLCBhbmQgY2xpY2sgb3ZlcmxheVxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBhZGRzIHN1Ym1pdCBldmVudGxpc3RlbmVyIG9ubHkgb25jZVxuICAgIHRoaXMuX3BvcHVwRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZVN1Ym1pdCk7XG5cbiAgICAvLyBtYWludGFpbnMgcGFyZW50IHNldHRpbmdzLCBjbG9zaW5nIHVwb24gcHJlc3NpbmcgY2xvc2UgYnV0dG9uLCBFc2MsIGFuZCBjbGljayBvdmVybGF5XG4gICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpOyAgICAgICBcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlJyk7XG4gICAgICAgIHRoaXMuX2ltYWdlQ2FwdGlvbiA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2UtY2FwdGlvbicpO1xuICAgIH1cblxuICAgIC8vIG92ZXJyaWRlIG9wZW4gZnVuY3Rpb25cbiAgICBvcGVuKGRhdGEpIHtcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjPSBkYXRhLmxpbms7XG4gICAgICAgIHRoaXMuX2ltYWdlQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0PSBkYXRhLm5hbWU7XG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyLCBzZWxlY3Rvcn0pIHsgLy8gT1IgY2xhc3NOYW1lIGluc3RlYWQgb2Ygc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbXMoaXRlbXMpIHsgLy8gcHVibGljIGZ1bmN0aW9uXG4gICAgICAgIC8vIHVzZSB0aGlzLl9yZW5kZXJlciBjcmVhdGUgdGhlIGVsZW1lbnQgZm9yIHJlbmRlcmluZyA9ICB0aGlzLl9lbGVtZW50XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0sIHNob3VsZEFwcGVuZCkge1xuXG4gICAgICAgIGlmIChzaG91bGRBcHBlbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kKGl0ZW0pIC8vIGluaXRpYWwgY2FyZHMgb25seVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5wcmVwZW5kKGl0ZW0pIFxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgYmlvLCBhdmF0YXIgfSkgeyAvLyBPUiBjbGFzc05hbWUgaW5zdGVhZCBvZiBzZWxlY3RvclxuICAgICAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmFtZX1gKTtcbiAgICAgICAgdGhpcy5fYmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YmlvfWApO1xuICAgICAgICB0aGlzLl9hdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdmF0YXJ9YCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgICAgICAgYmlvOiB0aGlzLl9iaW8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuX2F2YXRhclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuXG4gICAgc2V0VXNlckluZm8obmFtZVRleHQsIGJpb1RleHQsIGF2YXRhckxpbmspIHtcbiAgICAgICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5hbWVUZXh0O1xuICAgICAgICB0aGlzLl9iaW8udGV4dENvbnRlbnQgPSBiaW9UZXh0O1xuICAgICAgICBpZiAoYXZhdGFyTGluayAhPSBudWxsKSB0aGlzLnNldEF2YXRhcihhdmF0YXJMaW5rKTtcbiAgICB9XG5cbiAgICBzZXRBdmF0YXIoYXZhdGFyTGluaykge1xuICAgICAgICB0aGlzLl9hdmF0YXIuc3JjID0gYXZhdGFyTGluaztcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgIGNhcmRTZWN0aW9uOiAnLmVsZW1lbnRzJyxcbiAgICBjYXJkVGVtcGxhdGU6ICcjY2FyZC10ZW1wbGF0ZScsXG4gICAgY2FyZERlbGV0ZUJ1dHRvbjogJy5lbGVtZW50c19kZWxldGUtYnV0dG9uJyxcbiAgICBjYXJkTGlrZVN5bWJvbDogJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnLFxuICAgIGltYWdlUHJldmlldzogJ3BvcHVwLWltYWdlJyxcbiAgICBhZGRDYXJkQnV0dG9uOiBcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIsXG4gICAgYWRkQ2FyZFN1Ym1pdEJ1dHRvbjogXCJidXR0b24tY3JlYXRlLXBsYWNlXCIsXG4gICAgYWRkQ2FyZFBvcHVwOiBcIm1vZGFsX2FkZFwiLFxuICAgIGRlbGV0ZUNhcmRQb3B1cDogXCJkZWxldGVfY2FyZF9jb25maXJtYXRpb25cIixcbiAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbjogXCJidXR0b24tc3VibWl0LWVkaXQtcHJvZmlsZVwiLFxuICAgIGVkaXRQcm9maWxlQnV0dG9uOiBcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiLFxuICAgIGVkaXRQcm9maWxlUG9wdXA6IFwibW9kYWxfcHJvZmlsZVwiLFxuICAgIHVzZXJOYW1lOiBcImRpc3BsYXlfcHJvZmlsZV9uYW1lXCIsXG4gICAgdXNlckJpbzogXCJkaXNwbGF5X3Byb2ZpbGVfYmlvXCIsXG4gICAgdXNlckF2YXRhcjogXCJkaXNwbGF5X3Byb2ZpbGVfYXZhdGFyXCIsXG4gICAgaW5wdXRVc2VyTmFtZTogXCJpbnB1dF9wcm9maWxlX25hbWVcIixcbiAgICBpbnB1dFVzZXJCaW86IFwiaW5wdXRfcHJvZmlsZV9iaW9cIixcbiAgICB1cGRhdGVBdmF0YXJCdXR0b246IFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIixcbiAgICBpbnB1dEF2YXRhckxpbms6IFwiaW5wdXRfYXZhdGFyX2xpbmtcIixcbiAgICB1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b246IFwiYnV0dG9uLXVwZGF0ZS1hdmF0YXJcIixcbiAgICB1cGRhdGVBdmF0YXJQb3B1cDogXCJtb2RhbF91cGRhdGVfYXZhdGFyXCIsXG4gICAgYWRkUGxhY2VGb3JtOiBcImZvcm1fYWRkX3BsYWNlXCIsXG4gICAgZWRpdFByb2ZpbGVGb3JtOiBcImZvcm1fZWRpdF9wcm9maWxlXCIsXG4gICAgdXBkYXRlQXZhdGFyRm9ybTogXCJmb3JtX3VwZGF0ZV9hdmF0YXJcIlxuXG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdGlvbkNvbmZpZyA9IHtcbiAgICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIiwgLy8jID0gaWQsIC4gaXMgY2xzc1xuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fc3VibWl0X2Rpc2FibGVkXCIsIC8vIGNsYXNzZXNcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxuICAgIGVycm9yQ2xhc3M6IFwiZm9ybV9fZXJyb3JfdmlzaWJsZVwiLFxuICB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuLy8gSW1wb3J0IGFsbCB0aGUgY2xhc3Nlc1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1cIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xyXG5cclxuaW1wb3J0IHsgc2VsZWN0b3JzLCBmb3JtVmFsaWRhdGlvbkNvbmZpZyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQVBJIFNFVFRJTkdTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC1hcGkuZW4udHJpcGxldGVuLXNlcnZpY2VzLmNvbS92MVwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiMTQxMjAxMmQtYmE2MS00ZDc1LWI1NWEtMTQ1MDRkNmUyM2FlXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBpbiB0aGlzIHByb2plY3QsIGFsbCBBUEkgZXJyb3JzIGhhbmRsZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uIEluIHByYWN0aWNlLCBsaWtlbHkgd291bGQgYmUgZGlmZmVyZW50IGhhbmRsZXJzLlxyXG5mdW5jdGlvbiBoYW5kbGVBcGlFcnJvcihlcnJvck1lc3NhZ2UpIHtcclxuICBjb25zb2xlLmVycm9yKFwiVHJpcGxlIFRlbiBBUEkgRXJyb3I6IFwiLCBlcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUE9QVVAgU0VUVElOR1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gaGFuZGxlcyBjbG9zaW5nIHRoZSBnaXZlbiBwb3B1cFxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwRWwpIHtcclxuICBwb3B1cEVsLmNsb3NlKCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDQVJEIFJFTkRFUkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XHJcbiAgcmVuZGVyZXI6IChkYXRhKSA9PiByZW5kZXJDYXJkKGRhdGEsIHRydWUpLFxyXG4gIHNlbGVjdG9yOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhLCBzaG91bGRBcHBlbmQpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGhhbmRsZUltYWdlQ2xpY2s6IChpbWdEYXRhKSA9PiB7XHJcbiAgICAgICAgY2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVEZWxldGVDYXJkOiAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlQ2FyZFJlcXVlc3QoY2FyZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUxpa2VDbGljazogKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUxpa2VDbGljayhjYXJkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUsXHJcbiAgKVxyXG4gIGNvbnN0IGNhcmRIVE1MID0gY2FyZC5jcmVhdGVDYXJkKCk7IC8vIGFuIGh0bWwgZWxlbWVudFxyXG5cclxuICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRIVE1MICwgc2hvdWxkQXBwZW5kKTtcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGRVRDSCBDVVJSRU5UIENBUkRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuYXBpLmdldEluaXRpYWxDYXJkcygpXHJcbiAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikgY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoZGF0YSk7IC8vIG9ubHkgYXR0ZW1wdCByZW5kZXJpbmcgaWYgdGhlcmUgaXMgZGF0YSB0byBkaXNwbGF5XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgaGFuZGxlQXBpRXJyb3IoZXJyKTtcclxuICB9KTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTkVXIENBUkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuYWRkQ2FyZEJ1dHRvbik7XHJcbmNvbnN0IGFkZENhcmRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuYWRkQ2FyZFN1Ym1pdEJ1dHRvbik7XHJcblxyXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmFkZENhcmRQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YUluKSA9PiB7XHJcbiAgICBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLmFkZENhcmQoZGF0YUluKVxyXG4gICAgICAudGhlbigoZGF0YU91dCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckNhcmQoZGF0YU91dCwgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQXBpRXJyb3IoZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIGFkZENhcmRTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xyXG4gICAgICAgIGNsb3NlUG9wdXAoYWRkQ2FyZFBvcHVwKTtcclxuICAgICAgfSlcclxuXHJcbiAgfSxcclxufSk7XHJcblxyXG5hZGRDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJBbGxWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gREVMRVRFIENBUkQgQ09ORklSTUFUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0KGNhcmQpIHtcclxuICBcclxuICBjb25zdCBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgICBwb3B1cFNlbGVjdG9yOiBzZWxlY3RvcnMuZGVsZXRlQ2FyZFBvcHVwLFxyXG4gICAgaGFuZGxlRm9ybVN1Ym1pdDogKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGNhcmQuY29uc3RydWN0b3IgPT09IENhcmQpO1xyXG4gICAgICBhcGkuZGVsZXRlQ2FyZChjYXJkLmdldENhcmRJbmZvKCkuaWQpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseShcclxuICAgICAgICAgIGNsb3NlUG9wdXAoZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhcmQuZGVsZXRlQ2FyZCgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLm9wZW4oKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExJS0UgQkVIQVZJT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGlrZUNsaWNrKGNhcmQpIHtcclxuICAvLyBpZiBsaWtlZCBhbHJlYWR5LCB1bmxpa2UgaW4gYXBpIGFuZCBtYWtlIGhlYXJ0IGVtcHR5XHJcbiAgaWYgKGNhcmQuZ2V0Q2FyZEluZm8oKS5pc0xpa2VkKSB7IC8vIENhbiB0aGUgbGlrZSBzdGF0dXMgYmUgcmV0cmlldmVkIGZyb20gQVBJIHJhdGhlciB0aGFuIG1haW50YWluIGEgc2Vjb25kIHZlcnNpb24gaGVyZT9cclxuICAgIGFwaS51bmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZClcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICB9KTsgIFxyXG4gIH1cclxuICAvLyBlbHNlID0gY3VycmVudGx5IHVubGlrZXMsIGxpa2UgaW4gYXBpIGFuZCBmaWxsIHRoZSBoZWFydFxyXG4gIGVsc2Uge1xyXG4gICAgYXBpLmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZClcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhcmQudXBkYXRlTGlrZUhlYXJ0KHRydWUpOyAvLyB0b2dnbGUgdG8gYWx0ZXJuYXRpdmUgY29sb3IgYW5kIHVwZGF0ZSBpc0xpa2VkIGNhcmQgcHJvcGVydHlcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBST0ZJTEUgSU5GTyBTVE9SQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY3VycmVudFVzZXJQcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBzZWxlY3RvcnMudXNlck5hbWUsXHJcbiAgYmlvOiBzZWxlY3RvcnMudXNlckJpbyxcclxuICBhdmF0YXI6IHNlbGVjdG9ycy51c2VyQXZhdGFyXHJcbn0pXHJcblxyXG5hcGkuZ2V0VXNlckluZm8oKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmFib3V0LCBkYXRhLmF2YXRhcik7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgaGFuZGxlQXBpRXJyb3IoZXJyKTtcclxuICB9KTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJPRklMRSBJTkZPIE1BTkFHRU1FTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5lZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbik7XHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy5lZGl0UHJvZmlsZVBvcHVwLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XHJcbiAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS51cGRhdGVQcm9maWxlKGRhdGEpXHJcbiAgICAgIC50aGVuKChkYXRhSW4pID0+IHtcclxuICAgICAgICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oXHJcbiAgICAgICAgICBkYXRhSW4ubmFtZSxcclxuICAgICAgICAgIGRhdGFJbi5hYm91dCxcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xyXG4gICAgICAgIGNsb3NlUG9wdXAoZWRpdFByb2ZpbGVQb3B1cCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5lZGl0UHJvZmlsZUJ1dHRvbik7XHJcblxyXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIHByZWZpbGxQcm9maWxlRm9ybSgpO1xyXG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbi8vIFRvIHByZWZpbGwgRWRpdCBQcm9maWxlIEZvcm1cclxuXHJcbmNvbnN0IGlucHV0UHJvZmlsZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuaW5wdXRVc2VyTmFtZSk7XHJcbmNvbnN0IGlucHV0QmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0VXNlckJpbyk7XHJcblxyXG5mdW5jdGlvbiBwcmVmaWxsUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dFByb2ZpbGVOYW1lLnZhbHVlID0gY3VycmVudFVzZXIubmFtZTtcclxuICBpbnB1dEJpby52YWx1ZSA9IGN1cnJlbnRVc2VyLmJpbztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFWQVRBUiBNQU5BR0VNRU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgdXBkYXRlQXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMudXBkYXRlQXZhdGFyQnV0dG9uKTtcclxuY29uc3QgaW5wdXRBdmF0YXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0QXZhdGFyTGluayk7XHJcbmNvbnN0IHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy51cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbmNvbnN0IHVwZGF0ZUF2YXRhclBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy51cGRhdGVBdmF0YXJQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xyXG4gICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLnVwZGF0ZUF2YXRhcihkYXRhLmlucHV0X2F2YXRhcl9saW5rKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudFVzZXJQcm9maWxlLnNldEF2YXRhcihkYXRhLmlucHV0X2F2YXRhcl9saW5rKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBoYW5kbGVBcGlFcnJvcihlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XHJcbiAgICAgICAgY2xvc2VQb3B1cCh1cGRhdGVBdmF0YXJQb3B1cCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcHJlZmlsbEF2YXRhckZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dEF2YXRhckxpbmsudmFsdWUgPSBjdXJyZW50VXNlci5hdmF0YXIuc3JjO1xyXG59XHJcblxyXG51cGRhdGVBdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckFsbFZhbGlkYXRpb25FcnJvcnMoKTtcclxuICBwcmVmaWxsQXZhdGFyRm9ybSgpO1xyXG4gIHVwZGF0ZUF2YXRhclBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1BR0UgQ0FSRCBQUkVWSUVXIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShzZWxlY3RvcnMuaW1hZ2VQcmV2aWV3KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGT1JNIFZBTElEQVRJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjcmVhdGVzIGZvcm0gdmFsaWRhdG9yIGZvciBldmVyeSBmb3JtIGFuZCBzYXZlcyBpdCBzbyBmb3JtVmFsaWRhdG9ycy5cclxuY29uc3QgZm9ybVZhbGlkYXRvcnMgPSBbXTtcclxuZm9yIChjb25zdCBmb3JtIG9mIGRvY3VtZW50LmZvcm1zKSB7XHJcbiAgZm9ybVZhbGlkYXRvcnMucHVzaChuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgZm9ybSkpO1xyXG59ICBcclxuXHJcbi8vIGNsZWFycyBhbGwgZXhpc3RpbmcgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbmZ1bmN0aW9uIGNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycyAoKSB7XHJcbiAgZm9yIChjb25zdCBmb3JtVmFsaWRhdG9yIG9mIGZvcm1WYWxpZGF0b3JzKSB7XHJcbiAgICBmb3JtVmFsaWRhdG9yLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpXHJcbiAgfSAgXHJcbn0iXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsImJhc2VVcmwiLCJoZWFkZXJzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfaGFuZGxlRmV0Y2giLCJkZXN0aW5hdGlvblVybCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiY29uY2F0Iiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImFkZENhcmQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJpbnB1dF9wbGFjZV90aXRsZSIsImxpbmsiLCJpbnB1dF9wbGFjZV9pbWFnZSIsInVwZGF0ZVByb2ZpbGUiLCJpbnB1dF9wcm9maWxlX25hbWUiLCJhYm91dCIsImlucHV0X3Byb2ZpbGVfYmlvIiwiZGVsZXRlQ2FyZCIsImNhcmRJZCIsInVwZGF0ZUF2YXRhciIsImF2YXRhckxpbmsiLCJhdmF0YXIiLCJsaWtlQ2FyZCIsInVubGlrZUNhcmQiLCJnZXRDYXJkIiwiZGVmYXVsdCIsIkNhcmQiLCJjYXJkVGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlTGlrZUNsaWNrIiwiX25hbWUiLCJfbGluayIsIl9pZCIsIl9pc0xpa2VkIiwiaXNMaWtlZCIsInVuZGVmaW5lZCIsIl9jYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfZWxlbWVudCIsIl9kZWxldGVCdXR0b24iLCJfbGlrZUJ1dHRvbiIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaGFuZGxlTGlrZUNsaWNrIiwicmVtb3ZlIiwidXBkYXRlTGlrZUhlYXJ0IiwidG9nZ2xlSXNMaWtlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImltYWdlQ2FyZCIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJuYW1lQ2FyZCIsInRleHRDb250ZW50IiwiaXNCdXR0b25MaWtlZCIsImNvbnRhaW5zIiwiZ2V0Q2FyZEluZm8iLCJjYXJkSW5mbyIsImlkIiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiX2VuYWJsZVZhbGlkYXRpb24iLCJfc2hvd0Vycm9yIiwiZXJyb3JFbCIsImlucHV0RWwiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlRXJyb3IiLCJfaXNJbnZhbGlkSW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInRvZ2dsZUJ1dHRvbiIsIl9oYXNJbnZhbGlkSW5wdXRzIiwiZGlzYWJsZWQiLCJzb21lIiwiX3RoaXMyIiwiZm9yRWFjaCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwiX3RoaXMzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX21vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJfb3ZlcmxheSIsIl9jbG9zZUJ1dHRvbiIsIl9oYW5kbGVFc2NFc2NhcGUiLCJiaW5kIiwiX2Nsb3NlIiwiY2xvc2UiLCJfaGFuZGxlT3ZlcmxheUNsaWNrIiwib3BlbiIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImNhbGwiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRzIiwiX2lucHV0TWFwIiwiX2hhbmRsZVN1Ym1pdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJyZXNldCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfc2V0SW5wdXRWYWx1ZXMiLCJnZXRJbnB1dFZhbHVlcyIsImlucHV0TWFwIiwiaW5wdXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZSIsIl9pbWFnZUNhcHRpb24iLCJzcmMiLCJhbHQiLCJTZWN0aW9uIiwicmVuZGVyZXIiLCJzZWxlY3RvciIsIl9yZW5kZXJlciIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsInNob3VsZEFwcGVuZCIsImFwcGVuZCIsInByZXBlbmQiLCJVc2VySW5mbyIsImJpbyIsIl9iaW8iLCJfYXZhdGFyIiwidXNlciIsInNldFVzZXJJbmZvIiwibmFtZVRleHQiLCJiaW9UZXh0Iiwic2V0QXZhdGFyIiwic2VsZWN0b3JzIiwiY2FyZFNlY3Rpb24iLCJjYXJkVGVtcGxhdGUiLCJjYXJkRGVsZXRlQnV0dG9uIiwiY2FyZExpa2VTeW1ib2wiLCJpbWFnZVByZXZpZXciLCJhZGRDYXJkQnV0dG9uIiwiYWRkQ2FyZFN1Ym1pdEJ1dHRvbiIsImFkZENhcmRQb3B1cCIsImRlbGV0ZUNhcmRQb3B1cCIsImVkaXRQcm9maWxlU3VibWl0QnV0dG9uIiwiZWRpdFByb2ZpbGVCdXR0b24iLCJlZGl0UHJvZmlsZVBvcHVwIiwidXNlck5hbWUiLCJ1c2VyQmlvIiwidXNlckF2YXRhciIsImlucHV0VXNlck5hbWUiLCJpbnB1dFVzZXJCaW8iLCJ1cGRhdGVBdmF0YXJCdXR0b24iLCJpbnB1dEF2YXRhckxpbmsiLCJ1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24iLCJ1cGRhdGVBdmF0YXJQb3B1cCIsImFkZFBsYWNlRm9ybSIsImVkaXRQcm9maWxlRm9ybSIsInVwZGF0ZUF2YXRhckZvcm0iLCJmb3JtVmFsaWRhdGlvbkNvbmZpZyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJoYW5kbGVBcGlFcnJvciIsImVycm9yTWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsImNsb3NlUG9wdXAiLCJwb3B1cEVsIiwicmVuZGVyQ2FyZCIsImNhcmQiLCJpbWdEYXRhIiwiY2FyZFByZXZpZXdQb3B1cCIsImhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0IiwiY2FyZEhUTUwiLCJkYXRhSW4iLCJkYXRhT3V0IiwiZmluYWxseSIsImNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycyIsImRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cCIsImN1cnJlbnRVc2VyUHJvZmlsZSIsInByZWZpbGxQcm9maWxlRm9ybSIsImlucHV0UHJvZmlsZU5hbWUiLCJpbnB1dEJpbyIsImN1cnJlbnRVc2VyIiwiaW5wdXRfYXZhdGFyX2xpbmsiLCJwcmVmaWxsQXZhdGFyRm9ybSIsImZvcm1WYWxpZGF0b3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJmb3JtcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZm9ybSIsInB1c2giLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJmb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==