<script>
import { useDataStore } from "../stores/dataStore";
import { mapActions, mapState } from "pinia";
export default {
  name: "TwoFactor",
  data() {
    return {
      token: [],
    };
  },
  methods: {
    ...mapActions(useDataStore, [
      "getTwoFactorSecret",
      "verifyTwoFactorSecret",
    ]),
  },
  computed: {
    ...mapState(useDataStore, ["qr"]),
  },
  created() {
    this.getTwoFactorSecret();
  },
};
</script>

<template>
  <br />
  <div class="container">
    <br />
    <div class="row">
      <div class="col-lg-5 col-md-7 mx-auto my-auto">
        <div class="card">
          <div class="card-body px-lg-5 py-lg-5 text-center">
            <img
              :src="qr"
              style="width: 200px"
              class="mb-4"
              alt="profile-image"
            />
            <h2 class="text-info">2FA Security</h2>
            <p class="mb-4">Enter 6-digits code from your athenticatior app.</p>
            <form @submit.prevent="verifyTwoFactorSecret(token)">
              <div class="row mb-4">
                <div class="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                  <input
                    v-model="token[0]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
                <div class="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                  <input
                    v-model="token[1]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
                <div class="col-lg-2 col-md-2 col-2 ps-0 ps-md-2">
                  <input
                    v-model="token[2]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
                <div class="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                  <input
                    v-model="token[3]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
                <div class="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                  <input
                    v-model="token[4]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
                <div class="col-lg-2 col-md-2 col-2 pe-0 pe-md-2">
                  <input
                    v-model="token[5]"
                    type="text"
                    class="form-control text-lg text-center"
                    placeholder="_"
                    aria-label="2fa"
                  />
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn bg-info btn-lg my-4">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #eee;
}
.card {
  box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #ecf2f5;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.avatar-lg {
  height: 150px;
  width: 150px;
}
</style>
