<template>
  <div id="about" :class="bg">
    <Transition>
      <component
        :is="data.aboutComponent"
        :title="data.title"
        :body="data.body"
        :sub="data.sub"
      />
    </Transition>
  </div>
</template>

<script lang="jsx">
import AboutNielle from "@/components/AboutNielle.vue";
import AboutContent from "@/components/AboutContent.vue";
import strings from "../assets/strings.js";

import { computed } from "vue";

export default {
  name: "AboutView",
  props: ["navColor"],
  setup(props) {
    const data = computed(() => {
      switch (props.navColor) {
        case 1:
          return {
            title: strings.ninielle,
            body: strings.lipsum1,
            sub: strings.lipsum1,
            bg: "blue",
            aboutComponent: AboutContent,
          };
        case 2:
          return {
            title: strings.ninielle,
            body: strings.lipsum1,
            sub: strings.lipsum1,
            bg: "pink",
            aboutComponent: AboutContent,
          };
        case 3:
          return {
            title: strings.ninielle,
            body: strings.lipsum1,
            sub: strings.lipsum1,
            bg: "orange",
            aboutComponent: AboutContent,
          };
        default:
          return {
            title: strings.ninielle,
            body: strings.lipsum1,
            sub: strings.lipsum1,
            bg: "blue",
            aboutComponent: AboutNielle,
          };
      }
    });
    return {
      strings,
      AboutNielle,
      AboutContent,
      data,
    };
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
