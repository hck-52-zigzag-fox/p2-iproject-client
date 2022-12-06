<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    }
  },
}
</script>

<template>
  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
    <GoogleLogin :callback="callback" promt />
  </div>

  <div class="divider d-flex align-items-center my-4">
    <p class="text-center fw-bold mx-3 mb-0">Or</p>
  </div>

  <form>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form3Example3">Email address</label>
      <input v-model="loginData.email" type="email" id="form3Example3" class="form-control form-control-lg"
        placeholder="Enter a valid email address" />
    </div>

    <!-- Password input -->
    <div class="form-outline mb-3">
      <label class="form-label" for="form3Example4">Password</label>
      <input v-model="loginData.password" type="password" id="form3Example4" class="form-control form-control-lg"
        placeholder="Enter password" />
    </div>

    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="submit" class="btn btn-primary btn-lg"
        style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
      <p class="small mt-2 pt-1 mb-0">Don't have an account? <a @click.prevent="$router.push(`/register`)"
          class="link-danger">Register</a>
      </p>
    </div>

  </form>
</template>