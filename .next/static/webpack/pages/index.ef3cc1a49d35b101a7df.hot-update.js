webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGVzdGluYXRpb24vRGVzdGluYXRpb24uanN4Il0sIm5hbWVzIjpbIkRlc3Rpb25hdGlvbiIsInVzZVN0YXRlIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwicG9ydHMiLCJzZXRwb3J0cyIsIm9wdGlvbnMiLCJzZXRvcHRpb25zIiwiZmlsdGVyZWRPcHRpb25zIiwic2V0RmlsdGVyZWRPcHRpb25zIiwic2VsZWN0ZWRPcmlnaW5Qb3J0Iiwic2V0U2VsZWN0ZWRPcmlnaW5Qb3J0IiwiR2V0UG9ydHMiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJjbnQiLCJub2RlIiwidmFsdWUiLCJpYXRhIiwibGFiZWwiLCJzaG9ydE5hbWUiLCJjb25uZWN0aW9ucyIsImVycm9yIiwiSGFuZGxlQWlyUG9ydFNlbGVjdCIsIm9yaWdpbnBvcnQiLCJlIiwic210IiwiY29udGFjdCIsImZpbmQiLCJwb3J0IiwidXNlRWZmZWN0IiwidmFsIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEakI7QUFBQSxNQUNsQkMsU0FEa0I7QUFBQSxNQUNQQyxZQURPOztBQUFBLG1CQUVLSCxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUZiO0FBQUEsTUFFbEJHLE9BRmtCO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFJQ0wsc0RBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUlsQk0sS0FKa0I7QUFBQSxNQUlYQyxRQUpXOztBQUFBLG1CQUtLUCxzREFBUSxDQUFDLEVBQUQsQ0FMYjtBQUFBLE1BS2xCUSxPQUxrQjtBQUFBLE1BS1RDLFVBTFM7O0FBQUEsbUJBTXFCVCxzREFBUSxDQUFDLEVBQUQsQ0FON0I7QUFBQSxNQU1sQlUsZUFOa0I7QUFBQSxNQU1EQyxrQkFOQzs7QUFBQSxtQkFPMkJYLHNEQUFRLENBQUMsRUFBRCxDQVBuQztBQUFBLE1BT2xCWSxrQkFQa0I7QUFBQSxNQU9FQyxxQkFQRjs7QUFTeEIsTUFBTUMsUUFBUTtBQUFBLDhPQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVdDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwrQ0FBVixDQUZYOztBQUFBO0FBRU5DLHNCQUZNO0FBR1pDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNNVCxzQkFKTSxHQUlLUyxRQUFRLENBQUNHLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxHQUFELEVBQVM7QUFDMUMsb0JBQU1DLElBQUksR0FBRztBQUNYQyx1QkFBSyxFQUFFRixHQUFHLENBQUNHLElBREE7QUFFWEMsdUJBQUssRUFBRUosR0FBRyxDQUFDSyxTQUZBO0FBR1hDLDZCQUFXLEVBQUVOLEdBQUcsQ0FBQ007QUFITixpQkFBYjtBQUtBLHVCQUFPTCxJQUFQO0FBQ0QsZUFQZ0IsQ0FKTDtBQVliZCx3QkFBVSxDQUFDRCxRQUFELENBQVY7QUFDQUQsc0JBQVEsQ0FBQ1UsUUFBUSxDQUFDRyxJQUFWLENBQVI7QUFiYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCWkYscUJBQU8sQ0FBQ1csS0FBUjs7QUFoQlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUmYsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQW9CQSxNQUFNZ0IsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLENBQWIsRUFBbUI7QUFFN0NuQix5QkFBcUIsQ0FBQ2tCLFVBQUQsQ0FBckI7O0FBRUEsUUFBR0EsVUFBVSxJQUFJLElBQWpCLEVBQXNCO0FBQ3JCLFVBQU1ILFdBQVcsR0FBR0csVUFBVSxDQUFDSCxXQUFYLENBQXVCUCxHQUF2QixDQUEyQixVQUFDWSxHQUFELEVBQVU7QUFDdkQsWUFBTUMsT0FBTyxHQUFHNUIsS0FBSyxDQUFDNkIsSUFBTixDQUFXLFVBQUNDLElBQUQsRUFBVTtBQUNqQyxjQUFHQSxJQUFJLENBQUNYLElBQUwsS0FBY1EsR0FBRyxDQUFDUixJQUFyQixFQUEwQjtBQUN4QlcsZ0JBQUksQ0FBQ1osS0FBTCxHQUFhWSxJQUFJLENBQUNYLElBQWxCO0FBQ0FXLGdCQUFJLENBQUNWLEtBQUwsR0FBYVUsSUFBSSxDQUFDVCxTQUFsQjtBQUNBLG1CQUFPUyxJQUFQO0FBQ0Q7QUFDRixTQU5hLENBQWhCO0FBT0UsZUFBT0YsT0FBUDtBQUNILE9BVG1CLENBQXBCO0FBV0F2Qix3QkFBa0IsQ0FBQ2lCLFdBQUQsQ0FBbEI7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVlTLFdBQVo7QUFDQSxLQWRELE1BY0s7QUFDSmpCLHdCQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQTs7QUFDRk8sV0FBTyxDQUFDQyxHQUFSLENBQVlZLFVBQVo7QUFDQWIsV0FBTyxDQUFDQyxHQUFSLENBQVlhLENBQVo7QUFFRCxHQXhCQTs7QUF5QkRLLHlEQUFTLENBQUMsWUFBTTtBQUNkdkIsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLRSxzQkFDQTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0EscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHNDQUFmO0FBQUEsa0NBRUcscUVBQUMsb0RBQUQ7QUFDRyxjQUFFLEVBQUMsUUFETjtBQUVHLHFCQUFTLEVBQUMsY0FGYjtBQUdHLDJCQUFlLEVBQUMsUUFIbkI7QUFJRyx1QkFBVyxFQUFDLFFBSmY7QUFLRyx1QkFBVyxFQUFFLElBTGhCO0FBTUcsd0JBQVksRUFBRSxJQU5qQjtBQU9HLGdCQUFJLEVBQUMsUUFQUjtBQVFHLG1CQUFPLEVBQUlOLE9BUmQ7QUFVRyxvQkFBUSxFQUFFLGtCQUFDOEIsR0FBRCxFQUFNTixDQUFOLEVBQVk7QUFDcEJGLGlDQUFtQixDQUFDUSxHQUFELEVBQU1OLENBQU4sQ0FBbkI7QUFDRDtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkgsZUFtQkc7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsb0NBQXNDLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXRDLGVBQW1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXNCRTtBQUFLLG1CQUFTLEVBQUMsMkNBQWY7QUFBQSxrQ0FFSSxxRUFBQyxvREFBRDtBQUNJLGNBQUUsRUFBQyxhQURQO0FBRUkscUJBQVMsRUFBQyxjQUZkO0FBR0ksMkJBQWUsRUFBQyxRQUhwQjtBQUlJLHVCQUFXLEVBQUMsYUFKaEI7QUFLSSx1QkFBVyxFQUFFLElBTGpCO0FBTUksd0JBQVksRUFBRSxJQU5sQjtBQU9JLGdCQUFJLEVBQUMsYUFQVDtBQVFJLG1CQUFPLEVBQUl0QixlQVJmLENBU0c7O0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQWFFO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUEyQyxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEzQyxlQUF3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUF1Q0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG9DQUFmO0FBQUEsa0NBRUUscUVBQUMsdURBQUQ7QUFDQSxxQkFBUyxFQUFDLDBCQURWO0FBRUUsb0JBQVEsRUFBRVIsU0FGWjtBQUdFLHNCQUFVLEVBQUMsWUFIYjtBQUlFLG9CQUFRLEVBQUUsa0JBQUNxQyxJQUFEO0FBQUEscUJBQVVwQyxZQUFZLENBQUNvQyxJQUFELENBQXRCO0FBQUEsYUFKWjtBQUtFLHVCQUFXLE1BTGI7QUFNRSwyQkFBZSxFQUFDO0FBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFVRTtBQUFLLHFCQUFTLEVBQUMseUJBQWY7QUFBQSxvQ0FBeUMscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBekMsZUFBc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFhRTtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBQSxrQ0FFRSxxRUFBQyx1REFBRDtBQUNFLHFCQUFTLEVBQUMsdUJBRFo7QUFFSSxvQkFBUSxFQUFFbkMsT0FGZDtBQUdJLHNCQUFVLEVBQUMsWUFIZjtBQUlJLG9CQUFRLEVBQUUsa0JBQUNtQyxJQUFEO0FBQUEscUJBQVVsQyxVQUFVLENBQUNrQyxJQUFELENBQXBCO0FBQUEsYUFKZDtBQUtJLHVCQUFXLE1BTGY7QUFNSSwyQkFBZSxFQUFDO0FBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FBc0MscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdEMsZUFBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNGLGVBaUVFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTZFRCxDQXhJSDs7R0FBTXhDLFk7O0tBQUFBLFk7QUEwSVdBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmM2NjMWE0OWQzNWIxMDFhN2RmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL21pdG9fbG9nby5zdmcnO1xyXG5pbXBvcnQgQXR0ZW50aW9uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvYXR0ZW50aW9uLnN2Zyc7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBEZXN0aW9uYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG5cclxuICBjb25zdCBbcG9ydHMsIHNldHBvcnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0b3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkT3B0aW9ucywgc2V0RmlsdGVyZWRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPcmlnaW5Qb3J0LCBzZXRTZWxlY3RlZE9yaWdpblBvcnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgY29uc3QgR2V0UG9ydHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vbW9jay1haXIuaGVyb2t1YXBwLmNvbS9hc3NldC9zdGF0aW9ucycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gIHJlc3BvbnNlLmRhdGEubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBjbnQuaWF0YSxcclxuICAgICAgICAgICAgbGFiZWw6IGNudC5zaG9ydE5hbWUsXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25zOiBjbnQuY29ubmVjdGlvbnMsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBzZXRvcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgc2V0cG9ydHMocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IEhhbmRsZUFpclBvcnRTZWxlY3QgPSAob3JpZ2lucG9ydCwgZSkgPT4ge1xyXG5cclxuICAgICBzZXRTZWxlY3RlZE9yaWdpblBvcnQob3JpZ2lucG9ydCk7XHJcblxyXG4gICAgIGlmKG9yaWdpbnBvcnQgIT0gbnVsbCl7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gb3JpZ2lucG9ydC5jb25uZWN0aW9ucy5tYXAoKHNtdCkgPT4gIHtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gcG9ydHMuZmluZCgocG9ydCkgPT4ge1xyXG4gICAgICAgICAgICBpZihwb3J0LmlhdGEgPT09IHNtdC5pYXRhKXtcclxuICAgICAgICAgICAgICBwb3J0LnZhbHVlID0gcG9ydC5pYXRhO1xyXG4gICAgICAgICAgICAgIHBvcnQubGFiZWwgPSBwb3J0LnNob3J0TmFtZTtcclxuICAgICAgICAgICAgICByZXR1cm4gcG9ydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBjb250YWN0O1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgc2V0RmlsdGVyZWRPcHRpb25zKGNvbm5lY3Rpb25zKTtcclxuICAgICAgY29uc29sZS5sb2coY29ubmVjdGlvbnMpO1xyXG4gICAgIH1lbHNle1xyXG4gICAgICBzZXRGaWx0ZXJlZE9wdGlvbnMoW10pO1xyXG4gICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG9yaWdpbnBvcnQpO1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBHZXRQb3J0cygpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXN0aW5hdGlvbi1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXN0aW5hdGlvbi1oZWFkZXJcIj5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgICA8aDI+TWl0byBBaXJMaW5lPC9oMj4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc3RpbmF0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaWdodC1zZWxlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvbi1vcmlnaW4gaW5wdXQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICB7LyogPGlucHV0IHBsYWNlaG9sZGVyPVwiT3JpZ2luXCIgb25Gb2N1cz17SGFuZGxlQWlyUG9ydFNlbGVjdH0gY2xhc3NOYW1lPVwiZmxpZ2h0LXNlbGVjdGlvbi1vcmlnaW5cIiB0eXBlPVwidGV4dFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtc2luZ2xlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9yaWdpblwiXHJcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmlnaW5cIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBIYW5kbGVBaXJQb3J0U2VsZWN0KHZhbCwgZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbnsvKiAgICAgICAgICAgICAgPHNlbGVjdCBwbGFjZWhvbGRlcj1cIk9yaWdpblwiIG9uRm9jdXM9e0hhbmRsZUFpclBvcnRTZWxlY3R9IGNsYXNzTmFtZT1cImZsaWdodC1zZWxlY3Rpb24tb3JpZ2luXCIgPlxyXG5cclxuICAgICAgICAgICAgIDwvc2VsZWN0PiAqL31cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZSBvcmlnaW5cIj48QXR0ZW50aW9uIC8+PHA+WW91IHNoYWxsIG5vdCBwYXNzPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaWdodC1zZWxlY3Rpb24tZGVzdGluYXRpb24gaW5wdXQtaG9sZGVyXCI+XHJcbiAgICAgICAgICB7LyogICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEZXN0aW5hdGlvblwiIGNsYXNzTmFtZT1cImZsaWdodC1zZWxlY3Rpb24tZGVzdGlvbmF0aW9uXCIgdHlwZT1cInRleHRcIiAvPiAgKi99XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRlc3RpbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtc2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXN0aW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXN0aW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7ZmlsdGVyZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgIC8vIG9uRm9jdXM9e0hhbmRsZUFpclBvcnRTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UgZGVzdGluYXRpb25cIj48QXR0ZW50aW9uIC8+PHA+WW91IHNoYWxsIG5vdCBwYXNzPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1vcmlnaW4gaW5wdXQtaG9sZGVyXCI+XHJcbiAgICAgICAgICB7LyogICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEZXBhcnR1cmVcIiBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1kZXBhcnR1cmVcIiB0eXBlPVwiZGF0ZVwiIC8+ICovfVxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1kZXBhcnR1cmVcIlxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cInl5eXktTU0tZGRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U3RhcnREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiRGVwYXJ0dXJlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlIGRlcGFydHVyZVwiPjxBdHRlbnRpb24gLz48cD5Zb3Ugc2hhbGwgbm90IHBhc3M8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1zZWxlY3Rpb24tcmV0dXJuIGlucHV0LWhvbGRlclwiPlxyXG4gICAgICAgICAgICB7LyogPGlucHV0IHBsYWNlaG9sZGVyPVwiUmV0dXJuXCIgY2xhc3NOYW1lPVwiZGF0ZS1zZWxlY3Rpb24tcmV0dXJuXCIgdHlwZT1cImRhdGVcIiAvPiAqL31cclxuICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLXNlbGVjdGlvbi1yZXR1cm5cIlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eS1NTS1kZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEVuZERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiUmV0dXJuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlIHJldHVyblwiPjxBdHRlbnRpb24gLz48cD5Zb3Ugc2hhbGwgbm90IHBhc3M8L3A+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1kZXN0aW5hdGlvblwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWJ0blwiPlNlYXJjaDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBEZXN0aW9uYXRpb247XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==