<template>
  <TopNav />
  <BotNav />
  <!-- <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/nielle">Nielle</router-link> |
  </nav> -->
  <div class="display">
    <router-view />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import BotNav from "@/components/BotNav.vue";

export default {
  components: {
    TopNav,
    BotNav,
  },
};
</script>

<style lang="scss">
body {
  background-color: $galaxy;
  color: $ng-warm;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Inktrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $polaris;

    &.router-link-exact-active {
      color: $blueprint;
    }
  }
}
</style>
