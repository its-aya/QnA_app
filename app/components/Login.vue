<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" width="150" height="150" src="~/images/logo2.png"></Image>
                <Label class="header" color="Black" text="Answer Loop"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "catamouh@std.axcelacademy.co.uk",
                    password: "gEMG8snXsN",
                    confirmPassword: ""
                }
            };
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },

            login() {
                var result = this.$backendService
                    .login(this.user)
                    .then(result => {
                        console.log(" ---- " + result);
                        if(result)
                        {
                            this.isLoggingIn = true;
                            this.processing = false;
                            this.$navigateTo(Home, { clearHistory: true });
                            //console.log("from login vue --------- "+global.accessToken);

                        }  
                        else{
                            this.alert("Wrong Username or Password");
                            this.processing = false;
                        }   
                    },error => {
                        console.log(error);
                    });
            },

            register() {
                if (this.user.password != this.user.confirmPassword) {
                    this.alert("Your passwords do not match.");
                    this.processing = false;
                    return;
                }

                this.$backendService
                    .register(this.user) 
                    .then(() => {
                        this.processing = false;
                        this.alert(
                            "Your account was successfully created.");
                        this.isLoggingIn = true;
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we were unable to create your account."
                        );
                    });
            },

            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for TRADE ZONE to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                }).then(data => {
                    if (data.result) {
                        this.$backendService
                            .resetPassword(data.text.trim())
                            .then(() => {
                                this.alert(
                                    "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                                );
                            })
                            .catch(() => {
                                this.alert(
                                    "Unfortunately, an error occurred resetting your password."
                                );
                            });
                    }
                });
            },

            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },

            alert(message) {
                return alert({
                    title: "TRADE ZONE",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
