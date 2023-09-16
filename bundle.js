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
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        console.error(err); // log the error to the console
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
      handleImageClick = _ref.handleImageClick;
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    // to match indx.html
    if (data.name === undefined) {
      this._name = data.input_place_title;
    }
    if (data.link === undefined) {
      this._link = data.input_place_image;
    }
    this._cardTemplate = document.querySelector(cardTemplateSelector);
    this._element = null;
    this._handleImageClick = handleImageClick;
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
    }

    // create new card
  }, {
    key: "createCard",
    value: function createCard() {
      this._element = this._cardTemplate.content.cloneNode(true).querySelector('.elements__element');
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

    //only public function, applies to a specific form now.
  }, {
    key: "enableValidation",
    value: function enableValidation() {
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
    _this._inputs = _this._popupForm.querySelectorAll(".form__input");
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
      this._handleFormSubmit(this._getInputValues());
      this.close();
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      //collects data from all input fields and returns that data as an object
      var inputMap = {};
      this._inputs.forEach(function (input) {
        inputMap[input.id] = input.value;
      });
      return inputMap;
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
      if (avatarLink != null) this._avatar.src = avatarLink;
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
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   selectors: () => (/* binding */ selectors)
/* harmony export */ });
var selectors = {
  cardSection: '.elements',
  cardTemplate: '#card-template',
  imagePreview: 'popup-image'
};
var overlay = document.querySelector('.modal__overlay');

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


// Import all the classes









// ------------------------ API SETTINGS ---------------------------

var api = new _components_Api__WEBPACK_IMPORTED_MODULE_7__["default"]({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "1412012d-ba61-4d75-b55a-14504d6e23ae",
    "Content-Type": "application/json"
  }
});

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
    }
  }, _utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.cardTemplate);
  var cardHTML = card.createCard(); // an html element

  cardSection.addItem(cardHTML, shouldAppend);

  // listen for delete button click
  cardHTML.querySelector('.elements_delete-button').addEventListener('click', function () {
    return handleDeleteCardRequest(card);
  });

  // listen for like button click
  cardHTML.querySelector('.elements__like-symbol').addEventListener('click', function () {
    return handleLikeClick(card);
  });
}

// ------------------------ FETCH CURRENT CARDS ---------------------------

api.getInitialCards().then(function (data) {
  if (typeof data !== "undefined") cardSection.renderItems(data); // only attempt rendering if there is data to display
});

// ------------------------ NEW CARD ---------------------------

var addCardButton = document.querySelector(".profile__add-button");
var addCardSubmitButton = document.getElementById("button-create-place");
var addCardPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: "modal_add",
  handleFormSubmit: function handleFormSubmit(dataIn) {
    addCardSubmitButton.textContent = "Saving...";
    api.addCard(dataIn).then(function (dataOut) {
      renderCard(dataOut, false);
    }).finally(function () {
      addCardSubmitButton.textContent = "Create";
    });
  }
});
addCardButton.addEventListener("click", function () {
  addFormValidator.clearValidationErrors();
  addCardPopup.open();
});

// ------------------------ DELETE CARD CONFIRMATION ---------------------------

function handleDeleteCardRequest(card) {
  var deleteCardConfirmationPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
    popupSelector: "delete_card_confirmation",
    handleFormSubmit: function handleFormSubmit() {
      //console.log(card.constructor === Card);
      api.deleteCard(card.getCardInfo().id);
      card.deleteCard();
    }
  });
  deleteCardConfirmationPopup.open();
}

// ------------------------ LIKE BEHAVIOR ---------------------------

function handleLikeClick(card) {
  // if liked already, unlike in api and make heart empty
  if (card.getCardInfo().isLiked) {
    // Can the like status be retrieved from API rather than maintain a second version here?
    api.unlikeCard(card.getCardInfo().id);
  }
  // else = currently unlikes, like in api and fill the heart
  else {
    api.likeCard(card.getCardInfo().id);
  }
  card.updateLikeHeart(true); // toggle to alternative color and update isLiked card property
}

// ------------------------ PROFILE INFO STORAGE ---------------------------

var currentUserProfile = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({
  name: "display_profile_name",
  bio: "display_profile_bio",
  avatar: "display_profile_avatar"
});
api.getUserInfo().then(function (data) {
  currentUserProfile.setUserInfo(data.name, data.about, data.avatar);
});

// ------------------------ PROFILE INFO MANAGEMENT ---------------------------

var editProfileSubmitButton = document.getElementById("button-submit-edit-profile");
var editProfilePopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: "modal_profile",
  handleFormSubmit: function handleFormSubmit(data) {
    editProfileSubmitButton.textContent = "Saving...";
    api.updateProfile(data).then(function (dataIn) {
      currentUserProfile.setUserInfo(dataIn.name, dataIn.about);
    }).finally(function () {
      editProfileSubmitButton.textContent = "Save";
    });
  }
});
var editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", function () {
  editFormValidator.clearValidationErrors();
  prefillProfileForm();
  editProfilePopup.open();
});

// To prefill Edit Profile Form

var inputProfileName = document.getElementById("input_profile_name");
var inputBio = document.getElementById("input_profile_bio");
function prefillProfileForm() {
  var currentUser = currentUserProfile.getUserInfo();
  inputProfileName.value = currentUser.name;
  inputBio.value = currentUser.bio;
}

// ------------------------ AVATAR MANAGEMENT ---------------------------

// // MVP functionality
// const testImageLink = "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI"
// const testImageLink2 = "https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"

var updateAvatarButton = document.querySelector(".profile__avatar-button");
var inputAvatarLink = document.getElementById("input_avatar_link");
var updateAvatarSubmitButton = document.getElementById("button-update-avatar");
var updateAvatarPopup = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: "modal_update_avatar",
  handleFormSubmit: function handleFormSubmit(data) {
    updateAvatarSubmitButton.textContent = "Saving...";
    api.updateAvatar(data.input_avatar_link).then(function () {
      currentUserProfile.setAvatar(data.input_avatar_link);
    }).finally(function () {
      updateAvatarSubmitButton.textContent = "Save";
    });
  }
});
function prefillAvatarForm() {
  var currentUser = currentUserProfile.getUserInfo();
  inputAvatarLink.value = currentUser.avatar.src;
}
updateAvatarButton.addEventListener("click", function () {
  console.log("avatar pic linked");
  //editFormValidator.clearValidationErrors();
  prefillAvatarForm();
  updateAvatarPopup.open();
});

// ------------------------ IMAGE CARD PREVIEW ---------------------------

var cardPreviewPopup = new _components_PopupWithImage__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_8__.selectors.imagePreview);

// ------------------------ FORM VALIDATION ---------------------------

var addForm = document.getElementById("form_add_place");
var profileForm = document.getElementById("form_edit_profile");
var formValidationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  //# = id, . is clss
  inactiveButtonClass: "form__submit_disabled",
  // classes
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};
var addFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__["default"](formValidationConfig, addForm);
addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_1__["default"](formValidationConfig, profileForm);
editFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxHQUFHO0VBQ3BCLFNBQUFBLElBQUFDLElBQUEsRUFBaUM7SUFBQSxJQUFuQkMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87TUFBRUMsT0FBTyxHQUFBRixJQUFBLENBQVBFLE9BQU87SUFBQUMsZUFBQSxPQUFBSixHQUFBO0lBQzFCLElBQUksQ0FBQ0UsT0FBTyxHQUFHQSxPQUFPLEVBQ3RCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQzFCO0VBQUNFLFlBQUEsQ0FBQUwsR0FBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxhQUFjQyxjQUFjLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFO01BRXhDLE9BQU9DLEtBQUssQ0FBQ0gsY0FBYyxFQUFFO1FBQ3pCQyxNQUFNLEVBQUVBLE1BQU07UUFDZFAsT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztRQUNyQlEsSUFBSSxFQUFFQTtNQUNWLENBQUMsQ0FBQyxDQUNERSxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ1QsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLEVBQUU7VUFDUixPQUFPRCxHQUFHLENBQUNFLElBQUksQ0FBQyxDQUFDO1VBQ2pCO1VBQ0k7VUFDQTtVQUNBO1VBQ0E7UUFDUjtRQUNBO1FBQ0EsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLFdBQUFDLE1BQUEsQ0FBV0wsR0FBRyxDQUFDTSxNQUFNLENBQUUsQ0FBQztNQUM3QyxDQUFDLENBQUMsQ0FDTEMsS0FBSyxDQUFDLFVBQUNDLEdBQUcsRUFBSztRQUNaQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNwQixDQUFDLENBQUM7SUFDVjtFQUFDO0lBQUFoQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0IsZ0JBQUEsRUFBa0I7TUFDZCxPQUFPLElBQUksQ0FBQ2pCLFlBQVksSUFBQVcsTUFBQSxDQUFLLElBQUksQ0FBQ2pCLE9BQU8sYUFBVSxLQUFLLENBQUM7SUFDN0Q7RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUIsWUFBQSxFQUFjO01BQ1YsT0FBTyxJQUFJLENBQUNsQixZQUFZLElBQUFXLE1BQUEsQ0FBSyxJQUFJLENBQUNqQixPQUFPLGdCQUFhLEtBQUssQ0FBQztJQUNoRTtFQUFDO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvQixRQUFRQyxJQUFJLEVBQUU7TUFDVixPQUFPLElBQUksQ0FBQ3BCLFlBQVksSUFBQVcsTUFBQSxDQUFLLElBQUksQ0FBQ2pCLE9BQU8sYUFBVSxNQUFNLEVBQUUyQixJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUFDQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksaUJBQWlCO1FBQUVDLElBQUksRUFBRUwsSUFBSSxDQUFDTTtNQUFpQixDQUFDLENBQUMsQ0FBQztJQUM1STtFQUFDO0lBQUE1QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNEIsY0FBY1AsSUFBSSxFQUFFO01BQ2hCLE9BQU8sSUFBSSxDQUFDcEIsWUFBWSxJQUFBVyxNQUFBLENBQUssSUFBSSxDQUFDakIsT0FBTyxnQkFBYSxPQUFPLEVBQUUyQixJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUFDQyxJQUFJLEVBQUVILElBQUksQ0FBQ1Esa0JBQWtCO1FBQUVDLEtBQUssRUFBRVQsSUFBSSxDQUFDVTtNQUFpQixDQUFDLENBQUMsQ0FBQztJQUNsSjtFQUFDO0lBQUFoQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0MsV0FBV0MsTUFBTSxFQUFFO01BQ2YsT0FBTyxJQUFJLENBQUNoQyxZQUFZLElBQUFXLE1BQUEsQ0FBSyxJQUFJLENBQUNqQixPQUFPLGFBQUFpQixNQUFBLENBQVVxQixNQUFNLEdBQUksUUFBUSxDQUFDO0lBQzFFO0VBQUM7SUFBQWxDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrQyxhQUFhQyxVQUFVLEVBQUU7TUFDckIsT0FBTyxJQUFJLENBQUNsQyxZQUFZLElBQUFXLE1BQUEsQ0FBSyxJQUFJLENBQUNqQixPQUFPLHVCQUFvQixPQUFPLEVBQUUyQixJQUFJLENBQUNDLFNBQVMsQ0FBQztRQUFDYSxNQUFNLEVBQUVEO01BQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0c7RUFBQztJQUFBcEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFDLFNBQVNKLE1BQU0sRUFBRTtNQUNiLE9BQU8sSUFBSSxDQUFDaEMsWUFBWSxJQUFBVyxNQUFBLENBQUssSUFBSSxDQUFDakIsT0FBTyxhQUFBaUIsTUFBQSxDQUFVcUIsTUFBTSxhQUFVLEtBQUssQ0FBQztJQUM3RTtFQUFDO0lBQUFsQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0MsV0FBV0wsTUFBTSxFQUFFO01BQ2YsT0FBTyxJQUFJLENBQUNoQyxZQUFZLElBQUFXLE1BQUEsQ0FBSyxJQUFJLENBQUNqQixPQUFPLGFBQUFpQixNQUFBLENBQVVxQixNQUFNLGFBQVUsUUFBUSxDQUFDO0lBQ2hGO0VBQUM7SUFBQWxDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1QyxRQUFRTixNQUFNLEVBQUU7TUFDWixPQUFPLElBQUksQ0FBQ2hDLFlBQVksSUFBQVcsTUFBQSxDQUFLLElBQUksQ0FBQ2pCLE9BQU8sYUFBQWlCLE1BQUEsQ0FBVXFCLE1BQU0sR0FBSSxLQUFLLENBQUM7SUFDdkU7RUFBQztFQUFBLE9BQUF4QyxHQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hFZ0JnRCxJQUFJO0VBQ3pCO0VBQ0E7O0VBR0U7RUFDQSxTQUFBQSxLQUFBL0MsSUFBQSxFQUF1Q2dELG9CQUFvQixFQUFFO0lBQUEsSUFBL0NyQixJQUFJLEdBQUEzQixJQUFBLENBQUoyQixJQUFJO01BQUVzQixnQkFBZ0IsR0FBQWpELElBQUEsQ0FBaEJpRCxnQkFBZ0I7SUFBQTlDLGVBQUEsT0FBQTRDLElBQUE7SUFFbEMsSUFBSSxDQUFDRyxLQUFLLEdBQUd2QixJQUFJLENBQUNHLElBQUk7SUFDdEIsSUFBSSxDQUFDcUIsS0FBSyxHQUFHeEIsSUFBSSxDQUFDSyxJQUFJO0lBQ3RCLElBQUksQ0FBQ29CLEdBQUcsR0FBR3pCLElBQUksQ0FBQ3lCLEdBQUc7SUFDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcxQixJQUFJLENBQUMyQixPQUFPOztJQUU1QjtJQUNBLElBQUkzQixJQUFJLENBQUNHLElBQUksS0FBS3lCLFNBQVMsRUFBRTtNQUFDLElBQUksQ0FBQ0wsS0FBSyxHQUFHdkIsSUFBSSxDQUFDSSxpQkFBaUI7SUFBQztJQUNsRSxJQUFJSixJQUFJLENBQUNLLElBQUksS0FBS3VCLFNBQVMsRUFBRTtNQUFDLElBQUksQ0FBQ0osS0FBSyxHQUFHeEIsSUFBSSxDQUFDTSxpQkFBaUI7SUFBQztJQUVsRSxJQUFJLENBQUN1QixhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDVixvQkFBb0IsQ0FBQztJQUNqRSxJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJO0lBRXBCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdYLGdCQUFnQjtFQUUzQztFQUFDN0MsWUFBQSxDQUFBMkMsSUFBQTtJQUFBMUMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdDLFdBQUEsRUFBYTtNQUNYLElBQUksQ0FBQ3FCLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7TUFDdEIsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSTtJQUN0Qjs7SUFFQTtFQUFBO0lBQUF0RCxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBd0QsZ0JBQWdCQyxhQUFhLEVBQUU7TUFDN0IsSUFBSSxDQUFDQyxXQUFXLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLDhCQUE4QixDQUFDO01BQ2pFLElBQUlILGFBQWEsRUFBRSxJQUFJLENBQUNWLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQ0EsUUFBUTtJQUNuRDs7SUFFQTtFQUFBO0lBQUFoRCxHQUFBO0lBQUFDLEtBQUEsRUFFQSxTQUFBNkQsbUJBQW9CQyxTQUFTLEVBQUU7TUFBQSxJQUFBQyxLQUFBO01BQzdCRCxTQUFTLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1ELEtBQUksQ0FBQ1QsaUJBQWlCLENBQUM7VUFBQzVCLElBQUksRUFBRXFDLEtBQUksQ0FBQ2xCLEtBQUs7VUFBRXJCLElBQUksRUFBRXVDLEtBQUksQ0FBQ25CO1FBQUssQ0FBQyxDQUFDO01BQUEsRUFBQztJQUV6Rzs7SUFFQTtFQUFBO0lBQUE3QyxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBaUUsV0FBQSxFQUFhO01BRVgsSUFBSSxDQUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDSCxhQUFhLENBQUNnQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2YsYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BQzlGLElBQU1VLFNBQVMsR0FBRyxJQUFJLENBQUNULFFBQVEsQ0FBQ0QsYUFBYSxDQUFDLGtCQUFrQixDQUFDO01BQ2pFVSxTQUFTLENBQUNNLEtBQUssQ0FBQ0MsZUFBZSxXQUFBekQsTUFBQSxDQUFXLElBQUksQ0FBQ2lDLEtBQUssT0FBSTtNQUN4RCxJQUFNeUIsUUFBUSxHQUFHLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQy9Ea0IsUUFBUSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDM0IsS0FBSztNQUNqQyxJQUFJLENBQUNjLFdBQVcsR0FBRyxJQUFJLENBQUNMLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDLHdCQUF3QixDQUFDOztNQUV4RTtNQUNBLElBQUksQ0FBQ1Msa0JBQWtCLENBQUNDLFNBQVMsQ0FBQzs7TUFFbEM7TUFDQSxJQUFNVSxhQUFhLEdBQUcsSUFBSSxDQUFDZCxXQUFXLENBQUNDLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLDhCQUE4QixDQUFDO01BRXpGLElBQUksSUFBSSxDQUFDMUIsUUFBUSxFQUFFO1FBQ2pCLElBQUksQ0FBQ3lCLGFBQWEsRUFBRSxJQUFJLENBQUNoQixlQUFlLENBQUMsS0FBSyxDQUFDO01BQ2pEO01BQ0E7TUFBQSxLQUNLO1FBQ0gsSUFBSWdCLGFBQWEsRUFBRSxJQUFJLENBQUNoQixlQUFlLENBQUMsS0FBSyxDQUFDO01BQ2hEOztNQUVBO01BQ0EsT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7O0lBRUE7RUFBQTtJQUFBdEQsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQTBFLFlBQUEsRUFBYztNQUNaLElBQU1DLFFBQVEsR0FBRztRQUNibkQsSUFBSSxFQUFFLElBQUksQ0FBQ29CLEtBQUs7UUFDaEJsQixJQUFJLEVBQUUsSUFBSSxDQUFDbUIsS0FBSztRQUNoQitCLEVBQUUsRUFBRSxJQUFJLENBQUM5QixHQUFHO1FBQ1pFLE9BQU8sRUFBRSxJQUFJLENBQUNEO01BQ2xCLENBQUM7TUFDRCxPQUFPNEIsUUFBUTtJQUNqQjtFQUFDO0VBQUEsT0FBQWxDLElBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0VHb0MsYUFBYTtFQUNqQjtFQUNBLFNBQUFBLGNBQVlDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0lBQUFsRixlQUFBLE9BQUFnRixhQUFBO0lBQy9CLElBQUksQ0FBQ0csY0FBYyxHQUFHRixNQUFNLENBQUNHLGFBQWE7SUFDMUMsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0osTUFBTSxDQUFDSyxvQkFBb0I7SUFDeEQsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR04sTUFBTSxDQUFDTyxtQkFBbUI7SUFDckQsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR1IsTUFBTSxDQUFDUyxlQUFlLEVBQzVDLElBQUksQ0FBQ0MsV0FBVyxHQUFHVixNQUFNLENBQUNXLFVBQVc7SUFFeEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdYLFdBQVc7SUFFL0IsSUFBSSxDQUFDWSxVQUFVLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUMxQixJQUFJLENBQUNILFlBQVksQ0FBQ0ksZ0JBQWdCLENBQUMsSUFBSSxDQUFDZCxjQUFjLENBQ3hELENBQUM7SUFDRCxJQUFJLENBQUNlLGFBQWEsR0FBRyxJQUFJLENBQUNMLFlBQVksQ0FBQ3RDLGFBQWEsQ0FDbEQsSUFBSSxDQUFDOEIscUJBQ1AsQ0FBQztFQUNIOztFQUVBO0VBQUFwRixZQUFBLENBQUErRSxhQUFBO0lBQUE5RSxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBZ0csV0FBV0MsT0FBTyxFQUFFQyxPQUFPLEVBQUU7TUFDM0JBLE9BQU8sQ0FBQ3ZDLFNBQVMsQ0FBQ3dDLEdBQUcsQ0FBQyxJQUFJLENBQUNiLGdCQUFnQixDQUFDO01BQzVDVyxPQUFPLENBQUMxQixXQUFXLEdBQUcyQixPQUFPLENBQUNFLGlCQUFpQjtNQUMvQ0gsT0FBTyxDQUFDdEMsU0FBUyxDQUFDd0MsR0FBRyxDQUFDLElBQUksQ0FBQ1gsV0FBVyxDQUFDO0lBQ3pDOztJQUVBO0VBQUE7SUFBQXpGLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFxRyxXQUFXSixPQUFPLEVBQUVDLE9BQU8sRUFBRTtNQUMzQkEsT0FBTyxDQUFDdkMsU0FBUyxDQUFDSixNQUFNLENBQUMsSUFBSSxDQUFDK0IsZ0JBQWdCLENBQUM7TUFDL0NXLE9BQU8sQ0FBQ3RDLFNBQVMsQ0FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQ2lDLFdBQVcsQ0FBQztNQUMxQ1MsT0FBTyxDQUFDMUIsV0FBVyxHQUFHLEVBQUU7SUFDMUI7RUFBQztJQUFBeEUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNHLGdCQUFnQkosT0FBTyxFQUFFO01BQ3ZCLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDSyxRQUFRLENBQUNDLEtBQUs7SUFDaEM7RUFBQztJQUFBekcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlHLG9CQUFvQlAsT0FBTyxFQUFFO01BQzNCO01BQ0EsSUFBTUQsT0FBTyxHQUFHLElBQUksQ0FBQ1AsWUFBWSxDQUFDdEMsYUFBYSxLQUFBeEMsTUFBQSxDQUFLc0YsT0FBTyxDQUFDdEIsRUFBRSxXQUFRLENBQUMsQ0FBQyxDQUFDO01BQ3pFLElBQUksSUFBSSxDQUFDMEIsZUFBZSxDQUFDSixPQUFPLENBQUMsRUFBRTtRQUNqQztRQUNBLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQztNQUNuQyxDQUFDLE1BQU07UUFDTDtRQUNBLElBQUksQ0FBQ0csVUFBVSxDQUFDSixPQUFPLEVBQUVDLE9BQU8sQ0FBQztNQUNuQztJQUNGO0VBQUM7SUFBQW5HLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwRyxhQUFBLEVBQWU7TUFDYjs7TUFFQSxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO1FBQzVCO1FBQ0EsSUFBSSxDQUFDWixhQUFhLENBQUNhLFFBQVEsR0FBRyxJQUFJO1FBQ2xDLElBQUksQ0FBQ2IsYUFBYSxDQUFDcEMsU0FBUyxDQUFDd0MsR0FBRyxDQUFDLElBQUksQ0FBQ2Ysb0JBQW9CLENBQUM7TUFDN0QsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDVyxhQUFhLENBQUNhLFFBQVEsR0FBRyxLQUFLO1FBQ25DLElBQUksQ0FBQ2IsYUFBYSxDQUFDcEMsU0FBUyxDQUFDSixNQUFNLENBQUMsSUFBSSxDQUFDNkIsb0JBQW9CLENBQUM7TUFDaEU7SUFDRjs7SUFFQTtFQUFBO0lBQUFyRixHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBMkcsa0JBQUEsRUFBb0I7TUFBQSxJQUFBNUMsS0FBQTtNQUNsQixPQUFPLElBQUksQ0FBQzRCLFVBQVUsQ0FBQ2tCLElBQUksQ0FBQyxVQUFDWCxPQUFPO1FBQUEsT0FBS25DLEtBQUksQ0FBQ3VDLGVBQWUsQ0FBQ0osT0FBTyxDQUFDO01BQUEsRUFBQztJQUN6RTtFQUFDO0lBQUFuRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkQsbUJBQUEsRUFBcUI7TUFBQSxJQUFBaUQsTUFBQTtNQUNuQjtNQUNBLElBQUksQ0FBQ25CLFVBQVUsQ0FBQ29CLE9BQU8sQ0FBQyxVQUFDYixPQUFPLEVBQUs7UUFDbkNBLE9BQU8sQ0FBQ2xDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1VBQ3RDO1VBQ0E4QyxNQUFJLENBQUNMLG1CQUFtQixDQUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDO1VBQ25DO1VBQ0FZLE1BQUksQ0FBQ0osWUFBWSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7RUFBQTtJQUFBM0csR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQWdILGlCQUFBLEVBQW1CO01BQ2pCLElBQUksQ0FBQ3RCLFlBQVksQ0FBQzFCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDaUQsR0FBRyxFQUFLO1FBQ3BEQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLENBQUMsQ0FBQztNQUNGO01BQ0EsSUFBSSxDQUFDckQsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0I7O0lBRUE7RUFBQTtJQUFBOUQsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQW1ILHNCQUFBLEVBQXdCO01BQUEsSUFBQUMsTUFBQTtNQUN0QixJQUFJLENBQUN6QixVQUFVLENBQUNvQixPQUFPLENBQUMsVUFBQ2IsT0FBTyxFQUFLO1FBQ25DLElBQU1ELE9BQU8sR0FBR21CLE1BQUksQ0FBQzFCLFlBQVksQ0FBQ3RDLGFBQWEsS0FBQXhDLE1BQUEsQ0FBS3NGLE9BQU8sQ0FBQ3RCLEVBQUUsV0FBUSxDQUFDO1FBQ3ZFd0MsTUFBSSxDQUFDZixVQUFVLENBQUNKLE9BQU8sRUFBRUMsT0FBTyxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBckIsYUFBQTtBQUFBLEtBR0g7QUFDQSxpRUFBZUEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRzVCO0FBQUEsSUFFcUJ3QyxLQUFLO0VBQ3RCLFNBQUFBLE1BQVlDLGFBQWEsRUFBRTtJQUFBekgsZUFBQSxPQUFBd0gsS0FBQTtJQUN2QixJQUFJLENBQUNFLE1BQU0sR0FBR3BFLFFBQVEsQ0FBQ3FFLGNBQWMsSUFBQTVHLE1BQUEsQ0FBSTBHLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUNHLFFBQVEsR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUMzRDtJQUNBLElBQUksQ0FBQ3NFLFlBQVksR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ25FLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDOUQsSUFBSSxDQUFDdUUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBQ0csbUJBQW1CLEdBQUcsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDcEU7RUFBQzlILFlBQUEsQ0FBQXVILEtBQUE7SUFBQXRILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnSSxLQUFBLEVBQU87TUFDSDtNQUNBLElBQUksQ0FBQ1QsTUFBTSxDQUFDNUQsU0FBUyxDQUFDd0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO01BQ3BELElBQUksQ0FBQ3NCLFFBQVEsQ0FBQzlELFNBQVMsQ0FBQ3dDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztNQUNwRCxJQUFJLENBQUM4QixpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCO0VBQUM7SUFBQWxJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4SCxNQUFBLEVBQVE7TUFDSjtNQUNBLElBQUksQ0FBQ1AsTUFBTSxDQUFDNUQsU0FBUyxDQUFDSixNQUFNLENBQUMseUJBQXlCLENBQUM7TUFDdkQsSUFBSSxDQUFDa0UsUUFBUSxDQUFDOUQsU0FBUyxDQUFDSixNQUFNLENBQUMsdUJBQXVCLENBQUM7TUFDdkQsSUFBSSxDQUFDMkUsb0JBQW9CLENBQUMsQ0FBQztJQUMvQjtFQUFDO0lBQUFuSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkgsaUJBQWlCUSxLQUFLLEVBQUU7TUFDcEI7TUFDQSxJQUFJQSxLQUFLLENBQUNwSSxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQ3hCLElBQUksQ0FBQytILEtBQUssQ0FBQyxDQUFDO01BQ2hCO0lBQ0o7RUFBQztJQUFBL0gsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStILG9CQUFBLEVBQXVCO01BQ25CLElBQUksSUFBSSxDQUFDTixRQUFRLENBQUM5RCxTQUFTLENBQUNjLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1FBQzNELElBQUksQ0FBQ3FELEtBQUssQ0FBQyxDQUFDO01BQ2hCO01BQUM7SUFDTDs7SUFHQTtFQUFBO0lBQUEvSCxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBaUksa0JBQUEsRUFBb0I7TUFFaEI7TUFDQSxJQUFJLENBQUNQLFlBQVksQ0FBQzFELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM2RCxNQUFNLENBQUM7O01BRXhEO01BQ0ExRSxRQUFRLENBQUNhLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMyRCxnQkFBZ0IsQ0FBQzs7TUFFM0Q7TUFDQSxJQUFJLENBQUNGLFFBQVEsQ0FBQ3pELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMrRCxtQkFBbUIsQ0FBQztJQUVyRTtFQUFDO0lBQUFoSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0kscUJBQUEsRUFBdUI7TUFFbkIsSUFBSSxDQUFDUixZQUFZLENBQUNVLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNQLE1BQU0sQ0FBQztNQUMzRDFFLFFBQVEsQ0FBQ2lGLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNULGdCQUFnQixDQUFDO01BQzlELElBQUksQ0FBQ0YsUUFBUSxDQUFDVyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDTCxtQkFBbUIsQ0FBQztJQUV4RTtFQUFDO0VBQUEsT0FBQVYsS0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1QjtBQUFBLElBRVBnQixhQUFhLDBCQUFBQyxNQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxNQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFDaEMsU0FBQUEsY0FBQTNJLElBQUEsRUFBaUQ7SUFBQSxJQUFBcUUsS0FBQTtJQUFBLElBQW5DdUQsYUFBYSxHQUFBNUgsSUFBQSxDQUFiNEgsYUFBYTtNQUFFb0IsZ0JBQWdCLEdBQUFoSixJQUFBLENBQWhCZ0osZ0JBQWdCO0lBQUE3SSxlQUFBLE9BQUF3SSxhQUFBO0lBQzNDOztJQUVBdEUsS0FBQSxHQUFBeUUsTUFBQSxDQUFBRyxJQUFBLE9BQU1yQixhQUFhLEVBQUUsQ0FBQzs7SUFFdEJ2RCxLQUFBLENBQUs2RSxVQUFVLEdBQUc3RSxLQUFBLENBQUt3RCxNQUFNLENBQUNuRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7SUFFdERXLEtBQUEsQ0FBSzhFLGlCQUFpQixHQUFHSCxnQkFBZ0I7SUFFekMzRSxLQUFBLENBQUsrRSxPQUFPLEdBQUcvRSxLQUFBLENBQUs2RSxVQUFVLENBQUM5QyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7SUFFL0QvQixLQUFBLENBQUtnRixhQUFhLEdBQUdoRixLQUFBLENBQUtnRixhQUFhLENBQUNuQixJQUFJLENBQUFvQixzQkFBQSxDQUFBakYsS0FBQSxDQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUEsT0FBQUEsS0FBQTtFQUV0RDtFQUFDakUsWUFBQSxDQUFBdUksYUFBQTtJQUFBdEksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThILE1BQUEsRUFBUTtNQUNOLElBQUksQ0FBQ2MsVUFBVSxDQUFDSyxLQUFLLENBQUMsQ0FBQztNQUN2QkMsSUFBQSxDQUFBQyxlQUFBLENBQUFkLGFBQUEsQ0FBQWUsU0FBQSxrQkFBQVQsSUFBQSxPQUFjLENBQUM7SUFDakI7O0lBRUE7RUFBQTtJQUFBNUksR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQStJLGNBQWM5QixHQUFHLEVBQUU7TUFDakJBLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDcEIsSUFBSSxDQUFDMkIsaUJBQWlCLENBQUMsSUFBSSxDQUFDUSxlQUFlLENBQUMsQ0FBQyxDQUFDO01BQzlDLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQyxDQUFDO0lBQ2Q7RUFBQztJQUFBL0gsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFKLGdCQUFBLEVBQWtCO01BQ2hCO01BQ0EsSUFBTUMsUUFBUSxHQUFHLENBQUMsQ0FBQztNQUNuQixJQUFJLENBQUNSLE9BQU8sQ0FBQy9CLE9BQU8sQ0FBQyxVQUFDd0MsS0FBSyxFQUFLO1FBQzlCRCxRQUFRLENBQUNDLEtBQUssQ0FBQzNFLEVBQUUsQ0FBQyxHQUFHMkUsS0FBSyxDQUFDdkosS0FBSztNQUNsQyxDQUFDLENBQUM7TUFDRixPQUFPc0osUUFBUTtJQUNqQjtFQUFDO0lBQUF2SixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUksa0JBQUEsRUFBb0I7TUFDbEI7TUFDQSxJQUFJLENBQUNXLFVBQVUsQ0FBQzVFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMrRSxhQUFhLENBQUM7O01BRTlEO01BQ0FHLElBQUEsQ0FBQUMsZUFBQSxDQUFBZCxhQUFBLENBQUFlLFNBQUEsOEJBQUFULElBQUE7SUFDRjtFQUFDO0lBQUE1SSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0kscUJBQUEsRUFBdUI7TUFDckI7TUFDQSxJQUFJLENBQUNVLFVBQVUsQ0FBQ1IsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1csYUFBYSxDQUFDOztNQUVqRTtNQUNBRyxJQUFBLENBQUFDLGVBQUEsQ0FBQWQsYUFBQSxDQUFBZSxTQUFBLGlDQUFBVCxJQUFBO0lBQ0Y7RUFBQztFQUFBLE9BQUFOLGFBQUE7QUFBQSxFQW5Ed0NoQiw4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQjtBQUFBLElBRVBtQyxjQUFjLDBCQUFBbEIsTUFBQTtFQUFBQyxTQUFBLENBQUFpQixjQUFBLEVBQUFsQixNQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFlLGNBQUE7RUFDL0IsU0FBQUEsZUFBWWxDLGFBQWEsRUFBRTtJQUFBLElBQUF2RCxLQUFBO0lBQUFsRSxlQUFBLE9BQUEySixjQUFBO0lBQ3ZCekYsS0FBQSxHQUFBeUUsTUFBQSxDQUFBRyxJQUFBLE9BQU1yQixhQUFhO0lBQ25CdkQsS0FBQSxDQUFLMEYsTUFBTSxHQUFHMUYsS0FBQSxDQUFLd0QsTUFBTSxDQUFDbkUsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUN4RFcsS0FBQSxDQUFLMkYsYUFBYSxHQUFHM0YsS0FBQSxDQUFLd0QsTUFBTSxDQUFDbkUsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQUMsT0FBQVcsS0FBQTtFQUM1RTs7RUFFQTtFQUFBakUsWUFBQSxDQUFBMEosY0FBQTtJQUFBekosR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQWdJLEtBQUszRyxJQUFJLEVBQUU7TUFDUCxJQUFJLENBQUNvSSxNQUFNLENBQUNFLEdBQUcsR0FBRXRJLElBQUksQ0FBQ0ssSUFBSTtNQUMxQixJQUFJLENBQUNnSSxhQUFhLENBQUNuRixXQUFXLEdBQUdsRCxJQUFJLENBQUNHLElBQUk7TUFDMUMsSUFBSSxDQUFDaUksTUFBTSxDQUFDRyxHQUFHLEdBQUV2SSxJQUFJLENBQUNHLElBQUk7TUFDMUIwSCxJQUFBLENBQUFDLGVBQUEsQ0FBQUssY0FBQSxDQUFBSixTQUFBLGlCQUFBVCxJQUFBO0lBQ0o7RUFBQztFQUFBLE9BQUFhLGNBQUE7QUFBQSxFQWJ1Q25DLDhDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGNUJ3QyxPQUFPO0VBQ3hCLFNBQUFBLFFBQUFuSyxJQUFBLEVBQW1DO0lBQUEsSUFBckJvSyxRQUFRLEdBQUFwSyxJQUFBLENBQVJvSyxRQUFRO01BQUVDLFFBQVEsR0FBQXJLLElBQUEsQ0FBUnFLLFFBQVE7SUFBQWxLLGVBQUEsT0FBQWdLLE9BQUE7SUFBSztJQUNqQyxJQUFJLENBQUNHLFNBQVMsR0FBR0YsUUFBUTtJQUN6QixJQUFJLENBQUN6RyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxJQUFBeEMsTUFBQSxDQUFJbUosUUFBUSxDQUFFLENBQUM7RUFDekQ7RUFBQ2pLLFlBQUEsQ0FBQStKLE9BQUE7SUFBQTlKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpSyxZQUFZQyxLQUFLLEVBQUU7TUFBQSxJQUFBbkcsS0FBQTtNQUFFO01BQ2pCO01BQ0FtRyxLQUFLLENBQUNuRCxPQUFPLENBQUMsVUFBQW9ELElBQUksRUFBSTtRQUNsQnBHLEtBQUksQ0FBQ2lHLFNBQVMsQ0FBQ0csSUFBSSxDQUFDO01BQ3hCLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXBLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvSyxRQUFRRCxJQUFJLEVBQUVFLFlBQVksRUFBRTtNQUV4QixJQUFJQSxZQUFZLEVBQUU7UUFDZCxJQUFJLENBQUNoSCxRQUFRLENBQUNpSCxNQUFNLENBQUNILElBQUksQ0FBQyxFQUFDO01BQy9CLENBQUMsTUFDSTtRQUNELElBQUksQ0FBQzlHLFFBQVEsQ0FBQ2tILE9BQU8sQ0FBQ0osSUFBSSxDQUFDO01BQy9CO0lBQ0o7RUFBQztFQUFBLE9BQUFOLE9BQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDckJnQlcsUUFBUTtFQUN6QixTQUFBQSxTQUFBOUssSUFBQSxFQUFtQztJQUFBLElBQXJCOEIsSUFBSSxHQUFBOUIsSUFBQSxDQUFKOEIsSUFBSTtNQUFFaUosR0FBRyxHQUFBL0ssSUFBQSxDQUFIK0ssR0FBRztNQUFFckksTUFBTSxHQUFBMUMsSUFBQSxDQUFOMEMsTUFBTTtJQUFBdkMsZUFBQSxPQUFBMkssUUFBQTtJQUFNO0lBQ2pDLElBQUksQ0FBQzVILEtBQUssR0FBR08sUUFBUSxDQUFDcUUsY0FBYyxJQUFBNUcsTUFBQSxDQUFJWSxJQUFJLENBQUUsQ0FBQztJQUMvQyxJQUFJLENBQUNrSixJQUFJLEdBQUd2SCxRQUFRLENBQUNxRSxjQUFjLElBQUE1RyxNQUFBLENBQUk2SixHQUFHLENBQUUsQ0FBQztJQUM3QyxJQUFJLENBQUNFLE9BQU8sR0FBR3hILFFBQVEsQ0FBQ3FFLGNBQWMsSUFBQTVHLE1BQUEsQ0FBSXdCLE1BQU0sQ0FBRSxDQUFDO0VBQ3ZEO0VBQUN0QyxZQUFBLENBQUEwSyxRQUFBO0lBQUF6SyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUIsWUFBQSxFQUFjO01BQ1YsSUFBTXlKLElBQUksR0FBRztRQUNUcEosSUFBSSxFQUFFLElBQUksQ0FBQ29CLEtBQUssQ0FBQzJCLFdBQVc7UUFDNUJrRyxHQUFHLEVBQUUsSUFBSSxDQUFDQyxJQUFJLENBQUNuRyxXQUFXO1FBQzFCbkMsTUFBTSxFQUFFLElBQUksQ0FBQ3VJO01BQ2pCLENBQUM7TUFDRCxPQUFPQyxJQUFJO0lBQ2Y7RUFBQztJQUFBN0ssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZLLFlBQVlDLFFBQVEsRUFBRUMsT0FBTyxFQUFFNUksVUFBVSxFQUFFO01BQ3ZDLElBQUksQ0FBQ1MsS0FBSyxDQUFDMkIsV0FBVyxHQUFHdUcsUUFBUTtNQUNqQyxJQUFJLENBQUNKLElBQUksQ0FBQ25HLFdBQVcsR0FBR3dHLE9BQU87TUFDL0IsSUFBSTVJLFVBQVUsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDd0ksT0FBTyxDQUFDaEIsR0FBRyxHQUFHeEgsVUFBVTtJQUN6RDtFQUFDO0lBQUFwQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0wsVUFBVTdJLFVBQVUsRUFBRTtNQUNsQixJQUFJLENBQUN3SSxPQUFPLENBQUNoQixHQUFHLEdBQUd4SCxVQUFVO0lBQ2pDO0VBQUM7RUFBQSxPQUFBcUksUUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJFLElBQU1TLFNBQVMsR0FBRztFQUNyQkMsV0FBVyxFQUFFLFdBQVc7RUFDeEJDLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUJDLFlBQVksRUFBRTtBQUNsQixDQUFDO0FBRU0sSUFBTUMsT0FBTyxHQUFHbEksUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7O0FDTmhFOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCOztBQUVyQjtBQUN3RDtBQUNsQjtBQUVNO0FBQ2M7QUFDRjtBQUNWO0FBRVY7QUFFb0I7O0FBR3hEOztBQUVBLElBQU1rSSxHQUFHLEdBQUcsSUFBSTdMLHVEQUFHLENBQUM7RUFDbEJFLE9BQU8sRUFBRSxpREFBaUQ7RUFDMURDLE9BQU8sRUFBRTtJQUNQMkwsYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUM7O0FBRUY7O0FBRUEsSUFBTUwsV0FBVyxHQUFHLElBQUlyQiwyREFBTyxDQUFDO0VBQzlCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ3pJLElBQUk7SUFBQSxPQUFLbUssVUFBVSxDQUFDbkssSUFBSSxFQUFFLElBQUksQ0FBQztFQUFBO0VBQzFDMEksUUFBUSxFQUFFa0IsdURBQVMsQ0FBQ0M7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsU0FBU00sVUFBVUEsQ0FBQ25LLElBQUksRUFBRWdKLFlBQVksRUFBRTtFQUN0QyxJQUFNb0IsSUFBSSxHQUFHLElBQUloSix3REFBSSxDQUNuQjtJQUNFcEIsSUFBSSxFQUFKQSxJQUFJO0lBQ0pzQixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQytJLE9BQU8sRUFBSztNQUM3QkMsZ0JBQWdCLENBQUMzRCxJQUFJLENBQUMwRCxPQUFPLENBQUM7SUFDaEM7RUFDRixDQUFDLEVBQ0RULHVEQUFTLENBQUNFLFlBQ1osQ0FBQztFQUNELElBQU1TLFFBQVEsR0FBR0gsSUFBSSxDQUFDeEgsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUVwQ2lILFdBQVcsQ0FBQ2QsT0FBTyxDQUFDd0IsUUFBUSxFQUFHdkIsWUFBWSxDQUFDOztFQUU1QztFQUNBdUIsUUFBUSxDQUFDeEksYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUFBLE9BQU02SCx1QkFBdUIsQ0FBQ0osSUFBSSxDQUFDO0VBQUEsRUFBQzs7RUFFaEg7RUFDQUcsUUFBUSxDQUFDeEksYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUFBLE9BQU04SCxlQUFlLENBQUNMLElBQUksQ0FBQztFQUFBLEVBQUM7QUFFekc7O0FBRUE7O0FBRUFILEdBQUcsQ0FBQ3BLLGVBQWUsQ0FBQyxDQUFDLENBQUNaLElBQUksQ0FBQyxVQUFDZSxJQUFJLEVBQUs7RUFDakMsSUFBSSxPQUFPQSxJQUFJLEtBQUssV0FBVyxFQUFFNkosV0FBVyxDQUFDakIsV0FBVyxDQUFDNUksSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUNGLENBQUM7O0FBR0Q7O0FBRUEsSUFBTTBLLGFBQWEsR0FBRzVJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQ3BFLElBQU00SSxtQkFBbUIsR0FBRzdJLFFBQVEsQ0FBQ3FFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztBQUUxRSxJQUFNeUUsWUFBWSxHQUFHLElBQUk1RCxpRUFBYSxDQUFDO0VBQ3JDZixhQUFhLEVBQUUsV0FBVztFQUMxQm9CLGdCQUFnQixFQUFFLFNBQUFBLGlCQUFDd0QsTUFBTSxFQUFLO0lBQzVCRixtQkFBbUIsQ0FBQ3pILFdBQVcsR0FBRyxXQUFXO0lBQzdDK0csR0FBRyxDQUFDbEssT0FBTyxDQUFDOEssTUFBTSxDQUFDLENBQ2hCNUwsSUFBSSxDQUFDLFVBQUM2TCxPQUFPLEVBQUs7TUFDakJYLFVBQVUsQ0FBQ1csT0FBTyxFQUFFLEtBQUssQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLFlBQU07TUFDYkosbUJBQW1CLENBQUN6SCxXQUFXLEdBQUcsUUFBUTtJQUM1QyxDQUFDLENBQUM7RUFFTjtBQUNGLENBQUMsQ0FBQztBQUVGd0gsYUFBYSxDQUFDL0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNUNxSSxnQkFBZ0IsQ0FBQ2xGLHFCQUFxQixDQUFDLENBQUM7RUFDeEM4RSxZQUFZLENBQUNqRSxJQUFJLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7O0FBRUY7O0FBR0EsU0FBUzZELHVCQUF1QkEsQ0FBQ0osSUFBSSxFQUFFO0VBRXJDLElBQU1hLDJCQUEyQixHQUFHLElBQUlqRSxpRUFBYSxDQUFDO0lBQ3BEZixhQUFhLEVBQUUsMEJBQTBCO0lBQ3pDb0IsZ0JBQWdCLEVBQUUsU0FBQUEsaUJBQUEsRUFBTTtNQUN0QjtNQUNBNEMsR0FBRyxDQUFDdEosVUFBVSxDQUFDeUosSUFBSSxDQUFDL0csV0FBVyxDQUFDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDO01BQ3JDNkcsSUFBSSxDQUFDekosVUFBVSxDQUFDLENBQUM7SUFDbkI7RUFDRixDQUFDLENBQUM7RUFFRnNLLDJCQUEyQixDQUFDdEUsSUFBSSxDQUFDLENBQUM7QUFDcEM7O0FBRUE7O0FBR0EsU0FBUzhELGVBQWVBLENBQUNMLElBQUksRUFBRTtFQUM3QjtFQUNBLElBQUlBLElBQUksQ0FBQy9HLFdBQVcsQ0FBQyxDQUFDLENBQUMxQixPQUFPLEVBQUU7SUFBRTtJQUNoQ3NJLEdBQUcsQ0FBQ2hKLFVBQVUsQ0FBQ21KLElBQUksQ0FBQy9HLFdBQVcsQ0FBQyxDQUFDLENBQUNFLEVBQUUsQ0FBQztFQUN2QztFQUNBO0VBQUEsS0FDSztJQUNIMEcsR0FBRyxDQUFDakosUUFBUSxDQUFDb0osSUFBSSxDQUFDL0csV0FBVyxDQUFDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDO0VBQ3JDO0VBRUE2RyxJQUFJLENBQUNqSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5Qjs7QUFFQTs7QUFFQSxJQUFNK0ksa0JBQWtCLEdBQUcsSUFBSS9CLDREQUFRLENBQUM7RUFDdENoSixJQUFJLEVBQUUsc0JBQXNCO0VBQzVCaUosR0FBRyxFQUFFLHFCQUFxQjtFQUMxQnJJLE1BQU0sRUFBRTtBQUNWLENBQUMsQ0FBQztBQUVGa0osR0FBRyxDQUFDbkssV0FBVyxDQUFDLENBQUMsQ0FBQ2IsSUFBSSxDQUFDLFVBQUNlLElBQUksRUFBSztFQUM3QmtMLGtCQUFrQixDQUFDMUIsV0FBVyxDQUFDeEosSUFBSSxDQUFDRyxJQUFJLEVBQUVILElBQUksQ0FBQ1MsS0FBSyxFQUFFVCxJQUFJLENBQUNlLE1BQU0sQ0FBQztBQUNwRSxDQUNGLENBQUM7O0FBR0Q7O0FBRUEsSUFBTW9LLHVCQUF1QixHQUFHckosUUFBUSxDQUFDcUUsY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBRXJGLElBQU1pRixnQkFBZ0IsR0FBRyxJQUFJcEUsaUVBQWEsQ0FBQztFQUN6Q2YsYUFBYSxFQUFFLGVBQWU7RUFDOUJvQixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQ3JILElBQUksRUFBSztJQUMxQm1MLHVCQUF1QixDQUFDakksV0FBVyxHQUFHLFdBQVc7SUFDakQrRyxHQUFHLENBQUMxSixhQUFhLENBQUNQLElBQUksQ0FBQyxDQUNwQmYsSUFBSSxDQUFDLFVBQUM0TCxNQUFNLEVBQUs7TUFDaEJLLGtCQUFrQixDQUFDMUIsV0FBVyxDQUM1QnFCLE1BQU0sQ0FBQzFLLElBQUksRUFDWDBLLE1BQU0sQ0FBQ3BLLEtBQ1QsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUNEc0ssT0FBTyxDQUFDLFlBQU07TUFDYkksdUJBQXVCLENBQUNqSSxXQUFXLEdBQUcsTUFBTTtJQUM5QyxDQUFDLENBQUM7RUFFTjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU1tSSxpQkFBaUIsR0FBR3ZKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRXpFc0osaUJBQWlCLENBQUMxSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRDJJLGlCQUFpQixDQUFDeEYscUJBQXFCLENBQUMsQ0FBQztFQUN6Q3lGLGtCQUFrQixDQUFDLENBQUM7RUFDcEJILGdCQUFnQixDQUFDekUsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDOztBQUVGOztBQUVBLElBQU02RSxnQkFBZ0IsR0FBRzFKLFFBQVEsQ0FBQ3FFLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztBQUN0RSxJQUFNc0YsUUFBUSxHQUFHM0osUUFBUSxDQUFDcUUsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0FBRTdELFNBQVNvRixrQkFBa0JBLENBQUEsRUFBRztFQUM1QixJQUFNRyxXQUFXLEdBQUdSLGtCQUFrQixDQUFDcEwsV0FBVyxDQUFDLENBQUM7RUFDcEQwTCxnQkFBZ0IsQ0FBQzdNLEtBQUssR0FBRytNLFdBQVcsQ0FBQ3ZMLElBQUk7RUFDekNzTCxRQUFRLENBQUM5TSxLQUFLLEdBQUcrTSxXQUFXLENBQUN0QyxHQUFHO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNdUMsa0JBQWtCLEdBQUc3SixRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUM1RSxJQUFNNkosZUFBZSxHQUFHOUosUUFBUSxDQUFDcUUsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BFLElBQU0wRix3QkFBd0IsR0FBRy9KLFFBQVEsQ0FBQ3FFLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztBQUdoRixJQUFNMkYsaUJBQWlCLEdBQUcsSUFBSTlFLGlFQUFhLENBQUM7RUFDMUNmLGFBQWEsRUFBRSxxQkFBcUI7RUFDcENvQixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQ3JILElBQUksRUFBSztJQUMxQjZMLHdCQUF3QixDQUFDM0ksV0FBVyxHQUFHLFdBQVc7SUFDbEQrRyxHQUFHLENBQUNwSixZQUFZLENBQUNiLElBQUksQ0FBQytMLGlCQUFpQixDQUFDLENBQ3JDOU0sSUFBSSxDQUFDLFlBQU07TUFDVmlNLGtCQUFrQixDQUFDdkIsU0FBUyxDQUFDM0osSUFBSSxDQUFDK0wsaUJBQWlCLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQ0RoQixPQUFPLENBQUMsWUFBTTtNQUNiYyx3QkFBd0IsQ0FBQzNJLFdBQVcsR0FBRyxNQUFNO0lBQy9DLENBQUMsQ0FBQztFQUVOO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsU0FBUzhJLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQzNCLElBQU1OLFdBQVcsR0FBR1Isa0JBQWtCLENBQUNwTCxXQUFXLENBQUMsQ0FBQztFQUNwRDhMLGVBQWUsQ0FBQ2pOLEtBQUssR0FBRytNLFdBQVcsQ0FBQzNLLE1BQU0sQ0FBQ3VILEdBQUc7QUFDaEQ7QUFFQXFELGtCQUFrQixDQUFDaEosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDakRoRCxPQUFPLENBQUNzTSxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFDaEM7RUFDQUQsaUJBQWlCLENBQUMsQ0FBQztFQUNuQkYsaUJBQWlCLENBQUNuRixJQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7O0FBRUY7O0FBRUEsSUFBTTJELGdCQUFnQixHQUFHLElBQUluQyxrRUFBYyxDQUFDeUIsdURBQVMsQ0FBQ0csWUFBWSxDQUFDOztBQUVuRTs7QUFFQSxJQUFNbUMsT0FBTyxHQUFHcEssUUFBUSxDQUFDcUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQ3pELElBQU1nRyxXQUFXLEdBQUdySyxRQUFRLENBQUNxRSxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFFaEUsSUFBTWlHLG9CQUFvQixHQUFHO0VBQzNCeEksYUFBYSxFQUFFLGNBQWM7RUFDN0JFLG9CQUFvQixFQUFFLGVBQWU7RUFBRTtFQUN2Q0UsbUJBQW1CLEVBQUUsdUJBQXVCO0VBQUU7RUFDOUNFLGVBQWUsRUFBRSx3QkFBd0I7RUFDekNFLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFRCxJQUFNNEcsZ0JBQWdCLEdBQUcsSUFBSXhILGlFQUFhLENBQUM0SSxvQkFBb0IsRUFBRUYsT0FBTyxDQUFDO0FBQ3pFbEIsZ0JBQWdCLENBQUNyRixnQkFBZ0IsQ0FBQyxDQUFDO0FBRW5DLElBQU0yRixpQkFBaUIsR0FBRyxJQUFJOUgsaUVBQWEsQ0FBQzRJLG9CQUFvQixFQUFFRCxXQUFXLENBQUM7QUFDOUViLGlCQUFpQixDQUFDM0YsZ0JBQWdCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fyb3VuZC10aGUtdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcm91bmQtdGhlLXVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJvdW5kLXRoZS11cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICAgIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVyc30pIHtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybCxcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyc1xuICAgIH1cblxuICAgIF9oYW5kbGVGZXRjaCAoZGVzdGluYXRpb25VcmwsIG1ldGhvZCwgYm9keSkge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChkZXN0aW5hdGlvblVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdEYXRhIGZyb20gQVBJOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIHNlcnZlciByZXR1cm5zIGFuIGVycm9yLCByZWplY3QgdGhlIHByb21pc2VcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIGxvZyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzYCwgXCJHRVRcIik7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIFwiR0VUXCIpO1xuICAgIH1cblxuICAgIGFkZENhcmQoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHNgLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkoe25hbWU6IGRhdGEuaW5wdXRfcGxhY2VfdGl0bGUgLGxpbms6IGRhdGEuaW5wdXRfcGxhY2VfaW1hZ2V9KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZmlsZShkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS91c2Vycy9tZWAsIFwiUEFUQ0hcIiwgSlNPTi5zdHJpbmdpZnkoe25hbWU6IGRhdGEuaW5wdXRfcHJvZmlsZV9uYW1lICxhYm91dDogZGF0YS5pbnB1dF9wcm9maWxlX2Jpb30pKTtcbiAgICB9XG5cbiAgICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwgXCJERUxFVEVcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlQXZhdGFyKGF2YXRhckxpbmspIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIFwiUEFUQ0hcIiwgSlNPTi5zdHJpbmdpZnkoe2F2YXRhcjogYXZhdGFyTGlua30pKTtcbiAgICB9XG5cbiAgICBsaWtlQ2FyZChjYXJkSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZldGNoIChgJHt0aGlzLmJhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIFwiUFVUXCIpO1xuICAgIH1cblxuICAgIHVubGlrZUNhcmQoY2FyZElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGZXRjaCAoYCR7dGhpcy5iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCBcIkRFTEVURVwiKTtcbiAgICB9XG5cbiAgICBnZXRDYXJkKGNhcmRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmV0Y2ggKGAke3RoaXMuYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwgXCJHRVRcIik7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbi8vIGNhbiBJIGdldCB0ZW1wbGF0ZSBmcm9tIGhlcmU/XHJcbi8vIHNob3VsZCBuZXZlciByZWZlcmVuY2UgXCJjYXJkXCIgaGVyZS4gVGhpcyBpcyBqdXN0IE1WUFxyXG5cclxuXHJcbiAgLy8ganVzdCAxIGNhcmRcclxuICBjb25zdHJ1Y3RvciAoe2RhdGEsIGhhbmRsZUltYWdlQ2xpY2t9LCBjYXJkVGVtcGxhdGVTZWxlY3Rvcikge1xyXG5cclxuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX2lzTGlrZWQgPSBkYXRhLmlzTGlrZWQ7XHJcblxyXG4gICAgLy8gdG8gbWF0Y2ggaW5keC5odG1sXHJcbiAgICBpZiAoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpIHt0aGlzLl9uYW1lID0gZGF0YS5pbnB1dF9wbGFjZV90aXRsZTt9XHJcbiAgICBpZiAoZGF0YS5saW5rID09PSB1bmRlZmluZWQpIHt0aGlzLl9saW5rID0gZGF0YS5pbnB1dF9wbGFjZV9pbWFnZTt9XHJcbiAgICBcclxuICAgIHRoaXMuX2NhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZFRlbXBsYXRlU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIGNoYW5nZXMgY29sb3IsIG5vdGhpbmcgZWxzZS5cclxuICB1cGRhdGVMaWtlSGVhcnQodG9nZ2xlSXNMaWtlZCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZWxlbWVudHNfX2xpa2Utc3ltYm9sX2FjdGl2ZVwiKTtcclxuICAgIGlmICh0b2dnbGVJc0xpa2VkKSB0aGlzLl9pc0xpa2VkID0gIXRoaXMuX2lzTGlrZWQ7XHJcbiAgfVxyXG5cclxuICAvL2luc3RhbmNlIHZhcmlhYmxlc1xyXG4gIFxyXG4gIF9zZXRFdmVudExpc3RlbmVycyAoaW1hZ2VDYXJkKSB7XHJcbiAgICBpbWFnZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHtsaW5rOiB0aGlzLl9saW5rLCBuYW1lOiB0aGlzLl9uYW1lfSkpXHJcblxyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIG5ldyBjYXJkXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2NhcmRUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHNfX2VsZW1lbnQnKTtcclxuICAgIGNvbnN0IGltYWdlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pbWFnZScpXHJcbiAgICBpbWFnZUNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt0aGlzLl9saW5rfScpYFxyXG4gICAgY29uc3QgbmFtZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbmFtZScpXHJcbiAgICBuYW1lQ2FyZC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnKVxyXG5cclxuICAgIC8vc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoaW1hZ2VDYXJkKTtcclxuXHJcbiAgICAvLyBsaWtlIGJ1dHRvbiBzaG93biBtdXN0IHJlZmxlY3Qgc3RhdHVzLiBpZiBidXR0b24gY29sb3IgYW5kIGxpa2Ugc3RhdHVzIGRvbnQgbWF0Y2gsIHRvZ2dsZSBsaWtlIGNvbG9yXHJcbiAgICBjb25zdCBpc0J1dHRvbkxpa2VkID0gdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50c19fbGlrZS1zeW1ib2xfYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLl9pc0xpa2VkKSB7XHJcbiAgICAgIGlmICghaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2FyZCBub3QgbGlrZWRcclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaXNCdXR0b25MaWtlZCkgdGhpcy51cGRhdGVMaWtlSGVhcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gdGhlIGNyZWF0ZWQgY2FyZFxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBjYXJkIGluZm9cclxuICBnZXRDYXJkSW5mbygpIHtcclxuICAgIGNvbnN0IGNhcmRJbmZvID0ge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgICAgbGluazogdGhpcy5fbGluayxcclxuICAgICAgICBpZDogdGhpcy5faWQsXHJcbiAgICAgICAgaXNMaWtlZDogdGhpcy5faXNMaWtlZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcmRJbmZvXHJcbiAgfVxyXG5cclxufSIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIC8vc2V0dGluZ3MgPSBjb3ZpZCwgZm9ybUVsZW1lbnQgPSBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgZm9ybXMuIFNheSB1cGZyb250IHRoZSBmb3JtIG5lZWRlZFxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgKHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpLFxyXG4gICAgICAodGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzKTtcclxuXHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvciksXHJcbiAgICApO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9kb25lXHJcbiAgX3Nob3dFcnJvcihlcnJvckVsLCBpbnB1dEVsKSB7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLy9kb25lXHJcbiAgX2hpZGVFcnJvcihlcnJvckVsLCBpbnB1dEVsKSB7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcclxuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xyXG4gICAgLy9zZXR0aW5ncywgZm9ybUVsIHJlbW92ZWRcclxuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApOyAvLyBhZGRlZCBcIi1lcnJvclwiIHRvIGVycm9yIHZlcnNpb25zXHJcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcclxuICAgICAgLy8gaGlkZSB0aGUgZXJyb3IgbWVzc2FnZXMgYW5kIHN0eWxlXHJcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsLCBpbnB1dEVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNob3cgZXJyb3IgbWVzc2FnZXMgYW5kIHN0eWxlXHJcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsLCBpbnB1dEVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUJ1dHRvbigpIHtcclxuICAgIC8vcmVtb3ZlZCBzZXR0aW5nc1xyXG5cclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXRzKCkpIHtcclxuICAgICAgLy8gZGlzYWJsZSB0aGUgYnV0dG9uXHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJucyB0cnVlIGlmIHNvbWUgaW52YWxpZCBpbnB1dFxyXG4gIF9oYXNJbnZhbGlkSW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsKSA9PiB0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSk7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBsb29wIHRocm91Z2ggdGhlIGlucHV0cyBhbmQgYWRkIHZhbGlkYXRpb25cclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAvL2NoZWNrIHRoZSBpbnB1dFxyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTsgLy9zZXR0aW5ncywgZm9ybUVsIHJlbW92ZWRcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGJ1dHRvbiAoaWYgaW5wdXQgaXMgdmFsaWQsIGVuYWJsZS4gaWYgbm90LCBkaXNhYmxlZClcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHB1YmxpYyBmdW5jdGlvbiwgYXBwbGllcyB0byBhIHNwZWNpZmljIGZvcm0gbm93LlxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIC8vc2V0dXAgdmFsaWRhdGlvblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTsgLy9zZXR0aW5ncyAoY29uZmlnKSB0byBiZSBwYXNzZWQgdG8gZm9ybSB2aWEgY29uc3RydWN0b3JcclxuICB9XHJcblxyXG4gIC8vIG5vIGVycm9ycyB1cG9uIG9wZW5pbmcgYSBmb3JtLlxyXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9ycygpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xyXG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCwgaW5wdXRFbCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vZXhwb3J0IGZvciBpbmRleC5qc1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xyXG4iLCIvLyBvcGVucyBhbmQgY2xvc2UgYWxsIHBvcHVwcyBpbiBhcHBsaWNhdGlvbiAoZWRpdCBwcm9maWxlLCBhZGQgcGxhY2UsIGltYWdlIHBvcHVwKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BvcHVwU2VsZWN0b3J9YCk7IC8vIG1vZGFsLXByb2ZpbGVcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpOyAvLyBub3RlLCByaWdodCBhYm92ZVxuICAgICAgICAvL3RoaXMub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tb2RhbCAjJHtwb3B1cFNlbGVjdG9yfSB+IC5tb2RhbF9fb3ZlcmxheWApO1xuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjRXNjYXBlID0gdGhpcy5faGFuZGxlRXNjRXNjYXBlLmJpbmQodGhpcyk7IC8vIHRvIG1ha2Ugc3VyZSBjb3JyZWN0IGNvbnRleHQgZm9yIHRoaXMgaW4gdGhpcyBmdW5jdGlvbi5cbiAgICAgICAgdGhpcy5fY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7IC8vIGJpbmRpbmcgY2xvc2UoKSB0byB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrID0gdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrLmJpbmQodGhpcyk7IC8vIGJpbmQgdG8gY29uc3RydWN0b3JcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICAvLyBvcGVucyBwb3B1cFxuICAgICAgICB0aGlzLl9tb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fY29udGFpbmVyX2FjdGl2ZScpXG4gICAgICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX292ZXJsYXlfYWN0aXZlJylcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBjbG9zZXMgcG9wdXBcbiAgICAgICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2NvbnRhaW5lcl9hY3RpdmUnKVxuICAgICAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjRXNjYXBlKGV2ZW50KSB7XG4gICAgICAgIC8vIGxpc3RlbnMgZm9yIGVzYyBidXR0b25cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVPdmVybGF5Q2xpY2sgKCkge1xuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19vdmVybGF5X2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBzZXRzIGV2ZW50IGxpc3RlbmVyc1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gY2xvc2UgYnV0dG9uXG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xvc2UpO1xuXG4gICAgICAgIC8vIGlmIGEga2V5IGlzIHByZXNzZWQsIF9oYW5kbGVFc2NFc2NhcGUgd2lsbCBjYWxsIGNsb3NlKCkgaXMga2V5IGlzIEVzY1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjRXNjYXBlKTtcblxuICAgICAgICAvLyBpZiBvdmVybGF5IGlzIGNsaWNrZWQsIGNsb3NlXG4gICAgICAgIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2spXG5cbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcblxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0VzY2FwZSk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2spOyBcblxuICAgIH1cblxuXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlbiB5b3Ugc3VibWl0IHRoZSBmb3JtXG5cbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTsgLy8gZm9yIFBvcHVwXG5cbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7IC8vIDxmb3JtIGlkID0gXCJmb3JtX2FkZF9wbGFjZVwiIGNsYXNzPVwiZm9ybVwiIG5hbWU9XCJmb3JtX2FkZF9wbGFjZVwiIG5vdmFsaWRhdGU+XG5cbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcblxuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpO1xuXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7IC8vIGJpbmQgdG8gY29uc3RydWN0b3JcblxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTsgLy8gY2FsbHMgcGFyZW50J3MgY2xvc2UoKVxuICB9XG5cbiAgLy8gaGFuZGxlU3VibWl0ID0gaGFuZGxlcyBzdWJtaXQgZXZlbnQgfCBoYW5kbGVGb3JtU3VibWl0ID0gdGFrZXMgYWN0aW9uIG9uIGlucHV0c1xuICBfaGFuZGxlU3VibWl0KGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7IFxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICAvL2NvbGxlY3RzIGRhdGEgZnJvbSBhbGwgaW5wdXQgZmllbGRzIGFuZCByZXR1cm5zIHRoYXQgZGF0YSBhcyBhbiBvYmplY3RcbiAgICBjb25zdCBpbnB1dE1hcCA9IHt9O1xuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRNYXBbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0TWFwO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gYWRkIHN1Ym1pdCBldmVudCBoYW5kbGVyXG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlU3VibWl0KTtcblxuICAgIC8vIG1haW50YWlucyBwYXJlbnQgc2V0dGluZ3MsIGNsb3NpbmcgdXBvbiBwcmVzc2luZyBjbG9zZSBidXR0b24sIEVzYywgYW5kIGNsaWNrIG92ZXJsYXlcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gYWRkcyBzdWJtaXQgZXZlbnRsaXN0ZW5lciBvbmx5IG9uY2VcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xuXG4gICAgLy8gbWFpbnRhaW5zIHBhcmVudCBzZXR0aW5ncywgY2xvc2luZyB1cG9uIHByZXNzaW5nIGNsb3NlIGJ1dHRvbiwgRXNjLCBhbmQgY2xpY2sgb3ZlcmxheVxuICAgIHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgICAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTsgICAgICAgXG4gICAgICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZScpO1xuICAgICAgICB0aGlzLl9pbWFnZUNhcHRpb24gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlLWNhcHRpb24nKTtcbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZSBvcGVuIGZ1bmN0aW9uXG4gICAgb3BlbihkYXRhKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYz0gZGF0YS5saW5rO1xuICAgICAgICB0aGlzLl9pbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuX2ltYWdlLmFsdD0gZGF0YS5uYW1lO1xuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyByZW5kZXJlciwgc2VsZWN0b3J9KSB7IC8vIE9SIGNsYXNzTmFtZSBpbnN0ZWFkIG9mIHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3NlbGVjdG9yfWApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW1zKGl0ZW1zKSB7IC8vIHB1YmxpYyBmdW5jdGlvblxuICAgICAgICAvLyB1c2UgdGhpcy5fcmVuZGVyZXIgY3JlYXRlIHRoZSBlbGVtZW50IGZvciByZW5kZXJpbmcgPSAgdGhpcy5fZWxlbWVudFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtLCBzaG91bGRBcHBlbmQpIHtcblxuICAgICAgICBpZiAoc2hvdWxkQXBwZW5kKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZChpdGVtKSAvLyBpbml0aWFsIGNhcmRzIG9ubHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChpdGVtKSBcbiAgICAgICAgfVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGJpbywgYXZhdGFyIH0pIHsgLy8gT1IgY2xhc3NOYW1lIGluc3RlYWQgb2Ygc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9YCk7XG4gICAgICAgIHRoaXMuX2JpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Jpb31gKTtcbiAgICAgICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXZhdGFyfWApO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGJpbzogdGhpcy5fYmlvLnRleHRDb250ZW50LFxuICAgICAgICAgICAgYXZhdGFyOiB0aGlzLl9hdmF0YXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlclxuICAgIH1cblxuICAgIHNldFVzZXJJbmZvKG5hbWVUZXh0LCBiaW9UZXh0LCBhdmF0YXJMaW5rKSB7XG4gICAgICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lVGV4dDtcbiAgICAgICAgdGhpcy5fYmlvLnRleHRDb250ZW50ID0gYmlvVGV4dDtcbiAgICAgICAgaWYgKGF2YXRhckxpbmsgIT0gbnVsbCkgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhckxpbms7XG4gICAgfVxuXG4gICAgc2V0QXZhdGFyKGF2YXRhckxpbmspIHtcbiAgICAgICAgdGhpcy5fYXZhdGFyLnNyYyA9IGF2YXRhckxpbms7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICBjYXJkU2VjdGlvbjogJy5lbGVtZW50cycsXG4gICAgY2FyZFRlbXBsYXRlOiAnI2NhcmQtdGVtcGxhdGUnLFxuICAgIGltYWdlUHJldmlldzogJ3BvcHVwLWltYWdlJ1xufVxuXG5leHBvcnQgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuLy8gSW1wb3J0IGFsbCB0aGUgY2xhc3Nlc1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1cIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcblxyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xyXG5cclxuaW1wb3J0IHsgc2VsZWN0b3JzLCBvdmVybGF5IH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBUEkgU0VUVElOR1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCIxNDEyMDEyZC1iYTYxLTRkNzUtYjU1YS0xNDUwNGQ2ZTIzYWVcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDQVJEIFJFTkRFUkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XHJcbiAgcmVuZGVyZXI6IChkYXRhKSA9PiByZW5kZXJDYXJkKGRhdGEsIHRydWUpLFxyXG4gIHNlbGVjdG9yOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhLCBzaG91bGRBcHBlbmQpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGhhbmRsZUltYWdlQ2xpY2s6IChpbWdEYXRhKSA9PiB7XHJcbiAgICAgICAgY2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUsXHJcbiAgKVxyXG4gIGNvbnN0IGNhcmRIVE1MID0gY2FyZC5jcmVhdGVDYXJkKCk7IC8vIGFuIGh0bWwgZWxlbWVudFxyXG5cclxuICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRIVE1MICwgc2hvdWxkQXBwZW5kKTtcclxuXHJcbiAgLy8gbGlzdGVuIGZvciBkZWxldGUgYnV0dG9uIGNsaWNrXHJcbiAgY2FyZEhUTUwucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZURlbGV0ZUNhcmRSZXF1ZXN0KGNhcmQpKTtcclxuXHJcbiAgLy8gbGlzdGVuIGZvciBsaWtlIGJ1dHRvbiBjbGlja1xyXG4gIGNhcmRIVE1MLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19fbGlrZS1zeW1ib2wnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZUxpa2VDbGljayhjYXJkKSlcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGRVRDSCBDVVJSRU5UIENBUkRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuYXBpLmdldEluaXRpYWxDYXJkcygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIikgY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoZGF0YSk7IC8vIG9ubHkgYXR0ZW1wdCByZW5kZXJpbmcgaWYgdGhlcmUgaXMgZGF0YSB0byBkaXNwbGF5XHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBORVcgQ0FSRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcbmNvbnN0IGFkZENhcmRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jcmVhdGUtcGxhY2VcIik7XHJcblxyXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCJtb2RhbF9hZGRcIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YUluKSA9PiB7XHJcbiAgICBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZpbmcuLi5cIlxyXG4gICAgYXBpLmFkZENhcmQoZGF0YUluKVxyXG4gICAgICAudGhlbigoZGF0YU91dCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckNhcmQoZGF0YU91dCwgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBhZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIlxyXG4gICAgICB9KVxyXG5cclxuICB9LFxyXG59KTtcclxuXHJcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRGb3JtVmFsaWRhdG9yLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIGFkZENhcmRQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERFTEVURSBDQVJEIENPTkZJUk1BVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVDYXJkUmVxdWVzdChjYXJkKSB7XHJcbiAgXHJcbiAgY29uc3QgZGVsZXRlQ2FyZENvbmZpcm1hdGlvblBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gICAgcG9wdXBTZWxlY3RvcjogXCJkZWxldGVfY2FyZF9jb25maXJtYXRpb25cIixcclxuICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhjYXJkLmNvbnN0cnVjdG9yID09PSBDYXJkKTtcclxuICAgICAgYXBpLmRlbGV0ZUNhcmQoY2FyZC5nZXRDYXJkSW5mbygpLmlkKTtcclxuICAgICAgY2FyZC5kZWxldGVDYXJkKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBkZWxldGVDYXJkQ29uZmlybWF0aW9uUG9wdXAub3BlbigpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTElLRSBCRUhBVklPUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaWtlQ2xpY2soY2FyZCkge1xyXG4gIC8vIGlmIGxpa2VkIGFscmVhZHksIHVubGlrZSBpbiBhcGkgYW5kIG1ha2UgaGVhcnQgZW1wdHlcclxuICBpZiAoY2FyZC5nZXRDYXJkSW5mbygpLmlzTGlrZWQpIHsgLy8gQ2FuIHRoZSBsaWtlIHN0YXR1cyBiZSByZXRyaWV2ZWQgZnJvbSBBUEkgcmF0aGVyIHRoYW4gbWFpbnRhaW4gYSBzZWNvbmQgdmVyc2lvbiBoZXJlP1xyXG4gICAgYXBpLnVubGlrZUNhcmQoY2FyZC5nZXRDYXJkSW5mbygpLmlkKTsgIFxyXG4gIH1cclxuICAvLyBlbHNlID0gY3VycmVudGx5IHVubGlrZXMsIGxpa2UgaW4gYXBpIGFuZCBmaWxsIHRoZSBoZWFydFxyXG4gIGVsc2Uge1xyXG4gICAgYXBpLmxpa2VDYXJkKGNhcmQuZ2V0Q2FyZEluZm8oKS5pZCk7XHJcbiAgfVxyXG5cclxuICBjYXJkLnVwZGF0ZUxpa2VIZWFydCh0cnVlKTsgLy8gdG9nZ2xlIHRvIGFsdGVybmF0aXZlIGNvbG9yIGFuZCB1cGRhdGUgaXNMaWtlZCBjYXJkIHByb3BlcnR5XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQUk9GSUxFIElORk8gU1RPUkFHRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGN1cnJlbnRVc2VyUHJvZmlsZSA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZTogXCJkaXNwbGF5X3Byb2ZpbGVfbmFtZVwiLFxyXG4gIGJpbzogXCJkaXNwbGF5X3Byb2ZpbGVfYmlvXCIsXHJcbiAgYXZhdGFyOiBcImRpc3BsYXlfcHJvZmlsZV9hdmF0YXJcIlxyXG59KVxyXG5cclxuYXBpLmdldFVzZXJJbmZvKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgY3VycmVudFVzZXJQcm9maWxlLnNldFVzZXJJbmZvKGRhdGEubmFtZSwgZGF0YS5hYm91dCwgZGF0YS5hdmF0YXIpO1xyXG4gIH1cclxuKTtcclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUFJPRklMRSBJTkZPIE1BTkFHRU1FTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1lZGl0LXByb2ZpbGVcIik7XHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwibW9kYWxfcHJvZmlsZVwiLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XHJcbiAgICBlZGl0UHJvZmlsZVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS51cGRhdGVQcm9maWxlKGRhdGEpXHJcbiAgICAgIC50aGVuKChkYXRhSW4pID0+IHtcclxuICAgICAgICBjdXJyZW50VXNlclByb2ZpbGUuc2V0VXNlckluZm8oXHJcbiAgICAgICAgICBkYXRhSW4ubmFtZSxcclxuICAgICAgICAgIGRhdGFJbi5hYm91dCxcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2ZpbGVTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIlxyXG4gICAgICB9KVxyXG5cclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuXHJcbmVkaXRQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZWRpdEZvcm1WYWxpZGF0b3IuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgcHJlZmlsbFByb2ZpbGVGb3JtKCk7XHJcbiAgZWRpdFByb2ZpbGVQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8gVG8gcHJlZmlsbCBFZGl0IFByb2ZpbGUgRm9ybVxyXG5cclxuY29uc3QgaW5wdXRQcm9maWxlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRfcHJvZmlsZV9uYW1lXCIpO1xyXG5jb25zdCBpbnB1dEJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRfcHJvZmlsZV9iaW9cIik7XHJcblxyXG5mdW5jdGlvbiBwcmVmaWxsUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dFByb2ZpbGVOYW1lLnZhbHVlID0gY3VycmVudFVzZXIubmFtZTtcclxuICBpbnB1dEJpby52YWx1ZSA9IGN1cnJlbnRVc2VyLmJpbztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFWQVRBUiBNQU5BR0VNRU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gLy8gTVZQIGZ1bmN0aW9uYWxpdHlcclxuLy8gY29uc3QgdGVzdEltYWdlTGluayA9IFwiaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC80MC80MTA2LzI4MDYuanBnP2htYWM9TVkzcmE5OHV0MDQ0TGFXUEVLd1pvd2d5ZEhaX3JaWlV1T0hyYzNtTDVtSVwiXHJcbi8vIGNvbnN0IHRlc3RJbWFnZUxpbmsyID0gXCJodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzkxLzM1MDQvMjMzNi5qcGc/aG1hYz10SzZ6N1JSZUxnVWxDdWY0ZmxES2VnNTdvNkNVQWJna2xnTHNHTDBVb3dVXCJcclxuXHJcblxyXG5jb25zdCB1cGRhdGVBdmF0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1idXR0b25cIik7XHJcbmNvbnN0IGlucHV0QXZhdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRfYXZhdGFyX2xpbmtcIik7XHJcbmNvbnN0IHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXVwZGF0ZS1hdmF0YXJcIik7XHJcblxyXG5cclxuY29uc3QgdXBkYXRlQXZhdGFyUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCJtb2RhbF91cGRhdGVfYXZhdGFyXCIsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcclxuICAgIHVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2aW5nLi4uXCJcclxuICAgIGFwaS51cGRhdGVBdmF0YXIoZGF0YS5pbnB1dF9hdmF0YXJfbGluaylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyUHJvZmlsZS5zZXRBdmF0YXIoZGF0YS5pbnB1dF9hdmF0YXJfbGluayk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICB1cGRhdGVBdmF0YXJTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIlxyXG4gICAgICB9KVxyXG5cclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHByZWZpbGxBdmF0YXJGb3JtKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJQcm9maWxlLmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXRBdmF0YXJMaW5rLnZhbHVlID0gY3VycmVudFVzZXIuYXZhdGFyLnNyYztcclxufVxyXG5cclxudXBkYXRlQXZhdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJhdmF0YXIgcGljIGxpbmtlZFwiKTtcclxuICAvL2VkaXRGb3JtVmFsaWRhdG9yLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIHByZWZpbGxBdmF0YXJGb3JtKCk7XHJcbiAgdXBkYXRlQXZhdGFyUG9wdXAub3BlbigpO1xyXG59KTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJTUFHRSBDQVJEIFBSRVZJRVcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBjYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHNlbGVjdG9ycy5pbWFnZVByZXZpZXcpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZPUk0gVkFMSURBVElPTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1fYWRkX3BsYWNlXCIpO1xyXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybV9lZGl0X3Byb2ZpbGVcIik7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdGlvbkNvbmZpZyA9IHtcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIiwgLy8jID0gaWQsIC4gaXMgY2xzc1xyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fc3VibWl0X2Rpc2FibGVkXCIsIC8vIGNsYXNzZXNcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9fZXJyb3JfdmlzaWJsZVwiLFxyXG59O1xyXG5cclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uQ29uZmlnLCBhZGRGb3JtKTtcclxuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0aW9uQ29uZmlnLCBwcm9maWxlRm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuIl0sIm5hbWVzIjpbIkFwaSIsIl9yZWYiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2hhbmRsZUZldGNoIiwiZGVzdGluYXRpb25VcmwiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbmNhdCIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZ2V0SW5pdGlhbENhcmRzIiwiZ2V0VXNlckluZm8iLCJhZGRDYXJkIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiaW5wdXRfcGxhY2VfdGl0bGUiLCJsaW5rIiwiaW5wdXRfcGxhY2VfaW1hZ2UiLCJ1cGRhdGVQcm9maWxlIiwiaW5wdXRfcHJvZmlsZV9uYW1lIiwiYWJvdXQiLCJpbnB1dF9wcm9maWxlX2JpbyIsImRlbGV0ZUNhcmQiLCJjYXJkSWQiLCJ1cGRhdGVBdmF0YXIiLCJhdmF0YXJMaW5rIiwiYXZhdGFyIiwibGlrZUNhcmQiLCJ1bmxpa2VDYXJkIiwiZ2V0Q2FyZCIsImRlZmF1bHQiLCJDYXJkIiwiY2FyZFRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwiX25hbWUiLCJfbGluayIsIl9pZCIsIl9pc0xpa2VkIiwiaXNMaWtlZCIsInVuZGVmaW5lZCIsIl9jYXJkVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfZWxlbWVudCIsIl9oYW5kbGVJbWFnZUNsaWNrIiwicmVtb3ZlIiwidXBkYXRlTGlrZUhlYXJ0IiwidG9nZ2xlSXNMaWtlZCIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiaW1hZ2VDYXJkIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlQ2FyZCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm5hbWVDYXJkIiwidGV4dENvbnRlbnQiLCJpc0J1dHRvbkxpa2VkIiwiY29udGFpbnMiLCJnZXRDYXJkSW5mbyIsImNhcmRJbmZvIiwiaWQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zdWJtaXRCdXR0b24iLCJfc2hvd0Vycm9yIiwiZXJyb3JFbCIsImlucHV0RWwiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlRXJyb3IiLCJfaXNJbnZhbGlkSW5wdXQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInRvZ2dsZUJ1dHRvbiIsIl9oYXNJbnZhbGlkSW5wdXRzIiwiZGlzYWJsZWQiLCJzb21lIiwiX3RoaXMyIiwiZm9yRWFjaCIsImVuYWJsZVZhbGlkYXRpb24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIl90aGlzMyIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9tb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiX292ZXJsYXkiLCJfY2xvc2VCdXR0b24iLCJfaGFuZGxlRXNjRXNjYXBlIiwiYmluZCIsIl9jbG9zZSIsImNsb3NlIiwiX2hhbmRsZU92ZXJsYXlDbGljayIsIm9wZW4iLCJzZXRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2lucHV0cyIsIl9oYW5kbGVTdWJtaXQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwicmVzZXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRNYXAiLCJpbnB1dCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX2ltYWdlQ2FwdGlvbiIsInNyYyIsImFsdCIsIlNlY3Rpb24iLCJyZW5kZXJlciIsInNlbGVjdG9yIiwiX3JlbmRlcmVyIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsIml0ZW0iLCJhZGRJdGVtIiwic2hvdWxkQXBwZW5kIiwiYXBwZW5kIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwiYmlvIiwiX2JpbyIsIl9hdmF0YXIiLCJ1c2VyIiwic2V0VXNlckluZm8iLCJuYW1lVGV4dCIsImJpb1RleHQiLCJzZXRBdmF0YXIiLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsImltYWdlUHJldmlldyIsIm92ZXJsYXkiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwicmVuZGVyQ2FyZCIsImNhcmQiLCJpbWdEYXRhIiwiY2FyZFByZXZpZXdQb3B1cCIsImNhcmRIVE1MIiwiaGFuZGxlRGVsZXRlQ2FyZFJlcXVlc3QiLCJoYW5kbGVMaWtlQ2xpY2siLCJhZGRDYXJkQnV0dG9uIiwiYWRkQ2FyZFN1Ym1pdEJ1dHRvbiIsImFkZENhcmRQb3B1cCIsImRhdGFJbiIsImRhdGFPdXQiLCJmaW5hbGx5IiwiYWRkRm9ybVZhbGlkYXRvciIsImRlbGV0ZUNhcmRDb25maXJtYXRpb25Qb3B1cCIsImN1cnJlbnRVc2VyUHJvZmlsZSIsImVkaXRQcm9maWxlU3VibWl0QnV0dG9uIiwiZWRpdFByb2ZpbGVQb3B1cCIsImVkaXRQcm9maWxlQnV0dG9uIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJwcmVmaWxsUHJvZmlsZUZvcm0iLCJpbnB1dFByb2ZpbGVOYW1lIiwiaW5wdXRCaW8iLCJjdXJyZW50VXNlciIsInVwZGF0ZUF2YXRhckJ1dHRvbiIsImlucHV0QXZhdGFyTGluayIsInVwZGF0ZUF2YXRhclN1Ym1pdEJ1dHRvbiIsInVwZGF0ZUF2YXRhclBvcHVwIiwiaW5wdXRfYXZhdGFyX2xpbmsiLCJwcmVmaWxsQXZhdGFyRm9ybSIsImxvZyIsImFkZEZvcm0iLCJwcm9maWxlRm9ybSIsImZvcm1WYWxpZGF0aW9uQ29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==