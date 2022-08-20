"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    post: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const { post } = common_vendor.toRefs(props);
    const color = post.value.color;
    let style = "";
    if (color == "pink") {
      style = "cpink";
    } else if (color == "blue") {
      style = "cblue";
    } else {
      style = "cnone";
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(post).msg),
        b: common_vendor.n(common_vendor.unref(style))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a270f364"], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/components/button/universialButton.vue"]]);
wx.createComponent(Component);
