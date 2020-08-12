<template>
    <div class="pageAi">
      <span class="icon-home icon-home-2" @click="home"></span>
      <div class="mask"></div>
      <video class="web" :src="videoSrc" autoplay="autoplay" loop="loop" muted="muted"></video>
    </div>
</template>

<script>
export default {
  name: 'pageAI',
  data () {
    return {
      videoSrc: require('@/assets/img/demo.mp4')
    }
  },
  methods: {
    home () {
      window.location.href = window.HomeUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.pageAi{
  width: 100%;
  height: 100%;
  .mask{
    width: 100%;
    height: (100px * 100vh / $screenHeight);
    position: absolute;
    top: 0;
    left: 0;
    //margin-left: (-944.5px * 100vw / $screenWidth);
    background: url("~@/assets/img/mask.png") no-repeat;
    background-size: 100% 100%;
    z-index: 2;
  }
  .web{
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 1;
  }
}
</style>
