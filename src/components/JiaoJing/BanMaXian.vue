<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      系统通过传感设备，全范围覆盖斑马线，并实时感知斑马线上是否有行人通过。有行人通过时，点亮斑马线两旁的“跑马灯”提醒过往车辆减速慢行。各数据通过物联网络传输到服务器，经分析处理呈现各个时段车人流量图等数据，为调整信号灯及警力出勤提供有效依据。</div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'BanMaXian'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1555px * 100vw / $screenWidth);
    height: (756px * 100vh / $screenHeight);
    position: absolute;
    top: (159px * 100vh / $screenHeight);
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
        background: url("~@/assets/img/智慧交警/智慧斑马线.png") no-repeat;
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
