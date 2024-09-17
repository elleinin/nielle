<template>
  <div class="fc">
    <div class="title">{{ props.title }}</div>
    <div class="body">{{ props.body }}</div>
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
  width: 40vh;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 150%;
}

.title {
  font-family: Inktrap-black;
  font-size: 7vh;
  margin-top: -50px;
  color: $bluer;
}
</style>
