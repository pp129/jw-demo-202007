<template>
    <div class="main">
      <span class="icon-home" @click="home"></span>
      <span class="icon-back"></span>
      <aside-menu></aside-menu>
      <component :is="comp"></component>
      <div class="logo"></div>
    </div>
</template>

<script>
import asideMenu from '../components/asideMenu'
import QinWu from '@/components/GongAn/QinWu'
export default {
  name: 'GongAn',
  components: {
    asideMenu,
    QinWu
  },
  data () {
    return {
      comp: QinWu,
      menus: [
        {
          name: 'QinWu',
          comp: QinWu
        }
      ]
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
/*@import "~@/style/var.scss";*/
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
