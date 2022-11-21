<template>
  <div>
    <TheWelcome />

    <div>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
  </div>
</template>

<script>
import TheWelcome from "../components/TheWelcome.vue";
export default {
  components: {
    TheWelcome,
  },
  data(){
    return{
         checkedNames: []
    }
  }
};
</script>

<style>
</style>