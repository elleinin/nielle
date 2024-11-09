<template>
  <div class="quart base" :style="align" />
  <Transition>
    <div class="quart title" :class="bg" :style="align" v-if="show" />
  </Transition>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ExpContent",
  props: ["quart", "nav"],
  setup(props) {
    const show = computed(() => {
      return props.quart == props.nav ? true : false;
    });
    const bg = computed(() => {
      switch (
        props.quart //you really need to turn this into an interface
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
    const align = computed(() => {
      switch (props.quart) {
        case 1:
          return {
            top: 0,
            left: "50vw",
          };
        case 2:
          return {
            top: "50vh",
            left: 0,
          };
        case 3:
          return {
            top: "50vh",
            left: "50vw",
          };
        default:
          return {
            top: 0,
            left: 0,
          };
      }
    });
    return {
      align,
      bg,
      show,
    };
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
