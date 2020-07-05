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

/***/ "tns-core-modules/ui/page/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Bc2tRbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrUW4udnVlPzg0YjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZT81MTIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fza1FuLnZ1ZT82M2JiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrUW4udnVlPzIyMGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2tRbi52dWU/OWIwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS93ZWFrLWV2ZW50LWxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6WyJSYWRMaXN0VmlldyIsIlZ1ZSIsInVzZSIsIk5TVnVlU2hhZG93Iiwicm91dGVzIiwiQmFja2VuZFNlcnZpY2UiLCJiYWNrZW5kU2VydmljZSIsInByb3RvdHlwZSIsInJlbmRlciIsImgiLCJpc0xvZ2dlZEluIiwiJHN0YXJ0IiwibG9naW4iLCJMb2dpbiIsImhvbWUiLCJIb21lIiwiT2JzZXJ2YWJsZUFycmF5IiwicmVxdWlyZSIsImdsb2JhbCIsImlzVXNlckxvZ2dlZGluIiwiYWNjZXNzVG9rZW4iLCJ1c2VyRGF0YSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJtZXRob2QiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJyZXN1bHQiLCJ1c2VyRGV0YWlscyIsInRva2VuIiwiZXJyb3IiLCJnZXRSZXF1ZXN0cyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQXNrUXRuIiwicW5uIiwic3RhdHVzIiwidGl0bGUiLCJkZXRhaWxzIiwibG9nb3V0IiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFGQTtBQURBO0FBTUEsR0FSQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsbURBRkE7QUFHQTtBQUhBO0FBS0EsT0FOQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxvRUFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsU0FUQSxFQVNBO0FBQ0E7QUFDQSxTQVhBO0FBWUE7QUFDQSxLQXZCQTs7QUF3QkE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUE1QkE7QUFUQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUJBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMENBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTs7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDZCQUNBLFdBREEs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QSxvRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSwwRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEseUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxnRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx1Rjs7Ozs7OztBQ0FBLGdGOzs7Ozs7O0FDQUEscUY7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLG1EOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLG1FOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHlFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQXNrIGEgUXVlc3Rpb25cIiAvPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJRbi50aXRsZVwiIGhpbnQ9XCJFbnRlciB0aXRsZS4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cIlFuLmRldGFpbHNcIiBoaW50PVwiRW50ZXIgZGV0YWlscy5cIiAvPlxyXG4gICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFza1wiIEB0YXA9XCJvbkFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJhY2tcIiBAdGFwPVwib25CYWNrXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFFuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOlwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6e1xyXG4gICAgICAgICAgICBvbkFkZCgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Rbi50aXRsZSA9PSBcIlwiIHx8IHRoaXMuUW4uZGV0YWlscyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm90aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaXRsZSBhbmQgRGV0YWlscyBhcmUgcmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLkFza1F0bih0aGlzLlFuKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0wLS0tLSBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOb3RpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgUXVlc3Rpb24gaGFzIGJlZW4gYWRkZWQgc3VjY2Vzc2Z1bGx5IF5fXlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Rbi50aXRsZT1cIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUW4uZGV0YWlscz1cIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQmFjaygpe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIG1hcmdpbjogMTU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgICAgPEFjdGlvbkJhciBwYWRkaW5nPVwiMTVcIj5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHdpZHRoPVwiOTQlXCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiID5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIxMFwiLz4tLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmF2YmFyXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luTGVmdD1cIjE1XCIgLz5cblxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hc2sucG5nXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5SaWdodD1cIjE1XCIgQHRhcD1cIkFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvc2lnbi1vdXQucG5nXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5SaWdodD1cIjE1XCIgQHRhcD1cImxvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICBcblxuICAgICAgICAgPFJhZExpc3RWaWV3IHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCIgZm9yPVwiaXRlbSBpbiBsaXN0b2ZyZXF1ZXN0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiB3aWR0aD1cIjk0JVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgbWFyZ2luVG9wPVwiMzBcIiBAcHVsbFRvUmVmcmVzaEluaXRpYXRlZD1cIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGFsaWduSXRlbXM9XCJjZW50ZXJcIiAgYm9yZGVyUmFkaXVzPVwiMTBcIiAgdi1zaGFkb3c9XCIyXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJtaWRkbGVcIiBoZWlnaHQ9XCI3MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjE1XCIgZm9udFNpemU9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3RyaXBIdG1sKGl0ZW0uZGV0YWlscylcIiBjbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCIxNVwiIG1hcmdpblRvcD1cIjEwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIHZlcnRpY2FsQWxpZ25tZW50PVwibWlkZGxlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVwiMTVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgIDwvUmFkTGlzdFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcbiAgICBpbXBvcnQgQXNrUW4gZnJvbSBcIi4vQXNrUW5cIjtcbmNvbnN0IE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSc7XG5jb25zdCBwbGF0Zm9ybU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xuXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RvZnJlcXVlc3Q6IG5ldyBPYnNlcnZhYmxlQXJyYXkoKSxcbiAgICAgICAgICAgICAgICBuYXZiYXI6IFwiV2VsY29tZSBcIisgZ2xvYmFsLnVzZXJEYXRhLnVzZXIuZmlyc3RfbmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkICh7IG9iamVjdCB9KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUHVsbGluZy4uLicpO1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSZXF1ZXN0cygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLS0tMC0tLS0gXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RvZnJlcXVlc3QgPSAgbmV3IE9ic2VydmFibGVBcnJheShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9LGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbih7IGl0ZW0gfSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEFzaygpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEFza1FuLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cmlwSHRtbChzdHIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChzdHI9PT1udWxsKSB8fCAoc3RyPT09JycpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5nZXRSZXF1ZXN0cygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLS0tMC0tLS0gXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RvZnJlcXVlc3QgPSAgbmV3IE9ic2VydmFibGVBcnJheShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9LGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nb1wiIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTUwXCIgc3JjPVwifi9pbWFnZXMvbG9nbzIucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiBjb2xvcj1cIkJsYWNrXCIgdGV4dD1cIkFuc3dlciBMb29wXCI+PC9MYWJlbD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCIgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwicGFzc3dvcmRcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNDb25maXJtUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMlwiIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIkNvbmZpcm0gcGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExhYmVsICp2LXNob3c9XCJpc0xvZ2dpbmdJblwiIHRleHQ9XCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsXCIgQHRhcD1cImZvcmdvdFBhc3N3b3JkKClcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXCIgY2xhc3M9XCJib2xkXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImNhdGFtb3VoQHN0ZC5heGNlbGFjYWRlbXkuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiZ0VNRzhzblhzTlwiLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2dpbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0gXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZyb20gbG9naW4gdnVlIC0tLS0tLS0tLSBcIitnbG9iYWwuYWNjZXNzVG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIldyb25nIFVzZXJuYW1lIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICB9LGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZWdpc3RlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLnJlZ2lzdGVyKHRoaXMudXNlcikgXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIFRSQURFIFpPTkUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWxlcnQobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRSQURFIFpPTkVcIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucGFnZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyO1xuICAgICAgICBoZWlnaHQ6IDkwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0Q1MUExQTtcbiAgICB9XG5cbiAgICAuaW5wdXQtZmllbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgICBwbGFjZWhvbGRlci1jb2xvcjogI0E4QThBODtcbiAgICB9XG5cbiAgICAuaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIG1hcmdpbjogMzAgNSAxNSA1O1xuICAgIH1cblxuICAgIC5sb2dpbi1sYWJlbCB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNBOEE4QTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTY7XG4gICAgfVxuXG4gICAgLnNpZ24tdXAtbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi1lYzAzNjlhYV0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LWVjMDM2OWFhXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXNrUW4udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkFzayBhIFF1ZXN0aW9uXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiRW50ZXIgdGl0bGUuLlwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUW4udGl0bGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5RbiwgXCJ0aXRsZVwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIlFuLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciBkZXRhaWxzLlwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uUW4uZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLlFuLCBcImRldGFpbHNcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJRbi5kZXRhaWxzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQXNrXCIgfSwgb246IHsgdGFwOiBfdm0ub25BZGQgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkJhY2tcIiB9LCBvbjogeyB0YXA6IF92bS5vbkJhY2sgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcGFkZGluZzogXCIxNVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjk0JVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5uYXZiYXIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvYXNrLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5Bc2sgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvc2lnbi1vdXQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcHVsbFRvUmVmcmVzaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI5NCVcIixcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMwXCIsXG4gICAgICAgICAgICBpdGVtczogX3ZtLmxpc3RvZnJlcXVlc3QsXG4gICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAsXG4gICAgICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYm9yZGVyUmFkaXVzOiBcIjEwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcIm1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnN0cmlwSHRtbChpdGVtLmRldGFpbHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjE1XCIsIGJhY2tncm91bmRDb2xvcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1MFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2xvZ28yLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiQmxhY2tcIiwgdGV4dDogXCJBbnN3ZXIgTG9vcFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJldHVyblByZXNzOiBfdm0uZm9jdXNQYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwiZW1haWxcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIiwgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBfdm0uaXNMb2dnaW5nSW4gPyBcImRvbmVcIiA6IFwibmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ29uZmlybSBwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5jb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIkxvZyBJblwiIDogXCJTaWduIFVwXCIsXG4gICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJTaWduIHVwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL3JvdXRlcy9pbmRleC5qc1wiOiBcIi4vcm91dGVzL2luZGV4LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNENTFBMUFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI2MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnk6ZGlzYWJsZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJztcblZ1ZS51c2UoUmFkTGlzdFZpZXcpO1xuaW1wb3J0IE5TVnVlU2hhZG93IGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtc2hhZG93J1xuVnVlLnVzZShOU1Z1ZVNoYWRvdylcblxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcblxuXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5cbi8vIFVuY29tbW1lbnQgdGhlIGZvbGxvd2luZyB0byBzZWUgTmF0aXZlU2NyaXB0LVZ1ZSBvdXRwdXQgbG9nc1xuLy8gVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcblxuY29uc3QgYmFja2VuZFNlcnZpY2UgPSBuZXcgQmFja2VuZFNlcnZpY2UoKTtcblZ1ZS5wcm90b3R5cGUuJGJhY2tlbmRTZXJ2aWNlID0gYmFja2VuZFNlcnZpY2U7XG5cbm5ldyBWdWUoe1xuICByZW5kZXI6IGggPT4gaChcImZyYW1lXCIsIFtoKGJhY2tlbmRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSA/IHJvdXRlcy5ob21lIDogcm91dGVzLmxvZ2luKV0pXG59KS4kc3RhcnQoKTtcblxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Bc2tRbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWMwMzY5YWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXNrUW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Bc2tRbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXNrUW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWMwMzY5YWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImVjMDM2OWFhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcTEVOT1ZPXFxcXFZpZGVvc1xcXFxBeWFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWMwMzY5YWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWMwMzY5YWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWMwMzY5YWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fza1FuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYzAzNjlhYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Bc2tRbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXNrUW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXNrUW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2tRbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2tRbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYzAzNjlhYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2tRbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWMwMzY5YWEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcTEVOT1ZPXFxcXFZpZGVvc1xcXFxBeWFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzI3NDgyYzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxMRU5PVk9cXFxcVmlkZW9zXFxcXEF5YVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZVxufVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXG5cbi8vaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG4vKktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IFwia2lkX1N5WThMWU84TVwiLFxuICAgIGFwcFNlY3JldDogXCIwOTI4Mjk4NWQ3YzU0MGY3YjA3NmE5YzdmZDg4NGM3N1wiXG59KTsqL1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuY29uc3QgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuZ2xvYmFsLmlzVXNlckxvZ2dlZGluID0gZmFsc2U7XG5nbG9iYWwuYWNjZXNzVG9rZW4gPSBudWxsO1xuZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuaXNVc2VyTG9nZ2VkaW47XG4gICAgfVxuXG4gICAgYXN5bmMgbG9naW4odXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dpbmcgaW5cIik7XG4gICAgICAgIFxuXG4gICAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2F5YS9hdXRoL2F1dGhlbnRpY2F0ZVwiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJEZXRhaWxzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlckRhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5pc1VzZXJMb2dnZWRpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwudXNlckRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZXF1ZXN0cygpXG4gICAge1xuICAgICAgICAvKmNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLSBpbiBnZXRyZXF1ZXN0c1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tIFwiICsgZ2xvYmFsLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvdHJhZGV6b25lL2l0ZW1zL3F1b3RlP2ZpZWxkcz1pZCxwcmljZSxzdXBwbGllci5pZCxzdXBwbGllci5zdXBwbGllcl9uYW1lLCBzdXBwbGllci5zdXBwbGllcl9hZGRyZXNzLHNvdXJjaW5nLmlkLCBzb3VyY2luZy5wYXltZW50X21ldGhvZCwgc291cmNpbmcucmVxdWVzdC50aXRsZVwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIisgZ2xvYmFsLmFjY2Vzc1Rva2VuIH1cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLS0tIFwiICsgcmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgLy90aGlzIHJlcXVlc3QgZ2V0cyBpdGVtcyB0aGF0IGJlbG9uZyB0byB0aGUgdXNlciBvbmx5LiBpZiByb2xlcyBhcmUgbm90IHNldCwgeW91IGNhbiB1c2UgdGhpcyAmZmlsdGVyW293bmVyXT1cIitnbG9iYWwudXNlckRhdGEudXNlci5pZCBcbiAgICAgICAgLy9odHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvdHJhZGV6b25lL2l0ZW1zL3JlcXVlc3Q/ZmllbGRzPWlkLHRpdGxlLG93bmVyLmlkLGRlc2NyaXB0aW9uLHJlcXVlc3Rfc3RhdHVzLnN0YXR1cyZmaWx0ZXJbb3duZXJdPVwiK2dsb2JhbC51c2VyRGF0YS51c2VyLmlkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLSBpbiBnZXRyZXF1ZXN0c1wiKTtcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2l0ZW1zL3F1ZXN0aW9ucz9maWVsZHM9aWQsdGl0bGUsb3duZXIuaWQsZGV0YWlsc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tIFwiK3Jlc3VsdC5kYXRhLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgQXNrUXRuKHFubilcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpIEF5YVwiKTtcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2F5YS9pdGVtcy9xdWVzdGlvbnNcIiwgLy8geW91ciBhcGkgdXJsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIisgZ2xvYmFsLmFjY2Vzc1Rva2VuIH0sXG4gICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJwdWJsaXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHFubi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA6IHFubi5kZXRhaWxzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgZ2xvYmFsLmlzVXNlckxvZ2dlZGluID0gZmFsc2U7XG4gICAgICAgIGdsb2JhbC5hY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgICAgIGdsb2JhbC51c2VyRGF0YSA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXIpIHtcbiAgICAgICAgLy9yZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvc3BhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aW9uLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3JkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvbnRlbnQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9kYXRlLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2h0bWwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3QtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BsYWNlaG9sZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJveHktdmlldy1jb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Njcm9sbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWFyY2gtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWdtZW50ZWQtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGltZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUveG1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvd2Vhay1ldmVudC1saXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==