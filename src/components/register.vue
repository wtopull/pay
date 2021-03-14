<template>
    <!-- 注册 -->
    <div class="login">
        <h4>欢 迎 注 册</h4>
        <ul>
            <li class="form-row">
                <input type="text" placeholder="输入你的手机号">
            </li>
            <li class="form-row">
                <input type="text" placeholder="手机验证码" style="width: 190px;">
                <span class="btn form-btn" style="width: 125px;">获取验证码</span>
            </li>
            <li class="form-row">
                <input type="text" placeholder="密码">
            </li>
            <li class="form-row">
                <input type="text" placeholder="确认密码">
            </li>
            <li class="form-row">
                <div class="checkbox-wrap">
                    <input type="checkbox" id="agree" class="checked">
                    <label for="agree"></label>
                </div>
                <div class="form-text">我已阅读并同意
                    <a>《服务协议》</a>和
                    <a>《隐私权协议》</a>
                </div>
            </li>
            <li class="form-row">
                <span class="btn submit">注 册</span>
            </li>
            <li class="form-row clearfix">
                <p class="bottom-text">没有账号？
                    <router-link to="/login">点此登录</router-link>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/login.scss";
</style>
