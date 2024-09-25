<template>
  <div class="fc">
    <div class="title">{{ strings.nielle }}</div>
    <div class="title">{{ strings.nielle }}</div>
    <div class="title">{{ strings.nielle }}</div>
    <div class="title">{{ strings.nielle }}</div>
    <div class="title">{{ strings.nielle }}</div>
    <div class="subtitle">{{ strings.fname }}</div>
  </div>
</template>

<script>
import strings from "../assets/strings.js";

export default {
  name: "AboutNielle",
  setup() {
    return { strings };
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  @include ib;
  font-size: 3vh;
}
.title {
  @include ib;
  font-size: 10vh;
  margin-top: -50px;
  &:nth-child(1) {
    color: $blueprint;
  }
  &:nth-child(2) {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $bluer;
    margin-top: -4vh;
  }
  &:nth-child(3) {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $blueprint;
    margin-top: -4vh;
  }
  &:nth-child(4) {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $n-cool;
    margin-top: -4vh;
  }
  &:nth-child(5) {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    margin-top: -4vh;
  }
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 8vh;
  }
  .subtitle {
    font-size: 2.2vh;
  }
}
</style>
