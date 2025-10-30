<template>
  <div class="fc" :class="bg">
    <h3>
      Though most of my work are owned by the companies I've worked for, please
      enjoy this minigame I made post-graduation. Feel free to explore my 2021
      website too at:
    </h3>
    <a href="https://elleinin.github.io/portfolio/">2021 Personal Website</a>
    <div class="frame">
      <iframe
        src="https://elleinin.github.io/portfolio/redirect.html"
        title="2021 Online Portfolio Easter Egg"
        height="500"
        width="330"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
a {
  color: $punk;
  font-size: 3vh;
  @include easeOut;
}
a:hover {
  color: $solar;
}

.frame {
  margin-top: 20px;
}

.fc {
  height: 100vh;
  @include easeOut;
  &.main {
    background-color: $galaxy;
  }
  &.blue {
    background-color: $bluer;
  }
  &.pink {
    background-color: $g-black;
  }
  &.orange {
    background-color: $blueprint;
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
