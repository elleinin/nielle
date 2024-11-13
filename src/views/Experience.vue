<template>
  <AssetCircles :bg="bg" />
  <div class="circ sun" />
  <ContentQuarters :nav="currentColor" />
  <div class="img asset polaris" />
</template>

<script>
import AssetCircles from "@/components/AssetCircles.vue";
import ContentQuarters from "@/components/ContQuart.vue";

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
    ContentQuarters,
  },
};
</script>

<style lang="scss" scoped>
.polaris {
  background-image: $star-circle;
  height: 50vh;
  width: 50vh;
  top: 25vh;
  left: calc(50vw - 25vh);
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
