<template>
  <div class="fc">
    <div class="title">NINIELLE</div>
    <div class="body">{{ strings.lipsum2 }}</div>
    <div class="ib">{{ strings.fname }}</div>
  </div>
</template>

<script>
import strings from "../assets/strings.js";
export default {
  name: "AboutNinielle",
  setup() {
    return { strings };
  },
};
</script>

<style lang="scss" scoped>
.ib {
  font-family: Inktrap-black;
  font-size: 3vh;
}

.body {
  width: 40vh;
  text-align: justify;
  margin-bottom: 12px;
}

.title {
  font-family: Inktrap-black;
  font-size: 8vh;
  margin-top: -50px;
  color: $bluer;
}
</style>
