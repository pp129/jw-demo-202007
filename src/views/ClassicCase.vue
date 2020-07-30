<template>
  <div class="main case">
    <span class="icon-back" @click="home"></span>
    <span class="case-title">{{ caseTitle }}</span>
    <swiper :options="swiperOption" ref="swiper" @slideChange="slideChange">
      <swiper-slide><div class="item item-1"></div></swiper-slide>
      <swiper-slide><div class="item item-2"></div></swiper-slide>
      <swiper-slide><div class="item item-3"></div></swiper-slide>
      <swiper-slide><div class="item item-4"></div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
const { swiper, swiperSlide } = require('vue-awesome-swiper')
export default {
  name: 'ClassicCase',
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    }
  },
  data () {
    return {
      caseTitle: '',
      titles: [
        '交通大数据分析应用',
        '南昌警卫安保指挥平台',
        '金砖厦门会晤警卫安保',
        '可视化勤务指挥支撑平台'
      ],
      swiperOption: {
        initialSlide: 0,
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -200,
          depth: 600,
          modifier: 1,
          slideShadows: false
        }
      }
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    },
    slideChange () {
      const index = this.swiper.activeIndex
      this.caseTitle = this.titles[index]
    }
  },
  mounted () {
    this.caseTitle = this.titles[0]
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.case {
    .case-title {
        display: block;
        font-size: (36px * 100vh / $screenHeight);
        color: #ffffff;
        position: absolute;
        top: (100px * 100vh / $screenHeight2);
        left: 50%;
        margin-left: (-80px * 100vw / $screenWidth2);
    }
    .swiper-container {
        width: 100%;
        height: (340px * 100vh / $screenHeight2);
        position: absolute;
        top: (150px * 100vh / $screenHeight2);
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
            border: 1rem solid rgba(22, 208, 255, 0.9);
            border-radius: 3rem;
            box-shadow: 0 0 3rem rgba(22, 208, 255, 1);
            &-1 {
                background: url("~@/assets/img/case/交通大数据分析应用.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-2 {
                background: url("~@/assets/img/case/南昌安保.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-3 {
                background: url("~@/assets/img/case/金砖厦门会晤警卫安保.png")
                    no-repeat;
                background-size: 100% 100%;
            }
            &-4 {
                background: url("~@/assets/img/case/可视化勤务.png")
                    no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .swiper-slide-active {
        background: url("~@/assets/img/case-border-a.png") no-repeat;
        background-size: 100% 100%;
        .item {
            border: 0;
            border-radius: 0;
            box-shadow: none;
        }
    }
}
</style>
