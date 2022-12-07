<template>
  <div>
    <h1>UserName : {{ $store.state.userName }}</h1>
    <h1>Password : {{ $store.state.password }}</h1>
    <button @click="changeData">Change Username</button>
    <DemoTwo />
  </div>
</template>

<script>
import DemoTwo from "./DemoTwo.vue";
export default {
  data() {
    return {
      userName: "Demo Comp.",
    };
  },
  components: {
    DemoTwo,
  },
  methods: {
    changeData() {
      this.$store.commit("changeUserName", "newUser");
    },
  },
};
</script>

<style>
</style>