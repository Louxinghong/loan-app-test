<template>
  <div class="container">
    <div class="goods">
      <div class="left-container" ref="leftWrapper">
        <van-sidebar class="content" v-model="activeItem">
          <van-sidebar-item
            v-for="(item, key) in types"
            :title="item.label"
            :key="key"
            @click="onClick(key)"
          />
        </van-sidebar>
      </div>
      <div class="right-container" ref="rightWrapper">
        <div class="content">
          <div class="plan-box" id="a">0</div>
          <div class="plan-box" id="b">1</div>
          <div class="plan-box" id="c">2</div>
          <div class="plan-box" id="e">3</div>
          <div class="plan-box" id="f">4</div>
          <div class="plan-box" id="g">5</div>
          <div class="plan-box" id="h">6</div>
          <div class="plan-box" id="i">7</div>
          <div class="plan-box" id="j">8</div>
          <div class="plan-box" id="k">9</div>
          <div class="plan-box" id="l">11</div>
          <div class="plan-box" id="m">12</div>
        </div>
      </div>
    </div>
    <div class="footer-container"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Insurance',
  data () {
    return {
      activeItem: 0,
      types: []
    }
  },
  created () {
    this.$http
      .get('/api/getInsuranceType')
      .then(res => {
        this.types = res.data
        this.$nextTick(() => {
          this.initLeftScroll()
          this.initRightScroll()
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  // mounted () {
  //   window.addEventListener('scroll', this.onScroll)
  // },
  // destory () {
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  methods: {
    // onScroll () {
    //   let scrolled =
    //     document.documentElement.scrollTop || document.body.scrollTop
    //   // console.log(scrolled)
    //   let rightItems = document.getElementsByClassName('plan-box')
    //   rightItems.forEach((value, index) => {
    //     console.log(value.offsetTop)
    //     if (scrolled >= value.offsetTop && scrolled <= value.offsetTop + 25) {
    //       this.activeItem = index
    //       console.log(this.activeItem)
    //     }
    //   })
    // },
    initLeftScroll () {
      if (!this.leftScroll) {
        this.leftScroll = new BScroll(this.$refs.leftWrapper, {
          scrollY: true,
          click: true
        })
      } else {
        this.leftScroll.refresh()
      }
    },
    initRightScroll () {
      if (!this.rightScroll) {
        this.rightScroll = new BScroll(this.$refs.rightWrapper, {
          scrollY: true,
          click: true,
          probeType: 3
        })
      } else {
        this.rightScroll.refresh()
      }

      this.rightScroll.on('scroll', pos => {
        let distanceY = Math.abs(Math.round(pos.y))
        console.log(distanceY)
        let rightItems = document.getElementsByClassName('plan-box')
        rightItems.forEach((item, index) => {
          if (
            distanceY >= item.offsetTop &&
            distanceY <= item.offsetHeight + item.offsetTop
          ) {
            this.activeItem = index
          }
        })
      })
    },
    onClick (index) {
      console.log(index)
      // const height = document.getElementsByClassName('plan-box')[0].offsetHeights
      let rightItems = document.getElementsByClassName('plan-box')
      this.rightScroll.scrollToElement(rightItems[index], 1000, 0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .goods {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1rem;
    overflow: hidden;
    width: 100%;

    .left-container {
      width: 25%;
    }

    .right-container {
      width: 75%;

      .plan-box {
        width: 4rem;
        height: 2rem;
        border: 1px solid black;
        margin: 0 0 20px;
      }
    }
  }
}
</style>
