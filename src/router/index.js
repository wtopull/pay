import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import aboutus from '@/components/aboutus'
import product from '@/components/product'
import platform from '@/components/platform'
import fund from '@/components/fund'
import contactus from '@/components/contactus'
import agent from '@/components/agent'
import store from '@/components/store'
import retail from '@/components/retail'
import merchantApply from '@/components/merchantApply'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: "赚支付--首页"
      }
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent,
      meta: {
        title: "赚支付--多级代理分销"
      }
    },
    {
      path: '/retail',
      name: 'retail',
      component: retail,
      meta: {
        title: "赚支付--新零售"
      }
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      meta: {
        title: "赚支付--多门店系统"
      }
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus,
      meta: {
        title: "赚支付--联系我们"
      }
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      meta: {
        title: "赚支付--聚合支付"
      }
    },
    {
      path: '/platform',
      name: 'platform',
      component: platform,
      meta: {
        title: "赚支付--多级商户系统"
      }
    },
    {
      path: '/fund',
      name: 'fund',
      component: fund,
      meta: {
        title: "赚支付--资金存管"
      }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus,
      meta: {
        title: "赚支付--关于我们"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        title: "赚支付--注册"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: "赚支付--登陆"
      }
    },
    {
      path: '/merchantApply',
      name: 'merchantApply',
      component: merchantApply,
      meta: {
        title: "赚支付--开通商户申请"
      }
    }
  ]
})
