<template>
  <div id="app">
    <j-title v-if="showTitleAndLogo"></j-title>
    <router-view/>
    <div v-if="showTitleAndLogo" class="logo"></div>
  </div>
</template>
<script>
import jTitle from '@/components/jTitle'
export default {
  components: { jTitle },
  data () {
    return {
      showTitleAndLogo: true
    }
  },
  watch: {
    $route: {
      handler (newRouter) {
        this.showTitleAndLogo = newRouter.name !== 'pageAI'
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
