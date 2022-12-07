<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/counter';

export default {
    name: "LoginPage",
    data() {
        return {
            loginData: {
                email: "",
                password: "",
            }
        }
    },
    computed: {
        ...mapState(useStore, ["isLogin"])
    },
    methods: {
        ...mapActions(useStore, ["postLogin"]),
        handleLogin() {
            console.log("HHHHHHHHH");
            console.log(this.loginData);
            this.postLogin(this.loginData)
        }
    }
}
</script>

<template>

    <section class="vh-100" style="background-color: grey;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">

                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">

                                    <form @submit.prevent="handleLogin">

                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">ELGOLA.ID</span>
                                        </div>

                                        <h5 class="fw-normal mb-2 pb-3" style="letter-spacing: 1px;">Sign into your
                                            account</h5>

                                        <div class="form-outline mb-4">
                                            <input v-model="loginData.email" type="email" id="form2Example17"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example17">Email address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input v-model="loginData.password" type="password" id="form2Example27"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example27">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                        </div>

                                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a
                                                href="#!" style="color: #393f81;">Register here</a></p>
                                    </form>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>