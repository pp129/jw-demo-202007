<template>
  <div class="title" :class="title==='警务大数据AI应用平台'?'title_ai':''">
    <i class="logo"></i>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'jTitle',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.title{
  width: (545px * 100vw / $screenWidth);
  height: (60px * 100vh / $screenHeight);
  position: absolute;
  top: (34px * 100vh / $screenHeight);
  left: 50%;
  margin-left: (-272.5px * 100vw / $screenWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.title_ai{
    width: (645px * 100vw / $screenWidth);
    margin-left: (-322.5px * 100vw / $screenWidth);
  }
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
