<template>
  <div class="sc">
    <img :src="NielleSVG" />
  </div>
</template>

<script>
import NielleSVG from "@/assets/NielleSVG3.svg";
import InstagramSVG from "@/assets/icons8/icons8-instagram-old.svg";

export default {
  name: "SidebarScroll",
  setup() {
    return { NielleSVG, InstagramSVG };
  },
};
</script>

<style lang="scss" scoped>
.sc {
  position: fixed;
  z-index: 20;
  top: calc(50vh - 55px);
  left: calc(7.5vw - 5px);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  // background-color: $galaxy;
  @include easeOut;
  &:hover {
    background-color: $blueprint;
  }
}

img {
  width: 58px;
  height: 58px;
  padding: 5px;
}

@media only screen and (max-width: 768px) {
  .sc {
    top: 28px;
    left: calc(6vw - 5px);
    width: 45px;
    height: 45px;
  }
  img {
    width: 45px;
    height: 45px;
  }
}
</style>
