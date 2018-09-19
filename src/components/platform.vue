<template>
  <div class="platform">
    <div class="distribution agent-top">
      <div class="content">
        <div class="sub-title">
          <label>多级商户系统</label>
        </div>
        <h1>1 个工程师就能接入的多级商户系统</h1>
        <div class="desc">混乱的商户关系、低效的财务对账、复杂的结算需求让你疲于应对？澜湄支付 多级商户系统是针对多级商户场景的支付系统解决方案，无论平台、代理、分销，还是任何复杂的商业形态，均可利用多级商户系统对店铺、代理商及分销商进行层级管理，全局把控交易和账务，实现自由灵活的分账管理，与合作伙伴灵活有序地分享利益。</div>
        <div class="align-center">
          <span class="arrow">↓</span>
        </div>
      </div>
    </div>
    <div class="module-box container">
      <h2 class="module-title">全方位满足多级商户的应用场景</h2>
      <p class="module-desc">全面支持平台、代理、分销等多种商业形态，让你轻松管理全平台的交易和账务，高效实现多级商户的账务清分。</p>
    </div>
    <hr class="container border-top">
    <div class="module-box container">
      <h2 class="module-title">完善的账户体系</h2>
      <p class="module-desc">澜湄支付 多级商户系统高效的多级商户体系，让你快速梳理商户结构，搭建复杂场景下的商户关系，便捷地管理商户层级和基本信息。</p>
      <div class="big-row">
        <div class="big-item" :style="{backgroundImage: 'url(/static/img/platform/'+item.boximg+'.png)'}" :class="index==nums1 ? 'box-active':''" v-for="(item,index) in list1" @click="list1ball(item,index)">
          <span class="box-desc-title">{{item.title}}</span>
          <div class="box-desc-message">{{item.detail}}</div>
          <i :style="{backgroundImage: 'url(/static/img/platform/'+item.path+'.png)'}"></i>
        </div>
      </div>
    </div>
    <div class="module-box container module-box-right clearfix">
      <h2 class="module-title">高效的分润管理</h2>
      <p class="module-desc">澜湄支付 多级商户系统提供针对平台、代理、分销形态的分润模型和全面开放的分润 API，你可以根据自身业务形态自由选择，轻松实现不同场景下的高效分润。</p>
      <div class="big-row" style="background-image: url(/static/img/platform/account-rect-img-server.png);">
        <div class="big-item" :style="{backgroundImage: 'url(/static/img/platform/'+item.boximg+'.png)'}" :class="index==nums2 ? 'box-active':''" v-for="(item,index) in list2" @click="list2ball(item,index)">
          <span class="box-desc-title">{{item.title}}</span>
          <div class="box-desc-message">{{item.detail}}</div>
          <i :style="{backgroundImage: 'url(/static/img/platform/'+item.path+'.png)'}"></i>
        </div>
      </div>
    </div>
    <div class="module-box container">
      <h2 class="module-title">灵活的结算配置</h2>
      <p class="module-desc">管理的商户越多，结算需求越复杂。澜湄支付 多级商户系统支持定制化的结算方式和多样化的结算周期，满足你多种多样的结算需求，完美支撑合作伙伴的资金运转。</p>
      <div class="big-row" style="background-image: url(/static/img/platform/account-rect-img-server.png);">
        <div class="big-item box-active" style="background-image: url(/static/img/platform/settle-type.png);">
          <span class="box-desc-title">结算方式</span>
          <div class="box-desc-message">按照交易明细逐笔结算，按照交易明细汇总结算。</div>
          <i style="background-image: url(/static/img/platform/settle-type-big.png);"></i>
        </div>
        <div class="big-item" style="background-image: url(undefined);">
          <span class="box-desc-title"></span>
          <div class="box-desc-message"></div>
        </div>
      </div>
    </div>
    <div class="module-box container module-box-right clearfix">
      <h2 class="module-title">高效的财务对账</h2>
      <p class="module-desc">针对不同的对账主体和对账场景，澜湄支付 多级商户系统提供轻松、省心的账务展示、核对和差错处理。我们确保数据逻辑清晰和账务数据准确，让你高效完成内部对账、商户对账和渠道对账，降低财务成本。</p>
      <div class="big-row" style="background-image: url(/static/img/platform/account-rect-img-server.png);">
        <div class="big-item" :class="index == nums3 ? 'box-active' :''" :style="{backgroundImage: 'url(/static/img/platform/'+item.boximg+'.png)'}" v-for="(item,index) in list3" @click="list3ball(item,index)">
          <span class="box-desc-title">{{item.title}}</span>
          <div class="box-desc-message">{{item.detail}}</div>
          <i :style="{backgroundImage: 'url(/static/img/platform/'+item.path+'.png)'}"></i>
        </div>
      </div>
    </div>
    <div class="account-box">
      <h3>适用于复杂的多级商户商业形态</h3>
      <div class="img-content">
        <div class="img-wrap">
          <i :style="{backgroundImage: 'url(/static/img/platform/'+routerPath4+'.png)'}"></i>
        </div>
      </div>
      <div class="control-box-fun">
        <span :class="index == nums4 ? 'active' : ''" v-for="(item,index) in list4" @click="list4ball(item,index)">{{item.title}}</span>
      </div>
    </div>
    <div class="bottom-banner" style="background-color: rgb(53, 200, 230);">
      <h3>让支付简单、方便和温暖</h3>
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
      nums1:0,
      list1:[
        {boximg:"levels-manage",title:'层级管理',path:'levels-manage-big',detail:"基于平台、代理、分销形态，实现对店铺、代理商、分销商的层级管理，严格限制不同层级的商户数据查看权限。"},
        {boximg:"message-manage",title:'信息管理',path:'message-manage-big',detail:"管理商户的基本信息、收款账号、渠道参数及其它必要配置。"},
      ],
      nums2:0,
      list2:[
        {boximg:"splitting-modal",title:'分润和模型',path:'splitting-modal-big',detail:"提供基于平台、代理、分销形态下的分润模型，覆盖主流分润场景。"},
        {boximg:"open-api",title:'开放 API',path:'open-api-big',detail:"开放分润接口，满足特殊场景下的分润需求。"},
      ],
      nums4:0,
      routerPath4:'platform-business',
      list4:[
        {title:'平台商业',path:'platform-business'},
        {title:'多级分销',path:'duojifenxiao'},
        {title:'代理加盟',path:'dailijiameng'},
      ],
      nums3:0,
      list3:[
        {boximg:"inside-reconciliation",title:"内部对账",detail:"定时核实内部账务数据，确保逻辑清晰和数据正确，为其他对账提供基础。",path:"inside-reconciliation-big"},
        {boximg:"business-reconciliation",title:"商户对账",detail:"实时反馈商户账务数据，方便商户及时了解账务和账户明细，让商户用得放心。",path:"business-reconciliation-big"},
        {boximg:"channel-reconciliation",title:"渠道对账",detail:"自动完成对账单的获取、标准化和核对，提供操作便捷地差错处理工具，为内部资金结算提供有力依据。",path:"channel-reconciliation-big"},
      ]
    };
  },
  methods: {
    contactus(){
      this.$router.push("/contactus");
    },
    list1ball(item,index){
      this.nums1 = index;
    },
    list2ball(item,index){
      this.nums2 = index;
    },
    list3ball(item,index){
      this.nums3 = index;
    },
    list4ball(item,index){
      this.nums4 = index;
      this.routerPath4 = item.path;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/platform.scss";
</style>
