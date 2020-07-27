<template>
  <div class="content">
    <div class="web"></div>
    <div class="detail">
      基于GIS地图及物联网技术，制定统一标准规范，打破原有资源壁垒，实现各类交通设施信息的数字化综合采集、存储、管理和维护。从而促进交通设施数字化、设施运维管理 信息化，提升交通管理部门的管理水平及管理效率。
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'JiaoTongFuWu'
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
      width: (1106px * 100vw / $screenWidth);
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
