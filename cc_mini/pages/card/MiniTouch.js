const DEFAULT_OPTIONS = {
  touchStart: function () {},
  touchMove: function () {},
  touchEnd: function () {},
  touchCancel: function () {},
  tap: function () {},
  doubleTap: function () {},
  longTap: function () {},
  singleTap: function () {},
  pressMove: function () {},
}
export default class MiniTouch {
  constructor(_page, name, option = {}) {
    // 点击 时差
    this.delta = null;
    this.last = null;
    this.now = null;
    // start 开始位置 and move 过程中位置
    this.x1 = this.x2 = this.y1 = this.y2 = null;
    this.isDoubleTap = false;
    this.tapTimeout = null;
    this.singleTapTimeout = null;
    this.longTapTimeout = null;
    this.preTapPosition = {
      x: null,
      y: null
    };

    try {
      if (this._checkBeforeCreate(_page, name)) {
        this._name = name
        this._option = {
          ...DEFAULT_OPTIONS,
          ...option
        }
        _page[name] = this
        this._bindFunc(_page)
      }
    } catch (error) {
      console.error(error)
    }
  }
  _checkBeforeCreate(_page, name) {
    if (!_page || !name) {
      throw new Error('MinaTouch实例化时，必须传入page对象和引用名')
    }
    if (_page[name]) {
      throw new Error('MinaTouch实例化error： ' + name + ' 已经存在page中')
    }
    return true
  }
  _bindFunc(_page) {
    let funcNames = ['start', 'move', 'end', 'cancel']
    for (let funcName of funcNames)
      _page[this._name + '.' + funcName] = this[funcName].bind(this)
  }
  start(evt) {
    console.log('start', evt.touches.length)
    if (!evt.touches) return;
    this.now = Date.now();
    this.x1 = evt.touches[0].pageX == null ? evt.touches[0].x : evt.touches[0].pageX;
    this.y1 = evt.touches[0].pageY == null ? evt.touches[0].y : evt.touches[0].pageY;
    this.delta = this.now - (this.last || this.now);
    this._option.touchStart(evt);
    if (this.preTapPosition.x !== null) {
      this.isDoubleTap = (this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30);
    }
    this.preTapPosition.x = this.x1;
    this.preTapPosition.y = this.y1;
    this.last = this.now;
    let len = evt.touches.length;
    if (len > 1) {
      this._cancelLongTap();
      this._cancelSingleTap();
    }
    this.longTapTimeout = setTimeout(function () {
      evt.type = "longTap";
      this._option.longTap(evt);
    }.bind(this), 750);
  }
  move(evt) {
    if (!evt.touches) return;
    let len = evt.touches.length,
      currentX = evt.touches[0].pageX == null ? evt.touches[0].x : evt.touches[0].pageX,
      currentY = evt.touches[0].pageY == null ? evt.touches[0].y : evt.touches[0].pageY;
    this.isDoubleTap = false;
    if (len > 1) {

    } else {
      if (this.x2 !== null) {
        evt.deltaX = currentX - this.x2;
        evt.deltaY = currentY - this.y2;
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }
      this._option.pressMove(evt);
    }
    this._option.touchMove(evt);
    this._cancelLongTap();
    this.x2 = currentX;
    this.y2 = currentY;
    if (len > 1) {
      // evt.preventDefault();
    }
  }
  end(evt) {
    if (!evt.changedTouches) return;
    this._cancelLongTap();
    let self = this;
    this._option.touchEnd(evt);
    this.tapTimeout = setTimeout(function () {
      evt.type = "tap";
      self._option.tap(evt);
      // trigger double tap immediately
      if (self.isDoubleTap) {
        evt.type = "doubleTap";
        self._option.doubleTap(evt);
        clearTimeout(self.singleTapTimeout);
        self.isDoubleTap = false;
      }
    }, 0)

    if (!self.isDoubleTap) {
      self.singleTapTimeout = setTimeout(function () {
        self._option.singleTap(evt);
      }, 250);
    }

    this.x1 = this.x2 = this.y1 = this.y2 = null;
  }
  cancel(evt) {
    clearTimeout(this.singleTapTimeout);
    clearTimeout(this.tapTimeout);
    clearTimeout(this.longTapTimeout);
    this._option.touchCancel(evt);
  }
  _cancelLongTap() {
    clearTimeout(this.longTapTimeout);
  }

  _cancelSingleTap() {
    clearTimeout(this.singleTapTimeout);
  }

  destroy() {
    if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
    if (this.tapTimeout) clearTimeout(this.tapTimeout);
    if (this.longTapTimeout) clearTimeout(this.longTapTimeout);

    this._option.touchStart = null;
    this._option.touchMove = null;
    this._option.touchEnd = null;
    this._option.tap = null;
    this._option.singleTap = null;
    this._option.longTap = null;
    this._option.doubleTap = null;
    this._option.pressMove = null;
    this._option.touchCancel = null;

    this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.touchStart = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = null;

    return null;
  }
}
