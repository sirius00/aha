"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      input_len: 6,
      input_val: "",
      isFocus: false
    };
  },
  methods: {
    onInput() {
      this.isFocus = true;
    },
    setInput(e) {
      this.input_val = e.detail.value;
      if (this.input_val.length == 6)
        ;
    },
    blurInput() {
      this.isFocus = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.input_len, (item, index, i0) => {
      return {
        a: index,
        b: $data.input_val.length >= index + 1 ? $data.input_val[index] : ""
      };
    }),
    b: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    c: $data.isFocus
  }, $data.isFocus ? {
    d: common_vendor.o((...args) => $options.blurInput && $options.blurInput(...args)),
    e: common_vendor.o([($event) => $data.input_val = $event.detail.value, (...args) => $options.setInput && $options.setInput(...args)]),
    f: $data.input_len,
    g: $data.input_val
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/cobb/Documents/demo-project/aha/src/pages/index/test.vue"]]);
wx.createPage(MiniProgramPage);
