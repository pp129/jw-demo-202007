<template>
    <div class="main">
      <span class="icon-home" @click="home"></span>
      <span class="icon-back"></span>
      <div class="aside">
        <div></div>
      </div>
      <div class="content">
        <component :is="comp"></component>
      </div>
    </div>
</template>

<script>
import QinWu from '@/components/GongAn/QinWu'
export default {
  name: 'GongAn',
  comments: {
    QinWu: QinWu
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
@import "~@/style/var.scss";
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .aside{
    width: (298px * 100vw / $screenWidth);
    height: (734px * 100vh / $screenHeight);
    background: url("~@/assets/img/menu-bg.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: (163px * 100vh / $screenHeight);
    left: (22px * 100vw / $screenWidth);
  }
  .content{
    width: (1738px * 100vw / $screenWidth);
    height: (822px * 100vh / $screenHeight);
    position: absolute;
    top: (143px * 100vh / $screenHeight);
    left: (355px * 100vw / $screenWidth);
  }
}
</style>
