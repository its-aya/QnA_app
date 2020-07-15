<template>
    <Page>
        <ActionBar padding="15">
            <GridLayout width="94%">
                <StackLayout orientation="horizontal"  horizontalAlignment="left" >
                    <Image src="~/images/logo2.png" width="35" height="35" verticalAlignment="center" marginRight="0">
                    </Image>
                    <Label text="Add an Answer" fontSize="20" verticalAlignment="center" marginLeft="15" />
                </StackLayout>
                <StackLayout orientation="horizontal" horizontalAlignment="right" >
                <Button color="White" text="Back" @tap="Back" backgroundColor="#9779E0" marginTop="0" fontSize="12" style="width:60;height:35;border-width:1;border-color:White;border-radius:10"/>
                </StackLayout>
            </GridLayout>
        </ActionBar>
        <ScrollView>
            <StackLayout class="home-panel">
                <TextView loaded="textviewloaded" hint="Please type your answer" updateTextTrigger="textChanged" v-model="answer" editable="true" style=" height:300; border-width:1;border-color:Blue;border-radius:10"/>
                <Button text="Answer" @tap="postans" fontSize="15" marginTop="30" backgroundColor="#4E6BF5" color="White" style="width:100;height:40;border-radius:10" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Home from "./Home";
    import ShowQn from "./ShowQn";


    export default {
         data() {
            return {
                
                answer:""
            };
        },
        methods: {
            postans(){
                if(this.answer == "" ){
                          alert({
                            title: "Answer Loop",
                            message: "Please type your answer",
                            okButtonText: "ok"
                            });
                }
                else{
                 this.$backendService.postAnswer(this.answer).then(result => {
                     alert({
                        title: "",
                        message: "your answer has been posted",
                        okButtonText: "ok"
                        });

                        this.answer = "";
                    },error => {
                        console.log(error);
                    });
                }
            },
            Back() {
               this.$navigateTo(ShowQn, {
                    clearHistory: true
                });
            }
        },

       
    };
</script>

<style scoped>

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
   
</style>