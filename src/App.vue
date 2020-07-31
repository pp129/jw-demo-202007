<template>
  <div id="app">
    <j-title></j-title>
    <router-view/>
    <div class="logo"></div>
  </div>
</template>
<script>
import jTitle from '@/components/jTitle'
export default {
  components: { jTitle }
}
</script>
<style lang="scss">
  @import "~normalize.css/normalize.css";
  @import "~@/style/fonts.scss";
  /*@import "~@/style/var.scss";*/
  @import "~@/style/common.scss";
</style>
