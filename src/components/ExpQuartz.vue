<template>
  <div class="quart base" :style="align" />
  <Transition>
    <div class="quart title" :class="bg" :style="align" v-if="show" />
  </Transition>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ExpContent",
  props: ["quart", "nav"],
  setup(props) {
    const show = computed(() => {
      return props.quart == props.nav ? true : false;
    });
    const bg = computed(() => {
      switch (
        props.quart //you really need to turn this into an interface
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
    const align = computed(() => {
      switch (props.quart) {
        case 1:
          return {
            top: 0,
            left: "50vw",
          };
        case 2:
          return {
            top: "50vh",
            left: 0,
          };
        case 3:
          return {
            top: "50vh",
            left: "50vw",
          };
        default:
          return {
            top: 0,
            left: 0,
          };
      }
    });
    const data = computed(() => {
      switch (
        props.quart //you really need to turn this into an interface
      ) {
        case 1:
          return {
            title: "PROFESSIONAL CAREER",
            subtitle:
              "Full-stack development solutions with product and frontend expertise.",
            content: [
              {
                role: "Data Management & Analytics Developer",
                company: "Pfizer",
                function:
                  "Data engineering solutions to streamline clinical data analysis",
              },
              {
                role: "Mid Full Stack Software Engineer",
                company: "Sprout Solutions",
                function:
                  "Frontend expertise, UX discussions and discovery, and full-stack cross-functional support to deliver AI solutions",
              },
              {
                role: "Software Engineer",
                company: "Maya Philippines, Inc.",
                function:
                  "Delivery of enhancements and solutions to Maya's Pay Bills feature on their mobile app and internal biller products",
              },
            ],
          };
        case 2:
          return {
            title: "MULTIMEDIA ARTIST",
            subtitle:
              "Maximalism, dreaminess, and utilizing multiple perspectives for enhanced experience.",
            content: [
              {
                specialty: "Information Design",
                subcategories:
                  "Publication Design, Product Design, Data Visualization",
                style: "Utilizing multiple perspectives to expand experience",
              },
              {
                specialty: "Interaction Design",
                subcategories:
                  "Interface Design, User Experience, Game Development",
                style:
                  "Gamification of the simple things, and adding dimension and personality to static assets",
              },
              {
                role: "Traditional Arts",
                subcategories: "Illustration, Set Design, Clay-Sculpting",
                style:
                  "Explorations of the mundane in executing dreamier scenes.",
              },
            ],
          };
        case 3:
          return {
            title: "UNDER CONSTRUCTION",
            subtitle:
              "Interactive portfolio coming soon. In the meantime, you may check out the links to the right for my github, behance, and other paths to works of mine, or check out the PDF version of my portfolio here: .",
          };
        default:
          return "main";
      }
    });
    return {
      align,
      bg,
      data,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
// .main {
//   background-color: $g-black;
// }
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

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
