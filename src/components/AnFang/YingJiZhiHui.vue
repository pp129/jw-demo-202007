<template>
  <div class="content">
    <div class="web">
      <div class="screenshot"></div>
    </div>
    <div class="detail">
      应急指挥调度平台，是以警务综合平台、信息研判平台、地理信息平台、大数据中心为基础，以视频监控系统、GPS卫星定位系统、图像传输系统为辅助，以手机报警定位、警务勤务管理、现代通信技术等功能为支撑的公安指挥体系
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'YingJiZhiHui'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1404px * 100vw / $screenWidth);
    height: (775px * 100vh / $screenHeight);
    position: absolute;
    top: (159px * 100vh / $screenHeight);
    left: (337px * 100vw / $screenWidth);
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
        background: url("~@/assets/img/智慧海防/应急.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: (55px * 100vh / $screenHeight);
        left: (43px * 100vw / $screenWidth);
        border-radius: 1vw;
      }
    }
    .detail{
      width: (1354px * 100vw / $screenWidth);
      //height: (128px * 100vh / $screenHeight);
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
      width: (185px * 100vw / $screenWidth);
      height: (264px * 100vh / $screenHeight);
      background: url("~@/assets/img/describe-yingji.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (145px * 100vh / $screenHeight);
      right: 0;
    }
  }
</style>
