<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-sm">
            <div class="card-body">
              <h1 class="main-heading">Register</h1>
              <form @submit.prevent="onSubmit">
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end"
                    >Username</label
                  >
                  <div class="col-md-6">
                    <input
                      id="text"
                      v-model="newUsers.userName"
                      type="name"
                      class="form-control"
                      name="name"
                      required
                      autocomplete="name"
                      autofocus
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end"
                    >Email Address</label
                  >
                  <div class="col-md-6">
                    <input
                      id="email"
                      v-model="newUsers.email"
                      type="email"
                      class="form-control"
                      name="email"
                      required
                      autocomplete="email"
                      autofocus
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="password"
                    class="col-md-4 col-form-label text-md-end"
                    >Password</label
                  >
                  <div class="col-md-6">
                    <input
                      id="password"
                      v-model="newUsers.password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      autocomplete="current-password"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label
                    for="confirm_password"
                    class="col-md-4 col-form-label text-md-end"
                    >Confirm Password</label
                  >
                  <div class="col-md-6">
                    <input
                      id="confirm_password"
                      type="password"
                      v-model="confirmPassword"
                      class="form-control"
                      name="confirm_password"
                      required
                      autocomplete="current-password"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-4 offset-md-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label class="form-check-label" for="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row mb-0 mt-4">
                  <div class="col-md-8 offset-md-3">
                    <button
                      @click="whileRegister"
                      type="submit"
                      class="btn btn-primary py-1 px-4"
                    >
                      Register
                    </button>
                    <a class="text-decoration-none ps-4" :href="link">
                      Have an account?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
  data() {
    return {
      newUsers: {
        userName: "",
        email: "",
        Password: "",
        confirmPassword: ""
      },
      auther: [
        {
          userName: "",
          email: "",
          Password: "",
          confirmPassword: ""
        },
      ],
    };
  },
  methods: {
    whileRegister() {
      if(this.newUsers.Password === this.newUsers.confirmPassword){
        this.$router.push('/')
      }else{
        alert("Password dose't match")
      }
    },
    onSubmit() {
      this.auther.push({
        userName: this.newUsers.userName,
        email: this.newUsers.email,
        password: this.newUsers.Password,
        confirmPassword: this.newUsers.confirmPassword
      });
      this.newUsers = {
        userName: "",
        email: "",
        Password: "",
        confirmPassword: ""
      };
      console.log("this.auther", this.auther)
    },
  },
};
</script>

<style>
</style>