"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = `https://api.imooc-blog.lgdsunday.club/api/`;
function request({ url, data, method }) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + url,
      data,
      header: {
        icode: "helloqianduanxunlianying"
      },
      method,
      success: ({ data: data2 }) => {
        if (data2.success) {
          resolve(data2);
        } else {
          common_vendor.index.showToast({
            title: data2.message,
            icon: "none",
            mast: true,
            duration: 3e3
          });
          reject(data2.message);
        }
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
}
exports.request = request;
