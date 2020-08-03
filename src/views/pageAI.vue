<template>
    <div class="pageAi">
      <span class="icon-home" @click="home"></span>
    </div>
</template>

<script>
export default {
  name: 'pageAI',
  methods: {
    home () {
      window.location.href = window.HomeUrl
    }
  }
}
</script>

<style>
.pageAi{
  width: 100%;
  height: 100%;
  background: url("~@/assets/img/大数据.png") no-repeat;
  background-size: 100% 100%;
}
</style>
