"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/screens/home/Home.tsx":
/*!**********************************************!*\
  !*** ./app/components/screens/home/Home.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/product/product.api */ \"./app/store/product/product.api.ts\");\n/* harmony import */ var _cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-dropdown/CartDropdown */ \"./app/components/screens/home/cart-dropdown/CartDropdown.tsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./app/components/screens/home/ProductItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery)(10), data = ref.data, isLoading = ref.isLoading, error = ref.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-green-900 font-medium\",\n                        children: \"Let's find your products!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, _this),\n            isLoading ? 'Loading ... ' : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red\",\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between\",\n                children: data === null || data === void 0 ? void 0 : data.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 6\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ksv\\\\DevReact\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, _this));\n};\n_s(Home, \"Qbw1SAyKrp3aXfUhBGmCbvuuGRQ=\", false, function() {\n    return [\n        _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0U7QUFDakI7QUFDaEI7OztBQUV2QyxHQUFLLENBQUNHLElBQUksR0FBTyxRQUNqQixHQUR1QixDQUFDOzs7SUFDdkIsR0FBSyxDQUE4QkgsR0FBdUIsR0FBdkJBLCtFQUFtQixDQUFDLEVBQUUsR0FBakRJLElBQUksR0FBdUJKLEdBQXVCLENBQWxESSxJQUFJLEVBQUVDLFNBQVMsR0FBWUwsR0FBdUIsQ0FBNUNLLFNBQVMsRUFBRUMsS0FBSyxHQUFLTixHQUF1QixDQUFqQ00sS0FBSztJQUU5QixNQUFNLDZFQUVKQyxDQUFHOzt3RkFDRkEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlDOztnR0FDdERDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFxQztrQ0FBQyxDQUVwRDs7Ozs7O2dHQUNDUCxtRUFBWTs7Ozs7Ozs7Ozs7WUFHYkksU0FBUyxHQUFJLENBQWMsZ0JBQUlDLEtBQUssK0VBQ25DQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTswQkFBRUYsS0FBSzs7Ozs7b0dBRS9CQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7MEJBQzlDSixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUVNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQVk7a0NBQ3ZCLE1BQU0sK0RBQUxULG9EQUFXO3dCQUFrQlMsT0FBTyxFQUFFQSxPQUFPO3VCQUE1QkEsT0FBTyxDQUFDQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQyxDQUFDO0dBekJLVCxJQUFJOztRQUMwQkgsMkVBQW1COzs7S0FEakRHLElBQUk7QUEyQlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL0hvbWUudHN4P2RlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUdldFByb2R1Y3RzUXVlcnkgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9wcm9kdWN0L3Byb2R1Y3QuYXBpJ1xuaW1wb3J0IENhcnREcm9wZG93biBmcm9tICcuL2NhcnQtZHJvcGRvd24vQ2FydERyb3Bkb3duJ1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4vUHJvZHVjdEl0ZW0nXG5cbmNvbnN0IEhvbWU6IEZDID0gKCkgPT4ge1xuXHRjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUdldFByb2R1Y3RzUXVlcnkoMTApO1xuXG5cdHJldHVybiAoXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0xMCc+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtZ3JlZW4tOTAwIGZvbnQtbWVkaXVtJz5cblx0XHRcdFx0XHRMZXQmYXBvcztzIGZpbmQgeW91ciBwcm9kdWN0cyFcblx0XHRcdFx0PC9oMT5cblx0XHRcdFx0PENhcnREcm9wZG93biAvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHtpc0xvYWRpbmcgPyAoJ0xvYWRpbmcgLi4uICcpIDogZXJyb3IgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZCc+e2Vycm9yfTwvZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2Vlbic+XG5cdFx0XHRcdHtkYXRhPy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxuXHRcdFx0XHRcdDxQcm9kdWN0SXRlbSBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZUdldFByb2R1Y3RzUXVlcnkiLCJDYXJ0RHJvcGRvd24iLCJQcm9kdWN0SXRlbSIsIkhvbWUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/screens/home/Home.tsx\n");

/***/ })

});