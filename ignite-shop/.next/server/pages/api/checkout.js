"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/lib/stipe.ts":
/*!**************************!*\
  !*** ./src/lib/stipe.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2022-11-15\",\n    appInfo: {\n        name: \"Ignite Shop\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3N0aXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVwQixNQUFNQyxTQUFTLElBQUlELCtDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixFQUFFO0lBQzVEQyxZQUFZO0lBQ1pDLFNBQVM7UUFDTEMsTUFBTTtJQUNWO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZS1zaG9wLy4vc3JjL2xpYi9zdGlwZS50cz8xNzZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVksIHtcclxuICAgIGFwaVZlcnNpb246ICcyMDIyLTExLTE1JyxcclxuICAgIGFwcEluZm86IHtcclxuICAgICAgICBuYW1lOiAnSWduaXRlIFNob3AnLFxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/stipe.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_stipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/stipe */ \"(api)/./src/lib/stipe.ts\");\n\nasync function handler(req, res) {\n    const { priceId  } = req.body;\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed.\"\n        });\n    }\n    if (!priceId) {\n        return res.status(400).json({\n            error: \"Price not found.\"\n        });\n    }\n    const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;\n    const cancel_url = `${process.env.NEXT_URL}/`;\n    const checkoutSession = await _lib_stipe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n        success_url: success_url,\n        cancel_url: cancel_url,\n        mode: \"payment\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ]\n    });\n    return res.status(201).json({\n        checkoutUrl: checkoutSession.url\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3lDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtJQUU1QixJQUFJSCxJQUFJSSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBc0I7SUFDN0QsQ0FBQztJQUVELElBQUksQ0FBQ0wsU0FBUztRQUNaLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQjtJQUN6RCxDQUFDO0lBRUQsTUFBTUMsY0FBYyxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLHlDQUF5QyxDQUFDO0lBQ3RGLE1BQU1DLGFBQWEsQ0FBQyxFQUFFSCxRQUFRQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFN0MsTUFBTUUsa0JBQWtCLE1BQU1mLHVFQUErQixDQUFDO1FBQzVEVSxhQUFhQTtRQUNiSSxZQUFZQTtRQUNaSyxNQUFNO1FBQ05DLFlBQVk7WUFDVjtnQkFDRUMsT0FBT2pCO2dCQUNQa0IsVUFBVTtZQUNaO1NBQ0Q7SUFDSDtJQUVBLE9BQU9uQixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzFCZSxhQUFhUixnQkFBZ0JTLEdBQUc7SUFDbEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduaXRlLXNob3AvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzP2YxMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi8uLi9saWIvc3RpcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBjb25zdCB7IHByaWNlSWQgfSA9IHJlcS5ib2R5XHJcblxyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQuJyB9KVxyXG4gIH1cclxuXHJcbiAgaWYgKCFwcmljZUlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1ByaWNlIG5vdCBmb3VuZC4nfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3NfdXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9VUkx9L3N1Y2Nlc3M/c2Vzc2lvbl9pZD17Q0hFQ0tPVVRfU0VTU0lPTl9JRH1gXHJcbiAgY29uc3QgY2FuY2VsX3VybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfVVJMfS9gXHJcblxyXG4gIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgc3VjY2Vzc191cmw6IHN1Y2Nlc3NfdXJsLFxyXG4gICAgY2FuY2VsX3VybDogY2FuY2VsX3VybCxcclxuICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgIGxpbmVfaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHByaWNlOiBwcmljZUlkLFxyXG4gICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICBjaGVja291dFVybDogY2hlY2tvdXRTZXNzaW9uLnVybFxyXG4gIH0pXHJcbn0iXSwibmFtZXMiOlsic3RyaXBlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByaWNlSWQiLCJib2R5IiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9VUkwiLCJjYW5jZWxfdXJsIiwiY2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsIm1vZGUiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsImNoZWNrb3V0VXJsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();