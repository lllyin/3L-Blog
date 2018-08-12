webpackHotUpdate(5,{

/***/ "./models/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article__ = __webpack_require__("./services/article.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_config__ = __webpack_require__("./constant/config.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'article',
  state: {
    list: [],
    detail: {},
    total: 0
  },
  effects: {
    fetch:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function fetch(_ref, _ref2) {
      var success, error, call, put, response;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              success = _ref.success, error = _ref.error;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services_article__["b" /* queryArticles */])();

            case 4:
              response = _context.sent;

              if (response.status >> 0 === __WEBPACK_IMPORTED_MODULE_2__constant_config__["c" /* SUCCESS_STATUS */]) {
                if (typeof success === 'function') success(response);
              } else if (typeof error === 'function') {
                error(response);
              }

              _context.next = 8;
              return put({
                type: 'save',
                payload: response.data
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, fetch, this);
    }),
    fetchDetail:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function fetchDetail(_ref3, _ref4) {
      var articleId, success, error, call, put, response;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function fetchDetail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              articleId = _ref3.articleId, success = _ref3.success, error = _ref3.error;
              call = _ref4.call, put = _ref4.put;
              _context2.next = 4;
              return Object(__WEBPACK_IMPORTED_MODULE_1__services_article__["a" /* queryArticleDetail */])({
                articleId: articleId
              });

            case 4:
              response = _context2.sent;

              if (response.status >> 0 === __WEBPACK_IMPORTED_MODULE_2__constant_config__["c" /* SUCCESS_STATUS */]) {
                if (typeof success === 'function') success(response);
              } else if (typeof error === 'function') {
                error(response);
              }

              _context2.next = 8;
              return put({
                type: 'saveDetail',
                payload: response.data
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, fetchDetail, this);
    })
  },
  reducers: {
    save: function save(state, aciton) {
      return _objectSpread({}, state, {
        list: aciton.payload
      });
    },
    saveDetail: function saveDetail(state, aciton) {
      return _objectSpread({}, state, {
        detail: aciton.payload
      });
    }
  }
});

/***/ })

})
//# sourceMappingURL=5.a9ee646bba80cf2bbeed.hot-update.js.map