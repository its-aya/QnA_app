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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Bc2tRbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BLEdBUkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLG1EQUZBO0FBR0E7QUFIQTtBQUtBLE9BTkEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsb0VBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQTtBQUNBLFNBVEEsRUFTQTtBQUNBO0FBQ0EsU0FYQTtBQVlBO0FBQ0EsS0F2QkE7O0FBd0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBNUJBO0FBVEEsRyIsImZpbGUiOiJidW5kbGUuMjU1YjAxNWM0MzlkNTRiNDI1ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJBc2sgYSBRdWVzdGlvblwiIC8+XHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhvbWUtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cIlFuLnRpdGxlXCIgaGludD1cIkVudGVyIHRpdGxlLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwiUW4uZGV0YWlsc1wiIGhpbnQ9XCJFbnRlciBkZXRhaWxzLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQXNrXCIgQHRhcD1cIm9uQWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQmFja1wiIEB0YXA9XCJvbkJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgUW46IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6XCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIG9uQWRkKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLlFuLnRpdGxlID09IFwiXCIgfHwgdGhpcy5Rbi5kZXRhaWxzID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOb3RpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRpdGxlIGFuZCBEZXRhaWxzIGFyZSByZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UuQXNrUXRuKHRoaXMuUW4pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgLS0tLTAtLS0tIFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5vdGljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBRdWVzdGlvbiBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkgXl9eXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlFuLnRpdGxlPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Rbi5kZXRhaWxzPVwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CYWNrKCl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5ob21lLXBhbmVsIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XHJcbiAgICAgICAgbWFyZ2luOiAxNTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xyXG4gICAgfVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=