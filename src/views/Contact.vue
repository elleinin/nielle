<template>
  <div id="contact" class="fr" :class="bg">
    <div class="col3">
      <div class="cont">
        <AssetLines class="aleft" />
        <div class="left">
          <AssetCircles :bg="bg" />
        </div>
      </div>
    </div>
    <div class="col3" />
    <div class="col3">
      <div class="cont">
        <div class="right">
          <AssetCircles :bg="bg" />
        </div>
        <AssetLines class="aright" />
      </div>
    </div>
  </div>
  <div class="icon"></div>
  <div class="content"></div>
</template>

<script>
import AssetCircles from "@/components/AssetCircles.vue";
import AssetLines from "@/components/AssetLines.vue";
import NielleSVG from "@/assets/NielleSVG2.svg";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ContactView",
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

    return { currentColor, bg, NielleSVG };
  },
  components: {
    AssetCircles,
    AssetLines,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: $polaris;
  top: calc(18vh - 40px);
  left: calc(50vw - 40px);
  z-index: 15;
  img {
    width: 70px;
    height: 70px;
  }
}
.content {
  position: fixed;
  width: 50vw;
  height: 70vh;
  top: 18vh;
  left: 25vw;
  border-radius: 15%;
  border-style: dotted;
  border-width: 2px;
}

.fr {
  background-image: $midnight;
  // @include easeOut;
  // &.main {
  //   background-color: $galaxy;
  // }
  // &.blue {
  //   background-color: $bluer;
  // }
  // &.pink {
  //   background-color: $g-black;
  // }
  // &.orange {
  //   background-color: $blueprint;
  // }
}

.aleft {
  height: 50vh;
  position: fixed;
  top: 50vh;
  left: 0;
}

.aright {
  height: 50vh;
  position: fixed;
  top: 50vh;
  right: 0;
}

.cont {
  height: 100vh;
  width: 100%;
  padding-top: 10vh;
  overflow: hidden;
  position: relative;
  display: flex;
}

.left,
.right {
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
}

.left {
  background-image: $star-gradient;
  height: 80vh;
  width: 70vh;
  z-index: 9;
  transform: translateX(-16vw);
}
.right {
  background-image: $star-gradient;
  height: 80vh;
  width: 70vh;
  z-index: 9;
  transform: translateX(16vw);
}

@media only screen and (max-width: 768px) {
  .cont {
    padding-top: 25vh;
  }
  .left {
    height: 50vh;
    width: 100%;
  }
  .right {
    height: 50vh;
    width: 33vh;
  }
}
</style>
