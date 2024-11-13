<template>
  <div class="quart base" :style="align">
    <div
      class="description"
      :style="{ color: 'white', padding: '15vh 10px' }"
      v-if="four"
    >
      DISCLAIMER: This page is still under construction and is best viewed on
      desktop.
    </div>
  </div>
  <Transition>
    <div class="quart content" :class="data.bg" :style="align" v-if="show">
      <div class="header">{{ data.header }}</div>
      <div class="description">{{ data.desc }}</div>
      <div class="info">
        <div v-for="content in data.contents" :key="content.id">
          <div class="title">{{ content.title }}</div>
          <div class="subtitle" :class="data.accent">{{ content.sub }}</div>
          <div class="body">{{ content.body }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed } from "vue";

export default {
  name: "QuartContent",
  props: ["qtr", "navi"],
  setup(props) {
    const four = computed(() => {
      return props.qtr == 4 ? true : false;
    });
    const align = computed(() => {
      switch (props.qtr) {
        case 2:
          return {
            top: 0,
            left: "50vw",
            textAlign: "right",
          };
        case 3:
          return {
            top: "50vh",
            left: 0,
            textAlign: "left",
          };
        case 4:
          return {
            top: "50vh",
            left: "50vw",
            textAlign: "right",
          };
        default:
          return {
            top: 0,
            left: 0,
            textAlign: "left",
          };
      }
    });
    const show = computed(() => {
      return props.qtr == props.navi ? true : false;
    });
    const data = computed(() => {
      switch (props.navi) {
        case 1:
          return {
            bg: "base",
            accent: "a-orange",
            header: "EXPERIENCE",
            desc: "Creating impactful solutions while doing my own explorations of technology and art in expanding interconnectivity and perspective. \n \nClick on the Navigation Circles on the bottom bar for more if you haven't yet.",
          };
        case 2:
          return {
            bg: "blue",
            accent: "a-pink",
            header: "PROFESSIONAL CAREER",
            desc: "Full-stack development solutions with product and frontend expertise.",
            contents: [
              {
                title: "Data Management & Analytics Developer",
                sub: "Pfizer (Nov 2024 - Present)",
                body: "Data engineering solutions to streamline clinical data analysis",
              },
              {
                title: "Mid Full Stack Software Engineer",
                sub: "Sprout Solutions (Apr 2024 - Aug 2024)",
                body: "Frontend expertise, UX discussions and discovery, and full-stack cross-functional support to deliver AI solutions",
              },
              {
                title: "Software Engineer",
                sub: "Maya Philippines, Inc. (Aug 2021 - Mar 2024)",
                body: "Delivery of enhancements and solutions to Maya's Pay Bills feature on their mobile app and internal biller products",
              },
            ],
          };
        case 3:
          return {
            bg: "pink",
            accent: "a-blue",
            header: "MULTIMEDIA ARTIST",
            desc: "Maximalism, dreaminess, and utilizing multiple perspectives for enhanced experience.",
            contents: [
              {
                title: "Information Design",
                sub: "Publication Design, Product Design, Data Visualization",
              },
              {
                title: "Interaction Design",
                sub: "Interface Design, User Experience, Game Development",
              },
              {
                title: "Traditional Arts",
                sub: "Illustration, Set Design, Clay-Sculpting",
              },
            ],
          };
        case 4:
          return {
            bg: "orange",
            accent: "a-black",
            header: "UNDER CONSTRUCTION",
            desc: "Interactive portfolio coming soon. In the meantime, you may check out the links to the right for my github, behance, and other paths to works of mine, or check out the PDF version of my portfolio here: .",
          };
        default:
          return {
            bg: "base",
            accent: "a-orange",
            header: "EXPERIENCE",
            desc: "Creating impactful solutions while doing my own explorations of technology and art in expanding interconnectivity and perspective. \n \nClick on the Navigation Circles on the bottom bar for more if you haven't yet.",
          };
      }
    });
    return {
      four,
      align,
      data,
      show,
      props,
    };
  },
};
</script>

<style lang="scss" scoped>
// .main {
//   background-color: $g-black;
// }
.blue {
  background-color: $n-cool;
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

.quart {
  padding: 10vh 12vw;
}

.content {
  color: $g-black;
}

.header {
  @include ib;
  font-size: 2vw;
  color: $ng-warm;
}

.description {
  @include it;
  color: $bluer;
  font-size: 1rem;
  margin-bottom: 15px;
}

.info {
  max-height: 20vh;
  overflow-y: auto;
  padding: 10px 20px;
  z-index: 20;
}

.title {
  text-transform: uppercase;
  font-family: Neo-Black, "Arial-Narrow", sans-serif;
}

.subtitle {
  @include it;
  font-style: italic;
  color: $bluer;
  font-size: 0.8rem;
}

.body {
  font-family: Neo-light, "Arial-Narrow", sans-serif;
  margin-bottom: 15px;
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
