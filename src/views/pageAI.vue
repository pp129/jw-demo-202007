<template>
    <div class="pageAi">
      <span class="icon-home icon-home-2" @click="home"></span>
      <video class="web" :src="videoSrc" autoplay="autoplay" loop="loop" muted="muted"></video>
<!--      <div class="detail">-->
<!--        平台充分运用北斗、物联网、空间地理信息、云计算、大数据、人工智能等新一代信息技术，构建符合警务实战需求导向的大数据研判业务体系，服务于各业务系统，辅助警务指挥决策和实战。-->
<!--      </div>-->
<!--      <video class="web" :src="videoSrc" autoplay="autoplay" loop="loop" muted="muted"></video>-->
<!--      <div class="describe text-shadow">-->
<!--        <span>勤务管理提升</span>-->
<!--        <span>出警效率提升</span>-->
<!--        <span>社会治安提升</span>-->
<!--        <span>拥堵治理提升</span>-->
<!--      </div>-->
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
  /*background: url("~@/assets/img/bg2.png") no-repeat;*/
  /*background-size: 100% 100%;*/
  /*.web{
    width: (1283px * 100vw / $screenWidth);
    height: (660px * 100vh / $screenHeight);
    position: absolute;
    top: (336px * 100vh / $screenHeight);
    left: (51px * 100vw / $screenWidth);
  }*/
  .web{
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 1;
  }
  .detail{
    width: (1307px * 100vw / $screenWidth);
    height: (78px * 100vh / $screenHeight);
    font-family: "SourceHanSansCN-Regular", Helvetica, Arial, sans-serif;
    //font-size:(24px * 100vh / $screenHeight);
    /*font-weight:bold;*/
    text-indent: (48px * 100vw / $screenWidth);
    line-height: 1.5;
    color:#FFFFFF;
    position: absolute;
    top: (181px * 100vh / $screenHeight);
    left: (268px * 100vw / $screenWidth);
  }
  .describe{
    width: (160px * 100vw / $screenWidth);
    //height: (225px * 100vh / $screenHeight);
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    position: absolute;
    top: (373px * 100vh / $screenHeight);
    right: (231px * 100vw / $screenWidth);
    span{
      margin-bottom: (111px * 100vh / $screenHeight);
    }
  }
}
</style>
