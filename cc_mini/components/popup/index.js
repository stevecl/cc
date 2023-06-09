// components/popup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      value: '80%'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle() {
      this.triggerEvent('close')
    },
  },

  lifetimes: {
    attached: function() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
  
      this.animation = animation
      console.log(555, this.data.height)
      setTimeout(function() {
        animation.height(this.data.height).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 10)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
