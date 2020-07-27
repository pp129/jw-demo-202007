<template>
  <div class="aside">
    <div v-for="(item,index) in menus" :key="index" class="item" :ref="'item-'+index" @click="setActive(index)">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'asideMenu',
  props: {
    menus: Array,
    menuIndex: Number
  },
  watch: {
    menuIndex: {
      handler (newValue, oldValue) {
        _.each(this.menus, e => {
          e.active = false
        })
        this.menus[newValue].active = true
        this.setClass()
      },
      deep: true
    }
  },
  created () {
    this.init()
  },
  mounted () {
    // console.log(this.menus)
    // console.log(this.menuIndex)
    // this.buildTree()
  },
  methods: {
    init () {
      _.each(this.menus, e => {
        e.active = false
      })
      this.menus[this.menuIndex].active = true
      this.$nextTick(() => {
        // console.log(this.$refs)
        this.setClass()
      })
    },
    setClass () {
      _.each(this.$refs, (e, i) => {
        const index = i.split('-')[1]
        const item = this.menus[index]
        e[0].classList.toggle('item-node-active', (item.pid && item.active))
        e[0].classList.toggle('item-node', (item.pid && !item.active))
        e[0].classList.toggle('item-parent-active', (!item.pid && item.active))
        e[0].classList.toggle('item-parent', (!item.pid && !item.active))
      })
    },
    setActive (index) {
      // console.log(index)
      this.$emit('setActive', index)
    }
  }
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
    z-index: 1;
    padding-top: (50px * 100vh / $screenHeight);
    .item{
      cursor: pointer;
      z-index: 2;
      color: #FFFFFF;
      text-align: center;
      &-parent{
        width: (247px * 100vw / $screenWidth);
        height: (91px * 100vh / $screenHeight);
        margin-left: (17px * 100vw / $screenWidth);
        margin-bottom: (18px * 100vh / $screenHeight);
        background: url("~@/assets/img/menu-button.png") no-repeat;
        background-size: 100% 100%;
        font-family:NotoSansHans-Regular,serif;
        font-size: (20px * 100vh / $screenHeight);
        line-height: 2.5;
        text-indent: 3vw;
        &-active{
          width: (247px * 100vw / $screenWidth);
          height: (91px * 100vh / $screenHeight);
          margin-left: (17px * 100vw / $screenWidth);
          margin-bottom: (18px * 100vh / $screenHeight);
          background: url("~@/assets/img/menu-botton-select.png") no-repeat;
          background-size: 100% 100%;
          font-family: NotoSansHans-Bold,serif;
          font-size: (20px * 100vh / $screenHeight);
          color: #00FFFF;
          line-height: 2.5;
          text-indent: 3vw;
        }
      }
      &-node{
        width: (195px * 100vw / $screenWidth);
        height: (58px * 100vh / $screenHeight);
        margin-left: (88px * 100vw / $screenWidth);
        margin-bottom: (40px * 100vh / $screenHeight);
        background: url("~@/assets/img/sub-menu-button.png") no-repeat;
        background-size: 100% 100%;
        font-family:NotoSansHans-Regular,serif;
        font-size: (17px * 100vh / $screenHeight);
        line-height: 3.5;
        /*text-indent: 1vw;*/
        &-active{
          width: (197px * 100vw / $screenWidth);
          height: (60px * 100vh / $screenHeight);
          margin-left: (49px * 100vw / $screenWidth);
          margin-bottom: (21px * 100vh / $screenHeight);
          background: url("~@/assets/img/sub-menu-button-select.png") no-repeat;
          background-size: 100% 100%;
          font-family: NotoSansHans-Bold,serif;
          font-size: (21px * 100vh / $screenHeight);
          color: #00FFFF;
          line-height: 2.7;
          /*text-indent: 1vw;*/
        }
      }
    }
  }
</style>
