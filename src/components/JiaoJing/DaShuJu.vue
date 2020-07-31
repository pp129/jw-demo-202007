<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      基于高可用大数据分布式架构技术，全面整合交通数据资源，集数据的自由筛选、多维碰撞、情报深度研判分析为一体，为公安交管部门提供城市交通感知、交通安全保障、交通事故处理、车辆稽查、勤务管理提升、交通信号优化的一体化辅助决策支撑
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'DaShuJu'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1516px * 100vw / $screenWidth);
    height: (773px * 100vh / $screenHeight);
    position: absolute;
    top: (174px * 100vh / $screenHeight);
    left: (337px * 100vw / $screenWidth);
    overflow: hidden;
    .web{
      width: (1142px * 100vw / $screenWidth);
      height: (632px * 100vh / $screenHeight);
      position: absolute;
      top: 0;
      left: 0;
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
      .screenshot{
        width: 91%;
        height: 83%;
        background: url("~@/assets/img/智慧交警/大数据.gif") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1283px * 100vw / $screenWidth);
      height: (128px * 100vh / $screenHeight);
      font-family: "SourceHanSansCN-Regular", Helvetica, Arial, sans-serif;
      //font-size:(24px * 100vh / $screenHeight);
      font-weight:bold;
      text-indent: (48px * 100vw / $screenWidth);
      line-height: 1.5;
      color:#FFFFFF;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .describe{
      width: (281px * 100vw / $screenWidth);
      height: (327px * 100vh / $screenHeight);
      background: url("~@/assets/img/describe-dsj.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (136px * 100vh / $screenHeight);
      right: 0;
    }
  }
</style>
