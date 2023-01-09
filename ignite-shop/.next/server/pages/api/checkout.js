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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_stipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/stipe */ \"(api)/./src/lib/stipe.ts\");\n\nasync function handler(req, res) {\n    const { priceId  } = req.body;\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Method not allowed.\"\n        });\n    }\n    if (!priceId) {\n        return res.status(400).json({\n            error: \"Price not found.\"\n        });\n    }\n    const success_url = `${process.env.NEXT_URL}/success`;\n    const cancel_url = `${process.env.NEXT_URL}/`;\n    const checkoutSession = await _lib_stipe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n        success_url: success_url,\n        cancel_url: cancel_url,\n        mode: \"payment\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ]\n    });\n    return res.status(201).json({\n        checkoutUrl: checkoutSession.url\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3lDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsSUFBSUcsSUFBSTtJQUU1QixJQUFJSCxJQUFJSSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBc0I7SUFDN0QsQ0FBQztJQUVELElBQUksQ0FBQ0wsU0FBUztRQUNaLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQjtJQUN6RCxDQUFDO0lBRUQsTUFBTUMsY0FBYyxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNyRCxNQUFNQyxhQUFhLENBQUMsRUFBRUgsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTdDLE1BQU1FLGtCQUFrQixNQUFNZix1RUFBK0IsQ0FBQztRQUM1RFUsYUFBYUE7UUFDYkksWUFBWUE7UUFDWkssTUFBTTtRQUNOQyxZQUFZO1lBQ1Y7Z0JBQ0VDLE9BQU9qQjtnQkFDUGtCLFVBQVU7WUFDWjtTQUNEO0lBQ0g7SUFFQSxPQUFPbkIsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUMxQmUsYUFBYVIsZ0JBQWdCUyxHQUFHO0lBQ2xDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZS1zaG9wLy4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC50cz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vbGliL3N0aXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3QgeyBwcmljZUlkIH0gPSByZXEuYm9keVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkLicgfSlcclxuICB9XHJcblxyXG4gIGlmICghcHJpY2VJZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdQcmljZSBub3QgZm91bmQuJ30pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzdWNjZXNzX3VybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfVVJMfS9zdWNjZXNzYFxyXG4gIGNvbnN0IGNhbmNlbF91cmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1VSTH0vYFxyXG5cclxuICBjb25zdCBjaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgIHN1Y2Nlc3NfdXJsOiBzdWNjZXNzX3VybCxcclxuICAgIGNhbmNlbF91cmw6IGNhbmNlbF91cmwsXHJcbiAgICBtb2RlOiAncGF5bWVudCcsXHJcbiAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcmljZTogcHJpY2VJZCxcclxuICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgfVxyXG4gICAgXSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgY2hlY2tvdXRVcmw6IGNoZWNrb3V0U2Vzc2lvbi51cmxcclxuICB9KVxyXG59Il0sIm5hbWVzIjpbInN0cmlwZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcmljZUlkIiwiYm9keSIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfVVJMIiwiY2FuY2VsX3VybCIsImNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJtb2RlIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJjaGVja291dFVybCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

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