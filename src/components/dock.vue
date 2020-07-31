<template>
<div>
  <div class="dock"></div>
  <div class="dock-box">
    <div
    v-for="item in docks"
    :key="item.link"
    class="dock-items"
    :class="item.active ? 'dock-items-active' : ''"
    @click="changeView(item)">
      <span>{{ item.content }}</span>
    </div>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'dock',
  data () {
    return {
      docks: [
        {
          name: 'Home',
          content: '业务简介',
          link: 'Home',
          active: true
        },
        {
          name: 'ClassicCase',
          content: '典型案例',
          link: 'ClassicCase',
          active: false
        },
        {
          name: 'HonoraryAndCertificate',
          content: '荣誉资质',
          link: '/HonoraryAndCertificate',
          active: false
        }
      ]
    }
  },
  mounted () {
    this.setActive()
  },
  methods: {
    setActive (name) {
      const link = this.$route
      _.each(this.docks, e => {
        e.active = false
      })
      _.find(this.docks, { name: name || link.name }).active = true
    },
    changeView (item) {
      _.each(this.docks, e => {
        e.active = false
      })
      this.$router.push(item.link)
      item.active = true
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  /*@import "~@/style/var.scss";*/
  .dock {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: (630px * 100vw / $screenWidth2);
    height: (82px * 100vh / $screenHeight2);
    margin-left: (-315px * 100vw / $screenWidth2);
    background: url("~@/assets/img/bottom_lights.png") no-repeat;
    background-size: 100% 100%;
  }
  .dock-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: (435px * 100vw / $screenWidth2);
    margin-left: (-217.5px * 100vw / $screenWidth2);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .dock-items {
        width: (233px * 100vw / $screenWidth);
        height: (84px * 100vh / $screenHeight);
        cursor: pointer;
        background: url("~@/assets/img/icon-dock.png") no-repeat;
      background-size: 100% 100%;
        text-align: center;
        span {
            font-size: (20px * 100vh / $screenHeight2);
            font-family: SourceHanSansCN-Regular, serif;
            font-weight: 400;
            color: rgba(0, 180, 241, 1);
            line-height: (40px * 100vh / $screenHeight2);
        }
        &-active {
            width: (167px * 100vw / $screenWidth2);
            height: (51px * 100vh / $screenHeight2);
            background: url("~@/assets/img/icon-dock-a.png") no-repeat center (-20px * 100vh / $screenHeight);
          background-size: 100% 100%;
            span {
                color: #fff;
            }
        }
        &:hover {
            width: (167px * 100vw / $screenWidth2);
            height: (51px * 100vh / $screenHeight2);
          background: url("~@/assets/img/icon-dock-a.png") no-repeat center (-20px * 100vh / $screenHeight);
          background-size: 100% 100%;
            span {
                color: #fff;
            }
        }
    }
  }
</style>
