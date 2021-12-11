<template>
  <div class="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/details">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app {
  min-height: 100vh;
  font-family: $font-family;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: $font-color;
  font-size: $font-size-s;
  line-height: $line-height-s;
  background: $bg-color;
}
</style>
