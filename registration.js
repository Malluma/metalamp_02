"use strict";
(globalThis["webpackChunkmetalamp_02"] = globalThis["webpackChunkmetalamp_02"] || []).push([["registration"],{

/***/ "./src/blocks/button/button.js":
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/blocks/button/button.scss");


/***/ }),

/***/ "./src/blocks/carousel/Carousel-class.js":
/*!***********************************************!*\
  !*** ./src/blocks/carousel/Carousel-class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Carousel {
  constructor(carouselHtml) {
    this.carouselHtml = carouselHtml;
    this.itemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__item");
    this.trackItemsHtml = this.carouselHtml.querySelectorAll(".js-carousel__track-item");
    this.btnBack = this.carouselHtml.querySelector(".js-carousel__btn-back");
    this.btnForward = this.carouselHtml.querySelector(".js-carousel__btn-forward");
    this.itemWidth = this.carouselHtml.offsetWidth;
    this.activeItem = 0;
    this.prevActive = 0;
    this.bindMethods();
    this.addEventListeners();

    if (this.carouselHtml.dataset.autoimageschange === "true") {
      setInterval(this.handleBtnForwardClick, 7000);
    }
  }

  bindMethods() {
    this.handleBtnBackClick = this.handleBtnBackClick.bind(this);
    this.handleBtnForwardClick = this.handleBtnForwardClick.bind(this);
    this.handleCarouselKeyUp = this.handleCarouselKeyUp.bind(this);
  }

  addEventListeners() {
    this.btnBack.addEventListener("click", this.handleBtnBackClick);
    this.btnForward.addEventListener("click", this.handleBtnForwardClick);
    this.carouselHtml.addEventListener("keyup", this.handleCarouselKeyUp);
  }

  handleBtnForwardClick() {
    this.prevActive = this.activeItem;
    this.activeItem++;

    if (this.activeItem === this.itemsHtml.length) {
      this.activeItem = 0;
    }

    this.moveItem();
    this.updateTrack();
  }

  handleBtnBackClick() {
    this.prevActive = this.activeItem;
    this.activeItem--;

    if (this.activeItem < 0) {
      this.activeItem = this.itemsHtml.length - 1;
    }

    this.moveItem();
    this.updateTrack();
  }

  moveItem() {
    this.itemsHtml[this.prevActive].classList.remove('carousel__item_active');
    this.itemsHtml[this.activeItem].classList.add('carousel__item_active');
  }

  updateTrack() {
    if (this.trackItemsHtml.length > 0) {
      this.trackItemsHtml[this.prevActive].classList.remove('carousel__track-item_active');
      this.trackItemsHtml[this.activeItem].classList.add('carousel__track-item_active');
    }
  }

  handleCarouselKeyUp(event) {
    if (event.key === 'ArrowLeft') {
      this.handleBtnBackClick();
    } else if (event.key === 'ArrowRight') {
      this.handleBtnForwardClick();
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ }),

/***/ "./src/blocks/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./src/blocks/carousel/carousel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.scss */ "./src/blocks/carousel/carousel.scss");
/* harmony import */ var _Carousel_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel-class */ "./src/blocks/carousel/Carousel-class.js");


const carousels = document.querySelectorAll('.js-carousel');
carousels.forEach(carousel => {
  const carouselInstance = new _Carousel_class__WEBPACK_IMPORTED_MODULE_1__["default"](carousel);
});

/***/ }),

/***/ "./src/blocks/footer/footer.js":
/*!*************************************!*\
  !*** ./src/blocks/footer/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/blocks/footer/footer.scss");
/* harmony import */ var _blocks_text_field_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/text-field/text-field */ "./src/blocks/text-field/text-field.js");



/***/ }),

/***/ "./src/blocks/header/Header-class.js":
/*!*******************************************!*\
  !*** ./src/blocks/header/Header-class.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Header {
  constructor(header) {
    this.header = header;
    this.menuContainer = header.querySelector('.js-header__menu-container');
    this.burgerBtn = header.querySelector('.js-header__burger-btn');
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleBurgerBtnClick = this.handleBurgerBtnClick.bind(this);
  }

  addEventListeners() {
    this.burgerBtn.addEventListener("click", this.handleBurgerBtnClick);
  }

  handleBurgerBtnClick() {
    this.menuContainer.classList.toggle('header__menu-container_mobile');
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/blocks/header/header.scss");
/* harmony import */ var _blocks_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/button/button */ "./src/blocks/button/button.js");
/* harmony import */ var _blocks_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/menu/menu */ "./src/blocks/menu/menu.js");
/* harmony import */ var _Header_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header-class */ "./src/blocks/header/Header-class.js");




const headers = document.querySelectorAll(".js-header");
headers.forEach(header => {
  const headerInstance = new _Header_class__WEBPACK_IMPORTED_MODULE_3__["default"](header);
});

/***/ }),

/***/ "./src/blocks/menu/Menu-class.js":
/*!***************************************!*\
  !*** ./src/blocks/menu/Menu-class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Menu {
  constructor(menu) {
    this.menu = menu;
    this.list = menu.querySelector('.js-menu__list');
    this.expandBtns = menu.querySelectorAll('.js-menu__expand-btn');
    this.toggleBtn = menu.querySelector('.js-menu__toggle-btn');
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleExpandBtnClick = this.handleExpandBtnClick.bind(this);
    this.handleItemHrefClick = this.handleItemHrefClick.bind(this);
    this.handleItemHrefKeyUp = this.handleItemHrefKeyUp.bind(this);
  }

  addEventListeners() {
    this.expandBtns.forEach(btn => {
      btn.addEventListener("click", this.handleExpandBtnClick);
      const itemHref = btn.parentElement;
      itemHref.addEventListener("click", this.handleItemHrefClick);
      const listItem = itemHref.parentElement;
      listItem.addEventListener("keyup", this.handleItemHrefKeyUp);
    });
  }

  handleExpandBtnClick(e) {
    const toggleBtn = e.target;
    const sublist = toggleBtn.parentElement.nextElementSibling;
    this.toggleSubmenu(sublist);
  }

  handleItemHrefClick(e) {
    const itemHref = e.target;
    const sublist = itemHref.nextElementSibling;
    this.toggleSubmenu(sublist);
  }

  toggleSubmenu(sublist) {
    if (sublist.classList.contains("menu__sublist_hidden")) {
      sublist.classList.remove("menu__sublist_hidden");
      setTimeout(() => {
        sublist.classList.remove("menu__sublist_unvisible");
      }, 20);
    } else {
      sublist.classList.add("menu__sublist_unvisible");
      setTimeout(() => {
        sublist.classList.add("menu__sublist_hidden");
      }, 400);
    }
  }

  handleItemHrefKeyUp(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      const submenuToggleBtn = event.target.querySelector('.js-menu__expand-btn');
      this.toggleSubmenu(submenuToggleBtn);
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/blocks/menu/menu.js":
/*!*********************************!*\
  !*** ./src/blocks/menu/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.scss */ "./src/blocks/menu/menu.scss");
/* harmony import */ var _Menu_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu-class */ "./src/blocks/menu/Menu-class.js");


const menus = document.querySelectorAll(".js-menu");
menus.forEach(menu => {
  const menuInstance = new _Menu_class__WEBPACK_IMPORTED_MODULE_1__["default"](menu);
});

/***/ }),

/***/ "./src/blocks/radio/radio.js":
/*!***********************************!*\
  !*** ./src/blocks/radio/radio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ "./src/blocks/radio/radio.scss");


/***/ }),

/***/ "./src/blocks/registration-card/registration-card.js":
/*!***********************************************************!*\
  !*** ./src/blocks/registration-card/registration-card.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-card.scss */ "./src/blocks/registration-card/registration-card.scss");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ "./src/blocks/button/button.js");
/* harmony import */ var _radio_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radio/radio */ "./src/blocks/radio/radio.js");
/* harmony import */ var _text_field_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-field/text-field */ "./src/blocks/text-field/text-field.js");
/* harmony import */ var _toggle_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle/toggle */ "./src/blocks/toggle/toggle.js");






/***/ }),

/***/ "./src/blocks/text-field/text-field.js":
/*!*********************************************!*\
  !*** ./src/blocks/text-field/text-field.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field.scss */ "./src/blocks/text-field/text-field.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_2__);



jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-text-field__input_masked').mask('00.00.0000');
});

/***/ }),

/***/ "./src/blocks/toggle/toggle.js":
/*!*************************************!*\
  !*** ./src/blocks/toggle/toggle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ "./src/blocks/toggle/toggle.scss");


/***/ }),

/***/ "./src/page-layout/template/template.js":
/*!**********************************************!*\
  !*** ./src/page-layout/template/template.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.scss */ "./src/page-layout/template/template.scss");
/* harmony import */ var _blocks_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/footer/footer */ "./src/blocks/footer/footer.js");
/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/header/header */ "./src/blocks/header/header.js");




/***/ }),

/***/ "./src/pages/registration/registration.js":
/*!************************************************!*\
  !*** ./src/pages/registration/registration.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.scss */ "./src/pages/registration/registration.scss");
/* harmony import */ var _page_layout_template_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page-layout/template/template */ "./src/page-layout/template/template.js");
/* harmony import */ var _blocks_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/carousel/carousel */ "./src/blocks/carousel/carousel.js");
/* harmony import */ var _blocks_registration_card_registration_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/registration-card/registration-card */ "./src/blocks/registration-card/registration-card.js");





/***/ }),

/***/ "./src/blocks/button/button.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/button.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carousel/carousel.scss":
/*!*******************************************!*\
  !*** ./src/blocks/carousel/carousel.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/footer/footer.scss":
/*!***************************************!*\
  !*** ./src/blocks/footer/footer.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/header/header.scss":
/*!***************************************!*\
  !*** ./src/blocks/header/header.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/menu/menu.scss":
/*!***********************************!*\
  !*** ./src/blocks/menu/menu.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/radio/radio.scss":
/*!*************************************!*\
  !*** ./src/blocks/radio/radio.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/registration-card/registration-card.scss":
/*!*************************************************************!*\
  !*** ./src/blocks/registration-card/registration-card.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/text-field/text-field.scss":
/*!***********************************************!*\
  !*** ./src/blocks/text-field/text-field.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/toggle/toggle.scss":
/*!***************************************!*\
  !*** ./src/blocks/toggle/toggle.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/page-layout/template/template.scss":
/*!************************************************!*\
  !*** ./src/page-layout/template/template.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/registration/registration.scss":
/*!**************************************************!*\
  !*** ./src/pages/registration/registration.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors/jquery","vendors/jquery-mask-plugin"], () => (__webpack_exec__("./src/pages/registration/registration.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=registration.js.map