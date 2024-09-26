<template>
  <div class="img asset polaris" />
  <AssetCircles :bg="bg" />
  <div id="home" class="fc" :class="bg">
    <div class="row2">
      <div class="nielle">{{ strings.nielle }}</div>
    </div>
    <div class="row2">
      <div class="img ink">{{ strings.subtitle }}</div>
    </div>
  </div>
  <AssetLines class="double" />
  <AboutView :navColor="currentColor" />
</template>

<script>
import strings from "../assets/strings.js";
import AboutView from "./About.vue";
import AssetCircles from "@/components/AssetCircles.vue";
import AssetLines from "@/components/AssetLines.vue";

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

    // for later
    // function onMousemove(e) {
    //   x.value = e.clientX * 0.1;
    //   y.value = e.clientY * 0.1;
    //   console.log(x.value, " ", y.value);
    // }

    return { currentColor, bg, strings };
  },
  components: {
    AboutView,
    AssetCircles,
    AssetLines,
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

.nielle {
  font-family: Inktrap-black;
  font-size: 10vh;
  color: #fff;
  z-index: 15;
  width: 100vw;
  top: 40vh;
  position: sticky;
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
  z-index: 9;
}

.double {
  height: 200vh;
  top: 0;
  left: 0;
}
</style>
