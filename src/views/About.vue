<template>
  <div id="about" :class="bg">
    <Transition>
      <component :is="aboutComponent" />
    </Transition>
  </div>
</template>

<script lang="jsx">
import AboutNielle from "@/components/AboutNielle.vue";
import AboutNinielle from "@/components/AboutNinielle.vue";
import strings from "../assets/strings.js";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AboutView",
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

    const aboutComponent = computed(() => {
      switch (currentColor.value) {
        case 1: {
          return AboutNinielle;
        }
        case 2:
          return AboutNinielle;
        case 3:
          return AboutNinielle;
        default:
          return AboutNielle;
      }
    });

    return { strings, AboutNielle, AboutNinielle, aboutComponent, bg };
  },
};
</script>

<style lang="scss" scoped>
#about {
  height: 100vh;
  @include easeOut;
  &.main {
    background-color: $galaxy;
  }
  &.blue {
    background-color: $blueprint;
  }
  &.pink {
    background-color: $polaris;
  }
  &.orange {
    background-color: $solar;
  }
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
