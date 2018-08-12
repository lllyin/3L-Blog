webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./services/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = queryArticles;
/* harmony export (immutable) */ __webpack_exports__["a"] = queryArticleDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lyRequest__ = __webpack_require__("./utils/lyRequest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_config__ = __webpack_require__("./constant/config.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 // 获取文章列表

function queryArticles() {
  return _queryArticles.apply(this, arguments);
} // 获取文章详情

function _queryArticles() {
  _queryArticles = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(__WEBPACK_IMPORTED_MODULE_1__utils_lyRequest__["a" /* default */])("".concat(__WEBPACK_IMPORTED_MODULE_2__constant_config__["a" /* API_URL */], "/articles")));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _queryArticles.apply(this, arguments);
}

function queryArticleDetail(_x) {
  return _queryArticleDetail.apply(this, arguments);
}

function _queryArticleDetail() {
  _queryArticleDetail = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(_ref) {
    var articleId;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            articleId = _ref.articleId;
            return _context2.abrupt("return", Object(__WEBPACK_IMPORTED_MODULE_1__utils_lyRequest__["a" /* default */])("".concat(__WEBPACK_IMPORTED_MODULE_2__constant_config__["a" /* API_URL */], "/articles/").concat(articleId), {}));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _queryArticleDetail.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=5.dae4c3d0b19bb4d6180b.hot-update.js.map