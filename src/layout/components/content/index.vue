<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="less" scoped>
.content {
  min-height: 100vh;
  margin-bottom: 1rem;
}
</style>
