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

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"cartReducer\": () => (/* binding */ cartReducer),\n/* harmony export */   \"cartActions\": () => (/* binding */ cartActions)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addItem: (state, action)=>{\n            state.push(action.payload);\n        },\n        removeItem: (state, action)=>{\n            return state.filter((p)=>p.id !== action.payload.id\n            );\n        }\n    }\n});\nconst cartReducer = cartSlice.reducer;\nconst cartActions = cartSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBRzdELEtBQUssQ0FBQ0MsWUFBWSxHQUFlLENBQUMsQ0FBQztBQUU1QixLQUFLLENBQUNDLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJLEVBQUUsQ0FBTTtJQUNaRixZQUFZO0lBQ1pHLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLE9BQU8sR0FBR0MsS0FBSyxFQUFFQyxNQUErQixHQUFLLENBQUM7WUFDcERELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDM0IsQ0FBQztRQUNEQyxVQUFVLEdBQUdKLEtBQUssRUFBRUMsTUFBcUMsR0FBSyxDQUFDO1lBQzdELE1BQU0sQ0FBQ0QsS0FBSyxDQUFDSyxNQUFNLEVBQUVDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxFQUFFLEtBQUtOLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSSxFQUFFOztRQUN2RCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLFdBQVcsR0FBR1osU0FBUyxDQUFDYSxPQUFPO0FBQ3JDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHZCxTQUFTLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9jYXJ0L2NhcnQuc2xpY2UudHM/NDdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi9wcm9kdWN0L3Byb2R1Y3QudHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFtdID0gW107XG5cbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVByb2R1Y3Q+KSA9PiB7XG4gICAgICBzdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlciB9PikgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gY2FydFNsaWNlLnJlZHVjZXI7XG5leHBvcnQgY29uc3QgY2FydEFjdGlvbnMgPSBjYXJ0U2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhcnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZEl0ZW0iLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsInAiLCJpZCIsImNhcnRSZWR1Y2VyIiwicmVkdWNlciIsImNhcnRBY3Rpb25zIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ }),

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: 'api/products',\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: 'https://fakestoreapi.com/'\n    }),\n    endpoints: (build)=>({\n            getProducts: build.query({\n                query: (limit)=>`products?limit=${limit}`\n            })\n        })\n});\nconst { useGetProductsQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNFO0FBRy9ELEtBQUssQ0FBQ0UsVUFBVSxHQUFHRix1RUFBUyxDQUFDLENBQUM7SUFDakNHLFdBQVcsRUFBRSxDQUFjO0lBQzNCQyxTQUFTLEVBQUVILDRFQUFjLENBQUMsQ0FBQ0k7UUFBQUEsT0FBTyxFQUFFLENBQTJCO0lBQUEsQ0FBQztJQUNoRUMsU0FBUyxHQUFFQyxLQUFLLElBQUssQ0FBQztZQUNsQkMsV0FBVyxFQUFFRCxLQUFLLENBQUNFLEtBQUssQ0FBcUIsQ0FBQ0E7Z0JBQUFBLEtBQUssR0FBR0MsS0FBUSxJQUFNLGVBQWUsRUFBRUEsS0FBSztZQUFJLENBQUM7UUFDbkcsQ0FBQztBQUNMLENBQUM7QUFFTSxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsbUJBQW1CLEdBQUMsR0FBR1QsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5hcGkudHM/MmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC50eXBlcydcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RBcGkgPSBjcmVhdGVBcGkoe1xuICAgIHJlZHVjZXJQYXRoOiAnYXBpL3Byb2R1Y3RzJyxcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtiYXNlVXJsOiAnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tLyd9KSxcbiAgICBlbmRwb2ludHM6IGJ1aWxkID0+ICh7XG4gICAgICAgIGdldFByb2R1Y3RzOiBidWlsZC5xdWVyeTxJUHJvZHVjdFtdLCBudW1iZXI+KHtxdWVyeTogKGxpbWl0OiA1KSA9PiBgcHJvZHVjdHM/bGltaXQ9JHtsaW1pdH1gICB9KVxuICAgIH0pXG59KVxuXG5leHBvcnQgY29uc3Qge3VzZUdldFByb2R1Y3RzUXVlcnl9ID0gcHJvZHVjdEFwaTsiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwibGltaXQiLCJ1c2VHZXRQcm9kdWN0c1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _cart_cart_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.slice */ \"./app/store/cart/cart.slice.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product_product_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.api */ \"./app/store/product/product.api.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: {\n        [_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducerPath]: _product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducer,\n        cart: _cart_cart_slice__WEBPACK_IMPORTED_MODULE_0__.cartReducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDRTtBQUNDO0FBRTNDLEtBQUssQ0FBQ0csS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDbkNHLE9BQU8sRUFBRSxDQUFDO1NBQUVGLHdFQUFzQixHQUFHQSxvRUFBa0I7UUFBRUksSUFBSSxFQUFFTix5REFBVztJQUFDLENBQUM7SUFDNUVPLFVBQVUsR0FBR0Msb0JBQW9CLEdBQy9CQSxvQkFBb0IsR0FBR0MsTUFBTSxDQUFDUCx1RUFBcUI7QUFDdkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3N0b3JlLnRzPzZjY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FydFJlZHVjZXIgfSBmcm9tIFwiLi9jYXJ0L2NhcnQuc2xpY2VcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHByb2R1Y3RBcGkgfSBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3QuYXBpXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogeyBbcHJvZHVjdEFwaS5yZWR1Y2VyUGF0aF06IHByb2R1Y3RBcGkucmVkdWNlciwgY2FydDogY2FydFJlZHVjZXIgfSxcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHByb2R1Y3RBcGkubWlkZGxld2FyZSksXG59KTtcblxuZXhwb3J0IHR5cGUgVHlwZVJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbiJdLCJuYW1lcyI6WyJjYXJ0UmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwicHJvZHVjdEFwaSIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwiY2FydCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFUTtBQUNFO1NBRS9CRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxNQUFNLDZFQUNKSixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLG1EQUFLOzhGQUNwQkksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVztrR0FDeEJILFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtdG9vbGtpdC1jcmFzaC1jb3Vyc2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4uL2FwcC9zdG9yZS9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3B5LTcgcHgtNSc+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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