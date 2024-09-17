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
  width: 55vh;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 150%;
  padding: 20px;
}

.title {
  font-family: Inktrap-black;
  font-size: 7vh;
  margin-top: -50px;
  color: $bluer;
}

@media only screen and (max-width: 768px) {
  .body {
    width: 60vw;
    padding: 0;
  }
}
</style>
