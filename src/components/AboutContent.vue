<template>
  <div class="fc">
    <div class="title" :class="props.bg">{{ props.title }}</div>
    <div class="body" :class="props.bg">{{ props.body }}</div>
    <div class="subtitle">{{ props.sub }}</div>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  props: ["title", "body", "sub", "bg"],
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  @include ib;
  font-size: 3vh;
}

.body {
  width: 55vh;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 150%;
  padding: 20px;
  z-index: 10;
  border-radius: 5%;
  @include easeOut;
  &.galaxy {
    background-color: rgba(35, 32, 59, 0.7);
  }
  &.blue {
    background-color: rgba(95, 106, 177, 0.7);
  }
  &.pink {
    background-color: rgba(236, 119, 183, 0.7);
    color: rgba(35, 32, 59, 0.7);
  }
  &.orange {
    color: rgba(35, 32, 59, 0.7);
  }
}

.title {
  @include ib;
  font-size: 7vh;
  margin-top: -50px;
  color: $bluer;
  &.blue {
    color: $punk;
  }
}

@media only screen and (max-width: 768px) {
  .body {
    width: 69vw;
    padding: 0;
    font-family: Neo-Light, sans-serif;
  }
  .title {
    font-size: 10vw;
  }
  .subtitle {
    font-size: 5vw;
  }
}
</style>
