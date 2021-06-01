webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Destination/Destination.jsx":
/*!****************************************************!*\
  !*** ./src/components/Destination/Destination.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Git_mito_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Git_mito_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Git_mito_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Git_mito_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_mito_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/images/mito_logo.svg */ "./public/images/mito_logo.svg");
/* harmony import */ var _public_images_attention_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/images/attention.svg */ "./public/images/attention.svg");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\Git\\mito\\src\\components\\Destination\\Destination.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var Destionation = function Destionation() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      endDate = _useState2[0],
      setEndDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      ports = _useState3[0],
      setports = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState4[0],
      setoptions = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      filteredOptions = _useState5[0],
      setFilteredOptions = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      selectedOriginPort = _useState6[0],
      setSelectedOriginPort = _useState6[1];

  var GetPorts = /*#__PURE__*/function () {
    var _ref = Object(D_Git_mito_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Git_mito_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, _options;

      return D_Git_mito_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://mock-air.herokuapp.com/asset/stations');

            case 3:
              response = _context.sent;
              console.log(response);
              _options = response.data.map(function (cnt) {
                var node = {
                  value: cnt.iata,
                  label: cnt.shortName,
                  connections: cnt.connections
                };
                return node;
              });
              setoptions(_options);
              setports(response.data);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function GetPorts() {
      return _ref.apply(this, arguments);
    };
  }();

  var HandleAirPortSelect = function HandleAirPortSelect(originport, e) {
    setSelectedOriginPort(originport);

    if (originport != null) {
      var connections = originport.connections.map(function (smt) {
        var contact = ports.find(function (port) {
          if (port.iata === smt.iata) {
            port.value = port.iata;
            port.label = port.shortName;
            return port;
          }
        });
        return contact;
      });
      setFilteredOptions(connections);
      console.log(connections);
    } else {
      setFilteredOptions([]);
    }

    console.log(originport);
    console.log(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    GetPorts();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "destination-box",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "destination-header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_images_mito_logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Mito AirLine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "destination-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flight-selection",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flight-selection-origin input-holder",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "origin",
            className: "basic-single",
            classNamePrefix: "select",
            placeholder: "Origin",
            isClearable: true,
            isSearchable: true,
            name: "origin",
            options: options,
            onChange: function onChange(val, e) {
              HandleAirPortSelect(val, e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 14
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "error-message origin",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_images_attention_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 52
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You shall not pass"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 65
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 14
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flight-selection-destination input-holder",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "destination",
            className: "basic-single",
            classNamePrefix: "select",
            placeholder: "Destination",
            isClearable: true,
            isSearchable: true,
            name: "destination",
            options: filteredOptions // onFocus={HandleAirPortSelect}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "error-message destination",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_images_attention_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 56
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You shall not pass"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 69
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "date-selection",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "date-selection-origin input-holder",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "date-selection-departure",
            selected: startDate,
            dateFormat: "yyyy-MM-dd",
            onChange: function onChange(date) {
              return setStartDate(date);
            },
            isClearable: true,
            placeholderText: "Departure"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "error-message departure",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_images_attention_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 54
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You shall not pass"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 67
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "date-selection-return input-holder",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "date-selection-return",
            selected: endDate,
            dateFormat: "yyyy-MM-dd",
            onChange: function onChange(date) {
              return setEndDate(date);
            },
            isClearable: true,
            placeholderText: "Return"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "error-message return",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_images_attention_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 51
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You shall not pass"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 64
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "search-destination",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "search-btn",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(Destionation, "AibwlgKi0EZQvFRrIFKi+RI03Jo=");

_c = Destionation;
/* harmony default export */ __webpack_exports__["default"] = (Destionation);

var _c;

$RefreshReg$(_c, "Destionation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVzdGluYXRpb24vRGVzdGluYXRpb24uanN4Il0sIm5hbWVzIjpbIkRlc3Rpb25hdGlvbiIsInVzZVN0YXRlIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwicG9ydHMiLCJzZXRwb3J0cyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiZmlsdGVyZWRPcHRpb25zIiwic2V0RmlsdGVyZWRPcHRpb25zIiwic2VsZWN0ZWRPcmlnaW5Qb3J0Iiwic2V0U2VsZWN0ZWRPcmlnaW5Qb3J0IiwiR2V0UG9ydHMiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJjbnQiLCJub2RlIiwidmFsdWUiLCJpYXRhIiwibGFiZWwiLCJzaG9ydE5hbWUiLCJjb25uZWN0aW9ucyIsImVycm9yIiwiSGFuZGxlQWlyUG9ydFNlbGVjdCIsIm9yaWdpbnBvcnQiLCJlIiwic210IiwiY29udGFjdCIsImZpbmQiLCJwb3J0IiwidXNlRWZmZWN0IiwidmFsIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEakI7QUFBQSxNQUNsQkMsU0FEa0I7QUFBQSxNQUNQQyxZQURPOztBQUFBLG1CQUVLSCxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUZiO0FBQUEsTUFFbEJHLE9BRmtCO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFJQ0wsc0RBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUlsQk0sS0FKa0I7QUFBQSxNQUlYQyxRQUpXOztBQUFBLG1CQUtLUCxzREFBUSxD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QUE7QUFBQTtBQUFBO0FBQUEscUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGLGVBaUVFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTZFRCxDQXhJSDs7R0FBTXhDLFk7O0tBQUFBLFk7QUEwSVdBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWYzY2MxYTQ5ZDM1YjEwMWE3ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvbWl0b19sb2dvLnN2Zyc7XHJcbmltcG9ydCBBdHRlbnRpb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9hdHRlbnRpb24uc3ZnJztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IERlc3Rpb25hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IFtwb3J0cywgc2V0cG9ydHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRvcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmlsdGVyZWRPcHRpb25zLCBzZXRGaWx0ZXJlZE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9yaWdpblBvcnQsIHNldFNlbGVjdGVkT3JpZ2luUG9ydF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICBjb25zdCBHZXRQb3J0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9tb2NrLWFpci5oZXJva3VhcHAuY29tL2Fzc2V0L3N0YXRpb25zJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSAgcmVzcG9uc2UuZGF0YS5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGNudC5pYXRhLFxyXG4gICAgICAgICAgICBsYWJlbDogY250LnNob3J0TmFtZSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbnM6IGNudC5jb25uZWN0aW9ucyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KTtcclxuICAgICAgIHNldG9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICBzZXRwb3J0cyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY29uc3QgSGFuZGxlQWlyUG9ydFNlbGVjdCA9IChvcmlnaW5wb3J0LCBlKSA9PiB7XHJcblxyXG4gICAgIHNldFNlbGVjdGVkT3JpZ2luUG9ydChvcmlnaW5wb3J0KTtcclxuXHJcbiAgICAgaWYob3JpZ2lucG9ydCAhPSBudWxsKXtcclxuICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSBvcmlnaW5wb3J0LmNvbm5lY3Rpb25zLm1hcCgoc210KSA9PiAge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBwb3J0cy5maW5kKChwb3J0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBvcnQuaWF0YSA9PT0gc210LmlhdGEpe1xyXG4gICAgICAgICAgICAgIHBvcnQudmFsdWUgPSBwb3J0LmlhdGE7XHJcbiAgICAgICAgICAgICAgcG9ydC5sYWJlbCA9IHBvcnQuc2hvcnROYW1lO1xyXG4gICAgICAgICAgICAgIHJldHVybiBwb3J0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBzZXRGaWx0ZXJlZE9wdGlvbnMoY29ubmVjdGlvbnMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9ucyk7XHJcbiAgICAgfWVsc2V7XHJcbiAgICAgIHNldEZpbHRlcmVkT3B0aW9ucyhbXSk7XHJcbiAgICAgfVxyXG4gICAgY29uc29sZS5sb2cob3JpZ2lucG9ydCk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICBcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEdldFBvcnRzKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc3RpbmF0aW9uLWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc3RpbmF0aW9uLWhlYWRlclwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDxoMj5NaXRvIEFpckxpbmU8L2gyPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzdGluYXRpb24tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlnaHQtc2VsZWN0aW9uLW9yaWdpbiBpbnB1dC1ob2xkZXJcIj5cclxuICAgICAgICAgICAgIHsvKiA8aW5wdXQgcGxhY2Vob2xkZXI9XCJPcmlnaW5cIiBvbkZvY3VzPXtIYW5kbGVBaXJQb3J0U2VsZWN0fSBjbGFzc05hbWU9XCJmbGlnaHQtc2VsZWN0aW9uLW9yaWdpblwiIHR5cGU9XCJ0ZXh0XCIgLz4gKi99XHJcbiAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBpZD1cIm9yaWdpblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1zaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3JpZ2luXCJcclxuICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9yaWdpblwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIEhhbmRsZUFpclBvcnRTZWxlY3QodmFsLCBlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuey8qICAgICAgICAgICAgICA8c2VsZWN0IHBsYWNlaG9sZGVyPVwiT3JpZ2luXCIgb25Gb2N1cz17SGFuZGxlQWlyUG9ydFNlbGVjdH0gY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvbi1vcmlnaW5cIiA+XHJcblxyXG4gICAgICAgICAgICAgPC9zZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlIG9yaWdpblwiPjxBdHRlbnRpb24gLz48cD5Zb3Ugc2hhbGwgbm90IHBhc3M8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvbi1kZXN0aW5hdGlvbiBpbnB1dC1ob2xkZXJcIj5cclxuICAgICAgICAgIHsvKiAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkRlc3RpbmF0aW9uXCIgY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvbi1kZXN0aW9uYXRpb25cIiB0eXBlPVwidGV4dFwiIC8+ICAqL31cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZGVzdGluYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1zaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtmaWx0ZXJlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgLy8gb25Gb2N1cz17SGFuZGxlQWlyUG9ydFNlbGVjdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZSBkZXN0aW5hdGlvblwiPjxBdHRlbnRpb24gLz48cD5Zb3Ugc2hhbGwgbm90IHBhc3M8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0aW9uLW9yaWdpbiBpbnB1dC1ob2xkZXJcIj5cclxuICAgICAgICAgIHsvKiAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkRlcGFydHVyZVwiIGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0aW9uLWRlcGFydHVyZVwiIHR5cGU9XCJkYXRlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0aW9uLWRlcGFydHVyZVwiXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eS1NTS1kZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTdGFydERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJEZXBhcnR1cmVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UgZGVwYXJ0dXJlXCI+PEF0dGVudGlvbiAvPjxwPllvdSBzaGFsbCBub3QgcGFzczwvcD48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1yZXR1cm4gaW5wdXQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW5wdXQgcGxhY2Vob2xkZXI9XCJSZXR1cm5cIiBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1yZXR1cm5cIiB0eXBlPVwiZGF0ZVwiIC8+ICovfVxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGUtc2VsZWN0aW9uLXJldHVyblwiXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RW5kRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJSZXR1cm5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UgcmV0dXJuXCI+PEF0dGVudGlvbiAvPjxwPllvdSBzaGFsbCBub3QgcGFzczwvcD48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWRlc3RpbmF0aW9uXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtYnRuXCI+U2VhcmNoPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IERlc3Rpb25hdGlvbjtcclxuICAiXSwic291cmNlUm9vdCI6IiJ9