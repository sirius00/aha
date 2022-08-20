"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  uButton();
}
const uButton = () => "../components/button/universialButton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const post = common_vendor.ref({
      msg: "\u7EE7\u7EED",
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
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-385d949e"], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/login/login_phone.vue"]]);
wx.createPage(MiniProgramPage);
