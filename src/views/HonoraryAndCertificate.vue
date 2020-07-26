<template>
    <div class="main honor">
      <span class="icon-home" @click="home"></span>
      <span class="icon-back"></span>
        <swiper :options="swiperOption">
            <swiper-slide><div class="item item-1"></div></swiper-slide>
            <swiper-slide><div class="item item-2"></div></swiper-slide>
            <swiper-slide><div class="item item-3"></div></swiper-slide>
            <swiper-slide><div class="item item-4"></div></swiper-slide>
            <swiper-slide><div class="item item-5"></div></swiper-slide>
        </swiper>
        <div class="list">
            <div class="item">
                <div class="title">服务于国际大型会议</div>
                <ul class="content">
                    <li>2017年金砖厦门会晤</li>
                    <li>2018青岛上合峰会</li>
                    <li>2019南昌世界VR产业大会</li>
                    <li>2019世界互联网大会</li>
                    <li>98洽谈会、金鸡电影节</li>
                </ul>
            </div>
            <div class="item">
                <div class="title">荣誉资质</div>
                <ul class="content">
                    <li>厦门市科技进步二等奖</li>
                    <li>工信部全国大数据优秀产品、服务和应用解决方案全国50强(2016)</li>
                    <li>工信部智慧城市城市治理领域十大优秀解决方案</li>
                    <li>十二五中国智慧城市创新应用奖</li>
                </ul>
            </div>
        </div>
        <div class="dock"></div>
        <div class="cup"></div>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
const { swiper, swiperSlide } = require('vue-awesome-swiper')
export default {
  name: 'HonoraryAndCertificate',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        initialSlide: 2,
        loop: true,
        grabCursor: true,
        effect: 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 100,
          depth: 60,
          modifier: 1,
          slideShadows: false
        }
      }
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.honor {
  .dock {
    width: (1354px * 100vw / $screenWidth);
    height: (164px * 100vh / $screenHeight);
    background: url("~@/assets/img/honor-dock.png") no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .cup {
    width: (604px * 100vw / $screenWidth);
    height: (563px * 100vh / $screenHeight);
    background: url("~@/assets/img/cup.png") no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .swiper-container {
    width: (1056px * 100vw / $screenWidth);
    height: (610px * 100vh / $screenHeight);
    position: absolute;
    bottom: (153px * 100vh / $screenHeight);
    left: (72px * 100vw / $screenWidth);
    z-index: 2;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: (449px * 100vw / $screenWidth);
    height: (610px * 100vh / $screenHeight);
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      /*width: (445px * 100vw / $screenWidth);
      height: (606px * 100vh / $screenHeight);
      position: absolute;
      top: (14px * 100vh / $screenHeight);
      left: (19px * 100vw / $screenWidth);*/
        &-1 {
          background: url("~@/assets/img/honor_1.png") no-repeat;
          background-size: 100% 100%;
          width: (394px * 100vw / $screenWidth);
          height: (278px * 100vh / $screenHeight);
        }
        &-2 {
          background: url("~@/assets/img/honor_2.png") no-repeat;
          background-size: 100% 100%;
          width: (377px * 100vw / $screenWidth);
          height: (505px * 100vh / $screenHeight);
        }
        &-3 {
          background: url("~@/assets/img/honor_3.png") no-repeat;
          background-size: 100% 100%;
          width: (445px * 100vw / $screenWidth);
          height: (606px * 100vh / $screenHeight);
        }
        &-4 {
          background: url("~@/assets/img/honor_4.png") no-repeat;
          background-size: 100% 100%;
          width: (374px * 100vw / $screenWidth);
          height: (508px * 100vh / $screenHeight);
        }
        &-5 {
          background: url("~@/assets/img/honor_5.png") no-repeat;
          background-size: 100% 100%;
          width: (385px * 100vw / $screenWidth);
          height: (273px * 100vh / $screenHeight);
        }
    }
    &-active{
      background: url("~@/assets/img/honor-border.png") no-repeat;
      background-size: 104% 108%;
      width: (445px * 100vw / $screenWidth);
      height: (606px * 100vh / $screenHeight);
      .item{
        &-1{
          width: 85%;
          height: 89%;
        }
        &-2{
          width: 94%;
          height: 98%;
        }
        &-3{
          width: 94%;
          height: 98%;
        }
        &-4{
          width: 96%;
          height: 99%;
        }
        &-5{
          width: 85%;
          height: 89%;
        }
      }
    }
  }
  .list {
    z-index: 2;
    width: (683px * 100vw / $screenWidth);
    position: absolute;
    right: (73px * 100vw / $screenWidth);
    top: (167px * 100vh / $screenHeight);
    .item {
      margin-bottom: (60px * 100vh / $screenHeight);
      .title {
        width: 100%;
        font-size: (40px * 100vh / $screenHeight);
        margin-bottom: (24px * 100vh / $screenHeight);
        //line-height: (59px * 100vh / $screenHeight);
        font-weight: bold;
        color: #03ade8;
        background: url("~@/assets/img/honor-dot.png") no-repeat left;
        padding-left: (49px * 100vw / $screenWidth);
      }
      .content {
        padding-left: (49px * 100vw / $screenWidth);
        //width: (321px * 100vw / $screenWidth);
        width: 100%;
        padding-top: (2px * 100vh / $screenHeight);
        li {
          font-size: (35px * 100vh / $screenHeight);
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          //line-height: (48px * 100vh / $screenHeight);
          margin-top: (2px * 100vh / $screenHeight);
          margin-bottom: (24px * 100vh / $screenHeight);
        }
      }
    }
  }
}
</style>
