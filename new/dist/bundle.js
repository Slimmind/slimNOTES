/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements */ \"./src/javascript/modules/elements.js\");\n/* harmony import */ var _modules_get_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-date */ \"./src/javascript/modules/get-date.js\");\n\n\n\n\n(function (window, document, store) {\n  var DOM = Object(_modules_elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document);\n  var itemArr = store.length > 0 ? JSON.parse(store.getItem('items')) : [];\n  var currentItem = {\n    id: '',\n    parentList: '',\n    DOMIndex: '',\n    arrayIndex: '',\n    arrayData: {}\n  };\n  console.log(\"TEST: \", DOM);\n})(window, document, window.localStorage);\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/modules/elements.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/elements.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return elements; });\nfunction elements(document) {\n  var DOM = {\n    html: document.querySelector('html'),\n    windows: document.querySelector('.window'),\n    itemForm: document.querySelector('#item-form'),\n    itemsList: document.querySelectorAll('.items-list'),\n    todoList: document.querySelector('.todo-list'),\n    noteList: document.querySelector('.note-list'),\n    item: document.querySelectorAll('.item'),\n    expandFormToggler: document.querySelectorAll('[name=\"item-type\"]'),\n    todoBlock: document.querySelector('.todo-block'),\n    noteBlock: document.querySelector('.note-block'),\n    toggleType: document.querySelector('.toggle-type'),\n    navPanel: document.querySelector('.nav-panel'),\n    cancelBtn: document.querySelector('.cancel-btn'),\n    addItemBtn: document.querySelector('.add-item-btn'),\n    menuBtn: document.querySelector('.menu-btn'),\n    createItemBtn: document.querySelector('.create-btn'),\n    deleteItemBtn: document.querySelector('.delete-btn'),\n    changeItemBTn: document.querySelector('.change-btn'),\n    checkBtn: document.querySelectorAll('.check-btn'),\n    showStorageBtn: document.getElementById('show-local-storage'),\n    cleanStorageBtn: document.getElementById('clean-local-storage'),\n    callServiceBtn: document.getElementById('call-service-message'),\n    serviceMessages: document.querySelector('.service-messages'),\n    listTypeInput: document.querySelectorAll('input[name=\"list-type\"]')\n  };\n  return DOM;\n}\n\n//# sourceURL=webpack:///./src/javascript/modules/elements.js?");

/***/ }),

/***/ "./src/javascript/modules/get-date.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/get-date.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDate; });\nfunction getDate() {\n  var dateData = new Date();\n  var fullDate = {\n    year: dateData.getFullYear(),\n    month: parseInt(dateData.getMonth() + 1) < 10 ? \"0\".concat(parseInt(dateData.getMonth() + 1)) : parseInt(dateData.getMonth() + 1),\n    day: dateData.getDate() < 10 ? \"0\".concat(dateData.getDate()) : dateData.getDate()\n  };\n  return \"\".concat(fullDate.year, \"-\").concat(fullDate.month, \"-\").concat(fullDate.day);\n}\n\n//# sourceURL=webpack:///./src/javascript/modules/get-date.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });