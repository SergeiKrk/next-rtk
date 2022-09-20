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

/***/ "./app/components/screens/home/ProductItem.tsx":
/*!*****************************************************!*\
  !*** ./app/components/screens/home/ProductItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTypedSelector */ \"./app/hooks/useTypedSelector.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var addItem = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)().addItem;\n    var cart = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector)(function(state) {\n        return state;\n    }).cart;\n    var isExistsInCart = cart.some(function(p) {\n        return p.id == product.id;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"48%\",\n            backgroundColor: \"#E5F0EA\"\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                onClick: function() {\n                    return !isExistsInCart && addItem(product);\n                },\n                children: isExistsInCart ? \"Alredy in cart\" : \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Krk\\\\ReacDev\\\\next-rtk\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductItem, \"Id7ef2FYiZRizpNS/pHm27pgH14=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFFd0I7QUFDWTs7O0FBRWxFLEdBQUssQ0FBQ0csV0FBVyxHQUF5QixRQUFRLFFBQVMsQ0FBQztRQUFmQyxPQUFPLFNBQVBBLE9BQU87O0lBQ2xELEdBQUssQ0FBR0MsT0FBTyxHQUFLSiw2REFBVSxHQUF0QkksT0FBTztJQUNmLEdBQUssQ0FBR0MsSUFBSSxHQUFLSix5RUFBZ0IsQ0FBQyxRQUFRLENBQVBLLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLO09BQTFDRCxJQUFJO0lBQ1osR0FBSyxDQUFDRSxjQUFjLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQztRQUFLQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0MsRUFBRSxJQUFJUCxPQUFPLENBQUNPLEVBQUU7O0lBRTFELE1BQU0sNkVBQ0hDLENBQUc7UUFDRkMsS0FBSyxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLENBQUs7WUFBRUMsZUFBZSxFQUFFLENBQVM7UUFBQyxDQUFDO1FBQ25EQyxTQUFTLEVBQUMsQ0FBK0I7O3dGQUV4Q0osQ0FBRztnQkFBQ0ksU0FBUyxFQUFDLENBQWE7c0dBQ3pCaEIsbURBQUs7b0JBQ0ppQixHQUFHLEVBQUViLE9BQU8sQ0FBQ2MsS0FBSztvQkFDbEJDLEdBQUcsRUFBRWYsT0FBTyxDQUFDZ0IsS0FBSztvQkFDbEJOLEtBQUssRUFBQyxDQUFLO29CQUNYTyxNQUFNLEVBQUMsQ0FBSztvQkFDWkwsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7Ozs7O3dGQUd6QkosQ0FBRztnQkFBQ0ksU0FBUyxFQUFDLENBQXdDOztnR0FDcERKLENBQUc7d0JBQUNJLFNBQVMsRUFBQyxDQUF5RjtrQ0FDckdaLE9BQU8sQ0FBQ2dCLEtBQUs7Ozs7OztnR0FFZlIsQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXdCOzs0QkFBQyxDQUFDOzRCQUFDWixPQUFPLENBQUNrQixLQUFLOzs7Ozs7Ozs7Ozs7O3dGQUV4REMsQ0FBTTtnQkFDTFAsU0FBUyxFQUFDLENBQTZFO2dCQUN2RlEsT0FBTyxFQUFFLFFBQVE7b0JBQUYsTUFBTSxFQUFMaEIsY0FBYyxJQUFJSCxPQUFPLENBQUNELE9BQU87OzBCQUVoREksY0FBYyxHQUFHLENBQWdCLGtCQUFHLENBQWE7Ozs7Ozs7Ozs7OztBQUkxRCxDQUFDO0dBakNLTCxXQUFXOztRQUNLRix5REFBVTtRQUNiQyxxRUFBZ0I7OztLQUY3QkMsV0FBVztBQW1DakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4Pzk0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3JcIjtcblxuY29uc3QgUHJvZHVjdEl0ZW06IEZDPHsgcHJvZHVjdDogYW55IH0+ID0gKHsgcHJvZHVjdCB9KSA9PiB7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQWN0aW9ucygpO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZVR5cGVkU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gIGNvbnN0IGlzRXhpc3RzSW5DYXJ0ID0gY2FydC5zb21lKChwKSA9PiBwLmlkID09IHByb2R1Y3QuaWQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDglXCIsIGJhY2tncm91bmRDb2xvcjogXCIjRTVGMEVBXCIgfX1cbiAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbWItNSBwLTMgc2hhZG93LXNtXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAgIGhlaWdodD1cIjE0M1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTkwMCBmb250LW1lZGl1bSB0ZXh0LXNtIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2Utbm93cmFwIG1yLTVcIj5cbiAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTYwMFwiPiR7cHJvZHVjdC5wcmljZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTMgYmctd2hpdGUgcm91bmRlZC14bCB3LTMvNCBteC1hdXRvIGJsb2NrIHAtMSBob3ZlcjpiZy1ncmVlbi0yMDBcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNFeGlzdHNJbkNhcnQgJiYgYWRkSXRlbShwcm9kdWN0KX1cbiAgICAgID5cbiAgICAgICAge2lzRXhpc3RzSW5DYXJ0ID8gXCJBbHJlZHkgaW4gY2FydFwiIDogXCJBZGQgdG8gY2FydFwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUFjdGlvbnMiLCJ1c2VUeXBlZFNlbGVjdG9yIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiYWRkSXRlbSIsImNhcnQiLCJzdGF0ZSIsImlzRXhpc3RzSW5DYXJ0Iiwic29tZSIsInAiLCJpZCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaGVpZ2h0IiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ })

});