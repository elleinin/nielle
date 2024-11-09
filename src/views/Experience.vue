<template>
  <div class="img asset polaris" />
  <AssetCircles :bg="bg" />
  <div class="circ sun" />
  <div id="exp" :class="bg">
    <ExpContent :quart="0" :nav="currentColor" />
    <ExpContent :quart="1" :nav="currentColor" />
    <ExpContent :quart="2" :nav="currentColor" />
    <ExpContent :quart="3" :nav="currentColor" />
    <AssetLines class="double" />
  </div>
</template>

<script>
import AssetCircles from "@/components/AssetCircles.vue";
import AssetLines from "@/components/AssetLines.vue";
import ExpContent from "@/components/ExpQuartz.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ExperienceView",
  setup() {
    const store = useStore();
    const currentColor = computed(() => store.state.subNav);
    const bg = computed(() => {
      switch (
        currentColor.value //you really need to turn this into an interface
      ) {
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
  components: {
    AssetCircles,
    AssetLines,
    ExpContent,
  },
};
</script>

<style lang="scss" scoped>
.polaris {
  background-image: $star-circle;
  height: 50vh;
  width: 100%;
  top: 25vh;
  z-index: 9;
}

.sun {
  position: fixed;
  background-color: $solar;
  z-index: 5;
  width: 33vh;
  height: 33vh;
  left: calc(50vw - 16.5vh);
  top: calc(50vh - 16.5vh);
}
</style>
