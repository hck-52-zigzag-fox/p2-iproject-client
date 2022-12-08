<script>
import FooterVue from "../components/Footer.vue";
import NavbarVue from "../components/Navbar.vue";
import InputVue from "../components/Input.vue";
import ButtonVue from "../components/Button.vue";

export default {
  name: "RegisterView",
  data() {
    return {
      credential: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },
  components: {
    FooterVue,
    NavbarVue,
    InputVue,
    ButtonVue,
  },
};
</script>

<template>
  <NavbarVue />
  <div class="grid grid-cols-1 container mx-auto p-10 my-10 gap-5">
    <main class="mx-auto md:w-6/12">
      <h1 class="text-2xl text-center md:text-left text-gray-900 mb-6">
        <span class="font-bold">Signup </span> and start learning
      </h1>

      <form @submit.prevent="loginUser(credential)">
        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2"> Full Name </label>
          <InputVue
            v-model="credential.fullName"
            name="fullName"
            type="text"
            placeholder="Your fullname ..."
          />
        </div>

        <div class="flex flex-col mb-4">
          <label htmlFor="email" class="text-lg mb-2"> Email Address </label>
          <InputVue
            v-model="credential.email"
            name="email"
            type="email"
            placeholder="Your email address ..."
          />
        </div>

        <div class="flex flex-col mb-4">
          <label htmlFor="password" class="text-lg mb-2">Password </label>
          <InputVue
            v-model="credential.password"
            name="password"
            type="password"
            placeholder="Your password ..."
          />
        </div>

        <ButtonVue type="submit" title="Register" />
      </form>
    </main>
  </div>
  <FooterVue />
</template>
