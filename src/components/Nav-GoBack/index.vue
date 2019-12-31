<template>
  <div class="nav-go-back">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: 'NavGoBack',
  global: true,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
