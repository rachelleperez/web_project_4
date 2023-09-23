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
    value: function updateLikeHeart() {
      var toggleIsLiked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // default to true, more common scenario
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
}).catch(handleApiError); // passing as reference

// ------------------------ NEW CARD ---------------------------

var addCardButton = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardButton);
var addCardSubmitButton = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardSubmitButton);
var addCardPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addCardPopup,
  handleFormSubmit: function handleFormSubmit(dataIn) {
    addCardSubmitButton.textContent = "Saving...";
    api.addCard(dataIn).then(handleAddCardSuccess).catch(handleApiError) // passing as reference
    .finally(function () {
      return addCardSubmitButton.textContent = "Create";
    });
  }
});
addCardButton.addEventListener("click", function () {
  formValidators.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.addPlaceForm).clearValidationErrors(); // retrieve correct FormValidator from map
  addCardPopup.open();
});
function handleAddCardSuccess(data) {
  renderCard(data, false);
  closePopup(addCardPopup);
}

// ------------------------ DELETE CARD CONFIRMATION ---------------------------

var deleteCardConfirmationPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.deleteCardPopup,
  handleFormSubmit: function handleFormSubmit() {
    api.deleteCard(deleteCardConfirmationPopup.cardId).then(handleDeleteCardSuccess).catch(handleApiError); // passing as reference
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

function _handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) {
    // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id).then(function () {
      return card.updateLikeHeart();
    }) // toggle to alternative color and update isLiked card property
    .catch(handleApiError); // passing as reference
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id).then(function () {
      return card.updateLikeHeart();
    }) // toggle to alternative color and update isLiked card property
    .catch(handleApiError); // passing as reference
  }
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

var currentUserProfile = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({
  name: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userName,
  bio: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userBio,
  avatar: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.userAvatar
});
api.getUserInfo().then(handleGetUserInfoSuccess).catch(handleApiError); // passing as reference

function handleGetUserInfoSuccess(data) {
  currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
}

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

var editProfileSubmitButton = document.getElementById(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfileSubmitButton);
var editProfilePopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfilePopup,
  handleFormSubmit: function handleFormSubmit(data) {
    editProfileSubmitButton.textContent = "Saving...";
    api.updateProfile(data).then(handleUpdateProfileSuccess).catch(handleApiError) // passing as reference
    .finally(function () {
      return editProfileSubmitButton.textContent = "Save";
    });
  }
});
function handleUpdateProfileSuccess(data) {
  currentUserProfile.setUserInfo(data.name, data.about);
  closePopup(editProfilePopup);
}
var editProfileButton = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfileButton);
editProfileButton.addEventListener("click", function () {
  formValidators.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.editProfileForm).clearValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// prefilling profile

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
    api.updateAvatar(data.input_avatar_link).then(function (dataFromApi) {
      return handleUpdateAvatarSuccess(dataFromApi);
    }).catch(handleApiError) // passing as reference
    .finally(function () {
      return updateAvatarSubmitButton.textContent = "Save";
    });
  }
});
function handleUpdateAvatarSuccess(data) {
  currentUserProfile.setAvatar(data.avatar);
  closePopup(updateAvatarPopup);
}
function prefillAvatarForm() {
  var currentUser = currentUserProfile.getUserInfo();
  inputAvatarLink.value = currentUser.avatar.src;
}
updateAvatarButton.addEventListener("click", function () {
  formValidators.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.updateAvatarForm).clearValidationErrors();
  prefillAvatarForm();
  updateAvatarPopup.open();
});

// ------------------------ IMAGE CARD PREVIEW ---------------------------

var cardPreviewPopup = new _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.imagePreview);

// ------------------------ FORM VALIDATION ---------------------------

// creates form validator for every form and saves it so formValidators map

var formValidators = new Map();
var _iterator = _createForOfIteratorHelper(document.forms),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var form = _step.value;
    formValidators.set(form.name, new _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_8__.formValidationConfig, form)); // create FormValidator instance and track in map form_name: formValidator
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWRqTSxRQUFRLENBQUNrTSxLQUFLO0VBQUFDLEtBQUE7QUFBQTtFQUFqQyxLQUFBSCxTQUFBLENBQUFJLENBQUEsTUFBQUQsS0FBQSxHQUFBSCxTQUFBLENBQUFLLENBQUEsSUFBQUMsSUFBQSxHQUFtQztJQUFBLElBQXhCQyxJQUFJLEdBQUFKLEtBQUEsQ0FBQXRQLEtBQUE7SUFDYm1PLGNBQWMsQ0FBQ3dCLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDcE8sSUFBSSxFQUFFLElBQUk0RCxpRUFBYSxDQUFDK0gsa0VBQW9CLEVBQUV5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEY7QUFBQyxTQUFBM08sR0FBQTtFQUFBb08sU0FBQSxDQUFBUyxDQUFBLENBQUE3TyxHQUFBO0FBQUE7RUFBQW9PLFNBQUEsQ0FBQVUsQ0FBQTtBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gICAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzfSkge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsLFxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgfVxuXG4gICAgX2hhbmRsZUZldGNoIChkZXN0aW5hdGlvblVybCwgbWV0aG9kLCBib2R5KSB7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGRlc3RpbmF0aW9uVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGJvZHlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIC8vIHRlc3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIC8vIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0RhdGEgZnJvbSBBUEk6JywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGUgc2VydmVyIHJldHVybnMgYW4gZXJyb3IsIHJlamVjdCB0aGUgcHJvbWlzZVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBSZXNwb25zZSBFcnJvcjogJHtyZXMuc3RhdHVzfWApOyAvLyB0aHJvd3MgYW4gZXJyb3IgdG8gYmUgY2F1Z2h0IGJ5IC5jYXRjaCBpbiBpbmRleC5qc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycjsgLy8gdGhyb3dzIGFuIGVycm9yIHRvIGJlIGNhdWdodCBieSAuY2F0Y2ggaW4gaW5kZXguanNcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwgXCJHRVRcIik7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIFwiR0VUXCIpO1xuICAgIH1cblxuICAgIGFkZENhcmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkoe25hbWU6IGRhdGEuaW5wdXRfcGxhY2VfdGl0bGUgLGxpbms6IGRhdGEuaW5wdXRfcGxhY2VfaW1hZ2V9KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZmlsZShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIFwiUEFUQ0hcIiwgSlNPTi5zdHJpbmdpZnkoe25hbWU6IGRhdGEuaW5wdXRfcHJvZmlsZV9uYW1lICxhYm91dDogZGF0YS5pbnB1dF9wcm9maWxlX2Jpb30pKTtcbiAgICB9XG5cbiAgICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwgXCJERUxFVEVcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlQXZhdGFyKGF2YXRhckxpbmspIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIFwiUEFUQ0hcIiwgSlNPTi5zdHJpbmdpZnkoe2F2YXRhcjogYXZhdGFyTGlua30pKTtcbiAgICB9XG5cbiAgICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIFwiUFVUXCIpO1xuICAgIH1cblxuICAgIHVubGlrZUNhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCBcIkRFTEVURVwiKTtcbiAgICB9XG5cbiAgICBnZXRDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwgXCJHRVRcIik7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbi8vIGNhbiBJIGdldCB0ZW1wbGF0ZSBmcm9tIGhlcmU/XHJcbi8vIHNob3VsZCBuZXZlciByZWZlcmVuY2UgXCJjYXJkXCIgaGVyZS4gVGhpcyBpcyBqdXN0IE1WUFxyXG5cclxuXHJcbiAgLy8ganVzdCAxIGNhcmRcclxuICBjb25zdHJ1Y3RvciAoe2RhdGEsIGhhbmRsZUltYWdlQ2xpY2ssIGhhbmRsZURlbGV0ZUNhcmQsIGhhbmRsZUxpa2VDbGlja30sIGNhcmRUZW1wbGF0ZVNlbGVjdG9yKSB7XHJcblxyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xyXG4gICAgdGhpcy5faXNMaWtlZCA9IGRhdGEuaXNMaWtlZDtcclxuXHJcbiAgICAvLyB0byBtYXRjaCBpbmRleC5odG1sXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHt0aGlzLl9uYW1lID0gZGF0YS5pbnB1dF9wbGFjZV90aXRsZTt9XHJcbiAgICBpZiAoZGF0YS5saW5rID09PSB1bmRlZmluZWQpIHt0aGlzLl9saW5rID0gZGF0YS5pbnB1dF9wbGFjZV9pbWFnZTt9XHJcbiAgICBcclxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZFRlbXBsYXRlU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSBudWxsO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgLy8gY2FsbGJhY2sgZnVuY3Rpb25zIHRvIGJlIGV4ZWN1dGVkIGluIGluZGV4LmpzXHJcbiAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQgPSBoYW5kbGVEZWxldGVDYXJkO1xyXG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xyXG5cclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBjaGFuZ2VzIGNvbG9yLCBub3RoaW5nIGVsc2UuXHJcbiAgdXBkYXRlTGlrZUhlYXJ0KHRvZ2dsZUlzTGlrZWQgPSB0cnVlKSB7IC8vIGRlZmF1bHQgdG8gdHJ1ZSwgbW9yZSBjb21tb24gc2NlbmFyaW9cclxuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRzX19saWtlLXN5bWJvbF9hY3RpdmVcIik7XHJcbiAgICBpZiAodG9nZ2xlSXNMaWtlZCkgdGhpcy5faXNMaWtlZCA9ICF0aGlzLl9pc0xpa2VkO1xyXG4gIH1cclxuXHJcbiAgLy9pbnN0YW5jZSB2YXJpYWJsZXNcclxuICBcclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgKGltYWdlQ2FyZCkge1xyXG4gICAgaW1hZ2VDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlSW1hZ2VDbGljayh7bGluazogdGhpcy5fbGluaywgbmFtZTogdGhpcy5fbmFtZX0pKVxyXG5cclxuICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGRlbGV0ZSBidXR0b25cclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQodGhpcykpO1xyXG5cclxuICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGxpa2UgYnV0dG9uXHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMpKTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBoYW5kbGVzIGRlbGV0ZSBjYXJkIHJlcXVlc3RcclxuICBoYW5kbGVEZWxldGVDYXJkKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBoYW5kbGVzIGxpa2UgYnV0dG9uIGNsaWNrXHJcbiAgaGFuZGxlTGlrZUNsaWNrKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIG5ldyBjYXJkXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2NhcmRUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2VsZW1lbnQnKTtcclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX2RlbGV0ZS1idXR0b24nKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW1hZ2VDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2ltYWdlJylcclxuICAgIGltYWdlQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3RoaXMuX2xpbmt9JylgXHJcbiAgICBjb25zdCBuYW1lQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19uYW1lJylcclxuICAgIG5hbWVDYXJkLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZVxyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19saWtlLXN5bWJvbCcpXHJcblxyXG4gICAgLy9zZXQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyhpbWFnZUNhcmQpO1xyXG5cclxuICAgIC8vIGxpa2UgYnV0dG9uIHNob3duIG11c3QgcmVmbGVjdCBzdGF0dXMuIGlmIGJ1dHRvbiBjb2xvciBhbmQgbGlrZSBzdGF0dXMgZG9udCBtYXRjaCwgdG9nZ2xlIGxpa2UgY29sb3JcclxuICAgIGNvbnN0IGlzQnV0dG9uTGlrZWQgPSB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRzX19saWtlLXN5bWJvbF9hY3RpdmVcIik7XHJcblxyXG4gICAgaWYgKHRoaXMuX2lzTGlrZWQpIHtcclxuICAgICAgaWYgKCFpc0J1dHRvbkxpa2VkKSB0aGlzLnVwZGF0ZUxpa2VIZWFydChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyBDYXJkIG5vdCBsaWtlZFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChpc0J1dHRvbkxpa2VkKSB0aGlzLnVwZGF0ZUxpa2VIZWFydChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHJldHVybiB0aGUgY3JlYXRlZCBjYXJkXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJuIGNhcmQgaW5mb1xyXG4gIGdldENhcmRJbmZvKCkge1xyXG4gICAgY29uc3QgY2FyZEluZm8gPSB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcclxuICAgICAgICBsaW5rOiB0aGlzLl9saW5rLFxyXG4gICAgICAgIGlkOiB0aGlzLl9pZCxcclxuICAgICAgICBpc0xpa2VkOiB0aGlzLl9pc0xpa2VkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FyZEluZm9cclxuICB9XHJcblxyXG59IiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgLy9zZXR0aW5ncyA9IGNvdmlkLCBmb3JtRWxlbWVudCA9IG5vIG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCBmb3Jtcy4gU2F5IHVwZnJvbnQgdGhlIGZvcm0gbmVlZGVkXHJcbiAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICAodGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcyksXHJcbiAgICAgICh0aGlzLl9lcnJvckNsYXNzID0gY29uZmlnLmVycm9yQ2xhc3MpO1xyXG5cclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSxcclxuICAgICk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvcixcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLy9kb25lXHJcbiAgX3Nob3dFcnJvcihlcnJvckVsLCBpbnB1dEVsKSB7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLy9kb25lXHJcbiAgX2hpZGVFcnJvcihlcnJvckVsLCBpbnB1dEVsKSB7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcclxuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xyXG4gICAgLy9zZXR0aW5ncywgZm9ybUVsIHJlbW92ZWRcclxuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApOyAvLyBhZGRlZCBcIi1lcnJvclwiIHRvIGVycm9yIHZlcnNpb25zXHJcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcclxuICAgICAgLy8gaGlkZSB0aGUgZXJyb3IgbWVzc2FnZXMgYW5kIHN0eWxlXHJcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsLCBpbnB1dEVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNob3cgZXJyb3IgbWVzc2FnZXMgYW5kIHN0eWxlXHJcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsLCBpbnB1dEVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUJ1dHRvbigpIHtcclxuICAgIC8vcmVtb3ZlZCBzZXR0aW5nc1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXRzKCkpIHtcclxuICAgICAgLy8gZGlzYWJsZSB0aGUgYnV0dG9uXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJucyB0cnVlIGlmIHNvbWUgaW52YWxpZCBpbnB1dFxyXG4gIF9oYXNJbnZhbGlkSW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsKSA9PiB0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSk7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBsb29wIHRocm91Z2ggdGhlIGlucHV0cyBhbmQgYWRkIHZhbGlkYXRpb25cclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAvL2NoZWNrIHRoZSBpbnB1dFxyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTsgLy9zZXR0aW5ncywgZm9ybUVsIHJlbW92ZWRcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGJ1dHRvbiAoaWYgaW5wdXQgaXMgdmFsaWQsIGVuYWJsZS4gaWYgbm90LCBkaXNhYmxlZClcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2VuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIC8vc2V0dXAgdmFsaWRhdGlvblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTsgLy9zZXR0aW5ncyAoY29uZmlnKSB0byBiZSBwYXNzZWQgdG8gZm9ybSB2aWEgY29uc3RydWN0b3JcclxuICB9XHJcblxyXG4gIC8vIG5vIGVycm9ycyB1cG9uIG9wZW5pbmcgYSBmb3JtLlxyXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9ycygpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vZXhwb3J0IGZvciBpbmRleC5qc1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xyXG4iLCIvLyBvcGVucyBhbmQgY2xvc2UgYWxsIHBvcHVwcyBpbiBhcHBsaWNhdGlvbiAoZWRpdCBwcm9maWxlLCBhZGQgcGxhY2UsIGltYWdlIHBvcHVwKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BvcHVwU2VsZWN0b3J9YCk7IC8vIG1vZGFsLXByb2ZpbGVcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpOyAvLyBub3RlLCByaWdodCBhYm92ZVxuICAgICAgICAvL3RoaXMub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tb2RhbCAjJHtwb3B1cFNlbGVjdG9yfSB+IC5tb2RhbF9fb3ZlcmxheWApO1xuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjRXNjYXBlID0gdGhpcy5faGFuZGxlRXNjRXNjYXBlLmJpbmQodGhpcyk7IC8vIHRvIG1ha2Ugc3VyZSBjb3JyZWN0IGNvbnRleHQgZm9yIHRoaXMgaW4gdGhpcyBmdW5jdGlvbi5cbiAgICAgICAgdGhpcy5fY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7IC8vIGJpbmRpbmcgY2xvc2UoKSB0byB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrID0gdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrLmJpbmQodGhpcyk7IC8vIGJpbmQgdG8gY29uc3RydWN0b3JcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICAvLyBvcGVucyBwb3B1cFxuICAgICAgICB0aGlzLl9tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fY29udGFpbmVyX2FjdGl2ZScpXG4gICAgICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX292ZXJsYXlfYWN0aXZlJylcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBjbG9zZXMgcG9wdXBcbiAgICAgICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2NvbnRhaW5lcl9hY3RpdmUnKVxuICAgICAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjRXNjYXBlKGV2ZW50KSB7XG4gICAgICAgIC8vIGxpc3RlbnMgZm9yIGVzYyBidXR0b25cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVPdmVybGF5Q2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBzZXRzIGV2ZW50IGxpc3RlbmVyc1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gY2xvc2UgYnV0dG9uXG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xvc2UpO1xuXG4gICAgICAgIC8vIGlmIGEga2V5IGlzIHByZXNzZWQsIF9oYW5kbGVFc2NFc2NhcGUgd2lsbCBjYWxsIGNsb3NlKCkgaXMga2V5IGlzIEVzY1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjRXNjYXBlKTtcblxuICAgICAgICAvLyBpZiBvdmVybGF5IGlzIGNsaWNrZWQsIGNsb3NlXG4gICAgICAgIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2spXG5cbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2spOyBcblxuICAgIH1cblxuXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlbiB5b3Ugc3VibWl0IHRoZSBmb3JtXG5cbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTsgLy8gZm9yIFBvcHVwXG5cbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7IC8vIDxmb3JtIGlkID0gXCJmb3JtX2FkZF9wbGFjZVwiIGNsYXNzPVwiZm9ybVwiIG5hbWU9XCJmb3JtX2FkZF9wbGFjZVwiIG5vdmFsaWRhdGU+XG5cbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcblxuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpOyAvL0hUTUwgRWxlbWVudFxuICAgIHRoaXMuX2lucHV0TWFwID0gbnVsbDsgLy8gbWFwIGlucHV0X25hbWU6IGlucHV0X3ZhbHVlXG5cbiAgICB0aGlzLl9oYW5kbGVTdWJtaXQgPSB0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTsgLy8gYmluZCB0byBjb25zdHJ1Y3RvclxuXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpOyAvLyBjYWxscyBwYXJlbnQncyBjbG9zZSgpXG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXQgPSBoYW5kbGVzIHN1Ym1pdCBldmVudCB8IGhhbmRsZUZvcm1TdWJtaXQgPSB0YWtlcyBhY3Rpb24gb24gaW5wdXRzXG4gIF9oYW5kbGVTdWJtaXQoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fc2V0SW5wdXRWYWx1ZXMoKTsgLy8gZmlsbCBpbiBpbnB1dE1hcFxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5faW5wdXRNYXApOyBcbiAgfVxuXG4gIGdldElucHV0VmFsdWVzKCkge1xuICAgIHJldHVybiBpbnB1dE1hcDtcbiAgfVxuXG4gIC8vY29sbGVjdHMgZGF0YSBmcm9tIGFsbCBpbnB1dCBmaWVsZHMgYW5kIHJldHVybnMgdGhhdCBkYXRhIGFzIGFuIG9iamVjdFxuICBfc2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5faW5wdXRNYXAgPSB7fTtcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2lucHV0TWFwIFtpbnB1dC5pZF0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICBcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIGFkZCBzdWJtaXQgZXZlbnQgaGFuZGxlclxuICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZVN1Ym1pdCk7XG5cbiAgICAvLyBtYWludGFpbnMgcGFyZW50IHNldHRpbmdzLCBjbG9zaW5nIHVwb24gcHJlc3NpbmcgY2xvc2UgYnV0dG9uLCBFc2MsIGFuZCBjbGljayBvdmVybGF5XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIGFkZHMgc3VibWl0IGV2ZW50bGlzdGVuZXIgb25seSBvbmNlXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0KTtcblxuICAgIC8vIG1haW50YWlucyBwYXJlbnQgc2V0dGluZ3MsIGNsb3NpbmcgdXBvbiBwcmVzc2luZyBjbG9zZSBidXR0b24sIEVzYywgYW5kIGNsaWNrIG92ZXJsYXlcbiAgICBzdXBlci5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7ICAgICAgIFxuICAgICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2UnKTtcbiAgICAgICAgdGhpcy5faW1hZ2VDYXB0aW9uID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS1jYXB0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gb3ZlcnJpZGUgb3BlbiBmdW5jdGlvblxuICAgIG9wZW4oZGF0YSkge1xuICAgICAgICB0aGlzLl9pbWFnZS5zcmM9IGRhdGEubGluaztcbiAgICAgICAgdGhpcy5faW1hZ2VDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLl9pbWFnZS5hbHQ9IGRhdGEubmFtZTtcbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIsIHNlbGVjdG9yfSkgeyAvLyBPUiBjbGFzc05hbWUgaW5zdGVhZCBvZiBzZWxlY3RvclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtzZWxlY3Rvcn1gKTtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcyhpdGVtcykgeyAvLyBwdWJsaWMgZnVuY3Rpb25cbiAgICAgICAgLy8gdXNlIHRoaXMuX3JlbmRlcmVyIGNyZWF0ZSB0aGUgZWxlbWVudCBmb3IgcmVuZGVyaW5nID0gIHRoaXMuX2VsZW1lbnRcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSwgc2hvdWxkQXBwZW5kKSB7XG5cbiAgICAgICAgaWYgKHNob3VsZEFwcGVuZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmQoaXRlbSkgLy8gaW5pdGlhbCBjYXJkcyBvbmx5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoaXRlbSkgXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBiaW8sIGF2YXRhciB9KSB7IC8vIE9SIGNsYXNzTmFtZSBpbnN0ZWFkIG9mIHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfWApO1xuICAgICAgICB0aGlzLl9iaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtiaW99YCk7XG4gICAgICAgIHRoaXMuX2F2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F2YXRhcn1gKTtcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBiaW86IHRoaXMuX2Jpby50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGF2YXRhcjogdGhpcy5fYXZhdGFyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG5cbiAgICBzZXRVc2VySW5mbyhuYW1lVGV4dCwgYmlvVGV4dCwgYXZhdGFyTGluaykge1xuICAgICAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gbmFtZVRleHQ7XG4gICAgICAgIHRoaXMuX2Jpby50ZXh0Q29udGVudCA9IGJpb1RleHQ7XG4gICAgICAgIGlmIChhdmF0YXJMaW5rICE9IG51bGwpIHRoaXMuc2V0QXZhdGFyKGF2YXRhckxpbmspO1xuICAgIH1cblxuICAgIHNldEF2YXRhcihhdmF0YXJMaW5rKSB7XG4gICAgICAgIHRoaXMuX2F2YXRhci5zcmMgPSBhdmF0YXJMaW5rO1xuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgY2FyZFNlY3Rpb246ICcuZWxlbWVudHMnLFxuICAgIGNhcmRUZW1wbGF0ZTogJyNjYXJkLXRlbXBsYXRlJyxcbiAgICBjYXJkRGVsZXRlQnV0dG9uOiAnLmVsZW1lbnRzX2RlbGV0ZS1idXR0b24nLFxuICAgIGNhcmRMaWtlU3ltYm9sOiAnLmVsZW1lbnRzX19saWtlLXN5bWJvbCcsXG4gICAgaW1hZ2VQcmV2aWV3OiAncG9wdXAtaW1hZ2UnLFxuICAgIGFkZENhcmRCdXR0b246IFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIixcbiAgICBhZGRDYXJkU3VibWl0QnV0dG9uOiBcImJ1dHRvbi1jcmVhdGUtcGxhY2VcIixcbiAgICBhZGRDYXJkUG9wdXA6IFwibW9kYWxfYWRkXCIsXG4gICAgZGVsZXRlQ2FyZFBvcHVwOiBcImRlbGV0ZV9jYXJkX2NvbmZpcm1hdGlvblwiLFxuICAgIGVkaXRQcm9maWxlU3VibWl0QnV0dG9uOiBcImJ1dHRvbi1zdWJtaXQtZWRpdC1wcm9maWxlXCIsXG4gICAgZWRpdFByb2ZpbGVCdXR0b246IFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIsXG4gICAgZWRpdFByb2ZpbGVQb3B1cDogXCJtb2RhbF9wcm9maWxlXCIsXG4gICAgdXNlck5hbWU6IFwiZGlzcGxheV9wcm9maWxlX25hbWVcIixcbiAgICB1c2VyQmlvOiBcImRpc3BsYXlfcHJvZmlsZV9iaW9cIixcbiAgICB1c2VyQXZhdGFyOiBcImRpc3BsYXlfcHJvZmlsZV9hdmF0YXJcIixcbiAgICBpbnB1dFVzZXJOYW1lOiBcImlucHV0X3Byb2ZpbGVfbmFtZVwiLFxuICAgIGlucHV0VXNlckJpbzogXCJpbnB1dF9wcm9maWxlX2Jpb1wiLFxuICAgIHVwZGF0ZUF2YXRhckJ1dHRvbjogXCIucHJvZmlsZV9fYXZhdGFyLWJ1dHRvblwiLFxuICAgIGlucHV0QXZhdGFyTGluazogXCJpbnB1dF9hdmF0YXJfbGlua1wiLFxuICAgIHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbjogXCJidXR0b24tdXBkYXRlLWF2YXRhclwiLFxuICAgIHVwZGF0ZUF2YXRhclBvcHVwOiBcIm1vZGFsX3VwZGF0ZV9hdmF0YXJcIixcbiAgICBhZGRQbGFjZUZvcm06IFwiZm9ybV9hZGRfcGxhY2VcIixcbiAgICBlZGl0UHJvZmlsZUZvcm06IFwiZm9ybV9lZGl0X3Byb2ZpbGVcIixcbiAgICB1cGRhdGVBdmF0YXJGb3JtOiBcImZvcm1fdXBkYXRlX2F2YXRhclwiXG5cbiAgICBcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0aW9uQ29uZmlnID0ge1xuICAgIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1fX2lucHV0XCIsXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX3N1Ym1pdFwiLCAvLyMgPSBpZCwgLiBpcyBjbHNzXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zdWJtaXRfZGlzYWJsZWRcIiwgLy8gY2xhc3Nlc1xuICAgIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gICAgZXJyb3JDbGFzczogXCJmb3JtX19lcnJvcl92aXNpYmxlXCIsXG4gIH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG4vLyBJbXBvcnQgYWxsIHRoZSBjbGFzc2VzXHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcclxuXHJcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpXCI7XHJcblxyXG5pbXBvcnQgeyBzZWxlY3RvcnMsIGZvcm1WYWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBUEkgU0VUVElOR1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCIxNDEyMDEyZC1iYTYxLTRkNzUtYjU1YS0xNDUwNGQ2ZTIzYWVcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGluIHRoaXMgcHJvamVjdCwgYWxsIEFQSSBlcnJvcnMgaGFuZGxlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gSW4gcHJhY3RpY2UsIGxpa2VseSB3b3VsZCBiZSBkaWZmZXJlbnQgaGFuZGxlcnMuXHJcbmZ1bmN0aW9uIGhhbmRsZUFwaUVycm9yKGVycm9yTWVzc2FnZSkge1xyXG4gIGNvbnNvbGUuZXJyb3IoXCJUcmlwbGUgVGVuIEFQSSBFcnJvcjogXCIsIGVycm9yTWVzc2FnZSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQT1BVUCBTRVRUSU5HUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBoYW5kbGVzIGNsb3NpbmcgdGhlIGdpdmVuIHBvcHVwXHJcbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXBFbCkge1xyXG4gIHBvcHVwRWwuY2xvc2UoKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENBUkQgUkVOREVSRVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKHtcclxuICByZW5kZXJlcjogKGRhdGEpID0+IHJlbmRlckNhcmQoZGF0YSwgdHJ1ZSksXHJcbiAgc2VsZWN0b3I6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGRhdGEsIHNob3VsZEFwcGVuZCkge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcclxuICAgIHtcclxuICAgICAgZGF0YSxcclxuICAgICAgaGFuZGxlSW1hZ2VDbGljazogKGltZ0RhdGEpID0+IHtcclxuICAgICAgICBjYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZURlbGV0ZUNhcmQ6ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVEZWxldGVDYXJkUmVxdWVzdChjYXJkKTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlTGlrZUNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlTGlrZUNsaWNrKGNhcmQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSxcclxuICApXHJcbiAgY29uc3QgY2FyZEhUTUwgPSBjYXJkLmNyZWF0ZUNhcmQoKTsgLy8gYW4gaHRtbCBlbGVtZW50XHJcblxyXG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEhUTUwgLCBzaG91bGRBcHBlbmQpO1xyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZFVENIIENVUlJFTlQgQ0FSRFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5hcGkuZ2V0SW5pdGlhbENhcmRzKClcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInVuZGVmaW5lZFwiKSBjYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhkYXRhKSAvLyBvbmx5IGF0dGVtcHQgcmVuZGVyaW5nIGlmIHRoZXJlIGlzIGRhdGEgdG8gZGlzcGxheVxyXG4gIH0pXHJcbiAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKTsgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTkVXIENBUkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuYWRkQ2FyZEJ1dHRvbik7XHJcbmNvbnN0IGFkZENhcmRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuYWRkQ2FyZFN1Ym1pdEJ1dHRvbik7XHJcblxyXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmFkZENhcmRQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YUluKSA9PiB7XHJcbiAgICBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLmFkZENhcmQoZGF0YUluKVxyXG4gICAgICAudGhlbihoYW5kbGVBZGRDYXJkU3VjY2VzcylcclxuICAgICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKSAvLyBwYXNzaW5nIGFzIHJlZmVyZW5jZVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIilcclxuXHJcblxyXG4gIH0sXHJcbn0pO1xyXG5cclxuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZvcm1WYWxpZGF0b3JzLmdldChzZWxlY3RvcnMuYWRkUGxhY2VGb3JtKS5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTsgLy8gcmV0cmlldmUgY29ycmVjdCBGb3JtVmFsaWRhdG9yIGZyb20gbWFwXHJcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkU3VjY2VzcyhkYXRhKSB7XHJcbiAgcmVuZGVyQ2FyZChkYXRhLCBmYWxzZSk7XHJcbiAgY2xvc2VQb3B1cChhZGRDYXJkUG9wdXApO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gREVMRVRFIENBUkQgQ09ORklSTUFUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBzZWxlY3RvcnMuZGVsZXRlQ2FyZFBvcHVwLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgIGFwaS5kZWxldGVDYXJkKGRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cC5jYXJkSWQpXHJcbiAgICAgIC50aGVuKGhhbmRsZURlbGV0ZUNhcmRTdWNjZXNzKVxyXG4gICAgICAuY2F0Y2goaGFuZGxlQXBpRXJyb3IpOyAvLyBwYXNzaW5nIGFzIHJlZmVyZW5jZVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBvcGVucyBwb3B1cCwgcmVhZHkgZm9yIGRlbGV0aW9uIHJlcXVlc3RcclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ2FyZFJlcXVlc3QoY2FyZCkge1xyXG5cclxuICAvLyBzZXR0aW5nIHByb3BlcnRpZXMgZm9yIGNhcmQgaW4gcXVlc3Rpb25cclxuICBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAuY2FyZCA9IGNhcmQ7IFxyXG4gIGRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cC5jYXJkSWQgPSBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAuY2FyZC5nZXRDYXJkSW5mbygpLmlkO1xyXG5cclxuICBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAub3BlbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVDYXJkU3VjY2VzcygpIHtcclxuICBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAuY2FyZC5kZWxldGVDYXJkKCk7IFxyXG4gIGNsb3NlUG9wdXAoZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExJS0UgQkVIQVZJT1IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGlrZUNsaWNrKGNhcmQpIHtcclxuICAvLyBpZiBsaWtlZCBhbHJlYWR5LCB1bmxpa2UgaW4gYXBpIGFuZCBtYWtlIGhlYXJ0IGVtcHR5XHJcbiAgaWYgKGNhcmQuZ2V0Q2FyZEluZm8oKS5pc0xpa2VkKSB7IC8vIENhbiB0aGUgbGlrZSBzdGF0dXMgYmUgcmV0cmlldmVkIGZyb20gQVBJIHJhdGhlciB0aGFuIG1haW50YWluIGEgc2Vjb25kIHZlcnNpb24gaGVyZT9cclxuICAgIGFwaS51bmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZClcclxuICAgIC50aGVuICgoKSA9PiBjYXJkLnVwZGF0ZUxpa2VIZWFydCgpKSAvLyB0b2dnbGUgdG8gYWx0ZXJuYXRpdmUgY29sb3IgYW5kIHVwZGF0ZSBpc0xpa2VkIGNhcmQgcHJvcGVydHlcclxuICAgIC5jYXRjaChoYW5kbGVBcGlFcnJvcik7IC8vIHBhc3NpbmcgYXMgcmVmZXJlbmNlXHJcbiAgfVxyXG4gIC8vIGVsc2UgPSBjdXJyZW50bHkgdW5saWtlcywgbGlrZSBpbiBhcGkgYW5kIGZpbGwgdGhlIGhlYXJ0XHJcbiAgZWxzZSB7XHJcbiAgICBhcGkubGlrZUNhcmQoY2FyZC5nZXRDYXJkSW5mbygpLmlkKVxyXG4gICAgLnRoZW4gKCgpID0+IGNhcmQudXBkYXRlTGlrZUhlYXJ0KCkpIC8vIHRvZ2dsZSB0byBhbHRlcm5hdGl2ZSBjb2xvciBhbmQgdXBkYXRlIGlzTGlrZWQgY2FyZCBwcm9wZXJ0eVxyXG4gICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKTsgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICB9ICBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBST0ZJTEUgSU5GTyBTVE9SQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY3VycmVudFVzZXJQcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBzZWxlY3RvcnMudXNlck5hbWUsXHJcbiAgYmlvOiBzZWxlY3RvcnMudXNlckJpbyxcclxuICBhdmF0YXI6IHNlbGVjdG9ycy51c2VyQXZhdGFyXHJcbn0pXHJcblxyXG5hcGkuZ2V0VXNlckluZm8oKVxyXG4gIC50aGVuKGhhbmRsZUdldFVzZXJJbmZvU3VjY2VzcylcclxuICAuY2F0Y2goaGFuZGxlQXBpRXJyb3IpOyAvLyBwYXNzaW5nIGFzIHJlZmVyZW5jZVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR2V0VXNlckluZm9TdWNjZXNzKGRhdGEpIHtcclxuICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmFib3V0LCBkYXRhLmF2YXRhcik7XHJcbn0gICBcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQUk9GSUxFIElORk8gTUFOQUdFTUVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmVkaXRQcm9maWxlU3VibWl0QnV0dG9uKTtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmVkaXRQcm9maWxlUG9wdXAsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcclxuICAgIGVkaXRQcm9maWxlU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLnVwZGF0ZVByb2ZpbGUoZGF0YSlcclxuICAgICAgLnRoZW4oaGFuZGxlVXBkYXRlUHJvZmlsZVN1Y2Nlc3MpXHJcbiAgICAgIC5jYXRjaChoYW5kbGVBcGlFcnJvcikgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gZWRpdFByb2ZpbGVTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIilcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZVByb2ZpbGVTdWNjZXNzKGRhdGEpIHtcclxuICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oXHJcbiAgICBkYXRhLm5hbWUsXHJcbiAgICBkYXRhLmFib3V0LFxyXG4gICk7XHJcbiAgY2xvc2VQb3B1cChlZGl0UHJvZmlsZVBvcHVwKTtcclxufVxyXG5cclxuY29uc3QgZWRpdFByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5lZGl0UHJvZmlsZUJ1dHRvbik7XHJcblxyXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZvcm1WYWxpZGF0b3JzLmdldChzZWxlY3RvcnMuZWRpdFByb2ZpbGVGb3JtKS5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICBwcmVmaWxsUHJvZmlsZUZvcm0oKTtcclxuICBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyBwcmVmaWxsaW5nIHByb2ZpbGVcclxuXHJcbmNvbnN0IGlucHV0UHJvZmlsZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuaW5wdXRVc2VyTmFtZSk7XHJcbmNvbnN0IGlucHV0QmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0VXNlckJpbyk7XHJcblxyXG5mdW5jdGlvbiBwcmVmaWxsUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dFByb2ZpbGVOYW1lLnZhbHVlID0gY3VycmVudFVzZXIubmFtZTtcclxuICBpbnB1dEJpby52YWx1ZSA9IGN1cnJlbnRVc2VyLmJpbztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFWQVRBUiBNQU5BR0VNRU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgdXBkYXRlQXZhdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMudXBkYXRlQXZhdGFyQnV0dG9uKTtcclxuY29uc3QgaW5wdXRBdmF0YXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0QXZhdGFyTGluayk7XHJcbmNvbnN0IHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy51cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24pO1xyXG5cclxuXHJcbmNvbnN0IHVwZGF0ZUF2YXRhclBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy51cGRhdGVBdmF0YXJQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xyXG4gICAgdXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLnVwZGF0ZUF2YXRhcihkYXRhLmlucHV0X2F2YXRhcl9saW5rKVxyXG4gICAgICAudGhlbigoZGF0YUZyb21BcGkpID0+IGhhbmRsZVVwZGF0ZUF2YXRhclN1Y2Nlc3MoZGF0YUZyb21BcGkpKVxyXG4gICAgICAuY2F0Y2goaGFuZGxlQXBpRXJyb3IpIC8vIHBhc3NpbmcgYXMgcmVmZXJlbmNlXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiKVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlQXZhdGFyU3VjY2VzcyhkYXRhKSB7XHJcbiAgY3VycmVudFVzZXJQcm9maWxlLnNldEF2YXRhcihkYXRhLmF2YXRhcik7XHJcbiAgY2xvc2VQb3B1cCh1cGRhdGVBdmF0YXJQb3B1cCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWZpbGxBdmF0YXJGb3JtKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJQcm9maWxlLmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXRBdmF0YXJMaW5rLnZhbHVlID0gY3VycmVudFVzZXIuYXZhdGFyLnNyYztcclxufVxyXG5cclxudXBkYXRlQXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZm9ybVZhbGlkYXRvcnMuZ2V0KHNlbGVjdG9ycy51cGRhdGVBdmF0YXJGb3JtKS5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICBwcmVmaWxsQXZhdGFyRm9ybSgpO1xyXG4gIHVwZGF0ZUF2YXRhclBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1BR0UgQ0FSRCBQUkVWSUVXIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShzZWxlY3RvcnMuaW1hZ2VQcmV2aWV3KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGT1JNIFZBTElEQVRJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjcmVhdGVzIGZvcm0gdmFsaWRhdG9yIGZvciBldmVyeSBmb3JtIGFuZCBzYXZlcyBpdCBzbyBmb3JtVmFsaWRhdG9ycyBtYXBcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JzID0gbmV3IE1hcCgpO1xyXG5cclxuZm9yIChjb25zdCBmb3JtIG9mIGRvY3VtZW50LmZvcm1zKSB7XHJcbiAgZm9ybVZhbGlkYXRvcnMuc2V0KGZvcm0ubmFtZSwgbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRpb25Db25maWcsIGZvcm0pKTsgLy8gY3JlYXRlIEZvcm1WYWxpZGF0b3IgaW5zdGFuY2UgYW5kIHRyYWNrIGluIG1hcCBmb3JtX25hbWU6IGZvcm1WYWxpZGF0b3JcclxufSAgIl0sIm5hbWVzIjpbIkFwaSIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2hhbmRsZUZldGNoIiwiZGVzdGluYXRpb25VcmwiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbmNhdCIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJhZGRDYXJkIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5wdXRfcGxhY2VfdGl0bGUiLCJsaW5rIiwiaW5wdXRfcGxhY2VfaW1hZ2UiLCJ1cGRhdGVQcm9maWxlIiwiaW5wdXRfcHJvZmlsZV9uYW1lIiwiYWJvdXQiLCJpbnB1dF9wcm9maWxlX2JpbyIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJ1cGRhdGVBdmF0YXIiLCJhdmF0YXJMaW5rIiwiYXZhdGFyIiwibGlrZUNhcmQiLCJ1bmxpa2VDYXJkIiwiZ2V0Q2FyZCIsImRlZmF1bHQiLCJDYXJkIiwiY2FyZFRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImhhbmRsZUxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfaWQiLCJfaXNMaWtlZCIsImlzTGlrZWQiLCJ1bmRlZmluZWQiLCJfY2FyZFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX2VsZW1lbnQiLCJfZGVsZXRlQnV0dG9uIiwiX2xpa2VCdXR0b24iLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2hhbmRsZUxpa2VDbGljayIsInJlbW92ZSIsInVwZGF0ZUxpa2VIZWFydCIsInRvZ2dsZUlzTGlrZWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJpbWFnZUNhcmQiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVDYXJkIiwiY29udGVudCIsImNsb25lTm9kZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibmFtZUNhcmQiLCJ0ZXh0Q29udGVudCIsImlzQnV0dG9uTGlrZWQiLCJjb250YWlucyIsImdldENhcmRJbmZvIiwiY2FyZEluZm8iLCJpZCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsIl9lbmFibGVWYWxpZGF0aW9uIiwiX3Nob3dFcnJvciIsImVycm9yRWwiLCJpbnB1dEVsIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUVycm9yIiwiX2lzSW52YWxpZElucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ0b2dnbGVCdXR0b24iLCJfaGFzSW52YWxpZElucHV0cyIsImRpc2FibGVkIiwic29tZSIsIl90aGlzMiIsImZvckVhY2giLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIl90aGlzMyIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9tb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiX292ZXJsYXkiLCJfY2xvc2VCdXR0b24iLCJfaGFuZGxlRXNjRXNjYXBlIiwiYmluZCIsIl9jbG9zZSIsImNsb3NlIiwiX2hhbmRsZU92ZXJsYXlDbGljayIsIm9wZW4iLCJzZXRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0cyIsIl9pbnB1dE1hcCIsIl9oYW5kbGVTdWJtaXQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwicmVzZXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX3NldElucHV0VmFsdWVzIiwiZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dE1hcCIsImlucHV0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfaW1hZ2VDYXB0aW9uIiwic3JjIiwiYWx0IiwiU2VjdGlvbiIsInJlbmRlcmVyIiwic2VsZWN0b3IiLCJfcmVuZGVyZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJzaG91bGRBcHBlbmQiLCJhcHBlbmQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJiaW8iLCJfYmlvIiwiX2F2YXRhciIsInVzZXIiLCJzZXRVc2VySW5mbyIsIm5hbWVUZXh0IiwiYmlvVGV4dCIsInNldEF2YXRhciIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwiY2FyZERlbGV0ZUJ1dHRvbiIsImNhcmRMaWtlU3ltYm9sIiwiaW1hZ2VQcmV2aWV3IiwiYWRkQ2FyZEJ1dHRvbiIsImFkZENhcmRTdWJtaXRCdXR0b24iLCJhZGRDYXJkUG9wdXAiLCJkZWxldGVDYXJkUG9wdXAiLCJlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbiIsImVkaXRQcm9maWxlQnV0dG9uIiwiZWRpdFByb2ZpbGVQb3B1cCIsInVzZXJOYW1lIiwidXNlckJpbyIsInVzZXJBdmF0YXIiLCJpbnB1dFVzZXJOYW1lIiwiaW5wdXRVc2VyQmlvIiwidXBkYXRlQXZhdGFyQnV0dG9uIiwiaW5wdXRBdmF0YXJMaW5rIiwidXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uIiwidXBkYXRlQXZhdGFyUG9wdXAiLCJhZGRQbGFjZUZvcm0iLCJlZGl0UHJvZmlsZUZvcm0iLCJ1cGRhdGVBdmF0YXJGb3JtIiwiZm9ybVZhbGlkYXRpb25Db25maWciLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiaGFuZGxlQXBpRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJjbG9zZVBvcHVwIiwicG9wdXBFbCIsInJlbmRlckNhcmQiLCJjYXJkIiwiaW1nRGF0YSIsImNhcmRQcmV2aWV3UG9wdXAiLCJoYW5kbGVEZWxldGVDYXJkUmVxdWVzdCIsImNhcmRIVE1MIiwiZGF0YUluIiwiaGFuZGxlQWRkQ2FyZFN1Y2Nlc3MiLCJmaW5hbGx5IiwiZm9ybVZhbGlkYXRvcnMiLCJnZXQiLCJkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAiLCJoYW5kbGVEZWxldGVDYXJkU3VjY2VzcyIsImN1cnJlbnRVc2VyUHJvZmlsZSIsImhhbmRsZUdldFVzZXJJbmZvU3VjY2VzcyIsImhhbmRsZVVwZGF0ZVByb2ZpbGVTdWNjZXNzIiwicHJlZmlsbFByb2ZpbGVGb3JtIiwiaW5wdXRQcm9maWxlTmFtZSIsImlucHV0QmlvIiwiY3VycmVudFVzZXIiLCJpbnB1dF9hdmF0YXJfbGluayIsImRhdGFGcm9tQXBpIiwiaGFuZGxlVXBkYXRlQXZhdGFyU3VjY2VzcyIsInByZWZpbGxBdmF0YXJGb3JtIiwiTWFwIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJmb3JtcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZm9ybSIsInNldCIsImUiLCJmIl0sInNvdXJjZVJvb3QiOiIifQ==