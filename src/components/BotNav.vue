<template>
  <div id="nav" class="fr">
    <div class="n-line" />
  </div>
  <div class="circ-group fr">
    <div class="circ" />
    <div class="circ" />
    <div class="circ" />
    <div class="circ" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BotNav",
  setup() {
    const store = useStore();
    const isNavToggled = computed(() => store.state.isNavToggled);
    const toggle = () => {
      store.dispatch("toggleNav", isNavToggled);
      console.log("toggle ", isNavToggled.value);
    };
    return { isNavToggled, toggle };
  },
};
</script>

<style scoped lang="scss">
#nav {
  height: 60px;
  width: 100vw;
  bottom: 15px;
}

.fr {
  align-content: center;
  justify-content: center;
  align-items: center;
}

.n-line {
  height: 3px;
  width: 80vw;
  left: 10vw;
  background-color: #fff;
}

.circ-group {
  width: 100%;
  height: 50px;
  bottom: 20px;
  position: fixed;
  z-index: 15;
}

.circ {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #fff;
  &:nth-child(1) {
    background-color: $blueprint;
    margin-left: 30px;
  }
  &:nth-child(2) {
    background-color: $galaxy;
    transform: translateX(-10px);
  }
  &:nth-child(3) {
    background-color: $polaris;
    transform: translateX(-20px);
  }
  &:nth-child(4) {
    background-color: $solar;
    transform: translateX(-30px);
  }
}
</style>
