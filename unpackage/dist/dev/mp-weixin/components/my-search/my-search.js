"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  name: "my-search",
  props: {
    placeholderText: {
      type: String,
      default: "搜索"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.t($props.placeholderText)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cd45b42a"], ["__file", "C:/前端学习/微信小程序学习/uniapp学习/案例1/imooc-blog/components/my-search/my-search.vue"]]);
wx.createComponent(Component);
