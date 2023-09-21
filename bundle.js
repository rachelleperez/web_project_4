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
      }).then(card.deleteCard()).finally(closePopup(deleteCardConfirmationPopup));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQixVQUFBLEdBQUFWLDBCQUFBLENBQ1BGLGNBQWM7SUFBQWEsTUFBQTtFQUFBO0lBQTFDLEtBQUFELFVBQUEsQ0FBQVAsQ0FBQSxNQUFBUSxNQUFBLEdBQUFELFVBQUEsQ0FBQU4sQ0FBQSxJQUFBQyxJQUFBLEdBQTRDO01BQUEsSUFBakNPLGFBQWEsR0FBQUQsTUFBQSxDQUFBdlAsS0FBQTtNQUN0QndQLGFBQWEsQ0FBQ2xJLHFCQUFxQixDQUFDLENBQUM7SUFDdkM7RUFBQyxTQUFBdkcsR0FBQTtJQUFBdU8sVUFBQSxDQUFBRixDQUFBLENBQUFyTyxHQUFBO0VBQUE7SUFBQXVPLFVBQUEsQ0FBQUQsQ0FBQTtFQUFBO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnN9KSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwsXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnNcbiAgICB9XG5cbiAgICBfaGFuZGxlRmV0Y2ggKGRlc3RpbmF0aW9uVXJsLCBtZXRob2QsIGJvZHkpIHtcblxuICAgICAgICByZXR1cm4gZmV0Y2goZGVzdGluYXRpb25VcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgLy8gdGVzdCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnRGF0YSBmcm9tIEFQSTonLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvciwgcmVqZWN0IHRoZSBwcm9taXNlXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYFJlc3BvbnNlIEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7IC8vIHRocm93cyBhbiBlcnJvciB0byBiZSBjYXVnaHQgYnkgLmNhdGNoIGluIGluZGV4LmpzXG4gICAgICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyOyAvLyB0aHJvd3MgYW4gZXJyb3IgdG8gYmUgY2F1Z2h0IGJ5IC5jYXRjaCBpbiBpbmRleC5qc1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW5pdGlhbENhcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCBcIkdFVFwiKTtcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwgXCJHRVRcIik7XG4gICAgfVxuXG4gICAgYWRkQ2FyZChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeSh7bmFtZTogZGF0YS5pbnB1dF9wbGFjZV90aXRsZSAsbGluazogZGF0YS5pbnB1dF9wbGFjZV9pbWFnZX0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9maWxlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lYCwgXCJQQVRDSFwiLCBKU09OLnN0cmluZ2lmeSh7bmFtZTogZGF0YS5pbnB1dF9wcm9maWxlX25hbWUgLGFib3V0OiBkYXRhLmlucHV0X3Byb2ZpbGVfYmlvfSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCBcIkRFTEVURVwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBdmF0YXIoYXZhdGFyTGluaykge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwgXCJQQVRDSFwiLCBKU09OLnN0cmluZ2lmeSh7YXZhdGFyOiBhdmF0YXJMaW5rfSkpO1xuICAgIH1cblxuICAgIGxpa2VDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwgXCJQVVRcIik7XG4gICAgfVxuXG4gICAgdW5saWtlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIFwiREVMRVRFXCIpO1xuICAgIH1cblxuICAgIGdldENhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCBcIkdFVFwiKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuLy8gY2FuIEkgZ2V0IHRlbXBsYXRlIGZyb20gaGVyZT9cclxuLy8gc2hvdWxkIG5ldmVyIHJlZmVyZW5jZSBcImNhcmRcIiBoZXJlLiBUaGlzIGlzIGp1c3QgTVZQXHJcblxyXG5cclxuICAvLyBqdXN0IDEgY2FyZFxyXG4gIGNvbnN0cnVjdG9yICh7ZGF0YSwgaGFuZGxlSW1hZ2VDbGljaywgaGFuZGxlRGVsZXRlQ2FyZCwgaGFuZGxlTGlrZUNsaWNrfSwgY2FyZFRlbXBsYXRlU2VsZWN0b3IpIHtcclxuXHJcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XHJcbiAgICB0aGlzLl9pc0xpa2VkID0gZGF0YS5pc0xpa2VkO1xyXG5cclxuICAgIC8vIHRvIG1hdGNoIGluZGV4Lmh0bWxcclxuICAgIGlmIChkYXRhLm5hbWUgPT09IHVuZGVmaW5lZCkge3RoaXMuX25hbWUgPSBkYXRhLmlucHV0X3BsYWNlX3RpdGxlO31cclxuICAgIGlmIChkYXRhLmxpbmsgPT09IHVuZGVmaW5lZCkge3RoaXMuX2xpbmsgPSBkYXRhLmlucHV0X3BsYWNlX2ltYWdlO31cclxuICAgIFxyXG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJkVGVtcGxhdGVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IG51bGw7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBjYWxsYmFjayBmdW5jdGlvbnMgdG8gYmUgZXhlY3V0ZWQgaW4gaW5kZXguanNcclxuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9IGhhbmRsZURlbGV0ZUNhcmQ7XHJcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIGNoYW5nZXMgY29sb3IsIG5vdGhpbmcgZWxzZS5cclxuICB1cGRhdGVMaWtlSGVhcnQodG9nZ2xlSXNMaWtlZCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZWxlbWVudHNfX2xpa2Utc3ltYm9sX2FjdGl2ZVwiKTtcclxuICAgIGlmICh0b2dnbGVJc0xpa2VkKSB0aGlzLl9pc0xpa2VkID0gIXRoaXMuX2lzTGlrZWQ7XHJcbiAgfVxyXG5cclxuICAvL2luc3RhbmNlIHZhcmlhYmxlc1xyXG4gIFxyXG4gIF9zZXRFdmVudExpc3RlbmVycyAoaW1hZ2VDYXJkKSB7XHJcbiAgICBpbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHtsaW5rOiB0aGlzLl9saW5rLCBuYW1lOiB0aGlzLl9uYW1lfSkpXHJcblxyXG4gICAgLy8gQWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gQWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbGlrZSBidXR0b25cclxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcykpO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIGhhbmRsZXMgZGVsZXRlIGNhcmQgcmVxdWVzdFxyXG4gIGhhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGhhbmRsZXMgbGlrZSBidXR0b24gY2xpY2tcclxuICBoYW5kbGVMaWtlQ2xpY2soKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGUgbmV3IGNhcmRcclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fY2FyZFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fZWxlbWVudCcpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19saWtlLXN5bWJvbCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbWFnZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faW1hZ2UnKVxyXG4gICAgaW1hZ2VDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5fbGlua30nKWBcclxuICAgIGNvbnN0IG5hbWVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX25hbWUnKVxyXG4gICAgbmFtZUNhcmQudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lXHJcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2Utc3ltYm9sJylcclxuXHJcbiAgICAvL3NldCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKGltYWdlQ2FyZCk7XHJcblxyXG4gICAgLy8gbGlrZSBidXR0b24gc2hvd24gbXVzdCByZWZsZWN0IHN0YXR1cy4gaWYgYnV0dG9uIGNvbG9yIGFuZCBsaWtlIHN0YXR1cyBkb250IG1hdGNoLCB0b2dnbGUgbGlrZSBjb2xvclxyXG4gICAgY29uc3QgaXNCdXR0b25MaWtlZCA9IHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWxlbWVudHNfX2xpa2Utc3ltYm9sX2FjdGl2ZVwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5faXNMaWtlZCkge1xyXG4gICAgICBpZiAoIWlzQnV0dG9uTGlrZWQpIHRoaXMudXBkYXRlTGlrZUhlYXJ0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8vIENhcmQgbm90IGxpa2VkXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKGlzQnV0dG9uTGlrZWQpIHRoaXMudXBkYXRlTGlrZUhlYXJ0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gcmV0dXJuIHRoZSBjcmVhdGVkIGNhcmRcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gY2FyZCBpbmZvXHJcbiAgZ2V0Q2FyZEluZm8oKSB7XHJcbiAgICBjb25zdCBjYXJkSW5mbyA9IHtcclxuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxyXG4gICAgICAgIGxpbms6IHRoaXMuX2xpbmssXHJcbiAgICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgICAgIGlzTGlrZWQ6IHRoaXMuX2lzTGlrZWRcclxuICAgIH1cclxuICAgIHJldHVybiBjYXJkSW5mb1xyXG4gIH1cclxuXHJcbn0iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAvL3NldHRpbmdzID0gY292aWQsIGZvcm1FbGVtZW50ID0gbm8gbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIGZvcm1zLiBTYXkgdXBmcm9udCB0aGUgZm9ybSBuZWVkZWRcclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gY29uZmlnLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgICh0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzKSxcclxuICAgICAgKHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcyk7XHJcblxyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl9lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvL2RvbmVcclxuICBfc2hvd0Vycm9yKGVycm9yRWwsIGlucHV0RWwpIHtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvL2RvbmVcclxuICBfaGlkZUVycm9yKGVycm9yRWwsIGlucHV0RWwpIHtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xyXG4gICAgcmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XHJcbiAgICAvL3NldHRpbmdzLCBmb3JtRWwgcmVtb3ZlZFxyXG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7IC8vIGFkZGVkIFwiLWVycm9yXCIgdG8gZXJyb3IgdmVyc2lvbnNcclxuICAgIGlmICh0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xyXG4gICAgICAvLyBoaWRlIHRoZSBlcnJvciBtZXNzYWdlcyBhbmQgc3R5bGVcclxuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWwsIGlucHV0RWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc2hvdyBlcnJvciBtZXNzYWdlcyBhbmQgc3R5bGVcclxuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwsIGlucHV0RWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQnV0dG9uKCkge1xyXG4gICAgLy9yZW1vdmVkIHNldHRpbmdzXHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dHMoKSkge1xyXG4gICAgICAvLyBkaXNhYmxlIHRoZSBidXR0b25cclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm5zIHRydWUgaWYgc29tZSBpbnZhbGlkIGlucHV0XHJcbiAgX2hhc0ludmFsaWRJbnB1dHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWwpID0+IHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgaW5wdXRzIGFuZCBhZGQgdmFsaWRhdGlvblxyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcclxuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vY2hlY2sgdGhlIGlucHV0XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpOyAvL3NldHRpbmdzLCBmb3JtRWwgcmVtb3ZlZFxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgYnV0dG9uIChpZiBpbnB1dCBpcyB2YWxpZCwgZW5hYmxlLiBpZiBub3QsIGRpc2FibGVkKVxyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgLy9zZXR1cCB2YWxpZGF0aW9uXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpOyAvL3NldHRpbmdzIChjb25maWcpIHRvIGJlIHBhc3NlZCB0byBmb3JtIHZpYSBjb25zdHJ1Y3RvclxyXG4gIH1cclxuXHJcbiAgLy8gbm8gZXJyb3JzIHVwb24gb3BlbmluZyBhIGZvcm0uXHJcbiAgY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XHJcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsLCBpbnB1dEVsKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy9leHBvcnQgZm9yIGluZGV4LmpzXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XHJcbiIsIi8vIG9wZW5zIGFuZCBjbG9zZSBhbGwgcG9wdXBzIGluIGFwcGxpY2F0aW9uIChlZGl0IHByb2ZpbGUsIGFkZCBwbGFjZSwgaW1hZ2UgcG9wdXApXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cG9wdXBTZWxlY3Rvcn1gKTsgLy8gbW9kYWwtcHJvZmlsZVxuICAgICAgICB0aGlzLl9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19vdmVybGF5Jyk7IC8vIG5vdGUsIHJpZ2h0IGFib3ZlXG4gICAgICAgIC8vdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsICMke3BvcHVwU2VsZWN0b3J9IH4gLm1vZGFsX19vdmVybGF5YCk7XG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpO1xuICAgICAgICB0aGlzLl9oYW5kbGVFc2NFc2NhcGUgPSB0aGlzLl9oYW5kbGVFc2NFc2NhcGUuYmluZCh0aGlzKTsgLy8gdG8gbWFrZSBzdXJlIGNvcnJlY3QgY29udGV4dCBmb3IgdGhpcyBpbiB0aGlzIGZ1bmN0aW9uLlxuICAgICAgICB0aGlzLl9jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTsgLy8gYmluZGluZyBjbG9zZSgpIHRvIHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2sgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2suYmluZCh0aGlzKTsgLy8gYmluZCB0byBjb25zdHJ1Y3RvclxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIC8vIG9wZW5zIHBvcHVwXG4gICAgICAgIHRoaXMuX21vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX19jb250YWluZXJfYWN0aXZlJylcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fb3ZlcmxheV9hY3RpdmUnKVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIC8vIGNsb3NlcyBwb3B1cFxuICAgICAgICB0aGlzLl9tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fY29udGFpbmVyX2FjdGl2ZScpXG4gICAgICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX292ZXJsYXlfYWN0aXZlJylcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIF9oYW5kbGVFc2NFc2NhcGUoZXZlbnQpIHtcbiAgICAgICAgLy8gbGlzdGVucyBmb3IgZXNjIGJ1dHRvblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZU92ZXJsYXlDbGljayAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX292ZXJsYXlfYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIHNldHMgZXZlbnQgbGlzdGVuZXJzXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBjbG9zZSBidXR0b25cbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbG9zZSk7XG5cbiAgICAgICAgLy8gaWYgYSBrZXkgaXMgcHJlc3NlZCwgX2hhbmRsZUVzY0VzY2FwZSB3aWxsIGNhbGwgY2xvc2UoKSBpcyBrZXkgaXMgRXNjXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NFc2NhcGUpO1xuXG4gICAgICAgIC8vIGlmIG92ZXJsYXkgaXMgY2xpY2tlZCwgY2xvc2VcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljaylcblxuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xvc2UpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjRXNjYXBlKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljayk7IFxuXG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0IH0pIHtcbiAgICAvLyBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIHlvdSBzdWJtaXQgdGhlIGZvcm1cblxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpOyAvLyBmb3IgUG9wdXBcblxuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTsgLy8gPGZvcm0gaWQgPSBcImZvcm1fYWRkX3BsYWNlXCIgY2xhc3M9XCJmb3JtXCIgbmFtZT1cImZvcm1fYWRkX3BsYWNlXCIgbm92YWxpZGF0ZT5cblxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuXG4gICAgdGhpcy5faW5wdXRzID0gdGhpcy5fcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9faW5wdXRcIik7IC8vSFRNTCBFbGVtZW50XG4gICAgdGhpcy5faW5wdXRNYXAgPSBudWxsOyAvLyBtYXAgaW5wdXRfbmFtZTogaW5wdXRfdmFsdWVcblxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IHRoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpOyAvLyBiaW5kIHRvIGNvbnN0cnVjdG9yXG5cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRm9ybS5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7IC8vIGNhbGxzIHBhcmVudCdzIGNsb3NlKClcbiAgfVxuXG4gIC8vIGhhbmRsZVN1Ym1pdCA9IGhhbmRsZXMgc3VibWl0IGV2ZW50IHwgaGFuZGxlRm9ybVN1Ym1pdCA9IHRha2VzIGFjdGlvbiBvbiBpbnB1dHNcbiAgX2hhbmRsZVN1Ym1pdChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9zZXRJbnB1dFZhbHVlcygpOyAvLyBmaWxsIGluIGlucHV0TWFwXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9pbnB1dE1hcCk7IFxuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIGlucHV0TWFwO1xuICB9XG5cbiAgLy9jb2xsZWN0cyBkYXRhIGZyb20gYWxsIGlucHV0IGZpZWxkcyBhbmQgcmV0dXJucyB0aGF0IGRhdGEgYXMgYW4gb2JqZWN0XG4gIF9zZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9pbnB1dE1hcCA9IHt9O1xuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5faW5wdXRNYXAgW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gYWRkIHN1Ym1pdCBldmVudCBoYW5kbGVyXG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0KTtcblxuICAgIC8vIG1haW50YWlucyBwYXJlbnQgc2V0dGluZ3MsIGNsb3NpbmcgdXBvbiBwcmVzc2luZyBjbG9zZSBidXR0b24sIEVzYywgYW5kIGNsaWNrIG92ZXJsYXlcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gYWRkcyBzdWJtaXQgZXZlbnRsaXN0ZW5lciBvbmx5IG9uY2VcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xuXG4gICAgLy8gbWFpbnRhaW5zIHBhcmVudCBzZXR0aW5ncywgY2xvc2luZyB1cG9uIHByZXNzaW5nIGNsb3NlIGJ1dHRvbiwgRXNjLCBhbmQgY2xpY2sgb3ZlcmxheVxuICAgIHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTsgICAgICAgXG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZScpO1xuICAgICAgICB0aGlzLl9pbWFnZUNhcHRpb24gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlLWNhcHRpb24nKTtcbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZSBvcGVuIGZ1bmN0aW9uXG4gICAgb3BlbihkYXRhKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYz0gZGF0YS5saW5rO1xuICAgICAgICB0aGlzLl9pbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuX2ltYWdlLmFsdD0gZGF0YS5uYW1lO1xuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyByZW5kZXJlciwgc2VsZWN0b3J9KSB7IC8vIE9SIGNsYXNzTmFtZSBpbnN0ZWFkIG9mIHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfWApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW1zKGl0ZW1zKSB7IC8vIHB1YmxpYyBmdW5jdGlvblxuICAgICAgICAvLyB1c2UgdGhpcy5fcmVuZGVyZXIgY3JlYXRlIHRoZSBlbGVtZW50IGZvciByZW5kZXJpbmcgPSAgdGhpcy5fZWxlbWVudFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtLCBzaG91bGRBcHBlbmQpIHtcblxuICAgICAgICBpZiAoc2hvdWxkQXBwZW5kKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZChpdGVtKSAvLyBpbml0aWFsIGNhcmRzIG9ubHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChpdGVtKSBcbiAgICAgICAgfVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGJpbywgYXZhdGFyIH0pIHsgLy8gT1IgY2xhc3NOYW1lIGluc3RlYWQgb2Ygc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9YCk7XG4gICAgICAgIHRoaXMuX2JpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Jpb31gKTtcbiAgICAgICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXZhdGFyfWApO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGJpbzogdGhpcy5fYmlvLnRleHRDb250ZW50LFxuICAgICAgICAgICAgYXZhdGFyOiB0aGlzLl9hdmF0YXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlclxuICAgIH1cblxuICAgIHNldFVzZXJJbmZvKG5hbWVUZXh0LCBiaW9UZXh0LCBhdmF0YXJMaW5rKSB7XG4gICAgICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lVGV4dDtcbiAgICAgICAgdGhpcy5fYmlvLnRleHRDb250ZW50ID0gYmlvVGV4dDtcbiAgICAgICAgaWYgKGF2YXRhckxpbmsgIT0gbnVsbCkgdGhpcy5zZXRBdmF0YXIoYXZhdGFyTGluayk7XG4gICAgfVxuXG4gICAgc2V0QXZhdGFyKGF2YXRhckxpbmspIHtcbiAgICAgICAgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhckxpbms7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICBjYXJkU2VjdGlvbjogJy5lbGVtZW50cycsXG4gICAgY2FyZFRlbXBsYXRlOiAnI2NhcmQtdGVtcGxhdGUnLFxuICAgIGNhcmREZWxldGVCdXR0b246ICcuZWxlbWVudHNfZGVsZXRlLWJ1dHRvbicsXG4gICAgY2FyZExpa2VTeW1ib2w6ICcuZWxlbWVudHNfX2xpa2Utc3ltYm9sJyxcbiAgICBpbWFnZVByZXZpZXc6ICdwb3B1cC1pbWFnZScsXG4gICAgYWRkQ2FyZEJ1dHRvbjogXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiLFxuICAgIGFkZENhcmRTdWJtaXRCdXR0b246IFwiYnV0dG9uLWNyZWF0ZS1wbGFjZVwiLFxuICAgIGFkZENhcmRQb3B1cDogXCJtb2RhbF9hZGRcIixcbiAgICBkZWxldGVDYXJkUG9wdXA6IFwiZGVsZXRlX2NhcmRfY29uZmlybWF0aW9uXCIsXG4gICAgZWRpdFByb2ZpbGVTdWJtaXRCdXR0b246IFwiYnV0dG9uLXN1Ym1pdC1lZGl0LXByb2ZpbGVcIixcbiAgICBlZGl0UHJvZmlsZUJ1dHRvbjogXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIixcbiAgICBlZGl0UHJvZmlsZVBvcHVwOiBcIm1vZGFsX3Byb2ZpbGVcIixcbiAgICB1c2VyTmFtZTogXCJkaXNwbGF5X3Byb2ZpbGVfbmFtZVwiLFxuICAgIHVzZXJCaW86IFwiZGlzcGxheV9wcm9maWxlX2Jpb1wiLFxuICAgIHVzZXJBdmF0YXI6IFwiZGlzcGxheV9wcm9maWxlX2F2YXRhclwiLFxuICAgIGlucHV0VXNlck5hbWU6IFwiaW5wdXRfcHJvZmlsZV9uYW1lXCIsXG4gICAgaW5wdXRVc2VyQmlvOiBcImlucHV0X3Byb2ZpbGVfYmlvXCIsXG4gICAgdXBkYXRlQXZhdGFyQnV0dG9uOiBcIi5wcm9maWxlX19hdmF0YXItYnV0dG9uXCIsXG4gICAgaW5wdXRBdmF0YXJMaW5rOiBcImlucHV0X2F2YXRhcl9saW5rXCIsXG4gICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uOiBcImJ1dHRvbi11cGRhdGUtYXZhdGFyXCIsXG4gICAgdXBkYXRlQXZhdGFyUG9wdXA6IFwibW9kYWxfdXBkYXRlX2F2YXRhclwiLFxuICAgIGFkZFBsYWNlRm9ybTogXCJmb3JtX2FkZF9wbGFjZVwiLFxuICAgIGVkaXRQcm9maWxlRm9ybTogXCJmb3JtX2VkaXRfcHJvZmlsZVwiLFxuICAgIHVwZGF0ZUF2YXRhckZvcm06IFwiZm9ybV91cGRhdGVfYXZhdGFyXCJcblxuICAgIFxufVxuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRpb25Db25maWcgPSB7XG4gICAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsIC8vIyA9IGlkLCAuIGlzIGNsc3NcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm1fX3N1Ym1pdF9kaXNhYmxlZFwiLCAvLyBjbGFzc2VzXG4gICAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgICBlcnJvckNsYXNzOiBcImZvcm1fX2Vycm9yX3Zpc2libGVcIixcbiAgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbi8vIEltcG9ydCBhbGwgdGhlIGNsYXNzZXNcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZVwiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5cclxuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGlcIjtcclxuXHJcbmltcG9ydCB7IHNlbGVjdG9ycywgZm9ybVZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFQSSBTRVRUSU5HUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQtYXBpLmVuLnRyaXBsZXRlbi1zZXJ2aWNlcy5jb20vdjFcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBcIjE0MTIwMTJkLWJhNjEtNGQ3NS1iNTVhLTE0NTA0ZDZlMjNhZVwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaW4gdGhpcyBwcm9qZWN0LCBhbGwgQVBJIGVycm9ycyBoYW5kbGVkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiBJbiBwcmFjdGljZSwgbGlrZWx5IHdvdWxkIGJlIGRpZmZlcmVudCBoYW5kbGVycy5cclxuZnVuY3Rpb24gaGFuZGxlQXBpRXJyb3IoZXJyb3JNZXNzYWdlKSB7XHJcbiAgY29uc29sZS5lcnJvcihcIlRyaXBsZSBUZW4gQVBJIEVycm9yOiBcIiwgZXJyb3JNZXNzYWdlKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBPUFVQIFNFVFRJTkdTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIGhhbmRsZXMgY2xvc2luZyB0aGUgZ2l2ZW4gcG9wdXBcclxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cEVsKSB7XHJcbiAgcG9wdXBFbC5jbG9zZSgpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ0FSRCBSRU5ERVJFUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGNhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xyXG4gIHJlbmRlcmVyOiAoZGF0YSkgPT4gcmVuZGVyQ2FyZChkYXRhLCB0cnVlKSxcclxuICBzZWxlY3Rvcjogc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhcmQoZGF0YSwgc2hvdWxkQXBwZW5kKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBoYW5kbGVJbWFnZUNsaWNrOiAoaW1nRGF0YSkgPT4ge1xyXG4gICAgICAgIGNhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRGVsZXRlQ2FyZDogKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0KGNhcmQpO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVMaWtlQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVMaWtlQ2xpY2soY2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlLFxyXG4gIClcclxuICBjb25zdCBjYXJkSFRNTCA9IGNhcmQuY3JlYXRlQ2FyZCgpOyAvLyBhbiBodG1sIGVsZW1lbnRcclxuXHJcbiAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkSFRNTCAsIHNob3VsZEFwcGVuZCk7XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRkVUQ0ggQ1VSUkVOVCBDQVJEUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmFwaS5nZXRJbml0aWFsQ2FyZHMoKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwidW5kZWZpbmVkXCIpIGNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGRhdGEpOyAvLyBvbmx5IGF0dGVtcHQgcmVuZGVyaW5nIGlmIHRoZXJlIGlzIGRhdGEgdG8gZGlzcGxheVxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgfSk7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5FVyBDQVJEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmFkZENhcmRCdXR0b24pO1xyXG5jb25zdCBhZGRDYXJkU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmFkZENhcmRTdWJtaXRCdXR0b24pO1xyXG5cclxuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy5hZGRDYXJkUG9wdXAsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGFJbikgPT4ge1xyXG4gICAgYWRkQ2FyZFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS5hZGRDYXJkKGRhdGFJbilcclxuICAgICAgLnRoZW4oKGRhdGFPdXQpID0+IHtcclxuICAgICAgICByZW5kZXJDYXJkKGRhdGFPdXQsIGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcclxuICAgICAgICBjbG9zZVBvcHVwKGFkZENhcmRQb3B1cCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERFTEVURSBDQVJEIENPTkZJUk1BVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVDYXJkUmVxdWVzdChjYXJkKSB7XHJcbiAgXHJcbiAgY29uc3QgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gICAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmRlbGV0ZUNhcmRQb3B1cCxcclxuICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhjYXJkLmNvbnN0cnVjdG9yID09PSBDYXJkKTtcclxuICAgICAgYXBpLmRlbGV0ZUNhcmQoY2FyZC5nZXRDYXJkSW5mbygpLmlkKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVBcGlFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4gKFxyXG4gICAgICAgICAgY2FyZC5kZWxldGVDYXJkKClcclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbmFsbHkoXHJcbiAgICAgICAgICBjbG9zZVBvcHVwKGRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cClcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLm9wZW4oKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExJS0UgQkVIQVZJT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGlrZUNsaWNrKGNhcmQpIHtcclxuICAvLyBpZiBsaWtlZCBhbHJlYWR5LCB1bmxpa2UgaW4gYXBpIGFuZCBtYWtlIGhlYXJ0IGVtcHR5XHJcbiAgaWYgKGNhcmQuZ2V0Q2FyZEluZm8oKS5pc0xpa2VkKSB7IC8vIENhbiB0aGUgbGlrZSBzdGF0dXMgYmUgcmV0cmlldmVkIGZyb20gQVBJIHJhdGhlciB0aGFuIG1haW50YWluIGEgc2Vjb25kIHZlcnNpb24gaGVyZT9cclxuICAgIGFwaS51bmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZClcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICB9KTsgIFxyXG4gIH1cclxuICAvLyBlbHNlID0gY3VycmVudGx5IHVubGlrZXMsIGxpa2UgaW4gYXBpIGFuZCBmaWxsIHRoZSBoZWFydFxyXG4gIGVsc2Uge1xyXG4gICAgYXBpLmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZClcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhcmQudXBkYXRlTGlrZUhlYXJ0KHRydWUpOyAvLyB0b2dnbGUgdG8gYWx0ZXJuYXRpdmUgY29sb3IgYW5kIHVwZGF0ZSBpc0xpa2VkIGNhcmQgcHJvcGVydHlcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBST0ZJTEUgSU5GTyBTVE9SQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY3VycmVudFVzZXJQcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBzZWxlY3RvcnMudXNlck5hbWUsXHJcbiAgYmlvOiBzZWxlY3RvcnMudXNlckJpbyxcclxuICBhdmF0YXI6IHNlbGVjdG9ycy51c2VyQXZhdGFyXHJcbn0pXHJcblxyXG5hcGkuZ2V0VXNlckluZm8oKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmFib3V0LCBkYXRhLmF2YXRhcik7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgaGFuZGxlQXBpRXJyb3IoZXJyKTtcclxuICB9KTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJPRklMRSBJTkZPIE1BTkFHRU1FTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5lZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbik7XHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy5lZGl0UHJvZmlsZVBvcHVwLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XHJcbiAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS51cGRhdGVQcm9maWxlKGRhdGEpXHJcbiAgICAgIC50aGVuKChkYXRhSW4pID0+IHtcclxuICAgICAgICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oXHJcbiAgICAgICAgICBkYXRhSW4ubmFtZSxcclxuICAgICAgICAgIGRhdGFJbi5hYm91dCxcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGhhbmRsZUFwaUVycm9yKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xyXG4gICAgICAgIGNsb3NlUG9wdXAoZWRpdFByb2ZpbGVQb3B1cCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5lZGl0UHJvZmlsZUJ1dHRvbik7XHJcblxyXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIHByZWZpbGxQcm9maWxlRm9ybSgpO1xyXG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbi8vIFRvIHByZWZpbGwgRWRpdCBQcm9maWxlIEZvcm1cclxuXHJcbmNvbnN0IGlucHV0UHJvZmlsZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuaW5wdXRVc2VyTmFtZSk7XHJcbmNvbnN0IGlucHV0QmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0VXNlckJpbyk7XHJcblxyXG5mdW5jdGlvbiBwcmVmaWxsUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dFByb2ZpbGVOYW1lLnZhbHVlID0gY3VycmVudFVzZXIubmFtZTtcclxuICBpbnB1dEJpby52YWx1ZSA9IGN1cnJlbnRVc2VyLmJpbztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFWQVRBUiBNQU5BR0VNRU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgdXBkYXRlQXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMudXBkYXRlQXZhdGFyQnV0dG9uKTtcclxuY29uc3QgaW5wdXRBdmF0YXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0QXZhdGFyTGluayk7XHJcbmNvbnN0IHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy51cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbmNvbnN0IHVwZGF0ZUF2YXRhclBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy51cGRhdGVBdmF0YXJQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xyXG4gICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLnVwZGF0ZUF2YXRhcihkYXRhLmlucHV0X2F2YXRhcl9saW5rKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudFVzZXJQcm9maWxlLnNldEF2YXRhcihkYXRhLmlucHV0X2F2YXRhcl9saW5rKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBoYW5kbGVBcGlFcnJvcihlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XHJcbiAgICAgICAgY2xvc2VQb3B1cCh1cGRhdGVBdmF0YXJQb3B1cCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcHJlZmlsbEF2YXRhckZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dEF2YXRhckxpbmsudmFsdWUgPSBjdXJyZW50VXNlci5hdmF0YXIuc3JjO1xyXG59XHJcblxyXG51cGRhdGVBdmF0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckFsbFZhbGlkYXRpb25FcnJvcnMoKTtcclxuICBwcmVmaWxsQXZhdGFyRm9ybSgpO1xyXG4gIHVwZGF0ZUF2YXRhclBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1BR0UgQ0FSRCBQUkVWSUVXIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShzZWxlY3RvcnMuaW1hZ2VQcmV2aWV3KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGT1JNIFZBTElEQVRJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjcmVhdGVzIGZvcm0gdmFsaWRhdG9yIGZvciBldmVyeSBmb3JtIGFuZCBzYXZlcyBpdCBzbyBmb3JtVmFsaWRhdG9ycy5cclxuY29uc3QgZm9ybVZhbGlkYXRvcnMgPSBbXTtcclxuZm9yIChjb25zdCBmb3JtIG9mIGRvY3VtZW50LmZvcm1zKSB7XHJcbiAgZm9ybVZhbGlkYXRvcnMucHVzaChuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdGlvbkNvbmZpZywgZm9ybSkpO1xyXG59ICBcclxuXHJcbi8vIGNsZWFycyBhbGwgZXhpc3RpbmcgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbmZ1bmN0aW9uIGNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycyAoKSB7XHJcbiAgZm9yIChjb25zdCBmb3JtVmFsaWRhdG9yIG9mIGZvcm1WYWxpZGF0b3JzKSB7XHJcbiAgICBmb3JtVmFsaWRhdG9yLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpXHJcbiAgfSAgXHJcbn0iXSwibmFtZXMiOlsiQXBpIiwiX3JlZiIsImJhc2VVcmwiLCJoZWFkZXJzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfaGFuZGxlRmV0Y2giLCJkZXN0aW5hdGlvblVybCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwiY29uY2F0Iiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJnZXRJbml0aWFsQ2FyZHMiLCJnZXRVc2VySW5mbyIsImFkZENhcmQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJpbnB1dF9wbGFjZV90aXRsZSIsImxpbmsiLCJpbnB1dF9wbGFjZV9pbWFnZSIsInVwZGF0ZVByb2ZpbGUiLCJpbnB1dF9wcm9maWxlX25hbWUiLCJhYm91dCIsImlucHV0X3Byb2ZpbGVfYmlvIiwiZGVsZXRlQ2FyZCIsImNhcmRJZCIsInVwZGF0ZUF2YXRhciIsImF2YXRhckxpbmsiLCJhdmF0YXIiLCJsaWtlQ2FyZCIsInVubGlrZUNhcmQiLCJnZXRDYXJkIiwiZGVmYXVsdCIsIkNhcmQiLCJjYXJkVGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJoYW5kbGVEZWxldGVDYXJkIiwiaGFuZGxlTGlrZUNsaWNrIiwiX25hbWUiLCJfbGluayIsIl9pZCIsIl9pc0xpa2VkIiwiaXNMaWtlZCIsInVuZGVmaW5lZCIsIl9jYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfZWxlbWVudCIsIl9kZWxldGVCdXR0b24iLCJfbGlrZUJ1dHRvbiIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaGFuZGxlTGlrZUNsaWNrIiwicmVtb3ZlIiwidXBkYXRlTGlrZUhlYXJ0IiwidG9nZ2xlSXNMaWtlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImltYWdlQ2FyZCIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNhcmQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJuYW1lQ2FyZCIsInRleHRDb250ZW50IiwiaXNCdXR0b25MaWtlZCIsImNvbnRhaW5zIiwiZ2V0Q2FyZEluZm8iLCJjYXJkSW5mbyIsImlkIiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiX2VuYWJsZVZhbGlkYXRpb24iLCJfc2hvd0Vycm9yIiwiZXJyb3JFbCIsImlucHV0RWwiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlRXJyb3IiLCJfaXNJbnZhbGlkSW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInRvZ2dsZUJ1dHRvbiIsIl9oYXNJbnZhbGlkSW5wdXRzIiwiZGlzYWJsZWQiLCJzb21lIiwiX3RoaXMyIiwiZm9yRWFjaCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwiX3RoaXMzIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX21vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJfb3ZlcmxheSIsIl9jbG9zZUJ1dHRvbiIsIl9oYW5kbGVFc2NFc2NhcGUiLCJiaW5kIiwiX2Nsb3NlIiwiY2xvc2UiLCJfaGFuZGxlT3ZlcmxheUNsaWNrIiwib3BlbiIsInNldEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImNhbGwiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfaW5wdXRzIiwiX2lucHV0TWFwIiwiX2hhbmRsZVN1Ym1pdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJyZXNldCIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfc2V0SW5wdXRWYWx1ZXMiLCJnZXRJbnB1dFZhbHVlcyIsImlucHV0TWFwIiwiaW5wdXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZSIsIl9pbWFnZUNhcHRpb24iLCJzcmMiLCJhbHQiLCJTZWN0aW9uIiwicmVuZGVyZXIiLCJzZWxlY3RvciIsIl9yZW5kZXJlciIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsInNob3VsZEFwcGVuZCIsImFwcGVuZCIsInByZXBlbmQiLCJVc2VySW5mbyIsImJpbyIsIl9iaW8iLCJfYXZhdGFyIiwidXNlciIsInNldFVzZXJJbmZvIiwibmFtZVRleHQiLCJiaW9UZXh0Iiwic2V0QXZhdGFyIiwic2VsZWN0b3JzIiwiY2FyZFNlY3Rpb24iLCJjYXJkVGVtcGxhdGUiLCJjYXJkRGVsZXRlQnV0dG9uIiwiY2FyZExpa2VTeW1ib2wiLCJpbWFnZVByZXZpZXciLCJhZGRDYXJkQnV0dG9uIiwiYWRkQ2FyZFN1Ym1pdEJ1dHRvbiIsImFkZENhcmRQb3B1cCIsImRlbGV0ZUNhcmRQb3B1cCIsImVkaXRQcm9maWxlU3VibWl0QnV0dG9uIiwiZWRpdFByb2ZpbGVCdXR0b24iLCJlZGl0UHJvZmlsZVBvcHVwIiwidXNlck5hbWUiLCJ1c2VyQmlvIiwidXNlckF2YXRhciIsImlucHV0VXNlck5hbWUiLCJpbnB1dFVzZXJCaW8iLCJ1cGRhdGVBdmF0YXJCdXR0b24iLCJpbnB1dEF2YXRhckxpbmsiLCJ1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24iLCJ1cGRhdGVBdmF0YXJQb3B1cCIsImFkZFBsYWNlRm9ybSIsImVkaXRQcm9maWxlRm9ybSIsInVwZGF0ZUF2YXRhckZvcm0iLCJmb3JtVmFsaWRhdGlvbkNvbmZpZyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJoYW5kbGVBcGlFcnJvciIsImVycm9yTWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsImNsb3NlUG9wdXAiLCJwb3B1cEVsIiwicmVuZGVyQ2FyZCIsImNhcmQiLCJpbWdEYXRhIiwiY2FyZFByZXZpZXdQb3B1cCIsImhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0IiwiY2FyZEhUTUwiLCJkYXRhSW4iLCJkYXRhT3V0IiwiZmluYWxseSIsImNsZWFyQWxsVmFsaWRhdGlvbkVycm9ycyIsImRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cCIsImN1cnJlbnRVc2VyUHJvZmlsZSIsInByZWZpbGxQcm9maWxlRm9ybSIsImlucHV0UHJvZmlsZU5hbWUiLCJpbnB1dEJpbyIsImN1cnJlbnRVc2VyIiwiaW5wdXRfYXZhdGFyX2xpbmsiLCJwcmVmaWxsQXZhdGFyRm9ybSIsImZvcm1WYWxpZGF0b3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJmb3JtcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZm9ybSIsInB1c2giLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJmb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==