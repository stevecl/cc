// pages/test/index.js
let events = {
  touchStart(e) {
    const touches = e.touches
    const { translateX, translateY } = this.data
    const { pageX, pageY } = touches[0]
    this.data.startMove = {
      x: pageX - translateX,
      y: pageY - translateY
    }
    this.data.startTouches = touches
  },
  touchMove(e) {
    const touches = e.touches
    const { pageX: onePageX, pageY: onePageY } = touches[0]
    const { startMove, scale, distance: oldDistance, startTouches, oldRotate } = this.data
    if (touches.length === 2 && startTouches.length === 2) {
      // 双指缩放
      const { pageX: twoPageX, pageY: twoPageY } = touches[1]
      // 求出当前双指距离
      const distance = Math.sqrt((twoPageX - onePageX) ** 2 + (twoPageY - onePageY) ** 2)
      let rotate = this.getAngle(touches[0], touches[1]) - this.getAngle(startTouches[0], startTouches[1]) + oldRotate
      // 如果大于360度，就减去360
      rotate = rotate > 360 ? rotate - 360 : rotate
        this.data.distance = distance
        this.setData({
          scale: scale * (distance / (oldDistance || distance)),
          rotate
        })
    } else if (startTouches.length !== 2) {
      // 单指拖拽
      this.setData({
        translateX: onePageX - startMove.x,
        translateY: onePageY - startMove.y
      })
    }
  },
  touchEnd() {
    // 保存当前旋转角度
    this.data.oldRotate = this.data.rotate
  },
  getAngle(p1, p2) {
    const x = p1.pageX - p2.pageX
    const y = p1.pageY- p2.pageY
    return Math.atan2(y, x) * 180 / Math.PI
  }
}

Page({
  ...events,
  /**
   * 页面的初始数据
   */
  data: {
    translateX: 0, // 位移x坐标 单位px
    translateY: 0, // 位移y坐标 单位px
    distance: 0, // 双指接触点距离
    scale: 1, // 缩放倍数
    rotate: 0, // 旋转角度
    oldRotate: 0, // 上一次旋转停止后的角度
    startMove: { // 起始位移距离
      x: 0,
      y: 0,
    },
    startTouches: [] // 起始点touch数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})