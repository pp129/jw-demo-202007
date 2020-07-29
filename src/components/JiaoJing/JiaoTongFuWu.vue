<template>
  <div class="content">
<!--    <div class="web"></div>-->
    <swiper :options="swiperOption" ref="swiper" @slideChange="slideChange">
      <swiper-slide v-for="(item,index) in prods" :key="index"><div class="item" :class="'item-'+index"></div></swiper-slide>
    </swiper>
    <div class="detail">
      {{detail}}
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
const { swiper, swiperSlide } = require('vue-awesome-swiper')
export default {
  name: 'JiaoTongFuWu',
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    // swiper () {
    //   return this.$refs.swiper.swiper
    // },
    // detail () {
    //   return this.prods[this.swiper.activeIndex].detail
    // }
  },
  data () {
    return {
      swiper: null,
      detail: '',
      swiperOption: {
        autoplay: false,
        initialSlide: 0,
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 40,
          stretch: 400,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }
      },
      prods: [{
        name: '交通设施管理系统',
        detail: '基于GIS地图及物联网技术，制定统一标准规范，打破原有资源壁垒，实现各类交通设施信息的数字化综合采集、存储、管理和维护。从而促进交通设施数字化、设施运维管理 信息化，提升交通管理部门的管理水平及管理效率。'
      }, {
        name: '占道施工管理系统',
        detail: '为了对轨道、道路等占道施工的审批流程和施工情况进行统一管理，简化原有的占道施工审批流程，将传统落后的纸质作业方式更新为高效快捷的信息化模式，对占道施工审批和施工信息进行统一的管理和存储，保证统计分析施工信息的准确性，提高交警支队的管理效率。'
      }, {
        name: '交通隐患管理系统',
        detail: '采用大数据分析技术对交通警情进行分析研判，分析交通隐患点，并针对交通隐患管理的记录、管理、督办和分析研判需求提供全生命周期的管理，对交通隐患排查、事故预防、交通治理、交通组织改善、勤务部署等工作提供数据决策支持。'
      }]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = this.$refs.swiper.swiper
      this.detail = this.prods[this.swiper.activeIndex].detail
    })
  },
  methods: {
    slideChange () {
      const index = this.swiper.activeIndex
      this.detail = this.prods[index].detail
    }
  }
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
    .swiper-container {
      width: (1491px * 100vw / $screenWidth);
      height: (603.3px * 100vh / $screenHeight);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
    .swiper-slide {
      background-size: cover;
      width: (499px * 100vw / $screenWidth2);
      height: (298px * 100vh / $screenHeight2);
      .item {
        width: (397px * 100vw / $screenWidth2);
        height: (244px * 100vh / $screenHeight2);
        position: absolute;
        top: (28px * 100vh / $screenHeight2);
        left: (52px * 100vw / $screenWidth2);
        border: 0.3vw solid rgba(22, 208, 255, 0.9);
        border-radius: 3rem;
        box-shadow: 0 0 3rem rgba(22, 208, 255, 1);
        &-0 {
          background: url("~@/assets/img/智慧交警/交通设施管理系统.png")
          no-repeat;
          background-size: 100% 100%;
        }
        &-1 {
          background: url("~@/assets/img/智慧交警/占道施工.png")
          no-repeat;
          background-size: 100% 100%;
        }
        &-2 {
          background: url("~@/assets/img/智慧交警/交通隐患管理.png")
          no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .swiper-slide-active {
      background: url("~@/assets/img/web-bg.png") no-repeat;
      background-size: 100% 100%;
      .item {
        border: 0;
        border-radius: 0;
        box-shadow: none;
      }
    }
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
      left: (100px * 100vw / $screenWidth);
    }
  }
</style>
