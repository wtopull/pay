<template>
    <!-- 新零售 -->
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
                    <h3>会员管理</h3>
                    <p>- 全方位沉淀会员数据，线上、线下一套会员数据，统一集中管理</p>
                    <p>- 提供会员画像、会员忠诚度、流失风险监测、会员客群管理、动态补贴、数据监测等服务，高效管理会员生命周期</p>
                    <p>- 交易数据互通，线上下单，线下提货；线下缺货，线上代发</p>
                    <p>- 可通过余额实现线上充值，线下自动扣款提货，实现无需排队、自助结账、无人售货，极大降低运营成本</p>
                </div>
            </div>
            <div class="module-item" :class="$route.name">
                <div class="module-desc mod">
                    <h3>门店管理</h3>
                    <p>- 管理多层级业务关系，门店之间可共享会员数据，打破营销壁垒</p>
                    <p>- 门店可独立管理交易数据，也可以汇总管理</p>
                    <p>- 门店和总部之间可灵活分润、结算</p>
                </div>
                <i class="right-img"></i>
            </div>
            <div class="module-item" :class="$route.name">
                <i class="left-img"></i>
                <div class="module-desc">
                    <h3>营销管理</h3>
                    <p>- 利用店员引导、支付即会员等方式采集线下消费者数据并在线上营销</p>
                    <p>- 线上/线下付款后，可以主动/定期给会员推送优惠券，提高会员留存率</p>
                    <p>- 线上/线下使用微信公众号/小程序支付后，企业可以发放红包/会员卡/优惠券功能，刺激会员二次消费，提升会员粘性</p>
                    <p>- 预测订单，提供未来一段时间内特定商品的进货量建议，有效降低商品报损，提升店铺利润</p>
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
        contactus() {
            this.$router.push("/contactus");
        },
    },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/agent.scss";
</style>
