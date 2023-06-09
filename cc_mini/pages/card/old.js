// pages/card/edit.js
import MinaTouch from './touch'; // 1. 引入mina-touch
// console.log('MinaTouch', MinaTouch)
let zoomFlag = false //定义 缩放事件 节流阀,防止一次缩放触发两次缩放事件
let distance = 0 //记录手指移动距离
let scale = 1 //定义初始化的页面缩放大小
let newScale = 0 //记录新的页面缩放大小
let items = [{
  type: 'bg',
  src: 'https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675',
  active: false
}]
let activeIndex = 0
let startX = 0, startY = 0, currentX = 0, currentY = 0;

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
    new MinaTouch(this, 'touch1', {
      touchStart: function (e) {
        if (e.touches.length != 1) {
          //---------------------记录缩放事件信息---------------------
          // 当两根手指放上去的时候，将距离(distance)初始化。
          let xMove = e.touches[1].clientX - e.touches[0].clientX;
          let yMove = e.touches[1].clientY - e.touches[0].clientY;
          //计算开始触发两个手指坐标的距离
          distance = Math.sqrt(xMove * xMove + yMove * yMove);
        } else {

          let { index = '' } = e.target.dataset
          if (index) {
            items[index].x = items[index].left
            items[index].y = items[index].top
            
            startX = e.touches[0].clientX
            startY = e.touches[0].clientY
          } else {
            items[activeIndex].active = false
            activeIndex = 0
            _this.updateView()
          }
        }

        // console.log(startX, startY, e)
      },
      touchMove: function (e) {
        if (e.touches.length != 1) {
          //双手指运动 x移动后的坐标和y移动后的坐标
          let xMove = e.touches[1].clientX - e.touches[0].clientX;
          let yMove = e.touches[1].clientY - e.touches[0].clientY;
          //双手指运动新的 ditance
          let newDistance = Math.sqrt(xMove * xMove + yMove * yMove);
          //计算移动的过程中实际移动了多少的距离
          let distanceDiff = newDistance - distance;
          newScale = scale + 0.005 * distanceDiff
          // 打开缩放监听
          zoomFlag = true
        } else {
          currentX = e.touches[0].clientX
          currentY = e.touches[0].clientY
          let { index } = e.target.dataset
          if (index === activeIndex) {
            // 滑动
            let diff_l = currentX - startX, diff_t = currentY - startY
            items[index].left =  items[index].x + diff_l
            items[index].top = items[index].y + diff_t
            updateItemStyle(items[index])
            _this.updateView()
          }
        }
      },
      touchEnd: function () {
        if (zoomFlag) {
          if (newScale > 1.3) {
              console.log("放大了");
          } else if (newScale < 0.7) {
              console.log("缩小了");
          }
          // 关闭缩放监听
          zoomFlag = false
      }
      },
      touchCancel: function () {},
      multipointStart: function () {
        console.log('multipointStart');
      }, //一个手指以上触摸屏幕触发
      multipointEnd: function () {
        console.log('multipointEnd');
      }, //当手指离开，屏幕只剩一个手指或零个手指触发(一开始只有一根手指也会触发)
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
      }, //单击屏幕触发，包括长按
      rotate: function (evt) {
        //evt.angle代表两个手指旋转的角度
        console.log('rotate:' + evt.angle);
        items[activeIndex].angle = evt.angle
        _this.updateView()
      },
      pinch: function (evt) {
        //evt.zoom代表两个手指缩放的比例(多次缩放的累计值),evt.singleZoom代表单次回调中两个手指缩放的比例
        // items[activeIndex].scale = evt.zoom
        // _this.updateView()
        console.log('pinch:' + evt.zoom);
      },
      pressMove: function (evt) {
        //evt.deltaX和evt.deltaY代表在屏幕上移动的距离,evt.target可以用来判断点击的对象
        console.log(evt.target);
        console.log(evt.deltaX);
        console.log(evt.deltaY);
      },
      swipe: function (evt) {
        //在touch结束触发，evt.direction代表滑动的方向 ['Up','Right','Down','Left']
        console.log('swipe:' + evt.direction);
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