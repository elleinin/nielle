<template>
  <div class="img asset polaris" />
  <div class="fc asset circles">
    <div class="asset circ" :class="bg" />
    <div class="asset circ" :class="bg" />
    <div class="asset circ" :class="bg" />
    <div class="asset circ" :class="bg" />
  </div>
  <div class="fc" :class="bg">
    <div class="row2">
      <div class="nielle">NIELLE</div>
    </div>
    <div class="row2 add">
      <div class="img ink"><br />Under Construction</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "NielleView",
  setup() {
    const store = useStore();
    const currentColor = computed(() => store.state.subNav);
    const bg = computed(() => {
      switch (currentColor.value) {
        case 1:
          return "blue";
        case 2:
          return "pink";
        case 3:
          return "orange";
        default:
          return "main";
      }
    });

    return { currentColor, bg };
  },
};
</script>

<style lang="scss" scoped>
.fc {
  @include easeOut;
  &.main {
    background-color: $galaxy;
  }
  &.blue {
    background-color: $bluer;
  }
  &.pink {
    background-color: $g-black;
  }
  &.orange {
    background-color: $blueprint;
  }
}

.circles {
  height: 100%;
  width: 100%;
  // position: fixed;
}

.circ {
  border-radius: 50%;
  @include easeOut;
  &:nth-child(1) {
    width: 45vh;
    height: 45vh;
    border: 3px solid;
  }
  &:nth-child(2) {
    width: 58vh;
    height: 58vh;
    border: 1px solid white;
  }
  &:nth-child(3) {
    width: 30vh;
    height: 30vh;
    border: 2px solid;
    transform: translateY(-25vh);
  }
  &:nth-child(4) {
    width: 30vh;
    height: 30vh;
    border: 2px solid;
    transform: translateY(25vh);
  }
  &.main {
    border-color: $blueprint;
  }
  &.blue {
    border-color: $n-cool;
  }
  &.pink {
    border-color: $polaris;
  }
  &.orange {
    border-color: $solar;
  }
}

//MAKE NIELLE FIXED for transition to about
.nielle {
  font-family: Inktrap-black;
  font-size: 10vh;
  color: #fff;
  z-index: 8;
  // padding-bottom: 5vh;
  width: calc(100vw - 8px);
  top: 40vh;
  position: sticky;
}
.add {
  z-index: 3;
  // transform: translateY(-5vh);
}

.ink {
  background-image: $ink-home;
  width: 100%;
  height: 100%;
}

.polaris {
  background-image: $star-gradient;
  height: 70vh;
  width: 100%;
  top: 15vh;
}
</style>
