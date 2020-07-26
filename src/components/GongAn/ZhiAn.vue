<template>
  <div class="content">
<!--    <div class="web"></div>-->
    <div class="detail">
      平台基于 “智慧警务大脑”，以及十余载智慧公安业务积淀与技术能力，按照公安部的技术统一标准进行规范建设，并针对治安实际业务需求的精细化挖掘，服务涵盖社会治安防控系统的九大实战应用系统，打造“上下贯通、横向连通、标准统一、数据共享”的社会治安防控平台。
    </div>
    <div class="describe"></div>
  </div>
</template>

<script>
export default {
  name: 'ZhiAn'
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: (1378px * 100vw / $screenWidth);
    height: (822px * 100vh / $screenHeight);
    position: absolute;
    top: (143px * 100vh / $screenHeight);
    left: (355px * 100vw / $screenWidth);
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
      width: (1378px * 100vw / $screenWidth);
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
      /*width: (184px * 100vw / $screenWidth);
      height: (365px * 100vh / $screenHeight);
      background: url("~@/assets/img/descirbe-qwksh.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (146px * 100vh / $screenHeight);
      right: 0;*/
    }
  }
</style>
