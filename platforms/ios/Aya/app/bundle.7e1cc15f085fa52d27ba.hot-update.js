webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanMiXSwibmFtZXMiOlsiT2JzZXJ2YWJsZUFycmF5IiwicmVxdWlyZSIsImdsb2JhbCIsImlzVXNlckxvZ2dlZGluIiwiYWNjZXNzVG9rZW4iLCJ1c2VyRGF0YSIsIkJhY2tlbmRTZXJ2aWNlIiwiaXNMb2dnZWRJbiIsImxvZ2luIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIm1ldGhvZCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInJlc3VsdCIsInVzZXJEZXRhaWxzIiwidG9rZW4iLCJlcnJvciIsImdldFJlcXVlc3RzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBc2tRdG4iLCJxbm4iLCJzdGF0dXMiLCJ0aXRsZSIsImRldGFpbHMiLCJsb2dvdXQiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHQyxtQkFBTyxDQUFDLHdDQUFELENBQVAsQ0FBa0RELGVBQTFFOztBQUVBRSxNQUFNLENBQUNDLGNBQVAsR0FBd0IsS0FBeEI7QUFDQUQsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLElBQXJCO0FBQ0FGLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixJQUFsQjtBQUNlLE1BQU1DLGNBQU4sQ0FBcUI7QUFFaENDLFlBQVUsR0FBRztBQUNULFdBQU9MLE1BQU0sQ0FBQ0MsY0FBZDtBQUNIOztBQUVLSyxPQUFOLENBQVlDLElBQVosRUFBa0I7QUFBQTtBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBR0UsYUFBUUMsNENBQUssQ0FBQztBQUFFQyxjQUFNLEVBQUUsTUFBVjtBQUNSLGVBQU8sK0RBREM7QUFDZ0U7QUFDeEVDLFlBQUksRUFBRTtBQUNGQyxlQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEVjtBQUVGQyxrQkFBUSxFQUFFUCxJQUFJLENBQUNPO0FBRmI7QUFGRSxPQUFELENBQUwsQ0FNQ0MsSUFORCxDQU1NQyxNQUFNLElBQUk7QUFDZCxZQUFJQyxXQUFXLEdBQUcsSUFBbEI7O0FBRUEsWUFBR0QsTUFBTSxDQUFDSixJQUFQLENBQVlBLElBQVosQ0FBaUJNLEtBQXBCLEVBQ0E7QUFDSWxCLGdCQUFNLENBQUNHLFFBQVAsR0FBa0JhLE1BQU0sQ0FBQ0osSUFBUCxDQUFZQSxJQUE5QjtBQUNBWixnQkFBTSxDQUFDRSxXQUFQLEdBQXFCYyxNQUFNLENBQUNKLElBQVAsQ0FBWUEsSUFBWixDQUFpQk0sS0FBdEM7QUFDQWxCLGdCQUFNLENBQUNDLGNBQVAsR0FBd0IsSUFBeEI7QUFFSDs7QUFDRCxZQUFHRCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsSUFBdEIsRUFDQTtBQUNJLGlCQUFPLElBQVA7QUFDSCxTQUhELE1BSUk7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSixPQXZCQyxFQXVCQ2dCLEtBQUssSUFBSTtBQUNSWCxlQUFPLENBQUNXLEtBQVIsQ0FBY0EsS0FBZDtBQUNILE9BekJDLENBQVIsQ0FKWSxDQStCZDtBQS9CYztBQWdDakI7O0FBRUtDLGFBQU4sR0FDQTtBQUFBO0FBQ0k7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0FaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0EsYUFBUUMsNENBQUssQ0FBQztBQUFFQyxjQUFNLEVBQUUsS0FBVjtBQUNOLGVBQU8sOEZBREQ7QUFDaUc7QUFDdkdVLGVBQU8sRUFBRTtBQUFFQyx1QkFBYSxFQUFFLFlBQVd0QixNQUFNLENBQUNFO0FBQW5DO0FBRkgsT0FBRCxDQUFMLENBR0dhLElBSEgsQ0FHUUMsTUFBTSxJQUFJO0FBRWQ7QUFDQTtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0osSUFBUCxDQUFZQSxJQUFuQjtBQUNILE9BUkQsRUFRR08sS0FBSyxJQUFJO0FBQ1JYLGVBQU8sQ0FBQ1csS0FBUixDQUFjQSxLQUFkO0FBQ0gsT0FWRCxDQUFSO0FBakJKO0FBNEJDOztBQUNLSSxRQUFOLENBQWFDLEdBQWIsRUFDQTtBQUFBO0FBQ0VoQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0UsYUFBUUMsNENBQUssQ0FBQztBQUFFQyxjQUFNLEVBQUUsTUFBVjtBQUNOLGVBQU8sNkRBREQ7QUFDZ0U7QUFDdEVVLGVBQU8sRUFBRTtBQUFFQyx1QkFBYSxFQUFFLFlBQVd0QixNQUFNLENBQUNFO0FBQW5DLFNBRkg7QUFHTlUsWUFBSSxFQUFDO0FBQ0RhLGdCQUFNLEVBQUUsV0FEUDtBQUVEQyxlQUFLLEVBQUVGLEdBQUcsQ0FBQ0UsS0FGVjtBQUdEQyxpQkFBTyxFQUFHSCxHQUFHLENBQUNHO0FBSGI7QUFIQyxPQUFELENBQUwsQ0FRR1osSUFSSCxDQVFRQyxNQUFNLElBQUk7QUFDZDtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0osSUFBUCxDQUFZQSxJQUFuQjtBQUNILE9BWEQsRUFXR08sS0FBSyxJQUFJO0FBQ1JYLGVBQU8sQ0FBQ1csS0FBUixDQUFjQSxLQUFkO0FBQ0gsT0FiRCxDQUFSO0FBRko7QUFnQkM7O0FBR0RTLFFBQU0sR0FBRztBQUNMNUIsVUFBTSxDQUFDQyxjQUFQLEdBQXdCLEtBQXhCO0FBQ0FELFVBQU0sQ0FBQ0UsV0FBUCxHQUFxQixJQUFyQjtBQUNBRixVQUFNLENBQUNHLFFBQVAsR0FBa0IsSUFBbEI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFRDBCLFVBQVEsQ0FBQ3RCLElBQUQsRUFBTyxDQUNYO0FBQ0g7O0FBbkcrQixDIiwiZmlsZSI6ImJ1bmRsZS43ZTFjYzE1ZjA4NWZhNTJkMjdiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuLy9pbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbi8qS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfU3lZOExZTzhNXCIsXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcbn0pOyovXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5jb25zdCBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5nbG9iYWwuaXNVc2VyTG9nZ2VkaW4gPSBmYWxzZTtcbmdsb2JhbC5hY2Nlc3NUb2tlbiA9IG51bGw7XG5nbG9iYWwudXNlckRhdGEgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5pc1VzZXJMb2dnZWRpbjtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dpbih1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgXG5cbiAgICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2F1dGgvYXV0aGVudGljYXRlXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckRldGFpbHMgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC51c2VyRGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuYWNjZXNzVG9rZW4gPSByZXN1bHQuZGF0YS5kYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmlzVXNlckxvZ2dlZGluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbC51c2VyRGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFJlcXVlc3RzKClcbiAgICB7XG4gICAgICAgIC8qY29uc29sZS5sb2coXCItLS0tJiYmJi0tIGluIGdldHJlcXVlc3RzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0mJiYmLS0gXCIgKyBnbG9iYWwuYWNjZXNzVG9rZW4pO1xuICAgICAgICBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy90cmFkZXpvbmUvaXRlbXMvcXVvdGU/ZmllbGRzPWlkLHByaWNlLHN1cHBsaWVyLmlkLHN1cHBsaWVyLnN1cHBsaWVyX25hbWUsIHN1cHBsaWVyLnN1cHBsaWVyX2FkZHJlc3Msc291cmNpbmcuaWQsIHNvdXJjaW5nLnBheW1lbnRfbWV0aG9kLCBzb3VyY2luZy5yZXF1ZXN0LnRpdGxlXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tLS0gXCIgKyByZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTsqL1xuICAgICAgICAvL3RoaXMgcmVxdWVzdCBnZXRzIGl0ZW1zIHRoYXQgYmVsb25nIHRvIHRoZSB1c2VyIG9ubHkuIGlmIHJvbGVzIGFyZSBub3Qgc2V0LCB5b3UgY2FuIHVzZSB0aGlzICZmaWx0ZXJbb3duZXJdPVwiK2dsb2JhbC51c2VyRGF0YS51c2VyLmlkIFxuICAgICAgICAvL2h0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy90cmFkZXpvbmUvaXRlbXMvcmVxdWVzdD9maWVsZHM9aWQsdGl0bGUsb3duZXIuaWQsZGVzY3JpcHRpb24scmVxdWVzdF9zdGF0dXMuc3RhdHVzJmZpbHRlcltvd25lcl09XCIrZ2xvYmFsLnVzZXJEYXRhLnVzZXIuaWRcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tIGluIGdldHJlcXVlc3RzXCIpO1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy9heWEvaXRlbXMvcXVlc3Rpb25zP2ZpZWxkcz1pZCx0aXRsZSxvd25lci5pZCxkZXRhaWxzXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIrIGdsb2JhbC5hY2Nlc3NUb2tlbiB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0gXCIrcmVzdWx0LmRhdGEuZGF0YS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBBc2tRdG4ocW5uKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGkgQXlhXCIpO1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2l0ZW1zL3F1ZXN0aW9uc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcInB1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcW5uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzIDogcW5uLmRldGFpbHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBnbG9iYWwuaXNVc2VyTG9nZ2VkaW4gPSBmYWxzZTtcbiAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgICAgZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSk7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9