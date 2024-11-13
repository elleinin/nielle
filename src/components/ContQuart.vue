<template>
  <div class="grid-4">
    <template v-for="n in 4" :key="n">
      <QuartContent :qtr="n" :navi="navi" />
    </template>
    <!-- <div class="quart base" :style="align" />
    <Transition>
      <div class="quart title" :class="bg" :style="align" v-if="show" />
    </Transition> -->
  </div>
</template>

<script lang="jsx">
import { computed } from "vue";
import QuartContent from "@/components/QuartContent.vue";

export default {
  name: "ContentQuarters",
  props: ["nav"],
  setup(props) {
    const navi = computed(() => {
      return props.nav + 1;
    });
    return {
      navi,
    };
  },
  components: {
    QuartContent,
  },
};
</script>

<style lang="scss" scoped>
// .main {
//   background-color: $g-black;
// }
.blue {
  background-color: $blueprint;
}
.pink {
  background-color: $polaris;
}
.orange {
  background-color: $solar;
}

.base {
  z-index: -1;
  background-color: $g-black;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
