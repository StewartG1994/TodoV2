"use strict";
(self["webpackChunktodov2"] = self["webpackChunktodov2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n    font-family: 'Montserrat', sans-serif;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n.container{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: repeat(5,1fr);\n   \n\n    height: 100vh;\n  \n    grid-template-areas: \n    'nav header header header'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n}\n\n.topbar{\n    grid-area: header ;\n    background-color:#0d1b2a;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #e0e1dd;\n  \n}\n\n.todoheader{\n    background-color: #F4F4F2;\n    font-size: 4rem;\n    border: none;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px 50px 20px 50px;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n}\n\n.taskheader{\n    background-color: #F4F4F2;\n    font-size: 4rem;\n    border: none;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px 50px 20px 50px;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n}\n\n.todoheader:hover{\n    transform: scale(1.01);\n}\n\n.leftbar{\n    grid-area:  nav;\n    background-color: #415a77;\n}\n\n.projectList{\n    color: #e0e1dd;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n    padding-left: 20px;\n    padding-top: 20px;\n}\n\n.listUI{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.projectHeader{\n    color: #e0e1dd;\n    font-size: 1.4rem;\n    justify-self: center;\n    padding-bottom: 10px;\n}\n\n.content{\n    grid-area: contentarea;\n    background-color:  #e0e1dd;  \n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    \n\n    padding: 15px;\n    gap: 20px;\n}\n\n.projectCards{\n    width: 90%;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px;\n    display: grid;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n    align-items: center;\n    \n}\n\nh3{\n    font-weight: bold;\n    padding-bottom: 5px;\n}\n\n.headerDiv {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.viewProjectButton{\n\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n    width: 45%;\n}\n\n.buttonDiv{\n    display: flex;\n    gap: 5px;\n    justify-content: center;\n}\n\n.deleteheaderButton{\n    padding: 7px;\n    border-radius: 5px;\n    background-color: #FF6961;\n    border: none;\n    width: 45%;\n\n\n}\n.notesDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.dropdown-notes {\n    display: none;\n    position: relative;\n    padding-top: 10px;\n    min-width: 160px;\n    z-index: 1;\n    max-width: 100%;\n  }\n\n  .displayDropDown {\n    display: flex;\n  }\n\ninput[type=checkbox]{\n    padding: 15px;\n    margin: 0px;    \n}\n\n.projectModal{\n    display: none;\n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: #415a77;\n    \n  }\n\n  .modalContent {\n    background-color: #e0e1dd;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%; \n  }\n\n  .projectForm{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .projectForm > input {\n    padding: 10px;\n  }\n\n  #prority {\n    padding: 10px;\n  }\n\n  .close{\n    display: flex;\n    margin-left: auto;\n    padding: 7px;\n    border-radius: 5px;\n    background-color: #FF6961;\n    border: none;\n  }\n\n  .submitProject{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n  }\n\n  .submitTask{\n    display: none;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n  }\n\n.taskModal{\n    display: none;\n}\n\n.backHeader{\nwidth: 80%;\nborder: none;\nbackground-color: #415a77;\ncolor: #e0e1dd;\nfont-size: 1.2rem;\ntext-align: left;\npadding-bottom: 10px;\n\n    \n}\n\n.editButton{\n    width: 45%;\n    background-color: #77DD77;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n}\n\n.taskDeleteButton{\n    width: 45%;\n    background-color: #FF6961;\n       border-radius: 5px;\n    padding: 7px;\n    border: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n    font-family: 'Montserrat', sans-serif;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n.container{\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: repeat(5,1fr);\n   \n\n    height: 100vh;\n  \n    grid-template-areas: \n    'nav header header header'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n    'nav contentarea contentarea contentarea'\n}\n\n.topbar{\n    grid-area: header ;\n    background-color:#0d1b2a;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #e0e1dd;\n  \n}\n\n.todoheader{\n    background-color: #F4F4F2;\n    font-size: 4rem;\n    border: none;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px 50px 20px 50px;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n}\n\n.taskheader{\n    background-color: #F4F4F2;\n    font-size: 4rem;\n    border: none;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px 50px 20px 50px;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n}\n\n.todoheader:hover{\n    transform: scale(1.01);\n}\n\n.leftbar{\n    grid-area:  nav;\n    background-color: #415a77;\n}\n\n.projectList{\n    color: #e0e1dd;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n    padding-left: 20px;\n    padding-top: 20px;\n}\n\n.listUI{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.projectHeader{\n    color: #e0e1dd;\n    font-size: 1.4rem;\n    justify-self: center;\n    padding-bottom: 10px;\n}\n\n.content{\n    grid-area: contentarea;\n    background-color:  #e0e1dd;  \n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    \n\n    padding: 15px;\n    gap: 20px;\n}\n\n.projectCards{\n    width: 90%;\n    background-color: #F4F4F2;\n    border-radius: 10px;\n    padding: 20px;\n    display: grid;\n    box-shadow: 7px 19px 21px 11px #CFD1CB; \n    align-items: center;\n    \n}\n\nh3{\n    font-weight: bold;\n    padding-bottom: 5px;\n}\n\n.headerDiv {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.viewProjectButton{\n\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n    width: 45%;\n}\n\n.buttonDiv{\n    display: flex;\n    gap: 5px;\n    justify-content: center;\n}\n\n.deleteheaderButton{\n    padding: 7px;\n    border-radius: 5px;\n    background-color: #FF6961;\n    border: none;\n    width: 45%;\n\n\n}\n.notesDiv{\n    display: flex;\n    flex-direction: column;\n}\n\n.dropdown-notes {\n    display: none;\n    position: relative;\n    padding-top: 10px;\n    min-width: 160px;\n    z-index: 1;\n    max-width: 100%;\n  }\n\n  .displayDropDown {\n    display: flex;\n  }\n\ninput[type=checkbox]{\n    padding: 15px;\n    margin: 0px;    \n}\n\n.projectModal{\n    display: none;\n    position: fixed; \n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: #415a77;\n    \n  }\n\n  .modalContent {\n    background-color: #e0e1dd;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%; \n  }\n\n  .projectForm{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .projectForm > input {\n    padding: 10px;\n  }\n\n  #prority {\n    padding: 10px;\n  }\n\n  .close{\n    display: flex;\n    margin-left: auto;\n    padding: 7px;\n    border-radius: 5px;\n    background-color: #FF6961;\n    border: none;\n  }\n\n  .submitProject{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n  }\n\n  .submitTask{\n    display: none;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n    background-color: #77DD77;\n  }\n\n.taskModal{\n    display: none;\n}\n\n.backHeader{\nwidth: 80%;\nborder: none;\nbackground-color: #415a77;\ncolor: #e0e1dd;\nfont-size: 1.2rem;\ntext-align: left;\npadding-bottom: 10px;\n\n    \n}\n\n.editButton{\n    width: 45%;\n    background-color: #77DD77;\n    border-radius: 5px;\n    padding: 7px;\n    border: none;\n}\n\n.taskDeleteButton{\n    width: 45%;\n    background-color: #FF6961;\n       border-radius: 5px;\n    padding: 7px;\n    border: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projectCardDisplay": () => (/* binding */ projectCardDisplay),
/* harmony export */   "projectDropDowns": () => (/* binding */ projectDropDowns),
/* harmony export */   "projectListDom": () => (/* binding */ projectListDom)
/* harmony export */ });
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ "./src/info.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid */ "./src/valid.js");
/* harmony import */ var _svg_down_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/down.png */ "./src/svg/down.png");




const projectListNode = document.querySelector('.listUI');
const content = document.querySelector('.content');



function liDisplay (item) {
  
    const projectLi = document.createElement('li')
    projectLi.textContent = item.title;
    projectListNode.appendChild(projectLi);
}

function projectListDom(array){
    projectListNode.textContent = null;

    for (let i = 0; i < array.length; i++) {
        liDisplay(array[i])
    }}

function cardMaker (item,index) {
    const card = document.createElement('div');
    card.id=item.title;
    const headerDiv =document.createElement('div');
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'buttonDiv'
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'headertitlecard';
    headerTitle.textContent = 'Project Name'
    headerDiv.className = 'headerDiv'
    const viewProjectBtn = document.createElement('button');
    viewProjectBtn.textContent = 'View'
    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.className = 'deleteheaderButton'
    viewProjectBtn.className = 'viewProjectButton'

    deleteProjectBtn.textContent = 'Delete';
    const header = document.createElement('h1');
    header.textContent ='\n' + item.title
    buttonDiv.appendChild(viewProjectBtn)
    
    buttonDiv.appendChild(deleteProjectBtn)
    headerDiv.appendChild(headerTitle)
    headerDiv.appendChild(header)

    const downImg = new Image();
    downImg.src = _svg_down_png__WEBPACK_IMPORTED_MODULE_2__
 
    card.className = 'projectCards'
    const descriptionDiv = document.createElement('div');
    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description';
    const description = document.createElement('p');
    const dueDateDiv = document.createElement('div');
    descriptionDiv.appendChild(descriptionTitle)
    descriptionDiv.appendChild(description)
    const dueDate = document.createElement('p');
    const dueDateTitle = document.createElement('h3')
    dueDateTitle.textContent= 'Due Date'
    dueDateDiv.appendChild(dueDateTitle)
    dueDateDiv.appendChild(dueDate)
    const priorityDiv = document.createElement('div');
    const priorityTitle =document.createElement('h3');
    priorityTitle.textContent = 'Priority';
    const priority = document.createElement('p');
    priorityDiv.appendChild(priorityTitle)
    priorityDiv.appendChild(priority);
    
    const noteDiv = document.createElement('div');
    noteDiv.className = 'notesDiv';
    const notes = document.createElement('h3');
    notes.className = 'notesNode';
    const notesP = document.createElement('p');
    notesP.classList = ('dropdown-notes')

    description.textContent =  item.description;
    dueDate.textContent =  item.dueDate;

    notes.textContent = 'Notes ';
    notes.appendChild(downImg)

    notesP.textContent = item.notes
    priority.textContent = item.priority;
   
    card.appendChild(buttonDiv)
    card.appendChild(headerDiv)

    card.appendChild(descriptionDiv);
 
    card.appendChild(dueDateDiv)
 
    card.appendChild(priorityDiv);
    noteDiv.appendChild(notes)
    noteDiv.appendChild(notesP)
    card.appendChild(noteDiv)
    content.appendChild(card)
}

function projectCardDisplay(array){
    content.textContent = null;
    projectListDom(_info__WEBPACK_IMPORTED_MODULE_0__.projectArray)

    for (let i = 0; i < array.length; i++){
        let index = array.indexOf(array[i])
        cardMaker(array[i], index)
    }
}

function projectDropDowns () {

  let test = document.querySelectorAll('.notesDiv')
  
  test.forEach(test  => test.addEventListener('click', event => {
    let contentP = event.target.parentNode;
    let dropdown = contentP.parentNode.lastChild ;
   dropdown.classList.toggle('displayDropDown')
  
  }))
      
}

function deleteProject (){
   let deleteBtn = document.querySelectorAll('.deleteheaderButton');

   deleteBtn.forEach(button => button.addEventListener('click', event =>{
    console.log('DeleteTest')
   const cardNumber = event.target.parentNode.parentNode.id;
   const indexObject = _info__WEBPACK_IMPORTED_MODULE_0__.projectArray.findIndex(object =>{
   return  object.title === cardNumber;
   })
   _info__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(indexObject,1)
   let cardRemove = event.target.parentNode.parentNode;
   content.removeChild(cardRemove)
   projectListNode.textContent = null;
   projectListDom(_info__WEBPACK_IMPORTED_MODULE_0__.projectArray)
   ;(0,_info__WEBPACK_IMPORTED_MODULE_0__.closeProject)()

}))

}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/info.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _viewProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewProject */ "./src/viewProject.js");






(0,_dom__WEBPACK_IMPORTED_MODULE_2__.projectListDom)(_info__WEBPACK_IMPORTED_MODULE_1__.projectArray)
;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.projectCardDisplay)(_info__WEBPACK_IMPORTED_MODULE_1__.projectArray)
;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.projectDropDowns)()
;(0,_info__WEBPACK_IMPORTED_MODULE_1__.openModal)()
;(0,_viewProject__WEBPACK_IMPORTED_MODULE_3__.viewProject)()
;(0,_viewProject__WEBPACK_IMPORTED_MODULE_3__.editTask)()
;(0,_info__WEBPACK_IMPORTED_MODULE_1__.submitProject)()
;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.deleteProject)()

;(0,_viewProject__WEBPACK_IMPORTED_MODULE_3__.pushModalTask)()
;(0,_viewProject__WEBPACK_IMPORTED_MODULE_3__.returnBtn)()






/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeProject": () => (/* binding */ closeProject),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projectModalNodeEdit": () => (/* binding */ projectModalNodeEdit),
/* harmony export */   "submitProject": () => (/* binding */ submitProject)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _viewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewProject */ "./src/viewProject.js");




const projectArray = [];
const projectFactory = (title, description, dueDate, priority, notes, checklist, todoArray) =>{
    todoArray = []

    return {title, description, dueDate, priority ,notes , checklist, todoArray}
}

function projectAddition (item) {
    projectArray.push(item);    
}

function projectModalNodeEdit(){
    const editSubmitButton = document.querySelector('.submitEdit')

    const headerBtn = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitProject')
    const taskSubmit = document.querySelector('.submitTask')
    const projectName =document.getElementById('projectNameLabel')
    const description =document.getElementById('descriptionLabel')
    const dueDate =document.getElementById('dueDateLabel')
    const priority = document.getElementById('priority')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')

    headerBtn.addEventListener('click', () =>
   {
    editSubmitButton.style.display = 'none';
    projectName.textContent = 'Project Name';
    notes.style.display = 'block';
    notesLabel.style.display = 'block';
    submitButton.style.display = 'block'
    taskSubmit.textContent= 'Submit Task'
    taskSubmit.style.display = 'none'
    modal.style.display = 'block'
   } )

}

function closeProject ()
{
    const modal = document.querySelector('.projectModal');

    const close = document.querySelector('.close')
    close.addEventListener('click', () =>{
        modal.style.display = 'none'
       projectModalNodeEdit()})
}

function clearModal (){
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const notes = document.getElementById('notes')
    notes.value= ''
    dueDate.value = ''
    description.value = ''
    projectName.value = ''
}
function openModal (){
    const addProject = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const close = document.querySelector('.close')

    addProject.addEventListener('click', () => {
        const editSubmitButton = document.querySelector('.submitEdit')
        editSubmitButton.style.display = 'none';
        projectModalNodeEdit()
        modal.style.display = 'block';

        closeProject()
        clearModal()
        
        
    })


}

function submitProject(){
    const modal = document.querySelector('.projectModal');
    

    const submitButton = document.querySelector('.submitProject')
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const priority = document.getElementById('priority')
    const notes = document.getElementById('notes')
  

    submitButton.addEventListener('click', () => {




        projectAddition(projectFactory(projectName.value, description.value, dueDate.value, priority.value, notes.value))
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectCardDisplay)(projectArray)
        modal.style.display = 'none'
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.deleteProject)()
        clearModal()
        ;(0,_viewProject__WEBPACK_IMPORTED_MODULE_1__.viewProject)()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectDropDowns)()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectListDom)(projectArray)

    })
    
}


projectAddition(projectFactory('Default Project', 'Use the description box to create a brief outline of the project and tasks', '26/02/2023', 'High', 'Noootes notes wonderful notes'))






/***/ }),

/***/ "./src/valid.js":
/*!**********************!*\
  !*** ./src/valid.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validProjectForm": () => (/* binding */ validProjectForm)
/* harmony export */ });
const projectName = document.getElementById('projectName')
const description = document.getElementById('description')

function validProjectForm () {
    if (projectName.textContent = '' ){console.log('test')}

    else {return true};
}



/***/ }),

/***/ "./src/viewProject.js":
/*!****************************!*\
  !*** ./src/viewProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "pushModalTask": () => (/* binding */ pushModalTask),
/* harmony export */   "returnBtn": () => (/* binding */ returnBtn),
/* harmony export */   "viewProject": () => (/* binding */ viewProject)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ "./src/info.js");



let currentArray= null;
const backHeader = document.createElement('button');

const todoFactory = (task, description,dueDate, priority) =>
{  return{ task, description,dueDate, priority}}

function closeBtn (){
    const close = document.querySelector('.close')
    const modal = document.querySelector('.projectModal');

    close.addEventListener('click', () =>{
        
        modal.style.display = 'none'
        taskModalNodeEdit()})
      

}

function taskModalNodeEdit(){
    const editSubmitButton = document.querySelector('.submitEdit')
    const close = document.querySelector('.close')

    const headerBtn = document.querySelector('.todoheader');
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitProject')
    const taskSubmit = document.querySelector('.submitTask')


    const projectName =document.getElementById('projectNameLabel')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')

    headerBtn.addEventListener('click', () =>
   {

    editSubmitButton.style.display = 'none'
    projectName.textContent = 'Task Name';
    notes.style.display = 'none';
    notesLabel.style.display = 'none';
    submitButton.style.display = 'none'
    taskSubmit.textContent= 'Submit Task'
    taskSubmit.style.display = 'block'
    modal.style.display = 'block'
    closeBtn()
   


   } )

}



function editModalNodeEdit(index){

    let item = currentArray.todoArray[index]
    
    
    const editSubmitButton = document.querySelector('.submitEdit')
    
    const modal = document.querySelector('.projectModal');
    const submitButton = document.querySelector('.submitTask')
    const projectName =document.getElementById('projectNameLabel')

    const descriptionLabel = document.getElementById('descriptionLabel');
    const descriptionContent = document.getElementById('description');

    const dueDatelabel  = document.getElementById('dueDateLabel')
    const dueDateContent = document.getElementById('dueDate')

    const projectNameContent = document.getElementById('projectName')
    const notes = document.getElementById('notes')
    const notesLabel = document.getElementById('notesLabel')
    projectNameContent.textContent = null;
    projectName.textContent = 'Edit Task Name';
    projectNameContent.value = item.task 

    descriptionLabel.textContent  = 'Edit Description';
    descriptionContent.value = item.description;

    dueDatelabel.textContent = 'Edit Due Date';
    dueDateContent.value = item.dueDate

    notes.style.display = 'none';
    notesLabel.style.display = 'none';
    submitButton.style.display = 'none';
    modal.style.display = 'block'
    editSubmitButton.style.display = 'block';
}

function pushEdit (index) {
    const modal = document.querySelector('.projectModal');

    const submitEdit = document.querySelector('.submitEdit')
    const projectContent = document.getElementById('projectName');
    const descriptionContent = document.getElementById('description');
    const dueDateContent = document.getElementById('dueDate')
    const priorit= document.getElementById('priority')
    console.log(submitEdit)
    console.log(currentArray)
    let current = currentArray.todoArray[index]
    console.log(current)


    submitEdit.addEventListener('click', () =>{
        let projectName = projectContent.value;
        let description = descriptionContent.value;
        let dueDateInfo = dueDateContent.value;
        let priorityInfo = priorit.value
        console.log(projectName)
        current.task = projectName
        current.description = description;
        current.dueDate = dueDateInfo;
        current.priority = priorityInfo;
        modal.style.display = 'none';
        taskCardDisplay(currentArray.todoArray)
        projectListDom(currentArray.todoArray)
        deleteTask()
        editTask()
        current = currentArray
  

        console.log(currentArray)})
       
}


function pushModalTask(){
    const projectName =document.getElementById('projectName')
    const description =document.getElementById('description')
    const dueDate =document.getElementById('dueDate')
    const priority = document.getElementById('priority')
    const taskSubmit = document.querySelector('.submitTask')
    const modal = document.querySelector('.projectModal');


    taskSubmit.addEventListener('click', () =>{
        taskModalNodeEdit()
    
        const content = document.querySelector('.content');
        let newTask = todoFactory(projectName.value, description.value, dueDate.value, priority.value)
        currentArray.todoArray.push(newTask)
        modal.style.display = 'none';
        content.textContent = null;
        taskCardDisplay(currentArray.todoArray)
        projectListDom(currentArray.todoArray)
        editTask()

        deleteTask()
    } )

    
}

function displayTasks (item ,index){

    const content = document.querySelector('.content');
    const buttonDiv = document.createElement('div');
    const editButton  = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editButton.className = 'editButton';
    deleteBtn.className = 'taskDeleteButton'
    buttonDiv.className = 'buttonDiv'
    editButton.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    buttonDiv.appendChild(editButton)
    buttonDiv.appendChild(deleteBtn)

    let taskDivCard = document.createElement('div')
    taskDivCard.id = item.task
    taskDivCard.setAttribute('array',index)
    taskDivCard.className= 'projectCards';
    const taskDiv = document.createElement('div');
    const taskheader = document.createElement('h3')
    taskheader.textContent = 'Task Name';
    let taskTitle = document.createElement('h1');

    const descriptionDiv =document.createElement('div')
    const descriptionheader =document.createElement('h3')
    descriptionheader.textContent = 'Task Description';
    let taskDescription = document.createElement('p');

    const dueDateDiv =document.createElement('div')
    const dueDateHeader = document.createElement('h3');
    dueDateHeader.textContent = 'Due Date'
    let dueDate = document.createElement('p');

    const priorityDiv = document.createElement('div');
    const priorityheader = document.createElement('h3');
    priorityheader.textContent = 'Priority';
    let priority =document.createElement('p')
    let inputDiv = document.createElement('div')
    let completedP = document.createElement('p')
    let completed = document.createElement('input')
    completed.setAttribute("type", "checkbox");

    completedP.textContent = 'Completed?'
    inputDiv.appendChild(completedP)
    inputDiv.appendChild(completed)

    taskDiv.appendChild(taskheader)
    taskDiv.appendChild(taskTitle)
    descriptionDiv.appendChild(descriptionheader)
    descriptionDiv.appendChild(taskDescription)
    dueDateDiv.appendChild(dueDateHeader)
    dueDateDiv.appendChild(dueDate)
    priorityDiv.appendChild(priorityheader)
    priorityDiv.appendChild(priority);


    taskTitle.textContent = item.task;
    taskDescription.textContent = item.description
    dueDate.textContent = item.dueDate
    priority.textContent = item.priority

    taskDivCard.appendChild(buttonDiv)
    taskDivCard.appendChild(taskDiv)
    taskDivCard.appendChild(descriptionDiv)
    taskDivCard.appendChild(dueDateDiv)
    taskDivCard.appendChild(priorityDiv)

    content.appendChild(taskDivCard)

}

function liDisplay (item) {
    const projectListNode = document.querySelector('.listUI');
    const projectLi = document.createElement('li')
    projectLi.textContent = item
    projectListNode.appendChild(projectLi);
}

function projectListDom(array){
    const projectListNode = document.querySelector('.listUI');
    projectListNode.textContent = null;

    for (let i = 0; i < array.length; i++) {
  
     liDisplay(array[i].task)
    }}

function taskCardDisplay(array){

    const content = document.querySelector('.content');
    content.textContent = null;

    
    for (let i = 0; i < array.length; i++){
        
        let index = array.indexOf(array[i])
        displayTasks(array[i], index)
    }
}

function viewProject(){

    const viewButton = document.querySelectorAll('.viewProjectButton');
    const projectList = document.querySelector('.projectList')
    const content = document.querySelector('.content');
    const headerBtn = document.querySelector('.todoheader')
    const projectTitle = document.querySelector('.projectHeader')


   viewButton.forEach(element => {
    element.addEventListener('click', event =>{
 
    headerBtn.textContent = '+ Task';
        content.textContent = null;
        backHeader.style.display = 'flex';
        const backHeaderH1 = document.createElement('h1');
        backHeader.appendChild(backHeaderH1)
        backHeader.className = 'backHeader';
        backHeaderH1.textContent = '< Back to projects'
     
        projectList.insertBefore(backHeader, projectTitle)
    
        
          
        const cardNumber = event.target.parentNode.parentNode.id;
        let indexObject = _info__WEBPACK_IMPORTED_MODULE_1__.projectArray.findIndex(object =>{
        return  object.title === cardNumber;})

         currentArray = (_info__WEBPACK_IMPORTED_MODULE_1__.projectArray[indexObject])
         projectTitle.textContent = 'List of tasks for ' + currentArray.title;
         projectListDom(currentArray.todoArray)
         taskModalNodeEdit()
         taskCardDisplay(currentArray.todoArray)
         editTask()
         deleteTask()
     
     
  

  
 
       

    })  

 
   });
}

function returnBtn (){

const headerBtn = document.querySelector('.todoheader')
const projectLI = document.querySelector('.projectList')
const projectTitle = document.querySelector('.projectHeader')


backHeader.addEventListener('click', () =>{
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectCardDisplay)(_info__WEBPACK_IMPORTED_MODULE_1__.projectArray)
    ;(0,_info__WEBPACK_IMPORTED_MODULE_1__.projectModalNodeEdit)()
    backHeader.style.display = 'none';
    projectLI.style.display = 'block'
    projectTitle.textContent = 'List of projects' 
    backHeader.textContent = null;
    headerBtn.textContent = '+ Project'
    viewProject()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.deleteProject)()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectDropDowns)()

   })
}

function editTask (){
    let editButton = document.querySelectorAll('.editButton');
    const modal = document.querySelector('.projectModal');


    editButton.forEach(elem => elem.addEventListener('click', event =>{

        let editObject = null;
        const submitButton = document.querySelector('.submitTask')
        submitButton.style.display = 'none';

        const cardNumber = event.target.parentNode.parentNode

    let index = cardNumber.getAttribute('array')
    console.log(index)


    editModalNodeEdit(index)
    pushEdit(index)

    })
    
    )

}

function deleteTask (){
    const content = document.querySelector('.content');
    let deleteBtn = document.querySelectorAll('.taskDeleteButton');
    deleteBtn.forEach(button => button.addEventListener('click', event =>{
    const cardNumber = event.target.parentNode.parentNode.id

    const indexObject = currentArray.todoArray.findIndex(object =>{
        return  object.task === cardNumber;
        })

    currentArray.todoArray.splice(indexObject,1)
    let cardRemove = event.target.parentNode.parentNode;
    content.removeChild(cardRemove)
    projectListDom(currentArray.todoArray)
 }))
 
 }



/***/ }),

/***/ "./src/svg/down.png":
/*!**************************!*\
  !*** ./src/svg/down.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72708540d173c50a7f29.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxlQUFlLFlBQVksVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtB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QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG92Mi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG92Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG92Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG92Mi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9zcmMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vc3JjL3ZpZXdQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwxZnIpO1xcbiAgIFxcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnbmF2IGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbn1cXG5cXG4udG9wYmFye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlciA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzBkMWIyYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZGQ7XFxuICBcXG59XFxuXFxuLnRvZG9oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcbiAgICBib3gtc2hhZG93OiA3cHggMTlweCAyMXB4IDExcHggI0NGRDFDQjsgXFxufVxcblxcbi50YXNraGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcXG4gICAgYm94LXNoYWRvdzogN3B4IDE5cHggMjFweCAxMXB4ICNDRkQxQ0I7IFxcbn1cXG5cXG4udG9kb2hlYWRlcjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmxlZnRiYXJ7XFxuICAgIGdyaWQtYXJlYTogIG5hdjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNWE3NztcXG59XFxuXFxuLnByb2plY3RMaXN0e1xcbiAgICBjb2xvcjogI2UwZTFkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmxpc3RVSXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdEhlYWRlcntcXG4gICAgY29sb3I6ICNlMGUxZGQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnRhcmVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2UwZTFkZDsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIFxcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0Q2FyZHN7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJveC1zaGFkb3c6IDdweCAxOXB4IDIxcHggMTFweCAjQ0ZEMUNCOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi52aWV3UHJvamVjdEJ1dHRvbntcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmJ1dHRvbkRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlaGVhZGVyQnV0dG9ue1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNDUlO1xcblxcblxcbn1cXG4ubm90ZXNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kcm9wZG93bi1ub3RlcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5RHJvcERvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDBweDsgICAgXFxufVxcblxcbi5wcm9qZWN0TW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvdmVyZmxvdzogYXV0bzsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVhNzc7XFxuICAgIFxcbiAgfVxcblxcbiAgLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZGQ7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7IFxcbiAgfVxcblxcbiAgLnByb2plY3RGb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEZvcm0gPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjcHJvcml0eSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuY2xvc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgLnN1Ym1pdFByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgfVxcblxcbiAgLnN1Ym1pdFRhc2t7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgfVxcblxcbi50YXNrTW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5iYWNrSGVhZGVye1xcbndpZHRoOiA4MCU7XFxuYm9yZGVyOiBub25lO1xcbmJhY2tncm91bmQtY29sb3I6ICM0MTVhNzc7XFxuY29sb3I6ICNlMGUxZGQ7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1hbGlnbjogbGVmdDtcXG5wYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gICAgXFxufVxcblxcbi5lZGl0QnV0dG9ue1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztJQUNYLHFDQUFxQztBQUN6QztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDOzs7SUFHakMsYUFBYTs7SUFFYjs7Ozs7O0FBTUo7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsNERBQTREOzs7SUFHNUQsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7OztBQUdkO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCOztFQUUzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUVGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjs7O0FBR3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO09BQ3RCLGtCQUFrQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LDFmcik7XFxuICAgXFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICduYXYgaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICduYXYgY29udGVudGFyZWEgY29udGVudGFyZWEgY29udGVudGFyZWEnXFxuICAgICduYXYgY29udGVudGFyZWEgY29udGVudGFyZWEgY29udGVudGFyZWEnXFxuICAgICduYXYgY29udGVudGFyZWEgY29udGVudGFyZWEgY29udGVudGFyZWEnXFxuICAgICduYXYgY29udGVudGFyZWEgY29udGVudGFyZWEgY29udGVudGFyZWEnXFxufVxcblxcbi50b3BiYXJ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGQxYjJhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFkZDtcXG4gIFxcbn1cXG5cXG4udG9kb2hlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDdweCAxOXB4IDIxcHggMTFweCAjQ0ZEMUNCOyBcXG59XFxuXFxuLnRhc2toZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcbiAgICBib3gtc2hhZG93OiA3cHggMTlweCAyMXB4IDExcHggI0NGRDFDQjsgXFxufVxcblxcbi50b2RvaGVhZGVyOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4ubGVmdGJhcntcXG4gICAgZ3JpZC1hcmVhOiAgbmF2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1YTc3O1xcbn1cXG5cXG4ucHJvamVjdExpc3R7XFxuICAgIGNvbG9yOiAjZTBlMWRkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4ubGlzdFVJe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0SGVhZGVye1xcbiAgICBjb2xvcjogI2UwZTFkZDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGdyaWQtYXJlYTogY29udGVudGFyZWE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZTBlMWRkOyAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgXFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3RDYXJkc3tcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm94LXNoYWRvdzogN3B4IDE5cHggMjFweCAxMXB4ICNDRkQxQ0I7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuaDN7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaGVhZGVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnZpZXdQcm9qZWN0QnV0dG9ue1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uYnV0dG9uRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGVoZWFkZXJCdXR0b257XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2OTYxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA0NSU7XFxuXFxuXFxufVxcbi5ub3Rlc0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmRyb3Bkb3duLW5vdGVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmRpc3BsYXlEcm9wRG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF17XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogMHB4OyAgICBcXG59XFxuXFxuLnByb2plY3RNb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIG92ZXJmbG93OiBhdXRvOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNWE3NztcXG4gICAgXFxuICB9XFxuXFxuICAubW9kYWxDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFkZDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTsgXFxuICB9XFxuXFxuICAucHJvamVjdEZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0Rm9ybSA+IGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gICNwcm9yaXR5IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC5jbG9zZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2OTYxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAuc3VibWl0UHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICB9XFxuXFxuICAuc3VibWl0VGFza3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICB9XFxuXFxuLnRhc2tNb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJhY2tIZWFkZXJ7XFxud2lkdGg6IDgwJTtcXG5ib3JkZXI6IG5vbmU7XFxuYmFja2dyb3VuZC1jb2xvcjogIzQxNWE3NztcXG5jb2xvcjogI2UwZTFkZDtcXG5mb250LXNpemU6IDEuMnJlbTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiAgICBcXG59XFxuXFxuLmVkaXRCdXR0b257XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50YXNrRGVsZXRlQnV0dG9ue1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2OTYxO1xcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RBcnJheSwgY2xvc2VQcm9qZWN0IH0gZnJvbSAnLi9pbmZvJztcbmltcG9ydCB7IHZhbGlkUHJvamVjdEZvcm0gfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCBkb3duIGZyb20gJy4vc3ZnL2Rvd24ucG5nJ1xuXG5jb25zdCBwcm9qZWN0TGlzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFVJJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuXG5cbmZ1bmN0aW9uIGxpRGlzcGxheSAoaXRlbSkge1xuICBcbiAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgcHJvamVjdExpLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBwcm9qZWN0TGlzdE5vZGUuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3REb20oYXJyYXkpe1xuICAgIHByb2plY3RMaXN0Tm9kZS50ZXh0Q29udGVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpRGlzcGxheShhcnJheVtpXSlcbiAgICB9fVxuXG5mdW5jdGlvbiBjYXJkTWFrZXIgKGl0ZW0saW5kZXgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5pZD1pdGVtLnRpdGxlO1xuICAgIGNvbnN0IGhlYWRlckRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdidcbiAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlcnRpdGxlY2FyZCc7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lJ1xuICAgIGhlYWRlckRpdi5jbGFzc05hbWUgPSAnaGVhZGVyRGl2J1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdmlld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSAnVmlldydcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSAnZGVsZXRlaGVhZGVyQnV0dG9uJ1xuICAgIHZpZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9ICd2aWV3UHJvamVjdEJ1dHRvbidcblxuICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9J1xcbicgKyBpdGVtLnRpdGxlXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHZpZXdQcm9qZWN0QnRuKVxuICAgIFxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKVxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgZG93bkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGRvd25JbWcuc3JjID0gZG93blxuIFxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ3Byb2plY3RDYXJkcydcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc2NyaXB0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGR1ZURhdGVUaXRsZS50ZXh0Q29udGVudD0gJ0R1ZSBEYXRlJ1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRpdGxlKVxuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSlcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgXG4gICAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVEaXYuY2xhc3NOYW1lID0gJ25vdGVzRGl2JztcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbm90ZXMuY2xhc3NOYW1lID0gJ25vdGVzTm9kZSc7XG4gICAgY29uc3Qgbm90ZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVzUC5jbGFzc0xpc3QgPSAoJ2Ryb3Bkb3duLW5vdGVzJylcblxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gIGl0ZW0uZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICBpdGVtLmR1ZURhdGU7XG5cbiAgICBub3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlcyAnO1xuICAgIG5vdGVzLmFwcGVuZENoaWxkKGRvd25JbWcpXG5cbiAgICBub3Rlc1AudGV4dENvbnRlbnQgPSBpdGVtLm5vdGVzXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLnByaW9yaXR5O1xuICAgXG4gICAgY2FyZC5hcHBlbmRDaGlsZChidXR0b25EaXYpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiBcbiAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG4gXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlcylcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVzUClcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5vdGVEaXYpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkKVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2FyZERpc3BsYXkoYXJyYXkpe1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBudWxsO1xuICAgIHByb2plY3RMaXN0RG9tKHByb2plY3RBcnJheSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKGFycmF5W2ldKVxuICAgICAgICBjYXJkTWFrZXIoYXJyYXlbaV0sIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvamVjdERyb3BEb3ducyAoKSB7XG5cbiAgbGV0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZXNEaXYnKVxuICBcbiAgdGVzdC5mb3JFYWNoKHRlc3QgID0+IHRlc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgbGV0IGNvbnRlbnRQID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IGRyb3Bkb3duID0gY29udGVudFAucGFyZW50Tm9kZS5sYXN0Q2hpbGQgO1xuICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheURyb3BEb3duJylcbiAgXG4gIH0pKVxuICAgICAgXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKCl7XG4gICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZWhlYWRlckJ1dHRvbicpO1xuXG4gICBkZWxldGVCdG4uZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT57XG4gICAgY29uc29sZS5sb2coJ0RlbGV0ZVRlc3QnKVxuICAgY29uc3QgY2FyZE51bWJlciA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICBjb25zdCBpbmRleE9iamVjdCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgob2JqZWN0ID0+e1xuICAgcmV0dXJuICBvYmplY3QudGl0bGUgPT09IGNhcmROdW1iZXI7XG4gICB9KVxuICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleE9iamVjdCwxKVxuICAgbGV0IGNhcmRSZW1vdmUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgY29udGVudC5yZW1vdmVDaGlsZChjYXJkUmVtb3ZlKVxuICAgcHJvamVjdExpc3ROb2RlLnRleHRDb250ZW50ID0gbnVsbDtcbiAgIHByb2plY3RMaXN0RG9tKHByb2plY3RBcnJheSlcbiAgIGNsb3NlUHJvamVjdCgpXG5cbn0pKVxuXG59XG5cbmV4cG9ydCB7cHJvamVjdExpc3REb20gLCBwcm9qZWN0Q2FyZERpc3BsYXkgLCBwcm9qZWN0RHJvcERvd25zICwgZGVsZXRlUHJvamVjdCB9XG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksb3Blbk1vZGFsLCBzdWJtaXRQcm9qZWN0fSBmcm9tICcuL2luZm8nXG5pbXBvcnQge3Byb2plY3RMaXN0RG9tLCBwcm9qZWN0Q2FyZERpc3BsYXksIHByb2plY3REcm9wRG93bnMsIGRlbGV0ZVByb2plY3R9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IHt2aWV3UHJvamVjdCwgcHVzaE1vZGFsVGFzaywgcmV0dXJuQnRuLCBlZGl0VGFza30gZnJvbSAnLi92aWV3UHJvamVjdCdcblxuXG5wcm9qZWN0TGlzdERvbShwcm9qZWN0QXJyYXkpXG5wcm9qZWN0Q2FyZERpc3BsYXkocHJvamVjdEFycmF5KVxucHJvamVjdERyb3BEb3ducygpXG5vcGVuTW9kYWwoKVxudmlld1Byb2plY3QoKVxuZWRpdFRhc2soKVxuc3VibWl0UHJvamVjdCgpXG5kZWxldGVQcm9qZWN0KClcblxucHVzaE1vZGFsVGFzaygpXG5yZXR1cm5CdG4oKVxuXG5cblxuXG4iLCJpbXBvcnQgeyBwcm9qZWN0Q2FyZERpc3BsYXksIGRlbGV0ZVByb2plY3QsIHByb2plY3RMaXN0RG9tLCBwcm9qZWN0RHJvcERvd25zIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyB2aWV3UHJvamVjdCB9IGZyb20gJy4vdmlld1Byb2plY3QnO1xuXG5cbmNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgdG9kb0FycmF5KSA9PntcbiAgICB0b2RvQXJyYXkgPSBbXVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ICxub3RlcyAsIGNoZWNrbGlzdCwgdG9kb0FycmF5fVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0QWRkaXRpb24gKGl0ZW0pIHtcbiAgICBwcm9qZWN0QXJyYXkucHVzaChpdGVtKTsgICAgXG59XG5cbmZ1bmN0aW9uIHByb2plY3RNb2RhbE5vZGVFZGl0KCl7XG4gICAgY29uc3QgZWRpdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRFZGl0JylcblxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaGVhZGVyJyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFByb2plY3QnKVxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0VGFzaycpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUxhYmVsJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uTGFiZWwnKVxuICAgIGNvbnN0IGR1ZURhdGUgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlTGFiZWwnKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpXG4gICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc0xhYmVsJylcblxuICAgIGhlYWRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICB7XG4gICAgZWRpdFN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgbm90ZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbm90ZXNMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0YXNrU3VibWl0LnRleHRDb250ZW50PSAnU3VibWl0IFRhc2snXG4gICAgdGFza1N1Ym1pdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgIH0gKVxuXG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdCAoKVxue1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICBwcm9qZWN0TW9kYWxOb2RlRWRpdCgpfSlcbn1cblxuZnVuY3Rpb24gY2xlYXJNb2RhbCAoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkdWVEYXRlID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKVxuICAgIG5vdGVzLnZhbHVlPSAnJ1xuICAgIGR1ZURhdGUudmFsdWUgPSAnJ1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJydcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnXG59XG5mdW5jdGlvbiBvcGVuTW9kYWwgKCl7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaGVhZGVyJyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuXG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWRpdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRFZGl0JylcbiAgICAgICAgZWRpdFN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0TW9kYWxOb2RlRWRpdCgpXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNsb3NlUHJvamVjdCgpXG4gICAgICAgIGNsZWFyTW9kYWwoKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcblxuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRQcm9qZWN0JylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkdWVEYXRlID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJylcbiAgXG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cblxuXG5cbiAgICAgICAgcHJvamVjdEFkZGl0aW9uKHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIG5vdGVzLnZhbHVlKSlcbiAgICAgICAgcHJvamVjdENhcmREaXNwbGF5KHByb2plY3RBcnJheSlcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBkZWxldGVQcm9qZWN0KClcbiAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgIHZpZXdQcm9qZWN0KClcbiAgICAgICAgcHJvamVjdERyb3BEb3ducygpXG4gICAgICAgIHByb2plY3RMaXN0RG9tKHByb2plY3RBcnJheSlcblxuICAgIH0pXG4gICAgXG59XG5cblxucHJvamVjdEFkZGl0aW9uKHByb2plY3RGYWN0b3J5KCdEZWZhdWx0IFByb2plY3QnLCAnVXNlIHRoZSBkZXNjcmlwdGlvbiBib3ggdG8gY3JlYXRlIGEgYnJpZWYgb3V0bGluZSBvZiB0aGUgcHJvamVjdCBhbmQgdGFza3MnLCAnMjYvMDIvMjAyMycsICdIaWdoJywgJ05vb290ZXMgbm90ZXMgd29uZGVyZnVsIG5vdGVzJykpXG5cblxuXG5leHBvcnQge3Byb2plY3RBcnJheSwgb3Blbk1vZGFsICwgc3VibWl0UHJvamVjdCAsIHByb2plY3RNb2RhbE5vZGVFZGl0LCBjbG9zZVByb2plY3R9XG4iLCJjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG5cbmZ1bmN0aW9uIHZhbGlkUHJvamVjdEZvcm0gKCkge1xuICAgIGlmIChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICcnICl7Y29uc29sZS5sb2coJ3Rlc3QnKX1cblxuICAgIGVsc2Uge3JldHVybiB0cnVlfTtcbn1cblxuZXhwb3J0IHt2YWxpZFByb2plY3RGb3JtfSIsImltcG9ydCB7IHByb2plY3RDYXJkRGlzcGxheSAscHJvamVjdERyb3BEb3ducywgZGVsZXRlUHJvamVjdH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByb2plY3RNb2RhbE5vZGVFZGl0IH0gZnJvbSBcIi4vaW5mb1wiO1xuXG5sZXQgY3VycmVudEFycmF5PSBudWxsO1xuY29uc3QgYmFja0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5jb25zdCB0b2RvRmFjdG9yeSA9ICh0YXNrLCBkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSkgPT5cbnsgIHJldHVybnsgdGFzaywgZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJpb3JpdHl9fVxuXG5mdW5jdGlvbiBjbG9zZUJ0biAoKXtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB0YXNrTW9kYWxOb2RlRWRpdCgpfSlcbiAgICAgIFxuXG59XG5cbmZ1bmN0aW9uIHRhc2tNb2RhbE5vZGVFZGl0KCl7XG4gICAgY29uc3QgZWRpdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRFZGl0JylcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG5cbiAgICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRlcicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRQcm9qZWN0JylcbiAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFRhc2snKVxuXG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lTGFiZWwnKVxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJylcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzTGFiZWwnKVxuXG4gICAgaGVhZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgIHtcblxuICAgIGVkaXRTdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgbm90ZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBub3Rlc0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0YXNrU3VibWl0LnRleHRDb250ZW50PSAnU3VibWl0IFRhc2snXG4gICAgdGFza1N1Ym1pdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgY2xvc2VCdG4oKVxuICAgXG5cblxuICAgfSApXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGVkaXRNb2RhbE5vZGVFZGl0KGluZGV4KXtcblxuICAgIGxldCBpdGVtID0gY3VycmVudEFycmF5LnRvZG9BcnJheVtpbmRleF1cbiAgICBcbiAgICBcbiAgICBjb25zdCBlZGl0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEVkaXQnKVxuICAgIFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRUYXNrJylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lTGFiZWwnKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkxhYmVsJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBjb25zdCBkdWVEYXRlbGFiZWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVMYWJlbCcpXG4gICAgY29uc3QgZHVlRGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJylcbiAgICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzTGFiZWwnKVxuICAgIHByb2plY3ROYW1lQ29udGVudC50ZXh0Q29udGVudCA9IG51bGw7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrIE5hbWUnO1xuICAgIHByb2plY3ROYW1lQ29udGVudC52YWx1ZSA9IGl0ZW0udGFzayBcblxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgID0gJ0VkaXQgRGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uQ29udGVudC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBkdWVEYXRlbGFiZWwudGV4dENvbnRlbnQgPSAnRWRpdCBEdWUgRGF0ZSc7XG4gICAgZHVlRGF0ZUNvbnRlbnQudmFsdWUgPSBpdGVtLmR1ZURhdGVcblxuICAgIG5vdGVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbm90ZXNMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgZWRpdFN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gcHVzaEVkaXQgKGluZGV4KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG5cbiAgICBjb25zdCBzdWJtaXRFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEVkaXQnKVxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcbiAgICBjb25zb2xlLmxvZyhzdWJtaXRFZGl0KVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBcnJheSlcbiAgICBsZXQgY3VycmVudCA9IGN1cnJlbnRBcnJheS50b2RvQXJyYXlbaW5kZXhdXG4gICAgY29uc29sZS5sb2coY3VycmVudClcblxuXG4gICAgc3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0Q29udGVudC52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25Db250ZW50LnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZUluZm8gPSBkdWVEYXRlQ29udGVudC52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5mbyA9IHByaW9yaXQudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpXG4gICAgICAgIGN1cnJlbnQudGFzayA9IHByb2plY3ROYW1lXG4gICAgICAgIGN1cnJlbnQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgY3VycmVudC5kdWVEYXRlID0gZHVlRGF0ZUluZm87XG4gICAgICAgIGN1cnJlbnQucHJpb3JpdHkgPSBwcmlvcml0eUluZm87XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRhc2tDYXJkRGlzcGxheShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICBwcm9qZWN0TGlzdERvbShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICBkZWxldGVUYXNrKClcbiAgICAgICAgZWRpdFRhc2soKVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudEFycmF5XG4gIFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBcnJheSl9KVxuICAgICAgIFxufVxuXG5cbmZ1bmN0aW9uIHB1c2hNb2RhbFRhc2soKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkdWVEYXRlID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0VGFzaycpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG5cblxuICAgIHRhc2tTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgdGFza01vZGFsTm9kZUVkaXQoKVxuICAgIFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB0b2RvRmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKVxuICAgICAgICBjdXJyZW50QXJyYXkudG9kb0FycmF5LnB1c2gobmV3VGFzaylcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IG51bGw7XG4gICAgICAgIHRhc2tDYXJkRGlzcGxheShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICBwcm9qZWN0TGlzdERvbShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICBlZGl0VGFzaygpXG5cbiAgICAgICAgZGVsZXRlVGFzaygpXG4gICAgfSApXG5cbiAgICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzIChpdGVtICxpbmRleCl7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXRCdXR0b24nO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFza0RlbGV0ZUJ1dHRvbidcbiAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdidcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICBsZXQgdGFza0RpdkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tEaXZDYXJkLmlkID0gaXRlbS50YXNrXG4gICAgdGFza0RpdkNhcmQuc2V0QXR0cmlidXRlKCdhcnJheScsaW5kZXgpXG4gICAgdGFza0RpdkNhcmQuY2xhc3NOYW1lPSAncHJvamVjdENhcmRzJztcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0YXNraGVhZGVyLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZSc7XG4gICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkZXNjcmlwdGlvbmhlYWRlciA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGRlc2NyaXB0aW9uaGVhZGVyLnRleHRDb250ZW50ID0gJ1Rhc2sgRGVzY3JpcHRpb24nO1xuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGR1ZURhdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGR1ZURhdGVIZWFkZXIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByaW9yaXR5aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcmlvcml0eWhlYWRlci50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgbGV0IHByaW9yaXR5ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBjb21wbGV0ZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGV0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gICAgY29tcGxldGVkUC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQ/J1xuICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZFApXG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkKVxuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNraGVhZGVyKVxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uaGVhZGVyKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbilcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVIZWFkZXIpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5aGVhZGVyKVxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50YXNrO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpdGVtLnByaW9yaXR5XG5cbiAgICB0YXNrRGl2Q2FyZC5hcHBlbmRDaGlsZChidXR0b25EaXYpXG4gICAgdGFza0RpdkNhcmQuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICB0YXNrRGl2Q2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcbiAgICB0YXNrRGl2Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KVxuICAgIHRhc2tEaXZDYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2Q2FyZClcblxufVxuXG5mdW5jdGlvbiBsaURpc3BsYXkgKGl0ZW0pIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdFVJJyk7XG4gICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHByb2plY3RMaS50ZXh0Q29udGVudCA9IGl0ZW1cbiAgICBwcm9qZWN0TGlzdE5vZGUuYXBwZW5kQ2hpbGQocHJvamVjdExpKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3REb20oYXJyYXkpe1xuICAgIGNvbnN0IHByb2plY3RMaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VUknKTtcbiAgICBwcm9qZWN0TGlzdE5vZGUudGV4dENvbnRlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICBcbiAgICAgbGlEaXNwbGF5KGFycmF5W2ldLnRhc2spXG4gICAgfX1cblxuZnVuY3Rpb24gdGFza0NhcmREaXNwbGF5KGFycmF5KXtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBudWxsO1xuXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKGFycmF5W2ldKVxuICAgICAgICBkaXNwbGF5VGFza3MoYXJyYXlbaV0sIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdmlld1Byb2plY3QoKXtcblxuICAgIGNvbnN0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld1Byb2plY3RCdXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9oZWFkZXInKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SGVhZGVyJylcblxuXG4gICB2aWV3QnV0dG9uLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+e1xuIFxuICAgIGhlYWRlckJ0bi50ZXh0Q29udGVudCA9ICcrIFRhc2snO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICAgICAgYmFja0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBjb25zdCBiYWNrSGVhZGVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBiYWNrSGVhZGVyLmFwcGVuZENoaWxkKGJhY2tIZWFkZXJIMSlcbiAgICAgICAgYmFja0hlYWRlci5jbGFzc05hbWUgPSAnYmFja0hlYWRlcic7XG4gICAgICAgIGJhY2tIZWFkZXJIMS50ZXh0Q29udGVudCA9ICc8IEJhY2sgdG8gcHJvamVjdHMnXG4gICAgIFxuICAgICAgICBwcm9qZWN0TGlzdC5pbnNlcnRCZWZvcmUoYmFja0hlYWRlciwgcHJvamVjdFRpdGxlKVxuICAgIFxuICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIGxldCBpbmRleE9iamVjdCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgob2JqZWN0ID0+e1xuICAgICAgICByZXR1cm4gIG9iamVjdC50aXRsZSA9PT0gY2FyZE51bWJlcjt9KVxuXG4gICAgICAgICBjdXJyZW50QXJyYXkgPSAocHJvamVjdEFycmF5W2luZGV4T2JqZWN0XSlcbiAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdMaXN0IG9mIHRhc2tzIGZvciAnICsgY3VycmVudEFycmF5LnRpdGxlO1xuICAgICAgICAgcHJvamVjdExpc3REb20oY3VycmVudEFycmF5LnRvZG9BcnJheSlcbiAgICAgICAgIHRhc2tNb2RhbE5vZGVFZGl0KClcbiAgICAgICAgIHRhc2tDYXJkRGlzcGxheShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICAgZWRpdFRhc2soKVxuICAgICAgICAgZGVsZXRlVGFzaygpXG4gICAgIFxuICAgICBcbiAgXG5cbiAgXG4gXG4gICAgICAgXG5cbiAgICB9KSAgXG5cbiBcbiAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXR1cm5CdG4gKCl7XG5cbmNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaGVhZGVyJylcbmNvbnN0IHByb2plY3RMSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEhlYWRlcicpXG5cblxuYmFja0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIHByb2plY3RDYXJkRGlzcGxheShwcm9qZWN0QXJyYXkpXG4gICAgcHJvamVjdE1vZGFsTm9kZUVkaXQoKVxuICAgIGJhY2tIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcm9qZWN0TEkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTGlzdCBvZiBwcm9qZWN0cycgXG4gICAgYmFja0hlYWRlci50ZXh0Q29udGVudCA9IG51bGw7XG4gICAgaGVhZGVyQnRuLnRleHRDb250ZW50ID0gJysgUHJvamVjdCdcbiAgICB2aWV3UHJvamVjdCgpXG4gICAgZGVsZXRlUHJvamVjdCgpXG4gICAgcHJvamVjdERyb3BEb3ducygpXG5cbiAgIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrICgpe1xuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRCdXR0b24nKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcblxuXG4gICAgZWRpdEJ1dHRvbi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+e1xuXG4gICAgICAgIGxldCBlZGl0T2JqZWN0ID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFRhc2snKVxuICAgICAgICBzdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuXG4gICAgbGV0IGluZGV4ID0gY2FyZE51bWJlci5nZXRBdHRyaWJ1dGUoJ2FycmF5JylcbiAgICBjb25zb2xlLmxvZyhpbmRleClcblxuXG4gICAgZWRpdE1vZGFsTm9kZUVkaXQoaW5kZXgpXG4gICAgcHVzaEVkaXQoaW5kZXgpXG5cbiAgICB9KVxuICAgIFxuICAgIClcblxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrICgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0RlbGV0ZUJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PntcbiAgICBjb25zdCBjYXJkTnVtYmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZFxuXG4gICAgY29uc3QgaW5kZXhPYmplY3QgPSBjdXJyZW50QXJyYXkudG9kb0FycmF5LmZpbmRJbmRleChvYmplY3QgPT57XG4gICAgICAgIHJldHVybiAgb2JqZWN0LnRhc2sgPT09IGNhcmROdW1iZXI7XG4gICAgICAgIH0pXG5cbiAgICBjdXJyZW50QXJyYXkudG9kb0FycmF5LnNwbGljZShpbmRleE9iamVjdCwxKVxuICAgIGxldCBjYXJkUmVtb3ZlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNhcmRSZW1vdmUpXG4gICAgcHJvamVjdExpc3REb20oY3VycmVudEFycmF5LnRvZG9BcnJheSlcbiB9KSlcbiBcbiB9XG5cbmV4cG9ydCB7dmlld1Byb2plY3QsIHB1c2hNb2RhbFRhc2sscmV0dXJuQnRuLGVkaXRUYXNrfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==