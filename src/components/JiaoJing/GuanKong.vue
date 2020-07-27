<template>
  <div class="content">
    <div class="web"></div>
    <div class="detail">
      智能交通管控平台应用大数据、云计算、人工智能、视频分析、交通预测等技术进行信息互联、交通信息资源整合与共享、快速研判决策与扁平化指挥调度，汇聚集成所有交警相关业务应用，实现交通指挥可视化、管理数字化、信息共享化，提高交警部门的道路交通管理能力和服务水平。
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'GuanKong'
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
    /*.web{
      width: (1142px * 100vw / $screenWidth);
      height: (632px * 100vh / $screenHeight);
      position: absolute;
      top: 0;
      left: 0;
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
    }*/
    .detail{
      width: (1355px * 100vw / $screenWidth);
      height: (131px * 100vh / $screenHeight);
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
    /*.describe{
      width: (297px * 100vw / $screenWidth);
      height: (508px * 100vh / $screenHeight);
      background: url("~@/assets/img/describe-ab.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (48px * 100vh / $screenHeight);
      right: 0;
    }*/
  }
</style>
