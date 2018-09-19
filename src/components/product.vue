<template>
  <!-- 产品 -->
  <div class="product">
    <div class="distribution agent-top">
      <div class="content">
        <div class="sub-title">
          <label>聚合支付</label>
        </div>
        <h1>享受接入支付的简单与快捷</h1>
        <div class="desc">支付是商业变现必不可少的环节。澜湄支付 覆盖所有主流支付渠道，给你最简单、快捷的接入体验，同时提供简单易用的管理平台，让你可以集中进行跨渠道的交易管理和财务管理。澜湄支付 不是简单的聚合支付通道和路由，而是每一家企业内部的虚拟支付团队，致力于帮助企业快速、高效和高质量地建立「泛支付」模块，从容应对任何交易场景的挑战。</div>
        <div class="align-center">
          <span class="arrow">↓</span>
        </div>
      </div>
    </div>
    <div class="module-box container">
      <h2 class="module-title">彻底告别繁琐的支付接入流程</h2>
      <p class="module-desc">一次接入所有主流支付渠道和分期渠道，99.99% 系统可用性，满足你丰富的交易场景需求,为你的用户提供完美支付体验。</p>
    </div>
    <hr class="container border-top">
    <div class="module-box container">
      <h2 class="module-title">收款</h2>
      <p class="module-desc">一个 API，在任何平台和场景接入支付功能。</p>
      <div class="scenes">
        <div class="row">
          <div class="scenes-name">手机 APP 支付</div>
          <div class="scenes-right">
            <p class="scenes-title">在手机 App 内快速接入多种支付渠道</p>
            <p class="scenes-desc">只需一个聚合支付 SDK 即可在手机 App 内接入所有主流支付渠道和分期渠道，满足用户多样化的支付需求</p>
          </div>
        </div>
      </div>
      <div class="scenes-tabs clearfix">
        <div class="scenes-tab col-2" :class="index == nums ? 'active' : ''" v-for="(item,index) in lists" @click="listball(index)">
          <div>
            <i></i>
            <label>{{item}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="module-box container">
      <h2 class="module-title">付款</h2>
      <p class="module-desc">支持微信、支付宝、银行卡多种账户类型，灵活满足你的付款需求。</p>
      <div class="scenes">
        <div class="row">
          <div class="scenes-name">微信企业付款</div>
          <div class="scenes-right">
            <p class="scenes-title">企业付款至用户微信支付零钱</p>
            <p class="scenes-desc">提供企业向用户付款的功能，支持企业通过 API 接口付款。</p>
          </div>
        </div>
      </div>
      <div class="scenes-tabs scenes-tabs2 clearfix">
        <div class="col-3">&nbsp;</div>
        <div class="scenes-tab col-2" :class="index == nums2 ? 'active' : ''" v-for="(item,index) in scenes" @click="scenesball(index)">
          <div>
            <i></i>
            <label>{{item}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-banner banner" style="background-color: rgb(53, 200, 230);">
      <h3>立即获取企业专属的解决方案</h3>
      <p>
        <a class="button" style="color: rgb(53, 200, 230);" @click="contactus">联系我们</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nums:0,
      nums2:0,
      lists:["手机 APP 支付","手机网页支付","PC 网页支付","扫码支付","公众号支付","微信小程序支付"],
      scenes:["微信企业付款","支付宝转账","银行卡代付"]
    };
  },
  methods: {
    contactus(){
      this.$router.push("/contactus");
    },
    listball(index){
      this.nums = index;
    },
    scenesball(index){
      this.nums2 = index;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/product.scss";
</style>
