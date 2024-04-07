"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-tabs",
  props: {
    // 1. 可以在父组件中定制样式
    config: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 2. 可以在父组件中指定数据
    tabData: {
      type: Object,
      default: () => {
        return [];
      }
    },
    // 3. 可以在父组件中指定选中项
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/前端学习/微信小程序学习/uniapp学习/案例1/imooc-blog/components/my-tabs/my-tabs.vue"]]);
wx.createComponent(Component);
