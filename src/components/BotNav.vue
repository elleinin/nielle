<template>
  <div id="nav" class="fr">
    <div class="n-line" :class="bg" />
  </div>
  <div class="circ-group fr">
    <div class="circ" @click="toggle(0)" />
    <div class="circ" @click="toggle(1)" />
    <div class="circ" @click="toggle(2)" />
    <div class="circ" @click="toggle(3)" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BotNav",
  setup() {
    const store = useStore();
    const currentColor = computed(() => store.state.subNav);
    const toggle = (payload) => {
      console.log("circles ", payload);
      store.dispatch("toggleSubNav", payload);
    };
    return { currentColor, toggle };
  },
};
</script>

<style scoped lang="scss">
#nav {
  height: 60px;
  width: calc(100vw - 8px);
  bottom: 30px;
}

.fr {
  align-content: center;
  justify-content: center;
  align-items: center;
}

.n-line {
  height: 3px;
  width: 75vw;
  background-color: #fff;
}

.circ-group {
  width: 100%;
  height: 50px;
  bottom: 35px;
  position: fixed;
  z-index: 15;
}

.circ {
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    background-color: $galaxy;
    margin-left: 30px;
  }
  &:nth-child(2) {
    background-color: $blueprint;
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
  &:nth-child(1):hover {
    border-color: $galaxy;
  }
  &:nth-child(2):hover {
    border-color: $blueprint;
  }
  &:nth-child(3):hover {
    border-color: $polaris;
  }
  &:nth-child(4):hover {
    border-color: $solar;
  }
}
</style>
