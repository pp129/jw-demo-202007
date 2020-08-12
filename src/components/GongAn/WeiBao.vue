<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      通过采集、汇聚易制爆危险化学品流向流量信息，对信息进行统一管理，以信息之间相互关联关系为基础，实现易制爆危险化学品追踪溯源的信息系统。
    </div>
    <div class="describe text-shadow">
      <span>立体化溯源渠道</span>
      <span>全生命周期溯源</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeiBao'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1460px * 100vw / $screenWidth);
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
      left: (50px * 100vw / $screenWidth);
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
      .screenshot{
        width: 91%;
        height: 83%;
        background: url("~@/assets/img/智慧公安/危爆物品管控系统.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1410px * 100vw / $screenWidth);
      //height: (78px * 100vh / $screenHeight);
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
      width: (204px * 100vw / $screenWidth);
      //height: (300px * 100vh / $screenHeight);
      display: flex;
      flex-direction: column;
      //justify-content: space-between;
      position: absolute;
      top: (248px * 100vh / $screenHeight);
      right: 0;
      span{
        margin-bottom: (69px * 100vh / $screenHeight);
      }
    }
  }
</style>
