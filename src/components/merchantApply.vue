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
              <i class="arrow-bottom"></i> <input placeholder="请选择" readonly="readonly" class="ellipsis">
              <div class="list vb vb-visible" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
                <div class="vb-content" style="display: block; overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                  <ul>
                    <li data-index="0">服务</li>
                    <li data-index="1">餐饮娱乐</li>
                    <li data-index="2">医疗保健</li>
                    <li data-index="3">美容美发</li>
                    <li data-index="4">珠宝</li>
                    <li data-index="5">酒店</li>
                    <li data-index="6">数码产品</li>
                    <li data-index="7">教育培训</li>
                    <li data-index="8">体育运动</li>
                    <li data-index="9">批发零售</li>
                    <li data-index="10">服装业</li>
                    <li data-index="11">制造业</li>
                    <li data-index="12">旅游业</li>
                    <li data-index="13">其它</li>
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
            <i class="arrow-bottom"></i> <input placeholder="请选择省" readonly="readonly" class="ellipsis">
            <div class="list vb vb-visible" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="display: block; overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li data-index="0">北京市</li>
                  <li data-index="1">天津市</li>
                  <li data-index="2">河北省</li>
                  <li data-index="3">山西省</li>
                  <li data-index="4">内蒙古自治区</li>
                  <li data-index="5">辽宁省</li>
                  <li data-index="6">吉林省</li>
                  <li data-index="7">黑龙江省</li>
                  <li data-index="8">上海市</li>
                  <li data-index="9">江苏省</li>
                  <li data-index="10">浙江省</li>
                  <li data-index="11">安徽省</li>
                  <li data-index="12">福建省</li>
                  <li data-index="13">江西省</li>
                  <li data-index="14">山东省</li>
                  <li data-index="15">河南省</li>
                  <li data-index="16">湖北省</li>
                  <li data-index="17">湖南省</li>
                  <li data-index="18">广东省</li>
                  <li data-index="19">广西壮族自治区</li>
                  <li data-index="20">海南省</li>
                  <li data-index="21">重庆市</li>
                  <li data-index="22">四川省</li>
                  <li data-index="23">贵州省</li>
                  <li data-index="24">云南省</li>
                  <li data-index="25">西藏自治区</li>
                  <li data-index="26">陕西省</li>
                  <li data-index="27">甘肃省</li>
                  <li data-index="28">青海省</li>
                  <li data-index="29">宁夏回族自治区</li>
                  <li data-index="30">新疆维吾尔自治区</li>
                </ul>
              </div>
              <div class="vb-dragger" style="position: absolute; height: 24px; top: 0px;">
                <div class="vb-dragger-styler"></div>
              </div>
            </div>
          </div>
          <div class="list-wrap list">
            <i class="arrow-bottom"></i> <input placeholder="请选择市" readonly="readonly" class="ellipsis">
            <div class="list vb vb-invisible" style="width: 100%; height: 32px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="display: block; overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li data-index="0">天津市</li>
                </ul>
              </div>
              <div class="vb-dragger" style="position: absolute; height: 0px; top: 0px;">
                <div class="vb-dragger-styler"></div>
              </div>
            </div>
          </div>
          <div class="list-wrap list">
            <i class="arrow-bottom"></i> <input placeholder="请选择区" readonly="readonly" class="ellipsis">
            <div class="list vb vb-visible" style="width: 100%; height: 152px; left: 0px; position: relative; overflow: hidden;">
              <div class="vb-content" style="display: block; overflow: hidden scroll; height: 100%; width: calc(100% + 17px);">
                <ul>
                  <li data-index="0">和平区</li>
                  <li data-index="1">河东区</li>
                  <li data-index="2">河西区</li>
                  <li data-index="3">南开区</li>
                  <li data-index="4">河北区</li>
                  <li data-index="5">红桥区</li>
                  <li data-index="6">东丽区</li>
                  <li data-index="7">西青区</li>
                  <li data-index="8">津南区</li>
                  <li data-index="9">北辰区</li>
                  <li data-index="10">武清区</li>
                  <li data-index="11">宝坻区</li>
                  <li data-index="12">滨海新区</li>
                  <li data-index="13">宁河县</li>
                  <li data-index="14">静海县</li>
                  <li data-index="15">蓟县</li>
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
export default {
  data() {
    return {
      nums1:0,
      list1:["企业","个人"],
      nums2:1,
      list2:["对公","对私"],
    };
  },
  methods: {
    tohome() {
      this.$router.push("/");
    },
    tolist1(item,index){
      this.nums1 = index;
    },
    tolist2(item,index){
      this.nums2 = index;
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/merchantApply.scss";
</style>
