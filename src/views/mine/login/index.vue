<!--直接使用之前写的H5登录页面demo -->
<template>
  <div class="container">
    <div class="close">
      <svg-icon icon-class="close" @click.native="onClose"></svg-icon>
    </div>
    <div class="logo">
      <img src="@/images/logo.jpg" alt />
      <p>与百万用户共创美好生活</p>
    </div>
    <div class="content-all">
      <div class="account-content">
        <span class="tag">账号</span>
        <input class="account" type="text" v-model="mobile" placeholder="请输入帐号" />
      </div>
      <div class="password-content">
        <span class="tag">密码</span>
        <input class="password" type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="forget-content">
        <button class="forget">忘记密码？</button>
      </div>
      <div class="btn-content">
        <button class="login" @click="onLogin">登录</button>
        <button class="register" @click="onRegister">没有账号，前去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isClose: false,
      mobile: '',
      password: ''
    }
  },
  mounted () {
    this.isClose = false
  },
  methods: {
    onClose () {
      this.isClose = true
      this.isClose && this.$router.go(-1)
    },
    onLogin () {
      if (this.mobile === '') {
        this.$toast('账号不能为空')
      } else if (this.password === '') {
        this.$toast('密码不能为空')
      } else {
        this.$http
          .get('/api/getLogin', {
            params: {
              mobile: this.mobile,
              password: this.password
            }
          })
          .then(res => {
            if (res.data.length === 1) {
              this.$store.dispatch('user/changeLoginStatus', true)
              this.$notify({ type: 'success', message: '登录成功' })
              this.$router.push({
                name: 'UserInfo',
                params: res.data[0]
              })
            } else {
              this.$notify({ type: 'danger', message: '账号/密码有误' })
            }
          })
      }
    },
    onRegister () {
      this.$router.push('/user-register')
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  // animation: transShow 0.5s linear 0s 1 normal;
  // @keyframes transShow {
  //   from {
  //     transform: translateX(100%);
  //   }
  //   to {
  //     transform: translateX(0%);
  //   }
  // }
}

.close {
  padding: 0.3rem;

  .svg-icon {
    width: 0.4rem;
    height: 0.4rem;
  }
}

.logo {
  margin: 0.5rem 0 0;
  text-align: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
    color: crimson;
  }

  p {
    font-size: 0.2rem;
    color: #bebdbd;
  }
}

.content-all {
  position: absolute;
  width: 7rem;
  height: 5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  .account-content,
  .password-content {
    margin-top: 0.2rem;
    width: 5rem;
    height: 0.6rem;
    border-bottom: 1px solid rgb(180, 180, 180);
    display: flex;
    align-items: center;

    .tag {
      display: inline-block;
      font-size: 0.2rem;
    }
    .account,
    .password {
      width: 4.3rem;
      height: 0.5rem;
      border: none;
      padding: 0.08rem 0.1rem;
      outline: none;
      font-size: 0.2rem;
    }
  }

  .forget-content {
    width: 5rem;

    .forget {
      font-size: 0.2rem;
      float: right;
      margin: 0.2rem 0 0.5rem;
      border: none;
      background-color: #ffffff;
      color: rgb(14, 70, 255);
      font-weight: 500;
      outline: none;
      cursor: pointer;
    }
  }

  .btn-content {
    width: 4.3rem;
    display: flex;
    flex-flow: column wrap;

    .login,
    .register {
      padding: 0.12rem 0.1rem;
      border: none;
      border-radius: 0.1rem;
      margin-top: 0.2rem;
      outline: none;
      cursor: pointer;
    }
    .login {
      color: #ffffff;
      background-color: crimson;
    }

    .register {
      border: 1px solid rgb(177, 177, 177);
      color: rgb(128, 128, 128);
      background-color: #ffffff;
    }
    .register:hover {
      background-color: #eeebebb6;
    }
  }
}
</style>
