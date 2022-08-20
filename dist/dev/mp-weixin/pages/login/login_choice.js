"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  uButton();
}
const uButton = () => "../components/button/universialButton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const post1 = common_vendor.ref({
      msg: "\u90AE\u7BB1\u767B\u5F55",
      color: "blue"
    });
    const post2 = common_vendor.ref({
      msg: "\u624B\u673A\u53F7\u767B\u5F55",
      color: "none"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          post: post1.value
        }),
        b: common_vendor.p({
          post: post2.value
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6297bf21"], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/login/login_choice.vue"]]);
wx.createPage(MiniProgramPage);
