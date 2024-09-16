<template>
  <div id="nav" class="fr">
    <div class="navline fr">
      <div class="n-line" />
      <Transition name="link">
        <div v-show="isNavToggled" class="link">ABT</div>
      </Transition>
      <div class="n-line" />
      <Transition name="link">
        <div v-show="isNavToggled" class="link">EXP</div>
      </Transition>
      <div class="n-line" />
      <Transition name="link">
        <div v-show="isNavToggled" class="link">WRK</div>
      </Transition>
      <div class="n-line" />
      <Transition name="link">
        <div v-show="isNavToggled" class="link">CON</div>
      </Transition>
      <div class="n-line" />
    </div>
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
.link {
  font-family: Neo-Bold;
  margin-top: 3px;
  padding: 5px 5px;
  width: 50%;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: $solar;
    box-shadow: 0px 0px 0px 3px $blueprint inset;
    @include easeOut;
  }
}

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
      background-color: $solar;
      @include easeOut;
    }
  }
}

.link-enter-active {
  animation: nav 0.5s ease;
}
.link-leave-active {
  animation: nav 0.5s ease reverse;
}
@keyframes nav {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    opacity: 100%;
    width: 50%;
  }
}

.nav-enter-active {
  animation: rotate 1s ease;
  transition-delay: 0.5s;
}
.nav-leave-active {
  animation: rotate 0.5s ease reverse;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: rotate(90deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 100;
  }
}

#nav {
  height: 100px;
  width: 100vw;
}

.fr {
  align-content: center;
  justify-content: center;
  align-items: center;
}

.navline {
  width: 80vw;
  left: 10vw;
  margin-right: 2.5vw;
  // overflow: hidden;
}

.n-line {
  height: 3px;
  width: 100%;
  background-color: #fff;
  flex-grow: 1;
}

.h-line {
  height: 3px;
  width: 30px;
  background-color: #fff;
  margin: 5px;
}
</style>
