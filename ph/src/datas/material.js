// 商品类
const component_goods =   {
  name: '商品类',
  data: [
    {
      name: '商品组',
      icon: 'goods.png',
      component: 'goods',
    },
    {
      name: '选项卡',
      icon: 'tabbar.png',
      component: 'goodsTabbar',
    },
    {
      name: '猜你喜欢',
      icon: 'guess.png',
      component: 'goodsLikes',
    },
    {
      name: '商品排行',
      icon: 'goodsRanking.png',
      component: 'goodsRanking',
    },
    {
      name: '积分商城',
      icon: 'creditshop.png',
      component: 'goodsScore',
    }
  ]
}

// 图文类
const component_image = {
  name: '图文类 ',
  data: [
    {
      name: '搜索框',
      icon: 'search.png',
      component: 'search',
    },
    {
      name: '图片轮播',
      icon: 'banner.png',
      component: 'swiper',
    },
    {
      name: '图片(热区)',
      icon: 'picture.png',
      component: 'singleChart',
    },
    {
      name: '图片展播',
      icon: 'pictures.png',
      component: 'pictureShow',
    },
    {
      name: '列表导航',
      icon: 'listmenu.png',
      component: 'listMenu',
    },
    {
      name: '辅助线',
      icon: 'line.png',
      component: 'assistLine',
    },
    {
      name: '标题栏',
      icon: 'title.png',
      component: 'title',
    },
    {
      name: '辅助空白',
      icon: 'blank.png',
      component: 'assistBlank',
    },
    {
      name: '按钮组',
      icon: 'menu.png',
      component: 'buttons',
    },
    {
      name: '视频播放',
      icon: 'video.png',
      component: 'video',
    },
    {
      name: '浮动按钮',
      icon: 'float.png',
      unique: true,
      component: 'floatButtons',
    },
  ]
}

// 用户信息组
const component_member = {
  name: '会员中心',
  // permission: ['MEMBER_CENTER'],
  data: [
    {
      name: '用户信息组',
      icon: 'member.png',
      unique: true,
      component: 'memberCenter',
    },
    {
      name: '订单组',
      icon: 'search.png',
      component: 'order',
    },
    {
      name: '店铺组',
      icon: 'search.png',
      component: 'shop',
    },
    {
      name: '优惠券',
      icon: 'coupon.png',
      component: 'coupon',
    },
  ]
}

export default [
  component_goods,
  component_image,
  component_member
]