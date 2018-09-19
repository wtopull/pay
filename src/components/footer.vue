<template>
  <div class="footer">
    <ul class="container clearfix">
      <li class="col-3" v-for="(item,index) in list">
        <dl>
          <dt>{{item.title}}</dt>
          <dd v-for="k in item.detail" @click="toPath(k)">{{k.name}}</dd>
        </dl>
      </li>
      <li class="col-3">
        <dl>
          <dt>业务咨询</dt>
          <dd>09:00 - 19:00（全年无休）</dd>
          <dd class="weixin">
            <i class="we-icon" @mouseover="qr=true " @mouseout="qr=false"></i>
            <i class="we-qr" v-show="qr"></i>
          </dd>
        </dl>
      </li>
    </ul>
    <div class="beian clearfix">
      <!-- <p>©Copyright Power By 澜湄支付 All Rights Reserved.</p> -->
      <p>©Copyright Power By 学习练习之用 All Rights Reserved.</p>
      <p>
        <!-- <a href="http://www.miitbeian.gov.cn" target='_blank'>蜀17031106号-1</a> -->
        <a href="http://www.miitbeian.gov.cn" target='_blank'>学习练习之用</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qr: false,
      list: [
        {
          title: "产品",
          detail: [
            { name: "聚合支付", path: "product" },
            { name: "多级商户系统", path: "platform" },
            { name: "资金存管", path: "fund" }
          ]
        },
        {
          title: "解决方案",
          detail: [
            { name: "多级代理分销", path: "agent" },
            { name: "多门店系统", path: "store" },
            { name: "新零售", path: "retail" }
          ]
        },
        {
          title: "公司",
          detail: [
            { name: "关于我们", path: "aboutus" },
            { name: "联系我们", path: "contactus" },
            { name: "", path: "" }
          ]
        }
      ]
    };
  },
  methods: {
    toPath(k){
      this.$router.push("/"+k.path);
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/footer.scss";
</style>
