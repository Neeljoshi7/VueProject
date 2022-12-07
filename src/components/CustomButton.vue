<template>
  <div>
    <br>
    <b-button v-b-modal.modal-1 variant="outline-primary" @click="$emit('someEvent')" pill>
      <slot>
        Submit
      </slot>
    </b-button>
    <Modal>
      <template #title>
        <h2>Hello World</h2>
      </template>
      <template #content>
      <p class="my-4">Hello from modal!</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./DemoModal.vue"
export default {
    name:"CustomButton",
    components:{
      Modal
    },
    methods: {
    xyz() {
      this.$emit('someEvent')
    }
  }
}
</script>

<style>

</style>