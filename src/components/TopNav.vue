<template>
  <div id="nav" class="fr">
    <div class="n-line" />
    <div class="hamburger">
      <div class="h-line" />
      <div class="h-line" />
      <div class="h-line" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped lang="scss">
#nav {
  height: 60px;
  width: 100vw;
}

.fr {
  align-content: center;
  justify-content: center;
  align-items: center;
}

.n-line {
  height: 3px;
  width: 80vw;
  left: 10vw;
  background-color: #fff;
  margin-right: 2.5vw;
}
.h-line {
  height: 3px;
  width: 30px;
  background-color: #fff;
  margin: 5px;
}
</style>
