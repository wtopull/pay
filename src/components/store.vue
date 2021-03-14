<template>
    <!-- 多门店系统 -->
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
                    <h3>线下门店</h3>
                    <p>- 支持用户主扫、用户被扫等多种支付方式</p>
                    <p>- 门店间交易独立，管理独立，拥有各自的商户平台</p>
                    <p>- 总部直接收款、门店独立收款两种方式同时支持</p>
                    <p>- 门店交易明细、与总部分润明细等账务清晰可统计</p>
                </div>
            </div>
            <div class="module-item" :class="$route.name">
                <div class="module-desc mod">
                    <h3>线上商城</h3>
                    <p>- 支持 PC、APP、H5、微信公众号、小程度多场景下的支付接入</p>
                    <p>- 聚合支付 SDK 一次性接入主流支付渠道</p>
                    <p>- 线上商城交易可独立管理，支持交易查询、退款、报表下载等</p>
                    <p>- 拥有全面的经营状况分析：交易额、交易笔数、支付渠道占比、订单转化率等</p>
                </div>
                <i class="right-img"></i>
            </div>
            <div class="module-item" :class="$route.name">
                <i class="left-img"></i>
                <div class="module-desc">
                    <h3>总部</h3>
                    <p>- 支持线上、线下多场景多渠道支付</p>
                    <p>- 线上、线下交易可统一管理也可独立管理</p>
                    <p>- 灵活添加多门店，门店经营数据分开管理</p>
                    <p>- 基于订单维度，通过分润 API 或分润模版灵活触发分润</p>
                    <p>- 支持自定义分润结算周期，满足总部、门店间资金结算需求</p>
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
