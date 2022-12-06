<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: "LoginPage",
  components: { LoginForm }
}
</script>

<template>
  <section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="../assets/undraw_Unlock_re_a558.png" class="img-fluid" alt="Sample image">
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>