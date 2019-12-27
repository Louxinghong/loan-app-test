<template>
  <van-tabbar route class="footer" v-model="active" active-color="crimson" inactive-color="#000">
    <van-tabbar-item to="/home">
      <svg-icon icon-class="home"></svg-icon>
      <p>首页</p>
    </van-tabbar-item>
    <van-tabbar-item to="/monetary-page/monetary">
      <svg-icon icon-class="monetary"></svg-icon>
      <p>金融</p>
    </van-tabbar-item>
    <van-tabbar-item>
      <svg-icon icon-class="insurance"></svg-icon>
      <p>保险</p>
    </van-tabbar-item>
    <van-tabbar-item to="/mine/user-info">
      <svg-icon icon-class="mine"></svg-icon>
      <p>我的</p>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.footer {
  height: 1rem;
  z-index: 1000 !important;

  /deep/ .van-tabbar-item__text {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    .svg-icon {
      width: 0.5rem;
      height: 0.4rem;
    }
    p {
      margin: 0.1rem 0;
    }
  }
}
</style>
