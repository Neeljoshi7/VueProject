<template>
  <div>
    <!-- <TheWelcome /> -->

    <!-- <div>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div> -->

    <div>
      <input
        @click="activeInput"
        value="https://"
        readonly
        class="readonly"
        type="text"
      />
      <input type="text" ref="input" class="default-inp" />
    </div>
    <div>
      <br />
      <demo />
      <CustomButton @some-event="callback" >
        Click Me!
      </CustomButton>
    </div>
  </div>
</template>

<script>
import TheWelcome from "../components/TheWelcome.vue";
import Demo from "../components/Demo.vue";
import CustomButton from "../components/CustomButton.vue"
export default {
  props: {
    data: Array,
  },
  components: {
    TheWelcome,
    Demo,
    CustomButton
  },
  data() {
    return {};
  },
  methods: {
    activeInput() {
      this.$refs.input.focus();
    },
    helloWorld(name) {
      alert("Name :", name);
    },
    callback(){
      // this.$router.push('/calculator')
    }
  },
};
</script>

<style>
.readonly {
  width: 60px;
  border-right: transparent;
}
.default-inp {
  border-left: transparent;
}
.default-inp:focus-visible {
  outline: none;
}
.readonly:focus-visible {
  outline: none;
}
</style>