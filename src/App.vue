<template>
  <TopNav />
  <BotNav />
  <IconSidebar />
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
import IconSidebar from "@/components/IconSidebar.vue";

import { computed } from "vue";
import { useStore } from "vuex";

// TO-DO: Pass data as props to children components
export default {
  setup() {
    const store = useStore();
    const currentColor = computed(() => store.state.subNav);
    return { currentColor };
  },
  components: {
    TopNav,
    BotNav,
    IconSidebar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Neo Sans, "Arial-Narrow", sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  width: calc(100vw - 8px);
}
</style>
