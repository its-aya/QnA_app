webpackHotUpdate("bundle",{

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
      if (this.Qn.title == "" || this.Qn.details == "") {} else {
        this.$backendService.AskQtn(this.Qn).then(result => {
          console.log(" ----0---- " + result);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Bc2tRbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBUkE7O0FBU0E7QUFDQTtBQUNBLHlEQUVBLENBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUE7QUFDQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBWkE7O0FBYUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFqQkE7QUFUQSxHIiwiZmlsZSI6ImJ1bmRsZS5lNmM4M2M0NzM0YTk5NDhhOGZlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFzayBhIFF1ZXN0aW9uXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwiUW4udGl0bGVcIiBoaW50PVwiRW50ZXIgdGl0bGUuLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJRbi5kZXRhaWxzXCIgaGludD1cIkVudGVyIGRldGFpbHMuXCIgLz5cclxuICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBc2tcIiBAdGFwPVwib25BZGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCYWNrXCIgQHRhcD1cIm9uQmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBRbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgb25BZGQoKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUW4udGl0bGUgPT0gXCJcIiB8fCB0aGlzLlFuLmRldGFpbHMgPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLkFza1F0bih0aGlzLlFuKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0wLS0tLSBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CYWNrKCl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5ob21lLXBhbmVsIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgbWFyZ2luOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgfVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=