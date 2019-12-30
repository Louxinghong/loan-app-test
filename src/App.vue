<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

// 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
// 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation完成之后移除
.slide-right-enter-active {
  transform: translate3d(0, 0, 0);
}

// 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除
.slide-right-leave {
  transform: translate3d(0, 0, 0);
}
// 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation完成之后移除
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active {
  transform: translate3d(0, 0, 0);
}

.slide-left-leave {
  transform: translate3d(0, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
