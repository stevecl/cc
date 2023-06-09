// pages/card/edit.js
import MiniTouch from './MiniTouch'; // 1. 引入mina-touch
// console.log('MinaTouch', MinaTouch)

let items = [{
  type: 'bg',
  src: 'https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
  active: false
}]
let activeIndex = 0

let objToString = obj => {
  let str = ''
  for(let key in obj) {
    str += `${key}: ${obj[key]};`
  }
  // console.log('str', str)
  return str
}
let updateItemStyle = item => {
    let { color, top, left, angle, scale } = item
    item.style = objToString({
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      color,
      transform: `rotate(${angle}deg) scale(${scale})`,
    })
}

let events = {
  addContent(e) {
    let { type } = e.target.dataset
    let newItem = {
      type,
      src: 'https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
      text: type,
      x: 0, // 触摸时的位置信息
      y: 0,
      active: true, // 
      color: 'blue',
      scale: 1,
      angle: 0,
      top: 200,
      left: 100,
      style: ''
    }
    updateItemStyle(newItem)
    items.push(newItem)
    items[activeIndex].active = false
    activeIndex = items.length - 1
    this.updateView()
  },
}

Page({
  ...events,
  /**
   * 页面的初始数据
   */
  data: {
    textDialogShow: false,
    text: '',
    selectImage: false,
    dataList: items
  },
  updateText(e) {
    console.log('txt', e)
    items[activeIndex].text = e.detail
    this.updateView()
    this.close()
  },
  close() {
    this.setData({
      textDialogShow: false
    })
  },

  updateView() {
    this.setData({
      dataList: items
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this
    new MiniTouch(this, 'touch1', {
      touchStart: function (e) {
      },
      touchMove: function (e) { },
      touchEnd: function () { },
      touchCancel: function () {},
      tap: function (e) {
        let { index } = e.target.dataset
        console.log('Tap');
        if (index) {
          items[activeIndex].active = false
          items[index].active = true
          activeIndex = index
          _this.updateView()
        }
      }, //点按触发，覆盖下方3个点击事件，doubleTap时触发2次
      doubleTap: function () {
        console.log('doubleTap', activeIndex);
        if (items[activeIndex].type === 'text') {
          _this.setData({
            textDialogShow: !_this.data.textDialogShow,
            text: items[activeIndex].text
          })
        }
        if (items[activeIndex].type === 'image') {
          wx.chooseMedia({
            count: 1,
            mediaType: ['image'],
            sourceType: ['album', 'camera'],
            camera: 'back',
            success(res) {
              items[activeIndex].src = res.tempFiles[0].tempFilePath
              _this.updateView()
            }
          })
        }
      }, //双击屏幕触发
      longTap: function () {
        console.log('longTap', activeIndex);

      }, //长按屏幕750ms触发
      singleTap: function () {
        console.log('singleTap');
      },

      pressMove: function (evt) {
        //evt.deltaX和evt.deltaY代表在屏幕上移动的距离,evt.target可以用来判断点击的对象
        console.log('press', evt.deltaX,evt.deltaY);
        let { index } = evt.target.dataset
        if (index) {
          items[index].left =  items[index].left + evt.deltaX
          items[index].top = items[index].top + evt.deltaY
          updateItemStyle(items[index])
          _this.updateView()
        }
      },
    });
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