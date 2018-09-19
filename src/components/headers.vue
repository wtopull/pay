<template>
  <div class="headers">
    <div class="navfixed" :class="$route.path == '/' || $route.path == '/aboutus' || $route.path == '/contactus' || $route.path == '/login' || $route.path == '/register' || $route.path =='/merchantApply' ? '' : 'fixed'">
      <div class="container top-bar clearfix">
        <router-link tag="i" to="/" :class="$route.path == '/' || $route.path == '/aboutus' || $route.path == '/contactus' || $route.path == '/login' || $route.path == '/register' || $route.path =='/merchantApply' ? '' : 'picture'"></router-link>
        <ul class="top-menu-left">
          <li class="menu-item" v-for="(item,index) in navs" @mouseover="selectStyle(index)" @mouseout="outStyle(index)" @click="toPath(item)">
            <span>{{item.name}}</span>
            <i v-if="index == 0||index ==1">∨</i>
            <ul class="sub-tab-menu" v-if="index == 0 && showul1">
              <li class="sub-menu-item has-icon" @click.stop="$router.push('/product')">聚合支付</li>
              <li class="sub-menu-item has-icon" @click.stop="$router.push('/platform')">多级商户系统</li>
              <li class="sub-menu-item has-icon" @click.stop="$router.push('/fund')">资金存管</li>
            </ul>
            <ul class="sub-tab-menu" v-if="index == 1 && showul2">
              <li class="sub-menu-item" @click.stop="$router.push('/agent')">多级代理分销</li>
              <li class="sub-menu-item" @click.stop="$router.push('/store')">多门店系统</li>
              <li class="sub-menu-item" @click.stop="$router.push('/retail')">新零售</li>
            </ul>
          </li>
        </ul>
        <ul class="top-menu-right">
          <li class="menu-item" @click="login">
            <span>登陆</span>
          </li>
          <li class="menu-item" @click="register">
            <span>注册</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showul1:false,
      showul2:false,
      navs: [
        { name: "产品", path: "/product" },
        { name: "解决方案", path: "/agent" },
        { name: "关于我们", path: "/aboutus" },
        { name: "联系我们", path: "/contactus" }
      ]
    };
  },
  methods: {
    selectStyle(index){
      if(index == 0){
        this.showul1 = true;
      }else if(index ==1){
        this.showul2 = true;
      }
    },
    outStyle(index){
      if(index == 0){
        this.showul1 = false;
      }else if(index ==1){
        this.showul2 = false;
      }
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    toPath(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/headers.scss";
</style>
