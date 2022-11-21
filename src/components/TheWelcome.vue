<template>
  <div>
    <modal>
      <b-list-group>
        <b-list-group-item
          href="#"
          active
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List Group item heading</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small>Donec id elit non mi porta.</small>
        </b-list-group-item>

        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List Group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>

        <b-list-group-item
          href="#"
          disabled
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Disabled List Group item</h5>
            <small class="text-muted">3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>
      </b-list-group>
    </modal>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <div>
      <b-button @click="changeAge" class="btn-success mt-4">Click Me</b-button>
      <p>
        Age : <span>{{ age }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
  data() {
    return {
      age: 24,
    };
  },
  components: {
    modal,
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
  methods: {
    changeAge() {
      this.age = 12;
    },
  },
};
</script>

<style>
</style>