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
import GongJiao from '@/components/GongAn/GongJiao'
import XiaoQu from '@/components/GongAn/XiaoQu'
import JianChaZhan from '@/components/GongAn/JianChaZhan'
export default {
  name: 'GongAn',
  components: { asideMenu },
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
          name: '可视化勤务指挥平台',
          comp: QinWu
        },
        {
          id: 1,
          pid: null,
          name: '社会治安防控体系',
          comp: ZhiAn
        },
        {
          id: 2,
          pid: 1,
          name: '智慧街面巡防系统',
          comp: JieMian
        },
        {
          id: 3,
          pid: 1,
          name: '大型活动安保系统',
          comp: AnBao
        },
        {
          id: 4,
          pid: 1,
          name: '地铁公交防控',
          comp: GongJiao
        },
        {
          id: 5,
          pid: 1,
          name: '智慧安防小区',
          comp: XiaoQu
        },
        {
          id: 6,
          pid: 1,
          name: '公安检查站管控',
          comp: JianChaZhan
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
