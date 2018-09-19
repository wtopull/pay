<template>
  <!-- 解决方案 -->
  <div class="agent">
    <div class="distribution agent-top" :class="$route.name">
      <div class="desc">
        <h1>多级代理分销解决方案</h1>
        <h5>打通会员、分销商体系，为多级代理分销平台提供线上线下多场景的交易体系</h5>
        <div class="align-center">
          <span class="arrow"></span>
          <p>
            <a @click="contactus">联系我们</a>
          </p>
        </div>
      </div>
      <ul class="wave">
        <li class="wave-1"></li>
        <li class="wave-2"></li>
        <li class="wave-3"></li>
      </ul>
    </div>
    <div class="module-box container">
      <h2 class="module-title">服务场景</h2>
      <div class="module-item" :class="$route.name">
        <i class="left-img"></i>
        <div class="module-desc">
          <h3>平台</h3>
          <p>- 支持多场景多渠道支付</p>
          <p>- 余额体系、优惠券体系同步使用</p>
          <p>- 快捷搭建及维护分销商、会员关系体系</p>
          <p>- 基于订单维度，通过 API 或者模板灵活统计分润</p>
          <p>- 支持自定义分润结算周期，满足与分销商间复杂的分润管理需求</p>
        </div>
      </div>
      <div class="module-item" :class="$route.name">
        <div class="module-desc mod">
          <h3>分销商</h3>
          <p>- 独立登录管理平台，管理日常订单</p>
          <p>- 分账户管理订单收入、分润、支出，账务清晰</p>
          <p>- 分销商可以自由发展下级分销商</p>
        </div>
        <i class="right-img"></i>
      </div>
      <div class="module-item" :class="$route.name">
        <i class="left-img"></i>
        <div class="module-desc">
          <h3>会员</h3>
          <p>- 拥有自己的会员账户及余额账户</p>
          <p>- 可通过支付宝、微信钱包或余额支付</p>
          <p>- 灵活接收平台推荐奖励、交易分润等</p>
          <p>- 交易及资金明细清晰</p>
        </div>
      </div>
    </div>
    <div class="bottom-banner" :class="$route.name">
      <h3>立即获取企业专属的解决方案</h3>
      <p>
        <a class="button" @click="contactus">联系我们</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    contactus(){
      this.$router.push("/contactus");
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/agent.scss";
</style>
