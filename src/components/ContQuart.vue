<template>
  <div class="grid-4">
    <template v-for="n in 4" :key="n">
      <QuartContent :qtr="n" :navi="navi" />
    </template>
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
    const show = computed(() => {
      return props.nav == 3 ? true : false;
    });
    return {
      navi,
      show,
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
.imgr {
  height: 15vh;
}

.imgc {
  width: 15vw;
}

.imgn {
  overflow: visible;
  img {
    height: 30vh;
  }
}

.imgm {
  flex-wrap: wrap;
  img {
    height: 10vw;
  }
}
// .navi {
//   position: sticky; we'll figure this out later
// }

h2 {
  @include ib;
  font-size: 3vh;
  margin: 0;
}

h3 {
  font-family: Neo-black, "Arial", sans-serif;
  margin: 0;
}

p {
  font-family: Neo-light, "Arial-Narrow", sans-serif;
  padding: 0px 2vw;
  width: 100%;
}

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

.sample {
  height: 100vh;
  width: 100%;
}

.worktitle {
  @include ib;
  font-size: 3vw;
  color: $ng-warm;
}

.subtitle {
  @include it;
  font-style: italic;
  color: $punk;
  font-size: 0.8rem;
  width: 50%;
}

.fr {
  justify-content: center;
  gap: 5px;
}

.body {
  font-family: Neo-light, "Arial-Narrow", sans-serif;
  margin: 15px;
  width: 50%;
}

.col2 {
  height: 500vh;
}

.ft {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: start;
  height: 100%;
}

.row3 {
  padding-top: 5vh;
  padding-bottom: 2vh;
  height: 25vh;
  width: 100%;
  overflow-y: auto;
}

.col3 {
  padding-top: 5vh;
  height: 90vh;
  width: 100%;
}

.r1 {
  border-radius: 15px 100px;
}

.r2 {
  border-radius: 100px 15px;
}

.r3 {
  border-radius: 100px;
}

.r4 {
  border-radius: 100px 100px;
}

.r5 {
  border-radius: 15px 100px 100px;
}

.r6 {
  border-radius: 100px 100px 15px;
}

.amp {
  width: 70%;
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
