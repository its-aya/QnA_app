// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

//import * as Kinvey from "kinvey-nativescript-sdk";

/*Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});*/
import axios from "axios";
import * as http from "http";
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

global.isUserLoggedin = false;
global.accessToken = null;
global.userData = null;
export default class BackendService {

    isLoggedIn() {
        return global.isUserLoggedin;
    }

    async login(user) {
        console.log("logging in");
        

          return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/aya/auth/authenticate", // your api url
                data: {
                    email: user.email,
                    password: user.password
                  }
                }).then(result => {
                    var userDetails = null;

                    if(result.data.data.token)
                    {
                        global.userData = result.data.data;
                        global.accessToken = result.data.data.token;
                        global.isUserLoggedin = true;
                        
                    }
                    if(global.userData != null)
                    {
                        return true;
                    }
                    else{
                        return false;
                    }
                }, error => {
                    console.error(error);
                });
        
        //return Kinvey.User.login(user.email, user.password);
    }

    async getRequests()
    {
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
        return  axios({ method: "GET", 
                "url": "https://thebaselabs.com/directus/public/aya/items/questions?fields=id,title,owner.id,details", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {

                    //console.log("------ "+result.data.data.length);
                    //console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async AskQtn(qnn)
    {
      console.log("hi Aya");
        return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/aya/items/questions", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken },
                data:{
                    status: "published",
                    title: qnn.title,
                    details : qnn.details
                }
                }).then(result => {
                    // console.log(result);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }


    logout() {
        global.isUserLoggedin = false;
        global.accessToken = null;
        global.userData = null;
        return true;
    }

    register(user) {
        //return Kinvey.User.signup({ username: user.email, password: user.password });
    }
}

