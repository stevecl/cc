// 链接所有 CODE 映射表
let data = [
	{
    code: 'TEST_HOME',
    name: '首页',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'diyPages/main/index/index'
	},
	{
    code: 'TEST_HSH',
    name: '首页',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'diyPages/main/hsh/index'
	},
	{
    code: 'TEST_MINE',
    name: '首页',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'diyPages/main/mine/index'
	},
  // ONLINE 线上商城
  {
    code: 'HOME',
    name: '首页',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'pages/main/home/index'
  },
  {
    code: 'ALL_GOODS',
    name: '全部商品(店铺首页)',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'pages/mall/pages/index/index'
  },
  {
    code: 'CLASS',
    name: '商品分类',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'pages/main/category/index'
  },
  {
    code: 'ONLINE_SEARCH',
    name: '搜索页(商城)',
    groupCode: 'ONLINE',
    groupName: '线上商城',
    path: 'pages/mall/pages/search/search'
  },
  // HSH 惠生活
  {
    code: 'HSH_HOME',
    name: '首页',
    groupCode: 'HSH',
    groupName: '惠生活',
    path: 'pages/main/city/index'
  },
  {
    code: 'HSH_GOODS_TAKEOUT',
    name: '商品分类（外卖）',
    groupCode: 'HSH',
    groupName: '惠生活',
    path: 'pages/main/city/city',
    query: {
      salesType: 'TAKEAWAY_PAYMENT'
    }
  },
  {
    code: 'HSH_GOODS_GROUP',
    name: '商品分类（团购）',
    groupCode: 'HSH',
    groupName: '惠生活',
    path: 'pages/main/city/city',
    query: {
      salesType: 'STORE_PAYMENT'
    }
  },
  {
    code: 'HSH_SEARCH',
    name: '搜索页',
    groupCode: 'HSH',
    groupName: '惠生活',
    path: 'pages/city/pages/search/search'
  },
  // MEMBER 会员中心
  {
    code: 'MEMBER_MAIN',
    name: '会员中心',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/main/mine/index/index'
  },
  {
    code: 'MEMBER_ORDER_ONLINE',
    name: '全部订单(线上商城)',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 0,
      current: 0
    }
  },
  {
    code: 'MEMBER_ORDER_ONLINE_UNPAID',
    name: '待付款订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 0,
      current: 1
    }
  },
  {
    code: 'MEMBER_ORDER_ONLINE_UNRECEIVE',
    name: '待收货订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 0,
      current: 2
    }
  },
  {
    code: 'MEMBER_ORDER_ONLINE_COMPLETE',
    name: '已完成订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 0,
      current: 3
    }
  },
  {
    code: 'MEMBER_ORDER_ONLINE_CANCEL',
    name: '已取消订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 0,
      current: 4
    }
  },
  {
    code: 'MEMBER_HDISCOUNT',
    name: '惠打折订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/activity/pages/huiDaZhe',
    query: {
      pageType: 'usermy'
    }
  },
  {
    code: 'MEMBER_ORDER_CITY',
    name: '全部订单(同城)',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 1,
      current: 0
    }
  },
  {
    code: 'MEMBER_ORDER_CITY_UNPAID',
    name: '待消费订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 1,
      current: 1
    }
  },
  {
    code: 'MEMBER_ORDER_CITY_COMPLETE',
    name: '已完成订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 1,
      current: 2
    }
  },
  {
    code: 'MEMBER_ORDER_CITY_CANCEL',
    name: '已取消订单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/order/pages/list',
    query: {
      type: 1,
      current: 3
    }
  },
  {
    code: 'MEMBER_GREEN_SCORE',
    name: '绿积分明细',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/pearl/detail',
    query: {
      pearlType: 'SETTLED'
    }
  },
  {
    code: 'MEMBER_GREEN_SCORE_WAIT',
    name: '待入账绿积分',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/pearl/grantProcess',
  },
  {
    code: 'MEMBER_GREEN_SCORE_DETAIL',
    name: '绿积分入账明细',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/pearl/grantDetail',
  },
  {
    code: 'MEMBER_EARNINGS',
    name: '我的收益',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/earning/earning',
  },
  {
    code: 'MEMBER_ADDRESS',
    name: '地址管理',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/address/index',
  },
  {
    code: 'MEMBER_RED_PACKET',
    name: '红包申请提现',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/redPacket/withdraw',
  },
  {
    code: 'MEMBER_COLLECT',
    name: '我的收藏',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/collect/collect',
  },
  {
    code: 'MEMBER_WITHDRAW',
    name: '提现明细',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/earning/withdraw',
  },
  {
    code: 'COUPON_CENTER',
    name: '领券中心',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/coupon/receive',
  },
  {
    code: 'MEMBER_ALI',
    name: '支付宝买单',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: '',
  },
  {
    code: 'MEMBER_BANKCARD',
    name: '我的银行卡',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/bankcards/bankcards',
  },
  {
    code: 'COUPONS_LIST',
    name: '我的卡券',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/coupon/coupon',
  },
  {
    code: 'MEMBER_CONTRIBUTION',
    name: '我的贡献值',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/pearl/pearl',
  },
  {
    code: 'TASK_CENTER_HOME_PAGE',
    name: '福利中心(任务中心)',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/redPacket/rainingRedPacket',
  },
  {
    code: 'MEMBER_SERVICE',
    name: '联系客服',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/kfchat/index',
    query: {
      type: 'kf'
    }
  },
  {
    code: 'DAILY_CHECK_IN',
    name: '签到',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/sign/sign',
  },
  {
    code: 'MEMBER_CONTACT_PLATFORM',
    name: '联系平台',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/kfchat/index',
    query: {
      type: 'plat'
    }
  },
  {
    code: 'MEMBER_SETTING',
    name: '设置',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/setting/index',
  },
  {
    code: 'MEMBER_INVITE',
    name: '邀请好友',
    groupCode: 'MEMBER',
    groupName: '会员中心',
    path: 'pages/mine/pages/invitation/invitation',
  },
]

export const getLinkByCode = linkObj => {
	let { code, query = {} } = linkObj
	if (code === 'CUSTOM_PAGE') {
		return 'diyPages/main/custom/index?id=' + query.id
	}
	let item = data.find(obj => obj.code === code)
	return item?.path
}