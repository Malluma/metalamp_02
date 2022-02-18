/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/babel-test_.js":
/*!****************************!*\
  !*** ./src/babel-test_.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const unused = 42;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const arr = Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]

  console.log(`babel-test array [1,2,3]: ${arr}`);
});

/***/ }),

/***/ "./src/blocks/date-dropdown/date-dropdown.js":
/*!***************************************************!*\
  !*** ./src/blocks/date-dropdown/date-dropdown.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");


let applyBtn = {
  content: 'применить',
  className: 'js-date-dropdown__applyBtn',
  onClick: dp => {}
};

function onSelectAirDP(_ref) {
  let {
    datepicker
  } = _ref;
  const [first, second] = datepicker.selectedDates;
  const oneDateSelected = datepicker.selectedDates.length === 1;
  const twoDatesSelected = datepicker.selectedDates.length === 2;

  if (oneDateSelected) {
    fixFocusDisplay(first, datepicker); //this._setState(first, '');
  } else if (twoDatesSelected) {//this._setState(first, second);
  } //this._update(datepicker);

}

function fixFocusDisplay(date, datepicker) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const selector = `.air-datepicker-cell[data-year=${year}][data-month=${month}][data-date=${day}]`;
  const $selectedCell = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector, datepicker.$datepicker);

  if ($selectedCell.hasClass('-focus-')) {
    $selectedCell.addClass('-range-from-');
    $selectedCell.addClass('-range-to-');
    console.log($selectedCell);
  }
}

const calendar = new air_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-date-dropdown__1', {
  multipleDates: true,
  multipleDatesSeparator: ' - ',
  buttons: ['clear', applyBtn],
  range: true,
  dynamicRange: true,
  onSelect: onSelectAirDP
});

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function initDropdown() {
  const dropdowns = document.querySelectorAll(".js-dropdown");
  dropdowns.forEach(dropdown => {
    const arrowBtn = dropdown.querySelector(".js-dropdown__arrow-btn");
    const list = dropdown.querySelector(".js-dropdown__list");
    const input = dropdown.querySelector(".js-dropdown__input");
    const plusBtns = dropdown.querySelectorAll(".js-dropdown__plus-btn");
    const minusBtns = dropdown.querySelectorAll(".js-dropdown__minus-btn");
    const cleanBtn = dropdown.querySelector(".js-dropdown__clean-btn");
    const applyBtn = dropdown.querySelector(".js-dropdown__apply-btn");
    const numberElems = dropdown.querySelectorAll(".js-dropdown__number");
    const initValue = input.value;
    const groupedListArray = [];
    createGroupedListArray();

    function createGroupedListArray() {
      //создаем сгруппированный массив списка dropboxа: например 
      //массив [{name: "Взрослые", number: 2, declensions: ["гость", "гостя", "гостей"]},
      //        {name: "Дети", number: 1, declensions: ["гость", "гостя", "гостей"]},
      //        {name: "Младенцы", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
      //преобразуется в массив
      //            [{key: "гость", number: 3, declensions: ["гость", "гостя", "гостей"]},         
      //             {key: "младенец", number: 1, declensions: ["младенец", "младенца", "младенцев"]}]
      //по этому массиву подсчитываем сгруппированное количество (number) и формируем текст инпута каждый раз при нажатии кнопок + и -,
      // например: "3 гостей, 1 младенец"
      const listArray = JSON.parse(list.dataset.list); //все пункты списка с количеством и склонениями

      for (const el of listArray) {
        const elementInGroupedArray = groupedListArray.find(elGrouped => elGrouped.key === el.declensions[0]);

        if (elementInGroupedArray) {
          elementInGroupedArray.number = elementInGroupedArray.number + Number(el.number);
        } else {
          groupedListArray.push({
            key: el.declensions[0],
            number: Number(el.number),
            declensions: [...el.declensions]
          });
        }
      }
    }

    function cleanGroupedListArray() {
      for (const el of groupedListArray) {
        el.number = 0;
      }
    }

    function toggleDropdown() {
      list.classList.toggle("dropdown__list_is-hidden");
    }

    ;

    function updateGroupedListArray(number, currentItemKey) {
      const currentItem = groupedListArray.find(elGrouped => elGrouped.key === currentItemKey);
      currentItem.number += number;
    }

    function updateResultText() {
      input.value = "";

      for (const el of groupedListArray) {
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
        const comma = input.value ? ", " : "";

        if (twoLastDigits === "11" || twoLastDigits === "12" || twoLastDigits === "13" || twoLastDigits === "14" || lastDigit === "0" || lastDigit === "5" || lastDigit === "6" || lastDigit === "7" || lastDigit === "8" || lastDigit === "9") {
          input.value += `${comma}${num} ${el.declensions[2]}`;
        } else if (lastDigit === "2" || lastDigit === "3" || lastDigit === "4") {
          input.value += `${comma}${num} ${el.declensions[1]}`;
        } else {
          input.value += `${comma}${num} ${el.declensions[0]}`;
        }
      }

      if (input.value === "") {
        input.value = initValue;
      }
    }

    function changeNumber(e) {
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
      updateGroupedListArray(plusMinus1, currentItemKey);
      setCleanBtnVisibility();
    }

    function clean() {
      numberElems.forEach(numberElem => {
        console.log(`number elem ${numberElem}`);
        numberElem.textContent = "0";
        let btnMinus = numberElem.previousElementSibling;
        btnMinus.disabled = true;
      });
      cleanGroupedListArray();
      setCleanBtnVisibility();
      input.value = initValue;
    }

    function apply() {
      updateResultText();
    }

    function setCleanBtnVisibility() {
      if (cleanBtn) {
        let allZeros = true;
        groupedListArray.forEach(item => {
          if (item.number) {
            allZeros = false;
          }
        });

        if (allZeros) {
          cleanBtn.classList.add("dropdown__clean-btn_is-hidden");
        } else {
          cleanBtn.classList.remove("dropdown__clean-btn_is-hidden");
        }
      }
    }

    function initDropdown() {
      updateResultText(); //если дропдаун подан с изначально непустыми значениями

      arrowBtn.addEventListener("click", toggleDropdown);
      plusBtns.forEach(plusBtn => {
        plusBtn.addEventListener("click", changeNumber);
      });
      minusBtns.forEach(minusBtn => {
        minusBtn.addEventListener("click", changeNumber);
        const numberElem = minusBtn.nextElementSibling;
        minusBtn.disabled = numberElem.textContent === "0" ? true : false;
      });

      if (cleanBtn) {
        setCleanBtnVisibility();
        cleanBtn.addEventListener("click", clean);
        applyBtn.addEventListener("click", apply);
      }
    }

    initDropdown();
  }); //forEach dropdown
}

/* harmony default export */ __webpack_exports__["default"] = (initDropdown);

/***/ }),

/***/ "./src/blocks/text-field/text-field.js":
/*!*********************************************!*\
  !*** ./src/blocks/text-field/text-field.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-text-field__input_masked').mask('00.00.0000');
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _babel_test___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./babel-test_ */ "./src/babel-test_.js");
/* harmony import */ var _blocks_text_field_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/text-field/text-field */ "./src/blocks/text-field/text-field.js");
/* harmony import */ var _blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/dropdown/dropdown */ "./src/blocks/dropdown/dropdown.js");
/* harmony import */ var _blocks_date_dropdown_date_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/date-dropdown/date-dropdown */ "./src/blocks/date-dropdown/date-dropdown.js");





console.log('Hello, I am index.js!!');
(0,_babel_test___WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_blocks_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmetalamp_02"] = self["webpackChunkmetalamp_02"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_air-datepicker_index_es_js-node_modules_jquery-mask-plugin_dist_jquery_mask_js"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map