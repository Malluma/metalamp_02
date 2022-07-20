"use strict";
(globalThis["webpackChunkmetalamp_02"] = globalThis["webpackChunkmetalamp_02"] || []).push([["search-room"],{

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

/***/ "./src/blocks/checkbox-list/Checkbox-list-class.js":
/*!*********************************************************!*\
  !*** ./src/blocks/checkbox-list/Checkbox-list-class.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CheckboxList {
  constructor(checkboxList) {
    this.list = checkboxList.querySelector('.js-checkbox-list__list');
    this.expandListBtn = checkboxList.querySelector('.js-checkbox-list__btn-expand');
    this.listLabel = checkboxList.querySelector('.js-checkbox-list__label-flex-wrap');
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleBtnExpandClick = this.handleBtnExpandClick.bind(this);
    this.handleListLabelClick = this.handleListLabelClick.bind(this);
  }

  addEventListeners() {
    this.expandListBtn.addEventListener('click', this.handleBtnExpandClick);
    this.listLabel.addEventListener('keyup', this.handleListLabelClick);
  }

  handleBtnExpandClick() {
    this.expandListBtn.classList.toggle('checkbox-list__btn-expand-rotate');
    this.list.classList.toggle('checkbox-list__hidden');
  }

  handleListLabelClick(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handleBtnExpandClick();
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxList);

/***/ }),

/***/ "./src/blocks/checkbox-list/checkbox-list.js":
/*!***************************************************!*\
  !*** ./src/blocks/checkbox-list/checkbox-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-list.scss */ "./src/blocks/checkbox-list/checkbox-list.scss");
/* harmony import */ var _Checkbox_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox-list-class */ "./src/blocks/checkbox-list/Checkbox-list-class.js");


const checkboxLists = document.querySelectorAll(".js-checkbox-list");
checkboxLists.forEach(checkboxList => {
  const checkboxListInstance = new _Checkbox_list_class__WEBPACK_IMPORTED_MODULE_1__["default"](checkboxList);
});

/***/ }),

/***/ "./src/blocks/date-dropdown/Datepicker1Field-class.js":
/*!************************************************************!*\
  !*** ./src/blocks/date-dropdown/Datepicker1Field-class.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var _utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilityForDatepickerClasses */ "./src/blocks/date-dropdown/utilityForDatepickerClasses.js");



class Datepicker1Field {
  constructor(options) {
    this.dateInput = options.startEndDateInput;
    this.dateInputValue = this.dateInput.dataset.value;
    this.alwaysShow = this.dateInput.dataset.alwaysshow === "true" ? true : false;
    this.setPrevInputDates();
    this.dontSetInputDatesFromPrevDates = false;
    this.dateInput.classList.add(options.id);

    if (this.alwaysShow) {
      this.hideInput();
    }

    this.airDatepicker = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](`.${options.id}`, (0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.createAirDatepickerOptions)(this.createClearBtn(), this.createApplyBtn(), this, this.alwaysShow));
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleApplyBtnClick = this.handleApplyBtnClick.bind(this);
    this.handleDateInputKeyDown = this.handleDateInputKeyDown.bind(this);
  }

  addEventListeners() {
    this.dateInput.addEventListener("keydown", this.handleDateInputKeyDown);
  }

  handleDateInputKeyDown(event) {
    event.preventDefault();

    if (event.key === "Tab" && this.bothDatesSelected()) {
      this.handleApplyBtnClick(this.airDatepicker);
    }
  }

  hideInput() {
    this.dateInput.classList.add('date-dropdown__input-hidden');
    this.dateInput.nextElementSibling.classList.add('date-dropdown__input-hidden');
  }

  setPrevInputDates() {
    const [startDate, endDate] = this.dateInputValue.split('-');
    this.prevDate1 = startDate ? startDate : '';
    this.prevDate2 = endDate ? endDate : '';
  }

  setInputDatesFromPrev() {
    this.dateInputValue = `${this.prevDate1}-${this.prevDate2}`;
  }

  createClearBtn() {
    return {
      content: 'очистить',
      className: 'js-date-dropdown__clearBtn',
      onClick: datepicker => this.clearDatepicker(datepicker)
    };
  }

  clearDatepicker(datepicker) {
    datepicker.clear();
    this.clearDateFields();
  }

  clearDateFields() {
    this.dateInput.value = '';
  }

  createApplyBtn() {
    return {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: datepicker => {
        this.handleApplyBtnClick(datepicker);
      }
    };
  }

  handleApplyBtnClick(datepicker) {
    this.setNewDateValues(datepicker);
    this.setPrevInputDates(); //to help to catch date change in other blocks

    this.dateInput.dispatchEvent(new Event('change'));
    this.dontSetInputDatesFromPrevDates = true;
    datepicker.hide();
  }

  bothDatesSelected() {
    let [startDate, endDate] = this.airDatepicker.selectedDates;
    return startDate && endDate;
  }

  setNewDateValues(pluginDP) {
    let [startDate, endDate] = pluginDP.selectedDates;

    if (startDate) {
      startDate = startDate.toLocaleDateString();
    } else {
      startDate = '';
    }

    if (endDate) {
      endDate = endDate.toLocaleDateString();
    } else {
      endDate = '';
    }

    this.dateInputValue = `${startDate}-${endDate}`;
  }

  createSelectedDatesArray() {
    const result = [];
    const inputValue = this.dateInputValue;

    if (inputValue) {
      const [startDate, endDate] = inputValue.split('-');
      this.pushDateIntoArray(startDate, result);
      this.pushDateIntoArray(endDate, result);
    }

    return result;
  }

  pushDateIntoArray(date, arr) {
    const dateFormat = date ? (0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.formatDateStr)(date) : '';

    if (dateFormat) {
      arr.push(new Date(dateFormat));
    }
  }

  getDateFormatOptionForPluginCalendar() {
    function dateFormat(date) {
      function formatSingleDate(dateToFormat) {
        let resultDate = dateToFormat ? dateToFormat.toLocaleDateString('ru-RU', options) : '';
        const lastSymbolIsDot = resultDate.length > 1 && resultDate[resultDate.length - 1] === '.';

        if (lastSymbolIsDot) {
          resultDate = resultDate.slice(0, -1);
        }

        return resultDate;
      }

      const options = {
        month: 'short',
        day: 'numeric'
      };
      let [startDate, endDate] = date;
      const startDateFormat = formatSingleDate(startDate);
      const endDateFormat = formatSingleDate(endDate);
      return `${startDateFormat} - ${endDateFormat}`;
    }

    return dateFormat;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Datepicker1Field);

/***/ }),

/***/ "./src/blocks/date-dropdown/Datepicker2Fields-class.js":
/*!*************************************************************!*\
  !*** ./src/blocks/date-dropdown/Datepicker2Fields-class.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var _utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilityForDatepickerClasses */ "./src/blocks/date-dropdown/utilityForDatepickerClasses.js");



class Datepicker2Fields {
  constructor(options) {
    this.dateInput1 = options.startDateInput;
    this.dateInput2 = options.endDateInput;
    this.setPrevInputDates();
    this.onlySecondDateAtStart = this.dateInput1.value === '' && this.dateInput2.value;
    this.airDatepicker = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](`.${options.id}`, (0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.createAirDatepickerOptions)(this.createClearBtn(), this.createApplyBtn(), this));
    this.connectGivenDatesWithAirDatepicker();
    this.bindMethods();
    this.addEventListeners();
    this.dontSetInputDatesFromPrevDates = false;
  }

  bindMethods() {
    this.handleDate2Click = this.handleDate2Click.bind(this);
    this.handleDateInputKeyDown = this.handleDateInputKeyDown.bind(this);
  }

  addEventListeners() {
    this.dateInput2.addEventListener('click', this.handleDate2Click);
    this.dateInput1.addEventListener("keydown", this.handleDateInputKeyDown);
    this.dateInput2.addEventListener("keydown", this.handleDateInputKeyDown);
  }

  handleDateInputKeyDown(event) {
    event.preventDefault();

    if (event.key === "Tab" && this.bothDatesSelected()) {
      this.handleApplyBtnClick(this.airDatepicker);
    }
  }

  bothDatesSelected() {
    let [startDate, endDate] = this.airDatepicker.selectedDates;
    return startDate && endDate;
  }

  handleApplyBtnClick(datepicker) {
    const [startDate, endDate] = datepicker.selectedDates;

    if (startDate) {
      this.dateInput1.value = startDate.toLocaleDateString();
    }

    if (endDate) {
      this.dateInput2.value = endDate.toLocaleDateString();
    }

    this.setPrevInputDates(); //to help to catch date change in other blocks

    this.dateInput1.dispatchEvent(new Event('change'));
    this.dontSetInputDatesFromPrevDates = true;
    datepicker.hide();
  }

  setPrevInputDates() {
    this.prevDate1 = this.dateInput1.value;
    this.prevDate2 = this.dateInput2.value;
  }

  setInputDatesFromPrev() {
    this.dateInput1.value = this.prevDate1;
    this.dateInput2.value = this.prevDate2;
  }

  connectGivenDatesWithAirDatepicker() {
    if (this.onlyEndDateIsGiven()) {
      this.airDatepicker.setFocusDate((0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.formatDateStr)(this.dateInput2.value));
    } //to fix circle if only 1 date is given


    if (this.airDatepicker.selectedDates.length === 1) {
      this.airDatepicker.setFocusDate(this.airDatepicker.selectedDates[0]);

      if (this.dateInput2) {
        this.onlySecondDate = true;
      }
    }

    if (this.dateInput1.value && this.dateInput2.value) {
      const [startDate, endDate] = this.airDatepicker.selectedDates;
      const selectedDates = [];

      if (startDate) {
        selectedDates.push(startDate);
      }

      if (endDate) {
        selectedDates.push(endDate);
      }

      if (selectedDates.length > 0) {
        this.airDatepicker.selectDate(selectedDates);
      }
    }
  }

  createClearBtn() {
    return {
      content: 'очистить',
      className: 'js-date-dropdown__clearBtn',
      onClick: datepicker => this.clearDatepicker(datepicker)
    };
  }

  clearDatepicker(datepicker) {
    datepicker.clear();
    this.clearDateFields();
  }

  clearDateFields() {
    this.dateInput1.value = '';
    this.dateInput2.value = '';
  }

  createApplyBtn() {
    return {
      content: 'применить',
      className: 'js-date-dropdown__applyBtn',
      onClick: datepicker => {
        this.handleApplyBtnClick(datepicker);
      }
    };
  }

  handleDate2Click() {
    this.airDatepicker.show();
  }

  createSelectedDatesArray() {
    const result = [];
    const inputStart = this.dateInput1;
    const inputEnd = this.dateInput2;

    if (this.onlyEndDateIsGiven()) {
      return undefined;
    }

    const startDateFromLocal = inputStart && inputStart.value ? (0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.formatDateStr)(inputStart.value) : '';
    const endDateFromLocal = inputEnd && inputEnd.value ? (0,_utilityForDatepickerClasses__WEBPACK_IMPORTED_MODULE_1__.formatDateStr)(inputEnd.value) : '';

    if (startDateFromLocal) {
      result.push(startDateFromLocal);
    }

    if (endDateFromLocal) {
      result.push(endDateFromLocal);
    }

    if (!startDateFromLocal && !endDateFromLocal) {
      return undefined;
    }

    return result;
  }

  onlyEndDateIsGiven() {
    return this.dateInput1.value === '' && this.dateInput2.value;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Datepicker2Fields);

/***/ }),

/***/ "./src/blocks/date-dropdown/date-dropdown.js":
/*!***************************************************!*\
  !*** ./src/blocks/date-dropdown/date-dropdown.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Datepicker1Field_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datepicker1Field-class */ "./src/blocks/date-dropdown/Datepicker1Field-class.js");
/* harmony import */ var _Datepicker2Fields_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Datepicker2Fields-class */ "./src/blocks/date-dropdown/Datepicker2Fields-class.js");
/* harmony import */ var _date_dropdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-dropdown.scss */ "./src/blocks/date-dropdown/date-dropdown.scss");




jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  //single date dropdown
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-date-dropdown__double-start').each((index, startDateInput) => {
    const currentElId = `js-air-datepicker_double${index}`;
    const $startDateInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(startDateInput);
    const $hiddenDateInput = $startDateInput.prev();
    const $startDateLabel = $startDateInput.parent().parent();
    const $endDateLabel = $startDateLabel.next();
    const endDateInput = $endDateLabel.find('.js-date-dropdown__double-end')[0];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(startDateInput).addClass(currentElId);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(endDateInput).addClass(currentElId);
    const datepicker2FieldsInstance = new _Datepicker2Fields_class__WEBPACK_IMPORTED_MODULE_2__["default"]({
      startDateInput: startDateInput,
      endDateInput: endDateInput,
      hiddenDateInput: $hiddenDateInput.html(),
      id: currentElId
    });
  }); //double date dropdown

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-date-dropdown__single').each((index, startEndDateInput) => {
    const currentElId = `js-air-datepicker_single${index}`;
    const datepicker1FieldInstance = new _Datepicker1Field_class__WEBPACK_IMPORTED_MODULE_1__["default"]({
      startEndDateInput: startEndDateInput,
      id: currentElId
    });
  });
});

/***/ }),

/***/ "./src/blocks/date-dropdown/utilityForDatepickerClasses.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/date-dropdown/utilityForDatepickerClasses.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAirDatepickerOptions": () => (/* binding */ createAirDatepickerOptions),
/* harmony export */   "formatDateStr": () => (/* binding */ formatDateStr)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function createAirDatepickerOptions(clearBtn, applyBtn, localDatepicker) {
  let inline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const singleDropdown = localDatepicker.dateInput;
  const selectedDatesArray = localDatepicker.createSelectedDatesArray();
  let startDate = selectedDatesArray && selectedDatesArray.length > 0 ? selectedDatesArray[0] : '';

  if (selectedDatesArray === undefined && localDatepicker.dateInput2.value) {
    //only dateEnd is given at first start
    startDate = formatDateStr(localDatepicker.dateInput2.value);
  }

  const options = {
    multipleDates: true,
    multipleDatesSeparator: ' - ',
    buttons: [clearBtn, applyBtn],
    range: true,
    dynamicRange: true,
    moveToOtherMonthsOnSelect: false,
    navTitles: {
      days: 'MMMM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    prevHtml: "<div class ='icon-arrow_back'></div>",
    nextHtml: "<div class ='icon-arrow_forward'></div>",
    inline: inline,
    keyboardNav: true,
    onSelect: dp => onSelectAirDP(dp, localDatepicker),
    onShow: dp => onSelectAirDP(dp, localDatepicker),
    onHide: isFinished => onHideAirDP(isFinished, localDatepicker)
  };

  if (singleDropdown) {
    options.dateFormat = localDatepicker.getDateFormatOptionForPluginCalendar();
  }

  if (selectedDatesArray !== undefined) {
    options.selectedDates = selectedDatesArray;
  }

  if (startDate) {
    options.startDate = startDate;
  }

  return options;
} //from '19.08.2019' to '2019-08-19'


function formatDateStr(dateToFormat) {
  const arr = dateToFormat.split('.');
  return `${arr[2]}-${arr[1]}-${arr[0]}`;
}

function onSelectAirDP(_ref, localDatepicker) {
  let {
    datepicker
  } = _ref;

  if (datepicker === undefined) {
    datepicker = localDatepicker.airDatepicker;
  }

  const date1 = datepicker.selectedDates[0];

  if (datepicker.selectedDates.length === 1) {
    fixFocusCircle(date1, datepicker);
  } //localDatepicker.clearDateFields();


  let [startDate, endDate] = datepicker.selectedDates;

  if (!localDatepicker.dateInput) {
    // for double only
    if (localDatepicker.onlySecondDateAtStart) {
      const date2 = new Date(formatDateStr(localDatepicker.dateInput2.value));
      selectCell(date2, datepicker);
      datepicker.selectDate(date2);
      localDatepicker.onlySecondDateAtStart = false;
    } else {
      if (startDate) {
        localDatepicker.dateInput1.value = startDate.toLocaleDateString();
      }

      if (endDate) {
        localDatepicker.dateInput2.value = endDate.toLocaleDateString();
      }
    }
  }
}

function onHideAirDP(isFinished, localDatepicker) {
  if (!isFinished) {
    return;
  }

  if (localDatepicker.dontSetInputDatesFromPrevDates) {
    localDatepicker.dontSetInputDatesFromPrevDates = false;
    return;
  }

  setInputDatesFromPrevDates(localDatepicker.airDatepicker, localDatepicker);
}

function setInputDatesFromPrevDates(airDP, localDatepicker) {
  localDatepicker.setInputDatesFromPrev();
  const selectedDates = localDatepicker.createSelectedDatesArray();
  const airDPSelectedDatesCopy = [...airDP.selectedDates];
  airDPSelectedDatesCopy.forEach(selectedDate => {
    airDP.unselectDate(selectedDate);
  });

  if (selectedDates !== undefined) {
    airDP.selectDate(selectedDates);
  }
}

function fixFocusCircle(date, airDatepicker) {
  addClassToDateCell(date, ['-range-from-', '-range-to-'], airDatepicker);
}

function selectCell(date, airDatepicker) {
  addClassToDateCell(date, ['-range-from-', '-range-to-', '-selected-'], airDatepicker);
}

function addClassToDateCell(date, classes, airDatepicker) {
  let classToCheck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-focus-';
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
  const $selectedCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector, airDatepicker.$datepicker);

  if ($selectedCell.hasClass(classToCheck)) {
    classes.forEach(className => {
      $selectedCell.addClass(className);
    });
  }
}



/***/ }),

/***/ "./src/blocks/dropdown/Dropdown-class.js":
/*!***********************************************!*\
  !*** ./src/blocks/dropdown/Dropdown-class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Dropdown {
  constructor(dropdownHtml) {
    this.dropdownHtml = dropdownHtml;
    this.listHtml = this.dropdownHtml.querySelector(".js-dropdown__list");
    this.expandBtn = this.dropdownHtml.querySelector(".js-dropdown__expand-btn");
    this.input = this.dropdownHtml.querySelector(".js-dropdown__input");
    this.roundedBottomCorners = this.input.dataset.roundedbottomcorners;
    this.plusBtns = this.dropdownHtml.querySelectorAll(".js-dropdown__plus-btn");
    this.numberElems = this.dropdownHtml.querySelectorAll(".js-dropdown__number");
    this.minusBtns = this.dropdownHtml.querySelectorAll(".js-dropdown__minus-btn");
    this.applyBtn = this.dropdownHtml.querySelector('.js-dropdown__apply-btn');
    this.cleanBtn = this.dropdownHtml.querySelector('.js-dropdown__clean-btn');
    this.initValue = this.input.value;
    this.notSeparatelyMessageHtml = undefined;
    this.groupedListArray = [];
    this.createGroupedListArray();
    this.updateResultText();
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleExpandBtnClick = this.handleExpandBtnClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleApplyBtnClick = this.handleApplyBtnClick.bind(this);
    this.handleCleanBtnClick = this.handleCleanBtnClick.bind(this);
    this.handleCounterBtnClick = this.handleCounterBtnClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  addEventListeners() {
    this.expandBtn.addEventListener("click", this.handleExpandBtnClick);
    this.input.addEventListener("keyup", this.handleInputKeyUp);
    this.input.addEventListener("click", this.handleInputClick);
    this.plusBtns.forEach(plusBtn => {
      plusBtn.addEventListener("click", this.handleCounterBtnClick);
    });
    this.minusBtns.forEach(minusBtn => {
      minusBtn.addEventListener("click", this.handleCounterBtnClick);
      const numberElem = minusBtn.nextElementSibling;
      minusBtn.disabled = numberElem.textContent === "0" ? true : false;
    });

    if (this.cleanBtn) {
      this.setCleanBtnVisibility();
      this.applyBtn.addEventListener("click", this.handleApplyBtnClick);
      this.cleanBtn.addEventListener("click", this.handleCleanBtnClick);
    }
  }

  handleExpandBtnClick(event) {
    event.preventDefault();
    this.toggleDropdown();
  }

  handleInputKeyUp(event) {
    event.preventDefault();

    if (event.key === "Enter") {
      this.toggleDropdown();
    }

    if (event.key === "Escape") {
      console.log('Escape');
      this.toggleDropdown();
    }
  }

  handleInputClick(event) {
    event.preventDefault();
    this.toggleDropdown();
  }

  createGroupedListArray() {
    //создаем сгруппированный массив списка dropboxа: например 
    //массив [{name: "Взрослые", number: 2, declensions: ["гость", "гостя", "гостей"]},
    //        {name: "Дети", number: 1, declensions: ["гость", "гостя", "гостей"]},
    //        {name: "Младенцы", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
    //преобразуется в массив
    //            [{key: "гость", number: 3, declensions: ["гость", "гостя", "гостей"]},         
    //             {key: "младенец", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
    //по этому массиву подсчитываем сгруппированное количество (number) и формируем текст инпута каждый раз при нажатии кнопок + и -,
    // например: "3 гостей, 1 младенец"
    const listArray = JSON.parse(this.listHtml.dataset.list); //все пункты списка с количеством и склонениями

    for (const el of listArray) {
      const elementInGroupedArray = this.groupedListArray.find(elGrouped => elGrouped.key === el.declensions[0]);

      if (elementInGroupedArray) {
        elementInGroupedArray.number = elementInGroupedArray.number + Number(el.number);
      } else {
        this.groupedListArray.push({
          key: el.declensions[0],
          number: Number(el.number),
          declensions: [...el.declensions]
        });
      }
    }
  }

  cleanGroupedListArray() {
    for (const el of this.groupedListArray) {
      el.number = 0;
    }
  }

  toggleDropdown() {
    this.listHtml.classList.toggle("dropdown__list_is-hidden");

    if (this.roundedBottomCorners === "true") {
      this.input.classList.toggle("dropdown__input_rounded-bottom-corners");
    }

    if (!this.listHtml.classList.contains('dropdown__list_is-hidden')) {
      document.addEventListener('click', this.handleDocumentClick);
    }

    this.input.classList.remove('dropdown__input_focus');
  }

  updateGroupedListArray(number, currentItemKey) {
    const currentItem = this.groupedListArray.find(elGrouped => elGrouped.key === currentItemKey);
    currentItem.number += number;
  }

  updateResultText() {
    this.input.value = "";

    for (const el of this.groupedListArray) {
      //окончание на 1 (но не 11) - гость
      //окончание на 2,3,4 ( но не 12,13,14) - гостя
      //окончание на 0 5 6 7 8 9 - гостей
      //окончание на 11, 12, 13, 14 - гостей
      const num = String(el.number);

      if (num === "0") {
        continue;
      }

      const lastDigit = num.substring(num.length - 1);
      const twoLastDigits = num.substring(num.length - 2);
      const comma = this.input.value ? ", " : "";

      if (twoLastDigits === "11" || twoLastDigits === "12" || twoLastDigits === "13" || twoLastDigits === "14" || lastDigit === "0" || lastDigit === "5" || lastDigit === "6" || lastDigit === "7" || lastDigit === "8" || lastDigit === "9") {
        this.input.value += `${comma}${num} ${el.declensions[2]}`;
      } else if (lastDigit === "2" || lastDigit === "3" || lastDigit === "4") {
        this.input.value += `${comma}${num} ${el.declensions[1]}`;
      } else {
        this.input.value += `${comma}${num} ${el.declensions[0]}`;
      }
    }

    if (this.input.value === "") {
      this.input.value = this.initValue;
    }
  }

  handleCounterBtnClick(e) {
    let numberElem;
    let number;
    let btnMinus;
    let plusMinus1 = 1;

    if (e.target.textContent === "+") {
      numberElem = e.target.previousElementSibling;
      btnMinus = numberElem.previousElementSibling;
      number = Number(numberElem.textContent);
      numberElem.textContent = number + 1;
      btnMinus.disabled = false;
    } else {
      numberElem = e.target.nextElementSibling;
      number = Number(numberElem.textContent);
      numberElem.textContent = number - 1;
      e.target.disabled = numberElem.textContent === "0";
      plusMinus1 = -1;
    }

    const currentItemKey = numberElem.dataset.key;
    this.updateGroupedListArray(plusMinus1, currentItemKey);
    this.updateResultText();
    this.setCleanBtnVisibility();
  }

  handleCleanBtnClick() {
    this.numberElems.forEach(numberElem => {
      numberElem.textContent = "0";
      let btnMinus = numberElem.previousElementSibling;
      btnMinus.disabled = true;
    });
    this.cleanGroupedListArray();
    this.setCleanBtnVisibility();
    this.input.value = this.initValue;
  }

  handleApplyBtnClick(event) {
    event.preventDefault();
    this.updateResultText();

    if (this.cantBeSeparateSelected()) {
      this.toggleDropdown();
    }
  }

  handleDocumentClick(e) {
    e.preventDefault();
    const dropdownWithinBoundaries = e.composedPath().includes(this.dropdownHtml);

    if (!dropdownWithinBoundaries) {
      this.toggleDropdown();
      document.removeEventListener("click", this.handleDocumentClick);
    }
  } //- for example infants can't be selected separately


  cantBeSeparateSelected() {
    for (let i = 0; i < this.numberElems.length; i++) {
      const item = this.numberElems[i];
      const notSeparatelyMessage = item.dataset.notseparately;

      if (notSeparatelyMessage && item.textContent !== '0') {
        const somethingElseIsSelected = this.groupedListArray.find(el => el.number > 0 && el.key !== item.dataset.key);

        if (!somethingElseIsSelected) {
          const messageEl = item.parentElement.querySelector('.js-dropdown__notSeparatelyMessage');
          messageEl.classList.add("dropdown__notSeparatelyMessage_visible");
          messageEl.textContent = notSeparatelyMessage;
          this.notSeparatelyMessageHtml = messageEl;
          setTimeout(this.closeMessage, 3000);
          return false;
        }
      }
    }

    return true;
  }

  closeMessage() {
    this.notSeparatelyMessageHtml.classList.remove("dropdown__notSeparatelyMessage_visible");
  }

  setCleanBtnVisibility() {
    if (this.cleanBtn) {
      let allZeros = true;
      this.groupedListArray.forEach(item => {
        if (item.number) {
          allZeros = false;
        }
      });

      if (allZeros) {
        this.cleanBtn.classList.add("dropdown__clean-btn_is-hidden");
      } else {
        this.cleanBtn.classList.remove("dropdown__clean-btn_is-hidden");
      }
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown-class */ "./src/blocks/dropdown/Dropdown-class.js");
/* harmony import */ var _dropdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.scss */ "./src/blocks/dropdown/dropdown.scss");


const dropdowns = document.querySelectorAll('.js-dropdown');
dropdowns.forEach(dropdown => {
  const dropdownInstance = new _Dropdown_class__WEBPACK_IMPORTED_MODULE_0__["default"](dropdown);
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
    this.handleItemHrefKeyUp = this.handleItemHrefKeyUp.bind(this);
  }

  addEventListeners() {
    this.expandBtns.forEach(btn => {
      btn.addEventListener("click", this.handleExpandBtnClick);
      const listItem = btn.parentElement.parentElement;
      listItem.addEventListener("keyup", this.handleItemHrefKeyUp);
    });
  }

  handleExpandBtnClick(e) {
    const submenuToggleBtn = e.target;
    this.toggleSubmenu(submenuToggleBtn);
  }

  toggleSubmenu(toggleBtn) {
    const sublist = toggleBtn.parentElement.nextElementSibling;

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

/***/ "./src/blocks/pagination/Pagination-class.js":
/*!***************************************************!*\
  !*** ./src/blocks/pagination/Pagination-class.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Pagination {
  constructor(paginationHtml, pagesAmount, itemsTotalAmount, itemsOnPage) {
    this.listHtml = paginationHtml.querySelector('.js-pagination__list');
    this.descriptionHtml = paginationHtml.querySelector('.js-pagination__description');
    this.pagesAmount = pagesAmount;
    this.itemsTotalAmount = itemsTotalAmount;
    this.itemsOnPage = itemsOnPage;
    this.paginationItems = [];
    this.activeItem = 0;
    this.bindMethods();
    this.createPaginationList();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemKeyUp = this.handleItemKeyUp.bind(this);
  }

  addEventListeners() {
    this.paginationItems.forEach(item => {
      item.addEventListener("click", this.handleItemClick);
      item.addEventListener("keyup", this.handleItemKeyUp);
    });
  }

  handleItemKeyUp(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handleItemClick(event);
    }
  }

  getPageValue(index) {
    if (this.paginationItems.length > index) {
      return Number(this.paginationItems[index].textContent);
    } else {
      return 1;
    }
  }

  createPaginationList() {
    const activeItemValue = this.getPageValue(this.activeItem);
    this.clearList();

    if (this.pagesAmount === 0) {
      return;
    }

    const lastItem = this.pagesAmount;
    this.createListItem({
      text: activeItemValue,
      active: true
    });

    if (activeItemValue === 1) {
      let i = 0;

      for (i = 2; i < 4 && i <= lastItem; i++) {
        this.createListItem({
          text: i
        });
      }

      this.addEllipsisAndLastNumber(lastItem, 'end', i - 1);
    } else if (activeItemValue === lastItem) {
      let i = 0;

      for (let i = lastItem - 1; i >= lastItem - 2 && i > 0; i--) {
        this.createListItem({
          text: i,
          insert: 'begining'
        });
      }

      this.addEllipsisAndLastNumber(1, 'begining', i - 1);
    } else {
      const firstGroupNum = activeItemValue - 1;
      const lastGroupNum = activeItemValue + 1;
      this.createListItem({
        text: firstGroupNum,
        insert: 'begining'
      });
      this.createListItem({
        text: lastGroupNum,
        insert: 'end'
      });
      this.addEllipsisAndLastNumber(lastItem, 'end', lastGroupNum);
      this.addEllipsisAndLastNumber(1, 'begining', firstGroupNum);
    } //btns


    if (activeItemValue !== 1) {
      this.createListItem({
        btn: 'prev',
        insert: 'begining'
      });
    }

    if (activeItemValue !== lastItem) {
      this.createListItem({
        btn: 'next'
      });
    }

    this.numberItemsAndInsertIntoHtml(activeItemValue);
    this.addEventListeners();
    this.updateDescription();
  }

  addEllipsisAndLastNumber(lastNum, insert, lastGroupNum) {
    const diff = Math.abs(lastGroupNum - lastNum);

    if (diff === 1) {
      //add 4th number without ellipsis
      this.createListItem({
        text: lastNum,
        insert: insert
      });
    } else if (diff > 1) {
      this.createListItem({
        text: '...',
        insert: insert
      });
      this.createListItem({
        text: lastNum,
        insert: insert
      });
    }
  }

  clearList() {
    this.paginationItems = [];

    while (this.listHtml.firstChild) {
      this.listHtml.firstChild.remove();
    }
  }

  createListItem(options) {
    const {
      text,
      active,
      btn,
      insert
    } = options;
    const newPageItem = document.createElement('li');
    newPageItem.className = this.generateClassNamesForListItem(active, btn);
    newPageItem.tabIndex = 0;
    newPageItem.textContent = text;

    if (insert === 'begining') {
      this.paginationItems.unshift(newPageItem);
    } else {
      this.paginationItems.push(newPageItem);
    }
  }

  numberItemsAndInsertIntoHtml(activeItemValue) {
    this.paginationItems.forEach((item, index) => {
      item.value = index;
      this.listHtml.appendChild(item);

      if (item.textContent === String(activeItemValue)) {
        this.activeItem = item.value;
      }
    });
  }

  generateClassNamesForListItem(active, btn) {
    const activeClass = active ? 'pagination__item_active' : '';
    const nextPrevBtnBasicClass = 'pagination__item_next-prev-btn';
    let nextPrevBtnClass = '';

    if (btn) {
      if (btn === 'next') {
        nextPrevBtnClass = `${nextPrevBtnBasicClass} icon-arrow_forward`;
      } else {
        nextPrevBtnClass = `${nextPrevBtnBasicClass} icon-arrow_back`;
      }
    }

    return `pagination__item ${activeClass} ${nextPrevBtnClass}`;
  }

  handleItemClick(e) {
    const currentPageItem = e.target;

    if (currentPageItem.classList.contains('icon-arrow_forward')) {
      const nextItem = this.paginationItems[this.activeItem + 1];
      this.moveActivePage(nextItem);
    } else if (currentPageItem.classList.contains('icon-arrow_back')) {
      const prevItem = this.paginationItems[this.activeItem - 1];
      this.moveActivePage(prevItem);
    } else if (currentPageItem.textContent !== '...') {
      this.moveActivePage(currentPageItem);
    }
  }

  moveActivePage(currentPageItem) {
    this.paginationItems[this.activeItem].classList.remove('pagination__item_active');
    currentPageItem.classList.add('pagination__item_active');
    this.activeItem = currentPageItem.value;
    this.createPaginationList();
  }

  updateDescription() {
    const activePage = this.getPageValue(this.activeItem);
    const itemsOnPageFrom = 12 * (activePage - 1) + 1;
    const itemsOnPageTo = 12 * activePage;
    const itemsTotalAmountTxt = this.itemsTotalAmount > 100 ? '100+' : this.itemsTotalAmount;
    this.descriptionHtml.textContent = `${itemsOnPageFrom} – ${itemsOnPageTo} из ${itemsTotalAmountTxt} вариантов аренды`;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/blocks/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./src/blocks/pagination/pagination.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./src/blocks/pagination/pagination.scss");
/* harmony import */ var _blocks_pagination_Pagination_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/pagination/Pagination-class */ "./src/blocks/pagination/Pagination-class.js");



function initPagination(pagesAmount, itemsTotalAmount, itemsOnPage) {
  const paginationsHtml = document.querySelectorAll('.js-pagination');
  paginationsHtml.forEach(pagination => {
    const paginationInstance = new _blocks_pagination_Pagination_class__WEBPACK_IMPORTED_MODULE_1__["default"](pagination, pagesAmount, itemsTotalAmount, itemsOnPage);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPagination);

/***/ }),

/***/ "./src/blocks/range-slider/RangeSlider-class.js":
/*!******************************************************!*\
  !*** ./src/blocks/range-slider/RangeSlider-class.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);


class RangeSlider {
  constructor(rangeSliderHtml) {
    const options = JSON.parse(rangeSliderHtml.dataset.options);
    this.rangeSliderHtml = rangeSliderHtml;
    this.label = this.rangeSliderHtml.previousElementSibling.querySelector('.range-slider__range');
    this.min = Number(options.min);
    this.max = Number(options.max);
    this.rangeStart = Number(options.rangeStart);
    this.rangeEnd = Number(options.rangeEnd);
    this.sliderFromPlugin = nouislider__WEBPACK_IMPORTED_MODULE_0__.create(this.rangeSliderHtml, {
      start: [this.rangeStart, this.rangeEnd],
      connect: true,
      range: {
        'min': this.min,
        'max': this.max
      }
    });
    this.bindMethods();
    this.sliderFromPlugin.on('change', this.handleSliderChange);
  }

  bindMethods() {
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(values) {
    this.rangeStart = values[0];
    this.rangeEnd = values[1];
    this.updateLabel(values);
  }

  updateLabel(values) {
    const start = `${this.formatNum(this.rangeStart)}₽`;
    const end = `${this.formatNum(this.rangeEnd)}₽`;
    this.label.textContent = `${start} - ${end}`;
  }

  formatNum(value) {
    return new Intl.NumberFormat('ru-RU', {
      maximumFractionDigits: 0
    }).format(value);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSlider);

/***/ }),

/***/ "./src/blocks/range-slider/range-slider.js":
/*!*************************************************!*\
  !*** ./src/blocks/range-slider/range-slider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var _range_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range-slider.scss */ "./src/blocks/range-slider/range-slider.scss");
/* harmony import */ var _RangeSlider_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeSlider-class.js */ "./src/blocks/range-slider/RangeSlider-class.js");



const rangeSliders = document.querySelectorAll('.js-range-slider__slider');
rangeSliders.forEach(rangeSlider => {
  const rangeSliderInstance = new _RangeSlider_class_js__WEBPACK_IMPORTED_MODULE_2__["default"](rangeSlider);
});

/***/ }),

/***/ "./src/blocks/rating/Rating-class.js":
/*!*******************************************!*\
  !*** ./src/blocks/rating/Rating-class.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Rating {
  constructor(ratingHtml) {
    this.ratingHtml = ratingHtml;
    this.itemsHtml = this.ratingHtml.querySelectorAll('.js-rating__item');

    if (ratingHtml.dataset.canbeedited === 'true') {
      this.bindMethods();
      this.addEventListeners();
    }
  }

  bindMethods() {
    this.handleItemMouseOverClick = this.handleItemMouseOverClick.bind(this);
    this.handleItemMouseOut = this.handleItemMouseOut.bind(this);
    this.setVisualRating = this.setVisualRating.bind(this);
  }

  addEventListeners() {
    this.itemsHtml.forEach(element => {
      element.addEventListener('mouseover', this.handleItemMouseOverClick);
      element.addEventListener('mouseout', this.handleItemMouseOut);
      element.addEventListener('click', this.handleItemMouseOverClick);
    });
  }

  handleItemMouseOverClick(e) {
    const eventItem = e.target;
    this.setVisualRating(eventItem);
  }

  handleItemMouseOut(e) {
    const checkedItem = this.ratingHtml.querySelector('.js-rating__item:checked');
    console.log(checkedItem);
    this.setVisualRating(checkedItem);
  }

  setVisualRating(checkedItem) {
    const checkedItemNum = Number(checkedItem.value);
    this.itemsHtml.forEach(element => {
      if (element.value <= checkedItemNum) {
        element.classList.add('icon-star');
        element.classList.remove('icon-star_border');
      } else {
        element.classList.remove('icon-star');
        element.classList.add('icon-star_border');
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rating);

/***/ }),

/***/ "./src/blocks/rating/rating.js":
/*!*************************************!*\
  !*** ./src/blocks/rating/rating.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.scss */ "./src/blocks/rating/rating.scss");
/* harmony import */ var _Rating_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating-class */ "./src/blocks/rating/Rating-class.js");


const ratings = document.querySelectorAll('.js-rating');
ratings.forEach(ratingHtml => {
  const ratingInstance = new _Rating_class__WEBPACK_IMPORTED_MODULE_1__["default"](ratingHtml);
});

/***/ }),

/***/ "./src/blocks/room/Room-class.js":
/*!***************************************!*\
  !*** ./src/blocks/room/Room-class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Room {
  constructor(room) {
    this.room = room;
    this.carouselBtns = this.room.querySelectorAll('.js-carousel__btn');
    this.carousel = this.room.querySelector('.js-carousel');
    this.roomDescription = this.room.querySelector('.js-room__description');
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleRoomFocusIn = this.handleRoomFocusIn.bind(this);
    this.handleRoomFocusOut = this.handleRoomFocusOut.bind(this);
    this.handleRoomKeyUp = this.handleRoomKeyUp.bind(this);
    this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
  }

  addEventListeners() {
    this.room.addEventListener('focusin', this.handleRoomFocusIn);
    this.room.addEventListener('focusout', this.handleRoomFocusOut);
    this.room.addEventListener('keyup', this.handleRoomKeyUp);
    this.roomDescription.addEventListener('click', this.handleDescriptionClick);
  }

  handleRoomFocusIn(event) {
    this.carouselBtns.forEach(btn => {
      btn.classList.add('carousel__btn_visible');
    });
  }

  handleRoomFocusOut(event) {
    this.carouselBtns.forEach(btn => {
      btn.classList.remove('carousel__btn_visible');
    });
  }

  handleRoomKeyUp(event) {
    if (event.key === "Enter") {
      this.redirectToRoomDetailsPage();
    }
  }

  handleDescriptionClick() {
    this.redirectToRoomDetailsPage();
  }

  redirectToRoomDetailsPage() {
    window.location.href = './room-details.html';
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

/***/ }),

/***/ "./src/blocks/room/room.js":
/*!*********************************!*\
  !*** ./src/blocks/room/room.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room.scss */ "./src/blocks/room/room.scss");
/* harmony import */ var _Room_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room-class */ "./src/blocks/room/Room-class.js");
/* harmony import */ var _carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel */ "./src/blocks/carousel/carousel.js");
/* harmony import */ var _rating_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rating/rating */ "./src/blocks/rating/rating.js");




const rooms = document.querySelectorAll('.js-room');
rooms.forEach(room => {
  const roomInstance = new _Room_class__WEBPACK_IMPORTED_MODULE_1__["default"](room);
});

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

/***/ "./src/pages/search-room/search-room.js":
/*!**********************************************!*\
  !*** ./src/pages/search-room/search-room.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-room.scss */ "./src/pages/search-room/search-room.scss");
/* harmony import */ var _page_layout_template_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page-layout/template/template */ "./src/page-layout/template/template.js");
/* harmony import */ var _blocks_checkbox_list_checkbox_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/checkbox-list/checkbox-list */ "./src/blocks/checkbox-list/checkbox-list.js");
/* harmony import */ var _blocks_date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/date-dropdown/date-dropdown */ "./src/blocks/date-dropdown/date-dropdown.js");
/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown */ "./src/blocks/dropdown/dropdown.js");
/* harmony import */ var _blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/pagination/pagination */ "./src/blocks/pagination/pagination.js");
/* harmony import */ var _blocks_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/range-slider/range-slider */ "./src/blocks/range-slider/range-slider.js");
/* harmony import */ var _blocks_room_room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/room/room */ "./src/blocks/room/room.js");






'../../blocks/pagination/pagination';


const itemsOnPage = 12;
const itemsTotalAmount = 180;
const pagesAmount = 15;
(0,_blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__["default"])(pagesAmount, itemsTotalAmount, itemsOnPage);

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

/***/ "./src/blocks/checkbox-list/checkbox-list.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/checkbox-list/checkbox-list.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/date-dropdown/date-dropdown.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/date-dropdown/date-dropdown.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./src/blocks/dropdown/dropdown.scss ***!
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

/***/ "./src/blocks/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./src/blocks/pagination/pagination.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/range-slider/range-slider.scss":
/*!***************************************************!*\
  !*** ./src/blocks/range-slider/range-slider.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/rating/rating.scss":
/*!***************************************!*\
  !*** ./src/blocks/rating/rating.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/room/room.scss":
/*!***********************************!*\
  !*** ./src/blocks/room/room.scss ***!
  \***********************************/
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

/***/ "./src/page-layout/template/template.scss":
/*!************************************************!*\
  !*** ./src/page-layout/template/template.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/search-room/search-room.scss":
/*!************************************************!*\
  !*** ./src/pages/search-room/search-room.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors/jquery","vendors/jquery-mask-plugin","vendors/air-datepicker","vendors/nouislider"], () => (__webpack_exec__("./src/pages/search-room/search-room.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=search-room.js.map