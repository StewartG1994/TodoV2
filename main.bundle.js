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
/* harmony import */ var _svg_down_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/down.png */ "./src/svg/down.png");



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
    downImg.src = _svg_down_png__WEBPACK_IMPORTED_MODULE_1__
 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxlQUFlLFlBQVksVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsb2hCQUFvaEIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsNENBQTRDLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLDJDQUEyQyx3Q0FBd0MsMkJBQTJCLDhQQUE4UCxZQUFZLHlCQUF5QiwrQkFBK0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLE9BQU8sZ0JBQWdCLGdDQUFnQyxzQkFBc0IsbUJBQW1CLGdDQUFnQywwQkFBMEIsbUNBQW1DLDhDQUE4QyxHQUFHLGdCQUFnQixnQ0FBZ0Msc0JBQXNCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLG1DQUFtQyw4Q0FBOEMsR0FBRyxzQkFBc0IsNkJBQTZCLEdBQUcsYUFBYSxzQkFBc0IsZ0NBQWdDLEdBQUcsaUJBQWlCLHFCQUFxQixvQkFBb0IsOEJBQThCLDZCQUE2QixnQkFBZ0IseUJBQXlCLHdCQUF3QixHQUFHLFlBQVksb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3QiwyQkFBMkIsMkJBQTJCLEdBQUcsYUFBYSw2QkFBNkIsbUNBQW1DLG9CQUFvQixtRUFBbUUsNEJBQTRCLGdCQUFnQixHQUFHLGtCQUFrQixpQkFBaUIsZ0NBQWdDLDBCQUEwQixvQkFBb0Isb0JBQW9CLDhDQUE4QywwQkFBMEIsU0FBUyxPQUFPLHdCQUF3QiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixLQUFLLHVCQUF1QiwyQkFBMkIsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsZUFBZSw4QkFBOEIsR0FBRyx3QkFBd0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLGlCQUFpQixPQUFPLFlBQVksb0JBQW9CLDZCQUE2QixHQUFHLHFCQUFxQixvQkFBb0IseUJBQXlCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHNCQUFzQixLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyx5QkFBeUIsb0JBQW9CLHNCQUFzQixHQUFHLGtCQUFrQixvQkFBb0IsdUJBQXVCLGlCQUFpQixjQUFjLGFBQWEsbUJBQW1CLG9CQUFvQixzQkFBc0IsZ0NBQWdDLFdBQVcscUJBQXFCLGdDQUFnQyx1QkFBdUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLGFBQWEsb0JBQW9CLHdCQUF3QixtQkFBbUIseUJBQXlCLGdDQUFnQyxtQkFBbUIsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIseUJBQXlCLG1CQUFtQixtQkFBbUIsZ0NBQWdDLEtBQUssa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHlCQUF5QixtQkFBbUIsbUJBQW1CLGdDQUFnQyxLQUFLLGVBQWUsb0JBQW9CLEdBQUcsZ0JBQWdCLGFBQWEsZUFBZSw0QkFBNEIsaUJBQWlCLG9CQUFvQixtQkFBbUIsdUJBQXVCLFdBQVcsZ0JBQWdCLGlCQUFpQixnQ0FBZ0MseUJBQXlCLG1CQUFtQixtQkFBbUIsR0FBRyxzQkFBc0IsaUJBQWlCLGdDQUFnQyw0QkFBNEIsbUJBQW1CLG1CQUFtQixHQUFHLG1CQUFtQjtBQUM5aGE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRDtBQUNuQjs7QUFFakM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBWTs7QUFFL0Isb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFzQjtBQUM3QztBQUNBLElBQUk7QUFDSixHQUFHLHNEQUFtQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQVk7QUFDOUIsR0FBRyxvREFBWTs7QUFFZixDQUFDOztBQUVEOztBQUVnRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSTVEO0FBQ3lDO0FBQzRCO0FBQ1o7OztBQUc3RSxvREFBYyxDQUFDLCtDQUFZO0FBQzNCLHlEQUFrQixDQUFDLCtDQUFZO0FBQy9CLHVEQUFnQjtBQUNoQixpREFBUztBQUNULDBEQUFXO0FBQ1gsdURBQVE7QUFDUixxREFBYTtBQUNiLG9EQUFhOztBQUViLDREQUFhO0FBQ2Isd0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1GO0FBQ2hEOzs7QUFHNUM7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQSxRQUFRLHlEQUFrQjtBQUMxQjtBQUNBLFFBQVEsb0RBQWE7QUFDckI7QUFDQSxRQUFRLDBEQUFXO0FBQ25CLFFBQVEsdURBQWdCO0FBQ3hCLFFBQVEscURBQWM7O0FBRXRCLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7OztBQUlxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SFY7QUFDZjs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBLEdBQUcsUUFBUTs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFzQjtBQUNoRCw2Q0FBNkM7O0FBRTdDLHlCQUF5QiwrQ0FBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUkseURBQWtCLENBQUMsK0NBQVk7QUFDbkMsSUFBSSw0REFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixJQUFJLHVEQUFnQjs7QUFFcEIsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3YyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG92Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG92Mi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG92Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG92Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG92Mi8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb3YyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG92Mi8uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL3RvZG92Mi8uL3NyYy92aWV3UHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsMWZyKTtcXG4gICBcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIFxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ25hdiBoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ25hdiBjb250ZW50YXJlYSBjb250ZW50YXJlYSBjb250ZW50YXJlYSdcXG4gICAgJ25hdiBjb250ZW50YXJlYSBjb250ZW50YXJlYSBjb250ZW50YXJlYSdcXG4gICAgJ25hdiBjb250ZW50YXJlYSBjb250ZW50YXJlYSBjb250ZW50YXJlYSdcXG4gICAgJ25hdiBjb250ZW50YXJlYSBjb250ZW50YXJlYSBjb250ZW50YXJlYSdcXG59XFxuXFxuLnRvcGJhcntcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXIgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwZDFiMmE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMWRkO1xcbiAgXFxufVxcblxcbi50b2RvaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcXG4gICAgYm94LXNoYWRvdzogN3B4IDE5cHggMjFweCAxMXB4ICNDRkQxQ0I7IFxcbn1cXG5cXG4udGFza2hlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDdweCAxOXB4IDIxcHggMTFweCAjQ0ZEMUNCOyBcXG59XFxuXFxuLnRvZG9oZWFkZXI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi5sZWZ0YmFye1xcbiAgICBncmlkLWFyZWE6ICBuYXY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVhNzc7XFxufVxcblxcbi5wcm9qZWN0TGlzdHtcXG4gICAgY29sb3I6ICNlMGUxZGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5saXN0VUl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3RIZWFkZXJ7XFxuICAgIGNvbG9yOiAjZTBlMWRkO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50YXJlYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNlMGUxZGQ7ICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBcXG5cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdENhcmRze1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3gtc2hhZG93OiA3cHggMTlweCAyMXB4IDExcHggI0NGRDFDQjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5oM3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5oZWFkZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udmlld1Byb2plY3RCdXR0b257XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N0RENzc7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbi5idXR0b25EaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZWhlYWRlckJ1dHRvbntcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY5NjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDQ1JTtcXG5cXG5cXG59XFxuLm5vdGVzRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZHJvcGRvd24tbm90ZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZGlzcGxheURyb3BEb3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiAwcHg7ICAgIFxcbn1cXG5cXG4ucHJvamVjdE1vZGFse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1YTc3O1xcbiAgICBcXG4gIH1cXG5cXG4gIC5tb2RhbENvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMWRkO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogNjAlOyBcXG4gIH1cXG5cXG4gIC5wcm9qZWN0Rm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RGb3JtID4gaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgI3Byb3JpdHkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNsb3Nle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY5NjE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5zdWJtaXRQcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gIH1cXG5cXG4gIC5zdWJtaXRUYXNre1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gIH1cXG5cXG4udGFza01vZGFse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYmFja0hlYWRlcntcXG53aWR0aDogODAlO1xcbmJvcmRlcjogbm9uZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNDE1YTc3O1xcbmNvbG9yOiAjZTBlMWRkO1xcbmZvbnQtc2l6ZTogMS4ycmVtO1xcbnRleHQtYWxpZ246IGxlZnQ7XFxucGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxuICAgIFxcbn1cXG5cXG4uZWRpdEJ1dHRvbntcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2tEZWxldGVCdXR0b257XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY5NjE7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3Nc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QVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixvQkFBb0I7OztBQUdwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtPQUN0QixrQkFBa0I7SUFDckIsWUFBWTtJQUNaLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwxZnIpO1xcbiAgIFxcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnbmF2IGhlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbiAgICAnbmF2IGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhIGNvbnRlbnRhcmVhJ1xcbn1cXG5cXG4udG9wYmFye1xcbiAgICBncmlkLWFyZWE6IGhlYWRlciA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzBkMWIyYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZGQ7XFxuICBcXG59XFxuXFxuLnRvZG9oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggMjBweCA1MHB4O1xcbiAgICBib3gtc2hhZG93OiA3cHggMTlweCAyMXB4IDExcHggI0NGRDFDQjsgXFxufVxcblxcbi50YXNraGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEYyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcXG4gICAgYm94LXNoYWRvdzogN3B4IDE5cHggMjFweCAxMXB4ICNDRkQxQ0I7IFxcbn1cXG5cXG4udG9kb2hlYWRlcjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmxlZnRiYXJ7XFxuICAgIGdyaWQtYXJlYTogIG5hdjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNWE3NztcXG59XFxuXFxuLnByb2plY3RMaXN0e1xcbiAgICBjb2xvcjogI2UwZTFkZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmxpc3RVSXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdEhlYWRlcntcXG4gICAgY29sb3I6ICNlMGUxZGQ7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnRhcmVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2UwZTFkZDsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIFxcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0Q2FyZHN7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJveC1zaGFkb3c6IDdweCAxOXB4IDIxcHggMTFweCAjQ0ZEMUNCOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmhlYWRlckRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi52aWV3UHJvamVjdEJ1dHRvbntcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3REQ3NztcXG4gICAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmJ1dHRvbkRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlaGVhZGVyQnV0dG9ue1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNDUlO1xcblxcblxcbn1cXG4ubm90ZXNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kcm9wZG93bi1ub3RlcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5RHJvcERvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDBweDsgICAgXFxufVxcblxcbi5wcm9qZWN0TW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBvdmVyZmxvdzogYXV0bzsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVhNzc7XFxuICAgIFxcbiAgfVxcblxcbiAgLm1vZGFsQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZGQ7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA2MCU7IFxcbiAgfVxcblxcbiAgLnByb2plY3RGb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEZvcm0gPiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjcHJvcml0eSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuY2xvc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcbiAgLnN1Ym1pdFByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgfVxcblxcbiAgLnN1Ym1pdFRhc2t7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgfVxcblxcbi50YXNrTW9kYWx7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5iYWNrSGVhZGVye1xcbndpZHRoOiA4MCU7XFxuYm9yZGVyOiBub25lO1xcbmJhY2tncm91bmQtY29sb3I6ICM0MTVhNzc7XFxuY29sb3I6ICNlMGUxZGQ7XFxuZm9udC1zaXplOiAxLjJyZW07XFxudGV4dC1hbGlnbjogbGVmdDtcXG5wYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gICAgXFxufVxcblxcbi5lZGl0QnV0dG9ue1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdERDc3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFza0RlbGV0ZUJ1dHRvbntcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjk2MTtcXG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0QXJyYXksIGNsb3NlUHJvamVjdCB9IGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgZG93biBmcm9tICcuL3N2Zy9kb3duLnBuZydcblxuY29uc3QgcHJvamVjdExpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RVSScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cblxuXG5mdW5jdGlvbiBsaURpc3BsYXkgKGl0ZW0pIHtcbiAgXG4gICAgY29uc3QgcHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIHByb2plY3RMaS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgcHJvamVjdExpc3ROb2RlLmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0RG9tKGFycmF5KXtcbiAgICBwcm9qZWN0TGlzdE5vZGUudGV4dENvbnRlbnQgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaURpc3BsYXkoYXJyYXlbaV0pXG4gICAgfX1cblxuZnVuY3Rpb24gY2FyZE1ha2VyIChpdGVtLGluZGV4KSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuaWQ9aXRlbS50aXRsZTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdidXR0b25EaXYnXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJ0aXRsZWNhcmQnO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICBoZWFkZXJEaXYuY2xhc3NOYW1lID0gJ2hlYWRlckRpdidcbiAgICBjb25zdCB2aWV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZpZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1ZpZXcnXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NOYW1lID0gJ2RlbGV0ZWhlYWRlckJ1dHRvbidcbiAgICB2aWV3UHJvamVjdEJ0bi5jbGFzc05hbWUgPSAndmlld1Byb2plY3RCdXR0b24nXG5cbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSdcXG4nICsgaXRlbS50aXRsZVxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZCh2aWV3UHJvamVjdEJ0bilcbiAgICBcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bilcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGNvbnN0IGRvd25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBkb3duSW1nLnNyYyA9IGRvd25cbiBcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdwcm9qZWN0Q2FyZHMnXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNjcmlwdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UaXRsZSlcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQ9ICdEdWUgRGF0ZSdcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUaXRsZSlcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmlvcml0eVRpdGxlID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIFxuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlRGl2LmNsYXNzTmFtZSA9ICdub3Rlc0Rpdic7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5vdGVzLmNsYXNzTmFtZSA9ICdub3Rlc05vZGUnO1xuICAgIGNvbnN0IG5vdGVzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3Rlc1AuY2xhc3NMaXN0ID0gKCdkcm9wZG93bi1ub3RlcycpXG5cbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAgaXRlbS5kdWVEYXRlO1xuXG4gICAgbm90ZXMudGV4dENvbnRlbnQgPSAnTm90ZXMgJztcbiAgICBub3Rlcy5hcHBlbmRDaGlsZChkb3duSW1nKVxuXG4gICAgbm90ZXNQLnRleHRDb250ZW50ID0gaXRlbS5ub3Rlc1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gaXRlbS5wcmlvcml0eTtcbiAgIFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KVxuIFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZXMpXG4gICAgbm90ZURpdi5hcHBlbmRDaGlsZChub3Rlc1ApXG4gICAgY2FyZC5hcHBlbmRDaGlsZChub3RlRGl2KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZClcbn1cblxuZnVuY3Rpb24gcHJvamVjdENhcmREaXNwbGF5KGFycmF5KXtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICBwcm9qZWN0TGlzdERvbShwcm9qZWN0QXJyYXkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihhcnJheVtpXSlcbiAgICAgICAgY2FyZE1ha2VyKGFycmF5W2ldLCBpbmRleClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2plY3REcm9wRG93bnMgKCkge1xuXG4gIGxldCB0ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGVzRGl2JylcbiAgXG4gIHRlc3QuZm9yRWFjaCh0ZXN0ICA9PiB0ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGxldCBjb250ZW50UCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCBkcm9wZG93biA9IGNvbnRlbnRQLnBhcmVudE5vZGUubGFzdENoaWxkIDtcbiAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXlEcm9wRG93bicpXG4gIFxuICB9KSlcbiAgICAgIFxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0ICgpe1xuICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVoZWFkZXJCdXR0b24nKTtcblxuICAgZGVsZXRlQnRuLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+e1xuICAgIGNvbnNvbGUubG9nKCdEZWxldGVUZXN0JylcbiAgIGNvbnN0IGNhcmROdW1iZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgY29uc3QgaW5kZXhPYmplY3QgPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KG9iamVjdCA9PntcbiAgIHJldHVybiAgb2JqZWN0LnRpdGxlID09PSBjYXJkTnVtYmVyO1xuICAgfSlcbiAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXhPYmplY3QsMSlcbiAgIGxldCBjYXJkUmVtb3ZlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2FyZFJlbW92ZSlcbiAgIHByb2plY3RMaXN0Tm9kZS50ZXh0Q29udGVudCA9IG51bGw7XG4gICBwcm9qZWN0TGlzdERvbShwcm9qZWN0QXJyYXkpXG4gICBjbG9zZVByb2plY3QoKVxuXG59KSlcblxufVxuXG5leHBvcnQge3Byb2plY3RMaXN0RG9tICwgcHJvamVjdENhcmREaXNwbGF5ICwgcHJvamVjdERyb3BEb3ducyAsIGRlbGV0ZVByb2plY3QgfVxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgcHJvamVjdEFycmF5LG9wZW5Nb2RhbCwgc3VibWl0UHJvamVjdH0gZnJvbSAnLi9pbmZvJ1xuaW1wb3J0IHtwcm9qZWN0TGlzdERvbSwgcHJvamVjdENhcmREaXNwbGF5LCBwcm9qZWN0RHJvcERvd25zLCBkZWxldGVQcm9qZWN0fSBmcm9tICcuL2RvbSdcbmltcG9ydCB7dmlld1Byb2plY3QsIHB1c2hNb2RhbFRhc2ssIHJldHVybkJ0biwgZWRpdFRhc2t9IGZyb20gJy4vdmlld1Byb2plY3QnXG5cblxucHJvamVjdExpc3REb20ocHJvamVjdEFycmF5KVxucHJvamVjdENhcmREaXNwbGF5KHByb2plY3RBcnJheSlcbnByb2plY3REcm9wRG93bnMoKVxub3Blbk1vZGFsKClcbnZpZXdQcm9qZWN0KClcbmVkaXRUYXNrKClcbnN1Ym1pdFByb2plY3QoKVxuZGVsZXRlUHJvamVjdCgpXG5cbnB1c2hNb2RhbFRhc2soKVxucmV0dXJuQnRuKClcblxuXG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdENhcmREaXNwbGF5LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0TGlzdERvbSwgcHJvamVjdERyb3BEb3ducyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgdmlld1Byb2plY3QgfSBmcm9tICcuL3ZpZXdQcm9qZWN0JztcblxuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QsIHRvZG9BcnJheSkgPT57XG4gICAgdG9kb0FycmF5ID0gW11cblxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSAsbm90ZXMgLCBjaGVja2xpc3QsIHRvZG9BcnJheX1cbn1cblxuZnVuY3Rpb24gcHJvamVjdEFkZGl0aW9uIChpdGVtKSB7XG4gICAgcHJvamVjdEFycmF5LnB1c2goaXRlbSk7ICAgIFxufVxuXG5mdW5jdGlvbiBwcm9qZWN0TW9kYWxOb2RlRWRpdCgpe1xuICAgIGNvbnN0IGVkaXRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RWRpdCcpXG5cbiAgICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRlcicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRQcm9qZWN0JylcbiAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFRhc2snKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVMYWJlbCcpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkxhYmVsJylcbiAgICBjb25zdCBkdWVEYXRlID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUxhYmVsJylcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKVxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNMYWJlbCcpXG5cbiAgICBoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAge1xuICAgIGVkaXRTdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgIG5vdGVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG5vdGVzTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGFza1N1Ym1pdC50ZXh0Q29udGVudD0gJ1N1Ym1pdCBUYXNrJ1xuICAgIHRhc2tTdWJtaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICB9IClcblxufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3QgKClcbntcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgcHJvamVjdE1vZGFsTm9kZUVkaXQoKX0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyTW9kYWwgKCl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG4gICAgY29uc3QgZHVlRGF0ZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKVxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJylcbiAgICBub3Rlcy52YWx1ZT0gJydcbiAgICBkdWVEYXRlLnZhbHVlID0gJydcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJ1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsICgpe1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRlcicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RWRpdCcpXG4gICAgICAgIGVkaXRTdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcHJvamVjdE1vZGFsTm9kZUVkaXQoKVxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICBjbG9zZVByb2plY3QoKVxuICAgICAgICBjbGVhck1vZGFsKClcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCl7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG4gICAgXG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0UHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG4gICAgY29uc3QgZHVlRGF0ZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpXG4gIFxuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cblxuXG4gICAgICAgIHByb2plY3RBZGRpdGlvbihwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBub3Rlcy52YWx1ZSkpXG4gICAgICAgIHByb2plY3RDYXJkRGlzcGxheShwcm9qZWN0QXJyYXkpXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZGVsZXRlUHJvamVjdCgpXG4gICAgICAgIGNsZWFyTW9kYWwoKVxuICAgICAgICB2aWV3UHJvamVjdCgpXG4gICAgICAgIHByb2plY3REcm9wRG93bnMoKVxuICAgICAgICBwcm9qZWN0TGlzdERvbShwcm9qZWN0QXJyYXkpXG5cbiAgICB9KVxuICAgIFxufVxuXG5cbnByb2plY3RBZGRpdGlvbihwcm9qZWN0RmFjdG9yeSgnRGVmYXVsdCBQcm9qZWN0JywgJ1VzZSB0aGUgZGVzY3JpcHRpb24gYm94IHRvIGNyZWF0ZSBhIGJyaWVmIG91dGxpbmUgb2YgdGhlIHByb2plY3QgYW5kIHRhc2tzJywgJzI2LzAyLzIwMjMnLCAnSGlnaCcsICdOb29vdGVzIG5vdGVzIHdvbmRlcmZ1bCBub3RlcycpKVxuXG5cblxuZXhwb3J0IHtwcm9qZWN0QXJyYXksIG9wZW5Nb2RhbCAsIHN1Ym1pdFByb2plY3QgLCBwcm9qZWN0TW9kYWxOb2RlRWRpdCwgY2xvc2VQcm9qZWN0fVxuIiwiaW1wb3J0IHsgcHJvamVjdENhcmREaXNwbGF5ICxwcm9qZWN0RHJvcERvd25zLCBkZWxldGVQcm9qZWN0fSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSwgcHJvamVjdE1vZGFsTm9kZUVkaXQgfSBmcm9tIFwiLi9pbmZvXCI7XG5cbmxldCBjdXJyZW50QXJyYXk9IG51bGw7XG5jb25zdCBiYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRhc2ssIGRlc2NyaXB0aW9uLGR1ZURhdGUsIHByaW9yaXR5KSA9PlxueyAgcmV0dXJueyB0YXNrLCBkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eX19XG5cbmZ1bmN0aW9uIGNsb3NlQnRuICgpe1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHRhc2tNb2RhbE5vZGVFZGl0KCl9KVxuICAgICAgXG5cbn1cblxuZnVuY3Rpb24gdGFza01vZGFsTm9kZUVkaXQoKXtcbiAgICBjb25zdCBlZGl0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEVkaXQnKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcblxuICAgIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaGVhZGVyJyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFByb2plY3QnKVxuICAgIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0VGFzaycpXG5cblxuICAgIGNvbnN0IHByb2plY3ROYW1lID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVMYWJlbCcpXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKVxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNMYWJlbCcpXG5cbiAgICBoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAge1xuXG4gICAgZWRpdFN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lJztcbiAgICBub3Rlcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5vdGVzTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzdWJtaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRhc2tTdWJtaXQudGV4dENvbnRlbnQ9ICdTdWJtaXQgVGFzaydcbiAgICB0YXNrU3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBjbG9zZUJ0bigpXG4gICBcblxuXG4gICB9IClcblxufVxuXG5cblxuZnVuY3Rpb24gZWRpdE1vZGFsTm9kZUVkaXQoaW5kZXgpe1xuXG4gICAgbGV0IGl0ZW0gPSBjdXJyZW50QXJyYXkudG9kb0FycmF5W2luZGV4XVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGVkaXRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RWRpdCcpXG4gICAgXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE1vZGFsJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdFRhc2snKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWVMYWJlbCcpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uTGFiZWwnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IGR1ZURhdGVsYWJlbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUxhYmVsJylcbiAgICBjb25zdCBkdWVEYXRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJylcblxuICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKVxuICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNMYWJlbCcpXG4gICAgcHJvamVjdE5hbWVDb250ZW50LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2sgTmFtZSc7XG4gICAgcHJvamVjdE5hbWVDb250ZW50LnZhbHVlID0gaXRlbS50YXNrIFxuXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCAgPSAnRWRpdCBEZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25Db250ZW50LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGR1ZURhdGVsYWJlbC50ZXh0Q29udGVudCA9ICdFZGl0IER1ZSBEYXRlJztcbiAgICBkdWVEYXRlQ29udGVudC52YWx1ZSA9IGl0ZW0uZHVlRGF0ZVxuXG4gICAgbm90ZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBub3Rlc0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBlZGl0U3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBwdXNoRWRpdCAoaW5kZXgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0RWRpdCcpXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWVEYXRlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJylcbiAgICBjb25zdCBwcmlvcml0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxuICAgIGNvbnNvbGUubG9nKHN1Ym1pdEVkaXQpXG4gICAgY29uc29sZS5sb2coY3VycmVudEFycmF5KVxuICAgIGxldCBjdXJyZW50ID0gY3VycmVudEFycmF5LnRvZG9BcnJheVtpbmRleF1cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuXG5cbiAgICBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RDb250ZW50LnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkNvbnRlbnQudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlSW5mbyA9IGR1ZURhdGVDb250ZW50LnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbmZvID0gcHJpb3JpdC52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSlcbiAgICAgICAgY3VycmVudC50YXNrID0gcHJvamVjdE5hbWVcbiAgICAgICAgY3VycmVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBjdXJyZW50LmR1ZURhdGUgPSBkdWVEYXRlSW5mbztcbiAgICAgICAgY3VycmVudC5wcmlvcml0eSA9IHByaW9yaXR5SW5mbztcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGFza0NhcmREaXNwbGF5KGN1cnJlbnRBcnJheS50b2RvQXJyYXkpXG4gICAgICAgIHByb2plY3RMaXN0RG9tKGN1cnJlbnRBcnJheS50b2RvQXJyYXkpXG4gICAgICAgIGRlbGV0ZVRhc2soKVxuICAgICAgICBlZGl0VGFzaygpXG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50QXJyYXlcbiAgXG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFycmF5KX0pXG4gICAgICAgXG59XG5cblxuZnVuY3Rpb24gcHVzaE1vZGFsVGFzaygpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IGR1ZURhdGUgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJylcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG4gICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRUYXNrJylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TW9kYWwnKTtcblxuXG4gICAgdGFza1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICB0YXNrTW9kYWxOb2RlRWRpdCgpXG4gICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBsZXQgbmV3VGFzayA9IHRvZG9GYWN0b3J5KHByb2plY3ROYW1lLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpXG4gICAgICAgIGN1cnJlbnRBcnJheS50b2RvQXJyYXkucHVzaChuZXdUYXNrKVxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gbnVsbDtcbiAgICAgICAgdGFza0NhcmREaXNwbGF5KGN1cnJlbnRBcnJheS50b2RvQXJyYXkpXG4gICAgICAgIHByb2plY3RMaXN0RG9tKGN1cnJlbnRBcnJheS50b2RvQXJyYXkpXG4gICAgICAgIGVkaXRUYXNrKClcblxuICAgICAgICBkZWxldGVUYXNrKClcbiAgICB9IClcblxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MgKGl0ZW0gLGluZGV4KXtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnZWRpdEJ1dHRvbic7XG4gICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0YXNrRGVsZXRlQnV0dG9uJ1xuICAgIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnYnV0dG9uRGl2J1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICAgIGxldCB0YXNrRGl2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0RpdkNhcmQuaWQgPSBpdGVtLnRhc2tcbiAgICB0YXNrRGl2Q2FyZC5zZXRBdHRyaWJ1dGUoJ2FycmF5JyxpbmRleClcbiAgICB0YXNrRGl2Q2FyZC5jbGFzc05hbWU9ICdwcm9qZWN0Q2FyZHMnO1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNraGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHRhc2toZWFkZXIudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lJztcbiAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uaGVhZGVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZGVzY3JpcHRpb25oZWFkZXIudGV4dENvbnRlbnQgPSAnVGFzayBEZXNjcmlwdGlvbic7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZHVlRGF0ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZHVlRGF0ZUhlYWRlci50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJpb3JpdHloZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByaW9yaXR5aGVhZGVyLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICBsZXQgcHJpb3JpdHkgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxldCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGNvbXBsZXRlZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZXQgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgICBjb21wbGV0ZWRQLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZD8nXG4gICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkUClcbiAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWQpXG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2toZWFkZXIpXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25oZWFkZXIpXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUhlYWRlcilcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHloZWFkZXIpXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG5cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRhc2s7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGVcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpb3JpdHlcblxuICAgIHRhc2tEaXZDYXJkLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcbiAgICB0YXNrRGl2Q2FyZC5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgIHRhc2tEaXZDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxuICAgIHRhc2tEaXZDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG4gICAgdGFza0RpdkNhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXZDYXJkKVxuXG59XG5cbmZ1bmN0aW9uIGxpRGlzcGxheSAoaXRlbSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VUknKTtcbiAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgcHJvamVjdExpLnRleHRDb250ZW50ID0gaXRlbVxuICAgIHByb2plY3RMaXN0Tm9kZS5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TGlzdERvbShhcnJheSl7XG4gICAgY29uc3QgcHJvamVjdExpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RVSScpO1xuICAgIHByb2plY3RMaXN0Tm9kZS50ZXh0Q29udGVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gIFxuICAgICBsaURpc3BsYXkoYXJyYXlbaV0udGFzaylcbiAgICB9fVxuXG5mdW5jdGlvbiB0YXNrQ2FyZERpc3BsYXkoYXJyYXkpe1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IG51bGw7XG5cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoYXJyYXlbaV0pXG4gICAgICAgIGRpc3BsYXlUYXNrcyhhcnJheVtpXSwgaW5kZXgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB2aWV3UHJvamVjdCgpe1xuXG4gICAgY29uc3Qgdmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3UHJvamVjdEJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2hlYWRlcicpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RIZWFkZXInKVxuXG5cbiAgIHZpZXdCdXR0b24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT57XG4gXG4gICAgaGVhZGVyQnRuLnRleHRDb250ZW50ID0gJysgVGFzayc7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBudWxsO1xuICAgICAgICBiYWNrSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGNvbnN0IGJhY2tIZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGJhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0hlYWRlckgxKVxuICAgICAgICBiYWNrSGVhZGVyLmNsYXNzTmFtZSA9ICdiYWNrSGVhZGVyJztcbiAgICAgICAgYmFja0hlYWRlckgxLnRleHRDb250ZW50ID0gJzwgQmFjayB0byBwcm9qZWN0cydcbiAgICAgXG4gICAgICAgIHByb2plY3RMaXN0Lmluc2VydEJlZm9yZShiYWNrSGVhZGVyLCBwcm9qZWN0VGl0bGUpXG4gICAgXG4gICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgbGV0IGluZGV4T2JqZWN0ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleChvYmplY3QgPT57XG4gICAgICAgIHJldHVybiAgb2JqZWN0LnRpdGxlID09PSBjYXJkTnVtYmVyO30pXG5cbiAgICAgICAgIGN1cnJlbnRBcnJheSA9IChwcm9qZWN0QXJyYXlbaW5kZXhPYmplY3RdKVxuICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ0xpc3Qgb2YgdGFza3MgZm9yICcgKyBjdXJyZW50QXJyYXkudGl0bGU7XG4gICAgICAgICBwcm9qZWN0TGlzdERvbShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuICAgICAgICAgdGFza01vZGFsTm9kZUVkaXQoKVxuICAgICAgICAgdGFza0NhcmREaXNwbGF5KGN1cnJlbnRBcnJheS50b2RvQXJyYXkpXG4gICAgICAgICBlZGl0VGFzaygpXG4gICAgICAgICBkZWxldGVUYXNrKClcbiAgICAgXG4gICAgIFxuICBcblxuICBcbiBcbiAgICAgICBcblxuICAgIH0pICBcblxuIFxuICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkJ0biAoKXtcblxuY29uc3QgaGVhZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9oZWFkZXInKVxuY29uc3QgcHJvamVjdExJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SGVhZGVyJylcblxuXG5iYWNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgcHJvamVjdENhcmREaXNwbGF5KHByb2plY3RBcnJheSlcbiAgICBwcm9qZWN0TW9kYWxOb2RlRWRpdCgpXG4gICAgYmFja0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHByb2plY3RMSS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdMaXN0IG9mIHByb2plY3RzJyBcbiAgICBiYWNrSGVhZGVyLnRleHRDb250ZW50ID0gbnVsbDtcbiAgICBoZWFkZXJCdG4udGV4dENvbnRlbnQgPSAnKyBQcm9qZWN0J1xuICAgIHZpZXdQcm9qZWN0KClcbiAgICBkZWxldGVQcm9qZWN0KClcbiAgICBwcm9qZWN0RHJvcERvd25zKClcblxuICAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2sgKCl7XG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdEJ1dHRvbicpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RNb2RhbCcpO1xuXG5cbiAgICBlZGl0QnV0dG9uLmZvckVhY2goZWxlbSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT57XG5cbiAgICAgICAgbGV0IGVkaXRPYmplY3QgPSBudWxsO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0VGFzaycpXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG5cbiAgICBsZXQgaW5kZXggPSBjYXJkTnVtYmVyLmdldEF0dHJpYnV0ZSgnYXJyYXknKVxuICAgIGNvbnNvbGUubG9nKGluZGV4KVxuXG5cbiAgICBlZGl0TW9kYWxOb2RlRWRpdChpbmRleClcbiAgICBwdXNoRWRpdChpbmRleClcblxuICAgIH0pXG4gICAgXG4gICAgKVxuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sgKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVsZXRlQnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+e1xuICAgIGNvbnN0IGNhcmROdW1iZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG5cbiAgICBjb25zdCBpbmRleE9iamVjdCA9IGN1cnJlbnRBcnJheS50b2RvQXJyYXkuZmluZEluZGV4KG9iamVjdCA9PntcbiAgICAgICAgcmV0dXJuICBvYmplY3QudGFzayA9PT0gY2FyZE51bWJlcjtcbiAgICAgICAgfSlcblxuICAgIGN1cnJlbnRBcnJheS50b2RvQXJyYXkuc3BsaWNlKGluZGV4T2JqZWN0LDEpXG4gICAgbGV0IGNhcmRSZW1vdmUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY2FyZFJlbW92ZSlcbiAgICBwcm9qZWN0TGlzdERvbShjdXJyZW50QXJyYXkudG9kb0FycmF5KVxuIH0pKVxuIFxuIH1cblxuZXhwb3J0IHt2aWV3UHJvamVjdCwgcHVzaE1vZGFsVGFzayxyZXR1cm5CdG4sZWRpdFRhc2t9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9