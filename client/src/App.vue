<template>
  <div>
    <div>
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        width="100"
        height="100"
      >
    </div>
    <!-- <router-link to="/">
      <button class="button">
        Go to Home
      </button>
    </router-link>
    <router-link to="/about">
      <button class="button">
        Go to About
      </button>
    </router-link> -->
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  margin: 10px;
}
</style>
