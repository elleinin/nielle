<template>
  <div id="about" :class="data.bg">
    <SidebarScroll />
    <Transition>
      <component
        :is="data.aboutComponent"
        :title="data.title"
        :body="data.body"
        :sub="data.sub"
        :bg="data.bg"
      />
    </Transition>
  </div>
</template>

<script lang="jsx">
import AboutResume from "@/components/AboutResume.vue";
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
            title: strings.career.title,
            body: strings.career.body,
            sub: strings.career.subtitle,
            bg: "blue",
            aboutComponent: AboutContent,
          };
        case 2:
          return {
            title: strings.studies.title,
            body: strings.studies.body,
            sub: strings.studies.subtitle,
            bg: "pink",
            aboutComponent: AboutContent,
          };
        case 3:
          return {
            title: strings.resume.title,
            body: strings.resume.body,
            sub: strings.resume.subtitle,
            bg: "orange",
            aboutComponent: AboutResume,
          };
        default:
          return {
            title: strings.ninielle.title,
            body: strings.ninielle.body,
            sub: strings.ninielle.subtitle,
            bg: "galaxy",
            aboutComponent: AboutContent,
          };
      }
    });
    return {
      strings,
      AboutResume,
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
