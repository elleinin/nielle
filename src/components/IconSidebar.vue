<template>
  <div class="fc">
    <a href="/#/#home">
      <img :src="HomeSVG" />
    </a>
    <a href="https://www.linkedin.com/in/ninielle/">
      <img :src="LinkedinSVG" />
    </a>
    <a href="https://github.com/elleinin">
      <img :src="GithubSVG" />
    </a>
    <a href="https://www.behance.net/ninielle">
      <img :src="BehanceSVG" />
    </a>
    <a href="https://www.instagram.com/nyx.nielle/">
      <img :src="InstagramSVG" />
    </a>
  </div>
</template>

<script>
import HomeSVG from "@/assets/icons8/icons8-home.svg";
import LinkedinSVG from "@/assets/icons8/icons8-linkedin.svg";
import GithubSVG from "@/assets/icons8/icons8-github.svg";
import BehanceSVG from "@/assets/icons8/icons8-behance.svg";
import InstagramSVG from "@/assets/icons8/icons8-instagram-old.svg";

export default {
  name: "IconSidebar",
  setup() {
    return { HomeSVG, LinkedinSVG, GithubSVG, BehanceSVG, InstagramSVG };
  },
};
</script>

<style lang="scss" scoped>
.fc {
  position: fixed;
  z-index: 19;
  top: 0;
  right: calc(7.5vw - 5px);
}

img {
  width: 35px;
  height: 35px;
  padding: 5px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(49deg) brightness(109%)
    contrast(101%);
  &:hover {
    filter: invert(79%) sepia(89%) saturate(740%) hue-rotate(297deg)
      brightness(99%) contrast(103%);
  }
  @include easeOut;
}

@media only screen and (max-width: 768px) {
  .fc {
    right: calc(6vw - 5px);
  }
}
</style>
