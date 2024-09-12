<template>
  <div id="nav" class="fr">
    <div class="n-line" />
    <div class="navburger">
      <Transition name="nav">
        <div class="hamburger" v-if="isNavToggled" @click="toggle">X</div>
        <div v-else class="hamburger" @click="toggle">
          <div class="h-line" />
          <div class="h-line" />
          <div class="h-line" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TopNav",
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
.navburger {
  width: 40px;
  height: 30px;
}
.hamburger {
  position: fixed;
  font-family: Inktrap-black;
  font-size: 35px;
  transition-delay: 0.5s;
  cursor: pointer;
  &:hover {
    color: $punk;
    @include easeOut;
    div {
      background-color: $punk;
      @include easeOut;
    }
  }
}

.nav-enter-active {
  animation: rotate 0.5s ease;
  transition-delay: 0.5s;
}
.nav-leave-active {
  animation: rotate 0.5s ease reverse;
  transition-delay: 0.5s;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 100;
  }
}

#nav {
  height: 60px;
  width: 100vw;
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
  margin-right: 2.5vw;
}
.h-line {
  height: 3px;
  width: 30px;
  background-color: #fff;
  margin: 5px;
}
</style>
