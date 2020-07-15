<template >
    <Page >
          <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0" >
                    </Image>
                    <Label text="Question" fontSize="20" verticalAlignment="center" marginLeft="0" />
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                <Button color="White" text="Back" @tap="Back" backgroundColor="#9779E0" marginTop="0" fontSize="12" style="width:60;height:35;border-width:1;border-color:White;border-radius:10"/>
                </StackLayout>
            </GridLayout>
           </ActionBar>
            <ScrollView>
                        

                    <StackLayout >
                <Button color="White" text="Answer" @tap="toAnswer" backgroundColor="#79D7E0" marginLeft="240" marginTop="10" fontSize="12"  style="width:80;height:35;border-width:1;border-color:White;border-radius:10"/>

                            <Label color="Black" fontSize="25" marginLeft="5" marginTop="10" marginRight="5"  textWrap="true" :text="qn.title" 
                        fontWeight="bold" /> 
                        <Label textWrap="true" color="Black" marginTop="5" fontStyle="italic" marginLeft="190" >
                            <FormattedString>
                                <Span text="By: " />
                                <Span :text="qn.user" style="color: Blue"/>
                            </FormattedString>
                        </Label>
                        <Label textWrap="true" color="Black" marginTop="5" fontStyle="italic" marginLeft="200" >
                            <FormattedString>
                                <Span text="Asked on: " />
                                <Span :text="qn.date" style="color: Blue" />
                            </FormattedString>
                        </Label>
                        <Label color="Black" fontSize="14" marginTop="15" marginLeft="5" marginRight="5"  textWrap="true" :text="qn.details" 
                        /> 
                    <StackLayout class=""></StackLayout>
                    <StackLayout marginLeft="5" marginRight="5">
                        <RadListView   for="item in answers"   horizontalAlignment="center" separatorColor="transparent" marginTop="15" marginLeft="10" marginRight="10" >
                        <v-template>
                                <StackLayout orientation="vertical">
                                <GridLayout alignItems="center"  borderRadius="10"  v-shadow="2"> 
                                    <StackLayout  orientation="vertical"  verticalAlignment="middle" 
                                        backgroundColor="" style="border-width:1;border-color:Blue;border-radius:10" >
                                          <Label textWrap="true" marginTop="5" fontStyle="italic" marginLeft="160" >
                            <FormattedString>
                                <Span text="By: " />
                                <Span :text="item.owner.first_name+' '+item.owner.last_name" style="color: Blue" />
                            </FormattedString>
                        </Label>
                        <Label textWrap="true" marginTop="5" fontStyle="italic" marginLeft="160" >
                            <FormattedString>
                                <Span text="Asked on: " />
                                <Span :text="item.created_on" style="color: Blue" />
                            </FormattedString>
                               </Label>
                                        <Label textWrap="true" color="Black" :text="item.ansdetail" class=""
                                            marginLeft="15" fontSize="15" marginBottom="10"/>
                                    </StackLayout>
                                </GridLayout>
                                <StackLayout height="15" backgroundColor=""/>
                                </StackLayout>
                        </v-template>
                    </RadListView>  
                     </StackLayout>
            
            </StackLayout>
        </ScrollView>
        
    </Page>
</template>
<script>
    import Home from "./Home";
    import Ans from "./Ans";


const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
import RadListView from 'nativescript-ui-listview/vue';
const platformModule = require("tns-core-modules/platform");
    export default {
         data() {
            return {
                qn: {
                    user:"",
                    date:"",
                    title:"",
                    details:""
                },
                id: global.selectedQn,
                answers: new ObservableArray(),
            };
        },
        mounted(){
            this.$backendService.Qndetails().then(result=>{
                if(result.length !=0){
                 this.answers =  new ObservableArray(result);
                  this.qn.user = result[0].owner.first_name + " " + result[0].owner.last_name;
                this.qn.title = result[0].qn.title;
                this.qn.date = result[0].qn.created_on;
                this.qn.details = result[0].qn.details;
                }
                else{
                this.$backendService.getQn().then(result=>{
                    this.qn.title = result.title;
                    this.qn.details = result.details;
                    this.qn.user = result.owner.first_name +" "+ result.owner.last_name;
                    this.qn.date = result.created_on;
                    
                     
                // console.log(this.ques);
                },error=>{
                    console.log(error);
                });
                }

            },error=>{
                console.log(error);
            });
            
        },
        methods: {
          toAnswer(){
               this.$navigateTo(Ans, {
                    clearHistory: true
                });
          },
          Back(){
               this.$navigateTo(Home, {
                    clearHistory: true
                });
          }
        },

       
    };
</script>