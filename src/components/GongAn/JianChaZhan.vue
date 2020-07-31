<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      面向治安支队和指挥中心国境，省际，市际公安检查站业务。围绕国境，省际，市际公安检查站，建立集公安检查站运行状态和人车物过检自动监测、数据汇聚、统计分析、预警研判、决策和指挥控制为一体的信息系统。
    </div>
    <div class="describe text-shadow">
      <span>常态化安检验证无需人工</span>
      <span>黑白名单智能识别人脸和车辆</span>
      <span>车辆自动引导分流和研判采集</span>
      <span>匹配安保级、常态级、移动级的安检场景</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JianChaZhan'
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
        background: url("~@/assets/img/智慧公安/厦门公安检查站治安管控系统.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1381px * 100vw / $screenWidth);
      height: (78px * 100vh / $screenHeight);
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
      width: (400px * 100vw / $screenWidth);
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
  }
</style>
