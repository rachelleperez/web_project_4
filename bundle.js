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
    api.unlikeCard(card.getCardInfo().id).then(card.updateLikeHeart) // toggle to alternative color and update isLiked card property
    .catch(handleApiError); // passing as reference
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id).then(card.updateLikeHeart) // toggle to alternative color and update isLiked card property
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
  currentUserProfile.setUserInfo(dataIn.name, dataIn.about);
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
    api.updateAvatar(data.input_avatar_link).then(handleUpdateAvatarSuccess).catch(handleApiError) // passing as reference
    .finally(function () {
      return updateAvatarSubmitButton.textContent = "Save";
    });
  }
});
function handleUpdateAvatarSuccess(data) {
  currentUserProfile.setAvatar(data.input_avatar_link);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFBSyxDQUFBLElBQUFDLElBQUEsR0FBbUM7SUFBQSxJQUF4QkMsSUFBSSxHQUFBSixLQUFBLENBQUFyUCxLQUFBO0lBQ2JtTyxjQUFjLENBQUN1QixHQUFHLENBQUNELElBQUksQ0FBQ25PLElBQUksRUFBRSxJQUFJNEQsaUVBQWEsQ0FBQytILGtFQUFvQixFQUFFd0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hGO0FBQUMsU0FBQTFPLEdBQUE7RUFBQW1PLFNBQUEsQ0FBQVMsQ0FBQSxDQUFBNU8sR0FBQTtBQUFBO0VBQUFtTyxTQUFBLENBQUFVLENBQUE7QUFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICAgIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVyc30pIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybCxcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc1xuICAgIH1cblxuICAgIF9oYW5kbGVGZXRjaCAoZGVzdGluYXRpb25VcmwsIG1ldGhvZCwgYm9keSkge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChkZXN0aW5hdGlvblVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdEYXRhIGZyb20gQVBJOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCByZWplY3QgdGhlIHByb21pc2VcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgUmVzcG9uc2UgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTsgLy8gdGhyb3dzIGFuIGVycm9yIHRvIGJlIGNhdWdodCBieSAuY2F0Y2ggaW4gaW5kZXguanNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7IC8vIHRocm93cyBhbiBlcnJvciB0byBiZSBjYXVnaHQgYnkgLmNhdGNoIGluIGluZGV4LmpzXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkc2AsIFwiR0VUXCIpO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCBcIkdFVFwiKTtcbiAgICB9XG5cbiAgICBhZGRDYXJkKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwgXCJQT1NUXCIsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiBkYXRhLmlucHV0X3BsYWNlX3RpdGxlICxsaW5rOiBkYXRhLmlucHV0X3BsYWNlX2ltYWdlfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vdXNlcnMvbWVgLCBcIlBBVENIXCIsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiBkYXRhLmlucHV0X3Byb2ZpbGVfbmFtZSAsYWJvdXQ6IGRhdGEuaW5wdXRfcHJvZmlsZV9iaW99KSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIFwiREVMRVRFXCIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUF2YXRhcihhdmF0YXJMaW5rKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZS9hdmF0YXJgLCBcIlBBVENIXCIsIEpTT04uc3RyaW5naWZ5KHthdmF0YXI6IGF2YXRhckxpbmt9KSk7XG4gICAgfVxuXG4gICAgbGlrZUNhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCBcIlBVVFwiKTtcbiAgICB9XG5cbiAgICB1bmxpa2VDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwgXCJERUxFVEVcIik7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfWAsIFwiR0VUXCIpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4vLyBjYW4gSSBnZXQgdGVtcGxhdGUgZnJvbSBoZXJlP1xyXG4vLyBzaG91bGQgbmV2ZXIgcmVmZXJlbmNlIFwiY2FyZFwiIGhlcmUuIFRoaXMgaXMganVzdCBNVlBcclxuXHJcblxyXG4gIC8vIGp1c3QgMSBjYXJkXHJcbiAgY29uc3RydWN0b3IgKHtkYXRhLCBoYW5kbGVJbWFnZUNsaWNrLCBoYW5kbGVEZWxldGVDYXJkLCBoYW5kbGVMaWtlQ2xpY2t9LCBjYXJkVGVtcGxhdGVTZWxlY3Rvcikge1xyXG5cclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX2lzTGlrZWQgPSBkYXRhLmlzTGlrZWQ7XHJcblxyXG4gICAgLy8gdG8gbWF0Y2ggaW5kZXguaHRtbFxyXG4gICAgaWYgKGRhdGEubmFtZSA9PT0gdW5kZWZpbmVkKSB7dGhpcy5fbmFtZSA9IGRhdGEuaW5wdXRfcGxhY2VfdGl0bGU7fVxyXG4gICAgaWYgKGRhdGEubGluayA9PT0gdW5kZWZpbmVkKSB7dGhpcy5fbGluayA9IGRhdGEuaW5wdXRfcGxhY2VfaW1hZ2U7fVxyXG4gICAgXHJcbiAgICB0aGlzLl9jYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcmRUZW1wbGF0ZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gbnVsbDtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9ucyB0byBiZSBleGVjdXRlZCBpbiBpbmRleC5qc1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkID0gaGFuZGxlRGVsZXRlQ2FyZDtcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuXHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gY2hhbmdlcyBjb2xvciwgbm90aGluZyBlbHNlLlxyXG4gIHVwZGF0ZUxpa2VIZWFydCh0b2dnbGVJc0xpa2VkID0gdHJ1ZSkgeyAvLyBkZWZhdWx0IHRvIHRydWUsIG1vcmUgY29tbW9uIHNjZW5hcmlvXHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50c19fbGlrZS1zeW1ib2xfYWN0aXZlXCIpO1xyXG4gICAgaWYgKHRvZ2dsZUlzTGlrZWQpIHRoaXMuX2lzTGlrZWQgPSAhdGhpcy5faXNMaWtlZDtcclxuICB9XHJcblxyXG4gIC8vaW5zdGFuY2UgdmFyaWFibGVzXHJcbiAgXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzIChpbWFnZUNhcmQpIHtcclxuICAgIGltYWdlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUltYWdlQ2xpY2soe2xpbms6IHRoaXMuX2xpbmssIG5hbWU6IHRoaXMuX25hbWV9KSlcclxuXHJcbiAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBkZWxldGUgYnV0dG9uXHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpKTtcclxuXHJcbiAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBsaWtlIGJ1dHRvblxyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlcyBkZWxldGUgY2FyZCByZXF1ZXN0XHJcbiAgaGFuZGxlRGVsZXRlQ2FyZCgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlcyBsaWtlIGJ1dHRvbiBjbGlja1xyXG4gIGhhbmRsZUxpa2VDbGljaygpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5faGFuZGxlTGlrZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgY2FyZFxyXG4gIGNyZWF0ZUNhcmQoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9jYXJkVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19lbGVtZW50Jyk7XHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19kZWxldGUtYnV0dG9uJyk7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2xpa2Utc3ltYm9sJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltYWdlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pbWFnZScpXHJcbiAgICBpbWFnZUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLl9saW5rfScpYFxyXG4gICAgY29uc3QgbmFtZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbmFtZScpXHJcbiAgICBuYW1lQ2FyZC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnKVxyXG5cclxuICAgIC8vc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoaW1hZ2VDYXJkKTtcclxuXHJcbiAgICAvLyBsaWtlIGJ1dHRvbiBzaG93biBtdXN0IHJlZmxlY3Qgc3RhdHVzLiBpZiBidXR0b24gY29sb3IgYW5kIGxpa2Ugc3RhdHVzIGRvbnQgbWF0Y2gsIHRvZ2dsZSBsaWtlIGNvbG9yXHJcbiAgICBjb25zdCBpc0J1dHRvbkxpa2VkID0gdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50c19fbGlrZS1zeW1ib2xfYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc0xpa2VkKSB7XHJcbiAgICAgIGlmICghaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FyZCBub3QgbGlrZWRcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gdGhlIGNyZWF0ZWQgY2FyZFxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBjYXJkIGluZm9cclxuICBnZXRDYXJkSW5mbygpIHtcclxuICAgIGNvbnN0IGNhcmRJbmZvID0ge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgICAgbGluazogdGhpcy5fbGluayxcclxuICAgICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgICAgaXNMaWtlZDogdGhpcy5faXNMaWtlZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcmRJbmZvXHJcbiAgfVxyXG5cclxufSIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIC8vc2V0dGluZ3MgPSBjb3ZpZCwgZm9ybUVsZW1lbnQgPSBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgZm9ybXMuIFNheSB1cGZyb250IHRoZSBmb3JtIG5lZWRlZFxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgKHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpLFxyXG4gICAgICAodGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzKTtcclxuXHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvciksXHJcbiAgICApO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2VuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8vZG9uZVxyXG4gIF9zaG93RXJyb3IoZXJyb3JFbCwgaW5wdXRFbCkge1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8vZG9uZVxyXG4gIF9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCkge1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcclxuICAgIC8vc2V0dGluZ3MsIGZvcm1FbCByZW1vdmVkXHJcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTsgLy8gYWRkZWQgXCItZXJyb3JcIiB0byBlcnJvciB2ZXJzaW9uc1xyXG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XHJcbiAgICAgIC8vIGhpZGUgdGhlIGVycm9yIG1lc3NhZ2VzIGFuZCBzdHlsZVxyXG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaG93IGVycm9yIG1lc3NhZ2VzIGFuZCBzdHlsZVxyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCdXR0b24oKSB7XHJcbiAgICAvL3JlbW92ZWQgc2V0dGluZ3NcclxuXHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0cygpKSB7XHJcbiAgICAgIC8vIGRpc2FibGUgdGhlIGJ1dHRvblxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBzb21lIGludmFsaWQgaW5wdXRcclxuICBfaGFzSW52YWxpZElucHV0cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaW5wdXRFbCkgPT4gdGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBpbnB1dHMgYW5kIGFkZCB2YWxpZGF0aW9uXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy9jaGVjayB0aGUgaW5wdXRcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7IC8vc2V0dGluZ3MsIGZvcm1FbCByZW1vdmVkXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBidXR0b24gKGlmIGlucHV0IGlzIHZhbGlkLCBlbmFibGUuIGlmIG5vdCwgZGlzYWJsZWQpXHJcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9lbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb25cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7IC8vc2V0dGluZ3MgKGNvbmZpZykgdG8gYmUgcGFzc2VkIHRvIGZvcm0gdmlhIGNvbnN0cnVjdG9yXHJcbiAgfVxyXG5cclxuICAvLyBubyBlcnJvcnMgdXBvbiBvcGVuaW5nIGEgZm9ybS5cclxuICBjbGVhclZhbGlkYXRpb25FcnJvcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwsIGlucHV0RWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2V4cG9ydCBmb3IgaW5kZXguanNcclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcclxuIiwiLy8gb3BlbnMgYW5kIGNsb3NlIGFsbCBwb3B1cHMgaW4gYXBwbGljYXRpb24gKGVkaXQgcHJvZmlsZSwgYWRkIHBsYWNlLCBpbWFnZSBwb3B1cClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwb3B1cFNlbGVjdG9yfWApOyAvLyBtb2RhbC1wcm9maWxlXG4gICAgICAgIHRoaXMuX292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJsYXknKTsgLy8gbm90ZSwgcmlnaHQgYWJvdmVcbiAgICAgICAgLy90aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWwgIyR7cG9wdXBTZWxlY3Rvcn0gfiAubW9kYWxfX292ZXJsYXlgKTtcbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSA9IHRoaXMuX2hhbmRsZUVzY0VzY2FwZS5iaW5kKHRoaXMpOyAvLyB0byBtYWtlIHN1cmUgY29ycmVjdCBjb250ZXh0IGZvciB0aGlzIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgICAgIHRoaXMuX2Nsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpOyAvLyBiaW5kaW5nIGNsb3NlKCkgdG8gdGhlIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljayA9IHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljay5iaW5kKHRoaXMpOyAvLyBiaW5kIHRvIGNvbnN0cnVjdG9yXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgLy8gb3BlbnMgcG9wdXBcbiAgICAgICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2NvbnRhaW5lcl9hY3RpdmUnKVxuICAgICAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpXG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgLy8gY2xvc2VzIHBvcHVwXG4gICAgICAgIHRoaXMuX21vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19jb250YWluZXJfYWN0aXZlJylcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fb3ZlcmxheV9hY3RpdmUnKVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY0VzY2FwZShldmVudCkge1xuICAgICAgICAvLyBsaXN0ZW5zIGZvciBlc2MgYnV0dG9uXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlT3ZlcmxheUNsaWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fb3ZlcmxheV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gc2V0cyBldmVudCBsaXN0ZW5lcnNcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNsb3NlIGJ1dHRvblxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlKTtcblxuICAgICAgICAvLyBpZiBhIGtleSBpcyBwcmVzc2VkLCBfaGFuZGxlRXNjRXNjYXBlIHdpbGwgY2FsbCBjbG9zZSgpIGlzIGtleSBpcyBFc2NcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSk7XG5cbiAgICAgICAgLy8gaWYgb3ZlcmxheSBpcyBjbGlja2VkLCBjbG9zZVxuICAgICAgICB0aGlzLl9vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbG9zZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NFc2NhcGUpO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrKTsgXG5cbiAgICB9XG5cblxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xuICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZ2V0cyBpbnZva2VkIHdoZW4geW91IHN1Ym1pdCB0aGUgZm9ybVxuXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7IC8vIGZvciBQb3B1cFxuXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpOyAvLyA8Zm9ybSBpZCA9IFwiZm9ybV9hZGRfcGxhY2VcIiBjbGFzcz1cImZvcm1cIiBuYW1lPVwiZm9ybV9hZGRfcGxhY2VcIiBub3ZhbGlkYXRlPlxuXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG5cbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTsgLy9IVE1MIEVsZW1lbnRcbiAgICB0aGlzLl9pbnB1dE1hcCA9IG51bGw7IC8vIG1hcCBpbnB1dF9uYW1lOiBpbnB1dF92YWx1ZVxuXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7IC8vIGJpbmQgdG8gY29uc3RydWN0b3JcblxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTsgLy8gY2FsbHMgcGFyZW50J3MgY2xvc2UoKVxuICB9XG5cbiAgLy8gaGFuZGxlU3VibWl0ID0gaGFuZGxlcyBzdWJtaXQgZXZlbnQgfCBoYW5kbGVGb3JtU3VibWl0ID0gdGFrZXMgYWN0aW9uIG9uIGlucHV0c1xuICBfaGFuZGxlU3VibWl0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3NldElucHV0VmFsdWVzKCk7IC8vIGZpbGwgaW4gaW5wdXRNYXBcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2lucHV0TWFwKTsgXG4gIH1cblxuICBnZXRJbnB1dFZhbHVlcygpIHtcbiAgICByZXR1cm4gaW5wdXRNYXA7XG4gIH1cblxuICAvL2NvbGxlY3RzIGRhdGEgZnJvbSBhbGwgaW5wdXQgZmllbGRzIGFuZCByZXR1cm5zIHRoYXQgZGF0YSBhcyBhbiBvYmplY3RcbiAgX3NldElucHV0VmFsdWVzKCkge1xuICAgIHRoaXMuX2lucHV0TWFwID0ge307XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9pbnB1dE1hcCBbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgXG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBhZGQgc3VibWl0IGV2ZW50IGhhbmRsZXJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xuXG4gICAgLy8gbWFpbnRhaW5zIHBhcmVudCBzZXR0aW5ncywgY2xvc2luZyB1cG9uIHByZXNzaW5nIGNsb3NlIGJ1dHRvbiwgRXNjLCBhbmQgY2xpY2sgb3ZlcmxheVxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyBhZGRzIHN1Ym1pdCBldmVudGxpc3RlbmVyIG9ubHkgb25jZVxuICAgIHRoaXMuX3BvcHVwRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZVN1Ym1pdCk7XG5cbiAgICAvLyBtYWludGFpbnMgcGFyZW50IHNldHRpbmdzLCBjbG9zaW5nIHVwb24gcHJlc3NpbmcgY2xvc2UgYnV0dG9uLCBFc2MsIGFuZCBjbGljayBvdmVybGF5XG4gICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpOyAgICAgICBcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlJyk7XG4gICAgICAgIHRoaXMuX2ltYWdlQ2FwdGlvbiA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2UtY2FwdGlvbicpO1xuICAgIH1cblxuICAgIC8vIG92ZXJyaWRlIG9wZW4gZnVuY3Rpb25cbiAgICBvcGVuKGRhdGEpIHtcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjPSBkYXRhLmxpbms7XG4gICAgICAgIHRoaXMuX2ltYWdlQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0PSBkYXRhLm5hbWU7XG4gICAgICAgIHN1cGVyLm9wZW4oKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyLCBzZWxlY3Rvcn0pIHsgLy8gT1IgY2xhc3NOYW1lIGluc3RlYWQgb2Ygc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbXMoaXRlbXMpIHsgLy8gcHVibGljIGZ1bmN0aW9uXG4gICAgICAgIC8vIHVzZSB0aGlzLl9yZW5kZXJlciBjcmVhdGUgdGhlIGVsZW1lbnQgZm9yIHJlbmRlcmluZyA9ICB0aGlzLl9lbGVtZW50XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0sIHNob3VsZEFwcGVuZCkge1xuXG4gICAgICAgIGlmIChzaG91bGRBcHBlbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kKGl0ZW0pIC8vIGluaXRpYWwgY2FyZHMgb25seVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5wcmVwZW5kKGl0ZW0pIFxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgYmlvLCBhdmF0YXIgfSkgeyAvLyBPUiBjbGFzc05hbWUgaW5zdGVhZCBvZiBzZWxlY3RvclxuICAgICAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmFtZX1gKTtcbiAgICAgICAgdGhpcy5fYmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YmlvfWApO1xuICAgICAgICB0aGlzLl9hdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthdmF0YXJ9YCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgICAgICAgYmlvOiB0aGlzLl9iaW8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuX2F2YXRhclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuXG4gICAgc2V0VXNlckluZm8obmFtZVRleHQsIGJpb1RleHQsIGF2YXRhckxpbmspIHtcbiAgICAgICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5hbWVUZXh0O1xuICAgICAgICB0aGlzLl9iaW8udGV4dENvbnRlbnQgPSBiaW9UZXh0O1xuICAgICAgICBpZiAoYXZhdGFyTGluayAhPSBudWxsKSB0aGlzLnNldEF2YXRhcihhdmF0YXJMaW5rKTtcbiAgICB9XG5cbiAgICBzZXRBdmF0YXIoYXZhdGFyTGluaykge1xuICAgICAgICB0aGlzLl9hdmF0YXIuc3JjID0gYXZhdGFyTGluaztcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgIGNhcmRTZWN0aW9uOiAnLmVsZW1lbnRzJyxcbiAgICBjYXJkVGVtcGxhdGU6ICcjY2FyZC10ZW1wbGF0ZScsXG4gICAgY2FyZERlbGV0ZUJ1dHRvbjogJy5lbGVtZW50c19kZWxldGUtYnV0dG9uJyxcbiAgICBjYXJkTGlrZVN5bWJvbDogJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnLFxuICAgIGltYWdlUHJldmlldzogJ3BvcHVwLWltYWdlJyxcbiAgICBhZGRDYXJkQnV0dG9uOiBcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIsXG4gICAgYWRkQ2FyZFN1Ym1pdEJ1dHRvbjogXCJidXR0b24tY3JlYXRlLXBsYWNlXCIsXG4gICAgYWRkQ2FyZFBvcHVwOiBcIm1vZGFsX2FkZFwiLFxuICAgIGRlbGV0ZUNhcmRQb3B1cDogXCJkZWxldGVfY2FyZF9jb25maXJtYXRpb25cIixcbiAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbjogXCJidXR0b24tc3VibWl0LWVkaXQtcHJvZmlsZVwiLFxuICAgIGVkaXRQcm9maWxlQnV0dG9uOiBcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiLFxuICAgIGVkaXRQcm9maWxlUG9wdXA6IFwibW9kYWxfcHJvZmlsZVwiLFxuICAgIHVzZXJOYW1lOiBcImRpc3BsYXlfcHJvZmlsZV9uYW1lXCIsXG4gICAgdXNlckJpbzogXCJkaXNwbGF5X3Byb2ZpbGVfYmlvXCIsXG4gICAgdXNlckF2YXRhcjogXCJkaXNwbGF5X3Byb2ZpbGVfYXZhdGFyXCIsXG4gICAgaW5wdXRVc2VyTmFtZTogXCJpbnB1dF9wcm9maWxlX25hbWVcIixcbiAgICBpbnB1dFVzZXJCaW86IFwiaW5wdXRfcHJvZmlsZV9iaW9cIixcbiAgICB1cGRhdGVBdmF0YXJCdXR0b246IFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIixcbiAgICBpbnB1dEF2YXRhckxpbms6IFwiaW5wdXRfYXZhdGFyX2xpbmtcIixcbiAgICB1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b246IFwiYnV0dG9uLXVwZGF0ZS1hdmF0YXJcIixcbiAgICB1cGRhdGVBdmF0YXJQb3B1cDogXCJtb2RhbF91cGRhdGVfYXZhdGFyXCIsXG4gICAgYWRkUGxhY2VGb3JtOiBcImZvcm1fYWRkX3BsYWNlXCIsXG4gICAgZWRpdFByb2ZpbGVGb3JtOiBcImZvcm1fZWRpdF9wcm9maWxlXCIsXG4gICAgdXBkYXRlQXZhdGFyRm9ybTogXCJmb3JtX3VwZGF0ZV9hdmF0YXJcIlxuXG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdGlvbkNvbmZpZyA9IHtcbiAgICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIiwgLy8jID0gaWQsIC4gaXMgY2xzc1xuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fc3VibWl0X2Rpc2FibGVkXCIsIC8vIGNsYXNzZXNcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxuICAgIGVycm9yQ2xhc3M6IFwiZm9ybV9fZXJyb3JfdmlzaWJsZVwiLFxuICB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuLy8gSW1wb3J0IGFsbCB0aGUgY2xhc3Nlc1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1cIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xyXG5cclxuaW1wb3J0IHsgc2VsZWN0b3JzLCBmb3JtVmFsaWRhdGlvbkNvbmZpZyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQVBJIFNFVFRJTkdTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC1hcGkuZW4udHJpcGxldGVuLXNlcnZpY2VzLmNvbS92MVwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiMTQxMjAxMmQtYmE2MS00ZDc1LWI1NWEtMTQ1MDRkNmUyM2FlXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBpbiB0aGlzIHByb2plY3QsIGFsbCBBUEkgZXJyb3JzIGhhbmRsZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uIEluIHByYWN0aWNlLCBsaWtlbHkgd291bGQgYmUgZGlmZmVyZW50IGhhbmRsZXJzLlxyXG5mdW5jdGlvbiBoYW5kbGVBcGlFcnJvcihlcnJvck1lc3NhZ2UpIHtcclxuICBjb25zb2xlLmVycm9yKFwiVHJpcGxlIFRlbiBBUEkgRXJyb3I6IFwiLCBlcnJvck1lc3NhZ2UpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUE9QVVAgU0VUVElOR1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gaGFuZGxlcyBjbG9zaW5nIHRoZSBnaXZlbiBwb3B1cFxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwRWwpIHtcclxuICBwb3B1cEVsLmNsb3NlKCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDQVJEIFJFTkRFUkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XHJcbiAgcmVuZGVyZXI6IChkYXRhKSA9PiByZW5kZXJDYXJkKGRhdGEsIHRydWUpLFxyXG4gIHNlbGVjdG9yOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhLCBzaG91bGRBcHBlbmQpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGhhbmRsZUltYWdlQ2xpY2s6IChpbWdEYXRhKSA9PiB7XHJcbiAgICAgICAgY2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVEZWxldGVDYXJkOiAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlQ2FyZFJlcXVlc3QoY2FyZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUxpa2VDbGljazogKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUxpa2VDbGljayhjYXJkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUsXHJcbiAgKVxyXG4gIGNvbnN0IGNhcmRIVE1MID0gY2FyZC5jcmVhdGVDYXJkKCk7IC8vIGFuIGh0bWwgZWxlbWVudFxyXG5cclxuICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRIVE1MICwgc2hvdWxkQXBwZW5kKTtcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGRVRDSCBDVVJSRU5UIENBUkRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuYXBpLmdldEluaXRpYWxDYXJkcygpXHJcbiAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikgY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoZGF0YSkgLy8gb25seSBhdHRlbXB0IHJlbmRlcmluZyBpZiB0aGVyZSBpcyBkYXRhIHRvIGRpc3BsYXlcclxuICB9KVxyXG4gIC5jYXRjaChoYW5kbGVBcGlFcnJvcik7IC8vIHBhc3NpbmcgYXMgcmVmZXJlbmNlXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5FVyBDQVJEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmFkZENhcmRCdXR0b24pO1xyXG5jb25zdCBhZGRDYXJkU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmFkZENhcmRTdWJtaXRCdXR0b24pO1xyXG5cclxuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IHNlbGVjdG9ycy5hZGRDYXJkUG9wdXAsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGFJbikgPT4ge1xyXG4gICAgYWRkQ2FyZFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS5hZGRDYXJkKGRhdGFJbilcclxuICAgICAgLnRoZW4oaGFuZGxlQWRkQ2FyZFN1Y2Nlc3MpXHJcbiAgICAgIC5jYXRjaChoYW5kbGVBcGlFcnJvcikgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gYWRkQ2FyZFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCIpXHJcblxyXG5cclxuICB9LFxyXG59KTtcclxuXHJcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBmb3JtVmFsaWRhdG9ycy5nZXQoc2VsZWN0b3JzLmFkZFBsYWNlRm9ybSkuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7IC8vIHJldHJpZXZlIGNvcnJlY3QgRm9ybVZhbGlkYXRvciBmcm9tIG1hcFxyXG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Y2Nlc3MoZGF0YSkge1xyXG4gIHJlbmRlckNhcmQoZGF0YSwgZmFsc2UpO1xyXG4gIGNsb3NlUG9wdXAoYWRkQ2FyZFBvcHVwKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERFTEVURSBDQVJEIENPTkZJUk1BVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5jb25zdCBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmRlbGV0ZUNhcmRQb3B1cCxcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoKSA9PiB7XHJcbiAgICBhcGkuZGVsZXRlQ2FyZChkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAuY2FyZElkKVxyXG4gICAgICAudGhlbihoYW5kbGVEZWxldGVDYXJkU3VjY2VzcylcclxuICAgICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKTsgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gb3BlbnMgcG9wdXAsIHJlYWR5IGZvciBkZWxldGlvbiByZXF1ZXN0XHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0KGNhcmQpIHtcclxuXHJcbiAgLy8gc2V0dGluZyBwcm9wZXJ0aWVzIGZvciBjYXJkIGluIHF1ZXN0aW9uXHJcbiAgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLmNhcmQgPSBjYXJkOyBcclxuICBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAuY2FyZElkID0gZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLmNhcmQuZ2V0Q2FyZEluZm8oKS5pZDtcclxuXHJcbiAgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLm9wZW4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ2FyZFN1Y2Nlc3MoKSB7XHJcbiAgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwLmNhcmQuZGVsZXRlQ2FyZCgpOyBcclxuICBjbG9zZVBvcHVwKGRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cCk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMSUtFIEJFSEFWSU9SIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpa2VDbGljayhjYXJkKSB7XHJcbiAgLy8gaWYgbGlrZWQgYWxyZWFkeSwgdW5saWtlIGluIGFwaSBhbmQgbWFrZSBoZWFydCBlbXB0eVxyXG4gIGlmIChjYXJkLmdldENhcmRJbmZvKCkuaXNMaWtlZCkgeyAvLyBDYW4gdGhlIGxpa2Ugc3RhdHVzIGJlIHJldHJpZXZlZCBmcm9tIEFQSSByYXRoZXIgdGhhbiBtYWludGFpbiBhIHNlY29uZCB2ZXJzaW9uIGhlcmU/XHJcbiAgICBhcGkudW5saWtlQ2FyZChjYXJkLmdldENhcmRJbmZvKCkuaWQpXHJcbiAgICAudGhlbiAoY2FyZC51cGRhdGVMaWtlSGVhcnQpIC8vIHRvZ2dsZSB0byBhbHRlcm5hdGl2ZSBjb2xvciBhbmQgdXBkYXRlIGlzTGlrZWQgY2FyZCBwcm9wZXJ0eVxyXG4gICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKTsgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICB9XHJcbiAgLy8gZWxzZSA9IGN1cnJlbnRseSB1bmxpa2VzLCBsaWtlIGluIGFwaSBhbmQgZmlsbCB0aGUgaGVhcnRcclxuICBlbHNlIHtcclxuICAgIGFwaS5saWtlQ2FyZChjYXJkLmdldENhcmRJbmZvKCkuaWQpXHJcbiAgICAudGhlbiAoY2FyZC51cGRhdGVMaWtlSGVhcnQpIC8vIHRvZ2dsZSB0byBhbHRlcm5hdGl2ZSBjb2xvciBhbmQgdXBkYXRlIGlzTGlrZWQgY2FyZCBwcm9wZXJ0eVxyXG4gICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKTsgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICB9ICBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBST0ZJTEUgSU5GTyBTVE9SQUdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY3VycmVudFVzZXJQcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBzZWxlY3RvcnMudXNlck5hbWUsXHJcbiAgYmlvOiBzZWxlY3RvcnMudXNlckJpbyxcclxuICBhdmF0YXI6IHNlbGVjdG9ycy51c2VyQXZhdGFyXHJcbn0pXHJcblxyXG5hcGkuZ2V0VXNlckluZm8oKVxyXG4gIC50aGVuKGhhbmRsZUdldFVzZXJJbmZvU3VjY2VzcylcclxuICAuY2F0Y2goaGFuZGxlQXBpRXJyb3IpOyAvLyBwYXNzaW5nIGFzIHJlZmVyZW5jZVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR2V0VXNlckluZm9TdWNjZXNzKGRhdGEpIHtcclxuICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmFib3V0LCBkYXRhLmF2YXRhcik7XHJcbn0gICBcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQUk9GSUxFIElORk8gTUFOQUdFTUVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmVkaXRQcm9maWxlU3VibWl0QnV0dG9uKTtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3Rvcjogc2VsZWN0b3JzLmVkaXRQcm9maWxlUG9wdXAsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcclxuICAgIGVkaXRQcm9maWxlU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLnVwZGF0ZVByb2ZpbGUoZGF0YSlcclxuICAgICAgLnRoZW4oaGFuZGxlVXBkYXRlUHJvZmlsZVN1Y2Nlc3MpXHJcbiAgICAgIC5jYXRjaChoYW5kbGVBcGlFcnJvcikgLy8gcGFzc2luZyBhcyByZWZlcmVuY2VcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gZWRpdFByb2ZpbGVTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIilcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZVByb2ZpbGVTdWNjZXNzKGRhdGEpIHtcclxuICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oXHJcbiAgICBkYXRhSW4ubmFtZSxcclxuICAgIGRhdGFJbi5hYm91dCxcclxuICApO1xyXG4gIGNsb3NlUG9wdXAoZWRpdFByb2ZpbGVQb3B1cCk7XHJcbn1cclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuZWRpdFByb2ZpbGVCdXR0b24pO1xyXG5cclxuZWRpdFByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBmb3JtVmFsaWRhdG9ycy5nZXQoc2VsZWN0b3JzLmVkaXRQcm9maWxlRm9ybSkuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgcHJlZmlsbFByb2ZpbGVGb3JtKCk7XHJcbiAgZWRpdFByb2ZpbGVQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8gcHJlZmlsbGluZyBwcm9maWxlXHJcblxyXG5jb25zdCBpbnB1dFByb2ZpbGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLmlucHV0VXNlck5hbWUpO1xyXG5jb25zdCBpbnB1dEJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5pbnB1dFVzZXJCaW8pO1xyXG5cclxuZnVuY3Rpb24gcHJlZmlsbFByb2ZpbGVGb3JtKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJQcm9maWxlLmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXRQcm9maWxlTmFtZS52YWx1ZSA9IGN1cnJlbnRVc2VyLm5hbWU7XHJcbiAgaW5wdXRCaW8udmFsdWUgPSBjdXJyZW50VXNlci5iaW87XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBVkFUQVIgTUFOQUdFTUVOVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IHVwZGF0ZUF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnVwZGF0ZUF2YXRhckJ1dHRvbik7XHJcbmNvbnN0IGlucHV0QXZhdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ycy5pbnB1dEF2YXRhckxpbmspO1xyXG5jb25zdCB1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMudXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uKTtcclxuXHJcblxyXG5jb25zdCB1cGRhdGVBdmF0YXJQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBzZWxlY3RvcnMudXBkYXRlQXZhdGFyUG9wdXAsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcclxuICAgIHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS51cGRhdGVBdmF0YXIoZGF0YS5pbnB1dF9hdmF0YXJfbGluaylcclxuICAgICAgLnRoZW4oaGFuZGxlVXBkYXRlQXZhdGFyU3VjY2VzcylcclxuICAgICAgLmNhdGNoKGhhbmRsZUFwaUVycm9yKSAvLyBwYXNzaW5nIGFzIHJlZmVyZW5jZVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIilcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUF2YXRhclN1Y2Nlc3MoZGF0YSkge1xyXG4gIGN1cnJlbnRVc2VyUHJvZmlsZS5zZXRBdmF0YXIoZGF0YS5pbnB1dF9hdmF0YXJfbGluayk7XHJcbiAgY2xvc2VQb3B1cCh1cGRhdGVBdmF0YXJQb3B1cCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWZpbGxBdmF0YXJGb3JtKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJQcm9maWxlLmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXRBdmF0YXJMaW5rLnZhbHVlID0gY3VycmVudFVzZXIuYXZhdGFyLnNyYztcclxufVxyXG5cclxudXBkYXRlQXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZm9ybVZhbGlkYXRvcnMuZ2V0KHNlbGVjdG9ycy51cGRhdGVBdmF0YXJGb3JtKS5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICBwcmVmaWxsQXZhdGFyRm9ybSgpO1xyXG4gIHVwZGF0ZUF2YXRhclBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU1BR0UgQ0FSRCBQUkVWSUVXIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShzZWxlY3RvcnMuaW1hZ2VQcmV2aWV3KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGT1JNIFZBTElEQVRJT04gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjcmVhdGVzIGZvcm0gdmFsaWRhdG9yIGZvciBldmVyeSBmb3JtIGFuZCBzYXZlcyBpdCBzbyBmb3JtVmFsaWRhdG9ycyBtYXBcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JzID0gbmV3IE1hcCgpO1xyXG5cclxuZm9yIChjb25zdCBmb3JtIG9mIGRvY3VtZW50LmZvcm1zKSB7XHJcbiAgZm9ybVZhbGlkYXRvcnMuc2V0KGZvcm0ubmFtZSwgbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRpb25Db25maWcsIGZvcm0pKTsgLy8gY3JlYXRlIEZvcm1WYWxpZGF0b3IgaW5zdGFuY2UgYW5kIHRyYWNrIGluIG1hcCBmb3JtX25hbWU6IGZvcm1WYWxpZGF0b3JcclxufSAgIl0sIm5hbWVzIjpbIkFwaSIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2hhbmRsZUZldGNoIiwiZGVzdGluYXRpb25VcmwiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbmNhdCIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJhZGRDYXJkIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5wdXRfcGxhY2VfdGl0bGUiLCJsaW5rIiwiaW5wdXRfcGxhY2VfaW1hZ2UiLCJ1cGRhdGVQcm9maWxlIiwiaW5wdXRfcHJvZmlsZV9uYW1lIiwiYWJvdXQiLCJpbnB1dF9wcm9maWxlX2JpbyIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJ1cGRhdGVBdmF0YXIiLCJhdmF0YXJMaW5rIiwiYXZhdGFyIiwibGlrZUNhcmQiLCJ1bmxpa2VDYXJkIiwiZ2V0Q2FyZCIsImRlZmF1bHQiLCJDYXJkIiwiY2FyZFRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImhhbmRsZUxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfaWQiLCJfaXNMaWtlZCIsImlzTGlrZWQiLCJ1bmRlZmluZWQiLCJfY2FyZFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX2VsZW1lbnQiLCJfZGVsZXRlQnV0dG9uIiwiX2xpa2VCdXR0b24iLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2hhbmRsZUxpa2VDbGljayIsInJlbW92ZSIsInVwZGF0ZUxpa2VIZWFydCIsInRvZ2dsZUlzTGlrZWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJpbWFnZUNhcmQiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVDYXJkIiwiY29udGVudCIsImNsb25lTm9kZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibmFtZUNhcmQiLCJ0ZXh0Q29udGVudCIsImlzQnV0dG9uTGlrZWQiLCJjb250YWlucyIsImdldENhcmRJbmZvIiwiY2FyZEluZm8iLCJpZCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsIl9lbmFibGVWYWxpZGF0aW9uIiwiX3Nob3dFcnJvciIsImVycm9yRWwiLCJpbnB1dEVsIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUVycm9yIiwiX2lzSW52YWxpZElucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ0b2dnbGVCdXR0b24iLCJfaGFzSW52YWxpZElucHV0cyIsImRpc2FibGVkIiwic29tZSIsIl90aGlzMiIsImZvckVhY2giLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIl90aGlzMyIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9tb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiX292ZXJsYXkiLCJfY2xvc2VCdXR0b24iLCJfaGFuZGxlRXNjRXNjYXBlIiwiYmluZCIsIl9jbG9zZSIsImNsb3NlIiwiX2hhbmRsZU92ZXJsYXlDbGljayIsIm9wZW4iLCJzZXRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0cyIsIl9pbnB1dE1hcCIsIl9oYW5kbGVTdWJtaXQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwicmVzZXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX3NldElucHV0VmFsdWVzIiwiZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dE1hcCIsImlucHV0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfaW1hZ2VDYXB0aW9uIiwic3JjIiwiYWx0IiwiU2VjdGlvbiIsInJlbmRlcmVyIiwic2VsZWN0b3IiLCJfcmVuZGVyZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJzaG91bGRBcHBlbmQiLCJhcHBlbmQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJiaW8iLCJfYmlvIiwiX2F2YXRhciIsInVzZXIiLCJzZXRVc2VySW5mbyIsIm5hbWVUZXh0IiwiYmlvVGV4dCIsInNldEF2YXRhciIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwiY2FyZERlbGV0ZUJ1dHRvbiIsImNhcmRMaWtlU3ltYm9sIiwiaW1hZ2VQcmV2aWV3IiwiYWRkQ2FyZEJ1dHRvbiIsImFkZENhcmRTdWJtaXRCdXR0b24iLCJhZGRDYXJkUG9wdXAiLCJkZWxldGVDYXJkUG9wdXAiLCJlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbiIsImVkaXRQcm9maWxlQnV0dG9uIiwiZWRpdFByb2ZpbGVQb3B1cCIsInVzZXJOYW1lIiwidXNlckJpbyIsInVzZXJBdmF0YXIiLCJpbnB1dFVzZXJOYW1lIiwiaW5wdXRVc2VyQmlvIiwidXBkYXRlQXZhdGFyQnV0dG9uIiwiaW5wdXRBdmF0YXJMaW5rIiwidXBkYXRlQXZhdGFyU3VibWl0QnV0dG9uIiwidXBkYXRlQXZhdGFyUG9wdXAiLCJhZGRQbGFjZUZvcm0iLCJlZGl0UHJvZmlsZUZvcm0iLCJ1cGRhdGVBdmF0YXJGb3JtIiwiZm9ybVZhbGlkYXRpb25Db25maWciLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiaGFuZGxlQXBpRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJjbG9zZVBvcHVwIiwicG9wdXBFbCIsInJlbmRlckNhcmQiLCJjYXJkIiwiaW1nRGF0YSIsImNhcmRQcmV2aWV3UG9wdXAiLCJoYW5kbGVEZWxldGVDYXJkUmVxdWVzdCIsImNhcmRIVE1MIiwiZGF0YUluIiwiaGFuZGxlQWRkQ2FyZFN1Y2Nlc3MiLCJmaW5hbGx5IiwiZm9ybVZhbGlkYXRvcnMiLCJnZXQiLCJkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAiLCJoYW5kbGVEZWxldGVDYXJkU3VjY2VzcyIsImN1cnJlbnRVc2VyUHJvZmlsZSIsImhhbmRsZUdldFVzZXJJbmZvU3VjY2VzcyIsImhhbmRsZVVwZGF0ZVByb2ZpbGVTdWNjZXNzIiwicHJlZmlsbFByb2ZpbGVGb3JtIiwiaW5wdXRQcm9maWxlTmFtZSIsImlucHV0QmlvIiwiY3VycmVudFVzZXIiLCJpbnB1dF9hdmF0YXJfbGluayIsImhhbmRsZVVwZGF0ZUF2YXRhclN1Y2Nlc3MiLCJwcmVmaWxsQXZhdGFyRm9ybSIsIk1hcCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZm9ybXMiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImZvcm0iLCJzZXQiLCJlIiwiZiJdLCJzb3VyY2VSb290IjoiIn0=