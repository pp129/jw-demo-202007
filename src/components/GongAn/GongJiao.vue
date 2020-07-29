<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      地铁/公交站点，线路等业务领域的人，物，事件，警力进行全要素信息接入与数据分析应用。
    </div>
    <div class="describe text-shadow">
      <span>密织智能感知防控网</span>
      <span>加强场景多维数据采集</span>
      <span>有力保障治安防控</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GongJiao'
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
        background: url("~@/assets/img/智慧公安/地铁安保.jpg") no-repeat;
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
      //height: (225px * 100vh / $screenHeight);
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
