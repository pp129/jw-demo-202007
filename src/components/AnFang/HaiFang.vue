<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      平台综合运用北斗卫星定位、远程视频监控、光电雷达、无线探针等最新现代技术装备，实时采集、传输动态信息，有效推进船舶智能化监管和海防警务统一调度指挥，强化海上执法力量，打击海上犯罪活动，维护国家海洋权益，服务地方经济发展。
    </div>
    <div class="describe text-shadow">
      <span>融合现代高新技术</span>
      <span>综合可视化概览</span>
      <span>警务精细化指挥调度</span>
      <span>沿海要素智能化管控</span>
      <span>公众便民服务高度拓展</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HaiFang'
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
      .screenshot{
        width: 91%;
        height: 83%;
        background: url("~@/assets/img/智慧海防/海防.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1200px * 100vw / $screenWidth);
      height: (128px * 100vh / $screenHeight);
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
      width: (300px * 100vw / $screenWidth);
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
