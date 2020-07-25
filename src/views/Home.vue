<template>
  <div class="home">
    <span class="icon-home"></span>
    <span class="icon-back"></span>
    <div class="box">
      面向公安、交警、安防、军营等领域，基于北斗/GPS、物联网、云计算、5G、大数据和人工智能等技术， 汇聚警员、警情、警备、勤务、视频、事件等全要素警务资源，提供勤务实战、交通安保、治安防控、便民服务、大数据分析研判等多个方面的解决方案和信息服务。构建高度集成、高度共享、高度智能的智慧警务新格局，全面实现警务工作信息化、智能化。
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~@/style/var.scss";
  // width: (XXXpx * 100vw / #{$screenWidth})
  // height: (XXXpx * 100vh / #{$screenHeight})
  // font-size: (XXXpx * 100vh / #{$screenHeight})
  .home{
    .icon-home{
      display: block;
      width: (40px * 100vw / $screenWidth);
      height: (41px * 100vh / $screenHeight);
      background: url("~@/assets/img/home.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (35px * 100vh / $screenHeight);
      right: (166px * 100vw / $screenWidth);
      cursor: pointer;
    }
    .icon-back{
      display: block;
      width: (37px * 100vw / $screenWidth);
      height: (39px * 100vh / $screenHeight);
      background: url("~@/assets/img/back.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (38px * 100vh / $screenHeight);
      right: (82px * 100vw / $screenWidth);
      cursor: pointer;
    }
    .box{
      position: absolute;
      top: (163px * 100vh / $screenHeight);
      left: (466px * 100vw / $screenWidth);
      width: (1022px * 100vw / $screenWidth);
      height: (840px * 100vh / $screenHeight);
      background: url("~@/assets/img/box.png") no-repeat;
      background-size: 100% 100%;
      color: #FFFFFF;
      text-align: left;
      vertical-align: middle;
      font-size: (36px * 100vh / $screenHeight);
      /*padding: 83px 70px;*/
      padding: (83px * 100vh / $screenHeight) (70px * 100vw / $screenWidth) 0 (70px * 100vw / $screenWidth);
      text-indent: (72px * 100vw / $screenWidth);
      line-height: (58px * 100vh / $screenHeight);
      box-sizing: border-box;
    }
  }
</style>
