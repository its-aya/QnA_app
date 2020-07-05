require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      Qn: {
        title: "",
        details: ""
      }
    };
  },

  methods: {
    onAdd() {
      if (this.Qn.title == "" || this.Qn.details == "") {
        alert({
          title: "Notice",
          message: "Title and Details are required",
          okButtonText: "Ok"
        });
      } else {
        this.$backendService.AskQtn(this.Qn).then(result => {
          console.log(" ----0---- " + result);
          alert({
            title: "Notice",
            message: "Your Question has been added successfully ^_^",
            okButtonText: "Ok"
          });
          this.Qn.title = "";
          this.Qn.details = "";
        }, error => {
          console.log(error);
        });
      }
    },

    onBack() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _AskQn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AskQn.vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;



var platformModule = __webpack_require__("tns-core-modules/platform");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      listofrequest: new ObservableArray(),
      navbar: "Welcome " + global.userData.user.first_name
    };
  },

  methods: {
    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      // console.log('Pulling...');
      this.$nextTick(() => {
        this.$backendService.getRequests().then(result => {
          // console.log(" ----0---- " + result);
          this.listofrequest = new ObservableArray(result);
        }, error => {
          console.log(error);
        });
        object.notifyPullToRefreshFinished();
      });
    },

    onItemTap: function onItemTap(_ref2) {
      var {
        item
      } = _ref2;
      console.log(item.id);
    },

    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    Ask() {
      this.$navigateTo(_AskQn__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    stripHtml(str) {
      if (str === null || str === '') return false;else str = str.toString();
      return str.replace(/<[^>]*>/g, '');
    }

  },

  mounted() {
    this.$backendService.getRequests().then(result => {
      // console.log(" ----0---- " + result);
      this.listofrequest = new ObservableArray(result);
    }, error => {
      console.log(error);
    });
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "catamouh@std.axcelacademy.co.uk",
        password: "gEMG8snXsN",
        confirmPassword: ""
      }
    };
  },

  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      var result = this.$backendService.login(this.user).then(result => {
        console.log(" ---- " + result);

        if (result) {
          this.isLoggingIn = true;
          this.processing = false;
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          }); //console.log("from login vue --------- "+global.accessToken);
        } else {
          this.alert("Wrong Username or Password");
          this.processing = false;
        }
      }, error => {
        console.log(error);
      });
    },

    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        this.processing = false;
        return;
      }

      this.$backendService.register(this.user).then(() => {
        this.processing = false;
        this.alert("Your account was successfully created.");
        this.isLoggingIn = true;
      }).catch(() => {
        this.processing = false;
        this.alert("Unfortunately we were unable to create your account.");
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for TRADE ZONE to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          this.$backendService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "TRADE ZONE",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=style&index=0&id=ec0369aa&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-ec0369aa] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-ec0369aa] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/AskQn.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Ask a Question" } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("TextField", {
                attrs: { hint: "Enter title.." },
                model: {
                  value: _vm.Qn.title,
                  callback: function($event) {
                    _vm.$set(_vm.Qn, "title", $event.object["text"])
                  },
                  expression: "Qn.title"
                }
              }),
              _c("TextField", {
                attrs: { hint: "Enter details." },
                model: {
                  value: _vm.Qn.details,
                  callback: function($event) {
                    _vm.$set(_vm.Qn, "details", $event.object["text"])
                  },
                  expression: "Qn.details"
                }
              }),
              _c("Button", { attrs: { text: "Ask" }, on: { tap: _vm.onAdd } }),
              _c("Button", { attrs: { text: "Back" }, on: { tap: _vm.onBack } })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Label", {
                    attrs: {
                      text: _vm.navbar,
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "15"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/ask.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Ask }
                  }),
                  _c("Image", {
                    attrs: {
                      src: "~/images/sign-out.png",
                      width: "20",
                      height: "20",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.logout }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadListView",
        {
          attrs: {
            pullToRefresh: "true",
            width: "94%",
            horizontalAlignment: "center",
            separatorColor: "transparent",
            marginTop: "30",
            items: _vm.listofrequest,
            "+alias": "item"
          },
          on: {
            itemTap: _vm.onItemTap,
            pullToRefreshInitiated: _vm.onPullToRefreshInitiated
          }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    { attrs: { orientation: "vertical" } },
                    [
                      _c(
                        "GridLayout",
                        {
                          directives: [
                            {
                              name: "shadow",
                              rawName: "v-shadow",
                              value: 2,
                              expression: "2"
                            }
                          ],
                          attrs: { alignItems: "center", borderRadius: "10" }
                        },
                        [
                          _c(
                            "StackLayout",
                            {
                              attrs: {
                                orientation: "vertical",
                                verticalAlignment: "middle",
                                height: "70",
                                backgroundColor: ""
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: item.title,
                                  marginLeft: "15",
                                  fontSize: "20"
                                }
                              }),
                              _c("Label", {
                                attrs: {
                                  text: _vm.stripHtml(item.details),
                                  marginLeft: "15",
                                  marginTop: "10"
                                }
                              })
                            ],
                            1
                          ),
                          _c("Label", {
                            attrs: {
                              marginRight: "15",
                              horizontalAlignment: "right",
                              verticalAlignment: "middle"
                            }
                          })
                        ],
                        1
                      ),
                      _c("StackLayout", {
                        attrs: { height: "15", backgroundColor: "" }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: {
                  width: "150",
                  height: "150",
                  src: "~/images/logo2.png"
                }
              }),
              _c("Label", {
                staticClass: "header",
                attrs: { color: "Black", text: "Answer Loop" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "0" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next"
                        },
                        on: { returnPress: _vm.focusPassword },
                        model: {
                          value: _vm.user.email,
                          callback: function($event) {
                            _vm.$set(_vm.user, "email", $event.object["text"])
                          },
                          expression: "user.email"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Password",
                          secure: "true",
                          returnKeyType: _vm.isLoggingIn ? "done" : "next"
                        },
                        on: { returnPress: _vm.focusConfirmPassword },
                        model: {
                          value: _vm.user.password,
                          callback: function($event) {
                            _vm.$set(
                              _vm.user,
                              "password",
                              $event.object["text"]
                            )
                          },
                          expression: "user.password"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isLoggingIn,
                          expression: "!isLoggingIn"
                        }
                      ],
                      staticClass: "input-field",
                      attrs: { row: "2" }
                    },
                    [
                      _c("TextField", {
                        ref: "confirmPassword",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Confirm password",
                          secure: "true",
                          returnKeyType: "done"
                        },
                        model: {
                          value: _vm.user.confirmPassword,
                          callback: function($event) {
                            _vm.$set(
                              _vm.user,
                              "confirmPassword",
                              $event.object["text"]
                            )
                          },
                          expression: "user.confirmPassword"
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Forgot your password?"
                },
                on: {
                  tap: function($event) {
                    return _vm.forgotPassword()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_vue_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue-shadow/dist/nativescript-vue-shadow.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./routes/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./services/backend-service.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_vue_shadow__WEBPACK_IMPORTED_MODULE_2__["default"]);


 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

var backendService = new _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$backendService = backendService;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(backendService.isLoggedIn() ? _routes__WEBPACK_IMPORTED_MODULE_3__["default"].home : _routes__WEBPACK_IMPORTED_MODULE_3__["default"].login)])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/AskQn.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&");
/* harmony import */ var _AskQn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/AskQn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/AskQn.vue?vue&type=style&index=0&id=ec0369aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AskQn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec0369aa",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ec0369aa')) {
      api.createRecord('ec0369aa', component.options)
    } else {
      api.reload('ec0369aa', component.options)
    }
    module.hot.accept("./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&");
(function () {
      api.rerender('ec0369aa', {
        render: _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/AskQn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/AskQn.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/AskQn.vue?vue&type=style&index=0&id=ec0369aa&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=style&index=0&id=ec0369aa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_style_index_0_id_ec0369aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/AskQn.vue?vue&type=template&id=ec0369aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AskQn_vue_vue_type_template_id_ec0369aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");


var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
//import * as Kinvey from "kinvey-nativescript-sdk";

/*Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});*/



var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;

global.isUserLoggedin = false;
global.accessToken = null;
global.userData = null;
class BackendService {
  isLoggedIn() {
    return global.isUserLoggedin;
  }

  login(user) {
    return _asyncToGenerator(function* () {
      console.log("logging in");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/aya/auth/authenticate",
        // your api url
        data: {
          email: user.email,
          password: user.password
        }
      }).then(result => {
        var userDetails = null;

        if (result.data.data.token) {
          global.userData = result.data.data;
          global.accessToken = result.data.data.token;
          global.isUserLoggedin = true;
        }

        if (global.userData != null) {
          return true;
        } else {
          return false;
        }
      }, error => {
        console.error(error);
      }); //return Kinvey.User.login(user.email, user.password);
    })();
  }

  getRequests() {
    return _asyncToGenerator(function* () {
      /*console.log("----&&&&-- in getrequests");
      console.log("----&&&&-- " + global.accessToken);
      http.request({
          url: "https://thebaselabs.com/directus/public/tradezone/items/quote?fields=id,price,supplier.id,supplier.supplier_name, supplier.supplier_address,sourcing.id, sourcing.payment_method, sourcing.request.title",
          method: "GET",
          headers: { Authorization: "Bearer "+ global.accessToken }
      }).then(response => {
          var result = response.content.toJSON();
          console.log("----&&&&---- " + result.data);
          return result.data;
      }, error => {
          console.error(error);
      });*/
      //this request gets items that belong to the user only. if roles are not set, you can use this &filter[owner]="+global.userData.user.id 
      //https://thebaselabs.com/directus/public/tradezone/items/request?fields=id,title,owner.id,description,request_status.status&filter[owner]="+global.userData.user.id
      console.log("----&&&&-- in getrequests");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "GET",
        "url": "https://thebaselabs.com/directus/public/aya/items/questions?fields=id,title,owner.id,details",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        }
      }).then(result => {
        //console.log("------ "+result.data.data.length);
        //console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  AskQtn(qnn) {
    return _asyncToGenerator(function* () {
      console.log("hi Aya");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/aya/items/questions",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        },
        data: {
          status: "published",
          title: qnn.title,
          details: qnn.details
        }
      }).then(result => {
        // console.log(result);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  logout() {
    global.isUserLoggedin = false;
    global.accessToken = null;
    global.userData = null;
    return true;
  }

  register(user) {//return Kinvey.User.signup({ username: user.email, password: user.password });
  }

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-ui-listview/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/vue");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/core/weak-event-listener":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/weak-event-listener");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Bc2tRbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrUW4udnVlPzg0YjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZT81MTIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZT82M2JiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrUW4udnVlPzIyMGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2tRbi52dWU/OWIwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS93ZWFrLWV2ZW50LWxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwiTlNWdWVTaGFkb3ciLCJyb3V0ZXMiLCJiYWNrZW5kU2VydmljZSIsInByb3RvdHlwZSIsIiRiYWNrZW5kU2VydmljZSIsInJlbmRlciIsImgiLCJpc0xvZ2dlZEluIiwibG9naW4iLCJMb2dpbiIsImhvbWUiLCJIb21lIiwiT2JzZXJ2YWJsZUFycmF5IiwicmVxdWlyZSIsImdsb2JhbCIsImlzVXNlckxvZ2dlZGluIiwiYWNjZXNzVG9rZW4iLCJ1c2VyRGF0YSIsIkJhY2tlbmRTZXJ2aWNlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIm1ldGhvZCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInJlc3VsdCIsInVzZXJEZXRhaWxzIiwidG9rZW4iLCJlcnJvciIsImdldFJlcXVlc3RzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBc2tRdG4iLCJxbm4iLCJzdGF0dXMiLCJ0aXRsZSIsImRldGFpbHMiLCJsb2dvdXQiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxtREFGQTtBQUdBO0FBSEE7QUFLQSxPQU5BLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLG9FQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSxTQVRBLEVBU0E7QUFDQTtBQUNBLFNBWEE7QUFZQTtBQUNBLEtBdkJBOztBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQTVCQTtBQVRBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5QkE7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QywyRDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsMEU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHlFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsdUY7Ozs7Ozs7QUNBQSxnRjs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx5RTs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBc2sgYSBRdWVzdGlvblwiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWUtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cIlFuLnRpdGxlXCIgaGludD1cIkVudGVyIHRpdGxlLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwiUW4uZGV0YWlsc1wiIGhpbnQ9XCJFbnRlciBkZXRhaWxzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQXNrXCIgQHRhcD1cIm9uQWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQmFja1wiIEB0YXA9XCJvbkJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgUW46IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6XCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIG9uQWRkKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLlFuLnRpdGxlID09IFwiXCIgfHwgdGhpcy5Rbi5kZXRhaWxzID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOb3RpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRpdGxlIGFuZCBEZXRhaWxzIGFyZSByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UuQXNrUXRuKHRoaXMuUW4pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgLS0tLTAtLS0tIFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vdGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBRdWVzdGlvbiBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkgXl9eXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlFuLnRpdGxlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Rbi5kZXRhaWxzPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CYWNrKCl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5ob21lLXBhbmVsIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgbWFyZ2luOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgICA8QWN0aW9uQmFyIHBhZGRpbmc9XCIxNVwiPlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgd2lkdGg9XCI5NCVcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5SaWdodD1cIjEwXCIvPi0tPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJuYXZiYXJcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5MZWZ0PVwiMTVcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2Fzay5wbmdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTVcIiBAdGFwPVwiQXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9zaWduLW91dC5wbmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTVcIiBAdGFwPVwibG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgIFxuXG4gICAgICAgICA8UmFkTGlzdFZpZXcgcHVsbFRvUmVmcmVzaD1cInRydWVcIiBmb3I9XCJpdGVtIGluIGxpc3RvZnJlcXVlc3RcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIHdpZHRoPVwiOTQlXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBtYXJnaW5Ub3A9XCIzMFwiIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgYWxpZ25JdGVtcz1cImNlbnRlclwiICBib3JkZXJSYWRpdXM9XCIxMFwiICB2LXNoYWRvdz1cIjJcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cIm1pZGRsZVwiIGhlaWdodD1cIjcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLnRpdGxlXCIgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMTVcIiBmb250U2l6ZT1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJzdHJpcEh0bWwoaXRlbS5kZXRhaWxzKVwiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjE1XCIgbWFyZ2luVG9wPVwiMTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJtaWRkbGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBoZWlnaHQ9XCIxNVwiIGJhY2tncm91bmRDb2xvcj1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuICAgIGltcG9ydCBBc2tRbiBmcm9tIFwiLi9Bc2tRblwiO1xuY29uc3QgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJztcbmNvbnN0IHBsYXRmb3JtTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdG9mcmVxdWVzdDogbmV3IE9ic2VydmFibGVBcnJheSgpLFxuICAgICAgICAgICAgICAgIG5hdmJhcjogXCJXZWxjb21lIFwiKyBnbG9iYWwudXNlckRhdGEudXNlci5maXJzdF9uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQgKHsgb2JqZWN0IH0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdQdWxsaW5nLi4uJyk7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmdldFJlcXVlc3RzKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0wLS0tLSBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdG9mcmVxdWVzdCA9ICBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQXNrKCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQXNrUW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaXBIdG1sKHN0cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKHN0cj09PW51bGwpIHx8IChzdHI9PT0nJykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3RyID0gc3RyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC88W14+XSo+L2csICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmdldFJlcXVlc3RzKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0wLS0tLSBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdG9mcmVxdWVzdCA9ICBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIiBzcmM9XCJ+L2ltYWdlcy9sb2dvMi5wbmdcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIGNvbG9yPVwiQmxhY2tcIiB0ZXh0PVwiQW5zd2VyIExvb3BcIj48L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjBcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRW1haWxcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIiBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0NvbmZpcm1QYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybSBwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAnTG9nIEluJyA6ICdTaWduIFVwJ1wiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgKnYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiY2F0YW1vdWhAc3RkLmF4Y2VsYWNhZGVteS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJnRU1HOHNuWHNOXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgLS0tLSBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZnJvbSBsb2dpbiB2dWUgLS0tLS0tLS0tIFwiK2dsb2JhbC5hY2Nlc3NUb2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiV3JvbmcgVXNlcm5hbWUgb3IgUGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucmVnaXN0ZXIodGhpcy51c2VyKSBcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgVFJBREUgWk9ORSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVFJBREUgWk9ORVwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRDUxQTFBO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LWVjMDM2OWFhXSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcbi5kZXNjcmlwdGlvbi1sYWJlbFtkYXRhLXYtZWMwMzY5YWFdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Bc2tRbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0Q1MUExQTtcXG59XFxuLmlucHV0LWZpZWxkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNTtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcXG59XFxuLmlucHV0W2RhdGEtdi1jMjc0ODJjNF06ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uYnRuLXByaW1hcnlbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG4ubG9naW4tbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBOEE4QTg7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5zaWduLXVwLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvTG9naW4udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiQXNrIGEgUXVlc3Rpb25cIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciB0aXRsZS4uXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5Rbi50aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLlFuLCBcInRpdGxlXCIsICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiUW4udGl0bGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIkVudGVyIGRldGFpbHMuXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5Rbi5kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uUW4sIFwiZGV0YWlsc1wiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlFuLmRldGFpbHNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJBc2tcIiB9LCBvbjogeyB0YXA6IF92bS5vbkFkZCB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQmFja1wiIH0sIG9uOiB7IHRhcDogX3ZtLm9uQmFjayB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBwYWRkaW5nOiBcIjE1XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgd2lkdGg6IFwiOTQlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hdmJhcixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9hc2sucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLkFzayB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9zaWduLW91dC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBwdWxsVG9SZWZyZXNoOiBcInRydWVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjk0JVwiLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMzBcIixcbiAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGlzdG9mcmVxdWVzdCxcbiAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCxcbiAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IF92bS5vblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hhZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBib3JkZXJSYWRpdXM6IFwiMTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwibWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI3MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc3RyaXBIdG1sKGl0ZW0uZGV0YWlscyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiMTVcIiwgYmFja2dyb3VuZENvbG9yOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ29cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTUwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvbG9nbzIucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJCbGFja1wiLCB0ZXh0OiBcIkFuc3dlciBMb29wXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IF92bS5pc0xvZ2dpbmdJbiA/IFwiZG9uZVwiIDogXCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyByZXR1cm5QcmVzczogX3ZtLmZvY3VzQ29uZmlybVBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDb25maXJtIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmNvbmZpcm1QYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpcm1QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCIzXCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiTG9nIEluXCIgOiBcIlNpZ24gVXBcIixcbiAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbGFiZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCIqdi1zaG93XCI6IFwiaXNMb2dnaW5nSW5cIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcmdvdFBhc3N3b3JkKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIixcbiAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlRm9ybSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQmFjayB0byBMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIlNpZ24gdXBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vcm91dGVzL2luZGV4LmpzXCI6IFwiLi9yb3V0ZXMvaW5kZXguanNcIixcblx0XCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0Q1MUExQVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjYwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTpkaXNhYmxlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnO1xuVnVlLnVzZShSYWRMaXN0Vmlldyk7XG5pbXBvcnQgTlNWdWVTaGFkb3cgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1zaGFkb3cnXG5WdWUudXNlKE5TVnVlU2hhZG93KVxuXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlc1wiO1xuaW1wb3J0IEJhY2tlbmRTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZVwiO1xuXG5cbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5jb25zdCBiYWNrZW5kU2VydmljZSA9IG5ldyBCYWNrZW5kU2VydmljZSgpO1xuVnVlLnByb3RvdHlwZS4kYmFja2VuZFNlcnZpY2UgPSBiYWNrZW5kU2VydmljZTtcblxubmV3IFZ1ZSh7XG4gIHJlbmRlcjogaCA9PiBoKFwiZnJhbWVcIiwgW2goYmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpID8gcm91dGVzLmhvbWUgOiByb3V0ZXMubG9naW4pXSlcbn0pLiRzdGFydCgpO1xuXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fza1FuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Bc2tRbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fza1FuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Bc2tRbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWMwMzY5YWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxMRU5PVk9cXFxcVmlkZW9zXFxcXEF5YVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYzAzNjlhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYzAzNjlhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYzAzNjlhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXNrUW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVjMDM2OWFhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2VjMDM2OWFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fza1FuLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2tRbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2tRbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fza1FuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVjMDM2OWFhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fza1FuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVjMDM2OWFhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fza1FuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxMRU5PVk9cXFxcVmlkZW9zXFxcXEF5YVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMjc0ODJjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXExFTk9WT1xcXFxWaWRlb3NcXFxcQXlhXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyNzQ4MmM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyNzQ4MmM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI3NDgyYzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5cblxuY29uc3Qgcm91dGVzID0ge1xuICAgIGxvZ2luOiBMb2dpbixcbiAgICBob21lOiBIb21lXG59XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7IiwiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuLy9pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbi8qS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfU3lZOExZTzhNXCIsXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcbn0pOyovXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5jb25zdCBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5nbG9iYWwuaXNVc2VyTG9nZ2VkaW4gPSBmYWxzZTtcbmdsb2JhbC5hY2Nlc3NUb2tlbiA9IG51bGw7XG5nbG9iYWwudXNlckRhdGEgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5pc1VzZXJMb2dnZWRpbjtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dpbih1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgXG5cbiAgICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2F1dGgvYXV0aGVudGljYXRlXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckRldGFpbHMgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC51c2VyRGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmlzVXNlckxvZ2dlZGluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC51c2VyRGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFJlcXVlc3RzKClcbiAgICB7XG4gICAgICAgIC8qY29uc29sZS5sb2coXCItLS0tJiYmJi0tIGluIGdldHJlcXVlc3RzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0mJiYmLS0gXCIgKyBnbG9iYWwuYWNjZXNzVG9rZW4pO1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy90cmFkZXpvbmUvaXRlbXMvcXVvdGU/ZmllbGRzPWlkLHByaWNlLHN1cHBsaWVyLmlkLHN1cHBsaWVyLnN1cHBsaWVyX25hbWUsIHN1cHBsaWVyLnN1cHBsaWVyX2FkZHJlc3Msc291cmNpbmcuaWQsIHNvdXJjaW5nLnBheW1lbnRfbWV0aG9kLCBzb3VyY2luZy5yZXF1ZXN0LnRpdGxlXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tLS0gXCIgKyByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTsqL1xuICAgICAgICAvL3RoaXMgcmVxdWVzdCBnZXRzIGl0ZW1zIHRoYXQgYmVsb25nIHRvIHRoZSB1c2VyIG9ubHkuIGlmIHJvbGVzIGFyZSBub3Qgc2V0LCB5b3UgY2FuIHVzZSB0aGlzICZmaWx0ZXJbb3duZXJdPVwiK2dsb2JhbC51c2VyRGF0YS51c2VyLmlkIFxuICAgICAgICAvL2h0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy90cmFkZXpvbmUvaXRlbXMvcmVxdWVzdD9maWVsZHM9aWQsdGl0bGUsb3duZXIuaWQsZGVzY3JpcHRpb24scmVxdWVzdF9zdGF0dXMuc3RhdHVzJmZpbHRlcltvd25lcl09XCIrZ2xvYmFsLnVzZXJEYXRhLnVzZXIuaWRcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tIGluIGdldHJlcXVlc3RzXCIpO1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy9heWEvaXRlbXMvcXVlc3Rpb25zP2ZpZWxkcz1pZCx0aXRsZSxvd25lci5pZCxkZXRhaWxzXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIrIGdsb2JhbC5hY2Nlc3NUb2tlbiB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0gXCIrcmVzdWx0LmRhdGEuZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBBc2tRdG4ocW5uKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGkgQXlhXCIpO1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2l0ZW1zL3F1ZXN0aW9uc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInB1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcW5uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzIDogcW5uLmRldGFpbHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBnbG9iYWwuaXNVc2VyTG9nZ2VkaW4gPSBmYWxzZTtcbiAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgICAgZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSk7XG4gICAgfVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS93ZWFrLWV2ZW50LWxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==