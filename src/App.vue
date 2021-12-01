<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/details">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

#app {
  min-height: 100vh;
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
  background: $bg-color;
}
</style>
