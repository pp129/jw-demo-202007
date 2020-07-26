<template>
    <div class="main">
      <span class="icon-home" @click="home"></span>
      <span class="icon-back"></span>
      <aside-menu :menus="menus" :menuIndex="menuIndex" @setActive="setActive"></aside-menu>
      <component :is="comp"></component>
      <div class="logo"></div>
    </div>
</template>

<script>
import asideMenu from '../components/asideMenu'
import QinWu from '@/components/GongAn/QinWu'
import ZhiAn from '@/components/GongAn/ZhiAn'
import JieMian from '@/components/GongAn/JieMian'
import AnBao from '@/components/GongAn/AnBao'
export default {
  name: 'GongAn',
  components: {
    asideMenu,
    QinWu,
    JieMian,
    AnBao
  },
  data () {
    return {
      timer: null,
      step: 5000, // 30000
      menuIndex: 0,
      comp: QinWu,
      menus: [
        {
          id: 0,
          pid: null,
          name: 'QinWu',
          comp: QinWu
        },
        {
          id: 1,
          pid: null,
          name: 'ZhiAn',
          comp: ZhiAn
        },
        {
          id: 2,
          pid: 1,
          name: 'JieMian',
          comp: JieMian
        },
        {
          id: 3,
          pid: 1,
          name: 'AnBao',
          comp: AnBao
        }
      ]
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
