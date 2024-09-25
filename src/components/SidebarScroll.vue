<template>
  <div class="cont">
    <div class="arrow-u" />
    <div class="up" />
    <div class="sc">
      <a href="#/#home">
        <img :src="NielleSVG" />
      </a>
    </div>
    <div class="down" />
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
.arrow {
  &-u {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
}

.up,
.down {
  width: 3px;
  height: 100px;
  z-index: 18;
}

.cont {
  cursor: pointer;
  z-index: 20;
  width: 58px;
  height: 300px;
  top: calc(50vh - 152px);
  left: calc(7.5vw - 5px);
  position: fixed;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  @include easeOut;
  &:hover {
    .up,
    .sc {
      @include easeOut;
      background-color: $blueprint;
    }
    .arrow-u {
      @include easeOut;
      border-bottom: 5px solid $blueprint;
    }
  }
}
.sc {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  // background-color: $galaxy;
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
