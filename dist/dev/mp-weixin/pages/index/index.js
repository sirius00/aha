"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const jump = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/direct_phone"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => jump())
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
