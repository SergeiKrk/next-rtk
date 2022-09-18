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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (limit)=>`products?limit=${limit}`\n            })\n        })\n});\nconst { useGetProductsQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNFO0FBRy9ELEtBQUssQ0FBQ0UsVUFBVSxHQUFHRix1RUFBUyxDQUFDLENBQUM7SUFDakNHLFdBQVcsRUFBRSxDQUFjO0lBQzNCQyxTQUFTLEVBQUVILDRFQUFjLENBQUMsQ0FBQ0k7UUFBQUEsT0FBTyxFQUFFLENBQTJCO0lBQUEsQ0FBQztJQUNoRUMsU0FBUyxHQUFFQyxLQUFLLElBQUssQ0FBQztZQUNsQkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBcUIsQ0FBQ0E7Z0JBQUFBLEtBQUssR0FBR0MsS0FBUSxJQUFNLGVBQWUsRUFBRUEsS0FBSztZQUFFLENBQUM7UUFDakcsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsbUJBQW1CLEdBQUMsR0FBR1QsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5hcGkudHM/MmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LnR5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RBcGkgPSBjcmVhdGVBcGkoe1xyXG4gICAgcmVkdWNlclBhdGg6ICdhcGkvcHJvZHVjdHMnLFxyXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7YmFzZVVybDogJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS8nfSksXHJcbiAgICBlbmRwb2ludHM6IGJ1aWxkID0+ICh7XHJcbiAgICAgICAgZ2V0UHJvZHVjdHM6IGJ1aWxkLnF1ZXJ5PElQcm9kdWN0W10sIG51bWJlcj4oe3F1ZXJ5OiAobGltaXQ6IDUpID0+IGBwcm9kdWN0cz9saW1pdD0ke2xpbWl0fWB9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7dXNlR2V0UHJvZHVjdHNRdWVyeX0gPSBwcm9kdWN0QXBpOyJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsInByb2R1Y3RBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZCIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJsaW1pdCIsInVzZUdldFByb2R1Y3RzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _product_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.api */ \"./app/store/product/product.api.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_product_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.reducerPath]: _product_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_product_product_api__WEBPACK_IMPORTED_MODULE_1__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RDtBQUNaO0FBRTNDLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDakNHLE9BQU8sRUFBRSxDQUFDO1NBQUNGLHdFQUFzQixHQUFHQSxvRUFBa0I7SUFBQSxDQUFDO0lBQ3ZESSxVQUFVLEdBQUVDLG9CQUFvQixHQUNoQ0Esb0JBQW9CLEdBQUdDLE1BQU0sQ0FBQ04sdUVBQXFCO0FBQ3ZELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9zdG9yZS50cz82Y2NhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHByb2R1Y3RBcGkgfSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QuYXBpXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7W3Byb2R1Y3RBcGkucmVkdWNlclBhdGhdOiBwcm9kdWN0QXBpLnJlZHVjZXJ9LFxyXG4gICAgbWlkZGxld2FyZTogZ2V0RGVmYXVsdE1pZGRsZXdhcmUgPT5cclxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHByb2R1Y3RBcGkubWlkZGxld2FyZSlcclxufSlcclxuXHJcbmV4cG9ydCB0eXBlIFR5cGVSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJwcm9kdWN0QXBpIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFUTtBQUNFO1NBRS9CRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxNQUFNLDZFQUNKSixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLG1EQUFLOzhGQUNwQkksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVztrR0FDeEJILFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2FwcC9zdG9yZS9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3B5LTcgcHgtNSc+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();