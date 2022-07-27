"use strict";
(globalThis["webpackChunkmetalamp_02"] = globalThis["webpackChunkmetalamp_02"] || []).push([["room-details"],{

/***/ "./src/blocks/booking/Booking-class.js":
/*!*********************************************!*\
  !*** ./src/blocks/booking/Booking-class.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Booking {
  constructor(bookingHtml) {
    this.bookingHtml = bookingHtml;
    const {
      price,
      discount,
      extraservicefee
    } = this.bookingHtml.dataset;
    this.price = formatStrToNumber(price);
    this.discount = formatStrToNumber(discount);
    this.extraServiceFee = formatStrToNumber(extraservicefee);
    this.date1Html = this.bookingHtml.querySelector(".js-date-dropdown__double-start");
    this.date2Html = this.bookingHtml.querySelector(".js-date-dropdown__double-end");
    this.costHtml = this.bookingHtml.querySelector(".js-booking__cost-sum");
    this.costCalcHtml = this.bookingHtml.querySelector(".js-booking__cost-calc");
    this.totalCostHtml = this.bookingHtml.querySelector(".js-booking__total-sum");
    this.bindMethods();
    this.addEventListeners();
    this.init();
  }

  bindMethods() {
    this.handleDateDropdownDoubleStartChange = this.handleDateDropdownDoubleStartChange.bind(this);
  }

  addEventListeners() {
    this.date1Html.addEventListener("change", this.handleDateDropdownDoubleStartChange);
  }

  init() {
    this.updateCost();
  }

  handleDateDropdownDoubleStartChange(e) {
    this.updateCost();
  }

  updateCost() {
    const date1 = makeDateFromInputValue(this.date1Html.value);
    const date2 = makeDateFromInputValue(this.date2Html.value);
    const daysNumber = getDatesDiffInDays(date1, date2);
    const cost = daysNumber * this.price;
    const totalCost = cost - this.discount + this.extraServiceFee;
    this.costCalcHtml.textContent = `${formatNumberToStr(this.price)} x ${daysNumber} суток`;
    this.costHtml.textContent = formatNumberToStr(cost);
    this.totalCostHtml.textContent = formatNumberToStr(totalCost);
  }

}

function getDatesDiffInDays(date1, date2) {
  return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
} //from '19.08.2019' to new Date('2019-08-19')


function makeDateFromInputValue(dateToFormat) {
  const arr = dateToFormat.split('.');
  return new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
}

function formatNumberToStr(number) {
  return `${new Intl.NumberFormat('ru-RU').format(number)}₽`;
}

function formatStrToNumber(strNumber) {
  return Number(strNumber.replace(/\s/g, ''));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);

/***/ }),

/***/ "./src/blocks/booking/booking.js":
/*!***************************************!*\
  !*** ./src/blocks/booking/booking.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booking_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.scss */ "./src/blocks/booking/booking.scss");
/* harmony import */ var _Booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking-class */ "./src/blocks/booking/Booking-class.js");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ "./src/blocks/button/button.js");
/* harmony import */ var _date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date-dropdown/date-dropdown */ "./src/blocks/date-dropdown/date-dropdown.js");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown/dropdown */ "./src/blocks/dropdown/dropdown.js");





const bookingCards = document.querySelectorAll('.js-booking');
bookingCards.forEach(bookingCard => {
  const bookingCardInstance = new _Booking_class__WEBPACK_IMPORTED_MODULE_1__["default"](bookingCard);
});

/***/ }),

/***/ "./src/blocks/bullet-list/bullet-list.js":
/*!***********************************************!*\
  !*** ./src/blocks/bullet-list/bullet-list.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet-list.scss */ "./src/blocks/bullet-list/bullet-list.scss");


/***/ }),

/***/ "./src/blocks/button/button.js":
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/blocks/button/button.scss");


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

/***/ "./src/blocks/diagram/Diagram-class.js":
/*!*********************************************!*\
  !*** ./src/blocks/diagram/Diagram-class.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Diagram {
  constructor(diagram) {
    this.diagram = diagram;
    this.activeSectorNumber = this.diagram.querySelector('.js-diagram__active-sector-number');
    this.activeSectorInfo = this.activeSectorNumber.parentElement;
    this.diagramSectors = this.diagram.querySelectorAll('.js-diagram__item');
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemKeyUp = this.handleItemKeyUp.bind(this);
  }

  addEventListeners() {
    this.diagramSectors.forEach(sector => {
      sector.addEventListener('click', this.handleItemClick);
      sector.addEventListener("keyup", this.handleItemKeyUp);
    });
  }

  handleItemClick(event) {
    const currentSector = event.target;
    const sectorColorIndex = currentSector.dataset.index;
    this.removeSectorColorClasses();
    this.activeSectorInfo.classList.add(`diagram__active-sector-color-${sectorColorIndex}`);
    this.activeSectorNumber.textContent = currentSector.dataset.number;
  }

  removeSectorColorClasses() {
    for (let i = 1; i < 5; i++) {
      this.activeSectorInfo.classList.remove(`diagram__active-sector-color-${i}`);
    }
  }

  handleItemKeyUp(event) {
    if (event.key === "Enter") {
      this.handleItemClick(event);
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Diagram);

/***/ }),

/***/ "./src/blocks/diagram/diagram.js":
/*!***************************************!*\
  !*** ./src/blocks/diagram/diagram.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diagram_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagram.scss */ "./src/blocks/diagram/diagram.scss");
/* harmony import */ var _Diagram_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diagram-class */ "./src/blocks/diagram/Diagram-class.js");


const diagrams = document.querySelectorAll('.js-diagram');
diagrams.forEach(diagram => {
  //console.log(diagram)
  const diagramInstance = new _Diagram_class__WEBPACK_IMPORTED_MODULE_1__["default"](diagram);
});

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

/***/ "./src/blocks/facility/facility.js":
/*!*****************************************!*\
  !*** ./src/blocks/facility/facility.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facility_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facility.scss */ "./src/blocks/facility/facility.scss");


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

/***/ "./src/blocks/like-btn/Like-btn-class.js":
/*!***********************************************!*\
  !*** ./src/blocks/like-btn/Like-btn-class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LikeBtn {
  constructor(likeBtnHtml) {
    this.likeBtnHtml = likeBtnHtml;
    this.likesNumber = this.likeBtnHtml.querySelector('.js-like-btn__number');
    this.icon = this.likeBtnHtml.querySelector('.js-like-btn__icon');
    this.initiallyLikedByCurrentUser = this.likeBtnHtml.dataset.liked === 'true' ? true : false;
    const likesNumber = Number(this.likesNumber.textContent);
    this.likesNumberWithoutCurrentUser = this.initiallyLikedByCurrentUser ? likesNumber - 1 : likesNumber;
    this.bindMethods();
    this.addEventListeners();
  }

  bindMethods() {
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleLikeBtnKeyUp = this.handleLikeBtnKeyUp.bind(this);
  }

  addEventListeners() {
    this.likeBtnHtml.addEventListener('click', this.handleLikeBtnClick);
    this.likeBtnHtml.addEventListener('keyup', this.handleLikeBtnKeyUp);
  }

  handleLikeBtnClick() {
    this.toggleLikesNumber();
    this.toggleVisualLikedStatus();
  }

  toggleLikesNumber() {
    const currentlikesNumber = Number(this.likesNumber.textContent);
    let newLikesNumber = 0;

    if (this.likesNumberWithoutCurrentUser === currentlikesNumber) {
      newLikesNumber = currentlikesNumber + 1;
    } else {
      newLikesNumber = currentlikesNumber - 1;
    }

    this.likesNumber.textContent = newLikesNumber;
  }

  toggleVisualLikedStatus() {
    this.likeBtnHtml.classList.toggle('like-btn_border_unactive');
    this.icon.classList.toggle('like-btn__icon_unactive');
    this.icon.classList.toggle('icon-favorite');
    this.icon.classList.toggle('icon-favorite_border');
  }

  handleLikeBtnKeyUp(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handleLikeBtnClick();
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeBtn);

/***/ }),

/***/ "./src/blocks/like-btn/like-btn.js":
/*!*****************************************!*\
  !*** ./src/blocks/like-btn/like-btn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_btn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-btn.scss */ "./src/blocks/like-btn/like-btn.scss");
/* harmony import */ var _Like_btn_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Like-btn-class */ "./src/blocks/like-btn/Like-btn-class.js");


const likeBtns = document.querySelectorAll(".js-like-btn");
likeBtns.forEach(likeBtnHtml => {
  const likeBtnInstance = new _Like_btn_class__WEBPACK_IMPORTED_MODULE_1__["default"](likeBtnHtml);
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

/***/ "./src/blocks/review/review.js":
/*!*************************************!*\
  !*** ./src/blocks/review/review.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _review_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.scss */ "./src/blocks/review/review.scss");
/* harmony import */ var _blocks_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/like-btn/like-btn */ "./src/blocks/like-btn/like-btn.js");



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

/***/ "./src/pages/room-details/room-details.js":
/*!************************************************!*\
  !*** ./src/pages/room-details/room-details.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details.scss */ "./src/pages/room-details/room-details.scss");
/* harmony import */ var _page_layout_template_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page-layout/template/template */ "./src/page-layout/template/template.js");
/* harmony import */ var _blocks_booking_booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/booking/booking */ "./src/blocks/booking/booking.js");
/* harmony import */ var _blocks_bullet_list_bullet_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/bullet-list/bullet-list */ "./src/blocks/bullet-list/bullet-list.js");
/* harmony import */ var _blocks_diagram_diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/diagram/diagram */ "./src/blocks/diagram/diagram.js");
/* harmony import */ var _blocks_facility_facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/facility/facility */ "./src/blocks/facility/facility.js");
/* harmony import */ var _blocks_review_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/review/review */ "./src/blocks/review/review.js");








/***/ }),

/***/ "./src/blocks/booking/booking.scss":
/*!*****************************************!*\
  !*** ./src/blocks/booking/booking.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/bullet-list/bullet-list.scss":
/*!*************************************************!*\
  !*** ./src/blocks/bullet-list/bullet-list.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/button.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/button.scss ***!
  \***************************************/
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

/***/ "./src/blocks/diagram/diagram.scss":
/*!*****************************************!*\
  !*** ./src/blocks/diagram/diagram.scss ***!
  \*****************************************/
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

/***/ "./src/blocks/facility/facility.scss":
/*!*******************************************!*\
  !*** ./src/blocks/facility/facility.scss ***!
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

/***/ "./src/blocks/like-btn/like-btn.scss":
/*!*******************************************!*\
  !*** ./src/blocks/like-btn/like-btn.scss ***!
  \*******************************************/
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

/***/ "./src/blocks/review/review.scss":
/*!***************************************!*\
  !*** ./src/blocks/review/review.scss ***!
  \***************************************/
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

/***/ "./src/pages/room-details/room-details.scss":
/*!**************************************************!*\
  !*** ./src/pages/room-details/room-details.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors/jquery","vendors/jquery-mask-plugin","vendors/air-datepicker"], () => (__webpack_exec__("./src/pages/room-details/room-details.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=room-details.js.map