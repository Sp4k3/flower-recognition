<template>
  <div class="topnav">
    <router-link to="/">
      <a class="active">
        Go to Home
      </a>
    </router-link>
    <router-link to="/about">
      <a>
        Go to Train
      </a>
    </router-link>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  margin-bottom: 10px;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
