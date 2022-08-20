"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const flag = common_vendor.ref(false);
    common_vendor.ref(false);
    const agree = () => {
      flag.value = !flag.value;
    };
    const agreement = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(agree),
        b: common_vendor.o(($event) => agreement())
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d1def04"], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/components/widget/agreement.vue"]]);
wx.createComponent(Component);
