//
import axios from "axios";
import * as http from "http";
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

global.isUserLoggedin = false;
global.accessToken = null;
global.userData = null;
global.Registeraccess = null
global.selectedQn = null

export default class BackendService {

    isLoggedIn() {
        return global.isUserLoggedin;
    }

    async login(user) {
          return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/aya/auth/authenticate", 
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
    }

    async getRequests()
    {
        console.log("----&&&&-- in getrequests");
        return  axios({ method: "GET", 
                "url": "https://thebaselabs.com/directus/public/aya/items/questions?fields=id,title,owner.id,details",
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async AskQtn(qnn)
    {
      console.log("hi Aya");
        return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/aya/items/questions", 
                headers: { Authorization: "Bearer "+ global.accessToken },
                data:{
                    status: "published",
                    title: qnn.title,
                    details : qnn.details
                }
                }).then(result => {
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async Qndetails()
    {
        return  axios({ method: "GET", 
                "url": "https://thebaselabs.com/directus/public/aya/items/answers?filter[qn] ="+global.selectedQn+
                "&fields=id,ansdetail,owner.first_name,owner.last_name, created_on,qn.title,qn.details,qn.owner.first_name,qn.owner.last_name,qn.created_on", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {
                    console.log(result.data.data);
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    
    async getQn()
    {
        return  axios({ method: "GET", 
                "url": 'https://thebaselabs.com/directus/public/aya/items/questions/'
                +global.selectedQn+'?fields=id,details,title,created_on,owner.id,owner.first_name,owner.last_name', // your api url
                headers: { Authorization: "Bearer "+ global.accessToken }
                }).then(result => {
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
    async postAnswer(answer)
    {
        
        return  axios({ method: "POST", 
                "url": "https://thebaselabs.com/directus/public/aya/items/answers", // your api url
                headers: { Authorization: "Bearer "+ global.accessToken },
                data: {
                    status:"published",
                    ansdetail: answer,
                    qn: global.selectedQn
                }
                }).then(result => {
                    return result.data.data;
                }, error => {
                    console.error(error);
                });
    }
   
    async toRegisteraccess(){
        return  axios({ method: "POST", 
        "url": "https://thebaselabs.com/directus/public/aya/auth/authenticate", 
        data: {
            email: "catamouh@std.axcelacademy.co.uk",
            password: "gEMG8snXsN"
          }
        }).then(result => {
            var userDetails = null;

            if(result.data.data.token)
            {
               global.Registeraccess = result.data.data.token;
            }
            else{
                return false;
            }
        }, error => {
            console.error(error);
        });

    }

    async Register(user){
        
        return  axios({ method: "POST", 
          "url": "https://thebaselabs.com/directus/public/aya/users", // your api url
          headers: { Authorization: `Bearer ${global.Registeraccess}`},
          data:{
                first_name: user.fn,
                last_name: user.ln,
                email: user.email,
                password: user.password,
                role: 3,
                status: "active"
           }
          }).then(result=>{
              return result.data.data;
          },error => {
              console.error(error);
          });
    }
    logout() {
        global.isUserLoggedin = false;
        global.accessToken = null;
        global.userData = null;
        return true;
    }

   
}

