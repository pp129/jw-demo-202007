<template>
    <div class="aside">

    </div>
</template>

<script>
export default {
  name: 'asideMenu'
}
</script>

<style scoped lang="scss" type="text/scss">
  /*@import "~@/style/var.scss";*/
  .aside{
    width: (298px * 100vw / $screenWidth);
    height: (734px * 100vh / $screenHeight);
    background: url("~@/assets/img/menu-bg.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: (163px * 100vh / $screenHeight);
    left: (22px * 100vw / $screenWidth);
  }
</style>
