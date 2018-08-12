webpackHotUpdate(5,{

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__ = __webpack_require__("./node_modules/rc-queue-anim/es/index.js");
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
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ResponsiveHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* Content */], {
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
      }, "Blog Page"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_queue_anim__["a" /* default */], {
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

    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.05b40272aa769f79f12d.hot-update.js.map