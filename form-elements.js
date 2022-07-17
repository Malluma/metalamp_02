"use strict";
(globalThis["webpackChunkmetalamp_02"] = globalThis["webpackChunkmetalamp_02"] || []).push([["form-elements"],{

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
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyboardToggleClick = this.handleKeyboardToggleClick.bind(this);
  }

  addEventListeners() {
    this.expandListBtn.addEventListener('click', this.handleBtnClick);
    this.listLabel.addEventListener('keyup', this.handleKeyboardToggleClick);
  }

  handleBtnClick() {
    this.expandListBtn.classList.toggle('checkbox-list__btn-expand-rotate');
    this.list.classList.toggle('checkbox-list__hidden');
  }

  handleKeyboardToggleClick(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handleBtnClick();
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
    this.handleKeyboardApplyBtnClick = this.handleKeyboardApplyBtnClick.bind(this);
  }

  addEventListeners() {
    this.dateInput.addEventListener("keydown", this.handleKeyboardApplyBtnClick);
  }

  handleKeyboardApplyBtnClick(event) {
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
    this.handleKeyboardApplyBtnClick = this.handleKeyboardApplyBtnClick.bind(this);
  }

  addEventListeners() {
    this.dateInput2.addEventListener('click', this.handleDate2Click);
    this.dateInput1.addEventListener("keydown", this.handleKeyboardApplyBtnClick);
    this.dateInput2.addEventListener("keydown", this.handleKeyboardApplyBtnClick);
  }

  handleKeyboardApplyBtnClick(event) {
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

/***/ "./src/blocks/facility/facility.js":
/*!*****************************************!*\
  !*** ./src/blocks/facility/facility.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facility_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facility.scss */ "./src/blocks/facility/facility.scss");


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
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyboardToggleClick = this.handleKeyboardToggleClick.bind(this);
  }

  addEventListeners() {
    this.likeBtnHtml.addEventListener('click', this.handleBtnClick);
    this.likeBtnHtml.addEventListener('keyup', this.handleKeyboardToggleClick);
  }

  handleBtnClick() {
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

  handleKeyboardToggleClick(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handleBtnClick();
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
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleKeyUpEnter = this.handleKeyUpEnter.bind(this);
  }

  addEventListeners() {
    this.paginationItems.forEach(item => {
      item.addEventListener("click", this.handlePageClick);
      item.addEventListener("keyup", this.handleKeyUpEnter);
    });
  }

  handleKeyUpEnter(event) {
    event.preventDefault();

    if (event.key === 'Enter') {
      this.handlePageClick(event);
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

  handlePageClick(e) {
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

/***/ "./src/blocks/radio/radio.js":
/*!***********************************!*\
  !*** ./src/blocks/radio/radio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ "./src/blocks/radio/radio.scss");


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
    this.handleMouseOverAndClickItem = this.handleMouseOverAndClickItem.bind(this);
    this.handleMouseOutItem = this.handleMouseOutItem.bind(this);
    this.setVisualRating = this.setVisualRating.bind(this);
  }

  addEventListeners() {
    this.itemsHtml.forEach(element => {
      element.addEventListener('mouseover', this.handleMouseOverAndClickItem);
      element.addEventListener('mouseout', this.handleMouseOutItem);
      element.addEventListener('click', this.handleMouseOverAndClickItem);
    });
  }

  handleMouseOverAndClickItem(e) {
    const eventItem = e.target;
    this.setVisualRating(eventItem);
  }

  handleMouseOutItem(e) {
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

/***/ "./src/blocks/toggle/toggle.js":
/*!*************************************!*\
  !*** ./src/blocks/toggle/toggle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ "./src/blocks/toggle/toggle.scss");


/***/ }),

/***/ "./src/pages/form-elements/form-elements.js":
/*!**************************************************!*\
  !*** ./src/pages/form-elements/form-elements.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_elements_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements.scss */ "./src/pages/form-elements/form-elements.scss");
/* harmony import */ var _blocks_bullet_list_bullet_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/bullet-list/bullet-list */ "./src/blocks/bullet-list/bullet-list.js");
/* harmony import */ var _blocks_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/button/button */ "./src/blocks/button/button.js");
/* harmony import */ var _blocks_checkbox_list_checkbox_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/checkbox-list/checkbox-list */ "./src/blocks/checkbox-list/checkbox-list.js");
/* harmony import */ var _blocks_date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/date-dropdown/date-dropdown */ "./src/blocks/date-dropdown/date-dropdown.js");
/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/dropdown/dropdown */ "./src/blocks/dropdown/dropdown.js");
/* harmony import */ var _blocks_facility_facility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/facility/facility */ "./src/blocks/facility/facility.js");
/* harmony import */ var _blocks_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/like-btn/like-btn */ "./src/blocks/like-btn/like-btn.js");
/* harmony import */ var _blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/pagination/pagination */ "./src/blocks/pagination/pagination.js");
/* harmony import */ var _blocks_radio_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/radio/radio */ "./src/blocks/radio/radio.js");
/* harmony import */ var _blocks_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../blocks/range-slider/range-slider */ "./src/blocks/range-slider/range-slider.js");
/* harmony import */ var _blocks_rating_rating_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../blocks/rating/rating.js */ "./src/blocks/rating/rating.js");
/* harmony import */ var _blocks_review_review__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../blocks/review/review */ "./src/blocks/review/review.js");
/* harmony import */ var _blocks_text_field_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../blocks/text-field/text-field */ "./src/blocks/text-field/text-field.js");
/* harmony import */ var _blocks_toggle_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../blocks/toggle/toggle */ "./src/blocks/toggle/toggle.js");















const itemsOnPage = 12;
const itemsTotalAmount = 180;
const pagesAmount = 15;
(0,_blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_8__["default"])(pagesAmount, itemsTotalAmount, itemsOnPage);

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

/***/ "./src/blocks/facility/facility.scss":
/*!*******************************************!*\
  !*** ./src/blocks/facility/facility.scss ***!
  \*******************************************/
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

/***/ "./src/blocks/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./src/blocks/pagination/pagination.scss ***!
  \***********************************************/
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

/***/ "./src/blocks/toggle/toggle.scss":
/*!***************************************!*\
  !*** ./src/blocks/toggle/toggle.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/form-elements/form-elements.scss":
/*!****************************************************!*\
  !*** ./src/pages/form-elements/form-elements.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors/jquery","vendors/jquery-mask-plugin","vendors/air-datepicker","vendors/nouislider"], () => (__webpack_exec__("./src/pages/form-elements/form-elements.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=form-elements.js.map