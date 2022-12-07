<script>
import { mapActions } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  name: "RegisterPage",
  data() {
    return {
      regist: {
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
  },
};
</script>

<template>
  <section class="gradient-custom py-2" id="container-regist">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-4 col-xl-5">
          <div class="card shadow" style="border-radius: 1rem">
            <div class="card-body p-3 text-center">
              <div class="mb-4 mt-md-1 pb-1">
                <h3 class="fw-bold mb-1 text-uppercase">Create New Account</h3>
                <p class="text-white-50 mb-2">Please enter your data!</p>

                <form
                  @submit.prevent="
                    handleRegister(
                      regist.email,
                      regist.password,
                      regist.phoneNumber,
                      regist.address
                    )
                  "
                >
                  <div class="d-flex gap-2 mb-3">
                    <div class="form-outline form-white">
                      <label class="form-label" for="typeEmailX">Email</label>
                      <input
                        v-model="regist.email"
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline form-white">
                      <label class="form-label" for="typePasswordX"
                        >Password</label
                      >
                      <input
                        v-model="regist.password"
                        type="password"
                        class="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <div class="form-outline form-white mb-3">
                    <label class="form-label" for="typePasswordX"
                      >Phone Number</label
                    >
                    <input
                      v-model="regist.phoneNumber"
                      type="text"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline form-white mb-3">
                    <label class="form-label" for="typePasswordX"
                      >Address</label
                    >
                    <input
                      v-model="regist.address"
                      type="text"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <button
                    class="btn btn-lg text-white px-5"
                    type="submit"
                    style="background-color: #aeefe7"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div>
                <p class="mb-0">
                  Have an account?
                  <RouterLink
                    to="/login"
                    class="text-50 fw-bold"
                    style="color: #30c2c3"
                    >Sign In</RouterLink
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
