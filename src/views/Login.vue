<template>
  <div class="p-3">
    <component :is="component"> </component>
    <div class="d-flex justify-content-center my-2">
      <b-button class="btn-success mx-2" @click="switchToRegister" >Switch to Register</b-button>
      <b-button class="btn-success" @click="switchToLogin">Switch to Login</b-button>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";
import Login from "../components/Signin.vue";
export default {
  components: {
    Register: Register,
    Login: Login,
  },
  data() {
    return {
      component: Register,
    };
  },
  methods: {
    switchToRegister(){
        this.component = Register;
    },
    switchToLogin(){
        this.component = Login;
    }
  },
};
</script>

<style scoped>
</style>