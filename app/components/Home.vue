<template>
    <Page>
          <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
                    <Image src="~/images/logo2.png" width="25" height="25" verticalAlignment="center" marginRight="10"/>
                    <Label :text="navbar" fontSize="20" verticalAlignment="center" marginLeft="15" />

                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                  <Image src="~/images/ask.png" width="35" height="35" verticalAlignment="center" marginRight="15" @tap="Ask">
                    </Image>
                    <Image src="~/images/sign-out.png" width="20" height="20" verticalAlignment="center" marginRight="15" @tap="logout">
                    </Image>

                    
                </StackLayout>
            </GridLayout>
        </ActionBar>

         <RadListView pullToRefresh="true" for="item in listofrequest" @itemTap="onItemTap" width="94%" horizontalAlignment="center" separatorColor="transparent" marginTop="30" @pullToRefreshInitiated="onPullToRefreshInitiated">
            <v-template>
                    <StackLayout orientation="vertical">
                    <GridLayout alignItems="center"  borderRadius="10"  v-shadow="2"> 
                        <StackLayout  orientation="vertical" verticalAlignment="middle" height="70"
                            backgroundColor="">
                            <Label :text="item.title" class=""
                                marginLeft="15" fontSize="20" />
                            <Label :text="stripHtml(item.details)" class=""
                                marginLeft="15" marginTop="10" />
                        </StackLayout>
                        <Label  class=""
                                marginRight="15" horizontalAlignment="right" verticalAlignment="middle"/>
                    </GridLayout>
                     <StackLayout height="15" backgroundColor=""/>
                    </StackLayout>
            </v-template>
        </RadListView>
    </Page>
</template>

<script>
    import Login from "./Login";
    import AskQn from "./AskQn";
    import ShowQn from "./ShowQn";

const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
import RadListView from 'nativescript-ui-listview/vue';
const platformModule = require("tns-core-modules/platform");


    export default {
        data() {
            return {
                listofrequest: new ObservableArray(),
                navbar: "Welcome "+ global.userData.user.first_name
            };
        },
        methods: {
            onPullToRefreshInitiated ({ object }) {
            // console.log('Pulling...');
            this.$nextTick(() => {
                this.$backendService
                    .getRequests()
                    .then(result => {
                       this.listofrequest =  new ObservableArray(result);
                    },error => {
                        console.log(error);
                    });
                object.notifyPullToRefreshFinished();
            });
            },
            onItemTap: function({ item }) {
                console.log(item.id);
                global.selectedQn = item.id;
                this.$navigateTo(ShowQn, {
                    clearHistory: true
                });
            },
            logout() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            },
            Ask() {
                
                this.$navigateTo(AskQn, {
                    clearHistory: true
                });
            },
            stripHtml(str)
            {
                if ((str===null) || (str===''))
                    return false;
                else
                str = str.toString();
                return str.replace(/<[^>]*>/g, '');
            }
        },
        mounted(){
            this.$backendService
                    .getRequests()
                    .then(result => {
                       this.listofrequest =  new ObservableArray(result);
                    },error => {
                        console.log(error);
                    });
        },
    };
</script>

<style>
</style>
