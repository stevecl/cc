// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '2048',
  },
  toGame() {
    wx.navigateTo({
      url: '../2048/loading',
    })
  },
  onLoad() {
  }
})
