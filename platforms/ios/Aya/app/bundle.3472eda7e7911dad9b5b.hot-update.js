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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Bc2tRbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLG1EQUZBO0FBR0E7QUFIQTtBQUtBLE9BTkEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsb0VBRkE7QUFHQTtBQUhBO0FBS0EsU0FQQSxFQU9BO0FBQ0E7QUFDQSxTQVRBO0FBVUE7QUFDQSxLQXJCQTs7QUFzQkE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUExQkE7QUFUQSxHIiwiZmlsZSI6ImJ1bmRsZS4zNDcyZWRhN2U3OTExZGFkOWI1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFzayBhIFF1ZXN0aW9uXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwiUW4udGl0bGVcIiBoaW50PVwiRW50ZXIgdGl0bGUuLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJRbi5kZXRhaWxzXCIgaGludD1cIkVudGVyIGRldGFpbHMuXCIgLz5cclxuICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBc2tcIiBAdGFwPVwib25BZGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCYWNrXCIgQHRhcD1cIm9uQmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBRbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczpcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgb25BZGQoKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuUW4udGl0bGUgPT0gXCJcIiB8fCB0aGlzLlFuLmRldGFpbHMgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vdGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGl0bGUgYW5kIERldGFpbHMgYXJlIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5Bc2tRdG4odGhpcy5RbikudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAtLS0tMC0tLS0gXCIgKyByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTm90aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIFF1ZXN0aW9uIGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseSBeX15cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQmFjaygpe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIG1hcmdpbjogMTU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9