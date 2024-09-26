<template>
  <div class="fr asset lines">
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
    <div class="line" />
  </div>
</template>

<script>
export default {
  name: "AssetLines",
};
</script>

<style lang="scss" scoped>
.lines {
  height: 100%;
  width: 20vw;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  z-index: 1;
}

.line {
  background-image: $sunset;
  height: 100%;
  width: 3px;
}

@media only screen and (max-width: 768px) {
  .line {
    width: 1px;
  }
}
</style>
