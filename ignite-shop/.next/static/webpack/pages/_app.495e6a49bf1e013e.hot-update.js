"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _styles_pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/app */ \"./src/styles/pages/app.ts\");\n\n\n\n\n(0,_styles_global__WEBPACK_IMPORTED_MODULE_1__.globalStyles)();\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_app__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_app__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/ll-pc-03/Documentos/giselly/Ignite-ReactJS/ignite-shop/src/pages/_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ll-pc-03/Documentos/giselly/Ignite-ReactJS/ignite-shop/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/ll-pc-03/Documentos/giselly/Ignite-ReactJS/ignite-shop/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ll-pc-03/Documentos/giselly/Ignite-ReactJS/ignite-shop/src/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDK0M7QUFFVjtBQUNrQjtBQUV2REEsNERBQVlBO0FBRUcsU0FBU0ksSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDO0lBQzFCLHFCQUNFLDhEQUFDSix3REFBU0E7OzBCQUNSLDhEQUFDQyxxREFBTUE7MEJBQ0wsNEVBQUNJO29CQUFJQyxLQUFLUCw0REFBUTtvQkFBRVEsS0FBSTs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDSjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztLQVZ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgZ2xvYmFsU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCdcblxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28uc3ZnJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvYXBwJ1xuXG5nbG9iYWxTdHlsZXMoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aW1nIHNyYz17bG9nby5zcmN9IGFsdD1cIlwiIC8+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiZ2xvYmFsU3R5bGVzIiwibG9nbyIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ }),

/***/ "./src/styles/pages/app.ts":
/*!*********************************!*\
  !*** ./src/styles/pages/app.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/styles/index.ts\");\n\nconst Container = (0,___WEBPACK_IMPORTED_MODULE_0__.styled)(\"div\", {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"flex-start\",\n    justifyContent: \"center\",\n    minHeight: \"100vh\"\n});\nconst Header = (0,___WEBPACK_IMPORTED_MODULE_0__.styled)(\"header\", {\n    padding: \"2rem 0\",\n    width: \"100%\",\n    maxWidth: 1180,\n    margin: \"0 auto\"\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3BhZ2VzL2FwcC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFckIsTUFBTUMsWUFBWUQseUNBQU1BLENBQUMsT0FBTztJQUNuQ0UsU0FBUztJQUNUQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsZ0JBQWdCO0lBQ2hCQyxXQUFXO0FBQ2YsR0FBRTtBQUVLLE1BQU1DLFNBQVNQLHlDQUFNQSxDQUFDLFVBQVU7SUFDbkNRLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFFBQVE7QUFDWixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvcGFnZXMvYXBwLnRzPzFlMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicsIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG59KVxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoZWFkZXInLCB7XG4gICAgcGFkZGluZzogJzJyZW0gMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogMTE4MCxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxufSkiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5IZWlnaHQiLCJIZWFkZXIiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/app.ts\n"));

/***/ })

});