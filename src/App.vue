<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/nielle">Nielle</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: $galaxy;
  color: $ng-warm;
}

#app {
  font-family: Inktrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
