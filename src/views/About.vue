<template>
  <div id="about">
    <div class="fc">
      <div class="title">NIELLE</div>
      <div class="title">NIELLE</div>
      <div class="title">NIELLE</div>
      <div class="title">NIELLE</div>
      <div class="title">NIELLE</div>
      <div class="ib">Niña Gabrielle A. Pascual</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss" scoped>
.ib {
  font-family: Inktrap-black;
  font-size: 3vh;
}
.title {
  font-family: Inktrap-black;
  font-size: 10vh;
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
#about {
  height: 100vh;
}
</style>
