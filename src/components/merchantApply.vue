<template>
  <div class="merchantApply">
    <h3>申请开通商户</h3>
    <div class="container">
      <div class="form-row clearfix">
        <div class="col-6">
          <label class="label require">商户类型</label>
          <div class="form-line">
            <div class="radio-wrap" v-for="(item,index) in list1">
              <input type="radio" id="type1" value="1" :class="index == nums1 ? 'checked':''">
              <label :for="'type'+(index+1)" @click="tolist1(item,index)"></label>
              <label :for="'type'+(index+1)" @click="tolist1(item,index)">{{item}}</label>
            </div>
          </div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">行业类型</label>
          <div class="form-line">
            <div class="list-wrap list big-list">
              <i class="arrow-bottom"></i> <input placeholder="请选择" v-model="vbs" readonly="readonly" class="ellipsis" @click="showvbsball">
              <div class="list vb vb-visible" v-show="showvbs" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
                <div class="vb-content" style="overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                  <ul>
                    <li :data-index="index" v-for="(k,index) in vb" @click="vbball(k,index)">{{k}}</li>
                  </ul>
                </div>
                <div class="vb-dragger" style="position: absolute; height: 54px; top: 0px;">
                  <div class="vb-dragger-styler"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row clearfix">
        <div class="col-6 p-r">
          <label class="label require">商户名称</label>
          <div class="form-line"><input type="text" placeholder="请输入商户名称"></div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">商户网站</label>
          <div class="form-line"><input type="text" placeholder="请输入商户网站"></div>
        </div>
      </div>
      <div class="form-row">
        <label class="label require">省/市/区</label>
        <div class="form-line">
          <div class="list-wrap list">
            <i class="arrow-bottom"></i> <input placeholder="请选择省" value="provinces" v-model="provinces" readonly="readonly" class="ellipsis" @click="showprovinceball">
            <div class="list vb vb-visible" v-show="showprovince" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li :data-index="index" v-for="(k,index) in province" @click="provinceball(k,index)">{{k}}</li>
                </ul>
              </div>
              <div class="vb-dragger" style="position: absolute; height: 24px; top: 0px;">
                <div class="vb-dragger-styler"></div>
              </div>
            </div>
          </div>
          <div class="list-wrap list">
            <i class="arrow-bottom"></i> <input placeholder="请选择市" v-model="citys" readonly="readonly" class="ellipsis" @click="showcityball">
            <div class="list vb vb-invisible" v-show="showcity" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li :data-index="indexx" v-for="(y,indexx) in city" @click="cityball(y,indexx)">{{y}}</li>
                </ul>
              </div>
              <div class="vb-dragger" style="position: absolute; height: 0px; top: 0px;">
                <div class="vb-dragger-styler"></div>
              </div>
            </div>
          </div>
          <div class="list-wrap list">
            <i class="arrow-bottom"></i> <input placeholder="请选择区" value="countys" v-model="countys" readonly="readonly" class="ellipsis" @click="showcountyball">
            <div class="list vb vb-visible" v-show="showcounty" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li :data-index="indexxx" v-for="(e,indexxx) in county" @click="countyball(e,indexxx)">{{e}}</li>
                </ul>
              </div>
              <div class="vb-dragger" style="position: absolute; height: 47px; top: 0px;">
                <div class="vb-dragger-styler"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row p-r">
        <label class="label require">详细地址</label>
        <div class="form-line"><input type="text" placeholder="请输入详细地址"></div>
      </div>
    </div>
    <div class="container">
      <div class="form-row clearfix">
        <div class="col-6">
          <label class="label require">银行卡类型</label>
          <div class="form-line">
            <div class="radio-wrap" v-for="(item,index) in list2">
              <input type="radio" id="cardtype2" value="1" :class="index == nums2 ? 'checked':''">
              <label :for="'cardtype'+(index+1)" @click="tolist2(item,index)"></label>
              <label :for="'cardtype'+(index+1)" @click="tolist2(item,index)">{{item}}</label>
            </div>
          </div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">银行卡号</label>
          <div class="form-line"><input type="text" placeholder="请输入银行卡号"></div>
        </div>
      </div>
      <div class="form-row clearfix">
        <div class="col-6 p-r">
          <label class="label require">银行名称</label>
          <div class="form-line"><input type="text" placeholder="请输入银行名称"></div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">持卡人姓名</label>
          <div class="form-line"><input type="text" placeholder="请输入持卡人姓名"></div>
        </div>
      </div>
      <div class="form-row clearfix">
        <div class="col-6 p-r">
          <label class="label require">支行名称</label>
          <div class="form-line"><input type="text" placeholder="请输入支行名称"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="form-row clearfix">
        <div class="col-6 p-r">
          <label class="label require">联系人</label>
          <div class="form-line"><input type="text" placeholder="请输入联系人"></div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">联系电话</label>
          <div class="form-line"><input type="text" placeholder="请输入联系电话"></div>
        </div>
      </div>
      <div class="form-row clearfix">
        <div class="col-6 p-r">
          <label class="label require">联系QQ</label>
          <div class="form-line"><input type="text" placeholder="请输入联系QQ"></div>
        </div>
        <div class="col-6 p-r">
          <label class="label require">联系邮箱</label>
          <div class="form-line"><input type="text" placeholder="请输入联系邮箱"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="form-row">
        <label class="label require">附件</label>
        <div class="form-line">
          <div class="file-wrap">
            <label for="file0" class="no-file" style="background-image: url(&quot;&quot;);"></label>
            <span>营业执照</span>
            <form><input type="file" id="file0" accept="image/*"></form>
          </div>
          <div class="file-wrap">
            <label for="file1" class="no-file" style="background-image: url(&quot;&quot;);"></label>
            <span>法人身份证
              <strong>（正反面）</strong>
            </span>
            <form><input type="file" id="file1" accept="image/*"></form>
          </div>
          <div class="file-wrap">
            <label for="file2" class="no-file" style="background-image: url(&quot;&quot;);"></label>
            <span>组织机构</span>
            <form><input type="file" id="file2" accept="image/*"></form>
          </div>
        </div>
      </div>
      <div class="form-row">
        <label class="label"></label>
        <div class="form-line">
          <span class="btn">申请</span>
          <span class="btn" @click="tohome">暂时不开通</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {cascade} from '@/assets/js/cascade.js'//联动文件
export default {
  data() {
    return {
      nums1:0,
      list1:["企业","个人"],
      nums2:1,
      list2:["对公","对私"],
      vb:["服务","餐饮娱乐","医疗保健","美容美发","珠宝","酒店","数码产品","教育培训","体育运动","批发零售","服装业","制造业","旅游业","其它"],
      vbs:'',
      provinces:'',
      citys:'',
      countys:'',
      showvbs:false,
      showprovince:false,
      showcity:false,
      showcounty:false,
      province:'',//省
      city:'',//市
      county:'',//县
      a:'',//省的代号
      b:'',//市的代号
      c:'',//县的代号
    };
  }, 
  methods: {
    //省选择
    provinceball(k,index){
      this.provinces = k;
      this.a = index;
      this.showprovinceball();
    },
    //市选择
    cityball(k,index){
      this.citys = k;
      this.b = index;
      this.showcityball();
    },
    //市选择
    countyball(k,index){
      this.countys = k;
      this.c = index;
      this.showcountyball();
    },
    //省点击
    showprovinceball(){
      this.province = cascade['0']['0'];
      this.showprovince = !this.showprovince;
    },
    //市点击
    showcityball(){
      this.city = cascade['0'][this.a];
      if(this.provinces !== ''){
        this.showcity = !this.showcity;
      }
    },
    //县点击
    showcountyball(){
      this.county = cascade['0'][this.a+','+this.b]
      if(this.citys !== ''){
        this.showcounty = !this.showcounty;
      }
    },
    //行业类型选择、点击事件
    showvbsball(){
      this.showvbs = !this.showvbs;
    },
    //行业类型选择
    vbball(k,index){
      this.vbs = k;
      this.showvbsball();
    },
    //暂时不开通
    tohome() {
      this.$router.push("/");
    },
    //商户类型选择
    tolist1(item,index){
      this.nums1 = index;
    },
    //银行卡类型选择
    tolist2(item,index){
      this.nums2 = index;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/merchantApply.scss";
</style>
