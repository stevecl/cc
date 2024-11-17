export default {
  title: '店铺组',
  type: 1,

  style: {
    padding: '0 0 0 0',
    margin: '0 0 0 0',
  },

  contentSet: {
    bg: {
      bgColor: '#F5F8FB'
    },
    item: {
      bgColor: '#fff'
    },
    name: {
      show: true,
      fontSize: 20,
      color: '#2F3033',
    },
    adress: {
      show: true,
      fontSize: 12,
      color: '#626260',
    },
    star: {
      show: true,
      fontSize: 12,
      color: '#FC6635',
    },
    appraise: {
      show: true,
      fontSize: 12,
      color: '#626260',
    },
    per: {
      show: true,
      fontSize: 12,
      color: '#626260',
    },
    intro: {
      show: true,
      fontSize: 12,
      color: '#626260',
    },
  },

  imgRadiusSet: {
    item: 10,
    shop: 4,
    product: 4,
  },

  dataConfig: {
    type: 'product', // product: 固定商品 category: 分类商品
    selectList: [], // 固定商品 所选商品列表
    categoryId: '', // 所选 商品分类
    categoryName: '', // 分类名称
    showNum: 1, // 商品分类 显示商品个数
  }
}