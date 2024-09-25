<template>
  <div id="contact" class="fr" :class="bg">
    <div class="col3">
      <div class="cont">
        <div class="img left" />
      </div>
    </div>
    <div class="col3" />
    <div class="col3">
      <div class="cont">
        <div class="img right" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ContactView",
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

    return { currentColor, bg };
  },
};
</script>

<style lang="scss" scoped>
.fr {
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

.cont {
  height: 80vh;
  width: 100%;
  top: 10vh;
  overflow-x: hidden;
  position: relative;
}

.left {
  background-image: $star-gradient;
  height: 80vh;
  width: 66vh;
  z-index: 9;
  transform: translateX(-33vh);
}
.right {
  background-image: $star-gradient;
  height: 80vh;
  width: 66vh;
  z-index: 9;
  transform: translateX(calc(30vh - 15px));
}

@media only screen and (max-width: 768px) {
  .cont {
    top: 25vh;
  }
  .left {
    height: 50vh;
    width: 33vh;
    transform: translateX(-16vh);
  }
  .right {
    height: 50vh;
    width: 33vh;
    transform: translateX(-2vh);
  }
}
</style>
