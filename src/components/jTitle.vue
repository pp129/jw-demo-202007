<template>
  <div class="title">
    <i class="logo"></i>
    <p>北斗智慧警务大脑</p>
  </div>
</template>

<script>
export default {
  name: 'jTitle'
}
</script>

<style scoped lang="scss" type="text/scss">
.title{
  width: (545px * 100vw / $screenWidth);
  height: (60px * 100vh / $screenHeight);
  position: absolute;
  top: (24px * 100vh / $screenHeight);
  left: 50%;
  margin-left: (-272.5px * 100vw / $screenWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
  i{
    display: block;
    width: (72px * 100vw / $screenWidth);
    height: (53px * 100vh / $screenHeight);
    background: url("~@/assets/img/title-logo.jpg") no-repeat;
    background-size: 100% 100%;
  }
  p{
    font-family: "SourceHanSansCN-Bold", Helvetica, Arial, sans-serif;
    font-size: (56px * 100vh / $screenHeight);
    color: #FFFFFF;
  }
}
</style>
