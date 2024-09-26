<template>
  <div id="contact" class="fr" :class="bg">
    <div class="col3">
      <div class="cont">
        <AssetLines class="aleft" />
        <div class="left">
          <AssetCircles :bg="bg" />
        </div>
      </div>
    </div>
    <div class="col3" />
    <div class="col3">
      <div class="cont">
        <div class="right">
          <AssetCircles :bg="bg" />
        </div>
        <AssetLines class="aright" />
      </div>
    </div>
  </div>
  <div class="icon img"></div>
  <div class="content">
    <h1>NIELLE</h1>
    <h2>Niña Gabrielle A. Pascual</h2>
    <h3>CONTACT ME</h3>
    <p>WORK: ninielle.ap@gmail.com <br />ART: elleinin@gmail.com</p>
    <h3>FIND ME</h3>
    <p>
      At the next local music gig, art alley, fixated over my next craft-hobby,
      or wherever my software engineer career might take me next. Currently
      based in the Philippines.
    </p>
    <h3>Thank you for viewing!</h3>
    <p>
      If you haven't yet, you can also click the icons over at the right bar to
      check out my LinkedIn, GitHub, Behance, and other socials. The circles at
      the bottom bar may also show fun stuff from time to time.
    </p>
  </div>
</template>

<script>
import AssetCircles from "@/components/AssetCircles.vue";
import AssetLines from "@/components/AssetLines.vue";
import NielleSVG from "@/assets/NielleSVG2.svg";

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

    return { currentColor, bg, NielleSVG };
  },
  components: {
    AssetCircles,
    AssetLines,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: $me;
  background-color: $n-cool;
  top: 12vh;
  left: calc(50vw - 75px);
  z-index: 15;
  img {
    width: 70px;
    height: 70px;
  }
}
.content {
  position: fixed;
  width: 50vw;
  height: 65vh;
  top: 18vh;
  left: 25vw;
  border-radius: 5%;
  border-style: dotted;
  border-width: 2px;
  padding: 100px 25px 25px 25px;
  overflow-y: auto;
  p {
    font-family: "Neo Sans";
    line-height: 1rem;
    padding-bottom: 1rem;
  }
  h1 {
    @include ib;
    font-size: 3rem;
    line-height: 1rem;
    line-height: 0;
  }
  h2 {
    @include il;
    font-size: 1rem;
    line-height: 0;
    color: $bluer;
    padding-bottom: 20px;
  }
  h3 {
    @include it;
    font-size: 1rem;
    border-bottom: 1px solid $bluer;
  }
}

.fr {
  background-image: $midnight;
  // @include easeOut;
  // &.main {
  //   background-color: $galaxy;
  // }
  // &.blue {
  //   background-color: $bluer;
  // }
  // &.pink {
  //   background-color: $g-black;
  // }
  // &.orange {
  //   background-color: $blueprint;
  // }
}

.aleft {
  height: 50vh;
  position: fixed;
  top: 50vh;
  left: 0;
}

.aright {
  height: 50vh;
  position: fixed;
  top: 50vh;
  right: 0;
}

.cont {
  height: 100vh;
  width: 100%;
  padding-top: 10vh;
  overflow: hidden;
  position: relative;
  display: flex;
}

.left,
.right {
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
}

.left {
  background-image: $star-gradient;
  height: 80vh;
  width: 70vh;
  z-index: 9;
  transform: translateX(-16vw);
}
.right {
  background-image: $star-gradient;
  height: 80vh;
  width: 70vh;
  z-index: 9;
  transform: translateX(16vw);
}

@media only screen and (max-width: 768px) {
  .icon {
    height: 100px;
    width: 100px;
    left: calc(50vw - 50px);
  }
  .content {
    padding-top: 55px;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 8px;
    }
    p {
      font-size: 10px;
    }
  }
  .cont {
    padding-top: 25vh;
  }
  .left {
    height: 50vh;
    width: 100%;
  }
  .right {
    height: 50vh;
    width: 33vh;
  }
}
</style>
