<template>
<!-- 登陆 -->
  <div class="login">
    <h4>欢 迎 登 录</h4>
    <ul>
      <li class="form-row">
        <input type="text" placeholder="输入你的手机号">
      </li>
      <li class="form-row">
        <input type="text" placeholder="密码">
      </li>
      <li class="form-row">
        <span class="btn submit disable">登 录</span>
      </li>
      <li class="form-row clearfix">
        <p class="bottom-text">没有账号？ <router-link to="/register">点此注册</router-link></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
@import '@/assets/scss/login.scss';
</style>
