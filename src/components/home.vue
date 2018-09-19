<template>
  <div class="home">
    <div class="swiper">
      <div class="bannerBox">
        <transition-group tag="ul" class='slide-ul' name="list">
          <!-- <li :class="index===currentIndex ? 'active':''" :style="{backgroundImage: 'url(/static/img/index/'+item.img+'.jpg)'}" v-show="index===currentIndex" v-for="(item,index) in banners" :key="index"> -->
          <li v-for="(item,index) in banners" :key="index" v-show="index===currentIndex">
            <img :src="'/static/img/index/'+item.img+'.jpg'" alt="">
          </li>
        </transition-group>
      </div>
      <div class="banner-desc" :class="'banner-desc-'+k" v-for="(item,k) in banners" v-if="k ===currentIndex ">
        <h1 class="animation3-h">{{item.title}}</h1>
        <p class="animation2-p">{{item.detail}}</p>
      </div>
    </div>
    <div class="swiper-desc clearfix container">
      <div class="item-title col-3" style="opacity: .7;">
        <div class="bg-line">
          <div class="child-line" :class="currentIndex == 0 ? 'active':''"></div>
        </div>
        <div class="line-desc">聚合支付</div>
      </div>
      <div class="item-title col-3" style="opacity: .7;">
        <div class="bg-line">
          <div class="child-line" :class="currentIndex == 1 ? 'active':''"></div>
        </div>
        <div class="line-desc">H5收银台</div>
      </div>
      <div class="item-title col-3" style="opacity: .7;">
        <div class="bg-line">
          <div class="child-line" :class="currentIndex == 2 ? 'active':''"></div>
        </div>
        <div class="line-desc">移动收银APP</div>
      </div>
      <div class="item-title col-3" style="opacity: .7;">
        <div class="bg-line">
          <div class="child-line" :class="currentIndex == 3 ? 'active':''"></div>
        </div>
        <div class="line-desc">代理商系统</div>
      </div>
    </div>
    <div class="difficult">
      <h3 class="text-center">企业接入支付的难点</h3>
      <div class="clearfix">
        <div class="item col-3" :style="{lineHeight:item.lineHeight}" @mouseover="selectStyle(item)" @mouseout="outStyle(item)" v-for="(item,index) in difficult">
          <h4>{{item.h4}}</h4>
          <div class="difficult-desc">
            <p v-for="(k,indexf) in item.details">{{k}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="link-all">
      <div>
        <h1>用交易连接一切</h1>
        <p>澜湄支付 是每一家企业内部的虚拟支付团队，帮助企业快速高效的搭建自己的支付系统。无论企业是否已经对接支付渠道，都可以使用 澜湄支付 的产品和服务。作为支付技术服务商，澜湄支付 提供标准化支付产品及全面的支付渠道，并坚持阳光支付，只负责信息处理，不参与资金清算，是企业坚实的商业合作伙伴。
        </p>
      </div>
    </div>
    <div class="product-module container">
      <div class="product-item clearfix left">
        <h2>强大的技术能力</h2>
        <p class="mobile-center">行业一流的团队提供便捷、稳定和安全的技术服务。全平台 SDK 1 点接入全部主流支付渠道，你无需专门建立一个支付团队也可搭建专属的会员账户系统和多级商户系统；</p>
        <p class="mobile-center">两地三中心容灾系统，99.99% 系统可用性，所有数据的传输和存储已达到 PCI DSS 认证标准。</p>
        <div class="product-box-bottom clearfix">
          <div class="col-6">
            <h2>3</h2>
            <p>中心容灾系统</p>
          </div>
          <div class="col-6">
            <h2>99.99%</h2>
            <p>系统可用性</p>
          </div>
        </div>
        <i></i>
      </div>
      <div class="product-item clearfix right">
        <h2>高效的运营管理</h2>
        <p class="mobile-center">管理平台悉数呈现多方交易数据，支持多角色协同，统一管理所有的业务和账务数据，多纬度分析业务运行状况。</p>
        <p class="mobile-center">无论是技术、运营还是财务人员，均可拥有高效、精准、体验绝佳的一站式管理平台。</p>
        <div class="product-box-bottom clearfix">
          <div class="col-6">
            <h2>1</h2>
            <p>站式管理平台</p>
          </div>
        </div>
        <i></i>
      </div>
      <div class="product-item clearfix left">
        <h2>专业的全流程服务</h2>
        <p class="mobile-center">澜湄支付 支持个性化定制和私有化部署。方案组全程跟进定制化业务需求，可部署企业本地服务器，数据安全可控。</p>
        <p class="mobile-center">客户成功团队从接口联调、测试上线到后期系统运维、管理平台使用等各方向全面提供 7*10 小时服务。</p>
        <div class="product-box-bottom clearfix">
          <div class="col-6">
            <h2>7×10</h2>
            <p>小时服务</p>
          </div>
        </div>
        <i></i>
      </div>
      <div class="product-item clearfix right">
        <h2>私有化部署方案</h2>
        <p class="mobile-center">除 SaaS 部署模式外，澜湄支付 也提供支付私有化部署方案，以更好的满足客户对数据安全、监管合规、内部业务系统集成的需求。</p>
        <p class="mobile-center">针对企业支付系统私有化部署需求，澜湄支付 可以提供完整的业务功能，完善的支付基础架构， 并帮企业与已有的业务系统做深度整合， 帮企业搭建一套专属的专业支付系统。
        </p>
        <i></i>
      </div>
    </div>
    <div class="partner">
      <div class="container clearfix">
        <div class="col-6">
          <h2>让支付<br> 简单、方便和温暖
          </h2>
          <a href="#/login" class="button white" @click="tologin">成为 澜湄支付 客户 →</a>
        </div>
        <div class="col-6">
          <div class="desc text-left">
            <h4>澜湄支付 伙伴计划</h4>
            <h5>开放・共赢・分享・协作</h5>
            <p>诚邀具备企业软件服务经验的合作伙伴，共建支付服务新生态。</p>
            <a href="#/merchantApply" class="button white" @click="merchantApply">成为 澜湄支付 合作伙伴 →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineHeight: "160px",
      difficult: [
        {
          h4: "支付渠道碎片化",
          details: [
            "如何选择碎片化的支付渠道来服务越来越丰富的交易场景；",
            "如何获取行业最具竞争力的支付通道费率。"
          ]
        },
        {
          h4: "产品研发成本高",
          details: [
            "交易系统的开发涉及支付接口对接、订单系统、账务系统等「泛支付」模块，开发费时费力，并需要不断维护升级。"
          ]
        },
        {
          h4: "账务管理复杂",
          details: [
            "多变的交易场景和线上线下全渠道使运营、财务人员面临复杂的账务管理。"
          ]
        },
        {
          h4: "支付业务设计难",
          details: [
            "支付行业渐趋专业化、规范化，企业需要具备更高的支付和交易系统设计以及业务规划能力。"
          ]
        }
      ],
      currentIndex: 0,
      banners: [
        {
          img: "index_banner_0",
          title: "接入便捷",
          detail: "覆盖所有主流支付渠道"
        },
        {
          img: "index_banner_1",
          title: "H5收银台",
          detail: "为您提供便捷的收银系统"
        },
        {
          img: "index_banner_2",
          title: "移动收银",
          detail: "自动识别，随时随地收款"
        },
        {
          img: "index_banner_3",
          title: "代理商系统",
          detail: "实现高效灵活的分润管理"
        }
      ]
    };
  },
  created() {
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
  methods: {
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.banners.length - 1) {
        this.currentIndex = 0;
      }
    },
    selectStyle(item) {
      this.$nextTick(function() {
        this.$set(item, "lineHeight", "30px");
      });
    },
    outStyle(item) {
      this.$set(item, "lineHeight", "160px");
    },
    merchantApply() {
      this.$router.push("/merchantApply");
    },
    tologin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
