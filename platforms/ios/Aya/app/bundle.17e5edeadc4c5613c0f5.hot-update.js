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
      console.log("hi ya Aya ya Bakara");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanMiXSwibmFtZXMiOlsiT2JzZXJ2YWJsZUFycmF5IiwicmVxdWlyZSIsImdsb2JhbCIsImlzVXNlckxvZ2dlZGluIiwiYWNjZXNzVG9rZW4iLCJ1c2VyRGF0YSIsIkJhY2tlbmRTZXJ2aWNlIiwiaXNMb2dnZWRJbiIsImxvZ2luIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsIm1ldGhvZCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInJlc3VsdCIsInVzZXJEZXRhaWxzIiwidG9rZW4iLCJlcnJvciIsImdldFJlcXVlc3RzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBc2tRdG4iLCJxbm4iLCJzdGF0dXMiLCJ0aXRsZSIsImRldGFpbHMiLCJsb2dvdXQiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHQyxtQkFBTyxDQUFDLHdDQUFELENBQVAsQ0FBa0RELGVBQTFFOztBQUVBRSxNQUFNLENBQUNDLGNBQVAsR0FBd0IsS0FBeEI7QUFDQUQsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLElBQXJCO0FBQ0FGLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQixJQUFsQjtBQUNlLE1BQU1DLGNBQU4sQ0FBcUI7QUFFaENDLFlBQVUsR0FBRztBQUNULFdBQU9MLE1BQU0sQ0FBQ0MsY0FBZDtBQUNIOztBQUVLSyxPQUFOLENBQVlDLElBQVosRUFBa0I7QUFBQTtBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBR0UsYUFBUUMsNENBQUssQ0FBQztBQUFFQyxjQUFNLEVBQUUsTUFBVjtBQUNSLGVBQU8sK0RBREM7QUFDZ0U7QUFDeEVDLFlBQUksRUFBRTtBQUNGQyxlQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FEVjtBQUVGQyxrQkFBUSxFQUFFUCxJQUFJLENBQUNPO0FBRmI7QUFGRSxPQUFELENBQUwsQ0FNQ0MsSUFORCxDQU1NQyxNQUFNLElBQUk7QUFDZCxZQUFJQyxXQUFXLEdBQUcsSUFBbEI7O0FBRUEsWUFBR0QsTUFBTSxDQUFDSixJQUFQLENBQVlBLElBQVosQ0FBaUJNLEtBQXBCLEVBQ0E7QUFDSWxCLGdCQUFNLENBQUNHLFFBQVAsR0FBa0JhLE1BQU0sQ0FBQ0osSUFBUCxDQUFZQSxJQUE5QjtBQUNBWixnQkFBTSxDQUFDRSxXQUFQLEdBQXFCYyxNQUFNLENBQUNKLElBQVAsQ0FBWUEsSUFBWixDQUFpQk0sS0FBdEM7QUFDQWxCLGdCQUFNLENBQUNDLGNBQVAsR0FBd0IsSUFBeEI7QUFFSDs7QUFDRCxZQUFHRCxNQUFNLENBQUNHLFFBQVAsSUFBbUIsSUFBdEIsRUFDQTtBQUNJLGlCQUFPLElBQVA7QUFDSCxTQUhELE1BSUk7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSixPQXZCQyxFQXVCQ2dCLEtBQUssSUFBSTtBQUNSWCxlQUFPLENBQUNXLEtBQVIsQ0FBY0EsS0FBZDtBQUNILE9BekJDLENBQVIsQ0FKWSxDQStCZDtBQS9CYztBQWdDakI7O0FBRUtDLGFBQU4sR0FDQTtBQUFBO0FBQ0k7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0FaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0EsYUFBUUMsNENBQUssQ0FBQztBQUFFQyxjQUFNLEVBQUUsS0FBVjtBQUNOLGVBQU8sOEZBREQ7QUFDaUc7QUFDdkdVLGVBQU8sRUFBRTtBQUFFQyx1QkFBYSxFQUFFLFlBQVd0QixNQUFNLENBQUNFO0FBQW5DO0FBRkgsT0FBRCxDQUFMLENBR0dhLElBSEgsQ0FHUUMsTUFBTSxJQUFJO0FBRWQ7QUFDQTtBQUNBLGVBQU9BLE1BQU0sQ0FBQ0osSUFBUCxDQUFZQSxJQUFuQjtBQUNILE9BUkQsRUFRR08sS0FBSyxJQUFJO0FBQ1JYLGVBQU8sQ0FBQ1csS0FBUixDQUFjQSxLQUFkO0FBQ0gsT0FWRCxDQUFSO0FBakJKO0FBNEJDOztBQUNLSSxRQUFOLENBQWFDLEdBQWIsRUFDQTtBQUFBO0FBQ0VoQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNFLGFBQVFDLDRDQUFLLENBQUM7QUFBRUMsY0FBTSxFQUFFLE1BQVY7QUFDTixlQUFPLDZEQUREO0FBQ2dFO0FBQ3RFVSxlQUFPLEVBQUU7QUFBRUMsdUJBQWEsRUFBRSxZQUFXdEIsTUFBTSxDQUFDRTtBQUFuQyxTQUZIO0FBR05VLFlBQUksRUFBQztBQUNEYSxnQkFBTSxFQUFFLFdBRFA7QUFFREMsZUFBSyxFQUFFRixHQUFHLENBQUNFLEtBRlY7QUFHREMsaUJBQU8sRUFBR0gsR0FBRyxDQUFDRztBQUhiO0FBSEMsT0FBRCxDQUFMLENBUUdaLElBUkgsQ0FRUUMsTUFBTSxJQUFJO0FBQ2Q7QUFDQSxlQUFPQSxNQUFNLENBQUNKLElBQVAsQ0FBWUEsSUFBbkI7QUFDSCxPQVhELEVBV0dPLEtBQUssSUFBSTtBQUNSWCxlQUFPLENBQUNXLEtBQVIsQ0FBY0EsS0FBZDtBQUNILE9BYkQsQ0FBUjtBQUZKO0FBZ0JDOztBQUdEUyxRQUFNLEdBQUc7QUFDTDVCLFVBQU0sQ0FBQ0MsY0FBUCxHQUF3QixLQUF4QjtBQUNBRCxVQUFNLENBQUNFLFdBQVAsR0FBcUIsSUFBckI7QUFDQUYsVUFBTSxDQUFDRyxRQUFQLEdBQWtCLElBQWxCO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7O0FBRUQwQixVQUFRLENBQUN0QixJQUFELEVBQU8sQ0FDWDtBQUNIOztBQW5HK0IsQyIsImZpbGUiOiJidW5kbGUuMTdlNWVkZWFkYzRjNTYxM2MwZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXG5cbi8vaW1wb3J0ICogYXMgS2ludmV5IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG4vKktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IFwia2lkX1N5WThMWU84TVwiLFxuICAgIGFwcFNlY3JldDogXCIwOTI4Mjk4NWQ3YzU0MGY3YjA3NmE5YzdmZDg4NGM3N1wiXG59KTsqL1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuY29uc3QgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuZ2xvYmFsLmlzVXNlckxvZ2dlZGluID0gZmFsc2U7XG5nbG9iYWwuYWNjZXNzVG9rZW4gPSBudWxsO1xuZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuaXNVc2VyTG9nZ2VkaW47XG4gICAgfVxuXG4gICAgYXN5bmMgbG9naW4odXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dpbmcgaW5cIik7XG4gICAgICAgIFxuXG4gICAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2F5YS9hdXRoL2F1dGhlbnRpY2F0ZVwiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJEZXRhaWxzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlckRhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5pc1VzZXJMb2dnZWRpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwudXNlckRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZXF1ZXN0cygpXG4gICAge1xuICAgICAgICAvKmNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLSBpbiBnZXRyZXF1ZXN0c1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tJiYmJi0tIFwiICsgZ2xvYmFsLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvdHJhZGV6b25lL2l0ZW1zL3F1b3RlP2ZpZWxkcz1pZCxwcmljZSxzdXBwbGllci5pZCxzdXBwbGllci5zdXBwbGllcl9uYW1lLCBzdXBwbGllci5zdXBwbGllcl9hZGRyZXNzLHNvdXJjaW5nLmlkLCBzb3VyY2luZy5wYXltZW50X21ldGhvZCwgc291cmNpbmcucmVxdWVzdC50aXRsZVwiLFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIisgZ2xvYmFsLmFjY2Vzc1Rva2VuIH1cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLS0tIFwiICsgcmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgLy90aGlzIHJlcXVlc3QgZ2V0cyBpdGVtcyB0aGF0IGJlbG9uZyB0byB0aGUgdXNlciBvbmx5LiBpZiByb2xlcyBhcmUgbm90IHNldCwgeW91IGNhbiB1c2UgdGhpcyAmZmlsdGVyW293bmVyXT1cIitnbG9iYWwudXNlckRhdGEudXNlci5pZCBcbiAgICAgICAgLy9odHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvdHJhZGV6b25lL2l0ZW1zL3JlcXVlc3Q/ZmllbGRzPWlkLHRpdGxlLG93bmVyLmlkLGRlc2NyaXB0aW9uLHJlcXVlc3Rfc3RhdHVzLnN0YXR1cyZmaWx0ZXJbb3duZXJdPVwiK2dsb2JhbC51c2VyRGF0YS51c2VyLmlkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLSBpbiBnZXRyZXF1ZXN0c1wiKTtcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYXlhL2l0ZW1zL3F1ZXN0aW9ucz9maWVsZHM9aWQsdGl0bGUsb3duZXIuaWQsZGV0YWlsc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tIFwiK3Jlc3VsdC5kYXRhLmRhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgQXNrUXRuKHFubilcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpIHlhIEF5YSB5YSBCYWthcmFcIik7XG4gICAgICAgIHJldHVybiAgYXhpb3MoeyBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy9heWEvaXRlbXMvcXVlc3Rpb25zXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIrIGdsb2JhbC5hY2Nlc3NUb2tlbiB9LFxuICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwicHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBxbm4udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMgOiBxbm4uZGV0YWlsc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGdsb2JhbC5pc1VzZXJMb2dnZWRpbiA9IGZhbHNlO1xuICAgICAgICBnbG9iYWwuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgICBnbG9iYWwudXNlckRhdGEgPSBudWxsO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyKSB7XG4gICAgICAgIC8vcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=