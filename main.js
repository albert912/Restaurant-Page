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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `header {\n    background-color: coral;\n    height: 5vh;\n}\n\n#content {\n\n    position: relative;\n}\n\nheader {\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n\n.pizzaimg {\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n    }\n\n.piztext {\n\n    position: absolute;\n    top: 40px;\n    left: 42vw;\n}\n\n.pizzatext {\n\n    position: absolute;\n    top: 200px;\n    left: 31vw;\n    font-size: 25px;\n}\n\n.hdiv {\n    position: absolute;\n    top: 280px;\n    left: 45vw;\n    height: 300px;\n    width: 170px;\n    background-color:  coral;\n    border-radius: 7px;\n\n\n}\n\n.ldiv {\n    position: absolute;\n    top: 650px;\n    left: 45vw;\n    height: 120px;\n    width: 170px;\n    background-color:  coral;\n    border-radius: 7px;\n\n}\n\n\n\n\n\n.mtitle {\n\n    position: absolute;\n    top: 40px;\n    left: 47.3vw;\n}\n\n\n.bevdiv {\n    position: absolute;\n    top: 140px;\n    left: 46vw;\n    height: 200px;\n    width: 170px;\n    background-color: coral;\n    border-radius: 10px;\n\n}\n\n.pizdiv {\n\n    position: absolute;\n    top: 350px;\n    left: 46vw;\n    height: 200px;\n    width: 170px;\n    background-color: coral;\n    border-radius: 10px;\n\n}\n\n.pastadiv {\n\n    position: absolute;\n    top: 560px;\n    left: 46vw;\n    height: 200px;\n    width: 170px;\n    background-color: coral;\n    border-radius: 10px;\n}\n\n.context {\n\n    position: absolute;\n    top: 40px;\n    left: 45vw;\n}\n\n.cono {\n\n    position: absolute;\n    top: 150px;\n    left: 45vw;\n    height: 200px;\n    width: 170px;\n    background-color: coral;\n    border-radius: 10px;\n\n\n}\n\n.cont {\n\n    position: absolute;\n    top: 400px;\n    left: 45vw;\n    height: 200px;\n    width: 170px;\n    background-color: coral;\n    border-radius: 10px;\n\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fourth.js":
/*!***********************!*\
  !*** ./src/fourth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contacts: () => (/* binding */ contacts)\n/* harmony export */ });\n/* harmony import */ var _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzabackground.jpg */ \"./src/pizzabackground.jpg\");\n\n\n\n\n\nconst contacts = function  () {\n\n    const selcon = document.querySelector(\"#content\");\n\n\n    const context = document.createElement(\"h1\");\n\n    context.textContent = \"Contact Us \";\n\n    context.classList.add(\"context\");\n\n    selcon.appendChild(context);\n\n    \n\n    const conone = document.createElement(\"div\");\n\n    conone.classList.add(\"cono\");\n\n    selcon.appendChild(conone);\n\n\n    const nameone = document.createElement(\"h2\");\n\n    nameone.textContent = \" Antonio Rossi\";\n\n\n   nameone.classList.add(\"oneone\");\n\n   conone.appendChild(nameone);\n\n\nconst nametwo = document.createElement(\"p\");\n\nnametwo.textContent = \"Chef\";\n\nnametwo.classList.add(\"onetwo\");\n\nconone.appendChild(nametwo);\n\n\nconst namethree = document.createElement(\"p\");\n\nnamethree.textContent = \"+39 331 123 4567\";\n\nnamethree.classList.add(\"onethree\");\n\nconone.appendChild(namethree);\n\n\nconst namefour = document.createElement(\"p\");\n\nnamefour.textContent = \"arossi@gmail.com\";\n\nnamefour.classList.add();\n\nconone.appendChild(namefour);\n\n\n\n\n\n\n\n\n\n\n\n    const contwo = document.createElement(\"div\");\n\n    contwo.classList.add(\"cont\");\n\n    selcon.appendChild(contwo);\n\n\n\n\n\n    const sone = document.createElement(\"h2\");\n\n    sone.textContent = \" Francesco Giordano\";\n\n\n   sone.classList.add(\"seone\");\n\n   contwo.appendChild(sone);\n\n\nconst stwo = document.createElement(\"p\");\n\nstwo.textContent = \"Manager\";\n\nstwo.classList.add(\"setwo\");\n\ncontwo.appendChild(stwo);\n\n\nconst sthree = document.createElement(\"p\");\n\nsthree.textContent = \"+39 562 234 4592\";\n\nsthree.classList.add(\"sthree\");\n\ncontwo.appendChild(sthree);\n\n\nconst sfour = document.createElement(\"p\");\n\nsfour.textContent = \"fgiordano@gmail.com\";\n\nsfour.classList.add();\n\ncontwo.appendChild(sfour);\n\n\n\n\n\n\n\n\n\nconst pizimg = document.createElement(\"img\");\n\npizimg.src = _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  \npizimg.setAttribute(\"alt\", \"pizza\");\n    \npizimg.classList.add(\"pizzaimg\");\n\nselcon.appendChild(pizimg);\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/fourth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second.js */ \"./src/second.js\");\n/* harmony import */ var _third_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third.js */ \"./src/third.js\");\n/* harmony import */ var _fourth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fourth.js */ \"./src/fourth.js\");\n\n\n\n\n(0,_second_js__WEBPACK_IMPORTED_MODULE_1__.domRes)(); \n\n\n\n/*menu(); */\n\n\n\n/*contacts ();*/\n\n\nconst home = document.querySelector(\".hom\");\n\nconst menutab = document.querySelector(\".men\");\n\nconst cont = document.querySelector(\".con\");\n\nconst divid = document.querySelector(\"#content\");\n\nhome.addEventListener(\"click\", () => {\n\n    divid.innerHTML = \"\";\n\n    (0,_second_js__WEBPACK_IMPORTED_MODULE_1__.domRes)();\n\n});\n\n\nmenutab.addEventListener(\"click\", () => {\n\n    divid.innerHTML = \"\";\n\n    (0,_third_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n\n\n\n});\n\n\ncont.addEventListener(\"click\", () => {\n\n    divid.innerHTML = \"\";\n\n    (0,_fourth_js__WEBPACK_IMPORTED_MODULE_3__.contacts)();\n\n\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/second.js":
/*!***********************!*\
  !*** ./src/second.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domRes: () => (/* binding */ domRes)\n/* harmony export */ });\n/* harmony import */ var _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzabackground.jpg */ \"./src/pizzabackground.jpg\");\n\n\n  \n\n\n\nconst domRes = function  () {\n\n\n const selcon = document.querySelector(\"#content\");\n\n const piz = document.createElement(\"h1\");\n\npiz.textContent = \"Pizzeria Napolitana\"; \n\npiz.classList.add(\"piztext\");\n\n\nselcon.appendChild(piz);\n\n\nconst piztext = document.createElement(\"p\");\n\npiztext.textContent = \"Over 50 years of serving authentic Italian cuisine, specializing in pizza.\";\n\npiztext.classList.add(\"pizzatext\");\n\nselcon.appendChild(piztext);\n\n\nconst hourdiv = document.createElement(\"div\");\n\nhourdiv.classList.add(\"hdiv\");\n\nselcon.appendChild(hourdiv);\n\n\nconst hourtitle = document.createElement(\"h2\");\n\nhourtitle.textContent = \"Hours\";\n\nhourtitle.classList.add(\"h2title\");\n\nhourdiv.appendChild(hourtitle);\n\n\nconst h1 = document.createElement(\"p\");\n\nh1.textContent = \"Monday: 9am - 10pm\";\n\nh1.classList.add(\"h1style\");\n\nhourdiv.appendChild(h1);\n\nconst h2 = document.createElement(\"p\");\n\nh2.textContent = \"Thuesday: 9am - 10pm\";\n\nh2.classList.add(\"h2style\");\n\nhourdiv.appendChild(h2);\n\nconst h3 = document.createElement(\"p\");\n\nh3.textContent = \"Wednesday: 9am - 10pm\";\n\nh3.classList.add(\"h3style\");\n\nhourdiv.appendChild(h3);\n\nconst h4 = document.createElement(\"p\");\n\nh4.textContent = \"Thursday: 9am - 10pm\";\n\nh4.classList.add(\"h4style\");\n\nhourdiv.appendChild(h4);\n\nconst h5 = document.createElement(\"p\");\n\nh5.textContent = \"Friday: 9am - 10pm\";\n\nh5.classList.add(\"h5style\");\n\nhourdiv.appendChild(h5);\n\nconst h6 = document.createElement(\"p\");\n\nh6.textContent = \"Saturday: 9am - 10pm\";\n\nh6.classList.add(\"h6style\");\n\nhourdiv.appendChild(h6);\n\nconst h7 = document.createElement(\"p\");\n\nh7.textContent = \"Sunday: 12pm - 10pm\";\n\nh7.classList.add(\"h7style\");\n\nhourdiv.appendChild(h7);\n\n\n\nconst locdiv = document.createElement(\"div\");\n\nlocdiv.classList.add(\"ldiv\");\n\nselcon.appendChild(locdiv);\n\n\n\nconst loctitle = document.createElement(\"h2\");\n\nloctitle.textContent = \"Location\";\n\nloctitle.classList.add(\"lotitle\");\n\nlocdiv.appendChild(loctitle);\n\n\nconst h8 = document.createElement(\"p\");\n\nh8.textContent = \"Via dei Mille 123, 80131 Napoli, NA\";\n\nh8.classList.add(\"adtext\");\n\nlocdiv.appendChild(h8);\n\n\n\n\n\n\n\nconst pizimg = document.createElement(\"img\");\n\npizimg.src = _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n\npizimg.setAttribute(\"alt\", \"pizza\");\n\npizimg.classList.add(\"pizzaimg\");\n\nselcon.appendChild(pizimg);\n\n\n\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/second.js?");

/***/ }),

/***/ "./src/third.js":
/*!**********************!*\
  !*** ./src/third.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzabackground.jpg */ \"./src/pizzabackground.jpg\");\n\n\n\n\n\nconst menu = function  () {\n\n    const selcon = document.querySelector(\"#content\");\n\n\n\n\n\n  \n\n\n\n\n    const menutitle = document.createElement(\"h1\");\n\n    menutitle.textContent = \"MENU\";\n\n    menutitle.classList.add(\"mtitle\");\n\n    selcon.appendChild(menutitle);\n\n\n\n    const bdiv = document.createElement(\"div\");\n\n    bdiv.classList.add(\"bevdiv\");\n\n    selcon.appendChild(bdiv);\n\n\n const brages = document.createElement(\"h2\");\n\n brages.textContent = \"Beverages\";\n\n brages.classList.add(\"bever\");\n\n bdiv.appendChild(brages);\n\n\n\n const lemon = document.createElement(\"p\");\n\n\nlemon.textContent = \"Lemonade      $2\";\n\nlemon.classList.add(\"lmon\");\n\nbdiv.appendChild(lemon);\n\n\nconst cke = document.createElement(\"p\");\n\n\ncke.textContent = \"Coke      $3\";\n\ncke.classList.add(\"coke\");\n\nbdiv.appendChild(cke);\n\n\nconst fnta = document.createElement(\"p\");\n\n\nfnta.textContent = \"Fanta      $3\";\n\nfnta.classList.add(\"fanta\");\n\nbdiv.appendChild(fnta);\n\n\nconst sprte = document.createElement(\"p\");\n\n\nsprte.textContent = \"Sprite      $3\";\n\nsprte.classList.add(\"sprite\");\n\nbdiv.appendChild(sprte);\n\n\n\n\n\n\n\nconst mdiv = document.createElement(\"div\");\n\nmdiv.classList.add(\"pizdiv\");\n\nselcon.appendChild(mdiv);\n\n\n\n const mdishes = document.createElement(\"h2\");\n\n mdishes.textContent = \"Pizzas\";\n\n mdishes.classList.add(\"maind\");\n\n mdiv.appendChild(mdishes);\n\n\n const napo = document.createElement(\"p\");\n\n napo.textContent = \"Pizza Napoletana       $20\";\n\n napo.classList.add(\"pnapo\");\n\n mdiv.appendChild(napo);\n\n\n const sici = document.createElement(\"p\");\n\n sici.textContent = \"Pizza Siciliana            $25\";\n\n sici.classList.add(\"psici\");\n\n mdiv.appendChild(sici);\n\n\n const roma = document.createElement(\"p\");\n\n roma.textContent = \"Pizza Romana       $30\";\n\n roma.classList.add(\"proma\");\n\n mdiv.appendChild(roma);\n\n\n\n\n\n\n\n\n\n\n\n\n const pdiv = document.createElement(\"div\");\n\n pdiv.classList.add(\"pastadiv\");\n\n selcon.appendChild(pdiv);\n\n\n\n\n const pstas = document.createElement(\"h2\");\n\n pstas.textContent = \"Pastas\";\n\n pstas.classList.add(\"pastas\");\n\n pdiv.appendChild(pstas);\n\n\n\n\nconst spag = document.createElement(\"p\");\n\nspag.textContent = \"Spaghetti      $10\";\n\nspag.classList.add(\"pspag\");\n\npdiv.appendChild(spag);\n\n\n\nconst ling = document.createElement(\"p\");\n\nling.textContent = \"Linguine       $12\"\nling.classList.add(\"pling\");\n\npdiv.appendChild(ling);\n\n\nconst pizimg = document.createElement(\"img\");\n\npizimg.src = _pizzabackground_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  \npizimg.setAttribute(\"alt\", \"pizza\");\n    \npizimg.classList.add(\"pizzaimg\");\n\nselcon.appendChild(pizimg);\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/third.js?");

/***/ }),

/***/ "./src/pizzabackground.jpg":
/*!*********************************!*\
  !*** ./src/pizzabackground.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ef8dcebe219330bd73b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pizzabackground.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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