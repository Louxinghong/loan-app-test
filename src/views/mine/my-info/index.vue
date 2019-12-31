<template>
  <div class="container">
    <nav-go-back title="个人信息" />
    <div class="my-info-list">
      <van-list>
        <van-cell v-for="(item, index) in myinfoList" :key="index">
          <svg-icon :icon-class="item.icon"></svg-icon>
          <div class="name-desc">
            <p class="name">
              {{ item.name }}
              <span
                :class="item.must ? 'must' : 'optional'"
              >{{ item.must ? '(必填)' : '(选填)' }}</span>
            </p>
            <span class="desc">{{ item.desc }}</span>
          </div>

          <van-tag class="tag" v-if="!item.success" round plain type="warning">未操作</van-tag>
          <van-tag class="tag" v-else round type="success">已完成</van-tag>
          <van-icon class="arrow" name="arrow" />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfoList',
  data () {
    return {
      myinfoList: [
        {
          name: '实名认证',
          desc: '认证您本人的身份证信息',
          must: true,
          success: false,
          icon: 'verified'
        },
        {
          name: '我的联系人',
          desc: '添加通讯录常用联系人',
          must: true,
          success: false,
          icon: 'contact-person'
        },
        {
          name: '我的店铺',
          desc: '店铺信息',
          must: true,
          success: false,
          icon: 'shop'
        },
        {
          name: '我的银行卡',
          desc: '绑定您本人的银行储蓄卡',
          must: true,
          success: true,
          icon: 'bank-card'
        },
        {
          name: '我的资产',
          desc: '提高授信额度，最高提升100%额度',
          must: false,
          success: false,
          icon: 'assets'
        },
        {
          name: '我的客户经理',
          desc: '绑定可享受一对一服务',
          must: false,
          success: false,
          icon: 'account-manager'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.my-info-list {
  .van-cell__value {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .svg-icon {
      width: 0.7rem;
      height: 0.7rem;
      margin-right: 0.2rem;
    }

    .name-desc {
      .name {
        margin: 0;
        font-size: 0.3rem;

        .must {
          font-size: 0.2rem;
          color: crimson;
        }

        .optional {
          font-size: 0.2rem;
          color: #999;
        }
      }

      .desc {
        color: #999;
        font-size: 0.2rem;
      }
    }

    .tag {
      position: absolute;
      right: 0.5rem;
    }

    .arrow {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      position: absolute;
      right: 0.2rem;
    }
  }
}
</style>
