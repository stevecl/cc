// pages/card/components/editText/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        value: this.data.text
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle(e) {
      let { type } = e.target.dataset
      let _ = {
        cancel: this.close.bind(this),
        confirm: this.submit.bind(this)
      }
      _[type] && _[type]()
    },

    bindKeyInput(e) {
      this.setData({
        value: e.detail.value
      })
    },

    submit() {
      console.log('submit', this)
      this.triggerEvent('submit', this.data.value)
    },

    close() {
      this.triggerEvent('close')
    },
  }
})
