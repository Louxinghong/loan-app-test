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
  min-height: calc(100% - 1rem);
  margin-bottom: 1rem;
}
</style>
