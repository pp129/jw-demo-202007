<template>
  <div class="main">
    <span class="icon-back" @click="home"></span>
    <aside-menu :menus="menus" :menuIndex="menuIndex" @setActive="setActive"></aside-menu>
    <component :is="comp"></component>
    <div class="logo"></div>
  </div>
</template>

<script>
import asideMenu from '../components/asideMenu'
import TeQin from '@/components/JiaoJing/TeQin'
import DaShuJu from '@/components/JiaoJing/DaShuJu'
import JiaoTongFuWu from '@/components/JiaoJing/JiaoTongFuWu'
import GuanKong from '@/components/JiaoJing/GuanKong'
import BanMaXian from '@/components/JiaoJing/BanMaXian'
export default {
  name: 'JiaoJing',
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
          name: '交通特勤安保',
          comp: TeQin
        }, {
          id: 1,
          pid: null,
          name: '交通大数据分析',
          comp: DaShuJu
        }, {
          id: 2,
          pid: null,
          name: '交通服务管理',
          comp: JiaoTongFuWu
        }, {
          id: 3,
          pid: null,
          name: '智慧斑马线',
          comp: BanMaXian
        }, {
          id: 4,
          pid: null,
          name: '智慧交通管控',
          comp: GuanKong
        }
      ],
      comp: TeQin
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
