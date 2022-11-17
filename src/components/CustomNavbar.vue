<template>
  <div>
    <div>
      <b-navbar type="dark" variant="light">
        <b-navbar-nav>
          <RouterLink class="me-2" to="/">PunchBag</RouterLink>
          <RouterLink class="me-2" to="/about">About</RouterLink>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: "CustomNavbar",
};
</script>

<style scoped>
a{
  color: gray;
  text-decoration: none;
}
</style>
