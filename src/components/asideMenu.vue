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
        console.log(this.$refs)
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
      console.log(index)
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
    .item{
      cursor: pointer;
      z-index: 2;
    }
  }
</style>
