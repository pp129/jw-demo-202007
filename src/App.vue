<template>
  <div id="app">
    <j-title v-if="showTitle" :title="title"></j-title>
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
      showTitle: true,
      title: '北斗智慧警务大脑'
    }
  },
  watch: {
    $route: {
      handler (newRouter) {
        // this.showTitle = newRouter.name !== 'pageAI'
        this.title = newRouter.meta.title
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
