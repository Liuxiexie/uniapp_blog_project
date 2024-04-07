"use strict";
const api_hot = require("../../api/hot.js");
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    this.loadHotTabs();
  },
  methods: {
    // 获取热搜文章类型
    async loadHotTabs() {
      const res = await api_hot.getHotTabs();
      console.log(res);
    }
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  const _easycom_my_tabs2 = common_vendor.resolveComponent("my-tabs");
  (_easycom_my_search2 + _easycom_my_tabs2)();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
const _easycom_my_tabs = () => "../../components/my-tabs/my-tabs.js";
if (!Math) {
  (_easycom_my_search + _easycom_my_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      placeholderText: _ctx.点击
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4aaa739e"], ["__file", "C:/前端学习/微信小程序学习/uniapp学习/案例1/imooc-blog/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
