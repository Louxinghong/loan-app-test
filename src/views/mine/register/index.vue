<template>
  <div class="container">
    <nav-go-back title="注册" />
    <div class="list">
      <van-cell-group>
        <van-field v-model="name" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="mobile" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="password" label="密码" placeholder="请输入密码" />
        <van-field v-model="passwordAgain" label="再次输入" placeholder="请再次输入密码" />
        <van-field v-model="code" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button
            slot="button"
            size="small"
            type="info"
            @click="onGetCode"
            :disabled="isSend"
          >{{ isSend ? `${count}s` : '获取验证码' }}</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <van-button class="btn-register" size="large" type="info" @click="onRegister">确认</van-button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      mobile: '',
      password: '',
      passwordAgain: '',
      code: '',
      count: 0,
      isSend: false,
      timer: null
    }
  },
  methods: {
    onGetCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT

        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.isSend = true
            this.count--
          } else {
            clearInterval(this.timer)
            this.timer = null
            this.isSend = false
            this.count = 60
          }
        }, 1000)
      }
    },
    onRegister () {
      this.$http
        .post('/api/getRegister', {
          mobile: this.mobile,
          password: this.password,
          name: this.name
        })
        .then(res => {
          this.$notify({ type: 'success', message: '注册成功' })
          this.$router.replace('/user-login')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;

  .list {
    margin-top: 0.4rem;
  }
  .btn-register {
    display: block;
    margin: 0.4rem auto;
    width: 90%;
  }
}
</style>
