<template>
    <div class="fund">
        <div class="distribution agent-top" style="background-image: url(/static/img/fund/solution-fund-banner.jpg);">
            <div class="desc">
                <h1>资金存管解决方案</h1>
                <h5>澜湄支付 携手多家银行为商户提供一站式资金存管解决方案，助力商户解决业务合规问题，为商户及其用户的资金安全保驾护航。</h5>
                <div class="align-center">
                    <span class="arrow">↓</span>
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
            <h2 class="module-title">全方位服务</h2>
            <p class="module-desc">支持多家银行不同特点的资金存管类产品，为商户提供合规、专业、安全的服务。</p>
            <div class="module-item module-item-1">
                <i class="left-img" style="background-image: url(/static/img/fund/full-service.svg);"></i>
                <div class="module-desc">
                    <div class="item-desc">
                        <h5>账户开立</h5>
                        <p>协助商户在 澜湄支付 的合作银行开具交易资金存管账户。</p>
                    </div>
                    <div class="item-desc">
                        <h5>资金管理</h5>
                        <p>存管银行帮助商户对交易资金按真实归属方进行管理，保障商户、用户的资金安全。</p>
                    </div>
                    <div class="item-desc">
                        <h5>全流程覆盖</h5>
                        <p>从收款到存管，再到资金结算，澜湄支付 均提供配套的产品和技术服务。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-banner" style="background-image: linear-gradient(17deg, rgb(74, 126, 13), rgb(135, 191, 32));">
            <h3>立即获取企业专属的解决方案</h3>
            <p>
                <a class="button" style="color: rgb(99, 153, 21);" @click="contactus">联系我们</a>
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
@import "@/assets/scss/fund.scss";
</style>
