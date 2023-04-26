/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n// Task array\nconst taskArray = [];\n\n// Factory function\nconst task = (title, category, deadline, notes, urgency, importance, quadrant) => {\n    return {title, category, deadline, notes, urgency, importance, quadrant};\n};\n\n// Create new task\nfunction addTask() {\n    // Prevent page refresh on submit\n    event.preventDefault();\n    // Get properties from user input\n    const title = document.getElementById(\"title\").value;\n    const category = document.getElementById(\"category\").value;\n    const deadline = document.getElementById(\"deadline\").value;\n    const notes = document.getElementById(\"notes\").value;\n    let urgency;\n    for (let i = 0; i < 2; i++) {\n        if (document.getElementsByName(\"urgency\")[i].checked) {\n            urgency = document.getElementsByName(\"urgency\")[i].value;\n        }\n    };\n    let importance;\n    for (let i = 0; i < 2; i++) {\n        if (document.getElementsByName(\"importance\")[i].checked) {\n            importance = document.getElementsByName(\"importance\")[i].value;\n        }\n    };\n    // Determine quadrant\n    let quadrant;\n    if (urgency == 1) {\n        if (importance == 1) {\n            quadrant = \"a\";\n        }\n        else {\n            quadrant = \"c\";\n        }\n    } else {\n        if (importance == 1) {\n            quadrant = \"b\";\n        } else {\n            quadrant = \"d\";\n        }\n    };\n    // Create task object\n    const newTask = task(title, category, deadline, notes, urgency, importance, quadrant);\n    // Add to array\n    taskArray.push(newTask);\n    console.log(taskArray);\n};\n\n// Export\n\n\n//# sourceURL=webpack://taskmatrix/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\ndocument.getElementById(\"add-task-form\").addEventListener(\"submit\", _data__WEBPACK_IMPORTED_MODULE_0__.addTask);\n\n//# sourceURL=webpack://taskmatrix/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;