<template>
    <Page>
        <ActionBar title="Ask a Question" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->

                <TextField v-model="Qn.title" hint="Enter title.." />
                <TextField v-model="Qn.details" hint="Enter details." />
                 <Button text="Ask" @tap="onAdd" />
                  <Button text="Back" @tap="onBack" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Home from "./Home";
    export default {
        data() {
            return {
                Qn: {
                    title:"",
                    details:""
                }
            };
        },
        methods:{
            onAdd(){
                if(this.Qn.title == "" || this.Qn.details == ""){
                    alert({
                    title: "Notice",
                    message: "Title and Details are required",
                    okButtonText: "Ok"
                    });
                }
                else{
                this.$backendService.AskQtn(this.Qn).then(result => {
                        console.log(" ----0---- " + result);
                        alert({
                    title: "Notice",
                    message: "Your Question has been added successfully ^_^",
                    okButtonText: "Ok"
                    });
                    this.Qn.title="";
                    this.Qn.details="";
                    },error => {
                        console.log(error);
                    });
                }
            },
            onBack(){
                 this.$navigateTo(Home, {
                    clearHistory: true
                });
            }
        }
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