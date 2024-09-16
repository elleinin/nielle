<template>
  <div id="about">
    <AboutNielle />
  </div>
</template>

<script>
import AboutNielle from "@/components/AboutNielle.vue";
import strings from "../assets/strings.js";

export default {
  name: "AboutView",
  setup() {
    return { strings };
  },
  components: {
    AboutNielle,
  },
};
</script>

<style lang="scss" scoped>
#about {
  height: 100vh;
}
</style>
