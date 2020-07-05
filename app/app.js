import Vue from "nativescript-vue";
import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);
import NSVueShadow from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

import routes from "./routes";
import BackendService from "./services/backend-service";


import * as http from "http";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

new Vue({
  render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
}).$start();

