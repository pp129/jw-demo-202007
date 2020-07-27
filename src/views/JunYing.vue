<template>
  <div class="content">
    <span class="icon-home" @click="home"></span>
    <span class="icon-back"></span>
    <div class="web"></div>
    <div class="detail">
      紧密结合武警实际业务需求的实战系统， 通过对反恐处突任务的流程化、智能化管理，保证反恐处突的及时性、准确性，大幅提升掌握现场、指挥作战的能力。通过三维建模，并整合各类安保活动资源，实现安保可视化全程跟踪、应急指挥调度，确保场馆安保“可视、可防、可控”
    </div>
    <div class="describe"></div>
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'JunYing',
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .content{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .web{
      width: (1210px * 100vw / $screenWidth);
      height: (613.4px * 100vh / $screenHeight);
      position: absolute;
      top: (175px * 100vh / $screenHeight);
      left: (147px * 100vw / $screenWidth);
      background: url("~@/assets/img/web-wujing.png") no-repeat;
      background-size: 100% 100%;
    }
    .detail{
      width: (1326px * 100vw / $screenWidth);
      height: (131px * 100vh / $screenHeight);
      font-family: "SourceHanSerifCN-Medium", Helvetica, Arial, sans-serif;
      font-size:(24px * 100vh / $screenHeight);
      font-weight:bold;
      text-indent: (48px * 100vw / $screenWidth);
      line-height: 1.5;
      color:#FFFFFF;
      position: absolute;
      bottom: (121px * 100vh / $screenHeight);
      left: (132px * 100vw / $screenWidth);
    }
    .describe{
      width: (389.3px * 100vw / $screenWidth);
      height: (430px * 100vh / $screenHeight);
      background: url("~@/assets/img/descirbe-wujing.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: (259px * 100vh / $screenHeight);
      right: (54px * 100vw / $screenWidth);
    }
  }
</style>
