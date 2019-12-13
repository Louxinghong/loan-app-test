<template>
  <div class="container">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="info-card">
      <van-notice-bar
        color="crimson"
        background="#ffffff"
        text="重要的通知重要的通知重要的通知重要的通知重要的通知重要的通知"
        left-icon="volume-o"
      />
      <div class="loan">
        <div class="txt">
          <span>最高可借(元)</span>
          <span>500000</span>
          <span>有借有还再借不难</span>
        </div>
        <van-field
          class="mobile"
          v-model="mobile"
          clearable
          left-icon="phone-circle-o"
          placeholder="请输入手机号"
        />
        <van-button class="btn-borrow" type="warning" @click="onBorrow">我要借钱</van-button>
      </div>
    </div>
    <div class="functions">
      <van-tabbar
        class="content"
        v-model="activeFunction"
        active-color="crimson"
        inactive-color="#000"
      >
        <van-tabbar-item>
          <svg-icon icon-class="withdraw"></svg-icon>
          <span>提额</span>
        </van-tabbar-item>
        <van-tabbar-item>
          <svg-icon icon-class="partner"></svg-icon>
          <span>合伙人</span>
        </van-tabbar-item>
        <van-tabbar-item>
          <svg-icon icon-class="financial"></svg-icon>
          <span>金融</span>
        </van-tabbar-item>
        <van-tabbar-item>
          <svg-icon icon-class="loan-calculate"></svg-icon>
          <span>贷款试算</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <van-steps direction="vertical" :active="actived">
      <van-step>
        <h3>注册信息</h3>
        <p>完善个人相关信息及贷款条件</p>
      </van-step>
      <van-step>
        <h3>提交审批</h3>
        <p>完善后提交审批</p>
      </van-step>
      <van-step>
        <h3>审核完成</h3>
        <p>系统进行信息审核，决定是否进行放贷</p>
      </van-step>
      <van-step>
        <h3>发放贷款</h3>
        <p>审核通过，发放贷款至用户账户</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      mobile: '',
      activeFunction: 0,
      actived: 0,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.actived++
      if (this.actived > 3) {
        this.actived = 0
      }
    }, 900)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    onBorrow () {
      this.$toast({ message: '干啥干啥', icon: 'balance-list-o' })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background: #cccccc;
  width: 100%;
  height: 100%;

  .van-swipe {
    img {
      width: 100%;
      height: 4.2rem;
    }
  }

  .info-card {
    position: relative;
    width: 95%;
    margin: -1rem auto 0;
    border-radius: 10px;
    background: #ffffff;
    padding: 0 10px 30px;

    .loan {
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      .txt {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        & > * {
          margin-top: 0.2rem;
        }
        span:nth-child(1) {
          font-size: 0.3rem;
          color: #909098;
        }
        span:nth-child(2) {
          font-size: 0.9rem;
          font-weight: 550;
          border-bottom: 1px solid rgb(173, 171, 171);
        }
        span:nth-child(3) {
          font-size: 0.3rem;
          color: #909098;
        }
      }
      .mobile {
        border: 1px solid rgb(173, 171, 171);
        border-radius: 10px;
        width: 85%;
        margin-top: 0.5rem;
      }

      .btn-borrow {
        margin: 0 auto;
        width: 85%;
        border-radius: 10px;
        box-shadow: 0px 5px 8px rgba(254, 121, 55, 0.4);
        margin-top: 0.5rem;
      }
    }
  }

  .functions {
    width: 95%;
    margin: 0.3rem auto;
    border-radius: 10px;
    background: #ffffff;

    .content {
      position: relative;
      width: 90%;
      height: 1.5rem;
      margin: 0 auto;

      /deep/ .van-tabbar-item__text {
        height: 1.5rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: center;
        .svg-icon {
          width: 0.5rem;
          height: 0.4rem;
        }
      }
    }
  }

  .van-steps {
    width: 95%;
    margin: 0 auto 0.4rem;
    border-radius: 10px;
  }
}
</style>
