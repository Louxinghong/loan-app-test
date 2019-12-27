<template>
  <div class="container">
    <div class="user-container">
      <div class="user-info">
        <!-- <span>未登录</span> -->
      </div>
      <div class="money-info">
        <div>
          <van-button plain round color="#fc5d55" @click="onLogin"
            >登录/注册</van-button
          >
        </div>
        <span class="title">申请贷款，请先登录</span>
      </div>
      <div class="user-list">
        <div class="my-loan">
          <svg-icon icon-class="my-loan"></svg-icon>
          <p>我的借款</p>
        </div>
        <div class="my-info">
          <svg-icon icon-class="my-info"></svg-icon>
          <p>个人信息</p>
        </div>
        <div class="custom-info">
          <svg-icon icon-class="custom-info"></svg-icon>
          <p>客户信息</p>
        </div>
      </div>
    </div>

    <div class="features-list">
      <van-list>
        <van-cell v-for="(item, index) in customInfoList" :key="index">
          <svg-icon :icon-class="item.icon"></svg-icon>
          <span>{{ item.name }}</span>
          <van-icon class="arrow" name="arrow" />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      customInfoList: [
        { name: '分享有礼', icon: 'gift' },
        { name: '意见反馈', icon: 'feedback' },
        { name: '在线客服', icon: 'online-service' },
        { name: '帮助中心', icon: 'help' },
        { name: '设置', icon: 'setting' },
        { name: '异常信息', icon: 'error' }
      ]
    }
  },
  methods: {
    onLogin () {
      this.$http
        .get('/api/getMobileList', {
          params: {
            mobile: '18377054410'
          }
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.user-container {
  background-color: #ffffff;
  padding: 0.3rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #cccccc;

  .money-info {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    background: -webkit-linear-gradient(left, #fc9343, #fc5d55);
    box-shadow: 0px 5px 10px rgba(252, 121, 65, 0.4);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .title {
      color: #ffffff;
      margin-top: 0.2rem;
      font-size: 0.25rem;
    }
  }

  .user-list {
    margin-top: 0.6rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    .my-loan,
    .my-info,
    .custom-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;

      .svg-icon {
        width: 0.6rem;
        height: 0.6rem;
      }

      p {
        font-size: 0.3rem;
      }
    }
  }
}

.features-list {
  .van-cell__value {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .svg-icon {
      width: 0.45rem;
      height: 0.45rem;
      margin-right: 0.2rem;
    }

    .arrow {
      position: absolute;
      right: 0.2rem;
    }
  }
}
</style>
