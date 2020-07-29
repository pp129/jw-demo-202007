<template>
  <div class="main">
    <span class="icon-back" @click="home"></span>
    <aside-menu :menus="menus" :menuIndex="menuIndex" @setActive="setActive"></aside-menu>
    <component :is="comp"></component>
<!--    <div class="logo"></div>-->
  </div>
</template>

<script>
import asideMenu from '../components/asideMenu'
import YingJiZhiHui from '@/components/AnFang/YingJiZhiHui'
import WuRenJi from '@/components/AnFang/WuRenJi'
import HaiFang from '@/components/AnFang/HaiFang'
export default {
  name: 'AnFang',
  components: { asideMenu },
  data () {
    return {
      timer: null,
      step: 30000, // 30000
      menuIndex: 0,
      menus: [
        {
          id: 0,
          pid: null,
          name: '应急指挥调度',
          comp: YingJiZhiHui
        }, {
          id: 1,
          pid: null,
          name: '无人机监管',
          comp: WuRenJi
        }, {
          id: 2,
          pid: null,
          name: '智慧海防',
          comp: HaiFang
        }
      ],
      comp: YingJiZhiHui
    }
  },
  mounted () {
    clearInterval(this.timer)
    this.comp = this.menus[this.menuIndex].comp
    this.carousel()
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    },
    carousel () {
      this.timer = setInterval(() => {
        this.menuIndex++
        if (this.menuIndex >= this.menus.length) {
          this.menuIndex = 0
        }
        this.comp = this.menus[this.menuIndex].comp
      }, this.step)
    },
    setActive (index) {
      clearInterval(this.timer)
      this.menuIndex = index
      this.comp = this.menus[this.menuIndex].comp
      this.carousel()
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
