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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/handlers/handler-add-item.js":
/*!*****************************************!*\
  !*** ./js/handlers/handler-add-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addItemHandler; });\nfunction addItemHandler() {\n  vars.DOM.html.classList.add('no-scroll');\n  vars.DOM.itemForm.classList.add('active-window', 'create-form');\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-add-item.js?");

/***/ }),

/***/ "./js/handlers/handler-cancel-todo-filters.js":
/*!****************************************************!*\
  !*** ./js/handlers/handler-cancel-todo-filters.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cancelTodoFilters; });\n/* harmony import */ var _modules_render_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render-items */ \"./js/modules/render-items.js\");\n\nfunction cancelTodoFilters() {\n  Object(_modules_render_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vars.tempStore);\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-cancel-todo-filters.js?");

/***/ }),

/***/ "./js/handlers/handler-cancel.js":
/*!***************************************!*\
  !*** ./js/handlers/handler-cancel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cancelHandler; });\n/* harmony import */ var _handler_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler-close */ \"./js/handlers/handler-close.js\");\n\nfunction cancelHandler(event) {\n  event.preventDefault();\n  Object(_handler_close__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vars.DOM.windows, 'active-window, edit-form, todo-form, create-form');\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-cancel.js?");

/***/ }),

/***/ "./js/handlers/handler-close.js":
/*!**************************************!*\
  !*** ./js/handlers/handler-close.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return closeHandler; });\n/* harmony import */ var _helpers_clear_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/clear-form */ \"./js/helpers/clear-form.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction closeHandler(elem, classToRemove) {\n  vars.currentItem = {};\n  var classes = classToRemove.replace(/ /g, '').split(',');\n\n  if (vars.DOM.html.classList.contains('no-scroll')) {\n    vars.DOM.html.classList.remove('no-scroll');\n  }\n\n  if (elem && classes.length) {\n    var _iterator = _createForOfIteratorHelper(classes),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var className = _step.value;\n        elem.classList.contains(className) && elem.classList.remove(className);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    ;\n  }\n\n  vars.DOM.todoBlock.classList.remove('hidden');\n  Object(_helpers_clear_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-close.js?");

/***/ }),

/***/ "./js/handlers/handler-create-item.js":
/*!********************************************!*\
  !*** ./js/handlers/handler-create-item.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createHandlerItem; });\n/* harmony import */ var _helpers_set_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/set-store */ \"./js/helpers/set-store.js\");\n/* harmony import */ var _helpers_generate_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/generate-id */ \"./js/helpers/generate-id.js\");\n/* harmony import */ var _helpers_get_form_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/get-form-data */ \"./js/helpers/get-form-data.js\");\n/* harmony import */ var _helpers_get_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/get-date */ \"./js/helpers/get-date.js\");\n/* harmony import */ var _modules_render_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/render-item */ \"./js/modules/render-item.js\");\n/* harmony import */ var _handler_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handler-close */ \"./js/handlers/handler-close.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction createHandlerItem() {\n  var fullItemData = {};\n\n  if (vars.DOM.itemForm.itemType === 'todo') {\n    fullItemData = _objectSpread({}, Object(_helpers_get_form_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(vars.DOM.itemForm), {\n      itemId: Object(_helpers_generate_id__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      itemCreationDate: Object(_helpers_get_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      todoDone: false\n    });\n  } else {\n    fullItemData = _objectSpread({}, Object(_helpers_get_form_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(vars.DOM.itemForm), {\n      itemId: Object(_helpers_generate_id__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n      itemCreationDate: Object(_helpers_get_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    });\n  }\n\n  vars.tempStore.push(fullItemData);\n  Object(_helpers_set_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_render_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(fullItemData);\n  Object(_handler_close__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(vars.DOM.windows, 'active-window, todo-form, create-form');\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-create-item.js?");

/***/ }),

/***/ "./js/handlers/handler-delete-item.js":
/*!********************************************!*\
  !*** ./js/handlers/handler-delete-item.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteItemHandler; });\n/* harmony import */ var _helpers_set_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/set-store */ \"./js/helpers/set-store.js\");\n/* harmony import */ var _handler_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handler-close */ \"./js/handlers/handler-close.js\");\n\n\nfunction deleteItemHandler(event) {\n  event.preventDefault();\n  console.log(\"=^..^= \", vars.currentItem);\n  vars.tempStore = vars.tempStore.filter(function (note) {\n    return note.itemId !== vars.currentItem.id;\n  });\n  Object(_helpers_set_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  vars.currentItem.parentList.removeChild(document.getElementById(vars.currentItem.id));\n  Object(_handler_close__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vars.DOM.windows, \"active-window\");\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-delete-item.js?");

/***/ }),

/***/ "./js/handlers/handler-edit-item.js":
/*!******************************************!*\
  !*** ./js/handlers/handler-edit-item.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return editItemHandler; });\n/* harmony import */ var _handler_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler-close */ \"./js/handlers/handler-close.js\");\n/* harmony import */ var _helpers_update_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/update-item */ \"./js/helpers/update-item.js\");\n/* harmony import */ var _helpers_get_form_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/get-form-data */ \"./js/helpers/get-form-data.js\");\n/* harmony import */ var _helpers_clear_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/clear-form */ \"./js/helpers/clear-form.js\");\n/* harmony import */ var _helpers_set_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/set-store */ \"./js/helpers/set-store.js\");\n\n\n\n\n\nfunction editItemHandler(event) {\n  event.preventDefault();\n  var changedData = Object(_helpers_get_form_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(vars.DOM.itemForm);\n  var changedProps = 0;\n\n  for (var prop in changedData) {\n    console.log(\"PROP: \", vars.currentItem.arrayData[prop]);\n\n    if (changedData[prop] !== vars.currentItem.arrayData[prop]) {\n      vars.tempStore[vars.currentItem.arrayIndex][prop] = changedData[prop];\n      changedProps += 1;\n    }\n  }\n\n  console.log(\"CHANGED PROPS: \", changedProps);\n\n  if (changedProps > 0) {\n    Object(_helpers_set_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    Object(_helpers_update_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(changedData);\n    Object(_handler_close__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vars.DOM.windows, 'active-window, edit-form');\n    Object(_helpers_clear_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  } else {\n    Object(_handler_close__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vars.DOM.windows, 'active-window');\n    Object(_helpers_clear_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-edit-item.js?");

/***/ }),

/***/ "./js/handlers/handler-filter-todo.js":
/*!********************************************!*\
  !*** ./js/handlers/handler-filter-todo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filterTodoHandler; });\n/* harmony import */ var _modules_render_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/render-items */ \"./js/modules/render-items.js\");\n\nfunction filterTodoHandler(target) {\n  var filteredItems = [];\n\n  if (target.classList.contains(\"urgent\")) {\n    filteredItems = vars.tempStore.filter(function (item) {\n      return item.todoStatus === \"urgent\";\n    });\n  } else if (target.classList.contains(\"warning\")) {\n    filteredItems = vars.tempStore.filter(function (item) {\n      return item.todoStatus === \"warning\";\n    });\n  } else {\n    filteredItems = vars.tempStore.filter(function (item) {\n      return item.todoStatus === \"normal\";\n    });\n  }\n\n  Object(_modules_render_items__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredItems);\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-filter-todo.js?");

/***/ }),

/***/ "./js/handlers/handler-open-item.js":
/*!******************************************!*\
  !*** ./js/handlers/handler-open-item.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openItemHandler; });\n/* harmony import */ var _helpers_fill_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/fill-form */ \"./js/helpers/fill-form.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction openItemHandler(event) {\n  var targetItem = event.target;\n  var id = event.target.getAttribute('id');\n  var arrayIndex = vars.tempStore.findIndex(function (item) {\n    return item.itemId === id;\n  });\n  vars.currentItem = {\n    itemType: vars.tempStore[arrayIndex].itemType,\n    id: id,\n    parentList: targetItem.parentNode,\n    DOMIndex: _toConsumableArray(targetItem.parentNode.querySelectorAll('.item')).indexOf(targetItem),\n    arrayIndex: arrayIndex,\n    arrayData: vars.tempStore[arrayIndex]\n  };\n  vars.DOM.itemForm.classList.add('edit-form');\n\n  if (vars.currentItem.arrayData.itemType === 'todo') {\n    vars.DOM.itemForm.classList.add('todo-form');\n  }\n\n  Object(_helpers_fill_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vars.currentItem.arrayData);\n}\n\n//# sourceURL=webpack:///./js/handlers/handler-open-item.js?");

/***/ }),

/***/ "./js/helpers/check-over-due.js":
/*!**************************************!*\
  !*** ./js/helpers/check-over-due.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkOverDue; });\n/* harmony import */ var _get_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-date */ \"./js/helpers/get-date.js\");\n\nfunction checkOverDue(obj) {\n  return new Date(obj.todoExpDate) < new Date(Object(_get_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) ? 'overdue' : '';\n}\n\n//# sourceURL=webpack:///./js/helpers/check-over-due.js?");

/***/ }),

/***/ "./js/helpers/clear-form.js":
/*!**********************************!*\
  !*** ./js/helpers/clear-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearForm; });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction clearForm() {\n  var forms = document.querySelectorAll(\"form\");\n\n  var _iterator = _createForOfIteratorHelper(forms),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var form = _step.value;\n\n      (function (form) {\n        return form.reset();\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./js/helpers/clear-form.js?");

/***/ }),

/***/ "./js/helpers/close-nav.js":
/*!*********************************!*\
  !*** ./js/helpers/close-nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return closeNav; });\nfunction closeNav() {\n  vars.DOM.navPanel.classList.remove(\"menu-is-open\");\n  document.removeEventListener(\"click\", closeNav);\n}\n\n//# sourceURL=webpack:///./js/helpers/close-nav.js?");

/***/ }),

/***/ "./js/helpers/fill-form.js":
/*!*********************************!*\
  !*** ./js/helpers/fill-form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillForm; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction fillForm(obj) {\n  vars.DOM.itemForm.querySelector(\"[value=\\\"\".concat(obj.itemType, \"\\\"]\")).checked = true;\n  vars.DOM.itemForm.querySelector(\"[name=\\\"item-title\\\"]\").value = obj.itemTitle;\n  vars.DOM.itemForm.querySelector(\"[name=\\\"item-text\\\"]\").value = obj.itemText;\n  vars.DOM.itemForm.querySelector(\"[name=\\\"todo-exp-date\\\"]\").value = obj.todoExpDate;\n  vars.DOM.itemForm.classList.add(\"active-window\");\n  var checkboxes = vars.DOM.itemForm.querySelectorAll(\"[name=\\\"todo-status\\\"]\");\n\n  _toConsumableArray(checkboxes).forEach(function (checky) {\n    checky.checked = checky.value === obj.todoStatus;\n  });\n}\n\n//# sourceURL=webpack:///./js/helpers/fill-form.js?");

/***/ }),

/***/ "./js/helpers/generate-id.js":
/*!***********************************!*\
  !*** ./js/helpers/generate-id.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateID; });\nfunction generateID() {\n  return Math.random().toString(36).substr(2, 9);\n}\n\n//# sourceURL=webpack:///./js/helpers/generate-id.js?");

/***/ }),

/***/ "./js/helpers/get-date.js":
/*!********************************!*\
  !*** ./js/helpers/get-date.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDate; });\nfunction getDate() {\n  var dateData = new Date();\n  var fullDate = {\n    year: dateData.getFullYear(),\n    month: parseInt(dateData.getMonth() + 1) < 10 ? \"0\".concat(parseInt(dateData.getMonth() + 1)) : parseInt(dateData.getMonth() + 1),\n    day: dateData.getDate() < 10 ? \"0\".concat(dateData.getDate()) : dateData.getDate()\n  };\n  return \"\".concat(fullDate.year, \"-\").concat(fullDate.month, \"-\").concat(fullDate.day);\n}\n\n//# sourceURL=webpack:///./js/helpers/get-date.js?");

/***/ }),

/***/ "./js/helpers/get-form-data.js":
/*!*************************************!*\
  !*** ./js/helpers/get-form-data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getFormData; });\n/* harmony import */ var _helpers_get_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/get-date */ \"./js/helpers/get-date.js\");\n\nfunction getFormData(form) {\n  var type = form.querySelector(\"[name=\\\"item-type\\\"]:checked\").value;\n  var dataObj;\n\n  if (type === \"todo\") {\n    dataObj = {\n      itemType: type,\n      itemTitle: form.querySelector(\"[name=\\\"item-title\\\"]\").value || \"...\",\n      itemText: form.querySelector(\"[name=\\\"item-text\\\"]\").value || \" \",\n      todoExpDate: form.querySelector(\"[name=\\\"todo-exp-date\\\"]\").value || Object(_helpers_get_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n      todoStatus: form.querySelector(\"[name=\\\"todo-status\\\"]:checked\").value\n    };\n  } else {\n    dataObj = {\n      itemType: type,\n      itemTitle: form.querySelector(\"[name=\\\"item-title\\\"]\").value || \"...\",\n      itemText: form.querySelector(\"[name=\\\"item-text\\\"]\").value || \"...\",\n      itemColor: form.querySelector(\"[name=\\\"item-color\\\"]\").value\n    };\n  }\n\n  return dataObj;\n}\n\n//# sourceURL=webpack:///./js/helpers/get-form-data.js?");

/***/ }),

/***/ "./js/helpers/hide-overlay.js":
/*!************************************!*\
  !*** ./js/helpers/hide-overlay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hideOverlay; });\nfunction hideOverlay() {\n  vars.DOM.html.classList.remove(\"overlay\");\n}\n\n//# sourceURL=webpack:///./js/helpers/hide-overlay.js?");

/***/ }),

/***/ "./js/helpers/open-nav.js":
/*!********************************!*\
  !*** ./js/helpers/open-nav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openNav; });\n/* harmony import */ var _close_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-nav */ \"./js/helpers/close-nav.js\");\n\nfunction openNav() {\n  vars.DOM.navPanel.classList.add(\"menu-is-open\");\n  setTimeout(function () {\n    document.addEventListener(\"click\", _close_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }, 100);\n}\n\n//# sourceURL=webpack:///./js/helpers/open-nav.js?");

/***/ }),

/***/ "./js/helpers/set-store.js":
/*!*********************************!*\
  !*** ./js/helpers/set-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setStore; });\nfunction setStore() {\n  window.localStorage.setItem(\"items\", JSON.stringify(vars.tempStore));\n}\n\n//# sourceURL=webpack:///./js/helpers/set-store.js?");

/***/ }),

/***/ "./js/helpers/show-overlay.js":
/*!************************************!*\
  !*** ./js/helpers/show-overlay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showOverlay; });\nfunction showOverlay() {\n  vars.DOM.html.classList.add(\"overlay\");\n}\n\n//# sourceURL=webpack:///./js/helpers/show-overlay.js?");

/***/ }),

/***/ "./js/helpers/todo-counter.js":
/*!************************************!*\
  !*** ./js/helpers/todo-counter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return todoCounter; });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction todoCounter() {\n  var todoTypes = {\n    normal: 0,\n    warning: 0,\n    urgent: 0\n  };\n\n  todoFilterNormal: document.querySelector('todo-filter.normal');\n\n  var _iterator = _createForOfIteratorHelper(vars.tempStore),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var todo = _step.value;\n\n      if (todo.itemType === \"todo\") {\n        switch (todo.todoStatus) {\n          case \"urgent\":\n            todoTypes.urgent += 1;\n            break;\n\n          case \"warning\":\n            todoTypes.warning += 1;\n            break;\n\n          default:\n            todoTypes.normal += 1;\n        }\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  console.log(\"FILTER: \", todoTypes);\n  vars.DOM.todoFilterNormal.setAttribute(\"data-amount\", todoTypes.normal);\n  vars.DOM.todoFilterWarning.setAttribute(\"data-amount\", todoTypes.warning);\n  vars.DOM.todoFilterUrgent.setAttribute(\"data-amount\", todoTypes.urgent);\n}\n\n//# sourceURL=webpack:///./js/helpers/todo-counter.js?");

/***/ }),

/***/ "./js/helpers/update-item.js":
/*!***********************************!*\
  !*** ./js/helpers/update-item.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateItem; });\n/* harmony import */ var _check_over_due__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-over-due */ \"./js/helpers/check-over-due.js\");\n\nfunction updateItem(itemData) {\n  var type = vars.currentItem.itemType;\n  var item = type === \"todo\" ? vars.DOM.todos[vars.currentItem.DOMIndex] : vars.DOM.notes[vars.currentItem.DOMIndex];\n  item.querySelector(\".item-title\").textContent = itemData.itemTitle;\n  item.querySelector(\".item-text\").textContent = itemData.itemText;\n\n  if (type === \"todo\") {\n    item.querySelector(\".todo-date\").textContent = itemData.todoExpDate;\n    item.setAttribute(\"class\", \"item todo \".concat(itemData.todoStatus, \" \").concat(Object(_check_over_due__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemData)));\n    item.setAttribute(\"data-todo-symbol\", itemData.itemTitle.charAt(0));\n  }\n}\n\n//# sourceURL=webpack:///./js/helpers/update-item.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements */ \"./js/modules/elements.js\");\n/* harmony import */ var _modules_get_item_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-item-json */ \"./js/modules/get-item-json.js\");\n/* harmony import */ var _modules_render_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render-items */ \"./js/modules/render-items.js\");\n/* harmony import */ var _modules_render_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render-item */ \"./js/modules/render-item.js\");\n/* harmony import */ var _modules_service_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/service-message */ \"./js/modules/service-message.js\");\n/* harmony import */ var _modules_reset_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/reset-form */ \"./js/modules/reset-form.js\");\n/* harmony import */ var _modules_toggle_item_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/toggle-item-list */ \"./js/modules/toggle-item-list.js\");\n/* harmony import */ var _helpers_get_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/get-date */ \"./js/helpers/get-date.js\");\n/* harmony import */ var _helpers_todo_counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/todo-counter */ \"./js/helpers/todo-counter.js\");\n/* harmony import */ var _helpers_open_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/open-nav */ \"./js/helpers/open-nav.js\");\n/* harmony import */ var _handlers_handler_add_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handlers/handler-add-item */ \"./js/handlers/handler-add-item.js\");\n/* harmony import */ var _handlers_handler_create_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handlers/handler-create-item */ \"./js/handlers/handler-create-item.js\");\n/* harmony import */ var _handlers_handler_open_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers/handler-open-item */ \"./js/handlers/handler-open-item.js\");\n/* harmony import */ var _handlers_handler_edit_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./handlers/handler-edit-item */ \"./js/handlers/handler-edit-item.js\");\n/* harmony import */ var _handlers_handler_cancel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./handlers/handler-cancel */ \"./js/handlers/handler-cancel.js\");\n/* harmony import */ var _handlers_handler_filter_todo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./handlers/handler-filter-todo */ \"./js/handlers/handler-filter-todo.js\");\n/* harmony import */ var _handlers_handler_cancel_todo_filters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./handlers/handler-cancel-todo-filters */ \"./js/handlers/handler-cancel-todo-filters.js\");\n/* harmony import */ var _handlers_handler_delete_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./handlers/handler-delete-item */ \"./js/handlers/handler-delete-item.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// TODO: group functions e.g. \"handlers\", \"helpers\"...\n\n\n\n\n\n\n\n // HELPERS\n\n\n\n //HANDLERS\n\n\n\n\n\n\n\n\n\n\n(function (window, document, store) {\n  window.vars = window.vars || {};\n  vars = _objectSpread({}, vars, {\n    DOM: Object(_modules_elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document),\n    currentItem: {\n      itemType: \"\",\n      id: \"\",\n      parentList: \"\",\n      DOMIndex: \"\",\n      arrayIndex: \"\",\n      arrayData: {}\n    },\n    tempStore: store.getItem(\"items\") ? JSON.parse(store.getItem(\"items\")) : [],\n    filteredTodos: []\n  });\n  Object(_modules_render_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(vars.tempStore);\n  Object(_modules_toggle_item_list__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(vars.DOM); // ADD ITEM (opens AddITEM form)\n\n  vars.DOM.addItemBtn.addEventListener(\"click\", function () {\n    return Object(_handlers_handler_add_item__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(vars.DOM);\n  }); // CREATE ITEM\n\n  vars.DOM.createItemBtn.addEventListener(\"click\", function (event, store) {\n    event.preventDefault();\n    Object(_handlers_handler_create_item__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(vars.DOM, vars.tempStore);\n  }); // OPEN ITEM\n\n  for (var _i = 0, _arr = _toConsumableArray(vars.DOM.itemsList); _i < _arr.length; _i++) {\n    var list = _arr[_i];\n    list.addEventListener(\"click\", function (event) {\n      if (event.target.classList.contains(\"item\")) {\n        vars.DOM.html.classList.add(\"no-scroll\");\n        Object(_handlers_handler_open_item__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(event);\n      }\n    });\n  }\n\n  ; // EDIT ITEM\n\n  vars.DOM.changeItemBtn.addEventListener(\"click\", function (event) {\n    return Object(_handlers_handler_edit_item__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(event);\n  }); // DELETE ITEM\n\n  vars.DOM.deleteItemBtn.addEventListener(\"click\", function (event) {\n    return Object(_handlers_handler_delete_item__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(event);\n  }); // CANCEL\n\n  vars.DOM.cancelBtn.addEventListener(\"click\", function (event) {\n    return Object(_handlers_handler_cancel__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(event, vars.DOM);\n  }); // MENU BTN\n\n  vars.DOM.menuBtn.addEventListener(\"click\", function () {\n    Object(_helpers_open_nav__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    Object(_helpers_todo_counter__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  }); // TODO FILTERS\n\n  var _iterator = _createForOfIteratorHelper(vars.DOM.todoFilters),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var filter = _step.value;\n      filter.addEventListener(\"click\", function (event) {\n        Object(_handlers_handler_filter_todo__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(event.target);\n      });\n    } // CANCEL FILTERS\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  vars.DOM.cancelTodoFilters.addEventListener(\"click\", _handlers_handler_cancel_todo_filters__WEBPACK_IMPORTED_MODULE_17__[\"default\"]); // SHOW STORAGE\n\n  vars.DOM.showStorageBtn.addEventListener(\"click\", function () {\n    console.log(\"STORAGE\");\n    Object(_modules_service_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"success\", \"Test Message\", \"lorem ipsum dolor sit amet\");\n  });\n})(window, document, window.localStorage);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/elements.js":
/*!********************************!*\
  !*** ./js/modules/elements.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return elements; });\nfunction elements(document) {\n  var DOM = {\n    html: document.querySelector(\"html\"),\n    windows: document.querySelector(\".window\"),\n    itemForm: document.getElementById(\"item-form\"),\n    itemsList: document.querySelectorAll(\".items-list\"),\n    todoList: document.querySelector(\".todo-list\"),\n    noteList: document.querySelector(\".note-list\"),\n    item: document.querySelectorAll(\".item\"),\n    todos: document.getElementsByClassName(\"todo\"),\n    notes: document.getElementsByClassName(\"note\"),\n    expandFormToggler: document.querySelectorAll(\"[name=\\\"item-type\\\"]\"),\n    todoBlock: document.querySelector(\".todo-block\"),\n    noteBlock: document.querySelector(\".note-block\"),\n    toggleType: document.querySelector(\".toggle-type\"),\n    navPanel: document.querySelector(\".nav-panel\"),\n    cancelBtn: document.querySelector(\".cancel-btn\"),\n    addItemBtn: document.querySelector(\".add-item-btn\"),\n    menuBtn: document.querySelector(\".menu-btn\"),\n    createItemBtn: document.querySelector(\".create-btn\"),\n    deleteItemBtn: document.querySelector(\".delete-btn\"),\n    changeItemBtn: document.querySelector(\".change-btn\"),\n    checkBtn: document.querySelectorAll(\".check-btn\"),\n    showStorageBtn: document.getElementById(\"show-local-storage\"),\n    cleanStorageBtn: document.getElementById(\"clean-local-storage\"),\n    callServiceBtn: document.getElementById(\"call-service-message\"),\n    serviceMessages: document.querySelector(\".service-messages\"),\n    listTypeInput: document.querySelectorAll(\"input[name=\\\"list-type\\\"]\"),\n    todoFilters: document.querySelectorAll(\".todo-filter\"),\n    todoFilterNormal: document.querySelector(\".todo-filter.normal\"),\n    todoFilterWarning: document.querySelector(\".todo-filter.warning\"),\n    todoFilterUrgent: document.querySelector(\".todo-filter.urgent\"),\n    cancelTodoFilters: document.querySelector(\".cancel-todo-filters\")\n  };\n  return DOM;\n}\n\n//# sourceURL=webpack:///./js/modules/elements.js?");

/***/ }),

/***/ "./js/modules/get-item-json.js":
/*!*************************************!*\
  !*** ./js/modules/get-item-json.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getItemJSON; });\nfunction getItemJSON(id) {\n  return itemArr.find(function (item) {\n    return item.itemId === id;\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/get-item-json.js?");

/***/ }),

/***/ "./js/modules/render-item.js":
/*!***********************************!*\
  !*** ./js/modules/render-item.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderItem; });\n/* harmony import */ var _render_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-todo */ \"./js/modules/render-todo.js\");\n/* harmony import */ var _render_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-note */ \"./js/modules/render-note.js\");\n\n\nfunction renderItem(obj) {\n  if (obj.itemType === \"todo\") {\n    Object(_render_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\n  } else {\n    Object(_render_note__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/render-item.js?");

/***/ }),

/***/ "./js/modules/render-items.js":
/*!************************************!*\
  !*** ./js/modules/render-items.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderItems; });\n/* harmony import */ var _render_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-item */ \"./js/modules/render-item.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction renderItems(arr) {\n  console.table(arr);\n  vars.DOM.todoList.innerHTML = '';\n  vars.DOM.noteList.innerHTML = '';\n\n  var _iterator = _createForOfIteratorHelper(arr),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      Object(_render_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/render-items.js?");

/***/ }),

/***/ "./js/modules/render-note.js":
/*!***********************************!*\
  !*** ./js/modules/render-note.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderNote; });\nfunction renderNote(obj) {\n  var item = \"<div class=\\\"item note \\\" id=\\\"\".concat(obj.itemId, \"\\\" style=\\\"background-color: \").concat(obj.itemColor, \"\\\">\\n    <h3 class=\\\"item-title\\\">\").concat(obj.itemTitle, \"</h3>\\n    <p class=\\\"item-text\\\">\").concat(obj.itemText, \"</p>\\n    </div>\");\n  vars.DOM.noteList.insertAdjacentHTML('beforeend', item);\n}\n\n//# sourceURL=webpack:///./js/modules/render-note.js?");

/***/ }),

/***/ "./js/modules/render-todo.js":
/*!***********************************!*\
  !*** ./js/modules/render-todo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTodo; });\n/* harmony import */ var _helpers_check_over_due__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/check-over-due */ \"./js/helpers/check-over-due.js\");\n\nfunction renderTodo(obj, itemsList) {\n  var item = \"<div class=\\\"item todo \".concat(obj.todoStatus, \" \").concat(obj.todoDone ? 'done' : null, \" \").concat(Object(_helpers_check_over_due__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj), \"\\\"\\n        id=\\\"\").concat(obj.itemId, \"\\\"\\n        data-todo-symbol=\\\"\").concat(obj.itemTitle.charAt(0), \"\\\">\\n            <h3 class=\\\"item-title\\\">\").concat(obj.itemTitle, \"</h3>\\n            \").concat(obj.itemText ? '<p class=\"item-text\">' + obj.itemText + '</p>' : '', \"\\n            <small class=\\\"todo-date\\\">\").concat(obj.todoExpDate.split('-').reverse().join('-'), \"</small>\\n            <span class=\\\"check-btn\\\"></span>\\n        </div>\\n        \");\n\n  if (itemsList === \"filter\") {\n    vars.DOM.filterList.insertAdjacentHTML(\"beforeend\", item);\n  } else {\n    vars.DOM.todoList.insertAdjacentHTML(\"beforeend\", item);\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/render-todo.js?");

/***/ }),

/***/ "./js/modules/reset-form.js":
/*!**********************************!*\
  !*** ./js/modules/reset-form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return resetForm; });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction resetForm() {\n  var forms = document.querySelectorAll('form');\n\n  var _iterator = _createForOfIteratorHelper(forms),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      form = _step.value;\n      form.reset();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/reset-form.js?");

/***/ }),

/***/ "./js/modules/service-message.js":
/*!***************************************!*\
  !*** ./js/modules/service-message.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return serviceMessage; });\n/* harmony import */ var _helpers_show_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/show-overlay */ \"./js/helpers/show-overlay.js\");\n/* harmony import */ var _helpers_hide_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hide-overlay */ \"./js/helpers/hide-overlay.js\");\n\n\nfunction serviceMessage() {\n  var messageType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"info\";\n  var messageTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var messageText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var message = \"\\n    <div class=\\\"service-message \".concat(messageType, \"\\\">\\n    <strong class=\\\"close-message\\\" role=\\\"button\\\" aria-label=\\\"close-message\\\"></strong>\\n    <h3 class=\\\"message-title\\\">\").concat(messageTitle, \"</h3>\\n    <div class=\\\"message-text\\\">\\n    <p>\").concat(messageText, \"</p>\\n    </div>\\n    </div>\\n    \");\n  Object(_helpers_show_overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  vars.DOM.serviceMessages.classList.add(\"active\");\n  vars.DOM.serviceMessages.insertAdjacentHTML(\"beforeend\", message);\n  vars.DOM.serviceMessages.addEventListener(\"click\", function (event) {\n    if (!event.target.classList.contains(\"service-message\")) {\n      Object(_helpers_hide_overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      vars.DOM.serviceMessages.classList.remove(\"active\");\n      setTimeout(function () {\n        vars.DOM.serviceMessages.innerHTML = \"\";\n      }, 10);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/service-message.js?");

/***/ }),

/***/ "./js/modules/toggle-item-list.js":
/*!****************************************!*\
  !*** ./js/modules/toggle-item-list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleItemList; });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction toggleItemList(DOM) {\n  var _iterator = _createForOfIteratorHelper(DOM.listTypeInput),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var input = _step.value;\n      input.addEventListener('change', function (event) {\n        var _iterator2 = _createForOfIteratorHelper(DOM.itemsList),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var list = _step2.value;\n            list.classList.add('hidden');\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n\n        document.querySelector(\".\".concat(event.target.value)).classList.remove('hidden');\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./js/modules/toggle-item-list.js?");

/***/ }),

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./sass/styles.scss?");

/***/ })

/******/ });