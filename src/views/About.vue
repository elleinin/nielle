<template>
  <div id="about" :class="data.bg">
    <SidebarScroll />
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
import SidebarScroll from "@/components/SidebarScroll.vue";
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
            title: strings.software.title,
            body: strings.software.body,
            sub: strings.software.subtitle,
            bg: "blue",
            aboutComponent: AboutContent,
          };
        case 2:
          return {
            title: strings.multimedia.title,
            body: strings.multimedia.body,
            sub: strings.multimedia.subtitle,
            bg: "pink",
            aboutComponent: AboutContent,
          };
        case 3:
          return {
            title: strings.nielle,
            body: strings.lipsum2,
            sub: strings.subtitle,
            bg: "orange",
            aboutComponent: AboutNielle,
          };
        default:
          return {
            title: strings.ninielle.title,
            body: strings.ninielle.body,
            sub: strings.subtitle,
            bg: "galaxy",
            aboutComponent: AboutContent,
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
  components: {
    SidebarScroll,
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
