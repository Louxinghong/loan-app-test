<template>
  <div class="layout">
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from './components/content/index.vue'
import Footer from './components/footer/index.vue'

export default {
  name: 'Layout',
  components: {
    Content,
    Footer
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
