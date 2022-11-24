<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow-lg custom-card">
            <div class="card-body">
              <h1 class="main-heading text-center">Login</h1>
              <form class="mt-5" @submit.prevent="whileLogin">
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end"
                    >Username</label
                  >
                  <div class="col-md-6">
                    <input
                      id="text"
                      type="name"
                      class="form-control"
                      name="name"
                      v-model="newLogin.userName"
                      required
                      autocomplete="name"
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
                      type="password"
                      class="form-control"
                      v-model="newLogin.password"
                      name="password"
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
                    <button type="submit" class="btn btn-primary py-1 px-4">
                      Login
                    </button>

                    <a class="text-decoration-none ps-4"> Register </a>
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
var authers;
export default {
  data() {
    return {
      newLogin: {
        userName: "",
        password: "",
      },
    };
  },

  mounted() {
    authers = JSON.parse(localStorage.getItem("authers"));
    console.log("users", authers);
  },
  methods: {
    whileLogin() {
      authers.forEach((user) => {
        if (this.newLogin.userName == user.userName) {
          alert("Thank You");
        }
      });
    },
  },
};
</script>

<style scoped>
.custom-card {
  height: 390px;
}
</style>