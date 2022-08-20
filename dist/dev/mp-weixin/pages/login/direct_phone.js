"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  (uButton + agreement)();
}
const uButton = () => "../components/button/universialButton.js";
const agreement = () => "../components/widget/agreement.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const post = common_vendor.ref({
      msg: "\u672C\u673A\u53F7\u7801\u4E00\u952E\u767B\u5F55",
      color: "pink"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          post: post.value
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-61809d02"], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/login/direct_phone.vue"]]);
wx.createPage(MiniProgramPage);
