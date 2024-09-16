<template>
  <TopNav />
  <BotNav />
  <div class="display">
    <!-- router-transitions https://router.vuejs.org/guide/advanced/transitions -->
    <!-- <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view> -->
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
  font-family: Neo Sans;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  width: calc(100vw - 8px);
  // overflow-y: hidden;
}
</style>
