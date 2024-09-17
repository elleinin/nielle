<template>
  <div class="fc asset circles">
    <div class="asset circ" :class="props.bg" />
    <div class="asset circ" :class="props.bg" />
    <div class="asset circ" :class="props.bg" />
    <div class="asset circ" :class="props.bg" />
  </div>
</template>

<script>
export default {
  name: "AssetCircles",
  props: ["bg"],
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.circles {
  height: 100%;
  width: 100%;
  // position: fixed;
}

.circ {
  &:nth-child(1) {
    width: 45vh;
    height: 45vh;
    border: 3px solid;
  }
  &:nth-child(2) {
    width: 58vh;
    height: 58vh;
    border: 1px solid white;
  }
  &:nth-child(3) {
    width: 30vh;
    height: 30vh;
    border: 2px solid;
    transform: translateY(-25vh);
  }
  &:nth-child(4) {
    width: 30vh;
    height: 30vh;
    border: 2px solid;
    transform: translateY(25vh);
  }
  &.main {
    border-color: $blueprint;
  }
  &.blue {
    border-color: $n-cool;
  }
  &.pink {
    border-color: $polaris;
  }
  &.orange {
    border-color: $solar;
  }
}
</style>
