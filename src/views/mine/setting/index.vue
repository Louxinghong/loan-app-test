<template>
  <div class="container">
    <nav-page title="设置" />
    <van-list>
      <van-cell v-for="(item, index) in settingList" :key="index" :title="item.name">
        <van-icon class="arrow" name="arrow" />
      </van-cell>
    </van-list>
    <van-button class="logout" block @click="onLogout">安全退出</van-button>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      settingList: [
        { name: '修改密码' },
        { name: '客服电话' },
        { name: '关于我们' }
      ]
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('user/changeLoginStatus', false)
      this.$router.push('/mine/user-info')
      this.$notify({ type: 'success', message: '退出登录' })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;

  .logout {
    margin-top: 0.4rem;
    color: crimson;
  }
}
</style>
