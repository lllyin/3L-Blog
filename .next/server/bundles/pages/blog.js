module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article/Abstract.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abstract; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant_config__ = __webpack_require__("./constant/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Abstract_less__ = __webpack_require__("./components/Article/Abstract.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Abstract_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Abstract_less__);
var _jsxFileName = "/Users/ling/workspace/3L-Blog/components/Article/Abstract.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Abstract =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Abstract, _PureComponent);

  function Abstract() {
    _classCallCheck(this, Abstract);

    return _possibleConstructorReturn(this, (Abstract.__proto__ || Object.getPrototypeOf(Abstract)).apply(this, arguments));
  }

  _createClass(Abstract, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          className = _props.className;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Abstract_less___default.a['article-excerpt'] + ' ' + className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "article-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, data.views, "\u6D4F\u89C8"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, data.comments && data.comments.length, "\u8BC4\u8BBA"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_moment___default()(data.create_time * 1000).format('YYYY-MM-DD HH:mm'), "(".concat(__WEBPACK_IMPORTED_MODULE_1_moment___default()(data.create_time * 1000).fromNow(), ")"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "article-abstract",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, data.content && data.content.substr(0, __WEBPACK_IMPORTED_MODULE_3__constant_config__["b" /* MAX_CHAR_LENGTH */]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, data.content && data.content.length > __WEBPACK_IMPORTED_MODULE_3__constant_config__["b" /* MAX_CHAR_LENGTH */] ? '......' : '')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/blog/detail?id=".concat(data._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "read-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Read more"))));
    }
  }]);

  return Abstract;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),

/***/ "./components/Article/Abstract.less":
/***/ (function(module, exports) {

module.exports = {
	"article-excerpt": "article-excerpt___3PVXV"
};

/***/ }),

/***/ "./components/Layout/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Content_less__ = __webpack_require__("./components/Layout/Content.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Content_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Content_less__);
var _jsxFileName = "/Users/ling/workspace/3L-Blog/components/Layout/Content.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var Content = function Content(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      rest = _objectWithoutProperties(_ref, ["children", "className", "loading"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Spin"], {
    spinning: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    className: "".concat(__WEBPACK_IMPORTED_MODULE_2__Content_less___default.a.content, " ").concat(className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/Layout/Content.less":
/***/ (function(module, exports) {

module.exports = {
	"content": "content___1_HuG"
};

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Content__ = __webpack_require__("./components/Layout/Content.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Content__["a"]; });



/***/ }),

/***/ "./constant/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAX_CHAR_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SUCCESS_STATUS; });
/* unused harmony export FAIL_STATUS */
/* unused harmony export NO_TOKEN */
/* unused harmony export EXPIRED_TOKEN */
/* unused harmony export ILLEGAL_TOKEN */
/* unused harmony export LOGIN_TIMEOUT */
/* unused harmony export NO_AUTH */
var API_URL = 'https://testapi.liaolunling.top/api/blog'; // 文字裁剪字符长度

var MAX_CHAR_LENGTH = 200; // 接口请求状态码

var SUCCESS_STATUS = 200; // 操作成功

var FAIL_STATUS = 10001; // 操作失败

var NO_TOKEN = 20001; // token不存在

var EXPIRED_TOKEN = 20002; // token过期

var ILLEGAL_TOKEN = 20003; // 非法token

var LOGIN_TIMEOUT = 20004; // 登录超时

var NO_AUTH = 30001; // 无权限

/***/ }),

/***/ "./models/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
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

/***/ }),

/***/ "./models/example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'example',
  state: {},
  subscriptions: {
    setup: function setup(_ref) {// eslint-disable-line

      var dispatch = _ref.dispatch,
          history = _ref.history;
    }
  },
  effects: {
    fetch:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function fetch(_ref2, _ref3) {
      var payload, call, put;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref2.payload;
              call = _ref3.call, put = _ref3.put;
              _context.next = 4;
              return put({
                type: 'save'
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, fetch, this);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _objectSpread({}, state, action.payload);
    }
  }
});

/***/ }),

/***/ "./models/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article__ = __webpack_require__("./models/article.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example__ = __webpack_require__("./models/example.js");


var model = [__WEBPACK_IMPORTED_MODULE_0__article__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__example__["a" /* default */]];
/* harmony default export */ __webpack_exports__["a"] = (model);

/***/ }),

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__ = __webpack_require__("rc-queue-anim");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_queue_anim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Article_Abstract__ = __webpack_require__("./components/Article/Abstract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_store__ = __webpack_require__("./utils/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_less__ = __webpack_require__("./pages/blog.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__blog_less__);


var _dec,
    _class,
    _jsxFileName = "/Users/ling/workspace/3L-Blog/pages/blog.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import { ResponsiveHeader } from '../src/components/Header';





var Blog = (_dec = Object(__WEBPACK_IMPORTED_MODULE_5__utils_store__["a" /* default */])(function (_ref) {
  var article = _ref.article,
      loading = _ref.loading;
  return {
    article: article,
    loading: loading
  };
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('客户端组件渲染好了');
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          article = _props.article,
          loading = _props.loading;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* Content */], {
        className: "home-box",
        style: {
          marginTop: 30
        } // loading={loading.models.article}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Blog Page"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_queue_anim___default.a, {
        className: "queue-simple",
        type: "left",
        delay: 300,
        duration: 500,
        appear: true,
        leaveReverse: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, article.list.map(function (articleItem) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Article_Abstract__["a" /* default */], {
          className: __WEBPACK_IMPORTED_MODULE_6__blog_less___default.a['article-item'],
          key: articleItem._id,
          data: articleItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        });
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var pathname, query, isServer, store;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathname = props.pathname, query = props.query, isServer = props.isServer, store = props.store;
                _context.next = 3;
                return props.store.dispatch({
                  type: 'article/fetch'
                });

              case 3:
                return _context.abrupt("return", {
                  // dont use store as property name, it will confilct with initial store
                  pathname: pathname,
                  query: query,
                  isServer: isServer,
                  dvaStore: store
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])) || _class);


/***/ }),

/***/ "./pages/blog.less":
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = queryArticles;
/* harmony export (immutable) */ __webpack_exports__["a"] = queryArticleDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
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

/***/ }),

/***/ "./utils/lyRequest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import './interceptors';

var codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var errortext = codeMessage[response.status] || response.statusText;
  console.log('请求错误');
  var error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


function request(url, options) {
  var defaultOptions = {
    credentials: 'include',
    timeout: 5000
  };

  var newOptions = _objectSpread({}, defaultOptions, options);

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = _objectSpread({
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }, newOptions.headers);
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return __WEBPACK_IMPORTED_MODULE_0_axios___default()(url, newOptions).then(checkStatus).then(function (response) {
    var status = response.status,
        statusText = response.statusText,
        headers = response.headers;
    return Promise.resolve(_objectSpread({
      status: status,
      statusText: statusText,
      headers: headers
    }, response.data));
  }).catch(function (error) {
    return Promise.reject(error);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ "./utils/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withDva;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dva_no_router__ = __webpack_require__("dva-no-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dva_no_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dva_no_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_index__ = __webpack_require__("./models/index.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
}; // eslint-disable-next-line


var __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

function createDvaStore(initialState) {
  var app;

  if (initialState) {
    app = __WEBPACK_IMPORTED_MODULE_2_dva_no_router___default()({
      initialState: initialState
    });
  } else {
    app = __WEBPACK_IMPORTED_MODULE_2_dva_no_router___default()({});
  }

  var isArray = Array.isArray(__WEBPACK_IMPORTED_MODULE_4__models_index__["a" /* default */]);

  if (isArray) {
    __WEBPACK_IMPORTED_MODULE_4__models_index__["a" /* default */].forEach(function (m) {
      app.model(m);
    });
  } else {
    app.model(__WEBPACK_IMPORTED_MODULE_4__models_index__["a" /* default */]);
  }

  app.router(function () {});
  app.start(); // console.log(app);
  // eslint-disable-next-line

  var store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  var isServer = checkServer();

  if (isServer) {
    // run in server
    // console.log('server');
    return createDvaStore(initialState);
  } // eslint-disable-next-line


  if (!window[__NEXT_DVA_STORE__]) {
    // console.log('client');
    // eslint-disable-next-line
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  } // eslint-disable-next-line


  return window[__NEXT_DVA_STORE__];
}

function withDva() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function CreateNextPage(Component) {
    var ComponentWithDva = function ComponentWithDva() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState;
      var ConnectedComponent = __WEBPACK_IMPORTED_MODULE_2_dva_no_router__["connect"].apply(void 0, args)(Component);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], // in client side, it will init store with the initial state tranfer from server side
      {
        store: store && store.dispatch ? store : getOrCreateStore(initialState)
      }, // transfer next.js's props to the page
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithDva.getInitialProps =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
      var props,
          isServer,
          store,
          initialProps,
          _args = arguments;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              // console.log('get......');
              isServer = checkServer();
              store = getOrCreateStore(props.req); // call children's getInitialProps
              // get initProps and transfer in to the page

              if (!Component.getInitialProps) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Component.getInitialProps(_objectSpread({}, props, {
                isServer: isServer,
                store: store
              }));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {};

            case 10:
              initialProps = _context.t0;
              return _context.abrupt("return", {
                store: store,
                initialProps: initialProps,
                initialState: store.getState()
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return ComponentWithDva;
  };
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/blog.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dva-no-router":
/***/ (function(module, exports) {

module.exports = require("dva-no-router");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "rc-queue-anim":
/***/ (function(module, exports) {

module.exports = require("rc-queue-anim");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map