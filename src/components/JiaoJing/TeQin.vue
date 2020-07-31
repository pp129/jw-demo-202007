<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      针对重大活动安保和领导日常出行场景，通过监测交通特勤任务指挥各个环节，排除风险，为重要嘉宾和领导提供安全、有序、顺畅、高效交通出行保障。全方位“可视、可防、可控”
    </div>
    <div class="describe text-shadow">
      <span>全程可视化展示</span>
      <span>事前规划</span>
      <span>事中跟踪</span>
      <span>事后研判</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeQin'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1443px * 100vw / $screenWidth);
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
        background: url("~@/assets/img/智慧交警/安保.gif") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1120px * 100vw / $screenWidth);
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
      width: (179px * 100vw / $screenWidth);
      //height: (300px * 100vh / $screenHeight);
      display: flex;
      flex-direction: column;
      //justify-content: space-between;
      position: absolute;
      top: (148px * 100vh / $screenHeight);
      right: 0;
      span{
        margin-bottom: (69px * 100vh / $screenHeight);
      }
    }
    /*.describe{
      width: (279px * 100vw / $screenWidth);
      height: (391px * 100vh / $screenHeight);
      background: url("~@/assets/img/describe-tqab.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (129px * 100vh / $screenHeight);
      right: 0;
    }*/
  }
</style>
