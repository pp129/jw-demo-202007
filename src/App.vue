<template>
  <div id="app">
    <j-title :title="title"></j-title>
    <router-view/>
<!--    <div class="logo"></div>-->
  </div>
</template>
<script>
import jTitle from '@/components/jTitle'
export default {
  components: { jTitle },
  data () {
    return {
      title: '北斗智慧警务大脑'
    }
  },
  watch: {
    $route: {
      handler (newRouter) {
        if (newRouter.name !== 'pageAI') {
          this.title = '北斗智慧警务大脑'
        } else {
          this.title = '警务大数据AI应用平台'
        }
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss">
  @import "~normalize.css/normalize.css";
  @import "~@/style/fonts.scss";
  /*@import "~@/style/var.scss";*/
  @import "~@/style/common.scss";
</style>
