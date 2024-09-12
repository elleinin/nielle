<template>
  <div class="img asset" />
  <div class="fc">
    <div class="row2">
      <div class="nielle">NIELLE</div>
    </div>
    <div class="row2 add">
      <div class="img ink"><br />Under Construction</div>
    </div>
  </div>
  <div id="about">HelloWorld</div>
</template>

<script>
export default {
  name: "NielleView",
};
</script>

<style lang="scss" scoped>
#about {
  height: 100vh;
}
//MAKE NIELLE FIXED for transition to about
.nielle {
  font-family: Inktrap-black;
  font-size: 10vh;
  color: #fff;
  z-index: 11;
  // padding-bottom: 5vh;
  width: 100vw;
  top: 38vh;
  position: fixed;
}
.add {
  z-index: 3;
  transform: translateY(-5vh);
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
  top: 5vh;
}
</style>
