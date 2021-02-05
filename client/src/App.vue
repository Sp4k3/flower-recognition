<template>
  <div>
    <Header />
    <div>
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        width="100"
        height="100"
        class="logo"
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

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  },
  // ...
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.button {
  margin: 10px;
}

.logo {
  border-radius: 50%;
}
</style>
