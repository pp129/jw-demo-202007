<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      可视化勤务指挥平台，围绕“勤务态势、勤务部署、勤务督导、勤务研判、勤务信息、勤务管理、移动勤务”进行应用建设，从派出所到市局的跨层级一体化管理。满足治安警、巡特警、交警等细分警种不同的勤务应用场景需求。
    </div>
    <div class="describe text-shadow">
      <span>勤务大数据</span>
      <span>分类勤务部署</span>
      <span>智能指挥调度</span>
      <span>实战考评体系</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QinWu'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1418px * 100vw / $screenWidth);
    height: (758px * 100vh / $screenHeight);
    position: absolute;
    top: (189px * 100vh / $screenHeight);
    left: (337px * 100vw / $screenWidth);
    overflow: hidden;
    .web{
      width: (1142px * 100vw / $screenWidth);
      height: (632px * 100vh / $screenHeight);
      position: absolute;
      top: 0;
      left: (50px * 100vw / $screenWidth);
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
      .screenshot{
        width: 91%;
        height: 83%;
        background: url("~@/assets/img/智慧公安/可视化勤务指挥平台.jpg") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1106px * 100vw / $screenWidth);
      height: (128px * 100vh / $screenHeight);
      font-family: "SourceHanSansCN-Regular", Helvetica, Arial, sans-serif;
      //font-size:(24px * 100vh / $screenHeight);
      font-weight:bold;
      text-indent: (48px * 100vw / $screenWidth);
      line-height: 1.5;
      color:#FFFFFF;
      position: absolute;
      bottom: 0;
      left: (50px * 100vw / $screenWidth);
    }
    .describe{
      width: (184px * 100vw / $screenWidth);
      //height: (300px * 100vh / $screenHeight);
      display: flex;
      flex-direction: column;
      //justify-content: space-between;
      position: absolute;
      top: (158px * 100vh / $screenHeight);
      right: 0;
      span{
        margin-bottom: (69px * 100vh / $screenHeight);
      }
    }
  }
</style>
