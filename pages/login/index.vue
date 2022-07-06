<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link to='/register' v-if="isLogin" href="">Have an account?</nuxt-link>
            <nuxt-link to='/login' v-else href="">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages" v-for="(messages, reason, index) in this.errors" :key="index">
            <li v-for="(message, index) in messages" :key="index">{{ reason }}{{ message }}</li>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name"
                required />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email"
                required />
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password"
                minlength="8" required />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {}
    };
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await request({
          method: 'POST',
          url: '/api/users/login',
          data: this.user
        })
        console.log("data=>", data);
        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors
      }
    },
  },
};
</script>
