<template>
  <div class="content">
    <div class="web"></div>
    <div class="detail">
      为规范街面巡防工作开展，建设功能复合型、场景多元化、信息高度互通的警务站与警力巡防体系。提供集街面安全态势监测、识疑查危、数据汇聚、预警研判、统计分析、指挥调度功能为一体的信息系
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'JieMian'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1555px * 100vw / $screenWidth);
    height: (756px * 100vh / $screenHeight);
    position: absolute;
    top: (159px * 100vh / $screenHeight);
    left: (326px * 100vw / $screenWidth);
    overflow: hidden;
    .web{
      width: (1142px * 100vw / $screenWidth);
      height: (632px * 100vh / $screenHeight);
      position: absolute;
      top: 0;
      left: 0;
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .detail{
      width: (1381px * 100vw / $screenWidth);
      height: (78px * 100vh / $screenHeight);
      font-family: "SourceHanSerifCN-Medium", Helvetica, Arial, sans-serif;
      font-size:(24px * 100vh / $screenHeight);
      font-weight:bold;
      text-indent: (48px * 100vw / $screenWidth);
      line-height: 1.5;
      color:#FFFFFF;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .describe{
      width: (374px * 100vw / $screenWidth);
      height: (509px * 100vh / $screenHeight);
      background: url("~@/assets/img/describe-jm.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (48px * 100vh / $screenHeight);
      right: 0;
    }
  }
</style>
