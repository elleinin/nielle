<template>
  <div class="display fc">
    <div class="row2 fr">
      <div class="nielle">NIELLE</div>
    </div>
    <div class="row2">
      <div class="img ink">Under Construction</div>
    </div>
  </div>
  <div class="img asset" />
</template>

<script>
export default {
  name: "NielleView",
};
</script>

<style lang="scss" scoped>
.nielle {
  font-family: Inktrap-black;
  font-size: 10vh;
  color: #fff;
  align-self: flex-end;
  flex-grow: 1;
  z-index: 11;
}

.ink {
  background-image: $ink-home;
  width: 100%;
  height: 100%;
}

.asset {
  background-image: $star-gradient;
  height: 80vh;
  width: 100%;
  top: 10vh;
}
</style>
